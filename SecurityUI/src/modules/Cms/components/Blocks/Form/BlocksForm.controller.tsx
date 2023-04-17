import React, { FC, useEffect, useState } from "react";
import BlocksFormDrawer from "./BlocksForm.drawer";
import { useForm } from "../../../../../hooks/useForm";
import { Message } from "../../../../../utils";
import { BlocksApi } from "../../../../../api";
import { useTranslation } from "react-i18next";
import "../../../styles/Cms.module.form.scss";
import "./BlocksForm.style.scss";

const initialState = {
  modalTitle: "Create Blocks",
  itemData: {},
  fields: {
    title_en: null,
    title_bn: null,
    indentifier: null,
    content: null,
    sort_order: null,
    status: 1,
  },
  isNewRecord: true,
  loading: false,
};

const BlocksFormController: FC<any> = (props) => {
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
      setModalTitle("Edit Blocks");
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
      BlocksApi.getById(entityId)
        .then((res) => {
          setItemData(res.data);
          const initFormDta = {
            title_en: res.data.title_en,
            title_bn: res.data.title_bn,
            indentifier: res.data.indentifier,
            content: res.data.content,
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
        indentifier: values.indentifier,
        content: values.content,
        sort_order: values.sort_order,
        status: values.status,
      };
      BlocksApi.create(payload)
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
        indentifier: values.indentifier,
        content: values.content,
        sort_order: values.sort_order,
        status: values.status,
      };
      BlocksApi.update(entityId, payload)
        .then((res) => {
          Message.success(t("Blocks update successfully."));
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
    <div className="form-page-container form-page-container-blocks">
      <BlocksFormDrawer
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

export default React.memo(BlocksFormController);
