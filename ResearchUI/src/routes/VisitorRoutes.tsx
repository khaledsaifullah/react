import React, { FC } from 'react';
import {Routes, Route} from 'react-router-dom';
import JournalArticleViewController from '../modules/Research/components/JournalArticle/View/JournalArticleView.controller';
import JournalArticleArchiveViewController from '../modules/Research/components/JournalArchive/View/Visitor/ResearchArticleJournalPublicationArchiveView.controller';
import { PublicTheme } from "../theme/Public";
import ProtectedUserRoute from "./NavigationRoute/ProtectedUserRoute";

const LandingPage = React.lazy(() => import('../modules/Cms/components/Pages/LandingPage/LandingPage'));
const Login = React.lazy(() => import('../modules/Auth/components/Login/Login.controller'));
const LoginSso = React.lazy(() => import('../modules/Auth/components/LoginSso/Login.sso.controller'));
const LogoutSso = React.lazy(() => import('../modules/Auth/components/LogoutSso/Logout.sso.controller'));
const AuthRoutes = React.lazy(() => import('./../modules/Auth/AuthRoutes'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));
const Research = React.lazy(() => import('../modules/Cms/components/Pages/Research/Research'));
const ResearcherProfileList = React.lazy(() => import('../modules/Research/components/ResearcherProfile/List/ResearcherProfileList.controller'));
const ResearcherList = React.lazy(() => import('../modules/Research/components/ResearcherList/List/ResearcherList.controller'));

const JournalArticleList = React.lazy(() => import('../modules/Research/components/JournalArticle/List/JournalArticleList.controller'));
const JournalArticleViewList = React.lazy(() => import('../modules/Research/components/JournalArticle/View/JournalArticleView.view'));
const JournalArticleArchiveList = React.lazy(() => import('../modules/Research/components/JournalArchive/List/Visitor/ResearchArticleJournalPublicationArchiveList.controller'));

const Journal = React.lazy(() => import('../modules/Cms/components/Pages/Research/Journal/Journal'));
const ResearchProfileCreate = React.lazy(() => import('../modules/Cms/components/Pages/Research/ProfileCreate/ProfileCreate.controller'));
const AboutUs = React.lazy(() => import('../modules/Cms/components/Pages/AboutUs/AboutUs'));
const ResearcherEducation = React.lazy(() => import('../modules/Research/components/ResearcherProfile/AddMore/Education/List/EducationList.controller'));
const PrivacyAndPolicy = React.lazy(() => import('../modules/Cms/components/Pages/PrivacyAndPolicy/PrivacyAndPolicy'));
const TermsAndConditions = React.lazy(() => import('../modules/Cms/components/Pages/TermsAndConditions/TermsAndConditions'));
const Contact = React.lazy(() => import('../modules/Cms/components/Pages/Contact/Contact'));
const ResearcherNetwork =  React.lazy(()=> import('../modules/Research/components/ResearcherNetwork/List/ResearcherNetworkList.controller') );

const JournalArticleApplicationForm =  React.lazy(()=> import('../modules/Research/components/JournalArticleApplication/Form/Frontend/JournalArticleApplicationForm.controller') );

const JournalSubmission =  React.lazy(()=> import('../modules/Research/components/JournalArticle/Form/JournalArticleForm.controller') );

const WebinarExpressionOfInterestForm =  React.lazy(()=> import('../modules/Research/components/Webinar/ExpressionOfInterest/Form/User/ExpressionOfInterestForm.controller') );

const WebinarEventsList =  React.lazy(()=> import('../modules/Research/components/Webinar/Event/List/Frontend/EventList.controller') );

const WebinarEventDetails =  React.lazy(()=> import('../modules/Research/components/Webinar/Event/View/Frontend/EventView.controller') );


const VisitorRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={'/auth/login'} element={<Login />} />
            <Route path={'/oauth2/logout'} element={<LogoutSso />} />
            <Route path={'/oauth2/id_token_sso_login'} element={<LoginSso />} />
            <Route element={<ProtectedUserRoute />}>
                <Route element={<PublicTheme.Research.MainLayout />}>
                    <Route path={'/research/profile/create'} element={<ResearchProfileCreate />} />
                    <Route path={'/research/researcher-network/:profileId'} element={<ResearcherNetwork />} />
                    <Route path={'/research/journal-submission'} element={<JournalSubmission />} />
                    <Route path={'/research/journal-article-application-form'} element={<JournalArticleApplicationForm />} />
                    <Route path={'/research/webinar-eoi-online'} element={<WebinarExpressionOfInterestForm />} />
                    <Route path={'/research/webinar-events-schedule'} element={<WebinarEventsList />} />
                    <Route path={'/research/webinar-events-schedule/view/:entityId'} element={<WebinarEventDetails />} />
                </Route>
            </Route>
            <Route element={<PublicTheme.Common.MainLayout />}>
            </Route>
            <Route element={<PublicTheme.Common.ServiceLayout />}>
                <Route path={'/'} element={<LandingPage />} />
                <Route path={'/auth/*'} element={<AuthRoutes />} />
                <Route path={'/about-us'} element={<AboutUs />} />
                <Route path={'/contact-us'} element={<Contact />} />
                <Route path={'/privacy-policy'} element={<PrivacyAndPolicy />} />
                <Route path={'/terms-and-condition'} element={<TermsAndConditions />} />
                <Route path={'/research'} element={<Research />} />
                <Route path={'/research/profile'} element={<ResearcherProfileList />} />
                <Route path={'/research/profile/:profileId'} element={<ResearcherProfileList />} />
                <Route path={'/research/researcher-list'} element={<ResearcherList />} />
                <Route path={'/research/researcher-list/:profileId'} element={<ResearcherList />} />
                <Route path={'/research/journal'} element={<Journal />} />
                <Route path={'/research/profile/researcher-education'} element={<ResearcherEducation />} />
                <Route path={'/research/journal-article'} element={<JournalArticleList />} />
                <Route path={'/research/journal-article/:journalId'} element={<JournalArticleViewController />} />
                <Route path={'/research/journal-article-archive'} element={<JournalArticleArchiveList />} />
                <Route path={'/research/journal-article-archive/:journalId'} element={<JournalArticleArchiveViewController />} />
                <Route path="*" element={<NotFound />} />

                
            </Route>
            <Route element={<PublicTheme.Research.MainLayout />}>
                {/* <Route path={'/research'} element={<Research />} />
                <Route path={'/research/profile'} element={<ResearcherProfileList />} />
                <Route path={'/research/profile/:profileId'} element={<ResearcherProfileList />} />
                <Route path={'/research/researcher-list'} element={<ResearcherList />} />
                <Route path={'/research/researcher-list/:profileId'} element={<ResearcherList />} />
                <Route path={'/research/journal'} element={<Journal />} />
                <Route path={'/research/profile/researcher-education'} element={<ResearcherEducation />} />
                <Route path={'/research/journal-article'} element={<JournalArticleList />} />
                <Route path={'/research/journal-article/:journalId'} element={<JournalArticleViewController />} />
                <Route path={'/research/journal-article-archive'} element={<JournalArticleArchiveList />} />
                <Route path={'/research/journal-article-archive/:journalId'} element={<JournalArticleArchiveViewController />} /> */}
            </Route>
        </Routes>
    );

};

export default VisitorRoutes;
