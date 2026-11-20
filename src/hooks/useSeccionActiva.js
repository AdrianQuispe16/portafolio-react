import { useEffect, useState } from "react";
export function useSeccionActiva() {
  const [seccion, setSeccion] = useState("inicio");
  useEffect(() => {
    let frame;
    const secciones = [...document.querySelectorAll("section[id], header[id]")];

    const establecerDesdeHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) setSeccion(hash);
    };

    const actualizar = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let actual = "inicio";
        secciones.forEach((el) => {
          if (el.offsetTop <= scrollY + 120) actual = el.id;
        });
        const maximo = document.documentElement.scrollHeight - innerHeight;
        if (maximo > 0 && scrollY >= maximo - 8) actual = "contacto";
        setSeccion(actual);
        const progreso = document.getElementById("scrollProgress");
        if (progreso)
          progreso.style.transform = `scaleX(${maximo > 0 ? Math.min(1, scrollY / maximo) : 0})`;
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setSeccion(visible.target.id);
      },
      {
        rootMargin: "-120px 0px -45% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    secciones.forEach((seccionElement) => observer.observe(seccionElement));
    window.addEventListener("scroll", actualizar, { passive: true });
    window.addEventListener("resize", actualizar);
    window.addEventListener("hashchange", establecerDesdeHash);
    establecerDesdeHash();
    actualizar();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", actualizar);
      window.removeEventListener("resize", actualizar);
      window.removeEventListener("hashchange", establecerDesdeHash);
    };
  }, []);
  return seccion;
}
