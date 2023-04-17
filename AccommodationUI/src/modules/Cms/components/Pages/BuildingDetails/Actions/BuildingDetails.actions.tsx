import React from "react";
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import BuildingDetailsFormController from "../Form/BuildingDetailsForm.controller";
import BuildingDetailsViewController from "../View/BuildingDetailsView.controller";
import DeleteAction from "../../../../../../components/Actions/DeleteAction";
import ViewLink from "../../../../../../components/Link/ViewLink";
import EditLink from "../../../../../../components/Link/EditLink";

export const BuildingDetailsAction = {
    COMMON_ACTION: {
        CREATE: {
            type: 'item',
            title: 'New Building Details',
            action: 'create',
            link: { to: '/setting/automation/buildingDetails/create', urlPrefix: 'admin' },
            permission: 'buildingDetails:create',
            component: BuildingDetailsFormController,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        EDIT: {
            type: 'item',
            title: 'Edit BuildingDetails',
            action: 'edit',
            link: { to: '/setting/automation/buildingDetails/edit', urlPrefix: 'admin' },
            permission: 'buildingDetails:edit',
            component: BuildingDetailsFormController,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        VIEW: {
            type: 'item',
            title: 'View BuildingDetails',
            action: 'view',
            link: { to: '/setting/automation/buildingDetails/view', urlPrefix: 'admin' },
            permission: 'buildingDetails:view',
            component: BuildingDetailsViewController,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        DELETE: {
            type: 'item',
            title: 'Delete BuildingDetails',
            action: 'delete',
            link: { to: '' },
            permission: 'buildingDetails:delete',
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
            link: { to: '/setting/automation/buildingDetails/view', urlPrefix: 'admin' },
            permission: 'buildingDetails:view',
            component: ViewLink,
            className: 'grid-view-action',
            icon: <EyeOutlined />,
        },
        {
            type: 'item',
            title: 'Edit',
            action: 'inactive',
            link: { to: '/setting/automation/buildingDetails/edit', urlPrefix: 'admin' },
            permission: 'buildingDetails:edit',
            component: EditLink,
            className: 'grid-edit-action',
            icon: <EyeOutlined />,
        },
        {
            type: 'item',
            title: 'Delete',
            action: 'delete',
            link: { to: '' },
            permission: 'buildingDetails:delete',
            component: DeleteAction,
            className: 'grid-delete-action',
            icon: <DeleteOutlined />,
        },
    ],
    BULK_ACTION: {
        permission: 'buildingDetails:multiSelect',
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
                permission: 'buildingDetails:delete',
                component: '',
                className: 'grid-view-action',
                icon: <EyeOutlined />,
            },
        ],
    },
}


