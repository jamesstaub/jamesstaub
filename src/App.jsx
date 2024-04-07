import React, { useEffect, useState } from "react";

import Home from "./pages/home";
import About from "./pages/about";
import Music from "./pages/music";
import Projects from "./pages/projects";

import "./styles/styles.css";

export const routes = [
  { path: '/', page: () => <Home /> },
  { path: '/about', page: () => <About /> },
  { path: '/music', page: () => <Music /> },
  { path: '/projects', page: () => <Projects /> },
];


const App = () => {
  const [currentPage, setCurrentPage] = useState();

  const handlePopState = () => {
    const path = window.location.pathname;
    const currentRoute = routes.find((route) => route.path === path);
    setCurrentPage(currentRoute ? currentRoute.page : Home);
  };

  useEffect(() => {
    const path = window.location.pathname;
    const currentRoute = routes.find((route) => route.path === path);
    setCurrentPage(currentRoute ? currentRoute.page : Home);

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return currentPage;
};

export default App;
