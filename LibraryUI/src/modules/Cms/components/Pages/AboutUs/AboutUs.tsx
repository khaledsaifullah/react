import React, { FC } from "react";
import { Form, Input, Button, Select } from "antd";
import { searchBtnIcon } from "../../../../../assets/images/icon";
import { headerBanner } from "../../../../../assets/images/banner";
import "./AboutUs.style.scss";

const AboutUs: FC<any> = (props) => {
  const { Option } = Select;
  return (
    <div className="pageone-content">
      <div className="header-banner about-us-banner ">
        <img src={headerBanner} alt="headerbanner" />
      </div>

      <div className="page-wrapper-content">
        <h1>About us</h1>
        <div className="page-wrapper-contentbody">
          <h1>Ministry of Science & Technology</h1>
          <p>
            Ministry of Science and Technology, Government of the People’s
            Republic of Bangladesh is promoting Science and Technology as
            stewardship of positive change in society and for balanced
            socio-economic upliftment, national well-being and thus to make
            Science and Technology a part of national culture. The use of
            Science and Technology as a means of sustainable use of Environment,
            Ecosystem and Resources contribute to world pool of knowledge in
            Science and Technology.{" "}
          </p>


        </div>
      </div>
    </div>
  );
};

export default AboutUs;
