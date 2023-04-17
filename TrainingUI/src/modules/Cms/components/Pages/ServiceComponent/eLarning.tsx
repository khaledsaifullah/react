import React, { FC } from "react";
import { Row, Col, Card, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useLang } from "../../../../../hooks/useLang";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";

import "./eLarning.style.scss";

import {
    CalendarOutlined, TeamOutlined, BankOutlined,
    SolutionOutlined, HeartOutlined, ArrowRightOutlined
} from '@ant-design/icons';

import traingbanner from '../../../../../assets/images/pages/home/traingbannerlearn.png';
import staricon from '../../../../../assets/images/icon/star-icon.png';
import governmentseal from '../../../../../assets/images/icon/government-seal.png';

import arrowupright from "@/assets/images/icon/arrowupright.png";
import pennib from "@/assets/images/pages/home/pennib.png";
import filehtml from "@/assets/images/pages/home/filehtml.png";
import microphonestage from "@/assets/images/pages/home/microphonestage.png";
import briefcase from "@/assets/images/pages/home/briefcase.png";
import sunhorizon from "@/assets/images/pages/home/sunhorizon.png";
import cameraicon from "@/assets/images/pages/home/cameraicon.png";
import musicnote from "@/assets/images/pages/home/musicnote.png";
import databaseicon from "@/assets/images/pages/home/databaseicon.png";

import lightbulb from "@/assets/images/pages/home/lightbulb.png";
import heartbeaticon from "@/assets/images/pages/home/heartbeaticon.png";
import graphicon from "@/assets/images/pages/home/graphicon.png";
import detectiveicon from "@/assets/images/pages/home/detectiveicon.png";



const { Search } = Input;
const onSearch = (value: string) => console.log(value);


