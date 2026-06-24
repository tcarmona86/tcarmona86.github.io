import React, { useState } from "react";
import { Navbar, Container, Form, Button, Nav, Badge } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaUserCircle, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/**
 * Header principal del marketplace.
 * - Mobile-first: en pantallas chicas colapsa en menú hamburguesa (Navbar.Toggle).
 * - El buscador es un <Form> controlado que navega a /productos?search=termino.
 * - cartCount se recibe como prop (vendría de un contexto/estado global de carrito).
 */
function AppNavbar({ cartCount = 0 }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/productos?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <Navbar expand="lg" className="mkt-navbar" sticky="top">
      <Container fluid className="px-3 px-md-4">
        {/* Logo */}
        <Navbar.Brand href="/" className="me-2">
          MarketPlace
        </Navbar.Brand>

        {/* Botón "Vende" visible siempre, incluso en mobile */}
        <Button
          variant="outline-dark"
          size="sm"
          className="mkt-sell-btn d-none d-sm-inline-block me-2"
          onClick={() => navigate("/perfil/nueva-publicacion")}
        >
          Vende
        </Button>

        {/* Toggle hamburguesa - solo visible en mobile/tablet */}
        <Navbar.Toggle aria-controls="main-navbar-collapse">
          <FaBars />
        </Navbar.Toggle>

        <Navbar.Collapse id="main-navbar-collapse">
          {/* Buscador */}
          <Form
            className="mkt-search-form d-flex my-2 my-lg-0 mx-lg-3 w-100"
            onSubmit={handleSearchSubmit}
          >
            <Form.Control
              type="search"
              placeholder="Buscar productos, marcas y más..."
              aria-label="Buscar"
              className="mkt-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" className="mkt-search-btn" aria-label="Buscar">
              <FaSearch />
            </Button>
          </Form>

          {/* Acciones: carrito y perfil */}
          <Nav className="align-items-center gap-3 mt-3 mt-lg-0">
            <Button
              variant="outline-dark"
              size="sm"
              className="mkt-sell-btn d-inline-block d-sm-none"
              onClick={() => navigate("/perfil/nueva-publicacion")}
            >
              Vende
            </Button>

            <Nav.Link
              className="mkt-icon-btn"
              onClick={() => navigate("/carrito")}
              aria-label="Carrito de compras"
            >
              <FaShoppingCart />
              {cartCount > 0 && (
                <Badge bg="danger" pill className="mkt-cart-badge">
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>

            <Nav.Link
              className="mkt-icon-btn"
              onClick={() => navigate("/perfil")}
              aria-label="Perfil de usuario"
            >
              <FaUserCircle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
