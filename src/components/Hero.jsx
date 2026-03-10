import React from "react";

function Hero() {
  return (
    
<section className="hero-section bg-dark text-white text-center py-5">


      <div className="container">

        <h1 className="display-4">Ankit Vijay Shinde</h1>

        <p className="lead">
          Java Full Stack Developer | MERN Stack Developer
        </p>

        <p>
          Aspiring Full Stack Developer passionate about building
          scalable web applications using React, Node.js and modern
          technologies.
        </p>

        <a href="#projects" className="btn btn-primary m-2">
          View Projects
        </a>

        <a
          href="mailto:ankit.shinde2611@gmail.com"
          className="btn btn-outline-light m-2"
        >
          Contact Me
        </a>

      </div>

    </section>
  );
}

export default Hero;
