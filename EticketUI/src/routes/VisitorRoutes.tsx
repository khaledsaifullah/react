import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicTheme } from "../theme/Public";
import LandingPage from "../modules/Cms/components/Pages/LandingPage/LandingPage";
import ShowDetailsPage from "../modules/Cms/components/Pages/ShowDetailsPage/ShowDetailsPage";
import RequestApplicationFormController from "@/modules/Eticket/components/Eticketing/TicketRequest/Form/Frontend/TicketRequestForm.controller";
import ProgramListController from "@/modules/Eticket/components/Eticketing/Program/List/Frontend/ProgramList.controller";
import ProgramViewController from "@/modules/Eticket/components/Eticketing/Program/View/Frontend/ProgramView.controller";
import ProgramFormController from "@/modules/Eticket/components/Eticketing/Program/Form/Frontend/ProgramForm.controller";
import CartFromController from "@/modules/Eticket/components/Eticketing/Program/Cart/Form/CartFrom.controller";

const Login = React.lazy(() => import("../modules/Auth/components/Login/Login.controller"));
const Logout = React.lazy(() => import("../modules/Auth/components/Logout/Logout.Controller"));
const LoginSso = React.lazy(() => import("../modules/Auth/components/LoginSso/Login.sso.controller"));
const LogoutSso = React.lazy(() => import("../modules/Auth/components/LogoutSso/Logout.sso.controller"));
const NotFound = React.lazy(() => import("../components/Error/NotFound/NotFound"));

const VisitorRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={"/auth/login"} element={<Login />} />
            <Route path={"/auth/logout"} element={<Logout />} />
            <Route path={"/oauth2/logout"} element={<LogoutSso />} />
            <Route path={"/oauth2/id_token_sso_login"} element={<LoginSso />} />
            <Route element={<PublicTheme.Common.ServiceLayout />}>
                <Route path={'services/:organizationShortCode/e-ticketing'} element={<ProgramListController />} />
                {/* <Route path={`/`} element={<ProgramListController />} /> */}
                <Route path={`/:organizationShortCode/details`} element={<ProgramViewController />} />
                <Route path={`/:organizationShortCode/buy-ticket`} element={<ProgramFormController />} />
                <Route path={`/:organizationShortCode/cart`} element={<CartFromController />} />
                <Route path={`/:organizationShortCode/request-application`} element={<RequestApplicationFormController />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default VisitorRoutes;
