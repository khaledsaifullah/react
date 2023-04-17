import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicTheme } from "../theme/Public";
import LandingPage from '../modules/Cms/components/Pages/LandingPage/LandingPage';
import AccommodationViewDetailsPage from '../modules/Cms/components/Pages/HomePage/View/HomePageView.controller';
import BookingPageForm from '../modules/Cms/components/Pages/BookingPage/Form/BookingPageForm.controller';
import BookingPageFormDetails from '../modules/Cms/components/Pages/BookingPage/Form/BookingPageForm.details';
import BookingPageFormConfirmationDetails from '../modules/Cms/components/Pages/BookingPage/Form/BookingPageForm.confirmation';
import BookingHistoryListing from '../modules/Cms/components/Pages/BookingHistory/List/BookingHistoryList.listing';
import ReviewAndFeedbackListing from '../modules/Cms/components/Pages/ReviewAndFeedbackPage/List/ReviewAndFeedbackList.listing';
import ReviewAndFeedbackDetailsListing from '../modules/Cms/components/Pages/ReviewAndFeedbackDetailsPage/List/CustomerBillingInformationList.listing';
import BookingDetailsListing from "../modules/Cms/components/Pages/BookingDetailsPage/List/BookingDetailsList.listing";
import CustomerBillingInformationPage from "../modules/Cms/components/Pages/CustomerBillingInformationPage/List/CustomerBillingInformationList.listing";
import SetVisitorContext from '../modules/Common/components/VisitorContext/SetVisitorContext';
const AccommodationHomePage = React.lazy(() => import('../modules/Cms/components/Pages/HomePage/List/HomePageList.controller'));
const BuildingDetailsListController = React.lazy(() => import('../modules/Cms/components/Pages/BuildingDetails/List/BuildingDetailsList.controller'));
const FilterListPage = React.lazy(() => import('../modules/Cms/components/Pages/Filter/List/FilterList.controller'));
const SearchFilterListPage = React.lazy(() => import('../modules/Cms/components/Pages/SearchAccommodation/List/FilterList.controller'));

const Login = React.lazy(() => import('../modules/Auth/components/Login/Login.controller'));
const Logout = React.lazy(() => import('../modules/Auth/components/Logout/Logout.Controller'));
const LoginSso = React.lazy(() => import('../modules/Auth/components/LoginSso/Login.sso.controller'));
const LogoutSso = React.lazy(() => import('../modules/Auth/components/LogoutSso/Logout.sso.controller'));
const NotFound = React.lazy(() => import('../components/Error/NotFound/NotFound'));

const VisitorRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={'/auth/login'} element={<Login />} />
            <Route path={'/auth/logout'} element={<Logout />} />
            <Route path={'/oauth2/logout'} element={<LogoutSso />} />
            <Route path={'/oauth2/id_token_sso_login'} element={<LoginSso />} />
            <Route element={<PublicTheme.Common.ServiceLayout />}>
                {/* <Route path={`/`} element={<AccommodationHomePage />} /> */}
                <Route path={'/accommodation'} element={<LandingPage />} />
                <Route path={'/accommodation-details'} element={<AccommodationViewDetailsPage />} />
                <Route path={'/filter'} element={<FilterListPage />} />
                <Route path={'/building-details/:buildingId/:accommodationType'} element={<BuildingDetailsListController />} />
                <Route path={'/booking/:accommodationId'} element={<BookingPageForm />} />

                <Route element={<SetVisitorContext />}>
                    <Route path={`/services/:organizationShortCode/home`} element={<AccommodationHomePage />} />
                </Route>

                <Route path={'/search-accommodation'} element={<SearchFilterListPage />} />
                <Route path={'/booking-details/:bookingDetailId'} element={<BookingPageFormDetails />} />
                <Route path={'/booking-confirmation-details'} element={<BookingPageFormConfirmationDetails />} />
                <Route path={'/booking-history'} element={<BookingHistoryListing />} />
                <Route path={'/review-and-feedback'} element={<ReviewAndFeedbackListing />} />
                <Route path={'/review-and-feedback-details'} element={<ReviewAndFeedbackDetailsListing />} />
                <Route path={'/booking-details-page'} element={<BookingDetailsListing />} />
                <Route path={'/customer-billing-information'} element={<CustomerBillingInformationPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default VisitorRoutes;
