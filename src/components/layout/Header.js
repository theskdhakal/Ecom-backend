import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiLogIn } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { ImExit } from "react-icons/im";
import { AiFillDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Header = () => {
  const handleOnLogout = () => {
    alert("to do logout");
  };
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">Tech Gare</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <BiLogIn /> Login
            </Link>
            <Link className="nav-link" to="/register">
              <BiEdit /> Register
            </Link>
            <Link className="nav-link" to="/dashboard">
              <AiFillDashboard /> Dashboard
            </Link>
            <Link className="nav-link" to="#!" onClick={handleOnLogout}>
              <ImExit /> Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
