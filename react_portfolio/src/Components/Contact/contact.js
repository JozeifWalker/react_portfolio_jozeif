import React, { Component } from 'react';
import {Form,TextInput,TextArea, Button} from 'carbon-components-react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css";




const goodnotify = () =>
    toast.success("Successfully Sent!", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 10000
    });
const errornotify = () =>
    toast.error("There was an Error!", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 10000

    });


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', subject: '', text: '' };
    }
    sendEmail = (e) => {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                goodnotify('success')
                this.setState({ from_name: '', from_email: '', subject: '', message_html: '' })
              
            }, (error) => {
                console.log(error.text)
                errornotify('error')

            });
    }
    handleFields = e => this.setState({ [e.target.name]: e.target.value });

    render() {

        return (
            
            <div className="contact">
                <div className="contact-title-bar">
                    <h1>Contact</h1>
                </div>
                <h2>Reach out and let's collaborate</h2>
                <div className="contact-container" >
                    
                            
                            <Form onSubmit={this.sendEmail} id="contact-form">

                               


                                    <TextInput style={{marginBottom:'3rem'}} value={this.state.from_name} onChange={this.handleFields} labelText="Name" icon="user" group type="text" validate error="wrong"
                                        success="right" name="from_name" ref="fname" required />

                                    <TextInput style={{marginBottom:'3rem'}} value={this.state.from_email} onChange={this.handleFields} labelText="Email" icon="envelope" group type="email" validate error="wrong"
                                        success="right" name="from_email" ref="email" required />

                                    <TextInput style={{marginBottom:'3rem'}} value={this.state.subject} onChange={this.handleFields} labelText="Subject" icon="tag" group type="text" validate name="subject" ref="subj" required />

                                    <TextArea value={this.state.message_html} onChange={this.handleFields} type="textarea" rows="6" labelText="Message" icon="pencil-alt" name="message_html" ref="text" required />
                                
                                <div style={{alignSelf:'flex-start',marginTop:'2rem'}}>
                                    <Button type="submit" value="Send">Submit</Button>
                                </div>
                            </Form>
                  
                </div>

            </div >
        )
    }
} export default Contact;