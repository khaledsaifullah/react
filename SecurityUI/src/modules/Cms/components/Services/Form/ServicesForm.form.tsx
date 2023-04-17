import React, { FC, Fragment } from "react";
import { Form, Input, Row, Col, Select, DatePicker, Checkbox, Radio } from "antd";
import { EnumUtils } from "../../../../../utils";
import { StatusEnum, YesNoEnum } from "../../../../../utils/enums";
import { rules } from "./ServicesForm.validate";
import { useTranslation } from "react-i18next";
import { CONSTANT_COMMON } from "../../../../../constants";
import UploadFile from "../../../../../components/Upload/UploadFile";
import UploadImage from "../../../../../components/Upload/UploadImage";
import { nstFellowshipGrant, scienceBottol } from "../../../../../assets/images/pages/home";
import { useLang } from "../../../../../hooks/useLang";
import { useComponentList } from "../../../../../hooks/lists/useComponentList";
import { useSeekerLookup } from "../../../../../hooks/lookups/useSeekerLookup";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const AddOrEditForm: FC<any> = (props) => {
  const { Option } = Select;
  const { TextArea } = Input;
  const { lang } = useLang();
  const { t } = useTranslation();
  const { loadingComponentList, activeComponentList } = useComponentList();
  const { loadingSeekerLookupList, seekerLookupList } = useSeekerLookup();
  const {
    formRef,
    initialValues,
    handleChange,
    handleSubmit,
    handleSubmitFailed,
    itemData,
    fileListImage,
    setfileListImage,
    organizationList
  } = props;
  return (
    <Fragment>
      <div className="form-page-content form-page-content-page">
        <Form
          {...formItemLayout}
          form={formRef}
          name="pageForm"
          scrollToFirstError={true}
          initialValues={initialValues}
          onValuesChange={handleChange}
          onFinish={handleSubmit}
          onFinishFailed={handleSubmitFailed}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} md={24} lg={8} xl={8}>
              <Form.Item label={t("Title (In English)")} name="title_en" rules={rules.title}>
                <Input />
              </Form.Item>
              <Form.Item label={t("Title (In Bangla)")} name="title_bn"  >
                <Input />
              </Form.Item>
              <Form.Item label={t("Slug")} name="url">
                <Input />
              </Form.Item>
              <Form.Item
                label={t("Instructions English")}
                name="instructions_en"
              >
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
              </Form.Item>
              <Form.Item label={t("Description")} name="description">
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
              </Form.Item>
              <Form.Item
                label={t("Fee And Payment Method English")}
                name="fee_and_payment_method_en"
              >
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
              </Form.Item>
              <Form.Item
                label={t("Fee And Payment Method Bangla")}
                name="fee_and_payment_method_bn"
              >
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
              </Form.Item>
              <Form.Item label="Status" name="status">
                <Select placeholder={"--" + t("Select") + "--"}>
                  {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                    <Option key={`status-${index}`} value={StatusEnum[key]}>
                      {t(key)}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label={t("Sort Order")} name="sort_order">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8} xl={8}>
              <Form.Item label={t("Icon")} name="icon">
                <Select placeholder={"--" + t("Select") + "--"}>
                  <Option key={`icon-nstFellowshipGrant`} value={"nst-fellowship-grant.png"}>
                    <img src={nstFellowshipGrant} alt="icon" height={20} />{"nst Fellowship Grant"}
                  </Option>
                  <Option key={`icon-scienceBottol`} value={"science-bottol.png"}>
                    <img src={scienceBottol} alt="icon" height={20} />{"science Bottol"}
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item label={t("Image")} name="image" help={"Allow File: jpg, jpeg, png. Max Size: 200KB."}>
                <UploadImage
                  imageId={itemData.image}
                  imageList={fileListImage}
                  setImageList={setfileListImage}
                />
              </Form.Item>
              <Form.Item
                label={t("Instructions Bangla")}
                name="instructions_bn"
              >
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
              </Form.Item>
              <Form.Item
                label={t("Required Documents English")}
                name="required_documents_en"
              >
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
              </Form.Item>
              <Form.Item
                label={t("Required Documents Bangla")}
                name="required_documents_bn"
              >
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
              </Form.Item>
              <Form.Item label={t("Component")} name="component_ids">
                <Radio.Group>
                  <ul>
                    {activeComponentList.map((item, index) => (
                      <li key={`component-${index}`}><Radio key={`comp-option-${index}`} value={item?.id}>{lang === 'en' ? item?.name_en : item?.name_bn}</Radio></li>
                  	))}
                  </ul>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8} xl={8}>
              <Form.Item
                label={t("Is grab services quick")}
                name="is_grab_services_quick"
              >
                <Select placeholder="Select">
                  {EnumUtils.getEnumKeys(YesNoEnum).map((key, index) => (
                    <Option key={`sms-notification-${index}`} value={YesNoEnum[key].toString()}>{key}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label={t("Delivery Deadline English")}
                name="delivery_deadline"
              >
                <DatePicker
                  format={CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT}
                />
              </Form.Item>

              <Form.Item label={t("Organization")} name="organization_ids" >
                <Checkbox.Group  >
                  <ul>
                    {
                      organizationList && organizationList.map((item, index) => (
                        <li key={`organization-${index}`}>
                          <Checkbox key={`orgOption-${index}`} value={item?.id}>{lang === 'en' ? item?.name_en : item?.name_bn}</Checkbox>
                        </li>
                      ))
                    }
                  </ul>
                </Checkbox.Group>
              </Form.Item>
              <Form.Item label={t("Seeker")} name="seeker_ids">
                <Checkbox.Group >
                <ul>
                    {
                      seekerLookupList && seekerLookupList.map((item, index) => (
                        <li key={`seeker-${index}`}>
                          <Checkbox key={`seekerOption-${index}`} value={item?.id}>{lang === 'en' ? item?.value_en : item?.value_bn}</Checkbox>
                        </li>
                      ))
                    }
                  </ul>
                </Checkbox.Group>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </Fragment >
  );
};
export default React.memo(AddOrEditForm);
