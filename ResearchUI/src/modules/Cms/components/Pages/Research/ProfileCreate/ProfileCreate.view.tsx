import React, { FC } from "react";
import { IProps } from "./ProfileCreate.types";
import "./ProfileCreate.style.scss";
import { Button, Form, Input, Checkbox, Row, Col, Card, Select } from "antd";
import { Image } from "antd";
import { rules } from "./ProfileCreate.validate";
import { useTranslation } from "react-i18next";
import { LogoLogin } from "../../../../../../assets/images/logo";
import { LAYOUT_FORM_ITEM_SINGLE } from "../../../../../../utils/Grid";
import AntModal from "../../../../../../components/Wrapper/AntModal";
import TermsAndConditions from "../../TermsAndConditions/TermsAndConditions";
import { headerBanner } from "../../../../../../assets/images/banner";
import { useOrganizationList } from "../../../../../../hooks/lists/useOrganizationList";


const ProfileCreateView: FC<IProps> = (props) => {
  const { TextArea } = Input;
  const { Option } = Select;
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";
  const { loadingOrganizationList, organizationList } = useOrganizationList();
  const {
    formRef,
    loading,
    rules,
    initialValues,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleSubmitFailed,
  } = props;
  return (
    <div className="pageone-content">
      <div className="header-banner register-banner ">
        <img src={headerBanner} alt="headerbanner" />
      </div>

      <div className="register_content">
        <div className="site-card-wrapper">
          <Row>
            <Col xs={22} sm={22} md={14} lg={14}>
              <Card hoverable bordered={false}>
                <div className="logo_register_form">
                  <Image className="logo_register_image" src={LogoLogin} />
                  <div className="logo_text">
                    <h2>Ministry of Science & Technology</h2>
                    <h4>Government of the People’s Republic of Bangladesh</h4>
                  </div>
                </div>
                <Form
                  {...LAYOUT_FORM_ITEM_SINGLE.normal}
                  form={formRef}
                  name="profileCreateForm"
                  scrollToFirstError={true}
                  initialValues={initialValues}
                  onValuesChange={handleChange}
                  onFinish={handleSubmit}
                  onFinishFailed={handleSubmitFailed}
                >
                  {/* <Form.Item label={t("Headline")} name="headline">
                    <Input />
                  </Form.Item>

                  <Form.Item label={t("About")} name="about">
                    <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
                  </Form.Item>

                  <Form.Item label={t("Location")} name="country_location">
                    <Input />
                  </Form.Item> */}


                  <Form.Item label="Organization" name="organization_id" rules={rules.organization_id}>
                <Select
                  placeholder={t("-- Select --")}
                  dropdownMatchSelectWidth={200}
                  loading={loadingOrganizationList}
                >
                  {organizationList.map((item, index) => (
                    <Option key={`organization-${index}`} value={item.id}>
                      {lang === "en" ? item.name_en : item.name_bn}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

                  <Form.Item {...LAYOUT_FORM_ITEM_SINGLE.tail}>
                    <div className="inputfieldof-createaccount">
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        disabled={isSubmitting}
                        loading={loading}
                      >
                        Create Profile
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProfileCreateView);
