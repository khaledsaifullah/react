import React from "react";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import PageFormController from "../Form/PageForm.controller";
import PageViewController from "../View/PageView.controller";
import ViewAction from "../../../../../../components/Actions/ViewAction";
import EditAction from "../../../../../../components/Actions/EditAction";
import DeleteAction from "../../../../../../components/Actions/DeleteAction";

export const PageAction = {
  COMMON_ACTION: {
    CREATE: {
      type: "item",
      title: "New Page",
      action: "create",
      link: { to: "" },
      permission: "cms:page:create",
      component: PageFormController,
      className: "grid-view-action",
      icon: <EyeOutlined />,
    },
    EDIT: {
      type: "item",
      title: "Edit Page",
      action: "edit",
      link: { to: "" },
      permission: "cms:page:edit",
      component: PageFormController,
      className: "grid-view-action",
      icon: <EyeOutlined />,
    },
    VIEW: {
      type: "item",
      title: "View Page",
      action: "view",
      link: { to: "" },
      permission: "cms:page:view",
      component: PageViewController,
      className: "grid-view-action",
      icon: <EyeOutlined />,
    },
    DELETE: {
      type: "item",
      title: "Delete Page",
      action: "delete",
      link: { to: "" },
      permission: "cms:page:delete",
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
      permission: "cms:page:view",
      component: ViewAction,
      className: "grid-view-action",
      icon: <EyeOutlined />,
    },
    {
      type: "item",
      title: "Edit",
      action: "inactive",
      link: { to: "" },
      permission: "cms:page:edit",
      component: EditAction,
      className: "grid-edit-action",
      icon: <EyeOutlined />,
    },
    {
      type: "item",
      title: "Delete",
      action: "delete",
      link: { to: "" },
      permission: "cms:page:delete",
      component: DeleteAction,
      className: "grid-delete-action",
      icon: <DeleteOutlined />,
    },
  ],
  BULK_ACTION: {
    permission: "cms:page:multiSelect",
    action_list: [
      {
        type: "item",
        title: "Mark as Active",
        action: "active",
        link: { to: "" },
        permission: "",
        component: "",
        className: "grid-view-action",
        icon: <EyeOutlined />,
      },
      {
        type: "item",
        title: "Mark as Inactive",
        action: "inactive",
        link: { to: "" },
        permission: "",
        component: "",
        className: "grid-view-action",
        icon: <EyeOutlined />,
      },
      {
        type: "item",
        title: "Delete",
        action: "delete",
        link: { to: "" },
        permission: "cms:page:delete",
        component: "",
        className: "grid-view-action",
        icon: <EyeOutlined />,
      },
    ],
  },
};
