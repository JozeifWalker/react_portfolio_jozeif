import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./about.css";
import jozeif from "../../Images/jozeif.jpg";



class About extends Component {
    render() {
        const image = {
            height: "45%",
            width: "100%",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "10px"

        }
        return (
            <div className="aboutme">
                <body>
                    <section className="aboutme-wrapper">

                        <img className="jozeif" src={jozeif} />


                        <h2>Jozeif Walker</h2>
                        <h3>Mobile/Web/Front-End Developer</h3>
                        <h4>Application Developer at IBM</h4>
                        <p className="description">Front-End, Back-End, UI/UX, Mobile, Web or whatever you need. I am a developer that values creating positive and memorable experiences for your users.
                        I am eager to learn in order to deliver optimal solutions to your clients. </p>
                    </section>



                </body>
            </div>


        )


    }

}
export default About;