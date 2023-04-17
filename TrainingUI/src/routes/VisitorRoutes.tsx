import React, { FC } from 'react';
import {Routes, Route} from 'react-router-dom';
import { PublicTheme } from "../theme/Public";
import LandingPage from '../modules/Cms/components/Pages/LandingPage/LandingPage';

import TrainingCirculationList from '../modules/Cms/components/Pages/ServiceComponent/TrainingCirculationList';
import TrainingCirculationListAll from '../modules/Cms/components/Pages/ServiceComponent/TrainingCirculationListAll';
import TrainingDetail from '../modules/Cms/components/Pages/ServiceComponent/TrainingDetailPage';
import TrainingCirtificate from '../modules/Cms/components/Pages/ServiceComponent/TrainingCirtificate';
import ProtectedUserRoute from './NavigationRoute/ProtectedUserRoute';
import SetVisitorContext from "../modules/Common/components/VisitorContext/SetVisitorContext";
import CourseListPageController from '@/modules/Training/components/FrontEnd/CourseList/CourseListPage.controller';
import CourseDetailsViewController from '@/modules/Training/components/FrontEnd/CourseDetails/CourseDetailsView.controller';
import CourseListAllPageController from '@/modules/Training/components/FrontEnd/CourseListAll/CourseListAllPage.controller';
import ApplyInCourseFormController from '@/modules/Training/components/FrontEnd/ApplyInCourse/ApplyInCourseForm.controller';
import ApplicationForLabTrainingVisitFormController from '@/modules/Training/components/ApplicationForLabTrainingVisit/Form/ApplicationForLabTrainingVisitForm.controller';
import ELarningPage from '@/modules/Cms/components/Pages/ServiceComponent/eLarning';
import ELarningAllCourseDetailPage from '@/modules/Cms/components/Pages/ServiceComponent/eLarningAllCourseDetail';
import ELarningSingleCourseDetailPage from '@/modules/Cms/components/Pages/ServiceComponent/eLarningSingleCourseDetail';
import ELarningEnrolledCourseViewPage from '@/modules/Cms/components/Pages/ServiceComponent/eLarningEnrolledCourseView';



import VirtualGalleryPage from '@/modules/Cms/components/Pages/ServiceComponent/virtualGallery';


const Login = React.lazy(() => import('../modules/Auth/components/Login/Login.controller'));
const Logout = React.lazy(() => import('../modules/Auth/components/Logout/Logout.Controller'));
const LoginSso = React.lazy(() => import('../modules/Auth/components/LoginSso/Login.sso.controller'));
const LogoutSso = React.lazy(() => import('../modules/Auth/components/LogoutSso/Logout.sso.controller'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));
const ServiceComponent = React.lazy(() => import('../modules/Cms/components/Pages/ServiceComponent/ServiceComponent'));
const EOISubmissionForm = React.lazy(() => import('../modules/Training/components/EOISubmission/Form/EOISubmissionForm.controller'));

const VisitorRoutes: FC<any> = () => {
    return (


        <Routes>
            <Route path={'/auth/login'} element={<Login />} />
            <Route path={'/auth/logout'} element={<Logout />} />
            <Route path={'/oauth2/logout'} element={<LogoutSso />} />
            <Route path={'/oauth2/id_token_sso_login'} element={<LoginSso />} />
            <Route element={<PublicTheme.Common.ServiceLayout />}>
                {/* <Route path={`/`} element={<LandingPage />} /> */}
                <Route path={`/`} element={<CourseListPageController />} />
                <Route path={`/all-course-list`} element={<CourseListAllPageController />} />
                <Route path={`/course-details`} element={<CourseDetailsViewController />} />

                <Route path={`/trainglist`} element={<TrainingCirculationList />} />
                <Route path={`/trainglistall`} element={<TrainingCirculationListAll />} />
                <Route path={`/trainglistdetail`} element={<TrainingDetail />} />
                <Route path={`/trainingcertificate`} element={<TrainingCirtificate/>} />
                <Route path={`/elarning`} element={<ELarningPage/>} />
                <Route path={`/elarningallcoursedetail`} element={<ELarningAllCourseDetailPage/>} />
                <Route path={`/elarningsinglecoursedetail`} element={<ELarningSingleCourseDetailPage/>} />
                <Route path={`/elarningenrolledcourseview`} element={<ELarningEnrolledCourseViewPage/>} />


                <Route path={`/virtualgallery`} element={<VirtualGalleryPage />} />



                <Route path={`/`} element={<ServiceComponent />} />

                <Route element={<ProtectedUserRoute />}>
                    <Route path={'/application/training-eoi/app'} element={<EOISubmissionForm />} />
                    <Route path={'/application/apply-in-training-course/:courseScheduleId'} element={<ApplyInCourseFormController />} />
                </Route>

                <Route element={<SetVisitorContext />}>
                    <Route path={'/services/:organizationShortCode/online-training'} element={<CourseListPageController />} />
                    <Route element={<ProtectedUserRoute />}>
                        <Route path={"/services/:organizationShortCode/training-eoi"} element={<EOISubmissionForm/>} />
                        <Route path={"/services/:organizationShortCode/application-for-lab-training-visit"} element={<ApplicationForLabTrainingVisitFormController/>} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );

};

export default VisitorRoutes;
