import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom

const path = window.location.pathname;
const initialRoute = path.substring(1); // Remove the leading slash

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App initialRoute={initialRoute} />
  </React.StrictMode>
);