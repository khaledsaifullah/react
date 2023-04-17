import React, { FC } from 'react';
import { Descriptions, Row, Col } from 'antd';
import { useTranslation } from "react-i18next";
import "./BookingDetailsView.style.scss"

const BookingPageView: FC<any> = props => {
    const { itemData } = props;
    const DescriptionsItem = Descriptions.Item;
    const { t } = useTranslation();
    return (
        <>
            <h1>Accommodation Details View</h1>
        </>
    );
}
export default React.memo(BookingPageView);
