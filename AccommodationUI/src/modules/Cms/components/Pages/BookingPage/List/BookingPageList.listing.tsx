import React, { FC } from 'react'
import { DateTimeUtils, CommonUtils } from "../../../../../../utils";
import AntTable from "../../../../../../components/Table/AntTable";
import { BookingPageAction } from "../Actions/BookingPage.actions";
import ListItemAction from "../../../../../../components/Actions/ListItemAction";
import { useTranslation } from "react-i18next";
import ViewLink from "../../../../../../components/Link/ViewLink";
import "./BookingPageList.style.scss"

const BookingPageListing: FC<any> = props => {
    const { t } = useTranslation();
    const { loading, listData, selectedRowKeys, onChangeSwitchToggle, handleOnChanged, handleTableChange, handleCallbackFunc } = props;


    return (
        <>
            <h1>Booking details Page</h1>
        </>
    );
}

export default React.memo(BookingPageListing);