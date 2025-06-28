import React from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const StageVenueData = [
  {
    id: 1,
    name: "Grand Reception Stage Setup",
    price: "₹15,999",
    rating: 154,
    imageUrl: "https://cdn0.weddingwire.in/article/6077/original/1280/jpg/127706-flower-wedding-stage-decoration-1-the-wedding-experience.jpeg"
  },
  {
    id: 2,
    name: "Floral Ring Stage Decor",
    price: "₹9,999",
    rating: 129,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZxeYndU2WM_6InuIvY1sgPo9HcWj49MF1ug&s"
  },
  {
    id: 3,
    name: "LED Sangeet Stage Styling",
    price: "₹12,500",
    rating: 110,
    imageUrl: "https://jballoondecorators.in/wp-content/uploads/2025/01/LED-Screen-Wall-1.png"
  },
  {
    id: 4,
    name: "Traditional Mandap Setup",
    price: "₹17,800",
    rating: 98,
    imageUrl: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1(53).jpg"
  },
  {
    id: 5,
    name: "Patterned Backdrop Styling",
    price: "₹8,000",
    rating: 134,
    imageUrl: "https://images.meesho.com/images/products/530187896/9tkrr_512.webp"
  },
  {
    id: 6,
    name: "Indoor Venue Floral Styling",
    price: "₹7,999",
    rating: 120,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12GDNBVtLlvNxd55_Q-4eHEy4oBnMuAwBGg&s"
  }
];

const StageVenueProducts = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleEnquireClick = (product) => {
    setSelectedProduct(product);
    setModalShow(true);
  };

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Stage & Venue Styling</h2>
      <Row>
        {StageVenueData.map((item) => (
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

export default StageVenueProducts;

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
