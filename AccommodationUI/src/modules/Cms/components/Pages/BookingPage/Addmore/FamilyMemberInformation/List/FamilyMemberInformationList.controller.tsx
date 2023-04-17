import React, { FC, useState } from 'react'
import { Col, Row, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useTranslation } from 'react-i18next';
import { AntModal } from "../../../../../../../../utils";
import FamilyMemberInformationList from "./FamilyMemberInformationList";
import FamilyMemberInformationFormController from "../Form/FamilyMemberInformationForm.controller";

interface IProps {
    itemData: any,
    addMoreItemList: any,
    setAddMoreItemList: any,
    [key: string]: any,
}

const initialState = {
    entity: {},
    entityIndex: null,
}

const FamilyMemberInformationListController: FC<IProps> = props => {
    const { t } = useTranslation();
    const { itemData, addMoreItemList, setAddMoreItemList } = props;
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

    const handleDeleteConfirm = (itemIndex: number, action: any) => {
        if (action === 'ok') {
            const filteredItems = addMoreItemList.filter((item, index) => index !== itemIndex);
            setAddMoreItemList(filteredItems);
        }
    }

    const handleActions = (action: string, entityIndex?: any) => {
        const record = addMoreItemList[entityIndex];
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
            AntModal.confirm('Delete Family Member Information', 'Are you sure you want to delete this Family Member Information?', entityIndex, handleDeleteConfirm, 'Delete');
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
        <div className="add-more-container">
            <Row>
                <Col span={24}>
                    {addMoreItemList?.length > 0 ? (
                        <FamilyMemberInformationList
                            loadingAddMoreItem={loadingAddMoreItem}
                            addMoreItemList={addMoreItemList}
                            handleCallbackFunc={handleCallbackFunc}
                        />
                    ) : null}

                    <div className="add-more-action">
                        <FamilyMemberInformationFormController
                            entity={entity}
                            entityIndex={entityIndex}
                            reloadForm={reloadForm}
                            isShowForm={isShowForm}
                            addMoreItemList={addMoreItemList}
                            setAddMoreItemList={setAddMoreItemList}
                            handleCallbackFunc={handleCallbackFunc}
                        />
                        <Space>
                            <button type="button" className="btn btn-primary rounded-1 mt-3 mb-3" onClick={() => handleShowForm()}>
                                <PlusOutlined /> <span>{t('Add Family Info')}</span>
                            </button>
                        </Space>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default FamilyMemberInformationListController;
