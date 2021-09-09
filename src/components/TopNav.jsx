import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MongoDB</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">
                <Nav.Link href="#features">All Users</Nav.Link>
              </Link>

              <Link to="/adduser">
                <Nav.Link href="#features">Add User</Nav.Link>
              </Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
