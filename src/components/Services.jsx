import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/styles.css';

const Services = () => {
  return (
    <Container>
      {/* Row for service cards */}
      <Row>
        {/* First Card - Private Label */}
        <Col md={3}>
          <Card className="service-card mt-5">
            <Card.Body>
              <Card.Title>Private Label</Card.Title>
              <Card.Text>
                As a leading private label manufacturer, we offer full support to our partners in developing high-quality cosmetic products with clear USPs under your own brand...
              </Card.Text>
              <Button variant="link" className="read-more">Read More</Button>
            </Card.Body>
            <div className="image-container">
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/736x/72/35/d4/7235d4b32ad9cff8134be9bb4022a799.jpg"
                className="half-circle-image"
              />
            </div>
          </Card>
        </Col>

        {/* Second Card - Contract Manufacturing */}
        <Col md={3}>
          <Card className="service-card mt-5">
            <Card.Body>
              <Card.Title>Contract Manufacturing</Card.Title>
              <Card.Text>
                Looking to contract out part of the cosmetic production? We are ready to take complete ownership of your manufacturing requirements...
              </Card.Text>
              <Button variant="link" className="read-more">Read More</Button>
            </Card.Body>
            <div className="image-container">
            <Card.Img variant="bottom" src="https://i.pinimg.com/736x/72/35/d4/7235d4b32ad9cff8134be9bb4022a799.jpg" />
            </div>
          </Card>
        </Col>

        {/* Third Card - Custom Formulation */}
        <Col md={3}>
          <Card className="service-card mt-5">
            <Card.Body>
              <Card.Title>Custom Formulation</Card.Title>
              <Card.Text>
                If you have a concept for a custom personal care product, our team of qualified chemists can create a formulation tailored to meet your needs...
              </Card.Text>
              <Button variant="link" className="read-more">Read More</Button>
            </Card.Body>
            <div className="image-container">
            <Card.Img variant="bottom" src="https://i.pinimg.com/736x/72/35/d4/7235d4b32ad9cff8134be9bb4022a799.jpg" />
            </div>
          </Card>
        </Col>

        {/* Fourth Card - Customized Packaging */}
        <Col md={3}>
          <Card className="service-card mt-5">
            <Card.Body>
              <Card.Title>Customized Packaging</Card.Title>
              <Card.Text>
                We offer the industry’s most comprehensive cosmetics packaging solutions. Our expertise ensures the complete protection of your product...
              </Card.Text>
              <Button variant="link" className="read-more">Read More</Button>
            </Card.Body>
            <div className="image-container">
            <Card.Img variant="bottom" src="https://i.pinimg.com/736x/72/35/d4/7235d4b32ad9cff8134be9bb4022a799.jpg" />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Footer text */}
      <Row className="fooText text-center mt-5">
        <Col>
          <h3>Together, we can build a healthier</h3> <h3>world for future generations.</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
