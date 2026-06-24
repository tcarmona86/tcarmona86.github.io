import React from "react";
import { Container } from "react-bootstrap";

function NotFound() {
  return (
    <Container className="my-5 text-center">
      <h2>404</h2>
      <p>La página que buscas no existe.</p>
    </Container>
  );
}

export default NotFound;
