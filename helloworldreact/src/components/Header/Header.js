import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './Header.css';
import companylogo from './images/companylogo.png';



class MyHeader  extends Component {
    render() {
        return (
            <header className="header-content">
                <div className="header-content-body">
                    <div className="company-logo">
                        <Link to="/"><img src={companylogo} alt="companylogo" /></Link>
                    </div>
                </div>
            </header>
        )
    }

}

export default MyHeader;




