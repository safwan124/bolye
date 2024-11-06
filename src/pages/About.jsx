import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Services from '../components/Services';

const AboutUs = () => {
  return (
    <Container>
      <Row className="text-center">
        <Col>
          <div className="discover-boyle mt-3">
            <hr className="line" />
            <h2>Discover Boyle</h2>
            <hr className="line" />
          </div>
          <h4 className="offer-title mt-4">WHAT WE OFFER:</h4>
        </Col>
      </Row>

      {/* Row for the content */}
      <Row>
        <Col className="mx-auto">
          <p className="offer-text" >
          At <span className="bold-text offer-text">BOYLE LIFESCIENCE</span>, we offer innovative cosmetic solutions tailored to your brand's needs. Our range includes premium skincare, hair care, and beauty products, all crafted with high quality, ethically sourced ingredients. We provide comprehensive private labeling services to help you create a unique brand identity. Our R&D team is dedicated to developing cutting edge formulations that meet the latest beauty trends. We ensure stringent quality control to deliver safe, effective products. Partner with us for customized manufacturing solutions that elevate your brand in the competitive cosmetic market.
          </p>
        </Col>
      </Row>
      <Services />
    </Container>
  );
};

export default AboutUs;