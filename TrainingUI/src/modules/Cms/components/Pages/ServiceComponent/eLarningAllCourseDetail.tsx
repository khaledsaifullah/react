import React, { FC } from "react";
import { Row, Col, Card, Form, Input, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { useLang } from "../../../../../hooks/useLang";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";

import "./eLarningallcourse.style.scss";

import {
    FilterOutlined,
    CalendarOutlined, TeamOutlined, BankOutlined,
    SolutionOutlined, HeartOutlined, ArrowRightOutlined
} from '@ant-design/icons';



import staricon from '../../../../../assets/images/icon/star-icon.png';
import governmentseal from '../../../../../assets/images/icon/government-seal.png';

import type { CheckboxValueType } from 'antd/es/checkbox/Group';




const { Search } = Input;
const onSearch = (value: string) => console.log(value);


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
                <h2 className="h2 text-center mb-5">{t('Browse Categories')}</h2>

                <Row gutter={[16, 16]}>
                    <Col xs={24} md={6}>
                        <div className="pe-3">
                            <div className="shadow-lg p-3 mb-5 bg-body rounded course-search-left">
                                <Form.Item name="course-search">
                                    <Search
                                        placeholder={t("What do want to learn?")}
                                        onSearch={(value) => handleOnChanged('search', value, '')}
                                        allowClear
                                    />
                                </Form.Item>
                            </div>

                            <h4 className="h4">{t('Filter Courses')}</h4>
                            <h5 className="h5">{t('Category')}</h5>
                            <div className="left-box mb-5" style={{ height: '180px' }}>
                                <Checkbox.Group style={{ width: '100%' }} onChange={onChange_1}>
                                    <ul>
                                        <li><Checkbox value="A">Web Development</Checkbox></li>
                                        <li><Checkbox value="B">Design</Checkbox></li>
                                        <li><Checkbox value="C">IOS & Swift</Checkbox></li>
                                        <li><Checkbox value="D">Android</Checkbox></li>
                                        <li><Checkbox value="E">Business</Checkbox></li>
                                        <li><Checkbox value="F">Photography </Checkbox></li>
                                        <li><Checkbox value="G">Photography1 </Checkbox></li>
                                        <li><Checkbox value="H">Photography </Checkbox></li>
                                        <li><Checkbox value="I">Photography1 </Checkbox></li>
                                    </ul>
                                </Checkbox.Group>
                            </div>

                            <div className="border border-2 border-start-0 border-end-0 border-top-0 mb-4"></div>


                            <h5 className="h5">Training Type </h5>
                            <div className="left-box mb-5" style={{ height: '180px' }}>
                                <Checkbox.Group style={{ width: '100%' }} onChange={onChange_1}>
                                    <ul>
                                        <li><Checkbox value="A">Training</Checkbox></li>
                                        <li><Checkbox value="B">Workshop/Seminar </Checkbox></li>
                                        <li><Checkbox value="C">Certificate Course </Checkbox></li>
                                        <li><Checkbox value="D">Post Graduate Diploma </Checkbox></li>
                                        <li><Checkbox value="E">Webinar</Checkbox></li>
                                        <li><Checkbox value="F">Photography </Checkbox></li>
                                        <li><Checkbox value="G">Photography1 </Checkbox></li>
                                        <li><Checkbox value="H">Photography </Checkbox></li>
                                        <li><Checkbox value="I">Photography1 </Checkbox></li>
                                    </ul>
                                </Checkbox.Group>
                            </div>
                            <div className="border border-2 border-start-0 border-end-0 border-top-0 mb-4"></div>


                            <h5 className="h5">Level </h5>
                            <div className="left-box mb-5" style={{ height: '80px' }}>
                                <Checkbox.Group style={{ width: '100%' }} onChange={onChange_1}>
                                    <ul>
                                        <li><Checkbox value="A">Beginner </Checkbox></li>
                                        <li><Checkbox value="B">Intermediate  </Checkbox></li>
                                        <li><Checkbox value="C">Advanced </Checkbox></li>
                                        <li><Checkbox value="D">Post Graduate Diploma </Checkbox></li>
                                        <li><Checkbox value="E">Webinar</Checkbox></li>
                                        <li><Checkbox value="F">Photography </Checkbox></li>
                                        <li><Checkbox value="G">Photography1 </Checkbox></li>
                                        <li><Checkbox value="H">Photography </Checkbox></li>
                                        <li><Checkbox value="I">Photography1 </Checkbox></li>
                                    </ul>
                                </Checkbox.Group>
                            </div>


                            <div className="border border-2 border-start-0 border-end-0 border-top-0 mb-4"></div>


                            <h5 className="h5">Price </h5>
                            <div className="left-box mb-5 left-box-scrollnone">
                                <Checkbox.Group style={{ width: '100%' }} onChange={onChange_1}>
                                    <ul>
                                        <li><Checkbox value="A">Free </Checkbox></li>
                                        <li><Checkbox value="B">Paid  </Checkbox></li>
                                    </ul>
                                </Checkbox.Group>
                            </div>

                            <div className="border border-2 border-start-0 border-end-0 border-top-0 mb-4"></div>
                            <h5 className="h5">Platform </h5>
                            <div className="left-box mb-5" style={{ height: '80px' }}>
                                <Checkbox.Group style={{ width: '100%' }} onChange={onChange_1}>
                                    <ul>
                                        <li><Checkbox value="A">All </Checkbox></li>
                                        <li><Checkbox value="B">Ongoing  </Checkbox></li>
                                        <li><Checkbox value="C">Upcoming </Checkbox></li>
                                        <li><Checkbox value="D">Archive </Checkbox></li>
                                    </ul>
                                </Checkbox.Group>
                            </div>




                        </div>
                    </Col>
                    <Col xs={24} md={18} >
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={8}>
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
                            <Col xs={24} md={8}>
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
                            <Col xs={24} md={8}>
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
                            <Col xs={24} md={8}>
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
                            <Col xs={24} md={8}>
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
                            <Col xs={24} md={8}>
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
                            <Col xs={24} md={8}>
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
                            <Col xs={24} md={8}>
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
                            <Col xs={24} md={8}>
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
                            <Col xs={24} md={8}>
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
                            <Col xs={24} md={8}>
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
                            <Col xs={24} md={8}>
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


                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ELarningPage;
