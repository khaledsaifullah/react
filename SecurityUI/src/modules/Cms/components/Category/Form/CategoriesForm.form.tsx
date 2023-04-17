import React, { FC, Fragment } from "react";
import { Form, Input, Row, Col, Select, DatePicker } from "antd";
import { EnumUtils } from "../../../../../utils";
import { StatusEnum } from "../../../../../utils/enums";
import { rules } from "./CategoriesForm.validate";
import { useTranslation } from "react-i18next";
import { CONSTANT_COMMON } from "../../../../../constants";

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
  const { t } = useTranslation();
  const {
    formRef,
    initialValues,
    handleChange,
    handleSubmit,
    handleSubmitFailed,
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
            <Col xs={24} md={24} lg={12} xl={12}>
              <Form.Item label={t("Title (In English)")} name="title_en" rules={rules.title}>
                <Input />
              </Form.Item>
              <Form.Item label={t("Title (In Bangla)")} name="title_bn" >
                <Input />
              </Form.Item>
              <Form.Item label={t("Parent ID")} name="parent_id">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={12} xl={12}>
              <Form.Item label={t("Slug")} name="slug">
                <Input />
              </Form.Item>
              <Form.Item label={t("Description")} name="description">
                <TextArea autoSize={{ minRows: 2, maxRows: 4 }} />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={12} xl={12}>
              <Form.Item label={t("Image")} name="image">
                <Input />
              </Form.Item>
              <Form.Item label={t("Thumbnail")} name="thumbnail">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={12} xl={12}>
              <Form.Item label={t("Path")} name="path">
                <Input />
              </Form.Item>
              <Form.Item label={t("Level")} name="level">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={12} xl={12}>
              <Form.Item label={t("Children Count")} name="children_count">
                <Input />
              </Form.Item>
              <Form.Item label={t("Hits")} name="hits">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={12} xl={12}>
              <Form.Item label={t("Parameters")} name="params">
                <Input />
              </Form.Item>
              <Form.Item label={t("Sort Order")} name="sort_order">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={12} xl={12}>
              <Form.Item label="Status" name="status">
                <Select placeholder={"--" + t("Select") + "--"}>
                  {EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                    <Option key={`status-${index}`} value={StatusEnum[key]}>
                      {t(key)}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </Fragment>
  );
};
export default React.memo(AddOrEditForm);
