import {Col, Row, Spin,} from 'antd';
import React, { FC } from 'react'
import { EnvironmentOutlined } from "@ant-design/icons";
import { useTranslation } from 'react-i18next';
import { useLang } from '../../../../../../hooks/useLang';

const Facility: FC<any> = (props) => {
   const { t } = useTranslation();
   const { lang } = useLang();

   const { buildingInfo, loading } = props;

   return (
       // {loading && <div className="spinner"><Spin className='d-inline-block' size="large" /></div>}
       //  {!loading && (
              <>
                 <h3 id='facilities' className="auditorium-color mt-5 h3">
                    {t("Facilities of the " + buildingInfo?.building_name)}
                 </h3>
                 <div className="get-special-benefit">
                    <h5>{t("Most popular facilities")}</h5>
                    <div className=" get-special-text fw-bold mb-3">
                       {buildingInfo?.buildingFacilities?.map((item, index) => {
                          return (
                             <span className="pe-5" key={index}>
                                <EnvironmentOutlined />  {lang == "en" ? item.building_facility_en : item.building_facility_bn}
                             </span>
                          )
                       })}
                    </div>
                    <Row gutter={[16, 16]}>
                       {buildingInfo?.buildingFacilities?.map((item, index) => {
                          return (
                             <Col xs={24} md={6} key={index}>
                                <div className="d-flex">
                                   <div className="pe-2">
                                      <EnvironmentOutlined />
                                   </div>
                                   <div>
                                      <h6> {lang == "en" ? item.building_facility_en : item.building_facility_bn}</h6>
                                      <div className="m-0 p-0 ms-3" dangerouslySetInnerHTML={{ __html: item.description }} />
                                   </div>
                                </div>
                             </Col>
                          )
                       })}
                    </Row>
                 </div>
              </>
        // )}
        )
}

export default React.memo(Facility)
