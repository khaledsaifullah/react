import React, { FC } from "react";
import { useLang } from "../../../../../hooks/useLang";
import "./ServiceInstruction.style.scss";
import { Row, Col } from "antd";

const ServiceInstructionContent: FC<any> = (props) => {
    const { t } = useLang();
    const { circularData } = props;

    return (
        <Row gutter={[16, 16]}>
            <Col span={12} xs={24} sm={12}>
                <div className="mb-3">
                    <h3 className="bordered-title text-uppercase h5">
                        {t('Instructions on Filling-up the Form')}
                    </h3>
                    <div className="instruction-item-content" dangerouslySetInnerHTML={{
                        __html: circularData?.circular_description,
                    }}>
                    </div>
                </div>
                <div className="mb-3 mb-sm-0">
                    <h3 className="bordered-title text-uppercase h5">
                        {t('Service Delivery Deadline')}
                    </h3>
                    <div className="instruction-item-content">
                        {circularData?.last_date}
                    </div>
                </div>
            </Col>
            <Col span={12} xs={24} sm={12}>
                <div className="mb-3">
                    <h3 className="bordered-title text-uppercase h5">
                        {t('Required Documents')}
                    </h3>
                    <div className="instruction-item-content" dangerouslySetInnerHTML={{
                        __html: circularData?.required_document,
                    }}>
                          </div>
                </div>

                <div>
                    <h3 className="bordered-title text-uppercase h5">
                        {t('Service Fee & Payment Method')}
                    </h3>
                    <div className="instruction-item-content">
                        {circularData?.service_fee_payment_method}
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default ServiceInstructionContent;
