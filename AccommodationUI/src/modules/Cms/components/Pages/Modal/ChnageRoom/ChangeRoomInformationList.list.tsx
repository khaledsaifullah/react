import React, { FC } from "react";
import {
    Form,
    Input,
    Row,
    Col,
    Select,
    Button,
    Radio,
    DatePicker,
    Spin,
    InputNumber,
} from "antd";

import {
    AppstoreOutlined, FormOutlined,
    SlackSquareOutlined, ClockCircleOutlined,
    HeartOutlined, UserOutlined, KeyOutlined,
    SettingOutlined, LogoutOutlined, BankOutlined,
    StarFilled, EnvironmentOutlined, CreditCardOutlined,
    RightOutlined
} from '@ant-design/icons';


const ChangeRoomInformationList: FC<any> = (props) => {
    const { itemData } = props;
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };


    return (
        <div className='popup-changeroom-booking'>
            {itemData.id}
            <div className='popup-changeroom-body'>
                <div className='popup-changeroom-content pe-2'>
                    <div className='border border-1 px-2 py-2 rounded-2 mb-3'>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={6}>
                                <div className='popup-booking-picture'>
                                    <img src='https://i.postimg.cc/ZnycmyQK/Rectangle-502.jpg' alt='' className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={24} md={12} >
                                <h5 className="booking-history-title  h5 m-0 p-0 mb-2">
                                    Deluxe Room </h5>

                                <div className='mb-1'>
                                    <div className='booking-history-text'><EnvironmentOutlined /> Room size: 20 m²/215 ft² </div>
                                    <div className='booking-history-text'><BankOutlined /> 1 king bed </div>
                                    <div className='booking-history-text'><CreditCardOutlined /> Sleeps - 2 </div>
                                </div>
                                <div className='booking-history-detail bodercolorgray mt-2 ps-2 pe-5'>
                                    <p>Free breakfast for 2</p>
                                    <p>Free cancellation & No prepayment
                                        needed </p>
                                </div>
                            </Col>
                            <Col xs={24} md={6} className='text-end' >
                                <div className="select-field-popup">
                                    <Select
                                        className="rounded-2"
                                        defaultValue="lucy"
                                        style={{ width: '100%' }}
                                        onChange={handleChange}
                                        options={[
                                            { value: 'jack', label: '2 Room' },
                                            { value: 'lucy', label: '1 Room' },
                                            { value: 'Yiminghe', label: '3 Room' },
                                        ]}
                                    />
                                </div>
                                <div className="text-end text-danger  lh-1 mb-2 mt-2">Only 5 rooms left</div>
                                <div className='booking-history-amount-popup text-end  lh-1 mb-1'>
                                    BDT. 3,500.00
                                </div>
                                <div className="text-end text-danger lh-1"> + taxes and charges</div>
                                <div className='mt-3'>
                                    <button type="button" className="select-btn-popup">
                                        Select
                                    </button>
                                </div>





                            </Col>
                        </Row>
                    </div>
                    <div className='border border-1 px-2 py-2 rounded-2 mb-3'>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={6}>
                                <div className='popup-booking-picture'>
                                    <img src='https://i.postimg.cc/ZnycmyQK/Rectangle-502.jpg' alt='' className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={24} md={12} >
                                <h5 className="booking-history-title  h5 m-0 p-0 mb-2">
                                    Deluxe Room </h5>

                                <div className='mb-1'>
                                    <div className='booking-history-text'><EnvironmentOutlined /> Room size: 20 m²/215 ft² </div>
                                    <div className='booking-history-text'><BankOutlined /> 1 king bed </div>
                                    <div className='booking-history-text'><CreditCardOutlined /> Sleeps - 2 </div>
                                </div>
                                <div className='booking-history-detail bodercolorgray mt-2 ps-2 pe-5'>
                                    <p>Free breakfast for 2</p>
                                    <p>Free cancellation & No prepayment
                                        needed </p>
                                </div>
                            </Col>
                            <Col xs={24} md={6} className='text-end' >
                                <div className="select-field-popup">
                                    <Select
                                        className="rounded-2"
                                        defaultValue="lucy"
                                        style={{ width: '100%' }}
                                        onChange={handleChange}
                                        options={[
                                            { value: 'jack', label: '2 Room' },
                                            { value: 'lucy', label: '1 Room' },
                                            { value: 'Yiminghe', label: '3 Room' },
                                        ]}
                                    />
                                </div>
                                <div className="text-end text-danger  lh-1 mb-2 mt-2">Only 5 rooms left</div>
                                <div className='booking-history-amount-popup text-end  lh-1 mb-1'>
                                    BDT. 3,500.00
                                </div>
                                <div className="text-end text-danger lh-1"> + taxes and charges</div>
                                <div className='mt-3'>
                                    <button type="button" className="select-btn-popup">
                                        Select
                                    </button>
                                </div>





                            </Col>
                        </Row>
                    </div>
                    <div className='border border-1 px-2 py-2 rounded-2 mb-3'>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={6}>
                                <div className='popup-booking-picture'>
                                    <img src='https://i.postimg.cc/ZnycmyQK/Rectangle-502.jpg' alt='' className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={24} md={12} >
                                <h5 className="booking-history-title  h5 m-0 p-0 mb-2">
                                    Deluxe Room </h5>

                                <div className='mb-1'>
                                    <div className='booking-history-text'><EnvironmentOutlined /> Room size: 20 m²/215 ft² </div>
                                    <div className='booking-history-text'><BankOutlined /> 1 king bed </div>
                                    <div className='booking-history-text'><CreditCardOutlined /> Sleeps - 2 </div>
                                </div>
                                <div className='booking-history-detail bodercolorgray mt-2 ps-2 pe-5'>
                                    <p>Free breakfast for 2</p>
                                    <p>Free cancellation & No prepayment
                                        needed </p>
                                </div>
                            </Col>
                            <Col xs={24} md={6} className='text-end' >
                                <div className="select-field-popup">
                                    <Select
                                        className="rounded-2"
                                        defaultValue="lucy"
                                        style={{ width: '100%' }}
                                        onChange={handleChange}
                                        options={[
                                            { value: 'jack', label: '2 Room' },
                                            { value: 'lucy', label: '1 Room' },
                                            { value: 'Yiminghe', label: '3 Room' },
                                        ]}
                                    />
                                </div>
                                <div className="text-end text-danger  lh-1 mb-2 mt-2">Only 5 rooms left</div>
                                <div className='booking-history-amount-popup text-end  lh-1 mb-1'>
                                    BDT. 3,500.00
                                </div>
                                <div className="text-end text-danger lh-1"> + taxes and charges</div>
                                <div className='mt-3'>
                                    <button type="button" className="select-btn-popup">
                                        Select
                                    </button>
                                </div>





                            </Col>
                        </Row>
                    </div>
                    <div className='border border-1 px-2 py-2 rounded-2 mb-3'>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={6}>
                                <div className='popup-booking-picture'>
                                    <img src='https://i.postimg.cc/ZnycmyQK/Rectangle-502.jpg' alt='' className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={24} md={12} >
                                <h5 className="booking-history-title  h5 m-0 p-0 mb-2">
                                    Deluxe Room </h5>

                                <div className='mb-1'>
                                    <div className='booking-history-text'><EnvironmentOutlined /> Room size: 20 m²/215 ft² </div>
                                    <div className='booking-history-text'><BankOutlined /> 1 king bed </div>
                                    <div className='booking-history-text'><CreditCardOutlined /> Sleeps - 2 </div>
                                </div>
                                <div className='booking-history-detail bodercolorgray mt-2 ps-2 pe-5'>
                                    <p>Free breakfast for 2</p>
                                    <p>Free cancellation & No prepayment
                                        needed </p>
                                </div>
                            </Col>
                            <Col xs={24} md={6} className='text-end' >
                                <div className="select-field-popup">
                                    <Select
                                        className="rounded-2"
                                        defaultValue="lucy"
                                        style={{ width: '100%' }}
                                        onChange={handleChange}
                                        options={[
                                            { value: 'jack', label: '2 Room' },
                                            { value: 'lucy', label: '1 Room' },
                                            { value: 'Yiminghe', label: '3 Room' },
                                        ]}
                                    />
                                </div>
                                <div className="text-end text-danger  lh-1 mb-2 mt-2">Only 5 rooms left</div>
                                <div className='booking-history-amount-popup text-end  lh-1 mb-1'>
                                    BDT. 3,500.00
                                </div>
                                <div className="text-end text-danger lh-1"> + taxes and charges</div>
                                <div className='mt-3'>
                                    <button type="button" className="select-btn-popup">
                                        Select
                                    </button>
                                </div>





                            </Col>
                        </Row>
                    </div>
                    <div className='border border-1 px-2 py-2 rounded-2 mb-3'>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={6}>
                                <div className='popup-booking-picture'>
                                    <img src='https://i.postimg.cc/ZnycmyQK/Rectangle-502.jpg' alt='' className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={24} md={12} >
                                <h5 className="booking-history-title  h5 m-0 p-0 mb-2">
                                    Deluxe Room </h5>

                                <div className='mb-1'>
                                    <div className='booking-history-text'><EnvironmentOutlined /> Room size: 20 m²/215 ft² </div>
                                    <div className='booking-history-text'><BankOutlined /> 1 king bed </div>
                                    <div className='booking-history-text'><CreditCardOutlined /> Sleeps - 2 </div>
                                </div>
                                <div className='booking-history-detail bodercolorgray mt-2 ps-2 pe-5'>
                                    <p>Free breakfast for 2</p>
                                    <p>Free cancellation & No prepayment
                                        needed </p>
                                </div>
                            </Col>
                            <Col xs={24} md={6} className='text-end' >
                                <div className="select-field-popup">
                                    <Select
                                        className="rounded-2"
                                        defaultValue="lucy"
                                        style={{ width: '100%' }}
                                        onChange={handleChange}
                                        options={[
                                            { value: 'jack', label: '2 Room' },
                                            { value: 'lucy', label: '1 Room' },
                                            { value: 'Yiminghe', label: '3 Room' },
                                        ]}
                                    />
                                </div>
                                <div className="text-end text-danger  lh-1 mb-2 mt-2">Only 5 rooms left</div>
                                <div className='booking-history-amount-popup text-end  lh-1 mb-1'>
                                    BDT. 3,500.00
                                </div>
                                <div className="text-end text-danger lh-1"> + taxes and charges</div>
                                <div className='mt-3'>
                                    <button type="button" className="select-btn-popup">
                                        Select
                                    </button>
                                </div>





                            </Col>
                        </Row>
                    </div>

                    <div className='border border-1 px-2 py-2 rounded-2 mb-3'>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={6}>
                                <div className='popup-booking-picture'>
                                    <img src='https://i.postimg.cc/ZnycmyQK/Rectangle-502.jpg' alt='' className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={24} md={12} >
                                <h5 className="booking-history-title  h5 m-0 p-0 mb-2">
                                    Deluxe Room </h5>

                                <div className='mb-1'>
                                    <div className='booking-history-text'><EnvironmentOutlined /> Room size: 20 m²/215 ft² </div>
                                    <div className='booking-history-text'><BankOutlined /> 1 king bed </div>
                                    <div className='booking-history-text'><CreditCardOutlined /> Sleeps - 2 </div>
                                </div>
                                <div className='booking-history-detail bodercolorgray mt-2 ps-2 pe-5'>
                                    <p>Free breakfast for 2</p>
                                    <p>Free cancellation & No prepayment
                                        needed </p>
                                </div>
                            </Col>
                            <Col xs={24} md={6} className='text-end' >
                                <div className="select-field-popup">
                                    <Select
                                        className="rounded-2"
                                        defaultValue="lucy"
                                        style={{ width: '100%' }}
                                        onChange={handleChange}
                                        options={[
                                            { value: 'jack', label: '2 Room' },
                                            { value: 'lucy', label: '1 Room' },
                                            { value: 'Yiminghe', label: '3 Room' },
                                        ]}
                                    />
                                </div>
                                <div className="text-end text-danger  lh-1 mb-2 mt-2">Only 5 rooms left</div>
                                <div className='booking-history-amount-popup text-end  lh-1 mb-1'>
                                    BDT. 3,500.00
                                </div>
                                <div className="text-end text-danger lh-1"> + taxes and charges</div>
                                <div className='mt-3'>
                                    <button type="button" className="select-btn-popup">
                                        Select
                                    </button>
                                </div>





                            </Col>
                        </Row>
                    </div>
                    <div className='border border-1 px-2 py-2 rounded-2 mb-3'>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={6}>
                                <div className='popup-booking-picture'>
                                    <img src='https://i.postimg.cc/ZnycmyQK/Rectangle-502.jpg' alt='' className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={24} md={12} >
                                <h5 className="booking-history-title  h5 m-0 p-0 mb-2">
                                    Deluxe Room </h5>

                                <div className='mb-1'>
                                    <div className='booking-history-text'><EnvironmentOutlined /> Room size: 20 m²/215 ft² </div>
                                    <div className='booking-history-text'><BankOutlined /> 1 king bed </div>
                                    <div className='booking-history-text'><CreditCardOutlined /> Sleeps - 2 </div>
                                </div>
                                <div className='booking-history-detail bodercolorgray mt-2 ps-2 pe-5'>
                                    <p>Free breakfast for 2</p>
                                    <p>Free cancellation & No prepayment
                                        needed </p>
                                </div>
                            </Col>
                            <Col xs={24} md={6} className='text-end' >
                                <div className="select-field-popup">
                                    <Select
                                        className="rounded-2"
                                        defaultValue="lucy"
                                        style={{ width: '100%' }}
                                        onChange={handleChange}
                                        options={[
                                            { value: 'jack', label: '2 Room' },
                                            { value: 'lucy', label: '1 Room' },
                                            { value: 'Yiminghe', label: '3 Room' },
                                        ]}
                                    />
                                </div>
                                <div className="text-end text-danger  lh-1 mb-2 mt-2">Only 5 rooms left</div>
                                <div className='booking-history-amount-popup text-end  lh-1 mb-1'>
                                    BDT. 3,500.00
                                </div>
                                <div className="text-end text-danger lh-1"> + taxes and charges</div>
                                <div className='mt-3'>
                                    <button type="button" className="select-btn-popup">
                                        Select
                                    </button>
                                </div>





                            </Col>
                        </Row>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default React.memo(ChangeRoomInformationList)
