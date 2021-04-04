import React, { Component } from 'react';
import "./about.css";
import jozeif from "../../Images/jozeifwbw.png";
import {Tile}from 'carbon-components-react'


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
                  

                {/* <h2 style={{textAlign:'left',color:'white'}}>Front End</h2> */}
                    <Tile className="skillsect-card">
                        
                        <ul id="skillsect-list" >
                            <li>React</li>
                            <li>Redux</li>
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </Tile>

                     <div style={{width:'1rem'}}></div>
                    <Tile className="skillsect-card--1">
                        {/* <h2>Back End</h2> */}
                        <ul id="skillsect-list" >
                            
                            <li>ExpressJS</li>
                            <li>NodeJS</li>
                            <li>Spring Boot</li>
                            <li>Android(Java)</li>
                        </ul>
                    </Tile>
                    <div style={{width:'1rem'}}></div>
                    <Tile className="skillsect-card--2">
                        {/* <h2>Back End</h2> */}
                        <ul id="skillsect-list" >
                            <li>MongoDB</li>
                            <li>MySQL</li>
                          
                        </ul>
                    </Tile>
                   


                </div>

            </div>


        )


    }

}
export default About;