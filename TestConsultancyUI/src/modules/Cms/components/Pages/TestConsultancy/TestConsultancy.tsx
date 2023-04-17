import React, { FC, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Form, Button, Row, Col, Tabs, Space, Card } from "antd";
import { useLang } from "../../../../../hooks/useLang";
import { AuthContext } from "../../../../../context/auth/auth.context";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";
import { VisitorContext } from "../../../../../context/data/VisitorContext";
import "./TestConsultancy.style.scss";


const TestConsultancy: FC<any> = (props) => {
    const { lang, getUserLangUrl, getLangUrl } = useLang();

    const { serviceOrganizationShortCode } = useContext(VisitorContext);
    const { t } = useLang();
    return (
        <div className="pageone-content">
            <div className="container">
                <ContextJSX>
                    <BodyClassName className={`about-us-body-class`} />
                    <MetaTag>
                        <MetaTag.Title>
                            {t("Test Consultancy Components")}
                        </MetaTag.Title>
                    </MetaTag>
                    <Header>
                        <Header.PageTitle>
                            {t("Test Consultancy Components")}
                        </Header.PageTitle>
                    </Header>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            {t("TestConsultancy Components")}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </ContextJSX>
                <Card className="shadow rounded">
                    <h3>Ministry of Science & Technology</h3>
                    <p>
                        Ministry of Science and Technology, Government of the
                        People’s Republic of Bangladesh is promoting Science and
                        Technology as stewardship of positive change in society
                        and for balanced socio-economic upliftment, national
                        well-being and thus to make Science and Technology a
                        part of national culture. The use of Science and
                        Technology as a means of sustainable use of Environment,
                        Ecosystem and Resources contribute to world pool of
                        knowledge in Science and Technology.
                    </p>
                </Card>
            </div>
            <div className="test_consultancy_button_group">
                <Space>
                    <Link to={getLangUrl(lang, "/services/:organizationShortCode/doctors-list")}>
                        <Button type="primary">All Doctors</Button>
                    </Link>
                    <Link to={getLangUrl(lang, "/services/:organizationShortCode/equipments-list")}>
                        <Button type="primary">All Equipments</Button>
                    </Link>
                    <Link to={getLangUrl(lang, "/services/:organizationShortCode/service-list")}>
                        <Button type="primary">All Services</Button>
                    </Link>
                </Space>
            </div>
        </div>
    );
};

export default TestConsultancy;
