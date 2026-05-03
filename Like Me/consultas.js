import pool from './db.js';

export const obtenerPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

export const agregarPost = async (titulo, img, descripcion, likes) => {
  const consulta = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)";
  const values = [titulo, img, descripcion, likes];
  await pool.query(consulta, values);
};
