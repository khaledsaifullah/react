import React, { FC, Fragment } from "react";
import { Modal, Spin, Button } from "antd";
import { useTranslation } from "react-i18next";
import { SaveOutlined, CloseOutlined } from "@ant-design/icons";
import CustomScrollbar from "../../../../../components/Scrollbar/CustomScrollbar";
import useResponsive from "../../../../../hooks/useResponsive";
interface IProps {
    formRef?: any;
    modalTitle?: any;
    onCancelAction?: any;
    modalSubTitle?: any;
    loading?: any;
    isShowForm?: any;
    modalWidth?: any;
    component?: any;
    children?: any;
    footerComonent?: any;
    handleCallbackFunc: any;
    [key: string]: any;
}

const DynamicModalForm: FC<IProps> = (props) => {
    const { t } = useTranslation();
    const { isMobile } = useResponsive();
    const { formRef, modalTitle, modalSubTitle, onCancelAction, loading, isShowForm, modalWidth, component: Component, footerComonent, handleCallbackFunc, ...restProps } = props;

    const onSubmit = () => {
        formRef.submit();
    };

    return (
        <Fragment>
            <Modal
                width={isMobile ? "100%" : modalWidth ? modalWidth : "1024px"}
                className="form-page-modal form-page-modal-fellowship-type"
                title={
                    <>
                        <h3 className="h5 fw-bold mb-1">
                            {t(modalTitle)}&nbsp;&nbsp;{loading && <Spin size="small" />}
                        </h3>
                        {modalSubTitle ?? <div> {t(modalSubTitle)}</div>}
                    </>

                }
                maskClosable={false}
                centered
                visible={isShowForm}
                onCancel={(event) => handleCallbackFunc(null, onCancelAction ?? "hideForm")}
                footer={footerComonent}
            >
                <CustomScrollbar
                    autoHeight
                    autoHeightMax={720}
                    className="form-page-modal-scrollbar"
                >
                    <Component
                        loading={loading}
                        formRef={formRef}
                        handleCallbackFunc={handleCallbackFunc}
                        {...restProps}
                    />
                </CustomScrollbar>
            </Modal>
        </Fragment>
    );
};
export default React.memo(DynamicModalForm);
