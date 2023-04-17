import React, { FC, useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { useLang } from "../../../../../hooks/useLang";
import {} from "../../../../../assets/images/icon";

import "./LandingPage.style.scss";
import { ReactComponent as RightAngleArrowIcon } from "../../../../../assets/images/svg/rightAngleArrow.svg";
import { ReactComponent as PaperPlanBlueIcon } from "../../../../../assets/images/svg/paperPlanBlue.svg";
import { ReactComponent as PaperPlanDarkIcon } from "../../../../../assets/images/svg/paperPlanDark.svg";
import { ReactComponent as LeaseProcessArrowIco } from "../../../../../assets/images/svg/lease-process-arrow.svg";
import ApplyImg from "../../../../../assets/images/icon/apply.png";
import ApplyVerificationImg from "../../../../../assets/images/icon/applyVerification.png";
import VisitSiteImg from "../../../../../assets/images/icon/visitSite.png";
import PremiumFixingImg from "../../../../../assets/images/icon/premiumFixing.png";
import PaymentImg from "../../../../../assets/images/icon/payment.png";
import AgreementImg from "../../../../../assets/images/icon/agreement.png";
import { ReactComponent as ListIcon } from "../../../../../assets/images/svg/list.svg";
import ContextJSX from "../../../../../components/ContextJsx";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";
import useResponsive from "../../../../../hooks/useResponsive";
import { useServiceMappingList } from "../../../../../hooks/lists/useServiceMappingList";
import { useAttachmentTypeList } from "../../../../../hooks/lists/useAttachmentTypeList";

import { useTranslation } from "react-i18next";
import { useProcessLeaseItemList } from "../../../../../hooks/lists/useProcessLeaseItemList";
import { useServiceAssignmentList } from "../../../../../hooks/lists/useServiceAssignmentList";
import { useNoticeList } from "../../../../../hooks/lists/useNoticeList";
import { useAdvertisementList } from "../../../../../hooks/lists/useAdvertisementList";
import { useInstructionList } from "../../../../../hooks/lists/useInstructionList";
import { CommonUtils } from "../../../../../utils";
import { useLoading } from "../../../../../hooks/useLoading";


interface PropsType {}





const paymentMethodData = [
    {
        label: "প্রিমিয়াম ফি",
        value: "পরিশোধযোগ্য",
    },
    {
        label: "বার্ষিক ফি",
        value: "পরিশোধযোগ্য",
    },
    {
        label: "স্ট্যাম্প ফি",
        value: "পরিশোধযোগ্য",
    },
    {
        label: "পরিশোধ পদ্ধতি",
        value: "একপে/ব্যাংক",
    },
];

const LandingPage: React.FC<PropsType> = () => {
    const { t, i18n } = useTranslation()
    const isBangla = i18n.language == 'bn';

    const { isMobile, isTablet } = useResponsive();
    const { serviceList } = useServiceMappingList();
    const { ServiceAssignmentList } = useServiceAssignmentList();
    const { attachmentTypeList } = useAttachmentTypeList();
    const { processLeaseItemList } = useProcessLeaseItemList();
    const { noticeList } = useNoticeList();
    const { advertisementList } = useAdvertisementList();
    const { instructionList } = useInstructionList();

    const [processLeaseAttachmentType, setProcessLeaseAttachmentType] = useState<any>([]);
    const [processLeaseItemNameList, setProcessLeaseItemNameList] = useState<any>([]);
    const [selectedNoticeList, setSelectedNoticeList] = useState<any>([]);
    const [selectedAdvertisementList, setSelectedAdvertisementList] = useState<any>([]);
    const [serviceDiscrioption, setServiceDiscrioption] = useState<any>("");
    const [listedServiceDiscrioption, setListedServiceDiscrioption] = useState<any>("");
    const [sponsorshipServiceDiscrioption, setSponsorshipServiceDiscrioption] = useState<any>("");


    useEffect(() => {
        if (serviceList) {
            let description = isBangla ? serviceList.find(o=>o.name_en == 'Process Lease Application')?.description_bn :  serviceList.find(o=>o.name_en == 'Process Lease Application')?.description_en;
            setServiceDiscrioption(description);
        }
    }, [serviceList, isBangla]);

    useEffect(() => {
        if (ServiceAssignmentList) {
            let description = isBangla ? ServiceAssignmentList.find(o=>o.name_en == 'Listed Lease Application')?.description_bn :  ServiceAssignmentList.find(o=>o.name_en == 'Listed Lease Application')?.description_en;

            let descriptionSponsorship = isBangla ? ServiceAssignmentList.find(o=>o.name_en == 'Sponsorship Lease Application')?.description_bn :  ServiceAssignmentList.find(o=>o.name_en == 'Sponsorship Lease Application')?.description_en;

            setListedServiceDiscrioption(description);
            setSponsorshipServiceDiscrioption(descriptionSponsorship);
        }
    }, [ServiceAssignmentList, isBangla]);


    useEffect(() => {
        if (attachmentTypeList) {
            let items=[] as any;
            attachmentTypeList.forEach(element => {
                items.push(isBangla ? element.attachment_type_bn : element.attachment_type_en);
            });
            setProcessLeaseAttachmentType(items);
        }
    }, [attachmentTypeList, isBangla]);

// Process Item list
    useEffect(() => {
        if (processLeaseItemList) {
            let items=[] as any;
            processLeaseItemList.forEach(element => {
                items.push({"link": "/", "label": isBangla ? element.name_bn : element.name_en});
            });

            setProcessLeaseItemNameList(items);
        }
    }, [processLeaseItemList, isBangla]);


    //Notice list
    useEffect(() => {
        if (noticeList) {
            let items=[] as any;
            noticeList.forEach(element => {
                items.push({"link": "/", "label": isBangla ? element.name_bn : element.name_en});
            });

            setSelectedNoticeList(items);
        }
    }, [noticeList, isBangla]);

    //Advertisement list
    useEffect(() => {
        if (advertisementList) {
            let items=[] as any;
            advertisementList.forEach(element => {
                items.push({"link": "/", "label": isBangla ? element.name_bn : element.name_en});
            });

            setSelectedAdvertisementList(items);
        }
    }, [advertisementList, isBangla]);



    const mainContentData = [
        {
            title: [t("পদ্ধতি ইজারা সম্পকৃত তথ্য")],
            description: [serviceDiscrioption],
            // "কম্পিউটার আধুনিক বিজ্ঞানের এক বিস্ময়কার আবিষ্কার। এ যন্ত্রটিকে ঘিরে বিশ্বের বুকে এক নীরব প্রযুক্তি বিপ্লব সংঘটিত হয়েছে। এ বিপ্লবের ঢেউ লেগেছে বাংলাদেশের বুকে।  তাই এদেশে কম্পিউটারের ব্যবহার ব্যাপক থেকে ব্যাপকতর হচ্ছে, বিস্তৃত হচ্ছে কম্পিউটারকেন্দ্রিক ব্যবসা-বাণিজ্য। যুগের চাহিদা অনুসারে এদেশে কম্পিউটার শিক্ষার প্রসার ঘটেছে। সরকারি-বেসরকারি উভয় পর্যায়েই কম্পিউটার শিক্ষা ও প্রশিক্ষণের যথেষ্ট সুযােগ তৈরি হয়েছে। প্রয়ােজনীয়তা ও বাস্তবতার আলােকে আমাদের কম্পিউটার শিক্ষা গ্রহণে আগ্রহী হতে হবে। মানসম্পন্ন কম্পিউটার শিক্ষার প্রসার ছাড়া আমরা আজকের দিনে জাতীয়",
        },
        {
            title: [t("তালিকাভুক্ত ইজারা")],
            description: [listedServiceDiscrioption],
            // "কম্পিউটার আধুনিক বিজ্ঞানের এক বিস্ময়কার আবিষ্কার। এ যন্ত্রটিকে ঘিরে বিশ্বের বুকে এক নীরব প্রযুক্তি বিপ্লব সংঘটিত হয়েছে। এ বিপ্লবের ঢেউ লেগেছে বাংলাদেশের বুকে।  তাই এদেশে কম্পিউটারের ব্যবহার ব্যাপক থেকে ব্যাপকতর হচ্ছে, বিস্তৃত হচ্ছে কম্পিউটারকেন্দ্রিক ব্যবসা-বাণিজ্য। যুগের চাহিদা অনুসারে এদেশে কম্পিউটার শিক্ষার প্রসার ঘটেছে। সরকারি-বেসরকারি উভয় পর্যায়েই কম্পিউটার শিক্ষা ও প্রশিক্ষণের যথেষ্ট সুযােগ তৈরি হয়েছে। প্রয়ােজনীয়তা ও বাস্তবতার আলােকে আমাদের কম্পিউটার শিক্ষা গ্রহণে আগ্রহী হতে হবে। মানসম্পন্ন কম্পিউটার শিক্ষার প্রসার ছাড়া আমরা আজকের দিনে জাতীয়",
            // "সরকারি-বেসরকারি উভয় পর্যায়েই কম্পিউটার শিক্ষা ও প্রশিক্ষণের যথেষ্ট সুযােগ তৈরি হয়েছে। প্রয়ােজনীয়তা ও বাস্তবতার আলােকে আমাদের কম্পিউটার শিক্ষা গ্রহণে আগ্রহী হতে হবে। মানসম্পন্ন কম্পিউটার শিক্ষার প্রসার ছাড়া আমরা আজকের দিনে জাতীয় উন্নতির কথা চিন্তাও করতে পারি না।",
            // "সরকারি-বেসরকারি উভয় পর্যায়েই কম্পিউটার শিক্ষা ও প্রশিক্ষণের যথেষ্ট সুযােগ তৈরি হয়েছে। প্রয়ােজনীয়তা ও বাস্তবতার আলােকে আমাদের কম্পিউটার শিক্ষা গ্রহণে আগ্রহী হতে হবে। মানসম্পন্ন কম্পিউটার শিক্ষার প্রসার ছাড়া আমরা আজকের দিনে জাতীয় উন্নতির কথা চিন্তাও করতে পারি না।",
        },
        {
            title: [t("স্পনসরশিপ ইজারা")],
            description: [sponsorshipServiceDiscrioption],
            //  "কম্পিউটার আধুনিক বিজ্ঞানের এক বিস্ময়কার আবিষ্কার। এ যন্ত্রটিকে ঘিরে বিশ্বের বুকে এক নীরব প্রযুক্তি বিপ্লব সংঘটিত হয়েছে। এ বিপ্লবের ঢেউ লেগেছে বাংলাদেশের বুকে। তাই এদেশে কম্পিউটারের ব্যবহার ব্যাপক থেকে ব্যাপকতর হচ্ছে, বিস্তৃত হচ্ছে কম্পিউটারকেন্দ্রিক ব্যবসা-বাণিজ্য। যুগের চাহিদা অনুসারে এদেশে কম্পিউটার শিক্ষার প্রসার ঘটেছে। সরকারি-বেসরকারি উভয় পর্য   ায়েই কম্পিউটার শিক্ষা ও প্রশিক্ষণের যথেষ্ট সুযােগ তৈরি হয়েছে। প্রয়ােজনীয়তা ও বাস্তবতার আলােকে আমাদের কম্পিউটার শিক্ষা গ্রহণে আগ্রহী হতে হবে। মানসম্পন্ন কম্পিউটার শিক্ষার প্রসার ছাড়া আমরা আজকের দিনে জাতীয়",
            // "সরকারি-বেসরকারি উভয় পর্যায়েই কম্পিউটার শিক্ষা ও প্রশিক্ষণের যথেষ্ট সুযােগ তৈরি হয়েছে। প্রয়ােজনীয়তা ও বাস্তবতার আলােকে আমাদের কম্পিউটার শিক্ষা গ্রহণে আগ্রহী হতে হবে। মানসম্পন্ন কম্পিউটার শিক্ষার প্রসার ছাড়া আমরা আজকের দিনে জাতীয় উন্নতির কথা চিন্তাও করতে পারি না।",
        },
    ];
    const applyImportentDocData = processLeaseAttachmentType;
    const processLeaseItemNameData = processLeaseItemNameList;


    return (
        <div className="container pt-5">
            <ContextJSX>
                <BodyClassName className={`about-us-body-class`} />
                <MetaTag>
                    <MetaTag.Title>{t("Process Lease")}</MetaTag.Title>
                </MetaTag>
                <Header>
                    <Header.PageTitle>{t("Process Lease")}</Header.PageTitle>
                </Header>
                {/* <Breadcrumb>
                    <Breadcrumb.Item>{t("Process Lease")}</Breadcrumb.Item>
                </Breadcrumb> */}
            </ContextJSX>
            {/* ------- main containtent ------- */}
            <section className="mb-5">
                <Row gutter={30}>
                    <Col span={24} md={{ span: 10 }} xl={{ span: 6 }}>
                        <div className="apply-container">
                            {/* --------- apply buttons --------- */}
                            <div className="apply-container__apply-links">
                                <Link to="/" className="btn btn-apply-plms mb-4" style={{ background: "#205687" }}>
                                    {t("তালিকাভুক্ত ইজারা আবেদন")}
                                    <PaperPlanBlueIcon />
                                </Link>
                                <Link to="/" className="btn btn-apply-plms" style={{ background: "#1184C5" }}>
                                {t("স্পনসরশিপ ইজারা আবেদন")}
                                    <PaperPlanDarkIcon />
                                </Link>
                            </div>

                            {/* --------- Apply Importent Doc / প্রয়োজনীয় ডকুমেন্ট  --------- */}
                            <div className="apply-container__apply-importent-doc rounded p-3 my-5">
                                <h3 className="h6 pb-2">{t("প্রয়োজনীয় ডকুমেন্ট")}</h3>

                                {/* "ব্যাংক সলভেন্সী সার্টিফিকেট (১ বছর)",
    "আবেদনকারীর NID",
    "আবেদনকারীর TIN",
    "প্রতিষ্ঠানের ট্রেড লাইসেন্স",
    "পরিবেশ মন্ত্রণালয়ের অনাপত্তি পত্র",
    "পরিবেশ অধিদপ্তরের অনাপত্তি পত্র",
    "শিল্প স্থাপনার জন্য বিদ্যুৎ ও গ্যাস সরবরাহের ক্ষেত্রে সংশ্লিষ্ট কর্তৃপক্ষের অনুমতি কপি", */}
                                <ul className="p-0">
                                    {applyImportentDocData.map((item, i) => {
                                        return (
                                            <li key={i} className="d-flex align-items-start gap-2 py-1">
                                                <span className="">
                                                    <ListIcon />
                                                </span>
                                                {item}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* --------- Apply Information buttons  --------- */}
                            <div className="apply-container__apply-links">
                                <Link to="/" className="btn btn-apply-plms mb-4" style={{ background: "#3E1498" }}>
                                {t("আবেদনের সর্বশেষ অবস্থা")}
                                </Link>
                                <Link to="/" className="btn btn-apply-plms" style={{ background: "#DD6A00" }}>
                                {t("তালিকাভুক্ত ইজারা সমূহ")}
                                </Link>
                            </div>

                            {/* -------- সেবার মূল্য এবং পরিশোধ পদ্ধতি --------- */}
                            <div className="apply-container__payment-method rounded p-3 my-5">
                                <h3 className="h6 pb-2">{t("সেবার মূল্য এবং পরিশোধ পদ্ধতি")}</h3>
                                <ul className="p-0">
                                    <li className="d-flex align-items-start justify-content-between gap-2 py-1">
                                        <div className="d-flex align-items-center gap-2">
                                            <span>
                                                <RightAngleArrowIcon />
                                            </span>
                                            <p className="m-0">{t("আবেদন ফি")}</p>
                                        </div>
                                        <span className="fw-bold">{CommonUtils.ToLocalNumber(instructionList[0]?.application_fee, isBangla) } {t("টাকা")}</span>
                                    </li>
                                    {paymentMethodData.map((item, i) => {
                                        return (
                                            <li
                                                key={i}
                                                className="d-flex align-items-start justify-content-between gap-2 py-1"
                                            >
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="block mt-1">
                                                        <RightAngleArrowIcon />
                                                    </span>
                                                    <p className="m-0">{item.label}</p>
                                                </div>
                                                <span className="fw-bold">{item.value}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col span={24} md={{ span: 14 }} xl={{ span: 12 }}>
                        <div className="middel-content__container">
                            <h2 className="fw-bold h4">
                            {t("অনুগ্রহ করে মেনু থেকে আপনার ইজারা আবেদনের অপশনটি নির্বাচন করুন")}
                            </h2>
                            <div>
                                {mainContentData.map((data, i) => {
                                    return (
                                        <div key={i} className="middel-content">
                                            <h3>{data.title}</h3>
                                            {data.description.map((paragraph, pI) => {
                                                return <p key={pI}>{paragraph}</p>;
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Col>
                    <Col span={24} xl={{ span: 6 }}>
                        <div>
                            <InfoBox
                                title={t("নোটিশ সমূহ")}
                                titleColor="#DD6A00"
                                titleBorderColor="#20A3CC"
                                // content={[
                                //     {
                                //         link: "/",
                                //         label: "বিসিএসআইআর-এর উদ্ভাবিত পদ্ধতির লিজ বৃদ্ধি সংক্রান্ত কমিটি",
                                //     },
                                //     {
                                //         link: "/",
                                //         label: "বিসিএসআইআর এর ওয়েবসাইট মনিটরিং কমিটি",
                                //     },
                                //     {
                                //         link: "/",
                                //         label: "বিজ্ঞানীদের রিসার্চ ড্যাটাবেজ প্রস্তুতকরণ সম্পর্কিত কমিটি গঠন",
                                //     },
                                //     {
                                //         link: "/",
                                //         label: "বিসিএসআইআর এর শুদ্ধাচার চর্চার জন্য শ্রেষ্ঠ কর্মচারী নির্বাচন",
                                //     },
                                // ]}
                                content={selectedNoticeList}
                            />
                            <InfoBox
                                title={t("সর্বশেষ তালিকাভুক্ত ইজারা সমূহ")}
                                titleColor="#3E1498"
                                titleBorderColor="#CC2020"
                                // content={[
                                //     {
                                //         link: "/",
                                //         label: "Production of Break oil-1979",
                                //     },
                                //     {
                                //         link: "/",
                                //         label: "Production of Lubricating grease-1987",
                                //     },
                                //     {
                                //         link: "/",
                                //         label: "Production of plaster of parish -1990",
                                //     },
                                //     {
                                //         link: "/",
                                //         label: "Production of Textile Sizing Compound-1990",
                                //     },
                                //     {
                                //         link: "/",
                                //         label: "Production of Activated bleaching earth-1990",
                                //     },
                                // ]}

                                content={processLeaseItemNameData }
                            />
                            <InfoBox
                                title={t("বিজ্ঞাপন সমূহ")}
                                titleColor="#DD009F"
                                titleBorderColor="#169EEA"
                                // content={[
                                //     {
                                //         link: "/",
                                //         label: "Production of Break oil-1979",
                                //     },
                                //     {
                                //         link: "/",
                                //         label: "Production of Lubricating grease-1987",
                                //     },
                                //     {
                                //         link: "/",
                                //         label: "Production of plaster of parish -1990",
                                //     },
                                //     {
                                //         link: "/",
                                //         label: "Production of Textile Sizing Compound-1990",
                                //     },
                                //     {
                                //         link: "/",
                                //         label: "Production of Activated bleaching earth-1990",
                                //     },
                                // ]}
                                content={selectedAdvertisementList}
                            />
                        </div>
                    </Col>
                </Row>
            </section>

            {/* ---------  ইজারা গ্রহণের প্রক্রিয়া  --------- */}
            <section className="lease-process rounded mt-5">
                <div className="lease-process__heading text-center">
                    <h2 className="h4 fw-bold">{t("ইজারা গ্রহণের প্রক্রিয়া")}</h2>
                    <p className={`${isMobile || isTablet ? "w-100" : "w-75"} m-auto`}>
                        {t("সরকারি-বেসরকারি উভয় পর্যায়েই কম্পিউটার শিক্ষা ও প্রশিক্ষণের যথেষ্ট সুযােগ তৈরি হয়েছে। প্রয়ােজনীয়তা ও বাস্তবতার আলােকে আমাদের কম্পিউটার শিক্ষা গ্রহণে আগ্রহী হতে হবে।")}
                    </p>
                </div>
                <div className="lease-process__content pt-5">
                    <div>
                        <img src={ApplyImg} alt="Apply" />
                        <p>{t("আবেদন")}</p>
                        <span>
                            <LeaseProcessArrowIco />
                        </span>
                    </div>
                    <div>
                        <img src={ApplyVerificationImg} alt="ApplyVerificationImg" />
                        <p>{t("আবেদন যাচাই")}</p>
                        <span className="d-none d-sm-block">
                            <LeaseProcessArrowIco />
                        </span>
                    </div>
                    <div>
                        <img src={VisitSiteImg} alt="VisitSiteImg" />
                        <p>{t("সাইট ভিজিট")}</p>
                        <span className="d-block d-sm-none d-lg-block">
                            <LeaseProcessArrowIco />
                        </span>
                    </div>
                    <div>
                        <img src={PremiumFixingImg} alt="PremiumFixingImg" />
                        <p>{t("প্রিমিয়াম ফিক্সিং")}</p>
                        <span className="d-none d-sm-block">
                            <LeaseProcessArrowIco />
                        </span>
                    </div>
                    <div>
                        <img src={PaymentImg} alt="PaymentImg" />
                        <p>{t("পেমেন্ট")}</p>
                        <span>
                            <LeaseProcessArrowIco />
                        </span>
                    </div>
                    <div>
                        <img src={AgreementImg} alt="AgreementImg" />
                        <p>{t("এগ্রিমেন্ট")}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

interface InfoBoxProps {
    title: string;
    titleColor?: string;
    titleBorderColor?: string;
    content: { link: string; label: string }[];
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, titleColor = "#000", titleBorderColor = "#000", content }) => {
    return (
        <div className="info-box">
            <h3 className="info-box__title" style={{ color: titleColor }}>
                {title}
                <span style={{ background: titleBorderColor }}></span>
            </h3>

            <ul className="info-box__content-list">
                {content.map((item, i) => {
                    return (
                        <li key={i}>
                            <Link to={`${item.link}`} className="info-box__content-list__link">
                                <span className="info-box__content-list__link_logo">
                                    <RightAngleArrowIcon />
                                </span>
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default LandingPage;
