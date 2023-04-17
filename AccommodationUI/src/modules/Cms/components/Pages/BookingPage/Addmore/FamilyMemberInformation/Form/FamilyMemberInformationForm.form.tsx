import React, { FC, Fragment } from 'react'
import { Form, Input, Row, Col, Select, DatePicker } from 'antd';
import { useTranslation } from "react-i18next";
import { rules } from '../../../../../../../../components/Validation/Form.validate';
import { CONSTANT_COMMON } from '../../../../../../../../constants';

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

const FamilyMemberInformationForm: FC<any> = props => {
    const { TextArea } = Input;
    const { t, i18n } = useTranslation()
    const lang = i18n.language || 'en';

    const { formRef, initialValues, itemData, handleChange, fileUpload, setFileUpload, handleSubmit, handleSubmitFailed } = props;

    return (
        <Fragment>
            <Form
                {...formItemLayout}
                form={formRef}
                name="familyMemberInformationForm"
                scrollToFirstError={true}
                initialValues={initialValues}
                onValuesChange={handleChange}
                onFinish={handleSubmit}
                onFinishFailed={handleSubmitFailed}
                labelAlign="left"
            >
                <Row gutter={[16, 0]}>
                    <Col xs={24} md={8}>
                        <Form.Item
                            label={t("Member Name")}
                            name="member_name"
                            rules={rules.requiredMaxCharacter255}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item
                            label={t("Age")}
                            name="age"
                            rules={rules.requiredMaxCharacter255}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item
                            label={t("Relation")}
                            name="relation"
                            rules={rules.maxCharacter500}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24}>
                        <Form.Item
                            label={t("Description of Last Work Place Allotted Residence")}
                            name="description"
                            rules={rules.requiredMaxCharacter500}
                        >
                            <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label={t("Last Work Place Allotted Residence Discharge Date")}
                            name="discharge_date"
                            rules={rules.required}
                        >
                            <DatePicker format={CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label={t("Current Residence (Organization Residence No./Own Arrangement)")}
                            name="current_residence"
                            rules={rules.requiredMaxCharacter255}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Fragment >
    );
}
export default React.memo(FamilyMemberInformationForm);
