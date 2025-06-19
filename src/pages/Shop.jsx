import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/styles.css';

const Shop = () => {
  return (
    <Container className="mt-5">
      <h2 className="CatText text-center mb-4">Pick Their Fav Flowers</h2>
      <Row>
        {/* First row of categories */}
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://blacktulipflowers.in/wp-content/uploads/2022/11/10-Red-Roses-Bouquet-1.png"
              alt="Face Care"
              className="img-fluid"
            />
            <div className="category-overlay">
            <h3>Roses</h3>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://m.media-amazon.com/images/I/61oocbMpQML._AC_UF1000,1000_QL80_.jpg"
              alt="Body Care"
              className="img-fluid"
            />
            <div className="category-overlay">
              <h3>Tulips</h3>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/8c914e30-7b32-459a-a5bb-b16d44ed55c0.jpeg?crop=0.667xw:1xh;0.167xw,0xh&resize=1120:*"
              alt="Eye Care"
              className="img-fluid"
            />
            <div className="category-overlay">
              <h3>Orchids</h3>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://incenseomega.com/cdn/shop/articles/omega-blog11-Jasmine-incense-sticks-benefits-1.jpg?v=1707201886"
              alt="Lip Care"
              className="img-fluid"
            />
            <div className="category-overlay">
              <h3>Jasmine</h3>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Second row of categories */}
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://5.imimg.com/data5/BI/RT/MY-30742137/lily-flowers.jpg"
              alt="Hair Care"
              className="img-fluid"
            />
            <div className="category-overlay">
              <h3>Lily</h3>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://cdn.mos.cms.futurecdn.net/JpM9niB9yuqs6AU6V8gqW6.jpg"
              alt="Men Skin Care"
              className="img-fluid"
            />
            <div className="category-overlay">
              <h3>Gerberas</h3>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://images-cdn.ubuy.co.in/633ff27512fe1a32f964d6b6-deluxe-size-gift-6-months-of-luxe.jpg"
              alt="Baby & Kids Care"
              className="img-fluid"
            />
            <div className="category-overlay">
              <h3>Luxe</h3>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <div className="category-item">
            <img
              src="https://images.pexels.com/photos/539694/pexels-photo-539694.jpeg?cs=srgb&dl=pexels-diego-madrigal-162471-539694.jpg&fm=jpg"
              alt="Pregnancy Skin Care"
              className="img-fluid"
            />
            <div className="category-overlay">
              <h3>Lotus</h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
