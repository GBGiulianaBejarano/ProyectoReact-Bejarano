import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import {NavLink, Link, Outlet} from 'react-router-dom';

function NavBar() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary colorbg">
      <CartWidget />
      <Container>
        <Navbar.Brand href="#inicio"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" > Inicio </Nav.Link>
            <Nav.Link as={Link} to="/Ofertas" > Ofertas </Nav.Link>
            <Nav.Link as={Link} to="/Productos" > Productos </Nav.Link>
            <Nav.Link as={Link} to="/Contacto" > Contacto </Nav.Link>
            <Nav.Link as={Link} to="/Ayuda" > Preguntas Frecuentes </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section>
      <Outlet></Outlet>
    </section>
    </>
  );
}

export default NavBar;