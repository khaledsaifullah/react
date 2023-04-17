import React, {FC, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useLang } from "../../../../../hooks/useLang";
import CircularwiseApplyButton from "../../../../Grant/components/Application/NSTFellowship/Content/CircularwiseApplyButton";
import { useOrganizationList } from "../../../../../hooks/lists/useOrganizationList";
import { useCircularCodeList } from "../../../../../hooks/lists/useCircularCodeList";
import { Card } from "antd";
import ServiceInstructionContent from "./ServiceInstructionContent";
import pageIcon from "../../../../../assets/images/icon/microscope-side-view.png";
import { useServiceMappingList } from "../../../../../hooks/lists/useServiceMappingList";
import { CONSTANT_CONFIG } from "../../../../../constants";
import Header from "../../../../../components/Header";
import ContextJsx from "../../../../../components/ContextJsx";
import "./ServiceInstruction.style.scss";

const ServiceInstruction: FC<any> = (props) => {
    const { t, lang } = useLang();
    const { loading } = props;

    const { organizationShortCode, serviceSlug } = useParams();
    const { serviceList } = useServiceMappingList();
    const { activeOrganizationList } = useOrganizationList();
    const { circularCodeList } = useCircularCodeList();

    const [currentOrganization, setCurrentOrganization] = useState<any>({id: null});
    const [currentServices, setCurrentServices] = useState<any>({id: null, slug: null});
    const [circularData, setCircularData] = useState<any>({id: null});

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
        if (circularCodeList.length && currentServices.id) {
            const item = circularCodeList.find((o) => o.service_id == currentServices?.id && o.status == 1 && new Date(o.start_date) <= new Date() && new Date(o.last_date) >= new Date());
            setCircularData(item);
        }
    }, [circularCodeList, currentServices]);

    return (
        <div className="container">
            <ContextJsx>
                <Header>
                    <Header.PageTitle>{lang === "en" ? currentServices?.name_en : currentServices?.name_bn}</Header.PageTitle>
                    <Header.PageIcon>{pageIcon}</Header.PageIcon>
                    <Header.PageImage>{currentServices.image ? CONSTANT_CONFIG.MEDIA_SOURCE + currentServices.image : ""}</Header.PageImage>
                </Header>
            </ContextJsx>
            <Card className="card-service-content text-center shadow mb-5 rounded card-negative-margin">
                <div className="service-description">
                    <div className="h5">
                        {lang === "en" ? currentServices?.description_en : currentServices?.description_bn}
                    </div>
                    {serviceSlug == currentServices?.slug && (
                        <div className="text-center mt-3">
                            <CircularwiseApplyButton
                                className="btn-apply-large text-uppercase fw-bold"
                                loading={loading}
                                organizationShortCode={organizationShortCode}
                                circularId={circularData?.id}
                                circularData={circularData}
                                serviceUrl={currentServices?.slug}
                                currentServiceId={currentServices?.id}
                            />
                            <p className="small mb-0 mt-2 text-muted">{ t('Please make sure you have read all the requirements and other information here below') }</p>
                        </div>
                    )}
                </div>
            </Card>

            <section className="text-center my-5">
                <h3 className="text-uppercase fw-bold section-title mb-0 h4">{t("Before Applying")}</h3>
                <p className="text-muted">{t("The following eligibility requirements needs to met before the application")}</p>
                <Card className="shadow text-start rounded">
                    <ServiceInstructionContent circularData={circularData} />
                </Card>
            </section>

            {serviceSlug == currentServices?.slug && (
                <div className="text-center mb-5">
                    <CircularwiseApplyButton
                        className="btn-apply-large text-uppercase fw-bold"
                        loading={loading}
                        organizationShortCode={organizationShortCode}
                        circularId={circularData?.id}
                        circularData={circularData}
                        serviceUrl={currentServices?.slug}
                    />
                </div>
            )}
        </div>
    );
};

export default ServiceInstruction;
