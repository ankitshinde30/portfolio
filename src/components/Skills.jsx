import React from "react";

function Skills() {

  const skills = [
    "JavaScript",
    "React",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Git",
    "GitHub",
    "Node.js",
    "MongoDB"
  ];

  return (
    <section id="skills" className="bg-light py-5">

      <div className="container text-center">

        <h2 className="mb-4">
          <i className="bi bi-tools"></i> Skills
        </h2>

        {skills.map((skill, index) => (
          <span key={index} className="badge bg-primary m-2 p-3">
            {skill}
          </span>
        ))}

      </div>

    </section>
  );
}

export default Skills;
