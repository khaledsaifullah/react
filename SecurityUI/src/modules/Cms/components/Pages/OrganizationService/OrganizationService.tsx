import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Select, Button, Row, Col, Tabs } from "antd";
import {
  filtericonsearch,
  rearchicon,
  readmoreicon,
  etsearchicon,
  leaficon,
  tabtitlelogogranfellow,
  tabtitlelogoeticketig,
  tabtitlelogolicensngpermit,
} from "../../../../../assets/images/pages/organization";
import "./OrganizationService.style.scss";
import { useLang } from "../../../../../hooks/useLang";
import { headerbannerfive } from "../../../../../assets/images/pages/instruction";
import { Message } from "../../../../../utils";
import { useOrganizationList } from "../../../../../hooks/lists/useOrganizationList";
import { useComponentList } from "../../../../../hooks/lists/useComponentList";
import { useServiceList } from "../../../../../hooks/lists/useServiceList";
import ComponentWiseServices from "./ComponentWiseServices";
import { useSeekerLookup } from "../../../../../hooks/lookups/useSeekerLookup";

const OrganizationService: FC<any> = (props) => {
  const { TabPane } = Tabs;
  const { Option } = Select;
  const { lang, getLangUrl } = useLang();
  const { loadingComponentList, activeComponentList } = useComponentList();
  const { loadingOrganizationList, activeOrganizationList } =
    useOrganizationList();
  const { loadingServiceInfo, serviceList } = useServiceList();
  const { loadingSeekerLookupList, seekerLookupList } = useSeekerLookup();
  const url = window.location.pathname;
  const organizationShortName = url.substring(url.lastIndexOf("/") + 1);

  const organization = activeOrganizationList.find(
    (o) => o.short_name === organizationShortName.toUpperCase()
  );
  const componentIds = organization?.component_ids;
  const selectedOrganizationComponent = activeComponentList.filter(
    (o) => componentIds?.indexOf(String(o.id)) > -1
  );
  //console.log(selectedOrganizationComponent);
  return (
    <div className="pageone-content">
      <div className="header-banner">
        <img src={headerbannerfive} alt="headerbanner" />
      </div>

      <div className="grant-fellowship-content">
        <h3>{organization?.name_en} </h3>

        <div className="grant-fellowship-content-text">
          <p>{organization?.description_en}</p>
        </div>
      </div>

      <div className="service-content-area">
        <h3>SERVICES</h3>
        <h4>
          All the services under each component can be availed individually{" "}
        </h4>
        <div className="service-tab-content">
          <Tabs onChange={(value) => console.log("??")} type="card">
            {selectedOrganizationComponent &&
              selectedOrganizationComponent.map((item) => (
                <TabPane
                  tab={
                    <span className="tab-title-content">
                      <span className="tab-title-logo">
                        <img src={tabtitlelogogranfellow} alt="logo" />{" "}
                      </span>
                      <span className="tab-title-name">
                        {lang == "en" ? item?.value_en : item?.value_bn}
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
                    <ComponentWiseServices
                      serviceList={serviceList}
                      componentId={item?.id}
                      lang={lang}
                      // circularList={}
                      etsearchicon={etsearchicon}
                      readmoreicon={readmoreicon}
                      leaficon={leaficon}
                      organization={organization}
                      componentKey={item?.key}
                    />
                  </div>
                </TabPane>
              ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default OrganizationService;
