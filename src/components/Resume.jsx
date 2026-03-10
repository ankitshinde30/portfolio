import React from "react";

function Resume() {
  return (
    <section id="resume" className="py-5 bg-light">

      <div className="container text-center">

        <h2 className="mb-4">
          <i className="bi bi-file-earmark-arrow-down"></i> Resume
        </h2>

        <p className="mb-4">
          Download my resume to learn more about my experience,
          education, and technical skills.
        </p>

        <a
          href="./assets/Ankit Shinde.pdf"
          download
          className="btn btn-primary btn-lg"
        >
          <i className="bi bi-download me-2"></i>
          Download Resume
        </a>

      </div>

    </section>
  );
}

export default Resume;
