import React, { FC } from "react";
import { Descriptions, Row, Col } from "antd";
import { DateTimeUtils } from "../../../../../utils";
import { StatusEnum, YesNoEnum } from "../../../../../utils/enums";
import EditAction from "../../../../../components/Actions/EditAction";
import DeleteAction from "../../../../../components/Actions/DeleteAction";
import { ServicesAction } from "../Actions/Services.actions";
import { useTranslation } from "react-i18next";

const ServicesView: FC<any> = (props) => {
  const { itemData, handleCallbackFunc } = props;
  const DescriptionsItem = Descriptions.Item;
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';

  return (
    <div className="view-page-content view-page-content-page">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <EditAction
            entityId={itemData.id}
            actionItem={ServicesAction.COMMON_ACTION.EDIT}
            handleCallbackFunc={handleCallbackFunc}
          />
          <DeleteAction
            entityId={itemData.id}
            actionItem={ServicesAction.COMMON_ACTION.DELETE}
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
            <DescriptionsItem label={t("Url")}>{itemData.url}</DescriptionsItem>
            <DescriptionsItem label={t("Description")}>
              {itemData.description}
            </DescriptionsItem>
            <DescriptionsItem label={t("Icon")}>
              {itemData.icon}
            </DescriptionsItem>
            <DescriptionsItem label={t("Image")}>
              {itemData.image}
            </DescriptionsItem>
            <DescriptionsItem label={t("Is Grab Services Quick")}>
              {t(YesNoEnum[itemData.is_grab_services_quick])}
            </DescriptionsItem>
            <DescriptionsItem label={t("Instructions English")}>
              {itemData.instructions_en}
            </DescriptionsItem>
            <DescriptionsItem label={t("Instructions Bangla")}>
              {itemData.instructions_bn}
            </DescriptionsItem>
            <DescriptionsItem label={t("Required Documents English")}>
              {itemData.required_documents_en}
            </DescriptionsItem>
            <DescriptionsItem label={t("Required Documents Bangla")}>
              {itemData.required_documents_bn}
            </DescriptionsItem>
            <DescriptionsItem label={t("Fee And Payment Method English")}>
              {itemData.fee_and_payment_method_en}
            </DescriptionsItem>
            <DescriptionsItem label={t("Fee And Payment Method Bangla")}>
              {itemData.fee_and_payment_method_bn}
            </DescriptionsItem>
            <DescriptionsItem label={t("Delivery Deadline English")}>
              {itemData.delivery_deadline}
            </DescriptionsItem>
           
            <DescriptionsItem label={t("Component Ids")}>
              {itemData.component_ids}
            </DescriptionsItem>
            <DescriptionsItem label={t("Seeker Ids")}>
              {itemData.seeker_ids}
            </DescriptionsItem>
            <DescriptionsItem label={t("Organization Ids")}>
              {itemData.organization_ids}
            </DescriptionsItem>
            <DescriptionsItem label={t("Section Ids")}>
              {itemData.section_ids}
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
export default React.memo(ServicesView);
