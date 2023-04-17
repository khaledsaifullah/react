import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Message } from "../../../../../../utils";
import { FackApi } from "../../../../../../api";
import SearchAccommodationView from "./SearchAccommodationView.view";
import ContextJSX from '../../../../../../components/ContextJsx';
import { BodyClassName } from '../../../../../../components/BodyClassName/BodyClassName';
import MetaTag from '../../../../../../components/MetaTag';
import Header from '../../../../../../components/Header';
import Breadcrumb from '../../../../../../components/Breadcrumb';
import { useLang } from '../../../../../../hooks/useLang';

const initialState = {
    itemData: {},
    loading: false,
    fields: {},
}

const SearchAccommodationViewController: FC<any> = props => {
    const { t } = useLang();
    const { entityId } = useParams();

    const [itemData, setItemData] = useState(initialState.itemData);
    const [loading, setLoading] = useState(initialState.loading);

    useEffect(() => {
        setItemData(initialState.itemData);
        if (entityId) {
            loadData();
        }
    }, [entityId])

    const loadData = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            FackApi.getById(entityId)
                .then(res => {
                    setItemData(res.data);
                    setLoading(false);
                    resolve(res);
                })
                .catch(err => {
                    Message.error('A network error occurred. Please try again later.');
                    setLoading(false);
                    reject(err);
                });
        });
    }

    return (
        <>
            <ContextJSX>
                <BodyClassName className={'component-grant'} />
                <MetaTag>
                    <MetaTag.Title>{t('Accommodation Details')}</MetaTag.Title>
                </MetaTag>
                <Breadcrumb>
                    <Breadcrumb.Item>{t('Component: Accommodation')}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>
            <SearchAccommodationView
                loading={loading}
                itemData={itemData}
            />
        </>
    );
}

export default React.memo(SearchAccommodationViewController);
