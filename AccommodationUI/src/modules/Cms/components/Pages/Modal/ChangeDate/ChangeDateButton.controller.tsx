import React, { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ChangeDateFormController from "./ChangeDateForm.controller";
import { AllotmentApplicationApi } from "../../../../../../api";
import { DateTimeUtils, Message } from "../../../../../../utils";
import { CONSTANT_COMMON } from "../../../../../../constants";
interface IProps {
   itemData?: any;
   [key: string]: any;
}

const initialState = {
   entity: {},
   canCheck: "",
   checkAvailability: {
      bookingFrom: '',
      bookingTo: '',
      timeSlot: '',
      startTime: '',
      endTime: ''
   },
   checkAvailabilityStatus: {
      isShowFormItem: true,
      isAvailable: false,
      isNotAvailable: false,
   },
   isShowForm: false,
   loadingCheckAvailability: false,
   entityIndex: null,
}

const ChangeDateButtonController: FC<IProps> = (props) => {
   const { t } = useTranslation();
   const { itemData } = props;

   const [isShowForm, setIsShowForm] = useState<boolean>(initialState.isShowForm);
   const [entityIndex, setEntityIndex] = useState(initialState.entityIndex);
   const [reloadForm, setReloadForm] = useState<number>(Date.now());

   const [checkAvailabilityStatus, setCheckAvailabilityStatus] = useState<any>(initialState.checkAvailabilityStatus)
   const [loadingCheckAvailability, setLoadingCheckAvailability] = useState<boolean>(initialState.loadingCheckAvailability);
   const [checkAvailability, setCheckAvailability] = useState<any>(initialState.checkAvailability);
   const [canCheck, setCanCheck] = useState<any>(initialState.canCheck);

   // Enable and Disable check for availabiliy button depend on user input
   const canCheckForDurationTypeFullDay = Boolean(checkAvailability.bookingFrom) && Boolean(checkAvailability.bookingTo)

   const canCheckForDurationTypeTimeSlot = Boolean(checkAvailability.bookingFrom) && Boolean(checkAvailability.bookingTo) && Boolean(checkAvailability.timeSlot)

   const canCheckForDurationTypeTimeDuration = Boolean(checkAvailability.bookingFrom) && Boolean(checkAvailability.bookingTo) && Boolean(checkAvailability.startTime) && Boolean(checkAvailability.endTime)

   useEffect(() => {
      if (itemData?.accommodation_information?.duration_type == "FULL_DAY") {
         setCanCheck(canCheckForDurationTypeFullDay)
      }
      if (itemData?.accommodation_information?.duration_type == "TIME_SLOT") {
         setCanCheck(canCheckForDurationTypeTimeSlot)
      }
      if (itemData?.accommodation_information?.duration_type == "TIME_DURATION") {
         setCanCheck(canCheckForDurationTypeTimeDuration)
      }
   }, [checkAvailability])

   const handleShowForm = () => {
      setIsShowForm(true);
      handleReloadForm();
   };

   const handleHideForm = () => {
      setIsShowForm(false);
      setEntityIndex(null);
      resetFormFields()
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
      else if (event === 'singleAction' && action === 'checkAvailability') {
         handleAccommodationAvailability();
      }
      else if (event === 'singleAction' && action === 'CheckOtherDate') {
         handleCheckOtherDate();
      }
      else if (event === 'singleAction' && action === 'confirmAvailabilityCheck') {
         handleConfirmAvailability();
      }
   }

   /* Function to show hide check availability start  */
   const handleAvailabilityStatus = (): any => {
      setCheckAvailabilityStatus({
         isShowFormItem: false,
         isAvailable: true,
         isNotAvailable: false,
      })
   }

   const handleNotAvailabilityStatus = (): any => {
      setCheckAvailabilityStatus({
         isShowFormItem: false,
         isAvailable: false,
         isNotAvailable: true,
      })
   }

   const handleCheckOtherDate = (): any => {
      setEntityIndex(null);
      resetFormFields()
      setCheckAvailabilityStatus({
         isShowFormItem: true,
         isAvailable: false,
         isNotAvailable: false,
      })
   }

   /* Function to show hide check availability end */

   // Set date for form fieds 
   const handleCheckAvailability = (fieldName: any, value: any) => {
      console.log(fieldName, value);

      if (fieldName == "booking_from") {
         setCheckAvailability({
            ...checkAvailability,
            bookingFrom: value
         })
      }
      else if (fieldName == "booking_to") {
         setCheckAvailability({
            ...checkAvailability,
            bookingTo: value
         })
      }
      else if (fieldName == "time_slot") {
         setCheckAvailability({
            ...checkAvailability,
            timeSlot: value
         })
      }
      else if (fieldName == "start_time") {
         setCheckAvailability({
            ...checkAvailability,
            startTime: value
         })
      }
      else if (fieldName == "end_time") {
         setCheckAvailability({
            ...checkAvailability,
            endTime: value
         })
      }
   }

   const handleAccommodationAvailability = (): Promise<any> => {
      return new Promise((resolve, reject) => {
         setLoadingCheckAvailability(true)
         const payload = getPayload();

         AllotmentApplicationApi.checkAvailibility(payload)
            .then((res) => {
               if (res.data) {
                  setLoadingCheckAvailability(false)
                  handleAvailabilityStatus();
                  resolve(res);
               }
               else {
                  setLoadingCheckAvailability(false)
                  handleNotAvailabilityStatus();
                  resolve(res);
               }
            })
            .catch((err) => {
               Message.error("A network error occurred. Please try again later.");
               setLoadingCheckAvailability(false)
               reject(err);
            })
      })
   }

   const getPayload = (): any => {
      const payload = {
         booking_slot: itemData?.accommodation_information?.duration_type,
         start_date: checkAvailability?.bookingFrom ? DateTimeUtils.formatDate(checkAvailability?.bookingFrom, CONSTANT_COMMON.DATE_FORMAT_DATABASE) : null,
         end_date: checkAvailability?.bookingTo ? DateTimeUtils.formatDate(checkAvailability?.bookingTo, CONSTANT_COMMON.DATE_FORMAT_DATABASE) : null,
         time_slot: checkAvailability?.timeSlot,
         start_time: checkAvailability?.startTime ? DateTimeUtils.formatTime(checkAvailability?.startTime, CONSTANT_COMMON.DATE_PICKER_TIME_FORMAT) : null,
         end_time: checkAvailability?.endTime ? DateTimeUtils.formatTime(checkAvailability?.endTime, CONSTANT_COMMON.DATE_PICKER_TIME_FORMAT) : null,
         accommodation_id: itemData?.accommodation_information?.id,
         accommodation_type: itemData?.accommodation_information?.accommodation_type,
      }
      return payload
   }

   const handleConfirmAvailability = () => {
      handleHideForm();
   }

   const resetFormFields = () => {
      setCheckAvailability(initialState.checkAvailability)
      setCheckAvailabilityStatus(initialState.checkAvailabilityStatus)
   }

   return (
      <>
         <ChangeDateFormController
            entityIndex={entityIndex}
            checkAvailabilityStatus={checkAvailabilityStatus}
            loadingCheckAvailability={loadingCheckAvailability}
            canCheck={canCheck}
            checkAvailability={checkAvailability}
            handleCheckAvailability={handleCheckAvailability}
            itemData={itemData}
            reloadForm={reloadForm}
            isShowForm={isShowForm}
            handleCallbackFunc={handleCallbackFunc}
         />
         <div className="mt-3">
            <button type="button" className="change-date-btn" onClick={() => handleShowForm()}>
               {t("Change Date")}
            </button>
         </div>
      </>
   );
}

export default React.memo(ChangeDateButtonController)