import React, { FC } from 'react'
import { useTranslation } from "react-i18next";
import "./BookingDetailsList.style.scss"

const BookingHistoryListing: FC<any> = props => {
    const { t } = useTranslation();
    const { loading } = props;

    return (
        <>
            <h1>Booking Details</h1>
        </>
    );
}

export default React.memo(BookingHistoryListing);
