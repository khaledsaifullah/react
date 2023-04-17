import React from "react";
import { EyeOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import BlocksFormController from "../Form/BlocksForm.controller";
import BlocksViewController from "../View/BlocksView.controller";
import ViewAction from "../../../../../components/Actions/ViewAction";
import EditAction from "../../../../../components/Actions/EditAction";
import DeleteAction from "../../../../../components/Actions/DeleteAction";

export const BlocksAction = {
    COMMON_ACTION: {
        CREATE: {
            type: "item",
            title: "New Blocks",
            action: "create",
            link: { to: "" },
            permission: "cms:blocks:create",
            component: BlocksFormController,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        EDIT: {
            type: "item",
            title: "Edit Blocks",
            action: "edit",
            link: { to: "" },
            permission: "cms:blocks:edit",
            component: BlocksFormController,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        VIEW: {
            type: "item",
            title: "View Blocks",
            action: "view",
            link: { to: "" },
            permission: "cms:blocks:view",
            component: BlocksViewController,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        DELETE: {
            type: "item",
            title: "Delete Blocks",
            action: "delete",
            link: { to: "" },
            permission: "cms:blocks:delete",
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
            permission: "cms:blocks:view",
            component: ViewAction,
            className: "grid-view-action",
            icon: <EyeOutlined />,
        },
        {
            type: "item",
            title: "Edit",
            action: "inactive",
            link: { to: "" },
            permission: "cms:blocks:edit",
            component: EditAction,
            className: "grid-edit-action",
            icon: <EditOutlined />,
        },
        {
            type: "item",
            title: "Delete",
            action: "delete",
            link: { to: "" },
            permission: "cms:blocks:delete",
            component: DeleteAction,
            className: "grid-delete-action",
            icon: <DeleteOutlined />,
        },
    ],
    BULK_ACTION: {
        permission: "cms:blocks:multiSelect",
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
                permission: "cms:blocks:delete",
                component: "",
                className: "grid-view-action",
                icon: <EyeOutlined />,
            },
        ],
    },
};
