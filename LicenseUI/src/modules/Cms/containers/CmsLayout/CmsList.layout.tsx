import React from "react"
import { Outlet } from 'react-router-dom';
import CmsSidebar from "../CmsSidebar/CmsSidebar";
import './Cms.layout.scss';

const CmsListLayout: React.FC = () => {
    return (
        <div className="grant-layout">
            <CmsSidebar />
            <div className="grant-content-wrapper">
                <Outlet />
            </div>
        </div>
    );
}

export default CmsListLayout