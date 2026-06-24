import React from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

/** Sub-sección de Perfil: datos personales + direcciones. */
function PersonalData() {
  return (
    <div>
      <h6 className="fw-bold mb-3">Datos Personales</h6>
      <Form className="mb-4">
        <Form.Group className="mb-2"><Form.Label>Nombre</Form.Label><Form.Control /></Form.Group>
        <Form.Group className="mb-2"><Form.Label>Rut</Form.Label><Form.Control /></Form.Group>
        <Form.Group className="mb-2"><Form.Label>Mail</Form.Label><Form.Control type="email" /></Form.Group>
        <Form.Group className="mb-3"><Form.Label>Contraseña</Form.Label><Form.Control type="password" /></Form.Group>
        <Button variant="outline-dark" className="mkt-sell-btn">Cambiar Contraseña</Button>
      </Form>

      <h6 className="fw-bold mb-3">Direcciones</h6>
      <ListGroup>
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          Dirección de ejemplo 123
          <span>
            <Button variant="link" size="sm"><FaPlus /></Button>
            <Button variant="link" size="sm"><FaEdit /></Button>
            <Button variant="link" size="sm" className="text-danger"><FaTrash /></Button>
          </span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default PersonalData;
