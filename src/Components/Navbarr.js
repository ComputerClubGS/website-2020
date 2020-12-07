import React from 'react';
import {Nav, Navbar}  from 'react-bootstrap'
import {Link} from 'react-router-dom';
export default function Navbarr() {
    

    return (
        <>
                 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
<Navbar.Brand><img src="https://computerclubgs.github.io/logotp.png" width="45" height="45" className="d-inline-block align-top"  alt="React Bootstrap logo"/><Navbar.Brand>COMPUTER CLUB</Navbar.Brand></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Link to="/" className="nav-spacing">ABOUT US</Link>
      <Link to="/members" className="nav-spacing">MEMBERS</Link>
      <Link to ="/events" className="nav-spacing">EVENTS</Link>
      <Link to="/" className="nav-spacing">CONTACT US</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
    )
}
