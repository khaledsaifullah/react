import {
    Button,
    Carousel,
    Checkbox,
    Col,
    DatePicker,
    Input,
    Row,
    Select,
    Space,
    Spin
} from 'antd';
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ImageView from '../../../../../../components/Image/ImageView';
import {
    useAccommodationTypeList
} from '../../../../../../hooks/lists/useAccommodationTypeList';
import { useLang } from '../../../../../../hooks/useLang';
import {
    ArrowRightOutlined,
    BankOutlined, CreditCardOutlined, DeliveredProcedureOutlined,
    EnvironmentOutlined,
    StarFilled
} from "@ant-design/icons";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import SearchFormForm from "./SearchForm.form";
import { CONSTANT_CONFIG } from '../../../../../../constants';

const FilterLeftSidebar: FC<any> = (props) => {
    const { Search } = Input;
    const { t } = useTranslation();
    const { lang, getLangPath } = useLang();
    const { accommodationTypeList, loadingAccommodationTypeList } = useAccommodationTypeList();

    const { listData, loading } = props;

    return (
        <>
            <Col xs={24} md={17} className="right-part-serachfilter">
                <SearchFormForm />

                {/* start: package */}
                {loading && <div className="text-center"><Spin className='d-inline-block' /></div>}
                {listData?.map((item, index) => {
                    return (
                        <>
                            <div className="p-3 mb-3 bg-white rounded-2 accommodation-package-box">
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={7}>
                                        <div className='accommodation-gallery'>
                                            {/* {item.picture ?
                                                    <img src={CONSTANT_CONFIG.CDN_URL + 'image/' + item?.picture} alt={"picture"} />
                                                    : null} */}
                                        </div>
                                    </Col>
                                    <Col xs={24} md={17}>
                                        <div className='accommodation-package'>
                                            <div className='d-flex justify-content-between mb-3'>
                                                <div>
                                                    <h5 className='accommodation-package-title  h5 m-0 p-0 mb-2'>
                                                        {t(item.building_name)}
                                                    </h5>
                                                    <div
                                                        className='accommodation-package-text'>
                                                        <EnvironmentOutlined /> {lang == "en" ? item.district_name_en : item.district_name_bn},
                                                        {lang == "en" ? item.division_name_en : item.division_name_bn}
                                                    </div>
                                                    <div
                                                        className='accommodation-package-text'>
                                                        <BankOutlined /> {lang == "en" ? item.organization_name_en : item.organization_name_bn}
                                                    </div>
                                                    <div
                                                        className='accommodation-package-text'>
                                                        {item.accommodation_type ? <CreditCardOutlined /> : null} {lang == "en" ? item.accommodation_type_name_en : item.accommodation_type_name_bn}
                                                    </div>
                                                </div>
                                                <div
                                                    className='d-flex flex-column'>
                                                    <div className='d-flex'>
                                                        <span
                                                            className='accommodation-package-rating ps-1'><StarFilled /></span>
                                                        <span
                                                            className='accommodation-package-rating ps-1'><StarFilled /></span>
                                                        <span
                                                            className='accommodation-package-rating ps-1'><StarFilled /></span>
                                                        <span
                                                            className='accommodation-package-rating ps-1'><StarFilled /></span>
                                                        <span
                                                            className='accommodation-package-rating ps-1'><StarFilled /></span>
                                                    </div>
                                                    <div
                                                        className='text-end accommodation-package-reviewnumber'>(4,594
                                                        reviews)
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className='d-flex justify-content-between mb-2'>
                                                <div
                                                    className='accommodation-package-detail mt-3 ps-2 pe-5 fw-bold'>
                                                    <p>Deluxe Room, Deluxe Twin
                                                        Room, Guest room,
                                                        1 King, Poolside 1 king
                                                        bed</p>
                                                    <p>FREE cancellation & No
                                                        prepayment
                                                        needed</p>
                                                </div>
                                                <div
                                                    className='accommodation-package-price text-end fw-bold'>
                                                    <div
                                                        className='accommodation-package-types'>1
                                                        night, 2 adults
                                                    </div>
                                                    <h6 className='m-0 p-0 fw-bold accommodation-package-amount'>BDT.
                                                        1800.00</h6>
                                                    <p className='m-0 p-0 accommodation-package-tax'> +
                                                        taxes and charges</p>
                                                </div>
                                            </div>
                                            <div
                                                className='d-flex justify-content-between accommodation-package-view'>
                                                <div className='d-flex fw-bold'>
                                                    {item.buildingFacilities?.map((item, index) => {
                                                        return (
                                                            <span key={index} className='pe-2'>
                                                                <StarFilled />
                                                                {lang == "en" ? item.building_facility_en : item.building_facility_bn}
                                                            </span>
                                                        )
                                                    })}
                                                    {item.buildingFacilities.length > 3 ? (
                                                        <span><a href='#'>+ {t('More')}</a></span>
                                                    ) : null}
                                                </div>
                                                <div className='text-end'><a
                                                    href="#"
                                                    className="see-availability fw-bold">
                                                    <span className='pe-1'>{t('See availability')}</span>
                                                    <ArrowRightOutlined /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                    )
                })}
                {/* end: package */}
            </Col>

        </>
    )
}

export default React.memo(FilterLeftSidebar)
