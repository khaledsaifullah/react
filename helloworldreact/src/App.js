import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';


class App extends Component {
    render() {

        return (
            <div className="App">

            <Router>
            <Header />


            <div className="main-menu">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About</Link> </li>
            </ul>
            </div>
            <div className="main-content">
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            </div>
            </Router>


            </div>
    )

    }

}



export default App;






