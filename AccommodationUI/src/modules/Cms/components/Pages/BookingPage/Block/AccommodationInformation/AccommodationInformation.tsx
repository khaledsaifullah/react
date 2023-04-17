import React, { FC } from "react";
import { CommonUtils } from "../../../../../../../utils";
import { useTranslation } from "react-i18next";
import { StatusEnum } from "../../../../../../../utils/enums";
import { Spin } from "antd";
import "./AccommodationInformation.style.scss"

const AccommodationInformation: FC<any> = (props) => {
   const { t, i18n } = useTranslation();
   const lang = i18n.language || "en";
   const isBangla = i18n.language === "bn";

   const { loadingAccommodationInformation, selectedAccommodationInformation } = props;

   return (
      <>
         {loadingAccommodationInformation && <div className="text-center"><Spin className='d-inline-block' /></div>}
         {Object.keys(selectedAccommodationInformation)?.length > 0 && !loadingAccommodationInformation ? (
            <div className='info-table'>
               <table>
                  <tr>
                     <th>{t("Accommodation Info")}</th>
                     <th>{t("Building Info")}</th>
                     <th>{t("Address Info")}</th>
                     <th>{t("Rent Space Option")}</th>
                     <th>{t("Duration Type")}</th>
                     {/* <th>{t("Status")}</th> */}
                  </tr>
                  <tr>
                     <td>
                        {t("Type : ")}{lang == "en" ? selectedAccommodationInformation?.accommodation_type_name_en : selectedAccommodationInformation?.accommodation_type_name_bn} <br />
                        {t("ID : ")}{CommonUtils.ToLocalNumber(selectedAccommodationInformation?.accommodation_id, isBangla)} <br />
                        {t("Name : ")} {t(selectedAccommodationInformation?.accommodation_name)}
                     </td>
                     <td>
                        {t("Type : ")} {lang == "en" ? selectedAccommodationInformation?.accommodation_building_information.building_type_name_en : selectedAccommodationInformation?.accommodation_building_information.building_type_name_bn} <br />
                        {t("ID : ")}{CommonUtils.ToLocalNumber(selectedAccommodationInformation?.accommodation_building_information?.building_id, isBangla)} <br />
                        {t("Name : ")} {t(selectedAccommodationInformation?.accommodation_building_information?.building_name)}
                     </td>
                     <td>
                        {t("Location : ")} {t(selectedAccommodationInformation?.accommodation_building_information?.address)} <br />
                        {t("Division : ")} {lang == "en" ? selectedAccommodationInformation?.accommodation_building_information.division_name_en : selectedAccommodationInformation?.accommodation_building_information.division_name_bn} <br />
                        {t("District : ")}{lang == "en" ? selectedAccommodationInformation?.accommodation_building_information.district_name_en : selectedAccommodationInformation?.accommodation_building_information.district_name_bn} <br />
                        {t("Thana : ")}{lang == "en" ? selectedAccommodationInformation?.accommodation_building_information.thana_name_en : selectedAccommodationInformation?.accommodation_building_information.thana_name_bn}
                     </td>
                     <td>
                        {lang == "en" ? selectedAccommodationInformation?.rent_space_type_name_en : selectedAccommodationInformation?.rent_space_type_name_bn}
                     </td>
                     <td>
                        {lang == "en" ? selectedAccommodationInformation?.duration_type_name_en : selectedAccommodationInformation?.duration_type_name_bn}
                     </td>
                  </tr>
               </table>
            </div>
         ) : null}
      </>
   );
};

export default React.memo(AccommodationInformation);
