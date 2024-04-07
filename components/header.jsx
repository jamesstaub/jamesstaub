import React from "react";

const NavBar = () => {
  const handleNavigation = (event, path) => {
    event.preventDefault();
    window.history.pushState({}, "", path);
    const eventNav = new Event("popstate");
    window.dispatchEvent(eventNav);
  };

  return (
    <header>
      <h1>
        <a href="/" onClick={(e) => handleNavigation(e, "/index.html")}>
          James Staub
        </a>
      </h1>
      <nav>
        <a href="#about" onClick={(e) => handleNavigation(e, "#about")}>
          About
        </a>
        <a href="/projects.html" onClick={(e) => handleNavigation(e, "/projects.html")}>
          Projects
        </a>
        <a href="/music.html" onClick={(e) => handleNavigation(e, "/music.html")}>
          Music
        </a>
        <a href="#contact" onClick={(e) => handleNavigation(e, "#contact")}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
