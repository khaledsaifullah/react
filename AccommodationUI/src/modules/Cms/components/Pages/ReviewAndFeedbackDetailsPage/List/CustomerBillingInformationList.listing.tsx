import React, { FC } from 'react'
import { Form, Row, Col, Select, Button, Checkbox,
    Tabs, Input, Space   } from 'antd';
import { useTranslation } from "react-i18next";
import "./CustomerBillingInformationList.style.scss"


import nidicondoc from '../../../../../../assets/images/icon/nid-icon-doc.png';
import mailicondoc from '../../../../../../assets/images/icon/mail-icon-doc.png';
import phoneicondoc from '../../../../../../assets/images/icon/phone-icon-doc.png';


import {AppstoreOutlined , FormOutlined ,
    SlackSquareOutlined, ClockCircleOutlined ,
    HeartOutlined , UserOutlined , KeyOutlined ,
    SettingOutlined, LogoutOutlined, BankOutlined,
    StarFilled, EnvironmentOutlined,CreditCardOutlined,
    RightOutlined, StarOutlined   } from '@ant-design/icons';



const CustomerBillingInformationListing: FC<any> = props => {
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
                                <div className="reviewfeedback-detail-heading rounded-2 px-3 py-2">
                                    <h4 className='h4 m-0 p-0'>Manage Review & Feedback</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                                </div>

                                <div className="reviewfeedback-detail-heading rounded-2 mt-3 mb-3  px-3 py-2 d-flex justify-content-between fw-bold">
                                    <div>Show Details </div>
                                    <div>Review & Feedback Details </div>
                                 </div>

                                {/* start:section */}
                                <div className='review-feedback-detail-content rounded-2 px-3 py-2 mb-3' >
                                    <Row gutter={[16, 16]}>
                                            <Col xs={24} md={12}>
                                                <div className="booking-date-time d-flex flex-column py-2 mb-3">
                                                    <div><strong>Booking Date:</strong><span>Sep 20, 2022 (Monday)- Sep 22, 2022 (Wednesday)</span></div>
                                                    <div className='py-1'><strong>Booking :</strong><span>2 Nights - 1 Day </span></div>
                                                    <div><strong>Total :</strong><span>BDT. 7,830.00 </span></div>
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

                                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col xs={24} md={12}>
                                                <div className='review-feedback-detail-left px-3 mt-3'>
                                                    <div className='fw-bold'>Review & Feedback I left </div>
                                                    <div className='d-flex mb-3'>
                                                        <span  className='pe-2'><StarFilled  /></span>
                                                        <span  className='pe-2'><StarFilled  /></span>
                                                        <span  className='pe-2'><StarFilled  /></span>
                                                        <span  className='pe-2'><StarFilled  /></span>
                                                    </div>
                                                    <div className='fw-bold'>Experience</div>
                                                    <div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor </p>
                                                    </div>

                                                    <div className='reviewfeedback-top-divider mb-3'>&nbsp;</div>

                                                    <div className='reviewfeedback-left-list mb-3'>
                                                        {/* start:item */}
                                                        <div className='reviewfeedback-left-item mb-3'>
                                                            <div className='fw-bold'>Review & Feedback I Received </div>
                                                            <div className='d-flex mb-1'>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                            </div>
                                                            <div className='fw-bold'>Experience</div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor </p>
                                                            </div>
                                                        </div>
                                                        {/* end:item */}


                                                        {/* start:item */}
                                                        <div className='reviewfeedback-left-item mb-3'>
                                                            <div className='fw-bold'>Review & Feedback I Received </div>
                                                            <div className='d-flex mb-1'>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                            </div>
                                                            <div className='fw-bold'>Experience</div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor </p>
                                                            </div>
                                                        </div>
                                                        {/* end:item */}

                                                    </div>
                                                    {/* end */}


                                                </div>
                                            </Col>

                                    </Row>
                                </div>
                                {/* end:section */}




                               {/* start:section */}
                               <div className='review-feedback-detail-content rounded-2 px-3 py-2 mb-3' >
                                    <Row gutter={[16, 16]}>
                                            <Col xs={24} md={12}>
                                                <div className="booking-date-time d-flex flex-column py-2 mb-3">
                                                    <div><strong>Booking Date:</strong><span>Sep 20, 2022 (Monday)- Sep 22, 2022 (Wednesday)</span></div>
                                                    <div className='py-1'><strong>Booking :</strong><span>2 Nights - 1 Day </span></div>
                                                    <div><strong>Total :</strong><span>BDT. 7,830.00 </span></div>
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

                                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col xs={24} md={12}>
                                                <div className='review-feedback-detail-left px-3 mt-3'>
                                                    <div className='fw-bold'>Review & Feedback I left </div>
                                                    <div className='d-flex mb-3'>
                                                        <span  className='pe-2'><StarFilled  /></span>
                                                        <span  className='pe-2'><StarFilled  /></span>
                                                        <span  className='pe-2'><StarFilled  /></span>
                                                        <span  className='pe-2'><StarFilled  /></span>
                                                    </div>
                                                    <div className='fw-bold'>Experience</div>
                                                    <div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor </p>
                                                    </div>

                                                    <div className='reviewfeedback-top-divider mb-3'>&nbsp;</div>

                                                    <div className='reviewfeedback-left-list mb-3'>
                                                        {/* start:item */}
                                                        <div className='reviewfeedback-left-item mb-3'>
                                                            <div className='fw-bold'>Review & Feedback I Received </div>
                                                            <div className='d-flex mb-1'>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                            </div>
                                                            <div className='fw-bold'>Experience</div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor </p>
                                                            </div>
                                                        </div>
                                                        {/* end:item */}


                                                        {/* start:item */}
                                                        <div className='reviewfeedback-left-item mb-3'>
                                                            <div className='fw-bold'>Review & Feedback I Received </div>
                                                            <div className='d-flex mb-1'>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                            </div>
                                                            <div className='fw-bold'>Experience</div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor </p>
                                                            </div>
                                                        </div>
                                                        {/* end:item */}

                                                    </div>
                                                    {/* end */}


                                                </div>
                                            </Col>

                                    </Row>
                                </div>
                                {/* end:section */}



                          {/* start:section */}
                          <div className='review-feedback-detail-content rounded-2 px-3 py-2 mb-3' >
                                    <Row gutter={[16, 16]}>
                                            <Col xs={24} md={12}>
                                                <div className="booking-date-time d-flex flex-column py-2 mb-3">
                                                    <div><strong>Booking Date:</strong><span>Sep 20, 2022 (Monday)- Sep 22, 2022 (Wednesday)</span></div>
                                                    <div className='py-1'><strong>Booking :</strong><span>2 Nights - 1 Day </span></div>
                                                    <div><strong>Total :</strong><span>BDT. 7,830.00 </span></div>
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

                                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col xs={24} md={12}>
                                                <div className='review-feedback-detail-left px-3 mt-3'>
                                                    <div className='fw-bold'>Review & Feedback I left </div>
                                                    <div className='d-flex mb-3'>
                                                        <span  className='pe-2'><StarFilled  /></span>
                                                        <span  className='pe-2'><StarFilled  /></span>
                                                        <span  className='pe-2'><StarFilled  /></span>
                                                        <span  className='pe-2'><StarFilled  /></span>
                                                    </div>
                                                    <div className='fw-bold'>Experience</div>
                                                    <div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor </p>
                                                    </div>

                                                    <div className='reviewfeedback-top-divider mb-3'>&nbsp;</div>

                                                    <div className='reviewfeedback-left-list mb-3'>
                                                        {/* start:item */}
                                                        <div className='reviewfeedback-left-item mb-3'>
                                                            <div className='fw-bold'>Review & Feedback I Received </div>
                                                            <div className='d-flex mb-1'>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                            </div>
                                                            <div className='fw-bold'>Experience</div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor </p>
                                                            </div>
                                                        </div>
                                                        {/* end:item */}


                                                        {/* start:item */}
                                                        <div className='reviewfeedback-left-item mb-3'>
                                                            <div className='fw-bold'>Review & Feedback I Received </div>
                                                            <div className='d-flex mb-1'>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                                <span  className='pe-2'><StarFilled  /></span>
                                                            </div>
                                                            <div className='fw-bold'>Experience</div>
                                                            <div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor </p>
                                                            </div>
                                                        </div>
                                                        {/* end:item */}

                                                    </div>
                                                    {/* end */}


                                                </div>
                                            </Col>

                                    </Row>
                                </div>
                                {/* end:section */}









                            </div>
                        </Col>



                        </Row>




                </div>
            </div>
        </>
    );
}

export default React.memo(CustomerBillingInformationListing);
