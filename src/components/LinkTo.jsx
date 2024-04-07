import React from "react";

const LinkTo = ({ to, children, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", to);
    const eventNav = new Event("popstate");
    window.dispatchEvent(eventNav);
    if (onClick) {
      onClick();
    }
  };

  return (
    <a href={to} onClick={handleClick} role="link" aria-label={children}>
      {children}
    </a>
  );
};

export default LinkTo;