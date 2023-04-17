import React, { FC } from 'react'
import { Form, Row, Col, Select, Button, Checkbox,
    Tabs, Input, Space   } from 'antd';
import { useTranslation } from "react-i18next";
import "./ReviewAndFeedbackList.style.scss"





import nidicondoc from '../../../../../../assets/images/icon/nid-icon-doc.png';
import mailicondoc from '../../../../../../assets/images/icon/mail-icon-doc.png';
import phoneicondoc from '../../../../../../assets/images/icon/phone-icon-doc.png';


import {AppstoreOutlined , FormOutlined ,
    SlackSquareOutlined, ClockCircleOutlined ,
    HeartOutlined , UserOutlined , KeyOutlined ,
    SettingOutlined, LogoutOutlined, BankOutlined,
    StarFilled, EnvironmentOutlined,CreditCardOutlined,
    RightOutlined, StarOutlined   } from '@ant-design/icons';



const BookingHistoryListing: FC<any> = props => {
    const { t } = useTranslation();
    const { loading } = props;

    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };


      const { TextArea } = Input;


    return (
        <>
           <div className='booking-review-page'>
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
                                <div className="review-feedback-heading px-3 py-2">
                                    <h4 className='h4 m-0 p-0'>Review & Feedback</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                                </div>

                                <div className='review-feedback-content  px-3 py-2' >
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={17}>
                                                    <div className="booking-date-time d-flex flex-column py-2 mb-3">
                                                        <div><strong>Booking Date:</strong><span>August 14, 2022 - Sun</span></div>
                                                        <div><strong>Booking :</strong><span>2 Nights - 1 Day </span></div>
                                                    </div>
                                                    <Row gutter={[16, 16]}>
                                                            <Col xs={24} md={6}>
                                                                <div className='booking-review-gallery'>
                                                                    <img src='https://i.postimg.cc/7LbRQXkp/Rectangle-497.jpg' alt='' />
                                                                </div>
                                                            </Col>
                                                            <Col xs={24} md={18} >
                                                                <h5 className="booking-review-title h5 m-0 p-0">
                                                                The Royal Horse guards </h5>
                                                                <div className='d-flex'>
                                                                    <span  className='booking-review-rating pe-1'><StarFilled /></span>
                                                                    <span  className='booking-review-rating pe-1'><StarFilled /></span>
                                                                    <span  className='booking-review-rating pe-1'><StarFilled /></span>
                                                                    <span  className='booking-review-rating pe-1'><StarFilled /></span>
                                                                    <span  className='booking-review-rating pe-1'><StarFilled /></span>
                                                                    <span className='booking-review-reviewtext'>(4,594 reviews)</span>
                                                                </div>
                                                                <div className='mb-1'>
                                                                    <div className='booking-review-text'><EnvironmentOutlined   /> Dhanmondhi, Dhaka </div>
                                                                    <div className='booking-review-text'><BankOutlined   /> Bangladesh Council of Scientific and Industrial Research (BCSIR) </div>
                                                                    <div className='booking-review-text'><CreditCardOutlined   /> Guest House </div>
                                                                </div>
                                                                <div className='booking-review-detail mt-2 ps-2 pe-5'>
                                                                    <p>Sep 20, 2022 (Monday) Sep 22, 2022 (Wednesday)</p>
                                                                    <p>Deluxe Single Room - 1, Deluxe Room - 1 </p>
                                                            </div>
                                                            </Col>
                                                       </Row>

                                                    <div className='px-3 pt-3'>EXCELLENT</div>
                                                    <div className='d-flex px-3'>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                   </div>


                                                   <div className='px-3 pt-3'>VERY GOOD   </div>
                                                    <div className='d-flex px-3'>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                   </div>

                                                   <div className='px-3 pt-3'>AVERAGE   </div>
                                                    <div className='d-flex px-3'>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                   </div>



                                                   <div className='px-3 pt-3'>POOR      </div>
                                                    <div className='d-flex px-3'>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                   </div>

                                                   <div className='px-3 pt-3'>BAD      </div>
                                                    <div className='d-flex px-3'>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                        <span  className='pe-1'><StarOutlined  /></span>
                                                   </div>

                                                   <div className='px-3 pt-3'>Share more about your experience   </div>
                                                   <div className='label-block px-3'>
                                                        <Form.Item
                                                            name="remarks"
                                                        >
                                                            <TextArea
                                                                autoSize={{ minRows: 6, maxRows: 15 }}
                                                            />
                                                        </Form.Item>
                                                    </div>
                                                    <div className='mt-4 me-3 mb-5 text-end'>
                                                        <button type="button" className="btn btn-danger booking-review-btn">
                                                        Submit </button>
                                                    </div>

                                            </Col>


                                            <Col xs={24} md={7} >
                                                <div className='booking-review-commentbox mt-3 px-2 py-3'>
                                                        <Row gutter={[16, 16]}>
                                                            <Col xs={24} md={7}>
                                                                <div className='booking-review-gallery'>
                                                                    <img src='https://i.postimg.cc/7LbRQXkp/Rectangle-497.jpg' alt='' />
                                                                </div>
                                                            </Col>
                                                            <Col xs={24} md={17} >
                                                                <h5 className="booking-review-title h5 m-0 p-0">
                                                                The Royal Horse guards </h5>
                                                                <div className='mb-1'>
                                                                    <div className='booking-review-text'><CreditCardOutlined   /> Guest House </div>
                                                                </div>
                                                                <div className='booking-review-detail mt-2 ps-2'>
                                                                    <p>2 Nights - 1 Day </p>
                                                                    <p>Deluxe Single Room - 1 </p>
                                                            </div>
                                                            </Col>
                                                       </Row>
                                                       <div className='pt-5'>Your Overall Rating   </div>
                                                        <div className='d-flex'>
                                                            <span  className='pe-1'><StarOutlined  /></span>
                                                            <span  className='pe-1'><StarOutlined  /></span>
                                                            <span  className='pe-1'><StarOutlined  /></span>
                                                            <span  className='pe-1'><StarOutlined  /></span>
                                                    </div>
                                                    <div className='pt-3'>Your experience   </div>
                                                   <div className='label-block'>
                                                        <Form.Item
                                                            name="remarks"
                                                        >
                                                            <TextArea
                                                                autoSize={{ minRows: 6, maxRows: 15 }}
                                                            />
                                                        </Form.Item>
                                                    </div>


                                                </div>


                                            </Col>
                                        </Row>
                                </div>


                            </div>
                        </Col>



                        </Row>




                </div>
            </div>
        </>
    );
}

export default React.memo(BookingHistoryListing);
