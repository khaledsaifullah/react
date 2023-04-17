import React, { FC } from "react";
import { Collapse } from "antd";
import { useTranslation } from "react-i18next";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import "./ServiceInstruction.style.scss";
import ServiceInstructionContent from "./ServiceInstructionContent";

const ServiceInstructionCollapsible: FC<any> = (props) => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language || "en";
    const { Panel } = Collapse;
    const { circularData } = props;

    return (
        <>
            <div className="application-form-instruction mb-3">
                <div className="collapse-container">
                    <Collapse
                        bordered={false}
                        expandIcon={({ isActive }) =>
                            isActive ? <MinusCircleOutlined /> : <PlusCircleOutlined />
                        }
                        className="collapse-panel"
                    >
                        <Panel header={t('Pre-Requisites & Instructions')} key="1">
                            <ServiceInstructionContent circularData={circularData} />
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </>
    );
};
export default React.memo(ServiceInstructionCollapsible);
