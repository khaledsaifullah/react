import React, { FC, useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Form } from "antd";
import queryString, { parse } from "query-string";
import { Message, AntModal } from "../../../../../../utils";
import HomePageListFilter from "./HomePageList.filter";
import HomePageListing from "./HomePageList.listing";
import HomePageListPagination from "./HomePageList.pagination";
import { useForm } from "../../../../../../hooks/useForm";
import { HomePageApi } from "../../../../../../api";
import { useTranslation } from "react-i18next";
import { useLoading } from '../../../../../../hooks/useLoading';

const initialState = {
    search: '',
    entity: {},
    entityId: null,
    listData: [],
    filters: {
        status: '',
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
    bulkAction: {
        action: '',
        field: '',
        value: '',
        ids: [] as any,
    },
}

const HomePageListController: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = parse(location.search);
    const payload = useRef<any>({});
    const { showLoading, hideLoading } = useLoading();

    const queryState = {
        search: queryParams?.q || initialState.search,
        filters: {
            status: queryParams?.status || initialState.filters.status,
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

    const { formRef, initialValues, resetForm } = useForm({ search: queryState.search, status: queryState.filters.status });
    const [listData, setListData] = useState<any[]>(initialState.listData);
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
    const [bulkAction, setBulkAction] = React.useState(initialState.bulkAction);
    const [reloadListing, setReloadListing] = useState<number>(Date.now());

    useEffect(() => {
        initData();
    }, [search, filters, sort, pagination, reloadListing])

    useEffect(() => {
        handleUrl();
    }, [entityId])

    useEffect(() => {
        if (bulkAction.action !== '') {
            executeBulkAction();
        }
    }, [bulkAction])

    const initData = async () => {
        await handleUrl();
        await handlePayload();
        await loadData();
    }

    const loadData = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            // showLoading()
            HomePageApi.list(payload.current)
                .then(res => {
                    setListData(res.data.buildings)
                    setTotalCount(res.data.meta.totalCount);
                    setLoading(false);
                    resolve(res);
                })
                .catch(err => {
                    console.error("error", err);
                    Message.error('A network error occurred. Please try again later.');
                    setLoading(false);
                    reject(err);
                })
            // .finally(() => {
            //     hideLoading();
            // });
        });
    }

    const handleDelete = (value: any, action: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            if (value && action === 'ok') {
                setLoading(true);
                HomePageApi.delete(value)
                    .then(res => {
                        Message.success(t('Delete homePage successfully.'));
                        handleReloadListing();
                        setLoading(false);
                        resolve(res);
                    })
                    .catch(err => {
                        Message.error('A network error occurred. Please try again later.');
                        setLoading(false);
                        reject(err);
                    });
            }
        });
    }

    const executeBulkAction = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            const payload = {
                ...bulkAction
            }
            HomePageApi.bulk(payload)
                .then(res => {
                    handleReloadListing();
                    setLoading(false);
                    resolve(res);
                })
                .catch(err => {
                    Message.error('A network error occurred. Please try again later.');
                    setLoading(false);
                    reject(err);
                });
        });
    };

    const handleUrl = (): void => {
        let urlObject: any = {}

        if (search) {
            urlObject.q = search
        }
        if (filters.status) {
            urlObject.status = filters.status
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
        }
    }

    const onChangeSwitchToggle = (checked: any, record: any) => {
        setEntity(record);

        if (checked === true) {
            setBulkAction({
                ...bulkAction,
                action: 'update_boolean',
                field: 'status',
                value: '1',
                ids: [record.id],
            });
        }
        else {
            setBulkAction({
                ...bulkAction,
                action: 'update_boolean',
                field: 'status',
                value: '0',
                ids: [record.id],
            });
        }
    }

    const handleBulkActions = (action: string) => {
        if (selectedRowKeys.length === 0) {
            Message.error('Please select item(s)');
            return;
        }
        if (action === 'active') {
            setBulkAction({
                ...bulkAction,
                action: 'update_boolean',
                field: 'status',
                value: '1',
                ids: selectedRowKeys,
            });
        }
        else if (action === 'inactive') {
            setBulkAction({
                ...bulkAction,
                action: 'update_boolean',
                field: 'status',
                value: '0',
                ids: selectedRowKeys,
            });
        }
        else if (action === 'delete') {
            AntModal.confirm(t('Delete HomePage'), t('Are you sure you wish to delete selected homePages?'), selectedRowKeys, confirmBulkDelete, 'Delete');
        }
    };

    const confirmBulkDelete = (value: any, action: any) => {
        if (value && action === 'ok') {
            setBulkAction({
                ...bulkAction,
                action: 'delete',
                ids: value,
            });
        }
    };

    const handleActions = (action: string, recordId?: any) => {
        const record = listData.find(item => item.id === Number(recordId));
        setEntity(record);

        if (action === 'delete') {
            AntModal.confirm(t('Delete HomePage'), t('Are you sure you want to delete this homePage?'), recordId, handleDelete, 'Delete');
        }
    };

    const handleReset = () => {
        setSearch(initialState.search);
        setFilters({ status: initialState.filters.status });
        setPagination({ currentPage: initialState.pagination.currentPage, pageSize: initialState.pagination.pageSize });
        setSort(initialState.sort);
        setView(initialState.view);
        resetForm();
    };

    const handleReloadListing = () => {
        setReloadListing(Date.now());
    };

    const handleTableChange = (pagination, filters, sorter, extra) => {
        if (sorter.order === 'ascend') {
            setSort(sorter.field + ' asc');
        }
        else if (sorter.order === 'descend') {
            setSort(sorter.field + ' desc');
        }
        else if (sorter.order === undefined) {
            setSort(initialState.sort);
        }
    };

    const handleOnChanged = (fieldName: string, value: any, text?: any) => {
        if (fieldName === 'filter_status') {
            setFilters({
                ...filters,
                status: value,
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

    const updateListItem = (recordId: any, data: any) => {
        setListData(listData => {
            const index = listData.findIndex(item => item.id === Number(recordId))
            listData[index] = { ...listData[index], ...data };
            return [...listData];
        })
    };

    const handleCallbackFunc = (event: any, action: string, recordId?: any, data?: any) => {
        if (event === null || event === undefined || event === '') {
            event = event ? event : 'singleAction';
        }
        if (event == 'singleAction' && action == 'add') {
            handleActions('add')
        }
        else if (event == 'singleAction' && action == 'edit') {
            handleActions('edit', recordId)
        }
        if (event == 'singleAction' && action == 'view') {
            handleActions('view', recordId)
        }
        else if (event == 'singleAction' && action == 'delete') {
            handleActions('delete', recordId)
        }
        else if (event == 'singleAction' && action == 'reloadListing') {
            handleReloadListing();
        }
        else if (event == 'singleAction' && action == 'resetListing') {
            handleReset();
        }
        else if (event == 'singleAction' && action == 'updateListItem') {
            updateListItem(recordId, data);
        }
        else if (event == 'bulkAction' && action) {
            handleBulkActions(action)
        }
    }

    return (
        <div className="listing-page-container listing-page-container-homePage">
            <Form form={formRef} name="homePageListingFilterForm" initialValues={initialValues} >
                {/* <HomePageListFilter
                    filters={filters}
                    handleOnChanged={handleOnChanged}
                    handleCallbackFunc={handleCallbackFunc}
                /> */}
                <HomePageListing
                    loading={loading}
                    listData={listData}
                    reloadListing={reloadListing}
                    selectedRowKeys={selectedRowKeys}
                    onChangeSwitchToggle={onChangeSwitchToggle}
                    handleOnChanged={handleOnChanged}
                    handleTableChange={handleTableChange}
                    handleCallbackFunc={handleCallbackFunc}
                />
                {/* <HomePageListPagination
                    pagination={pagination}
                    totalCount={totalCount}
                    handleOnChanged={handleOnChanged}
                /> */}
            </Form>
        </div>
    );
}

export default HomePageListController;
