import React, { FC } from "react";
import { Card } from "antd";
import ContextJSX from "../../../../../components/ContextJsx";
import Header from "../../../../../components/Header";
import "./PrivacyAndPolicy.style.scss";
import Breadcrumb from "../../../../../components/Breadcrumb";
import MetaTag from "../../../../../components/MetaTag";
import { useLang } from "../../../../../hooks/useLang";

const PrivacyAndPolicy: FC<any> = (props) => {
    const { t } = useLang();
    return (
        <div className="container">
            <ContextJSX>
                <MetaTag>
                    <MetaTag.Title>{t('Privacy Policy')}</MetaTag.Title>
                </MetaTag>
                <Header>
                    <Header.PageTitle>{t('Privacy Policy')}</Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item>{t('Privacy Policy')}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>
            <Card className="shadow rounded">
                <p>
The Government of Bangladesh and the Ministry of Science and Technology will maintain the confidentiality of your personal information. You can browse this website without providing any personal information. If you wish to provide any information about yourself, we will store that information. The collected information will be used for official purposes only, for internal review, and to improve the quality of the website content. Your information will not be used for commercial purposes; however, we may share this information with other government offices and agencies for integration with related services. The Government of Bangladesh may disclose the personal information of any person in case of any legal requirement such as a search warrant or court order.
                </p>
                <p>
It may be possible to collect your personal information when you e-mail, participate in a survey or provide feedback or contact information on a website. Your information may be forwarded to other government agencies or individuals to answer their questions.
                </p>
                <p>
This website provides links to other government agencies or organizations. The privacy policy of the new site will apply when you are using a site other than this one.
                </p>
                <p>
The Ministry of Science and Technology may amend this policy at any time without notice or notify users of this website. Any information stored through the current policy will be subject to these terms. If any information is collected after the change of policy, it will be followed by the changed policy.
                </p>
            </Card>
        </div>
  );
};

export default PrivacyAndPolicy;
