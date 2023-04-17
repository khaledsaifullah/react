import React, { FC } from "react";
import {
    Form,
    Input,
    Row,
    Col,
    Select,
    Button,
    Radio,
    DatePicker,
    Spin,
    InputNumber,
} from "antd";
import { useTranslation } from "react-i18next";
import { useLang } from "../../../../../../hooks/useLang";
import { rules } from "../../../../../../components/Validation/Form.validate";
import Step from "../Block/Step";
import BuildingInformation from "../Block/BuildingInformation";
import BookingDetail from "../Block/BookingDetail";
import ContactInformation from "../Block/ContactInformation";
import ExploreMore from "../Block/ExploreMore";
import { CONSTANT_COMMON } from "../../../../../../constants";
import { useCommonConfigurationTypeList } from "../../../../../../hooks/lists/useCommonConfigurationTypeList";
import { useCountryList } from "../../../../../../hooks/dependentLists/useCountryList";
import { useMaritalStatusLookup } from "../../../../../../hooks/lookups/useMaritalStatusLookup";
import { EnumUtils } from "../../../../../../utils";
import { YesNoEnum } from "../../../../../../utils/enums";
import FamilyMemberInformationListController from "../Addmore/FamilyMemberInformation/List/FamilyMemberInformationList.controller";
import ParticipantInformationListController from "../Addmore/ParticipantInformation/List/ParticipantInformationList.controller";
import { useAccommodationForEnum } from "../../../../../../hooks/enums/useAccommodationForEnum";
import { useExternalApplicantTypeEnum } from "../../../../../../hooks/enums/useExternalApplicantTypeEnum";
import { ValidateFunction } from "../../../../../../components/Validation";
import UploadMultipleFile from "../../../../../../components/Upload/UploadMultipleFile";
import "./BookingPageForm.style.scss";

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

