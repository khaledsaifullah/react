import React, { FC } from 'react'
import {Form, Input, Button} from 'antd';
import {
    baecicon, baeraicon, bnsdocicon, filtericonsearch, headerbannerfour, nmsticon, specialresearchgranticon
} from "../../../../../assets/images/pages/service";
import './Service.style.scss';
import { useOrganizationList } from "../../../../../hooks/lists/useOrganizationList";
import { useServiceList } from "../../../../../hooks/lists/useServiceList";
import { useLang } from '../../../../../hooks/useLang';
import AppImage from '../../../../../components/Image/AppImage';
import {TRAINING_UI_URL, ACCOMMODATION_UI_URL, PROCESS_LEASE_UI_URL, ETICKET_UI_URL, GRANT_UI_URL, RESEARCH_UI_URL, LIBRARY_UI_URL, LICENSE_UI_URL, VIRTUAL_GALLERY_UI_URL} from '../../../../../constants/config.constant';

import { useComponentList } from '../../../../../hooks/lists/useComponentList';
import { ComponentBaseUrlByKey } from '../ComponentBaseUrlByKey';

const Service: FC<any> = props => {
    const { loadingOrganizationList, activeOrganizationList } = useOrganizationList();
    const { loadingServiceInfo, serviceList } = useServiceList();
    const { lang, getLangUrl } = useLang();
    const { loadingComponentList, activeComponentList } = useComponentList();
    const { getComponentBaseURL } = ComponentBaseUrlByKey();
    const url = window.location.pathname;
    const serviceId = url.substring(url.lastIndexOf("/") + 1);
    const currentService = serviceList.find(
        (o) => o.id == serviceId
      );
    //console.log(activeComponentList);
    const currentServiceOrganizationIds = currentService?.organization_ids;
    const currentServiceOrganization = activeOrganizationList.filter(
        (o) => currentServiceOrganizationIds?.indexOf(String(o.id)) > -1
      );

    const currentServiceComponentId = currentService?.component_ids;
    const currentServiceComponent = activeComponentList.find((o) => o.id == currentServiceComponentId);
    // console.log(currentService);
    return (
        <div className="pageone-content">
            <div  className="header-banner"><img src={headerbannerfour} alt="headerbanner" /></div>

            <div  className="grant-fellowship-content">
                <div className="grantfellowship-icon"><img src={specialresearchgranticon} alt="icon" /></div>
                <h3>{lang == 'en' ? currentService?.title_en : currentService?.title_bn}</h3>
                <div  className="grant-fellowship-content-text">
                    <p>{ currentService?.description }</p>
                </div>
            </div>

            <div  className="service-content-area">
                <h3>AFFILIATED ORGANIZATIONS</h3>
                <h4>The service can be availed from the following ogranizations with their own varities</h4>
                <div  className="affiliated-org-content">
                    <div  className="affiliated-org-heading">
                        <div className="serch-filter-input">
                            <Form.Item name="licence_number " >
                                <Input placeholder="Type Organization to Filter..." />
                            </Form.Item>
                        </div>
                        <div className="serviceseeker-btn">
                            <Button><img src={filtericonsearch} alt="filtericonsearch" /> Filter</Button>
                        </div>
                    </div>
                    <div  className="affiliated-org-body">
                        <div  className="affiliated-org-body-inner">
                            {currentServiceOrganization.map((item, index)=>(
                                <div key={`service-wise-organization${index}`} className="affiliated-block">
                                    <ul>
                                        <li>
                                            <a href={getLangUrl(lang, '/services/' + item?.short_name.toLowerCase() + "/" + currentService?.url, getComponentBaseURL(currentServiceComponent?.key), true)}  target="_blank">
                                                <label>
                                                    <AppImage imageServer='CDN' width='43' height='43' src={`${item?.logo_image}`} />
                                                </label>
                                                <span> {lang == 'en' ? item?.name_en : item?.name_bn} </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Service;
