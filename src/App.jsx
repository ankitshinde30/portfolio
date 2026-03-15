import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    // Double rAF guarantees all components have painted before we query
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const obs = new IntersectionObserver(
          (entries) =>
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("in");
                obs.unobserve(e.target); // fire once then stop watching
              }
            }),
          {
            threshold: 0.08,
            // Positive rootMargin ensures elements already in viewport
            // on page load (like Hero) fire immediately
            rootMargin: "0px 0px -40px 0px",
          }
        );

        document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

        // Clean up properly
        return () => obs.disconnect();
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
