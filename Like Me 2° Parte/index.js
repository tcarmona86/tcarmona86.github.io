import express from 'express';
import cors from 'cors';
import { obtenerPosts, agregarPost, modificarLikes, eliminarPost } from "./consultas.js";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => console.log("Servidor encendido en puerto 3000"));

// Ruta GET
app.get('/posts', async (req, res) => {
  try {
    const posts = await obtenerPosts();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los posts" });
  }
});

// Ruta POST
app.post('/posts', async (req, res) => {
  try {
    const { titulo, img, url, descripcion } = req.body;

    // Usar solo img, traduciendo url si viene
    const imagen = url || img;

    // Validación
    if (!titulo || !imagen || !descripcion) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    // likes inicializado en 0
    const nuevoPost = await agregarPost(titulo, imagen, descripcion, 0);

    // Responder con el recurso creado y status 201
    res.status(201).json(nuevoPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar el post" });
  }
});

// Ruta PUT -> agregar likes
app.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await modificarLikes(id);
    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al modificar likes" });
  }
});

// Eliminar Post
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await eliminarPost(id);
    if (!eliminado) {
      return res.status(404).json({ error: "Post no encontrado" });
    }
    res.json({ message: "Post eliminado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar post" });
  }
});