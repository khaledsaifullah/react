import React from "react";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";
import "./RequestApplication.style.scss";
import { useLang } from "../../../../../hooks/useLang";
import { Button, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";

const { Option } = Select;
const { TextArea } = Input;

const RequestApplicationForm = () => {
    const { t } = useLang();

    const onFinish = (value: object) => {
        console.log(value);
    };
    return (
        <>
            <ContextJSX>
                <BodyClassName className={"component-e_ticket"} />
                <MetaTag>
                    <MetaTag.Title>
                        {t("E-Ticket Request Application")}
                    </MetaTag.Title>
                </MetaTag>
                <Header>
                    <Header.PageTitle>
                        {t("E-Ticket Request Application")}
                    </Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        {t("Request Application")}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>

            <section className="container request_application form-page-content form-page-content-registration">
                <Form onFinish={onFinish} layout="vertical" className="w-100">
                    <h2>Organization profile</h2>
                    <Row gutter={[60, 0]} className="w-100">
                        <Col md={12}>
                            <Form.Item
                                name="organization_name"
                                label="Organization Name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="organization_address"
                                label="Organization Address"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="organization_email"
                                label="Organization Email"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="applicant_name"
                                label="Applicant Name"
                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col md={12}>
                            <Form.Item
                                name="head_organization_name"
                                label="Head Of The Organization Name"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="organization_phone"
                                label="Organization Mobile/Phone"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="organization_website"
                                label="Organization Website"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="applicant_mobile"
                                label="Applicant Mobile"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <h2 className="mt-4">Ticket Information</h2>
                    <Row gutter={[60, 0]} className="w-100">
                        <Col md={12}>
                            <Form.Item
                                name="applicant_mobile"
                                label="Program Date"
                            >
                                <DatePicker placeholder="Select Your program date" />
                            </Form.Item>

                            <Form.Item name="program_date" label="Program Date">
                                <Select
                                    allowClear
                                    placeholder="Select Your program  name"
                                >
                                    <Option value={"program_name_1"}>
                                        Program Name 1
                                    </Option>
                                    <Option value={"program_name_2"}>
                                        Program Name 2
                                    </Option>
                                    <Option value={"program_name_3"}>
                                        Program Name 3
                                    </Option>
                                    <Option value={"program_name_4"}>
                                        Program Name 4
                                    </Option>
                                    <Option value={"program_name_5"}>
                                        Program Name 5
                                    </Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="ticket_number"
                                label="Number of Ticket "
                            >
                                <Input placeholder="Input number of ticket" />
                            </Form.Item>
                        </Col>

                        <Col md={12}>
                            <Form.Item name="program_type" label="Program Type">
                                <Select
                                    allowClear
                                    placeholder="Select Your program  type"
                                >
                                    <Option value={"program_type_1"}>
                                        Program Type 1
                                    </Option>
                                    <Option value={"program_type_2"}>
                                        Program Type 2
                                    </Option>
                                    <Option value={"program_type_3"}>
                                        Program Type 3
                                    </Option>
                                    <Option value={"program_type_4"}>
                                        Program Type 4
                                    </Option>
                                    <Option value={"program_type_5"}>
                                        Program Type 5
                                    </Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="program_time" label="Program time">
                                <Select
                                    allowClear
                                    placeholder="Select Your program  time"
                                >
                                    <Option value={"5:00pm"}>5:00 PM</Option>
                                    <Option value={"7:00pm"}>7:00 PM</Option>
                                    <Option value={"2:00pm"}>2:00 PM</Option>
                                    <Option value={"4:00pm"}>4:00 PM</Option>
                                    <Option value={"8:00pm"}>8:00 PM</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="remark" label="Remark">
                                <TextArea
                                    style={{ height: 60, resize: "none" }}
                                    placeholder="Type your remarks here"
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <div className="d-flex justify-content-end gap-4">
                        <Button style={{ borderRadius: "5px" }}>Cancel</Button>
                        <Button
                            style={{ borderRadius: "5px" }}
                            htmlType="submit"
                            type="primary"
                        >
                            Submit Request
                        </Button>
                    </div>
                </Form>
            </section>
        </>
    );
};

export default RequestApplicationForm;
