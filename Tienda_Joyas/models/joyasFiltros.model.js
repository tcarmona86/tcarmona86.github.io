import { pool } from "../database/connection.js";

export const obtenerJoyasPorFiltros = async ({ precio_min, precio_max, categoria, metal }) => {
  let filtros = [];
  let values = [];

  const agregarFiltro = (campo, comparador, valor) => {
    values.push(valor);
    filtros.push(`${campo} ${comparador} $${values.length}`);
  };

  if (precio_min) agregarFiltro("precio", ">=", precio_min);
  if (precio_max) agregarFiltro("precio", "<=", precio_max);
  if (categoria) agregarFiltro("categoria", "=", categoria);
  if (metal) agregarFiltro("metal", "=", metal);

  let consulta = "SELECT * FROM inventario";
  if (filtros.length > 0) consulta += " WHERE " + filtros.join(" AND ");

  const { rows } = await pool.query(consulta, values);
  return rows;
};
