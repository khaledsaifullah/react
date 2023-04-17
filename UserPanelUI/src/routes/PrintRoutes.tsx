import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserTheme } from "../theme/User";

const RandDPrintView = React.lazy(() => import('../modules/UserPanel/components/Grant/BillSubmission/Preview/RandDPrintView.preview'));
// const BSTFTPrintView = React.lazy(() => import('../modules/UserPanel/components/Grant/BillSubmission/Preview/BSTFTLocalPrintView.preview'));

const PrintRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route element={<UserTheme.Common.PrintLayout />}>
                <Route path={'/report/bill-submission/r-and-d-bill-preview/'} element={<RandDPrintView />} />
                {/* <Route path={'/report/bill-submission/bill-submission-nst-1/'} element={<BSTFTPrintView />} /> */}
            </Route>
        </Routes>
    );

};

export default PrintRoutes;
