import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Select, Card, Row, Col } from 'antd';
import { useLang } from "../../../../../hooks/useLang";

import {
    baecIcon,
    baeraIcon,
    bcsirIcon,
    bnsdocIcon,
    bookSearchIcon,
    businessmanIcon,
    citizenIcon,
    eLearningIcon,
    elearningShapeIcon,
    eTicketingIcon,
    featherIcon,
    grabIconFive,
    grabIconFour,
    grabIconOne,
    grabIconSix,
    grabIconThree,
    grabIconTwo,
    granAppIcon,
    grantFellowshipIcon,
    instituteOrganizationIcon,
    licensingPermitIcon,
    mostIcon,
    nmstIcon,
    organizationCardTitleIcon,
    readmoreIcon,
    researcherIcon,
    researchShapeIcon,
    scientistIcon,
    searchBtnIcon,
    searchIcon,
    seekerCardTitleIcon,
    serviceCardTitleIcon,
    specialResearchIcon,
    studentIcon,
    virtualGalleriesIcon
} from "../../../../../assets/images/icon";
import { headerBanner } from "../../../../../assets/images/banner";
import {
    bgshapefive, bgshapefour, bgshapeone, bgshapesix, bgshapethree, bgshapetwo, labMan, nstFellowshipGrant, paginationBulet, scienceBottol
} from "../../../../../assets/images/pages/home";
import './LandingPage.style.scss';

