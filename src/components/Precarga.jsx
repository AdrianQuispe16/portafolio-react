import { useEffect, useState } from "react";
export default function Precarga() {
  const [progreso, setProgreso] = useState(0);
  const [oculto, setOculto] = useState(false);
  useEffect(() => {
    const inicio = performance.now();
    let frame, timer;
    const paso = (ahora) => {
      const t = Math.min(1, (ahora - inicio) / 1900);
      setProgreso((t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2) * 100);
      if (t < 1) frame = requestAnimationFrame(paso);
      else timer = setTimeout(() => setOculto(true), 300);
    };
    frame = requestAnimationFrame(paso);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      id="preloader"
      className={oculto ? "hidden" : ""}
      role="status"
      aria-label="Cargando portafolio"
      aria-hidden={oculto}
    >
      <div className="loader-stage">
        <div className="loader-ring" />
        <svg
          className="loader-logo"
          viewBox="0 0 64 64"
          role="img"
          aria-label="Logo AQ"
        >
          <use href="#aq-logo" />
        </svg>
      </div>
      <div className="loader-name">Adrian Quispe</div>
      <div className="loader-role"> Data Analyst · Full Stack</div>
      <div className="loader-bar-bg">
        <div className="loader-bar-fill" style={{ width: `${progreso}%` }} />
      </div>
      <div className="loader-pct">{Math.round(progreso)}%</div>
    </div>
  );
}
