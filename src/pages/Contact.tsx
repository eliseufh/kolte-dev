import { useState } from "react";
import "./Contact.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio (em uma aplicação real, você enviaria para uma API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="contact-page">
        <div className="container">
          <div className="success-message">
            <h1>Mensagem Enviada!</h1>
            <p>Obrigado por entrar em contato. Responderei em breve!</p>
            <button
              className="btn btn-primary"
              onClick={() => setSubmitted(false)}
            >
              Enviar Nova Mensagem
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <div className="container">
        <section className="contact-hero">
          <h1>Entre em Contato</h1>
          <p className="lead">
            Tem um projeto em mente? Quer conversar sobre tecnologia? Ficarei
            feliz em ouvir de você!
          </p>
        </section>

        <section className="contact-content">
          <div className="contact-info">
            <h2>Vamos Conectar</h2>
            <p>
              Estou sempre aberto a novas oportunidades, colaborações e
              conversas interessantes sobre tecnologia.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <h3>📧 Email</h3>
                <p>kolte@exemplo.com</p>
              </div>

              <div className="contact-method">
                <h3>💼 LinkedIn</h3>
                <p>
                  <a
                    href="https://linkedin.com/in/kolte"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/kolte
                  </a>
                </p>
              </div>

              <div className="contact-method">
                <h3>🐙 GitHub</h3>
                <p>
                  <a
                    href="https://github.com/kolte"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/kolte
                  </a>
                </p>
              </div>

              <div className="contact-method">
                <h3>🐦 Twitter</h3>
                <p>
                  <a
                    href="https://twitter.com/kolte"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @kolte
                  </a>
                </p>
              </div>
            </div>

            <div className="availability">
              <h3>Disponibilidade</h3>
              <p>
                Atualmente <strong>disponível</strong> para projetos freelance e
                oportunidades de trabalho remoto.
              </p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Envie uma Mensagem</h2>

              <div className="form-group">
                <label htmlFor="name">Nome *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Assunto *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Sobre o que você gostaria de conversar?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Descreva seu projeto, ideia ou dúvida..."
                  rows={6}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
