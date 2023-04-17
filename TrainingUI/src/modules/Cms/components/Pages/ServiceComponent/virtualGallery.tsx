import React, { FC } from "react";
import { Row, Col, Card, Form, Input, Checkbox, Collapse, Progress } from "antd";
import { Link } from "react-router-dom";
import { useLang } from "../../../../../hooks/useLang";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";

import "./virtualgallery.style.scss";

import {
    CaretLeftOutlined, CaretRightOutlined,
    CaretDownOutlined, CaretUpOutlined,
    PlusOutlined, MinusOutlined
} from '@ant-design/icons';


import { ReactComponent as HotspotIcon } from '@/assets/images/logo/hotspot-icon-virtual.svg';
import { ReactComponent as PurpleOneIcon } from '@/assets/images/logo/purple-one-icon-virtual.svg';
import { ReactComponent as PurpleTwoIcon } from '@/assets/images/logo/purple-two-icon-virtual.svg';
import { ReactComponent as PurpleThreeIcon } from '@/assets/images/logo/purple-three-icon-virtual.svg';
import { ReactComponent as PurpleFourIcon } from '@/assets/images/logo/purple-four-icon-virtual.svg';
import { ReactComponent as PurpleFiveIcon } from '@/assets/images/logo/purple-five-icon-virtual.svg';


import { ReactComponent as PurpleSixIcon } from '@/assets/images/logo/purple-six-icon-virtual.svg';
import { ReactComponent as PurpleSevenIcon } from '@/assets/images/logo/purple-seven-icon-virtual.svg';
import { ReactComponent as PurpleEightIcon } from '@/assets/images/logo/purple-eight-icon-virtual.svg';
import { ReactComponent as PurpleNineIcon } from '@/assets/images/logo/purple-nine-icon-virtual.svg';


