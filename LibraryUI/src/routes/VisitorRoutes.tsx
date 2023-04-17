import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicTheme } from "../theme/Public";

const LandingPage = React.lazy(() => import('../modules/Cms/components/Pages/LandingPage/LandingPage'));
const Login = React.lazy(() => import('../modules/Auth/components/Login/Login.controller'));
const LoginSso = React.lazy(() => import('../modules/Auth/components/LoginSso/Login.sso.controller'));
const LogoutSso = React.lazy(() => import('../modules/Auth/components/LogoutSso/Logout.sso.controller'));
const AuthRoutes = React.lazy(() => import('./../modules/Auth/AuthRoutes'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));
const ETicketing = React.lazy(() => import('../modules/Cms/components/Pages/ETicketing/ETicketing'));
const ETicketingDetails = React.lazy(() => import('../modules/Cms/components/Pages/ETicketingDetails/ETicketingDetails'));
//const BookSearchList = React.lazy(() => import('../modules/Library/components/BookSearch/List/BookSearchList.controller'));
const AboutUs = React.lazy(() => import('../modules/Cms/components/Pages/AboutUs/AboutUs'));
const PrivacyAndPolicy = React.lazy(() => import('../modules/Cms/components/Pages/PrivacyAndPolicy/PrivacyAndPolicy'));
const TermsAndConditions = React.lazy(() => import('../modules/Cms/components/Pages/TermsAndConditions/TermsAndConditions'));
const Contact = React.lazy(() => import('../modules/Cms/components/Pages/Contact/Contact'));
const BookSearchDetail = React.lazy(() => import('../modules/Library/components/OPAC/BookSearch/Detail/BookSearchDetail.controller'));
const UnionCatalogLandingPage = React.lazy(() => import('../modules/Library/components/OPAC/UnionCatalog/Landing/UnionCatalogueLanging.controller'));
const OPACLandingPage = React.lazy(() => import('../modules/Library/components/OPAC/BookSearch/List/BookSearchList.controller'));
const UnionCatalogSearchList = React.lazy(() => import('../modules/Library/components/OPAC/UnionCatalog/Search/UnionCatalogSearchList.controller'));

const VisitorRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={'/auth/login'} element={<Login />} />
            <Route path={'/oauth2/logout'} element={<LogoutSso />} />
            <Route path={'/oauth2/id_token_sso_login'} element={<LoginSso />} />
            <Route element={<PublicTheme.Common.AuthLayout />}>
                <Route path={'/auth/*'} element={<AuthRoutes />} />
            </Route>
            <Route element={<PublicTheme.Common.MainLayout />}>

            </Route>

            <Route element={<PublicTheme.Common.ServiceLayout />}>
                <Route path={'/about-us'} element={<AboutUs />} />
                <Route path={'/contact-us'} element={<Contact />} />
                <Route path={'/privacy-policy'} element={<PrivacyAndPolicy />} />
                <Route path={'/terms-and-condition'} element={<TermsAndConditions />} />

                <Route path={`/opac/book-details/:catalogueId`} element={<BookSearchDetail />} />
                <Route path={`/opac/union-catalog`} element={<UnionCatalogLandingPage />} />
                <Route path={`/opac/union-catalog/details`} element={<UnionCatalogSearchList />} />
                <Route path={`/`} element={<LandingPage />} />
                <Route path={`/opac`} element={<OPACLandingPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
            {/* <Route path={'/opac/search'} element={<BookSearchList />} /> */}
        </Routes>
    );

};

export default VisitorRoutes;
