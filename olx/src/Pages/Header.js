import React from 'react';
import { Navbar, Nav, Container, Row, Col, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaPlus } from 'react-icons/fa';
import carLogo from '../Images/car.png';
import propertyLogo from '../Images/Property.jpg';
import './Css/Header.css';

function Header() {
  return (
    <header className='sticky-top'>
      <div className="bg-white" expand="lg">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
                height="30"
                className="d-inline-block align-top"
                alt="OLX Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/cars" className="d-flex align-items-center">
                  <img
                    src={carLogo}
                    height="40"
                    className="d-inline-block align-top"
                    alt="Motors Logo"
                  />
                  <span className="nav-text ms-2">Motors</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/property" className="d-flex align-items-center">
                  <img
                    src={propertyLogo}
                    height="40"
                    className="d-inline-block align-top"
                    alt="Property Logo"
                  />
                  <span className="nav-text ms-2">Property</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="mt-2">
          <Row>
            <Col>
              <Form className="d-flex">
                <div className="location-input-group me-2">
                  <FaMapMarkerAlt className="location-icon" />
                  <FormControl as="select" aria-label="Location" className="location-input">
                    <option>Pakistan</option>
                    <option value="1">Karachi</option>
                    <option value="2">Lahore</option>
                    <option value="3">Islamabad</option>
                    <option value="4">Peshawar</option>
                    <option value="5">Quetta</option>
                    <option value="6">Rawalpindi</option>
                  </FormControl>
                </div>
                <InputGroup className="search-input-group">
                  <FormControl
                    type="search"
                    placeholder="Find Cars, Mobile Phones and More...."
                    className="search-input"
                    aria-label="Search"
                  />
                  <Button variant="outline-success" className="search-button">
                    <FaSearch />
                  </Button>
                </InputGroup>
              </Form>
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
              <Nav className="align-items-center">
                <Nav.Link as={Link} to="/login" className="login-link">Login</Nav.Link>
                <Nav.Link as={Link} to="#sell">
                  <Button variant="outline-primary" className="sell-button">
                    <FaPlus className="me-2" /> Sell
                  </Button>
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default Header;
