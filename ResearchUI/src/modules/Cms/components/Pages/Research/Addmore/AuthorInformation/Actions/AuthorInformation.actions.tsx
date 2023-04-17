import React from "react";
import {DeleteOutlined, EyeOutlined} from '@ant-design/icons';
import EditMoreAction from "../../../../../../../../components/Actions/EditMoreAction";
import DeleteMoreAction from "../../../../../../../../components/Actions/DeleteMoreAction";

export const AuthorInformationAction = {
    LIST_ITEM_ACTION: [
        {
            type: 'item',
            title: 'Edit',
            action: 'inactive',
            link: { to: '' },
            permission: '',
            component: EditMoreAction,
            className: 'grid-edit-action',
            icon: <EyeOutlined />,
        },
        {
            type: 'item',
            title: 'Delete',
            action: 'delete',
            link: { to: '' },
            permission: '',
            component: DeleteMoreAction,
            className: 'grid-delete-action',
            icon: <DeleteOutlined />,
        },
    ],
}


