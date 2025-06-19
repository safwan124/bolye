import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Navigation = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNav = () => {
    setIsNavCollapsed(true);
  };

  return (
    <Navbar expand="lg" className="navigation-bar mt-3" expanded={!isNavCollapsed}>
      <Container className="flex-column align-items-stretch">
        
        {/* Top Row: Toggle Left, Brand Right */}
        <div className="d-flex justify-content-between align-items-center w-100 mb-2">
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavToggle} />

          <Navbar.Brand as={Link} to="/" className="mx-auto text-center logo-name">
            CHAND FLOWER & DECORATIONS
          </Navbar.Brand>
        </div>

        {/* Nav Links Centered Below */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto flex-column flex-lg-row gap-0 gap-lg-5 text-center" onClick={closeNav}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
            <Nav.Link as={Link} to="/shop-now">Shop Now</Nav.Link>
            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Navigation;
