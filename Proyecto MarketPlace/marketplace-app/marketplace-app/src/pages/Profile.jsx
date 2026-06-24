import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import PersonalData from "../components/profile/PersonalData";
import MyListings from "../components/profile/MyListings";
import NewListing from "./NewListing";

/** Pantalla de Perfil de Usuario: menú lateral + contenido dinámico central. */
function Profile() {
  const [activeSection, setActiveSection] = useState("datos");

  const sections = {
    datos: <PersonalData />,
    publicaciones: <MyListings />,
    nueva: <NewListing />,
  };

  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={3} className="mb-3">
          <ListGroup>
            <ListGroup.Item action active={activeSection === "datos"} onClick={() => setActiveSection("datos")}>
              Datos Personales
            </ListGroup.Item>
            <ListGroup.Item action active={activeSection === "publicaciones"} onClick={() => setActiveSection("publicaciones")}>
              Mis Publicaciones
            </ListGroup.Item>
            <ListGroup.Item action active={activeSection === "nueva"} onClick={() => setActiveSection("nueva")}>
              Nueva Publicación
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={12} md={9}>
          {sections[activeSection]}
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
