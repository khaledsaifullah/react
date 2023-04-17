import React, { FC } from "react";
import { Row, Col, Card, Form, Input, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { useLang } from "../../../../../hooks/useLang";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";
import "./ServiceComponent.style.scss";
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

import {CalendarOutlined, TeamOutlined, BankOutlined,
    SolutionOutlined, HeartOutlined, ArrowRightOutlined,
    HeartFilled, RotateRightOutlined, BookOutlined,
    StarFilled, InstagramOutlined, LinkedinOutlined,
    TwitterOutlined, FacebookOutlined, EnvironmentOutlined,
    FieldTimeOutlined } from '@ant-design/icons';



import traingbanner from '../../../../../assets/images/pages/home/traingbanner.png';
import staricon from '../../../../../assets/images/icon/star-icon.png';
import governmentseal from '../../../../../assets/images/icon/government-seal.png';

import traingdetailbanner from '../../../../../assets/images/pages/home/traingdetailbanner.png';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);


const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues);
};


const ServiceComponent: FC<any> = (props) => {
    const { t, lang, getLangUrl } = useLang();

    return (
        <div className='main-content-body'>
                <section className='mt-5 mb-4'>
                    <div className="container">
                        <h2 className="text-center fw-bold page-title">Training Details</h2>
                     </div>
                </section>

                <section className="main-content-wrapper">
                    <div className="container">
                        <div className="shadow mb-5 bg-body">
                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={16}  className="d-flex">
                                    <img src={traingdetailbanner} className="img-fluid" alt=" " />
                                </Col>
                                <Col xs={24} md={8}>
                                     <div className="p-4">
                                        <h6 className="h6 lh-1 m-0 mb-2 opacity-25">Financial Year: 2021-2022</h6>
                                        <h5 className="h5 lh-1 mb-5 pb-5">Training Subject:Youtube Success: Script,
                                             shoot and edit with MBKGF</h5>
                                        <p className="m-0 mt-5 pt-5">Batch No :
                                            <span className="fw-bold" style={{ color: '#029A51' }}> 3rd</span>
                                        </p>
                                        <p className="m-0 mb-2">Last Date of Registration :
                                            <span className="fw-bold" style={{ color: '#F31605' }}> 20th August, 2022 </span>
                                        </p>
                                        <div>
                                            <span className="bg-dark bg-opacity-10 border border-1 opacity-50 px-2 me-2">Free</span>
                                            <span className="bg-dark bg-opacity-10 border border-1 opacity-50 px-2 me-2">Science-tech</span>
                                        </div>

                                     </div>

                                </Col>
                            </Row>
                            <div  className=" border border-1 p-4">
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={16}>
                                        <span  className="me-2 fs-3"><RotateRightOutlined  /> </span>
                                        <span className="me-5 fs-3"><BookOutlined /></span>
                                        <span className="me-2 fs-3 star-yellow"><StarFilled /></span>
                                        <span className="me-2 fs-3 star-yellow"><StarFilled /></span>
                                        <span className="me-2 fs-3 star-yellow"><StarFilled /></span>
                                        <span className="me-2 fs-3 star-yellow"><StarFilled /></span>
                                        <span className="me-2 fs-3 star-yellow"><StarFilled /></span>
                                        <span className="me-2 fs-3">4.50 (3 ratings)</span>
                                    </Col>
                                    <Col xs={24} md={8} className="text-center">
                                        <button type="button" className="btn btn-primary register-now-btn">Register Now</button>
                                    </Col>
                                </Row>
                            </div>


                            <div className="px-5 py-5 training-capacity">
                                    <div className="d-flex justify-content-around">
                                        <div  className="d-flex">
                                            <div><StarFilled /> </div>
                                            <div className="ps-2">
                                                <h6 className="h6 m-0 lh-1">Seat Capacity</h6>
                                                <span>200 Students</span>
                                            </div>
                                        </div>

                                        <div  className="d-flex ms-5">
                                            <div><StarFilled /> </div>
                                            <div className="ps-2">
                                                <h6 className="h6 m-0 lh-1">Course Fee </h6>
                                                <span>500 BDT. </span>
                                            </div>
                                        </div>

                                        <div  className="d-flex ms-5">
                                            <div><StarFilled /> </div>
                                            <div className="ps-2">
                                                <h6 className="h6 m-0 lh-1">Training Type </h6>
                                                <span>Internal </span>
                                            </div>
                                        </div>

                                        <div  className="d-flex ms-5">
                                            <div><StarFilled /> </div>
                                            <div className="ps-2">
                                                <h6 className="h6 m-0 lh-1">Category of Training </h6>
                                                <span>Short </span>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="d-flex justify-content-around mt-4">
                                        <div  className="d-flex">
                                            <div><StarFilled /> </div>
                                            <div className="ps-2">
                                                <h6 className="h6 m-0 lh-1">Participated Department/Section </h6>
                                                <span>IT </span>
                                            </div>
                                        </div>

                                        <div  className="d-flex ms-5">
                                            <div><StarFilled /> </div>
                                            <div className="ps-2">
                                                <h6 className="h6 m-0 lh-1">Implement Section </h6>
                                                <span>Derived </span>
                                            </div>
                                        </div>

                                        <div  className="d-flex ms-5">
                                            <div><StarFilled /> </div>
                                            <div className="ps-2">
                                                <h6 className="h6 m-0 lh-1">Training for (Employee Grade) </h6>
                                                <span>4th Grade </span>
                                            </div>
                                        </div>



                                    </div>



                            </div>

                            <div  className="p-4 training-capacity-detail">
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={14} className='training-capacity-leftpart'>
                                        <h4 className="h4 m-0 mb-3 lh-1">About this training: </h4>
                                        <p className="h6 lh-1 m-0 mb-2 opacity-50">
                                        Published on March 25, 2021</p>
                                        <p className="h6 lh-1 m-0 mb-2 opacity-50">
                                        Updated on November 12, 2022</p>
                                        <p>Bangladesh University of Textiles ,Executive Development Centre (EDC) ,Executive Development Program (EDP) is inviting Admission to Postgraduate Diploma (PGD) Training in Textile Industry Management.
Executive Development Centre (EDC), BUTEX is offering Postgraduate Diploma (PGD) Training in Textile Industry Management sponsored by The Ministry of Finance, Government of the People's Republic of Bangladesh, under the Skills for Employment Investment Program (SEIP). This program is designed to produce world class managers and future leaders for the textile industry of Bangladesh.
<br/>What you will learn:</p>
<ul>
<li>What it means to land a job in tech </li>
<li>The benefits of learning part-time vs. full-time (we offer both!)</li>
<li>An overview of our course topics</li>
<li>Our mentorship program and career support </li>
<li>Long-term student outcomes </li>
</ul>
<h4 className="h4 m-0 mb-3 lh-1">Organized by Ministry of Science & Technology: </h4>
<p>“Ministry of Science & Technology” is a Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor To find out more schedule a call HERE</p>
<h4 className="h4 m-0 mb-3 lh-1">Eligibility Criteria: </h4>
<ul>
<li>Category A (Experienced): Executives/Managers working in the textile industry with Bachelor degree in any discipline.</li>
<li>Category B (Fresher): Graduate in Science/Textiles or other branches of Engineering with excellent academic record.</li>
<li>Category C (Female Candidates): Female candidates will get preference in admission.</li>
</ul>
<h4 className="h4 m-0 mb-3 lh-1">Application Process:   </h4>
<p>Candidates should apply either using the prescribed application form available
     at GOOGLE FORM LINK .After submission of form through online an auto-generated
      filled-in application form will be sent to given email address. The signed form
      along with the following documents has to be submitted to EDC office:</p>
<ul>
<li>A motivation letter for joining in the EDP</li>
<li>Copy of all academic certificates</li>
<li>Consent letter from employer, available from BUTEX WEBSITE</li>
<li>Color photograph (2 Copy)</li>
<li>Copy of NID</li>
</ul>


<h4 className="h4 m-0 mb-3 lh-1">Assigned Trainer Schedule:  </h4>
<p><strong>Topic Title:</strong>
Artificial Intelligence and Cognitive Science<br />
<strong>Trainer:</strong>
Scientific Director, SFU’s Big Data Hub and Professor of Computing Science<br />
<strong>Topic Start & End Date:</strong>
<strong  style={{color: "red"}}> July 7, 2022  to July 12,2022 </strong></p>


<h4 className="h4 m-0 mb-3 lh-1">Trainers:  </h4>
<p>
Fred Popowich<br />
PhD, Artificial Intelligence and Cognitive Science<br />
Scientific Director, SFU’s Big Data Hub and Professor of Computing Science
</p>
<p>Jillian Anderson<br />
MSc, Computing Science, Big Data Concentration<br />
Big Data Developer, SFU's Research Computing Group
</p>

<h4 className="h4 m-0 mb-3 lh-1">Course Co-ordinator: </h4>
<p>
Steven Bergner<br />
PhD, Computing Science<br />
Limited-Term Lecturer, SFU's School of Computing Science
</p>

<p>If you are interested in any of our training, please register. </p>

<h4 className="h4 m-0 mb-3 lh-1">Tags </h4>
<div className="mb-5">
    <span className="bg-dark bg-opacity-10 border border-1 opacity-50 px-2 me-2 rounded-3">
        Data Science</span>
    <span className="bg-dark bg-opacity-10 border border-1 opacity-50 px-2 me-2 rounded-3">
    Webinar</span>
    <span className="bg-dark bg-opacity-10 border border-1 opacity-50 px-2 me-2 rounded-3">
    Ministry of Science & Technology</span>
    <span className="bg-dark bg-opacity-10 border border-1 opacity-50 px-2 me-2 rounded-3">
    Online Events </span>

</div>
<h4 className="h4 m-0 mb-3 lh-1">Share this with  </h4>
<div className="share-this-with">
<span className="me-4"><InstagramOutlined /> </span>
<span className="me-4"><LinkedinOutlined /></span>
<span className="me-4"><TwitterOutlined /></span>
<span className="me-4"><FacebookOutlined /></span>
</div>

                                    </Col>
                                    <Col xs={24} md={10} className="training-capacity-rightpart">

                                    <div className="border border-2 rounded-3 px-3 py-3 mb-5">
                                            <Row gutter={[16, 16]} className='mb-5'>
                                                <Col xs={24} md={2}>
                                                    <EnvironmentOutlined />
                                                </Col>
                                                <Col xs={24} md={22}>
                                                    <h5 className="h5 m-0 mb-2 lh-1">
                                                        Training Subject</h5>
                                                     <p className="m-0 lh-1">Computer Science</p>
                                                </Col>
                                            </Row>


                                            <Row gutter={[16, 16]} className='mb-5'>
                                                <Col xs={24} md={2}>
                                                    <CalendarOutlined />
                                                </Col>
                                                <Col xs={24} md={22}>
                                                    <h5 className="h5 m-0 mb-2 lh-1">
                                                     Start Date & End Date</h5>
                                                     <div className="d-flex">
                                                        <div>
                                                            <p className="m-0 mb-2 lh-1">
                                                                Wed, 6 July, 2022</p>
                                                                <p className="m-0 lh-1">
                                                                6:00 pm - 7:00 pm</p>
                                                        </div>
                                                        <div className="px-3">to </div>
                                                        <div>
                                                            <p className="m-0 mb-2 lh-1">
                                                                Wed, 6 July, 2022</p>
                                                                <p className="m-0 lh-1">
                                                                6:00 pm - 7:00 pm</p>
                                                        </div>
                                                     </div>
                                                </Col>
                                            </Row>

                                            <Row gutter={[16, 16]} className='mb-5'>
                                                <Col xs={24} md={2}>
                                                    <EnvironmentOutlined />
                                                </Col>
                                                <Col xs={24} md={22}>
                                                    <h5 className="h5 m-0 mb-2 lh-1">
                                                        Location </h5>
                                                     <p className="m-0 lh-2">Online Event<br/>
                                                     816 Brent Shore</p>
                                                </Col>
                                            </Row>

                                            <Row gutter={[16, 16]} className='mb-5'>
                                                <Col xs={24} md={2}>
                                                    <BankOutlined />
                                                </Col>
                                                <Col xs={24} md={22}>
                                                    <h5 className="h5 m-0 mb-2 lh-1">
                                                        Implementation Section </h5>
                                                     <p className="m-0 lh-1">Ministry of Science & Technology</p>
                                                </Col>
                                            </Row>



                                    </div>

                                    <div className="border border-2 rounded-3 px-3 py-3 mb-5">
                                        <p className="m-0 lh-2"><strong>Last date of Application:</strong> <strong  style={{color: "red"}}>19 November 2022</strong> </p>
                                        <p className="m-0 lh-2"><strong>Quiz:</strong> Friday, 25 November 2022
                                        (Link will be provided via e-mail).</p>
                                        <p className="m-0 lh-2"><strong>Quiz Result Publication:</strong> 28 November 2022</p>
                                        <p className="m-0 lh-2"><strong>Final Result Publication:</strong> 05 December 2022 .</p>
                                    </div>

                                    <h4 className="h4 m-0 mb-4 lh-1 little-arrow">Recent Trainings:</h4>

                                    <Row gutter={[16, 16]} className='mb-4'>
                                        <Col xs={24} md={12}>
                                            <a href="#">
                                            <img src={traingdetailbanner} className="img-fluid rounded-3" alt=" " />
                                            </a>
                                        </Col>
                                        <Col xs={24} md={12}>
                                            <p className="m-0 mb-2 lh-1 fw-bold recent-training-subtitle">
                                                Certificate Training </p>
                                            <h6 className="h6 m-0 mb-2 lh-1 recent-training-title">
                                            <a href="#">Post Graduate Diploma in
                                             Entrepreneurship Development (PGDED)</a> </h6>
                                             <div><FieldTimeOutlined /> 13 days left</div>
                                        </Col>
                                   </Row>
                                   <Row gutter={[16, 16]} className='mb-4'>
                                        <Col xs={24} md={12}>
                                            <a href="#">
                                            <img src={traingdetailbanner} className="img-fluid rounded-3" alt=" " />
                                            </a>
                                        </Col>
                                        <Col xs={24} md={12}>
                                            <p className="m-0 mb-2 lh-1 fw-bold recent-training-subtitle">
                                                Certificate Training </p>
                                            <h6 className="h6 m-0 mb-2 lh-1 recent-training-title">
                                            <a href="#">Post Graduate Diploma in
                                             Entrepreneurship Development (PGDED)</a> </h6>
                                             <div><FieldTimeOutlined /> 13 days left</div>
                                        </Col>
                                   </Row>
                                   <Row gutter={[16, 16]} className='mb-4'>
                                        <Col xs={24} md={12}>
                                            <a href="#">
                                            <img src={traingdetailbanner} className="img-fluid rounded-3" alt=" " />
                                            </a>
                                        </Col>
                                        <Col xs={24} md={12}>
                                            <p className="m-0 mb-2 lh-1 fw-bold recent-training-subtitle">
                                                Certificate Training </p>
                                            <h6 className="h6 m-0 mb-2 lh-1 recent-training-title">
                                            <a href="#">Post Graduate Diploma in
                                             Entrepreneurship Development (PGDED)</a> </h6>
                                             <div><FieldTimeOutlined /> 13 days left</div>
                                        </Col>
                                   </Row>
                                   <Row gutter={[16, 16]} className='mb-4'>
                                        <Col xs={24} md={12}>
                                            <a href="#">
                                            <img src={traingdetailbanner} className="img-fluid rounded-3" alt=" " />
                                            </a>
                                        </Col>
                                        <Col xs={24} md={12}>
                                            <p className="m-0 mb-2 lh-1 fw-bold recent-training-subtitle">
                                                Certificate Training </p>
                                            <h6 className="h6 m-0 mb-2 lh-1 recent-training-title">
                                            <a href="#">Post Graduate Diploma in
                                             Entrepreneurship Development (PGDED)</a> </h6>
                                             <div><FieldTimeOutlined /> 13 days left</div>
                                        </Col>
                                   </Row>





                                    </Col>
                                </Row>
                            </div>




                        </div>

                    </div>
                </section>






        </div>

    );
};

export default ServiceComponent;
