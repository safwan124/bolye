import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import { Container } from 'react-bootstrap';

function Process() {
  return (
    <Container>
       <div className="Process">
      {/* Statistics Section */}
      <section className="statistics-section text-center py-5">
        <div className="container">
          <div className="row">
            <img src='./client.png' alt='client' />
          </div>
        </div>
      </section>

      {/* Product Development Cycle Section */}
      <section className="product-cycle-section text-center py-5">
        <div className="container">
          <h2 className="mb-5">Product Development Cycle</h2>
          <div className="product-cycle">
            <img src="./cycle.png" alt="process" />
          </div>
        </div>
      </section>
    </div>
    </Container>
  );
}

export default Process;
