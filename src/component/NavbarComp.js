import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarComp() {
  return (
    <div>
      
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="/">Stones Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Nav.Link href="/" className='text-light'>Home</Nav.Link>
            <Nav.Link href="/about" className='text-light'>About Us</Nav.Link>
            <Nav.Link href="/contact" className='text-light'>Contact Us</Nav.Link>

            {/* <Nav.Link href="/contact">
            Contact Us
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
 
  )
}

export default NavbarComp
