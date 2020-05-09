import React, { Component } from 'react';
import { Link } from "react-router-dom";
import drone from "../../Images/dronewebapp.PNG"
import f3c from "../../Images/f3c.PNG"
import mern from "../../Images/mern.PNG"
import galaxy from "../../Images/galaxy.PNG"
import './project.css'

class Project extends Component {
    render() {
        return (

            <div className="project">
                <body>
                    <h1>Projects</h1>
                    <div class="cards">
                        <div class="mdc-card--outlined">
                            <div class="mdc-card__primary-action">
                                <div class="mdc-card__media mdc-card__media--16-9">
                                    <div class="mdc-card__media-content"><img src={drone} width="100%" height="auto" alt='drone inventory'></img>Drone Inventory Tracker</div>
                                </div>
                                <div class="mdc-card__actions">
                                    <div class="mdc-card__action-buttons">
                                        <button class="mdc-button mdc-card__action mdc-card__action--button">
                                            <a href="https://github.com/JozeifWalker/Walker-Web-Development-Final-Project.git">
                                                <div class="mdc-button__ripple"></div>
                                                <span class="mdc-button__label">View Code</span>
                                            </a>
                                        </button>
                                        <button class="mdc-button mdc-card__action mdc-card__action--button">
                                            <a href="https://youtu.be/8HCpQl7tC3A">
                                                <div class="mdc-button__ripple"></div>
                                                <span class="mdc-button__label">View Demo</span>
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mdc-card--outlined">
                            <div class="mdc-card__primary-action">
                                <div class="mdc-card__media mdc-card__media--16-9">
                                    <div class="mdc-card__media-content"><img src={f3c}></img>F3C Electric Charger Finder App</div>
                                </div>
                                <div class="mdc-card__actions">
                                    <div class="mdc-card__action-buttons">
                                        <button class="mdc-button mdc-card__action mdc-card__action--button">
                                            <a href="https://github.com/JozeifWalker/Walker_Assignment6_ElectricCharging.git">
                                                <div class="mdc-button__ripple"></div>
                                                <span class="mdc-button__label">View Code</span>
                                            </a>
                                        </button>
                                        <button class="mdc-button mdc-card__action mdc-card__action--button">
                                            <a href="https://youtu.be/fjfHhE0xUvc">
                                                <div class="mdc-button__ripple"></div>
                                                <span class="mdc-button__label">View Demo</span>
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mdc-card--outlined">
                            <div class="mdc-card__primary-action">
                                <div class="mdc-card__media mdc-card__media--16-9">
                                    <div class="mdc-card__media-content"><img src={mern}></img>Employee Database</div>
                                </div>
                                <div class="mdc-card__actions">
                                    <div class="mdc-card__action-buttons">
                                        <button class="mdc-button mdc-card__action mdc-card__action--button">
                                            <a href="https://github.com/JozeifWalker/Employee-Login-and-Database.git">
                                                <div class="mdc-button__ripple"></div>
                                                <span class="mdc-button__label">View Code</span>
                                            </a>
                                        </button>
                                        <button class="mdc-button mdc-card__action mdc-card__action--button">
                                            <a href="https://youtu.be/c_YRqr9ADzQ">
                                                <div class="mdc-button__ripple"></div>
                                                <span class="mdc-button__label">View Demo</span>
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mdc-card--outlined">
                            <div class="mdc-card__primary-action">
                                <div class="mdc-card__media mdc-card__media--16-9">
                                    <div class="mdc-card__media-content"><img src={galaxy}></img>Our Solar System</div>
                                </div>
                                <div class="mdc-card__actions">
                                    <div class="mdc-card__action-buttons">
                                        <button class="mdc-button mdc-card__action mdc-card__action--button">
                                            <a href="https://github.com/JozeifWalker/Capstone-Project-Our-Solar-System.git">
                                                <div class="mdc-button__ripple"></div>
                                                <span class="mdc-button__label">View Code</span>
                                            </a>
                                        </button>
                                        <button class="mdc-button mdc-card__action mdc-card__action--button">
                                            <a href="https://youtu.be/0k6wHxbi8Z8">
                                                <div class="mdc-button__ripple"></div>
                                                <span class="mdc-button__label">View Demo</span>
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </div>

        );
    }
}
export default Project;