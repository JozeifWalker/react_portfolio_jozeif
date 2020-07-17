import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Homepage/Home';
import Footer from './Components/Footer/footer';
import About from './Components/About/about';
import Project from './Components/Projects/project';
import Contact from './Components/Contact/contact';
import './App.css';
import { HamburgerMenu } from "react-hamburger-menu";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
