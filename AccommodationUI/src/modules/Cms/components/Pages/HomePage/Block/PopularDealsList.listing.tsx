import { Col, Row, Spin } from 'antd';
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { useLang } from '../../../../../../hooks/useLang';
import {
    ArrowRightOutlined,
    EnvironmentOutlined,
    CreditCardOutlined,
    FileDoneOutlined,
    StarFilled,
    HeartOutlined
} from '@ant-design/icons';
import NoticeListListing from './NoticeList.listing';
import CircularListListing from './CircularList.listing';
import AdvertisementListListing from './AdvertisementList.listing';
import { Link } from "react-router-dom";
import { CONSTANT_CONFIG } from '../../../../../../constants';

const PopularDealsListListing: FC<any> = (props) => {
    const { t } = useTranslation();
    const { lang, getLangPath } = useLang();

    const { loading, listData } = props;

    console.log("popular deals :", listData);

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col xs={24} md={18}>
                    <h3 className='popular-deal-title h3 m-0 mb-3 fw-bold'>
                        <span>Popular Deals</span>
                    </h3>
                    {loading && <div className="text-center"><Spin className='d-inline-block' /></div>}
                    {!loading && (
                        <Row gutter={[16, 16]}>
                            {listData.length > 0 ? listData.map((popularDeal, idx) => (
                                <Col xs={24} md={6} key={idx}>
                                    {/* Start:card */}
                                    <div className="card card-deal">
                                        <div className='card-wishlist'><HeartOutlined />
                                        </div>
                                        <div className="card-picture">
                                            <img
                                                src={popularDeal.cover_image ? CONSTANT_CONFIG.CDN_URL + 'image/' + popularDeal.cover_image : "https://www.sykescottages.co.uk/assets/_files/cached/property/150x113/3961/sc_128705555790_3961_12.jpg"}
                                                alt="..." />
                                        </div>
                                        <div className="card-body p-2">
                                            <div className="card-rating fw-bold">
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <StarFilled />
                                                <span>(4,594 reviews) </span>
                                            </div>
                                            <h5 className="h6 m-0 p-0"> {popularDeal.building_name} </h5>
                                            <div className='card-location fw-bold mb-1'>
                                                <EnvironmentOutlined /> {popularDeal.address}
                                            </div>
                                            <div className='fw-bold'>
                                                <FileDoneOutlined /> {popularDeal.organization_short_name}
                                            </div>
                                            <div className='fw-bold'>
                                                <CreditCardOutlined /> {lang === 'en' ? popularDeal.building_type_name_en : popularDeal.building_type_name_bn}
                                            </div>
                                            {/* <div className='text-end mt-4'>
                                                <Link
                                                    to={getLangPath(lang, '/building-details/' + popularDeal.id + "/" + popularDeal.accommodation_type)}
                                                >
                                                    <span className='pe-3'>{t('See availability')}</span>
                                                    <ArrowRightOutlined />
                                                </Link>
                                            </div> */}
                                        </div>
                                    </div>
                                    {/* End:card */}

                                </Col>

                            )) : ''}
                        </Row>
                    )}
                </Col>
                <Col xs={24} md={6}>
                    <div className='ps-4'>
                        <NoticeListListing />
                        <CircularListListing />
                        <AdvertisementListListing />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default React.memo(PopularDealsListListing)
