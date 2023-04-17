import React, { FC } from 'react'
import { Anchor, Col, Row, Spin } from 'antd';
import {
    LinkOutlined,
    EnvironmentOutlined,
    StarFilled,
    HeartOutlined
} from "@ant-design/icons";
import { useTranslation } from 'react-i18next';
import { CONSTANT_CONFIG } from '../../../../../../constants';
import { useLang } from '../../../../../../hooks/useLang';

const BuildingInformation: FC<any> = (props) => {
    const { t } = useTranslation();
    const { lang } = useLang();

    const { buildingInfo, loading } = props;
    const { Link } = Anchor;

    return (
        <>
            {loading && <div className="spinner"><Spin className='d-inline-block' size="large" /></div>}
            {!loading && (
                <>
                    {/* start:Gallery */}
                    <div id='overview'
                        className="p-3 mb-3 bg-white rounded-2 auditorium-gallery">
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={17}>
                                <div className="auditorium-gallery-left">
                                    <img
                                        src={buildingInfo.cover_image ? CONSTANT_CONFIG.CDN_URL + 'image/' + buildingInfo.cover_image : "https://i.postimg.cc/1tDw3BD5/a.jpg"}
                                        alt={buildingInfo.picture}
                                        className="rounded-3"
                                    />
                                    <div
                                        className="auditorium-gallery-heartwishlist d-flex align-items-center justify-content-center">
                                        <HeartOutlined />
                                    </div>

                                </div>
                            </Col>
                            <Col xs={24} md={7}>
                                <Row gutter={[16, 16]}>
                                    {buildingInfo.feature_images?.split(",")?.map((buildingImage, idx) => {
                                        return (
                                            <Col xs={24} md={12} key={idx}>
                                                <div
                                                    className="auditorium-gallery-rightitem">
                                                    <img
                                                        src={buildingImage ? CONSTANT_CONFIG.CDN_URL + 'image/' + buildingImage : "https://i.postimg.cc/1tDw3BD5/a.jpg"}
                                                        className="rounded-3"
                                                        alt="..."
                                                    />
                                                </div>
                                            </Col>
                                        )
                                    })}
                                    {/* <Col xs={24} md={12}>
                                <div className="auditorium-gallery-rightitem">
                                   <img
                                      src="https://i.postimg.cc/1tDw3BD5/a.jpg"
                                      className="rounded-3"
                                      alt="..."
                                   />
                                   <div className="auditorium-gallery-rightitem-overlay rounded-3 d-flex align-items-center justify-content-center">
                                      +15
                                   </div>
                                </div>
                            </Col> */}
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    {/* end:Gallery */}

                    {/* start:Tab 2 */}
                    <div className="tab-auditorium">
                        <div className="tab-menu-auditorium mt-2">
                            <Anchor affix={false}>
                                <Link href="#overview" title="Overview" />
                                <Link href="#rooms" title="Rooms" />
                                <Link href="#facilities" title="Facilities" />
                                <Link href="#policies" title="Policies" />
                                <Link href="#location" title="Location" />
                                <Link href="#reviews" title="Reviews" />
                            </Anchor>

                        </div>
                        <div className="tab-content-body">
                            <h2 className="h2 m-0 p-0">{t(buildingInfo?.building_name)}</h2>
                            <div className="d-flex">
                                <div className="fw-bold">
                                    <EnvironmentOutlined />
                                    {lang == "en" ? buildingInfo?.organization_name_en : buildingInfo?.organization_name_bn},
                                    {lang == "en" ? buildingInfo?.division_name_en : buildingInfo?.division_name_en}
                                </div>
                                <div className="see-divider ms-3 me-3"></div>
                                <div className="fw-bold see-on-map">
                                    <EnvironmentOutlined />
                                    <a href="#">
                                        See on Map <LinkOutlined />
                                    </a>
                                </div>
                            </div>
                            <div className="fw-bold mt-3 mb-3">
                                <span className="tab-rating ps-1">
                                    <StarFilled />
                                </span>
                                <span className="tab-rating ps-1">
                                    <StarFilled />
                                </span>
                                <span className="tab-rating ps-1">
                                    <StarFilled />
                                </span>
                                <span className="tab-rating ps-1">
                                    <StarFilled />
                                </span>
                                <span className="tab-rating ps-1">
                                    <StarFilled />
                                </span>
                                <span className="reviewnumber fw-bold ps-3">
                                    (4,594 reviews)
                                </span>
                            </div>
                            <div>
                                <p>{t(buildingInfo?.building_description)}</p>
                            </div>
                        </div>
                    </div>
                    {/* end:Tab 2*/}
                </>
            )}

        </>
    )
}

export default React.memo(BuildingInformation)
