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


import { FilterOutlined,
    RightOutlined, CaretRightOutlined, DoubleRightOutlined  } from '@ant-design/icons';


import libraryheadericon from '../../../../../assets/images/banner/library-header-icon.png';
import libraryproduct from '../../../../../assets/images/banner/library-product.png';



import librarybookicon from '../../../../../assets/images/icon/library-book-icon.png';
import libraryauthoricon from '../../../../../assets/images/icon/library-author-icon.png';
import librarysubjecticon from '../../../../../assets/images/icon/library-subject-icon.png';
import libraryorganizationicon from '../../../../../assets/images/icon/library-organization-icon.png';

import librarysearchsubmiticon from '../../../../../assets/images/icon/library-search-submit-icon.png';
import bookmarklibraryicon from '../../../../../assets/images/icon/bookmark-library-icon.png';
import libraryreservericon from '../../../../../assets/images/icon/library-reserver-icon.png';
import libraryebookicon from '../../../../../assets/images/icon/library-ebook-icon.png';

import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import {BodyClassName} from "../../../../../components/BodyClassName/BodyClassName";





import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };







const LandingPage: FC<any> = props => {
    const navigate = useNavigate()
    const { Option } = Select;
    const { t, lang, getUserLangUrl, getLangUrl } = useLang();
    const onSubmit = () => {
        navigate(getLangUrl(lang, '/find-service'));
    }
    return (
        <>
            <ContextJSX>
                <BodyClassName className={`about-us-body-class`} />
                <MetaTag>
                    <MetaTag.Title>{t('Library')}</MetaTag.Title>
                    {/* <MetaTag.Tag name="description" content="About the Ministry of Science & Technology" /> */}
                </MetaTag>
                <Header>
                    <Header.PageTitle>{t('Library')}</Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item>{t('Library')}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>

            <div className="library-page-content">
                <div className='library-header'>
                    <div className='text-center library-header-icon'>
                        <img src={libraryheadericon} alt="Online Public Access  Library" />
                    </div>
                    <h2 className='h2 text-center mt-3 mb-2 fw-bold'>Online Public Access  Library</h2>
                    <div className='d-flex justify-content-center align-items-center library-header-breadcum'>
                            {/* <Breadcrumb>
                                <Breadcrumb.Item>
                                    Home <span><RightOutlined /></span>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <a href="">Catergory</a><span><RightOutlined /></span>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <a href="">Online Library</a>
                                </Breadcrumb.Item>
                            </Breadcrumb> */}
                    </div>
                </div>

                <div className='shadow d-md-flex justify-content-center align-items-center library-access-countation'>
                    <div className='d-flex justify-content-center align-items-center fw-bold library-access-count'>
                        <img src={librarybookicon} alt="15,000 Books" />
                        15,000 Books
                    </div>
                    <div className='d-flex justify-content-center align-items-center fw-bold library-access-count'>
                        <img src={libraryauthoricon} alt="150+ Authors" />
                        150+ Authors
                    </div>
                    <div className='d-flex justify-content-center align-items-center fw-bold library-access-count'>
                        <img src={librarysubjecticon} alt="125+ Subjects" />
                        125+ Subjects
                    </div>
                    <div className='d-flex justify-content-center align-items-center fw-bold library-access-count'>
                        <img src={libraryorganizationicon} alt="8+ Organizations " />
                        8+ Organizations
                    </div>
                </div>

                <div className='text-center library-search-content'>
                    <h3 className='h3 text-center'>Search</h3>
                    <Form
                        onFinish={onSubmit}
                    >
                    <div className="library-search-content-body d-md-flex justify-content-center">
                                <div className="library-search-content-left">
                                    <div className="library-search-dropdown">
                                        <Form.Item name="language-code">
                                            <Select defaultValue="alldocuments"  bordered={false}>
                                                <Option value="alldocuments">{t("All Documents")}</Option>
                                                <Option value="organizations">{t("Organizations")}</Option>
                                                <Option value="seeker">{t("Seeker")}</Option>
                                            </Select>
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className='library-search-mid'>
                                    <div className='d-flex justify-content-between library-search-content-middle'>
                                        <Form.Item name="filter_name" className='library-search-inputfiled' >
                                            <Input placeholder={t("Search for book, author, publishers etc.-")} />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit">
                                                <img src={librarysearchsubmiticon} alt="submit" />
                                            </Button>
                                        </Form.Item>
                                    </div>

                                </div>

                                <div className="library-search-content-right">
                                    <div className="library-search-advane-btn">
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" onClick={onSubmit}>
                                                Advanced Search
                                            </Button>
                                        </Form.Item>
                                    </div>
                                </div>

                    </div>



                        </Form>
                </div>




                <section className="library-main-contentbody mt-5 mb-5">
                    <div className='container-fluid'>
                        <h3 className="visually-hidden">Online Public Access  Library</h3>
                        <Form>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={6}>
                                    <div className='library-left-contentbody'>
                                        <div className='block-library'>
                                            <div className='block-library-title'>
                                                <h4>Organizations  </h4>
                                            </div>
                                            <div className='block-library-input'>
                                                <Input size="large" placeholder="Search organizations name" prefix={<FilterOutlined  />} />
                                            </div>
                                            <div className='block-library-content'>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    Bangladesh Council of Scientific and Industrial Research (BCSIR)
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    National Institute of Biotechnology (NIB)
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    Ministry of Science & Technology (MoST)
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    Bangladesh Council of Scientific and Industrial Research (BCSIR)
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    National Institute of Biotechnology (NIB)
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    Ministry of Science & Technology (MoST)
                                                    </Checkbox>
                                                </div>

                                            </div>
                                        </div>


                                        <div className='block-library'>
                                            <div className='block-library-title'>
                                                <h4>Subjects    </h4>
                                            </div>
                                            <div className='block-library-input'>
                                                <Input size="large" placeholder="Search services name " prefix={<FilterOutlined  />} />
                                            </div>
                                            <div className='block-library-content'>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    Bengali
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    English
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    Chinese
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    Arabic
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    Bengali
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    English
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    Chinese
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    Arabic
                                                    </Checkbox>
                                                </div>


                                            </div>
                                        </div>


                                        <div className='block-library'>
                                            <div className='block-library-title'>
                                                <h4>Author  </h4>
                                            </div>
                                            <div className='block-library-input'>
                                                <Input size="large" placeholder="Search category name " prefix={<FilterOutlined  />} />
                                            </div>
                                            <div className='block-library-content'>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    Rashid Hayder
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    Dr. Md Hayat Mahmud
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    William Wordsworth
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    Michael Campbell
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    Will Schofield
                                                    </Checkbox>
                                                </div>
                                                <div className='block-library-list'>
                                                    <Checkbox onChange={onChange}>
                                                    Keira Turner
                                                    </Checkbox>
                                                </div>

                                            </div>
                                        </div>





                                    </div>
                                </Col>
                                <Col xs={24} md={18}>
                                    <div className='library-right-contentbody'>
                                        <div className='text-center mb-3 library-productlisting-title'>
                                            <h2 className='h2 text-center'>Most Recent Books</h2>
                                            <a href="#" className='fw-bold library-view-all'>View All <CaretRightOutlined /></a>
                                        </div>
                                        <div className='library-product-listview '>
                                            <Row gutter={[16, 16]}>
                                                <Col xs={24} md={8}>
                                                        {/* start: Product List */}
                                                        <div className='library-product text-center'>
                                                            <div className='library-product-type fw-bold mb-2'>
                                                                পত্রিকা
                                                            </div>
                                                            <div className='library-product-picture'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                <img src={libraryproduct} alt="libraryproduct " />
                                                                </Link>
                                                            </div>
                                                            <div className='library-product-name mt-3'>
                                                                    <h6>মাতৃভাষা</h6>
                                                            </div>
                                                            <div className='library-product-title fw-bold mb-3 px-2'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই)
                                                                </Link>

                                                            </div>
                                                            <div className='library-product-decription px-2'>
                                                                    জানুযারি-জুন ২০১৬ (বর্ষ ০২ সংখ্যা ০১)
                                                                    আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই),2015
                                                                    নজরুল ইন্সটিটিউট
                                                            </div>
                                                            <div className='library-product-btngroup mt-3 d-flex justify-content-center align-items-center flex-wrap'>
                                                                    <button className='library-reserver-btn'><span><img src={libraryreservericon} alt="Bookmark" /></span> বুক রিসার্ভ</button>
                                                                    <button className='library-ebook-btn'><span><img src={libraryebookicon} alt="Bookmark" /></span> ই - বুক</button>
                                                                </div>

                                                            </div>
                                                            {/* end: Product List */}

                                                </Col>
                                                <Col xs={24} md={8}>
                                                        {/* start: Product List */}
                                                        <div className='library-product text-center'>
                                                            <div className='library-product-type fw-bold mb-2'>
                                                                পত্রিকা
                                                            </div>
                                                            <div className='library-product-picture'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                <img src={libraryproduct} alt="libraryproduct " />
                                                                </Link>
                                                            </div>
                                                            <div className='library-product-name mt-3'>
                                                                    <h6>মাতৃভাষা</h6>
                                                            </div>
                                                            <div className='library-product-title fw-bold mb-3 px-2'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই)
                                                                </Link>

                                                            </div>
                                                            <div className='library-product-decription px-2'>
                                                                    জানুযারি-জুন ২০১৬ (বর্ষ ০২ সংখ্যা ০১)
                                                                    আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই),2015
                                                                    নজরুল ইন্সটিটিউট
                                                            </div>
                                                            <div className='library-product-btngroup mt-3 d-flex justify-content-center align-items-center flex-wrap'>
                                                                    <button className='library-reserver-btn'><span><img src={libraryreservericon} alt="Bookmark" /></span> বুক রিসার্ভ</button>
                                                                    <button className='library-ebook-btn'><span><img src={libraryebookicon} alt="Bookmark" /></span> ই - বুক</button>
                                                                </div>

                                                            </div>
                                                            {/* end: Product List */}

                                                </Col>
                                                <Col xs={24} md={8}>
                                                        {/* start: Product List */}
                                                        <div className='library-product text-center'>
                                                            <div className='library-product-type fw-bold mb-2'>
                                                                পত্রিকা
                                                            </div>
                                                            <div className='library-product-picture'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                <img src={libraryproduct} alt="libraryproduct " />
                                                                </Link>
                                                            </div>
                                                            <div className='library-product-name mt-3'>
                                                                    <h6>মাতৃভাষা</h6>
                                                            </div>
                                                            <div className='library-product-title fw-bold mb-3 px-2'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই)
                                                                </Link>

                                                            </div>
                                                            <div className='library-product-decription px-2'>
                                                                    জানুযারি-জুন ২০১৬ (বর্ষ ০২ সংখ্যা ০১)
                                                                    আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই),2015
                                                                    নজরুল ইন্সটিটিউট
                                                            </div>
                                                            <div className='library-product-btngroup mt-3 d-flex justify-content-center align-items-center flex-wrap'>
                                                                    <button className='library-reserver-btn'><span><img src={libraryreservericon} alt="Bookmark" /></span> বুক রিসার্ভ</button>
                                                                    <button className='library-ebook-btn'><span><img src={libraryebookicon} alt="Bookmark" /></span> ই - বুক</button>
                                                                </div>

                                                            </div>
                                                            {/* end: Product List */}

                                                </Col>




                                                <Col xs={24} md={8}>
                                                        {/* start: Product List */}
                                                        <div className='library-product text-center'>
                                                            <div className='library-product-type fw-bold mb-2'>
                                                                পত্রিকা
                                                            </div>
                                                            <div className='library-product-picture'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                <img src={libraryproduct} alt="libraryproduct " />
                                                                </Link>
                                                            </div>
                                                            <div className='library-product-name mt-3'>
                                                                    <h6>মাতৃভাষা</h6>
                                                            </div>
                                                            <div className='library-product-title fw-bold mb-3 px-2'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই)
                                                                </Link>

                                                            </div>
                                                            <div className='library-product-decription px-2'>
                                                                    জানুযারি-জুন ২০১৬ (বর্ষ ০২ সংখ্যা ০১)
                                                                    আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই),2015
                                                                    নজরুল ইন্সটিটিউট
                                                            </div>
                                                            <div className='library-product-btngroup mt-3 d-flex justify-content-center align-items-center flex-wrap'>
                                                                    <button className='library-reserver-btn'><span><img src={libraryreservericon} alt="Bookmark" /></span> বুক রিসার্ভ</button>
                                                                    <button className='library-ebook-btn'><span><img src={libraryebookicon} alt="Bookmark" /></span> ই - বুক</button>
                                                                </div>

                                                            </div>
                                                            {/* end: Product List */}

                                                </Col>
                                                <Col xs={24} md={8}>
                                                        {/* start: Product List */}
                                                        <div className='library-product text-center'>
                                                            <div className='library-product-type fw-bold mb-2'>
                                                                পত্রিকা
                                                            </div>
                                                            <div className='library-product-picture'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                <img src={libraryproduct} alt="libraryproduct " />
                                                                </Link>
                                                            </div>
                                                            <div className='library-product-name mt-3'>
                                                                    <h6>মাতৃভাষা</h6>
                                                            </div>
                                                            <div className='library-product-title fw-bold mb-3 px-2'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই)
                                                                </Link>

                                                            </div>
                                                            <div className='library-product-decription px-2'>
                                                                    জানুযারি-জুন ২০১৬ (বর্ষ ০২ সংখ্যা ০১)
                                                                    আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই),2015
                                                                    নজরুল ইন্সটিটিউট
                                                            </div>
                                                            <div className='library-product-btngroup mt-3 d-flex justify-content-center align-items-center flex-wrap'>
                                                                    <button className='library-reserver-btn'><span><img src={libraryreservericon} alt="Bookmark" /></span> বুক রিসার্ভ</button>
                                                                    <button className='library-ebook-btn'><span><img src={libraryebookicon} alt="Bookmark" /></span> ই - বুক</button>
                                                                </div>

                                                            </div>
                                                            {/* end: Product List */}

                                                </Col>
                                                <Col xs={24} md={8}>
                                                        {/* start: Product List */}
                                                        <div className='library-product text-center'>
                                                            <div className='library-product-type fw-bold mb-2'>
                                                                পত্রিকা
                                                            </div>
                                                            <div className='library-product-picture'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                <img src={libraryproduct} alt="libraryproduct " />
                                                                </Link>
                                                            </div>
                                                            <div className='library-product-name mt-3'>
                                                                    <h6>মাতৃভাষা</h6>
                                                            </div>
                                                            <div className='library-product-title fw-bold mb-3 px-2'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই)
                                                                </Link>

                                                            </div>
                                                            <div className='library-product-decription px-2'>
                                                                    জানুযারি-জুন ২০১৬ (বর্ষ ০২ সংখ্যা ০১)
                                                                    আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই),2015
                                                                    নজরুল ইন্সটিটিউট
                                                            </div>
                                                            <div className='library-product-btngroup mt-3 d-flex justify-content-center align-items-center flex-wrap'>
                                                                    <button className='library-reserver-btn'><span><img src={libraryreservericon} alt="Bookmark" /></span> বুক রিসার্ভ</button>
                                                                    <button className='library-ebook-btn'><span><img src={libraryebookicon} alt="Bookmark" /></span> ই - বুক</button>
                                                                </div>

                                                            </div>
                                                            {/* end: Product List */}

                                                </Col>
                                                <Col xs={24} md={8}>
                                                        {/* start: Product List */}
                                                        <div className='library-product text-center'>
                                                            <div className='library-product-type fw-bold mb-2'>
                                                                পত্রিকা
                                                            </div>
                                                            <div className='library-product-picture'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                <img src={libraryproduct} alt="libraryproduct " />
                                                                </Link>
                                                            </div>
                                                            <div className='library-product-name mt-3'>
                                                                    <h6>মাতৃভাষা</h6>
                                                            </div>
                                                            <div className='library-product-title fw-bold mb-3 px-2'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই)
                                                                </Link>

                                                            </div>
                                                            <div className='library-product-decription px-2'>
                                                                    জানুযারি-জুন ২০১৬ (বর্ষ ০২ সংখ্যা ০১)
                                                                    আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই),2015
                                                                    নজরুল ইন্সটিটিউট
                                                            </div>
                                                            <div className='library-product-btngroup mt-3 d-flex justify-content-center align-items-center flex-wrap'>
                                                                    <button className='library-reserver-btn'><span><img src={libraryreservericon} alt="Bookmark" /></span> বুক রিসার্ভ</button>
                                                                    <button className='library-ebook-btn'><span><img src={libraryebookicon} alt="Bookmark" /></span> ই - বুক</button>
                                                                </div>

                                                            </div>
                                                            {/* end: Product List */}

                                                </Col>
                                                <Col xs={24} md={8}>
                                                        {/* start: Product List */}
                                                        <div className='library-product text-center'>
                                                            <div className='library-product-type fw-bold mb-2'>
                                                                পত্রিকা
                                                            </div>
                                                            <div className='library-product-picture'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                <img src={libraryproduct} alt="libraryproduct " />
                                                                </Link>
                                                            </div>
                                                            <div className='library-product-name mt-3'>
                                                                    <h6>মাতৃভাষা</h6>
                                                            </div>
                                                            <div className='library-product-title fw-bold mb-3 px-2'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই)
                                                                </Link>

                                                            </div>
                                                            <div className='library-product-decription px-2'>
                                                                    জানুযারি-জুন ২০১৬ (বর্ষ ০২ সংখ্যা ০১)
                                                                    আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই),2015
                                                                    নজরুল ইন্সটিটিউট
                                                            </div>
                                                            <div className='library-product-btngroup mt-3 d-flex justify-content-center align-items-center flex-wrap'>
                                                                    <button className='library-reserver-btn'><span><img src={libraryreservericon} alt="Bookmark" /></span> বুক রিসার্ভ</button>
                                                                    <button className='library-ebook-btn'><span><img src={libraryebookicon} alt="Bookmark" /></span> ই - বুক</button>
                                                                </div>

                                                            </div>
                                                            {/* end: Product List */}

                                                </Col>
                                                <Col xs={24} md={8}>
                                                        {/* start: Product List */}
                                                        <div className='library-product text-center'>
                                                            <div className='library-product-type fw-bold mb-2'>
                                                                পত্রিকা
                                                            </div>
                                                            <div className='library-product-picture'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                <img src={libraryproduct} alt="libraryproduct " />
                                                                </Link>
                                                            </div>
                                                            <div className='library-product-name mt-3'>
                                                                    <h6>মাতৃভাষা</h6>
                                                            </div>
                                                            <div className='library-product-title fw-bold mb-3 px-2'>
                                                                <Link
                                                                    target="_blank"
                                                                    to={getLangUrl(lang, `/opac/book-details`)}
                                                                >
                                                                আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই)
                                                                </Link>

                                                            </div>
                                                            <div className='library-product-decription px-2'>
                                                                    জানুযারি-জুন ২০১৬ (বর্ষ ০২ সংখ্যা ০১)
                                                                    আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট (আমাই),2015
                                                                    নজরুল ইন্সটিটিউট
                                                            </div>
                                                            <div className='library-product-btngroup mt-3 d-flex justify-content-center align-items-center flex-wrap'>
                                                                    <button className='library-reserver-btn'><span><img src={libraryreservericon} alt="Bookmark" /></span> বুক রিসার্ভ</button>
                                                                    <button className='library-ebook-btn'><span><img src={libraryebookicon} alt="Bookmark" /></span> ই - বুক</button>
                                                                </div>

                                                            </div>
                                                            {/* end: Product List */}

                                                </Col>



                                            </Row>






                                        </div>




                                    </div>
                                </Col>
                            </Row>
                        </Form>




                    </div>
                </section>








            </div>

        </>
    );
}

export default LandingPage;
