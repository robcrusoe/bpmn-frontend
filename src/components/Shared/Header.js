import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: '#F15B2A' };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>Frontend</NavLink>{" | "}
      <NavLink to="/server" activeStyle={activeStyle}>Server</NavLink>{" | "}
      <NavLink to="/diagram" activeStyle={activeStyle}>Diagram</NavLink>
    </nav>
  );
};

export default Header;