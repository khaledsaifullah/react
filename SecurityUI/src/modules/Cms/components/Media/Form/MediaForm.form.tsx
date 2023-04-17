import React, { FC, Fragment } from "react";
import { Form, Input, Row, Col, Select, DatePicker } from "antd";
import { EnumUtils } from "../../../../../utils";
import { StatusEnum } from "../../../../../utils/enums";
import { rules } from "./MediaForm.validate";
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
            <Col xs={24} md={24}>
              <Form.Item label={t("Title (In English)")} name="title_en" rules={rules.title}>
                <Input />
              </Form.Item>
              <Form.Item label={t("Title (In Bangla)")} name="title_bn" >
                <Input />
              </Form.Item>
              <Form.Item label={t("Url")} name="url">
                <Input />
              </Form.Item>
              <Form.Item label={t("Alternative Text")} name="alt_text">
                <Input />
              </Form.Item>
              <Form.Item label={t("Sort Order")} name="sort_order">
                <Input />
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
            </Col>
          </Row>
        </Form>
      </div>
    </Fragment>
  );
};
export default React.memo(AddOrEditForm);
