import React, { FC } from "react";
import { Button, Input, Select, Form } from "antd";
import { RefreshIcon, ResetIcon } from "../../../../../../assets/images/icon/svg";
import { PageAction } from "../Actions/Page.actions";
import CreateAction from "../../../../../../components/Actions/CreateAction";
import BulkAction from "../../../../../../components/Actions/BulkAction";
import { useTranslation } from "react-i18next";

const PageListFilter: FC<any> = (props) => {
  const { t } = useTranslation();
  const { Search } = Input;
  const { Option } = Select;
  const { filters, handleOnChanged, handleCallbackFunc } = props;

  return (
    <div className="listing-page-filter">
      <div className="filter-section filter-top">
        <div className="page-heading-title">
          <h1>{t("Pages")}</h1>
        </div>
        <div className="btn-group btn-group-right">
          <CreateAction
            actionItem={PageAction.COMMON_ACTION.CREATE}
            handleCallbackFunc={handleCallbackFunc}
          />
        </div>
      </div>

      <div className="filter-section filter-bottom">
        <div className="filter-bottom-left">
          <div className="filter-box-left input-box search-box">
            <Form.Item name="search">
              <Search
                placeholder={t("Search")}
                onSearch={(value) => handleOnChanged("search", value, "")}
              />
            </Form.Item>
          </div>
          <div className="filter-box-left select-box status-box">
            <Form.Item name="status">
              <Button>{t("Status")}:</Button>
              <Select
                showSearch
                dropdownMatchSelectWidth={100}
                defaultValue={filters.status}
                optionFilterProp="children"
                onChange={(value) => handleOnChanged("filter_status", value)}
                filterOption={(input, option: any) =>
                  option?.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="">{t("All")}</Option>
                <Option value="1">{t("Active")}</Option>
                <Option value="0">{t("Inactive")}</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="filter-box-left button-box reset-button-box">
            <Button
              type="link"
              icon={<ResetIcon />}
              onClick={(event) => handleCallbackFunc(null, "resetListing")}
            >
              {t("Reset")}
            </Button>
          </div>
        </div>

        <div className="filter-bottom-right">
          <div className="filter-box-right button-box reload-button-box">
            <Button
              type="link"
              onClick={(event) => handleCallbackFunc(null, "reloadListing")}
            >
              <RefreshIcon />
            </Button>
          </div>
          <BulkAction
            bulkAction={PageAction.BULK_ACTION}
            handleCallbackFunc={handleCallbackFunc}
          />
        </div>
      </div>
    </div>
  );
};
export default React.memo(PageListFilter);
