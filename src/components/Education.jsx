function Education() {
  return (
    <section id="education" className="p-section">
      <div className="p-container">
        <span className="section-label reveal">Academic Background</span>
        <h2 className="section-title reveal reveal-d1">Education</h2>

        <div className="timeline reveal reveal-d2">
          <div className="tl-item">
            <div className="tl-dot" />
            <div className="tl-card">
              <h3 className="tl-title">B.Sc. Computer Science</h3>
              <div className="tl-sub">
                University of Mumbai
                <span className="tl-badge">2024</span>
                <span className="tl-badge">CGPA 8.93</span>
              </div>
              <ul className="tl-list">
                <li>Specialised in web technologies, algorithms, and database management</li>
                <li>Built multiple projects including full-stack web applications</li>
                <li>Graduated with distinction — CGPA 8.93</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
