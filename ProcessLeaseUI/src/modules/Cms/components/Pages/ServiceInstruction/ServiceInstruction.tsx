import React, {FC, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useLang } from "../../../../../hooks/useLang";
import { useOrganizationList } from "../../../../../hooks/lists/useOrganizationList";
import { Card } from "antd";
import "./ServiceInstruction.style.scss";

const ServiceInstruction: FC<any> = (props) => {
    const { t, lang } = useLang();
    const { loading } = props;

    const { organizationShortCode } = useParams();
    const { activeOrganizationList } = useOrganizationList();

    const [currentOrganization, setCurrentOrganization] = useState<any>({id: null});

    useEffect(() => {
        if (activeOrganizationList.length && organizationShortCode) {
            const item = activeOrganizationList.find((o) => o.short_name.toUpperCase() == String(organizationShortCode).toUpperCase());
            setCurrentOrganization(item);
        }
    }, [activeOrganizationList.length, organizationShortCode]);

    return (
        <div className="container">
            <Card className="card-service-content text-center shadow mb-5 rounded card-negative-margin">
                <div className="service-description">

                </div>
            </Card>

            <section className="text-center my-5">
                <h3 className="text-uppercase fw-bold section-title mb-0 h4">{t("Before Applying")}</h3>
                <p className="text-muted">{t("The following eligibility requirements needs to met before the application")}</p>
            </section>
        </div>
    );
};

export default ServiceInstruction;
