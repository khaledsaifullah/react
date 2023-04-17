import React, { FC, useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Form, Spin } from "antd";
import queryString, { parse } from "query-string";
import { DateTimeUtils, Message } from "../../../../../../utils";
import BuildingDetailsListFilter from "./BuildingDetailsList.filter";
import BuildingDetailsListing from "./BuildingDetailsList.listing";
import BuildingDetailsListPagination from "./BuildingDetailsList.pagination";
import { useForm } from "../../../../../../hooks/useForm";
import { BuildingDetailsApi } from "../../../../../../api";
import { useTranslation } from "react-i18next";
import ContextJSX from '../../../../../../components/ContextJsx';
import { BodyClassName } from '../../../../../../components/BodyClassName/BodyClassName';
import MetaTag from '../../../../../../components/MetaTag';
import Breadcrumb from '../../../../../../components/Breadcrumb';
import { CONSTANT_COMMON } from "../../../../../../constants";

const initialState = {
    search: '',
    entity: {},
    entityId: null,
    buildingInfo: {},
    accommodationList: [],
    policyInfo: [],
    filters: {
        status: null,
        start_date: null,
        end_date: null,
        start_time: null,
        end_time: null,
        booking_slot: null,
        time_slot: null,
    },
    pagination: {
        currentPage: 1,
        pageSize: 10,
    },
    totalCount: 0,
    selectedRowKeys: [],
    sort: 'id desc',
    view: null,
    loading: false,
    fields: {},
}

