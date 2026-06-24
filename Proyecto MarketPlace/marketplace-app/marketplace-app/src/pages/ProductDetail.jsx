import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import productService from "../services/productService";

/** Pantalla de Detalle de Producto: imagen, características, cantidad y agregar al carrito. */
function ProductDetail() {
  const { productId } = useParams();
  const { data: product, loading } = useFetch(
    () => productService.getById(productId),
    [productId]
  );

  if (loading || !product) return <Container className="my-4">Cargando...</Container>;

  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6} className="text-center mb-4">
          <h5 className="mb-3">{product.name}</h5>
          <img src={product.imageUrl} alt={product.name} className="img-fluid rounded" />
        </Col>
        <Col xs={12} md={6}>
          <h6 className="fw-bold">Características del Producto</h6>
          <p className="text-muted">{product.description}</p>
          <div className="d-flex align-items-center gap-3 mt-4">
            <Form.Control type="number" min={1} defaultValue={1} style={{ width: "80px" }} />
            <Button className="mkt-sell-btn" variant="dark">
              <FaStar className="me-2" /> Agregar al Carrito
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
