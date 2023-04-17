import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom';
import { AdminTheme } from "../theme/Admin";
import ComingSoon from "../components/Error/ComingSoon/ComingSoon";

const PrintRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route element={<AdminTheme.Common.PrintLayout />}>
                <Route path={'/report/import-export/applicant-report'} element={<ComingSoon />} />
            </Route>
        </Routes>
    );

};

export default PrintRoutes;
