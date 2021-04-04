import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Homepage/Home';
import About from './Components/About/about';
import Project from './Components/Projects/project';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'carbon-components/css/carbon-components.min.css';
import 'mdbreact/dist/css/mdb.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ToastContainer />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
