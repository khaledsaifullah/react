import FAQs from '@/modules/Cms/components/Pages/FAQs/FAQs';
import React, { FC } from 'react';
import {Routes, Route} from 'react-router-dom';
import OrganizationService from '../modules/Cms/components/Pages/OrganizationService/OrganizationService';
import Service from '../modules/Cms/components/Pages/Service/Service';
import { PublicTheme } from "../theme/Public";

const LandingPage = React.lazy(() => import('../modules/Cms/components/Pages/LandingPage/LandingPage'));
const LoginSso = React.lazy(() => import('../modules/Auth/components/LoginSso/Login.sso.controller'));
const LogoutSso = React.lazy(() => import('../modules/Auth/components/LogoutSso/Logout.sso.controller'));
const AuthRoutes = React.lazy(() => import('./../modules/Auth/AuthRoutes'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));
const AboutUs = React.lazy(() => import('../modules/Cms/components/Pages/AboutUs/AboutUs'));
const PrivacyAndPolicy = React.lazy(() => import('../modules/Cms/components/Pages/PrivacyAndPolicy/PrivacyAndPolicy'));
const TermsAndConditions = React.lazy(() => import('../modules/Cms/components/Pages/TermsAndConditions/TermsAndConditions'));
const Contact = React.lazy(() => import('../modules/Cms/components/Pages/Contact/Contact'));
const OrganizationSelect = React.lazy(() => import('../modules/Auth/components/SwitchOrganization/SwitchOrganization.controller'));
const ServiceSeeker = React.lazy(() => import('../modules/Cms/components/Pages/ServiceSeeker/ServiceSeeker'));
const ServiceAssignmentList = React.lazy(() => import('../modules/Service/components/ServiceAssignment/List/Frontend/ServiceAssignmentList.controller'));
const ServiceMappingList = React.lazy(() => import('../modules/Service/components/ServiceMapping/List/Frontend/ServiceMappingList.controller'));

const VisitorRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={'/oauth2/login'} element={<LoginSso />} />
            <Route path={'/oauth2/logout'} element={<LogoutSso />} />
            <Route element={<PublicTheme.Common.AuthLayout />}>
                <Route path={'/auth/*'} element={<AuthRoutes />} />
            </Route>
            <Route element={<PublicTheme.Common.MainLayout />}>
                <Route path={`/`} element={<LandingPage />} />
            </Route>
            <Route element={<PublicTheme.Common.ServiceLayout />}>
                <Route path={'/categorywise-services/:token'} element={<ServiceAssignmentList serviceType={'category'} />} />
                <Route path={'/organizationwise-services/:token'} element={<ServiceAssignmentList serviceType={'organization'} />} />
                <Route path={'/recipientwise-services/:token'} element={<ServiceAssignmentList serviceType={'seeker'} />} />
                <Route path={'/services'} element={<ServiceMappingList />} />
                <Route path={'/faqs'} element={<FAQs />} />
                <Route path={'/about-us'} element={<AboutUs />} />
                <Route path={'/contact-us'} element={<Contact />} />
                <Route path={'/privacy-policy'} element={<PrivacyAndPolicy />} />
                <Route path={'/terms-and-conditions'} element={<TermsAndConditions />} />

                <Route path={'/organization-select'} element={<OrganizationSelect />} />
                <Route path={'/organization-service/:token'} element={<OrganizationService />} />
                <Route path={'/services/:token'} element={<Service />} />
                <Route path={'/services/seeker/:seekeryKey'} element={<ServiceSeeker />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );

};

export default VisitorRoutes;
