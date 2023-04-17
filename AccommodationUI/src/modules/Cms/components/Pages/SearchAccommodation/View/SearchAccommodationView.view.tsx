import React, { FC } from 'react';
import { Descriptions, Row, Col } from 'antd';
import { DateTimeUtils } from "../../../../../../utils";
import { StatusEnum } from "../../../../../../utils/enums";
import { useTranslation } from "react-i18next";
import EditLink from "../../../../../../components/Link/EditLink";
import { SearchAccommodationAction } from "../Actions/Filter.actions";
import CancelLink from "../../../../../../components/Link/CancelLink";
import "./SearchAccommodationView.style.scss"

const SearchAccommodationView: FC<any> = props => {
    const { itemData } = props;
    const DescriptionsItem = Descriptions.Item;
    const { t } = useTranslation();
    return (
        <>
            <h1>Accommodation Details View</h1>
        </>
    );
}
export default React.memo(SearchAccommodationView);
