import React, { FC } from 'react';
import { useLang } from "../../../../../hooks/useLang";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";
import './LandingPage.style.scss';
import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import CancelBookingButtonController from '../Modal/CancelBooking/CancelBookingButton.controller';
import ChangeDateButtonController from '../Modal/ChangeDate/ChangeDateButton.controller';
import ChangeRoomButtonController from '../Modal/ChnageRoom/ChangeRoomButton.controller';

const LandingPage: FC<any> = props => {
    const { t } = useLang();

    return (
        <>
            <ContextJSX>
                <BodyClassName className={'component-grant'} />
                <MetaTag>
                    <MetaTag.Title>{t('Component: OSAM')}</MetaTag.Title>
                </MetaTag>
                <Header>
                    <Header.PageTitle>{t('Component: OSAM')}</Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item>{t('Component: OSAM')}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>
            <div className="container">
                <Space>
                    <Link className='btn btn-primary' to="/accommodation" target='_blank'>Home</Link>
                    <Link className='btn btn-primary' to="/accommodation-details" target='_blank'>Accommodation Details</Link>
                    <Link className='btn btn-primary' to="/search-accommodation" target='_blank'>Search Accommodation</Link>
                    <Link className='btn btn-primary' to="/building-details" target='_blank'>Auditorium Details</Link>
                    <Link className='btn btn-primary' to="/booking" target='_blank'>Booking form</Link>
                    <Link className='btn btn-primary' to="/booking-details" target='_blank'>Booking Details</Link>
                    <Link className='btn btn-primary' to="/booking-confirmation-details" target='_blank'>Booking Confirmation</Link>
                </Space>
                <Space style={{ marginTop: "10px" }}>
                    <Link className='btn btn-primary' to="/booking-history" target='_blank'>Booking History</Link>
                    <Link className='btn btn-primary' to="/review-and-feedback" target='_blank'>Review And Feedback</Link>
                    <Link className='btn btn-primary' to="/review-and-feedback-details" target='_blank'>Review And Feedback Details</Link>
                    <Link className='btn btn-primary' to="/booking-details-page" target='_blank'>Booking Details Page</Link>
                    <Link className='btn btn-primary' to="/customer-billing-information" target='_blank'>Customer Billing Information</Link>
                </Space>
                <Space>
                    <ChangeDateButtonController itemData={{}} />
                    <CancelBookingButtonController itemData={{}} />
                    <ChangeRoomButtonController itemData={{}} />
                </Space>
            </div>
        </>
    );
}

export default LandingPage;
