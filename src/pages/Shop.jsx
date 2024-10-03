import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/styles.css';

const Shop = () => {
  return (
    <Container className="mt-5">
      <h2 className="CatText text-center mb-4">CATEGORIES</h2>
      <Row>
        {/* First row of categories */}
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://images.healthshots.com/healthshots/en/uploads/2023/06/15175906/Korean-skincare-1.jpg"
              alt="Face Care"
              className="img-fluid"
            />
            <div className="category-overlay">
              <h3>Face Care</h3>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://n.nordstrommedia.com/it/e6e4aad7-b933-4503-a8da-e5855e01e73a.jpeg?h=900&w=750"
              alt="Body Care"
              className="img-fluid"
            />
            <div className="category-overlay">
              <h3>Body Care</h3>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://paulaschoice.sg/cdn/shop/files/16_1000x@3x.jpg?v=1674183738"
              alt="Eye Care"
              className="img-fluid"
            />
            <div className="category-overlay">
              <h3>Eye Care</h3>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://media.istockphoto.com/id/1357956448/photo/stylish-female-model-posing-against-beige-wall.jpg?s=612x612&w=0&k=20&c=m3uiwWE8TAek9lmpkwo3LMlleHZeu31n070_RytoNwg="
              alt="Lip Care"
              className="img-fluid"
            />
            <div className="category-overlay">
              <h3>Lip Care</h3>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Second row of categories */}
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://images.healthshots.com/healthshots/en/uploads/2022/12/20170127/hair-1.jpg"
              alt="Hair Care"
              className="img-fluid"
            />
            <div className="category-overlay">
              <h3>Hair Care</h3>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://xendurance.com/cdn/shop/articles/Mens_Skincare.jpg?v=1719563309&width=1500"
              alt="Men Skin Care"
              className="img-fluid"
            />
            <div className="category-overlay">
              <h3>Men Skin Care</h3>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://www.momjunction.com/wp-content/uploads/2015/08/7-Useful-Tips-To-Take-Care-Of-Your-Two-Month-Old-Baby-1.jpg"
              alt="Baby & Kids Care"
              className="img-fluid"
            />
            <div className="category-overlay">
              <h3>Baby & Kids Care</h3>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://sneakpeektest.com/wp-content/uploads/2023/11/Pregnancy-Safe-Skin-Care-Products.jpg"
              alt="Pregnancy Skin Care"
              className="img-fluid"
            />
            <div className="category-overlay">
              <h3>Pregnancy Skin Care</h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
