import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./about.css";
import html from "../../Images/html.png"
import mongo from "../../Images/mongo.png"
import express from "../../Images/express.png"
import react from "../../Images/react.png"
import nodejs from "../../Images/nodejs.png"
import java from "../../Images/Java_logo.jpg"
import android from "../../Images/androidstud.jpg"
import css from "../../Images/css.jpg"
import mysql from "../../Images/mysql.jpg"
import aws from "../../Images/amaz.png"
import azure from "../../Images/microsoft_azure.png"
import me from "../../Images/jozeif1-removebg.png"



class About extends Component {
    render() {
        return (
            <div className="aboutme">
                <body>
                    <p className="homeLink"><Link to="/" className="btn-flat waves-effect">
                        Back to home</Link></p>
                    <section className="aboutme-wrapper">

                        <h1>Hello I'm</h1>
                        <h2>Jozeif Walker</h2>
                        <h3>Mobile/Web/Front-End Developer</h3>
                        <h4>Application Developer at IBM</h4>
                        <p className="description">I am an Application Developer with experience in these technologies:  <span class="skills">ReactJS, ExpressJS, NodeJS, HTML, CSS, Java, Android(Java), MongoDB , MySQL , AWS, and Azure.</span>
                         I value creating positive experieces for users on mobile and web. I'm always eager to learn so that I can deliver optimal solutions to clients. </p>
                    </section>
                    <div className="myCards">
                        <div class="mdc-card mdc-card outlined">
                            <div class=" mongo">
                                <div class="my-card__media--16-9">
                                    <img src={mongo}></img>
                                </div>
                            </div>
                        </div>
                        <div class="mdc-card mdc-card outlined">
                            <div class="my-card__media--16-9">
                                <img src={express} height="225px" width="225px"></img>
                            </div>
                        </div>
                        <div class="mdc-card mdc-card outlined">
                            <div class="my-card__media--16-9">
                                <img src={react} height="225px" width="225px"></img>
                            </div>
                        </div>
                        <div class="mdc-card mdc-card outlined">
                            <div class="my-card__media--16-9">
                                <img src={nodejs} height="225px" width="225px"></img>
                            </div>
                        </div>
                        <div class="mdc-card mdc-card outlined">
                            <div class="my-card__media--16-9">
                                <img src={java} height="225px" width="225px"></img>
                            </div>
                        </div>
                        <div class="mdc-card mdc-card outlined">
                            <div class="my-card__media--16-9">
                                <img src={android} height="225px" width="225px"></img>
                            </div>
                        </div>
                        <div class="mdc-card mdc-card outlined">
                            <div class="my-card__media--16-9">
                                <img src={html} height="225px" width="225px"></img>
                            </div>
                        </div>
                        <div class="mdc-card mdc-card outlined">
                            <div class="my-card__media--16-9">
                                <img src={css} height="225px" width="225px"></img>
                            </div>
                        </div>
                        <div class="mdc-card mdc-card outlined">
                            <div class="my-card__media--16-9">
                                <img src={mysql} height="225px" width="225px"></img>
                            </div>
                        </div>
                        <div class="mdc-card mdc-card outlined">
                            <div class="my-card__media--16-9">
                                <img src={aws} height="225px" width="225px"></img>
                            </div>
                        </div>

                    </div>


                </body>
            </div>

        )


    }

}
export default About;