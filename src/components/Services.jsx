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
              <Card.Title>Wedding Decorations</Card.Title>
              <Card.Text>
              From mandaps to floral arches, we design timeless setups for your big day.
              </Card.Text>
              {/* <Button variant="link" className="read-more">Read More</Button> */}
            </Card.Body>
            <div className="image-container">
              <Card.Img
                variant="top"
                src="./wed1.jpg"
                className="half-circle-image"
              />
            </div>
          </Card>
        </Col>

        {/* Second Card - Contract Manufacturing */}
        <Col md={3}>
          <Card className="service-card mt-5">
            <Card.Body>
              <Card.Title>Birthday & Party Decor</Card.Title>
              <Card.Text>
              Custom-themed decorations that light up your celebrations.
              </Card.Text>
              {/* <Button variant="link" className="read-more">Read More</Button> */}
            </Card.Body>
            <div className="image-container">
            <Card.Img variant="bottom" src="./bp1.jpg" />
            </div>
          </Card>
        </Col>

        {/* Third Card - Custom Formulation */}
        <Col md={3}>
          <Card className="service-card mt-5">
            <Card.Body>
              <Card.Title>Bouquets & Garlands</Card.Title>
              <Card.Text>
              Fresh, handcrafted floral arrangements perfect for every sentiment and ceremony.
              </Card.Text>
              {/* <Button variant="link" className="read-more">Read More</Button> */}
            </Card.Body>
            <div className="image-container">
            <Card.Img variant="bottom" src="./g1.jpg" />
            </div>
          </Card>
        </Col>

        {/* Fourth Card - Customized Packaging */}
        <Col md={3}>
          <Card className="service-card mt-5">
            <Card.Body>
              <Card.Title>Stage & Venue Styling</Card.Title>
              <Card.Text>
              Aesthetic stage backdrops and venue enhancements for all types of events.
              </Card.Text>
              {/* <Button variant="link" className="read-more">Read More</Button> */}
            </Card.Body>
            <div className="image-container">
            <Card.Img variant="bottom" src="./s1.jpg" />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Footer text */}
      <Row className="fooText text-center mt-5">
        <Col>
          <h3>Driven by creativity and backed by experience,</h3> <h3>CFD is committed to delivering not just decor—but an unforgettable ambiance.</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
