import { Navbar, Nav, Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navigation-bar mt-5">
      <Container>
        <Row className="align-items-end w-100">
          {/* First Line: Boyle */}
          <Col xs={8} md={3} className="text-left">
            <Navbar.Brand as={Link} to="/" className="navbar-brand">
              <span className="brand-line-1">Boyle</span><br />
              <span className="brand-line-2">LifeSciences</span>
            </Navbar.Brand>
          </Col>

          {/* Navigation Links */}
          <Col xs={4} md={9} className="text-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                <Nav.Link as={Link} to="/shop-now">Shop Now</Nav.Link>
                <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
                {/* <Nav.Link as={Link} to="/login">Login / Register</Nav.Link> */}
              </Nav>
              
              {/* Search Bar */}
              {/* <Form className="d-flex ml-3">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
              </Form> */}
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Navigation;
