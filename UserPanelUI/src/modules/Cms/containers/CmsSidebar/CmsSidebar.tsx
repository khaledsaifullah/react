import React, {FC, useEffect, useState} from "react"
import { NavLink } from 'react-router-dom';
import {Layout, Input} from 'antd';
import {CmsMenu} from "../../data/Cms.menu";
import {ObjectUtils} from "../../../../utils";
import CustomScrollbar from "../../../../components/Scrollbar/CustomScrollbar";
import {usePermissionContext} from "../../../../hooks/context/usePermissionContext";
import {useLang} from "../../../../hooks/useLang";
import './CmsSidebar.style.scss';

const CmsSidebar: FC<any> = props => {
    const { isPermissionLoaded, hasPermission } = usePermissionContext();
    const { lang, getAdminLangUrl } = useLang();
    const [search, setSearch] = useState('');
    const [navigationList, setNavigationList] = useState<any>([]);

    const handleSearch = (value: any) => {
        setSearch(value)
    }

    useEffect(() => {
        let settingMenuList = ObjectUtils.objectClone(CmsMenu)
        if (isPermissionLoaded) {
            settingMenuList = settingMenuList.filter((item: any) => {
                if (item.children) {
                    return item.children = item.children.filter((childItem) =>
                        hasPermission(childItem.permission)
                    )
                }
            })
            setNavigationList(settingMenuList);
        }
        if (search) {
            let searchNavigationList = settingMenuList.filter((item: any) => {
                if (item.title.toLowerCase().includes(search.toLowerCase())) {
                    return true;
                }

                if (item.children) {
                    return item.children = item.children.filter((childItem) =>
                        childItem.title.toLowerCase().includes(search.toLowerCase())
                    )
                }
            })
            setNavigationList(searchNavigationList);
        }
    }, [search, isPermissionLoaded])

    return (
        <Layout.Sider width={200} className="app-setting-left-nav">
            <div className="navigation-wrapper">
                <div className="navigation-search">
                    <Input
                        name="search"
                        placeholder="Search"
                        autoComplete='off'
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
                <CustomScrollbar autoHide={true} className="left-navigation-scrollbar left-navigation-scrollbar-setting">
                    <ul className="setting-navigation-menu">
                        { navigationList.map((item: any, index: number) => {return (
                            <>
                                {item.children.length > 0 &&  (
                                    <li key={index} className="nav-link">
                                        <a href="javascript:void(0)">{item.title}</a>
                                        <ul className="sub-nav">
                                            {item.children.map((childItem: any, childIndex: number) => (
                                                <li key={`setting-sub-nav-${index}-${childIndex}`} className="sub-nav-link">
                                                    <NavLink to={getAdminLangUrl(lang, childItem.link.to)}>{childItem.title}</NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                )}
                            </>
                        )})}
                    </ul>
                </CustomScrollbar>
            </div>
        </Layout.Sider>
    );
}

export default React.memo(CmsSidebar);