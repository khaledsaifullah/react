import React, { FC, Fragment } from "react";
import { Button, Modal, Spin } from "antd";
import ServicesView from "./ServicesView.view";
import CustomScrollbar from "../../../../../components/Scrollbar/CustomScrollbar";
import { useTranslation } from "react-i18next";
interface IProps {
  modalTitle: any;
  loading: any;
  isShowView: any;
  itemData: any;
  handleCallbackFunc: any;
  [key: string]: any;
}

const ServicesViewModal: FC<IProps> = (props) => {
  const { t } = useTranslation();
  const {
    modalTitle,
    loading,
    isShowView,
    itemData,
    handleCallbackFunc,
    ...restProps
  } = props;
  return (
    <Fragment>
      <Modal
        width={720}
        className="view-page-modal view-page-modal-page"
        title={
          <b>
            {t(modalTitle)}&nbsp;&nbsp;{loading && <Spin size="small" />}
          </b>
        }
        centered
        maskClosable={false}
        visible={isShowView}
        onCancel={(event) => handleCallbackFunc(null, "hideView")}
        footer={[
          <Button
            key="close"
            onClick={(event) => handleCallbackFunc(null, "hideView")}
          >
            {t("Close")}
          </Button>,
        ]}
      >
        <CustomScrollbar className="view-page-modal-scrollbar">
          <ServicesView
            loading={loading}
            itemData={itemData}
            handleCallbackFunc={handleCallbackFunc}
            {...restProps}
          />
        </CustomScrollbar>
      </Modal>
    </Fragment>
  );
};
export default React.memo(ServicesViewModal);
