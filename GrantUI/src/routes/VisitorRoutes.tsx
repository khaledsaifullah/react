import React, { FC } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { PublicTheme } from "../theme/Public";
import ProtectedUserRoute from './NavigationRoute/ProtectedUserRoute';
import SetVisitorContext from "../modules/Common/components/VisitorContext/SetVisitorContext";
import LandingPage from '../modules/Cms/components/Pages/LandingPage/LandingPage';

const Login = React.lazy(() => import('../modules/Auth/components/Login/Login.controller'));
const Logout = React.lazy(() => import('../modules/Auth/components/Logout/Logout.Controller'));
const LoginSso = React.lazy(() => import('../modules/Auth/components/LoginSso/Login.sso.controller'));
const LogoutSso = React.lazy(() => import('../modules/Auth/components/LogoutSso/Logout.sso.controller'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));
const ETicketing = React.lazy(() => import('../modules/Cms/components/Pages/ETicketing/ETicketing'));
const ETicketingDetails = React.lazy(() => import('../modules/Cms/components/Pages/ETicketingDetails/ETicketingDetails'));
const ServiceComponent = React.lazy(() => import('../modules/Cms/components/Pages/ServiceComponent/ServiceComponent'));
const OrganizationService = React.lazy(() => import('../modules/Cms/components/Pages/OrganizationService/OrganizationService'));
const ServiceSeeker = React.lazy(() => import('../modules/Cms/components/Pages/ServiceSeeker/ServiceSeeker'));
const Service = React.lazy(() => import('../modules/Cms/components/Pages/Service/Service'));
const ServiceInstruction = React.lazy(() => import('../modules/Cms/components/Pages/ServiceInstruction/ServiceInstruction'));
const ServiceInstructionSpecialResearchGrant = React.lazy(() => import('../modules/Cms/components/Pages/ServiceInstruction/ServiceInstructionSpecialResearchGrant'));
const NSTFellowshipForm = React.lazy(() => import('../modules/Grant/components/Application/NSTFellowship/Form/NSTFellowshipForm.controller'));
const SpecialResearchGrantForm = React.lazy(() => import('../modules/Grant/components/Application/SpecialResearchGrant/Form/SpecialResearchGrantForm.controller'));
const RAndDProjectMoSTForm = React.lazy(() => import('../modules/Grant/components/Application/R&DProjectMoST/Form/RAndDProjectMoSTForm.controller'));
const BSTFTApplicationForm = React.lazy(() => import('../modules/Grant/components/Application/BSTFT/Form/BSTFTApplicationtForm.controller'));
const ScientificOrgForm = React.lazy(() => import('../modules/Grant/components/Application/ScientificOrg/Form/ScientificOrgForm.controller'));
const ResearchFellowshipForm = React.lazy(() => import('../modules/Grant/components/Application/ResearchFellowship/Form/ResearchFellowshipForm.controller'));
const RAndDProjectForm = React.lazy(() => import('../modules/Grant/components/Application/R&DProject/Form/RAndDProjectForm.controller'));
const NonGovtInstituteForm = React.lazy(() => import('../modules/Grant/components/Application/NonGovtInstitute/Form/NonGovtInstituteForm.controller'));
const InternThesisApplicationForm = React.lazy(() => import('../modules/Grant/components/Application/InternThesisApplication/Form/InternThesisApplicationForm.controller'));
const ResearcherProfile = React.lazy(() => import('../modules/Grant/components/Profile/Researcher/Form/ResearcherProfileForm.controller'));

const VisitorRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={'/auth/login'} element={<Login />} />
            <Route path={'/auth/logout'} element={<Logout />} />
            <Route path={'/oauth2/logout'} element={<LogoutSso />} />
            <Route path={'/oauth2/id_token_sso_login'} element={<LoginSso />} />
            <Route element={<PublicTheme.Common.MainLayout />}>
                <Route path={'/e-ticketing'} element={<ETicketing />} />
                <Route path={'/e-ticketing/:token'} element={<ETicketingDetails />} />
            </Route>
            <Route element={<PublicTheme.Common.ServiceLayout />}>
                <Route path={`/`} element={<LandingPage />} />
                <Route path={'/component/:token'} element={<ServiceComponent />} />
                <Route path={'/organization-service/:token'} element={<OrganizationService />} />
                <Route path={'/service-seeker/:token'} element={<ServiceSeeker />} />
                <Route path={'/service/:token'} element={<Service />} />
                <Route path={'/service-instruction/nst-fellowship-form'} element={
                    <Navigate replace to="/en/services/most/nst-fellowship-form" />
                } />

                <Route element={<SetVisitorContext />}>
                    <Route path={'services/:organizationShortCode/special-research-grant'} element={<ServiceInstructionSpecialResearchGrant />} />
                    <Route path={'services/:organizationShortCode/:serviceSlug'} element={<ServiceInstruction />} />
                </Route>

                <Route element={<ProtectedUserRoute />}>
                    <Route path={`/register-researcher`} element={<ResearcherProfile />} />
                    <Route path={`/update-researcher-profile`} element={<ResearcherProfile />} />

                    <Route path={'/application/most/grants-application-r-and-d-project'} element={<RAndDProjectMoSTForm />} />
                    <Route path={'/application/:organizationShortCode/grants-application-r-and-d-project'} element={<RAndDProjectForm />} />
                    <Route path={'/application/:organizationShortCode/nst-fellowship'} element={<NSTFellowshipForm fellowshipType={"MSc"} />} />
                    <Route path={'/application/:organizationShortCode/special-research-grant'} element={<SpecialResearchGrantForm />} />
                    <Route path={'/application/:organizationShortCode/non-govt-institute'} element={<NonGovtInstituteForm fellowshipType={"MSc"}/>} />
                    <Route path={'/application/:organizationShortCode/bst-fellowship'} element={<BSTFTApplicationForm />} />
                    <Route path={'/application/:organizationShortCode/scientific-organization-grant'} element={<ScientificOrgForm />} />
                    <Route path={'/application/:organizationShortCode/research-fellowship'} element={<ResearchFellowshipForm />} />
                    {/* <Route path={'/application/:organizationShortCode/research-fellowship-msc'} element={<ResearchFellowshipForm fellowshipType={"MSc"} />} /> */}
                    <Route path={'/application/:organizationShortCode/internship-thesis-application'} element={<InternThesisApplicationForm />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );

};

export default VisitorRoutes;
