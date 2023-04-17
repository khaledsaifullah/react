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

const CancelBookingInformationList: FC<any> = (props) => {
    const { itemData } = props;
    const { TextArea } = Input;

    return (
        <div className='popup-cancel-booking'>
            {itemData?.id}
            <div className='popup-cancelbooking-body'>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={14}>
                        <div className="fw-bold h6 mb-1">Main guest details </div>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={8}>
                                <div className="fw-bold h6">Full Name </div>
                                <div>Md. Belayet Hossain  </div>
                            </Col>
                            <Col xs={24} md={6}>
                                <div className="fw-bold h6">Mobile </div>
                                <div>01752549121  </div>
                            </Col>
                            <Col xs={24} md={10}>
                                <div className="fw-bold h6">Email </div>
                                <div>belayet@example.com  </div>
                            </Col>
                        </Row>
                        <div className="fw-bold h6 mt-3">Reason for canceling </div>
                        <Form.Item  name="description_en" >
                                        <TextArea
                                            autoSize={{ minRows: 8, maxRows: 8 }}
                                            className="rounded-2"
                                        />
                                    </Form.Item>
                    </Col>
                    <Col xs={24} md={10}>
                        <Row gutter={[16, 16]} className="mt-4">
                            <Col xs={24} md={11}>
                                <div className="fw-bold h6">Check-in </div>
                                <div>Mon, Sep 20, 2022<br/> From 12:00PM </div>
                            </Col>
                            <Col xs={24} md={2}><div className="divider-vertical">&nbsp;</div></Col>
                            <Col xs={24} md={11} className="text-end">
                                <div className="fw-bold h6  pe-2">Check-out </div>
                                <div className=" pe-2">Wed, Sep 22, 2022<br/> From 11:00AM  </div>
                            </Col>
                        </Row>
                        <div className="fw-bold h6 mt-4">Your room Selection </div>
                        <div className="h6 mb-3">Deluxe Twin Room -1 </div>
                        <div className="divider-horizontal lh-1">&nbsp;</div>

                        <div className="d-flex justify-content-between mb-2 fw-bold pe-2 lh-1">
                            <div>Price</div>
                            <div className="text-end">BDT. 4,200.00</div>
                        </div>

                        <div className="d-flex justify-content-between mb-2 fw-bold pe-2 lh-1">
                            <div>VAT</div>
                            <div className="text-end">BDT. 630.00</div>
                        </div>

                        <div className="d-flex justify-content-between mb-2 fw-bold pe-2 lh-1">
                            <div>Other Charge</div>
                            <div className="text-end">BDT. 00.00</div>
                        </div>
                        <div className="divider-horizontal lh-1">&nbsp;</div>
                        <div className="d-flex justify-content-between mb-2 fw-bold pe-2  lh-1">
                            <div>Grand Total</div>
                            <div className="text-end">BDT. 4,830.00</div>
                        </div>
                        <div className="d-flex justify-content-between mb-2 fw-bold pe-2  lh-1 text-yellow">
                            <div>Booking Money</div>
                            <div className="text-end">BDT.00.00</div>
                        </div>



                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default React.memo(CancelBookingInformationList)
