import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link className="home-link" to="/" onClick={closeMenu}>
        Website
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink className="link" to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/services" onClick={closeMenu}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contacts" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;