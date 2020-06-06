import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./about.css";
import jozeif from "../../Images/jozeifwbw.png";
import { GrReactjs as ReactIcon } from "react-icons/gr"
import { AiOutlineHtml5 as Html } from "react-icons/ai";
import { IoLogoCss3 as CSS } from "react-icons/io";
import { FaJava as Java } from "react-icons/fa";
import { GrMysql as MYSQL } from "react-icons/gr";
import { FaNodeJs as NodeIcon } from "react-icons/fa";
import { DiMongodb as MongoIcon } from "react-icons/di";
import { FcAndroidOs as AndroidIcon } from "react-icons/fc";



class About extends Component {
    render() {
        return (
            <div className="aboutme">
                <div className="aboutme-wrapper">
                    <h2>About</h2>
                    <img src={jozeif} width="400px" height="400px"></img>
                    <p> <span>Jozeif Walker</span>
                        <br></br> Application Developer at IBM
                    <br></br>Whether it's a mobile app or website, enterprise or personal an exciting journey awaits.
                    <br></br>Let's work together!</p>
                    <h3 className="skillTitle">Skills</h3>
                    <br></br>
                    <h4>MongoDB<MongoIcon className="reactIC" /></h4>
                    <h4>ExpressJS</h4>
                    <h4>ReactJS<ReactIcon className="reactIc" /></h4>

                </div>
            </div>

        )


    }

}
export default About;