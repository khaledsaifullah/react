import React from "react";
import {Routes, Route} from 'react-router-dom';

const CmsListLayout = React.lazy(() => import("./containers/CmsLayout/CmsList.layout"));
const SetupIndex = React.lazy(() => import("../../components/Error/ComingSoon/ComingSoon"));
const Pages = React.lazy(() => import("./components/Pages/ManagePage/List/PageList.controller"));
const Blocks = React.lazy(() => import("./components/Blocks/List/BlocksList.controller"));
const Menus = React.lazy(() => import("./components/Menu/List/MenuList.controller"));
const Services = React.lazy(() => import("./components/Services/List/ServicesList.controller"));
const Media = React.lazy(() => import("./components/Media/List/MediaList.controller"));
const Categories = React.lazy(() => import("./components/Category/List/CategoriesList.controller"));

const CmsRoutes = () => {
  return (
    <Routes>
        <Route element={<CmsListLayout />}>
            <Route path={"/setup/list"} element={<SetupIndex />}/>
            <Route path={"/pages"} element={<Pages />} />
            <Route path={"/blocks"} element={<Blocks />} />
            <Route path={"/menus"} element={<Menus />} />
            <Route path={"/services"} element={<Services />} />
            <Route path={"/media"} element={<Media />} />
            <Route path={"/categories"} element={<Categories />} />
        </Route>      
    </Routes>
  );
};

export default CmsRoutes;
