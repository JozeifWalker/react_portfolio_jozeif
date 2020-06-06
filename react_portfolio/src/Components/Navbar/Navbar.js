import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="title-Bar">
                <Dropdown />

                <nav class="navbar">
                    <h1> Jozeif Walker</h1>

                </nav>

            </div >
        );
    }
}
export default Navbar;