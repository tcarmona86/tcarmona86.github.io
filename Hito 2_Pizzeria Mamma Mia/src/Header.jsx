import headerImage from './assets/header.jpg'
import './App.css'

function Header() {
  return (
    <header id="Hero-Section" className="hero-section">
      <img src={headerImage} alt="Imagen de Pizzería Mamma Mia" className="header-banner" />
      <div className="hero-text">
        <h1>¡Pizzería Mamma Mia!</h1>
        <h2>¡Tenemos las mejores pizzas que podrás encontrar!</h2>
      </div>
    </header>
  )
}

export default Header
