import './App.css'
import { formatoPrecio } from './utils/formatoPrecio.js'
import { FaHome, FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Navbar() {
  const total = 25000
  const token = false

  return (
    <nav className="navbar">
      <ul>
        <li>Pizzería Mamma Mía!</li>
        <li><Link to="/"className="nav-btn"><FaHome/>Home</Link></li>
        <li><Link to="/login"className="nav-btn"><FaSignInAlt />Login</Link></li>
        <li><Link to="/register"className="nav-btn"><FaUserPlus />Registrar</Link></li>
        {/* <li><Link to="/profile"className="nav-btn">Perfil</Link></li> */}
        {/* <li><Link to="/logout"className="nav-btn">Cerrar Sesión</Link></li> */}

      </ul>
      <button className="cart-total">
        <FaShoppingCart style={{ marginRight: '8px' }} />
        Total: ${formatoPrecio(total)}
      </button>
    </nav>
  )
}

export default Navbar

