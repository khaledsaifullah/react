import React, { FC } from "react";
import { DateTimeUtils, CommonUtils } from "../../../../../utils";
import AntTable from "../../../../../components/Table/AntTable";
import { MenuAction } from "../Actions/Menu.actions";
import ViewAction from "../../../../../components/Actions/ViewAction";
import ListItemAction from "../../../../../components/Actions/ListItemAction";
import { useTranslation } from "react-i18next";

const MenuListing: FC<any> = (props) => {
  const { t } = useTranslation();
  const {
    loading,
    listData,
    selectedRowKeys,
    onChangeSwitchToggle,
    handleOnChanged,
    handleTableChange,
    handleCallbackFunc,
  } = props;
  const columns = [
    {
      dataIndex: "title_en",
      key: "title_en",
      title: t("Title (In English"),
      sorter: true,
      render: (text: string, record: any, index: number) => (
        <ViewAction
          entityId={record.id}
          actionItem={MenuAction.COMMON_ACTION.VIEW}
          defaultViewText={text}
          handleCallbackFunc={handleCallbackFunc}
        >
          <span className="grid-row-view-action">{text}</span>
        </ViewAction>
      ),
    },
    {
      dataIndex: "title_bn",
      key: "title_bn",
      title: t("Title (In Bangla)"),
      sorter: true,
      render: (text: string, record: any, index: number) => (
        <ViewAction
          entityId={record.id}
          actionItem={MenuAction.COMMON_ACTION.VIEW}
          defaultViewText={text}
          handleCallbackFunc={handleCallbackFunc}
        >
          <span className="grid-row-view-action">{text}</span>
        </ViewAction>
      ),
    },
    {
      dataIndex: "url",
      key: "url",
      title: t("URL"),
    },
    {
      dataIndex: "parent_id",
      key: "parent_id",
      title: t("Parent Menu"),
      sorter: true,
    },
    {
      dataIndex: "status",
      key: "status",
      title: t("Status"),
      sorter: true,
      render: (text: string, record: any, index: number) =>
        CommonUtils.displaySwitchToggleBtn(
          record,
          record.status,
          onChangeSwitchToggle
        ),
    },
    {
      dataIndex: "action",
      key: "action",
      title: t("Action"),
      render: (text: string, record: any, index: number) => (
        <ListItemAction
          entityId={record.id}
          actionList={MenuAction.LIST_ITEM_ACTION}
          handleCallbackFunc={handleCallbackFunc}
        />
      ),
    },
  ];

  return (
    <div className="listing-page-content listing-page-content-menu">
      <AntTable
        className="table-layout"
        rowSelection={true}
        rowSelectionPermission={MenuAction.BULK_ACTION.permission}
        selectedRowKeys={selectedRowKeys}
        dataSource={listData}
        columns={columns}
        loading={loading}
        handleOnChanged={handleOnChanged}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default React.memo(MenuListing);
