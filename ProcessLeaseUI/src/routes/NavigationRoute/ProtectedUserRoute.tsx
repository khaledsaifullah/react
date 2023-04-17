import React, {FC, useContext} from "react";
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {AuthContext} from "../../context/auth/auth.context";
import {useLang} from "../../hooks/useLang";
import {BASE_URL, SECURITY_UI_URL} from "../../constants/config.constant";

const ProtectedUserRoute: FC<any> = ({ layout: Layout, component: Component, permission, ...rest }) => {
    const location = useLocation();
    const { lang, getUserLangPath } = useLang();
    const { isAuthenticated, isUser, isAdmin } = useContext(AuthContext)

    const hasPermission = false;

    if (isAuthenticated === false && isUser === false && isAdmin === false) {
        const redirectUrl = encodeURI(`${location.pathname}${location.search}`);
        localStorage.setItem('redirectUrl', redirectUrl);
        // @ts-ignore
        window.location = `${SECURITY_UI_URL}/oauth2/login?client_id=ZcwzbhUZgS3hgUKJpiPI&redirect_uri=${BASE_URL}`;
    }

    if (permission && hasPermission) {
        return (
            <Navigate to={getUserLangPath(lang, "/access/denied")} />
        );
    }

    return <Outlet />;
};

export default ProtectedUserRoute;
