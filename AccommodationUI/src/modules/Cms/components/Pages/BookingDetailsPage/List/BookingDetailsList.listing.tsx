import React, { FC } from 'react'
import { Form, Row, Col, Select, Button, Checkbox,
    Tabs, Input, Space   } from 'antd';
    import { useTranslation } from "react-i18next";

    import nidicondoc from '../../../../../../assets/images/icon/nid-icon-doc.png';
    import mailicondoc from '../../../../../../assets/images/icon/mail-icon-doc.png';
    import phoneicondoc from '../../../../../../assets/images/icon/phone-icon-doc.png';




    import {AppstoreOutlined , FormOutlined ,
        SlackSquareOutlined, ClockCircleOutlined ,
        HeartOutlined , UserOutlined , KeyOutlined ,
        SettingOutlined, LogoutOutlined, BankOutlined,
        StarFilled, EnvironmentOutlined,CreditCardOutlined,
        RightOutlined, StarOutlined, PhoneOutlined,MailOutlined,
        TeamOutlined, WifiOutlined, CarOutlined,
        DesktopOutlined        } from '@ant-design/icons';



const BookingDetailsListing: FC<any> = props => {
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
          <div className='booking-confirmation-detail-page'>
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
                                        <div className='d-md-flex justify-content-between'>
                                                <div>
                                                    <h6 className='h2 m-0 p-0 lh-2 text-center mb-4'>
                                                    Your booking details</h6>
                                                </div>
                                                <div>
                                                    <button className='print-booking-btn lh-2 btn p-0 px-4 py-1 ms-3'>
                                                    Print Booking</button>
                                                    <button className='print-booking-btn  lh-2 btn p-0 px-4 py-1 ms-3'>
                                                    Print Money Receipt</button>
                                                </div>
                                        </div>

                                            {/* start:  */}
                                            <div className="p-3 mb-3 bg-white rounded-2 shadow-sm border border-1 auditorium-package-box">
                                            <Row gutter={[16, 16]}>
                                                <Col xs={24} md={7}>
                                                    <div className='booking-gallery'>
                                                        <img src='https://i.postimg.cc/vmZV82KY/gallery.jpg' alt='' />
                                                    </div>
                                                </Col>
                                                <Col xs={24} md={17} >
                                                    <h5 className="booking-package-title  h5 m-0 p-0 mb-2">Beech Tree Cottage </h5>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <span  className='booking-package-rating pe-1'><StarFilled /></span>
                                                            <span  className='booking-package-rating pe-1'><StarFilled /></span>
                                                            <span  className='booking-package-rating pe-1'><StarFilled /></span>
                                                            <span  className='booking-package-rating pe-1'><StarFilled /></span>
                                                            <span  className='booking-package-rating pe-1'><StarFilled /></span>
                                                        </div>
                                                        <div>(4,594 reviews)</div>
                                                    </div>
                                                    <div className='mt-2 mb-1'>
                                                        <div className='auditorium-package-text'><EnvironmentOutlined   /> BCSIR Residential Area, Dhanmondi, Dhaka-1200, Bangladesh </div>
                                                        <div className='auditorium-package-text'><BankOutlined   /> Bangladesh Council of Scientific and Industrial Research (BCSIR) </div>
                                                    </div>
                                                    <div className='mt-3 ps-3 pe-5 free-print-helpline'>
                                                        <h6 className='h6 m-0 p-0 lh-1 mb-1'>FREE 24/7 CUSTOMER SERVICE</h6>
                                                        <div>
                                                            <span className='pe-2'><PhoneOutlined    /></span>
                                                            Phone: <a href='tel:09638-200100'>09638-200100</a>
                                                        </div>
                                                        <div>
                                                            <span className='pe-2'><MailOutlined     /></span>
                                                            Email:<a href='mailto:someone@example.com'>someone@example.com</a>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        {/* end:  */}


                                {/* start:  */}
                                <div className="p-3 mb-3 bg-white rounded-2 shadow-sm border border-1">
                                    <p>Your visiting Purpose</p>
                                    <div className='tickmark-print-icon'>
                                    Official
                                    </div>
                                    <Row gutter={[16, 16]} className='mt-2'>
                                        <Col xs={24} md={6}>
                                            <div className='fw-bold'>Full Name</div>
                                            <div>Md. Belayet Hossain</div>
                                        </Col>
                                        <Col xs={24} md={6} >
                                            <div className='fw-bold'>Mobile</div>
                                            <div><a href='tel:01752549121'>01752549121</a></div>
                                        </Col>
                                        <Col xs={24} md={6}>
                                            <div className='fw-bold'>Designation</div>
                                            <div>PA to Secretary</div>
                                        </Col>
                                        <Col xs={24} md={6}>
                                            <div className='fw-bold'>Division/Branch</div>
                                            <div>BCSIR </div>
                                        </Col>
                                    </Row>
                                    <div className='mt-3 fw-bold'>Travelling Reason</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et neque dis a, rhoncus, augue bibendum leo sed augue. Lobortis ante dolor tristique eu turpis donec rutrum. Porta odio amet arcu aliquet semper molestie cursus. Risus nulla tempus nam lorem accumsan at nisi tortor. Risus nulla tempus nam lorem accumsan at nisi tortor.</p>
                                    <div className='mt-2 mb-2 fw-bold'>Other guests details</div>
                                    <ol className='test m-0 p-0 ms-3'>
                                        <li>Dr. Engr. Md. Abul Kashem  - 0171234562</li>
                                        <li>Dr. Most. Hosney Ara Begum  - 0171234562</li>
                                        <li>Dr. Md. Hossain Sohrab  - 0171234562</li>
                                        <li>Dr. Mohammad Moniruzzaman  - 0171234562</li>
                                    </ol>
                            </div>
                            {/* end:  */}



                            {/* start:  */}
                            <div className="p-3 mb-3 bg-white rounded-2 shadow-sm border border-1">
                                <h6 className='h6 m-0 p-0 lh-1 mb-2'>
                                Deluxe Twin Room</h6>
                                <div className='d-flex'>
                                    <span className='pe-2'><MailOutlined     /></span>
                                    Room size: 20 m²/215 ft²
                                </div>
                                <div className='d-flex'>
                                    <span className='pe-2'><CarOutlined      /></span>
                                    2 queen bed
                                </div>
                                <div className='d-flex'>
                                    <span className='pe-2'><TeamOutlined     /></span>
                                    Sleeps - 1
                                </div>

                                <div className='room-print-type ps-2 mt-3 mb-3'>
                                    <p>Free breakfast for 1</p>
                                    <p>Free cancellation & No prepayment needed</p>
                                    <p>Pay at the Checkout Time</p>
                                    <p>Daily housekeeping</p>
                                </div>

                                <div className='room-print-category d-flex fw-bold'>
                                    <div className='me-4'>
                                        <span className='pe-2'><TeamOutlined     /></span>
                                        Room service
                                    </div>
                                    <div className='me-4'>
                                        <span className='pe-2'><WifiOutlined      /></span>
                                        Free Wifi
                                    </div>
                                    <div className='me-4'>
                                        <span className='pe-2'><DesktopOutlined      /></span>
                                        Flat-screen TV
                                    </div>
                                    <div className='me-4'>
                                        <span className='pe-2'><TeamOutlined     /></span>
                                        Air condition
                                    </div>
                                    <div className='me-4'>
                                        <span className='pe-2'><TeamOutlined     /></span>
                                        Balcony
                                    </div>
                                </div>

                            </div>
                            {/* end:  */}




                       {/* start:  */}
                       <div className="p-3 mb-3 bg-white rounded-2 shadow-sm border border-1">
                                <Row gutter={[16, 16]}>
                                        <Col xs={24} md={16}>
                                            <div className='checkin-checkout-leftprint-block pe-5'>
                                                <div className='lh-1'>
                                                    <strong>Check-in: </strong>
                                                    Mon, Sep 20, 2022 - From 12:00 PM
                                                </div>
                                                <div className='lh-1 mt-1 mb-1'>
                                                    <strong>Check-out: </strong>
                                                    Wed, Sep 22, 2022 - From 11:00 AM
                                                </div>
                                                <div className='checkin-checkout-duration mb-3'>
                                                    2 Nights - 1 day</div>

                                                <div className='lh-1 mb-3'>
                                                    <p className='m-0 p-0 lh-1 mb-1'><strong>Room Selection</strong></p>
                                                    <p className='m-0 p-0 lh-1 mb-1'>Deluxe Twin Room - 1</p>
                                                </div>
                                                <div className='lh-1 mb-3'>
                                                    <strong>Main guest details</strong>
                                                </div>
                                                <div className='d-md-flex justify-content-between'>
                                                    <div className='me-2'>
                                                        <p className='m-0 p-0 lh-1 mb-1'><strong>Full Name</strong></p>
                                                        <p className='m-0 p-0 lh-1'>Md. Belayet Hossain</p>
                                                    </div>
                                                    <div className='me-2'>
                                                        <p className='m-0 p-0 lh-1 mb-1'><strong>Mobile</strong></p>
                                                        <p className='m-0 p-0 lh-1'><a href="tel:01752549121">01752549121</a></p>
                                                    </div>
                                                    <div className='me-2'>
                                                        <p className='m-0 p-0 lh-1 mb-1'><strong>Email</strong></p>
                                                        <p className='m-0 p-0 lh-1'>
                                                            <a href="mailto:belayet@example.com">belayet@example.com</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                       <Col xs={24} md={8} >
                                                <div className='d-md-flex justify-content-between fw-bold'>
                                                    <div>Price <span className="checkin-checkout-duration fw-normal mb-3 ps-2">(2 Nights - 1 day)</span></div>
                                                    <div>BDT. 4,200.00</div>
                                                </div>
                                                <div className='d-md-flex justify-content-between fw-bold'>
                                                    <div>VAT</div>
                                                    <div>BDT. 630.00</div>
                                                </div>
                                                <div className='d-md-flex justify-content-between fw-bold'>
                                                    <div>Other Charge</div>
                                                    <div>BDT. 00.00</div>
                                                </div>
                                                <div className='mt-2 d-md-flex justify-content-between fw-bold border border-1 border-start-0  border-end-0  border-bottom-0'>
                                                    <div>Grand Total</div>
                                                    <div>BDT. 4,830.00</div>
                                                </div>


                                        </Col>
                                    </Row>
                           </div>
                           {/* end:  */}




                            {/* start:  */}
                            <div className="p-3 mb-3 bg-white rounded-2 shadow-sm border border-1">
                                     <div className='fw-bold'>Additional Info</div>
                                     <ol className='test m-0 p-0 ms-3'>
                                        <li>Note that additional supplements (e.g. an extra bed) aren't added in this total. </li>
                                        <li>If you cancel, applicable taxes may still be charged by the property.</li>
                                        <li>If you don’t show up for this booking, and you don’t cancel beforehand, the property is liable to charge you the full reservation amount.</li>
                                        <li>Remember to read the Important info below – it could contain important details not mentioned here</li>
                                        <li><strong>Beech Tree Cottage</strong> handles all payments.</li>
                                        <li>This property accepts the following forms of payment: No credit cards accepted, only cash.</li>
                                    </ol>
                            </div>
                            {/* end:  */}




                                </div>
                        </Col>




                        </Row>
                </div>
            </div>
        </>
    );
}

export default React.memo(BookingDetailsListing);
