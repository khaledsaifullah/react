import { Button, Select, Tabs } from 'antd';
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../../../../hooks/useLang';


interface Props {
    serviceList: any;
    organizationitem:any,
    etsearchicon:any,
    readmoreicon:any,
    leaficon:any,
    circularList:any
}

const OrganizationwiseServiceComponent: React.FC<Props> = ({ serviceList, organizationitem, etsearchicon, readmoreicon, leaficon}) => {
    const { t, lang, getLangUrl } = useLang();
    const { TabPane } = Tabs;
    const { Option } = Select;


    useEffect(() => {
        console.log(serviceList)
        console.log(organizationitem.id)
    }, [])

    return (
        <>
            {(organizationitem) && (
                serviceList.filter(f => String(organizationitem.id).indexOf(f.organization_ids) >= 0).map((serviceitem, index) => (
                    <div className="tab-data-row">
                        <div className="tabdata-picture">
                            <div className="tabdata-picture-box"><img src={etsearchicon} alt="rearchicon" /> </div>
                        </div>
                        <div className="tabdata-text">
                            <h3>{lang =='en' ?  serviceitem.title_en : serviceitem.title_bn}
                            </h3>
                            <p>
                                {serviceitem.description}

                            </p>
                        </div>
                        <div className="tabdata-btn">
                            <Link to={getLangUrl(lang, '/service-instruction/' + serviceitem.url)}>
                                <Button className="detail-btn">{t('DETAILS')} <img src={readmoreicon} alt="icon" /> </Button>
                            </Link>
                            <Link to={getLangUrl(lang, '/service-instruction')}>
                                <Button className="apply-btn">{('APPLY')} <img src={leaficon} alt="icon" /> </Button>
                            </Link>
                        </div>
                    </div>

                ))
            )}


            {(organizationitem == 'All') && (
                serviceList.map((serviceitem, index) => (
                    <div className="tab-data-row">
                        <div className="tabdata-picture">
                            <div className="tabdata-picture-box"><img src={etsearchicon} alt="rearchicon" /> </div>
                        </div>
                        <div className="tabdata-text">
                            <h3>{lang =='en' ?  serviceitem.title_en : serviceitem.title_bn}
                            </h3>
                            <p>
                                { serviceitem.description}

                            </p>
                        </div>
                        <div className="tabdata-btn">
                            <Link to={getLangUrl(lang, '/service-instruction')}>
                                <Button className="detail-btn">{t('DETAILS')} <img src={readmoreicon} alt="icon" /> </Button>
                            </Link>
                            <Link to={getLangUrl(lang, '/service-instruction')}>
                                <Button className="apply-btn">{t('APPLY')} <img src={leaficon} alt="icon" /> </Button>
                            </Link>
                        </div>
                    </div>

                ))
            )}

        </>
    );
}

export default React.memo(OrganizationwiseServiceComponent);
