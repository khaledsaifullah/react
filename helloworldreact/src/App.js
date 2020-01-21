import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';


function App() {
  return (
        <div className="App">
            <Router>
                <Header />

                <nav className="main-menu">
                    <ul>
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/about/">About</Link> </li>
                    </ul>
                </nav>

                <div className="main-content">
                    <Route path="/" exact component={Home} />
                    <Route path="/about/" component={About} />
                </div>
            </Router>



    </div>
  );
}
export default App;


