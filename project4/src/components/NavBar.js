import {Link} from "react-router-dom";
// import "./MainNavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => (
    <Navbar bg="dark" variant="dark" expand="md">
    <Container>
      <Navbar.Brand><Link to="/home">The Rorschach Test</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/create">Create</Link>
            <Link className="nav-link" to="/gallery">Gallery</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
