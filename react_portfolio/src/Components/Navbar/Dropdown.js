import React from 'react';
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
            <a href="/" id="home" className="menu-item"  ><HomeIcon />Home</a>
            <a href="/about" id="about" className="menu-item" ><UserIcon />About</a>
            <a href="/projects" id="work" className="menu-item" ><CodeIcon />Projects</a>
            <a href="/contact" id="contact" className="menu-item" ><ContactIcon />Contact</a>
        </Menu>
    );
};
