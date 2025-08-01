import React, { useEffect, useState } from "react";

import { Home, About, Music, Projects } from "./pages";

import "./styles/styles.css";

export const routes = [
  { path: '/', page: () => <Home /> },
  { path: '/music', page: () => <Music /> },
  { path: '/projects', page: () => <Projects /> },
  { path: '/about', page: () => <About /> },  
];


const App = () => {
  const [currentPage, setCurrentPage] = useState();

  const handlePopState = () => {
    const path = window.location.pathname;
    const currentRoute = routes.find((route) => route.path === path);
    setCurrentPage(currentRoute ? currentRoute.page : Home);
  };


useEffect(() => {
    // First, try to get the attempted route from localStorage
    const attemptedRoute = localStorage.getItem('attemptedRoute');
    const path = attemptedRoute || window.location.pathname;

    // Find the route that matches the path (from localStorage or current pathname)
    const currentRoute = routes.find((route) => route.path === path);

    // Set the current page to the matched route or fallback to Home
    setCurrentPage(currentRoute ? currentRoute.page : Home);

    // Clear the attemptedRoute from localStorage (if used)
    if (attemptedRoute) {
      localStorage.removeItem('attemptedRoute');
    }

    // Ensure the URL bar reflects the current path
    if (path !== window.location.pathname) {
      window.history.replaceState(null, '', path);
    }

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return currentPage;
};

export default App;
