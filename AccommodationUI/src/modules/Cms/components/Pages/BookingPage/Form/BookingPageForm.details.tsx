import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Input, Row, Col, Checkbox, Radio, Spin, Button, Tag, } from "antd";
import { useTranslation } from "react-i18next";
import { BodyClassName } from "../../../../../../components/BodyClassName/BodyClassName";
import Breadcrumb from "../../../../../../components/Breadcrumb";
import ContextJSX from "../../../../../../components/ContextJsx";
import MetaTag from "../../../../../../components/MetaTag";
import visaicon from "../../../../../../assets/images/icon/visa-icon.png";
import mastercardicon from "../../../../../../assets/images/icon/master-card-icon.png";
import americanexpressicon from "../../../../../../assets/images/icon/americanexpress-icon.png";
import bkashicon from "../../../../../../assets/images/icon/bkash-icon.png";
import nogodicon from "../../../../../../assets/images/icon/nogod-icon.png";
import roketicon from "../../../../../../assets/images/icon/roket-icon.png";
import dmoneyicon from "../../../../../../assets/images/icon/dmoney-icon.png";
import walleticon from "../../../../../../assets/images/icon/wallet-icon.png";
import upayicon from "../../../../../../assets/images/icon/upay-icon.png";
import bankasia from "../../../../../../assets/images/icon/bank-asia.png";
import brackbank from "../../../../../../assets/images/icon/brack-bank.png";
import easternbank from "../../../../../../assets/images/icon/eastern-bank.png";
import citybank from "../../../../../../assets/images/icon/city-bank.png";
import ucbbank from "../../../../../../assets/images/icon/ucb-bank.png";
import dutchbanglabank from "../../../../../../assets/images/icon/dutch-bangla-bank.png";
import midlandbank from "../../../../../../assets/images/icon/midland-bank.png";
import rongdonubank from "../../../../../../assets/images/icon/rongdonu-bank.png";
import verifiedbyicon from "../../../../../../assets/images/icon/verified-by-icon.png";
import { EnvironmentOutlined, StarFilled, BankOutlined, CreditCardOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import type { RadioChangeEvent } from "antd";
import { AccommodationInformationApi, AllotmentApplicationApi } from "../../../../../../api";
import Step from "../Block/Step";
import BuildingInformation from "../Block/BuildingInformation";
import { useLang } from "../../../../../../hooks/useLang";
import { AntModal, DateTimeUtils, Message } from "../../../../../../utils";
import { CONSTANT_COMMON, CONSTANT_CONFIG } from "../../../../../../constants";
import BookingDetail from "../Block/BookingDetail";
import FileName from "../../../../../../components/File/FileName";
import { LinkOutlined } from '@ant-design/icons';
import FamilyMemberInformationList from "../Addmore/FamilyMemberInformation/List/FamilyMemberInformationList";
import ParticipantInformationList from "../Addmore/ParticipantInformation/List/ParticipantInformationList";
import ContactInformation from "../Block/ContactInformation";
import ExploreMore from "../Block/ExploreMore";
import "./BookingPageForm.style.scss";

const initialState = {
    loadingBookingInfo: false,
    bookingInfo: {},
}

const BookingPageFormDetails = (props) => {
    const { t } = useTranslation();
    const { lang, getLangPath, getUserLangUrl } = useLang();
    const navigate = useNavigate();
    const { bookingDetailId } = useParams()

    const [loadingBookingInfo, setLoadingBookingInfo] = useState<any>(initialState.loadingBookingInfo)
    const [bookingInfo, setBookingInfo] = useState<any>(initialState.bookingInfo)

    useEffect(() => {
        if (bookingDetailId) {
            loadBookingInformation(bookingDetailId)
        }
    }, [bookingDetailId])

    const loadBookingInformation = (bookingId: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoadingBookingInfo(true)
            AllotmentApplicationApi.getById(bookingId)
                .then(res => {
                    setBookingInfo(res?.data ?? {})
                    setLoadingBookingInfo(false)
                    resolve(res.data)
                })
                .catch(err => {
                    setBookingInfo(initialState.bookingInfo)
                    setLoadingBookingInfo(false)
                    reject(err)
                })
        })
    }

    // UPDATE APPLICATION STATUS
    const handleUpdate = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoadingBookingInfo(true);
            const payload = {
                status: 1
            }
            AllotmentApplicationApi.updatePartial(bookingDetailId, payload)
                .then(res => {
                    AntModal.success(t('Booking Page update successfully.'));
                    navigate(getLangPath(lang, `/`));
                    setLoadingBookingInfo(false);
                    resolve(res);
                })
                .catch(err => {
                    Message.error('A network error occurred. Please try again later.');
                    setLoadingBookingInfo(false);
                    reject(err);
                });
        });
    }
    return (
        <>
            <ContextJSX>
                <BodyClassName className={"component-grant"} />
                <MetaTag>
                    <MetaTag.Title>{t("Booking Details")}</MetaTag.Title>
                </MetaTag>
                <Breadcrumb>
                    <Breadcrumb.Item>{t("OSAM")}</Breadcrumb.Item>
                    <Breadcrumb.Item>{t("Booking Details")}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>
            {loadingBookingInfo && <div className="spinner"><Spin className='d-inline-block' size="large" /></div>}
            {!loadingBookingInfo && (
                <div className="booking-detail-page  py-3">
                    <div className="container">
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={17}>
                                {/* <Step /> */}
                                {Object.keys(bookingInfo)?.length > 0 ? (
                                    <BuildingInformation
                                        loadingSelectedAccommodationInfo={loadingBookingInfo}
                                        selectedAccommodationInformation={bookingInfo?.accommodation_information ?? {}}
                                    />
                                ) : null}
                                <h2 className="h2">{t("Your booking details")} </h2>
                                <Row gutter={[16, 16]}>
                                    {bookingInfo?.applicant_id ? (
                                        <Col xs={24} md={6}>
                                            <h6 className="h6 m-0 p-0">{t("Full Name")} </h6>
                                            <p className=" m-0 p-0">
                                                {
                                                    bookingInfo?.applicant_name ? bookingInfo?.applicant_name : (
                                                        bookingInfo?.applicant_first_name ? bookingInfo?.applicant_first_name : null
                                                    )
                                                }
                                            </p>
                                        </Col>
                                    ) : null}
                                    {bookingInfo?.applicant_type ? (
                                        <Col xs={24} md={6}>
                                            <h6 className="h6 m-0 p-0">{t("Applicant Type")}</h6>
                                            <p className=" m-0 p-0">
                                                {
                                                    lang == "en" ? bookingInfo?.applicant_type_name_en : bookingInfo?.applicant_type_name_bn
                                                }
                                            </p>
                                        </Col>
                                    ) : null}
                                    {bookingInfo?.application_type ? (
                                        <Col xs={24} md={6}>
                                            <h6 className="h6 m-0 p-0">{t("Application Type")}</h6>
                                            <p className=" m-0 p-0">
                                                {
                                                    lang == "en" ? bookingInfo?.application_type_name_en : bookingInfo?.application_type_name_bn
                                                }
                                            </p>
                                        </Col>
                                    ) : null}
                                    {bookingInfo?.application_date ? (
                                        <Col xs={24} md={6}>
                                            <h6 className="h6 m-0 p-0">{t("Application Date")}</h6>
                                            <p className=" m-0 p-0">
                                                {DateTimeUtils.formatDate(bookingInfo?.application_date, CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT)}
                                            </p>
                                        </Col>
                                    ) : null}
                                    {bookingInfo?.ext_applicant_type ? (
                                        <Col xs={24} md={6}>
                                            <h6 className="h6 m-0 p-0">{t("External Applicant Type")}</h6>
                                            <p className=" m-0 p-0">
                                                {
                                                    lang == "en" ? bookingInfo?.external_applicant_type_name_en : bookingInfo?.external_applicant_type_name_bn
                                                }
                                            </p>
                                        </Col>
                                    ) : null}
                                    {bookingInfo?.ext_organization_name ? (
                                        <Col xs={24} md={6}>
                                            <h6 className="h6 m-0 p-0">{t("Organization Name")}</h6>
                                            <p className=" m-0 p-0">
                                                {t(bookingInfo?.ext_organization_name)}
                                            </p>
                                        </Col>
                                    ) : null}
                                    {bookingInfo?.ext_present_address ? (
                                        <Col xs={24} md={6}>
                                            <h6 className="h6 m-0 p-0">{t("Present Address")}</h6>
                                            <p className=" m-0 p-0">
                                                {t(bookingInfo?.ext_present_address)}
                                            </p>
                                        </Col>
                                    ) : null}
                                    {bookingInfo?.ext_permanent_address ? (
                                        <Col xs={24} md={6}>
                                            <h6 className="h6 m-0 p-0">{t("Permanent Address")}</h6>
                                            <p className=" m-0 p-0">
                                                {t(bookingInfo?.ext_permanent_address)}
                                            </p>
                                        </Col>
                                    ) : null}
                                    {bookingInfo?.ext_nationality ? (
                                        <Col xs={24} md={6}>
                                            <h6 className="h6 m-0 p-0">{t("Nationality")}</h6>
                                            <p className=" m-0 p-0">
                                                {
                                                    lang == "en" ? bookingInfo?.external_nationality_name_en : bookingInfo?.external_nationality_name_bn
                                                }
                                            </p>
                                        </Col>
                                    ) : null}
                                    {bookingInfo?.ext_country_id ? (
                                        <Col xs={24} md={6}>
                                            <h6 className="h6 m-0 p-0">{t("Country")}</h6>
                                            <p className=" m-0 p-0">
                                                {
                                                    lang == "en" ? bookingInfo?.ext_country_name_en : bookingInfo?.ext_country_name_bn
                                                }
                                            </p>
                                        </Col>
                                    ) : null}
                                    {bookingInfo?.ext_mobile_no ? (
                                        <Col xs={24} md={6}>
                                            <h6 className="h6 m-0 p-0">{t("Mobile No")}</h6>
                                            <p className=" m-0 p-0">
                                                {t(bookingInfo?.ext_mobile_no)}
                                            </p>
                                        </Col>
                                    ) : null}
                                    {bookingInfo?.ext_nid ? (
                                        <Col xs={24} md={6}>
                                            <h6 className="h6 m-0 p-0">{t("NID")}</h6>
                                            <p className=" m-0 p-0">
                                                {t(bookingInfo?.ext_nid)}
                                            </p>
                                        </Col>
                                    ) : null}
                                    {bookingInfo?.ext_passport_no ? (
                                        <Col xs={24} md={6}>
                                            <h6 className="h6 m-0 p-0">{t("Passport No")}</h6>
                                            <p className=" m-0 p-0">
                                                {t(bookingInfo?.ext_passport_no)}
                                            </p>
                                        </Col>
                                    ) : null}
                                </Row>
                                {bookingInfo?.accommodation_information?.accommodation_type == "RESIDENCE_STAFF_QUARTER" ? (
                                    <div className="form-subheading-bottom-border mt-3">
                                        {t('Residence Information')}
                                    </div>
                                ) : null}
                                {bookingInfo?.accommodation_information?.accommodation_type == "RESIDENCE_STAFF_QUARTER" ? (
                                    <>
                                        <Row gutter={[16, 16]}>
                                            {bookingInfo?.res_dob ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Date Of Birth")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {DateTimeUtils.formatDate(bookingInfo?.res_dob, CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT)}
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_marital_status ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Marital Status")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {
                                                            lang == "en" ? bookingInfo?.res_marital_status_name_en : bookingInfo?.res_marital_status_name_bn
                                                        }
                                                    </p>
                                                </Col>
                                            ) : null}
                                        </Row>
                                        <div className="form-subheading-bottom-border">
                                            {t('Applicant’s Spouse/Guardian related Information')}
                                        </div>
                                        <Row>
                                            {bookingInfo?.res_spouse_or_guardian_name ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Spouse/Guardian Name")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {t(bookingInfo?.res_spouse_or_guardian_name)}
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_spouse_or_guardian_relation ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Relation")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {t(bookingInfo?.res_spouse_or_guardian_relation)}
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_spouse_or_guardian_profession ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Profession")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {t(bookingInfo?.res_spouse_or_guardian_profession)}
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_spouse_or_guardian_organization_name ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Organization Name")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {t(bookingInfo?.res_spouse_or_guardian_organization_name)}
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_spouse_or_guardian_organization_type ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Organization Type")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {t(bookingInfo?.res_spouse_or_guardian_organization_type)}
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_spouse_or_guardian_current_designation ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Current Designation")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {t(bookingInfo?.res_spouse_or_guardian_current_designation)}
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_spouse_or_guardian_current_place_of_work ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Current place of work")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {t(bookingInfo?.res_spouse_or_guardian_current_place_of_work)}
                                                    </p>
                                                </Col>
                                            ) : null}
                                        </Row>
                                        <div className="form-subheading-bottom-border">
                                            {t('Job Related Information')}
                                        </div>
                                        <Row gutter={[16, 16]}>
                                            {bookingInfo?.res_current_place_of_work ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Current place of work")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {t(bookingInfo?.res_current_place_of_work)}
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_current_designation ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Current Designation")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {t(bookingInfo?.res_current_designation)}
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_salary_scale ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Salary Scale")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {t(bookingInfo?.res_salary_scale)}
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_basic_salary ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Basic Salary")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {t(bookingInfo?.res_basic_salary)}
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_salary_evidence != "" && bookingInfo?.res_salary_evidence != null && (
                                                <Col xs={24} md={12}>
                                                    <h6 className="h6 m-0 p-0">{t("Evidence (Salary)")}</h6>
                                                    {
                                                        bookingInfo?.res_salary_evidence?.split(',').map((item, index) => (
                                                            <>
                                                                <div className="d-flex aligin-item-center">
                                                                    <LinkOutlined className="me-1 mt-1" />
                                                                    <a target={"_blank"} href={CONSTANT_CONFIG.MEDIA_SOURCE + item}>
                                                                        <FileName fileId={item} />
                                                                    </a>
                                                                </div>
                                                            </>
                                                        ))
                                                    }
                                                </Col>
                                            )}
                                            {bookingInfo?.res_current_joining_date ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Date of Joining (Current Designation)")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {
                                                            DateTimeUtils.formatDate(bookingInfo?.res_current_joining_date, CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT)
                                                        }
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_name_of_unit ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Name of Unit")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {bookingInfo?.res_name_of_unit}
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_joining_date_of_organization_revenue_sector ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("Name of Unit")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {
                                                            DateTimeUtils.formatDate(bookingInfo?.res_joining_date_of_organization_revenue_sector, CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT)
                                                        }
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_designation_of_organization_revenue_sector ? (
                                                <Col xs={24} md={12}>
                                                    <h6 className="h6 m-0 p-0">{t("Designation in Organization’s Revenue Sector")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {bookingInfo?.res_designation_of_organization_revenue_sector}
                                                    </p>
                                                </Col>
                                            ) : null}
                                        </Row>
                                        <div className="form-subheading-bottom-border">
                                            {t('Residence Related Information')}
                                        </div>
                                        <Row gutter={[16, 16]}>
                                            {bookingInfo?.res_residence_choice_order ? (
                                                <Col xs={24} md={8}>
                                                    <h6 className="h6 m-0 p-0">{t("Location/Residence Choice Order")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {bookingInfo?.res_residence_choice_order}
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_has_house_in_own_name_or_spouse_name ? (
                                                <Col xs={24} md={16}>
                                                    <h6 className="h6 m-0 p-0">{t("Has house/flat in Own Name/Spouse Name/Dependent Children’s Name?")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {bookingInfo?.res_has_house_in_own_name_or_spouse_name == 1 ? <Tag color="green">{"Yes"}</Tag> : <Tag color="red">{"No"}</Tag>}
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_no_of_house ? (
                                                <Col xs={24} md={6}>
                                                    <h6 className="h6 m-0 p-0">{t("No. of House/Flat")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {t(bookingInfo?.res_no_of_house)}
                                                    </p>
                                                </Col>
                                            ) : null}
                                            {bookingInfo?.res_construction_completion_date ? (
                                                <Col xs={24} md={8}>
                                                    <h6 className="h6 m-0 p-0">{t("Construction Completion Date")}</h6>
                                                    <p className=" m-0 p-0">
                                                        {
                                                            DateTimeUtils.formatDate(bookingInfo?.res_construction_completion_date, CONSTANT_COMMON.DATE_PICKER_DATE_FORMAT)
                                                        }
                                                    </p>
                                                </Col>
                                            ) : null}
                                        </Row>
                                        {bookingInfo?.family_member_information?.length > 0 ? (
                                            <>
                                                <div className="form-subheading-bottom-border">
                                                    {t('Family Member Information')}
                                                </div>
                                                <FamilyMemberInformationList
                                                    loadingAddMoreItem={loadingBookingInfo}
                                                    addMoreItemList={bookingInfo?.family_member_information ?? []}
                                                    isShowAction={true}
                                                />
                                            </>
                                        ) : null}
                                    </>
                                ) : null}
                                {
                                    (bookingInfo?.accommodation_information?.accommodation_type == "GUEST_HOUSE" || bookingInfo?.accommodation_information?.accommodation_type == "DORMITORY" || bookingInfo?.accommodation_information?.accommodation_type == "CLASS_ROOM") ? (
                                        <>
                                            {bookingInfo?.participant_information?.length > 0 ? (
                                                <>
                                                    <div className="form-subheading-bottom-border">
                                                        {t('Guest / Participant Information')}
                                                    </div>
                                                    <ParticipantInformationList
                                                        loadingAddMoreItem={loadingBookingInfo}
                                                        addMoreItemList={bookingInfo?.participant_information ?? []}
                                                        isShowAction={true}
                                                    />
                                                </>
                                            ) : null}
                                        </>
                                    ) : null}
                                <Row gutter={[16, 16]} className="mt-3">
                                    {bookingInfo?.accommodation_for ? (
                                        <Col xs={24} md={6}>
                                            <h6 className="h6 m-0 p-0">{t("Accommodation For")} </h6>
                                            <p className=" m-0 p-0">
                                                {
                                                    lang == "en" ? bookingInfo?.accommodation_for_name_en : bookingInfo?.accommodation_for_name_bn
                                                }
                                            </p>
                                        </Col>
                                    ) : null}
                                    {bookingInfo?.rent_space_type ? (
                                        <Col xs={24} md={6}>
                                            <h6 className="h6 m-0 p-0">{t("Rent Space option")}</h6>
                                            <p className=" m-0 p-0">
                                                {
                                                    lang == "en" ? bookingInfo?.rent_space_type_name_en : bookingInfo?.rent_space_type_name_bn
                                                }
                                            </p>
                                        </Col>
                                    ) : null}
                                    {bookingInfo?.size ? (
                                        <Col xs={24} md={4}>
                                            <h6 className="h6 m-0 p-0">{t("Size")}</h6>
                                            <p className=" m-0 p-0">
                                                {t(bookingInfo?.size)}
                                            </p>
                                        </Col>
                                    ) : null}
                                    {bookingInfo?.attachments != "" && bookingInfo?.attachments != null && (
                                        <Col xs={24} md={12}>
                                            <h6 className="h6 m-0 p-0">{t("Attachments")}</h6>
                                            {
                                                bookingInfo?.attachments?.split(',').map((item, index) => (
                                                    <>
                                                        <div className="d-flex aligin-item-center">
                                                            <LinkOutlined className="me-1 mt-1" />
                                                            <a target={"_blank"} href={CONSTANT_CONFIG.MEDIA_SOURCE + item}>
                                                                <FileName fileId={item} />
                                                            </a>
                                                        </div>
                                                    </>
                                                ))
                                            }
                                        </Col>
                                    )}
                                </Row>

                                {/* <div className="mt-5 advanced-payment-checkbox">
                                    <Checkbox onChange={(e) => "heloos"}>
                                        Advanced Payment
                                    </Checkbox>
                                </div>
                                <div className="paywith-text fw-bold mt-3">
                                    Pay With
                                </div>

                                <h6 className="h6 fw-bold mt-3">Accepted Cards </h6>
                                <div className="d-flex">
                                    <span className="pe-2">
                                        <img src={visaicon} alt="visaicon" />
                                    </span>
                                    <span className="pe-2">
                                        <img
                                            src={mastercardicon}
                                            alt="mastercardicon"
                                        />
                                    </span>
                                    <span className="pe-2">
                                        <img
                                            src={americanexpressicon}
                                            alt="americanexpressicon"
                                        />
                                    </span>
                                </div>

                                <h6 className="h6 fw-bold mt-3">Mobile Banking </h6>
                                <div className="d-flex">
                                    <span className="pe-2">
                                        <img src={bkashicon} alt="bkashicon" />
                                    </span>
                                    <span className="pe-2">
                                        <img src={nogodicon} alt="nogodicon" />
                                    </span>
                                    <span className="pe-2">
                                        <img src={roketicon} alt="roketicon" />
                                    </span>
                                    <span className="pe-2">
                                        <img src={upayicon} alt="dmoneyicon" />
                                    </span>
                                    <span className="pe-2">
                                        <img src={dmoneyicon} alt="dmoneyicon" />
                                    </span>
                                    <span className="pe-2">
                                        <img src={walleticon} alt="walleticon" />
                                    </span>
                                </div>

                                <h6 className="h6 fw-bold mt-3">
                                    Banking Channel/Wallet
                                </h6>
                                <div className="d-flex">
                                    <span className="pe-2">
                                        <img src={bankasia} alt="bankasia" />
                                    </span>
                                    <span className="pe-2">
                                        <img src={brackbank} alt="brackbank" />
                                    </span>
                                    <span className="pe-2">
                                        <img src={easternbank} alt="easternbank" />
                                    </span>
                                    <span className="pe-2">
                                        <img src={citybank} alt="citybank" />
                                    </span>
                                    <span className="pe-2">
                                        <img src={ucbbank} alt="ucbbank" />
                                    </span>
                                    <span className="pe-2">
                                        <img
                                            src={dutchbanglabank}
                                            alt="dutchbanglabank"
                                        />
                                    </span>
                                    <span className="pe-2">
                                        <img src={midlandbank} alt="midlandbank" />
                                    </span>
                                    <span className="pe-2">
                                        <img
                                            src={rongdonubank}
                                            alt="rongdonubank"
                                        />
                                    </span>
                                </div>

                                <div className="verifiedby-text py-2 mt-3 fw-bold mt-3 text-end d-flex align-items-center justify-content-end">
                                    <div className="pe-3">Verified by</div>
                                    <span className="verifiedby-shape  ps-2">
                                        <img
                                            src={verifiedbyicon}
                                            alt="verifiedbyicon"
                                        />
                                    </span>
                                </div> */}

                                <div className="mt-5 mb-5 pt-5 pb-5 text-start">
                                    <button
                                        type="button"
                                        className="btn btn-danger fw-bold  final-detail-btn"
                                        onClick={() => handleUpdate()}
                                    >
                                        {t("Confirm Booking")}
                                    </button>
                                </div>
                            </Col>

                            <Col xs={24} md={7}>
                                <BookingDetail bookingDetailId={bookingDetailId} selectedAccommodationInformation={bookingInfo ?? {}} />
                                <ContactInformation selectedAccommodationInformation={bookingInfo ?? {}} />
                                {/* <ExploreMore /> */}
                            </Col>
                        </Row>
                    </div>
                </div>
            )}
        </>
    );
};

export default React.memo(BookingPageFormDetails);
