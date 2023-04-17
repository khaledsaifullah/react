import React from "react";
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import HomePageFormController from "../Form/HomePageForm.controller";
import HomePageViewController from "../View/HomePageView.controller";
import DeleteAction from "../../../../../../components/Actions/DeleteAction";
import ViewLink from "../../../../../../components/Link/ViewLink";
import EditLink from "../../../../../../components/Link/EditLink";

export const HomePageAction = {
    COMMON_ACTION: {
        CREATE: {
            type: 'item',
            title: 'New HomePage',
            action: 'create',
            link: { to: '/setting/automation/homePage/create', urlPrefix: 'admin' },
            // permission: 'homePage:create',
            component: HomePageFormController,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        EDIT: {
            type: 'item',
            title: 'Edit HomePage',
            action: 'edit',
            link: { to: '/setting/automation/homePage/edit', urlPrefix: 'admin' },
            // permission: 'homePage:edit',
            component: HomePageFormController,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        VIEW: {
            type: 'item',
            title: 'View HomePage',
            action: 'view',
            link: { to: '/setting/automation/homePage/view', urlPrefix: 'admin' },
            // permission: 'homePage:view',
            component: HomePageViewController,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        DELETE: {
            type: 'item',
            title: 'Delete HomePage',
            action: 'delete',
            link: { to: '' },
            // permission: 'homePage:delete',
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
            link: { to: '/setting/automation/homePage/view', urlPrefix: 'admin' },
            // permission: 'homePage:view',
            component: ViewLink,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        {
            type: 'item',
            title: 'Edit',
            action: 'inactive',
            link: { to: '/setting/automation/homePage/edit', urlPrefix: 'admin' },
            // permission: 'homePage:edit',
            component: EditLink,
            className: 'grid-edit-action',
            icon: <EyeOutlined />,
        },
        {
            type: 'item',
            title: 'Delete',
            action: 'delete',
            link: { to: '' },
            // permission: 'homePage:delete',
            component: DeleteAction,
            className: 'grid-delete-action',
            icon: <DeleteOutlined />,
        },
    ],
    BULK_ACTION: {
        // permission: 'homePage:multiSelect',
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
                // permission: 'homePage:delete',
                component: '',
                className: 'grid-view-action',
                icon: <EyeOutlined />,
            },
        ],
    },
}


