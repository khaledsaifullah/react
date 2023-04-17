import React, { FC, useState, useEffect } from 'react'
import { useForm } from '../../../../../../hooks/useForm';
import DynamicModalForm from '../DynamicModalForm';
import CancelBookingInformationListList from './CancelBookingInformationList.list';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { SaveOutlined, StepBackwardOutlined } from "@ant-design/icons";
import "./CancelBookingInformationList.Style.scss"

const initialState = {
   modalTitle: 'Confirm cancellation',
   modalSubTitle: 'You are about to cancel your entire booking - review the details before canceling',
   onCancelAction: 'hideForm',
   fields: {
      status: ''
   },
   isNewRecord: true,
   loading: false,
}

const CancelBookingInformationListController: FC<any> = (props) => {
   const { t } = useTranslation();
   const { itemData, reloadForm, isShowForm, handleCallbackFunc } = props;
   const { formRef, initialValues, isSubmitting, setIsSubmitting, handleChange, handleSubmitFailed, resetForm } = useForm(initialState.fields);

   const [modalTitle, setModalTitle] = useState(initialState.modalTitle);
   const [onCancelAction, setOnCancelAction] = useState<any>(initialState.onCancelAction);
   const [modalSubTitle, setModalSubTitle] = useState(initialState.modalSubTitle);
   const [isNewRecord, setIsNewRecord] = useState(initialState.isNewRecord);
   const [loading, setLoading] = useState(initialState.loading);

   const footerButtonsForCancelBooking: any = (
      <>
         <div className='popup-submit-btn'>
         <Button
            className='rounded-1 popup-blue-btn'
            key="cancel"
            onClick={(event) => handleCallbackFunc(null, "hideForm")}
         >
            {t("Back to Booking")}
         </Button>
         <Button
            className='rounded-1 popup-radish-btn'
            key="submit"
            type="primary"
            loading={loading}
            onClick={(event) => handleCallbackFunc(null, "cancelBooking")}
         >
            {t("Confirm Cancel")}
         </Button>
         </div>
      </>
   )

   return (
      <DynamicModalForm
         itemData={itemData}
         modalWidth={"720px"}
         formRef={formRef}
         onCancelAction={onCancelAction}
         modalTitle={modalTitle}
         modalSubTitle={modalSubTitle}
         loading={loading}
         isShowForm={isShowForm}
         component={CancelBookingInformationListList}
         footerComonent={footerButtonsForCancelBooking}
         handleCallbackFunc={handleCallbackFunc}
      />
   )
}

export default React.memo(CancelBookingInformationListController)
