import React from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const BirthdayData = [
  {
    id: 1,
    name: "Kids Theme Decoration",
    price: "₹3,999",
    rating: 104,
    imageUrl: "https://theballoonwala.com/cdn/shop/products/N1-transformed.jpg?v=1693397266"
  },
  {
    id: 2,
    name: "Balloon Arch Entrance",
    price: "₹2,500",
    rating: 88,
    imageUrl: "https://www.partyballoons-coventry.co.uk/wp-content/uploads/2021/11/Coventry-balloon-suppliers.jpg"
  },
  {
    id: 3,
    name: "Photo Booth Backdrop",
    price: "₹3,000",
    rating: 97,
    imageUrl: "https://www.brides.com/thmb/9IOlqZNvA3lcZiobxFVDEqzd6TM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/diy-photo-booth-draping-laura-memory-7691ff550c2544acac2d2e7af20d0e95.jpg"
  },
  {
    id: 4,
    name: "First Birthday Theme",
    price: "₹4,500",
    rating: 110,
    imageUrl: "https://lifeinmomjeans.com/wp-content/uploads/2023/07/735aa-limj-wild-one-party-photos-72.jpg?w=1024"
  },
  {
    id: 5,
    name: "Teen Birthday Setup",
    price: "₹5,200",
    rating: 69,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-TJ2AGZn0rQAesM-6L0-0tTwdXolCZ5Fqg&s"
  },
  {
    id: 6,
    name: "Custom LED Stage",
    price: "₹6,800",
    rating: 83,
    imageUrl: "https://sc04.alicdn.com/kf/H56b47a8640244173997d6d93c9c443450.jpg"
  }
];

const BirthdayProducts = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleEnquireClick = (product) => {
    setSelectedProduct(product);
    setModalShow(true);
  };

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Birthday Party Decorations</h2>
      <Row>
        {BirthdayData.map((item) => (
          <Col lg={3} md={4} sm={6} key={item.id} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={item.imageUrl}
                alt={item.name}
                className="product-image"
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <Card.Text>{`Rating: ${item.rating}`}</Card.Text>
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={() => handleEnquireClick(item)}
                >
                  Enquire
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedProduct && (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          product={selectedProduct}
        />
      )}
    </Container>
  );
};

export default BirthdayProducts;

// Modal
function MyVerticallyCenteredModal({ show, onHide, product }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enquire about: {product.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Call or WhatsApp:</strong> +91 6362785854</p>
        <p><strong>Follow us on:</strong>
          <a href="https://www.instagram.com/chandflowersanddecorations" className='mx-3'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com/@Syedvlogs_2030">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
