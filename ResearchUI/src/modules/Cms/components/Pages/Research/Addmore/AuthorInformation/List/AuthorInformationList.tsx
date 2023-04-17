import React, {FC} from 'react'
import {Button, Table} from "antd";
import ListMoreItemAction from "../../../../../../../../components/Actions/ListMoreItemAction";
import {AuthorInformationAction} from "../Actions/AuthorInformation.actions";
import { CONSTANT_CONFIG } from '../../../../../../../../constants';
import {DownloadOutlined} from "@ant-design/icons";

const AuthorInformationList: FC<any> = props => {
    const { loadingAddMoreItem, moreItemListData, handleCallbackFunc } = props;
    const columns = [
        {
            dataIndex: "sn",
            key: 'sn',
            title: "SN",
            render: (text: string, record: any, index:number) => {
                return index + 1
            },
        },
        {
            dataIndex: "author_type",
            key: 'author_type',
            title: "Author Type",
        },
        {
            dataIndex: "author_name",
            key: 'author_name',
            title: "Author Name",
        },
        {
            dataIndex: "email",
            key: 'email',
            title: "E-mail",
        },
        {
            dataIndex: "institution",
            key: 'institution',
            title: "Institution",
        },
        {
            dataIndex: 'action',
            key: 'action',
            title: 'Action',
            render: (text: string, record: any, index: number) => (
                <ListMoreItemAction
                    entityIndex={index}
                    actionList={AuthorInformationAction.LIST_ITEM_ACTION}
                    handleCallbackFunc={handleCallbackFunc}
                />
            ),
        },
    ];

    return (
        <div className="listing-content listing-content-papers-to-be-attached">
            <Table
                className="table-layout"
                rowKey={(record, index) => index === undefined ? Math.random().toString() : index.toString()}
                rowClassName={(record, index) => (index % 2 === 0 ? 'odd' : 'even')}
                dataSource={moreItemListData}
                columns={columns}
                pagination={false}
                loading={loadingAddMoreItem}
                bordered={false}
            />
        </div>
    );
}

export default AuthorInformationList;