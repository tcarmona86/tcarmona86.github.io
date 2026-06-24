import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

/** Pantalla de Creación de Cuenta. */
function Register() {
  const [form, setForm] = useState({
    fullName: "", rut: "", email: "", address: "", password: "", confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    await api.post("/auth/register", form);
    navigate("/login");
  };

  return (
    <Container className="my-4" style={{ maxWidth: "480px" }}>
      <Card className="p-4 mkt-product-card">
        <h5 className="mb-3 text-center">Creación de Cuenta</h5>
        <Form onSubmit={handleSubmit}>
          {[
            { name: "fullName", label: "Nombre Completo" },
            { name: "rut", label: "Rut" },
            { name: "email", label: "Mail", type: "email" },
            { name: "address", label: "Dirección" },
            { name: "password", label: "Contraseña", type: "password" },
            { name: "confirmPassword", label: "Confirmar Contraseña", type: "password" },
          ].map((field) => (
            <Form.Group className="mb-3" key={field.name}>
              <Form.Label>{field.label}</Form.Label>
              <Form.Control
                type={field.type || "text"}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                required
              />
            </Form.Group>
          ))}
          <Button type="submit" variant="dark" className="w-100 mkt-sell-btn">Crear Cuenta</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;
