import React from "react";
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import BookingPageFormController from "../Form/ReviewAndFeedbackDetailsForm.controller";
import BookingPageViewController from "../View/ReviewAndFeedbackView.controller";
import DeleteAction from "../../../../../../components/Actions/DeleteAction";
import ViewLink from "../../../../../../components/Link/ViewLink";
import EditLink from "../../../../../../components/Link/EditLink";

export const ReviewAndFeedbackDetailsAction = {
    COMMON_ACTION: {
        CREATE: {
            type: 'item',
            title: 'New BookingPage',
            action: 'create',
            link: { to: '/setting/automation/bookingPage/create', urlPrefix: 'admin' },
            permission: 'bookingPage:create',
            component: BookingPageFormController,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        EDIT: {
            type: 'item',
            title: 'Edit BookingPage',
            action: 'edit',
            link: { to: '/setting/automation/bookingPage/edit', urlPrefix: 'admin' },
            permission: 'bookingPage:edit',
            component: BookingPageFormController,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        VIEW: {
            type: 'item',
            title: 'View BookingPage',
            action: 'view',
            link: { to: '/setting/automation/bookingPage/view', urlPrefix: 'admin' },
            permission: 'bookingPage:view',
            component: BookingPageViewController,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        DELETE: {
            type: 'item',
            title: 'Delete BookingPage',
            action: 'delete',
            link: { to: '' },
            permission: 'bookingPage:delete',
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
            link: { to: '/setting/automation/bookingPage/view', urlPrefix: 'admin' },
            permission: 'bookingPage:view',
            component: ViewLink,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        {
            type: 'item',
            title: 'Edit',
            action: 'inactive',
            link: { to: '/setting/automation/bookingPage/edit', urlPrefix: 'admin' },
            permission: 'bookingPage:edit',
            component: EditLink,
            className: 'grid-edit-action',
            icon: <EyeOutlined />,
        },
        {
            type: 'item',
            title: 'Delete',
            action: 'delete',
            link: { to: '' },
            permission: 'bookingPage:delete',
            component: DeleteAction,
            className: 'grid-delete-action',
            icon: <DeleteOutlined />,
        },
    ],
    BULK_ACTION: {
        permission: 'bookingPage:multiSelect',
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
                permission: 'bookingPage:delete',
                component: '',
                className: 'grid-view-action',
                icon: <EyeOutlined />,
            },
        ],
    },
}


