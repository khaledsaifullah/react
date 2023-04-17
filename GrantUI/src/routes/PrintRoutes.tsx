import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import BillCircularInformPrintView from '../modules/Report/components/Circular/CircularInformation/Print/BillCircularInformPrint.view';
import { AdminTheme } from "../theme/Admin";

const NSTFellowshipApplicantPrintListing = React.lazy(() => import('../modules/Report/components/NSTFellowship/Applicant/Print/NSTFellowshipApplicantPrint.listing'));
const CircularInformationPrintView = React.lazy(() => import('../modules/Report/components/Circular/CircularInformation/Print/CircularInformationPrint.view'));
const SynopsisOfResearchProjectPrintView = React.lazy(() => import('@/modules/Grant/components/SynopsisOfResearchProject/View/SynopsisOfResearchProjectPrint.view'));

const PrintRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route element={<AdminTheme.Common.PrintLayout />}>
                <Route path={'/report/nst-fellowship/applicant-report'} element={<NSTFellowshipApplicantPrintListing />} />
                <Route path={'/report/circular/circular-information-report'} element={<CircularInformationPrintView />} />
                <Route path={'/report/bill-submission/bill-submission-form'} element={<BillCircularInformPrintView />} />
                <Route path={'/report/synopsis-of-research-project'} element={<SynopsisOfResearchProjectPrintView />} />
            </Route>
        </Routes>
    );

};

export default PrintRoutes;
