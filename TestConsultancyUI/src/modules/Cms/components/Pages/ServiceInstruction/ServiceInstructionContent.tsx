import React, { FC } from "react";
import { useLang } from "../../../../../hooks/useLang";
import "./ServiceInstruction.style.scss";
import { Row, Col } from "antd";
import i18n from "@/i18n/i18n";

const ServiceInstructionContent: FC<any> = (props) => {
    const { t } = useLang();
    const { testServiceMapping } = props;
    const lang = i18n.language || "en";


    return (
        <Row gutter={[16, 16]}>
            <Col span={12} xs={24} sm={12}>
                <div className="mb-3">
                    <h3 className="bordered-title text-uppercase h5">
                        {t('Instructions on Filling-up the Form')}
                    </h3>
                    {/* <div className="instruction-item-content" dangerouslySetInnerHTML={{
                        __html: testServiceMapping?.pre_condition,
                    }}>
                    </div> */}
                    <div className="instruction-item-content">
                         { testServiceMapping?.pre_condition}
                    </div>
                </div>
                <div className="mb-3 mb-sm-0">
                    <h3 className="bordered-title text-uppercase h5">
                        {t('Service Delivery Method')}
                    </h3>
                    <div className="instruction-item-content">
                        {lang === "en" ? testServiceMapping?.methodology_en : testServiceMapping?.methodology_bn }
                    </div>
                </div>
            </Col>
            <Col span={12} xs={24} sm={12}>
                <div className="mb-3">
                    <h3 className="bordered-title text-uppercase h5">
                        {t('Maximum Service Period')}
                    </h3>
                    <div className="instruction-item-content">
                    {testServiceMapping?.duration} <span>{t('Days')}</span>
                    </div>
                </div>

                <div>
                    <h3 className="bordered-title text-uppercase h5">
                        {t('Service Fee & Payment Method')}
                    </h3>
                    <div className="instruction-item-content">
                        {testServiceMapping?.payment_method_keys}
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default ServiceInstructionContent;
