import { useState, useEffect, useRef } from "react";

function Hero() {
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const canvasRef = useRef(null);

  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Java Developer",
    "React Developer",
  ];

  // ── Typewriter ────────────────────────────────────
  useEffect(() => {
    const role = roles[roleIdx];
    let i = 0;
    let t;
    const type = () => {
      if (i <= role.length) {
        setTyped(role.slice(0, i++));
        t = setTimeout(type, 75);
      } else {
        t = setTimeout(() => setRoleIdx((p) => (p + 1) % roles.length), 2200);
      }
    };
    type();
    return () => clearTimeout(t);
  }, [roleIdx]);

  // ── Dot grid canvas ───────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let mouse = { x: -9999, y: -9999 };

    const SPACING   = 38;
    const BASE_R    = 1.2;
    const MAX_R     = 5;
    const GLOW_DIST = 170;
    const ACCENT    = "0, 212, 255";

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.012;

      const cols = Math.ceil(canvas.width  / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * SPACING;
          const y = r * SPACING;

          const wave = Math.sin(time + c * 0.35 + r * 0.35) * 0.5 + 0.5;

          const dx   = x - mouse.x;
          const dy   = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const prox = dist < GLOW_DIST ? 1 - dist / GLOW_DIST : 0;

          const radius = BASE_R + wave * 0.6 + prox * (MAX_R - BASE_R);
          const alpha  = 0.12 + wave * 0.1 + prox * 0.7;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${ACCENT}, ${alpha})`;
          ctx.fill();

          if (prox > 0.2) {
            const la = prox * 0.15;
            if (c < cols - 1) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x + SPACING, y);
              ctx.strokeStyle = `rgba(${ACCENT}, ${la})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
            if (r < rows - 1) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x, y + SPACING);
              ctx.strokeStyle = `rgba(${ACCENT}, ${la})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="p-hero" id="top">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-glow" />
      <div className="hero-glow2" />

      <div className="p-container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-available reveal">
          <span className="pulse-dot" />
          Open to opportunities
        </div>

        <h1 className="hero-name reveal reveal-d1">
          Ankit Vijay
          <br />
          Shinde
        </h1>

        <div className="hero-role-wrap reveal reveal-d2">
          <span className="hero-role-typed">{typed}</span>
          <span className="cursor-blink">|</span>
        </div>

        <p className="hero-desc reveal reveal-d3">
          Aspiring Full Stack Developer passionate about building scalable web
          applications using React, Node.js and modern technologies.
        </p>

        <div className="hero-cta reveal reveal-d4">
          <a href="#projects" className="btn-accent">
            View Projects →
          </a>
          <a href="mailto:ankit.shinde2611@gmail.com" className="btn-ghost">
            Contact Me
          </a>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}

export default Hero;