const LandingPage: FC<any> = props => {
    const navigate = useNavigate()
    const { Option } = Select;
    const { t, lang, getUserLangUrl, getLangUrl } = useLang();
    const onSubmit = () => {
        navigate(getLangUrl(lang, '/find-service'));
    }
    return (
        <div className="pageone-content">
            <div className="header-banner landing-banner ">
                <img src={headerBanner} alt="headerbanner" />
                <div className="header-homebottomshed">
                    <svg viewBox="0 0 1366 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-2 0V44H1368V0C1268.46 9.4 985.761 28.2 651.238 28.2C316.716 28.2 76.3619 9.4 -2 0Z" fill="#F2F2F2" />
                    </svg>

                </div>
            </div>

            <div className="search-portal-content">
                <h3>Welcome to the <br /> Ministry of Science Portal</h3>
                <div className="search-content">
                    <Form
                        onFinish={onSubmit}
                    >
                        <div className="search-content-body">
                            <div className="search-content-left">
                                <label>{t("Content")}</label>
                                <div className="service-dropdown">
                                    <Form.Item name="language-code">
                                        <Select defaultValue="services" style={{ width: 175 }} bordered={false}>
                                            <Option value="services">{t("Services")}</Option>
                                            <Option value="organizations">{t("Organizations")}</Option>
                                            <Option value="seeker">{t("Seeker")}</Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="search-content-middle">
                                <label>Keyword</label>
                                <Form.Item name="filter_name" >
                                    <Input placeholder={t("Type here to search...")} />
                                </Form.Item>
                            </div>
                            <div className="search-content-right">
                                <div className="search-btn">
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" onClick={onSubmit}>
                                            <img src={searchBtnIcon} alt="search-icon" />{t("Search")}
                                        </Button>
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className="search-note">Find your desired services or organizations and the services they provide </div>

            </div>


            <div className="service-content">
                <h3>SERVICE COMPONENTS </h3>
                <h4>Services are sorted in components to let you find your desired service quickly</h4>
                <div className="service-content-slider">
                    <Link to={getLangUrl(lang, '/component/grant-and-fellowship')}>
                        <div className="service-item">
                            <div className="service-item-picture">
                                <span className="service-item-icon-shapebg">
                                    <img src={bgshapeone} alt="icon" />
                                </span>
                                <span className="service-item-icon">
                                    <img src={grantFellowshipIcon} alt="icon" />
                                </span>
                            </div>
                            <label>Grant/Fellowship</label>
                        </div>
                    </Link>
                    <div className="service-item">
                        <div className="service-item-picture">
                            <span className="service-item-icon-shapebg">
                                <img src={bgshapetwo} alt="icon" />
                            </span>
                            <span className="service-item-icon">
                                <img src={licensingPermitIcon} alt="icon" />
                            </span>
                        </div>
                        <label>Licensing/Permits</label>
                    </div>
                    <Link to={getLangUrl(lang, '/e-ticketing')}>
                        <div className="service-item">
                            <div className="service-item-picture">
                                <span className="service-item-icon-shapebg">
                                    <img src={bgshapethree} alt="icon" />
                                </span>
                                <span className="service-item-icon">
                                    <img src={eTicketingIcon} alt="icon" />
                                </span>
                            </div>
                            <label>E-Ticketing</label>
                        </div>
                    </Link>
                    <div className="service-item">
                        <div className="service-item-picture">
                            <span className="service-item-icon-shapebg">
                                <img src={bgshapefour} alt="icon" />
                            </span>
                            <span className="service-item-icon">
                                <img src={virtualGalleriesIcon} alt="icon" />
                            </span>
                        </div>
                        <label>Virtual Galleries</label>
                    </div>
                    <Link to={getLangUrl(lang, '/research')}>
                    <div className="service-item">
                        <div className="service-item-picture">
                            <span className="service-item-icon-shapebg">
                                <img src={bgshapefive} alt="icon" />
                            </span>
                            <span className="service-item-icon">
                                <img src={researchShapeIcon} alt="icon" />
                            </span>
                        </div>
                        <label>Research</label>
                    </div>
                    </Link>
                    <div className="service-item">
                        <div className="service-item-picture">
                            <span className="service-item-icon-shapebg">
                                <img src={bgshapesix} alt="icon" />
                            </span>
                            <span className="service-item-icon">
                                <img src={elearningShapeIcon} alt="icon" />
                            </span>
                        </div>
                        <label>E-Learning</label>
                    </div>
                </div>
                <img src={paginationBulet} alt="pagination-bulet" />
            </div>


            <div className="choose-service-content">
                <h3>CHOOSE YOUR DESIRED PATH </h3>
                <h4>You can find your desired service directly, or by the organization providing it </h4>
                <div className="choose-service-content-detail">
                    <Card title={t("ORGANIZATIONS")} className="filter-card organization-card">
                        <span className="organization-card-title-icon">
                            <img src={organizationCardTitleIcon} alt="icon" />
                        </span>
                        <div className="filter-card-input">
                            <Form.Item name="filter_name" >
                                <Input placeholder="Type the Organization to Filter..." />
                            </Form.Item>
                        </div>
                        <div className="filter-card-content">
                            <ul>
                                <li>
                                    <Link to={getLangUrl(lang, '/organization-service/most')}>
                                        <label><img src={mostIcon} alt="icon" /> </label>
                                        <span>Ministry of Science & Technology (MoST) </span>
                                    </Link>
                                </li>
                                <li>
                                    <label><img src={baecIcon} alt="icon" /> </label>
                                    <span> Bangladesh Atomic Energy Commission (BAEC) </span>
                                </li>
                                <li>
                                    <label><img src={bcsirIcon} alt="icon" /> </label>
                                    <span>Bangladesh Council of Scientific and Industrial Research (BCSIR) </span>
                                </li>
                                <li>
                                    <label><img src={nmstIcon} alt="icon" /> </label>
                                    <span>National Museum of Science & Technology (NMST) </span>
                                </li>
                                <li>
                                    <label><img src={bnsdocIcon} alt="icon" /> </label>
                                    <span>Bangladesh National Scientific and Technical Documentation Center (BANSDOC) </span>
                                </li>
                                <li>
                                    <label><img src={baeraIcon} alt="icon" /> </label>
                                    <span>Bangladesh Atomic Energy Regulatory Authority (BAERA) </span>
                                </li>
                            </ul>
                        </div>
                    </Card>
                    <Card title={t("SERVICES")} className="filter-card service-card">
                        <span className="organization-card-title-icon">
                            <img src={serviceCardTitleIcon} alt="icon" />
                        </span>
                        <div className="filter-card-input">
                            <Form.Item name="filter_name" >
                                <Input placeholder="Type the Service to Filter..." />
                            </Form.Item>
                        </div>
                        <div className="filter-card-content">
                            <ul>
                                <li>
                                    <Link to={getLangUrl(lang, '/service-instruction/nst-fellowship-form')}>
                                        <label><img src={nstFellowshipGrant} alt="icon" /> </label>
                                        <span> NST Fellowship </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={getLangUrl(lang, '/service-instruction/special-research-grant-form')}>
                                        <label><img src={specialResearchIcon} alt="icon" /> </label>
                                        <span>Special Research Grant</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={getLangUrl(lang, '/service-instruction/r-and-d-project-most-form')}>
                                        <label><img src={bookSearchIcon} alt="icon" /> </label>
                                        <span>Grant Application for R & D Project</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={getLangUrl(lang, '/service-instruction/bst-fellowship-form')}>
                                        <label><img src={featherIcon} alt="icon" /> </label>
                                        <span>Bangabanndhu Fellowship Program </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={getLangUrl(lang, '/service-instruction/scientific-organization-grant-form')}>
                                        <label><img src={scienceBottol} alt="icon" /> </label>
                                        <span>Science Club Applications</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={getLangUrl(lang, '/service-instruction/non-govt-institute-form')}>
                                        <label><img src={featherIcon} alt="icon" /> </label>
                                        <span>Grants Application for Non-Govt. Secondary and Higher Education Institute </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={getLangUrl(lang, '/service-instruction/scientific-organization-grant-form')}>
                                        <label><img src={granAppIcon} alt="icon" /> </label>
                                        <span>Grants Application for Scientific Organizations & Institutions</span>
                                    </Link>
                                </li>
                                <li>
                                    <label><img src={eLearningIcon} alt="icon" /> </label>
                                    <span>E-Learning</span>
                                </li>
                            </ul>
                        </div>
                    </Card>
                    <Card title={t("SEEKER")} className="filter-card seeker-card">
                        <span className="organization-card-title-icon">
                            <img src={seekerCardTitleIcon} alt="icon" />
                        </span>
                        <div className="filter-card-input">
                            <Form.Item name="filter_name" >
                                <Input placeholder="Type the Seeker to Filter..." />
                            </Form.Item>
                        </div>
                        <div className="filter-card-content">
                            <ul>
                                <li>
                                    <Link to={getLangUrl(lang, '/service-seeker/citizen')}>
                                        <label><img src={citizenIcon} alt="icon" /> </label>
                                        <span>Citizen</span>
                                    </Link>
                                </li>
                                <li>
                                    <label><img src={studentIcon} alt="icon" /> </label>
                                    <span>Student</span>
                                </li>
                                <li>
                                    <label><img src={businessmanIcon} alt="icon" /> </label>
                                    <span>Businessman</span>
                                </li>
                                <li>
                                    <label><img src={researcherIcon} alt="icon" /> </label>
                                    <span>Researcher</span>
                                </li>
                                <li>
                                    <label><img src={scientistIcon} alt="icon" /> </label>
                                    <span>Scientist</span>
                                </li>
                                <li>
                                    <label><img src={instituteOrganizationIcon} alt="icon" /> </label>
                                    <span>Institute/Organization</span>
                                </li>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className="find-service-link">
                    <Link to={getLangUrl(lang, '/find-service')}>
                        <img src={searchIcon} alt="searchicon" /> <span>Find Services</span>
                    </Link>
                </div>
            </div>


            <div className="grab-service-quick">
                <div className="grab-service-quick-body">
                    <Row gutter={[16, 16]}>
                        <Col md={10} xs={24}>
                            <h3>GRAB SERVICES QUICK </h3>
                            <p>Services that are most recently availed by the <br />
                                citizens might interest you too.</p>
                        </Col>
                        <Col md={14} xs={24}>
                            <div className="grab-service-item">
                                <ul>
                                    <li>
                                        <Link to={getLangUrl(lang, '/service/special-research-grant')}>
                                            <div><img src={grabIconOne} alt="grabicon" /></div>
                                            <label>Special Research Grant</label>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={getLangUrl(lang, '/service/scientific-organizations')}>
                                            <div><img src={grabIconTwo} alt="grabicon" /></div>
                                            <label>Grants Application for <br /> Scientific Organizations...</label>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={getLangUrl(lang, '/service/non-govt-grant')}>
                                            <div><img src={grabIconThree} alt="grabicon" /></div>
                                            <label>Grants Application for <br />  Non-Govt. Secondary...</label>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={getLangUrl(lang, '/service/bangabandhu-fellowship')}>
                                            <div><img src={grabIconFour} alt="grabicon" /></div>
                                            <label>Bangabandhu Fellowship  <br /> Program </label>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={getLangUrl(lang, '/service/research-fellowship')}>
                                            <div><img src={grabIconFive} alt="grabicon" /></div>
                                            <label>Research Fellowship  <br /> Application </label>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={getLangUrl(lang, '/service/nomination')}>
                                            <div><img src={grabIconSix} alt="grabicon" /></div>
                                            <label>Application for Approval <br /> of Nomination of... </label>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>


            <div className="landing-home-content">
                <div className="landing-home-content-body">
                    <Row gutter={[16, 16]}>
                        <Col xs={12} md={12}>
                            <div className="landing-home-content-picture">
                                <img src={labMan} alt="labman" />
                            </div>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="landing-home-content-rightpart">
                                <div className="landing-home-text">
                                    <h4>Ministry of Science & <br /> Technology </h4>
                                    <p>Ministry of Science and Technology, Government of the People’s Republic of Bangladesh is promoting Science and Technology as stewardship of positive change in society and for balanced socio-economic upliftment, national well-being and thus to make Science and Technology a part of national culture. The use of Science and Technology as a means of sustainable use of Environment, Ecosystem and Resources contribute to world pool of knowledge in Science and Technology.</p>
                                </div>
                                <div className="read-more-link">
                                    <Link to={getLangUrl(lang, '/about-us')}>
                                        <span>Read More</span> <img src={readmoreIcon} alt="readmoreicon" />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>


                </div>
            </div>
        </div>
    );
}

export default LandingPage;