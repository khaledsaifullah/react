import {FC, useEffect, useState} from "react";
import { Card } from "antd";
import { useParams } from "react-router-dom";
import { useLang } from "../../../../../hooks/useLang";
import { useOrganizationList } from "../../../../../hooks/lists/useOrganizationList";
import { useServiceMappingList } from "../../../../../hooks/lists/useServiceMappingList";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";
import ApplyButton from "../../../../../components/Actions/ApplyButton";
import "./ServiceInstruction.style.scss";

const ServiceInstruction: FC<any> = (props) => {
    const { t, lang } = useLang();
    const { loading } = props;

    const { organizationShortCode, serviceSlug } = useParams();
    const { serviceList } = useServiceMappingList();
    const { activeOrganizationList } = useOrganizationList();

    const [currentOrganization, setCurrentOrganization] = useState<any>({id: null});
    const [currentServices, setCurrentServices] = useState<any>({id: null, slug: null});

    useEffect(() => {
        if (activeOrganizationList.length && organizationShortCode) {
            const item = activeOrganizationList.find((o) => o.short_name.toUpperCase() == String(organizationShortCode).toUpperCase());
            setCurrentOrganization(item);
        }
    }, [activeOrganizationList.length, organizationShortCode]);

    useEffect(() => {
        if (serviceList.length && currentOrganization.id) {
            const item = serviceList.find((o) => o.slug === serviceSlug && o.organization_id === currentOrganization.id);
            setCurrentServices(item);
        }
    }, [serviceList.length, currentOrganization.id]);

    return (
        <div className="container">
            <ContextJSX>
                <BodyClassName className="component-license-service-instruction" />
                <MetaTag>
                    <MetaTag.Title>{lang === "en" ? currentServices?.name_en : currentServices?.name_bn}</MetaTag.Title>
                </MetaTag>
                <Header>
                    <Header.PageTitle>{lang === "en" ? currentServices?.name_en : currentServices?.name_bn}</Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item>{lang === "en" ? currentServices?.name_en : currentServices?.name_bn}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>
            <Card className="card-service-content text-center shadow mb-5 rounded card-negative-margin">
                <div className="service-description">
                    <div className="h5">
                        {lang === "en" ? currentServices?.description_en : currentServices?.description_bn}
                    </div>
                    {/* {serviceSlug === currentServices?.slug && (
                        <div className="text-center mt-3">
                            <p className="small mb-0 mt-2 text-muted">{ t('Please make sure you have read all the requirements and other information here below') }</p>
                        </div>
                    )} */}
                </div>
            </Card>

            {/* <section className="text-center my-5">
                <h3 className="text-uppercase fw-bold section-title mb-0 h4">{t("Before Applying")}</h3>
                <p className="text-muted">{t("The following eligibility requirements needs to met before the application")}</p>
                <Card className="shadow text-start rounded">
                </Card>
            </section> */}

            {serviceSlug == currentServices?.slug && (
                <div className="text-center mb-5">
                    <ApplyButton
                        className="btn-apply-large text-uppercase fw-bold"
                        loading={loading}
                        organizationShortCode={organizationShortCode}
                        currentOrganization={currentOrganization}
                        currentServices={currentServices}
                        serviceUrl={currentServices?.slug}
                    />
                </div>


            )}
        </div>
    );
};

export default ServiceInstruction;
