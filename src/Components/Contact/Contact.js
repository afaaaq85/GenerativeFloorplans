import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../../assets/img/contact-img.svg'
import './Contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_inhheko', 'template_3ai0p3j', form.current, 'wTHoD0ncQrRJ8yA8I')
            .then((result) => {
                console.log(result.text);
                console.log('Message sent!')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className='contact' id='contact'>

            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='Contact Us' />
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' placeholder='First Name' name="user_name" />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' placeholder='Last Name' />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' placeholder='Email Address' name="user_email"/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' placeholder='Phone' />
                                </Col>
                                <Col>
                                    <textarea row='6' placeholder="Message" name='message'/>
                                    <button type='submit'><span>Send</span></button>
                                </Col>

                            </Row>

                        </form>
                    </Col>
                </Row>

            </Container>

        </section>
    )
}

export default Contact