import React, { FC } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Form, Input, Select, Button, Row, Col, Tabs } from 'antd';
import {
    headerbannerthree, filtericonsearch, rearchicon, readmoreicon, etsearchicon, leaficon,
    citizen, tabtitlelogonmst, tabtitlelogobansdoc, tabtitlelogomost, tabtitlelogobcsir, tabtitlelogobricm
} from "../../../../../assets/images/pages/seeker";
import './ServiceSeeker.style.scss';
import { useLang } from "../../../../../hooks/useLang";
import { useSeekerLookup } from '../../../../../hooks/lookups/useSeekerLookup';
import { useServiceList } from '../../../../../hooks/lists/useServiceList';
import { useComponentList } from '../../../../../hooks/lists/useComponentList';
import {
    tabtitlelogogranfellow,
    tabtitlelogoeticketig,
    tabtitlelogolicensngpermit,
  } from "../../../../../assets/images/pages/organization";
import ComponentWiseServices from '../OrganizationService/ComponentWiseServices';
import { useOrganizationList } from '../../../../../hooks/lists/useOrganizationList';
import OrganizationWiseServices from '../OrganizationService/OrganizationWiseServices';
import AppImage from '../../../../../components/Image/AppImage';

const ServiceSeeker: FC<any> = props => {
    const { TabPane } = Tabs;
    const { Option } = Select;
    const { lang, getLangUrl } = useLang();
    const { loadingSeekerLookupList, seekerLookupList } = useSeekerLookup();
    const { loadingComponentList, activeComponentList } = useComponentList();
    const { seekeryKey } = useParams();
    const { loadingOrganizationList, activeOrganizationList } = useOrganizationList();
    const currentSeeker = seekerLookupList.find((o) => o.key === seekeryKey);
    const { loadingServiceInfo, serviceList } = useServiceList();
    const currentSeekerId = currentSeeker?.id;
    const selectedSeekerServices = serviceList.filter(o => o.seeker_ids && o.seeker_ids.includes(String(currentSeekerId)));
    const selectedSeekerOrganizationIDs = selectedSeekerServices.map(a => a.organization_ids);
    const selectedSeekerOrganization = activeOrganizationList.filter(
        (o) => selectedSeekerOrganizationIDs[0]?.indexOf(String(o.id)) > -1
      );
    //console.log(selectedSeekerOrganization);

    return (
        <div className="pageone-content">
            <div className="header-banner"><img src={headerbannerthree} alt="headerbanner" /></div>

            <div className="grant-fellowship-content">
                <div className="grantfellowship-icon"><img src={citizen} alt="citizen" /></div>
                <h3>Services for {lang == 'en' ? currentSeeker?.value_en : currentSeeker?.value_bn} </h3>
                <div className="grant-fellowship-content-text">
                    <p>{currentSeeker?.description}</p>
                </div>
            </div>

            <div className="service-content-area">
                <h3>SERVICES</h3>
                <h4> The service can be availed from the following ogranizations with their own varities </h4>
                <div className="service-tab-content">
                    <Tabs onChange={(value) => console.log("??")} type="card">
                        {selectedSeekerOrganization &&
                        selectedSeekerOrganization?.map((item) => (
                            <TabPane
                            tab={
                                <span className="tab-title-content">
                                <span className="tab-title-logo">
                                    <AppImage imageServer='CDN' width='43' height='43' src={`${item?.logo_image}`} />
                                </span>
                                <span className="tab-title-name">
                                    {item?.short_name}
                                </span>
                                </span>
                            }
                            key={item?.id}
                            >
                            <div className="service-tab-title">
                                <h4>All Services</h4>
                            </div>

                            <div className="service-tab-filter">
                                <Row gutter={[16, 16]}>
                                <Col xs={12} md={10}>
                                    <div className="filter-block-input">
                                    <Form.Item name="licence_number ">
                                        <Input placeholder="Type the Service to Filter... " />
                                    </Form.Item>
                                    </div>
                                </Col>
                                <Col xs={12} md={10}>
                                    <div className="serviceseeker-block-input">
                                    <Form.Item name="gender">
                                        <Select placeholder="Choose your type">
                                        {seekerLookupList.map((item) => (
                                            <Option key={item?.id} value={item?.id}>
                                            {lang == "en" ? item?.value_en : item?.value_bn}{" "}
                                            </Option>
                                        ))}
                                        </Select>
                                    </Form.Item>
                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div className="serviceseeker-btn">
                                    <Button>
                                        <img
                                        src={filtericonsearch}
                                        alt="filtericonsearch"
                                        />{" "}
                                        Filter
                                    </Button>
                                    </div>
                                </Col>
                                </Row>
                            </div>
                            <div className="tab-data-content">
                                <OrganizationWiseServices
                                serviceList={serviceList}
                                currentSeekerId={currentSeekerId}
                                lang={lang}
                                etsearchicon={etsearchicon}
                                readmoreicon={readmoreicon}
                                leaficon={leaficon}
                                organization={item}
                                />
                            </div>
                            </TabPane>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default ServiceSeeker;