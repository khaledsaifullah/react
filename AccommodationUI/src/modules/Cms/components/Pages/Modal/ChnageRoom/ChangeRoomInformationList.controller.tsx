import React, { FC, useState, useEffect } from 'react'
import { useForm } from '../../../../../../hooks/useForm';
import DynamicModalForm from '../DynamicModalForm';
import ChangeRoomInformationList from './ChangeRoomInformationList.list';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { SaveOutlined, StepBackwardOutlined } from "@ant-design/icons";
import "./ChangeRoomInformationList.Style.scss"

const initialState = {
   modalTitle: 'Confirm cancellation',
   onCancelAction: 'hideForm',
   fields: {
      status: ''
   },
   isNewRecord: true,
   loading: false,
}

const ChangeRoomInformationListController: FC<any> = (props) => {
   const { t } = useTranslation();
   const { itemData, reloadForm, isShowForm, handleCallbackFunc } = props;
   const { formRef, initialValues, isSubmitting, setIsSubmitting, handleChange, handleSubmitFailed, resetForm } = useForm(initialState.fields);

   const [modalTitle, setModalTitle] = useState(initialState.modalTitle);
   const [onCancelAction, setOnCancelAction] = useState<any>(initialState.onCancelAction);
   const [isNewRecord, setIsNewRecord] = useState(initialState.isNewRecord);
   const [loading, setLoading] = useState(initialState.loading);

   const onSubmit = () => {
      formRef.submit();
   };

   const footerButtonsForCancelBooking: any = (
      <>
         <div className='popup-submit-btn'>
         <Button className='rounded-1 popup-blue-btn' key="cancel" onClick={(event) => handleCallbackFunc(null, "hideForm")}>
            {t("Change Again")}
         </Button>
         <Button className='rounded-1 popup-radish-btn' key="submit" type="primary" loading={loading} onClick={onSubmit}>
            {t("Confirm This Change")}
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
         loading={loading}
         isShowForm={isShowForm}
         component={ChangeRoomInformationList}
         footerComonent={footerButtonsForCancelBooking}
         handleCallbackFunc={handleCallbackFunc}
      />
   )
}

export default React.memo(ChangeRoomInformationListController)
