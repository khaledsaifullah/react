import React, { FC } from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import ContextJsx from "../../../../../components/ContextJsx";
import Header from "../../../../../components/Header";
import "./Contact.style.scss";

const { TextArea } = Input;

const Contact: FC<any> = (props) => {
    return (
        <div className="container">
            <ContextJsx>
                <Header>
                    <Header.PageTitle>{'Contact us'}</Header.PageTitle>
                </Header>
            </ContextJsx>
            <Card className="contact-page-card shadow mb-5 rounded card-negative-margin">
                <div className="contact-leftpart p-4">
                    <h3 className="h4">Ministry of Science & Technology</h3>
                    <ul>
                        <li>
                            <strong>Address</strong>
                            <span className="colon">:</span>
                            <div>Building No. 6 (9th Floor), Bangladesh Secretariat.</div>
                        </li>
                        <li>
                            <strong>City</strong>
                            <span className="colon">:</span>
                            <div>Dhaka</div>
                        </li>
                        <li>
                            <strong>Post</strong>
                            <span className="colon">:</span>
                            <div>1000</div>
                        </li>
                        <li>
                            <strong>Phone</strong>
                            <span className="colon">:</span>
                            <div>
                                <a href="tel:+880 2 716 0840">+880 2 716 0840</a>
                            </div>
                        </li>
                        <li>
                            <strong>Fax</strong>
                            <span className="colon">:</span>
                            <div>
                                <a href="tel:+880 2 716 9606">+880 2 716 9606</a>
                            </div>
                        </li>
                    </ul>
                    <h4 className="h5 mb-0">Find us on Social Media</h4>
                    <div className="social-link">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                            <svg
                                width="32"
                                height="33"
                                viewBox="0 0 32 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.84 0.660156C7.0917 0.660156 0 7.75186 0 16.5002C0 25.2485 7.0917 32.3402 15.84 32.3402C24.5883 32.3402 31.68 25.2485 31.68 16.5002C31.68 7.75186 24.5883 0.660156 15.84 0.660156ZM19.5921 11.6063H17.2112C16.929 11.6063 16.6155 11.9775 16.6155 12.4709V14.1902H19.5938L19.1433 16.6421H16.6155V24.0027H13.8056V16.6421H11.2563V14.1902H13.8056V12.7481C13.8056 10.679 15.2411 8.99761 17.2112 8.99761H19.5921V11.6063V11.6063Z"
                                    fill="#838787"
                                />
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/?lang=en">
                            <svg
                                width="32"
                                height="33"
                                viewBox="0 0 32 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.8399 0.660156C7.09164 0.660156 -6.10352e-05 7.75186 -6.10352e-05 16.5002C-6.10352e-05 25.2485 7.09164 32.3402 15.8399 32.3402C24.5882 32.3402 31.6799 25.2485 31.6799 16.5002C31.6799 7.75186 24.5882 0.660156 15.8399 0.660156ZM22.2832 13.6358C22.2898 13.7711 22.2914 13.9064 22.2914 14.0384C22.2914 18.1634 19.1548 22.917 13.4161 22.917C11.7204 22.9198 10.0599 22.4328 8.63439 21.5145C8.87694 21.5442 9.12609 21.5558 9.37854 21.5558C10.8404 21.5558 12.1852 21.0591 13.2527 20.2209C12.6022 20.2081 11.9718 19.9927 11.4495 19.6047C10.9271 19.2166 10.5389 18.6753 10.3388 18.0561C10.806 18.1449 11.2873 18.1263 11.7463 18.0017C11.0402 17.8589 10.4052 17.4763 9.94896 16.9187C9.49275 16.3611 9.24342 15.663 9.24324 14.9426V14.9046C9.66399 15.1373 10.1458 15.2792 10.6573 15.2957C9.99531 14.855 9.52669 14.1781 9.34726 13.4033C9.16784 12.6286 9.29117 11.8146 9.69204 11.1278C10.4757 12.0914 11.453 12.8796 12.5607 13.4416C13.6683 14.0035 14.8817 14.3265 16.1221 14.3898C15.9644 13.7204 16.0323 13.0177 16.3152 12.3908C16.5981 11.764 17.0801 11.2482 17.6864 10.9236C18.2927 10.599 18.9892 10.4838 19.6678 10.5959C20.3463 10.708 20.9687 11.0412 21.4384 11.5436C22.1366 11.4054 22.8062 11.1493 23.4184 10.7862C23.1857 11.5091 22.6985 12.123 22.0472 12.5138C22.6657 12.4393 23.2697 12.273 23.8391 12.0204C23.4208 12.6472 22.8939 13.1943 22.2832 13.6358V13.6358Z"
                                    fill="#838787"
                                />
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
                            <svg
                                width="32"
                                height="33"
                                viewBox="0 0 32 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.8399 0.660156C7.09164 0.660156 -6.10352e-05 7.75186 -6.10352e-05 16.5002C-6.10352e-05 25.2485 7.09164 32.3402 15.8399 32.3402C24.5882 32.3402 31.6799 25.2485 31.6799 16.5002C31.6799 7.75186 24.5882 0.660156 15.8399 0.660156ZM11.9624 23.0655H8.75484V12.7431H11.9624V23.0655ZM10.3388 11.4759C9.32574 11.4759 8.67069 10.7582 8.67069 9.87046C8.67069 8.96461 9.34554 8.26831 10.3801 8.26831C11.4146 8.26831 12.0482 8.96461 12.068 9.87046C12.068 10.7582 11.4146 11.4759 10.3388 11.4759ZM23.6774 23.0655H20.4698V17.345C20.4698 16.0134 20.0045 15.1092 18.8446 15.1092C17.9585 15.1092 17.4322 15.7214 17.1995 16.3104C17.1137 16.52 17.0923 16.817 17.0923 17.1123V23.0639H13.883V16.0349C13.883 14.7462 13.8418 13.6688 13.7989 12.7415H16.5857L16.7326 14.1753H16.7969C17.2193 13.5021 18.2539 12.5088 19.9847 12.5088C22.0951 12.5088 23.6774 13.9229 23.6774 16.9622V23.0655V23.0655Z"
                                    fill="#838787"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="contact-rightpart p-4">
                    <h3>Submit Feedback</h3>
                    <div className="contact-form">
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={12}>
                                <Form.Item name="your-name">
                                    <Input placeholder="Enter name" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item name="your-name">
                                    <Input placeholder="Enter your contact no" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item name="your-name">
                            <Input placeholder="Enter your email" />
                        </Form.Item>

                        <Form.Item name="address">
                            <TextArea
                                autoSize={{ minRows: 6, maxRows: 6 }}
                                placeholder="Comment"
                            />
                        </Form.Item>

                        <Button size="large" className="btn-apply">Submit</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Contact;
