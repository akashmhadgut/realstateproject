import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <>
      <Navbar expand="lg"fixed="top" style={{ backgroundColor: 'white' ,zIndex:'1000' }} data-bs-theme="light" className="shadow-sm ">
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand href="#home" className="mt-2 mb-2 me-56">
            <img src="/image.png" width="100" alt="LODHA" />
          </Navbar.Brand>

          {/* Toggle Button (for mobile) */}
           <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end" // 👈 this makes it open from the LEFT side
          >

            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
            <img src="/image.png" width="100" alt="LODHA" />
              </Offcanvas.Title>
            </Offcanvas.Header>
          
          {/* Collapsible Nav Items */}
          <Offcanvas.Body id="basic-navbar-nav" >
            <Nav className="navlist me-auto  ms-10 gap-4 font-normal" style={{ fontSize: '17px' }}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#price">Price</Nav.Link>
              <Nav.Link href="#floor">Site & Floor Plan</Nav.Link>
              <Nav.Link href="#amenities">Amenities</Nav.Link>
              <Nav.Link href="#location">Location</Nav.Link>
              <Nav.Link href="#visit">Virtual Site Visit</Nav.Link>
            </Nav>
          </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
