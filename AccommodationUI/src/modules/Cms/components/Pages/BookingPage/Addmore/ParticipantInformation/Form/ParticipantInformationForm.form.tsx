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

const ParticipantInformationForm: FC<any> = props => {
    const { TextArea } = Input;
    const { t, i18n } = useTranslation()
    const lang = i18n.language || 'en';

    const { formRef, initialValues, itemData, handleChange, fileUpload, setFileUpload, handleSubmit, handleSubmitFailed } = props;

    return (
        <Fragment>
            <Form
                {...formItemLayout}
                form={formRef}
                name="participantInformationForm"
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
                            label={t("name")}
                            name="name"
                            rules={rules.requiredMaxCharacter255}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item
                            label={t("Designation")}
                            name="designation"
                            rules={rules.maxCharacter255}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item
                            label={t("Mobile No")}
                            name="mobile_no"
                            rules={rules.requiredMobile}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Fragment >
    );
}
export default React.memo(ParticipantInformationForm);
