import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { FaPlus, FaTrash, FaShoppingCart } from "react-icons/fa";

/** Pantalla de Carrito de Compra: tabla de productos + total + botón pagar. */
function Cart() {
  const items = []; // vendría de un context/estado global de carrito

  return (
    <Container className="my-4">
      <h5 className="mb-3"><FaShoppingCart className="me-2" />Carrito de Compra</h5>
      <Table responsive>
        <thead>
          <tr>
            <th>Producto</th><th>Valor</th><th>Cantidad</th><th>Total</th><th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
              <td>{item.price * item.qty}</td>
              <td>
                <Button variant="link" size="sm"><FaPlus /></Button>
                <Button variant="link" size="sm" className="text-danger"><FaTrash /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-end">
        <h6>Total: $0</h6>
        <Button variant="dark" className="mkt-sell-btn">Pagar</Button>
      </div>
    </Container>
  );
}

export default Cart;
