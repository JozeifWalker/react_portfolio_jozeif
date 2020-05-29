import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FiHome as HomeIcon } from "react-icons/fi";
import { FiCode as CodeIcon } from "react-icons/fi";
import { FiUser as UserIcon } from "react-icons/fi";
import { FiMessageSquare as ContactIcon } from "react-icons/fi";
import './Navbar.css';
export default props => {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (

        <Menu{...props}>
            <a id="home" className="menu-item" href="/"><HomeIcon />Home</a>
            <a id="about" className="menu-item" href="/about"><UserIcon />About</a>
            <a id="work" className="menu-item" href="/projects"><CodeIcon />Projects</a>
            <a id="contact" className="menu-item" href="/contact"><ContactIcon />Contact</a>
        </Menu>
    );
};
