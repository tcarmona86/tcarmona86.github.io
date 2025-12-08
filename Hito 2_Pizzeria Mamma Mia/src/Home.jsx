import './App.css'
import Header from './Header.jsx'
import CardPizza from './CardPizza.jsx'
import napolitana from './assets/napolitana.jpg'
import española from './assets/española.jpg'
import pepperoni from './assets/pepperoni.jpg'
import { formatoPrecio } from './utils/formatoPrecio.js'

function Home() {
  return (
    <main className="home">
      {}
      <Header />
       <div className="pizza-grid">
        <CardPizza
          name="Napolitana"
          precio={5950}
          ingredientes={["mozzarella, tomates, jamón, orégano"]}
          imagen={napolitana}
        />
        <CardPizza
          name="Española"
          precio={6950}
          ingredientes={["mozzarella, gorgonzola, parmesano, provolone"]}
          imagen={española}
        />
        <CardPizza
          name="Pepperoni"
          precio={6950}
          ingredientes={["mozzarella, pepperoni, orégano"]}
          imagen={pepperoni}
        />
      </div>
    </main>
  )
}

export default Home
