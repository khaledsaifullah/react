import React, { FC, useEffect, useState } from "react";
import { DateTimeUtils } from "../../../../../../utils";
import PageFormDrawer from "./PageForm.drawer";
import { useForm } from "../../../../../../hooks/useForm";
import { Message } from "../../../../../../utils";
import { PageApi } from "../../../../../../api";
import { useTranslation } from "react-i18next";
import "../../../../styles/Cms.module.form.scss";
import "./PageForm.style.scss";

const initialState = {
  modalTitle: "Create Page",
  itemData: {},
  fields: {
    title_en: null,
    title_bn: null,
    slug: null,
    excerpt: null,
    content: null,
    image: null,
    params: null,
    publish_start: null,
    publish_end: null,
    hits: null,
    content_type: null,
    sort_order: null,
    status: 1,
  },
  isNewRecord: true,
  loading: false,
};

const PageFormController: FC<any> = (props) => {
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
  const [fileListImage, setfileListImage] = useState<any[]>([]);

  useEffect(() => {
    if (entityId && isShowForm) {
      setIsNewRecord(false);
      setModalTitle("Edit Page");
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
      PageApi.getById(entityId)
        .then((res) => {
          setItemData(res.data);
          const initFormDta = {
            title_en: res.data.title_en,
            title_bn: res.data.title_bn,
            slug: res.data.slug,
            excerpt: res.data.excerpt,
            content: res.data.content,
            image: res.data.image,
            params: res.data.params,
            publish_start: res.data.publish_start
              ? DateTimeUtils.convertStringToDate(res.data.publish_start)
              : null,
            publish_end: res.data.publish_end
              ? DateTimeUtils.convertStringToDate(res.data.publish_end)
              : null,
            hits: res.data.hits,
            sort_order: res.data.sort_order,
            status: res.data.status,
            content_type: res.data.content_type,
          };
          console.log(initFormDta);

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
        slug: values.slug,
        excerpt: values.excerpt,
        content: values.content,
        image: fileListImage.map(item => item.file_id).join(','),
        params: values.params,
        publish_start: values.publish_start,
        publish_end: values.publish_end,
        hits: values.hits,
        sort_order: values.sort_order,
        content_type: "PAGE",
        status: values.status,
      };
      PageApi.create(payload)
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
        slug: values.slug,
        excerpt: values.excerpt,
        content: values.content,
        image: fileListImage.map(item => item.file_id).join(','),
        params: values.params,
        publish_start: values.publish_start,
        publish_end: values.publish_end,
        hits: values.hits,
        sort_order: values.sort_order,
        status: values.status,
        content_type: "PAGE",
      };
      PageApi.update(entityId, payload)
        .then((res) => {
          Message.success(t("Page update successfully."));
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
      <PageFormDrawer
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
        fileListImage={fileListImage}
        setfileListImage={setfileListImage}

      />
    </div>
  );
};

export default React.memo(PageFormController);