const BookingPageForm: FC<any> = (props) => {
    const { Option } = Select;
    const { TextArea } = Input;
    const { t } = useTranslation();
    const { lang } = useLang();
    const { loadingCommonConfigurationTypeList, commonConfigurationTypeList } =
        useCommonConfigurationTypeList();
    const { loadingCountryList, countryList } = useCountryList();
    const { maritalStatusLookupList, loadingMaritalStatusLookupList } =
        useMaritalStatusLookup();
    const { accommodationForEnumList } = useAccommodationForEnum();
    const { externalApplicantTypeEnumList } = useExternalApplicantTypeEnum();

    const {
        formRef,
        loading,
        itemData,
        pageTitle,
        initialValues,
        isSubmitting,
        handleChange,
        handleSubmit,
        handleSubmitFailed,
        selectedAccommodationInformation,
        loadingSelectedAccommodationInfo,
        familyMemberInformationList,
        setFamilyMemberInformationList,
        participantInformationList,
        setParticipantInformationList,
        salaryEvidenceFileList,
        setSalaryEvidenceFileList,
        attachmentList,
        setAttachmentList,
        dynamicStateObjectProperties,
    } = props;

    const {
        userName,
        loadingUserInfo,
        isExternalApplicant,
        checkExternalApplicantIsLocalOrForeign,
        handleOnChangeExternalApplicantType,
        handleResidenceHouseStatus,
        checkForAccommodationType,
        checkForRentSpaceOpiton,
        checkForDurationType,
        checkForResidenceHouseStatus,
    } = dynamicStateObjectProperties;

    return (
        <>
            {loadingSelectedAccommodationInfo && (
                <div className="spinner">
                    <Spin className="d-inline-block" size="large" />
                </div>
            )}
            {!loadingSelectedAccommodationInfo && (
                <>
                    <div className="booking-detail-page  px-5 py-4">
                        <div className="container">
                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={17}>
                                    {/* <Step /> */}
                                    <BuildingInformation
                                        loadingSelectedAccommodationInfo={
                                            loadingSelectedAccommodationInfo
                                        }
                                        selectedAccommodationInformation={
                                            selectedAccommodationInformation
                                        }
                                    />
                                    <h2 className="h2">
                                        {t("Enter your booking details")}
                                    </h2>
                                    <Form
                                        {...formItemLayout}
                                        form={formRef}
                                        name="bookingPageForm"
                                        scrollToFirstError={true}
                                        initialValues={initialValues}
                                        onValuesChange={handleChange}
                                        onFinish={handleSubmit}
                                        onFinishFailed={handleSubmitFailed}
                                        labelAlign="left"
                                    >
                                        <Row
                                            gutter={[16, 0]}
                                            hidden={!isExternalApplicant}
                                        >
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Applicant Name"
                                                        )}
                                                        name="applicant_name"
                                                    >
                                                        <Input
                                                            readOnly={true}
                                                            className="text-muted"
                                                            defaultValue={
                                                                userName
                                                            }
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                        </Row>
                                        {/* For External Applicant Start */}
                                        <Row
                                            gutter={[16, 0]}
                                            hidden={!isExternalApplicant}
                                        >
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "External Applicant Type"
                                                        )}
                                                        name="ext_applicant_type"
                                                        rules={
                                                            isExternalApplicant
                                                                ? rules.required
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Radio.Group
                                                            onChange={(e) =>
                                                                handleOnChangeExternalApplicantType(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        >
                                                            {externalApplicantTypeEnumList?.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => (
                                                                    <Radio
                                                                        key={`external-applicant-type-${index}`}
                                                                        value={
                                                                            item.key
                                                                        }
                                                                    >
                                                                        {lang ===
                                                                        "en"
                                                                            ? item.value_en
                                                                            : item.value_bn}
                                                                    </Radio>
                                                                )
                                                            )}
                                                        </Radio.Group>
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Organization Name"
                                                        )}
                                                        name="ext_organization_name"
                                                        rules={
                                                            isExternalApplicant
                                                                ? rules.required
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Present Address"
                                                        )}
                                                        name="ext_present_address"
                                                        rules={
                                                            isExternalApplicant
                                                                ? rules.required
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <TextArea
                                                            autoSize={{
                                                                minRows: 3,
                                                                maxRows: 5,
                                                            }}
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Permanent Address"
                                                        )}
                                                        name="ext_permanent_address"
                                                        rules={
                                                            isExternalApplicant
                                                                ? rules.required
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <TextArea
                                                            autoSize={{
                                                                minRows: 3,
                                                                maxRows: 5,
                                                            }}
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t("Nationality")}
                                                        name="ext_nationality"
                                                        rules={
                                                            isExternalApplicant
                                                                ? rules.required
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Select
                                                            showSearch
                                                            allowClear
                                                            placeholder={t(
                                                                "-- Select --"
                                                            )}
                                                            loading={
                                                                loadingCommonConfigurationTypeList
                                                            }
                                                            optionFilterProp="children"
                                                            filterOption={(
                                                                input,
                                                                option: any
                                                            ) =>
                                                                option?.children
                                                                    ?.toLowerCase()
                                                                    ?.indexOf(
                                                                        input.toLowerCase()
                                                                    ) >= 0
                                                            }
                                                        >
                                                            {commonConfigurationTypeList
                                                                ?.filter(
                                                                    (
                                                                        nationality: any
                                                                    ) =>
                                                                        nationality.type ==
                                                                        "NATIONALITY"
                                                                )
                                                                ?.map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => (
                                                                        <Option
                                                                            key={`nationality-${index}`}
                                                                            value={
                                                                                item.id
                                                                            }
                                                                        >
                                                                            {lang ==
                                                                            "en"
                                                                                ? item.name_en
                                                                                : item.name_bn}
                                                                        </Option>
                                                                    )
                                                                )}
                                                        </Select>
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t("Country")}
                                                        name="ext_country_id"
                                                        rules={
                                                            isExternalApplicant
                                                                ? rules.required
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Select
                                                            showSearch
                                                            allowClear
                                                            placeholder={t(
                                                                "-- Select --"
                                                            )}
                                                            loading={
                                                                loadingCountryList
                                                            }
                                                            optionFilterProp="children"
                                                            filterOption={(
                                                                input,
                                                                option: any
                                                            ) =>
                                                                option?.children
                                                                    ?.toLowerCase()
                                                                    ?.indexOf(
                                                                        input.toLowerCase()
                                                                    ) >= 0
                                                            }
                                                        >
                                                            {commonConfigurationTypeList
                                                                ?.filter(
                                                                    (
                                                                        country: any
                                                                    ) =>
                                                                        country.type ==
                                                                        "COUNTRY"
                                                                )
                                                                ?.map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => (
                                                                        <Option
                                                                            key={`country-${index}`}
                                                                            value={
                                                                                item.id
                                                                            }
                                                                        >
                                                                            {lang ==
                                                                            "en"
                                                                                ? item.name_en
                                                                                : item.name_bn}
                                                                        </Option>
                                                                    )
                                                                )}
                                                        </Select>
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t("Mobile No")}
                                                        name="ext_mobile_no"
                                                        rules={rules.mobile}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col
                                                xs={24}
                                                md={12}
                                                hidden={
                                                    !checkExternalApplicantIsLocalOrForeign.isLocalApplicant
                                                }
                                            >
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t("NID")}
                                                        name="ext_nid"
                                                        rules={[
                                                            {
                                                                required:
                                                                    isExternalApplicant &&
                                                                    checkExternalApplicantIsLocalOrForeign.isLocalApplicant,
                                                                message:
                                                                    "This field is required!",
                                                            },
                                                            {
                                                                validator:
                                                                    async (
                                                                        event,
                                                                        value
                                                                    ) =>
                                                                        ValidateFunction.nidValidation(
                                                                            event,
                                                                            value,
                                                                            "ext_nid"
                                                                        ),
                                                            },
                                                        ]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col
                                                xs={24}
                                                md={12}
                                                hidden={
                                                    !checkExternalApplicantIsLocalOrForeign.isForeignApplicant
                                                }
                                            >
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t("Passport No")}
                                                        name="ext_passport_no"
                                                        rules={
                                                            isExternalApplicant &&
                                                            checkExternalApplicantIsLocalOrForeign.isForeignApplicant
                                                                ? rules.required
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                        </Row>
                                        {/* For External Applicant End */}
                                        {/* For accommodation type Residence start */}
                                        <Row
                                            className="mb-2"
                                            gutter={[16, 0]}
                                            hidden={
                                                !checkForAccommodationType.isResidence
                                            }
                                        >
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Date Of Birth"
                                                        )}
                                                        name="res_dob"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.required
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <DatePicker
                                                            format={
                                                                CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT
                                                            }
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Marital Status"
                                                        )}
                                                        name="res_marital_status"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.required
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Select
                                                            showSearch
                                                            allowClear
                                                            placeholder={t(
                                                                "-- Select --"
                                                            )}
                                                            loading={
                                                                loadingMaritalStatusLookupList
                                                            }
                                                            optionFilterProp="children"
                                                            filterOption={(
                                                                input,
                                                                option: any
                                                            ) =>
                                                                option?.children
                                                                    ?.toLowerCase()
                                                                    ?.indexOf(
                                                                        input.toLowerCase()
                                                                    ) >= 0
                                                            }
                                                        >
                                                            {maritalStatusLookupList?.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => (
                                                                    <Option
                                                                        key={`marital-status-${index}`}
                                                                        value={
                                                                            item.key
                                                                        }
                                                                    >
                                                                        {lang ===
                                                                        "en"
                                                                            ? item.value_en
                                                                            : item.value_bn}
                                                                    </Option>
                                                                )
                                                            )}
                                                        </Select>
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24}>
                                                <div className="form-subheading-bottom-border">
                                                    {t(
                                                        "Applicant’s Spouse/Guardian related Information"
                                                    )}
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Guardian Name"
                                                        )}
                                                        name="res_spouse_or_guardian_name"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.requiredMaxCharacter255
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t("Relation")}
                                                        name="res_spouse_or_guardian_relation"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.requiredMaxCharacter255
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t("Profession")}
                                                        name="res_spouse_or_guardian_profession"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.requiredMaxCharacter255
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Organization Name"
                                                        )}
                                                        name="res_spouse_or_guardian_organization_name"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.maxCharacter255
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Organization Type"
                                                        )}
                                                        name="res_spouse_or_guardian_organization_type"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.maxCharacter255
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Current Designation"
                                                        )}
                                                        name="res_spouse_or_guardian_current_designation"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.maxCharacter255
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Current place of work"
                                                        )}
                                                        name="res_spouse_or_guardian_current_place_of_work"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.maxCharacter255
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24}>
                                                <div className="form-subheading-bottom-border">
                                                    {t(
                                                        "Job related Information"
                                                    )}
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Current Place of Work"
                                                        )}
                                                        name="res_current_place_of_work"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.requiredMaxCharacter255
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Current Designation"
                                                        )}
                                                        name="res_current_designation"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.requiredMaxCharacter255
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Salary Scale"
                                                        )}
                                                        name="res_salary_scale"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.requiredMaxCharacter255
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Basic Salary"
                                                        )}
                                                        name="res_basic_salary"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.required
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <InputNumber
                                                            min={0}
                                                            step={0.01}
                                                            precision={2}
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Evidence (Salary)"
                                                        )}
                                                        name="res_salary_evidence"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? [
                                                                      {
                                                                          required:
                                                                              true,
                                                                          validator:
                                                                              (
                                                                                  rule,
                                                                                  value,
                                                                                  callback
                                                                              ) =>
                                                                                  ValidateFunction.validateUpload(
                                                                                      rule,
                                                                                      value,
                                                                                      callback,
                                                                                      salaryEvidenceFileList
                                                                                  ),
                                                                      },
                                                                  ]
                                                                : [
                                                                      {
                                                                          required:
                                                                              false,
                                                                      },
                                                                  ]
                                                        }
                                                        help={
                                                            "Allow File: .jpg,.jpeg,.png,.pdf,.doc,.docx,.xlsx,.xls Max Size: 2MB."
                                                        }
                                                    >
                                                        <UploadMultipleFile
                                                            maxUploadSize={
                                                                2000000
                                                            }
                                                            fileIds={
                                                                itemData?.res_salary_evidence
                                                            }
                                                            fileList={
                                                                salaryEvidenceFileList
                                                            }
                                                            setFileList={
                                                                setSalaryEvidenceFileList
                                                            }
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Date of Joining (Current Designation)"
                                                        )}
                                                        name="res_current_joining_date"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.required
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <DatePicker
                                                            format={
                                                                CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT
                                                            }
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Name of Unit"
                                                        )}
                                                        name="res_name_of_unit"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.requiredMaxCharacter255
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Date of Joining in Organization’s Revenue Sector"
                                                        )}
                                                        name="res_joining_date_of_organization_revenue_sector"
                                                    >
                                                        <DatePicker
                                                            format={
                                                                CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT
                                                            }
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Designation in Organization’s Revenue Sector"
                                                        )}
                                                        name="res_designation_of_organization_revenue_sector"
                                                        rules={
                                                            rules.maxCharacter255
                                                        }
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24}>
                                                <div className="form-subheading-bottom-border">
                                                    {t(
                                                        "Residence Related Information"
                                                    )}
                                                </div>
                                            </Col>
                                            <Col xs={24} md={8}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Location/Residence Choice Order"
                                                        )}
                                                        name="res_residence_choice_order"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.requiredMaxCharacter300
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={16}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Has house/flat in Own Name/Spouse Name/Dependent Children’s Name?"
                                                        )}
                                                        name="res_has_house_in_own_name_or_spouse_name"
                                                        rules={
                                                            checkForAccommodationType.isResidence
                                                                ? rules.required
                                                                : rules.notRequired
                                                        }
                                                    >
                                                        <Radio.Group
                                                            onChange={(e) =>
                                                                handleResidenceHouseStatus(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        >
                                                            {EnumUtils.getEnumKeys(
                                                                YesNoEnum
                                                            ).map(
                                                                (
                                                                    key,
                                                                    index
                                                                ) => (
                                                                    <Radio
                                                                        key={`status-${index}`}
                                                                        value={
                                                                            YesNoEnum[
                                                                                key
                                                                            ]
                                                                        }
                                                                    >
                                                                        {t(key)}
                                                                    </Radio>
                                                                )
                                                            )}
                                                        </Radio.Group>
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col
                                                xs={24}
                                                md={12}
                                                hidden={
                                                    !checkForResidenceHouseStatus.hasHouse
                                                }
                                            >
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "No. of House/Flat"
                                                        )}
                                                        name="res_no_of_house"
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col
                                                xs={24}
                                                md={12}
                                                hidden={
                                                    !checkForResidenceHouseStatus.hasHouse
                                                }
                                            >
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Construction Completion Date"
                                                        )}
                                                        name="res_construction_completion_date"
                                                    >
                                                        <DatePicker
                                                            format={
                                                                CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT
                                                            }
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col xs={24}>
                                                <div className="form-subheading-bottom-border">
                                                    {t(
                                                        "Family Member Information"
                                                    )}
                                                </div>
                                            </Col>
                                            <Col xs={24}>
                                                <FamilyMemberInformationListController
                                                    itemData={itemData}
                                                    addMoreItemList={
                                                        familyMemberInformationList
                                                    }
                                                    setAddMoreItemList={
                                                        setFamilyMemberInformationList
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                        {/* For accommodation type Residence end */}

                                        {/* For accommodation type Guest House/Dormitory/Class Room Start */}
                                        <Row
                                            gutter={[16, 0]}
                                            hidden={
                                                !checkForAccommodationType.isGuestHouseDormitoryClassRoom
                                            }
                                        >
                                            <Col xs={24}>
                                                <div className="form-subheading-bottom-border">
                                                    {t(
                                                        "Guest/Participant Information"
                                                    )}
                                                </div>
                                            </Col>
                                            <Col xs={24}>
                                                <ParticipantInformationListController
                                                    itemData={itemData}
                                                    addMoreItemList={
                                                        participantInformationList
                                                    }
                                                    setAddMoreItemList={
                                                        setParticipantInformationList
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                        {/* For accommodation type Guest House/Dormitory/Class Room End */}
                                        <Row>
                                            <Col xs={24} md={24}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t(
                                                            "Accommodation For"
                                                        )}
                                                        name="accommodation_for"
                                                        rules={rules.required}
                                                    >
                                                        <Radio.Group>
                                                            {accommodationForEnumList?.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => (
                                                                    <Radio
                                                                        key={`accommodation-for-${index}`}
                                                                        value={
                                                                            item.key
                                                                        }
                                                                    >
                                                                        {lang ===
                                                                        "en"
                                                                            ? item.value_en
                                                                            : item.value_bn}
                                                                    </Radio>
                                                                )
                                                            )}
                                                        </Radio.Group>
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row gutter={[16, 0]}>
                                            {selectedAccommodationInformation.rent_space_type ? (
                                                <Col
                                                    xs={24}
                                                    md={12}
                                                    // hidden={!checkForRentSpaceOpiton}
                                                    className="d-flex flex-column justify-content-center align-item-center"
                                                >
                                                    <div className="fw-bold">
                                                        {" "}
                                                        {t(
                                                            "Rent Space option"
                                                        )}{" "}
                                                    </div>
                                                    <div>
                                                        {lang == "en"
                                                            ? selectedAccommodationInformation?.rent_space_type_name_en
                                                            : selectedAccommodationInformation?.rent_space_type_name_bn}
                                                    </div>
                                                </Col>
                                            ) : null}
                                        </Row>
                                        <Row gutter={[16, 0]}>
                                            <Col xs={24} md={12}>
                                                <div className="label-block">
                                                    <Form.Item
                                                        label={t("Attachments")}
                                                        name="attachments"
                                                        help={
                                                            "Allow File: .jpg,.jpeg,.png,.pdf,.doc,.docx,.xlsx,.xls Max Size: 2MB."
                                                        }
                                                    >
                                                        <UploadMultipleFile
                                                            maxUploadSize={
                                                                2000000
                                                            }
                                                            fileIds={
                                                                itemData?.attachments
                                                            }
                                                            fileList={
                                                                attachmentList
                                                            }
                                                            setFileList={
                                                                setAttachmentList
                                                            }
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="mt-4 text-end">
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                            >
                                                {t("Next")}
                                            </Button>
                                        </div>
                                    </Form>
                                </Col>
                                <Col xs={24} md={7}>
                                    <BookingDetail
                                        selectedAccommodationInformation={
                                            selectedAccommodationInformation
                                        }
                                    />
                                    <ContactInformation
                                        selectedAccommodationInformation={
                                            selectedAccommodationInformation
                                        }
                                    />
                                    {/* <ExploreMore /> */}
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
export default React.memo(BookingPageForm);
