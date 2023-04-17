import React, { FC } from 'react'
import { Row } from 'antd';
import FilterLeftSidebar from "../Block/FilterLeftSidebar.list";
import FilterRightSidebar from "../Block/FilterRightSidebar.list";
import "./SearchAccommodationList.style.scss"

const FilterListing: FC<any> = props => {

    const { loading, listData, filters, handleOnChanged, categoryIds } = props;

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
                            categoryIds={categoryIds}
                        />
                    </Row>
                </div>
            </div>
        </>
    );
}

export default React.memo(FilterListing);
