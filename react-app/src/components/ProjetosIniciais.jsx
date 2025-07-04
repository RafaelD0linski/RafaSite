import React from "react";

export default function ProjetosIniciais() {
  return (
    <section className="projetos-iniciais">
      <div className="container">
        <h2 className="section-title">Projetos Iniciais</h2>
        <div className="projects-grid">
          {[1,2,3,4,5,6].map((n) => (
            <div className="project-card" key={n}>
              <div className="project-content">
                <h3>Projeto {n}</h3>
                <p>Descrição breve do projeto {n}.</p>
                <button className="btn btn-secondary">Ver Mais</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 