import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./about.css";
import jozeif from "../../Images/jozeifwbw.png";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { GrReactjs as ReactIcon } from "react-icons/gr"
import { AiOutlineHtml5 as Html } from "react-icons/ai";
import { IoLogoCss3 as CSS } from "react-icons/io";
import { FaJava as Java } from "react-icons/fa";
import { GrMysql as MYSQL } from "react-icons/gr";
import { FaNodeJs as NodeIcon } from "react-icons/fa";
import { DiMongodb as MongoIcon } from "react-icons/di";
import { FcAndroidOs as AndroidIcon } from "react-icons/fc";
import android from "../../Images/android.png";
import java from "../../Images/java.png"
import nodejs from "../../Images/nodejstransparent.png"
import react from "../../Images/reacttransparent.png"
import mysql from "../../Images/mysqltransparent.png"
import mongo from "../../Images/mongodbtransparent.png"

class About extends Component {
    render() {
        return (
            <div className="aboutme">
                <div className="aboutme-wrapper">
                    <img src={jozeif} width="400px" height="400px"></img>
                    <p> <span className="aboutme-wrapper-header">Jozeif Walker</span>
                        <br></br><span className="aboutme-wrapper-secondHeader">I'm an Application Developer at IBM from Lawrenceville,GA.</span>
                        <br></br>Whether it's a mobile app or website, native or hybrid, enterprise or personal an exciting journey of discovery,creativity and innovation  awaits.
                    <br></br>Let's work together!</p>
                </div>
                <div className="skillSection">
                    <h3 className="skillTitle">Skills</h3>
                    <div className="skillCards">

                        {/* Start  of MongoDB Card */}
                        <Flippy className="skillCard1"
                            flipOnHover={true} // default false
                            flipOnClick={false} // default false
                            flipDirection="vertical" // horizontal or vertical
                            ref={(r) => this.flippy = r}
                            style={{ height: '225px', width: '225px' }} >
                            <FrontSide
                                style={{ backgroundColor: '#257817', color: 'white', textAlign: 'center' }}>
                                <h4>MongoDB</h4>
                                <img src={mongo} width="200px" height="170px"></img>
                            </FrontSide>
                            <BackSide
                                style={{ backgroundColor: 'rgba(22, 22, 22, 1.0)', color: 'white' }}>
                                <p>MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
                                </p>
                            </BackSide>
                        </Flippy>
                        {/* End of MongoDB Card */}

                        <Flippy
                            flipOnHover={true} // default false
                            flipOnClick={false} // default false
                            flipDirection="vertical" // horizontal or vertical
                            ref={(r) => this.flippy = r}
                            style={{ height: '225px', width: '225px' }} >
                            <FrontSide
                                style={{ backgroundColor: '#c7bb33', color: 'white', textAlign: 'center' }}>
                                <h4>ExpressJS</h4>

                            </FrontSide>
                            <BackSide
                                style={{ backgroundColor: 'rgba(22, 22, 22, 1.0)', color: 'white' }}>
                                <p>Express.js, or simply Express, is a web application framework for Node.js.
                                     It is designed for building web applications and APIs.</p>
                            </BackSide>
                        </Flippy>

                        <Flippy
                            flipOnHover={true} // default false
                            flipOnClick={false} // default false
                            flipDirection="vertical" // horizontal or vertical
                            ref={(r) => this.flippy = r}
                            style={{ height: '225px', width: '225px' }} >
                            <FrontSide
                                style={{ backgroundColor: '#00000', color: '#48c9b8', textAlign: 'center' }}>
                                <h4>ReactJS</h4>
                                <img src={react} width="200px" height="170px"></img>
                            </FrontSide>
                            <BackSide
                                style={{ backgroundColor: 'rgba(22, 22, 22, 1.0)', color: 'white' }}>
                                <p>React is an open-source JavaScript library for building user interfaces.
                                   React can be used as a base in the development of single-page or mobile applications</p>
                            </BackSide>
                        </Flippy>

                        <Flippy
                            flipOnHover={true} // default false
                            flipOnClick={false} // default false
                            flipDirection="vertical" // horizontal or vertical
                            ref={(r) => this.flippy = r}
                            style={{ height: '225px', width: '225px' }} >
                            <FrontSide
                                style={{ backgroundColor: 'rgba(22, 22, 22, 1.0)', color: 'white', textAlign: 'center' }}>
                                <h4>NodeJS</h4>
                                <img src={nodejs} width="200px" height="170px"></img>
                            </FrontSide>
                            <BackSide
                                style={{ backgroundColor: 'rgba(22, 22, 22, 1.0)', color: 'white' }}>
                                <p>Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.</p>
                            </BackSide>
                        </Flippy>

                        <Flippy
                            flipOnHover={true} // default false
                            flipOnClick={false} // default false
                            flipDirection="vertical" // horizontal or vertical
                            ref={(r) => this.flippy = r}
                            style={{ height: '225px', width: '225px' }} >
                            <FrontSide
                                style={{ backgroundColor: '#00000', color: 'red', textAlign: 'center' }}>
                                <h4>Java</h4>
                                <img src={java} width="200px" height="170px"></img>
                            </FrontSide>
                            <BackSide
                                style={{ backgroundColor: 'rgba(22, 22, 22, 1.0)', color: 'white' }}>
                                <p>Java is a general-purpose programming language that is class-based, object-oriented,
                                         and designed to have as few implementation dependencies as possible</p>
                            </BackSide>
                        </Flippy>

                        <Flippy
                            flipOnHover={true} // default false
                            flipOnClick={false} // default false
                            flipDirection="vertical" // horizontal or vertical
                            ref={(r) => this.flippy = r}
                            style={{ height: '225px', width: '225px' }} >
                            <FrontSide className="androidCard"
                                style={{ textAlign: 'center', backgroundColor: '#00000', color: 'green' }}>
                                <h4>Android</h4>
                                <img src={android} width="185px" height="170px"></img>
                            </FrontSide>
                            <BackSide
                                style={{ backgroundColor: 'rgba(22, 22, 22, 1.0)', color: 'white' }}>
                                <p>Android is a mobile operating system
                                   designed primarily for touchscreen mobile devices such as smartphones and tablets</p>
                            </BackSide>
                        </Flippy>

                        <Flippy
                            flipOnHover={true} // default false
                            flipOnClick={false} // default false
                            flipDirection="vertical" // horizontal or vertical
                            ref={(r) => this.flippy = r}
                            style={{ height: '225px', width: '225px' }} >
                            <FrontSide
                                style={{ backgroundColor: '#00000', color: '#314cff', textAlign: 'center' }}>
                                <h4>MySQL</h4>
                                <img src={mysql} width="200px" height="170px"></img>
                            </FrontSide>
                            <BackSide
                                style={{ backgroundColor: 'rgba(22, 22, 22, 1.0)', color: 'white' }}>
                                <p>MySQL is an open-source relational database management system.</p>
                            </BackSide>
                        </Flippy>

                    </div>
                </div>


            </div>


        )


    }

}
export default About;