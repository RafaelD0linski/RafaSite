import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projetos Tecnológicos</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <div className="project-overlay">
                <i className="fas fa-eye"></i>
              </div>
            </div>
            <div className="project-content">
              <h3>Inteligência Artificial</h3>
              <p>Desenvolvimento de soluções inteligentes para automação de processos e análise de dados.</p>
              <div className="project-tech">
                <span className="tech-tag">IA</span>
                <span className="tech-tag">Automação</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-overlay">
                <i className="fas fa-eye"></i>
              </div>
            </div>
            <div className="project-content">
              <h3>Internet das Coisas</h3>
              <p>Conectando dispositivos e sistemas para criar ambientes inteligentes e integrados.</p>
              <div className="project-tech">
                <span className="tech-tag">IoT</span>
                <span className="tech-tag">Smart</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-overlay">
                <i className="fas fa-eye"></i>
              </div>
            </div>
            <div className="project-content">
              <h3>Transformação Digital</h3>
              <p>Modernização de empresas com soluções digitais, automação e análise de dados.</p>
              <div className="project-tech">
                <span className="tech-tag">Digital</span>
                <span className="tech-tag">Dados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 