import React, { FC, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useLang } from "@/hooks/useLang";
import { useOrganizationList } from "@/hooks/lists/useOrganizationList";
import { Card, Col, Row } from "antd";
import ServiceInstructionContent from "./ServiceInstructionContent";
import pageIcon from "@/assets/images/icon/microscope-side-view.png";
import { useServiceMappingList } from "@/hooks/lists/useServiceMappingList";
import { CONSTANT_CONFIG } from "@/constants";
import Header from "@/components/Header";
import ContextJsx from "@/components/ContextJsx";
import "./ServiceInstruction.style.scss";
import ServicewiseApplyButton from "./ServicewiseApplyButton";
import queryString, { parse } from "query-string";
import { TestServiceMapApi } from "@/api";
import { Message } from "@/utils";
import { useLoading } from "@/hooks/useLoading";
import PriceVariationListController from "@/modules/TestConsultancy/components/TestServiceMap/AddMore/PriceVariation/List/PriceVariationList.controller";
import { useDesignationList } from "@/hooks/lists/useDesignationList";

const ServiceInstruction: FC<any> = (props) => {
    const { t, lang } = useLang();
    const location = useLocation();
    const { organizationShortCode, serviceSlug } = useParams();
    const { serviceList } = useServiceMappingList();
    const { activeOrganizationList } = useOrganizationList();
    const { getDesignationById } = useDesignationList();
    const queryParams = parse(location.search);
    const [currentOrganization, setCurrentOrganization] = useState<any>({ id: null });
    const [currentServices, setCurrentServices] = useState<any>({ id: null, name_en: null, name_bn: null, description_en: null, description_bn: null, slug: null });
    const [testServiceMapping, setTestServiceMapping] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const { showLoading, hideLoading } = useLoading();

    useEffect(() => {
        if (activeOrganizationList.length && organizationShortCode) {
            const item = activeOrganizationList.find((o) => o.short_name.toUpperCase() == String(organizationShortCode).toUpperCase());
            setCurrentOrganization(item);
        }
    }, [activeOrganizationList, organizationShortCode]);

    useEffect(() => {
        if (serviceList.length && currentOrganization.id) {
            const item = serviceList.find((o) => o.slug === serviceSlug && o.organization_id == currentOrganization.id);
            setCurrentServices(item);
        }
    }, [serviceList, currentOrganization]);


    useEffect(() => {
        if (queryParams.id) {
            loadData();
        }
    }, [queryParams.id]);




    const loadData = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            showLoading()
            let customFilter = "";
            customFilter = `id=${queryParams.id}`
            const payload = {
                $filter: customFilter
            };
            TestServiceMapApi.list(payload)
                .then((res) => {
                    setTestServiceMapping(res.data.results);
                    //   setTotalCount(res.data.meta.totalCount);
                    setLoading(false);
                    resolve(res);
                })
                .catch((err) => {
                    console.error("error", err);
                    Message.error("A network error occurred. Please try again later.");
                    reject(err);
                })
                .finally(() => {
                    setLoading(false);
                    hideLoading();
                });
        });
    };





    return (
        <div className="container">
            <ContextJsx>
                <Header>
                    <Header.PageTitle>{lang === "en" ? currentServices?.name_en : currentServices?.name_bn}</Header.PageTitle>
                    <Header.PageIcon>{pageIcon}</Header.PageIcon>
                    {/* <Header.PageImage>{currentServices.image ? CONSTANT_CONFIG.MEDIA_SOURCE + currentServices.image : ""}</Header.PageImage> */}
                </Header>
            </ContextJsx>
            <Card className="card-service-content text-center shadow mb-5 rounded card-negative-margin">
                <div className="service-description">
                    <div className="h4 fw-bold">
                        {lang === "en" ? currentServices?.description_en : currentServices?.description_bn}
                    </div>
                    <div className="h5">
                        {lang === "en" ? testServiceMapping[0]?.name_en : testServiceMapping[0]?.name_bn}
                    </div>
                    {/* {serviceSlug == currentServices?.slug && (
                        <div className="text-center mt-3">
                            <ServicewiseApplyButton
                                className="btn-apply-large text-uppercase fw-bold"
                                organizationShortCode={organizationShortCode}
                                serviceId={currentServices}
                                serviceUrl={currentServices?.slug}
                                currentServiceId={currentServices?.id}
                            />
                            <p className="small mb-0 mt-2 text-muted">{ t('Please make sure you have read all the requirements and other information here below') }</p>
                        </div>
                    )} */}
                </div>
            </Card>

            <section className="text-center my-5">
                <h3 className="text-uppercase fw-bold section-title mb-0 h4">{t("Before Applying")}</h3>
                <p className="text-muted">{t("The following eligibility requirements needs to met before the application")}</p>
                <Card className="shadow text-start rounded">
                    <ServiceInstructionContent testServiceMapping={testServiceMapping[0]} />
                </Card>
            </section>



            {serviceSlug == currentServices?.slug && (
                <div className="text-center mb-5">
                    <ServicewiseApplyButton
                        className="btn-apply-large text-uppercase fw-bold"
                        organizationShortCode={organizationShortCode}
                        serviceId={currentServices?.id}
                        testServiceMapId={testServiceMapping[0]?.id}
                        serviceUrl={currentServices?.slug}
                    />
                </div>
            )}

            <Row gutter={[16, 16]}>
                <Col span={12} xs={24} sm={12}>
                    <div className="mb-3">
                        <h3 className="bordered-title text-uppercase h5">
                            {t('Service Price')}
                        </h3>
                        {testServiceMapping[0]?.fees != 0.00 && (
                            testServiceMapping[0]?.fees
                        )}

                        <table className="table">
                            <tr>
                                <th>{t('SN')}</th>
                                <th>{t('Sample')}</th>
                                <th>{t('Element')}</th>
                                <th> {t('Unit')}</th>
                                <th>{t('Pricing Type')} </th>
                                <th>{t('Price')} </th>

                            </tr>
                            {testServiceMapping[0]?.fees == 0.00 && testServiceMapping[0]?.mappingVariationData?.map((item, index) => (
                                <tr>
                                    <td className="td-sn">
                                        <div>{index + 1}</div>
                                    </td>
                                    <td>{item.sample_en}</td>
                                    <td>{item.element_en}</td>
                                    <td>{item.unit_en}</td>
                                    <td>{item.pricing_type}</td>
                                    <td>{item.price}</td>

                                </tr>
                            ))}
                        </table>
                    </div>
                </Col>
                <Col span={12} xs={24} sm={12}>

                    <div className="mb-3 mb-sm-0">
                        <h3 className="bordered-title text-uppercase h5">
                            {t('Responsible Officer')}
                        </h3>
                        <div className="instruction-item-content">
                            {testServiceMapping[0]?.contactPersonData?.map((item, index) => (
                                <>
                                   <div>{lang === "en" ? item.employee_en : item.employee_bn}</div>
                                    <div>{lang === "en" ? getDesignationById(item.employee_id)?.name_en : getDesignationById(item.employee_id)?.name_en}</div>
                                    <div>{item.contact_person_no}</div>
                                    <div>{item.telephone_no}</div>
                                    <div>{item.remarks}</div>
                                </>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ServiceInstruction;
