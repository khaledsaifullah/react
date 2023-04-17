import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from "antd";
import queryString, { parse } from "query-string";
import { useForm } from "../../../../../hooks/useForm";
import { ObjectUtils, StringUtils } from "../../../../../utils";
import { OrganizationApi, ServicesApi } from '../../../../../api';
import { Message } from '../../../../../utils';
import FindService from './FindService';
import './FindService.style.scss';

const initialState = {
    search: '',
    serviceList: [],
    filters: {
        organization: '',
        seeker: '',
    }
}

const FindServiceController: FC<any> = props => {
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

    const [serviceList, setServiceList] = useState<any[]>();
    const [listData, setListData] = useState<any>();
    const [totalCount, setTotalCount] = useState<number>();
    const [organizationList, setOrganizationList] = useState<any>();


    useEffect(() => {
        loadServices();
        loadOrganizations();
    }, [search, filters])

    useEffect(() => {
        if (listData && organizationList) {
            initData();
        }
    }, [listData, organizationList])

    const initData = async () => {
        await handleUrl();
        await loadData();
    }

    const loadServices = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            // setLoading(true);
            ServicesApi.list()
                .then(res => {
                    setListData(res.data.results)
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

        let serviceDataList = ObjectUtils.objectClone(listData);
        let searchServiceList = serviceDataList.filter((item: any) => {

            if (StringUtils.isNotNull(filters.organization) && search) {
                return item.organization_ids.split(",").includes(filters.organization + "") && item.title_en.toLowerCase().includes(search.toLowerCase());
            }
            else if (StringUtils.isNotNull(filters.organization)) {
                return item.organization_ids.split(",").includes(filters.organization + "");
            }
            else if (StringUtils.isNotNull(filters.seeker) && search) {
                return item.seeker_ids.split(",").includes(filters.seeker + "") && item.title_en.toLowerCase().includes(search.toLowerCase());
            }
            else if (StringUtils.isNotNull(filters.seeker)) {
                return item.seeker_ids.split(",").includes(filters.seeker + "");
            }
            else if (search) {
                return item.title_en.toLowerCase().includes(search.toLowerCase());
            }
            else {
                return true;
            }
        });

        processOrderBy(searchServiceList);
    }

    const handleUrl = (): void => {
        let urlObject: any = {}

        if (search) {
            urlObject.q = search
        }
        if (filters.organization) {
            urlObject.organization = filters.organization
        }
        if (filters.seeker) {
            urlObject.seeker = filters.seeker
        }
        if (Object.keys(urlObject).length) {
            navigate({ search: queryString.stringify(urlObject) });
        }
        else {
            navigate(`${location.pathname}`);
        }
    }

    const processOrderBy = (objectArray) => {
        objectArray.sort(function (a, b) {
            return a.title_en.localeCompare(b.title_en)
        });

        objectArray.sort((a, b) => a.position - b.position);

        setServiceList(objectArray);
    }

    const handleOnChanged = (fieldName: string, value: any, text?: any) => {
        if (fieldName === 'filter_organization') {

            setFilters({
                ...filters,
                organization: value,
            });
        }
        else if (fieldName === 'filter_seeker') {

            setFilters({
                ...filters,
                seeker: value,
            });
        }
        else if (fieldName === 'search') {
            setSearch(value)
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
        setFilters({
            organization: initialState.filters.organization,
            seeker: initialState.filters.seeker,
        });
        formRef.setFieldsValue({ 'search': '' });
    };


    return (


        < div className="card-page-container card-page-container-grant" >

            <Form form={formRef} name="serviceFilterForm" initialValues={initialValues} >

                <FindService
                    serviceList={serviceList}
                    organizationList={organizationList}
                    filters={filters}
                    handleOnChanged={handleOnChanged}
                    handleCallbackFunc={handleCallbackFunc}
                />
            </Form>
        </div >
    );
}

export default React.memo(FindServiceController);
