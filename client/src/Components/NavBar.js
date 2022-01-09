import React, { useState } from 'react';
import { Navbar, Container, Nav, Form, Col, Row } from 'react-bootstrap';
import BlueElectricImage from '../BlueElectricImage.jpg';
import { SunriseFill, SunsetFill } from 'react-bootstrap-icons';

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const setMode = () => {
    let bgColor = darkMode ? 'white' : 'black';
    let fColor = darkMode ? 'black' : 'White';
    document.documentElement.style.setProperty(`--bg--color`, bgColor);
    document.documentElement.style.setProperty('--font--color', fColor);
  };

  const handleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
    setMode();
  };
  return (
    <Navbar
      expand='lg'
      bg={darkMode ? 'dark' : 'light'}
      variant={darkMode ? 'dark' : 'light'}
      sticky='top'
    >
      <Container fluid>
        <Navbar.Brand href='/'>
          <img
            src={BlueElectricImage}
            width='50'
            height='30'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/Add-Video'>Add Video</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Row>
        <Col>
          {darkMode ? (
            <SunriseFill color='white' size={30} />
          ) : (
            <SunsetFill color='dark' size={30} />
          )}
        </Col>
        <Col>
          <Form>
            <Form.Check
              color='blue'
              type='switch'
              id='custom-switch'
              label={darkMode ? 'Switch Light Mode' : 'Switch Dark Mode'}
              onClick={handleDarkMode}
            />
          </Form>
        </Col>
      </Row>
    </Navbar>
  );
};

export default NavBar;
