import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./styles/globals.css"; // same as in Next.js

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
