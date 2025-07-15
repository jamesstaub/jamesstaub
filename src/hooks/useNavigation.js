import { useState, useEffect } from 'react';

export const useNavigation = (routes) => {
  const [currentPage, setCurrentPage] = useState();

  const handlePopState = () => {
    const path = window.location.pathname;
    const currentRoute = routes.find((route) => route.path === path);
    setCurrentPage(currentRoute ? currentRoute.page : routes[0].page);
  };

  useEffect(() => {
    // First, try to get the attempted route from localStorage
    const attemptedRoute = localStorage.getItem('attemptedRoute');
    const path = attemptedRoute || window.location.pathname;

    // Find the route that matches the path (from localStorage or current pathname)
    const currentRoute = routes.find((route) => route.path === path);

    // Set the current page to the matched route or fallback to Home
    setCurrentPage(currentRoute ? currentRoute.page : routes[0].page);

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

  return { currentPage, handlePopState };
};
