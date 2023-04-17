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
                <BodyClassName className={'category-license'} />
                <MetaTag>
                    <MetaTag.Title>{t('Category: Licensing')}</MetaTag.Title>
                </MetaTag>
                <Header>
                    <Header.PageTitle>{t('Category: Licensing')}</Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item>{t('Category: Licensing')}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>
        </>
    );
}

export default LandingPage;
