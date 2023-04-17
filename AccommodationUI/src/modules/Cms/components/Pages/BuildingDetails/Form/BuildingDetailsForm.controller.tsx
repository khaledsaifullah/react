import React, { FC, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from '../../../../../../hooks/useForm';
import { Message } from "../../../../../../utils";
import { BuildingDetailsApi } from "../../../../../../api";
import { useTranslation } from "react-i18next";
import AddOrEditForm from "./BuildingDetailsForm.form";
import { useLang } from "../../../../../../hooks/useLang";

const initialState = {
    pageTitle: 'Create Building Details',
    itemData: {},
    fields: {
        title: null,
        description: null,
        status: 1,
    },
    isNewRecord: true,
    loading: false,
}

const BuildingDetailsFormController: FC<any> = props => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { entityId } = useParams();
    const { lang, getAdminLangUrl } = useLang();
    const { formRef, initialValues, isSubmitting, setIsSubmitting, handleChange, handleSubmitFailed, resetForm } = useForm(initialState.fields);

    const [pageTitle, setPageTitle] = useState(initialState.pageTitle);
    const [itemData, setItemData] = useState(initialState.itemData);
    const [isNewRecord, setIsNewRecord] = useState(initialState.isNewRecord);
    const [loading, setLoading] = useState(initialState.loading);

    useEffect(() => {
        if (entityId) {
            setIsNewRecord(false);
            setPageTitle('Edit Building Details');
            resetForm();
            loadData();
        }
        else {
            resetForm();
            setPageTitle(initialState.pageTitle);
            setIsNewRecord(initialState.isNewRecord);
        }
    }, [entityId])

    const loadData = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            BuildingDetailsApi.getById(entityId)
                .then(res => {
                    setItemData(res.data);
                    const initFormDta = {
                        title: res.data.title,
                        description: res.data.description,
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
                title: values.title,
                description: values.description,
                status: values.status,
            }
            BuildingDetailsApi.create(payload)
                .then(res => {
                    Message.success(t('The operation performed successfully.'));
                    navigate(getAdminLangUrl(lang, '/setting/automation/auditoriumPage/list'));
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
                title: values.title,
                description: values.description,
                status: values.status,
            }
            BuildingDetailsApi.update(entityId, payload)
                .then(res => {
                    Message.success(t('Building Details update successfully.'));
                    navigate(getAdminLangUrl(lang, '/setting/automation/auditoriumPage/list'));
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
        <div className="form-page-container form-page-container-building-details">
            <AddOrEditForm
                loading={loading}
                isNewRecord={isNewRecord}
                itemData={itemData}
                pageTitle={pageTitle}
                isSubmitting={isSubmitting}
                formRef={formRef}
                initialValues={initialValues}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleSubmitFailed={handleSubmitFailed}
            />
        </div>
    );
}

export default React.memo(BuildingDetailsFormController);
