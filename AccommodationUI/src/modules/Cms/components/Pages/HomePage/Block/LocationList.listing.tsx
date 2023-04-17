import React, { FC } from 'react'
import { Col, Row, Select, Spin } from 'antd'
import { useTranslation } from 'react-i18next';
import { useLang } from '../../../../../../hooks/useLang';
import { EnvironmentOutlined } from '@ant-design/icons';
import { useDivisionList } from '../../../../../../hooks/dependentLists/useDivisionList';
import { CONSTANT_CONFIG } from '../../../../../../constants';
import { useAccommodationTypeList } from '../../../../../../hooks/lists/useAccommodationTypeList';
import { Link } from 'react-router-dom';

const LocationListListing: FC<any> = (props) => {
   const { t } = useTranslation();
   const { lang, getLangPath } = useLang();
   const { divisionList } = useDivisionList();
   const { accommodationTypeList, loadingAccommodationTypeList } = useAccommodationTypeList();

   const handleChange = (value: any) => {
      console.log("accommodation type list :", value);

   }

   return (
      <>
         <div className='mt-5 mb-4 loaction-heading'>
            <h3 className='h1 m-0'>{t('Location')}</h3>
            <p>{t('All accommodation types are shown by area. Clicking on any area')}
               <br />{t('will take you to that particular area page')}</p>
         </div>
         <div className='loaction-section'>
            {loadingAccommodationTypeList && <div className="text-center"><Spin className='d-inline-block' /></div>}
            {!loadingAccommodationTypeList && (
               <Row gutter={[16, 16]}  >
                  {divisionList?.map((item, index) => {
                     return (
                        <>
                           <Col xs={24} md={6} key={index}>
                              <Link to={getLangPath(lang, '/filter?locationIds=' + item.id)}>
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
                                    {item.image ?
                                       <img src={CONSTANT_CONFIG.CDN_URL + 'image/' + item?.image} alt={item.name_en} />
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

export default React.memo(LocationListListing)
