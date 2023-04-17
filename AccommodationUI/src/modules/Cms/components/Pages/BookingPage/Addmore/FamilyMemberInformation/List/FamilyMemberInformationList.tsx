import React, { FC } from 'react'
import { Table, Button } from "antd";
import ListMoreItemAction from "../../../../../../../../components/Actions/ListMoreItemAction";
import { FamilyMemberInformationAction } from "../Actions/FamilyMemberInformation.actions";
import { useTranslation } from "react-i18next";
import { CommonUtils, DateTimeUtils } from '../../../../../../../../utils';

const FamilyMemberInformationList: FC<any> = props => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language || 'en';
    const isBangla = i18n.language == 'bn';

    const { loadingAddMoreItem, addMoreItemList, handleCallbackFunc, isShowAction } = props;
    let columns = [
        {
            dataIndex: "sn",
            key: 'sn',
            title: t("SN"),
            render: (text: string, record: any, index: number) => {
                return CommonUtils.ToLocalNumber(index + 1, isBangla)
            },
        },
        {
            dataIndex: "member_name",
            key: 'member_name',
            title: t("Member Name"),
        },
        {
            dataIndex: "age",
            key: 'age',
            title: t("Age"),
        },
        {
            dataIndex: "relation",
            key: 'relation',
            title: t("Relation"),
        },
        {
            dataIndex: "discharge_date",
            key: 'discharge_date',
            title: t("Discharge Date"),
            render: (text: string, record: any, index: number) => {
                return DateTimeUtils.formatDateTimeB(record.discharge_date)
            }
        },
        {
            dataIndex: 'action',
            key: 'action',
            title: t('Action'),
            hidden: isShowAction,
            render: (text: string, record: any, index: number) => (
                <ListMoreItemAction
                    entityIndex={index}
                    actionList={FamilyMemberInformationAction.LIST_ITEM_ACTION}
                    handleCallbackFunc={handleCallbackFunc}
                />
            ),
        },
    ];

    columns = columns.filter(item => !item.hidden);

    return (
        <div className="listing-page-content listing-page-content-Inspection">
            <Table
                className="table-layout"
                rowKey={(record, index) => index === undefined ? Math.random().toString() : index.toString()}
                rowClassName={(record, index) => (index % 2 === 0 ? 'odd' : 'even')}
                dataSource={addMoreItemList}
                columns={columns}
                pagination={false}
                loading={loadingAddMoreItem}
                bordered={false}
            />
        </div>
    );
}

export default FamilyMemberInformationList;