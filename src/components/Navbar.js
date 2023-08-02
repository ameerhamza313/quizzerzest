import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
      <Navbar.Brand as={Link} to="/">
        QuizzerZest
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/create">
            Create Quiz 
          </Nav.Link>
          <Nav.Link as={Link} to="/edit">
            Edit Quiz
          </Nav.Link>
          <Nav.Link as={Link} to="/leaderboard">
            Leaderboard
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
