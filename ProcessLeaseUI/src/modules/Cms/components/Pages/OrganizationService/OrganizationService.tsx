import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom';
import { Form, Input, Select, Button, Row, Col, Tabs } from 'antd';
import {
    filtericonsearch, rearchicon, readmoreicon, etsearchicon, leaficon,
    tabtitlelogogranfellow, tabtitlelogoeticketig, tabtitlelogolicensngpermit
} from "../../../../../assets/images/pages/organization";
import './OrganizationService.style.scss';
import { useLang } from "../../../../../hooks/useLang";
import { headerbannerfive } from "../../../../../assets/images/pages/instruction";
import { OrganizationApi, ServicesApi } from '../../../../../api';
import { Message } from "../../../../../utils";

const OrganizationService: FC<any> = props => {
    const { TabPane } = Tabs;
    const { Option } = Select;
    const { lang, getLangUrl } = useLang();
 
    

    return (
        <div className="pageone-content">
            <div className="header-banner"><img src={headerbannerfive} alt="headerbanner" /></div>

            <div className="grant-fellowship-content">
                <h3>Ministry of Science & Technology (MoST) </h3>
                <div className="grant-fellowship-content-text">
                    <p>
                        Ministry of Science and Technology, Government of the People’s Republic of Bangladesh
                        is promoting Science and Technology as stewardship of positive change in society and for
                        balanced socio-economic upliftment, national well-being and thus to make Science and
                        Technology a part of national culture. The use of Science and Technology as a means of sustainable
                        use of Environment, Ecosystem and Resources contribute to world pool of knowledge in Science and Technology.
                    </p>
                </div>
            </div>

            <div className="service-content-area">
                <h3>SERVICES</h3>
                <h4>All the services under each component can be availed individually </h4>
                <div className="service-tab-content">
                    <Tabs onChange={(value) => console.log("??")} type="card">
                        <TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"><img
                            src={tabtitlelogogranfellow} alt="logo" /> </span><span
                                className="tab-title-name">Grants/Fellowship</span></span>} key="1">
                            <div className="service-tab-title">
                                <h4>Ministry of Science & Technology (MoST)</h4>
                            </div>

                            <div className="service-tab-filter">
                                <Row gutter={[16, 16]}>
                                    <Col xs={12} md={10}>
                                        <div className="filter-block-input">
                                            <Form.Item name="licence_number ">
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
                                            <Button><img src={filtericonsearch} alt="filtericonsearch" /> Filter</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            
                            {/* <div className="tab-data-content">
                                <div className="tab-data-row">
                                    <div className="tabdata-picture">
                                        <div className="tabdata-picture-box"><img src={etsearchicon} alt="rearchicon" /> </div>
                                    </div>
                                    <div className="tabdata-text">
                                        <h3>NST Fellowship</h3>
                                        <p>
                                            The Ministry of Science and Technology awards National Science and Technology (NST) Fellowships to MS / MPhil, PhD and Post-Doctoral level students/researchers in science and technology related subjects at various universities for the development of science and technology.
                                        </p>
                                    </div>
                                    <div className="tabdata-btn">
                                        <Link to={getLangUrl(lang, '/service-instruction/nst-fellowship-form')}>
                                            <Button className="detail-btn">DETAILS <img src={readmoreicon} alt="icon" /> </Button>
                                        </Link>
                                        <Link to={getLangUrl(lang, '/service-instruction/nst-fellowship-form')}>
                                            <Button className="apply-btn">APPLY <img src={leaficon} alt="icon" /> </Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="tab-data-row">
                                    <div className="tabdata-picture">
                                        <div className="tabdata-picture-box"><img src={rearchicon} alt="rearchicon" /> </div>
                                    </div>
                                    <div className="tabdata-text">
                                        <h3>Special Research Grant</h3>
                                        <p>Special research grants are provided by the Ministry of Science and Technology for research projects to encourage and inspire research and development work in science and technology. Special research grants are given annually in six (6) groups including Biological Science, Medical Science, Environmental Science, Engineering and Applied Science, Physical Science and Inter-disciplinary group.
                                        </p>
                                    </div>
                                    <div className="tabdata-btn">
                                        <Button className="detail-btn">DETAILS <img src={readmoreicon} alt="icon" /> </Button>
                                        <Button className="apply-btn">APPLY <img src={leaficon} alt="icon" /> </Button>
                                    </div>
                                </div>

                            </div> */}


                        </TabPane>


                        <TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"> <img
                            src={tabtitlelogoeticketig} alt="logo" /> </span><span
                                className="tab-title-name"> E-Ticketing</span></span>} key="2">
                            Sorry! No result found.
                        </TabPane>
                        <TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"> <img
                            src={tabtitlelogolicensngpermit} alt="logo" /> </span><span
                                className="tab-title-name"> E-Ticketing</span></span>} key="3">
                            Sorry! No result found.
                        </TabPane>

                    </Tabs>

                </div>

            </div>


        </div>
    );
}

export default OrganizationService;