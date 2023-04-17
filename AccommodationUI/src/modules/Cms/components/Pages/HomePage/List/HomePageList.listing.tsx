import React, { FC } from 'react'
import OrganizationListListing from '../Block/OrganizationList.listing';
import LocationListListing from '../Block/LocationList.listing';
import PopularDealsListListing from '../Block/PopularDealsList.listing';
import ReviewListListing from '../Block/ReviewList.listing';
import CategoriesListSlider from '../Block/CategoriesListSlider';
import "./HomePageList.style.scss"

const HomePageListing: FC<any> = props => {
    const { loading, listData, selectedRowKeys, onChangeSwitchToggle, handleOnChanged, handleTableChange, handleCallbackFunc } = props;

    return (
        <>
            <div className='home-page-maincontent py-5'>
                <div className='container'>
                    <CategoriesListSlider />
                    <PopularDealsListListing
                        loading={loading}
                        listData={listData}
                        selectedRowKeys={selectedRowKeys}
                        onChangeSwitchToggle={onChangeSwitchToggle}
                        handleOnChanged={handleOnChanged}
                        handleTableChange={handleTableChange}
                        handleCallbackFunc={handleCallbackFunc}
                    />
                    <LocationListListing />
                    <OrganizationListListing />
                    <ReviewListListing />
                </div>
            </div>
        </>
    );
}

export default React.memo(HomePageListing);
