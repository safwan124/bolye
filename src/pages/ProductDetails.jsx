import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { productData } from './products';
import '../styles/styles.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find(p => p.id === parseInt(id));

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Handle modal open and close
  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission (you can add your form submit logic here)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Quote Request:', formData);
    handleModalClose(); // Close modal after form submit
  };

  return (
    <Container className="my-5">
      {/* Back Button */}
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
        Back
      </Button>

      <Row className="product-detail">
        {/* Product Image */}
        <Col md={6} className="d-flex justify-content-center">
          <img src={product.imageUrl} alt={product.name} className="img-fluid product-detail-image" />
        </Col>

        {/* Product Information */}
        <Col md={6} className="product-detail-info">
          <h2>{product.name}</h2>
          <p className="text-muted">Price: <strong>{product.price}</strong></p>
          <p className="text-muted">Rating: <strong>{product.rating}</strong></p>
          <p className="product-description">
            Description: This is a placeholder description for {product.name}. Add a detailed description here.
          </p>
          <Button variant="primary" size="lg" onClick={handleModalOpen}>
            Get a Quote
          </Button>
        </Col>
      </Row>

      {/* Modal for Quote Form */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get a Quote for {product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Product</Form.Label>
              <Form.Control type="text" value={product.name} readOnly />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>
            <Button className="primary" type="submit">
              Submit Quote Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProductDetail;
