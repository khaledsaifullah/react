import React, { FC } from "react";
import { useLang } from "../../../../../hooks/useLang";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";
import "./LandingPage.style.scss";
import { Col, Image, Row, Select, Space } from "antd";
import { Input } from "antd";
import { data } from "./fakeData";
// import ETicketHeroSlider from "../../../../Eticket/components/Eticketing/Program/List/Frontend/ETicketHeroSlider";
// import ETicketCard from "../../../../Eticket/components/Eticketing/Program/List/Frontend/ETicketCard";

import LocationIco from "../../../../../assets/images/icon/svg/LocationIco";
import CalenderIco from "../../../../../assets/images/icon/svg/CalenderIco";
import ETicketCardImg1 from "../../../../../assets/images/background/ETicketCardImg1.png";
import RequestTicketVectorImg1 from "../../../../../assets/images/icon/svg/RequestTicketVectorImg1";
import RequestTicketVectorImg2 from "../../../../../assets/images/icon/svg/RequestTicketVectorImg2";
import DownloadBannerImg from "../../../../../assets/images/icon/Mobile app_ graphic.png";
import GooglePlayImg from "../../../../../assets/images/icon/app-store.png";
import AppStoreImg from "../../../../../assets/images/icon/google-play.png";
import QRCodeImg from "../../../../../assets/images/icon/qr-code.png";
import ApplyIco from "../../../../../assets/images/icon/apply.png";
import ReviewIco from "../../../../../assets/images/icon/review.png";
import ScheduledIco from "../../../../../assets/images/icon/scheduled.png";
import ApprovedIco from "../../../../../assets/images/icon/approved.png";
import UpperLine from "../../../../../assets/images/icon/svg/UpperLine";
import LowerLine from "../../../../../assets/images/icon/svg/LowerLine";

const { Search } = Input;
const { Option } = Select;

