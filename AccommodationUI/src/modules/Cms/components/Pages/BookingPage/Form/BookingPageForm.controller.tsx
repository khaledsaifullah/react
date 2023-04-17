import React, { FC, useContext, useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useForm } from '../../../../../../hooks/useForm';
import { DateTimeUtils, Message } from "../../../../../../utils";
import { AccommodationInformationApi, AllotmentApplicationApi, FackApi, UserApi } from "../../../../../../api";
import { useTranslation } from "react-i18next";
import BookingPageForm from "./BookingPageForm.form";
import { useLang } from "../../../../../../hooks/useLang";
import ContextJSX from '../../../../../../components/ContextJsx';
import { BodyClassName } from '../../../../../../components/BodyClassName/BodyClassName';
import MetaTag from '../../../../../../components/MetaTag';
import Breadcrumb from '../../../../../../components/Breadcrumb';
import { CONSTANT_COMMON } from '../../../../../../constants';
import { AuthContext } from '../../../../../../context/auth/auth.context';
import queryString, { parse } from "query-string";

const initialState = {
    pageTitle: 'Create Booking Page',
    itemData: {},
    userName: "",
    userInfo: {},
    loadingUserInfo: false,
    selectedAccommodationInformation: {},
    familyMemberInformationList: [],
    participantInformationList: [],
    isExternalApplicant: false,
    checkExternalApplicantIsLocalOrForeign: {
        isLocalApplicant: false,
        isForeignApplicant: false,
    },
    checkForAccommodationType: {
        isResidence: false,
        isGuestHouseDormitoryClassRoom: false,
    },
    checkForRentSpaceOpiton: {
        isSquareFeetWise: false
    },
    checkForDurationType: {
        isTimeSlot: false,
        isTimeDuration: false
    },
    checkForResidenceHouseStatus: {
        hasHouse: false,
    },
    salaryEvidenceFileList: [],
    attachmentList: [],
    checkIn: "", // as start date
    checkOut: "", // as end date
    startTime: "",
    endTime: "",
    timeSlot: "",
    fields: {
        title: null,
        description: null,
        status: 1,
    },
    isNewRecord: true,
    loading: false,
}

