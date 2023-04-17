import React from "react";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";
import { useLang } from "../../../../../hooks/useLang";
import "./ShowDetailsPage.scss";
import SliderBg from "../../../../../assets/images/background/slider-bg.png";
import ETicketCardImg1 from "../../../../../assets/images/background/ETicketCardImg1.png";
import { Link } from "react-router-dom";
import { Rate } from "antd";

const ShowDetailsPage = () => {
    const { t } = useLang();

    return (
        <>
            <ContextJSX>
                <BodyClassName className={"component-e_ticket"} />
                <MetaTag>
                    <MetaTag.Title>{t("Show Details")}</MetaTag.Title>
                </MetaTag>
                <Header>
                    <Header.PageTitle>{t("Show Details")}</Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item>{t("show Details")}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>

            <div className="show-details">
                {/* -------------  Show Details Hero Section  --------------- */}
                <section className="container show-details__hero_section">
                    <div
                        className="show-details_hero"
                        style={{ backgroundImage: `url(${SliderBg})` }}
                    >
                        <div className="px-5">
                            <h1 className="show-details_hero__heading">
                                Mission to Black Hole
                            </h1>
                            <h4 className="show-details_hero__subheading">
                                & Documentary on Bangabandhu
                            </h4>

                            <div className="show-details_hero__content_1">
                                <div>
                                    <Rate allowHalf defaultValue={3.5} />
                                    <span className="rate_count">200</span>
                                </div>

                                <span className="show-details_hero__content_1_text">
                                    100.00 TK
                                </span>
                                <span className="show-details_hero__content_1_text">
                                    12.00 PM
                                </span>
                            </div>

                            <div className="show-details_hero__content_2">
                                <p>Planetarium Shows</p>
                                <span></span>
                                <p>110 min</p>
                            </div>

                            <div className="show-details_hero__content_action">
                                <button className="btn-c-primary">
                                    Buy Ticket
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="show-details__hero_img">
                        <img src={ETicketCardImg1} alt="" />
                    </div>
                </section>

                {/* -------------  Show Details Content Section  --------------- */}
                <section className="container show-details__content px-5">
                    {[
                        {
                            heading: "DOCUMENTARY ON BANGABANDHU",
                            paragraph:
                                "A 30-minute digital film made on the ‘Historic Character and Glorious Role of Father of the Nation Bangabandhu Sheikh Mujibur Rahman is shown at every show at the Novotheatre. The film is based on a lot of unknown facts and happenings of life of the best Bengali of a thousand years Bangabandhu Sheikh Mujibur Rahman and his historic 7th March speech. All kinds of audience will be able to know the background of the War of Liberation repression by the Pakistani occupation forces, the resistance from the freedom-loving people of this land and various other aspects of the liberation war.",
                        },
                        {
                            heading: "MISSION TO BLACK HOLE",
                            paragraph:
                                "The most astonishing region in the universe is the black hole, from where not even light can escape. The Black Hole cinema was made up of missions of two spacecrafts – Kronos and Darwin and with the feeling of virtual tour of Grizer-581 star. In this science fiction movie, you will watch whatever have been discovered so far about the black hole and the scientists’ exploration for discovering the plants suitable for human habitation.",
                        },
                    ].map((item, i) => {
                        return (
                            <div>
                                <h3>{item.heading}</h3>
                                <p>{item.paragraph}</p>
                            </div>
                        );
                    })}
                </section>
            </div>
        </>
    );
};

export default ShowDetailsPage;
