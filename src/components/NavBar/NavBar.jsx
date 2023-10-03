import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary colorbg">
      <CartWidget />
      <Container>
        <Navbar.Brand href="#inicio"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="../../pages/Inicio" className="nav-link">
              Inicio
            </NavLink>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Periféricos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sillas Gamers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gabinetes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Accesorios 🐻
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="../pages/Ofertas" className="nav-link">
              Ofertas
            </NavLink>
            <NavLink to="../../pages/Ayuda" className="nav-link">
              Preguntas Frecuentes
            </NavLink>
            <NavLink to="../../pages/Contacto" className="nav-link">
              Contacto
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;