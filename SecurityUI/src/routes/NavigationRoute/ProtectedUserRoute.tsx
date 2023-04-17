import React, { FC, useEffect, useContext } from "react";
import {Navigate, Outlet, useLocation, useNavigate} from 'react-router-dom';
import {AuthContext} from "../../context/auth/auth.context";
import {useLang} from "../../hooks/useLang";

const ProtectedUserRoute: FC<any> = ({ layout: Layout, component: Component, permission, ...rest }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { lang, getLangUrl, getUserLangPath } = useLang();
    const { isAuthReady, isAuthenticated } = useContext(AuthContext);

    const hasPermission = false;

    useEffect(() => {
        if (isAuthReady === true && isAuthenticated === false) {
            const redirectUrl = encodeURI(`${location.pathname}${location.search}`);
            localStorage.setItem('redirectUrl', redirectUrl);
            navigate(getLangUrl(lang, "/auth/login"));
        }
    }, [isAuthenticated]);

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