const BuildingDetailsListController: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = parse(location.search);
    const payload = useRef<any>({});
    const { buildingId, accommodationType } = useParams();

    const queryState = {
        search: queryParams?.q || initialState.search,
        filters: {
            status: queryParams?.status || initialState.filters.status,
            start_date: queryParams?.start_date || initialState.filters.start_date,
            end_date: queryParams?.end_date || initialState.filters.end_date,
            start_time: queryParams?.start_time || initialState.filters.start_time,
            end_time: queryParams?.end_time || initialState.filters.end_time,
            booking_slot: queryParams?.booking_slot || initialState.filters.booking_slot,
            time_slot: queryParams?.time_slot || initialState.filters.time_slot,
        },
        pagination: {
            currentPage: queryParams?.page || initialState.pagination.currentPage,
            pageSize: queryParams?.pageSize || initialState.pagination.pageSize,
        },
        sort: queryParams?.sort || initialState.sort,
        view: queryParams?.view || initialState.view,
        entity: queryParams?.entity || initialState.entity,
        entityId: queryParams?.entityId || initialState.entityId,
    }

    const { formRef, initialValues, resetForm } = useForm({
        search: queryState.search,
        status: queryState.filters.status,
        start_date: queryState.filters.start_date ? DateTimeUtils.convertStringToDate(queryState.filters.start_date) : null,
        end_date: queryState.filters.end_date ? DateTimeUtils.convertStringToDate(queryState.filters.end_date) : null,
        start_time: queryState.filters.start_time ? DateTimeUtils.formatTime(queryState.filters.start_time) : null,
        end_time: queryState.filters.end_time ? DateTimeUtils.formatTime(queryState.filters.end_time) : null,
        booking_slot: queryState.filters.booking_slot,
        time_slot: queryState.filters.time_slot,
    });
    const [buildingInfo, setBuildingInfo] = useState<any>(initialState.buildingInfo);
    const [accommodationList, setAccommodationList] = useState<any[]>(initialState.accommodationList);
    const [policyInfo, setPolicyInfo] = useState<any[]>(initialState.policyInfo);
    const [view, setView] = useState(queryState.view)
    const [search, setSearch] = useState<any>(queryState.search);
    const [filters, setFilters] = useState<any>(queryState.filters);
    const [sort, setSort] = useState(queryState.sort);
    const [pagination, setPagination] = React.useState<any>(queryState.pagination);
    const [totalCount, setTotalCount] = useState(initialState.totalCount);
    const [loading, setLoading] = useState(initialState.loading);
    const [entity, setEntity] = useState(queryState.entity);
    const [entityId, setEntityId] = useState(queryState.entityId);
    const [selectedRowKeys, setSelectedRowKeys] = React.useState(initialState.selectedRowKeys);
    const [reloadListing, setReloadListing] = useState<number>(Date.now());

    useEffect(() => {
        initData();
    }, [search, filters, sort, pagination, reloadListing])

    useEffect(() => {
        handleUrl();
    }, [entityId])

    const initData = async () => {
        await handleUrl();
        await handlePayload();
        if (buildingId) {
            await loadData();
        }
    }

    const loadData = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            BuildingDetailsApi.list(payload.current)
                .then(res => {
                    setBuildingInfo(res.data.building ? res.data.building : {});
                    setAccommodationList(res.data.accommodations ? res.data.accommodations : []);
                    setPolicyInfo(res.data.policy ? res.data.policy : []);
                    setTotalCount(res.data.meta.totalCount);
                    setLoading(false);
                    resolve(res);
                })
                .catch(err => {
                    console.error("error", err);
                    Message.error('A network error occurred. Please try again later.');
                    setLoading(false);
                    reject(err);
                });
        });
    }

    const handleUrl = (): void => {
        let urlObject: any = {}

        if (search) {
            urlObject.q = search
        }
        if (filters.status) {
            urlObject.status = filters.status
        }
        if (filters.start_date) {
            urlObject.start_date = filters.start_date
        }
        if (filters.end_date) {
            urlObject.end_date = filters.end_date
        }
        if (filters.start_time) {
            urlObject.start_time = filters.start_time
        }
        if (filters.end_time) {
            urlObject.end_time = filters.end_time
        }
        if (filters.booking_slot) {
            urlObject.booking_slot = filters.booking_slot
        }
        if (filters.time_slot) {
            urlObject.time_slot = filters.time_slot
        }

        if (sort !== initialState.sort) {
            urlObject.sort = sort
        }
        if (pagination.currentPage !== initialState.pagination.currentPage) {
            urlObject.page = pagination.currentPage
        }
        if (pagination.pageSize !== initialState.pagination.pageSize) {
            urlObject.pageSize = pagination.pageSize
        }
        if (view !== initialState.view) {
            urlObject.view = view
        }
        if (entityId) {
            urlObject.entityId = entityId
        }
        if (Object.keys(urlObject).length) {
            navigate({ search: queryString.stringify(urlObject) });
        }
        else {
            navigate(`${location.pathname}`);
        }
    }

    const processFilters = (): string => {
        let filterString = "1=1";

        if (filters.status) {
            filterString += " AND status='" + filters.status + "'";
        }

        return filterString
    }

    const processQueryParams = () => {
        let filterString = {};

        if (filters.start_date) {
            filterString['start_date'] = DateTimeUtils.formatDate(filters.start_date, CONSTANT_COMMON.DATE_FORMAT_DATABASE);
        }
        if (filters.end_date) {
            filterString['end_date'] = DateTimeUtils.formatDate(filters.end_date, CONSTANT_COMMON.DATE_FORMAT_DATABASE);
        }
        if (filters.start_time) {
            filterString['start_time'] = DateTimeUtils.formatTime(filters.start_time, CONSTANT_COMMON.DATE_PICKER_TIME_FORMAT_D);
        }
        if (filters.end_time) {
            filterString['end_time'] = DateTimeUtils.formatTime(filters.end_time, CONSTANT_COMMON.DATE_PICKER_TIME_FORMAT_D);
        }
        if (filters.booking_slot) {
            filterString['booking_slot'] = filters.booking_slot;
        }
        if (filters.time_slot) {
            filterString['time_slot'] = filters.time_slot;
        }

        return filterString
    }

    const processOrderBy = (): string => {
        let orderByString
        if (sort === 'date-desc') {
            orderByString = 'id desc';
        }
        else {
            orderByString = sort;
        }

        return orderByString
    }

    const handlePayload = (): void => {
        payload.current = {
            '$select': '',
            '$search': search,
            '$filter': processFilters(),
            '$queryParams': processQueryParams(),
            '$expand': '',
            '$orderby': processOrderBy(),
            '$top': pagination.pageSize,
            '$skip': pagination.pageSize * (pagination.currentPage - 1),

            '$buildingId': buildingId,
            '$accommodationType': accommodationType,
        }
    }

    const handleReset = () => {
        setSearch(initialState.search);
        setFilters({
            status: initialState.filters.status,
            start_date: initialState.filters.start_date,
            end_date: initialState.filters.end_date,
            start_time: initialState.filters.start_time,
            end_time: initialState.filters.end_time,
            booking_slot: initialState.filters.booking_slot,
            time_slot: initialState.filters.time_slot,
        });
        setPagination({ currentPage: initialState.pagination.currentPage, pageSize: initialState.pagination.pageSize });
        setSort(initialState.sort);
        setView(initialState.view);
        resetForm();
    };

    const handleReloadListing = () => {
        setReloadListing(Date.now());
    };

    const handleOnChanged = (fieldName: string, value: any, text?: any) => {
        if (fieldName === 'filter_status') {
            setFilters({
                ...filters,
                status: value,
            });
        }
        if (fieldName === 'start_date') {
            setFilters({
                ...filters,
                start_date: value,
            });
        }
        if (fieldName === 'end_date') {
            setFilters({
                ...filters,
                end_date: value,
            });
        }
        if (fieldName === 'start_time') {
            setFilters({
                ...filters,
                start_time: value,
            });
        }
        if (fieldName === 'end_time') {
            setFilters({
                ...filters,
                end_time: value,
            });
        }
        if (fieldName === 'booking_slot') {
            setFilters({
                ...filters,
                booking_slot: value,
            });
        }
        if (fieldName === 'time_slot') {
            setFilters({
                ...filters,
                time_slot: value,
            });
        }
        else if (fieldName === 'selected_row_keys') {
            setSelectedRowKeys(value);
        }
        else if (fieldName === 'search') {
            setSearch(value)
        }
        else if (fieldName === 'view_type') {
            setView(value);
        }
        else if (fieldName === 'pagination_change_page_and_size') {
            setPagination({
                ...pagination,
                currentPage: value,
                pageSize: text,
            });
        }
    }

    const handleCallbackFunc = (event: any, action: string, recordId?: any, data?: any) => {
        if (event === null || event === undefined || event === '') {
            event = event ? event : 'singleAction';
        }
        else if (event == 'singleAction' && action == 'reloadListing') {
            handleReloadListing();
        }
        else if (event == 'singleAction' && action == 'resetListing') {
            handleReset();
        }
    }

    return (
        <>
            <ContextJSX>
                <BodyClassName className={'component-grant'} />
                <MetaTag>
                    <MetaTag.Title>{t('Auditorium Details')}</MetaTag.Title>
                </MetaTag>
                <Breadcrumb>
                    <Breadcrumb.Item>{t('OSAM')}</Breadcrumb.Item>
                    <Breadcrumb.Item>{t(buildingInfo?.building_name)}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>
            <Form form={formRef} name="auditoriumPageListingFilterForm" initialValues={initialValues} >
                <>
                    <BuildingDetailsListFilter
                        filters={filters}
                        handleOnChanged={handleOnChanged}
                        handleCallbackFunc={handleCallbackFunc}
                    />
                    <BuildingDetailsListing
                        loading={loading}
                        buildingInfo={buildingInfo}
                        accommodationList={accommodationList}
                        policyInfo={policyInfo}
                        reloadListing={reloadListing}
                        selectedRowKeys={selectedRowKeys}
                        handleOnChanged={handleOnChanged}
                        handleCallbackFunc={handleCallbackFunc}
                        accommodationType={accommodationType}

                        filters={filters}
                        setFilters={setFilters}
                        initialFilterValue={initialState.filters}
                    />
                    {/*<BuildingDetailsListPagination*/}
                    {/*    loading={loading}*/}
                    {/*    pagination={pagination}*/}
                    {/*    totalCount={totalCount}*/}
                    {/*    handleOnChanged={handleOnChanged}*/}
                    {/*/>*/}
                </>
            </Form>
        </>
    );
}

export default BuildingDetailsListController;

