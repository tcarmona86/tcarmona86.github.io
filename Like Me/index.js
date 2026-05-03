import express from 'express';
import cors from 'cors';
import { obtenerPosts, agregarPost } from './consultas.js';

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => console.log("Servidor encendido en puerto 3000"));

// Ruta para consultar posts
app.get('/posts', async (req, res) => {
  const posts = await obtenerPosts();
  res.json(posts);
});

// Ruta para agregar un nuevo post
app.post('/posts', async (req, res) => {
  const { titulo, img, url, descripcion, likes } = req.body;
  const imagen = url;
  await agregarPost(titulo, imagen, descripcion, likes);
  res.send("Post agregado con éxito");
});


