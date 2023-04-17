import React, { FC } from "react";
import { Card } from "antd";
import { useTranslation } from "react-i18next";
import ContextJSX from "../../../../../components/ContextJsx";
import Header from "../../../../../components/Header";
import "./TermsAndConditions.style.scss";
import Breadcrumb from "../../../../../components/Breadcrumb";
import MetaTag from "../../../../../components/MetaTag";
import { useLang } from "../../../../../hooks/useLang";

const TermsAndConditions: FC<any> = (props) => {
    const { t } = useLang();
    return (
        <div className="container">
            <ContextJSX>
                <MetaTag>
                    <MetaTag.Title>{t('Terms & Conditions')}</MetaTag.Title>
                </MetaTag>
                <Header>
                    <Header.PageTitle>{t('Terms & Conditions')}</Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item>{t('Terms & Conditions')}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>
            <Card className="shadow rounded">
                <div className="entry-content">
                    <p>
                        {t('Welcome to the Digital Service Portal of the Ministry of Science and Technology (MoST), Bangladesh. The platform is designed to receive online service applications, update the status of applications and, above all, simplify the service delivery process to minimize the time, cost, and visit (TCV) of service recipients while receiving any service provided by MoST. Any Citizen including the general public, businessmen, students, teachers, researchers, government and non-government organizations, and employees will be able to take advantage of this platform by applying the desired service online and paying the required fees through the ekPay payment gateway. To use this website, you must comply with certain conditions, which apply as soon as you enter this site.')}
                    </p>

                    <h3>{t('Terms')}</h3>
                    <ul>
                        <li>
                            {t('The Ministry of Science and Technology does not provide any financial support for any information on other sites linked to the Digital Service Portal.')}
                        </li>
                        <li>
                            {t('The Office will not assume any liability for any direct or indirect damages incurred as a result of the use of this website information and the linked website information.')}
                        </li>
                        <li>
                            {t('The Ministry of Science and Technology will not guarantee the continuity of the operation of this website.')}
                        </li>
                    </ul>

                    <h3>{t('Information work and print')}</h3>
                    <p>
                        {t('All users of this platform will be able to print all the information displayed on the website without any modifications, additions, or corrections. But any information published on this platform that does not belong to the Government of Bangladesh, and so that any other organization has the copyright, the permission of that organization must be obtained.')}
                    </p>

                    <h3>{t('Links to other websites')}</h3>
                    <p>
                        {t('It is the responsibility of the concerned authorities to keep the content of such linked websites connected to this platform and other websites which are not operated or controlled by the Ministry of Science and Technology and to keep it effective and up-to-date at all times.')}
                    </p>

                    <h3>Access</h3>
                    <p>
                        {t('Access to this platform may be subject to the discretion of the authorities at the discretion of any particular person or any particular address browsed from the Internet without giving any reason.')}
                    </p>
                </div>
            </Card>
        </div>
  );
};

export default TermsAndConditions;
