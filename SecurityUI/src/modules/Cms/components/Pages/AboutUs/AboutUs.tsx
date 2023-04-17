import React, { FC } from "react";
import { Card } from "antd";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import {BodyClassName} from "../../../../../components/BodyClassName/BodyClassName";
import {HomeOutlined} from "@ant-design/icons";
import "./AboutUs.style.scss";
import { useLang } from "../../../../../hooks/useLang";

const AboutUs: FC<any> = (props) => {
    const { t } = useLang();
    return (
        <div className="container">
            <ContextJSX>
                <BodyClassName className={`about-us-body-class`} />
                <MetaTag>
                    <MetaTag.Title>{t('About us')}</MetaTag.Title>
                    <MetaTag.Tag name="description" content="About the Ministry of Science & Technology" />
                </MetaTag>
                <Header>
                    <Header.PageTitle>{t('About us')}</Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item>{t('About us')}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>
            <Card className="shadow rounded">
                <h3>Ministry of Science & Technology</h3>
                <p>
                    Ministry of Science and Technology, Government of the People’s
                    Republic of Bangladesh is promoting Science and Technology as
                    stewardship of positive change in society and for balanced
                    socio-economic upliftment, national well-being and thus to make
                    Science and Technology a part of national culture. The use of
                    Science and Technology as a means of sustainable use of Environment,
                    Ecosystem and Resources contribute to world pool of knowledge in
                    Science and Technology.
                </p>
            </Card>
        </div>
    );
};

export default AboutUs;
