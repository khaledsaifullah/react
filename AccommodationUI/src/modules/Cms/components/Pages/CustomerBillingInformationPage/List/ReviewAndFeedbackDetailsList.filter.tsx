import React, { FC } from 'react'
import { Button, Input, Select, Form } from 'antd';
import { useTranslation } from "react-i18next";
const ReviewAndFeedbackDetailsListFilter: FC<any> = props => {
    const { t } = useTranslation();
    const { Search } = Input;
    const { Option } = Select;
    const { filters, handleOnChanged, handleCallbackFunc } = props;

    return (
        <>Home Page Top Filter</>
    );
}
export default React.memo(ReviewAndFeedbackDetailsListFilter);
