import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="title-Bar">
                <Dropdown />
                <body>
                    <nav class="navbar">
                        <h1> Jozeif Walker</h1>

                        {/*<ul>
                            <li><Link style={{ color: 'inherit', textDecoration: 'none' }} to="/about">About</Link></li>
                            <li><Link style={{ color: 'inherit', textDecoration: 'none' }} to="/projects">Projects</Link></li>
                       <li>Contact</li>
                        </ul>*/}
                    </nav>
                </body>
            </div >
        );
    }
}
export default Navbar;