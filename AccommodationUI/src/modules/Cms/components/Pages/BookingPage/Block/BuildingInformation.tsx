import React, { FC, useState } from 'react'
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { useLang } from '../../../../../../hooks/useLang';
import { EnvironmentOutlined, StarFilled, BankOutlined, CreditCardOutlined } from "@ant-design/icons";
import { CONSTANT_CONFIG } from '../../../../../../constants';

const BuildingInformation: FC<any> = (props) => {
   const { t } = useTranslation();
   const { lang } = useLang();
   const { selectedAccommodationInformation } = props;
   const { accommodation_building_information: buildingInfo } = selectedAccommodationInformation;

   return (
      <>
         <div className="p-3 mb-3 bg-white rounded-2 auditorium-package-box">
            <Row gutter={[16, 16]}>
               <Col xs={24} md={7}>
                  <div className="booking-gallery">
                     <img
                        src={buildingInfo?.cover_image ? CONSTANT_CONFIG.CDN_URL + 'image/' + buildingInfo?.cover_image : "https://i.postimg.cc/vmZV82KY/gallery.jpg"}
                        alt={buildingInfo?.cover_image}
                     />
                  </div>
               </Col>
               <Col xs={24} md={17}>
                  <h5 className="booking-package-title  h5 m-0 p-0 mb-2">
                     {t(buildingInfo?.building_name)}
                  </h5>
                  <div className="d-flex">
                     <div>
                        <span className="booking-package-rating pe-1">
                           <StarFilled />
                        </span>
                        <span className="booking-package-rating pe-1">
                           <StarFilled />
                        </span>
                        <span className="booking-package-rating pe-1">
                           <StarFilled />
                        </span>
                        <span className="booking-package-rating pe-1">
                           <StarFilled />
                        </span>
                        <span className="booking-package-rating pe-1">
                           <StarFilled />
                        </span>
                     </div>
                     <div>(4,594 reviews)</div>
                  </div>
                  <div className="mt-2 mb-1">
                     <div className="auditorium-package-text">
                        <EnvironmentOutlined /> {lang == "en" ? buildingInfo?.district_name_en : buildingInfo?.district_name_bn}
                        {lang == "en" ? "," + buildingInfo?.division_name_en : buildingInfo?.division_name_bn}
                     </div>
                     {buildingInfo?.organization_id ? (
                        <div className="auditorium-package-text">
                           <BankOutlined />  {lang == "en" ? buildingInfo?.organization_name_en : buildingInfo?.organization_name_bn}
                        </div>
                     ) : null}
                     {buildingInfo?.building_type ? (
                        <div className="auditorium-package-text">
                           <CreditCardOutlined />  {lang == "en" ? buildingInfo?.building_type_name_en : buildingInfo?.building_type_name_bn}
                        </div>
                     ) : null}
                  </div>
                  <div className="booking-package-detail mt-3 ps-3 pe-5">
                     {buildingInfo?.buildingFacilities?.map((item, index) => {
                        return (
                           <p className='fw-bold'>  {lang == "en" ? item?.building_facility_en : item?.building_facility_bn}</p>
                        )
                     })}
                  </div>
               </Col>
            </Row>
         </div>
      </>
   )
}

export default React.memo(BuildingInformation)