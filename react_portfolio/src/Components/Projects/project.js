import React, { Component } from 'react';
import { Link } from "react-router-dom";
import drone from "../../Images/dronewebapp.PNG"
import f3c from "../../Images/f3c.PNG"
import mern from "../../Images/mern.PNG"
import galaxy from "../../Images/galaxy.PNG"
import dashboard from "../../Images/rapiddisc.PNG"
import './project.css'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { AiOutlineHtml5 as Html } from "react-icons/ai";
import { IoLogoCss3 as CSS } from "react-icons/io";
import { FaJava as Java } from "react-icons/fa";
import { GrMysql as MYSQL } from "react-icons/gr";
import { RiReactjsLine as ReactIcon } from "react-icons/ri";
import { FaNodeJs as NodeIcon } from "react-icons/fa";
import { DiMongodb as MongoIcon } from "react-icons/di";
import { FcAndroidOs as AndroidIcon } from "react-icons/fc";
import { Button } from 'carbon-components-react';
class Project extends Component {
    render() {
        return (

            <div className="project">
                <h1>Projects</h1>
                <div className="myInfoCard">
                    <Flippy className="flipCard"
                        flipOnHover={false} // default false
                        flipOnClick={true} // default false
                        flipDirection="vertical" // horizontal or vertical
                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        style={{}} /// these are optional style, it is not necessary
                    >
                        <FrontSide className="frontSide"
                            style={{
                                backgroundColor: 'rgba(22, 22, 22, 1.0)'
                            }}
                        >
                            <img src={drone} width="100%" height="auto" alt='drone inventory' />
                            <p>Tap For Details</p>
                        </FrontSide>
                        <BackSide className="backSide"
                            style={{ backgroundColor: '#852b1b', color: 'white' }}>
                            <h2 className="backSide-title">Drone Inventory Tracker</h2>
                            <p className="backSide-info">Full Stack web application drone inventory tracker.
                            Allows logged in users to perform CRUD operations within the dashboard.<br></br>
                            Front End : HTML<Html />/CSS<CSS /> <br></br>
                            Back end : Java<Java /> <br></br>
                            Database : MYSQL <MYSQL /></p>
                            <div className="demos">
                                <a href="https://github.com/JozeifWalker/Walker-Web-Development-Final-Project.git" target="_blank">View Code</a>
                                <a href="https://youtu.be/8HCpQl7tC3A" target="_blank">View Demo</a>
                            </div>



                        </BackSide>
                    </Flippy>

                    {/*<Flippy className="flipCard"
                        flipOnHover={false} // default false
                        flipOnClick={true} // default false
                        flipDirection="vertical" // horizontal or vertical
                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        style={{}} /// these are optional style, it is not necessary
                    >
                        <FrontSide className="frontSide"
                            style={{
                                backgroundColor: 'rgba(22, 22, 22, 1.0)'
                            }}
                        >
                            <img src={dashboard} width="100%" height="auto" alt='dashboard' />
                            <p>Tap For Details</p>
                        </FrontSide>
                        <BackSide
                            style={{ backgroundColor: '#175852', color: 'white' }}>
                            <h1>IBM Evolution Experience</h1>


                        </BackSide>
                        </Flippy>*/}

                    <Flippy className="flipCard"
                        flipOnHover={false} // default false
                        flipOnClick={true} // default false
                        flipDirection="vertical" // horizontal or vertical
                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        style={{}} /// these are optional style, it is not necessary
                    >
                        <FrontSide className="frontSide"
                            style={{
                                backgroundColor: 'rgba(22, 22, 22, 1.0)'
                            }}
                        >
                            <img src={mern} width="100%" height="auto" alt='login screen' />
                            <p>Tap For Details</p>
                        </FrontSide>
                        <BackSide
                            style={{ backgroundColor: '#16296b', color: 'white' }}>
                            <h2 className="backSide-title">Employee Login and Database</h2>
                            <p className="backSide-info">Allows a user to login or either register as a user to perform CRUD operations on a database through the UI.
                                <br></br>Front End : ReactJS <ReactIcon />
                                <br></br>Back End : ExpressJS/NodeJS <NodeIcon />
                                <br></br> Database: MongoDB<MongoIcon />
                            </p>
                            <div className="demos">
                                <a href="https://github.com/JozeifWalker/Employee-Login-and-Database.git" target="_blank">View Code</a>
                                <a href=" https://youtu.be/c_YRqr9ADzQ" target="_blank">View Demo</a>
                            </div>
                        </BackSide>
                    </Flippy>

                    <Flippy className="flipCard"
                        flipOnHover={false} // default false
                        flipOnClick={true} // default false
                        flipDirection="vertical" // horizontal or vertical
                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        style={{}} /// these are optional style, it is not necessary
                    >
                        <FrontSide className="frontSide"
                            style={{
                                backgroundColor: 'rgba(22, 22, 22, 1.0)'
                            }}
                        >
                            <img src={galaxy} width="100%" height="auto" alt='login screen' />
                            <p>Tap For Details</p>
                        </FrontSide>
                        <BackSide
                            style={{ backgroundColor: '#175852', color: 'white' }}>
                            <h2 className="backSide-title">Galactic Codex</h2>
                            <p className="backSide-info">This is a mobile Android application that engages and teaches students about the wonders of the Solar System.
                            Through an interactive and engaging UI built for Android.
                            <br></br>Front End : XML
                            <br></br>Back End: Java(Android lib)<AndroidIcon /></p>
                            <div className="demos">
                                <a href="https://github.com/JozeifWalker/Capstone-Project-Our-Solar-System.git" target="_blank">View Code</a>
                                <a href="https://youtu.be/0k6wHxbi8Z8" target="_blank">View Demo</a>
                            </div>
                        </BackSide>
                    </Flippy>

                    <Flippy className="flipCard"
                        flipOnHover={false} // default false
                        flipOnClick={true} // default false
                        flipDirection="vertical" // horizontal or vertical
                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        style={{}} /// these are optional style, it is not necessary
                    >
                        <FrontSide className="frontSide"
                            style={{
                                backgroundColor: 'rgba(22, 22, 22, 1.0)'
                            }}
                        >
                            <img src={f3c} width="100%" height="auto" alt='login screen' />
                            <p>Tap For Details</p>
                        </FrontSide>
                        <BackSide
                            style={{ backgroundColor: '#16296b', color: 'white' }}>
                            <h2 className="backSide-title">Electric Charger Locator</h2>
                            <p className="backSide-info">This application utilizes RESTful API and makes GET requests that return and render an updated list
                            with the available chargers, locations of the chargers, and the timestamp that the data was accessed from the server.
                            <br></br>Front End : XML
                            <br></br>Back End: Java(Android lib)<AndroidIcon /></p>
                            <div className="demos">
                                <a href="https://github.com/JozeifWalker/Walker_Assignment6_ElectricCharging.git" target="_blank">View Code</a>
                                <a href="https://youtu.be/fjfHhE0xUvc" target="_blank">View Demo</a>
                            </div>

                        </BackSide>
                    </Flippy>
                </div>



            </div>


        );
    }
}
export default Project;