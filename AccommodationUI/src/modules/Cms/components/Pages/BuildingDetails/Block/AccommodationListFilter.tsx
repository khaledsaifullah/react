import { Button, Col, DatePicker, Form, Input, Row, Select, Space, TimePicker } from 'antd';
import React, { FC, useState, useEffect } from 'react'
import { FilterOutlined } from "@ant-design/icons";
import { useTranslation } from 'react-i18next';
import { CONSTANT_COMMON, CONSTANT_CONFIG } from '../../../../../../constants';
import { useLang } from '../../../../../../hooks/useLang';
import { useDurationTypeEnum } from '../../../../../../hooks/enums/useDurationTypeEnum';
import { useCommonConfigurationTypeList } from '../../../../../../hooks/lists/useCommonConfigurationTypeList';
import { useForm } from "../../../../../../hooks/useForm";
import { useLocation } from 'react-router-dom';
import queryString, { parse } from "query-string";
import { DateTimeUtils } from '../../../../../../utils';
interface IProps {
    filters: any,
    setFilters: any,
    component?: any,
    initialFilterValue?: any,
    handleOnChanged?: any,
    handleCallbackFunc?: any,
    [key: string]: any,
}

const AccommodationListFilter: FC<any> = (props) => {
    const { t } = useTranslation();
    const { lang } = useLang();
    const location = useLocation();
    const queryParams = parse(location.search);
    const { durationTypeEnumList, loadingDurationTypeEnumList } = useDurationTypeEnum();
    const { commonConfigurationTypeList, loadingCommonConfigurationTypeList } = useCommonConfigurationTypeList();

    const { handleDurationType, isFullDay, isTimeDuration, isTimeSlot, accommodationList, accommodationType, handleFilter, filters, setFilters, initialFilterValue, ...restProps } = props;

    const [isAdvSearchOpen, setIsAdvSearchOpen] = useState(false);
    const [isAdvLoading, setIsAdvLoading] = useState(false);

    const { formRef, formValues, handleChange, setFormFieldsValue } = useForm({});

    const handleSubmit = (values: any): void => {
        setFilters(values);
        setIsAdvSearchOpen(false);
    }

    const onSubmitForFuture = (): void => {
        formRef.submit();
    }

    return (
        <div
            className="p-3 mb-4 rounded-2 serachfilter-result auditorium-result"
            style={{ "border": "1px solid #C88282" }}>
            <Form
                form={formRef}
                layout={"vertical"}
                name="registrationForm"
                scrollToFirstError={true}
                initialValues={initialFilterValue}
                onValuesChange={handleChange}
                onFinish={handleSubmit}
            // onFinishFailed={handleSubmitFailed}
            >
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={4} className="text-start">
                        <Form.Item htmlFor="filter-organization" name="booking_slot" label={t("Duration Type")}>
                            <Select
                                placeholder="Choose One"
                                style={{ width: "100%" }}
                                onChange={handleDurationType}
                                showSearch
                                allowClear
                                optionFilterProp="children"
                                dropdownMatchSelectWidth={100}
                                loading={loadingDurationTypeEnumList}
                                filterOption={(input, option: any) => (option?.label ?? '')?.toLowerCase()?.includes(input)}
                                options={durationTypeEnumList?.map((item: any) => ({
                                    value: item.key,
                                    label: lang === "en" ? item.value_en : item.value_bn
                                }))}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={5} className="text-start" >
                        <Form.Item htmlFor="filter-organization" name="start_date" label={t("Booking From")}>
                            <DatePicker format={CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={5} className="text-start" >
                        <Form.Item htmlFor="filter-organization" name="end_date" label={t("Booking To")}>
                            <DatePicker format={CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT} />
                        </Form.Item>
                    </Col>

                    {/* <Col xs={24} md={5} className="text-start" hidden={!isTimeSlot}>
                        <Form.Item htmlFor="filter-organization" name="start_date" label={t("Booking Date")}>
                            <DatePicker format={CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT} />
                        </Form.Item>
                    </Col> */}
                    <Col xs={24} md={4} className="text-start" hidden={!isTimeSlot}>
                        <Form.Item htmlFor="filter-organization" name="time_slot" label={t("Choose Time Slot")}>
                            <Select
                                placeholder="Choose One"
                                style={{ width: "100%" }}
                                showSearch
                                allowClear
                                optionFilterProp="children"
                                dropdownMatchSelectWidth={100}
                                loading={loadingCommonConfigurationTypeList}
                                // filterOption={(input, option: any) => (option?.label ?? '')?.toLowerCase()?.includes(input)}
                                filterOption={(input, option: any) => option?.children?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0}
                                options={commonConfigurationTypeList?.filter((config) => config.type === "TIME_SLOT")?.map((item: any) => ({
                                    value: item.id,
                                    label: lang === "en" ? item.name_en : item.name_bn
                                }))}
                            />
                        </Form.Item>
                    </Col>

                    {/* <Col xs={24} md={5} className="text-start" hidden={!isTimeDuration}>
                        <Form.Item htmlFor="filter-organization" name="start_date" label={t("Booking Date")}>
                            <DatePicker format={CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT} />
                        </Form.Item>
                    </Col> */}
                    <Col xs={24} md={5} className="text-start" hidden={!isTimeDuration}>
                        <Form.Item htmlFor="filter-organization" name="start_time" label={t("Start Time")}>
                            <TimePicker use12Hours format={CONSTANT_COMMON.DATE_PICKER_TIME_FORMAT_C} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={5} className="text-start" hidden={!isTimeDuration}>
                        <Form.Item htmlFor="filter-organization" name="end_time" label={t("End Time")}>
                            <TimePicker use12Hours format={CONSTANT_COMMON.DATE_PICKER_TIME_FORMAT_C} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={5} className="text-start">
                        <div className="ps-3 pt-4 mt-1">
                            <Button
                                key="submit" type="primary" icon={<FilterOutlined />} loading={isAdvLoading} onClick={(event) => onSubmitForFuture()}
                                className="btn btn-danger fw-bold  d-flex align-items-center justify-content-between  check-availability-btn"
                            >
                                {t('Check availability')}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default React.memo(AccommodationListFilter)
