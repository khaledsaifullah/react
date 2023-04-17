import { Button, Select, Tabs } from 'antd';
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../../../../hooks/useLang';
import { CircularApi } from '../../../../../api';
import { Message } from '../../../../../utils';
import { useFellowshipTypeList } from '../../../../../hooks/lists/useFellowshipTypeList';
import { ComponentBaseUrlByKey } from '../ComponentBaseUrlByKey';

interface Props {
    serviceList: any;
    etsearchicon:any,
    readmoreicon:any,
    leaficon:any,
    componentId:any,
    organization:any,
    componentKey:any,
    lang:any
}

const ComponentWiseServices: React.FC<Props> = ({ serviceList, componentId, organization, componentKey, lang, etsearchicon, readmoreicon,  leaficon}) => {
    const selectedComponentServices = serviceList.filter(o => o.component_ids && o.component_ids.includes(String(componentId)));
    const { t, getLangUrl } = useLang();
    const { getComponentBaseURL } = ComponentBaseUrlByKey();
    return (
        <>
        {(selectedComponentServices) && (
            selectedComponentServices.map((item)=>(
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
                              `/services/${organization.short_name.toLowerCase()}/${item?.url}`,
                              getComponentBaseURL(componentKey),
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

export default ComponentWiseServices;