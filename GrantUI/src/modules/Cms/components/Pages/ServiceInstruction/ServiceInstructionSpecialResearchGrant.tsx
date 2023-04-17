import React, {FC, useContext, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import { useLang } from "@/hooks/useLang";
import CircularwiseApplyButton from "../../../../Grant/components/Application/NSTFellowship/Content/CircularwiseApplyButton";
import { useOrganizationList } from "@/hooks/lists/useOrganizationList";
import { useCircularCodeList } from "@/hooks/lists/useCircularCodeList";
import {Button, Card, Spin} from "antd";
import { ReactComponent as MicroscopeIcon } from '@/assets/images/svg/microscope-side-view.svg';
import ServiceInstructionContent from "./ServiceInstructionContent";
import pageIcon from "../../../../../assets/images/icon/microscope-side-view.png";
import { useServiceMappingList } from "@/hooks/lists/useServiceMappingList";
import Header from "../../../../../components/Header";
import ContextJsx from "../../../../../components/ContextJsx";
import {DateTimeUtils} from "@/utils";
import {ReactComponent as FeatherIcon} from "../../../../../assets/images/svg/feather-icon.svg";
import {AuthContext} from "@/context/auth/auth.context";
import {ResearcherProfileApi} from "@/api";
import {CaretUpOutlined} from "@ant-design/icons";
import "./ServiceInstruction.style.scss";

const ServiceInstructionSpecialResearchGrant: FC<any> = (props) => {
    const { t, lang, getLangUrl } = useLang();
    const { loading } = props;

    const serviceSlug = 'special-research-grant';
    const { organizationShortCode } = useParams();
    const { serviceList } = useServiceMappingList();
    const { activeOrganizationList } = useOrganizationList();
    const { circularCodeList } = useCircularCodeList();
    const { userId, isAuthenticated } = useContext(AuthContext);

    const [loadResearcherProfile, setLoadResearcherProfile] = useState<any>(null);
    const [researcherProfileData, setResearcherProfileData] = useState<any>({id: null, status: null});
    const [currentOrganization, setCurrentOrganization] = useState<any>({id: null});
    const [currentServices, setCurrentServices] = useState<any>({id: null, slug: null});
    const [circularData, setCircularData] = useState<any>({id: null});
    const [seeMore, setSeeMore] = useState<any>(false);

    const [showSectionName, setShowSectionName] = useState<any>(null); // PENDING_REVIEW_RESEARCHER_PROFILE , REGISTER_AS_RESEARCHER, APPLY_BUTTON

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (isAuthenticated === false) {
                setShowSectionName('APPLY_BUTTON_AND_REGISTER_AS_RESEARCHER');
            }
            else if (researcherProfileData.status === 'APPROVED') {
                setShowSectionName('APPLY_BUTTON');
            }
            else if (researcherProfileData.status === 'SUBMITTED') {
                setShowSectionName('PENDING_REVIEW_RESEARCHER_PROFILE');
            }
            else if (loadResearcherProfile === false && researcherProfileData.status == null) {
                setShowSectionName('REGISTER_AS_RESEARCHER');
            }
        }, 2000);
        return () => clearInterval(intervalId);
    }, [loadResearcherProfile, researcherProfileData?.status, currentServices?.slug]);


    useEffect(() => {
        if (userId) {
            loadResearcherProfileData(userId);
        }
    }, [userId]);

    useEffect(() => {
        if (activeOrganizationList.length && organizationShortCode) {
            const item = activeOrganizationList.find((o) => o.short_name.toUpperCase() == String(organizationShortCode).toUpperCase());
            setCurrentOrganization(item);
        }
    }, [activeOrganizationList.length, organizationShortCode]);

    useEffect(() => {
        if (serviceList.length && currentOrganization.id && serviceSlug) {
            const item = serviceList.find((o) => o.slug === serviceSlug && o.organization_id == currentOrganization.id);
            setCurrentServices(item);
        }
    }, [serviceList.length, currentOrganization?.id, serviceSlug]);

    useEffect(() => {
        if (circularCodeList.length > 0 && currentServices?.id) {
            const currentTimestamp = DateTimeUtils.currentTimestamp();
            const item = circularCodeList.find((o) => {
                if (currentTimestamp <= DateTimeUtils.formatTimestamp(o.start_date) && currentTimestamp >= DateTimeUtils.formatTimestamp(o.last_date)) {
                    return false;
                }
                if (o.service_id == currentServices?.id && o.status == 1) {
                    return true;
                }
            });
            setCircularData(item);
        }
    }, [circularCodeList.length, currentServices?.id]);

    const loadResearcherProfileData = (userId: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoadResearcherProfile(true);
            ResearcherProfileApi.getByUserId(userId)
                .then(res => {
                    setResearcherProfileData(res.data);
                    setLoadResearcherProfile(false);
                    resolve(res);
                })
                .catch(err => {
                    setLoadResearcherProfile(false);
                    reject(err);
                });
        });
    }

    return (
        <div className="container">
            <ContextJsx>
                <Header>
                    <Header.PageTitle>{lang === "en" ? currentServices?.name_en : currentServices?.name_bn}</Header.PageTitle>
                    <Header.PageIcon>{pageIcon}</Header.PageIcon>
                </Header>
            </ContextJsx>
            <Card className="card-service-content text-center shadow mb-5 rounded card-negative-margin">
                <div className="service-description">
                    <div className="h5">
                        <p>{lang === "en" ? currentServices?.description_en : currentServices?.description_bn}</p>
                    </div>

                    <div className={"more-data-container"}>
                        <div className="h5" style={{marginTop: 15}}>
                            <p>২০০৯-২০১০ হতে ২০২২-২০২৩ অর্থবছর পর্যন্ত প্রদত্ত বিশেষ গবেষণা অনুদানের জন্য বরাদ্দকৃত অর্থ ও প্রকল্পের সংখ্যা নিম্নে উল্লেখ করা হলো:</p>
                        </div>
                        {seeMore && (
                          <table className="table table-striped table-bordered">
                              <tr>
                                  <th>অর্থবছর</th>
                                  <th>অনুদানের পরিমাণ (টাকা)</th>
                                  <th>গবেষণা প্রকল্প (সংখ্যা)</th>
                              </tr>
                              <tr>
                                  <td>২০০৯-২০১০</td>
                                  <td>৮,৬৭,০০,০০০</td>
                                  <td>১৭০</td>
                              </tr>
                              <tr>
                                  <td>২০১০-২০১১</td>
                                  <td>৭,৪৯,০০,০০০</td>
                                  <td>১৫৩</td>
                              </tr>
                              <tr>
                                  <td>২০১১-২০১২</td>
                                  <td>৮,৯৮,৮০,০০০</td>
                                  <td>১৮৫</td>
                              </tr>
                              <tr>
                                  <td>২০১২-২০১৩</td>
                                  <td>৯,৮০,৫০,০০০</td>
                                  <td>২২৩</td>
                              </tr>
                              <tr>
                                  <td>২০১৩-২০১৪</td>
                                  <td>১১,৯৫,০০,০০০</td>
                                  <td>৩২৪</td>
                              </tr>
                              <tr>
                                  <td>২০১৪-২০১৫</td>
                                  <td>১০,২১,০০,০০০</td>
                                  <td>৩১৭</td>
                              </tr>
                              <tr>
                                  <td>২০১৫-২০১৬</td>
                                  <td>১১,৮২,৫০,০০০</td>
                                  <td>৩৮১</td>
                              </tr>
                              <tr>
                                  <td>২০১৬-২০১৭</td>
                                  <td>১১,২৭,০০,০০০</td>
                                  <td>৩৮৩</td>
                              </tr>
                              <tr>
                                  <td>২০১৭-২০১৮</td>
                                  <td>১৪,৪০,৫০,০০০</td>
                                  <td>৪৭৫</td>
                              </tr>
                              <tr>
                                  <td>২০১৮-২০১৯</td>
                                  <td>১৫,০০,০০,০০০</td>
                                  <td>৫০০</td>
                              </tr>
                              <tr>
                                  <td>২০১৯-২০২০</td>
                                  <td>১৬,০০,০০,০০০</td>
                                  <td>৫১১</td>
                              </tr>
                              <tr>
                                  <td>২০২০-২০২১</td>
                                  <td>১৬,০০,০০,০০০</td>
                                  <td>৬৩৮</td>
                              </tr>
                              <tr>
                                  <td>২০২২-২০২৩</td>
                                  <td>১৯,৯৩,০০,০০০</td>
                                  <td>৬৮২</td>
                              </tr>
                              <tr>
                                  <td><strong>মোট</strong></td>
                                  <td><strong>১৭৭,৫৪,৩০,০০০</strong></td>
                                  <td><strong>৫৫২১</strong></td>
                              </tr>
                          </table>
                        )}
                    </div>

                    <div className="text-center">
                        <Button type="link" size={"large"} onClick={(event) => {setSeeMore(!seeMore)}}>
                            {seeMore ? <><CaretUpOutlined /> {t('সংক্ষিপ্ত')}</> : t('...বিস্তারিত') }
                        </Button>
                    </div>

                    {loadResearcherProfile && <Spin size="small" />}

                    {showSectionName === 'APPLY_BUTTON' && (
                        <div className="text-center mt-3">
                            <div className="text-center">
                                <CircularwiseApplyButton
                                    className="btn-apply-large text-uppercase fw-bold"
                                    loading={loading}
                                    organizationShortCode={organizationShortCode}
                                    circularId={circularData?.id}
                                    circularData={circularData}
                                    serviceUrl={currentServices?.slug}
                                    currentServiceId={currentServices?.id}
                                />
                            </div>

                            <p className="small mb-0 mt-2 text-muted">{ t('Please make sure you have read all the requirements and other information here below') }</p>
                        </div>
                    )}

                    {showSectionName === 'APPLY_BUTTON_AND_REGISTER_AS_RESEARCHER' && (
                      <div className="text-center mt-3">
                          <div className="alert alert-info mx-auto" role="alert" style={{ width: '80%', minWidth: '300px' }}>
                              {lang === "en" && (
                                <>
                                    To apply for Special Research Grants, you must be registered as a researcher on the ministry's service portal.
                                    If you are already a registered researcher then login and click <strong>Apply Now</strong> button.<br/>

                                    And if you have not registered yet, then apply for registration by clicking the <strong>Register as a Researcher</strong> button.
                                    After approval of your registration application by the Ministry Authority, you can apply for Special Research Grants, thank you.
                                </>
                              )}
                              {lang === "bn" && (
                                <>
                                    বিশেষ গবেষণা অনুদানের জন্যে আবেদন করতে হলে, আপনাকে মন্ত্রণালয়ের সার্ভিস পোর্টালে গবেষক হিসেবে নিবন্ধিত হতে হবে।
                                    আপনি যদি ইতোমধ্যে নিবন্ধিত গবেষক হয়ে থাকেন তাহলে লগিন করে <strong>Apply Now</strong> বাটন ক্লিক করুন। <br/>

                                    আর যদি এখনো নিবন্ধিত না হয়ে থাকেন তাহলে <strong>Register as Researcher</strong> বাটন ক্লিক করে নিবন্ধনের আবেদন করুন।
                                    মন্ত্রণালয় বা সংশ্লিষ্ট দপ্তর থেকে আপনার নিবন্ধন আবেদন অনুমোদনের পর, আপনি বিশেষ গবেষণা অনুদানের জন্যে আবেদন করতে  পারবেন, ধন্যবাদ।
                                </>
                              )}
                          </div>
                          <div className="text-center">
                              <CircularwiseApplyButton
                                className="btn-apply-large text-uppercase fw-bold"
                                loading={loading}
                                organizationShortCode={organizationShortCode}
                                circularId={circularData?.id}
                                circularData={circularData}
                                serviceUrl={currentServices?.slug}
                                currentServiceId={currentServices?.id}
                              />
                              <Link className={`btn-apply text-uppercase fw-bold ms-3`} to={getLangUrl(lang, `/register-researcher`)} style={{ padding: '10px 20px', fontSize: '20px' }}>
                                  <span>{t('Register as Researcher')}</span>
                                  <MicroscopeIcon style={{ fill: '#fff' }} />
                              </Link>
                          </div>


                          <p className="small mb-0 mt-2 text-muted">{ t('Please make sure you have read all the requirements and other information here below') }</p>
                      </div>
                    )}

                    {showSectionName === 'REGISTER_AS_RESEARCHER' && (
                      <div className="text-center mt-3">
                          <div className="alert alert-info mx-auto" role="alert" style={{ width: '80%', minWidth: '300px' }}>
                              {lang === "en" && (
                                <>
                                    To apply for Special Research Grants, you must be registered as a researcher on the ministry's service portal.
                                    Apply for registration by clicking the <strong>Register as a Researcher</strong> button. After approval of your registration application by the Ministry Authority, you can apply for Special Research Grants, thank you.
                                </>
                              )}
                              {lang === "bn" && (
                                <>
                                    বিশেষ গবেষণা অনুদানের জন্যে আবেদন করতে হলে, আপনাকে মন্ত্রণালয়ের সার্ভিস পোর্টালে গবেষক হিসেবে নিবন্ধিত হতে হবে। <br />
                                    <strong>Register as Researcher</strong> বাটন ক্লিক করে নিবন্ধনের আবেদন করুন। মন্ত্রণালয় বা সংশ্লিষ্ট দপ্তর থেকে আপনার নিবন্ধন আবেদন অনুমোদনের পর, আপনি বিশেষ গবেষণা অনুদানের জন্যে আবেদন করতে পারবেন, ধন্যবাদ।
                                </>
                              )}
                          </div>

                          <div className="text-center">
                              <Link className={`btn-apply`} to={getLangUrl(lang, `/register-researcher`)}>
                                  <span>{t('REGISTER AS RESEARCHER')}</span>
                                  <FeatherIcon />
                              </Link>
                          </div>
                      </div>
                    )}
                    {showSectionName === 'PENDING_REVIEW_RESEARCHER_PROFILE' && (
                        <div className={'register-as-researcher-container'}>
                            <div className="text-center mb-3">
                                <h3>Pending Review</h3>
                                <p>
                                    Your researcher profile has been submitted and is under review. <br />
                                    You will be notified of the result via SMS or email.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </Card>

            <section className="text-center my-5">
                <h3 className="text-uppercase fw-bold section-title mb-0 h4">{t("Before Applying")}</h3>
                <p className="text-muted">{t("The following eligibility requirements needs to met before the application")}</p>
                <Card className="shadow text-start rounded">
                    <ServiceInstructionContent circularData={circularData} />
                </Card>
            </section>
        </div>
    );
};

export default ServiceInstructionSpecialResearchGrant;
