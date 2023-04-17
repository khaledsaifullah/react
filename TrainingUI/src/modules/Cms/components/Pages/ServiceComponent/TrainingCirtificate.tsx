import React, { FC } from "react";
import { Row, Col, Card, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useLang } from "../../../../../hooks/useLang";
import ContextJSX from "../../../../../components/ContextJsx";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Header from "../../../../../components/Header";
import MetaTag from "../../../../../components/MetaTag";
import { BodyClassName } from "../../../../../components/BodyClassName/BodyClassName";
import "./ServiceComponent.style.scss";

import {
    CalendarOutlined, TeamOutlined, BankOutlined,
    SolutionOutlined, HeartOutlined, ArrowRightOutlined
} from '@ant-design/icons';

import traingbanner from '../../../../../assets/images/pages/home/traingbanner.png';
import staricon from '../../../../../assets/images/icon/star-icon.png';
import governmentseal from '../../../../../assets/images/icon/government-seal.png';


const { Search } = Input;
const onSearch = (value: string) => console.log(value);


const ServiceComponent: FC<any> = (props) => {
    const { t, lang, getLangUrl } = useLang();

    return (
        <div>
            <div className='training-cirtificate' style={{ "border": "3px solid #bf8e02" }}>
                <table cellSpacing={0} cellPadding={10} border={0} style={{ "width": "100%" }}>
                    <tr>
                        <td valign="top">
                            <img width={50} height={50} alt={'Logo'} src="http://103.69.149.45:9208/static/media/companylogo.4feaf3ce14a76cc24dde.png" />
                        </td>
                        <td valign="top">
                            <h1 style={{
                                "textAlign": "center", "fontSize": "20px", "color": "#230844", "lineHeight": "25px",
                                'padding': "0", "margin": "0", "fontFamily": "Arial, Helvetica, sans-serif", "textTransform": "uppercase", "fontWeight": "bold"
                            }}>
                                National Institute of Biotechnology </h1>
                            <p style={{
                                "textAlign": "center", "fontSize": "18px", "color": "#6f942d", "lineHeight": "20px",
                                'padding': "0", "margin": "0", "fontFamily": "Times New Roman,Times, serif", "fontWeight": "bold"
                            }}>
                                Ministry of Science and Technology </p>
                        </td>
                        <td valign="top">
                            <img width={50} height={50} alt={'Logo'} src="http://103.69.149.45:9208/static/media/companylogo.4feaf3ce14a76cc24dde.png" />
                        </td>
                    </tr>
                </table>
                <table cellSpacing={0} cellPadding={10} border={0} style={{ "width": "100%" }}>
                    <tr>
                        <td valign="top">
                            <p style={{
                                "textAlign": "center", "fontSize": "16px", "color": "#000", "lineHeight": "20px",
                                'padding': "0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>
                                Ref. No. ST-001064</p>
                        </td>
                        <td valign="top">
                            <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
                            <p style={{
                                "textAlign": "center", "fontSize": "20px", "color": "#230844", "lineHeight": "25px",
                                'padding': "0", "margin": "0", "fontFamily": "Audiowide, cursive", "textTransform": "uppercase"
                            }}>
                                Certificate of Darticipation</p>
                        </td>
                        <td valign="top">
                            <p style={{
                                "textAlign": "center", "fontSize": "16px", "color": "#000", "lineHeight": "20px",
                                'padding': "0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>09 january, 2020</p>
                        </td>
                    </tr>
                </table>


                <table cellSpacing={0} cellPadding={10} border={0}
                    style={{ width: "100%" }}>
                    <tr>
                        <td valign="top" >
                            <p style={{
                                "textAlign": "center", "fontSize": "20px", "color": "#000", "lineHeight": "35px",
                                'padding': "0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>
                                This is to certify that</p>
                            <p style={{
                                "textAlign": "center", "fontSize": "35px", "color": "#000", "lineHeight": "35px",
                                'padding': "0 0 15px 0", "margin": "0", "fontFamily": "Kunstler Script", "fontWeight": "bold"
                            }}>
                                Meheta Datta</p>
                            <p style={{
                                "textAlign": "center", "fontSize": "20px", "color": "#000", "lineHeight": "20px",
                                'padding': "0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>
                                Biotechnology and Genetic Engineering Discipline, Khulna University,
                                Khulna has<br /> successfully completed.
                            </p>
                            <h5 style={{
                                "textAlign": "center", "fontSize": "18px", "color": "#230844", "lineHeight": "25px",
                                'padding': "8px 0 0 0", "margin": "0", "fontFamily": "Arial, Helvetica, sans-serif", "textTransform": "uppercase", "fontWeight": "bold"
                            }}>
                                Taining On Basic Biotechnology. </h5>

                            <p style={{
                                "textAlign": "center", "fontSize": "20px", "color": "#000", "lineHeight": "20px",
                                'padding': "0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>
                                held on</p>
                            <p style={{
                                "textAlign": "center", "fontSize": "20px", "color": "#000", "lineHeight": "20px",
                                'padding': "0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>
                                04-09 january, 2020
                            </p>


                        </td>
                    </tr>
                </table>



                <table cellSpacing={0} cellPadding={10} border={0}
                    style={{ "width": "100%", "textAlign": "center" }} >
                    <tr>
                        <td valign="top" height={20} style={{ "lineHeight": "20px" }}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td valign="top">
                            <p style={{
                                "textAlign": "center", "fontSize": "20px", "color": "#000", "lineHeight": "20px",
                                'padding': "0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>
                                <span style={{ "borderTop": "1px solid #000" }}>
                                    Habibu Nabi Farhad </span>
                            </p>
                            <p style={{
                                "textAlign": "center", "fontSize": "16px", "color": "#000", "lineHeight": "20px",
                                'padding': "0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>
                                Course Coordinator
                            </p>
                        </td>
                        <td valign="top">
                            <img src="https://i.postimg.cc/2ynLJW6r/e.png" alt="" />
                            <p style={{
                                "textAlign": "center", "fontSize": "16px", "color": "#000", "lineHeight": "20px",
                                'padding': "5px 0 0 0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>
                                Biotechnology and Genetic Engineering Discipline,
                            </p>
                            <p style={{
                                "textAlign": "center", "fontSize": "16px", "color": "#000", "lineHeight": "20px",
                                'padding': "0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>
                                House:+88-02-7789289, Email: fgibbbd@gmail.com, www.db.gov.bd.
                            </p>
                        </td>
                        <td valign="top">
                            <p style={{
                                "textAlign": "center", "fontSize": "20px", "color": "#000", "lineHeight": "20px",
                                'padding': "0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>
                                <span style={{ "borderTop": "1px solid #000" }}>
                                    Dr. Md. Saifullah </span>
                            </p>
                            <p style={{
                                "textAlign": "center", "fontSize": "16px", "color": "#000", "lineHeight": "20px",
                                'padding': "0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>
                                Director General
                            </p>
                        </td>
                    </tr>
                </table>

            </div>


            <div className='training-cirtificate-detail' >
                <table cellSpacing={0} cellPadding={10} border={0}
                    style={{ "width": "100%", "textAlign": "center" }} >
                    <tr>
                        <td valign="top">
                            <h5 style={{
                                "textAlign": "center", "fontSize": "18px", "color": "#230844", "lineHeight": "25px",
                                'padding': "8px 0 0 0", "margin": "0", "fontFamily": "Brush Script MT", "textTransform": "uppercase",
                                "fontWeight": "bold", "textDecoration": "underline"
                            }}>
                                Course Module </h5>
                        </td>
                    </tr>
                </table>

                <table cellSpacing={0} cellPadding={10} border={0} width="100%" >
                    <tr>
                        <td valign="top" width="45%">
                            <table cellSpacing={0} cellPadding={10} border={0} width="100%" >
                                <tr>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <h5 style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "bold", "fontStyle": "italic"
                                        }}>
                                            Theoritical
                                        </h5>
                                    </td>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <h5 style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "bold", "fontStyle": "italic"
                                        }}>
                                            Hours(0)
                                        </h5>
                                    </td>
                                </tr>



                                <tr>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            Biotechnology in Bangladesh of  NEB
                                        </p>
                                    </td>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            01
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            Biotechnology in Bangladesh of  NEB
                                        </p>
                                    </td>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            01
                                        </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            Biotechnology in Bangladesh of  NEB
                                        </p>
                                    </td>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            01
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            Biotechnology in Bangladesh of  NEB
                                        </p>
                                    </td>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            01
                                        </p>
                                    </td>
                                </tr>



                                <tr>
                                    <td valign="top" width="100%" colSpan={3} style={{ "padding": "0", "lineHeight": "45px" }}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            Total
                                        </p>
                                    </td>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            07
                                        </p>
                                    </td>
                                </tr>


                            </table>
                        </td>




                        <td valign="top" width="10%">&nbsp; </td>
                        <td valign="top" width="45%">
                            <table cellSpacing={0} cellPadding={10} border={0} width="100%" >
                                <tr>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <h5 style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Brush Script MT", "textTransform": "uppercase",
                                            "fontWeight": "bold"
                                        }}>
                                            Practical
                                        </h5>
                                    </td>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <h5 style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Brush Script MT", "textTransform": "uppercase",
                                            "fontWeight": "bold"
                                        }}>
                                            Hours(0)
                                        </h5>
                                    </td>
                                </tr>



                                <tr>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            Biotechnology in Bangladesh of  NEB
                                        </p>
                                    </td>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            01
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            Biotechnology in Bangladesh of  NEB
                                        </p>
                                    </td>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            01
                                        </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            Biotechnology in Bangladesh of  NEB
                                        </p>
                                    </td>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            01
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            Biotechnology in Bangladesh of  NEB
                                        </p>
                                    </td>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            01
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            Biotechnology in Bangladesh of  NEB
                                        </p>
                                    </td>
                                    <td valign="top" width="50%" style={{ "padding": "0" }}>
                                        <p style={{
                                            "textAlign": "center", "fontSize": "14px", "color": "#230844", "lineHeight": "25px",
                                            'padding': "0", "margin": "0", "fontFamily": "Sans Serif, Script", "textTransform": "uppercase",
                                            "fontWeight": "normal", "fontStyle": "italic"
                                        }}>
                                            01
                                        </p>
                                    </td>
                                </tr>



                            </table>
                        </td>
                    </tr>
                </table>


                <table cellSpacing={0} cellPadding={10} border={0}
                    style={{ "width": "100%", "textAlign": "center" }} >
                    <tr>
                        <td valign="top" height={20} style={{ "lineHeight": "20px" }}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td valign="top">
                            <p style={{
                                "textAlign": "center", "fontSize": "20px", "color": "#000", "lineHeight": "20px",
                                'padding': "0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>
                                <span style={{ "borderTop": "1px solid #000" }}>
                                    Habibu Nabi Farhad </span>
                            </p>
                            <p style={{
                                "textAlign": "center", "fontSize": "16px", "color": "#000", "lineHeight": "20px",
                                'padding': "0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>
                                Course Coordinator
                            </p>
                        </td>
                        <td valign="top">
                            &nbsp;
                        </td>
                        <td valign="top">
                            <p style={{
                                "textAlign": "center", "fontSize": "20px", "color": "#000", "lineHeight": "20px",
                                'padding': "0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>
                                <span style={{ "borderTop": "1px solid #000" }}>
                                    Dr. Md. Saifullah </span>
                            </p>
                            <p style={{
                                "textAlign": "center", "fontSize": "16px", "color": "#000", "lineHeight": "20px",
                                'padding': "0", "margin": "0", "fontFamily": "Brush Script MT"
                            }}>
                                Director General
                            </p>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    );
};

export default ServiceComponent;
