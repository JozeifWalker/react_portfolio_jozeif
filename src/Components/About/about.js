import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./about.css";
import jozeif from "../../Images/jozeif.jpg";



class About extends Component {
    render() {
        return (
            <div className="aboutme">
                <body>
                    <div className="aboutme-wrapper">
                        <img src={jozeif} className="jozeif" />
                        <h2>Jozeif Walker</h2>
                        <h3>Mobile/Web/Front-End Developer</h3>
                        <h4>Application Developer at IBM</h4>
                        <p className="description">Front-End ,Back-End, Mobile, Web or whatever your needs are. I am a developer that values creating positive and memorable experiences for your users.
                        I am eager to learn in order to deliver optimal solutions to your clients. </p>
                    </div>



                </body>
            </div>


        )


    }

}
export default About;