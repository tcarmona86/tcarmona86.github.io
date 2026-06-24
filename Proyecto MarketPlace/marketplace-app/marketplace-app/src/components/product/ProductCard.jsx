import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

/**
 * Tarjeta de producto reutilizable. Se usa tanto en Home (recomendados)
 * como en la pantalla de listado de productos por categoría/búsqueda.
 * Mobile-first: ocupa el 100% del ancho de su columna padre (col-6 en mobile,
 * col-3 en desktop, definido por quien la consume vía <Col>).
 */
function ProductCard({ product }) {
  const navigate = useNavigate();

  const formattedPrice = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(product.price);

  return (
    <Card
      className="mkt-product-card"
      role="button"
      onClick={() => navigate(`/productos/${product.id}`)}
    >
      <div className="card-img-wrapper">
        <Card.Img
          variant="top"
          src={product.imageUrl || "/assets/placeholder-product.png"}
          alt={product.name}
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Text className="mkt-product-title mb-1">{product.name}</Card.Text>
        <Card.Text className="mkt-product-price mt-auto mb-0">
          {formattedPrice}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
