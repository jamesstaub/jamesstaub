import React from "react";
import LinkTo from "./LinkTo";
import { routes } from '../App';


const Header = () => {
  const linkRoutes = routes.slice();
  linkRoutes.shift();

  return (
    <header className="bg-fade tc">
      <h1>
        <LinkTo to="/">
          James Staub
        </LinkTo>
      </h1>
      <nav className="flex justify-between mw6 m-auto">
        {linkRoutes.map((route) => (
          <LinkTo className="min-w-120 tc" key={route.path} to={route.path}>
            {route.path.slice(1).toUpperCase()}
          </LinkTo>
        ))}
      </nav>

    </header>
  );
};

export default Header;
/**

        <a href="/projects.html" onClick={(e) => handleNavigation(e, "/projects.html")}>
          Projects
        </a>
        <a href="/music.html" onClick={(e) => handleNavigation(e, "/music.html")}>
          Music
        </a>
        <a href="/contact.html" onClick={(e) => handleNavigation(e, "#contact")}>
          Contact
        </a>
        
**/