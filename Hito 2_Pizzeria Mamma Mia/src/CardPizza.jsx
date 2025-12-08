import { formatoPrecio } from './utils/formatoPrecio.js'
function CardPizza({ nombre, ingredientes, precio, imagen }) {
  return (
    <div className="card-pizza">
      <img src={imagen} alt={nombre} className="pizza-img" />
      <h3>{nombre}</h3>
      <p><strong>Ingredientes:</strong> {ingredientes}</p>
      <p><strong>Precio:</strong> ${formatoPrecio(precio)}</p>
      <div className="pizza-buttons">
        <button>Ver Más</button>
        <button>Añadir</button>
      </div>
    </div>
  )
}

export default CardPizza