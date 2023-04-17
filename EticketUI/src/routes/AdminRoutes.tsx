import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom';
import { AdminTheme } from "../theme/Admin";
import ProtectedAdminRoute from "./NavigationRoute/ProtectedAdminRoute";

const EticketRoutes = React.lazy(() => import('../modules/Eticket/EticketRoutes'));
const ReportRoutes = React.lazy(() => import('../modules/Report/ReportRoutes'));
const SettingRoutes = React.lazy(() => import('../modules/Setting/SettingRoutes'));
const AccessDenied = React.lazy(() => import('../components/Error/AccessDenied/AccessDenied'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));
const DashboardRoutes = React.lazy(() => import('../modules/Dashboard/DashboardRoutes'));
const PrintRoutes = React.lazy(() => import('./PrintRoutes'));

const AdminRoutes: FC<any> = () => {
    return (
        <Routes>
             <Route element={<ProtectedAdminRoute />}>
                <Route path={'/print-preview/*'} element={<PrintRoutes />} />
                <Route element={<AdminTheme.Common.MainLayout />}>
                    <Route path={'/dashboard/*'} element={<DashboardRoutes />} />
                    <Route path={'/e-ticket/*'} element={<EticketRoutes />} />
                    <Route path={'/report/*'} element={<ReportRoutes />} />
                    <Route path={'/access/denied'} element={<AccessDenied />} />
                    <Route path={'/*'} element={<DashboardRoutes />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route element={<AdminTheme.Common.SettingLayout />}>
                    <Route path={'/setting/*'} element={<SettingRoutes />} />
                </Route>
             </Route>
        </Routes>
    );

};

export default AdminRoutes;
