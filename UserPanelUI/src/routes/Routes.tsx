import React, {FC, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {useLang} from "../hooks/useLang";
import {useAuthContext} from "../hooks/context/useAuthContext";

const UserRoutes = React.lazy(() => import('./UserRoutes'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));
const Login = React.lazy(() => import('../modules/Auth/components/Login/Login.controller'));
const Logout = React.lazy(() => import('../modules/Auth/components/Logout/Logout.Controller'));
const LoginSso = React.lazy(() => import('../modules/Auth/components/LoginSso/Login.sso.controller'));
const LogoutSso = React.lazy(() => import('../modules/Auth/components/LogoutSso/Logout.sso.controller'));

const AppRoutes: FC<any> = () => {
    const { lang, getLangPath, getUserLangPath} = useLang();
    const { changeLanguageFromUrl} = useLang();
    useAuthContext();

    useEffect(() => {
        changeLanguageFromUrl();
    }, []);

    return (
        <Routes>
            <Route path={getLangPath(lang, "/auth/login" )} element={<Login />} />
            <Route path={getLangPath(lang, "/auth/logout" )} element={<Logout />} />
            <Route path={getLangPath(lang, "/oauth2/logout" )} element={<LogoutSso />} />
            <Route path={getLangPath(lang, "/oauth2/id_token_sso_login" )} element={<LoginSso />} />

            <Route path={getUserLangPath(lang, "/*" )} element={<UserRoutes />} />
            <Route path={"/my-account/*"} element={<UserRoutes />} />
            <Route path={"/*"} element={<UserRoutes />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );

};

export default AppRoutes;