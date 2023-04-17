import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicTheme } from "../theme/Public";
import ProtectedUserRoute from './NavigationRoute/ProtectedUserRoute';
import SetVisitorContext from "../modules/Common/components/VisitorContext/SetVisitorContext";
import VerificationComponent from '@/modules/Cms/components/Pages/Verification/VerificationComponent';
import ClassAApplicationFormController from '@/modules/License/components/Application/ClassA/Form/ClassAApplicationForm.controller';

const ServiceComponent = React.lazy(() => import('../modules/Cms/components/Pages/ServiceComponent/ServiceComponent'));
const Login = React.lazy(() => import('../modules/Auth/components/Login/Login.controller'));
const Logout = React.lazy(() => import('../modules/Auth/components/Logout/Logout.Controller'));
const LoginSso = React.lazy(() => import('../modules/Auth/components/LoginSso/Login.sso.controller'));
const LogoutSso = React.lazy(() => import('../modules/Auth/components/LogoutSso/Logout.sso.controller'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));
const ServiceInstruction = React.lazy(() => import('../modules/Cms/components/Pages/ServiceInstruction/ServiceInstruction'));

const ClassCLicenseForm = React.lazy(() => import('../modules/License/components/Application/ClassCLicense/Form/ClassCLicenseForm.controller'));
const ClassELicenseForm = React.lazy(() => import('../modules/License/components/Application/ClassELicense/Form/ClassELicenseForm.controller'));
const ImportExportPermitForm = React.lazy(() => import('../modules/License/components/Application/ImportExportPermit/Form/ImportExportPermitForm.controller'));
const ClassEForm = React.lazy(() => import('../modules/License/components/Application/ClassELicense/Form/ClassELicenseForm.controller'));
const ScienceClubRegistrationForm = React.lazy(() => import('../modules/License/components/Application/ScienceClubRegistration/Form/ScienceClubRegistrationForm.controller'));
const RcoApplicationForm = React.lazy(() => import('../modules/License/components/Application/RcoApplication/Form/RcoApplicationForm.controller'));
const LicenseSurrenderForm = React.lazy(() => import('../modules/License/components/Application/LicenseSurrender/Form/LicenseSurrenderForm.controller'));
const NocApplicationForm = React.lazy(() => import('../modules/License/components/Application/NocApplication/Form/NocApplicationForm.controller'));

const VisitorRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={'/auth/login'} element={<Login />} />
            <Route path={'/auth/logout'} element={<Logout />} />
            <Route path={'/oauth2/logout'} element={<LogoutSso />} />
            <Route path={'/oauth2/id_token_sso_login'} element={<LoginSso />} />
            <Route element={<PublicTheme.Common.ServiceLayout />}>
                <Route path={`/`} element={<ServiceComponent />} />
                <Route path="/verify/:uuid" element={<VerificationComponent />} />
                <Route element={<SetVisitorContext />}>
                    <Route path={'/services/:organizationShortCode/:serviceSlug'} element={<ServiceInstruction />} />
                    <Route element={<ProtectedUserRoute />}>
                        <Route path={"/application/:organizationShortCode/class-a-license"} element={<ClassAApplicationFormController />} />
                        <Route path={"/application/:organizationShortCode/class-c-license"} element={<ClassCLicenseForm />} />
                        <Route path={"/application/:organizationShortCode/class-e-license"} element={<ClassELicenseForm />} />
                        <Route path={'/application/:organizationShortCode/science-club-registration'} element={<ScienceClubRegistrationForm />} />
                        <Route path={'/application/:organizationShortCode/application-for-license-e-class-licence'} element={<ClassEForm />} />
                        <Route path={"/application/:organizationShortCode/import-export-permit"} element={<ImportExportPermitForm />} />
                        <Route path={"/application/:organizationShortCode/rco-application"} element={<RcoApplicationForm />} />
                        <Route path={"/application/:organizationShortCode/no-objection-certificate"} element={<NocApplicationForm />} />
                        <Route path={'/application/:organizationShortCode/license-surrender-transfer'} element={<LicenseSurrenderForm />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Route>
            <Route element={<PublicTheme.Common.MainLayout />}>
            </Route>
        </Routes>
    );

};

export default VisitorRoutes;
