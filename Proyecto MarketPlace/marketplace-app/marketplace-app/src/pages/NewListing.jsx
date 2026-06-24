import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FaPlus, FaTrash, FaStar } from "react-icons/fa";
import productService from "../services/productService";

/** Formulario de Nueva Publicación (alta de producto a vender). */
function NewListing() {
  const [form, setForm] = useState({
    name: "", description: "", category: "", price: "", stock: "", status: "",
  });
  const [images, setImages] = useState([""]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const addImageField = () => setImages([...images, ""]);
  const removeImageField = (index) =>
    setImages(images.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await productService.create({ ...form, images });
  };

  return (
    <div>
      <h6 className="fw-bold mb-3">Nueva Publicación</h6>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Nombre</Form.Label>
          <Form.Control name="name" value={form.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={2} name="description" value={form.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Categoría</Form.Label>
          <Form.Control name="category" value={form.category} onChange={handleChange} />
        </Form.Group>
        <Row>
          <Col xs={6}>
            <Form.Group className="mb-2">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" name="price" value={form.price} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-2">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" name="stock" value={form.stock} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Estado</Form.Label>
          <Form.Select name="status" value={form.status} onChange={handleChange}>
            <option value="">Selecciona...</option>
            <option value="nuevo">Nuevo</option>
            <option value="usado">Usado</option>
          </Form.Select>
        </Form.Group>

        <Form.Label>Subir Imágenes</Form.Label>
        {images.map((img, index) => (
          <div key={index} className="d-flex gap-2 mb-2">
            <Form.Control type="file" />
            <Button variant="link" onClick={addImageField}><FaPlus /></Button>
            <Button variant="link" className="text-danger" onClick={() => removeImageField(index)}><FaTrash /></Button>
          </div>
        ))}

        <Button type="submit" variant="dark" className="mkt-sell-btn mt-2">
          <FaStar className="me-2" /> Publicar
        </Button>
      </Form>
    </div>
  );
}

export default NewListing;
