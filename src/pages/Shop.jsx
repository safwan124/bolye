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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6gTr3Cve0x0kmBLDfLB1LIV3i_wlCnJKBi5z7o6-jkFczN5UzFDvf9KOOuj_s6zhqbU&usqp=CAU"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6gTr3Cve0x0kmBLDfLB1LIV3i_wlCnJKBi5z7o6-jkFczN5UzFDvf9KOOuj_s6zhqbU&usqp=CAU"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6gTr3Cve0x0kmBLDfLB1LIV3i_wlCnJKBi5z7o6-jkFczN5UzFDvf9KOOuj_s6zhqbU&usqp=CAU"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6gTr3Cve0x0kmBLDfLB1LIV3i_wlCnJKBi5z7o6-jkFczN5UzFDvf9KOOuj_s6zhqbU&usqp=CAU"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6gTr3Cve0x0kmBLDfLB1LIV3i_wlCnJKBi5z7o6-jkFczN5UzFDvf9KOOuj_s6zhqbU&usqp=CAU"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6gTr3Cve0x0kmBLDfLB1LIV3i_wlCnJKBi5z7o6-jkFczN5UzFDvf9KOOuj_s6zhqbU&usqp=CAU"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6gTr3Cve0x0kmBLDfLB1LIV3i_wlCnJKBi5z7o6-jkFczN5UzFDvf9KOOuj_s6zhqbU&usqp=CAU"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6gTr3Cve0x0kmBLDfLB1LIV3i_wlCnJKBi5z7o6-jkFczN5UzFDvf9KOOuj_s6zhqbU&usqp=CAU"
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
