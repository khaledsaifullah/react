import React, { FC, useState, useEffect } from 'react'
import { Col, Form, Input, Row, Spin } from 'antd';
import queryString, { parse } from "query-string";
import { useTranslation } from 'react-i18next';
import { useLang } from '../../../../../../hooks/useLang';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DateTimeUtils } from '../../../../../../utils';
import { CONSTANT_COMMON } from '../../../../../../constants';
import moment from 'moment';
import { CommonConfigurationTypeApi } from '../../../../../../api';

const initialState = {
   checkIn: "",
   checkOut: "",
   startDate: "",
   startTime: "",
   endTime: "",
   duration: 0,
   total: 0,
   rentForTimeSlot: {},
   checkForDurationType: {
      isFullDay: false,
      isTimeSlot: false,
      isTimeDuration: false
   }
}

const BookingDetail: FC<any> = (props) => {
   const { t } = useTranslation();
   const { lang } = useLang();
   const location = useLocation();
   const navigate = useNavigate();
   const queryParams = parse(location.search);

   const { selectedAccommodationInformation, bookingDetailId } = props;

   const [checkIn, setCheckIn] = useState<any>(initialState.checkIn)
   const [checkOut, setCheckOut] = useState<any>(initialState.checkOut)
   const [startTime, setStartTime] = useState<any>(initialState.startTime)
   const [endTime, setEndTime] = useState<any>(initialState.endTime)
   const [checkForDurationType, setCheckForDurationType] = useState<any>(initialState.checkForDurationType)
   const [loadingCommonConfigurationTypeInfo, setLoadingCommonConfigurationTypeInfo] = useState(false);
   const [selectedCommonConfigurationTypeInfo, setSelectedCommonConfigurationTypeInfo] = useState<any>({});
   const [duration, setDuration] = useState<any>(initialState.duration);
   const [total, setTotal] = useState<any>(initialState.total);
   const [rentForTimeSlot, setRentForTimeSlot] = useState<any>(initialState.rentForTimeSlot);

   useEffect(() => {
      if (queryParams['duration-type'] == "full-day") {
         setCheckForDurationType({
            isFullDay: true,
            isTimeSlot: false,
            isTimeDuration: false,
         })
      }
      if (queryParams['duration-type'] == "time-slot") {
         setCheckForDurationType({
            isFullDay: false,
            isTimeSlot: true,
            isTimeDuration: false,
         })
      }
      if (queryParams['duration-type'] == "time-duration") {
         setCheckForDurationType({
            isFullDay: false,
            isTimeSlot: false,
            isTimeDuration: true,
         })
      }
   }, [queryParams['duration-type']])

   // FOR DURATION TYPE FULL DAY
   useEffect(() => {
      if (queryParams['duration-type'] == "full-day") {
         if (queryParams['check-in']) {
            setCheckIn(queryParams['check-in'])
         }
         if (queryParams['check-out']) {
            setCheckOut(queryParams['check-out'])
         }
      }
   }, [queryParams['check-in'], queryParams['check-out']])

   useEffect(() => {
      const date1: any = new Date(checkIn);
      const date2: any = new Date(checkOut);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (selectedAccommodationInformation?.duration_type === "FULL_DAY") {
         setDuration(diffDays);
         setTotal(diffDays * selectedAccommodationInformation?.working_day_rent +
            selectedAccommodationInformation?.working_day_rent_vat +
            selectedAccommodationInformation?.service_charge
         );
      } else if (selectedAccommodationInformation?.duration_type === "TIME_SLOT") {
         const rent = selectedAccommodationInformation?.rents?.find((rent: any) => rent.time_slot == queryParams['time-slot']);

         setRentForTimeSlot(rent);
         setDuration(diffDays);
         setTotal(diffDays * rent?.working_day_rent + rent?.working_day_rent_vat + rent?.service_charge);
      } else {
         const time1: any = new Date(startTime);
         const time2: any = new Date(endTime);
         const diffTime = Math.abs(time2 - time1);

         console.log('>>> diffTime = ', time1, time2, diffTime);

      }
   }, [checkIn, checkOut]);

   // FOR DURATION TYPE TIME-SLOT
   useEffect(() => {
      if (queryParams['duration-type'] == "time-slot") {
         if (queryParams['time-slot']) {
            loadCommonConfigurationTypeById(queryParams['time-slot'])
         }
         if (queryParams['check-in']) {
            setCheckIn(queryParams['check-in'])
         }
         if (queryParams['check-out']) {
            setCheckOut(queryParams['check-out'])
         }
      }
   }, [queryParams['time-slot'], queryParams['check-in'], queryParams['check-out']])

   // FOR DURATION TYPE TIME-DURATION
   useEffect(() => {
      if (queryParams['duration-type'] == "time-duration") {
         if (queryParams['check-in']) {
            setCheckIn(queryParams['check-in'])
         }
         if (queryParams['check-out']) {
            setCheckOut(queryParams['check-out'])
         }
         if (queryParams['start-time']) {
            setStartTime(queryParams['start-time'])
         }
         if (queryParams['end-time']) {
            setEndTime(queryParams['end-time'])
         }
      }
   }, [queryParams['check-in'], queryParams['check-out'], queryParams['start-time'], queryParams['end-time']])

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

   useEffect(() => {
      if (bookingDetailId) {
         if (selectedAccommodationInformation?.duration_type == "FULL_DAY") {
            setCheckForDurationType({
               isFullDay: true,
               isTimeSlot: false,
               isTimeDuration: false,
            })
         }
         if (selectedAccommodationInformation?.duration_type == "TIME_SLOT") {
            setCheckForDurationType({
               isFullDay: false,
               isTimeSlot: true,
               isTimeDuration: false,
            })
         }
         if (selectedAccommodationInformation?.duration_type == "TIME_DURATION") {
            setCheckForDurationType({
               isFullDay: false,
               isTimeSlot: false,
               isTimeDuration: true,
            })
         }
      }
   }, [bookingDetailId])

   return (
      <>
         <div className="p-3 mb-2 bg-white text-dark shadow-sm rounded-2">
            <h5 className="text-center  h5 m-0 p-0 mb-2 fw-bold">
               {t(" Your Booking Details")}
            </h5>
            <div className="d-flex justify-content-between align-item-center">
               <p className="h6 m-0 p-0 fw-bold">
                  {t("Duration Type")}
               </p>
               <p className="m-0 p-0 lh-sm text-primary text-center">
                  {lang == "en" ? selectedAccommodationInformation?.duration_type_name_en : selectedAccommodationInformation?.duration_type_name_bn}
               </p>
            </div>

            <div className='d-flex justify-content-between align-item-center' hidden={!checkForDurationType.isTimeSlot}>
               <p className="h6 m-0 p-0 fw-bold">{t("Slot")}</p>
               <p className="m-0 p-0 lh-sm">
                  {bookingDetailId ?
                     (lang == "en" ? selectedAccommodationInformation?.time_slot_name_en : selectedAccommodationInformation?.time_slot_name_bn) :
                     (lang == "en" ? selectedCommonConfigurationTypeInfo?.name_en : selectedCommonConfigurationTypeInfo?.name_bn)
                  }
               </p>
            </div>
            <Row gutter={[16, 16]} className="checkincheckout" hidden={!checkForDurationType.isFullDay}>
               <Col xs={24} md={10}>
                  <div className="text-start">
                     <h6 className="h6 m-0 p-0 fw-bold">
                        {t("Booking From")}
                     </h6>
                     <small className="m-0 p-0 lh-sm">
                        {DateTimeUtils.formatDate(bookingDetailId ? selectedAccommodationInformation?.start_date : checkIn, CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT)}
                     </small>
                  </div>
               </Col>
               <Col xs={24} md={4}>
                  <div className="separator mt-4">&nbsp;</div>
               </Col>
               <Col xs={24} md={10}>
                  <div className="text-end">
                     <h6 className="h6 m-0 p-0 fw-bold">
                        {t("Booking To")}
                     </h6>
                     <small className="m-0 p-0 lh-sm">
                        {DateTimeUtils.formatDate(bookingDetailId ? selectedAccommodationInformation?.end_date : checkOut, CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT)}
                     </small>
                  </div>
               </Col>
            </Row>
            {loadingCommonConfigurationTypeInfo && <div className='text-center'><Spin className='d-inline-block' size="small" /></div>}
            {!loadingCommonConfigurationTypeInfo && (
               <>
                  <Row gutter={[16, 0]} hidden={!checkForDurationType.isTimeSlot}>
                     <Col xs={24} md={10}>
                        <div className="text-start">
                           <h6 className="h6 m-0 p-0 fw-bold">
                              {t("Booking From")}
                           </h6>
                           <small className="m-0 p-0 lh-sm">
                              {DateTimeUtils.formatDate(bookingDetailId ? selectedAccommodationInformation?.start_date : checkIn, CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT)}
                           </small>
                        </div>
                     </Col>
                     <Col xs={24} md={4}>
                        <div className="separator mt-4">&nbsp;</div>
                     </Col>
                     <Col xs={24} md={10}>
                        <div className="text-end">
                           <h6 className="h6 m-0 p-0 fw-bold">
                              {t("Booking To")}
                           </h6>
                           <small className="m-0 p-0 lh-sm">
                              {DateTimeUtils.formatDate(bookingDetailId ? selectedAccommodationInformation?.end_date : checkOut, CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT)}
                           </small>
                        </div>
                     </Col>
                  </Row>
               </>
            )}
            <>
               <Row gutter={[16, 0]} hidden={!checkForDurationType.isTimeDuration}>
                  <Col xs={24} md={10}>
                     <div className="text-start">
                        <h6 className="h6 m-0 p-0 fw-bold">
                           {t("Booking From")}
                        </h6>
                        <small className="m-0 p-0 lh-sm">
                           {DateTimeUtils.formatDate(bookingDetailId ? selectedAccommodationInformation?.start_date : checkIn, CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT)}
                        </small>
                     </div>
                  </Col>
                  <Col xs={24} md={4}>
                     <div className="separator mt-4">&nbsp;</div>
                  </Col>
                  <Col xs={24} md={10}>
                     <div className="text-end">
                        <h6 className="h6 m-0 p-0 fw-bold">
                           {t("Booking To")}
                        </h6>
                        <small className="m-0 p-0 lh-sm">
                           {DateTimeUtils.formatDate(bookingDetailId ? selectedAccommodationInformation?.end_date : checkOut, CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT)}
                        </small>
                     </div>
                  </Col>
               </Row>
               <Row gutter={[16, 16]} hidden={!checkForDurationType.isTimeDuration}>
                  <Col xs={24} md={10}>
                     <div className="text-start">
                        <p className="m-0 p-0 fw-bold">
                           {t("Start Time")}
                        </p>
                        <small className="m-0 p-0 lh-sm">
                           {DateTimeUtils.timeConvertAMPM(bookingDetailId ? selectedAccommodationInformation?.start_time : startTime)}
                        </small>
                     </div>
                  </Col>
                  <Col xs={24} md={4}>
                     <div className="separator mt-4">&nbsp;</div>
                  </Col>
                  <Col xs={24} md={10}>
                     <div className="text-end">
                        <p className="m-0 p-0 fw-bold">
                           {t("End Time")}
                        </p>
                        <small className="m-0 p-0 lh-sm">
                           {DateTimeUtils.timeConvertAMPM(bookingDetailId ? selectedAccommodationInformation?.end_time : endTime)}
                        </small>
                     </div>
                  </Col>
               </Row>
            </>
            <p className="m-0 p-0 fw-bold mt-2">
               {t("Your Room Selection")}
            </p>
            <p className="m-0 p-0 lh-sm">
               {t(bookingDetailId ? selectedAccommodationInformation?.accommodation_information?.accommodation_name : selectedAccommodationInformation?.accommodation_name)}
            </p>
            <p className="m-0 p-0 lh-sm">
               {bookingDetailId ? null : (
                  <a onClick={() => navigate(-1)} className="change-link fw-bold">
                     {t("Change")}
                  </a>
               )}
            </p>
            <div className="divider mb-2">&nbsp;</div>
            <Row gutter={[16, 16]}>
               <Col xs={24} md={12}>
                  <div className="text-start">
                     <p className="m-0 p-0 fw-bold">
                        Price
                     </p>
                  </div>
               </Col>

               <Col xs={24} md={12}>
                  <div className="text-end">
                     <p className="m-0 p-0 fw-bold">
                        BDT. {selectedAccommodationInformation?.duration_type === "TIME_SLOT" ? duration * rentForTimeSlot?.working_day_rent : duration * selectedAccommodationInformation?.working_day_rent}
                     </p>
                  </div>
               </Col>
            </Row>
            <Row gutter={[16, 16]}>
               <Col xs={24} md={12}>
                  <div className="text-start">
                     <p className="m-0 p-0 fw-bold">VAT </p>
                  </div>
               </Col>

               <Col xs={24} md={12}>
                  <div className="text-end">
                     <p className="m-0 p-0 fw-bold">
                        BDT. {selectedAccommodationInformation?.duration_type === "TIME_SLOT" ? rentForTimeSlot?.working_day_rent_vat : selectedAccommodationInformation?.working_day_rent_vat}
                     </p>
                  </div>
               </Col>
            </Row>
            <Row gutter={[16, 16]}>
               <Col xs={24} md={12}>
                  <div className="text-start">
                     <p className="m-0 p-0 fw-bold">
                        Other Charge
                     </p>
                  </div>
               </Col>

               <Col xs={24} md={12}>
                  <div className="text-end">
                     <p className="m-0 p-0 fw-bold">
                        BDT. {selectedAccommodationInformation?.duration_type === "TIME_SLOT" ? rentForTimeSlot?.service_charge : selectedAccommodationInformation?.service_charge}
                     </p>
                  </div>
               </Col>
            </Row>

            <div className="divider mt-4">&nbsp;</div>
            <Row gutter={[16, 16]}>
               <Col xs={24} md={12}>
                  <div className="text-start">
                     <p className="m-0 p-0 fw-bold">
                        Grand Total
                     </p>
                  </div>
               </Col>

               <Col xs={24} md={12}>
                  <div className="text-end">
                     <p className="m-0 p-0 fw-bold">
                        BDT. {total}
                     </p>
                  </div>
               </Col>
            </Row>
         </div>
      </>
   )
}

export default React.memo(BookingDetail)