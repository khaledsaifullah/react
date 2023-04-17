import React, { FC } from "react";
import { DateTimeUtils, CommonUtils } from "../../../../../utils";
import AntTable from "../../../../../components/Table/AntTable";
import { ServicesAction } from "../Actions/Services.actions";
import ViewAction from "../../../../../components/Actions/ViewAction";
import ListItemAction from "../../../../../components/Actions/ListItemAction";
import { useTranslation } from "react-i18next";
import { YesNoEnum } from "../../../../../utils/enums";

const ServicesListing: FC<any> = (props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';

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
      title: t("Title (In English)"),
      sorter: true,
      render: (text: string, record: any, index: number) => (
        <ViewAction
          entityId={record.id}
          actionItem={ServicesAction.COMMON_ACTION.VIEW}
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
          actionItem={ServicesAction.COMMON_ACTION.VIEW}
          defaultViewText={text}
          handleCallbackFunc={handleCallbackFunc}
        >
          <span className="grid-row-view-action">{text}</span>
        </ViewAction>
      ),
    },
    {
      dataIndex: "description",
      key: "description",
      title: t("Description"),
      sorter: true,
    },
    {
      dataIndex: "url",
      key: "url",
      title: t("Slug"),
      sorter: true,
    },
    {
      dataIndex: "is_grab_services_quick",
      key: "is_grab_services_quick",
      title: t("Is Grab Services Quick"),
      sorter: true,
      render: (text: string, record: any, index: number) => {
        return t(YesNoEnum[text])
      }

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
          actionList={ServicesAction.LIST_ITEM_ACTION}
          handleCallbackFunc={handleCallbackFunc}
        />
      ),
    },
  ];

  return (
    <div className="listing-page-content listing-page-content-page">
      <AntTable
        className="table-layout"
        rowSelection={true}
        rowSelectionPermission={ServicesAction.BULK_ACTION.permission}
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

export default React.memo(ServicesListing);
