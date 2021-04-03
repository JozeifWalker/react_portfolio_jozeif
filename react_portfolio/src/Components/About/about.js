import React, { Component } from 'react';


import "./about.css";
import jozeif from "../../Images/jozeifwbw.png";

import { BsCodeSlash } from 'react-icons/bs';
import { BsServer } from 'react-icons/bs';
import { BsWrench } from 'react-icons/bs';



class About extends Component {
    render() {
        return (
            <div className="aboutme">
                <div className="about-title-bar">
                    <h1>About</h1>
                </div>


                <div className="wrapper"><img src={jozeif} id="jozeif" alt=" Courtesy of Frank Baker Jr." /></div>
                <div className="aboutme-wrapper">
                    <h2>Jozeif Walker</h2>
                    <h3>Application Developer</h3>
                </div>


                <div className="skillSection">
                    <h3 className="skillTitle">Skill Overview</h3>

                    <BsCodeSlash id="codeIcon" />
                    <div className="skillsect-card">
                        <h2>Front End</h2>
                        <ul id="skillsect-list" >
                            <li>React/Redux</li>
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>XML(Android)</li>
                        </ul>
                    </div>

                    <BsServer id="backEndIcon" />
                    <div className="skillsect-card--1">
                        <h2>Back End</h2>
                        <ul id="skillsect-list" >
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>ExpressJS</li>
                            <li>NodeJS</li>
                            <li>Java</li>
                            <li>Android(Java)</li>
                        </ul>
                    </div>
                    <BsWrench id="OtherIcon" />
                    <div className="skillsect-card--2">

                        <h2>Other</h2>
                        <ul id="skillsect-list" >

                            <li>Adobe XD</li>
                            <li>InVision</li>
                            <li>GitHub</li>
                            <li>Microsoft Technology Associate Certification</li>
                            <li>CompTia Cloud Essentials Certification</li>

                        </ul>


                    </div>


                </div>

            </div>


        )


    }

}
export default About;