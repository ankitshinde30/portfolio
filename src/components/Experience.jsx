function Experience() {
  return (
    <section id="experience" className="p-section skills-bg">
      <div className="p-container">
        <span className="section-label reveal">Work History</span>
        <h2 className="section-title reveal reveal-d1">Experience</h2>

        <div className="timeline reveal reveal-d2">
          <div className="tl-item">
            <div className="tl-dot" />
            <div className="tl-card">
              <h3 className="tl-title">Full Stack Developer Intern</h3>
              <div className="tl-sub">
                Edunet Foundation
                <span className="tl-badge">Remote</span>
                <span className="tl-badge">2024</span>
              </div>
              <ul className="tl-list">
                <li>Developed a full-featured MERN stack e-commerce application</li>
                <li>Built responsive, accessible UI components using React</li>
                <li>Implemented and integrated RESTful APIs for product and user management</li>
                <li>Optimised API response times and improved overall performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
