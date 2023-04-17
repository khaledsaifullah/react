import React, {FC, useContext, useEffect} from "react";
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {AuthContext} from "../../context/auth/auth.context";
import {useLang} from "../../hooks/useLang";
import {BASE_URL, SECURITY_UI_URL} from "../../constants/config.constant";

const ProtectedAdminRoute: FC<any> = ({ layout: Layout, component: Component, permission, ...rest }) => {
    const location = useLocation();
    const { lang, getLangUrl, getAdminLangUrl } = useLang();
    const { isAuthenticated, isAdmin} = useContext(AuthContext)
    const isAuthReady = sessionStorage.getItem('isAuthReady');

    const hasPermission = false;

    useEffect(() => {
        if (isAuthReady === 'Yes' && isAuthenticated === false && isAdmin === false) {
            sessionStorage.setItem('isAuthReady', 'No');
            const redirectUrl = encodeURI(`${location.pathname}${location.search}`);
            localStorage.setItem('redirectUrl', redirectUrl);
            // @ts-ignore
            window.location = getLangUrl(lang, `/auth/login?servicename=Grant&redirect_uri=${BASE_URL + redirectUrl}`, SECURITY_UI_URL, true);
        }
    }, [isAuthReady, isAuthenticated, isAdmin]);

    if (permission && hasPermission) {
        return (
            <Navigate to={getAdminLangUrl(lang, "/access/denied")} />
        );
    }

    if (isAuthenticated === true && isAdmin === true) {
        return <Outlet />;
    }

    return null;
};

export default ProtectedAdminRoute;
