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

    // Simulate sending (in a real application, you would send to an API)
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
            <h1>Message Sent!</h1>
            <p>Thank you for reaching out. I'll respond soon!</p>
            <button
              className="btn btn-primary"
              onClick={() => setSubmitted(false)}
            >
              Send New Message
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
          <h1>Get In Touch</h1>
          <p className="lead">
            Have a project in mind? Want to talk about technology? I'd be happy
            to hear from you!
          </p>
        </section>

        <section className="contact-content">
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>
              I'm always open to new opportunities, collaborations and
              interesting conversations about technology.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <h3>📧 Email</h3>
                <p>eliseusilva.info@gmail.com</p>
              </div>

              <div className="contact-method">
                <h3>💼 LinkedIn</h3>
                <p>
                  <a
                    href="https://linkedin.com/in/eliseu03"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/eliseu03
                  </a>
                </p>
              </div>

              <div className="contact-method">
                <h3>🐙 GitHub</h3>
                <p>
                  <a
                    href="https://github.com/koltee"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/koltee
                  </a>
                </p>
              </div>
            </div>

            <div className="availability">
              <h3>Availability</h3>
              <p>
                Currently <strong>available</strong> for freelance projects and
                remote work opportunities.
              </p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send a Message</h2>

              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
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
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What would you like to talk about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your project, idea, or question..."
                  rows={6}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
