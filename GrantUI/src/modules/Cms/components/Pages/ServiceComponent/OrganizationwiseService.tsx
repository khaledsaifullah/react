import React, { useEffect} from "react";
import { Col, Card } from "antd";
import { Link } from "react-router-dom";
import { useLang } from "../../../../../hooks/useLang";
import { useLoading } from "../../../../../hooks/useLoading";

interface Props {
    serviceList: any;
    organizationitem: any;
    etsearchicon: any;
    readmoreicon: any;
    leaficon: any;
    circularList: any;
}

const OrganizationwiseService: React.FC<Props> = (props: Props) => {
    const { serviceList, organizationitem, circularList, etsearchicon, readmoreicon, leaficon } = props;
    const { t, lang, getLangUrl } = useLang();
    const { showLoading, hideLoading } = useLoading();

    useEffect(() => {
        showLoading();
        if (organizationitem.length > 0) {
            hideLoading();
        }
    }, [organizationitem])

    useEffect(() => {
        showLoading();
        if (serviceList.length > 0) {
            hideLoading();
        }
    }, [serviceList])

    useEffect(() => {
        showLoading();
        if (circularList.length > 0) {
            hideLoading();
        }
    }, [circularList])

    return (
        <>
            {organizationitem && serviceList.filter((item) => item.organization_id == organizationitem.id).map((serviceitem, index) => (
                <Col key={`org-service-${index}`} span={8} md={8} sm={12} xs={24}>
                    <Link to={getLangUrl(lang,`/services/${organizationitem.short_name.toLowerCase()}/${serviceitem.slug}`)}>
                        <Card className="org-service-card">
                            <div className="org-service-card-img d-inline-block p-3 mb-2">
                                <img src={etsearchicon} alt="rearchicon" width="30" height="30" className="mw-100" />
                            </div>
                            <h5 className="org-service-card-title">
                                {lang == "en" ? serviceitem.name_en : serviceitem.name_bn}
                            </h5>
                            <p>{lang == "en" ? serviceitem.description_en : serviceitem.description_bn}</p>
                            <div className="fw-bold">{ t('Learn More...') }</div>
                        </Card>
                    </Link>
                </Col>
            ))}
        </>
    );
};

export default React.memo(OrganizationwiseService);
