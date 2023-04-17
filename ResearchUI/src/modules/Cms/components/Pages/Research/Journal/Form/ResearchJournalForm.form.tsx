import React, { FC, Fragment } from "react";
import { Form, Input, Row, Col, Select, DatePicker } from "antd";
import { EnumUtils } from "../../../../../../../utils";
import { StatusEnum } from "../../../../../../../utils/enums";
import { rules } from "../../../../../../../components/Validation/Form.validate";
import { useTranslation } from "react-i18next";
import UploadImage from "../../../../../../../components/Upload/UploadImage";
import AuthorInformationListController from "../../Addmore/AuthorInformation/List/AuthorInformationList.controller";
import "./ResearchJournalForm.style.scss"
import { CONSTANT_COMMON } from "../../../../../../../constants";
import UploadFile from "../../../../../../../components/Upload/UploadFile";
import UploadMultipleImage from "../../../../../../../components/Upload/UploadMultipleImage";
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

const ResearchJournalAddOrEditForm: FC<any> = (props) => {

  const {
    loading,
    applicationData,
    researchJournalListData,
    setResearchJournalListData,
fileUpload,
setFileUpload
  } = props

  const { Option } = Select;
  const { TextArea } = Input;
  const { t } = useTranslation();
  const {
    formRef,
    initialValues,
    handleChange,
    handleSubmit,
    itemData,
    imageList,
    setImageList,
    handleSubmitFailed,
  } = props;
  return (
    <Fragment>
      <div className="form-page-content form-page-content-giftType">
        <Form
          {...formItemLayout}
          form={formRef}
          name="researchJournalForm"
          scrollToFirstError={true}
          initialValues={initialValues}
          onValuesChange={handleChange}
          onFinish={handleSubmit}
          onFinishFailed={handleSubmitFailed}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} md={24}>
              <Form.Item label={t("Paper Title")} name="paper_title" >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <div className="author_information">Author Information</div>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={24}>
              <AuthorInformationListController
								loading={loading}
								itemData={applicationData}
								moreItemListData={researchJournalListData}
								setMoreItemListData={setResearchJournalListData}
							/>
            </Col>
          </Row>
          <Row gutter={[16,16]}>
            <Col xs={24} md={12}>
              <Form.Item label={t("Journal Name")} name="journal_name">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label={t("Publisher Name")} name="publisher_name" >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label={t("Publishing Country")} name="publishing_country">
                <Select 
                    placeholder="-- Select --"
                  >
                      <Option value={"Bangladesh"}>Bangladesh</Option>
                      <Option value={"India"}>India</Option>
                      <Option value={"Pakistan"}>Pakistan</Option>
                      <Option value={"England"}>England</Option>
                      <Option value={"America"}>America</Option>
                      <Option value={"Chin"}>Chin</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label={t("Volume No")} name="volume_no">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label={t("Page No")} name="page_no">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label={t("Year Of Publish")} name="published_year">
                <DatePicker format={CONSTANT_COMMON.DATE_PICKER_YEAR_FORMAT} picker="year" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label={t("Abstract")} name="abstract">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Form.Item label={t("Upload Manuscript")} name="upload_manuscript" help={"Allow File: .pdf,.doc Max Size: 200KB."}>
                <UploadFile
                  fileId={itemData.upload_manuscript}
                  fileList={fileUpload}
                  setFileList={setFileUpload}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label={t(" Related Image File")} name="upload_image" help={"Allow File: .jpg,.jpeg,.png Max Size: 200KB."}>
                <UploadMultipleImage
                    imageIds={itemData.upload_image} 
                    imageList={imageList}
                    setImageList={setImageList}                   
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Form.Item label={t("Submission Date")} name="submission_date">
                <DatePicker format={CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT}/>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>     
              <Form.Item label={t("Received Date By Editor")} name="received_date_by_editor">
                <DatePicker format={CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT}/>
              </Form.Item>  
            </Col>    
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Form.Item label={t("process_status")} name="process_status">
                <Input/>
              </Form.Item>   
            </Col>
            <Col xs={24} md={12}>  
              <Form.Item label={t("Reviewed By")} name="reviewed_by">
                <Input/>
              </Form.Item> 
            </Col> 
            <Col xs={24} md={12}>    
              <Form.Item label={t("Review Date")} name="review_date">
                <DatePicker format={CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT}/>
              </Form.Item>  
            </Col> 
            <Col xs={24} md={12}>   
              <Form.Item label={t("Review Comment")} name="review_comment">
                <Input/>
              </Form.Item>
            </Col>   
            <Col xs={24} md={12}>   
              <Form.Item label={t("Upload Modify Manuscript By Reviewer")} name="upload_modify_manuscript_by_reviewer">
                <Input/>
              </Form.Item>  
            </Col>     
          </Row>
        </Form>
      </div>
    </Fragment>
  );
};
export default React.memo(ResearchJournalAddOrEditForm);
