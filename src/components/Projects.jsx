function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      desc: "Full-featured MERN Stack app with JWT authentication, product listing, wishlist, and inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/ankitshinde30/P4_E-commerce.git/",
      icon: "🛒",
    },
    {
      title: "Weather App",
      desc: "React weather application using the OpenWeatherMap API with Axios, React Hooks, and live forecasts.",
      tech: ["React", "Axios", "OpenWeatherMap"],
      github: "https://github.com/ankitshinde30/Weather-app-ReactJS",
      icon: "🌤",
    },
    {
      title: "Uncontrolled Form",
      desc: "A React application demonstrating uncontrolled components and refs for efficient form handling.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/ankitshinde30/React-Uncontrolled-Form",
      icon: "📝",
    },
  ];

  return (
    <section id="projects" className="p-section">
      <div className="p-container">
        <span className="section-label reveal">What I've Built</span>
        <h2 className="section-title reveal reveal-d1">Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className={`proj-card reveal reveal-d${i + 1}`} key={p.title}>
              <div className="proj-head">
                <div className="proj-icon">{p.icon}</div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-link"
                >
                  GitHub ↗
                </a>
              </div>

              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>

              <div className="proj-tech">
                {p.tech.map((t) => (
                  <span className="tech-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
