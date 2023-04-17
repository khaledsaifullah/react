import React, { FC } from 'react';
import {Routes, Route} from 'react-router-dom';
import { UserTheme } from "../theme/User";
import ProtectedUserRoute from "./NavigationRoute/ProtectedUserRoute";

const AuthRoutes = React.lazy(() => import('./../modules/Auth/AuthRoutes'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));
const ChangePassword = React.lazy(() => import('../modules/Auth/components/ChangePassword/ChangePassword.controller'));
const MySetting = React.lazy(() => import('../modules/Auth/components/MySetting/MySetting.controller'));
const DashboardViewController = React.lazy(() => import('../modules/Profile/Common/Components/Dashboard/View/DashboardView.controller'));
const AppliedServiceList = React.lazy(() => import('../modules/Profile/Common/Components/AppliedService/List/AppliedServiceList.controller'));
const ResearchProfileCreate = React.lazy(() => import('../modules/Cms/components/Pages/Research/ProfileCreate/ProfileCreate.controller'));
const JournalArticleApplicationList = React.lazy(() => import('../modules/Research/components/JournalArticleApplication/List/Frontend/JournalArticleApplicationList.controller'));

const JournalArticleApplicationForm = React.lazy(() => import('../modules/Research/components/JournalArticleApplication/Form/Frontend/JournalArticleApplicationForm.controller'));
const JournalArticleApplicationView = React.lazy(() => import('../modules/Research/components/JournalArticleApplication/View/Frontend/JournalArticleApplicationView.controller'));
const ExpressionOfInterestList = React.lazy(() => import('../modules/Research/components/Webinar/ExpressionOfInterest/List/User/ExpressionOfInterestList.controller'));
const ExpressionOfInterestForm = React.lazy(() => import('../modules/Research/components/Webinar/ExpressionOfInterest/Form/User/ExpressionOfInterestForm.controller'));
const WebinarEventMyParticipationList = React.lazy(() => import('../modules/Research/components/Webinar/EventParticipant/List/MyParticipation/MyParticipationList.controller'));
const JournalArticleSubmissionList = React.lazy(() => import('../modules/Research/components/JournalArticle/List/User/UserJournalArticleList.controller'));
const ResearcherNetwork =  React.lazy(()=> import('../modules/Research/components/ResearcherNetwork/List/ResearcherNetworkList.controller') );

const UserRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route element={<ProtectedUserRoute />}>
                <Route element={<UserTheme.Common.MainLayout />}>
                    <Route path={'/auth/*'} element={<AuthRoutes />} />
                    <Route path={'/my-account'} element={<MySetting />} />
                    <Route path={'/research/profile/create'} element={<ResearchProfileCreate />} />
                    <Route path={'/'} element={<MySetting />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route element={<UserTheme.Common.FormLayout />}>
                    <Route path={'/dashboard'} element={<DashboardViewController />} />
                    <Route path={'/applied-services'} element={<AppliedServiceList />} />
                    <Route path={'/change-password'} element={<ChangePassword />} />
                    <Route path={'/my-setting'} element={<MySetting />} />
                    <Route path={'/journal-article-application'} element={<JournalArticleApplicationList />} />
                    <Route path={'/researcher-network'} element={<ResearcherNetwork />} />
                    <Route path={'/journal-article-application/create'} element={<JournalArticleApplicationForm />} />
                    <Route path={'/journal-article-application/edit/:entityId'} element={<JournalArticleApplicationForm />} />
                    <Route path={'/journal-article-application/view/:entityId'} element={<JournalArticleApplicationView />} />
                    <Route path={'/journal-article'} element={<JournalArticleSubmissionList />} />
                    <Route path={'/webinar-eoi-online'} element={<ExpressionOfInterestList />} />
                    <Route path={'/webinar-eoi-online/edit/:entityId'} element={<ExpressionOfInterestForm />} />
                    <Route path={'/my-webinars'} element={<WebinarEventMyParticipationList />} />
                </Route>
            </Route>
        </Routes>
    );

};

export default UserRoutes;
