import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import BlueElectricImage from '../BlueElectricImage.jpg';
const NavBar = () => {
  return (
    <Navbar expand='lg' bg='dark' variant='dark' sticky='top'>
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
    </Navbar>
  );
};

export default NavBar;
