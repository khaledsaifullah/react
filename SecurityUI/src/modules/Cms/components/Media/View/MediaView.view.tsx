import React, { FC } from "react";
import { Descriptions, Row, Col } from "antd";
import { DateTimeUtils } from "../../../../../utils";
import { StatusEnum } from "../../../../../utils/enums";
import EditAction from "../../../../../components/Actions/EditAction";
import DeleteAction from "../../../../../components/Actions/DeleteAction";
import { MediaAction } from "../Actions/Media.actions";
import { useTranslation } from "react-i18next";

const MediaView: FC<any> = (props) => {
  const { itemData, handleCallbackFunc } = props;
  const DescriptionsItem = Descriptions.Item;
  const { t } = useTranslation();
  return (
    <div className="view-page-content view-page-content-page">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <EditAction
            entityId={itemData.id}
            actionItem={MediaAction.COMMON_ACTION.EDIT}
            handleCallbackFunc={handleCallbackFunc}
          />
          <DeleteAction
            entityId={itemData.id}
            actionItem={MediaAction.COMMON_ACTION.DELETE}
            handleCallbackFunc={handleCallbackFunc}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Descriptions bordered column={1}>
            <DescriptionsItem label={t("Title")}>
              {itemData.title}
            </DescriptionsItem>
            <DescriptionsItem label={t("Url")}>{itemData.url}</DescriptionsItem>
            <DescriptionsItem label={t("Alternative Text")}>
              {itemData.alt_text}
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
export default React.memo(MediaView);
