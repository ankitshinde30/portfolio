import React from "react";

function Projects() {

  const projects = [

    {
      title: "E-commerce Website",
      description:
        "Built using MERN Stack with authentication, product listing, wishlist and inventory management.",
      github: "https://github.com/ankitshinde30/P4_E-commerce.git/"
    },

    {
      title: "Weather App",
      description:
        "React weather application using OpenWeatherMap API with Axios and React Hooks.",
      github: "https://github.com/ankitshinde30/Weather-app-ReactJS"
    },

    {
      title: "React-Uncontrolled-Form",
      description:
        "A React application demonstrating the use of uncontrolled components for form handling.",
      github: "https://github.com/ankitshinde30/React-Uncontrolled-Form"
    }

  ];

  return (
    <section id="projects" className="py-5">

      <div className="container">

        <h2 className="text-center mb-5">
          <i className="bi bi-kanban"></i> Projects
        </h2>

        <div className="row g-4">

          {projects.map((project, index) => (

            <div className="col-md-6 col-lg-4 d-flex" key={index}>

              <div className="card shadow project-card w-100">

                <div className="card-body d-flex flex-column">

                  <h5 className="card-title">{project.title}</h5>

                  <p className="card-text flex-grow-1">
                    {project.description}
                  </p>

                  <a
                    href={project.github}
                    className="btn btn-dark mt-auto"
                  >
                    <i className="bi bi-github"></i> View Code
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;
