import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import CancelBookingInformationListController from "./CancelBookingInformationList.controller";

interface IProps {
   itemData?: any;
   [key: string]: any;
}

const initialState = {
   entity: {},
   // entityIndex: null,
}

const CancelBookingButtonController: FC<IProps> = (props) => {
   const { t } = useTranslation();
   const { itemData } = props;

   const [isShowForm, setIsShowForm] = useState(false);
   const [reloadForm, setReloadForm] = useState<number>(Date.now());

   const handleShowForm = () => {
      setIsShowForm(true);
      handleReloadForm();
   };

   const handleHideForm = () => {
      setIsShowForm(false);
   };

   const handleReloadForm = () => {
      setReloadForm(Date.now());
   };


   const handleActions = (action: string, entityIndex?: any) => {
      // const record = addMoreItemList[entityIndex];
      // setEntity(record);
      // if (action === 'add') {
      //    setEntityIndex(null);
      //    setIsShowForm(true);
      //    handleReloadForm();
      // }
      // else if (action === 'edit') {
      //    setEntityIndex(entityIndex);
      //    setIsShowForm(true);
      //    handleReloadForm();
      // }
      // else if (action === 'delete') {
      //    AntModal.confirm('Delete Family Member Information', 'Are you sure you want to delete this Family Member Information?', entityIndex, handleDeleteConfirm, 'Delete');
      // }
   };

   const handleCallbackFunc = (event: any, action: string, recordId?: any, data?: any) => {
      if (event === null || event === undefined || event === '') {
         event = event ? event : 'singleAction';
      }
      if (event === 'singleAction' && action === 'add') {
         handleActions('add')
      }
      else if (event === 'singleAction' && action === 'edit') {
         handleActions('edit', recordId)
      }
      else if (event === 'singleAction' && action === 'delete') {
         handleActions('delete', recordId)
      }
      else if (event === 'singleAction' && action === 'hideForm') {
         handleHideForm();
      }
      else if (event === 'singleAction' && action === 'reloadForm') {
         handleReloadForm();
      }
   }

   return (
      <>
         <CancelBookingInformationListController
            itemData={itemData}
            reloadForm={reloadForm}
            isShowForm={isShowForm}
            handleCallbackFunc={handleCallbackFunc}
         />
         <div className="mt-2">
            <button type="button" className="cancel-booking-btn" onClick={() => handleShowForm()}>
               {t("Cancel Booking")}
            </button>
         </div>
      </>
   );
};

export default React.memo(CancelBookingButtonController);
