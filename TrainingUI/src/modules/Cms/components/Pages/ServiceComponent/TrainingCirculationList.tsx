import React, { FC } from "react";
import { Row, Col, Card, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useLang } from "../../../../../hooks/useLang";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";
import "./ServiceComponent.style.scss";

import {
    CalendarOutlined, TeamOutlined, BankOutlined,
    SolutionOutlined, HeartOutlined, ArrowRightOutlined
} from '@ant-design/icons';

import traingbanner from '../../../../../assets/images/pages/home/traingbanner.png';
import staricon from '../../../../../assets/images/icon/star-icon.png';
import governmentseal from '../../../../../assets/images/icon/government-seal.png';


const { Search } = Input;
const onSearch = (value: string) => console.log(value);


const ServiceComponent: FC<any> = (props) => {
    const { t, lang, getLangUrl } = useLang();

    return (
        <div className='main-content-body'>
            <section className='main-content-banner'>
                <div className="container">
                    <Row gutter={[16, 16]} className='align-items-center'>
                        <Col xs={24} md={14} offset={2}>
                            <h4 className="m-0 p-0 text-uppercase">Upgrade your skills</h4>
                            <h2 className="m-0 p-0 mb-2">Wide range of Training & <br /> Certification Courses</h2>
                            <p className="m-0 p-0 fw-bold">Lorem ipsum dolor sit amet consectetur. Volutpat magna
                                viverra ac nibh tortor scelerisque.Tempor donec placerat
                                dolor nisi leo porttitor mattis.</p>
                            <div className='main-search-content mt-4'>
                                <Form.Item name="course-search">
                                    <Search placeholder="কোর্স খুঁজুন " onSearch={onSearch} />
                                </Form.Item>
                            </div>
                        </Col>
                        <Col xs={24} md={8}>
                            <div className="main-banner-header">
                                <img src={traingbanner} alt=" " />
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>

            <section className='explore-online-training py-5'>
                <div className="container">
                    <h3 className="text-center mb-3 training-title">Explore Inspiring Online Training</h3>
                    <div className="d-flex flex-wrap explore-training">
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4 active-explore">Featured</a>
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4">Chemistry</a>
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4">ICT & Technology </a>
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4">ICT & Technology </a>
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4">Digital Marketing </a>
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4">Web Development</a>
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4">Affiliate Marketing</a>
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4">WordPress Plugin Development</a>
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4">WordPress Theme Development</a>
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4">WordPress</a>
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4">Chemistry</a>
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4">Free Courses</a>
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4">YouTube Marketing</a>
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4">Web Design </a>
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4">WordPress Plugin Development </a>
                        <a href="#" className="px-4 py-2 border border-3 rounded-pill fw-bold mb-3 me-4">Affiliate Marketing</a>
                    </div>
                </div>
            </section>


            <section className="py-5">
                <div className="container">
                    <h3 className="text-center mb-3 training-title">Ongoing Online Training</h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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

                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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
                                    <div className="text-ctext-center mt-2enter mt-2">
                                        <a href="#" className="btn-course rounded-1 fw-bold">Enroll Now  </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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
                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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





                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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
                                        <div>
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
                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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
                                        <div>
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
                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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
                                        <div>
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
                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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
                                        <div>
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


                    <div className="text-center mt-5 show-more fw-bold">
                        <a href="#">Show More <ArrowRightOutlined /> </a>
                    </div>


                </div>
            </section>


            <section className="py-5">
                <div className="container">
                    <h3 className="text-center mb-3 training-title">
                        Upcoming Online Training </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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
                                        <div>
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

                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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
                                        <div>
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
                                    <div className="text-ctext-center mt-2enter mt-2">
                                        <a href="#" className="btn-course rounded-1 fw-bold">Enroll Now  </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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
                                        <div>
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
                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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
                                        <div>
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





                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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
                                        <div>
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
                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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
                                        <div>
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
                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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
                                        <div>
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
                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
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
                                        <div>
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


                    <div className="text-center mt-5 show-more fw-bold">
                        <a href="#">Show More <ArrowRightOutlined /> </a>
                    </div>

                </div>
            </section>

        </div>

    );
};

export default ServiceComponent;
