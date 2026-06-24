import React from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import ProductCard from "../components/product/ProductCard";
import CategoryList from "../components/product/CategoryList";
import useFetch from "../hooks/useFetch";
import productService from "../services/productService";

/**
 * Página principal (Home).
 * Estructura calcada del wireframe: Banner -> Categorías -> Productos recomendados.
 * Usa el hook genérico useFetch para resolver loading/error de forma consistente.
 */
function Home() {
  const { data: categories, loading: loadingCategories } = useFetch(
    () => productService.getCategories(),
    []
  );

  const { data: products, loading: loadingProducts, error } = useFetch(
    () => productService.getRecommended(),
    []
  );

  return (
    <>
      {/* Banner principal */}
      <Container className="my-3">
        <div className="mkt-banner p-4 p-md-5">
          <h2 className="mb-0">Las mejores ofertas, todos los días</h2>
        </div>
      </Container>

      {/* Categorías */}
      {!loadingCategories && categories && (
        <CategoryList categories={categories} />
      )}

      {/* Productos recomendados */}
      <Container className="my-4">
        <h6 className="mb-3 fw-bold">Productos recomendados</h6>

        {loadingProducts && (
          <div className="text-center py-5">
            <Spinner animation="border" role="status" />
          </div>
        )}

        {error && (
          <Alert variant="danger">
            No fue posible cargar los productos recomendados.
          </Alert>
        )}

        {!loadingProducts && products && (
          <Row className="gy-3">
            {products.map((product) => (
              <Col key={product.id} xs={6} sm={4} md={3} lg={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default Home;
