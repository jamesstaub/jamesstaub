import React from "react";
import LinkTo from "./LinkTo";
import { routes } from '../App';


const Header = () => {
  const linkRoutes = routes.slice();
  linkRoutes.shift();

  return (

      <header className="flex flex-column justify-between pa2 mh0 ma2 w5">
      <h1 className="mv1">
        <LinkTo className="bg-main pv0 ph2 ml0" to="/">
          James Staub
        </LinkTo>
      </h1>
      <nav className="min-w-8rem">
        <ul className="list mv2 pl0 flex justify-between">
          {linkRoutes.map((route) => (
            <li className="">
              <LinkTo className="bg-main ph2 underline-hover" key={route.path} to={route.path}>
                {route.path.slice(1).toUpperCase()}
              </LinkTo>
            </li>
        ))}
        </ul>
        
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