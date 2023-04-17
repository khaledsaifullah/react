import React from "react";
import { EyeOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import MediaFormController from "../Form/MediaForm.controller";
import MediaViewController from "../View/MediaView.controller";
import ViewAction from "../../../../../components/Actions/ViewAction";
import EditAction from "../../../../../components/Actions/EditAction";
import DeleteAction from "../../../../../components/Actions/DeleteAction";

export const MediaAction = {
    COMMON_ACTION: {
        CREATE: {
            type: "item",
            title: "New Media",
            action: "create",
            link: { to: "" },
            permission: "cms:media:create",
            component: MediaFormController,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        EDIT: {
            type: "item",
            title: "Edit Media",
            action: "edit",
            link: { to: "" },
            permission: "cms:media:edit",
            component: MediaFormController,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        VIEW: {
            type: "item",
            title: "View Media",
            action: "view",
            link: { to: "" },
            permission: "cms:media:view",
            component: MediaViewController,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        DELETE: {
            type: "item",
            title: "Delete Media",
            action: "delete",
            link: { to: "" },
            permission: "cms:media:delete",
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
            permission: "cms:media:view",
            component: ViewAction,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        {
            type: "item",
            title: "Edit",
            action: "inactive",
            link: { to: "" },
            permission: "cms:media:edit",
            component: EditAction,
            className: "grid-edit-action",
            icon: <EditOutlined />,
        },
        {
            type: "item",
            title: "Delete",
            action: "delete",
            link: { to: "" },
            permission: "cms:media:delete",
            component: DeleteAction,
            className: "grid-delete-action",
            icon: <DeleteOutlined />,
        },
    ],
    BULK_ACTION: {
        permission: "cms:media:multiSelect",
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
                permission: "cms:media:delete",
                component: "",
                className: "grid-view-action",
                icon: <EyeOutlined />,
            },
        ],
    },
};
