import React, { FC } from 'react'
import { Button, Input, Select, Form } from 'antd';
import { RefreshIcon, ResetIcon } from "../../../../../../assets/images/icon/svg";
import { BookingPageAction } from "../Actions/BookingPage.actions";
import BulkAction from "../../../../../../components/Actions/BulkAction";
import { useTranslation } from "react-i18next";
import CreateLink from "../../../../../../components/Link/CreateLink";

const BookingPageListFilter: FC<any> = props => {
    const { t } = useTranslation();
    const { Search } = Input;
    const { Option } = Select;
    const { filters, handleOnChanged, handleCallbackFunc } = props;

    return (
        <>Home Page Top Filter</>
    );
}
export default React.memo(BookingPageListFilter);