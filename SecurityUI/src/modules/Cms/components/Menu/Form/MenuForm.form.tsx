import React, { FC, Fragment } from "react";
import { Form, Input, Row, Col, Select } from "antd";
import { EnumUtils } from "../../../../../utils";
import { StatusEnum } from "../../../../../utils/enums";
import { rules } from "./MenuForm.validate";
import { useTranslation } from "react-i18next";
import UploadFile from "../../../../../components/Upload/UploadFile";

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
    itemData,
    fileListImage,
    setfileListImage,
    fileListIcon,
    setFileListIcon
  } = props;
  return (
    <Fragment>
      <div className="form-page-content form-page-content-menu">
        <Form
          {...formItemLayout}
          form={formRef}
          name="menuForm"
          scrollToFirstError={true}
          initialValues={initialValues}
          onValuesChange={handleChange}
          onFinish={handleSubmit}
          onFinishFailed={handleSubmitFailed}
        >
          <Row>
            <Col xs={24} md={24}>
              <Form.Item label={t("Title (In English")} name="title_en" rules={rules.title}>
                <Input />
              </Form.Item>
              <Form.Item label={t("Title (In Bangla)")} name="title_bn" >
                <Input />
              </Form.Item>
              <Form.Item
                label={t("Parant ID")}
                name="parent_id"
                rules={rules.title}
              >
                <Input />
              </Form.Item>
              <Form.Item label={t("Slug")} name="slug">
                <Input />
              </Form.Item>
              <Form.Item label={t("Url")} name="url">
                <Input />
              </Form.Item>
              <Form.Item label={t("Icon")} name="icon" help={"Allow File: jpg, jpeg, png. Max Size: 200KB."} >
                <UploadFile
                  fileId={itemData.icon}
                  fileList={fileListIcon}
                  setFileList={setFileListIcon}
                />
              </Form.Item>
              <Form.Item label={t("Image")} name="image" help={"Allow File: jpg, jpeg, png. Max Size: 200KB."}>
                <UploadFile
                  fileId={itemData.image}
                  fileList={fileListImage}
                  setFileList={setfileListImage}
                />
              </Form.Item>
              <Form.Item label={t("CSS Class")} name="css_class">
                <Input />
              </Form.Item>
              <Form.Item label={t("Browser Nav")} name="browser_nav">
                <Input />
              </Form.Item>
              <Form.Item label={t("Parameters")} name="params">
                <TextArea autoSize={{ minRows: 2, maxRows: 3 }} />
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
