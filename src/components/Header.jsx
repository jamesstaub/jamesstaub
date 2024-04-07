import React from "react";
import LinkTo from "./LinkTo";
import { routes } from '../App';

console.log(routes)
const Header = () => {
  return (
    <header>
      <h1>
        <LinkTo to="/">
          James Staub
        </LinkTo>
      </h1>
      <nav>
        {routes.map((route) => (
          <LinkTo key={route.path} to={route.path}>
            {route.path === '/' ? 'Home' : route.path.slice(1).toUpperCase()}
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