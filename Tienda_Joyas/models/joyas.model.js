import format from "pg-format";
import { pool } from "../database/connection.js";

const BASE_URL = process.env.NODE_ENV === "production"
  ? process.env.DOMAIN_URL_APP
  : `http://localhost:${process.env.PORT}`;

export const obtenerJoyas = async ({ limits = 5, order_by = "id_ASC", page = 1 }) => {
  const [campo, direccion] = order_by.split("_");
  const offset = (page - 1) * limits;

  const countQuery = "SELECT COUNT(*) FROM inventario";
  const { rows: countResult } = await pool.query(countQuery);
  const totalJoyas = parseInt(countResult[0].count, 10);

  const query = format("SELECT * FROM inventario ORDER BY %I %s LIMIT %s OFFSET %s",
    campo, direccion, limits, offset);

  const { rows } = await pool.query(query);

  const results = rows.map((joya) => ({
    name: joya.nombre,
    href: `${BASE_URL}/joyas/joya/${joya.id}`,
  }));

  return {
    totalJoyas,
    stockTotal: rows.reduce((acc, j) => acc + j.stock, 0),
    results,
  };
};
