import React, { FC } from 'react'
import { Table } from "antd";
import ListMoreItemAction from "../../../../../../../../components/Actions/ListMoreItemAction";
import { ParticipantInformationAction } from "../Actions/ParticipantInformation.actions";
import { useTranslation } from "react-i18next";
import { CommonUtils } from '../../../../../../../../utils';

const ParticipantInformationList: FC<any> = props => {
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
            dataIndex: "name",
            key: 'name',
            title: t("Name"),
        },
        {
            dataIndex: "designation",
            key: 'designation',
            title: t("Designation"),
        },
        {
            dataIndex: "mobile_no",
            key: 'mobile_no',
            title: t("Mobile No"),
        },
        {
            dataIndex: 'action',
            key: 'action',
            title: t('Action'),
            hidden: isShowAction,
            render: (text: string, record: any, index: number) => (
                <ListMoreItemAction
                    entityIndex={index}
                    actionList={ParticipantInformationAction.LIST_ITEM_ACTION}
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

export default ParticipantInformationList;