import React, { FC, Fragment } from "react";
import { Drawer, Spin, Button } from "antd";
import AddOrEditForm from "./PageForm.form";
import CustomScrollbar from "../../../../../../components/Scrollbar/CustomScrollbar";
import { useTranslation } from "react-i18next";
import useResponsive from "../../../../../../hooks/useResponsive";
interface IProps {
  formRef: any;
  modalTitle: any;
  loading: any;
  isShowForm: any;
  handleCallbackFunc: any;
  [key: string]: any;
}

const PageFormDrawer: FC<IProps> = (props) => {
  const { t } = useTranslation();
  const { isMobile } = useResponsive();
  const {
    formRef,
    modalTitle,
    loading,
    isShowForm,
    handleCallbackFunc,
    ...restProps
  } = props;
  const onSubmit = () => {
    formRef.submit();
  };
  return (
    <Fragment>
      <Drawer
        width={isMobile ? "100%" : 900}
        className="form-page-drawer form-page-drawer-page"
        title={
          <b>
            {t(modalTitle)}&nbsp;&nbsp;{loading && <Spin size="small" />}
          </b>
        }
        visible={isShowForm}
        onClose={(event) => handleCallbackFunc(null, "hideForm")}
        footer={[
          <Button
            key="cancel"
            onClick={(event) => handleCallbackFunc(null, "hideForm")}
          >
            {t("Cancel")}
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={onSubmit}
          >
            {t("Submit")}
          </Button>,
        ]}
      >
        <CustomScrollbar className="form-page-drawer-scrollbar">
          <AddOrEditForm
            loading={loading}
            formRef={formRef}
            handleCallbackFunc={handleCallbackFunc}
            {...restProps}
          />
        </CustomScrollbar>
      </Drawer>
    </Fragment>
  );
};
export default React.memo(PageFormDrawer);
