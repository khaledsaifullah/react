import React from "react";
import { EyeOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import CategoriesFormController from "../Form/CategoriesForm.controller";
import CategoriesViewController from "../View/CategoriesView.controller";
import ViewAction from "../../../../../components/Actions/ViewAction";
import EditAction from "../../../../../components/Actions/EditAction";
import DeleteAction from "../../../../../components/Actions/DeleteAction";

export const CategoriesAction = {
    COMMON_ACTION: {
        CREATE: {
            type: "item",
            title: "New Categories",
            action: "create",
            link: { to: "" },
            permission: "cms:category:create",
            component: CategoriesFormController,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        EDIT: {
            type: "item",
            title: "Edit Categories",
            action: "edit",
            link: { to: "" },
            permission: "cms:category:edit",
            component: CategoriesFormController,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        VIEW: {
            type: "item",
            title: "View Categories",
            action: "view",
            link: { to: "" },
            permission: "cms:category:view",
            component: CategoriesViewController,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        DELETE: {
            type: "item",
            title: "Delete Categories",
            action: "delete",
            link: { to: "" },
            permission: "cms:category:delete",
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
            permission: "cms:category:view",
            component: ViewAction,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        {
            type: "item",
            title: "Edit",
            action: "inactive",
            link: { to: "" },
            permission: "cms:category:edit",
            component: EditAction,
            className: "grid-edit-action",
            icon: <EditOutlined />,
        },
        {
            type: "item",
            title: "Delete",
            action: "delete",
            link: { to: "" },
            permission: "cms:category:delete",
            component: DeleteAction,
            className: "grid-delete-action",
            icon: <DeleteOutlined />,
        },
    ],
    BULK_ACTION: {
        permission: "cms:category:multiSelect",
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
                permission: "cms:category:delete",
                component: "",
                className: "grid-view-action",
                icon: <EyeOutlined />,
            },
        ],
    },
};
