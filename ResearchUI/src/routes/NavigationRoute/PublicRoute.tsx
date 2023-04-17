import React, {FC} from 'react';
import { Outlet } from 'react-router-dom';

const PublicRoute: FC<any> = ({ layout: Layout, component: Component, ...rest }) => {
    return <Outlet />;
}

export default PublicRoute;