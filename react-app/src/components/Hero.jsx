import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">BEM-VINDO À</span>
            <span className="title-line highlight">REVOLUÇÃO DIGITAL</span>
          </h1>
          <p className="hero-subtitle">Tecnologia, inovação e inteligência artificial para transformar o seu mundo</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate("/projetos-iniciais") }>
              <span>Ver Soluções</span>
              <i className="fas fa-microchip"></i>
            </button>
            <button className="btn btn-secondary">
              <span>Conheça Mais</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
            <div className="element element-4"></div>
          </div>
          <div className="hero-circle">
            <div className="circle-ring"></div>
            <div className="circle-core"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 