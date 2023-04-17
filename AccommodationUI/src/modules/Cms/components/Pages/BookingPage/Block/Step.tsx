import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { useLang } from '../../../../../../hooks/useLang';

const Step: FC<any> = (props) => {
   const { t } = useTranslation();
   const { lang } = useLang();
   const { } = props;

   return (
      <>
         <div className="d-flex justify-content-between text-center mb-3  step-progress">
            <div className="active">
               <span className="text-center fw-bold stepline">
                  <span>1</span>
               </span>
               <h5 className="text-center fw-bold m-0 p-0">
                  Your Booking
               </h5>
            </div>
            <div>
               <span className="text-center fw-bold stepline">
                  <span>2</span>
               </span>
               <h5 className="fw-bold m-0 p-0">
                  Booking Details
               </h5>
            </div>
            <div>
               <span className="text-center fw-bold stepline">
                  <span>3</span>
               </span>
               <h5 className="text-center fw-bold m-0 p-0">
                  Booking Confirmation
               </h5>
            </div>
         </div>
      </>
   )
}

export default React.memo(Step)