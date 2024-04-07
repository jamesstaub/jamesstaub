import React, { useEffect, useState } from "react";

import Home from "./pages/home";
import About from "./pages/about";

import "./styles/styles.css";



const App = ({initialRoute}) => {
  console.log('initialRoute', initialRoute)
  const [currentPage, setCurrentPage] = useState(initialRoute);

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handlePopState = () => {
    const path = window.location.pathname.toLowerCase();

    switch (path) {
      case "/projects":
        setCurrentPage("projects");
        break;
      case "/music":
        setCurrentPage("music");
        break;
      case "/about":
        setCurrentPage("about");
        break;
      default:
        setCurrentPage("home");
        break;
    }
  };

  return (
    <div>
      {currentPage === "home" && <Home />}
      {currentPage === "projects" && <Projects />}
      {currentPage === "about" && <About />}
      {/* Add other page components as needed */}
    </div>
  );
};

export default App;
