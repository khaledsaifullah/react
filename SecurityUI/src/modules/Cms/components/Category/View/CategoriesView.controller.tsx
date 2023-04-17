import React, { FC, useEffect, useState } from "react";
import CategoriesViewDrawer from "./CategoriesView.drawer";
import { Message } from "../../../../../utils";
import { CategoriesApi } from "../../../../../api";
import "../../../styles/Cms.module.view.scss";
import "./CategoriesView.style.scss";

const initialState = {
  modalTitle: "Categories Info",
  itemData: {},
  loading: false,
  fields: {},
};

const CategoriesViewController: FC<any> = (props) => {
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
      CategoriesApi.getById(entityId)
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
    <CategoriesViewDrawer
      loading={loading}
      reloadView={reloadView}
      isShowView={isShowView}
      modalTitle={modalTitle}
      itemData={itemData}
      handleCallbackFunc={handleCallbackFunc}
    />
  );
};

export default React.memo(CategoriesViewController);
