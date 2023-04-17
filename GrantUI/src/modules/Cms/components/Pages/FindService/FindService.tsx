import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Form, Input, Collapse, Button } from 'antd';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import {
    arrownavicon, baecicon, baeraicon, bansdocicon, bcsiricon, bycomponentcardtitleicon, byseekercardtitleicon,
    findserviceicon, findtypeheretofiltericon, headerbannerten, iconeight, iconfive, iconfour, iconnine,
    iconone, iconseven, iconsix, iconthree, icontwo, nibicon, nmsticon, organizationtitleicon
} from "../../../../../assets/images/pages/findService";

import {
    bookSearchIcon, businessmanIcon, citizenIcon, eLearningIcon,
    featherIcon,
    granAppIcon, instituteOrganizationIcon,
    mostIcon, researcherIcon, scientistIcon,
    grantFellowshipIcon, studentIcon
} from "../../../../../assets/images/icon";
import { useLang } from "../../../../../hooks/useLang";
import { nstFellowshipGrant, scienceBottol } from "../../../../../assets/images/pages/home";

import FindServiceFilter from './FindService.filter';

const FindService: FC<any> = props => {
    const { Panel } = Collapse;
    const { serviceList, filters, handleOnChanged, handleCallbackFunc, organizationList } = props;
    const { lang, getUserLangUrl, getLangUrl } = useLang();

    return (
        <div className="pageone-content">
            <div className="header-banner"><img src={headerbannerten} alt="headerbanner" /></div>

            <div className="grant-fellowship-content grant-find-service">
                <div className="grantfellowship-icon"><img src={findserviceicon} alt="icon" /></div>
                <h3> Find Services </h3>
            </div>
            <div className="find-service-content">
                <div className="find-service-leftpart">
                    <Collapse
                        accordion
                        defaultActiveKey={['1']}
                        onChange={(value) => console.log("?")}
                        expandIconPosition={"right"}
                        expandIcon={({ isActive }) => isActive ? <MinusSquareOutlined /> : <PlusSquareOutlined />}
                    >
                        <Panel header={<span><span className="find-service-title-icon"><img src={organizationtitleicon} alt="icon" /></span>BY ORGANIZATION</span>} key="1" className="by-organization-header">

                            <div className="find-specific-service">
                                <ul>
                                    {
                                        organizationList && organizationList.map((item, index) => (
                                            <li key={`organization-${index}`} >
                                                <Button type="text" onClick={() => handleOnChanged('filter_organization', item.id)}>
                                                    <label>
                                                        {item.logo_image &&
                                                            (
                                                                <img src={require(`../../../../../assets/images/icon/${item.logo_image}`).default} alt={"no icon"} />
                                                            )}
                                                    </label>
                                                    <span> {lang === 'en' ? item.name_en : item.name_bn}</span>
                                                </Button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Panel>


                        <Panel header={<span><span className="find-service-title-icon"><img src={bycomponentcardtitleicon} alt="icon" /></span>BY SERVICES </span>} key="2" className="by-component-header">
                            <div className="find-specific-service">
                                <ul>
                                    <li>
                                        <Button type="text" onClick={(event) => handleCallbackFunc(null, 'resetListing')}>
                                            <label><img src={featherIcon} alt="icon" /> </label>
                                            <span>All Services</span>
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </Panel>

                        <Panel header={<span><span className="find-service-title-icon"><img src={byseekercardtitleicon} alt="icon" /></span>BY SEEKER </span>} key="3" className="by-seeker-header">
                            <div className="find-specific-service">
                                <ul>
                                    <li>
                                        <Button type="text" onClick={() => handleOnChanged('filter_seeker', 1)}>
                                            <label><img src={citizenIcon} alt="icon" /> </label>
                                            <span>Citizen</span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button type="text" onClick={() => handleOnChanged('filter_seeker', 2)}>
                                            <label><img src={studentIcon} alt="icon" /> </label>
                                            <span>Student</span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button type="text" onClick={() => handleOnChanged('filter_seeker', 3)}>

                                            <label><img src={businessmanIcon} alt="icon" /> </label>
                                            <span>Businessman</span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button type="text" onClick={() => handleOnChanged('filter_seeker', 4)}>

                                            <label><img src={researcherIcon} alt="icon" /> </label>
                                            <span>Researcher</span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button type="text" onClick={() => handleOnChanged('filter_seeker', 5)}>

                                            <label><img src={scientistIcon} alt="icon" /> </label>
                                            <span>Scientist</span>
                                        </Button>
                                    </li>
                                    <li >
                                        <Button type="text" onClick={() => handleOnChanged('filter_seeker', 6)}>

                                            <label><img src={instituteOrganizationIcon} alt="icon" /> </label>
                                            <span>Institute/Organization</span>
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </Panel>

                    </Collapse>
                </div>

                <div className="find-service-rightpart">
                    <div className="find-service-navigation">
                        <span>By Organizations</span>
                        <span><img src={arrownavicon} alt="icon" /> </span>
                        <span>Ministry of Science and Technology (MoST)</span>
                        <span><img src={arrownavicon} alt="icon" /> </span>
                        <span><i>Choose the Service...</i> </span>
                    </div>

                    <FindServiceFilter
                        filters={filters}
                        serviceList={serviceList}
                        handleOnChanged={handleOnChanged}
                        handleCallbackFunc={handleCallbackFunc}
                    />
                    <div className="find-service-load-content">
                        <div className="find-specific-loadservice">
                            <ul>
                                {
                                    serviceList && serviceList.map((item, index) => (
                                        <li key={`icon-${index}`}>
                                            <Link to={getLangUrl(lang, item.url)}>
                                                <label><img src={require(`../../../../../assets/images/pages/home/${item.icon}`).default} alt={"no icon"} /></label>
                                                <span> {lang === 'en' ? item.title_en : item.title_bn}</span>
                                            </Link>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default FindService;