const LandingPage: FC<any> = (props) => {
    const { t } = useLang();

    return (
        <>
            <ContextJSX>
                <BodyClassName className={"component-e_ticket"} />
                <MetaTag>
                    <MetaTag.Title>{t("E-Ticket")}</MetaTag.Title>
                </MetaTag>
                <Header>
                    <Header.PageTitle>{t("E-Ticket")}</Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item>{t("E-Ticket")}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>

            <div className="container">
                {/* --------------- Hero section --------------- */}
                <section className="hero-section">
                    <Row gutter={[16, 16]}>
                        {/* <Col xs={24} lg={18}>
                            <ETicketHeroSlider data={data} />
                        </Col> */}

                        <Col xs={24} lg={6}>
                            <div className="e-ticket__filter">
                                <div className="e-ticket__filter_item">
                                    <div className="d-flex align-items-center">
                                        <span className="pt-1 pe-2">
                                            <LocationIco />
                                        </span>
                                        <p>Location</p>
                                    </div>

                                    <Select
                                        bordered={false}
                                        defaultValue="Dhaka"
                                        className="e-ticket__filter_item_select"
                                    >
                                        <Option value="Dhaka">Dhaka</Option>
                                        <Option value="Cumilla">Cumilla</Option>
                                        <Option value="Borisal">Borisal</Option>
                                        <Option value="Noyakhali">
                                            Noyakhali
                                        </Option>
                                    </Select>
                                </div>

                                <div className="e-ticket__filter_item">
                                    <div className="d-flex align-items-center">
                                        <span className="pt-1 pe-2">
                                            <CalenderIco />
                                        </span>
                                        <p>Date</p>
                                    </div>

                                    <Select
                                        bordered={false}
                                        defaultValue="Dhaka"
                                        className="e-ticket__filter_item_select"
                                    >
                                        <Option value="Dhaka">Dhaka</Option>
                                        <Option value="Cumilla">Cumilla</Option>
                                        <Option value="Borisal">Borisal</Option>
                                        <Option value="Noyakhali">
                                            Noyakhali
                                        </Option>
                                    </Select>
                                </div>

                                <div className="e-ticket__filter_item">
                                    <div className="d-flex align-items-center">
                                        <span className="pt-1 pe-2">
                                            <CalenderIco />
                                        </span>
                                        <p>Time</p>
                                    </div>

                                    <Select
                                        bordered={false}
                                        defaultValue="Dhaka"
                                        className="e-ticket__filter_item_select"
                                    >
                                        <Option value="Dhaka">Dhaka</Option>
                                        <Option value="Cumilla">Cumilla</Option>
                                        <Option value="Borisal">Borisal</Option>
                                        <Option value="Noyakhali">
                                            Noyakhali
                                        </Option>
                                    </Select>
                                </div>

                                <button
                                    className="btn w-100 text-white fw-bold"
                                    style={{
                                        backgroundColor: "#07A8ED",
                                        marginBottom: 0,
                                    }}
                                >
                                    View Show
                                </button>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* --------------- Most Popular show section --------------- */}
                <section className="py-4">
                    <h2 className="e-ticket__section_heading mt-3 mb-5">
                        <span>Most Popular</span>
                    </h2>
                    {/* <Row gutter={[16, 16]}>
                        {[
                            { cardImg: ETicketCardImg1 },
                            { cardImg: ETicketCardImg1 },
                            { cardImg: ETicketCardImg1 },
                            { cardImg: ETicketCardImg1 },
                        ].map((item, i) => {
                            return (
                                <Col key={i} xs={24} sm={12} lg={6}>
                                    <ETicketCard itemData={item} />
                                </Col>
                            );
                        })}
                    </Row> */}
                </section>

                {/* --------------- Show section --------------- */}
                <section className="">
                    {/* --- Show Filter ---- */}
                    <div className="e-ticket__show_filter d-flex justify-content-between flex-wrap gap-2">
                        <Space size={30} className="flex-wrap">
                            <span className="e-ticket__show_filter_label">
                                Today's Shows
                            </span>

                            <Select
                                defaultValue={"cat1"}
                                showSearch
                                allowClear
                                style={{ minWidth: 150, borderRadius: "10px" }}
                            >
                                <Option value="cat1">Category</Option>
                                <Option value="ca2">Category 2</Option>
                                <Option value="cat3">Category 3</Option>
                                <Option value="cat4">Category 4</Option>
                                <Option value="cat5">Category 5</Option>
                            </Select>
                            <Select
                                defaultValue={"date1"}
                                showSearch
                                allowClear
                                style={{ minWidth: 150, borderRadius: "10px" }}
                            >
                                <Option value="date1">Date and Time</Option>
                                <Option value="date2">Date and Time 2</Option>
                                <Option value="date3">Date and Time 3</Option>
                                <Option value="date4">Date and Time 4</Option>
                                <Option value="date5">Date and Time 5</Option>
                            </Select>
                        </Space>
                        <Search
                            placeholder="Search Shows"
                            // onSearch={onSearch}
                            style={{ width: 300 }}
                        />
                    </div>

                    {/* --- Filtered Shows ---- */}
                    <Row gutter={[16, 16]} style={{ padding: "30px 0" }}>
                        {/* {[
                            { cardImg: ETicketCardImg1 },
                            { cardImg: ETicketCardImg1 },
                            { cardImg: ETicketCardImg1 },
                            { cardImg: ETicketCardImg1 },
                            { cardImg: ETicketCardImg1 },
                            { cardImg: ETicketCardImg1 },
                            { cardImg: ETicketCardImg1 },
                            { cardImg: ETicketCardImg1 },
                        ].map((item, i) => {
                            return (
                                <Col key={i} xs={24} sm={12} lg={6}>
                                    <ETicketCard itemData={item} />
                                </Col>
                            );
                        })} */}
                    </Row>
                </section>

                {/* --------------- Request Ticket section --------------- */}
                <section className="e-ticket__request_ticket">
                    <div className="e-ticket__request_ticket__img1">
                        <div>
                            <RequestTicketVectorImg1 />
                        </div>
                    </div>
                    <div className="e-ticket__request_ticket_content">
                        <h3>Request For Ticket</h3>
                        <p>
                            Lorem ipsum dolor sit amet,elit lectus magna
                            utconsectetur adipiscing elit ut aliquam, purus sit
                            amet luctus venenatis,
                        </p>
                        <div className="e-ticket__request_ticket_content_action">
                            <button>Apply Now</button>
                            <button>Details</button>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-end">
                            <div className="e-ticket__request_ticket__benefit">
                                <ul>
                                    <li>Bulk Ticket Purchage</li>
                                    <li>Free Transportation Service</li>
                                    <li>Hassle Free Entry</li>
                                </ul>
                            </div>
                        </div>
                        <div className="e-ticket__request_ticket__img2">
                            <div>
                                <RequestTicketVectorImg2 />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --------------- Request ticket Process section --------------- */}
                <section className="e-ticket__request_ticket_process py-5">
                    <h3>Requested Ticket Process</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna
                    </p>

                    <div className="e-ticket__request_ticket_process_flow">
                        <div className="flow_item">
                            <div className="flow_item__logo">
                                <span className="flow_item__logo_count">1</span>
                                <img
                                    src={ApplyIco}
                                    width="46px"
                                    height="46px"
                                    alt=""
                                />
                                <span className="flow_item__logo_pin"></span>
                            </div>
                            <h4 className="flow_item__title">Apply</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit
                            </p>

                            <div className="flow_line">
                                <UpperLine />
                            </div>
                        </div>

                        <div className="flow_item">
                            <div className="flow_item__logo">
                                <span className="flow_item__logo_count">2</span>
                                <img
                                    src={ReviewIco}
                                    width="46px"
                                    height="46px"
                                    alt=""
                                />
                                <span className="flow_item__logo_pin"></span>
                            </div>
                            <h4 className="flow_item__title">Review</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit
                            </p>

                            <div className="flow_line lower_line">
                                <LowerLine />
                            </div>
                        </div>

                        <div className="flow_item">
                            <div className="flow_item__logo">
                                <span className="flow_item__logo_count">3</span>
                                <img
                                    src={ScheduledIco}
                                    width="46px"
                                    height="46px"
                                    alt=""
                                />
                                <span className="flow_item__logo_pin"></span>
                            </div>
                            <h4 className="flow_item__title">Scheduled</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit
                            </p>

                            <div className="flow_line">
                                <UpperLine />
                            </div>
                        </div>

                        <div className="flow_item">
                            <div className="flow_item__logo">
                                <span className="flow_item__logo_count">4</span>
                                <img
                                    src={ApprovedIco}
                                    width="46px"
                                    height="46px"
                                    alt=""
                                />
                                <span className="flow_item__logo_pin"></span>
                            </div>
                            <h4 className="flow_item__title">Approved</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit
                            </p>
                        </div>
                    </div>
                </section>

                {/* --------------- App Download section --------------- */}
                <section className="e-ticket__download_app my-4">
                    <Row>
                        <Col xs={24} md={12}>
                            <div className="d-flex justify-content-center">
                                <img
                                    src={DownloadBannerImg}
                                    width="450px"
                                    height="260px"
                                    alt=""
                                />
                            </div>
                        </Col>

                        <Col xs={24} md={12}>
                            <div className="text-center">
                                <h3 className="m-0">Download Our App</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, purus sit amet
                                    luctus venenatis,
                                </p>
                                <div className="d-flex justify-content-center gap-3 pt-4">
                                    <div className="d-flex flex-column gap-2">
                                        <Image
                                            src={GooglePlayImg}
                                            width="100px"
                                            height="33px"
                                        />
                                        <Image
                                            src={AppStoreImg}
                                            width="100px"
                                            height="33px"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src={QRCodeImg}
                                            width="75px"
                                            height="75px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        </>
    );
};

export default LandingPage;
