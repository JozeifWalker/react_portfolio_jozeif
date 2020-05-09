import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                <body>
                    <footer>
                        <p>&copy; Copyright Jozeif Walker 2020</p>
                    </footer>
                </body>
            </div>
        );
    }

}
export default Footer;