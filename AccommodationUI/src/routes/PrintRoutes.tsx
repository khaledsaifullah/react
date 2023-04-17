import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminTheme } from "../theme/Admin";

const PrintRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route element={<AdminTheme.Common.PrintLayout />}>
                {/*<Route path={'/report/nst-fellowship/applicant-report'} element={<NSTFellowshipApplicantPrintListing />} />*/}
            </Route>
        </Routes>
    );

};

export default PrintRoutes;
