import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-content text-center">
          {/* Company Info */}
          <Col md={5}>
              <img
                src='./Chand_Flower___Decorations_Logo-removebg-preview.png'
                className="foo-image"
              />
          </Col>
          <Col md={3} className="company-info mt-3">
          {/* <h3>Contact-Us</h3> */}
            <p>
              Chand Flower & Decroations.<br />
              NO: 73, Syed Abdul Rahman Road,<br />
              RajivNagar 2nd Stage,<br />
              Mysuru - 570019
            </p>
          </Col>
          <Col md={3} className="social-links text-center mt-3">
            <p>Follow Us</p>
            <a href="https://wa.me/916362785854" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="https://www.instagram.com/syedshoaib6362/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.youtube.com/@Syedvlogs_2030"><FontAwesomeIcon icon={faYoutube} /></a>
          </Col>
        </Row>
      </Container>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center">
      <p>@ 2025 cfdmysuru.com. All rights reserved.</p>
        <p>Designed by dealitsolutions.com</p>
      </div>
    </footer>
  );
};

export default Footer;
