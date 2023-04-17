import React, { FC, useState, useEffect } from 'react'
import { Button, Col, Popconfirm, Row, Spin } from 'antd';
import {
    EnvironmentOutlined,
    StarFilled,
    BankOutlined,
    CreditCardOutlined,
    HeartOutlined, ArrowRightOutlined
} from "@ant-design/icons";
import { useTranslation } from 'react-i18next';
import { CONSTANT_COMMON, CONSTANT_CONFIG } from '../../../../../../constants';
import { useLang } from '../../../../../../hooks/useLang';
import AccommodationListFilter from "./AccommodationListFilter";
import { Link } from "react-router-dom";
import { DateTimeUtils } from '../../../../../../utils';

const AccommodationList: FC<any> = (props) => {
    const { t } = useTranslation();
    const { lang, getLangPath } = useLang();
    const [isFullDay, setIsFullDay] = useState<boolean>(false);
    const [isTimeDuration, setIsTimeDuration] = useState<boolean>(false);
    const [isTimeSlot, setIsTimeSlot] = useState<boolean>(false);
    const [queryStringType, setQueryStringType] = useState<any>("");

    const { loading, accommodationList, filters, setFilters, initialFilterValue } = props;
    const [index, setIndex] = useState<number>(0);

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showPopconfirm = (index: number) => {
        setIndex(index);
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);

        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 500);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const handleDurationType = (e: string) => {
        setIsFullDay(false);
        setIsTimeSlot(false);
        setIsTimeDuration(false);

        if (e === 'FULL_DAY') {
            setIsFullDay(true);
        } else if (e === 'TIME_SLOT') {
            setIsTimeSlot(true);
        } else if (e === 'TIME_DURATION') {
            setIsTimeDuration(true);
        }
    };

    const queryStringForDurationTypeFullDay: any =
        '?duration-type=' + (filters?.booking_slot ? "full-day" : filters?.booking_slot) + '&check-in=' + DateTimeUtils.formatDate(filters?.start_date, CONSTANT_COMMON.DATE_FORMAT_DATABASE) + '&check-out=' + DateTimeUtils.formatDate(filters?.end_date, CONSTANT_COMMON.DATE_FORMAT_DATABASE)

    const queryStringForDurationTypeTimeSlot: any =
        '?duration-type=' + (filters?.booking_slot ? "time-slot" : filters?.booking_slot) + '&check-in=' + DateTimeUtils.formatDate(filters?.start_date, CONSTANT_COMMON.DATE_FORMAT_DATABASE) + '&check-out=' + DateTimeUtils.formatDate(filters?.end_date, CONSTANT_COMMON.DATE_FORMAT_DATABASE) + '&time-slot=' + filters?.time_slot

    const queryStringForDurationTypeTimeDuration: any =
        '?duration-type=' + (filters?.booking_slot ? "time-duration" : filters?.booking_slot) + '&check-in=' + DateTimeUtils.formatDate(filters?.start_date, CONSTANT_COMMON.DATE_FORMAT_DATABASE) + '&check-out=' + DateTimeUtils.formatDate(filters?.end_date, CONSTANT_COMMON.DATE_FORMAT_DATABASE) + '&start-time=' + DateTimeUtils.formatTime(filters?.start_time, CONSTANT_COMMON.DATE_PICKER_TIME_FORMAT) + '&end-time=' + DateTimeUtils.formatTime(filters?.end_time, CONSTANT_COMMON.DATE_PICKER_TIME_FORMAT)

    useEffect(() => {
        if (filters?.booking_slot == "FULL_DAY") {
            setQueryStringType(queryStringForDurationTypeFullDay)
        }
        if (filters?.booking_slot == "TIME_SLOT") {
            setQueryStringType(queryStringForDurationTypeTimeSlot)
        }
        if (filters?.booking_slot == "TIME_DURATION") {
            setQueryStringType(queryStringForDurationTypeTimeDuration)
        }
    }, [filters?.booking_slot])

    return (
        <>
            <h5 id='rooms' className="auditorium-color mt-5 h3">
                {t('Filter your accommodation')}
            </h5>

            <AccommodationListFilter
                isFullDay={isFullDay}
                isTimeDuration={isTimeDuration}
                isTimeSlot={isTimeSlot}
                handleDurationType={handleDurationType}
                filters={filters}
                setFilters={setFilters}
                initialFilterValue={initialFilterValue}
            />
            {loading && <div className="spinner"><Spin className='d-inline-block' size="large" /></div>}
            {!loading && (
                <div className="select-auditorium-content">
                    {/* start: package */}
                    {accommodationList.length > 0 ? accommodationList?.map((item: any, key: any) => {
                        return (
                            <div
                                className="p-3 mb-3 bg-white rounded-2 auditorium-package-box"
                                key={key}>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={5}>
                                        <div
                                            className="auditorium-card-gallery mb-2">
                                            <img
                                                src={item.cover_image ? CONSTANT_CONFIG.CDN_URL + 'image/' + item.cover_image : "https://i.postimg.cc/8z6rkwRJ/room.jpg"}
                                                alt={item.cover_image}
                                                className="rounded-3"
                                            />
                                            <div
                                                className="auditorium-card-gallery-heartwishlist d-flex align-items-center justify-content-center">
                                                <HeartOutlined />
                                            </div>
                                        </div>
                                        {/* <div className="d-md-flex ">
                                            {item.pictures?.split(",")?.map((room, idx) => {
                                                return (
                                                    <div
                                                        className="auditorium-card-gallery-item">
                                                        <img
                                                            src={room ? CONSTANT_CONFIG.CDN_URL + 'image/' + room : "https://i.postimg.cc/1tDw3BD5/a.jpg"}
                                                            className="rounded-3"
                                                            alt="..."
                                                        />
                                                    </div>
                                                )
                                            })}
                                            {item?.pictures?.split(",")?.length > 3 ?
                                                (
                                                    <div
                                                        className="auditorium-card-gallery-item">
                                                        <img
                                                            src="https://i.postimg.cc/1tDw3BD5/a.jpg"
                                                            className="rounded-2"
                                                            alt="..."
                                                        />
                                                        <div
                                                            className="auditorium-card-gallery-item-overlay rounded-2">
                                                            View all
                                                        </div>
                                                    </div>
                                                )
                                                : null}

                                        </div> */}
                                    </Col>
                                    <Col xs={24} md={19}>
                                        <div
                                            className="auditorium-package ps-2">
                                            <div
                                                className="d-flex justify-content-between mb-1">
                                                <div>
                                                    <h5 className="auditorium-package-title  h5 m-0 p-0 mb-2">
                                                        {t(item?.accommodation_name)}
                                                    </h5>
                                                    <div
                                                        className="auditorium-package-text">
                                                        <EnvironmentOutlined />
                                                        {t(item?.accommodation_building_information?.address)},
                                                        {lang == "en" ? item?.accommodation_building_information?.division_name_en : item?.accommodation_building_information?.division_name_bn}
                                                    </div>
                                                    <div
                                                        className="auditorium-package-text">
                                                        <BankOutlined />
                                                        {lang == "en" ? item.organization_name_en : item.organization_name_bn}
                                                    </div>
                                                    <div
                                                        className="auditorium-package-text">
                                                        <CreditCardOutlined />
                                                        {lang == "en" ? item.accommodation_type_name_en : item.accommodation_type_name_bn}
                                                    </div>
                                                </div>
                                                <div
                                                    className="available-text fw-bold">
                                                    Available
                                                </div>
                                            </div>
                                            <div
                                                className="d-flex justify-content-between mb-2">
                                                <div
                                                    className="auditorium-package-detail mt-3 ps-3 pe-5 fw-bold">
                                                    {item?.accommodation_detail_information?.map((room: any, key: any) => {
                                                        return (
                                                            <p>
                                                                {t(room?.description)}
                                                            </p>
                                                        )
                                                    })}
                                                </div>
                                                <div
                                                    className="auditorium-package-price text-end fw-bold">
                                                    <div className="auditorium-package-types">
                                                        {lang == "en" ? item?.duration_type_name_en : item?.duration_type_name_bn}
                                                    </div>
                                                    <h6 className="m-0 p-0 fw-bold auditorium-package-amount">
                                                        BDT. {item.accommodation_rent}
                                                    </h6>
                                                    <p className="m-0 p-0 auditorium-package-tax">
                                                        + taxes and charges
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="d-flex justify-content-between pt-1 auditorium-package-view">
                                                <div className="d-flex fw-bold">
                                                    {item?.accommodation_detail_information?.map((room: any, key: any) => {
                                                        return (
                                                            <span
                                                                className="pe-4"
                                                                key={key}>
                                                                <StarFilled />
                                                                {lang == "en" ? room.particular_type_name_en : room.particular_type_name_bn}
                                                            </span>
                                                        )
                                                    })}
                                                    {item?.accommodation_detail_information?.length > 3 ?
                                                        <span>
                                                            <a href="#">+ More</a>
                                                        </span>
                                                        : null}
                                                </div>
                                                <div className="text-end">
                                                    {queryStringType ? (
                                                        <Link
                                                            to={getLangPath(lang, '/booking/' + item.id + queryStringType)}
                                                            className="btn btn-danger text-white fw-bold  d-flex align-items-center justify-content-between  reserve-btn"
                                                        >
                                                            {t('Reserve')}
                                                        </Link>
                                                    ) : (
                                                        <Popconfirm
                                                            title="Please Filter First"
                                                            open={index === key ? open : false}
                                                            onConfirm={handleOk}
                                                            okButtonProps={{ loading: confirmLoading }}
                                                            onCancel={handleCancel}
                                                            showCancel={false}
                                                        >
                                                            <Button className='btn btn-danger text-white fw-bold  d-flex align-items-center justify-content-between  reserve-btn' onClick={() => showPopconfirm(key)}>
                                                                {t('Reserve')}
                                                            </Button>
                                                        </Popconfirm>
                                                        // <button 
                                                        //     className='btn btn-danger text-white fw-bold  d-flex align-items-center justify-content-between  reserve-btn'
                                                        //     onClick={()=>setIsOpenDurationType(true)}
                                                        // >{t('Reserve')}</button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )
                    }) : (<h4 style={{ "textAlign": 'center' }}>{t("No Accommodation Found")}</h4>)}
                    {/* end: package */}
                </div>
            )}
        </>
    )
}

export default React.memo(AccommodationList)
