import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Conecte-se</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>rafaeldolinski14@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+55 (46) 99138-2310 (WhatsApp)</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Pato Branco, Brasil</span>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Seu Nome" required />
              <div className="input-glow"></div>
            </div>
            <div className="form-group">
              <input type="email" placeholder="Seu Email" required />
              <div className="input-glow"></div>
            </div>
            <div className="form-group">
              <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
              <div className="input-glow"></div>
            </div>
            <button type="submit" className="btn btn-primary">
              <span>Enviar Mensagem</span>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 