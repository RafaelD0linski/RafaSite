import React from "react";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Tecnologia</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Bem-vindo ao futuro digital, onde a tecnologia, a inteligência artificial e a automação impulsionam a inovação. Aqui, criamos soluções inteligentes para transformar negócios e vidas.</p>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">99%</div>
                <div className="stat-label">Inovação</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Disponível</div>
              </div>
              <div className="stat">
                <div className="stat-number">∞</div>
                <div className="stat-label">Tecnologia</div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="tech-grid">
              <div className="tech-item">
                <i className="fas fa-microchip"></i>
                <span>IA</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-robot"></i>
                <span>Robótica</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-network-wired"></i>
                <span>IoT</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-database"></i>
                <span>Dados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 