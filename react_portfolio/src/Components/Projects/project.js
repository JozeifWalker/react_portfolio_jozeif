import React, { Component } from 'react';
import './project.css'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import creativephotography from '../../Images/Home.PNG';

class Project extends Component {
    render() {
        return (

            <div className="project">
                <div className=" project-title-bar">
                    <h1>Projects</h1>
                </div>


                <Tabs defaultActiveKey="Client Projects" id="uncontrolled-tab-example">
                    <Tab eventKey="Client Projects" title="Client Projects">
                        <div className="myInfoCard--client" >







                            <MDBCol >
                                <MDBCard style={{ backgroundColor: '#262626', color: 'white' }} narrow  >
                                    <MDBCardImage className="img-fluid" src={creativephotography} alt=" Creative Equations Photography Website" waves />
                                    <MDBCardBody style={{ height: 'auto' }} >
                                        <MDBCardTitle>Creative Equations Photography</MDBCardTitle>
                                        <MDBCardText>
                                            Creative Equations Photography is a website built for a small business which specializes in photography. Based in San Antonio,Texas.
                                            Built in ReactJS
                                           </MDBCardText>

                                        <MDBBtn href="https://priceless-bassi-c10403.netlify.app/" target="_blank">View Site</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                        </div>
                    </Tab>
                    <Tab eventKey="Personal Projects" title="Personal Projects">
                        <div className="myInfoCard">


                            <MDBCol>
                                <MDBCard style={{ backgroundColor: '#262626', color: 'white' }} >
                                    <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1495764506633-93d4dfed7c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" waves />
                                    <MDBCardBody>
                                        <MDBCardTitle>Drone Inventory Tracker</MDBCardTitle>
                                        <MDBCardText style={{ color: "white", fontSize: '18px' }}>
                                            Full Stack web application drone inventory tracker.
                                            Allows logged in users to perform CRUD operations within the dashboard.
          </MDBCardText>
                                        <MDBBtn style={{ bottom: 0, position: 'relative' }} href="https://youtu.be/8HCpQl7tC3A" target="_blank">View Demo</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol>
                                <MDBCard style={{ backgroundColor: '#262626', color: 'white' }} >
                                    <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" waves />
                                    <MDBCardBody>
                                        <br></br>

                                        <MDBCardTitle>Employee Login and Database</MDBCardTitle>
                                        <MDBCardText style={{ color: "white", fontSize: '18px' }}>
                                            Allows a user to login or either register as a user to perform CRUD operations through the UI.
          </MDBCardText>
                                        <br></br>



                                        <MDBBtn style={{ bottom: 0, position: 'relative' }} href="https://youtu.be/8HCpQl7tC3A" target="_blank">View Demo</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol>
                                <MDBCard style={{ backgroundColor: '#262626', color: 'white' }} >
                                    <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1594446545939-a34b083e9a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" waves />
                                    <MDBCardBody>
                                        <MDBCardTitle>Electric Charger Locator</MDBCardTitle>
                                        <MDBCardText style={{ color: 'white', fontSize: '18px' }}>
                                            Application that utilizes makes RESTful calls to the Chargepoint.net API that returns data and render an updated list
                                            with the available chargers, location of the chargers, and the timestamp that the data was accessed from the server.
          </MDBCardText>
                                        <MDBBtn style={{ bottom: 0, position: 'relative' }} href="https://youtu.be/fjfHhE0xUvc" target="_blank">View Demo</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </div>
                    </Tab>


                </Tabs>






            </div >


        );
    }
}
export default Project;