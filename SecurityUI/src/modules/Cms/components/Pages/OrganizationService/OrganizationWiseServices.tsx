import { Button, Select, Tabs } from 'antd';
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../../../../hooks/useLang';
import { CircularApi } from '../../../../../api';
import { Message } from '../../../../../utils';
import { useFellowshipTypeList } from '../../../../../hooks/lists/useFellowshipTypeList';
import { ComponentBaseUrlByKey } from '../ComponentBaseUrlByKey';
import { useComponentList } from '../../../../../hooks/lists/useComponentList';

interface Props {
    serviceList: any;
    currentSeekerId: any;
    etsearchicon:any,
    readmoreicon:any,
    leaficon:any,
    organization:any,
    lang:any
}

const OrganizationWiseServices: React.FC<Props> = ({ serviceList, organization, currentSeekerId, lang, etsearchicon, readmoreicon,  leaficon}) => {
    const selectedOrganizationServices = serviceList.filter(o => o.organization_ids && o.seeker_ids?.includes(String(currentSeekerId)) && o.organization_ids.includes(String(organization?.id)));
    const { loadingComponentList,activeComponentList } = useComponentList();
    const { t, getLangUrl } = useLang();
    const { getComponentBaseURL } = ComponentBaseUrlByKey();
    const getComponentKeyByComponentId = (componentId)=>{
        //return activeComponentList.find()
        const component = activeComponentList.find((o) => String(o.id) === componentId);
        return component?.key;
    }
    return (
        <>
        {(selectedOrganizationServices) && (
            selectedOrganizationServices.map((item)=>(
                <div key={`services-${item?.id}`} className="tab-data-row" style={{justifyContent: "normal"}}>
                    <div className="tabdata-picture-box">
                        <img src={etsearchicon} alt="rearchicon" />
                    </div>
                    <div className="tabdata-text">
                        <h3>{lang =='en' ? item?.title_en : item?.title_bn}</h3>
                        <p>{item?.description}</p>
                    </div>
                    <div className="tabdata-btn">
                          <a
                            href={getLangUrl(
                              lang,
                              `/services/${organization?.short_name.toLowerCase()}/${item?.url}`,
                              getComponentBaseURL(getComponentKeyByComponentId(item?.component_ids)),
                              true
                            )}
                          >
                            <Button className="detail-btn">
                              {" "}
                              {t("DETAILS")}{" "}
                              <img src={readmoreicon} alt="icon" />{" "}
                            </Button>
                          </a>
                        </div>
                </div>
            ))
        )}
        </>
    );
}

export default OrganizationWiseServices;