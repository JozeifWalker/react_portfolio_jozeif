import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
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
        emailjs.sendForm('jozeifgmail', 'template_j9EjEkVX', e.target, 'user_0IPhnqmLu1gsu74o3OgQK')
            .then((result) => {
                goodnotify('success')
                this.setState({ from_name: '', from_email: '', subject: '', message_html: '' })
                console.log("Nice")
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

                <MDBContainer>
                    <MDBRow>
                        <MDBCol style={{ margin: '30px 0px' }} lg="12">
                            <form onSubmit={this.sendEmail} id="contact-form">
                                <p className="h5 text-center mb-4">Let's Work Together</p>
                                <div className="grey-text">

                                    <MDBInput value={this.state.from_name} onChange={this.handleFields} label="Name" icon="user" group type="text" validate error="wrong"
                                        success="right" name="from_name" ref="fname" required />

                                    <MDBInput value={this.state.from_email} onChange={this.handleFields} label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                        success="right" name="from_email" ref="email" required />

                                    <MDBInput value={this.state.subject} onChange={this.handleFields} label="Subject" icon="tag" group type="text" validate name="subject" ref="subj" required />

                                    <MDBInput value={this.state.message_html} onChange={this.handleFields} type="textarea" rows="6" label="Your message" icon="pencil-alt" name="message_html" ref="text" required />
                                </div>
                                <div className="text-center">
                                    <MDBBtn type="submit" value="Send">Submit</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </div >
        )
    }
} export default Contact;