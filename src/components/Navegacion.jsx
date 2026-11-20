import { useEffect, useState } from "react";
import { useTema } from "../hooks/useTema";
import { useSeccionActiva } from "../hooks/useSeccionActiva";

export default function Navegacion() {
  const [abierto, setAbierto] = useState(false);
  const { alternarTema } = useTema();
  const seccion = useSeccionActiva();
  const claseEnlace = (id, base = "") =>
    `${base} ${seccion === id ? `active ${id === "proyectos" ? "dev" : id === "skills" ? "data" : ""}` : ""}`;
  useEffect(() => {
    const cerrar = () => {
      if (innerWidth > 900) setAbierto(false);
    };
    window.addEventListener("resize", cerrar);
    return () => window.removeEventListener("resize", cerrar);
  }, []);
  return (
    <nav>
      <div className="nav-inner">
        <a href="#inicio" className="logo">
          <span className="logo-mark">
            <svg
              className="logo-svg"
              viewBox="0 0 64 64"
              role="img"
              aria-label="Logo Adrian Quispe"
            >
              <use href="#aq-logo" />
            </svg>
            <svg className="logo-glow" viewBox="0 0 64 64" aria-hidden="true">
              <g clipPath="url(#aqClip)">
                <circle
                  id="glow3"
                  r="9"
                  cx="32"
                  cy="32"
                  fill="url(#aqGlowHead)"
                  opacity=".35"
                />
                <circle
                  id="glow2"
                  r="11"
                  cx="32"
                  cy="32"
                  fill="url(#aqGlowHead)"
                  opacity=".6"
                />
                <circle
                  id="glow1"
                  r="14"
                  cx="32"
                  cy="32"
                  fill="url(#aqGlowHead)"
                />
              </g>
            </svg>
          </span>
          
          <div>
            Adrian Quispe
            <small> Data Analyst &amp; Full Stack</small>
          </div>
        </a>
        <div className="nav-links" id="navLinks">
          <a
            href="#inicio"
            data-section="inicio"
            aria-current={seccion === "inicio" ? "location" : undefined}
            className={claseEnlace("inicio")}
          >
            Inicio
          </a>
          <a
            href="#sobre"
            data-section="sobre"
            aria-current={seccion === "sobre" ? "location" : undefined}
            className={claseEnlace("sobre")}
          >
            Sobre mí
          </a>
          <a
            href="#proyectos"
            data-section="proyectos"
            aria-current={seccion === "proyectos" ? "location" : undefined}
            className={claseEnlace("proyectos")}
          >
            Proyectos
          </a>
          <a
            href="#experiencia"
            data-section="experiencia"
            aria-current={seccion === "experiencia" ? "location" : undefined}
            className={claseEnlace("experiencia")}
          >
            Experiencia
          </a>
          <a
            href="#formacion"
            data-section="formacion"
            aria-current={seccion === "formacion" ? "location" : undefined}
            className={claseEnlace("formacion")}
          >
            Formación
          </a>
          <a
            href="#skills"
            data-section="skills"
            aria-current={seccion === "skills" ? "location" : undefined}
            className={claseEnlace("skills")}
          >
            Habilidades
          </a>
          <a
            href="#contacto"
            className={claseEnlace("contacto")}
            data-section="contacto"
            aria-current={seccion === "contacto" ? "location" : undefined}
          >
            Contacto
          </a>
          <button
            className="theme-toggle"
            id="themeToggle"
            onClick={alternarTema}
            aria-label="Cambiar tema"
          >
            <svg
              className="icon-moon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
            <svg
              className="icon-sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </button>
          <button
            className="nav-burger"
            id="navBurger"
            aria-label="Abrir menú"
            aria-expanded={abierto}
            onClick={() => setAbierto(!abierto)}
            aria-controls="mobileMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div
        className={`mobile-menu ${abierto ? "open" : ""}`}
        onClick={() => setAbierto(false)}
        id="mobileMenu"
      >
        <a
          href="#inicio"
          data-section="inicio"
          aria-current={seccion === "inicio" ? "location" : undefined}
          className={claseEnlace("inicio")}
        >
          Inicio
        </a>
        <a
          href="#sobre"
          data-section="sobre"
          aria-current={seccion === "sobre" ? "location" : undefined}
          className={claseEnlace("sobre")}
        >
          Sobre mí
        </a>
        <a
          href="#proyectos"
          data-section="proyectos"
          aria-current={seccion === "proyectos" ? "location" : undefined}
          className={claseEnlace("proyectos")}
        >
          Proyectos
        </a>
        <a
          href="#experiencia"
          data-section="experiencia"
          aria-current={seccion === "experiencia" ? "location" : undefined}
          className={claseEnlace("experiencia")}
        >
          Experiencia
        </a>
        <a
          href="#formacion"
          data-section="formacion"
          aria-current={seccion === "formacion" ? "location" : undefined}
          className={claseEnlace("formacion")}
        >
          Formación
        </a>
        <a
          href="#skills"
          data-section="skills"
          aria-current={seccion === "skills" ? "location" : undefined}
          className={claseEnlace("skills")}
        >
          Habilidades
        </a>
        <a
          href="#contacto"
          data-section="contacto"
          aria-current={seccion === "contacto" ? "location" : undefined}
          className={claseEnlace("contacto")}
        >
          Contacto
        </a>
      </div>
      <div className="scroll-progress" id="scrollProgress"></div>
    </nav>
  );
}
