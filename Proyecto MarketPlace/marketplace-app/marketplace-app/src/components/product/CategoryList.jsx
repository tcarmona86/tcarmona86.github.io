import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

/**
 * Banda de categorías con círculos, según wireframe de la página principal.
 * En mobile se muestran 3-4 por fila con scroll vertical natural del grid;
 * en desktop se reparten en una sola fila.
 */
function CategoryList({ categories }) {
  const navigate = useNavigate();

  return (
    <section className="mkt-categories-band">
      <Container>
        <h6 className="mb-3 fw-bold">Categorías</h6>
        <Row className="gy-3">
          {categories.map((category) => (
            <Col key={category.id} xs={3} sm={3} md={2} lg={2}>
              <div
                className="mkt-category-circle"
                role="button"
                onClick={() => navigate(`/productos?categoria=${category.id}`)}
              >
                {category.name}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategoryList;
