import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const navigate = useNavigate();
  return (
    <nav className="navbar">
      
      {/* Logo */}
      <div className="logo">Ramesh.dev</div>

      {/* Button & Menu Icon Wrapper (Fixes Mobile Alignment) */}
      <div className="nav-controls">
       <button className="hire-btn" onClick={() => navigate('/hire-me')}>
      Hire Me
    </button>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {/* Menu open hone par 'X' dikhayega, warna Hamburger */}
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Navigation Links */}
  <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
  <li>
    <NavLink to="/" onClick={() => setMenuOpen(false)}>
      Home
    </NavLink>
  </li>
  <li>
    <NavLink to="/about" onClick={() => setMenuOpen(false)}>
      About
    </NavLink>
  </li>
  <li>
    <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
      Projects
    </NavLink>
  </li>
  <li>
    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
      Contact
    </NavLink>
  </li>
</ul>

    </nav>
  );
}

export default Navbar;