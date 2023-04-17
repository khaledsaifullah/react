import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Tabs } from "antd";
import CreateAction from "../../../../../../components/Actions/CreateAction"; 
import { PlusCircleFilled, EditFilled, } from '@ant-design/icons';
import { ResearchJournalAction } from "./Actions/ResearchJournal.actions"; 

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
} from "../../../../../../assets/images/pages/eTicketing";


import "./Journal.style.scss";
import { useLang } from "../../../../../../hooks/useLang";

const ResearchJournal: FC<any> = (props) => {
  const { TabPane } = Tabs;
  const { lang, getUserLangUrl, getLangUrl } = useLang();
  return (
    <div className="main-box">
      <input type="file" className="input-file" id="imgInp"></input>
      <button className="input-btn upload" id="input_btn" >
      <PlusCircleFilled />
      </button>
     
      <img
        className="cover"
        id="blah"
        src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=800&q=100"
      />
      <div className="dp-container">
        <img
          className="dp"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
      </div>
      <CreateAction manageUrl={false} component={ResearchJournalAction.COMMON_ACTION.CREATE.component} actionItem={ResearchJournalAction.COMMON_ACTION.CREATE}>
      <button className="pen-btn upload">
      <EditFilled />
      </button>
        </CreateAction>

      <div className="box">
        <div className="main-content">
          <h3>Selva Esakki Muthu.S</h3>
          <h4>Web Developer@ Zoho Corporation</h4>
          <div className="content">
            <h4>Thoothukudi, Tamil Nadu, India</h4>
            <ul className="content">
              <li>
                <span>97 connection</span>
              </li>
              <li>
                <span>contact info</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="current">
          <ul>
            <li className="align">
              <img
                src="https://lh3.googleusercontent.com/WQuOogmAxhiYTCzHwxyJfq70_Fg5PIJ7zryuFM8dix-jG-6NwgOYtf2OZR6Qq8YSIAOe6g=s85"
                className="icon"
              />
              <span className="cmpy clg">Zoho Corporation</span>
            </li>
          </ul>
        </div>
      </div>
      <CreateAction manageUrl={false} component={ResearchJournalAction.COMMON_ACTION.CREATE.component} actionItem={ResearchJournalAction.COMMON_ACTION.CREATE}>
        <button className="but">Add Journal</button>
        </CreateAction>
    </div>
  );
};

export default ResearchJournal;
