import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faLinkedinIn, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-content">
          {/* Company Info */}
          <Col md={6} className="navbar-brand text-center mb-5">
          <span className="brand-line-1">Boyle</span><br />
              <span className="brand-line-2">LifeSciences</span>
          </Col>
          <Col md={3} className="company-info text-center">
          <h3>Contact-Us</h3>
            <p>
              Boyle Life Sciences Pvt. Ltd.<br />
              NO: 73, Paper Mill Road,<br />
              Pillayarkuppam,<br />
              Puducherry - 607402
            </p>
          </Col>

          {/* Useful Links */}
          <Col md={3} className="footer-links text-center">
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </Col>
        </Row>

        {/* Social and Certifications */}
        <Row className="social-certifications py-5">
          <Col md={6} className="social-links text-center">
            <p>Follow Us</p>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          </Col>
          <Col md={6} className="certifications text-center">
            <p>Certifications</p>
            <img src="path-to-sgs-logo.png" alt="SGS Certification" className="cert-logo" />
            <img src="path-to-fda-logo.png" alt="FDA Certification" className="cert-logo" />
          </Col>
        </Row>
      </Container>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center">
        <p>Designed by Dealit Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;
