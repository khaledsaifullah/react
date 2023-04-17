import React, { FC } from 'react'
import {Form, Input, Button} from 'antd';
import {
    baecicon, baeraicon, bnsdocicon, filtericonsearch, headerbannerfour, nmsticon, specialresearchgranticon
} from "../../../../../assets/images/pages/service";
import './Service.style.scss';

const Service: FC<any> = props => {
    return (
        <div className="pageone-content">
            <div  className="header-banner"><img src={headerbannerfour} alt="headerbanner" /></div>

            <div  className="grant-fellowship-content">
                <div className="grantfellowship-icon"><img src={specialresearchgranticon} alt="icon" /></div>
                <h3>Special Research Grant </h3>
                <div  className="grant-fellowship-content-text">
                    <p>Monotonectally enhance intuitive best practices before wireless bandwidth. Authoritatively architect dynamic manufactured products through sticky sources. Interactively aggregate integrated opportunities via fully researched total linkage.</p>
                </div>
            </div>

            <div  className="service-content-area">
                <h3>AFFILIATED ORGANIZATIONS</h3>
                <h4>The service can be availed from the following ogranizations with their own varities</h4>
                <div  className="affiliated-org-content">
                    <div  className="affiliated-org-heading">
                        <div className="serch-filter-input">
                            <Form.Item name="licence_number " >
                                <Input placeholder="Type Organization to Filter..." />
                            </Form.Item>
                        </div>
                        <div className="serviceseeker-btn">
                            <Button><img src={filtericonsearch} alt="filtericonsearch" /> Filter</Button>
                        </div>
                    </div>
                    <div  className="affiliated-org-body">
                        <div  className="affiliated-org-body-inner">
                            <div className="affiliated-block">
                                <ul>
                                    <li><a href="#"  target="_blank">
                                        <label><img src={baecicon} alt="icon" /> </label>
                                        <span> Bangladesh Atomic Energy Commission (BAEC) </span>
                                    </a></li>
                                </ul>
                            </div>
                            <div className="affiliated-block">
                                <ul>
                                    <li><a href="#"  target="_blank">
                                        <label><img src={bnsdocicon} alt="icon" /> </label>
                                        <span>Bangladesh National Scientific and Technical Documentation Center (BANSDOC) </span>
                                    </a></li>
                                </ul>
                            </div>
                            <div className="affiliated-block">
                                <ul>
                                    <li><a href="#"  target="_blank">
                                        <label><img src={nmsticon} alt="icon" /> </label>
                                        <span>National Museum of Science & Technology (NMST) </span>
                                    </a></li>
                                </ul>
                            </div>
                            <div className="affiliated-block">
                                <ul>
                                    <li><a href="#"  target="_blank">
                                        <label><img src={baeraicon} alt="icon" /> </label>
                                        <span>Bangladesh Atomic Energy Regulatory Authority (BAERA) </span>
                                    </a></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>

            </div>


        </div>
    );
}

export default Service;