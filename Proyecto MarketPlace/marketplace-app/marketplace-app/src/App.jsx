import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewListing from "./pages/NewListing";
import NotFound from "./pages/NotFound";

/**
 * Punto de entrada de rutas.
 * MainLayout (Navbar + Footer) envuelve todas las páginas hijas mediante
 * rutas anidadas y <Outlet />, evitando re-render del header/footer.
 */
function App() {
  // En una app real este estado vendría de un Context/estado global de carrito.
  const [cartCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout cartCount={cartCount} />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<ProductList />} />
          <Route path="productos/:productId" element={<ProductDetail />} />
          <Route path="carrito" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="crear-cuenta" element={<Register />} />

          {/* Perfil de usuario y sus sub-secciones */}
          <Route path="perfil" element={<Profile />} />
          <Route path="perfil/nueva-publicacion" element={<NewListing />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
