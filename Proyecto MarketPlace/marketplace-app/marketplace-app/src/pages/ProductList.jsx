import React from "react";
import { Container, Row, Col, ListGroup, Pagination } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import useFetch from "../hooks/useFetch";
import productService from "../services/productService";

/**
 * Pantalla de Productos: lista resultados de búsqueda o de una categoría,
 * con panel de filtros lateral (colapsable conceptualmente en mobile vía
 * Bootstrap grid: filtros arriba en mobile, a la izquierda en desktop).
 */
function ProductList() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const categoria = searchParams.get("categoria");

  const { data, loading } = useFetch(
    () =>
      search
        ? productService.search(search)
        : productService.getByCategory(categoria),
    [search, categoria]
  );

  return (
    <Container className="my-4">
      <p className="text-muted small">Inicio / Categoría Principal</p>
      <Row>
        {/* Filtros: ancho completo en mobile, columna lateral en desktop */}
        <Col xs={12} md={3} className="mb-3">
          <h6 className="fw-bold">Filtros</h6>
          <ListGroup>
            <ListGroup.Item action>Filtro 1</ListGroup.Item>
            <ListGroup.Item action>Filtro 2</ListGroup.Item>
            <ListGroup.Item action>Filtro 3</ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Grilla de productos */}
        <Col xs={12} md={9}>
          <Row className="gy-3">
            {!loading &&
              data?.map((product) => (
                <Col key={product.id} xs={6} sm={4} md={3}>
                  <ProductCard product={product} />
                </Col>
              ))}
          </Row>

          <Pagination className="justify-content-center mt-4">
            <Pagination.Prev />
            <Pagination.Item active>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductList;
