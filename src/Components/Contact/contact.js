import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import "./contact.css";

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h1>Contact</h1>
                <h2 style={{ padding: '10px', textAlign: 'center' }}>If you're ready to work together, reach out</h2>
                <Form >
                    <Form.Row style={{ padding: '15px' }}>
                        <Form.Group controlId="firstName" style={{ width: '40vw' }}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="string" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group controlId="lastName" style={{ width: '40vw' }}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="string" placeholder="Last Name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                     Comments
                    <InputGroup style={{ width: '100vw', height: '20vh', padding: '15px' }}>
                        <FormControl as="textarea" />
                    </InputGroup>
                    <br></br>
                    <Button variant="primary" type="submit">
                        Submit
                     </Button>
                </Form>
            </div >
        )
    }
} export default Contact;