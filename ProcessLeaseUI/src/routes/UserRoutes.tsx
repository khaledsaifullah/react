import React, { FC } from 'react';
import {Routes, Route} from 'react-router-dom';
import { UserTheme } from "../theme/User";
import ProtectedUserRoute from "./NavigationRoute/ProtectedUserRoute";

const AuthRoutes = React.lazy(() => import('./../modules/Auth/AuthRoutes'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));
const ChangePassword = React.lazy(() => import('../modules/Auth/components/ChangePassword/ChangePassword.controller'));
const MySetting = React.lazy(() => import('../modules/Auth/components/MySetting/MySetting.controller'));

const UserRoutes: FC = () => {
    return (
        <Routes>
            <Route element={<ProtectedUserRoute />}>
                <Route element={<UserTheme.Common.MainLayout />}>
                    <Route path={'/auth/*'} element={<AuthRoutes />} />
                    <Route path={'/change-password'} element={<ChangePassword />} />
                    <Route path={'/my-setting'} element={<MySetting />} />
                    <Route path={'/'} element={<MySetting />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Route>
        </Routes>
    );

};

export default UserRoutes;