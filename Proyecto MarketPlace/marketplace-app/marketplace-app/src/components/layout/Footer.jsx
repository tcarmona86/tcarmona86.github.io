import React from "react";
import { Container, Row, Col } from "react-bootstrap";

/**
 * Footer global. Se apila en columnas en mobile y en fila en desktop
 * gracias a las clases de grilla de Bootstrap.
 */
function Footer() {
  return (
    <footer className="mkt-footer mt-5 py-4">
      <Container>
        <Row className="text-center text-md-start gy-3">
          <Col xs={12} md={4}>
            <strong>MarketPlace</strong>
            <p className="mb-0">Compra y vende de forma simple y segura.</p>
          </Col>
          <Col xs={12} md={4}>
            <strong>Ayuda</strong>
            <p className="mb-0">Preguntas frecuentes · Contacto · Reclamos</p>
          </Col>
          <Col xs={12} md={4}>
            <strong>Síguenos</strong>
            <p className="mb-0">Instagram · Facebook · X</p>
          </Col>
        </Row>
        <hr />
        <p className="text-center mb-0 small">
          © {new Date().getFullYear()} MarketPlace. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
