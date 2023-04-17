import React, { FC } from "react";
import { Card } from "antd";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import {BodyClassName} from "../../../../../components/BodyClassName/BodyClassName";
import {HomeOutlined} from "@ant-design/icons";
import "./AboutUs.style.scss";

const AboutUs: FC<any> = (props) => {
    return (
        <div className="container">
            <ContextJSX>
                <BodyClassName className={`about-us-body-class`} />
                <MetaTag>
                    <MetaTag.Title>About Us</MetaTag.Title>
                    <MetaTag.Tag name="description" content="About Us Description 2" />
                </MetaTag>
                <Header>
                    <Header.PageTitle>{'About us'}</Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item wrapOnly={true}>
                        <HomeOutlined />
                        <span className="visually-hidden">Home</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item to={"/about-us"}>Breadcrumb 2</Breadcrumb.Item>
                    <Breadcrumb.Item withoutSeparator={false}>Breadcrumb 3</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>
            <Card className="shadow mb-5 rounded card-negative-margin">
                <h2>Ministry of Science & Technology</h2>
                <p>
                    Ministry of Science and Technology, Government of the People’s
                    Republic of Bangladesh is promoting Science and Technology as
                    stewardship of positive change in society and for balanced
                    socio-economic upliftment, national well-being and thus to make
                    Science and Technology a part of national culture. The use of
                    Science and Technology as a means of sustainable use of Environment,
                    Ecosystem and Resources contribute to world pool of knowledge in
                    Science and Technology.{" "}
                </p>
            </Card>
        </div>
    );
};

export default AboutUs;
