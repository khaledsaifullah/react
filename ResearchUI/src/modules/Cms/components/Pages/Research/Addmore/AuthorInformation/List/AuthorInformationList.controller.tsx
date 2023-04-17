import React, { FC, useEffect, useState } from 'react'
import {Button, Col, Row} from "antd";
import { Message, AntModal } from "../../../../../../../../utils";
//import {FackApi} from "../../../../../../../../api";
import AuthorInformationList from "./AuthorInformationList";
import AuthorInformationFormController from "../Form/AuthorInformationForm.controller";

interface IProps {
    itemData: any,
    moreItemListData: any,
    setMoreItemListData: any,
    [key: string]: any,
}

const initialState = {
    entity: {},
    entityIndex: null,
}

const AuthorInformationListController: FC<IProps> = props => {
    const { loading, itemData, moreItemListData, setMoreItemListData } = props;
    const [entity, setEntity] = useState(initialState.entity);
    const [entityIndex, setEntityIndex] = useState(initialState.entityIndex);
    const [isShowForm, setIsShowForm] = useState(false);
    const [reloadForm, setReloadForm] = useState<number>(Date.now());
    const [loadingAddMoreItem, setLoadingAddMoreItem] = useState(false);
 

     
    const handleShowForm = () => {
        setIsShowForm(true);
        handleReloadForm();
    };

    const handleHideForm = () => {
        setIsShowForm(false);
        setEntityIndex(null);
    };

    const handleReloadForm = () => {
        setReloadForm(Date.now());
    };

    const handleDeleteConfirm = (itemIndex: number, action:any) => {
        if (action === 'ok') {const filteredItems = moreItemListData.filter((item, index) => index !== itemIndex);
        setMoreItemListData(filteredItems);}
    }

    const handleActions = (action: string, entityIndex?: any) => {
        const record = moreItemListData[entityIndex];
        setEntity(record);
        if (action === 'add') {
            setEntityIndex(null);
            setIsShowForm(true);
            handleReloadForm();
        }
        else if (action === 'edit') {
            setEntityIndex(entityIndex);
            setIsShowForm(true);
            handleReloadForm();
        }
        else if (action === 'delete') {
            AntModal.confirm('Delete Papers To Be Attached', 'Are you sure you want to delete this Papers To Be Attached?', entityIndex, handleDeleteConfirm, 'Delete');
        }
    };

    const handleCallbackFunc = (event: any, action: string, recordId?: any, data?: any) => {
        if (event === null || event === undefined || event === '') {
            event = event ? event : 'singleAction';
        }
        if (event === 'singleAction' && action === 'add') {
            handleActions('add')
        }
        else if (event === 'singleAction' && action === 'edit') {
            handleActions('edit', recordId)
        }
        else if (event === 'singleAction' && action === 'delete') {
            handleActions('delete', recordId)
        }
        else if (event === 'singleAction' && action === 'hideForm') {
            handleHideForm();
        }
        else if (event === 'singleAction' && action === 'reloadForm') {
            handleReloadForm();
        }
    }

    return (
        <div className="add-more-container add-more-papers-to-be-attached-container">
            <Row>
                <Col span={24}>
                    <AuthorInformationList
                        loadingAddMoreItem={loadingAddMoreItem}
                        moreItemListData={moreItemListData}
                        setMoreItemListData={setMoreItemListData}
                        handleCallbackFunc={handleCallbackFunc}
                    />

                    <div className="delivery-schedule-action">
                        <AuthorInformationFormController
                            entity={entity}
                            entityIndex={entityIndex}
                            reloadForm={reloadForm}
                            isShowForm={isShowForm}
                            moreItemListData={moreItemListData}
                            setMoreItemListData={setMoreItemListData}
                            handleCallbackFunc={handleCallbackFunc}
                        />

                        <Button type="primary" className="btn btn-create" onClick={() => handleShowForm()}>Add Item</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default AuthorInformationListController;
