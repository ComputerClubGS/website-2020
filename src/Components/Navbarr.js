import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Navbarr() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>
          <img
            src="https://computerclubgs.github.io/logotp.png"
            width="45"
            height="45"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Navbar.Brand>COMPUTER CLUB</Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link eventKey={1}>
              <Link to="/website-2020/" className="nav-spacing">
                ABOUT US
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link to="/website-2020/members" className="nav-spacing">
                MEMBERS
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={3}>
              <Link to="/website-2020/events" className="nav-spacing">
                EVENTS
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={4}>
              <Link to="/website-2020/" className="nav-spacing">
                CONTACT US
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
