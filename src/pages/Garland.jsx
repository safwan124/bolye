import React from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const BouquetData = [
  {
    id: 1,
    name: "Rose Bouquet - Red Passion",
    price: "₹799",
    rating: 127,
    imageUrl: "https://www.fnp.com/images/pr/l/v20221109185604/red-passion-rose-bouquet_2.jpg"
  },
  {
    id: 2,
    name: "Orchid Elegance Garland",
    price: "₹1,299",
    rating: 104,
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/9/CI/DT/WQ/32786584/white-orchid-embedded-with-purple-flower-garland-500x500.jpg"
  },
  {
    id: 3,
    name: "Mixed Flower Bunch",
    price: "₹999",
    rating: 92,
    imageUrl: "https://www.kolkataonlineflorists.com/images/FLH567_big.webp"
  },
  {
    id: 4,
    name: "Tulip Love Basket",
    price: "₹1,499",
    rating: 88,
    imageUrl: "https://www.bunchesbaskets.jp/product_image/31.jpg"
  },
  {
    id: 5,
    name: "Marigold Traditional Garland",
    price: "₹349",
    rating: 145,
    imageUrl: "https://urliutsav.com/cdn/shop/files/IndianGarland-Marigold2.jpg?v=1739786223"
  },
  {
    id: 6,
    name: "Jasmine & Rose Garland",
    price: "₹899",
    rating: 98,
    imageUrl: "https://flowerfashionindia.com/wp-content/uploads/2022/02/jasmine-garlands.png"
  }
];

const BouquetProducts = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleEnquireClick = (product) => {
    setSelectedProduct(product);
    setModalShow(true);
  };

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Bouquets & Garlands</h2>
      <Row>
        {BouquetData.map((item) => (
          <Col lg={3} md={4} sm={6} key={item.id} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={item.imageUrl}
                alt={item.name}
                className="product-image"
              />
              <Card.Body>
                <Card.Title className='mb-3'>{item.name}</Card.Title>
                {/* <Card.Text>{item.price}</Card.Text>
                <Card.Text>{`Rating: ${item.rating}`}</Card.Text> */}
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

export default BouquetProducts;

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
