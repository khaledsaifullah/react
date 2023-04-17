import React, { FC } from 'react'
import { Row } from 'antd';
import { useTranslation } from "react-i18next";
import FilterLeftSidebar from "../Block/FilterLeftSidebar.list";
import FilterRightSidebar from "../Block/FilterRightSidebar.list";
import "./SearchAccommodationList.style.scss"

const FilterListing: FC<any> = props => {
    const { t } = useTranslation();

    const { loading, listData, filters, selectedRowKeys, onChangeSwitchToggle, handleOnChanged, handleTableChange, handleCallbackFunc, filterTypeId, filterType } = props;

    return (
        <>
            <div className='search-filter-detail-contentbody py-4'>
                <div className='container'>
                    <Row gutter={[16, 16]}>
                        <FilterLeftSidebar
                            filters={filters}
                            handleOnChanged={handleOnChanged}
                        />
                        <FilterRightSidebar
                            loading={loading}
                            listData={listData}
                        />
                    </Row>
                </div>
            </div>
        </>
    );
}

export default React.memo(FilterListing);
