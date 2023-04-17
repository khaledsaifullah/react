import React, { FC } from 'react'
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'antd';
import { RightCircleOutlined} from "@ant-design/icons";
import { useLang } from "../../../../../hooks/useLang";
import ScientistMicroscope from "../../../../../assets/images/banner/scientist-microscope.jpg";
import { labMan } from "../../../../../assets/images/pages/home";
import './LandingPage.style.scss';
import Header from "../../../../../components/Header";
import { BodyClassName } from '../../../../../components/BodyClassName/BodyClassName';
import MetaTag from '../../../../../components/MetaTag';
import ContextJsx from '../../../../../components/ContextJsx';

const LandingPage: FC<any> = props => {
    const { t, lang, getLangUrl } = useLang();

    return (
        <>
            <ContextJsx>
                <BodyClassName className={`home`} />
                <MetaTag>
                    <MetaTag.Title>{t('Integrated Digital Service Delivery Platfrom')}</MetaTag.Title>
                    <MetaTag.Tag name="description" content="Digital Service Portal by the Ministry of Science and Technology is to offer much more services to mass audience digitally" />
                </MetaTag>
                <Header>
                    <Header.PageTitle>{t('Integrated Digital Service Delivery Platfrom')}</Header.PageTitle>
                </Header>
            </ContextJsx>

            <section className="py-5">
                <div className="container">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={24} lg={12} className="text-center">
                            <img src={labMan} className="mw-100 d-none d-lg-block" alt="Artistic depiction of a Scientist is looking through a Microscope while some chemical formulas are floating" />
                            <img src={ScientistMicroscope} className="w-100 d-lg-none rounded-4" alt="a Scientist is looking through a Microscope" aria-hidden="true" />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} className="text-center text-lg-start">
                            <div className="my-4 mt-xl-5 ms-lg-4">
                                <h3 className="fw-bold">{t('Ministry of Science and Technology')}</h3>
                                <p style={{ fontSize: '18px' }}>{t('Ministry of Science and Technology, Government of the People’s Republic of Bangladesh is promoting Science and Technology as stewardship of positive change in society and for balanced socio-economic upliftment, national well-being and thus to make Science and Technology a part of national culture. The use of Science and Technology as a means of sustainable use of Environment, Ecosystem and Resources contribute to world pool of knowledge in Science and Technology.')}</p>
                                <NavLink className="mt-4 btn btn-primary text-uppercase fw-bold" to={getLangUrl(lang, '/about-us')}>
                                    <>
                                        {t('Read More')}
                                        <RightCircleOutlined className="ms-2 align-middle" />
                                    </>
                                </NavLink>
                            </div>
                        </Col>
                    </Row>


                </div>
            </section>
        </>
    );
}

export default LandingPage;
