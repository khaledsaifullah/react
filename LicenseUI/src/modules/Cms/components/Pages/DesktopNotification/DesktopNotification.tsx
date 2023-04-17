import React, { FC } from 'react'
import {Col, Row, Spin} from "antd";
import './DesktopNotification.style.scss';

const DesktopNotification: FC<any> = props => {
    return (
        <div className="page-container page-container-desktop-notification">
            <div className="main-content-body">
                <Spin spinning={false}>
                    <Row>
                        <Col span={24}>
                            <h1>Desktop Notifications</h1>
                            <ul>
                                <li>
                                    <a href={'https://www.businessinsider.com/how-to-stop-notifications-from-google-chrome'} target={'_blank'}>
                                        Remove block desktop notifications
                                    </a>
                                </li>
                                <li>
                                    <a href={'https://support.google.com/chrome/answer/3220216?co=GENIE.Platform%3DDesktop&hl=en'} target={'_blank'}>
                                        Turn desktop notifications on or off
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Spin>
            </div>
        </div>
    );
}

export default DesktopNotification;