import React, {FC, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {useLang} from "../hooks/useLang";
import {useAuthContext} from "../hooks/context/useAuthContext";

const AdminRoutes = React.lazy(() => import('./AdminRoutes'));
const VisitorRoutes = React.lazy(() => import('./VisitorRoutes'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));

const AppRoutes: FC<any> = () => {
    const { lang, getLangPath, getAdminLangPath } = useLang();
    const { changeLanguageFromUrl} = useLang();
    useAuthContext();

    useEffect(() => {
        changeLanguageFromUrl();
    }, []);

    return (
        <Routes>
            <Route path={getAdminLangPath(lang, "/*" )} element={<AdminRoutes />} />
            <Route path={"/admin/*"} element={<AdminRoutes />} />

            <Route path={getLangPath(lang, '/*')} element={<VisitorRoutes />} />
            <Route path={"/*"} element={<VisitorRoutes />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );

};

export default AppRoutes;