const BookingPageFormController: FC<any> = props => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { entityId, accommodationId } = useParams();
    const location = useLocation();
    const queryParams = parse(location.search);
    const { lang, getLangPath, getUserLangUrl } = useLang();
    const { userId } = useContext(AuthContext);

    const { formRef, initialValues, isSubmitting, setIsSubmitting, handleChange, handleSubmitFailed, resetForm } = useForm(initialState.fields);

    const queryState = {
        checkIn: queryParams['check-in'] || initialState.checkIn,
        checkOut: queryParams['check-out'] || initialState.checkOut,
        startTime: queryParams['start-time'] || initialState.startTime,
        endTime: queryParams['end-time'] || initialState.endTime,
    }
    const [pageTitle, setPageTitle] = useState(initialState.pageTitle);
    const [itemData, setItemData] = useState(initialState.itemData);
    const [isNewRecord, setIsNewRecord] = useState(initialState.isNewRecord);
    const [loading, setLoading] = useState(initialState.loading);
    const [userName, setUserName] = useState<any>(initialState.userName);
    const [userInfo, setUserInfo] = useState<any>(initialState.userInfo);
    const [loadingUserInfo, setLoadingUserInfo] = useState<boolean>(initialState.loadingUserInfo)
    const [selectedAccommodationInformation, setSelectedAccommodationInformation] = useState<any>(initialState.selectedAccommodationInformation);
    const [loadingSelectedAccommodationInfo, setLoadingSelectedAccommodationInfo] = useState<boolean>(false)
    const [familyMemberInformationList, setFamilyMemberInformationList] = useState<any[]>(initialState.familyMemberInformationList);
    const [participantInformationList, setParticipantInformationList] = useState<any[]>(initialState.participantInformationList);
    const [salaryEvidenceFileList, setSalaryEvidenceFileList] = useState<any[]>(initialState.salaryEvidenceFileList);
    const [attachmentList, setAttachmentList] = useState<any[]>(initialState.attachmentList);
    // Dynamic Form state
    const [isExternalApplicant, setIsExternalApplicant] = useState<boolean>(initialState.isExternalApplicant);
    const [checkExternalApplicantIsLocalOrForeign, setCheckExternalApplicantIsLocalOrForeign] = useState<any>(initialState.checkExternalApplicantIsLocalOrForeign);
    const [checkForAccommodationType, setCheckForAccommodationType] = useState<any>(initialState.checkForAccommodationType);
    const [checkForRentSpaceOpiton, setCheckForRentSpaceOpiton] = useState<any>(initialState.checkForRentSpaceOpiton);
    const [checkForDurationType, setCheckForDurationType] = useState<any>(initialState.checkForDurationType);
    const [checkForResidenceHouseStatus, setCheckForResidenceHouseStatus] = useState<any>(initialState.checkForResidenceHouseStatus)
    const [checkIn, setCheckIn] = useState<any>(queryState.checkIn)
    const [checkOut, setCheckOut] = useState<any>(queryState.checkOut)
    const [startTime, setStartTime] = useState<any>(queryState.startTime)
    const [endTime, setEndTime] = useState<any>(queryState.endTime)

    // FOR DURATION TYPE FULL DAY
    useEffect(() => {
        if (queryParams['duration-type'] == "full-day") {
            if (queryParams['check-in']) {
                setCheckIn(queryParams['check-in'])
            }
            if (queryParams['check-out']) {
                setCheckOut(queryParams['check-out'])
            }
        }
    }, [queryParams['check-in'], queryParams['check-out']])

    // FOR DURATION TYPE TIME-DURATION
    useEffect(() => {
        if (queryParams['duration-type'] == "time-duration") {
            if (queryParams['check-in']) {
                setCheckIn(queryParams['check-in'])
            }
            if (queryParams['check-out']) {
                setCheckOut(queryParams['check-out'])
            }
            if (queryParams['start-time']) {
                setStartTime(queryParams['start-time'])
            }
            if (queryParams['end-time']) {
                setEndTime(queryParams['end-time'])
            }
        }
    }, [queryParams['check-in'], queryParams['check-out'], queryParams['start-time'], queryParams['end-time']])

    useEffect(() => {
        if (entityId) {
            setIsNewRecord(false);
            setPageTitle('Edit Booking Page');
            handleResetForm();
            loadData();
        }
        else {
            handleResetForm();
            setPageTitle(initialState.pageTitle);
            setIsNewRecord(initialState.isNewRecord);
        }
    }, [entityId])

    useEffect(() => {
        if (accommodationId) {
            loadAccommodationAndBuildingInformation(accommodationId)
        }
    }, [accommodationId])

    useEffect(() => {
        if (userId) {
            loadUserById(userId)
        }
    }, [userId])

    useEffect(() => {
        if (userInfo.id) {
            if (userInfo?.user_type == "SERVICE_RECIPIENT") {
                setIsExternalApplicant(true)
                setUserName(userInfo?.name ? userInfo.name : userInfo.first_name)
            } else {
                setIsExternalApplicant(false)
                setUserName(initialState.userName)
            }
        }
    }, [userInfo.id])

    useEffect(() => {
        if (selectedAccommodationInformation.id) {
            if (selectedAccommodationInformation?.accommodation_type == "RESIDENCE_STAFF_QUARTER") {
                setCheckForAccommodationType({
                    isResidence: true,
                    isGuestHouseDormitoryClassRoom: false,
                })
            }
            if (selectedAccommodationInformation?.accommodation_type == "GUEST_HOUSE" || selectedAccommodationInformation?.accommodation_type == "DORMITORY" || selectedAccommodationInformation?.accommodation_type == "CLASS_ROOM") {
                setCheckForAccommodationType({
                    isResidence: false,
                    isGuestHouseDormitoryClassRoom: true,
                })
            }
            if (selectedAccommodationInformation?.rent_space_type == "SQUARE_FEET_WISE") {
                setCheckForRentSpaceOpiton({
                    isSquareFeetWise: true
                })
            }
            if (selectedAccommodationInformation?.duration_type == "TIME_SLOT") {
                setCheckForDurationType({
                    isTimeSlot: true,
                    isTimeDuration: false,
                })
            }
            if (selectedAccommodationInformation?.duration_type == "TIME_DURATION") {
                setCheckForDurationType({
                    isTimeSlot: false,
                    isTimeDuration: true,
                })
            }
        }
    }, [selectedAccommodationInformation.id])

    // Load Building Information by accommodation Id
    const loadAccommodationAndBuildingInformation = (accommodationId: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoadingSelectedAccommodationInfo(true);
            AccommodationInformationApi.getById(accommodationId)
                .then(res => {
                    setSelectedAccommodationInformation(res.data ? res.data : {})
                    setLoadingSelectedAccommodationInfo(false)
                    resolve(res.data)
                })
                .catch(err => {
                    setSelectedAccommodationInformation({})
                    setLoadingSelectedAccommodationInfo(false)
                    reject(err)
                })
        })
    }

    const loadUserById = (id: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoadingUserInfo(true)
            UserApi.getById(id)
                .then(res => {
                    setUserInfo(res.data ? res.data : {})
                    setLoadingUserInfo(false);
                    resolve(res.data)
                })
                .catch(err => {
                    setUserInfo(initialState.userInfo)
                    setLoadingUserInfo(false)
                    reject(err)
                })
        })
    }

    // Check the applicant type is Local or Foreign Applicant ?
    const handleOnChangeExternalApplicantType = (value: any) => {
        if (value == "LOCAL") {
            setCheckExternalApplicantIsLocalOrForeign({ isLocalApplicant: true, isForeignApplicant: false })
        } else if (value == "FOREIGNER") {
            setCheckExternalApplicantIsLocalOrForeign({ isForeignApplicant: true, isLocalApplicant: false })
        }
    }
    // CHECK FOR RESIDENCE HOUSE STATUS - HAS OWN NAME OR OTHERS
    const handleResidenceHouseStatus = (value: any) => {
        if (value == 1) {
            setCheckForResidenceHouseStatus({ hasHouse: true })
        } else if (value == 0) {
            setCheckForResidenceHouseStatus({ hasHouse: false })
        }
    }

    // store all dynamic state property into an object
    const dynamicStateObjectProperties = {
        userName,
        loadingUserInfo,
        isExternalApplicant,
        checkExternalApplicantIsLocalOrForeign,
        checkForAccommodationType,
        checkForRentSpaceOpiton,
        checkForDurationType,
        checkForResidenceHouseStatus,
        handleOnChangeExternalApplicantType,
        handleResidenceHouseStatus
    }

    const loadData = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            AllotmentApplicationApi.getById(entityId)
                .then(res => {
                    setItemData(res.data);
                    setFamilyMemberInformationList(res.data?.family_member_information ?? [])
                    setParticipantInformationList(res.data?.participant_information ?? [])
                    const initFormDta = {
                        ...res.data,
                        res_dob: res.data.res_dob ? DateTimeUtils.convertStringToDate(res.data.res_dob) : null,
                        res_current_joining_date: res.data.res_current_joining_date ? DateTimeUtils.convertStringToDate(res.data.res_current_joining_date) : null,
                        res_joining_date_of_organization_revenue_sector: res.data.res_joining_date_of_organization_revenue_sector ? DateTimeUtils.convertStringToDate(res.data.res_joining_date_of_organization_revenue_sector) : null,
                        res_construction_completion_date: res.data.res_construction_completion_date ? DateTimeUtils.convertStringToDate(res.data.res_construction_completion_date) : null,
                        start_date: res.data.start_date ? DateTimeUtils.convertStringToDate(res.data.start_date) : null,
                        end_date: res.data.end_date ? DateTimeUtils.convertStringToDate(res.data.end_date) : null,
                        start_time: res.data.start_time ? DateTimeUtils.formatTime(res.data.start_time) : null,
                        end_time: res.data.end_time ? DateTimeUtils.formatTime(res.data.end_time) : null,
                    }
                    handleChange(initFormDta)
                    formRef.setFieldsValue(initFormDta)
                    setLoading(false);
                    resolve(res.data);
                })
                .catch(err => {
                    Message.error('A network error occurred. Please try again later.');
                    setLoading(false);
                    reject(err);
                });
        });
    }

    const handleSubmit = (values: any): void => {
        if (entityId) {
            handleUpdate(values);
        }
        else {
            handleCreate(values);
        }
    }

    const handleCreate = (values: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            setIsSubmitting(true);
            const payload = getPayload(values)
            AllotmentApplicationApi.create(payload)
                .then(res => {
                    // Message.success(t('The operation performed successfully.'));
                    if (res?.data?.allotment_id) {
                        navigate(getLangPath(lang, `/booking-details/${res?.data?.allotment_id}`));
                    }
                    setLoading(false);
                    setIsSubmitting(false);
                    resolve(res);
                })
                .catch(err => {
                    Message.error('A network error occurred. Please try again later.');
                    setLoading(false);
                    setIsSubmitting(false);
                    reject(err);
                });
        });
    }

    const handleUpdate = (values: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            setIsSubmitting(true);
            const payload = getPayload(values)
            AllotmentApplicationApi.update(entityId, payload)
                .then(res => {
                    Message.success(t('Booking Page update successfully.'));
                    setLoading(false);
                    setIsSubmitting(false);
                    resolve(res);
                })
                .catch(err => {
                    Message.error('A network error occurred. Please try again later.');
                    setLoading(false);
                    setIsSubmitting(false);
                    reject(err);
                });
        });
    }

    /**
    * Get all the payloads based on the step.
    * @param values Object of values.
    * @returns any.
    */
    const getPayload = (values: any): any => {
        const payload = {
            ...values,
            res_dob: DateTimeUtils.formatDate(values.res_dob, CONSTANT_COMMON.DATE_FORMAT_DATABASE),
            res_salary_evidence: salaryEvidenceFileList?.map(item => item.file_id)?.join(','),
            res_current_joining_date: DateTimeUtils.formatDate(values.res_current_joining_date, CONSTANT_COMMON.DATE_FORMAT_DATABASE),
            res_joining_date_of_organization_revenue_sector: DateTimeUtils.formatDate(values.res_joining_date_of_organization_revenue_sector, CONSTANT_COMMON.DATE_FORMAT_DATABASE),
            res_construction_completion_date: DateTimeUtils.formatDate(values.res_construction_completion_date, CONSTANT_COMMON.DATE_FORMAT_DATABASE),
            attachments: attachmentList?.map(item => item.file_id)?.join(','),
            // DYNAMIC DEFAULT DATA
            organization_id: selectedAccommodationInformation?.organization_id,
            applicant_type: userInfo?.user_type == 'SERVICE_RECIPIENT' ? 'EXTERNAL' : 'INTERNAL',
            application_type: "ONLINE",
            applicant_id: userId,
            accommodation_id: Number(accommodationId),
            building_id: Number(selectedAccommodationInformation?.accommodation_building_information?.id),
            start_date: checkIn ? DateTimeUtils.formatDate(checkIn, CONSTANT_COMMON.DATE_TIME_FORMAT_DATABASE) : null,
            end_date: checkOut ? DateTimeUtils.formatDate(checkOut, CONSTANT_COMMON.DATE_FORMAT_DATABASE) : null,
            start_time: startTime ?? null,
            end_time: endTime ?? null,
            rent_space_type: selectedAccommodationInformation?.rent_space_type,
            duration_type: selectedAccommodationInformation?.duration_type,
            time_slot: queryParams['time-slot'] ?? null,
            status: 0,
            //REPEATER DATA
            familyMemberInformationList: familyMemberInformationList,
            participantInformationList: participantInformationList
        }
        return payload;
    }

    const handleResetForm = () => {
        setItemData({});
        setUserName(initialState.userName)
        setUserInfo(initialState.userInfo);
        setLoadingUserInfo(initialState.loadingUserInfo)
        setIsExternalApplicant(initialState.isExternalApplicant)
        setCheckExternalApplicantIsLocalOrForeign(initialState.checkExternalApplicantIsLocalOrForeign)
        setCheckForAccommodationType(initialState.checkForAccommodationType)
        setCheckForRentSpaceOpiton(initialState.checkForRentSpaceOpiton)
        setCheckForDurationType(initialState.checkForDurationType)
        setCheckForResidenceHouseStatus(initialState.checkForResidenceHouseStatus)
        setSelectedAccommodationInformation(initialState.selectedAccommodationInformation)
        setFamilyMemberInformationList(initialState.familyMemberInformationList)
        setParticipantInformationList(initialState.participantInformationList)
        setSalaryEvidenceFileList(initialState.salaryEvidenceFileList)
        setAttachmentList(initialState.attachmentList)
        formRef.setFieldsValue({});
        resetForm();
    };

    return (
        <>
            <ContextJSX>
                <BodyClassName className={'component-grant'} />
                <MetaTag>
                    <MetaTag.Title>{t('Book Now')}</MetaTag.Title>
                </MetaTag>
                <Breadcrumb>
                    <Breadcrumb.Item>{t('OSAM')}</Breadcrumb.Item>
                    <Breadcrumb.Item>{t('Book Now')}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>
            <BookingPageForm
                loading={loading}
                isNewRecord={isNewRecord}
                pageTitle={pageTitle}
                isSubmitting={isSubmitting}
                formRef={formRef}
                itemData={itemData}
                initialValues={initialValues}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleSubmitFailed={handleSubmitFailed}
                userInfo={userInfo}
                selectedAccommodationInformation={selectedAccommodationInformation}
                setSelectedAccommodationInformation={setSelectedAccommodationInformation}
                loadingSelectedAccommodationInfo={loadingSelectedAccommodationInfo}
                familyMemberInformationList={familyMemberInformationList}
                setFamilyMemberInformationList={setFamilyMemberInformationList}
                participantInformationList={participantInformationList}
                setParticipantInformationList={setParticipantInformationList}
                dynamicStateObjectProperties={dynamicStateObjectProperties}
                salaryEvidenceFileList={salaryEvidenceFileList}
                setSalaryEvidenceFileList={setSalaryEvidenceFileList}
                attachmentList={attachmentList}
                setAttachmentList={setAttachmentList}
            />
        </>
    );
}

export default React.memo(BookingPageFormController);
