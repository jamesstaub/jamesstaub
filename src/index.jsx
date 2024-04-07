import React from "react";
import App from "./app.jsx";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);