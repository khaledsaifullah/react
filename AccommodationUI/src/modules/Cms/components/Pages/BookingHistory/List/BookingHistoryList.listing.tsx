import React, { FC } from 'react'
import { Form, Row, Col, Select, Button, Checkbox,
    Tabs, Input, Space   } from 'antd';
import { useTranslation } from "react-i18next";
import "./BookingHistoryList.style.scss"




import nidicondoc from '../../../../../../assets/images/icon/nid-icon-doc.png';
import mailicondoc from '../../../../../../assets/images/icon/mail-icon-doc.png';
import phoneicondoc from '../../../../../../assets/images/icon/phone-icon-doc.png';


import {AppstoreOutlined , FormOutlined ,
    SlackSquareOutlined, ClockCircleOutlined ,
    HeartOutlined , UserOutlined , KeyOutlined ,
    SettingOutlined, LogoutOutlined, BankOutlined,
    StarFilled, EnvironmentOutlined,CreditCardOutlined,
    RightOutlined  } from '@ant-design/icons';


const BookingHistoryListing: FC<any> = props => {
    const { t } = useTranslation();
    const { loading } = props;

    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };


    return (
        <>
            <div className='booking-history-page'>
                <div className='container'>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={6}>
                            <div className='booking-leftsidebar px-3 py-3'>
                                <div className='document-verification mb-4 px-3 pt-3 pb-5'>
                                    <h3 className='h6 m-0 mb-1 p-0 text-center'>Document verification</h3>
                                    <p className='text-center m-0 p-0'>Updating the following information in
                                         <br/>your profile is recommended to <br/>
                                         simplify the various application <br/> processes.</p>
                                    <div className='d-flex justify-content-between mt-4'>
                                        <div>
                                            <img src={nidicondoc} alt="nidicondoc" />
                                            <span className='ps-2'>NID</span>
                                        </div>
                                        <div>
                                            <span className='document-recheck rounded-3 px-2 py-1'>যাচাই </span>
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-between mt-4'>
                                        <div>
                                            <img src={mailicondoc} alt="mailicondoc" />
                                            <span className='ps-2'>Email Address</span>
                                        </div>
                                        <div>
                                            <span className='document-check'>&nbsp;</span>
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-between mt-4'>
                                        <div>
                                            <img src={phoneicondoc} alt="phoneicondoc" />
                                            <span className='ps-2'>Mobile </span>
                                        </div>
                                        <div>
                                            <span className='document-check'>&nbsp;</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='booking-leftborad'>
                                    <ul>
                                        <li>
                                            <div  className='booking-leftborad-item active d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <span className='pe-1'><AppstoreOutlined  /> </span>
                                                    Main dashboard
                                                </div>
                                                <div>
                                                    <span className='document-number'>৩</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div  className='booking-leftborad-item d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <span className='pe-1'><FormOutlined  /> </span>
                                                    Services received
                                                </div>

                                            </div>
                                            <div>
                                                E-ticketing, Exhibition Management System
                                            </div>
                                        </li>

                                        <li>
                                            <div  className='booking-leftborad-item d-flex justify-content-between align-items-center'>
                                                <a href='#'>
                                                    <span className='pe-1'><FormOutlined /> </span>
                                                    Booking History
                                                </a>

                                            </div>
                                        </li>
                                        <li>
                                            <div  className='booking-leftborad-item d-flex justify-content-between align-items-center'>
                                                <a href='#'>
                                                    <span className='pe-1'><SlackSquareOutlined  /> </span>
                                                    Manage Review & Feedback
                                                </a>

                                            </div>
                                        </li>
                                        <li>
                                            <div  className='booking-leftborad-item d-flex justify-content-between align-items-center'>
                                                <a href='#'>
                                                    <span className='pe-1'><ClockCircleOutlined  /> </span>
                                                    Payment History
                                                </a>

                                            </div>
                                        </li>
                                        <li>
                                            <div  className='booking-leftborad-item d-flex justify-content-between align-items-center'>
                                                <a href='#'>
                                                    <span className='pe-1'><HeartOutlined  /> </span>
                                                    Wish List
                                                </a>

                                            </div>
                                        </li>
                                        <li>
                                            <div>General</div>
                                        </li>
                                        <li>
                                            <div  className='booking-leftborad-item d-flex justify-content-between align-items-center'>
                                                <a href='#'>
                                                    <span className='pe-1'><UserOutlined   /> </span>
                                                    My Profile
                                                </a>

                                            </div>
                                        </li>
                                        <li>
                                            <div  className='booking-leftborad-item d-flex justify-content-between align-items-center'>
                                                <a href='#'>
                                                    <span className='pe-1'><KeyOutlined   /> </span>
                                                    Change Password
                                                </a>

                                            </div>
                                        </li>

                                        <li>
                                            <div  className='booking-leftborad-item d-flex justify-content-between align-items-center'>
                                                <a href='#'>
                                                    <span className='pe-1'><SettingOutlined    /> </span>
                                                    Settings
                                                </a>

                                            </div>
                                        </li>
                                        <li>
                                            <div  className='booking-leftborad-item d-flex justify-content-between align-items-center'>
                                                <a href='#'>
                                                    <span className='pe-1'><LogoutOutlined    /> </span>
                                                    Log Out
                                                </a>

                                            </div>
                                        </li>





                                    </ul>
                                </div>


                            </div>
                        </Col>
                        <Col xs={24} md={18} >
                            <div className='booking-rightsidebar px-3 py-3'>
                                    <div className="p-3 mb-4 rounded-2 shadow booking-history-filter">
                                            <Row gutter={[16, 16]}>
                                                <Col xs={24} md={18}>
                                                    <h3 className='lh-1 h3 m-0 p-0 bookinghistory-filter-title'>
                                                        Booking History</h3>
                                                    <p>All booking information</p>
                                                    <div className='bookinghistory-filter-menu'>
                                                        <a href="#" className='active'>All Booking (6) </a>
                                                        <a href="#">Booked (4) </a>
                                                        <a href="#">Availed (3) </a>
                                                        <a href="#">Cancel (1) </a>
                                                    </div>
                                                </Col>
                                                <Col xs={24} md={6} >
                                                    <Space direction="vertical">
                                                        <Search placeholder="Search" onSearch={onSearch} style={{ "width": "100%" }} />
                                                    </Space>
                                                    <Select
                                                        className='mt-2'
                                                        defaultValue="lucy"
                                                        style={{ "width": "100%" }}
                                                        onChange={handleChange}
                                                        options={[
                                                            { value: 'jack', label: 'Jack' },
                                                            { value: 'lucy', label: 'All Time' },
                                                            { value: 'Yiminghe', label: 'yiminghe' },
                                                            { value: 'disabled', label: 'Disabled', disabled: true },
                                                        ]}
                                                        />
                                                    <Select
                                                        className='mt-2'
                                                        defaultValue="lucy"
                                                        style={{ "width": "100%" }}
                                                        onChange={handleChange}
                                                        options={[
                                                            { value: 'jack', label: 'Jack' },
                                                            { value: 'lucy', label: 'Category' },
                                                            { value: 'Yiminghe', label: 'yiminghe' },
                                                            { value: 'disabled', label: 'Disabled', disabled: true },
                                                        ]}
                                                        />

                                                        <Select
                                                        className='mt-2'
                                                        defaultValue="lucy"
                                                        style={{ "width": "100%" }}
                                                        onChange={handleChange}
                                                        options={[
                                                            { value: 'jack', label: 'Jack' },
                                                            { value: 'lucy', label: 'Organization' },
                                                            { value: 'Yiminghe', label: 'yiminghe' },
                                                            { value: 'disabled', label: 'Disabled', disabled: true },
                                                        ]}
                                                        />




                                                </Col>
                                            </Row>
                                   </div>


                                   {/* start:Booking Package Detail */}
                                   <div className="p-3 mb-2 rounded-2 shadow-sm booking-detail-pkg booked-detail-pkg">
                                        <Row gutter={[16, 16]} className='booking-detail-pkg-top mb-3 pb-2'>
                                            <Col xs={24} md={12}>
                                                <div className='booking-pkg-top-title fw-bold'>
                                                    <BankOutlined /> Booked
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12} className='d-flex justify-content-end' >
                                                <div className='booking-pkg-top-date d-flex flex-column text-end'>
                                                    <div>
                                                        <strong>Booking Date:</strong>
                                                        <span>August 14, 2022 - Sun</span>
                                                    </div>
                                                    <div>
                                                        <strong>Booking :</strong>
                                                        <span>2 Nights - 1 Day </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href='#' className='booking-detail-pkg-link'>
                                                        Booking Details
                                                        <span className='ps-3'><RightOutlined /> </span>
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={5}>
                                                <div className='booking-history-gallery'>
                                                    <img src='https://i.postimg.cc/7LbRQXkp/Rectangle-497.jpg' alt='' />
                                                </div>
                                            </Col>
                                            <Col xs={24} md={14} >
                                                <h5 className="booking-history-title  h5 m-0 p-0">
                                                Beech Tree Cottage </h5>
                                                <div className='d-flex'>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span className='booking-history-reviewtext'>(4,594 reviews)</span>
                                                </div>
                                                <div className='mb-1'>
                                                    <div className='booking-history-text'><EnvironmentOutlined   /> Dhanmondhi, Dhaka </div>
                                                    <div className='booking-history-text'><BankOutlined   /> Bangladesh Council of Scientific and Industrial Research (BCSIR) </div>
                                                    <div className='booking-history-text'><CreditCardOutlined   /> Guest House </div>
                                                </div>
                                                <div className='booking-history-detail mt-3 ps-2 pe-5'>
                                                    <p>Sep 20, 2022 (Monday) Sep 22, 2022 (Wednesday)</p>
                                                    <p>Deluxe Single Room - 1, Deluxe Room - 1 </p>
                                            </div>
                                            </Col>
                                            <Col xs={24} md={5} className='text-end' >
                                                <div className='booking-history-amount text-center'>
                                                    BDT. 4,830.00
                                                </div>
                                                <div className='mt-3'>
                                                    <button type="button" className="change-date-btn">
                                                        Change date
                                                    </button>
                                                </div>

                                                <div className='mt-2'>
                                                    <button type="button" className="change-room-btn">
                                                        Change room
                                                    </button>
                                                </div>

                                                <div className='mt-2'>
                                                    <button type="button" className="cancel-booking-btn">
                                                        Cancel Booking
                                                    </button>
                                                </div>

                                            </Col>
                                        </Row>
                                   </div>
                                    {/* end:Booking Package Detail */}







                                   {/* start:Booking Package Detail */}
                                   <div className="p-3 mb-2 rounded-2 shadow-sm booking-detail-pkg availed-pkg">
                                        <Row gutter={[16, 16]} className='booking-detail-pkg-top mb-3 pb-2'>
                                            <Col xs={24} md={12}>
                                                <div className='booking-pkg-top-title fw-bold'>
                                                    <BankOutlined /> Availed
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12} className='d-flex justify-content-end' >
                                                <div className='booking-pkg-top-date d-flex flex-column text-end'>
                                                    <div>
                                                        <strong>Booking Date:</strong>
                                                        <span>August 14, 2022 - Sun</span>
                                                    </div>
                                                    <div>
                                                        <strong>Booking :</strong>
                                                        <span>2 Nights - 1 Day </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href='#' className='booking-detail-pkg-link'>
                                                        Booking Details
                                                        <span className='ps-3'><RightOutlined /> </span>
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={5}>
                                                <div className='booking-history-gallery'>
                                                    <img src='https://i.postimg.cc/ZnycmyQK/Rectangle-502.jpg' alt='' />
                                                </div>
                                            </Col>
                                            <Col xs={24} md={14} >
                                                <h5 className="booking-history-title  h5 m-0 p-0">
                                                The Royal Horse guards </h5>
                                                <div className='d-flex'>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span className='booking-history-reviewtext'>(4,594 reviews)</span>
                                                </div>
                                                <div className='mb-1'>
                                                    <div className='booking-history-text'><EnvironmentOutlined   /> Dhanmondhi, Dhaka </div>
                                                    <div className='booking-history-text'><BankOutlined   /> Bangladesh Council of Scientific and Industrial Research (BCSIR) </div>
                                                    <div className='booking-history-text'><CreditCardOutlined   /> Guest House </div>
                                                </div>
                                                <div className='booking-history-detail mt-3 ps-2 pe-5'>
                                                    <p>Sep 20, 2022 (Monday) Sep 22, 2022 (Wednesday)</p>
                                                    <p>Deluxe Single Room - 1, Deluxe Room - 1 </p>
                                            </div>
                                            </Col>
                                            <Col xs={24} md={5} className='text-end' >
                                                <div className='booking-history-amount text-center'>
                                                    BDT. 7,830.00
                                                </div>
                                                <div className='mt-3'>
                                                    <button type="button" className="review-btn">
                                                        Review
                                                    </button>
                                                </div>

                                                <div className='mt-2'>
                                                    <button type="button" className="share-btn">
                                                        Share
                                                    </button>
                                                </div>

                                                <div className='mt-2'>
                                                    <button type="button" className="book-again-btn">
                                                        Book again
                                                    </button>
                                                </div>

                                            </Col>
                                        </Row>
                                   </div>
                                    {/* end:Booking Package Detail */}



                                   {/* start:Booking Package Detail */}
                                   <div className="p-3 mb-2 rounded-2 shadow-sm booking-detail-pkg availed-pkg">
                                        <Row gutter={[16, 16]} className='booking-detail-pkg-top mb-3 pb-2'>
                                            <Col xs={24} md={12}>
                                                <div className='booking-pkg-top-title fw-bold'>
                                                    <BankOutlined /> Availed
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12} className='d-flex justify-content-end' >
                                                <div className='booking-pkg-top-date d-flex flex-column text-end'>
                                                    <div>
                                                        <strong>Booking Date:</strong>
                                                        <span>August 14, 2022 - Sun</span>
                                                    </div>
                                                    <div>
                                                        <strong>Booking :</strong>
                                                        <span>2 Nights - 1 Day </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href='#' className='booking-detail-pkg-link'>
                                                        Booking Details
                                                        <span className='ps-3'><RightOutlined /> </span>
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={5}>
                                                <div className='booking-history-gallery'>
                                                    <img src='https://i.postimg.cc/ZnycmyQK/Rectangle-502.jpg' alt='' />
                                                </div>
                                            </Col>
                                            <Col xs={24} md={14} >
                                                <h5 className="booking-history-title  h5 m-0 p-0">
                                                The Royal Horse guards </h5>
                                                <div className='d-flex'>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span className='booking-history-reviewtext'>(4,594 reviews)</span>
                                                </div>
                                                <div className='mb-1'>
                                                    <div className='booking-history-text'><EnvironmentOutlined   /> Dhanmondhi, Dhaka </div>
                                                    <div className='booking-history-text'><BankOutlined   /> Bangladesh Council of Scientific and Industrial Research (BCSIR) </div>
                                                    <div className='booking-history-text'><CreditCardOutlined   /> Guest House </div>
                                                </div>
                                                <div className='booking-history-detail mt-3 ps-2 pe-5'>
                                                    <p>Sep 20, 2022 (Monday) Sep 22, 2022 (Wednesday)</p>
                                                    <p>Deluxe Single Room - 1, Deluxe Room - 1 </p>
                                            </div>
                                            </Col>
                                            <Col xs={24} md={5} className='text-end' >
                                                <div className='booking-history-amount text-center'>
                                                    BDT. 7,830.00
                                                </div>
                                                <div className='mt-3'>
                                                    <button type="button" className="review-btn">
                                                        Review
                                                    </button>
                                                </div>

                                                <div className='mt-2'>
                                                    <button type="button" className="share-btn">
                                                        Share
                                                    </button>
                                                </div>

                                                <div className='mt-2'>
                                                    <button type="button" className="book-again-btn">
                                                        Book again
                                                    </button>
                                                </div>

                                            </Col>
                                        </Row>

                                        <div className='divider-availed'>&nbsp;</div>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={5}>
                                                <div className='booking-history-gallery'>
                                                    <img src='https://i.postimg.cc/ZnycmyQK/Rectangle-502.jpg' alt='' />
                                                </div>
                                            </Col>
                                            <Col xs={24} md={14} >
                                                <h5 className="booking-history-title  h5 m-0 p-0">
                                                The Royal Horse guards </h5>
                                                <div className='d-flex'>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span className='booking-history-reviewtext'>(4,594 reviews)</span>
                                                </div>
                                                <div className='mb-1'>
                                                    <div className='booking-history-text'><EnvironmentOutlined   /> Dhanmondhi, Dhaka </div>
                                                    <div className='booking-history-text'><BankOutlined   /> Bangladesh Council of Scientific and Industrial Research (BCSIR) </div>
                                                    <div className='booking-history-text'><CreditCardOutlined   /> Guest House </div>
                                                </div>
                                                <div className='booking-history-detail mt-3 ps-2 pe-5'>
                                                    <p>Sep 20, 2022 (Monday) Sep 22, 2022 (Wednesday)</p>
                                                    <p>Deluxe Single Room - 1, Deluxe Room - 1 </p>
                                            </div>
                                            </Col>
                                            <Col xs={24} md={5} className='text-end' >
                                                <div className='booking-history-amount text-center'>
                                                    BDT. 7,830.00
                                                </div>
                                                <div className='mt-3'>
                                                    <button type="button" className="review-btn">
                                                        Review
                                                    </button>
                                                </div>

                                                <div className='mt-2'>
                                                    <button type="button" className="share-btn">
                                                        Share
                                                    </button>
                                                </div>

                                                <div className='mt-2'>
                                                    <button type="button" className="book-again-btn">
                                                        Book again
                                                    </button>
                                                </div>

                                            </Col>
                                        </Row>


                                   </div>
                                    {/* end:Booking Package Detail */}




                                   {/* start:Booking Package Detail */}
                                   <div className="p-3 mb-2 rounded-2 shadow-sm booking-detail-pkg canceled-detail-pkg">
                                        <Row gutter={[16, 16]} className='booking-detail-pkg-top mb-3 pb-2'>
                                            <Col xs={24} md={12}>
                                                <div className='booking-pkg-top-title fw-bold'>
                                                    <BankOutlined /> Canceled
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12} className='d-flex justify-content-end' >
                                                <div className='booking-pkg-top-date d-flex flex-column text-end'>
                                                    <div>
                                                        <strong>Booking Date:</strong>
                                                        <span>August 14, 2022 - Sun</span>
                                                    </div>
                                                    <div>
                                                        <strong>Booking :</strong>
                                                        <span>2 Nights - 1 Day </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href='#' className='booking-detail-pkg-link'>
                                                        Booking Details
                                                        <span className='ps-3'><RightOutlined /> </span>
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={5}>
                                                <div className='booking-history-gallery'>
                                                    <img src='https://i.postimg.cc/7LbRQXkp/Rectangle-497.jpg' alt='' />
                                                </div>
                                            </Col>
                                            <Col xs={24} md={14} >
                                                <h5 className="booking-history-title  h5 m-0 p-0">
                                                The Emperor's Villa </h5>
                                                <div className='d-flex'>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span className='booking-history-reviewtext'>(4,594 reviews)</span>
                                                </div>
                                                <div className='mb-1'>
                                                    <div className='booking-history-text'><EnvironmentOutlined   /> Dhanmondhi, Dhaka </div>
                                                    <div className='booking-history-text'><BankOutlined   /> Bangladesh Council of Scientific and Industrial Research (BCSIR) </div>
                                                    <div className='booking-history-text'><CreditCardOutlined   /> Guest House </div>
                                                </div>
                                                <div className='booking-history-detail mt-3 ps-2 pe-5'>
                                                    <p>Sep 20, 2022 (Monday) Sep 22, 2022 (Wednesday)</p>
                                                    <p>Deluxe Single Room - 1, Deluxe Room - 1 </p>
                                            </div>
                                            </Col>
                                            <Col xs={24} md={5} className='text-end' >
                                                <div className='booking-history-amount text-center'>
                                                    BDT. 2,830.00
                                                </div>


                                                <div className='mt-4'>
                                                    <button type="button" className="book-again-btn">
                                                        Book again
                                                    </button>
                                                </div>

                                            </Col>
                                        </Row>
                                   </div>
                                    {/* end:Booking Package Detail */}

                                   {/* start:Booking Package Detail */}
                                   <div className="p-3 mb-2 rounded-2 shadow-sm booking-detail-pkg booked-detail-pkg">
                                        <Row gutter={[16, 16]} className='booking-detail-pkg-top mb-3 pb-2'>
                                            <Col xs={24} md={12}>
                                                <div className='booking-pkg-top-title fw-bold'>
                                                    <BankOutlined /> Booked
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12} className='d-flex justify-content-end' >
                                                <div className='booking-pkg-top-date d-flex flex-column text-end'>
                                                    <div>
                                                        <strong>Booking Date:</strong>
                                                        <span>August 14, 2022 - Sun</span>
                                                    </div>
                                                    <div>
                                                        <strong>Booking :</strong>
                                                        <span>2 Nights - 1 Day </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href='#' className='booking-detail-pkg-link'>
                                                        Booking Details
                                                        <span className='ps-3'><RightOutlined /> </span>
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={5}>
                                                <div className='booking-history-gallery'>
                                                    <img src='https://i.postimg.cc/FsVs9FLh/Rectangle-498.jpg ' alt='' />
                                                </div>
                                            </Col>
                                            <Col xs={24} md={14} >
                                                <h5 className="booking-history-title  h5 m-0 p-0">
                                                The Cottage Motel </h5>
                                                <div className='d-flex'>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span className='booking-history-reviewtext'>(4,594 reviews)</span>
                                                </div>
                                                <div className='mb-1'>
                                                    <div className='booking-history-text'><EnvironmentOutlined   /> Dhanmondhi, Dhaka </div>
                                                    <div className='booking-history-text'><BankOutlined   /> Bangladesh Council of Scientific and Industrial Research (BCSIR) </div>
                                                    <div className='booking-history-text'><CreditCardOutlined   /> Guest House </div>
                                                </div>
                                                <div className='booking-history-detail mt-3 ps-2 pe-5'>
                                                    <p>Sep 20, 2022 (Monday) Sep 22, 2022 (Wednesday)</p>
                                                    <p>Deluxe Single Room - 1, Deluxe Room - 1 </p>
                                            </div>
                                            </Col>
                                            <Col xs={24} md={5} className='text-end' >
                                                <div className='booking-history-amount text-center'>
                                                    BDT. 4,830.00
                                                </div>
                                                <div className='mt-3'>
                                                    <button type="button" className="change-date-btn">
                                                        Change date
                                                    </button>
                                                </div>

                                                <div className='mt-2'>
                                                    <button type="button" className="change-room-btn">
                                                        Change room
                                                    </button>
                                                </div>

                                                <div className='mt-2'>
                                                    <button type="button" className="cancel-booking-btn">
                                                        Cancel Booking
                                                    </button>
                                                </div>

                                            </Col>
                                        </Row>
                                   </div>
                                    {/* end:Booking Package Detail */}


                                   {/* start:Booking Package Detail */}
                                   <div className="p-3 mb-2 rounded-2 shadow-sm booking-detail-pkg booked-detail-pkg">
                                        <Row gutter={[16, 16]} className='booking-detail-pkg-top mb-3 pb-2'>
                                            <Col xs={24} md={12}>
                                                <div className='booking-pkg-top-title fw-bold'>
                                                    <BankOutlined /> Booked
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12} className='d-flex justify-content-end' >
                                                <div className='booking-pkg-top-date d-flex flex-column text-end'>
                                                    <div>
                                                        <strong>Booking Date:</strong>
                                                        <span>August 14, 2022 - Sun</span>
                                                    </div>
                                                    <div>
                                                        <strong>Booking :</strong>
                                                        <span>2 Nights - 1 Day </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href='#' className='booking-detail-pkg-link'>
                                                        Booking Details
                                                        <span className='ps-3'><RightOutlined /> </span>
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={5}>
                                                <div className='booking-history-gallery'>
                                                    <img src='https://i.postimg.cc/FsVs9FLh/Rectangle-498.jpg' alt='' />
                                                </div>
                                            </Col>
                                            <Col xs={24} md={14} >
                                                <h5 className="booking-history-title  h5 m-0 p-0">
                                                Chestnut Tree Inn </h5>
                                                <div className='d-flex'>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span className='booking-history-reviewtext'>(4,594 reviews)</span>
                                                </div>
                                                <div className='mb-1'>
                                                    <div className='booking-history-text'><EnvironmentOutlined   /> Dhanmondhi, Dhaka </div>
                                                    <div className='booking-history-text'><BankOutlined   /> Bangladesh Council of Scientific and Industrial Research (BCSIR) </div>
                                                    <div className='booking-history-text'><CreditCardOutlined   /> Guest House </div>
                                                </div>
                                                <div className='booking-history-detail mt-3 ps-2 pe-5'>
                                                    <p>Sep 20, 2022 (Monday) Sep 22, 2022 (Wednesday)</p>
                                                    <p>Deluxe Single Room - 1, Deluxe Room - 1 </p>
                                            </div>
                                            </Col>
                                            <Col xs={24} md={5} className='text-end' >
                                                <div className='booking-history-amount text-center'>
                                                    BDT. 4,830.00
                                                </div>
                                                <div className='mt-3'>
                                                    <button type="button" className="change-date-btn">
                                                        Change date
                                                    </button>
                                                </div>

                                                <div className='mt-2'>
                                                    <button type="button" className="change-room-btn">
                                                        Change room
                                                    </button>
                                                </div>

                                                <div className='mt-2'>
                                                    <button type="button" className="cancel-booking-btn">
                                                        Cancel Booking
                                                    </button>
                                                </div>

                                            </Col>
                                        </Row>
                                   </div>
                                    {/* end:Booking Package Detail */}



                                   {/* start:Booking Package Detail */}
                                   <div className="p-3 mb-2 rounded-2 shadow-sm booking-detail-pkg availed-pkg">
                                        <Row gutter={[16, 16]} className='booking-detail-pkg-top mb-3 pb-2'>
                                            <Col xs={24} md={12}>
                                                <div className='booking-pkg-top-title fw-bold'>
                                                    <BankOutlined /> Availed
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12} className='d-flex justify-content-end' >
                                                <div className='booking-pkg-top-date d-flex flex-column text-end'>
                                                    <div>
                                                        <strong>Booking Date:</strong>
                                                        <span>August 14, 2022 - Sun</span>
                                                    </div>
                                                    <div>
                                                        <strong>Booking :</strong>
                                                        <span>2 Nights - 1 Day </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href='#' className='booking-detail-pkg-link'>
                                                        Booking Details
                                                        <span className='ps-3'><RightOutlined /> </span>
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={5}>
                                                <div className='booking-history-gallery'>
                                                    <img src='https://i.postimg.cc/ZnycmyQK/Rectangle-502.jpg' alt='' />
                                                </div>
                                            </Col>
                                            <Col xs={24} md={14} >
                                                <h5 className="booking-history-title  h5 m-0 p-0">
                                                The Royal Horse guards </h5>
                                                <div className='d-flex'>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span  className='booking-history-rating pe-1'><StarFilled /></span>
                                                    <span className='booking-history-reviewtext'>(4,594 reviews)</span>
                                                </div>
                                                <div className='mb-1'>
                                                    <div className='booking-history-text'><EnvironmentOutlined   /> Dhanmondhi, Dhaka </div>
                                                    <div className='booking-history-text'><BankOutlined   /> Bangladesh Council of Scientific and Industrial Research (BCSIR) </div>
                                                    <div className='booking-history-text'><CreditCardOutlined   /> Guest House </div>
                                                </div>
                                                <div className='booking-history-detail mt-3 ps-2 pe-5'>
                                                    <p>Sep 20, 2022 (Monday) Sep 22, 2022 (Wednesday)</p>
                                                    <p>Deluxe Single Room - 1, Deluxe Room - 1 </p>
                                            </div>
                                            </Col>
                                            <Col xs={24} md={5} className='text-end' >
                                                <div className='booking-history-amount text-center'>
                                                    BDT. 7,830.00
                                                </div>
                                                <div className='mt-3'>
                                                    <button type="button" className="review-btn">
                                                        Review
                                                    </button>
                                                </div>

                                                <div className='mt-2'>
                                                    <button type="button" className="share-btn">
                                                        Share
                                                    </button>
                                                </div>

                                                <div className='mt-2'>
                                                    <button type="button" className="book-again-btn">
                                                        Book again
                                                    </button>
                                                </div>

                                            </Col>
                                        </Row>
                                   </div>
                                    {/* end:Booking Package Detail */}











                            </div>
                        </Col>
                    </Row>
                </div>
             </div>
        </>
    );
}

export default React.memo(BookingHistoryListing);
