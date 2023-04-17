import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import {Form, Button, Row, Col, Tabs} from 'antd';
import {
    applyticketman,
    buyticketicon,
    calendaricon,
    clockicon,
    digitalscientificexhibit, fivedmovie,
    goodnightgoldilocks,
    headerbannerseven,
    journeytothestar, leaficonwhite,
    missionblackhole,
    novotheatreicon,
    paymenticon,
    planetariumshowslogo,
    ridesexhibit
} from "../../../../../assets/images/pages/eTicketing";
import './ETicketing.style.scss';
import {useLang} from "../../../../../hooks/useLang";

const ETicketing: FC<any> = props => {
    const { TabPane } = Tabs;
    const { lang, getUserLangUrl, getLangUrl } = useLang();
    return (
        <div className="pageone-content">
            <div  className="header-banner"><img src={headerbannerseven} alt="headerbanner" /></div>

            <div  className="grant-fellowship-content">
                <div className="grantfellowship-icon"><img src={novotheatreicon} alt="icon" /></div>
                <div className="grantfellow-text-small "> Bangabandhu Sheikh Mujibur Rahman Novo Theatre </div>
                <h3 className="padding-top">E-Ticketing  </h3>
                <div  className="grant-fellowship-content-text">
                    <p>Buy ticket of Novo Theatre shows online from this portal, and you can pay easily via online payment gateway. Tickets bought from this portal needs to be collected physically before the show.
                    </p>
                </div>
            </div>

            <div  className="service-content-area show-exhibition">
                <h3>SHOWS & EXHIBITIONS </h3>
                <h4> All the shows and exhibitions of NovoTheatre can be seen from here </h4>
            </div>


            <div  className="service-tab-content show-exhibition-tab">
                <Tabs onChange={(value) => console.log("?")} type="card">
                    <TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"><img src={planetariumshowslogo} alt="logo" /></span><span className="tab-title-name">Planetarium Shows </span></span>} key="1">
                        <div  className="showexhibition-tab-heading">
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="active">Today</Button>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Sunday</Button>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Monday</Button>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Tuesday</Button>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Wednesday</Button>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Thursday</Button>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Friday</Button>
                            </Form.Item>
                        </div>
                        <div  className="showexhibition-slider">
                            {/*start*/}
                            <div  className="showexhibition-item">
                                <div  className="showexhibition-item-picture">
                                    <img src={missionblackhole} alt="showexhibition" />
                                </div>
                                <div  className="showexhibition-item-body">
                                    <h3>Mission to Black Hole</h3>
                                    <div className="showexhibition-item-datetime">
                                        <span><img src={clockicon} alt="icon" /> </span>
                                        <span>10:30 AM - 11:00 AM  </span>
                                    </div>
                                    <div className="showexhibition-item-calendar">
                                        <span><img src={calendaricon} alt="icon" /> </span>
                                        <span>Saturday, Monday,<br/> Wednesday  </span>
                                    </div>
                                    <div className="showexhibition-item-payment">
                                        <span><img src={paymenticon} alt="icon" /> </span>
                                        <span>৳100.00 (per person) </span>
                                    </div>

                                    <div className="buy-ticket-btn">
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit">
                                                <img src={buyticketicon} alt="icon" />Buy Ticket
                                            </Button>
                                        </Form.Item>
                                        <h6>Seat Available: 50/200</h6>
                                    </div>

                                </div>


                                <div  className="showexhibition-item-footer">
                                    <p>
                                        <Link to={getLangUrl(lang, '/e-ticketing/mission-to-black-hole' )}>
                                            DETAILS ABOUT THE SHOW
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            {/*end*/}


                            {/*start*/}
                            <div  className="showexhibition-item">
                                <div  className="showexhibition-item-picture">
                                    <img src={journeytothestar} alt="showexhibition" />
                                </div>
                                <div  className="showexhibition-item-body">
                                    <h3>Journey to the Star </h3>
                                    <div className="showexhibition-item-datetime">
                                        <span><img src={clockicon} alt="icon" /> </span>
                                        <span>10:30 AM - 11:00 AM  </span>
                                    </div>
                                    <div className="showexhibition-item-calendar">
                                        <span><img src={calendaricon} alt="icon" /> </span>
                                        <span>Saturday, Monday,<br/> Wednesday  </span>
                                    </div>
                                    <div className="showexhibition-item-payment">
                                        <span><img src={paymenticon} alt="icon" /> </span>
                                        <span>৳100.00 (per person) </span>
                                    </div>

                                    <div className="buy-ticket-btn">
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit">
                                                <img src={buyticketicon} alt="icon" />Buy Ticket
                                            </Button>
                                        </Form.Item>
                                        <h6>Seat Available: 50/200</h6>
                                    </div>

                                </div>


                                <div  className="showexhibition-item-footer">
                                    <p>
                                        <Link to={getLangUrl(lang, '/e-ticketing/journey-to-the-star' )}>
                                            DETAILS ABOUT THE SHOW
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            {/*end*/}


                            {/*start*/}
                            <div  className="showexhibition-item">
                                <div  className="showexhibition-item-picture">
                                    <img src={goodnightgoldilocks} alt="showexhibition" />
                                </div>
                                <div  className="showexhibition-item-body">
                                    <h3>Goodnight Goldilocks </h3>
                                    <div className="showexhibition-item-datetime">
                                        <span><img src={clockicon} alt="icon" /> </span>
                                        <span>10:30 AM - 11:00 AM  </span>
                                    </div>
                                    <div className="showexhibition-item-calendar">
                                        <span><img src={calendaricon} alt="icon" /> </span>
                                        <span>Saturday, Monday,<br/> Wednesday  </span>
                                    </div>
                                    <div className="showexhibition-item-payment">
                                        <span><img src={paymenticon} alt="icon" /> </span>
                                        <span>৳100.00 (per person) </span>
                                    </div>

                                    <div className="buy-ticket-btn">
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit">
                                                <img src={buyticketicon} alt="icon" />Buy Ticket
                                            </Button>
                                        </Form.Item>
                                        <h6>Seat Available: 50/200</h6>
                                    </div>

                                </div>


                                <div  className="showexhibition-item-footer">
                                    <p>
                                        <Link to={getLangUrl(lang, '/e-ticketing/goodnight-goldilocks' )}>
                                            DETAILS ABOUT THE SHOW
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            {/*end*/}



                        </div>

                    </TabPane>





                    <TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"><img src={digitalscientificexhibit} alt="logo" /></span><span className="tab-title-name">Digital & Scientific Exhibits </span></span>} key="2">
                        Content of Tab Pane 2
                    </TabPane>

                    <TabPane tab={<span className="tab-title-content"><span className="tab-title-logo"><img src={ridesexhibit} alt="logo" /></span><span className="tab-title-name">Rides </span></span>} key="3">
                        Content of Tab Pane 3
                    </TabPane>

                    <TabPane tab={<span className="tab-title-content last"><span className="tab-title-logo"><img src={fivedmovie} alt="logo" /></span><span className="tab-title-name">5D Movie </span></span>} key="4">
                        Content of Tab Pane 4
                    </TabPane>


                </Tabs>
            </div>




            <div  className="request-ticket-content">
                <div  className="request-ticket-content-body">
                    <Row gutter={[16, 16]}>
                        <Col xs={12} md={10}>
                            <div className="request-ticket-picture">
                                <img src={applyticketman} alt="apply ticket" />
                            </div>
                        </Col>
                        <Col xs={12} md={14}>
                            <div className="request-ticket-rightpart">
                                <div className="request-ticket-text">
                                    <h4>REQUEST FOR TICKETS </h4>
                                    <p>If you are from an organization, want to arrange a group tour at
                                        the NovoTheatre, apply using the following form to express your request
                                        for tikets. </p>
                                </div>
                                <div  className="apply-ticket-link">
                                    <a href="#">Apply Now <img src={leaficonwhite} alt="readmoreicon" /> </a>
                                </div>
                            </div>
                        </Col>
                    </Row>


                </div>
            </div>






        </div>
    );
}

export default ETicketing;