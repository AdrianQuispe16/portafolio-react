import { useRef } from "react";
import { tecnologias } from "../data/tecnologias";

export default function CarruselTecnologias() {
  const arrastreRef = useRef(null);

  const iniciarArrastre = (event) => {
    if (event.button !== 0) return;

    const pista = event.currentTarget.querySelector(".carousel-track");
    if (!pista) return;

    const animacion = pista.getAnimations()[0] || null;
    const tiempo = animacion?.currentTime;
    const duracion = Number(animacion?.effect?.getTiming().duration) || 0;
    const transformacion = getComputedStyle(pista).transform;
    const valoresTransformacion = transformacion.match(/^matrix\(([^)]+)\)$/);
    const posicionX = valoresTransformacion
      ? Number(valoresTransformacion[1].split(",")[4])
      : 0;

    animacion?.pause();
    arrastreRef.current = {
      pointerId: event.pointerId,
      inicioX: event.clientX,
      inicioTiempo: typeof tiempo === "number" ? tiempo : 0,
      inicioPosicionX: posicionX,
      duracion,
      distanciaCiclo: pista.scrollWidth / 2 + 8,
      pista,
      animacion,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add("is-dragging");
  };

  const moverCarrusel = (event) => {
    const arrastre = arrastreRef.current;
    if (!arrastre || arrastre.pointerId !== event.pointerId) return;

    const desplazamiento = event.clientX - arrastre.inicioX;
    if (arrastre.animacion && arrastre.duracion && arrastre.distanciaCiclo) {
      const tiempo = arrastre.inicioTiempo -
        (desplazamiento / arrastre.distanciaCiclo) * arrastre.duracion;
      arrastre.animacion.currentTime =
        ((tiempo % arrastre.duracion) + arrastre.duracion) %
        arrastre.duracion;
      return;
    }

    arrastre.pista.style.transform =
      `translateX(${arrastre.inicioPosicionX + desplazamiento}px)`;
  };

  const finalizarArrastre = (event) => {
    const arrastre = arrastreRef.current;
    if (!arrastre || arrastre.pointerId !== event.pointerId) return;

    arrastreRef.current = null;
    event.currentTarget.classList.remove("is-dragging");
    arrastre.animacion?.play();
  };

  return (
    <div className="tech-carousel-section">
      <div className="tech-carousel-label">
        Tecnologías y herramientas que manejo
      </div>
      <div
        className="carousel-mask"
        onPointerDown={iniciarArrastre}
        onPointerMove={moverCarrusel}
        onPointerUp={finalizarArrastre}
        onPointerCancel={finalizarArrastre}
        onLostPointerCapture={finalizarArrastre}
        onDragStart={(event) => event.preventDefault()}
      >
        <div className="carousel-track" id="carouselTrack">
          {[...tecnologias, ...tecnologias].map((t, i) => (
            <div
              className="tech-item"
              key={i}
              aria-hidden={i >= tecnologias.length ? true : undefined}
            >
              {t.icono}
              <span>{t.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
