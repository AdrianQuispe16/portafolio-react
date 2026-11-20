import { useEffect, useRef, useState } from "react";
import { proyectos } from "../data/proyectos";
import TarjetaProyecto from "../components/TarjetaProyecto";

export default function Proyectos() {
  const [filtro, setFiltro] = useState("all");
  const [imagenActiva, setImagenActiva] = useState(null);
  const modalRef = useRef(null);
  const cantidad = proyectos.filter(
    (p) => filtro === "all" || p.categoria === filtro,
  ).length;

  useEffect(() => {
    if (imagenActiva && modalRef.current && !modalRef.current.open) {
      modalRef.current.showModal();
    }
  }, [imagenActiva]);

  return (
    <>
      <section id="proyectos">
        <div className="contenedor">
          <div className="section-head reveal">
            <div className="section-eyebrow">Proyectos</div>
            <h2>Proyectos de datos y desarrollo</h2>
            <p>
              Dashboards, automatización de reportes y sistemas en producción.
              Filtra por área de especialidad.
            </p>
          </div>
          <div className="projects-header reveal">
            <div className="projects-count">
              Mostrando <b id="visibleCount">{cantidad}</b> proyectos
            </div>
            <div className="filters" role="group" aria-label="Filtrar proyectos">
              <button
                className={filtro === "all" ? "filter-btn active" : "filter-btn"}
                data-filter="all"
                onClick={() => setFiltro("all")}
                aria-pressed={filtro === "all"}
              >
                Todos <span className="count">6</span>
              </button>
              <button
                className={`filter-btn data ${filtro === "data" ? "active" : ""}`}
                data-filter="data"
                onClick={() => setFiltro("data")}
                aria-pressed={filtro === "data"}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="M7 14l4-4 4 4 5-5" />
                </svg>
                Análisis de Datos <span className="count">3</span>
              </button>
              <button
                className={`filter-btn dev ${filtro === "dev" ? "active" : ""}`}
                data-filter="dev"
                onClick={() => setFiltro("dev")}
                aria-pressed={filtro === "dev"}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                Programación <span className="count">3</span>
              </button>
            </div>
          </div>
          <div className="projects" id="projectsGrid">
            {proyectos.map((proyecto) => (
              <TarjetaProyecto
                key={`${filtro}-${proyecto.id}`}
                proyecto={proyecto}
                visible={filtro === "all" || filtro === proyecto.categoria}
                onViewImage={setImagenActiva}
              />
            ))}
          </div>
        </div>
      </section>
      <dialog
        ref={modalRef}
        className="project-lightbox"
        aria-labelledby="project-lightbox-title"
        onClose={() => setImagenActiva(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        {imagenActiva && (
          <>
            <div className="code-head project-lightbox-head">
              <div className="code-dots" aria-hidden="true">
                <div className="code-dot r"></div>
                <div className="code-dot y"></div>
                <div className="code-dot g"></div>
              </div>
              <h3 id="project-lightbox-title">{imagenActiva.titulo}</h3>
              <button
                type="button"
                className="project-lightbox-close"
                onClick={() => modalRef.current?.close()}
                aria-label="Cerrar imagen"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <img
              className="project-lightbox-image"
              src={imagenActiva.imagen}
              alt={imagenActiva.titulo}
            />
          </>
        )}
      </dialog>
    </>
  );
}
