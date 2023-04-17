import React, { FC, useState } from "react";
import { Button, Input, Select, Form, Modal, Row, Col } from "antd";
import { RefreshIcon, ResetIcon } from "../../../../../assets/images/icon/svg";
import { FilterOutlined } from "@ant-design/icons";
import { BlocksAction } from "../Actions/Blocks.actions";
import CreateAction from "../../../../../components/Actions/CreateAction";
import BulkAction from "../../../../../components/Actions/BulkAction";
import { useTranslation } from "react-i18next";

const BlocksListFilter: FC<any> = (props) => {
    const [isAdvSearchOpen, setIsAdvSearchOpen] = useState(false);
    const [isAdvLoading, setIsAdvLoading] = useState(false);

  const { t } = useTranslation();
  const { Search } = Input;
  const { Option } = Select;
  const { filters, handleOnChanged, handleCallbackFunc } = props;

    const showAdvancedSearch = () => {
        setIsAdvSearchOpen(true);
    };

    const handleAdvSearchCancel = () => {
        setIsAdvSearchOpen(false);
    };

    const handleOk = () => {
        setIsAdvLoading(true);
        setTimeout(() => {
            setIsAdvLoading(false);
            setIsAdvSearchOpen(false);
        }, 3000);
    };

  return (
    <div className="listing-page-filter">
      <div className="filter-section filter-top">
        <div className="page-heading-title">
          <h1>{t("Blocks")}</h1>
        </div>
        <div className="btn-group btn-group-right">
          <CreateAction
            actionItem={BlocksAction.COMMON_ACTION.CREATE}
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
          <div className="filter-box-left button-box adv-search-button-box">
            <>
                <Button type="primary" onClick={showAdvancedSearch}>
                    {t('Advanced Search')}
                </Button>
                <Modal
                    className="grid-advanced-search-modal"
                    visible={isAdvSearchOpen}
                    title={t('Advanced Search')}
                    onOk={handleOk}
                    onCancel={handleAdvSearchCancel}
                    footer={[
                        <Button key="cancel" onClick={handleAdvSearchCancel}>
                            { t('Cancel') }
                        </Button>,
                        <Button
                            type="default"
                            icon={<ResetIcon />}
                            onClick={(event) => handleCallbackFunc(null, "resetListing")}
                        >
                            {t("Reset")}
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            icon={<FilterOutlined />}
                            loading={isAdvLoading}
                            onClick={handleOk}
                        >
                            {t('Filter')}
                        </Button>
                    ]}
                >
                    <Form
                        layout="vertical"
                        >
                        <Row gutter={[16, 16]}>
                            <Col span={12} xs={24} sm={24} md={12}>
                                <Form.Item htmlFor="filter-keyword" name="search" label={t('Keyword')}>
                                    <Search
                                        id="filter-keyword"
                                        placeholder={t("Search")}
                                        onSearch={(value) => handleOnChanged("search", value, "")}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12} xs={24} sm={24} md={12}>
                                <Form.Item htmlFor="filter-status" name="status" label={t('Status')}>
                                    <Select
                                        id="filter-status"
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
                            </Col>
                            <Col span={12} xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={t('New Field')}
                                    htmlFor="filter-new-field"
                                >
                                    <Input id="filter-new-field" placeholder={t('New Field Placeholder')} />
                                </Form.Item>
                            </Col>
                            <Col span={12} xs={24} sm={24} md={12}>
                                Right column
                            </Col>
                        </Row>
                    </Form>
                </Modal>
            </>
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
            bulkAction={BlocksAction.BULK_ACTION}
            handleCallbackFunc={handleCallbackFunc}
          />
        </div>
      </div>
    </div>
  );
};
export default React.memo(BlocksListFilter);
