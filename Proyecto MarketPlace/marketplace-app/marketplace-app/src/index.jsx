import React from "react";
import ReactDOM from "react-dom/client";

// 1) Bootstrap base, 2) overrides propios (custom.css se aplica encima)
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/custom.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
