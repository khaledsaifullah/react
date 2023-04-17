import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { Form, Input, Select, Button, Row, Col, Tabs } from 'antd';
import {
    headerbannerthree, filtericonsearch, rearchicon, readmoreicon, etsearchicon, leaficon,
    citizen, tabtitlelogonmst, tabtitlelogobansdoc, tabtitlelogomost, tabtitlelogobcsir, tabtitlelogobricm
} from "../../../../../assets/images/pages/seeker";
import './ServiceSeeker.style.scss';
import { useLang } from "../../../../../hooks/useLang";

const ServiceSeeker: FC<any> = props => {
    const { TabPane } = Tabs;
    const { Option } = Select;
    const { lang, getLangUrl } = useLang();
    return (
        <div className="pageone-content">
            <div className="header-banner"><img src={headerbannerthree} alt="headerbanner" /></div>

            <div className="grant-fellowship-content">
                <div className="grantfellowship-icon"><img src={citizen} alt="citizen" /></div>
                <h3>Services for Citizen </h3>
                <div className="grant-fellowship-content-text">
                    <p>All the services that are targeted to all the general citizen of Bangladesh can be found here in this page. The services targetted to general citizen are mostly low cost services that can be availed by any citizen of Bangladesh.</p>
                </div>
            </div>

            <div className="service-content-area">
                <h3>SERVICES</h3>
                <h4> The service can be availed from the following ogranizations with their own varities </h4>
                <div className="service-tab-content">
                    <Tabs onChange={(value) => console.log("??")} type="card">
                        <TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"> </span><span className="tab-title-name">All</span></span>} key="1">
                            <div className="service-tab-title">
                                <h4>All Services</h4>
                            </div>
                            <div className="service-tab-filter">
                                <Row gutter={[16, 16]}>
                                    <Col xs={12} md={10}>
                                        <div className="filter-block-input">
                                            <Form.Item name="licence_number " >
                                                <Input placeholder="Type the Service to Filter... " />
                                            </Form.Item>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <div className="serviceseeker-block-input">
                                            <Form.Item name="gender">
                                                <Select placeholder="Choose your type" >
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

                            <div className="tab-data-content">
                                <div className="tab-data-row">
                                    <div className="tabdata-picture">
                                        <div className="tabdata-picture-box"><img src={etsearchicon} alt="rearchicon" /> </div>
                                    </div>
                                    <div className="tabdata-text">
                                        <div className="tabdata-text-small">Ministry of Science and Technology (MoST) </div>
                                        <h3>NST Fellowship</h3>
                                        <p>
                                            The Ministry of Science and Technology awards National Science and Technology (NST) Fellowships to MS / MPhil, PhD and Post-Doctoral level students/researchers in science and technology related subjects at various universities for the development of science and technology.
                                        </p>
                                    </div>
                                    <div className="tabdata-btn">
                                        <Link to={getLangUrl(lang, '/service-instruction')}>
                                            <Button className="detail-btn">DETAILS <img src={readmoreicon} alt="icon" /> </Button>
                                        </Link>
                                        <Link to={getLangUrl(lang, '/service-instruction')}>
                                            <Button className="apply-btn">APPLY <img src={leaficon} alt="icon" /> </Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="tab-data-row">
                                    <div className="tabdata-picture">
                                        <div className="tabdata-picture-box"><img src={rearchicon} alt="rearchicon" /> </div>
                                    </div>
                                    <div className="tabdata-text">
                                        <div className="tabdata-text-small">Ministry of Science and Technology (MoST) </div>
                                        <h3>Special Research Grant</h3>
                                        <p>Special research grants are provided by the Ministry of Science and Technology for research projects to encourage and inspire research and development work in science and technology. Special research grants are given annually in six (6) groups including Biological Science, Medical Science, Environmental Science, Engineering and Applied Science, Physical Science and Inter-disciplinary group. </p>
                                    </div>
                                    <div className="tabdata-btn">
                                        <Link to={getLangUrl(lang, '/service-instruction/scientific-organization-grant-form')}>
                                            <Button className="detail-btn">DETAILS <img src={readmoreicon} alt="icon" /> </Button>
                                        </Link>
                                        <Link to={getLangUrl(lang, '/service-instruction/scientific-organization-grant-form')}>
                                            <Button className="apply-btn">APPLY <img src={leaficon} alt="icon" /> </Button>
                                        </Link>
                                    </div>
                                </div>


                                <div className="tab-data-row">
                                    <div className="tabdata-picture">
                                        <div className="tabdata-picture-box"><img src={rearchicon} alt="rearchicon" /> </div>
                                    </div>
                                    <div className="tabdata-text">
                                        <div className="tabdata-text-small">Ministry of Science and Technology (MoST) </div>
                                        <h3>Scientific Organizations & Institutions</h3>
                                        <p>Scientific Organizations & Institutions Grants are by the Ministry of Science and Technology for research projects to encourage and inspire research and development work in science and technology. Special research grants are given annually in six (6) groups including Biological Science, Medical Science, Environmental Science, Engineering and Applied Science, Physical Science and Inter-disciplinary group. </p>
                                    </div>
                                    <div className="tabdata-btn">
                                        <Link to={getLangUrl(lang, '/service-instruction/scientific-organization-grant-form')}>
                                            <Button className="detail-btn">DETAILS <img src={readmoreicon} alt="icon" /> </Button>
                                        </Link>
                                        <Link to={getLangUrl(lang, '/service-instruction/scientific-organization-grant-form')}>
                                            <Button className="apply-btn">APPLY <img src={leaficon} alt="icon" /> </Button>
                                        </Link>
                                    </div>
                                </div>

                            </div>



                        </TabPane>

                        <TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"><img src={tabtitlelogomost} alt="logo" /></span><span className="tab-title-name">MoST</span></span>} key="2">
                            <div className="service-tab-title">
                                <h4>Ministry of Science and Technology (MoST) </h4>
                            </div>
                            <div className="service-tab-filter">
                                <Row gutter={[16, 16]}>
                                    <Col xs={12} md={10}>
                                        <div className="filter-block-input">
                                            <Form.Item name="licence_number " >
                                                <Input placeholder="Type the Service to Filter... " />
                                            </Form.Item>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <div className="serviceseeker-block-input">
                                            <Form.Item name="gender">
                                                <Select placeholder="Choose your type" >
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

                            <div className="tab-data-content">
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
                                        <Link to={getLangUrl(lang, '/service-instruction')}>
                                            <Button className="detail-btn">DETAILS <img src={readmoreicon} alt="icon" /> </Button>
                                        </Link>
                                        <Link to={getLangUrl(lang, '/service-instruction')}>
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
                                        <p>Special research grants are provided by the Ministry of Science and Technology for research projects to encourage and inspire research and development work in science and technology. Special research grants are given annually in six (6) groups including Biological Science, Medical Science, Environmental Science, Engineering and Applied Science, Physical Science and Inter-disciplinary group. </p>
                                    </div>
                                    <div className="tabdata-btn">
                                        <Button className="detail-btn">DETAILS <img src={readmoreicon} alt="icon" /> </Button>
                                        <Button className="apply-btn">APPLY <img src={leaficon} alt="icon" /> </Button>
                                    </div>
                                </div>

                            </div>
                        </TabPane>


                        <TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"><img src={tabtitlelogonmst} alt="logo" /></span><span className="tab-title-name">NMST</span></span>} key="3">
                            Sorry! No result found.
                        </TabPane>

                        <TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"><img src={tabtitlelogobansdoc} alt="logo" /></span><span className="tab-title-name">BANSDOC</span></span>} key="4">
                            Sorry! No result found.
                        </TabPane>

                        <TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"><img src={tabtitlelogobcsir} alt="logo" /></span><span className="tab-title-name">BCSIR</span></span>} key="5">
                            Sorry! No result found.
                        </TabPane>

                        <TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"><img src={tabtitlelogobricm} alt="logo" /></span><span className="tab-title-name">BRiCM</span></span>} key="6">
                            Sorry! No result found.
                        </TabPane>
                    </Tabs>
                </div>

            </div>


        </div>
    );
}

export default ServiceSeeker;