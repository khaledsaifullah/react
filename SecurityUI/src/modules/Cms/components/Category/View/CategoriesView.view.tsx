import React, { FC } from "react";
import { Descriptions, Row, Col } from "antd";
import { DateTimeUtils } from "../../../../../utils";
import { StatusEnum } from "../../../../../utils/enums";
import EditAction from "../../../../../components/Actions/EditAction";
import DeleteAction from "../../../../../components/Actions/DeleteAction";
import { CategoriesAction } from "../Actions/Categories.actions";
import { useTranslation } from "react-i18next";

const CategoriesView: FC<any> = (props) => {
  const { itemData, handleCallbackFunc } = props;
  const DescriptionsItem = Descriptions.Item;
  const { t } = useTranslation();
  return (
    <div className="view-page-content view-page-content-page">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <EditAction
            entityId={itemData.id}
            actionItem={CategoriesAction.COMMON_ACTION.EDIT}
            handleCallbackFunc={handleCallbackFunc}
          />
          <DeleteAction
            entityId={itemData.id}
            actionItem={CategoriesAction.COMMON_ACTION.DELETE}
            handleCallbackFunc={handleCallbackFunc}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Descriptions bordered column={1}>
            <DescriptionsItem label={t("Title (In English)")}>
              {itemData.title_en}
            </DescriptionsItem>
            <DescriptionsItem label={t("Title (In Bangla)")}>
              {itemData.title_bn}
            </DescriptionsItem>
            <DescriptionsItem label={t("Parent ID")}>
              {itemData.parent_id}
            </DescriptionsItem>
            <DescriptionsItem label={t("Slug")}>
              {itemData.slug}
            </DescriptionsItem>
            <DescriptionsItem label={t("Description")}>
              {itemData.description}
            </DescriptionsItem>
            <DescriptionsItem label={t("Image")}>
              {itemData.image}
            </DescriptionsItem>
            <DescriptionsItem label={t("Path")}>
              {itemData.path}
            </DescriptionsItem>
            <DescriptionsItem label={t("Level")}>
              {itemData.level}
            </DescriptionsItem>
            <DescriptionsItem label={t("Children Count")}>
              {itemData.children_count}
            </DescriptionsItem>
            <DescriptionsItem label={t("Hits")}>
              {itemData.hits}
            </DescriptionsItem>
            <DescriptionsItem label={t("Parameters")}>
              {itemData.params}
            </DescriptionsItem>
            <DescriptionsItem label={t("Sort Order")}>
              {itemData.sort_order}
            </DescriptionsItem>
            <DescriptionsItem label={t("Status")}>
              {StatusEnum[itemData.status]}
            </DescriptionsItem>
            <DescriptionsItem label={t("Created Time")}>
              {DateTimeUtils.formatDateTimeA(itemData.created_at)}
            </DescriptionsItem>
            <DescriptionsItem label={t("Updated Time")}>
              {DateTimeUtils.formatDateTimeA(itemData.updated_at)}
            </DescriptionsItem>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
};
export default React.memo(CategoriesView);
