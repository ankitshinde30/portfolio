function Resume() {
  return (
    <section id="resume" className="p-section skills-bg">
      <div className="p-container">
        <div className="resume-card reveal">
          <h3>Let's work together</h3>
          <p>
            Download my resume for a full overview of my experience,
            education, and technical skills.
          </p>
          <a
            href="./assets/Ankit_Shinde.pdf"
            download
            className="btn-accent"
            style={{ display: "inline-flex", margin: "0 auto" }}
          >
            Download Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
