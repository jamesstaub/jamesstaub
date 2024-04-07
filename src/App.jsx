import React, { useEffect, useState } from "react";

import Home from "./pages/home";
import About from "./pages/about";

import "./styles/styles.css";

export const routes = [
  { path: '/', page: <Home />},
  { path: '/about', page: <About />},
  { path: '/music', page: <Music />},
  { path: '/projects', page: <Projects />},
];


const App = () => {
  const [currentPage, setCurrentPage] = useState(null);
  
  const handlePopState = () => {
    const path = window.location.pathname;
    const currentRoute = routes.find((route) => route.path === path);
    setCurrentPage(currentRoute ? currentRoute.page : Home);
  };
  
  useEffect(() => {
    const path = window.location.pathname;
    const currentRoute = routes.find((route) => route.path === path);
    setCurrentPage(currentRoute ? currentRoute.page : Home);

    window.addEventListener('popstate', handlePopState); // Add event listener for popstate
    return () => {
      window.removeEventListener('popstate', handlePopState); // Remove event listener on component unmount
    };
  }, []);
  
  useEffect(() => {
    const path = window.location.pathname;
    const currentRoute = routes.find((route) => route.path === path);
    setCurrentPage(currentRoute ? currentRoute.page : Home);
  }, []);

  return <div>{currentPage}</div>;
};

export default App;