const ELarningPage: FC<any> = (props) => {
    const { t, lang, getLangUrl } = useLang();

    return (
        <div className='main-content-body'>
            <section className='main-content-ebanner'>
                <div className="container">
                    <Row gutter={[16, 16]} className='align-items-center'>
                        <Col xs={24} md={14}>
                            <h4 className="m-0 p-0 text-uppercase mt-5 mb-3 fw-normal">
                                START TO SUCCESS</h4>
                            <h2 className="m-0 p-0 mb-3">
                                Acess To 5000+ Courses <br /> Certification Courses<br />
                                from 300 Instructions <br />
                                & Institutions
                            </h2>
                            <p className="m-0 p-0 fw-normal">Various versions
                                have evolved over the years, sometimes by <br /> accident,</p>
                            <div className='main-esearch-content mt-4 shadow rounded'>
                                <Form.Item name="course-search">
                                    <Search placeholder="What do want to learn?" onSearch={onSearch} />
                                </Form.Item>
                            </div>
                        </Col>
                        <Col xs={24} md={10}>
                            <div className="main-ebanner-header">
                                <img src={traingbanner} alt=" " />
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>

            <section className='courser-offerby-online  py-5'>
                <div className="container d-md-flex justify-content-between">
                    <div className="d-flex">
                        <div className="rounded bg-white courser-offerby d-flex align-items-center justify-content-center">
                            <CalendarOutlined />
                        </div>
                        <div className="ps-2">
                            <h3 className="m-0 mt-2 mb-2 p-0 text-white h3  lh-1">8000+ Courses</h3>
                            <p className="m-0 p-0 text-white h6">Explore a wide range of skills.</p>
                        </div>
                    </div>


                    <div className="d-flex">
                        <div className="rounded bg-white courser-offerby d-flex align-items-center justify-content-center">
                            <CalendarOutlined />
                        </div>
                        <div className="ps-2">
                            <h3 className="m-0 mt-2 mb-2 p-0 text-white h3  lh-1">By Industry Expert</h3>
                            <p className="m-0 p-0 text-white h6">Professional Development from <br />the best people.</p>
                        </div>
                    </div>


                    <div className="d-flex">
                        <div className="rounded bg-white courser-offerby d-flex align-items-center justify-content-center">
                            <CalendarOutlined />
                        </div>
                        <div className="ps-2">
                            <h3 className="m-0 mt-2 mb-2 p-0 text-white h3  lh-1">Unlimited Access </h3>
                            <p className="m-0 p-0 text-white h6">Unlock library and learn any topic. </p>
                        </div>
                    </div>


                </div>
            </section>


            <section className='courser-browse-categories  py-5'>
                <div className="container">
                    <h3 className="m-0 mt-2 mb-3 p-0 text-black h3  lh-1">
                        Browse Categories </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            {/* start: */}
                            <div className="active px-3 rounded bg-white browse-category-item shadow d-flex align-items-center justify-content-between">
                                <div className="fw-normal">
                                    <span className="pe-2">
                                        <img src={pennib} alt=" " />
                                    </span>
                                    Design
                                </div>
                                <div>
                                    <div className="rounded browse-category-item-arrow d-flex align-items-center justify-content-center">
                                        <img src={arrowupright} alt=" " />
                                    </div>
                                </div>
                            </div>
                            {/* start: */}
                        </Col>
                        <Col xs={24} md={6}>
                            {/* start: */}
                            <div className="px-3 rounded bg-white browse-category-item shadow d-flex align-items-center justify-content-between">
                                <div className="fw-normal">
                                    <span className="pe-2">
                                        <img src={filehtml} alt=" " />
                                    </span>
                                    Development
                                </div>
                                <div>
                                    <div className="rounded browse-category-item-arrow d-flex align-items-center justify-content-center">
                                        <img src={arrowupright} alt=" " />
                                    </div>
                                </div>
                            </div>
                            {/* start: */}
                        </Col>
                        <Col xs={24} md={6}>
                            {/* start: */}
                            <div className="px-3 rounded bg-white browse-category-item shadow d-flex align-items-center justify-content-between">
                                <div className="fw-normal">
                                    <span className="pe-2">
                                        <img src={microphonestage} alt=" " />
                                    </span>
                                    Marketing
                                </div>
                                <div>
                                    <div className="rounded browse-category-item-arrow d-flex align-items-center justify-content-center">
                                        <img src={arrowupright} alt=" " />
                                    </div>
                                </div>
                            </div>
                            {/* start: */}
                        </Col>
                        <Col xs={24} md={6}>
                            {/* start: */}
                            <div className="px-3 rounded bg-white browse-category-item shadow d-flex align-items-center justify-content-between">
                                <div className="fw-normal">
                                    <span className="pe-2">
                                        <img src={briefcase} alt=" " />
                                    </span>
                                    Business
                                </div>
                                <div>
                                    <div className="rounded browse-category-item-arrow d-flex align-items-center justify-content-center">
                                        <img src={arrowupright} alt=" " />
                                    </div>
                                </div>
                            </div>
                            {/* start: */}
                        </Col>
                        <Col xs={24} md={6}>
                            {/* start: */}
                            <div className="px-3 rounded bg-white browse-category-item shadow d-flex align-items-center justify-content-between">
                                <div className="fw-normal">
                                    <span className="pe-2">
                                        <img src={sunhorizon} alt=" " />
                                    </span>
                                    Lifestyle
                                </div>
                                <div>
                                    <div className="rounded browse-category-item-arrow d-flex align-items-center justify-content-center">
                                        <img src={arrowupright} alt=" " />
                                    </div>
                                </div>
                            </div>
                            {/* start: */}
                        </Col>

                        <Col xs={24} md={6}>
                            {/* start: */}
                            <div className="px-3 rounded bg-white browse-category-item shadow d-flex align-items-center justify-content-between">
                                <div className="fw-normal">
                                    <span className="pe-2">
                                        <img src={cameraicon} alt=" " />
                                    </span>
                                    Photography
                                </div>
                                <div>
                                    <div className="rounded browse-category-item-arrow d-flex align-items-center justify-content-center">
                                        <img src={arrowupright} alt=" " />
                                    </div>
                                </div>
                            </div>
                            {/* start: */}
                        </Col>

                        <Col xs={24} md={6}>
                            {/* start: */}
                            <div className="px-3 rounded bg-white browse-category-item shadow d-flex align-items-center justify-content-between">
                                <div className="fw-normal">
                                    <span className="pe-2">
                                        <img src={musicnote} alt=" " />
                                    </span>
                                    Music
                                </div>
                                <div>
                                    <div className="rounded browse-category-item-arrow d-flex align-items-center justify-content-center">
                                        <img src={arrowupright} alt=" " />
                                    </div>
                                </div>
                            </div>
                            {/* start: */}
                        </Col>


                        <Col xs={24} md={6}>
                            {/* start: */}
                            <div className="px-3 rounded bg-white browse-category-item shadow d-flex align-items-center justify-content-between">
                                <div className="fw-normal">
                                    <span className="pe-2">
                                        <img src={databaseicon} alt=" " />
                                    </span>
                                    Data Science
                                </div>
                                <div>
                                    <div className="rounded browse-category-item-arrow d-flex align-items-center justify-content-center">
                                        <img src={arrowupright} alt=" " />
                                    </div>
                                </div>
                            </div>
                            {/* start: */}
                        </Col>


                        <Col xs={24} md={6}>
                            {/* start: */}
                            <div className="px-3 rounded bg-white browse-category-item shadow d-flex align-items-center justify-content-between">
                                <div className="fw-normal">
                                    <span className="pe-2">
                                        <img src={lightbulb} alt=" " />
                                    </span>
                                    Personal Develop
                                </div>
                                <div>
                                    <div className="rounded browse-category-item-arrow d-flex align-items-center justify-content-center">
                                        <img src={arrowupright} alt=" " />
                                    </div>
                                </div>
                            </div>
                            {/* start: */}
                        </Col>

                        <Col xs={24} md={6}>
                            {/* start: */}
                            <div className="px-3 rounded bg-white browse-category-item shadow d-flex align-items-center justify-content-between">
                                <div className="fw-normal">
                                    <span className="pe-2">
                                        <img src={heartbeaticon} alt=" " />
                                    </span>
                                    Helth & Fitness
                                </div>
                                <div>
                                    <div className="rounded browse-category-item-arrow d-flex align-items-center justify-content-center">
                                        <img src={arrowupright} alt=" " />
                                    </div>
                                </div>
                            </div>
                            {/* start: */}
                        </Col>

                        <Col xs={24} md={6}>
                            {/* start: */}
                            <div className="px-3 rounded bg-white browse-category-item shadow d-flex align-items-center justify-content-between">
                                <div className="fw-normal">
                                    <span className="pe-2">
                                        <img src={graphicon} alt=" " />
                                    </span>
                                    Finance
                                </div>
                                <div>
                                    <div className="rounded browse-category-item-arrow d-flex align-items-center justify-content-center">
                                        <img src={arrowupright} alt=" " />
                                    </div>
                                </div>
                            </div>
                            {/* start: */}
                        </Col>


                        <Col xs={24} md={6}>
                            {/* start: */}
                            <div className="px-3 rounded bg-white browse-category-item shadow d-flex align-items-center justify-content-between">
                                <div className="fw-normal">
                                    <span className="pe-2">
                                        <img src={detectiveicon} alt=" " />
                                    </span>
                                    Teaching
                                </div>
                                <div>
                                    <div className="rounded browse-category-item-arrow d-flex align-items-center justify-content-center">
                                        <img src={arrowupright} alt=" " />
                                    </div>
                                </div>
                            </div>
                            {/* start: */}
                        </Col>



                    </Row>



                </div>
            </section>


            <section className='courser-featured-courses  py-5'>
                <div className="container">
                    <h3 className="m-0 mt-2 mb-3 p-0 text-black h3  lh-1">
                        Featured Courses ( 32) </h3>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <div className="card shadow course-name ">
                                <div className="card-img-box">
                                    <img className="card-img-top" src="https://etimg.etb2bimg.com/photo/95026150.cms" alt="robot" />
                                </div>
                                <div className="d-flex justify-content-center align-items-center rounded-circle course-government-seal">
                                    <img src={governmentseal} alt=" " />
                                </div>
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
                                <div className="d-flex justify-content-center align-items-center rounded-circle course-government-seal">
                                    <img src={governmentseal} alt=" " />
                                </div>
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
                                <div className="d-flex justify-content-center align-items-center rounded-circle course-government-seal">
                                    <img src={governmentseal} alt=" " />
                                </div>
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
                                <div className="d-flex justify-content-center align-items-center rounded-circle course-government-seal">
                                    <img src={governmentseal} alt=" " />
                                </div>
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
                                <div className="d-flex justify-content-center align-items-center rounded-circle course-government-seal">
                                    <img src={governmentseal} alt=" " />
                                </div>
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
                                <div className="d-flex justify-content-center align-items-center rounded-circle course-government-seal">
                                    <img src={governmentseal} alt=" " />
                                </div>
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
                                <div className="d-flex justify-content-center align-items-center rounded-circle course-government-seal">
                                    <img src={governmentseal} alt=" " />
                                </div>
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
                                <div className="d-flex justify-content-center align-items-center rounded-circle course-government-seal">
                                    <img src={governmentseal} alt=" " />
                                </div>
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
                        <a href="#">View All <ArrowRightOutlined /> </a>
                    </div>

                </div>
            </section>









        </div>
    );
};

export default ELarningPage;
