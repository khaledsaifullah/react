import React, { FC, useEffect, useState } from "react";
import MenuFormDrawer from "./MenuForm.drawer";
import { useForm } from "../../../../../hooks/useForm";
import { Message } from "../../../../../utils";
import { MenuApi } from "../../../../../api";
import { useTranslation } from "react-i18next";
import "../../../styles/Cms.module.form.scss";
import "./MenuForm.style.scss";

const initialState = {
  modalTitle: "Create Menu",
  itemData: {},
  fields: {
    title_en: null,
    title_bn: null,
    parent_id: null,
    slug: null,
    status: 1,
    url: null,
    icon: null,
    img: null,
    css_class: null,
    params: null,
    browser_nav: null,
    sort_order: null,
  },
  isNewRecord: true,
  loading: false,
};

const MenuFormController: FC<any> = (props) => {
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
  const [fileListIcon, setFileListIcon] = useState<any[]>([]);
  const [fileListImage, setfileListImage] = useState<any[]>([]);

  useEffect(() => {
    if (entityId && isShowForm) {
      setIsNewRecord(false);
      setModalTitle("Edit Menu");
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
      MenuApi.getById(entityId)
        .then((res) => {
          setItemData(res.data);
          const initFormDta = {
            title_en: res.data.title_en,
            title_bn: res.data.title_bn,
            parent_id: res.data.parent_id,
            slug: res.data.slug,
            status: res.data.status,
            url: res.data.url,
            icon: res.data.icon,
            img: res.data.img,
            css_class: res.data.css_class,
            params: res.data.params,
            browser_nav: res.data.browser_nav,
            sort_order: res.data.sort_order,
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
        status: values.status,
        url: values.url,
        icon: fileListIcon.map(item => item.file_id).join(','),
        image: fileListImage.map(item => item.file_id).join(','),
        css_class: values.css_class,
        params: values.params,
        browser_nav: values.browser_nav,
        sort_order: values.sort_order,
      };
      MenuApi.create(payload)
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
        status: values.status,
        url: values.url,
        icon: fileListIcon.map(item => item.file_id).join(','),
        image: fileListImage.map(item => item.file_id).join(','),
        css_class: values.css_class,
        params: values.params,
        browser_nav: values.browser_nav,
        sort_order: values.sort_order,
      };
      MenuApi.update(entityId, payload)
        .then((res) => {
          Message.success(t("Menu update successfully."));
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
    <div className="form-page-container form-page-container-menu">
      <MenuFormDrawer
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
        fileListIcon={fileListIcon}
        setFileListIcon={setFileListIcon}
        fileListImage={fileListImage}
        setfileListImage={setfileListImage}
      />

    </div>
  );
};

export default React.memo(MenuFormController);
