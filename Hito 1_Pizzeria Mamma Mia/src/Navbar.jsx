import './App.css'
import { formatoPrecio } from './utils/formatoPrecio.js'

function Navbar() {
  const total = 25000
  const token = false

  return (
    <nav className="navbar">
      <ul>
        <li>Pizzería Mamma Mía!</li>
        <li><button className="nav-btn">Home</button></li>
        {/* <li><button className="nav-btn">Profile</button></li> */}
        {/* <li><button className="nav-btn">Logout</button></li> */}
        <li><button className="nav-btn">Login</button></li>
        <li><button className="nav-btn">Registrar</button></li>
      </ul>
      
      <button className="cart-total">
        Total: ${formatoPrecio(total)}
      </button>
    </nav>
  )
}

export default Navbar

