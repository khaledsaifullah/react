import React, {FC, useEffect, useState} from 'react'
import { useForm } from '../../../../../../../hooks/useForm';
import { DateTimeUtils, Message, ObjectUtils } from '../../../../../../../utils'; 
import { ResearchJournalApi } from '../../../../../../../api'; 
import { useTranslation } from "react-i18next";
import DrawerForm from '../../../../../../../components/Drawer/DrawerForm';
import ResearchJournalAddOrEditForm from "./ResearchJournalForm.form";
import { applicationFields, researchJournalApplicationFields,researchJournalAuthorInformationFields } from '../Actions/ResearchJournal.model';
import { CONSTANT_COMMON } from '../../../../../../../constants';

const initialState  = {
    modalTitle: 'Add Research Journal',
    itemData: {},
    applicationData : applicationFields,
    applicationDetailsData : researchJournalApplicationFields,
    fileUpload: [],
    imageList : [],
    fields: {
        name_en: null,
        name_bn: null,
        code: null,
        description: null,
        image: null,
        status: 1,
    },
    researchJournalListData : [],
    isNewRecord: true,
    loading: false,
}

const ResearchJournalFormController: FC<any> = props => {
    const { t } = useTranslation();
    const { entityId, reloadForm, isShowForm, handleCallbackFunc } = props
    const { formRef, initialValues, isSubmitting, setIsSubmitting, handleChange, handleSubmitFailed, resetForm } = useForm(initialState.fields);

    const [modalTitle, setModalTitle] = useState(initialState.modalTitle);
    const [itemData, setItemData] = useState(initialState.itemData);
    const [isNewRecord, setIsNewRecord] = useState(initialState.isNewRecord);
    const [loading, setLoading] = useState(initialState.loading);
    const [researchJournalListData, setResearchJournalListData] = useState<any[]>(initialState.researchJournalListData);
    const [fileUpload, setFileUpload] = useState<any[]>(initialState.fileUpload);
    const [imageList, setImageList] = useState<any[]>(initialState.imageList);
    useEffect(() => {
        if (entityId && isShowForm) {
            setIsNewRecord(false);
            setModalTitle('Edit Research Journal');
            resetForm();
            loadData();
        }
        else {
            resetForm();
            setModalTitle(initialState.modalTitle);
            setIsNewRecord(initialState.isNewRecord);
        }
    }, [entityId, reloadForm])

    const loadData = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            ResearchJournalApi.getById(entityId)
                .then(res => {
                    setItemData(res.data);
                    const initFormDta ={
                        status: res.data.status,
                    }
                    handleChange(initFormDta)
                    formRef.setFieldsValue(initFormDta)
                    setLoading(false);
                    resolve(res.data);
                })
                .catch(err => {
                    Message.error('A network error occurred. Please try again later.');
                    setLoading(false);
                    reject(err);
                });
        });
    }

    const handleSubmit = (values: any): void => {
        if (entityId) {
            handleUpdate(values);
        }
        else {
            handleCreate(values);
        }
    }

    const handleCreate = (values: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            setIsSubmitting(true);
            const payload = {
                ...values,
                upload_manuscript : fileUpload.map(item => item.file_id).join(","),
                upload_image : imageList.map(item => item.file_id).join(","),
                published_year: DateTimeUtils.formatDate(values.published_year, CONSTANT_COMMON.DATE_FORMAT_DATABASE),
                submission_date: DateTimeUtils.formatDate(values.submission_date, CONSTANT_COMMON.DATE_FORMAT_DATABASE),
                received_date_by_editor: DateTimeUtils.formatDate(values.received_date_by_editor, CONSTANT_COMMON.DATE_FORMAT_DATABASE),
                review_date: DateTimeUtils.formatDate(values.review_date, CONSTANT_COMMON.DATE_FORMAT_DATABASE),
                status: values.status,

                researchJournalListData : {
                    ...ObjectUtils.pickArray(researchJournalListData, Object.keys(researchJournalAuthorInformationFields)
                    ),
                },
            }
            ResearchJournalApi.create(payload)
                .then(res => {
                    Message.success(t('The operation performed successfully.'));
                    setResearchJournalListData(res.data?.researchJournalListData)
                    handleCallbackFunc(null, 'hideForm');
                    handleCallbackFunc(null, 'reloadListing');
                    setLoading(false);
                    setIsSubmitting(false);
                    resolve(res);
                })
                .catch(err => {
                    Message.error('A network error occurred. Please try again later.');
                    setLoading(false);
                    setIsSubmitting(false);
                    reject(err);
                });
        });
    }

    const handleUpdate = (values: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            setIsSubmitting(true);
            const payload = {
                ...values,
                upload_manuscript : fileUpload.map(item => item.file_id).join(","),
                upload_image : imageList.map(item => item.file_id).join(","),
                published_year: DateTimeUtils.formatDate(values.published_year, CONSTANT_COMMON.DATE_FORMAT_DATABASE),
                submission_date: DateTimeUtils.formatDate(values.submission_date, CONSTANT_COMMON.DATE_FORMAT_DATABASE),
                received_date_by_editor: DateTimeUtils.formatDate(values.received_date_by_editor, CONSTANT_COMMON.DATE_FORMAT_DATABASE),
                review_date: DateTimeUtils.formatDate(values.review_date, CONSTANT_COMMON.DATE_FORMAT_DATABASE),

                status: values.status,

                researchJournalListData : {
                    ...ObjectUtils.pickArray(researchJournalListData, Object.keys(researchJournalAuthorInformationFields)
                    ),
                },
            }
            ResearchJournalApi.update(entityId, payload)
                .then(res => {
                    Message.success(t('GiftType update successfully.'));
                    setResearchJournalListData(res.data?.researchJournalListData)
                    handleCallbackFunc(null, 'hideForm');
                    handleCallbackFunc(null, 'updateListItem', entityId, res.data);
                    handleCallbackFunc(null, 'reloadView');
                    setLoading(false);
                    setIsSubmitting(false);
                    resolve(res);
                })
                .catch(err => {
                    Message.error('A network error occurred. Please try again later.');
                    setLoading(false);
                    setIsSubmitting(false);
                    reject(err);
                });
        });
    }

    return (
        <div className="form-page-container form-page-container-giftType">
            <DrawerForm
                loading={loading}
                isNewRecord={isNewRecord}
                itemData={itemData}
                modalTitle={modalTitle}
                researchJournalListData ={researchJournalListData}
                setResearchJournalListData = {setResearchJournalListData}
                fileUpload={fileUpload}
                setFileUpload={setFileUpload}
                imageList = {imageList}
                setImageList = {setImageList}
                isSubmitting={isSubmitting}
                isShowForm={isShowForm}
                formRef={formRef}
                initialValues={initialValues}
                component={ResearchJournalAddOrEditForm}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleSubmitFailed={handleSubmitFailed}
                handleCallbackFunc={handleCallbackFunc}
            />
        </div>
    );
}

export default React.memo(ResearchJournalFormController);
