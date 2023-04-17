import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserTheme } from "../theme/User";
import ProtectedUserRoute from "./NavigationRoute/ProtectedUserRoute";
import UserPanelLayout from "../modules/UserPanel/containers/UserPanelLayout/UserPanel.layout";

const AuthRoutes = React.lazy(() => import('./../modules/Auth/AuthRoutes'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));
const UserPanelRoutes = React.lazy(() => import('../modules/UserPanel/UserPanelRoutes'));
const AppliedServiceCardView = React.lazy(() => import('../modules/UserPanel/components/Common/AppliedService/View/AppliedServiceCardView.controller'));
const PrintRoutes = React.lazy(() => import('./PrintRoutes'));

const UserRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route element={<ProtectedUserRoute />}>
                <Route path={'/print-preview/*'} element={<PrintRoutes />} />
                <Route element={<UserTheme.Common.MainLayout />}>
                    <Route element={<UserPanelLayout />}>
                        <Route path={'/auth/*'} element={<AuthRoutes />} />
                        <Route path={'/*'} element={<UserPanelRoutes />} />
                        <Route path={`/`} element={<AppliedServiceCardView />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );

};

export default UserRoutes;
