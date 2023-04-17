import React, {FC, useEffect, useState} from 'react'
import AuthorInformationFormModal from './AuthorInformationForm.modal';
import { useForm } from '../../../../../../../../hooks/useForm';
import { useAttachmentTypeLookup } from '../../../../../../../../hooks/lookups/useAttachmentTypeLookup';

const initialState  = {
    modalTitle: 'Create Author Information',
    itemData: {},
    fileUpload:[],
    fields: {
        author_type: null,
        author_name: null,
        email: null,
        institution: null,
    },
    isNewRecord: true,
    loading: false,
}

const AuthorInformationFormController: FC<any> = props => {
    const { loadingAttachmentTypeLookupList, attachmentTypeLookupList } = useAttachmentTypeLookup();


    const { entity, entityIndex, reloadForm, isShowForm, setMoreItemListData, handleCallbackFunc } = props
    const { formRef, initialValues, isSubmitting, setIsSubmitting, handleChange, handleSubmitFailed, resetForm } = useForm(initialState.fields);

    const [modalTitle, setModalTitle] = useState(initialState.modalTitle);
    const [itemData, setItemData] = useState(initialState.itemData);
    const [isNewRecord, setIsNewRecord] = useState(initialState.isNewRecord);
    const [loading, setLoading] = useState(initialState.loading);
    const [fileUpload, setFileUpload ] = useState<any[]>(initialState.fileUpload);

    useEffect(() => {
        if (entityIndex !== null) {
            setIsNewRecord(false);
            setModalTitle('Edit Author Information');
            resetForm();
            setItemData(entity);
            setIsNewRecord(false);
            formRef.setFieldsValue({
                ...entity,
            });
        }
        else {
            resetForm();
            setModalTitle(initialState.modalTitle);
            setIsNewRecord(initialState.isNewRecord);
        }
    }, [entity, entityIndex, reloadForm])

    const handleSubmit = (values: any): void => {
        if (entityIndex !== null) {
            handleUpdate(values);
        }
        else {
            handleCreate(values);
        }
    }

    const handleCreate = (values: any): void => {
        setLoading(true);
        setIsSubmitting(true);
        const payload = {
            ...values,
            author_type: values.author_type,
            author_name: values.author_name,
            email: values.email,
            institution: values.institution,
        }
        setMoreItemListData(prevState => {
            const itemData =  {...payload};
            return [...prevState, itemData]
        });

        handleCallbackFunc(null, 'hideForm');
        setLoading(false);
        setIsSubmitting(false);
    }

    const handleUpdate = (values: any): void => {
        setLoading(true);
        setIsSubmitting(true);
        const payload = {
            ...values,
            author_type: values.author_type,
            author_name: values.author_name,
            email: values.email,
            institution: values.institution,
        }
        setMoreItemListData(prevState => {
            prevState[entityIndex] = {...prevState[entityIndex], ...payload}
            return [...prevState];
        });

        handleCallbackFunc(null, 'hideForm');
        setLoading(false);
        setIsSubmitting(false);
    }


    return (
        <div className="form-page-container form-page-container-authorInformation">
            <AuthorInformationFormModal
                loading={loading}
                isNewRecord={isNewRecord}
                itemData={itemData}
                fileUpload={fileUpload}
                setFileUpload={setFileUpload}
                modalTitle={modalTitle}
                isSubmitting={isSubmitting}
                isShowForm={isShowForm}
                formRef={formRef}
                initialValues={initialValues}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleSubmitFailed={handleSubmitFailed}
                handleCallbackFunc={handleCallbackFunc}
            />
        </div>
    );
}

export default React.memo(AuthorInformationFormController);
