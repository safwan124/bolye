import React from 'react';
import '../styles/styles.css';
import { Col, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="contact px-3">
        <div className="quote text-center">
            <h1 className='py-5'>The best things in life are cruelty free</h1>
        </div>
        <Row className=' my-5'>
            <Col className='text-center'>
            <p>Together, we can build a healthier<br/> 
            world for future generations.</p>
            </Col>
            <Col>
            <p>Join our community of friends and families committed to the health of the next seven<br /> 
            generations. Product news, special offers, ways to make an impact, and so much more.</p>
            <div className="email-form">
                <input type="email" placeholder="Your email" className="email-input"/>
                <button type="submit" className="submit-btn">Submit</button>
            </div>
            </Col>
        </Row>
    </div>
  );
};

export default Contact;
