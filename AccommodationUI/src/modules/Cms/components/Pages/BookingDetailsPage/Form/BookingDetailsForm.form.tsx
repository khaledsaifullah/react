import React, { FC, Fragment } from 'react'
import { Form, Input, Row, Col, Select, Button } from 'antd';
import { EnumUtils } from "../../../../../../utils";
import { StatusEnum } from "../../../../../../utils/enums";
import { rules } from '../../../../../../components/Validation/Form.validate';
import { useTranslation } from "react-i18next";
import CancelLink from "../../../../../../components/Link/CancelLink";
import "./BookingDetailsForm.style.scss";

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
    const { Option } = Select;
    const { TextArea } = Input;
    const { t } = useTranslation();
    const { formRef, loading, pageTitle, initialValues, isSubmitting, handleChange, handleSubmit, handleSubmitFailed } = props;
    return (
        <Fragment>
            <div className="form-page-content form-page-content-bookingPage">
                <h1>{pageTitle}</h1>
                <Form
                    {...formItemLayout}
                    form={formRef}
                    name="bookingPageForm"
                    scrollToFirstError={true}
                    initialValues={initialValues}
                    onValuesChange={handleChange}
                    onFinish={handleSubmit}
                    onFinishFailed={handleSubmitFailed}
                >
                    <Row>
                        <Col xs={24} md={24}>
                            <Form.Item
                                label={t("Title")}
                                name="title"
                                rules={rules.required}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label={t("Description")}
                                name="description"
                            >
                                <TextArea
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Status"
                                name="status"
                            >
                                <Select placeholder={"--" + t('Select') + "--"} >
                                    {
                                        EnumUtils.getEnumKeys(StatusEnum).map((key, index) => (
                                            <Option key={`status-${index}`} value={StatusEnum[key]}>{t(key)}</Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24} md={24}>
                            <div className="btn-group">
                                <div className="btn-item btn-item-submit">
                                    <Button type="primary" htmlType="submit" disabled={isSubmitting} loading={loading}>
                                        Save
                                    </Button>
                                </div>
                                <div className="btn-item btn-item-cancel">
                                    <CancelLink btnText={"Cancel"} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Fragment >
    );
}
export default React.memo(AddOrEditForm);
