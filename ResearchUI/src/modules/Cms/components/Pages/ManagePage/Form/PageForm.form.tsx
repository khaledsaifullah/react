import React, { FC, Fragment } from "react";
import { Form, Input, Row, Col, Select, DatePicker } from "antd";
import { EnumUtils } from "../../../../../../utils";
import { StatusEnum } from "../../../../../../utils/enums";
import { rules } from "./PageForm.validate";
import { useTranslation } from "react-i18next";
import { CONSTANT_COMMON } from "../../../../../../constants";
import UploadFile from "../../../../../../components/Upload/UploadFile";

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
    fileListImage,
    setfileListImage,
    itemData
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
          <Row>
            <Col xs={24} md={24}>
              <Form.Item label={t("Title (In English)")} name="title_en" rules={rules.title}>
                <Input />
              </Form.Item>
              <Form.Item label={t("Title (In Bangla)")} name="title_bn" >
                <Input />
              </Form.Item>
              <Form.Item label={t("Slug")} name="slug" rules={rules.title}>
                <Input />
              </Form.Item>
              <Form.Item label={t("Excerpt")} name="excerpt">
                <Input />
              </Form.Item>

              <Form.Item
                label={t("Content")}
                name="content"
                rules={rules.title}
              >
                <Input />
              </Form.Item>

              <Form.Item label={t("Image")} name="image" help={"Allow File: jpg, jpeg, png. Max Size: 200KB."}>
                <UploadFile
                  fileId={itemData.image}
                  fileList={fileListImage}
                  setFileList={setfileListImage}
                />
              </Form.Item>
              <Form.Item label={t("Parameters")} name="params">
                <Input />
              </Form.Item>
              <Form.Item label={t("Publish Start")} name="publish_start">
                <DatePicker format={CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT} />
              </Form.Item>
              <Form.Item label={t("Publish End")} name="publish_end">
                <DatePicker format={CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT} />
              </Form.Item>
              <Form.Item label={t("Hits")} name="hits">
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
