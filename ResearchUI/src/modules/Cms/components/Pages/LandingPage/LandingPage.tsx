import React, { FC } from 'react'
import ContextJsx from "../../../../../components/ContextJsx";
import Header from "../../../../../components/Header";
import './LandingPage.style.scss';

const LandingPage: FC<any> = props => {
    return (
        <>
            <ContextJsx>
                <Header>
                    <Header.PageTitle>{'Welcome to the Research Component'}</Header.PageTitle>
                </Header>
            </ContextJsx>
        </>
    );
}

export default LandingPage;
