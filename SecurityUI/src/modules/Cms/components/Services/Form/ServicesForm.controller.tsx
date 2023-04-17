import React, { FC, useEffect, useState } from "react";
import { DateTimeUtils } from "../../../../../utils";
import ServicesFormDrawer from "./ServicesForm.drawer";
import { useForm } from "../../../../../hooks/useForm";
import { Message } from "../../../../../utils";
import { OrganizationApi, ServicesApi } from "../../../../../api";
import { useTranslation } from "react-i18next";
import "../../../styles/Cms.module.form.scss";
import "./ServicesForm.style.scss";
import { CONSTANT_COMMON } from "../../../../../constants";

const initialState = {
  modalTitle: "Create Services",
  itemData: {},
  fields: {
    title_en: null,
    title_bn: null,
    url: null,
    description: null,
    icon: null,
    image: null,
    is_grab_services_quick: null,
    instructions_en: null,
    instructions_bn: null,
    required_documents_en: null,
    required_documents_bn: null,
    fee_and_payment_method_en: null,
    fee_and_payment_method_bn: null,
    delivery_deadline: null,
    delivery_deadline_bn: null,
    component_ids: [],
    organization_ids: [],
    seeker_ids: null,
    section_ids: null,
    sort_order: null,
    status: null,
  },
  isNewRecord: true,
  loading: false,
};

const ServicesFormController: FC<any> = (props) => {
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
  const [organizationList, setOrganizationList] = useState<any>();

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    await loadOrganizations();
  }

  useEffect(() => {
    if (entityId && isShowForm) {
      setIsNewRecord(false);
      setModalTitle("Edit Services");
      resetForm();
      loadData();
    } else {
      resetForm();
      setModalTitle(initialState.modalTitle);
      setIsNewRecord(initialState.isNewRecord);
    }
  }, [entityId, reloadForm]);

  const loadOrganizations = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      // setLoading(true);
      OrganizationApi.list()
        .then(res => {
          setOrganizationList(res.data.results)
          // setLoading(false);
          resolve(res);
        })
        .catch(err => {
          console.error("error", err);
          Message.error('A network error occurred. Please try again later.');
          // setLoading(false);
          reject(err);
        });
    });
  }
  const loadData = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      ServicesApi.getById(entityId)
        .then((res) => {
          setItemData(res.data);
          const initFormDta = {
            title_en: res.data.title_en,
            title_bn: res.data.title_bn,
            url: res.data.url,
            description: res.data.description,
            icon: res.data.icon,
            image: res.data.image,
            is_grab_services_quick: res.data.is_grab_services_quick,
            instructions_en: res.data.instructions_en,
            instructions_bn: res.data.instructions_bn,
            required_documents_en: res.data.required_documents_en,
            required_documents_bn: res.data.required_documents_bn,
            fee_and_payment_method_en: res.data.fee_and_payment_method_en,
            fee_and_payment_method_bn: res.data.fee_and_payment_method_bn,
            delivery_deadline: res.data.delivery_deadline ? DateTimeUtils.convertStringToDate(res.data.delivery_deadline) : null,
            component_ids: Number(res.data.component_ids),
            organization_ids: res.data.organization_ids?.map(item => Number(item)),
            seeker_ids: res.data.seeker_ids?.map(item => Number(item)),
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
        url: values.url,
        description: values.description,
        icon: values.icon,
        image: fileListImage.map(item => item?.file_id).join(','),
        is_grab_services_quick: values.is_grab_services_quick,
        instructions_en: values.instructions_en,
        instructions_bn: values.instructions_bn,
        required_documents_en: values.required_documents_en,
        required_documents_bn: values.required_documents_bn,
        fee_and_payment_method_en: values.fee_and_payment_method_en,
        fee_and_payment_method_bn: values.fee_and_payment_method_bn,
        delivery_deadline: DateTimeUtils.formatDate(values.delivery_deadline, CONSTANT_COMMON.DATE_FORMAT_DATABASE),
        component_ids: values.component_ids,
        organization_ids: values.organization_ids,
        seeker_ids: values.seeker_ids,
        sort_order: values.sort_order,
        status: values.status,
      };
      console.log(payload);
      ServicesApi.create(payload)
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
        url: values.url,
        description: values.description,
        icon: values.icon,
        image: fileListImage.map(item => item?.file_id).join(','),
        is_grab_services_quick: values.is_grab_services_quick,
        instructions_en: values.instructions_en,
        instructions_bn: values.instructions_bn,
        required_documents_en: values.required_documents_en,
        required_documents_bn: values.required_documents_bn,
        fee_and_payment_method_en: values.fee_and_payment_method_en,
        fee_and_payment_method_bn: values.fee_and_payment_method_bn,
        delivery_deadline: DateTimeUtils.formatDate(values.delivery_deadline, CONSTANT_COMMON.DATE_FORMAT_DATABASE),
        component_ids: values.component_ids,
        organization_ids: values.organization_ids,
        seeker_ids: values.seeker_ids,
        sort_order: values.sort_order,
        status: values.status,
      };
      ServicesApi.update(entityId, payload)
        .then((res) => {
          Message.success(t("Services update successfully."));
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
      <ServicesFormDrawer
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
        organizationList={organizationList}
        fileListImage={fileListImage}
        setfileListImage={setfileListImage}
      />
    </div>
  );
};

export default React.memo(ServicesFormController);
