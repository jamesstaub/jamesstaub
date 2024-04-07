import React, { useEffect, useState } from "react";

import Home from "./pages/home";
import About from "./pages/about";

import "./styles/styles.css";



const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handlePopState = () => {
    const path = window.location.pathname.toLowerCase();
    console.log('HPS',path);
    switch (path) {
      case "/projects.html":
        setCurrentPage("projects");
        break;
      case "/music.html":
        setCurrentPage("music");
        break;
      case "/about.html":
        setCurrentPage("about");
        break;
      default:
        setCurrentPage("home");
        break;
    }
  };
  console.log('cp', currentPage)
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
