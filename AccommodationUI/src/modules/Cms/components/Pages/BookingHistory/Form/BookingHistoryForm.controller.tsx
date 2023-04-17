import React, { FC, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from '../../../../../../hooks/useForm';
import { Message } from "../../../../../../utils";
import { FackApi } from "../../../../../../api";
import { useTranslation } from "react-i18next";
import AddOrEditForm from "./BookingHistoryForm.form";
import { useLang } from "../../../../../../hooks/useLang";
import ContextJSX from '../../../../../../components/ContextJsx';
import { BodyClassName } from '../../../../../../components/BodyClassName/BodyClassName';
import MetaTag from '../../../../../../components/MetaTag';
import Breadcrumb from '../../../../../../components/Breadcrumb';

const initialState = {
    pageTitle: 'Create BookingPage',
    itemData: {},
    fields: {
        title: null,
        description: null,
        status: 1,
    },
    isNewRecord: true,
    loading: false,
}

const BookingHistoryFormController: FC<any> = props => {
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
            setPageTitle('Edit BookingPage');
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
            FackApi.getById(entityId)
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
            FackApi.create(payload)
                .then(res => {
                    Message.success(t('The operation performed successfully.'));
                    navigate(getAdminLangUrl(lang, '/setting/automation/bookingPage/list'));
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
            FackApi.update(entityId, payload)
                .then(res => {
                    Message.success(t('BookingPage update successfully.'));
                    navigate(getAdminLangUrl(lang, '/setting/automation/bookingPage/list'));
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
        <>
            <ContextJSX>
                <BodyClassName className={'component-grant'} />
                <MetaTag>
                    <MetaTag.Title>{t('Booking Details')}</MetaTag.Title>
                </MetaTag>
                <Breadcrumb>
                    <Breadcrumb.Item>{t('OSAM')}</Breadcrumb.Item>
                    <Breadcrumb.Item>{t('Booking Details')}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>
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
        </>
    );
}

export default React.memo(BookingHistoryFormController);
