import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from "antd";
import queryString, { parse } from "query-string";
// import { SetupDataList } from "../../data/Setup.data";
// import MasterDataIndexFilter from "./SetupIndex.filter";
import { useForm } from "../../../../../hooks/useForm";
import { ObjectUtils, StringUtils } from "../../../../../utils";
import { OrganizationApi, ServicesApi } from '../../../../../api';
import { Message } from '../../../../../utils';
import LandingPage from './LandingPage';
import './LandingPage.style.scss';

const initialState = {
    search: '',
    filteredList: [],
    filters: {
        organization: '',
        seeker: '',
    },
    seekerList: [
        {
            "id": 1,
            "name_en": "Citizen",
            "name_bn": "নাগরিক",
            "logo_image": "citizen-icon.png",
        },
        {
            "id": 2,
            "name_en": "Student",
            "name_bn": "ছাত্র",
            "logo_image": "student-icon.png",
        },
        {
            "id": 3,
            "name_en": "Businessman",
            "name_bn": "ব্যবসায়ী",
            "logo_image": "businessman-icon.png",
        },
        {
            "id": 4,
            "name_en": "Researcher",
            "name_bn": "গবেষক",
            "logo_image": "researcher-icon.png",
        },
        {
            "id": 5,
            "name_en": "Scientist",
            "name_bn": "বিজ্ঞানী",
            "logo_image": "scientist-icon.png",
        },
        {
            "id": 6,
            "name_en": "Institute/Organization",
            "name_bn": "ইনস্টিটিউট/সংস্থা",
            "logo_image": "institute-organization-icon.png",
        },

    ]

}

const LandingPageController: FC<any> = props => {
    const { } = props;
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = parse(location.search);

    const queryState = {
        search: queryParams?.q || initialState.search,
        filters: {
            organization: queryParams?.organization || initialState.filters.organization,
            seeker: queryParams?.seeker || initialState.filters.seeker,
        },
    }

    const { formRef, initialValues, resetForm } = useForm({
        search: queryState.search,
        organization: queryState.filters.organization,
        seeker: queryState.filters.seeker,

    });


    const [search, setSearch] = useState<any>(queryState.search);
    const [filters, setFilters] = useState<any>(queryState.filters);

    const [filteredList, setFilteredList] = useState<any[]>();
    const [helpingFlag, setHelpingFlag] = useState<number>(0);


    const [serviceListData, setServiceListData] = useState<any>();

    const [totalCount, setTotalCount] = useState<number>();
    const [organizationList, setOrganizationList] = useState<any>();
    const [seekerList, setSeekerList] = useState<any>(initialState.seekerList);



    useEffect(() => {

        loadServices();
        loadOrganizations();
    }, [search, filters])

    useEffect(() => {
        if (serviceListData && organizationList) {

            initData();
        }
    }, [serviceListData, organizationList, seekerList])

    const initData = async () => {
        await handleUrl();
        await loadData();
    }

    const loadServices = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            // setLoading(true);
            ServicesApi.list()
                .then(res => {
                    setServiceListData(res.data.results);

                    setTotalCount(res.data.meta.totalCount);
                    // setLoading(false);
                    resolve(res);
                })
                .catch(err => {
                    console.error("error", err);
                    Message.error('A network error occurred. Please try again later.');
                    // setLoading(false);
                    reject(err);
                });
        });
    }
    const loadOrganizations = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            // setLoading(true);
            OrganizationApi.list()
                .then(res => {
                    setOrganizationList(res.data.results)
                    // setLoading(false);
                    resolve(res);
                })
                .catch(err => {
                    console.error("error", err);
                    Message.error('A network error occurred. Please try again later.');
                    // setLoading(false);
                    reject(err);
                });
        });
    }
    const loadData = (): void => {
        let filteredDataList;
        if (helpingFlag === 1) {
            filteredDataList = ObjectUtils.objectClone(serviceListData);
        }
        else if (helpingFlag === 2) {
            filteredDataList = ObjectUtils.objectClone(organizationList);
        }
        else if (helpingFlag === 3) {
            filteredDataList = ObjectUtils.objectClone(seekerList);
        }
        if (filteredDataList) {
            let searchFilteredList = filteredDataList.filter((item: any) => {

                if (search && helpingFlag === 1) {
                    return item.title_en.toLowerCase().includes(search.toLowerCase());
                }
                else if (search && helpingFlag === 2) {
                    return item.name_en.toLowerCase().includes(search.toLowerCase());
                }
                else if (search && helpingFlag === 3) {
                    return item.name_en.toLowerCase().includes(search.toLowerCase());
                }
                else {
                    return true;
                }
            });

            processOrderBy(searchFilteredList);
        }

    }

    const handleUrl = (): void => {
        let urlObject: any = {}

        if (search) {
            urlObject.q = search
        }
        // if (filters.organization) {
        //     urlObject.organization = filters.organization
        // }
        // if (filters.seeker) {
        //     urlObject.seeker = filters.seeker
        // }
        if (Object.keys(urlObject).length) {
            navigate({ search: queryString.stringify(urlObject) });
        }
        else {
            navigate(`${location.pathname}`);
        }
    }

    const processOrderBy = (objectArray) => {

        objectArray.sort(function (a, b) {
            if (helpingFlag === 1) {
                return a.title_en.localeCompare(b.title_en)
            }
            else if (helpingFlag === 2) {
                return a.name_en.localeCompare(b.name_en)
            }
            else if (helpingFlag === 3) {
                return a.name_en.localeCompare(b.name_en)
            }

        });

        objectArray.sort((a, b) => a.position - b.position);

        setFilteredList(objectArray);
    }

    const handleOnChanged = (fieldName: string, value: any, text?: any) => {
        setSearch(value);
        if (fieldName === 'service_filter') {
            setHelpingFlag(1);
        }
        else if (fieldName === 'organization_filter') {
            setHelpingFlag(2);
        }
        else if (fieldName === 'seeker_filter') {
            setHelpingFlag(3);
        }
    }

    const handleCallbackFunc = (event: any, action: string, recordId?: any, data?: any) => {
        if (event === null || event === undefined || event === '') {
            event = event ? event : 'singleAction';
        }
        if (event === 'singleAction' && action === 'resetListing') {
            handleReset();
        }
    }

    const handleReset = () => {
        resetForm();
        setSearch(initialState.search);
        // setFilters({
        //     organization: initialState.filters.organization,
        //     seeker: initialState.filters.seeker,
        // });
        formRef.setFieldsValue({ 'search': '' });
    };


    return (


        < div className="card-page-container card-page-container-grant" >

            <Form form={formRef} name="serviceFilterForm" initialValues={initialValues} >

                <LandingPage
                    filteredList={filteredList}
                    organizationList={organizationList}
                    serviceListData={serviceListData}
                    filters={filters}
                    seekerList={seekerList}
                    helpingFlag={helpingFlag}
                    handleOnChanged={handleOnChanged}
                    handleCallbackFunc={handleCallbackFunc}
                />
            </Form>
        </div >
    );
}

export default React.memo(LandingPageController);
