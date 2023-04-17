import React, { FC } from "react";
import { Form, Input, Button, Select } from "antd";
import { searchBtnIcon } from "../../../../../assets/images/icon";
import { headerBanner } from "../../../../../assets/images/banner";
import "./PrivacyAndPolicy.style.scss";

const PrivacyAndPolicy: FC<any> = (props) => {
  const { Option } = Select;
  return (
    <div className="pageone-content">
      <div className="header-banner privacy-policy-banner ">
        <img src={headerBanner} alt="headerbanner" />
      </div>

      <div className="page-wrapper-content">
        <h1>Privacy & Policy</h1>
        <div className="page-wrapper-contentbody">
          <p>
            The Government of Bangladesh and the Department of Information and
            Communication Technology will maintain the confidentiality of your
            personal information. You can browse this website without providing
            any personal information. If you wish to provide any information
            about yourself, we will store that information. We may then share
            this information with other government offices and agencies. The
            information that will be collected will be used for official
            purposes only, for internal review, to improve the quality of the
            website content. Your information will not be used for commercial
            purposes. The Government of Bangladesh may disclose the personal
            information of any person in case of any legal requirement such as
            search warrant or court order.
          </p>
          <p>
            It will be possible to collect your personal information when you
            e-mail, participate in a survey or provide feedback or contact
            information on a website. Your information may be forwarded to other
            government agencies or individuals to answer your question
            correctly.
          </p>
          <p>
            This website provides links to other government agencies or
            organizations. The privacy policy of the new site will apply when
            you are using a site other than this one.
          </p>
          <p>
            The Department of Information and Communication Technology may amend
            this Policy at any time without notice. Or notify users of this
            website. Any information that was stored through the current policy
            will be subject to these terms. If any information is collected
            after the change of policy, it must be followed by the changed
            policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
