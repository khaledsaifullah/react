import React, { FC, useEffect, useState } from "react";
import { Col, Pagination, Row } from "antd";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import "./CategorywiseServices.style.scss";
import { useLang } from "../../../../../hooks/useLang";
import { NavLink, useParams } from "react-router-dom";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";
import MetaTag from "../../../../../components/MetaTag";
import Search from "antd/lib/input/Search";
import { useServiceAssignmentList } from "../../../../../hooks/lists/useServiceAssignmentList";
import { useComponentList } from "../../../../../hooks/lists/useComponentList";
import { useOrganizationList } from "../../../../../hooks/lists/useOrganizationList";
import { useSeekerLookup } from "../../../../../hooks/lookups/useSeekerLookup";
var randomColor = require('randomcolor');

const CategorywiseServices: FC<any> = (props) => {
    const { t, lang, getLangUrl } = useLang();
    const { serviceList } = useServiceAssignmentList();
    const { token } = useParams();
    const { activeComponentList } = useComponentList();
    const { activeOrganizationList } = useOrganizationList();
    const { seekerLookupList } = useSeekerLookup();

    const [pageTitle, setPageTitle] = useState("");
    const [sidebarHeading, setSidebarHeading] = useState("");
    const [bodyClass, setBodyClass] = useState("");
    const [services, setServices] = useState<any[]>([]);

    const itemId = Number(token);

    useEffect(() => {
        // ...by Components.
        if ('category' === props.type) {
            setPageTitle(t('Categorywise Services'));
            setBodyClass('categorywise-services');
            setSidebarHeading(t('Categories'));

            const services = serviceList.filter((item) => {
                if (item?.component_id == itemId) {
                    return true;
                }
            });
            setServices(services);
        }
        // ...by Organizations.
        else if ('org' === props.type) {
            setPageTitle(t('Organizationwise Services'));
            setBodyClass('organizationwise-services');
            setSidebarHeading(t('Organizations'));

            const filterOrganizationList = serviceList.filter((item) => {
                if (item?.organization_ids?.includes(String(itemId))) {
                    return true;
                }
            });

            setServices(filterOrganizationList);
        }
        // ...by Seekers.
        else if ('seeker' === props.type) {
            setPageTitle(t('Recipientwise Services'));
            setBodyClass('recipientwise-services');
            setSidebarHeading(t('Recipients'));

            const filterSeekerList = serviceList?.filter((item) => {
                if (item?.seeker_ids?.includes(String(itemId))) {
                    return true;
                }
            });

            setServices(filterSeekerList);
        }
    }, [itemId, props.type, serviceList.length]);

    return (
        <div className="container">

            <ContextJSX>
                <BodyClassName className={bodyClass} />
                <MetaTag>
                    <MetaTag.Title>{pageTitle}</MetaTag.Title>
                    <MetaTag.Tag name="description" content="All the Services of the Digital Service Portal are presented in their respective categories/organizations/recipients" />
                </MetaTag>
                <Header>
                    <Header.PageTitle>{pageTitle}</Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item>{pageTitle}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>

            <Row gutter={[16, 16]}>
                <Col span={6} xs={24} sm={8} md={6}>
                    <h3 className="h5 text-center text-sm-start">{sidebarHeading}</h3>
                    <nav className="sidebar-list-nav" aria-label="Sidebar Navigation">
                        <ul className="ps-0">
                            {'category' === props.type && activeComponentList && activeComponentList?.map(component => (
                                <li>
                                    <NavLink to={getLangUrl(lang, `/categorywise-services/${component.id}`)} key={component.key} className={itemId == component.id ? 'active' : ''}>
                                        {'bn' === lang ? component?.name_bn : component?.name_en}
                                    </NavLink>
                                </li>
                            ))}

                            {'org' === props.type && activeOrganizationList && activeOrganizationList.map(org => (
                                <li>
                                    <NavLink to={getLangUrl(lang, `/organizationwise-services/${org.id}`)} key={org.key} className={itemId == org?.id ? 'active' : ''}>
                                        {'bn' === lang ? org.name_bn : org.name_en}
                                    </NavLink>
                                </li>
                            ))}

                            {'seeker' === props.type && seekerLookupList && seekerLookupList.map(seeker => (
                                <li>
                                    <NavLink to={getLangUrl(lang, `/recipientwise-services/${seeker.id}`)} key={seeker.key} className={itemId == seeker?.id ? 'active' : ''}>
                                        {'bn' === lang ? seeker?.value_bn : seeker?.value_en}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Col>
                <Col span={18} xs={24} sm={16} md={18}>
                    <div className="mb-3">
                        <form action="" className="list-filter-wrapper text-end">
                            <Search
                                placeholder={t('Type to Filter')}
                                allowClear
                                style={{ maxWidth: 250 }}
                                enterButton
                            />
                        </form>
                    </div>
                    <div className="service-cards">
                        {services && services.map((service) => {
                            let targetLink = '';
                            console.log(service);
                            if ('category' === props.type) {
                                targetLink = getLangUrl(lang, `/services?category=${service.component_id}`);
                            } else if ('org' === props.type) {
                                targetLink = getLangUrl(lang, `/services?org=${service?.component_id}`);
                            } else if ('seeker' === props.type) {
                                targetLink = getLangUrl(lang, `/services?seeker=${service.component_id}`);
                            }

                            return (
                                <div key={service?.uuid} className="service-card card mb-4 shadow" style={{
                                    "--service-card-color": randomColor({
                                        // hue: 'red', // to restrict into a certain color spectram.
                                        luminosity: 'dark',
                                        alpha: 0.5
                                    }) } as React.CSSProperties}>
                                    <div className="card-body">
                                        <h3 className="h5">
                                            <NavLink
                                                to={targetLink}
                                                className="text-dark service-card-link"
                                            >
                                                {'bn' === lang ? service.service_name_bn : service.service_name_en}
                                            </NavLink>
                                        </h3>
                                        <p>{'bn' === lang ? service.description_bn : service.description_en}</p>
                                        <div className="text-sm-end">
                                            <NavLink
                                                to={targetLink}
                                                className="btn btn-primary btn-sm service-card-btn px-5"
                                            >
                                                {t('Details')}
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        {services.length == 0 && (
                            <div className="alert alert-danger alert-styled-left" role="alert">
                                {t('No active Service found in this Category')}
                            </div>
                        )}
                    </div>

                    <div className="text-center">
                        <Pagination
                            total={85}
                            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                            defaultPageSize={20}
                            defaultCurrent={1}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default CategorywiseServices;
