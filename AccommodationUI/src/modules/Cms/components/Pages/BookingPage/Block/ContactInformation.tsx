import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { useLang } from '../../../../../../hooks/useLang';
import { EnvironmentOutlined, CreditCardOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";

const ContactInformation: FC<any> = (props) => {
   const { t } = useTranslation();
   const { lang } = useLang();
   const { selectedAccommodationInformation } = props;
   const { accommodation_building_information: buildingInfo } = selectedAccommodationInformation;

   return (
      <>
         <div className="p-3 mb-2 pb-4 bg-white text-dark rounded-2 shadow-sm">
            <h5 className="h5 m-0 p-0 mb-2 fw-bold">
               {t(buildingInfo?.building_name)}
            </h5>
            <div className="beech-tree-cottage d-flex mb-2">
               <div className="pe-2">
                  <EnvironmentOutlined />
               </div>
               <div>
                  {t(buildingInfo?.address)}{buildingInfo?.address ? "," : null} <br />
                  {lang == "en" ? buildingInfo?.district_name_en : buildingInfo?.district_name_bn}
                  {lang == "en" ? ", " + buildingInfo?.division_name_en : buildingInfo?.division_name_bn}
               </div>
            </div>
            {buildingInfo?.organization_id ? (
               <div className="beech-tree-cottage d-flex">
                  <div className="pe-2">
                     <CreditCardOutlined />
                  </div>
                  <div>
                     {lang == "en" ? buildingInfo?.organization_name_en : buildingInfo?.organization_name_bn}
                  </div>
               </div>
            ) : null}
            <h6 className="h6 m-0 p-0 mt-3 mb-2 fw-bold">
               {t(" FREE 24/7 CUSTOMER SERVICE")}
            </h6>
            {buildingInfo?.mobile_no ? (
               <p className="m-0 p-0 mb-1 fw-bold lh-sm phone-tree">
                  <PhoneOutlined /> {t("Phone")} :
                  <a href="#" className='ms-1'>{buildingInfo?.mobile_no}</a>
               </p>
            ) : null}
            {buildingInfo?.email ? (
               <p className="m-0 p-0 mb-1 fw-bold lh-sm phone-tree">
                  <MailOutlined /> {t("Email ")} :
                  <a href="#" className='ms-1'>{buildingInfo?.email} </a>
               </p>
            ) : null}
         </div>
      </>
   )
}

export default React.memo(ContactInformation)