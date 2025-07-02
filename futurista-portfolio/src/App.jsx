import './App.css';

function App() {
  return (
    <div className="futuristic-bg">
      <header className="header">
        <h1 className="main-title">PORTFÓLIO FUTURISTA</h1>
        <p className="subtitle">Tecnologia, Design e Inovação</p>
      </header>
      <section className="hero-section">
        <div className="glass-card">
          <h2>Bem-vindo ao Futuro</h2>
          <p>Explore projetos inovadores com visual tecnológico, minimalista e escuro.</p>
        </div>
        <div className="bg-anim">
          <div className="red-neon-line"></div>
          <div className="red-neon-line"></div>
          <div className="red-neon-line"></div>
        </div>
      </section>
      <section className="projects-section">
        <h2 className="section-title">Projetos</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Interface Neural</h3>
            <p>Conexão direta com tecnologia de ponta.</p>
          </div>
          <div className="project-card">
            <h3>Realidade Aumentada</h3>
            <p>Transforme o mundo ao seu redor com AR.</p>
          </div>
          <div className="project-card">
            <h3>Hologramas 3D</h3>
            <p>Imagens tridimensionais no espaço real.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
