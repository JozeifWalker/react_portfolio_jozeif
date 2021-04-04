import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';
import './Navbar.css';


class Navbar extends Component {
    render() {
        return (
            <div className="title-Bar">
                <Dropdown disableAutoFocus className="AIE" />
                <nav class="navbar">
                    <h1> Jozeif Walker</h1>
                    <ul className="desktop-nav" style={{fontSize:'1.25rem'}}>
                        <Link id="link" to="/"><li>Home</li></Link>
                        <div style={{width:'1rem'}}></div>
                        <Link id="link" to="/about"><li>About</li></Link>
                        <div style={{width:'1rem'}}></div>
                        <Link id="link" to="/projects"><li>Projects</li></Link>
                        <div style={{width:'1rem'}}></div>
                        <Link id="link" to="/contact"><li> Contact</li></Link>
                    </ul>




                </nav>



            </div >
        );
    }
}
export default Navbar;