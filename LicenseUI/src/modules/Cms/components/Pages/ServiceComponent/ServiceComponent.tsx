import { FC } from "react";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import { useLang } from "../../../../../hooks/useLang";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { FileDoneOutlined } from '@ant-design/icons';
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";
import "./ServiceComponent.style.scss";
import { SECURITY_UI_URL } from "../../../../../constants/config.constant";


const ServiceComponent: FC<any> = (props) => {
    const { t, lang, getLangUrl } = useLang();

    return (
        <div>
            <ContextJSX>
                <BodyClassName className="service-component-license" />
                <MetaTag>
                    <MetaTag.Title>{t('Category: Licensing')}</MetaTag.Title>
                </MetaTag>
                <Header>
                    <Header.PageTitle>{t('Category: Licensing')}</Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item>{t('Category: Licensing')}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>

            <div className="container">
                <Card className="card-service-content text-center shadow mb-5 p-5 rounded card-negative-margin">
                    <div className="mx-auto" style={{ maxWidth: '800px' }}>
                        <div className="h5 mb-4">
                            {t('Manage all the Licensing, Permit, NOC related tasks. You can apply using the permitted application, pay the necessary fees in both online and offline and can get the License/Permit/NOC being at home over the Internet.')}
                        </div>
                        <a href={`${SECURITY_UI_URL}/${lang}/categorywise-services/2`} className="btn btn-primary">
                            <FileDoneOutlined className="me-2" />
                            {t('Get all the Services associated to the License/Permit/NOC')}
                        </a>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ServiceComponent;
