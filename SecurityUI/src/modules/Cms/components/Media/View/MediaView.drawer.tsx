import React, { FC, Fragment } from "react";
import { Button, Drawer, Spin } from "antd";
import MediaView from "./MediaView.view";
import CustomScrollbar from "../../../../../components/Scrollbar/CustomScrollbar";
import { useTranslation } from "react-i18next";
import useResponsive from "../../../../../hooks/useResponsive";
interface IProps {
  modalTitle: any;
  loading: any;
  isShowView: any;
  itemData: any;
  handleCallbackFunc: any;
  [key: string]: any;
}

const MediaViewDrawer: FC<IProps> = (props) => {
  const { t } = useTranslation();
  const { isMobile } = useResponsive();
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
      <Drawer
        width={isMobile ? "100%" : 720}
        zIndex={500}
        className="view-page-drawer view-page-drawer-page"
        title={
          <b>
            {t(modalTitle)}&nbsp;&nbsp;{loading && <Spin size="small" />}
          </b>
        }
        mask={false}
        visible={isShowView}
        onClose={(event) => handleCallbackFunc(null, "hideView")}
        footer={[
          <Button
            key="close"
            onClick={(event) => handleCallbackFunc(null, "hideView")}
          >
            {t("Close")}
          </Button>,
        ]}
      >
        <CustomScrollbar className="view-page-drawer-scrollbar">
          <MediaView
            loading={loading}
            itemData={itemData}
            handleCallbackFunc={handleCallbackFunc}
            {...restProps}
          />
        </CustomScrollbar>
      </Drawer>
    </Fragment>
  );
};
export default React.memo(MediaViewDrawer);
