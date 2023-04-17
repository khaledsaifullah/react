import React, { FC } from 'react'
import { Form, Row, Col, Select, Button, Checkbox,
    Tabs, Input, Space, Table   } from 'antd';
import { useTranslation } from "react-i18next";
import "./CustomerBillingInformationList.style.scss"



import {AppstoreOutlined , FormOutlined ,
    SlackSquareOutlined, ClockCircleOutlined ,
    HeartOutlined , UserOutlined , KeyOutlined ,
    SettingOutlined, LogoutOutlined, BankOutlined,
    StarFilled, EnvironmentOutlined,CreditCardOutlined,
    RightOutlined, StarOutlined, PaperClipOutlined,
    DownOutlined    } from '@ant-design/icons';

    import nidicondoc from '../../../../../../assets/images/icon/nid-icon-doc.png';
    import mailicondoc from '../../../../../../assets/images/icon/mail-icon-doc.png';
    import phoneicondoc from '../../../../../../assets/images/icon/phone-icon-doc.png';




const CustomerBillingInformationListing: FC<any> = props => {
    const { t } = useTranslation();
    const { loading } = props;

    const handleChange_1 = (value: string) => {
        console.log(`selected ${value}`);
      };

      const columns = [
        {
          title: [<div className='fw-bold'>Date</div>],
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: [<div className='fw-bold'>Organization</div>],
          dataIndex: 'organization',
          key: 'organization',
        },
        {
          title: [<div className='fw-bold'>Category</div>],
          dataIndex: 'category',
          key: 'category',
        },
        {
            title: [<div className='fw-bold'>Stay</div>],
            dataIndex: 'stay',
            key: 'stay',
        },
        {
            title: [<div className='fw-bold'>Status</div>],
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: [<div className='fw-bold'>Invoice</div>],
            dataIndex: 'invoice',
            key: 'invoice',
        },
        {
            title: [<div className='fw-bold'>&nbsp;</div>],
            dataIndex: 'action',
            key: 'action',
        },

    ];

     const dataSource = [
        {
            key: '1',
            date: '20/08/2022',
            organization: 'Bangladesh Council of Scientific and Industrial Research (BCSIR)',
            category: [<div className='guest-house-field'>Guest House</div>],
            stay: [<div className='stay-field'>2 Nights 1 Day</div>],
            status: [<div className='status-paid fw-bold'>Paid</div>],
            invoice: [<div className='text-center'><a href="javascript:void(0)" className='invoice-link'>
                <PaperClipOutlined   /></a></div>],
            action: [<a className='pay-now fw-bold' href='javascript:void(0)'>&nbsp;
                <span className='text-black'><DownOutlined    /></span> </a>],
          },

        {
            key: '2',
            date: '20/08/2022',
            organization: 'Bangladesh Council of Scientific and Industrial Research (BCSIR)',
            category: [<div className='guest-house-field'>Guest House</div>],
            stay: [<div className='stay-field'>2 Nights 1 Day</div>],
            status: [<div className='status-pending fw-bold'>Pending</div>],
            invoice: [<div className='text-center'><a href="javascript:void(0)" className='invoice-link'>
                <PaperClipOutlined   /></a></div>],
            action: [<a className='pay-now fw-bold' href='javascript:void(0)'>
                Pay Now <span className='text-black'><DownOutlined    /></span> </a>],
          },
        {
            key: '3',
            date: '20/08/2022',
            organization: 'Bangladesh Council of Scientific and Industrial Research (BCSIR)',
            category: [<div className='guest-house-field'>Guest House</div>],
            stay: [<div className='stay-field'>2 Nights 1 Day</div>],
            status: [<div className='status-paid fw-bold'>Paid</div>],
            invoice: [<div className='text-center'><a href="javascript:void(0)" className='invoice-link'>
                <PaperClipOutlined   /></a></div>],
            action: [<a className='pay-now fw-bold' href='javascript:void(0)'>
                &nbsp; <span className='text-black'><DownOutlined    /></span> </a>],
          },

          {
            key: '4',
            date: '20/08/2022',
            organization: 'Bangladesh Council of Scientific and Industrial Research (BCSIR)',
            category: [<div className='guest-house-field'>Guest House</div>],
            stay: [<div className='stay-field'>2 Nights 1 Day</div>],
            status: [<div className='status-pending fw-bold'>Pending</div>],
            invoice: [<div className='text-center'><a href="javascript:void(0)" className='invoice-link'>
                <PaperClipOutlined   /></a></div>],
            action: [<a className='pay-now fw-bold' href='javascript:void(0)'>
                Pay Now <span className='text-black'><DownOutlined    /></span> </a>],
          },

          {
            key: '5',
            date: '20/08/2022',
            organization: 'Bangladesh Council of Scientific and Industrial Research (BCSIR)',
            category: [<div className='guest-house-field'>Guest House</div>],
            stay: [<div className='stay-field'>2 Nights 1 Day</div>],
            status: [<div className='status-paid fw-bold'>Paid</div>],
            invoice: [<div className='text-center'><a href="javascript:void(0)" className='invoice-link'>
                <PaperClipOutlined   /></a></div>],
            action: [<a className='pay-now fw-bold' href='javascript:void(0)'>
               &nbsp; <span className='text-black'><DownOutlined    /></span> </a>],
          },

          {
            key: '6',
            date: '20/08/2022',
            organization: 'Bangladesh Council of Scientific and Industrial Research (BCSIR)',
            category: [<div className='guest-house-field'>Guest House</div>],
            stay: [<div className='stay-field'>2 Nights 1 Day</div>],
            status: [<div className='status-paid fw-bold'>Paid</div>],
            invoice: [<div className='text-center'><a href="javascript:void(0)" className='invoice-link'>
                <PaperClipOutlined   /></a></div>],
            action: [<a className='pay-now fw-bold' href='javascript:void(0)'>
                &nbsp; <span className='text-black'><DownOutlined    /></span> </a>],
          },
          {
            key: '7',
            date: '20/08/2022',
            organization: 'Bangladesh Council of Scientific and Industrial Research (BCSIR)',
            category: [<div className='guest-house-field'>Guest House</div>],
            stay: [<div className='stay-field'>2 Nights 1 Day</div>],
            status: [<div className='status-paid fw-bold'>Paid</div>],
            invoice: [<div className='text-center'><a href="javascript:void(0)" className='invoice-link'>
                <PaperClipOutlined   /></a></div>],
            action: [<a className='pay-now fw-bold' href='javascript:void(0)'>
                  &nbsp;<span className='text-black'><DownOutlined    /></span> </a>],
          },





      ]






    return (
        <>
         <div className='payment-history-page'>
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
                         <div className='payment-rightsidebar px-3 py-3'>
                            <h2 className='h2 m-0 p-0  lh-2'>Payment History</h2>
                            <h5 className='h5 m-0 p-0 mb-3'>Total (7)</h5>
                            {/* start:filter */}
                            <div className='d-md-flex justify-content-between mb-2 payment-history-filter'>
                                    <div className='me-3'>
                                        <Select
                                            defaultValue="lucy"
                                            style={{ "width": "100%" }}
                                            onChange={handleChange_1}
                                            options={[
                                                {
                                                value: 'jack',
                                                label: 'Jack',
                                                },
                                                {
                                                value: 'lucy',
                                                label: 'All Time',
                                                },
                                                {
                                                value: 'disabled',
                                                disabled: true,
                                                label: 'Disabled',
                                                },
                                                {
                                                value: 'Yiminghe',
                                                label: 'yiminghe',
                                                },
                                            ]}
                                            />
                                    </div>
                                    <div className='me-3'>
                                        <Select
                                            defaultValue="lucy"
                                            style={{ "width": "100%" }}
                                            onChange={handleChange_1}
                                            options={[
                                                {
                                                value: 'jack',
                                                label: 'Jack',
                                                },
                                                {
                                                value: 'lucy',
                                                label: 'Organization',
                                                },
                                                {
                                                value: 'disabled',
                                                disabled: true,
                                                label: 'Disabled',
                                                },
                                                {
                                                value: 'Yiminghe',
                                                label: 'yiminghe',
                                                },
                                            ]}
                                            />
                                    </div>

                                    <div className='me-3'>
                                        <Select
                                            defaultValue="lucy"
                                            style={{ "width": "100%" }}
                                            onChange={handleChange_1}
                                            options={[
                                                {
                                                value: 'jack',
                                                label: 'Jack',
                                                },
                                                {
                                                value: 'lucy',
                                                label: 'Category',
                                                },
                                                {
                                                value: 'disabled',
                                                disabled: true,
                                                label: 'Disabled',
                                                },
                                                {
                                                value: 'Yiminghe',
                                                label: 'yiminghe',
                                                },
                                            ]}
                                            />
                                    </div>

                                    <div className='me-3'>
                                        <Select
                                            defaultValue="lucy"
                                            style={{ "width": "100%" }}
                                            onChange={handleChange_1}
                                            options={[
                                                {
                                                value: 'jack',
                                                label: 'Jack',
                                                },
                                                {
                                                value: 'lucy',
                                                label: 'Status',
                                                },
                                                {
                                                value: 'disabled',
                                                disabled: true,
                                                label: 'Disabled',
                                                },
                                                {
                                                value: 'Yiminghe',
                                                label: 'yiminghe',
                                                },
                                            ]}
                                            />
                                    </div>
                                <div className='text-end'>
                                    <button className='pyment-clearfilter-btn btn text-white rounded-2 p-0 px-2 py-1 lh-1'>
                                        Clear Filter</button>
                                </div>

                            </div>
                            {/* end:filter */}

                            <div className='payment-history-datatable'>
                                <Table
                                dataSource={dataSource}
                                columns={columns}
                                bordered
                                />
                            </div>



                         </div>
                    </Col>
                </Row>

            </div>
         </div>
        </>
    );
}

export default React.memo(CustomerBillingInformationListing);