import { ReactComponent as ClickDragOneIcon } from '@/assets/images/logo/click-drag-one.svg';
import { ReactComponent as ClickDragTwoIcon } from '@/assets/images/logo/click-drag-two.svg';
import { ReactComponent as ClickDragThreeIcon } from '@/assets/images/logo/click-drag-three.svg';





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
                <h2 className="h2 text-center mb-1">{t('VIRTUAL GALLERY')}</h2>

                <section className="home-banner mb-md-5">
                    <img src="https://i.postimg.cc/TP2cxLmX/banner.jpg" style={{ width: '100%'}} />
                </section>
                <Row gutter={[16, 16]} className="virtual-feature-content">
                    <Col xs={24} md={8} className="first">
                        <div className="px-md-4 py-4  virtual-feature-block text-center text-md-start">
                            <h4 className="m-0 p-0 pb-2 lh-1 h2" style={{ color: '#FF3D00' }}>FEATURES </h4>
                            <p> Unique features can be added to a virtual Gallery. These can be used to add new functions, make your gallery more accessible </p>
                        </div>
                    </Col>
                    <Col xs={24} md={8} >
                        <div className="border border-4 rounded-2 px-4 py-4 virtual-feature-block text-center text-md-start">
                            <div className="virtual-feature-icon">
                                <HotspotIcon
                                    style={{ width: '100%', verticalAlign: 'middle' }}
                                    className="p-2"
                                />
                            </div>
                            <h4 className="m-0 p-0 pb-2 lh-1 violet-color" style={{ color: '#7D10A4' }}>HOTSPOTS</h4>
                            <p>Interactive hotspots that can show additional
                                content such as details text, photos, videos.</p>
                        </div>
                    </Col>
                    <Col xs={24} md={8} >
                        <div className="border border-4 rounded-2 px-4 py-4 virtual-feature-block text-center text-md-start">
                            <div className="virtual-feature-icon">
                                <HotspotIcon
                                    style={{ width: '100%', verticalAlign: 'middle' }}
                                    className="p-2"
                                />
                            </div>
                            <h4 className="m-0 p-0 pb-2 lh-1 violet-color" style={{ color: '#7D10A4' }}>NAVIGATION </h4>
                            <p>Multiple navigation options, from traditional menus to
                                sidebars and context menus.</p>
                        </div>
                    </Col>
                    <Col xs={24} md={8} >
                        <div className="border border-4 rounded-2 px-4 py-4 virtual-feature-block text-center text-md-start">
                            <div className="virtual-feature-icon">
                                <HotspotIcon
                                    style={{ width: '100%', verticalAlign: 'middle' }}
                                    className="p-2"
                                />
                            </div>
                            <h4 className="m-0 p-0 pb-2 lh-1 violet-color" style={{ color: '#7D10A4' }}>MAP VIEW</h4>
                            <p>Ability to switch to a standard maps view, ideal for
                                showing location and content in the surrounding area.</p>
                        </div>
                    </Col>
                    <Col xs={24} md={8} >
                        <div className="border border-4 rounded-2 px-4 py-4 virtual-feature-block text-center text-md-start">
                            <div className="virtual-feature-icon">
                                <HotspotIcon
                                    style={{ width: '100%', verticalAlign: 'middle' }}
                                    className="p-2"
                                />
                            </div>
                            <h4 className="m-0 p-0 pb-2 lh-1 violet-color" style={{ color: '#7D10A4' }}>VR READY </h4>
                            <p>Virtual tour system is built ready for use with VR headsets
                                such as Oculus Quest 2/Google Cardboard.</p>
                        </div>
                    </Col>
                    <Col xs={24} md={8} >
                        <div className="border border-4 rounded-2 px-4 py-4 virtual-feature-block text-center text-md-start">
                            <div className="virtual-feature-icon">
                                <HotspotIcon
                                    style={{ width: '100%', verticalAlign: 'middle' }}
                                    className="p-2"
                                />
                            </div>
                            <h4 className="m-0 p-0 pb-2 lh-1 violet-color" style={{ color: '#7D10A4' }}>RESPONSIVE UI </h4>
                            <p>Responsive design that adapts appearance and functionality
                                for different screen sizes and devices.</p>
                        </div>
                    </Col>
                </Row>


                <div className="pt-5 pb-5">
                    <h2 className="m-0 p-0 pb-2 lh-1 text-center h2" style={{ color: '#FF3D00' }}>
                        Guidelines for Navigating through the galleries </h2>
                    <h6 className="m-0 p-0 pb-2 lh-2 text-center fw-normal h5" >
                        Hotspots are buttons pinned to the virtual tour the user can click/tap. Open <br />
                        information in modal (pop-up) boxes.
                    </h6>
                </div>

                <Row gutter={[16, 16]}>
                    <Col xs={24} md={10} className="text-sm-end text-md-end text-lg-end text-xl-end">
                        <Row gutter={[16, 16]} className="mb-2 flex-md-row-reverse flex-lg-row-reverse" >
                            <Col xs={4} md={4}>
                                <PurpleOneIcon
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                />
                            </Col>
                            <Col xs={20} md={20}>
                                <h6 className="m-0 p-0 pb-2 lh-1 h6 pt-2" style={{ color: '#092D44' }}>
                                    Purple Button</h6>
                                <p className="m-0 p-0 pb-2 lh-1  h6" style={{ color: '#333', fontSize: '14px' }}>
                                    Click on the purple button to visit Physics Gallery</p>
                            </Col>
                        </Row>

                        <Row gutter={[16, 16]} className="mb-2 flex-md-row-reverse flex-lg-row-reverse" >
                            <Col xs={4} md={4}>
                                <PurpleTwoIcon
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                />
                            </Col>
                            <Col xs={20} md={20}>
                                <h6 className="m-0 p-0 pb-2 lh-1 h6 pt-2" style={{ color: '#1A8CCC' }}>
                                    Purple Button</h6>
                                <p className="m-0 p-0 pb-2 lh-1  h6" style={{ color: '#333', fontSize: '14px' }}>
                                    Click on the purple button to visit Industrial Technology Gallery </p>
                            </Col>
                        </Row>


                        <Row gutter={[16, 16]} className="mb-2 flex-md-row-reverse flex-lg-row-reverse" >
                            <Col xs={4} md={4}>
                                <PurpleThreeIcon
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                />
                            </Col>
                            <Col xs={20} md={20}>
                                <h6 className="m-0 p-0 pb-2 lh-1 h6 pt-2" style={{ color: '#959190' }}>
                                    Purple Button</h6>
                                <p className="m-0 p-0 pb-2 lh-1  h6" style={{ color: '#333', fontSize: '14px' }}>
                                    Click on the purple button to visit space science Gallery</p>
                            </Col>
                        </Row>

                        <Row gutter={[16, 16]} className="mb-2 flex-md-row-reverse flex-lg-row-reverse" >
                            <Col xs={4} md={4}>
                                <PurpleFourIcon
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                />
                            </Col>
                            <Col xs={20} md={20}>
                                <h6 className="m-0 p-0 pb-2 lh-1 h6 pt-2" style={{ color: '#D2425C' }}>
                                    Purple Button</h6>
                                <p className="m-0 p-0 pb-2 lh-1  h6" style={{ color: '#333', fontSize: '14px' }}>
                                    Click on the purple button to visit 2nd Floor </p>
                            </Col>
                        </Row>


                        <Row gutter={[16, 16]} className="mb-2 flex-md-row-reverse flex-lg-row-reverse" >
                            <Col xs={4} md={4}>
                                <PurpleFiveIcon
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                />
                            </Col>
                            <Col xs={20} md={20}>
                                <h6 className="m-0 p-0 pb-2 lh-1 h6 pt-2" style={{ color: '#EF4E44' }}>
                                    Purple Button</h6>
                                <p className="m-0 p-0 pb-2 lh-1  h6" style={{ color: '#333', fontSize: '14px' }}>
                                    Click on the purple button to visit VR Corner  </p>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={24} md={4} className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                        <img src="https://i.postimg.cc/7LJqHycP/samsung-mobile-1.png"  style={{ width: '100%',height: '100%'}} />
                    </Col>

                    <Col xs={24} md={10}>
                        <Row gutter={[16, 16]} className="mb-2">
                            <Col xs={4} md={4}>
                                <PurpleSixIcon
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                />
                            </Col>
                            <Col xs={20} md={20}>
                                <h6 className="m-0 p-0 pb-2 lh-1 h6 pt-2" style={{ color: '#79CD0E' }}>
                                    Purple Button</h6>
                                <p className="m-0 p-0 pb-2 lh-1  h6" style={{ color: '#333', fontSize: '14px' }}>
                                    Click on the purple button to visit Biology Gallery  </p>
                            </Col>
                        </Row>



                        <Row gutter={[16, 16]} className="mb-2">
                            <Col xs={4} md={4}>
                                <PurpleSevenIcon
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                />
                            </Col>
                            <Col xs={20} md={20}>
                                <h6 className="m-0 p-0 pb-2 lh-1 h6 pt-2" style={{ color: '#9E9CFF' }}>
                                    Purple Button</h6>
                                <p className="m-0 p-0 pb-2 lh-1  h6" style={{ color: '#333', fontSize: '14px' }}>
                                    Click on the purple button to visit Information Technology Gallery  </p>
                            </Col>
                        </Row>


                        <Row gutter={[16, 16]} className="mb-2">
                            <Col xs={4} md={4}>
                                <PurpleEightIcon
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                />
                            </Col>
                            <Col xs={20} md={20}>
                                <h6 className="m-0 p-0 pb-2 lh-1 h6 pt-2" style={{ color: '#678379' }}>
                                    Purple Button</h6>
                                <p className="m-0 p-0 pb-2 lh-1  h6" style={{ color: '#333', fontSize: '14px' }}>
                                    Click on the purple button to visit Fun Science Gallery  </p>
                            </Col>
                        </Row>


                        <Row gutter={[16, 16]} className="mb-2">
                            <Col xs={4} md={4}>
                                <PurpleNineIcon
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                />
                            </Col>
                            <Col xs={20} md={20}>
                                <h6 className="m-0 p-0 pb-2 lh-1 h6 pt-2" style={{ color: '#FF00C7' }}>
                                    Purple Button</h6>
                                <p className="m-0 p-0 pb-2 lh-1  h6" style={{ color: '#333', fontSize: '14px' }}>
                                    Click on the purple button to Children’s Gallery  </p>
                            </Col>
                        </Row>

                        <div className="px-md-5 mt-4 text-center text-md-start">
                            <p className="m-0 p-0 pb-2 lh-1 ps-md-4"><strong>View More Button</strong></p>
                            <p className="m-0 p-0 pb-2 lh-1 ps-md-4">Click on <strong>View More</strong>to read the details </p>
                        </div>

                    </Col>
                </Row>

                <div className="pt-5 pb-5">
                    <h2 className="m-0 p-0 pb-2 lh-1 text-center h2" style={{ color: '#FF3D00' }}>
                        Image Guideline for Virtual Tour of Museum </h2>
                    <h6 className="m-0 p-0 pb-2 lh-2 text-center fw-normal h5" >
                        These can direct the user to a different 360° view or extra open information
                        <br /> in modal (pop-up) boxes.
                    </h6>
                </div>


                <Row gutter={[16, 16]} className="mb-2">
                    <Col xs={24} md={8}>
                        <div className="shadow-sm rounded-2 text-center py-3 px-3 virtual-tour-museum" style={{ backgroundColor: '#ECECEC' }}>
                            <h6 className="m-0 p-0 pb-2 lh-1 text-center fw-normal h6"      >
                                Click and Drag to look around </h6>
                            <div className="d-flex flex-column justify-content-end  align-items-center virtual-tour-icon">
                                <ClickDragOneIcon style={{ verticalAlign: 'middle' }} />
                            </div>
                            <div className="border-top mt-2 fw-bold">
                                <span style={{ backgroundColor: '#ECECEC', position: 'relative', top: '-11px', color: '#A5A5A5' }}>OR</span>
                            </div>
                            <h6 className="m-0 p-0 pb-2 lh-2 text-center fw-normal h6"      >
                                Use the arrow kays on keyboard to turn left and right
                            </h6>
                            <div className="text-center virtual-tour-arrow">
                                <span className="virtual-arrow"><CaretLeftOutlined /> </span>
                                <span className="virtual-arrow"><CaretRightOutlined /> </span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={8}>
                        <div className="shadow-sm rounded-2 text-center py-3 px-3 virtual-tour-museum" style={{ backgroundColor: '#ECECEC' }}>
                            <h6 className="m-0 p-0 pb-2 lh-1 text-center fw-normal h6"       >
                                Click on the white circular icons  on the floor to move around the dpace </h6>
                            <div className="d-flex flex-column justify-content-end  align-items-center virtual-tour-icon">
                                <ClickDragTwoIcon style={{ verticalAlign: 'middle' }} /></div>
                            <div className="border-top mt-2 fw-bold">
                                <span style={{ backgroundColor: '#ECECEC', position: 'relative', top: '-11px', color: '#A5A5A5' }}>OR</span>
                            </div>
                            <h6 className="m-0 p-0 pb-2 lh-2 text-center fw-normal h6"      >
                                Use the arrow kays on keyboard to move forward and back
                            </h6>
                            <div className="text-center virtual-tour-arrow">
                                <span className="virtual-arrow"><CaretDownOutlined /> </span>
                                <span className="virtual-arrow"><CaretUpOutlined /> </span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={8}>
                        <div className="shadow-sm rounded-2 text-center py-3 px-3 virtual-tour-museum" style={{ backgroundColor: '#ECECEC' }}>
                            <h6 className="m-0 p-0 pb-2 lh-1 text-center fw-normal h6"   >
                                Use the scroll wheel on your mouse to zoom in and out  </h6>
                            <div className="d-flex flex-column justify-content-end  align-items-center virtual-tour-icon">
                                <ClickDragThreeIcon style={{ verticalAlign: 'middle' }} /></div>
                            <div className="border-top mt-2 fw-bold">
                                <span style={{ backgroundColor: '#ECECEC', position: 'relative', top: '-11px', color: '#A5A5A5' }}>OR</span>
                            </div>
                            <h6 className="m-0 p-0 pb-2 lh-2 text-center fw-normal h6"      >
                                Use the +, - keys on the keyboard to zoom in and out
                            </h6>
                            <div className="text-center virtual-tour-arrow">
                                <span className="virtual-arrow"><PlusOutlined /> </span>
                                <span className="virtual-arrow"><MinusOutlined /> </span>
                            </div>

                        </div>
                    </Col>
                </Row>


                <Row gutter={[0, 16]} className="mb-2 mt-5">
                    <Col xs={24} md={12}>
                        <div className="shadow-sm rounded-2 py-3 px-3 mt-5 text-center text-md-start" style={{ backgroundColor: '#ECECEC' }}>
                            <h2 className="m-0 p-0 pb-2 lh-1 h2" style={{ color: '#FF3D00' }}>
                            Video Guideline for Virtual Tour </h2>
                            <h6 className="m-0 p-0 pb-2 lh-2 fw-normal h5">
                            These can direct the user to a different 360° view or
                             extra open information in modal (pop-up) boxes.
                            </h6>
                        </div>
                    </Col>
                    <Col xs={24} md={12}>
                    <iframe className="border-0 rounded-1 w-100" width="100%" height="315" src="https://www.youtube.com/embed/ekwjVVOqx2w" title="YouTube video player"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </Col>
                </Row>




            </div>
        </div>
    );
};

export default ELarningPage;
