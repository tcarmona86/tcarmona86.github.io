import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Post from "./components/Post";

const urlBaseServer = "http://localhost:3000";

function App() {
  const [titulo, setTitulo] = useState("");
  const [imgSrc, setImgSRC] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [posts, setPosts] = useState([]);
  const [mensaje, setMensaje] = useState(""); // nuevo estado para mensajes

  const getPosts = async () => {
    try {
      const { data: posts } = await axios.get(urlBaseServer + "/posts");
      setPosts([...posts]);
    } catch (error) {
      console.error("Error al obtener posts:", error);
    }
  };

  const agregarPost = async () => {
    try {
      const post = { titulo, img: imgSrc, descripcion };
      await axios.post(urlBaseServer + "/posts", post);
      getPosts();

      // limpiar formulario
      setTitulo("");
      setImgSRC("");
      setDescripcion("");

      // mostrar mensaje
      setMensaje("✅ Post agregado con éxito");
      setTimeout(() => setMensaje(""), 3000);
    } catch (error) {
      console.error("Error al agregar post:", error);
      setMensaje("❌ Error al agregar el post");
      setTimeout(() => setMensaje(""), 3000);
    }
  };

  const like = async (id) => {
    try {
      await axios.put(`${urlBaseServer}/posts/${id}`);
      getPosts();
    } catch (error) {
      console.error("Error al dar like:", error);
    }
  };

  const eliminarPost = async (id) => {
    try {
      await axios.delete(`${urlBaseServer}/posts/${id}`);
      getPosts();

      // mostrar mensaje
      setMensaje("🗑️ Post eliminado correctamente");
      setTimeout(() => setMensaje(""), 3000);
    } catch (error) {
      console.error("Error al eliminar post:", error);
      setMensaje("❌ Error al eliminar el post");
      setTimeout(() => setMensaje(""), 3000);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h2 className="py-5 text-center">&#128248; Like Me &#128248;</h2>

      {/* Mensaje visual */}
      {mensaje && (
        <div className="alert alert-info text-center" role="alert">
          {mensaje}
        </div>
      )}

      <div className="row m-auto px-5">
        <div className="col-12 col-sm-4">
          <Form
            titulo={titulo}
            imgSrc={imgSrc}
            descripcion={descripcion}
            setTitulo={setTitulo}
            setImgSRC={setImgSRC}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
          />
        </div>
        <div className="col-12 col-sm-8 px-5 row posts align-items-start">
          {posts.map((post, i) => (
            <Post
              key={i}
              post={post}
              like={like}
              eliminarPost={eliminarPost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

}

export default App;
