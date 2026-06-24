import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

/** Sub-sección de Perfil: listado de publicaciones propias del usuario. */
function MyListings() {
  const listings = []; // vendría de un servicio: listingService.getMine()

  return (
    <div>
      <h6 className="fw-bold mb-3">Mis Publicaciones</h6>
      {listings.map((item) => (
        <Card key={item.id} className="mb-3 p-3 mkt-product-card">
          <div className="d-flex justify-content-between align-items-center">
            <span>{item.name}</span>
            <span>
              <Button variant="link" size="sm"><FaPlus /></Button>
              <Button variant="link" size="sm"><FaEdit /></Button>
              <Button variant="link" size="sm" className="text-danger"><FaTrash /></Button>
            </span>
          </div>
        </Card>
      ))}
      {listings.length === 0 && <p className="text-muted">Aún no tienes publicaciones.</p>}
    </div>
  );
}

export default MyListings;
