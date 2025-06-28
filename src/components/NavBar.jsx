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
    
    {/* Top Row */}
    <div className="d-flex justify-content-between align-items-center w-100 mb-2">
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavToggle} />
      <Navbar.Brand as={Link} to="/" className="mx-auto text-center logo-name">
        <img src="./cfdlogo.png" alt="CFD Logo" className='logo'/>
      </Navbar.Brand>
    </div>

    {/* Desktop Nav (default collapse) */}
    <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
      <Nav className="mx-auto flex-column flex-lg-row gap-0 gap-lg-5 text-start text-lg-center">
        <Nav.Link as={Link} to="/" onClick={closeNav}>Home</Nav.Link>
        <Nav.Link as={Link} to="/about-us" onClick={closeNav}>About Us</Nav.Link>
        <Nav.Link as={Link} to="/shop-now" onClick={closeNav}>Shop Now</Nav.Link>
        <Nav.Link as={Link} to="/contact-us" onClick={closeNav}>Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>

    {/* Mobile Drawer */}
    <div className={`custom-drawer d-lg-none ${!isNavCollapsed ? 'open' : ''}`}>
      <Nav className="flex-column gap-3 text-start px-3" onClick={closeNav}>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
        <Nav.Link as={Link} to="/shop-now">Shop Now</Nav.Link>
        <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
      </Nav>
    </div>

  </Container>
</Navbar>

  );
};

export default Navigation;
