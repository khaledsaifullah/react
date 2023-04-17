import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicTheme } from "../theme/Public";

const LandingPage = React.lazy(() => import("../modules/Cms/components/Pages/LandingPage/LandingPage"));
const Login = React.lazy(() => import("../modules/Auth/components/Login/Login.controller"));
const LoginSso = React.lazy(() => import("../modules/Auth/components/LoginSso/Login.sso.controller"));
const LogoutSso = React.lazy(() => import("../modules/Auth/components/LogoutSso/Logout.sso.controller"));
const AuthRoutes = React.lazy(() => import("./../modules/Auth/AuthRoutes"));
const NotFound = React.lazy(() => import("../components/Error/NotFound/NotFound"));
const AboutUs = React.lazy(() => import("../modules/Cms/components/Pages/AboutUs/AboutUs"));
const PrivacyAndPolicy = React.lazy(() => import("../modules/Cms/components/Pages/PrivacyAndPolicy/PrivacyAndPolicy"));
const TermsAndConditions = React.lazy(() => import("../modules/Cms/components/Pages/TermsAndConditions/TermsAndConditions"));
const Contact = React.lazy(() => import("../modules/Cms/components/Pages/Contact/Contact"));
const ProcessLeaseApplicationForm = React.lazy(() => import("../modules/ProcessLease/components/Application/ProcessLeaseApplication/Form/ProcessLeaseApplicationForm.controller"));

const VisitorRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={"/auth/login"} element={<Login />} />
            <Route path={"/oauth2/logout"} element={<LogoutSso />} />
            <Route path={"/oauth2/id_token_sso_login"} element={<LoginSso />} />
            <Route element={<PublicTheme.Common.ServiceLayout />}>
                <Route path={'/application/process-lease-application'} element={<ProcessLeaseApplicationForm />} />
                <Route path={`/`} element={<LandingPage />} />
            </Route>
            <Route element={<PublicTheme.Common.MainLayout />}>
                <Route path={"/auth/*"} element={<AuthRoutes />} />
                <Route path={"/about-us"} element={<AboutUs />} />
                <Route path={"/contact-us"} element={<Contact />} />
                <Route
                    path={"/privacy-policy"}
                    element={<PrivacyAndPolicy />}
                />
                <Route
                    path={"/terms-and-condition"}
                    element={<TermsAndConditions />}
                />

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default VisitorRoutes;
