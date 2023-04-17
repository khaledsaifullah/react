import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom';
import { AdminTheme } from "../theme/Admin";
import ProtectedAdminRoute from "./NavigationRoute/ProtectedAdminRoute";

const AuthRoutes = React.lazy(() => import('./../modules/Auth/AuthRoutes'));
const ProcessLeaseRoutes = React.lazy(() => import('../modules/ProcessLease/ProcessLeaseRoutes'));
const CmsRoutes = React.lazy(() => import('../modules/Cms/CmsRoutes'));
const ReportRoutes = React.lazy(() => import('../modules/Report/ReportRoutes'));
const SettingRoutes = React.lazy(() => import('../modules/Setting/SettingRoutes'));
const AccessDenied = React.lazy(() => import('../components/Error/AccessDenied/AccessDenied'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));
const DashboardRoutes = React.lazy(() => import('../modules/Dashboard/DashboardRoutes'));

const AdminRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route element={<ProtectedAdminRoute />}>
                <Route element={<AdminTheme.Common.MainLayout />}>
                    <Route path={'/dashboard/*'} element={<DashboardRoutes />} />
                    <Route path={'/cms/*'} element={<CmsRoutes />} />
                    <Route path={'/process-lease/*'} element={<ProcessLeaseRoutes />} />
                    <Route path={'/report/*'} element={<ReportRoutes />} />
                    <Route path={'/access/denied'} element={<AccessDenied />} />
                    <Route path={'/*'} element={<DashboardRoutes />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route element={<AdminTheme.Common.AuthLayout />}>
                    <Route path={'/auth/*'} element={<AuthRoutes />} />
                </Route>
                <Route element={<AdminTheme.Common.AuthLayout />}>
                    <Route path={'/setting/*'} element={<SettingRoutes />} />
                </Route>
            </Route>
        </Routes>

    );

};

export default AdminRoutes;
