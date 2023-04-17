import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useLang } from "../../../../../../hooks/useLang";
import BuildingInformation from "../Block/BuildingInformation";
import AccommodationList from "../Block/AccommodationList";
import Facility from "../Block/Facility";
import Policy from "../Block/Policy";
import Location from "../Block/Location";
import RatingAndReview from "../Block/RatingAndReview";
import "./BuildingDetailsList.style.scss";
import { Spin } from "antd";

const BuildingDetailsListing: FC<any> = (props) => {
    const { t } = useTranslation();
    const { lang } = useLang();
    const { loading, buildingInfo, accommodationList, accommodationType, handleFilter,
        formRef, filters, setFilters, initialFilterValue, policyInfo } = props;

    return (
        <>
            <div className="auditorium-detail-page py-3">
                <div className="container">
                    <BuildingInformation
                        buildingInfo={buildingInfo}
                        accommodationType={accommodationType}
                        loading={loading}
                    />
                    <AccommodationList
                        accommodationList={accommodationList}
                        accommodationType={accommodationType}
                        handleFilter={handleFilter}
                        formRef={formRef}
                        loading={loading}
                        buildingInfo={buildingInfo}
                        filters={filters}
                        setFilters={setFilters}
                        initialFilterValue={initialFilterValue}
                    />
                    <Facility buildingInfo={buildingInfo} loading={loading} />
                    <Policy buildingInfo={buildingInfo} policyInfo={policyInfo} />
                    <Location buildingInfo={buildingInfo} />
                    <RatingAndReview />
                </div>
            </div>
        </>
    );
};

export default React.memo(BuildingDetailsListing);
