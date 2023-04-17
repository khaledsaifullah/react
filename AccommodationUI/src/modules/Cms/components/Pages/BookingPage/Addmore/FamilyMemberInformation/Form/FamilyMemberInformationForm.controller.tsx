import React, { FC, useEffect, useState } from 'react'
import { useForm } from '../../../../../../../../hooks/useForm';
import { DateTimeUtils } from '../../../../../../../../utils';
import ModalForm from '../../../../../../../../components/Modal/ModalForm';
import FamilyMemberInformationForm from './FamilyMemberInformationForm.form';

const initialState = {
    modalTitle: 'Create Family Member Information',
    itemData: {},
    fields: {
        member_name: null,
        age: null,
        relation: null,
        description: null,
        discharge_date: null,
        current_residence: null,
    },
    isNewRecord: true,
    loading: false,
}

const FamilyMemberInformationFormController: FC<any> = props => {
    const { entity, entityIndex, reloadForm, isShowForm, setAddMoreItemList, handleCallbackFunc } = props
    const { formRef, initialValues, isSubmitting, setIsSubmitting, handleChange, handleSubmitFailed, resetForm } = useForm(initialState.fields);

    const [modalTitle, setModalTitle] = useState(initialState.modalTitle);
    const [itemData, setItemData] = useState(initialState.itemData);
    const [isNewRecord, setIsNewRecord] = useState(initialState.isNewRecord);
    const [loading, setLoading] = useState(initialState.loading);

    useEffect(() => {
        if (entityIndex !== null) {
            resetForm();
            setIsNewRecord(false);
            setModalTitle('Edit Family Member Information');
            setItemData(entity);
            setIsNewRecord(false);
            loadData();
        }
        else {
            resetForm();
            setModalTitle(initialState.modalTitle);
            setIsNewRecord(initialState.isNewRecord);
        }
    }, [entity, entityIndex, reloadForm])

    const loadData = (): void => {
        formRef.setFieldsValue({ ...entity });
    }

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
            age: Number(values.age)
        }
        setAddMoreItemList(prevState => {
            const itemData = { ...payload };
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
            age: Number(values.age)
        }
        setAddMoreItemList(prevState => {
            prevState[entityIndex] = { ...prevState[entityIndex], ...payload }
            return [...prevState];
        });

        handleCallbackFunc(null, 'hideForm');
        setLoading(false);
        setIsSubmitting(false);
    }

    return (
        <ModalForm
            modalWidth={880}
            loading={loading}
            isNewRecord={isNewRecord}
            itemData={itemData}
            modalTitle={modalTitle}
            isSubmitting={isSubmitting}
            isShowForm={isShowForm}
            formRef={formRef}
            component={FamilyMemberInformationForm}
            initialValues={initialValues}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleSubmitFailed={handleSubmitFailed}
            handleCallbackFunc={handleCallbackFunc}
        />
    );
}

export default React.memo(FamilyMemberInformationFormController);
