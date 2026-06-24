import React from "react";
import { Outlet } from "react-router-dom";
import AppNavbar from "./Navbar";
import Footer from "./Footer";

/**
 * Layout persistente: Navbar + <Outlet /> (contenido de la ruta activa) + Footer.
 * Se usa como elemento "padre" en App.js para que el header/footer no se
 * vuelvan a montar en cada cambio de ruta.
 */
function MainLayout({ cartCount }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar cartCount={cartCount} />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
