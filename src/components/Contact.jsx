import React from 'react';
import '../styles/styles.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="contact p-5">
        <div className="quote text-center">
            <h1 className='py-5'>Let CFD turn your celebration into a visual masterpiece.</h1>
        </div>
            <Container className='text-center p-5'>

            <p>Be a part of something beautiful. Join our committee and help us craft unforgettable celebrations..</p>
                {/* <input type="email" placeholder="Your Number" className="email-input text-center"/>
                <button type="submit" className="submit-btn">Submit</button> */}
            <p className='p-3'>Have an event in mind? Contact us today—we're here to turn your vision into reality.</p>
            <b>call us +91 63627 85854 or Visit our phisical store <br/> <a><p>
            <FontAwesomeIcon icon={faLocation} /> Chand Flower & Decroations.<br />
              NO: 73, Syed Abdul Rahman Road,<br />
              RajivNagar 2nd Stage,<br />
              Mysuru - 570019
            </p></a></b>
            </Container>
    </div>
  );
};

export default Contact;
