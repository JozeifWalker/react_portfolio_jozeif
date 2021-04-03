import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="mylanding">


                <div className="landing-title">

                    <h1>DEVELOPER.</h1>

                    <h2>DESIGNER.</h2>

                    <h3>CREATOR.</h3>

                    <Button style={{ bottom: '0', position: 'absolute', alignSelf: 'center' }} variant="primary" href="/projects">View Projects</Button>

                </div>




            </div>

        );
    }
}
export default Home;