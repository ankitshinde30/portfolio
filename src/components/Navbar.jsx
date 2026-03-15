import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["About", "Skills", "Projects", "Experience", "Resume", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`p-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="p-container nav-inner">

          {/* Logo */}
          <div className="nav-logo">
            <img src="./src/assets/AS_logo.png" alt="logo" />
            <a className="nav-brand" href="#top">
              Ankit Shinde<span>.</span>
            </a>
          </div>

          {/* Desktop Links */}
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navbar;
