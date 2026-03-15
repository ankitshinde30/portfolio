function Contact() {
  return (
    <section id="contact" className="p-section contact-bg">
      <div className="p-container">
        <div className="contact-grid">
          <div className="contact-intro">
            <span className="section-label reveal">Get In Touch</span>
            <h2 className="section-title reveal reveal-d1">Let's Connect</h2>
            <p className="reveal reveal-d2">
              I'm currently open to full-time roles and freelance projects.
              Whether you have a question or just want to say hi — my inbox is
              always open!
            </p>
          </div>

          <div className="contact-items reveal reveal-d2">
            <a
              href="mailto:ankit.shinde2611@gmail.com"
              className="contact-item"
            >
              <div className="c-icon">✉</div>
              ankit.shinde2611@gmail.com
            </a>

            <a href="tel:+919867668071" className="contact-item">
              <div className="c-icon">📞</div>
              +91 9867 668 071
            </a>

            <div className="social-row">
              <a
                href="https://github.com/ankitshinde30"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="GitHub"
              >
                GH
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="LinkedIn"
              >
                LI
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
