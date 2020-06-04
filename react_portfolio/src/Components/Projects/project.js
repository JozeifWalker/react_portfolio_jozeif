import React, { Component } from 'react';
import { Link } from "react-router-dom";
import drone from "../../Images/dronewebapp.PNG"
import f3c from "../../Images/f3c.PNG"
import mern from "../../Images/mern.PNG"
import galaxy from "../../Images/galaxy.PNG"
import dashboard from "../../Images/rapiddisc.PNG"
import './project.css'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

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
                        <BackSide
                            style={{ backgroundColor: '#175852' }}> Stuff

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
                            <img src={dashboard} width="100%" height="auto" alt='dashboard' />
                            <p>Tap For Details</p>
                        </FrontSide>
                        <BackSide
                            style={{ backgroundColor: '#175852' }}> Stuff

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
                            <img src={mern} width="100%" height="auto" alt='login screen' />
                            <p>Tap For Details</p>
                        </FrontSide>
                        <BackSide
                            style={{ backgroundColor: '#175852' }}> Stuff

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
                            style={{ backgroundColor: '#175852' }}> Stuff

                        </BackSide>
                    </Flippy>
                </div>



            </div>


        );
    }
}
export default Project;