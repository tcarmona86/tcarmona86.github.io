function Form({ titulo, imgSrc, descripcion, setTitulo, setImgSRC, setDescripcion, agregarPost }) {
  return (
    <div className="form">
      <div className="mb-2">
        <h6>Agregar post</h6>
        <label>Título</label>
        <input
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label>URL de la imagen</label>
        <input
          value={imgSrc}
          onChange={(event) => setImgSRC(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Descripción</label> <br />
        <textarea
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <div className="d-flex">
        <button
          onClick={(e) => {
            e.preventDefault();
            agregarPost();
          }}
          className="btn btn-light m-auto"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

export default Form;
