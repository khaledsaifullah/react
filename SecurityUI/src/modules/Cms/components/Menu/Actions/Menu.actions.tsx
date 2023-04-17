import React from "react";
import { EyeOutlined, DeleteOutlined, PlusCircleOutlined, EditOutlined } from "@ant-design/icons";
import MenuFormController from "../Form/MenuForm.controller";
import MenuViewController from "../View/MenuView.controller";
import ViewAction from "../../../../../components/Actions/ViewAction";
import EditAction from "../../../../../components/Actions/EditAction";
import DeleteAction from "../../../../../components/Actions/DeleteAction";

export const MenuAction = {
  COMMON_ACTION: {
    CREATE: {
      type: "item",
      title: "New Menu",
      action: "create",
      link: { to: "" },
      permission: "cms:menu:create",
      component: MenuFormController,
      className: "grid-view-action",
      icon: <PlusCircleOutlined />,
    },
    EDIT: {
      type: "item",
      title: "Edit Menu",
      action: "edit",
      link: { to: "" },
      permission: "cms:menu:edit",
      component: MenuFormController,
      className: "grid-view-action",
      icon: <EditOutlined />,
    },
    VIEW: {
      type: "item",
      title: "View Menu",
      action: "view",
      link: { to: "" },
      permission: "cms:menu:view",
      component: MenuViewController,
      className: "grid-view-action",
      icon: <EyeOutlined />,
    },
    DELETE: {
      type: "item",
      title: "Delete Menu",
      action: "delete",
      link: { to: "" },
      permission: "cms:menu:delete",
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
      permission: "cms:menu:view",
      component: ViewAction,
      className: "grid-view-action",
      icon: <EyeOutlined />,
    },
    {
      type: "item",
      title: "Edit",
      action: "inactive",
      link: { to: "" },
      permission: "cms:menu:edit",
      component: EditAction,
      className: "grid-edit-action",
      icon: <EditOutlined />,
    },
    {
      type: "item",
      title: "Delete",
      action: "delete",
      link: { to: "" },
      permission: "cms:menu:delete",
      component: DeleteAction,
      className: "grid-delete-action",
      icon: <DeleteOutlined />,
    },
  ],
  BULK_ACTION: {
    permission: "cms:menu:multiSelect",
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
        permission: "cms:menu:delete",
        component: "",
        className: "grid-view-action",
        icon: <EyeOutlined />,
      },
    ],
  },
};
