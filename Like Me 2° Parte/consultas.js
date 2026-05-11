import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'Hikari@2024',
  database: 'likeme',
  port: 5432,
  allowExitOnIdle: true
});

// Obtener posts
export const obtenerPosts = async () => {
  const consulta = "SELECT * FROM posts ORDER BY id DESC";
  const { rows } = await pool.query(consulta);
  return rows;
};

// Agregar post
export const agregarPost = async (titulo, img, descripcion, likes) => {
  const consulta = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *";
  const values = [titulo, img, descripcion, likes];
  const { rows } = await pool.query(consulta, values);
  return rows[0];
};

// Actualizar likes
export const modificarLikes = async (id) => {
  const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
  const values = [id];
  const { rows } = await pool.query(consulta, values);
  return rows[0];
};

// Eliminar post
export const eliminarPost = async (id) => {
  const consulta = "DELETE FROM posts WHERE id = $1 RETURNING *";
  const values = [id];
  const { rows } = await pool.query(consulta, values);
  return rows[0];
};
