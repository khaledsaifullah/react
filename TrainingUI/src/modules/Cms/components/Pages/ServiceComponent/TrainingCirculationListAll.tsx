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
    SolutionOutlined, HeartOutlined, ArrowRightOutlined, HeartFilled   } from '@ant-design/icons';

import traingbanner from '../../../../../assets/images/pages/home/traingbanner.png';
import staricon from '../../../../../assets/images/icon/star-icon.png';
import governmentseal from '../../../../../assets/images/icon/government-seal.png';


const { Search } = Input;
const onSearch = (value: string) => console.log(value);


const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues);
};


const ServiceComponent: FC<any> = (props) => {
    const { t, lang, getLangUrl } = useLang();

    return (
        <div className='main-content-body'>
                <section className='py-5 mb-5'>
                    <div className="container">
                        <h2 className="text-center fw-bold page-title">All Training Schedule</h2>
                        <h3 className="text-center fw-normal sub-title mb-5">Learn from the Online Trainings & Grow Together.</h3>
                        <div className="text-center fw-bold tab-nav-list">
                            <a href="#">Ongoing</a>
                            <a href="#">Upcoming</a>
                            <a href="#">Archive</a>
                        </div>
                    </div>
                </section>

                <section className="main-content-wrapper">
                    <div className="container">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <div className="pe-3">
                                <div className="shadow-lg p-3 mb-5 bg-body rounded course-search-left">
                                    <Form.Item name="course-search">
                                        <Search placeholder="What do want to learn?" onSearch={onSearch}  />
                                    </Form.Item>
                                </div>

                                <h4 className="h4">Filter Courses</h4>

                                <h5 className="h5">Category </h5>
                                <div className="left-box mb-5"  style={{ height: '215px' }}>
                                    <Checkbox.Group  onChange={onChange}>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Web Development">Web Development</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Design">Design</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="IOS & Swift">IOS & Swift</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Android">Android</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Business">Business</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Photography">Photography</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Photography">Photography</Checkbox>
                                            </Col>

                                       </Row>
                                    </Checkbox.Group>
                                </div>

                                <div className="border border-2 border-start-0 border-end-0 border-top-0 mb-4"></div>

                                <h5 className="h5">Training Type </h5>
                                <div className="left-box mb-5" style={{ height: '180px' }}>
                                    <Checkbox.Group  onChange={onChange}>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Training">Training</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Workshop/Seminar">Workshop/Seminar</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Certificate Course">Certificate Course</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Post Graduate Diploma">Post Graduate Diploma</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Webinar">Webinar</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Webinar">Webinar</Checkbox>
                                            </Col>
                                      </Row>
                                    </Checkbox.Group>
                                </div>

                                <div className="border border-2 border-start-0 border-end-0 border-top-0 mb-4"></div>

                                <h5 className="h5">Level </h5>
                                <div className="left-box mb-5" style={{ height: '180px' }}>
                                    <Checkbox.Group  onChange={onChange}>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Beginner">Beginner</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Intermediate">Intermediate</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Advanced">Advanced</Checkbox>
                                            </Col>

                                        </Row>
                                    </Checkbox.Group>
                                </div>


                                <div className="border border-2 border-start-0 border-end-0 border-top-0 mb-4"></div>


                                <h5 className="h5">Price   </h5>
                                <div className="left-box mb-5">
                                    <Checkbox.Group  onChange={onChange}>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Free">Free</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Paid">Paid</Checkbox>
                                            </Col>

                                        </Row>
                                    </Checkbox.Group>
                                </div>


                                <div className="border border-2 border-start-0 border-end-0 border-top-0 mb-4"></div>


                                <h5 className="h5">Platform   </h5>
                                <div className="left-box mb-5">
                                    <Checkbox.Group  onChange={onChange}>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="All">All</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Ongoing">Ongoing</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Upcoming">Upcoming</Checkbox>
                                            </Col>
                                            <Col xs={24} md={24}>
                                                <Checkbox value="Archive">Archive</Checkbox>
                                            </Col>

                                        </Row>
                                    </Checkbox.Group>
                                </div>





                            </div>

                        </Col>
                        <Col xs={24} md={18} >
                            <h4 className="text-start mb-3 training-sub-title">Ongoing Online Training</h4>
                            <Row gutter={[16, 16]}>
                                    <Col xs={24} md={8}>
                                        <div className="card shadow course-name ">
                                                <div className="card-img-box">
                                                    <img  className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
                                                </div>
                                                {/* <div className="d-flex justify-content-center align-items-center rounded-circle course-government-seal">
                                                    <img src={governmentseal} alt=" " />
                                                </div> */}
                                                <div className="d-flex justify-content-center align-items-center rounded-circle course-wishlist course-wishlist-active">
                                                    <HeartFilled />
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
                                    <Col xs={24} md={8}>
                                        <div className="card shadow course-name ">
                                                <div className="card-img-box">
                                                    <img  className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
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
                                    <Col xs={24} md={8}>
                                        <div className="card shadow course-name ">
                                                <div className="card-img-box">
                                                    <img  className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
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
                                    <Col xs={24} md={8}>
                                        <div className="card shadow course-name ">
                                                <div className="card-img-box">
                                                    <img  className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
                                                </div>
                                                {/* <div className="d-flex justify-content-center align-items-center rounded-circle course-government-seal">
                                                    <img src={governmentseal} alt=" " />
                                                </div> */}
                                                <div className="d-flex justify-content-center align-items-center rounded-circle course-wishlist course-wishlist-active">
                                                    <HeartFilled />
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
                                    <Col xs={24} md={8}>
                                        <div className="card shadow course-name ">
                                                <div className="card-img-box">
                                                    <img  className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
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
                                    <Col xs={24} md={8}>
                                        <div className="card shadow course-name ">
                                                <div className="card-img-box">
                                                    <img  className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
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

                            <h4 className="text-start mb-3 mt-5 training-sub-title">Upcoming Online Training</h4>
                            <Row gutter={[16, 16]}>
                                    <Col xs={24} md={8}>
                                        <div className="card shadow course-name ">
                                                <div className="card-img-box">
                                                    <img  className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
                                                </div>
                                                {/* <div className="d-flex justify-content-center align-items-center rounded-circle course-government-seal">
                                                    <img src={governmentseal} alt=" " />
                                                </div> */}
                                                <div className="d-flex justify-content-center align-items-center rounded-circle course-wishlist course-wishlist-active">
                                                    <HeartFilled />
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
                                    <Col xs={24} md={8}>
                                        <div className="card shadow course-name ">
                                                <div className="card-img-box">
                                                    <img  className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
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
                                    <Col xs={24} md={8}>
                                        <div className="card shadow course-name ">
                                                <div className="card-img-box">
                                                    <img  className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
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
                                    <Col xs={24} md={8}>
                                        <div className="card shadow course-name ">
                                                <div className="card-img-box">
                                                    <img  className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
                                                </div>
                                                {/* <div className="d-flex justify-content-center align-items-center rounded-circle course-government-seal">
                                                    <img src={governmentseal} alt=" " />
                                                </div> */}
                                                <div className="d-flex justify-content-center align-items-center rounded-circle course-wishlist course-wishlist-active">
                                                    <HeartFilled />
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
                                    <Col xs={24} md={8}>
                                        <div className="card shadow course-name ">
                                                <div className="card-img-box">
                                                    <img  className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
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
                                    <Col xs={24} md={8}>
                                        <div className="card shadow course-name ">
                                                <div className="card-img-box">
                                                    <img  className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
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
                </section>






        </div>
    );
};

export default ServiceComponent;
