import React from "react"
import { Link } from 'react-router-dom';
import CmsSidebar from "../CmsSidebar/CmsSidebar";
import {LeftOutlined} from "@ant-design/icons";
import {useLang} from "../../../../hooks/useLang";
import './Cms.layout.scss';

interface IProps {
    children: any,
}

const CmsLayout: React.FC<IProps> = ({children}) => {
    const { t, lang, getAdminLangUrl } = useLang();
    return (
        <div className="grant-layout">
            <CmsSidebar />
            <div className="grant-content-wrapper">
                <div className="back-to-list">
                    <Link to={getAdminLangUrl(lang, '/cms/setup/list')}><LeftOutlined /> <span>{t('Back to lists')}</span></Link>
                </div>
                {children}
            </div>
        </div>
    );
}

export default CmsLayout
