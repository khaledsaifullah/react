import React, { FC, useEffect, useState } from "react";
import { DateTimeUtils } from "../../../../../utils";
import CategoriesFormDrawer from "./CategoriesForm.drawer";
import { useForm } from "../../../../../hooks/useForm";
import { Message } from "../../../../../utils";
import { CategoriesApi } from "../../../../../api";
import { useTranslation } from "react-i18next";
import "../../../styles/Cms.module.form.scss";
import "./CategoriesForm.style.scss";

const initialState = {
  modalTitle: "Create Categories",
  itemData: {},
  fields: {
    title_en: null,
    title_bn: null,
    parent_id: null,
    slug: null,
    description: null,
    image: null,
    thumbnail: null,
    path: null,
    level: null,
    children_count: null,
    hits: null,
    params: null,
    sort_order: null,
    status: null,
  },
  isNewRecord: true,
  loading: false,
};

const CategoriesFormController: FC<any> = (props) => {
  const { t } = useTranslation();
  const { entityId, reloadForm, isShowForm, handleCallbackFunc } = props;
  const {
    formRef,
    initialValues,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    handleSubmitFailed,
    resetForm,
  } = useForm(initialState.fields);

  const [modalTitle, setModalTitle] = useState(initialState.modalTitle);
  const [itemData, setItemData] = useState(initialState.itemData);
  const [isNewRecord, setIsNewRecord] = useState(initialState.isNewRecord);
  const [loading, setLoading] = useState(initialState.loading);

  useEffect(() => {
    if (entityId && isShowForm) {
      setIsNewRecord(false);
      setModalTitle("Edit Categories");
      resetForm();
      loadData();
    } else {
      resetForm();
      setModalTitle(initialState.modalTitle);
      setIsNewRecord(initialState.isNewRecord);
    }
  }, [entityId, reloadForm]);

  const loadData = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      CategoriesApi.getById(entityId)
        .then((res) => {
          setItemData(res.data);
          const initFormDta = {
            title_en: res.data.title_en,
            title_bn: res.data.title_bn,
            parent_id: res.data.parent_id,
            slug: res.data.slug,
            description: res.data.description,
            image: res.data.image,
            thumbnail: res.data.thumbnail,
            path: res.data.path,
            level: res.data.level,
            children_count: res.data.children_count,
            hits: res.data.hits,
            params: res.data.params,
            sort_order: res.data.sort_order,
            status: res.data.status,
          };
          handleChange(initFormDta);
          formRef.setFieldsValue(initFormDta);
          setLoading(false);
          resolve(res.data);
        })
        .catch((err) => {
          Message.error("A network error occurred. Please try again later.");
          setLoading(false);
          reject(err);
        });
    });
  };

  const handleSubmit = (values: any): void => {
    if (entityId) {
      handleUpdate(values);
    } else {
      handleCreate(values);
    }
  };

  const handleCreate = (values: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      setIsSubmitting(true);
      const payload = {
        title_en: values.title_en,
        title_bn: values.title_bn,
        parent_id: values.parent_id,
        slug: values.slug,
        description: values.description,
        image: values.image,
        thumbnail: values.thumbnail,
        path: values.path,
        level: values.level,
        children_count: values.children_count,
        hits: values.hits,
        params: values.params,
        sort_order: values.sort_order,
        status: values.status,
      };
      CategoriesApi.create(payload)
        .then((res) => {
          Message.success(t("The operation performed successfully."));
          handleCallbackFunc(null, "hideForm");
          handleCallbackFunc(null, "reloadListing");
          setLoading(false);
          setIsSubmitting(false);
          resolve(res);
        })
        .catch((err) => {
          Message.error("A network error occurred. Please try again later.");
          setLoading(false);
          setIsSubmitting(false);
          reject(err);
        });
    });
  };

  const handleUpdate = (values: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      setIsSubmitting(true);
      const payload = {
        title_en: values.title_en,
        title_bn: values.title_bn,
        parent_id: values.parent_id,
        slug: values.slug,
        description: values.description,
        image: values.image,
        thumbnail: values.thumbnail,
        path: values.path,
        level: values.level,
        children_count: values.children_count,
        hits: values.hits,
        params: values.params,
        sort_order: values.sort_order,
        status: values.status,
      };
      CategoriesApi.update(entityId, payload)
        .then((res) => {
          Message.success(t("Categories update successfully."));
          handleCallbackFunc(null, "hideForm");
          handleCallbackFunc(null, "updateListItem", entityId, res.data);
          handleCallbackFunc(null, "reloadView");
          setLoading(false);
          setIsSubmitting(false);
          resolve(res);
        })
        .catch((err) => {
          Message.error("A network error occurred. Please try again later.");
          setLoading(false);
          setIsSubmitting(false);
          reject(err);
        });
    });
  };

  return (
    <div className="form-page-container form-page-container-page">
      <CategoriesFormDrawer
        loading={loading}
        isNewRecord={isNewRecord}
        itemData={itemData}
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
};

export default React.memo(CategoriesFormController);
