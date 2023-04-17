import React, { FC } from "react";
import { Row, Col, Card, Form, Input, Checkbox, Collapse, Progress } from "antd";
import { Link } from "react-router-dom";
import { useLang } from "../../../../../hooks/useLang";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";

import "./eLarningsinglecourse.style.scss";

import {
    BookOutlined,
    StarFilled, StarOutlined, ClockCircleOutlined,
    FilterOutlined,
    CalendarOutlined, TeamOutlined, BankOutlined,
    SolutionOutlined, HeartOutlined, ArrowRightOutlined
} from '@ant-design/icons';



import staricon from '../../../../../assets/images/icon/star-icon.png';
import governmentseal from '../../../../../assets/images/icon/government-seal.png';


import vidoscreen from '../../../../../assets/images/pages/home/vidoscreen.jpg';
import lockicon from '@/assets/images/icon/lockicon.png';




import type { CheckboxValueType } from 'antd/es/checkbox/Group';




const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const { Panel } = Collapse;
const onChange_2 = (key: string | string[]) => {
    console.log(key);
};


const ELarningPage: FC<any> = (props) => {
    const { t, lang, getLangUrl } = useLang();
    const {
        filters,
        handleOnChanged,
        handleCallbackFunc,
        categoryListData,
        trainingCategoryId
    } = props;
    const { Search } = Input;

    const onChange_1 = (checkedValues: CheckboxValueType[]) => {
        console.log('checked = ', checkedValues);
    };



    return (
        <div className='main-content-body'>
            <div className="container">
                <h2 className="h2 text-center mb-5">{t('Course Details')}</h2>
                <div className="px-4 py-3 mt-4  rounded-2 shadow elearning-single-course-header">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={16}>
                            <div className="d-flex mb-2">
                                <div className="pe-2">
                                    <span className="pe-1 yellow-star"><StarFilled /></span>
                                    <span className="pe-1 yellow-star"><StarFilled /></span>
                                    <span className="pe-1 yellow-star"><StarFilled /></span>
                                    <span className="pe-1 yellow-star"><StarFilled /></span>
                                    <span className="pe-1 yellow-star"><StarFilled /></span>
                                </div>
                                <div className="text-white">4.5 ratings (3 reviews) </div>
                            </div>
                            <h2 className="h2 mb-5 text-white lh-1 fw-normal">
                                Youtube Success: Script, shoot and edit<br /> with MBKGF
                            </h2>
                            <Row gutter={[16, 0]}>
                                <Col xs={24} md={12}>
                                    <div className="d-flex mb-3">
                                        <div className="fw-bold text-white pe-2">Categories:</div>
                                        <div className="yellow-star">Affiliate Marketing,
                                            Digital Marketing</div>
                                    </div>
                                </Col>
                                <Col xs={24} md={12}>
                                    <div className="d-flex mb-3">
                                        <div className="fw-bold  text-white  pe-2">Course Level: </div>
                                        <div className="yellow-star">Beginner</div>
                                    </div>
                                </Col>
                                <Col xs={24} md={12}>
                                    <div className="d-flex mb-3">
                                        <div className="fw-bold  text-white  pe-2">Instructor:  </div>
                                        <div className="yellow-star">Md.Rajibul Islam </div>
                                    </div>
                                </Col>
                                <Col xs={24} md={12}>
                                    <div className="d-flex mb-3">
                                        <div className="fw-bold  text-white  pe-2">Last date of application: </div>
                                        <div className="yellow-star"> 25th August, 2022</div>
                                    </div>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={24} md={8} className="text-end">
                            <div className="video-content-box rounded-2">
                                <span className="video-play-btn" id="video-play-btn"></span>
                                <span className="close-the-video" id="close-the-video"></span>
                                <div className="video-img-box">
                                    <img src={vidoscreen} alt=" " />
                                </div>
                                <div className="video-embed-code" id="video-embed-code">
                                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/RK1K2bCg4J8?autoplay=1&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white" allow="autoplay; encrypted-media" ></iframe>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>


                <Row gutter={[16, 16]}>
                    <Col xs={24} md={16}>
                        <div className="rounded-2 border border-1  px-3 py-3 about-professional-certificate">
                            <h5 className="h5 m-0 p-0 lh-1 fw-normal mb-4 ">
                                About this Professional Certificate
                            </h5>
                            <p>What would it take to create truly integrated societies in
                                diverse countries where migration is partand parcel of economic and social life? Learn from top academics, hands-on practitioners, citizens,and migrants and refugees in as little as 5 minutes a day.</p>
                            <h5 className="h5 m-0 p-0 lh-1 fw-normal mb-4 mt-5 ">
                                Table of Contents
                            </h5>
                            <div className="course-collapse">
                                <Collapse defaultActiveKey={['2']} onChange={onChange_2}>
                                    <Panel header="Course Overview" key="1">
                                        1111
                                    </Panel>
                                    <Panel header="Getting Started with Angular" key="2">
                                        <div className="d-md-flex justify-content-between mb-3">
                                            <div>
                                                <span className="pe-2"><img src={lockicon} alt=" " /></span>
                                                <span>1. Introduction</span>
                                            </div>
                                            <div className="text-muted">
                                                8m 20s
                                            </div>
                                        </div>

                                        <div className="d-md-flex justify-content-between mb-3">
                                            <div>
                                                <span className="pe-2"><img src={lockicon} alt=" " /></span>
                                                <span>2. Introduction to Typescript </span>
                                            </div>
                                            <div className="text-muted">
                                                50m 13s
                                            </div>
                                        </div>


                                        <div className="d-md-flex justify-content-between mb-3">
                                            <div>
                                                <span className="pe-2"><img src={lockicon} alt=" " /></span>
                                                <span>3. Comparing Angular to Angular JS </span>
                                            </div>
                                            <div className="text-muted">
                                                2h 8m 20s
                                            </div>
                                        </div>


                                        <div className="d-md-flex justify-content-between mb-3">
                                            <div>
                                                <span className="pe-2"><img src={lockicon} alt=" " /></span>
                                                <span>4. Creating & Comparing berween Angular Components </span>
                                            </div>
                                            <div className="text-muted">
                                                3h 5m 20s
                                            </div>
                                        </div>


                                        <div className="d-md-flex justify-content-between mb-3">
                                            <div>
                                                <span className="pe-2"><img src={lockicon} alt=" " /></span>
                                                <span>5. Explore Angular Template Syntax </span>
                                            </div>
                                            <div className="text-muted">
                                                5h 8m 20s
                                            </div>
                                        </div>


                                        <div className="d-md-flex justify-content-between mb-3">
                                            <div>
                                                <span className="pe-2"><img src={lockicon} alt=" " /></span>
                                                <span>6. Quiz </span>
                                            </div>
                                            <div className="text-muted">
                                                8m 20s
                                            </div>
                                        </div>
                                    </Panel>
                                    <Panel header="Creating & Comparing berween Angular Components" key="3">
                                        33333
                                    </Panel>
                                    <Panel header="Explore Angular Template Syntax " key="4">
                                        44444
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>

                        <div className="px-3 py-3 mt-3  test-content">
                            <h5 className="h5 m-0 p-0 lh-1 fw-normal mb-2">
                                About this Author
                            </h5>
                            <p>Lorem ipsum dolor sit amet consectetur. In montes proin a
                                in pulvinar velit tincidunt. Urna blandit pharetra odio eget.consectetur.
                                In montes proin a in pulvinar velit tincidunt.
                                Urna blandit pharetra odio eget.</p>

                            <h5 className="h5 m-0 p-0 lh-1 fw-normal mb-2 mt-4">
                                More from this Author
                            </h5>

                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={24}>
                                    <div className="shadow bg-white rounded-1 px-2 py-2 mb-3">
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={4}>
                                                <img src={vidoscreen} alt=" " className="rounded-1 img-fluid" />
                                            </Col>
                                            <Col xs={24} md={20}>
                                                <h6 className="h6 m-0 p-0 lh-1 fw-normal mb-2 mt-2">
                                                    Creating & Comparing between Angular Components
                                                </h6>
                                                <div className="d-flex mb-2">
                                                    <div className="pe-2">
                                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                                    </div>
                                                    <div>4.5 ratings (3 reviews) </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col xs={24} md={24}>
                                    <div className="shadow bg-white rounded-1 px-2 py-2 mb-3">
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={4}>
                                                <img src={vidoscreen} alt=" " className="rounded-1 img-fluid" />
                                            </Col>
                                            <Col xs={24} md={20}>
                                                <h6 className="h6 m-0 p-0 lh-1 fw-normal mb-2 mt-2">
                                                    Creating & Comparing between Angular Components
                                                </h6>
                                                <div className="d-flex mb-2">
                                                    <div className="pe-2">
                                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                                    </div>
                                                    <div>4.5 ratings (3 reviews) </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>

                                <Col xs={24} md={24}>
                                    <div className="shadow bg-white rounded-1 px-2 py-2 mb-3">
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={4}>
                                                <img src={vidoscreen} alt=" " className="rounded-1 img-fluid" />
                                            </Col>
                                            <Col xs={24} md={20}>
                                                <h6 className="h6 m-0 p-0 lh-1 fw-normal mb-2 mt-2">
                                                    Creating & Comparing between Angular Components
                                                </h6>
                                                <div className="d-flex mb-2">
                                                    <div className="pe-2">
                                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                                    </div>
                                                    <div>4.5 ratings (3 reviews) </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>


                            </Row>


                            <Row gutter={[16, 16]} className="mt-4 mb-5">
                                <Col xs={24} md={6}>
                                    <h6 className="h6 m-0 p-0 lh-1 fw-normal mb-2">
                                        Reviews
                                    </h6>
                                    <h6 className="h2 m-0 p-0 lh-1 fw-bold mb-2 mt-2">
                                        4.50
                                    </h6>
                                    <div className="d-flex flex-column mb-2">
                                        <div className="pe-2">
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                        </div>
                                        <div> (3 reviews)  </div>
                                    </div>
                                </Col>
                                <Col xs={24} md={12}>
                                    <div className="progress-item">
                                        <Progress percent={30} showInfo={false} />
                                    </div>
                                    <div className="progress-item">
                                        <Progress percent={40} showInfo={false} />
                                    </div>
                                    <div className="progress-item">
                                        <Progress percent={50} showInfo={false} />
                                    </div>
                                    <div className="progress-item">
                                        <Progress percent={60} showInfo={false} />
                                    </div>
                                    <div className="progress-item">
                                        <Progress percent={40} showInfo={false} />
                                    </div>
                                </Col>
                                <Col xs={24} md={6}>
                                    <div className="d-flex mb-2">
                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                        <span className="pe-1 yellow-star"><StarOutlined /></span>
                                        <span className="pe-1 yellow-star"><StarOutlined /></span>
                                        <span className="pe-1 yellow-star"><StarOutlined /></span>
                                    </div>

                                    <div className="d-flex mb-2">
                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                        <span className="pe-1 yellow-star"><StarOutlined /></span>
                                        <span className="pe-1 yellow-star"><StarOutlined /></span>
                                    </div>

                                    <div className="d-flex mb-2">
                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                        <span className="pe-1 yellow-star"><StarOutlined /></span>
                                    </div>

                                    <div className="d-flex mb-2">
                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                        <span className="pe-1 yellow-star"><StarFilled /></span>
                                    </div>

                                </Col>
                            </Row>



                            <div className="border-bottom pb-2 mb-4">
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={2}>
                                        <img src={vidoscreen} alt=" " height={40} width={40} className="rounded-circle" />
                                    </Col>
                                    <Col xs={24} md={4}>
                                        <h6 className="h6 m-0 p-0 lh-1 fw-normal">Ravi Putra</h6>
                                        <div className="d-flex mb-2">
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                        </div>
                                        <div className="h6 m-0 p-0 lh-1 fw-normal">1 Month ago </div>
                                    </Col>
                                    <Col xs={24} md={18}>
                                        Lorem ipsum dolor sit amet consectetur. Odio pellentesque purus
                                        aliquam turpis dignissim magna. Felis et ac mattis viverra non
                                        interdum a pretium. Turpis consectetur placerat quis donec massa
                                        faucibus eu. Magna turpis enim sit tellus est sagittis ultricies
                                        lorem. Faucibus eget vulputate odio malesuada mauris netus.
                                    </Col>
                                </Row>
                            </div>


                            <div className="border-bottom pb-2 mb-4">
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={2}>
                                        <img src={vidoscreen} alt=" " height={40} width={40} className="rounded-circle" />
                                    </Col>
                                    <Col xs={24} md={4}>
                                        <h6 className="h6 m-0 p-0 lh-1 fw-normal">Ravi Putra</h6>
                                        <div className="d-flex mb-2">
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                        </div>
                                        <div className="h6 m-0 p-0 lh-1 fw-normal">1 Month ago </div>
                                    </Col>
                                    <Col xs={24} md={18}>
                                        Lorem ipsum dolor sit amet consectetur. Odio pellentesque purus
                                        aliquam turpis dignissim magna. Felis et ac mattis viverra non
                                        interdum a pretium. Turpis consectetur placerat quis donec massa
                                        faucibus eu. Magna turpis enim sit tellus est sagittis ultricies
                                        lorem. Faucibus eget vulputate odio malesuada mauris netus.
                                    </Col>
                                </Row>
                            </div>



                            <div className="border-bottom pb-2 mb-4">
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={2}>
                                        <img src={vidoscreen} alt=" " height={40} width={40} className="rounded-circle" />
                                    </Col>
                                    <Col xs={24} md={4}>
                                        <h6 className="h6 m-0 p-0 lh-1 fw-normal">Ravi Putra</h6>
                                        <div className="d-flex mb-2">
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                            <span className="pe-1 yellow-star"><StarFilled /></span>
                                        </div>
                                        <div className="h6 m-0 p-0 lh-1 fw-normal">1 Month ago </div>
                                    </Col>
                                    <Col xs={24} md={18}>
                                        Lorem ipsum dolor sit amet consectetur. Odio pellentesque purus
                                        aliquam turpis dignissim magna. Felis et ac mattis viverra non
                                        interdum a pretium. Turpis consectetur placerat quis donec massa
                                        faucibus eu. Magna turpis enim sit tellus est sagittis ultricies
                                        lorem. Faucibus eget vulputate odio malesuada mauris netus.
                                    </Col>
                                </Row>
                            </div>




                        </div>

                    </Col>
                    <Col xs={24} md={8}>
                        <div className="course-enroll-now rounded-2 px-3 pt-4 pb-5 mt-5">
                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={10}>
                                    <span className="pe-1"><TeamOutlined /> </span>
                                    Students:
                                </Col>
                                <Col xs={24} md={14}>
                                    20000
                                </Col>
                            </Row>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={10}>
                                    <span className="pe-1"><ClockCircleOutlined /> </span>
                                    Duration:
                                </Col>
                                <Col xs={24} md={14}>
                                    1 hour 50 minutes
                                </Col>
                            </Row>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={10}>
                                    <span className="pe-1"><BookOutlined /> </span>
                                    Date:
                                </Col>
                                <Col xs={24} md={14}>
                                    25th Nov & 30th Nov
                                </Col>
                            </Row>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={10}>
                                    <span className="pe-1"><BankOutlined /> </span>
                                    Organization:
                                </Col>
                                <Col xs={24} md={14}>
                                    Ministry of Science & Technology
                                </Col>
                            </Row>
                            <h6 className="h3 m-0 p-0 text-center fw-bold mb-2 mt-5">
                                Course Fee: Tk 25,000
                            </h6>
                            <div className="text-center">
                                <button type="button" className="btn btn-outline-dark fw-bold px-5 py-1 fs-5">
                                Enroll Now
                                </button>
                            </div>


                        </div>


                        <h6 className="h4 m-0 p-0 text-center fw-bold mb-2 mt-5">
                        Top Development Course
                        </h6>
                        <Row gutter={[16, 16]} className="top-development-course">
                            <Col xs={24} md={24}>
                                <div className="card shadow course-name">
                                    <div className="card-img-box">
                                        <img className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
                                    </div>
                                    {/* <div className="d-flex justify-content-center align-items-center rounded-circle course-government-seal">
                                        <img src={governmentseal} alt=" " />
                                    </div> */}
                                    <div className="d-flex justify-content-center align-items-center rounded-circle course-wishlist">
                                        <HeartOutlined />
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center course-time-rate">
                                            <div>1hr 50 mins </div>
                                            <div className="card-rating">
                                                <img src={staricon} alt=" " />
                                                <img src={staricon} alt=" " />
                                                <img src={staricon} alt=" " />
                                                <img src={staricon} alt=" " />
                                                <img src={staricon} alt=" " />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between course-fs-small mb-2">
                                            <div><CalendarOutlined /> 25th Nov & 30th Nov</div>
                                            <div><TeamOutlined /> 200 students </div>
                                        </div>
                                        <div className="d-flex justify-content-between course-fs-small">
                                            <div><BankOutlined /> Ministry of Science & Technology</div>
                                        </div>
                                        <h5 className="card-title mt-2">Youtube WordPress Course Online Free (Basic)</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="course-fs-small"><SolutionOutlined /> Instructor: Md.Rajibul Islam </div>
                                            <div className="fw-bold">Tk 25,000 </div>
                                        </div>
                                        <div className="text-center mt-2">
                                            <a href="#" className="btn-course rounded-1 fw-bold">Enroll Now  </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} md={24}>
                                <div className="card shadow course-name">
                                    <div className="card-img-box">
                                        <img className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
                                    </div>
                                    {/* <div className="d-flex justify-content-center align-items-center rounded-circle course-government-seal">
                                        <img src={governmentseal} alt=" " />
                                    </div> */}
                                    <div className="d-flex justify-content-center align-items-center rounded-circle course-wishlist">
                                        <HeartOutlined />
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center course-time-rate">
                                            <div>1hr 50 mins </div>
                                            <div className="card-rating">
                                                <img src={staricon} alt=" " />
                                                <img src={staricon} alt=" " />
                                                <img src={staricon} alt=" " />
                                                <img src={staricon} alt=" " />
                                                <img src={staricon} alt=" " />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between course-fs-small mb-2">
                                            <div><CalendarOutlined /> 25th Nov & 30th Nov</div>
                                            <div><TeamOutlined /> 200 students </div>
                                        </div>
                                        <div className="d-flex justify-content-between course-fs-small">
                                            <div><BankOutlined /> Ministry of Science & Technology</div>
                                        </div>
                                        <h5 className="card-title mt-2">Youtube WordPress Course Online Free (Basic)</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="course-fs-small"><SolutionOutlined /> Instructor: Md.Rajibul Islam </div>
                                            <div className="fw-bold">Tk 25,000 </div>
                                        </div>
                                        <div className="text-center mt-2">
                                            <a href="#" className="btn-course rounded-1 fw-bold">Enroll Now  </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} md={24}>
                                <div className="card shadow course-name">
                                    <div className="card-img-box">
                                        <img className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
                                    </div>
                                    {/* <div className="d-flex justify-content-center align-items-center rounded-circle course-government-seal">
                                        <img src={governmentseal} alt=" " />
                                    </div> */}
                                    <div className="d-flex justify-content-center align-items-center rounded-circle course-wishlist">
                                        <HeartOutlined />
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center course-time-rate">
                                            <div>1hr 50 mins </div>
                                            <div className="card-rating">
                                                <img src={staricon} alt=" " />
                                                <img src={staricon} alt=" " />
                                                <img src={staricon} alt=" " />
                                                <img src={staricon} alt=" " />
                                                <img src={staricon} alt=" " />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between course-fs-small mb-2">
                                            <div><CalendarOutlined /> 25th Nov & 30th Nov</div>
                                            <div><TeamOutlined /> 200 students </div>
                                        </div>
                                        <div className="d-flex justify-content-between course-fs-small">
                                            <div><BankOutlined /> Ministry of Science & Technology</div>
                                        </div>
                                        <h5 className="card-title mt-2">Youtube WordPress Course Online Free (Basic)</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="course-fs-small"><SolutionOutlined /> Instructor: Md.Rajibul Islam </div>
                                            <div className="fw-bold">Tk 25,000 </div>
                                        </div>
                                        <div className="text-center mt-2">
                                            <a href="#" className="btn-course rounded-1 fw-bold">Enroll Now  </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                        </Row>




                    </Col>
                </Row>







            </div>
        </div>
    );
};

export default ELarningPage;
