import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Tabs,
    Tab,
} from "carbon-components-react";
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="mylanding">
                <body>
                    <h1>DEVELOPER.</h1>

                    <h2>DESIGNER.</h2>

                    <h3>CREATOR.</h3>
                </body>
            </div>

        );
    }
}
export default Home;