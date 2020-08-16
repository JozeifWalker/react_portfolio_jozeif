import React, { Component } from 'react';
import { FaInstagram } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr"
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">


                <p>&copy; Copyright Jozeif Walker 2020</p>
                <p><a href="https://www.instagram.com/jozeifw_/" target="_blank" rel="noopener noreferrer"> <FaInstagram style={{ fontSize: "20px", marginRight: '5px' }} /></a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><GrGithub style={{ fontSize: "20px", marginRight: '5px' }} /></a>
                    <a href="https://www.linkedin.com/in/jozeif-walker-72299834/" target="_blank" rel="noopener noreferrer"><GrLinkedin style={{ fontSize: "20px", marginRight: '5px' }} /></a> </p>



            </div>
        );
    }

}
export default Footer;