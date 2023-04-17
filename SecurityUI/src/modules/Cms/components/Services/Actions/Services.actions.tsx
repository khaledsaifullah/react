import React from "react";
import { EyeOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ServicesFormController from "../Form/ServicesForm.controller";
import ServicesViewController from "../View/ServicesView.controller";
import ViewAction from "../../../../../components/Actions/ViewAction";
import EditAction from "../../../../../components/Actions/EditAction";
import DeleteAction from "../../../../../components/Actions/DeleteAction";

export const ServicesAction = {
    COMMON_ACTION: {
        CREATE: {
            type: "item",
            title: "New Services",
            action: "create",
            link: { to: "" },
            permission: "cms:services:create",
            component: ServicesFormController,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        EDIT: {
            type: "item",
            title: "Edit Services",
            action: "edit",
            link: { to: "" },
            permission: "cms:services:edit",
            component: ServicesFormController,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        VIEW: {
            type: "item",
            title: "View Services",
            action: "view",
            link: { to: "" },
            permission: "cms:services:view",
            component: ServicesViewController,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        DELETE: {
            type: "item",
            title: "Delete Services",
            action: "delete",
            link: { to: "" },
            permission: "cms:services:delete",
            component: "",
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
    },
    LIST_ITEM_ACTION: [
        {
            type: "item",
            title: "View",
            action: "active",
            link: { to: "" },
            permission: "cms:services:view",
            component: ViewAction,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        {
            type: "item",
            title: "Edit",
            action: "inactive",
            link: { to: "" },
            permission: "cms:services:edit",
            component: EditAction,
            className: "grid-edit-action",
            icon: <EditOutlined />,
        },
        {
            type: "item",
            title: "Delete",
            action: "delete",
            link: { to: "" },
            permission: "cms:services:delete",
            component: DeleteAction,
            className: "grid-delete-action",
            icon: <DeleteOutlined />,
        },
    ],
    BULK_ACTION: {
        permission: "cms:services:multiSelect",
        action_list: [
            {
                type: "item",
                title: "Mark as Active",
                action: "active",
                link: { to: "" },
                component: "",
                className: "grid-view-action",
                icon: <EyeOutlined />,
            },
            {
                type: "item",
                title: "Mark as Inactive",
                action: "inactive",
                link: { to: "" },
                component: "",
                className: "grid-view-action",
                icon: <EyeOutlined />,
            },
            {
                type: "item",
                title: "Delete",
                action: "delete",
                link: { to: "" },
                permission: "cms:services:delete",
                component: "",
                className: "grid-view-action",
                icon: <EyeOutlined />,
            },
        ],
    },
};
