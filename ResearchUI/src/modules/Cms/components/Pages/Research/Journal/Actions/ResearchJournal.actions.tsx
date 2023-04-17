import React from "react";
import { EyeOutlined, DeleteOutlined  } from '@ant-design/icons';
import ResearchJournalFormController from "../Form/ResearchJournalForm.controller";
// import GiftTypeViewController from "../View/GiftTypeView.controller";
import ViewAction from "../../../../../../../components/Actions/ViewAction";
import EditAction from "../../../../../../../components/Actions/EditAction";
import DeleteAction from "../../../../../../../components/Actions/DeleteAction";

export const ResearchJournalAction = {
    COMMON_ACTION: {
        CREATE: {
            type: 'item',
            title: 'New Gift Type',
            action: 'create',
            link: { to: '' },
            permission: 'research:journalName:create',
            component: ResearchJournalFormController,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        EDIT: {
            type: 'item',
            title: 'Edit Gift Type',
            action: 'edit',
            link: { to: '' },
            permission: 'research:journalName:edit',
            component: ResearchJournalFormController,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        VIEW: {
            type: 'item',
            title: 'View Gift Type',
            action: 'view',
            link: { to: '' },
            permission: 'research:journalName:view',
            component: ResearchJournalFormController,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        DELETE: {
            type: 'item',
            title: 'Delete Gift Type',
            action: 'delete',
            link: { to: '' },
            permission: 'research:journalName:delete',
            component: '',
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
    },
    LIST_ITEM_ACTION: [
        {
            type: 'item',
            title: 'View',
            action: 'active',
            link: { to: '' },
            permission: 'research:journalName:view',
            component: ViewAction,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        {
            type: 'item',
            title: 'Edit',
            action: 'inactive',
            link: { to: '' },
            permission: 'research:journalName:edit',
            component: EditAction,
            className: 'grid-edit-action',
            icon: <EyeOutlined />,
        },
        {
            type: 'item',
            title: 'Delete',
            action: 'delete',
            link: { to: '' },
            permission: 'research:journalName:delete',
            component: DeleteAction,
            className: 'grid-delete-action',
            icon: <DeleteOutlined />,
        },
    ],
    BULK_ACTION: {
        permission: 'research:journalName:multiSelect',
        action_list: [
            {
                type: 'item',
                title: 'Mark as Active',
                action: 'active',
                link: { to: '' },
                permission: '',
                component: '',
                className: 'grid-view-action',
                icon: <EyeOutlined />,
            },
            {
                type: 'item',
                title: 'Mark as Inactive',
                action: 'inactive',
                link: { to: '' },
                permission: '',
                component: '',
                className: 'grid-view-action',
                icon: <EyeOutlined />,
            },
            {
                type: 'item',
                title: 'Delete',
                action: 'delete',
                link: { to: '' },
                permission: 'research:journalName:delete',
                component: '',
                className: 'grid-view-action',
                icon: <EyeOutlined />,
            },
        ],
    },
}


