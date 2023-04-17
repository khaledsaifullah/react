import React, {FC, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import {useLang} from "../hooks/useLang";

const AdminRoutes = React.lazy(() => import('./AdminRoutes'));
const UserRoutes = React.lazy(() => import('./UserRoutes'));
const VisitorRoutes = React.lazy(() => import('./VisitorRoutes'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));

const AppRoutes: FC<any> = () => {
    const { lang, getLangPath, getUserLangPath, getAdminLangPath } = useLang();
    const { changeLanguageFromUrl} = useLang();

    useEffect(() => {
        changeLanguageFromUrl();
    }, []);

    return (
        <Routes>
            <Route path={getAdminLangPath(lang, "/*" )} element={<AdminRoutes />} />
            <Route path={"/admin/*"} element={<AdminRoutes />} />

            <Route path={getUserLangPath(lang, "/*" )} element={<UserRoutes />} />
            <Route path={"/my-account/*"} element={<UserRoutes />} />

            <Route path={getLangPath(lang, '/*')} element={<VisitorRoutes />} />
            <Route path={"/*"} element={<VisitorRoutes />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );

};

export default AppRoutes;