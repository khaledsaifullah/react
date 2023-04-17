import React, { FC, useState, useEffect } from 'react'
import { Form, Input, Row, Col, Select, DatePicker, TimePicker, Spin, Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import { CONSTANT_COMMON } from '../../../../../../constants';
import { DateTimeUtils } from '../../../../../../utils';
import { useCommonConfigurationTypeList } from '../../../../../../hooks/lists/useCommonConfigurationTypeList';
import { useLang } from '../../../../../../hooks/useLang';
import { CommonConfigurationTypeApi } from '../../../../../../api';

const formItemLayout = {
   labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
   },
   wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
   },
};

const ChangeDateForm: FC<any> = (props) => {
   const { t } = useTranslation();
   const { loadingCommonConfigurationTypeList, commonConfigurationTypeList } = useCommonConfigurationTypeList();
   const { lang } = useLang();

   const { formRef, loading, checkAvailabilityStatus, checkAvailability, handleCheckAvailability, checkForDurationType, itemData, initialValues, handleChange, handleSubmit, handleSubmitFailed } = props;

   const [loadingCommonConfigurationTypeInfo, setLoadingCommonConfigurationTypeInfo] = useState(false);
   const [selectedCommonConfigurationTypeInfo, setSelectedCommonConfigurationTypeInfo] = useState<any>({});


   const onChange = (fieldName: any, value: any): any => {
      handleCheckAvailability(fieldName, value)
   }

   useEffect(() => {
      if (checkAvailability?.timeSlot) {
         loadCommonConfigurationTypeById(checkAvailability?.timeSlot)
      }
   }, [checkAvailability?.timeSlot])

   // Load Common configuration type value
   const loadCommonConfigurationTypeById = (id): Promise<any> => {
      return new Promise((resolve, reject) => {
         setLoadingCommonConfigurationTypeInfo(true);
         CommonConfigurationTypeApi.getById(id)
            .then(res => {
               setSelectedCommonConfigurationTypeInfo(res.data);
               setLoadingCommonConfigurationTypeInfo(false);
               resolve(res.data);
            })
            .catch(err => {
               setSelectedCommonConfigurationTypeInfo({});
               setLoadingCommonConfigurationTypeInfo(false);
               reject(err);
            });
      });
   }

   return (
      <>
         {loading && (
            <div className="text-center">
               <Spin className="d-inline-block" />
            </div>
         )}
         {!loading && (
            <>
               <Form
                  hidden={!checkAvailabilityStatus.isShowFormItem}
                  {...formItemLayout}
                  form={formRef}
                  name="exampleForm"
                  scrollToFirstError={true}
                  initialValues={initialValues}
                  onValuesChange={handleChange}
                  onFinish={handleSubmit}
                  onFinishFailed={handleSubmitFailed}
               >
                  <Row gutter={[16, 0]}>
                     <Col xs={24} md={12}>
                        <Form.Item
                           label={t("Booking Form")}
                           name="booking_from"
                        >
                           <DatePicker
                              style={{ width: "100%" }}
                              placeholder={t('Select Date')}
                              format={CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT}
                              value={checkAvailability?.bookingFrom}
                              onChange={(date, dateRange) => onChange("booking_from", dateRange)}
                           />
                        </Form.Item>
                     </Col>
                     <Col xs={24} md={12}>
                        <Form.Item
                           label={t("Booking To")}
                           name="booking_to"
                        >
                           <DatePicker
                              style={{ width: "100%" }}
                              placeholder={t('Select Date')}
                              format={CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT}
                              value={checkAvailability?.bookingTo}
                              onChange={(date, dateRange) => onChange("booking_to", dateRange)}
                           />
                        </Form.Item>
                     </Col>
                     <Col xs={24} md={12} hidden={!checkForDurationType.isTimeSlot}>
                        <Form.Item label={t("Time Slot")} name="time_slot" >
                           <Select
                              placeholder={t("-- Select --")}
                              style={{ width: "100%" }}
                              showSearch
                              allowClear
                              optionFilterProp="children"
                              dropdownMatchSelectWidth={100}
                              loading={loadingCommonConfigurationTypeList}
                              filterOption={(input: any, option: any) =>
                                 (option?.label ?? "")?.toLowerCase()?.indexOf(input?.toLowerCase()) >= 0 || (option?.label ?? "")?.toUpperCase()?.indexOf(input?.toUpperCase()) >= 0
                              }
                              // value={checkAvailability?.timeSlot}
                              onChange={(value) => onChange("time_slot", value)}
                              options={commonConfigurationTypeList?.filter((config: any) => config.type === "TIME_SLOT")?.map((item: any) => ({
                                 value: item.id, label: lang === "en" ? item.name_en : item.name_bn,
                              }))}
                           />
                        </Form.Item>
                     </Col>
                     <Col xs={24} md={12} hidden={!checkForDurationType.isTimeDuration}>
                        <Form.Item
                           label={t("Start Time")}
                           name="start_time"
                        >
                           <TimePicker
                              use12Hours
                              placeholder={t('Select Time')}
                              format={CONSTANT_COMMON.DATE_PICKER_TIME_FORMAT_WITH_AM_PM}
                              value={checkAvailability?.startTime}
                              onChange={(time, timeRange) => onChange("start_time", timeRange)}
                           />
                        </Form.Item>
                     </Col>
                     <Col xs={24} md={12} hidden={!checkForDurationType.isTimeDuration}>
                        <Form.Item
                           label={t("End Time")}
                           name="end_time"
                        >
                           <TimePicker
                              use12Hours
                              placeholder={t('Select Time')}
                              format={CONSTANT_COMMON.DATE_PICKER_TIME_FORMAT_WITH_AM_PM}
                              value={checkAvailability?.endTime}
                              onChange={(time, timeRange) => onChange("end_time", timeRange)}
                           />
                        </Form.Item>
                     </Col>
                  </Row>
               </Form>
               <div className='border border-1 rounded px-3 py-3 bg-white' hidden={!checkAvailabilityStatus.isAvailable}>
                  <Row className="current-date">
                     <Col xs={24} md={14}>
                        <h2 className='h6 m-0 p-0 lh-1 mb-4'>{t("Current Dates ")}</h2>
                        <div className='d-flex '>
                           <div className='pe-2'>
                              <p className='p-0 m-0 fw-bold'>{t('Booking From')}</p>
                              <p>{DateTimeUtils.formatDate(itemData?.start_date, CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT)}</p>
                           </div>
                           <div className='text-end ps-2 borderleft'>
                              <p className='p-0 m-0 fw-bold'>{t('Booking To')}</p>
                              <p>{DateTimeUtils.formatDate(itemData?.end_date, CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT)}</p>
                           </div>

                           {itemData?.time_slot ? (
                              <div className='ps-2'>
                                 <p className='p-0 m-0 fw-bold'>{t("Time Slot")}</p>
                                 <p>{lang == "en" ? itemData?.time_slot_name_en : itemData?.time_slot_name_bn}</p>
                              </div>
                           ) : null}
                           {itemData?.duration_type == "TIME_DURATION" ? (
                              <>
                                 <div className='d-flex'>
                                    <div className='ps-2'>
                                       <p className='p-0 m-0 fw-bold'>{t('Start Time')}</p>
                                       <p>{DateTimeUtils.timeConvertAMPM(itemData?.start_time)}</p>
                                    </div>
                                    <div className='ps-2'>
                                       <p className='p-0 m-0 fw-bold'>{t('End Time')}</p>
                                       <p>{DateTimeUtils.timeConvertAMPM(itemData?.end_time)}</p>
                                    </div>
                                 </div>
                              </>
                           ) : null}
                        </div>
                     </Col>
                     <Col xs={24} md={2}><div className='divider-horizontal'>&nbsp;</div></Col>
                     <Col xs={24} md={8} className='current-rent'>
                        <div className='d-flex justify-content-between mt-4'>
                           <div className="holiday-rent">
                              <h4 className='fw-bold p-0 m-0'>{t("Holiday Rent")}</h4>
                              <p>{itemData?.accommodation_information?.holiday_rent}</p>
                           </div>
                           <div className="working-day-rent text-end ps-2">
                              <h4 className='fw-bold p-0 m-0'>{t("Working day Rent")}</h4>
                              <p>{itemData?.accommodation_information?.working_day_rent}</p>
                           </div>
                        </div>
                     </Col>
                  </Row>
                  <Divider />
                  <Row className="current-date">
                     <Col xs={24} md={14}>
                        <h2 className='h6 m-0 p-0 lh-1 mb-4'>{t("New Dates ")}</h2>
                        <div className='d-flex '>
                           <div className='pe-2'>
                              <p className='p-0 m-0 fw-bold'>{t('Booking From')}</p>
                              <p>{DateTimeUtils.formatDate(checkAvailability?.bookingFrom, CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT)}</p>
                           </div>
                           <div className='text-end ps-2 borderleft'>
                              <p className='p-0 m-0 fw-bold'>{t('Booking To')}</p>
                              <p>{DateTimeUtils.formatDate(checkAvailability?.bookingTo, CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT)}</p>
                           </div>

                           {checkAvailability?.time_slot ? (
                              <div className='ps-2'>
                                 <p className='p-0 m-0 fw-bold'>{t("Time Slot")}</p>
                                 <p>{lang == "en" ? selectedCommonConfigurationTypeInfo?.name_en : selectedCommonConfigurationTypeInfo?.name_bn}</p>
                              </div>
                           ) : null}
                           {checkAvailability?.duration_type == "TIME_DURATION" ? (
                              <>
                                 <div className='d-flex'>
                                    <div className='ps-2'>
                                       <p className='p-0 m-0 fw-bold'>{t('Start Time')}</p>
                                       <p>{DateTimeUtils.timeConvertAMPM(checkAvailability?.startTime)}</p>
                                    </div>
                                    <div className='ps-2'>
                                       <p className='p-0 m-0 fw-bold'>{t('End Time')}</p>
                                       <p>{DateTimeUtils.timeConvertAMPM(checkAvailability?.endTime)}</p>
                                    </div>
                                 </div>
                              </>
                           ) : null}
                        </div>
                     </Col>
                     <Col xs={24} md={2}><div className='divider-horizontal'>&nbsp;</div></Col>
                     <Col xs={24} md={8} className='current-rent'>
                        <div className='d-flex justify-content-between mt-4'>
                           <div className="holiday-rent">
                              <h4 className='fw-bold p-0 m-0'>{t("Holiday Rent")}</h4>
                              <p>{itemData?.accommodation_information?.holiday_rent}</p>
                           </div>
                           <div className="working-day-rent text-end ps-2">
                              <h4 className='fw-bold p-0 m-0'>{t("Working day Rent")}</h4>
                              <p>{itemData?.accommodation_information?.working_day_rent}</p>
                           </div>
                        </div>
                     </Col>
                  </Row>
               </div>
               <div hidden={!checkAvailabilityStatus.isNotAvailable} className='text-center'>
                  {t("Not available")}
               </div>
            </>
         )}
      </>
   )
}

export default React.memo(ChangeDateForm)