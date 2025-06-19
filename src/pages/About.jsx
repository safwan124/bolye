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
            <h2>Discover Chand Flower & Decroations</h2>
            <hr className="line" />
          </div>
          <h4 className="offer-title mt-4">WHAT WE OFFER:</h4>
        </Col>
      </Row>

      {/* Row for the content */}
      <Row>
        <Col className="mx-auto">
          <p className="" >
          At <span className="bold-text">Chand Flower & Decorations (CFD)</span>,  we believe that every celebration deserves to be unforgettable. With a passion for floral artistry and event aesthetics, CFD has emerged as a trusted partner in transforming ordinary moments into extraordinary experiences. We specialize in end-to-end event decoration services, tailored to bring elegance, charm, and vibrance to every occasion. Whether you're planning a wedding, birthday party, corporate event, or an intimate gathering, our creative team ensures every detail reflects your vision with style and precision.
          </p>
        </Col>
      </Row>
      <Services />
    </Container>
  );
};

export default AboutUs;