import { LicensePermitVerificationApi } from "@/api";
import { BodyClassName } from "@/components/BodyClassName/BodyClassName";
import Breadcrumb from "@/components/Breadcrumb";
import ContextJSX from "@/components/ContextJsx";
import Header from "@/components/Header";
import MetaTag from "@/components/MetaTag";
import { useLang } from "@/hooks/useLang";
import { Message, DateTimeUtils } from "@/utils";
import { Card, Col, Row, Spin } from "antd";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './VerificationComponent.scss';
import VerfiedIcon from "@/assets/images/icon/verified.png";

const initialState = {
    itemData: {
        id: null,
        model_mapping: {
            application_name: null
        },
    },
    loading: false,
}

const VerificationComponent: FC<any> = (props) => {
    const { uuid } = useParams();
    const { t, lang } = useLang();

    const [loading, setLoading] = useState(initialState.loading);
    const [itemData, setItemData] = useState<any>(initialState.itemData);

    useEffect(() => {
        if (uuid) {
            new Promise((resolve, reject) => {
                setLoading(true);
                LicensePermitVerificationApi.verify(uuid)
                    .then(res => {
                        setItemData(res.data);
                        setLoading(false);
                        resolve(res);
                    })
                    .catch(err => {
                        Message.error('A network error occurred. Please try again later.');
                        setLoading(false);
                        reject(err);
                    });
            });
        }
    }, [uuid]);


    return (
        <>
            <ContextJSX>
                <BodyClassName className="verify" />
                <MetaTag>
                    <MetaTag.Title>{t('License/Permit Verification')}</MetaTag.Title>
                </MetaTag>
                <Header>
                    <Header.PageTitle>{t('License/Permit Verification')}</Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item>{t('License/Permit Verification')}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>

            <div className="container">
                <Card className="text-center shadow mb-5 rounded position-relative overflow-hidden">
                    {loading && (
                        <>
                            <div className="h5 mb-4">
                                {t('The License/Permit data is been fetched')}...
                            </div>
                            <Spin size="large" />
                        </>
                    )}

                    {!loading && !itemData.id && (
                        <div className="alert alert-warning mb-0 h5" role="alert">
                            {t('Sorry, no data found. Either the License/Permit is not registered in this system or the QR Code is invalid')}
                        </div>
                    )}

                    {!loading && itemData.id && (
                        <Card className="verified-license-permit rounded">
                            <img src={VerfiedIcon} alt="Verified icon" aria-hidden="true" width="200" height="200" />
                            <h3 className="mb-3 h5">
                                <strong>{itemData?.model_mapping?.application_name ? t(itemData.model_mapping.application_name) : itemData.model_mapping.application_name}</strong>
                                &nbsp;
                                <span className="fw-normal license-permit--dimmed-text">{t('issued by')}</span>
                                &nbsp;
                                {/* @TODO: Make the BAERA name dynamic */}
                                {t('Bangladesh Atomic Energy Regulatory Authority (BAERA)')}
                            </h3>
                            <Row gutter={[16, 16]} className="mb-4">
                                <Col xs={24} sm={24} md={8}>
                                    <small className="text-uppercase">___{t('License/Permit Number')}___</small><br />
                                    <strong>{itemData.license_permit_madeup_number}</strong>
                                </Col>
                                <Col xs={24} sm={24} md={8}>
                                    <small className="text-uppercase">___{t('Date of Issue')}___</small><br />
                                    <strong>{itemData?.issued_at ? DateTimeUtils.formatDate(itemData?.issued_at) : '-'}</strong>
                                </Col>
                                <Col xs={24} sm={24} md={8}>
                                    <small className="text-uppercase">___{t('Expiry Date')}___</small><br />
                                    <strong>{itemData?.expiry_date ? DateTimeUtils.formatDate(itemData?.expiry_date) : '-'}</strong>
                                </Col>
                            </Row>
                            <div className="text-center">
                                <small className="text-uppercase">___{t('Organization whom the License/Permit is given')}___</small><br />
                                <div className="h5">
                                    <strong>{itemData.organization_name}</strong><br />
                                    <span className="license-permit--dimmed-text">
                                        {'bn' === lang ? itemData.organization_address_bn : itemData.organization_address_en}
                                        <br />
                                        <small>
                                            {'bn' === lang ? itemData.thana_name_bn : itemData.thana_name_en},
                                            &nbsp;
                                            {'bn' === lang ? itemData.district_name_bn : itemData.district_name_en}
                                        </small>
                                    </span>
                                </div>
                            </div>
                        </Card>
                    )}
                </Card>
            </div>
        </>
    )
};

export default VerificationComponent;
