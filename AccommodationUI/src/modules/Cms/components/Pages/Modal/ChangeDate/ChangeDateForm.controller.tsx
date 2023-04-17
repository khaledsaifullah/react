import React, { FC, useState, useEffect } from 'react'
import { useForm } from '../../../../../../hooks/useForm';
import DynamicModalForm from '../DynamicModalForm';
import ChangeDateForm from './ChangeDateForm.form';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { FilterOutlined, CloseOutlined, SaveOutlined, StepBackwardOutlined } from "@ant-design/icons";
import "./ChangeDateForm.Style.scss"

const initialState = {
   modalTitle: 'Change Date',
   onCancelAction: 'hideForm',
   fields: {
      status: ''
   },
   checkForDurationType: {
      isFullDay: false,
      isTimeSlot: false,
      isTimeDuration: false
   },
   isNewRecord: true,
   loading: false,
}

const ChangeDateFormController: FC<any> = (props) => {
   const { t } = useTranslation();
   const { entityIndex, checkAvailabilityStatus, itemData, loadingCheckAvailability, checkAvailability, canCheck, handleCheckAvailability, reloadForm, isShowForm, handleCallbackFunc } = props;
   const { formRef, initialValues, isSubmitting, setIsSubmitting, handleChange, handleSubmitFailed, resetForm } = useForm(initialState.fields);

   const [modalTitle, setModalTitle] = useState(initialState.modalTitle);
   const [onCancelAction, setOnCancelAction] = useState<any>(initialState.onCancelAction);
   const [isNewRecord, setIsNewRecord] = useState(initialState.isNewRecord);
   const [loading, setLoading] = useState(initialState.loading);
   const [checkForDurationType, setCheckForDurationType] = useState<any>(initialState.checkForDurationType)

   const onSubmit = () => {
      formRef.submit();
   };

   useEffect(() => {
      if (entityIndex !== null) {
         handleResetForm();
      } else {
         handleResetForm();
      }
   }, [isShowForm, entityIndex, checkAvailabilityStatus.isShowFormItem])

   useEffect(() => {
      if (itemData?.accommodation_information?.duration_type == "FULL_DAY") {
         setCheckForDurationType({
            isFullDay: true,
            isTimeSlot: false,
            isTimeDuration: false,
         })
      }
      if (itemData?.accommodation_information?.duration_type == "TIME_SLOT") {
         setCheckForDurationType({
            isFullDay: false,
            isTimeSlot: true,
            isTimeDuration: false,
         })
      }
      if (itemData?.accommodation_information?.duration_type == "TIME_DURATION") {
         setCheckForDurationType({
            isFullDay: false,
            isTimeSlot: false,
            isTimeDuration: true,
         })
      }
   }, [itemData?.accommodation_information?.duration_type])

   const handleResetForm = () => {
      formRef.setFieldsValue({});
      resetForm()
   }

   const footerButtonsForCancelBooking: any = (
      <>
         <Button
            hidden={!checkAvailabilityStatus.isShowFormItem && !checkAvailabilityStatus.isAvailable}
            key="cancel"
            onClick={(event) => handleCallbackFunc(null, "hideForm")}
         >
            {t("Cancel")} <CloseOutlined />
         </Button>
         <Button
            hidden={!checkAvailabilityStatus.isShowFormItem}
            className="btn-blue"
            key="submit"
            type="primary"
            loading={loadingCheckAvailability}
            onClick={() => { handleCallbackFunc(null, "checkAvailability") }}
            disabled={!canCheck}
         >
            {t("See availability")} <FilterOutlined />
         </Button>

         <Button
            className="btn-blue"
            hidden={!checkAvailabilityStatus.isNotAvailable}
            key="submit"
            type="primary"
            onClick={(event) => handleCallbackFunc(null, "CheckOtherDate")}
         >
            {t("Check other date")}
         </Button>
         <Button
            hidden={!checkAvailabilityStatus.isAvailable}
            className="btn-blue"
            key="submit"
            type="primary"
            loading={loading}
            onClick={() => { handleCallbackFunc(null, "confirmThisChange") }}
         >
            {t("Confirm this change")} <SaveOutlined />
         </Button>
      </>
   )

   return (
      <DynamicModalForm
         itemData={itemData}
         checkAvailabilityStatus={checkAvailabilityStatus}
         checkAvailability={checkAvailability}
         checkForDurationType={checkForDurationType}
         handleCheckAvailability={handleCheckAvailability}
         modalWidth={"720px"}
         formRef={formRef}
         modalTitle={modalTitle}
         onCancelAction={onCancelAction}
         loading={loadingCheckAvailability}
         isShowForm={isShowForm}
         component={ChangeDateForm}
         footerComonent={footerButtonsForCancelBooking}
         handleCallbackFunc={handleCallbackFunc}
      />
   )
}

export default React.memo(ChangeDateFormController)