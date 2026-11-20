import InsigniaHabilidad from "./InsigniaHabilidad";

export default function TarjetaProyecto({ proyecto, visible, onViewImage }) {

  function moverLuz(evento) {
    const tarjeta = evento.currentTarget;
    const rect = tarjeta.getBoundingClientRect();
    tarjeta.style.setProperty("--mx", `${evento.clientX - rect.left}px`);
    tarjeta.style.setProperty("--my", `${evento.clientY - rect.top}px`);
  }
  
  return (
    <article
      className={`project ${proyecto.categoria} ${visible ? "fade-in" : "hidden"}`}
      data-cat={proyecto.categoria}
      onPointerMove={moverLuz}
    >
      <figure className="project-media">
        <div className="code-head project-media-head" aria-hidden="true">
          <div className="code-dots">
            <div className="code-dot r"></div>
            <div className="code-dot y"></div>
            <div className="code-dot g"></div>
          </div>
        </div>
        {proyecto.imagen ? (
          <button
            type="button"
            className="project-image-button"
            onClick={() => onViewImage(proyecto)}
            aria-label={`Ampliar imagen de ${proyecto.titulo}`}
          >
            <img src={proyecto.imagen} alt={proyecto.titulo} />
            <span className="project-image-hint" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="10.8" cy="10.8" r="6.8" />
                <path d="m16 16 4.5 4.5M10.8 7.8v6M7.8 10.8h6" />
              </svg>
              Ver imagen completa
            </span>
          </button>
        ) : (
          <div className="media-empty">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="16" rx="2.5" />
              <circle cx="8.5" cy="9.5" r="1.6" />
              <path d="M21 16l-5-5-8 8" />
            </svg>
            <span>Espacio para imagen</span>
            <small>Captura del sistema, dashboard o diagrama</small>
          </div>
        )}
      </figure>
      <span className={`project-tag ${proyecto.categoria}`}>
        {proyecto.etiqueta}
      </span>
      <h4>{proyecto.titulo}</h4>
      <div className="project-co">{proyecto.empresa}</div>
      {proyecto.resultado}
      <div className="project-stack skill-list">
        {proyecto.stack.map((nombre) => (
          <InsigniaHabilidad key={nombre} nombre={nombre} />
        ))}
      </div>
      {proyecto.extra}
      {proyecto.enlaces?.length ? (
        <div className="project-links">
          {proyecto.enlaces.map((enlace) =>
            enlace.url ? (
              <a
                className="project-link"
                key={enlace.nombre}
                href={enlace.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {enlace.nombre}
              </a>
            ) : (
              <span
                className="project-link is-placeholder"
                key={enlace.nombre}
                aria-disabled="true"
                title="El enlace se activará cuando se agregue la URL"
              >
                {enlace.nombre}
              </span>
            ),
          )}
        </div>
      ) : null}
    </article>
  );
}
