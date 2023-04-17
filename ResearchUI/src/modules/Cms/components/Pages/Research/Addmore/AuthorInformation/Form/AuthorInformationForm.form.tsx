import React, { FC, Fragment } from 'react'
import { Form, Input, Row, Col, Select} from 'antd';
import { useTranslation } from "react-i18next";
import { rules } from '../../../../../../../../components/Validation/Form.validate';
import {useAttachmentTypeLookup} from "../../../../../../../../hooks/lookups/useAttachmentTypeLookup";
import UploadFile from "../../../../../../../../components/Upload/UploadFile";

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

const AddOrEditForm: FC<any> = props => {
    const {t,i18n} = useTranslation()
    const lang = i18n.language  || 'en';
    const { Option } = Select;
    const { TextArea } = Input;
    const { formRef, initialValues, itemData, handleChange, fileUpload, setFileUpload, handleSubmit, handleSubmitFailed } = props;
    const { loadingAttachmentTypeLookupList, attachmentTypeLookupList } = useAttachmentTypeLookup();

    return (
        <Fragment>
            <div className="form-page-content form-page-content-authorInformation">
                <Form
                    {...formItemLayout}
                    form={formRef}
                    name="authorInformationForm"
                    scrollToFirstError={true}
                    initialValues={initialValues}
                    onValuesChange={handleChange}
                    onFinish={handleSubmit}
                    onFinishFailed={handleSubmitFailed}
                >
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Form.Item label={t("Author Type")} name="author_type">
                                   <Select 
                                        placeholder="-- Select --"
                                    >
                                        <Option value={"Main Author"}>Main Author</Option>
                                        <Option value={"Corresponding Author"}>Corresponding Author</Option>
                                        <Option value={"Co Author"}>Co Author</Option>
                                    </Select>
                            </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label={t("Author Name")} name="author_name">
                            <Input />
                        </Form.Item>                            
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label={t("E-mail")} name="email">
                            <Input />
                        </Form.Item>                            
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label={t("Institution")} name="institution">
                            <Input />
                        </Form.Item>                            
                    </Col>
                </Row>
            </Form>
        </div>
        </Fragment >
    );
}
export default React.memo(AddOrEditForm);