import React, { FC, useEffect, useState } from "react";
import MediaViewDrawer from "./MediaView.drawer";
import { Message } from "../../../../../utils";
import { MediaApi } from "../../../../../api";
import "../../../styles/Cms.module.view.scss";
import "./MediaView.style.scss";

const initialState = {
  modalTitle: "Media Info",
  itemData: {},
  loading: false,
  fields: {},
};

const MediaViewController: FC<any> = (props) => {
  const { entityId, reloadView, isShowView, handleCallbackFunc } = props;

  const modalTitle = initialState.modalTitle;
  const [itemData, setItemData] = useState(initialState.itemData);
  const [loading, setLoading] = useState(initialState.loading);

  useEffect(() => {
    setItemData(initialState.itemData);
    if (entityId && isShowView) {
      loadData();
    }
  }, [entityId, reloadView]);

  const loadData = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      MediaApi.getById(entityId)
        .then((res) => {
          setItemData(res.data);
          setLoading(false);
          resolve(res);
        })
        .catch((err) => {
          Message.error("A network error occurred. Please try again later.");
          setLoading(false);
          reject(err);
        });
    });
  };

  return (
    <MediaViewDrawer
      loading={loading}
      reloadView={reloadView}
      isShowView={isShowView}
      modalTitle={modalTitle}
      itemData={itemData}
      handleCallbackFunc={handleCallbackFunc}
    />
  );
};

export default React.memo(MediaViewController);
