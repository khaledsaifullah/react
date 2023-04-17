import React, {FC, useEffect, useContext} from "react";
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {AuthContext} from "../../context/auth/auth.context";
import {useLang} from "../../hooks/useLang";
import {BASE_URL, SECURITY_UI_URL} from "../../constants/config.constant";

const ProtectedUserRoute: FC<any> = ({ layout: Layout, component: Component, permission, ...rest }) => {
    const location = useLocation();
    const { lang, getLangUrl, getUserLangPath } = useLang();
    const { isAuthenticated} = useContext(AuthContext);
    const isAuthReady = sessionStorage.getItem('isAuthReady');

    const hasPermission = false;

    useEffect(() => {
        if (isAuthReady === 'Yes' && isAuthenticated === false) {
            sessionStorage.setItem('isAuthReady', 'No');
            const redirectUrl = encodeURI(`${location.pathname}${location.search}`);
            localStorage.setItem('redirectUrl', redirectUrl);
            // @ts-ignore
            window.location = getLangUrl(lang, `/auth/login?servicename=License&redirect_uri=${BASE_URL + redirectUrl}`, SECURITY_UI_URL, true);
        }
    }, [isAuthReady, isAuthenticated]);

    if (permission && hasPermission) {
        return (
            <Navigate to={getUserLangPath(lang, "/access/denied")} />
        );
    }

    if (isAuthenticated === true) {
        return <Outlet />;
    }

    return null;
};

export default ProtectedUserRoute;
