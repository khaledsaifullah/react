import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { useLang } from '../../../../../../hooks/useLang';

const Location: FC<any> = (props) => {
   const { t } = useTranslation();
   const { lang } = useLang();

   const { buildingInfo } = props;

   return (
      <>
         <h3 id="location" className="auditorium-color mt-5 h3">
            {t("Location of the ") + buildingInfo?.building_name}
         </h3>
         <div className="auditorium-location-box">
             <div dangerouslySetInnerHTML={{ __html: buildingInfo.geo_location_info }} />
         </div>
      </>
   )
}

export default React.memo(Location)
