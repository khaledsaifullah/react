import React, { FC } from 'react';
import {Routes, Route} from 'react-router-dom';
import { PublicTheme } from "@/theme/Public";
import LandingPage from '../modules/Cms/components/Pages/LandingPage/LandingPage';
import SetVisitorContext from '@/modules/Common/components/VisitorContext/SetVisitorContext';
import ProtectedUserRoute from './NavigationRoute/ProtectedUserRoute';
import ServiceInstruction from '@/modules/Cms/components/Pages/ServiceInstruction/ServiceInstruction';
import ProtectedAdminRoute from './NavigationRoute/ProtectedAdminRoute';

const EquipmentList = React.lazy(() => import('@/modules/TestConsultancy/components/EquipmentList/List/EquipmentList.controller'));
const DoctorList = React.lazy(() => import('@/modules/Health/components/Doctor/DoctorInfo/List/Frontend/DoctorList.controller'));
const ServiceList = React.lazy(() => import('@/modules/TestConsultancy/components/ServiceList/List/ServiceList.controller'));
const TestList = React.lazy(() => import('@/modules/Health/components/Testing/TestList/List/Frontend/TestList.controller'));

const Login = React.lazy(() => import('../modules/Auth/components/Login/Login.controller'));
const Logout = React.lazy(() => import('../modules/Auth/components/Logout/Logout.Controller'));
const LoginSso = React.lazy(() => import('../modules/Auth/components/LoginSso/Login.sso.controller'));
const LogoutSso = React.lazy(() => import('../modules/Auth/components/LogoutSso/Logout.sso.controller'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));
const ServiceApplicationForm = React.lazy(() => import("../modules/TestConsultancy/components/ServiceApplication/Form/ServiceApplicationForm.controller"));

const VisitorRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={'/auth/login'} element={<Login />} />
            <Route path={'/auth/logout'} element={<Logout />} />
            <Route path={'/oauth2/logout'} element={<LogoutSso />} />

            <Route path={'/oauth2/id_token_sso_login'} element={<LoginSso />} />
            <Route element={<PublicTheme.Common.ServiceLayout />}>
            <Route element={<ProtectedAdminRoute />}>
                    <Route path={"/application/analytical-service/offline-application"} element={<ServiceApplicationForm />} />
                </Route>

                <Route element={<ProtectedUserRoute />}>
                    <Route path={"/application/analytical-service"} element={<ServiceApplicationForm />} />
                    <Route path={"/:organizationShortCode/application/analytical-service"} element={<ServiceApplicationForm />} />
                    <Route path={'/application/:organizationShortCode/analytical-service'} element={<ServiceApplicationForm />} />

                    <Route path={"/application/calibration/*"} element={<ServiceApplicationForm />} />
                    <Route path={"/:organizationShortCode/application/calibration"} element={<ServiceApplicationForm />} />
                    <Route path={'/application/:organizationShortCode/calibration'} element={<ServiceApplicationForm />} />

                    <Route path={"/application/consultancy/*"} element={<ServiceApplicationForm />} />
                    <Route path={"/:organizationShortCode/application/consultancy"} element={<ServiceApplicationForm />} />
                    <Route path={'/application/:organizationShortCode/consultancy'} element={<ServiceApplicationForm />} />


                </Route>
            </Route>

            <Route element={<PublicTheme.Common.ServiceLayout />}>
            <Route element={<SetVisitorContext />}>
                    <Route path={'/services/:organizationShortCode/equipment-list'} element={<EquipmentList />} />
                    <Route path={'/services/:organizationShortCode/:serviceSlug'} element={<ServiceList />} />
                    <Route path={'/services/:organizationShortCode/diagnostic-service'} element={<TestList/>} />
                    <Route path={'services/:organizationShortCode/service-instruction/:serviceSlug'} element={<ServiceInstruction />} />
                    <Route path={'/services/:organizationShortCode/doctors-list'} element={<EquipmentList />} />
                    {/* <Route path={'/services/:organizationShortCode/equipments-list'} element={<InventoryList />} />
                    <Route path={'/services/:organizationShortCode/service-list'} element={<InventoryList />} /> */}
                </Route>
                <Route path={`/`} element={<LandingPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );

};

export default VisitorRoutes;
