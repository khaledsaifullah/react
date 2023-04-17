import React, { FC } from 'react';
import { useLang } from "../../../../../hooks/useLang";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";
import './LandingPage.style.scss';

const LandingPage: FC<any> = props => {
    const { t } = useLang();

    return (
        <>
            <ContextJSX>
                <BodyClassName className={'component-grant'} />
                <MetaTag>
                    <MetaTag.Title>{t('Component: Training')}</MetaTag.Title>
                </MetaTag>
                <Header>
                    <Header.PageTitle>{t('Component: Training')}</Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item>{t('Component: Training')}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>
        </>
    );
}

export default LandingPage;
