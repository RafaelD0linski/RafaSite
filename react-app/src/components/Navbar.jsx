import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">RAFA</span>
          <div className="logo-glow"></div>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">Início</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">Sobre</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">Projetos</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contato</a>
          </li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
} 