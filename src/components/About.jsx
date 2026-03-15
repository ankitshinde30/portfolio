function About() {
  return (
    <section id="about" className="p-section">
      <div className="p-container">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-label reveal">About Me</span>
            <h2 className="section-title reveal reveal-d1">
              Passionate about
              <br />
              great software
            </h2>

            <p className="reveal reveal-d2">
              I'm an aspiring{" "}
              <span className="about-accent">Java Full Stack Developer</span>{" "}
              with a strong foundation in designing, developing, and deploying
              scalable web applications.
            </p>
            <p className="reveal reveal-d3">
              Skilled in <span className="about-accent">React, JavaScript,
              Bootstrap, REST APIs</span> and database design. Passionate about
              solving real-world problems using modern technologies.
            </p>
            <p className="reveal reveal-d4">
              Currently pursuing opportunities where I can contribute, grow, and
              continue delivering meaningful user experiences.
            </p>
          </div>

          <div className="about-stats reveal reveal-d2">
            <div className="stat-card">
              <div className="stat-num">8.93</div>
              <div className="stat-label">CGPA — B.Sc CS</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">3+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">MERN</div>
              <div className="stat-label">Stack Proficiency</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">1</div>
              <div className="stat-label">Internship</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
