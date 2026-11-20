import { insignias } from "../data/habilidades";
import { iconosTecnologias } from "../data/tecnologias";
const trazos = {
  ETL: <path d="M4 8h13m-3-3l3 3-3 3M20 16H7m3-3l-3 3 3 3" />,
  "SQL complejo": (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </>
  ),
  Scrum: <path d="M20 12a8 8 0 11-2.4-5.7M20 4v4h-4" />,
  "Metodologías ágiles": <path d="M13 3L5 14h6l-1 7 8-11h-6z" />,
};
export default function InsigniaHabilidad({ nombre }) {
  const [texto, fondo, color] = insignias[nombre] || [nombre.slice(0, 2)];
  const icono = iconosTecnologias[nombre];
  return (
    <span>
      <i
        aria-hidden="true"
        className={`ti ${icono ? "ti-image" : trazos[nombre] ? "gl" : texto.length >= 3 ? "sm" : ""}`}
        style={{ "--c": fondo, color }}
      >
        {icono ? (
          <img src={icono} alt="" />
        ) : trazos[nombre] ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {trazos[nombre]}
          </svg>
        ) : (
          texto
        )}
      </i>
      {nombre}
    </span>
  );
}
