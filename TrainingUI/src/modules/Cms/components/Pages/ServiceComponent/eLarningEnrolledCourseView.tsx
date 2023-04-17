import React, { FC } from "react";
import { Row, Col, Card, Form, Input, Checkbox, Collapse, Progress } from "antd";
import { Link } from "react-router-dom";
import { useLang } from "../../../../../hooks/useLang";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";

import "./eLarningenrolledcourseview.style.scss";

import {
    BookOutlined,
    StarFilled, StarOutlined, ClockCircleOutlined, BarChartOutlined,
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
                <h2 className="h2 text-center mb-1">{t('Enrolled Course View')}</h2>
                <div className="px-4 py-3 mt-4   rounded-top shadow elearning-single-course-header">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={10} className="text-end">
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
                        <Col xs={24} md={14}>
                            <h2 className="h2m-0 text-white lh-1 fw-normal">
                                Youtube Success: Script, shoot and edit<br /> with MBKGF
                            </h2>
                            <div className="text-white mt-3 mb-3">By Ministry of Science & Technology</div>
                            <Row gutter={[16, 0]}>
                                <Col xs={24} md={12}>
                                    <div className="d-flex mb-3">
                                        <div className="fw-bold  text-white  pe-2">Instructor:  </div>
                                        <div className="yellow-star">Md.Rajibul Islam </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="progress-item mt-3">
                                <div className="text-white">Your Progress</div>
                                <Progress percent={20} showInfo={false} />
                            </div>
                            <div className="text-start mt-3">
                                <button type="button" className="btn btn-outline-dark fw-bold px-4 py-1 fs-5 yellow-btn">Start Course</button>
                            </div>
                        </Col>

                    </Row>
                    <div className="text-white mt-3">
                        <h2 className="m-0 p-0 mb-2  h2  lh-1 fw-normal text-white">
                            Introduction to type script
                        </h2>
                        <div>
                            Lorem ipsum dolor sit amet consectetur. In urna nunc porttitor a posuere mauris. Id integer donec natoque volutpat. Tellus in libero pellentesque viverra feugiat tellus. Dapibus sit malesuada purus ultrices facilisis. Risus fermentum sapien neque augue consectetur. Est ultricies quis neque vitae ut orci. Hac pharetra ut in amet quis nisi. Sem pellentesque tempor lorem est. Porttitor nibh egestas nec vitae diam sagittis quam.
                        </div>
                    </div>

                    <div className="d-flex mt-4 mb-3">
                        <button type="button" className="btn btn-outline-dark fw-bold px-4 py-1 fs-5 wathc-previw-btn me-3">Watch Preview</button>
                        <button type="button" className="btn btn-outline-dark fw-bold px-3 py-1 fs-5  yellow-btn">Get Started</button>
                    </div>

                </div>
                <div className="px-3 py-3 pb-0  elearning-course-header-bottom">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={14} >
                            <Row gutter={[16, 0]}>
                                <Col xs={24} md={8}>
                                    <div className="d-flex mb-3">
                                        <div className="pe-2">
                                            <img width={40} height={40} className="rounded-circle" src={vidoscreen} alt=" " />
                                        </div>
                                        <div>
                                            <div className="fw-bold lh-1">Md.Rajibul Islam</div>
                                            <div className="lh-1">Instructor:</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} md={8}>
                                    <ClockCircleOutlined /> 1 hour 50 minutes
                                </Col>
                                <Col xs={24} md={8}><BarChartOutlined /> Beginner</Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={10}>
                            <div className="d-flex justify-content-end">
                                <div className="pe-2">
                                    <span className="yellow-star ms-2"> <StarFilled /> </span>
                                    <span className="yellow-star ms-2"> <StarFilled /> </span>
                                    <span className="yellow-star ms-2"> <StarFilled /> </span>
                                    <span className="yellow-star ms-2"> <StarFilled /> </span>
                                    <span className="yellow-star ms-2"> <StarFilled /> </span>
                                </div>
                                <div>4.5 ratings (3 reviews) </div>
                            </div>
                        </Col>
                    </Row>

                </div>


                <Row gutter={[16, 16]}>
                    <Col xs={24} md={16} >

                        <div className="timeline">
                            <ul>
                                <li>
                                    <div className="timeline-number">1</div>
                                    <h4>Course Overview</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur. Urna dictum non egestas aliquet nunc molestie. Risus diam sollicitudin vitae pulvinar cursus nibh purus auctor in. A enim aliquam viverra nulla sem sed duis netus. Aliquet sociis congue in risus ipsum cras sapien pulvinar. Quis duis vehicula ipsum lacus quam sit nunc. Tincidunt nibh sollicitudin amet eget amet. Aliquet nunc nunc purus diam auctor. Congue id odio donec sed consectetur. Amet neque odio integer ligula pharetra nibh pretium enim.</p>
                                    <div className="course-collapse mt-2">
                                        <Collapse  onChange={onChange_2}>
                                            <Panel header="Course Overview" key="1">
                                                <p>Lorem ipsum dolor sit amet consectetur. Urna dictum non egestas aliquet nunc molestie. Risus diam sollicitudin vitae pulvinar cursus nibh purus auctor in. A enim aliquam viverra nulla sem sed duis netus. Aliquet sociis congue in risus ipsum cras sapien pulvinar. Quis duis vehicula ipsum lacus quam sit nunc. Tincidunt nibh sollicitudin amet eget amet. Aliquet nunc nunc purus diam auctor. Congue id odio donec sed consectetur. Amet neque odio integer ligula pharetra nibh pretium enim.</p>
                                            </Panel>
                                        </Collapse>
                                    </div>
                                </li>

                                <li>
                                    <div className="timeline-number">2</div>
                                    <h4>Getting Started with Angular  </h4>
                                    <p>Lorem ipsum dolor sit amet consectetur. Urna dictum non egestas aliquet nunc molestie. Risus diam sollicitudin vitae pulvinar cursus nibh purus auctor in. A enim aliquam viverra nulla sem sed duis netus. Aliquet sociis congue in risus ipsum cras sapien pulvinar. Quis duis vehicula ipsum lacus quam sit nunc. Tincidunt nibh sollicitudin amet eget amet. Aliquet nunc nunc purus diam auctor. Congue id odio donec sed consectetur. Amet neque odio integer ligula pharetra nibh pretium enim.</p>
                                    <div className="shadow rounded-2 bg-white py-2 mt-2">
                                        <div className="d-flex  justify-content-between border-bottom px-2 ">
                                            <div className="text-muted">1 of 4 steps</div>
                                        </div>
                                        <div className="d-flex  justify-content-between border-bottom px-2 ">
                                            <div>Course Overview</div>
                                            <div className="text-muted">1 hour 50 minutes</div>
                                        </div>
                                        <div className="d-flex  justify-content-between border-bottom px-2 ">
                                            <div>Lorem ipsum dolor sit amet </div>
                                            <div className="text-muted">1 hour 50 minutes</div>
                                        </div>
                                        <div className="d-flex  justify-content-between border-bottom px-2 ">
                                            <div>Lorem ipsum dolor sit amet consectetur.</div>
                                            <div className="text-muted">1 hour 50 minutes</div>
                                        </div>
                                        <div className="d-flex  justify-content-between px-2 ">
                                            <div>Lorem ipsum dolor sit amet </div>
                                            <div className="text-muted">1 hour 50 minutes</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-number">3</div>
                                    <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur. Urna dictum non egestas aliquet nunc molestie. Risus diam sollicitudin vitae pulvinar cursus nibh .</p>
                                    <div className="course-collapse mt-2">
                                        <Collapse  onChange={onChange_2}>
                                            <Panel header="Lorem ipsum dolor sit amet consectetur." key="1">
                                                <p>Lorem ipsum dolor sit amet consectetur. Urna dictum non egestas aliquet nunc molestie. Risus diam sollicitudin vitae pulvinar cursus nibh purus auctor in. A enim aliquam viverra nulla sem sed duis netus. Aliquet sociis congue in risus ipsum cras sapien pulvinar. Quis duis vehicula ipsum lacus quam sit nunc. Tincidunt nibh sollicitudin amet eget amet. Aliquet nunc nunc purus diam auctor. Congue id odio donec sed consectetur. Amet neque odio integer ligula pharetra nibh pretium enim.</p>
                                            </Panel>
                                        </Collapse>
                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-number">4</div>
                                    <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur. Urna dictum non egestas aliquet nunc molestie. Risus diam sollicitudin vitae pulvinar cursus nibh .</p>
                                    <div className="course-collapse mt-2">
                                        <Collapse  onChange={onChange_2}>
                                            <Panel header="Lorem ipsum dolor sit amet consectetur." key="1">
                                                <p>Lorem ipsum dolor sit amet consectetur. Urna dictum non egestas aliquet nunc molestie. Risus diam sollicitudin vitae pulvinar cursus nibh purus auctor in. A enim aliquam viverra nulla sem sed duis netus. Aliquet sociis congue in risus ipsum cras sapien pulvinar. Quis duis vehicula ipsum lacus quam sit nunc. Tincidunt nibh sollicitudin amet eget amet. Aliquet nunc nunc purus diam auctor. Congue id odio donec sed consectetur. Amet neque odio integer ligula pharetra nibh pretium enim.</p>
                                            </Panel>
                                        </Collapse>
                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-number">5</div>
                                    <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur. Urna dictum non egestas aliquet nunc molestie. Risus diam sollicitudin vitae pulvinar cursus nibh .</p>
                                    <div className="course-collapse mt-2">
                                        <Collapse  onChange={onChange_2}>
                                            <Panel header="Lorem ipsum dolor sit amet consectetur." key="1">
                                                <p>Lorem ipsum dolor sit amet consectetur. Urna dictum non egestas aliquet nunc molestie. Risus diam sollicitudin vitae pulvinar cursus nibh purus auctor in. A enim aliquam viverra nulla sem sed duis netus. Aliquet sociis congue in risus ipsum cras sapien pulvinar. Quis duis vehicula ipsum lacus quam sit nunc. Tincidunt nibh sollicitudin amet eget amet. Aliquet nunc nunc purus diam auctor. Congue id odio donec sed consectetur. Amet neque odio integer ligula pharetra nibh pretium enim.</p>
                                            </Panel>
                                        </Collapse>
                                    </div>
                                </li>
                            </ul>
                        </div>


                    </Col>
                    <Col xs={24} md={8} >
                        sadfasdf
                    </Col>
                </Row>





            </div>
        </div>
    );
};

export default ELarningPage;
