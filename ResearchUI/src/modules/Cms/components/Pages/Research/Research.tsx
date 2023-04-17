import React, { FC, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Form, Button, Row, Col, Tabs, Space } from "antd";
import {
  applyticketman,
  buyticketicon,
  calendaricon,
  clockicon,
  digitalscientificexhibit,
  fivedmovie,
  goodnightgoldilocks,
  headerbannerseven,
  journeytothestar,
  leaficonwhite,
  missionblackhole,
  researchlogo,
  novotheatreicon,
  paymenticon,
  planetariumshowslogo,
  ridesexhibit,
} from "../../../../../assets/images/pages/eTicketing";
import "./Research.style.scss";
import { useLang } from "../../../../../hooks/useLang";
import { AuthContext } from "../../../../../context/auth/auth.context";

const Research: FC<any> = (props) => {
  const { TabPane } = Tabs;
  const { lang, getUserLangUrl, getLangUrl } = useLang();
  const { scientistProfileId, userId, loadAuthState, isAuthenticated } = useContext(AuthContext);
  return (
    <div className="pageone-content">
      <div className="header-banner">
        <img src={headerbannerseven} alt="headerbanner" />
      </div>

      <div className="grant-fellowship-content">
        <div className="grantfellowship-icon">
          <img src={researchlogo} alt="icon" />
        </div>
        <div className="grantfellow-text-small "> Ministry of Science and Technology </div>
        <h3 className="padding-top">Research</h3>
        <div className="grant-fellowship-content-text">
          <p>
            The introduction is your opportunity to show readers and reviewers why your research
            topic is worth reading about and why your paper warrants their attention. The
            introduction serves multiple purposes. It presents the background to your study,
            introduces your topic and aims, and gives an overview of the paper.
          </p>
        </div>

        <div className="research_button_group">
        <Space>
          {scientistProfileId ? (
            <Link to={getLangUrl(lang, "/research/profile")}>
            <Button type="primary">Profile</Button>
          </Link>
          ) : (
            <Link to={getLangUrl(lang, "/research/profile/create")}>
              <Button type="primary">Join</Button>
            </Link>
          )}
          <Link to={getLangUrl(lang, "/research/researcher-list")}>
            <Button type="primary">Researcher List</Button>
          </Link>
          <Link to={getLangUrl(lang, "/research/journal-submission")}>
            <Button type="primary">Journal Submission</Button>
          </Link>
          <Link to={getLangUrl(lang, "/research/journal-article")}>
            <Button type="primary">Journal</Button>
          </Link>
          <Link to={getLangUrl(lang, "/research/journal-article-archive")}>
            <Button type="primary">Journal Archive</Button>
          </Link>
          <Link to={getLangUrl(lang, "/research/journal-article-application-form")}>
            <Button type="primary">Request Journal Article</Button>
          </Link>
          {
            isAuthenticated ?(
                <>
                {  scientistProfileId ?(
              <Link to={getLangUrl(lang, "/research/webinar-eoi-online")}>
                <Button type="primary">Webinar EOI</Button>
              </Link>
               ) :
              <Link to={getLangUrl(lang, "/research/profile/create")}>
                <Button type="primary">Webinar EOI</Button>
              </Link>
              }
              </>
            ) : null
          }

          <NavLink
            to={getLangUrl(lang, "/research/webinar-events-schedule")}
            className = "ant-btn ant-btn-primary"
          >
            Events Schedule
          </NavLink>

          </Space>
        </div>
      </div>
    </div>
  );
};

export default Research;
