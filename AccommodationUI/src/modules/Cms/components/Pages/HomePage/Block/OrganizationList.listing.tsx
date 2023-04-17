import { Col, Row, Select, Spin } from 'antd';
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { useLang } from '../../../../../../hooks/useLang';
import { EnvironmentOutlined } from '@ant-design/icons';
import { useOrganizationList } from '../../../../../../hooks/lists/useOrganizationList';
import { useAccommodationTypeList } from '../../../../../../hooks/lists/useAccommodationTypeList';
import { CONSTANT_CONFIG } from '../../../../../../constants';
import { Link } from 'react-router-dom';

const OrganizationListListing: FC<any> = props => {
   const { t } = useTranslation();
   const { lang, getLangPath } = useLang();
   const { loadingOrganizationList, organizationList } = useOrganizationList();
   const { accommodationTypeList, loadingAccommodationTypeList } = useAccommodationTypeList();

   const handleChange = (value: any) => {
      console.log("accommodation type list :", value);

   }

   return (
      <>
         <div className='mt-5 mb-4  text-center loaction-heading'>
            <h3 className='h1 m-0'>{t('Organization')}</h3>
            <p>{t('The organization shows all accommodation types. Clicking on any organization will take you to')}
               <br />{t("that particular organization's page")}</p>
         </div>
         <div className='organization-section'>
            {loadingAccommodationTypeList && <div className="text-center"><Spin className='d-inline-block' /></div>}
            {!loadingAccommodationTypeList && (
               <Row gutter={[16, 16]}>
                  {organizationList?.map((item, index) => {
                     return (
                        <>
                           <Col xs={24} md={6} key={index}>
                              <Link to={getLangPath(lang, '/filter?organizationIds=' + item.id)}>
                                 <div className='loaction-box'>
                                    <div className='loaction-name'>
                                       <EnvironmentOutlined /> {lang == "en" ? item.name_en : item.name_bn}</div>
                                    <div className='loaction-number'>
                                       <Select
                                          defaultValue="150"
                                          showSearch
                                          allowClear
                                          optionFilterProp="children"
                                          style={{ width: '100%' }}
                                          dropdownMatchSelectWidth={100}
                                          loading={loadingAccommodationTypeList}
                                          onChange={handleChange}
                                          filterOption={(input, option: any) => (option?.label ?? '')?.toLowerCase()?.includes(input)}
                                          options={accommodationTypeList?.map((item: any) => ({ value: item.key, label: lang == "en" ? item.name_en : item.name_bn }))}
                                       />
                                    </div>
                                    {item.banner_image ?
                                       <img src={CONSTANT_CONFIG.CDN_URL + 'image/' + item?.banner_image} alt={item.name_en} />
                                       : null}
                                 </div>
                              </Link>
                           </Col>
                        </>
                     )
                  })}
               </Row>
            )}
         </div>
      </>
   )
}

export default React.memo(OrganizationListListing);
