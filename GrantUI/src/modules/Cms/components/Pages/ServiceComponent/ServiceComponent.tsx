import React, { FC, useEffect } from "react";
import { Form, Input, Select, Button, Row, Col, Tabs, Card } from "antd";
import { filtericonsearch, readmoreicon, etsearchicon, leaficon} from "../../../../../assets/images/pages/component";
import { useLang } from "../../../../../hooks/useLang";
import OrganizationwiseService from "./OrganizationwiseService";
import { useLoading } from "../../../../../hooks/useLoading";
import { useOrganizationList } from "../../../../../hooks/lists/useOrganizationList";
import { GRANT_COMPONENT_KEY } from "../../../../../constants/common.constant";
import { useCircularCodeList } from "../../../../../hooks/lists/useCircularCodeList";
import pageIcon from "../../../../../assets/images/icon/microscope-side-view.png";
import gobIcon from "../../../../../assets/images/icon/most-icon.png";
import { useServiceMappingList } from "../../../../../hooks/lists/useServiceMappingList";
import AppImage from "../../../../../components/Image/AppImage";
import Header from "../../../../../components/Header";
import ContextJsx from "../../../../../components/ContextJsx";
import "./ServiceComponent.style.scss";

const ServiceComponent: FC<any> = (props) => {
    const { TabPane } = Tabs;
    const { Option } = Select;
    const { t, lang } = useLang();

    const { activeOrganizationList } = useOrganizationList();
    const { serviceList } = useServiceMappingList();
    const { circularCodeList } = useCircularCodeList();
    const { showLoading, hideLoading } = useLoading();

    const grantComponentOrganization = activeOrganizationList.filter((item) => item.component_keys?.includes(GRANT_COMPONENT_KEY));

    useEffect(() => {
        showLoading();
        if (activeOrganizationList.length > 0) {
            hideLoading();
        }
    }, [activeOrganizationList])

    useEffect(() => {
        showLoading();
        if (serviceList.length > 0) {
            hideLoading();
        }
    }, [serviceList])

    useEffect(() => {
        showLoading();
        if (circularCodeList.length > 0) {
            hideLoading();
        }
    }, [circularCodeList])

    return (
        <div>
            <div className="container">
                <ContextJsx>
                    <Header>
                        <Header.PageTitle>{'Grants/Fellowship'}</Header.PageTitle>
                        <Header.PageIcon>{pageIcon}</Header.PageIcon>
                    </Header>
                </ContextJsx>
                <Card className="card-service-content text-center shadow mb-5 rounded card-negative-margin">
                    <div className="h5">
                        Monotonectally enhance intuitive best practices before wireless bandwidth. Authoritatively architect dynamic manufactured products through sticky sources. Interactively aggregate integrated opportunities via fully researched total linkage.
                    </div>
                </Card>

                <section className="my-5">
                    <h3 className="text-center text-uppercase fw-bold section-title mb-0 h4">{t("Services")}</h3>
                    <p className="text-center text-muted">{t('The service can be availed from the following ogranizations with their own varities')}</p>

                    <div className="service-tab-content">
                        <Tabs onChange={(val) => console.log("?")} type="card">
                            {grantComponentOrganization?.map((organizationitem, index) => (
                                <TabPane
                                    tab={
                                        <span className="text-dark">
                                            {organizationitem.logo_image ? (
                                                <AppImage imageServer='CDN' src={organizationitem.logo_image} alt={organizationitem.short_name} className="me-1" width='45' height='45' />

                                            ) : (
                                                <AppImage imageServer='LOCAL' src={gobIcon} alt={organizationitem.short_name} className="me-1" width='45' height='45' />

                                            )}
                                            {organizationitem.short_name}
                                        </span>
                                    }
                                    key={index + 2}
                                >
                                    <h4>{lang == "en" ? organizationitem.name_en : organizationitem.name_bn}</h4>
                                    <div className="service-tab-filter mb-3 p-3">
                                        <Row gutter={[16, 16]}>
                                            <Col xs={12} md={10}>
                                                <div className="filter-block-input">
                                                    <Form.Item name="licence_number " className="mb-0">
                                                        <Input placeholder="Type the Service to Filter... " />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={10}>
                                                <div className="serviceseeker-block-input">
                                                    <Form.Item name="gender">
                                                        <Select placeholder="Choose your type">
                                                            <Option value={"Citizen"}>Citizen </Option>
                                                            <Option value={"Student"}>Student</Option>
                                                            <Option value={"Businessman"}>Businessman</Option>
                                                            <Option value={"Researcher"}>Researcher</Option>
                                                            <Option value={"Scientist"}>Scientist</Option>
                                                            <Option value={"Institute/Organization"}>Institute/Organization</Option>
                                                        </Select>
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4}>
                                                <div className="serviceseeker-btn">
                                                    <Button>
                                                        <img src={filtericonsearch} alt="filtericonsearch" />
                                                        {t('Filter')}
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="tab-data-content">
                                        <Row gutter={[16, 16]}>
                                            <OrganizationwiseService
                                                serviceList={serviceList}
                                                organizationitem={organizationitem}
                                                circularList={circularCodeList}
                                                etsearchicon={etsearchicon}
                                                readmoreicon={readmoreicon}
                                                leaficon={leaficon}
                                            />
                                        </Row>
                                    </div>
                                </TabPane>
                            ))}
                        </Tabs>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServiceComponent;
