import React from "react";
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import SearchAccommodationFormController from "../Form/SearchAccommodationForm.controller";
import SearchAccommodationViewController from "../View/SearchAccommodationView.controller";
import DeleteAction from "../../../../../../components/Actions/DeleteAction";
import ViewLink from "../../../../../../components/Link/ViewLink";
import EditLink from "../../../../../../components/Link/EditLink";

export const SearchAccommodationAction = {
    COMMON_ACTION: {
        CREATE: {
            type: 'item',
            title: 'New SearchAccommodation',
            action: 'create',
            link: { to: '/setting/automation/searchAccommodation/create', urlPrefix: 'admin' },
            permission: 'searchAccommodation:create',
            component: SearchAccommodationFormController,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        EDIT: {
            type: 'item',
            title: 'Edit SearchAccommodation',
            action: 'edit',
            link: { to: '/setting/automation/searchAccommodation/edit', urlPrefix: 'admin' },
            permission: 'searchAccommodation:edit',
            component: SearchAccommodationFormController,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        VIEW: {
            type: 'item',
            title: 'View SearchAccommodation',
            action: 'view',
            link: { to: '/setting/automation/searchAccommodation/view', urlPrefix: 'admin' },
            permission: 'searchAccommodation:view',
            component: SearchAccommodationViewController,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        DELETE: {
            type: 'item',
            title: 'Delete SearchAccommodation',
            action: 'delete',
            link: { to: '' },
            permission: 'searchAccommodation:delete',
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
            link: { to: '/setting/automation/searchAccommodation/view', urlPrefix: 'admin' },
            permission: 'searchAccommodation:view',
            component: ViewLink,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        {
            type: 'item',
            title: 'Edit',
            action: 'inactive',
            link: { to: '/setting/automation/searchAccommodation/edit', urlPrefix: 'admin' },
            permission: 'searchAccommodation:edit',
            component: EditLink,
            className: 'grid-edit-action',
            icon: <EyeOutlined />,
        },
        {
            type: 'item',
            title: 'Delete',
            action: 'delete',
            link: { to: '' },
            permission: 'searchAccommodation:delete',
            component: DeleteAction,
            className: 'grid-delete-action',
            icon: <DeleteOutlined />,
        },
    ],
    BULK_ACTION: {
        permission: 'searchAccommodation:multiSelect',
        action_list: [
            {
                type: 'item',
                title: 'Mark as Active',
                action: 'active',
                link: { to: '' },
                component: '',
                className: 'grid-view-action',
                icon: <EyeOutlined />,
            },
            {
                type: 'item',
                title: 'Mark as Inactive',
                action: 'inactive',
                link: { to: '' },
                component: '',
                className: 'grid-view-action',
                icon: <EyeOutlined />,
            },
            {
                type: 'item',
                title: 'Delete',
                action: 'delete',
                link: { to: '' },
                permission: 'searchAccommodation:delete',
                component: '',
                className: 'grid-view-action',
                icon: <EyeOutlined />,
            },
        ],
    },
}


