import React, { FC, Fragment } from "react";
import { headerBanner } from "../../../../../assets/images/banner";
import { Button, Col, Form, Input, Row, Select, Tabs } from "antd";
import { searchBtnIcon } from "../../../../../assets/images/icon";
import "./TermsAndConditions.style.scss";
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
  novotheatreicon,
  paymenticon,
  planetariumshowslogo,
  ridesexhibit,
} from "../../../../../assets/images/pages/eTicketing";

const TermsAndConditions: FC<any> = (props) => {
  const { Option } = Select;
  return (
    <div className="pageone-content">
      <div className="header-banner terms-condition-banner ">
        <img src={headerBanner} alt="headerbanner" />
      </div>

      <div className="page-wrapper-content">
        <h1>Terms & Condition</h1>
        <div className="page-wrapper-contentbody">
          <p>
            Welcome to Ekseba Bangladesh platform. The platform is designed to
            receive online service applications, update the status of
            applications and, above all, reduce suffering. Citizens,
            businessmen, government and non-government organizations and
            government employees will be able to take advantage of this
            platform. In order to use this website, you must comply with certain
            conditions, which apply as soon as you enter this site.
          </p>

          <h2>Terms</h2>
          <div className={"terms"}>
            <ul>
              <li>
                The Department of Information and Communication Technology does
                not provide any financial support for any information on other
                sites linked to the Ekseba platform.
              </li>
              <li>
                The Office will not assume any liability for any direct or
                indirect damages incurred as a result of the use of this website
                information and the linked website information.
              </li>
              <li>
                The Department of Information and Communication Technology will
                not guarantee the continuity of the operation of this website.
              </li>
            </ul>
          </div>

          <h2>Information work and print</h2>
          <div className={"information-print"}>
            <p>
              All users of this platform will be able to print all the
              information displayed on the website without any modifications,
              additions and corrections. But any information published on this
              platform that does not belong to the Government of Bangladesh, and
              so that any other organization has the copyright, the permission
              of that organization must be obtained.
            </p>
          </div>

          <h2>Links to other websites</h2>
          <div className={"links-website"}>
            <p>
              It is the responsibility of the concerned authorities to keep the
              content of such linked websites connected to this platform and
              other websites which are not operated or controlled by the
              Department of Information and Communication Technology and to keep
              it effective and up-to-date at all times.
            </p>
          </div>

          <h2>Access</h2>
          <div className={"access"}>
            <p>
              Access to this platform may be subject to the discretion of the
              authorities at the discretion of any particular person or any
              particular address browsed from the Internet without giving any
              reason.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
