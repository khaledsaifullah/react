import React from "react";
import { Routes, Route } from "react-router-dom";

const CmsListLayout = React.lazy(() => import("./containers/CmsLayout/CmsList.layout"));
const SetupIndex = React.lazy(() => import("../../components/Error/ComingSoon/ComingSoon"));

const CmsRoutes = () => {
  return (
    <Routes>
        <Route element={<CmsListLayout />}>
            <Route path={"/setup/list"} element={<SetupIndex />} />
        </Route>
    </Routes>
  );
};

export default CmsRoutes;
