import React from "react";
import LinkTo from "./LinkTo";

const Header = () => {
  return (
    <header>
      <h1>
        <LinkTo to="/">
          James Staub
        </LinkTo>
      </h1>
      <nav>
        <LinkTo to="/about">
          About
        </LinkTo>

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