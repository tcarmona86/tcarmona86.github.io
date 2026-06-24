import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

/** Pantalla de Inicio de Sesión. */
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/");
  };

  return (
    <Container className="my-4" style={{ maxWidth: "420px" }}>
      <Card className="p-4 mkt-product-card">
        <h5 className="mb-3 text-center">Inicio de Sesión</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Mail</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>
          <Button type="submit" variant="dark" className="w-100 mkt-sell-btn mb-2">Iniciar Sesión</Button>
          <Button variant="outline-dark" className="w-100 mkt-sell-btn mb-2" onClick={() => navigate("/crear-cuenta")}>Crear Cuenta</Button>
          <Button variant="link" className="w-100">Recuperar Contraseña</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
