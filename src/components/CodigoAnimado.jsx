import { useEffect, useState } from "react";
const lineas = [
  [["kw", "<?php"]],
  [["com", "// perfil híbrido"]],
  [
    ["var", "$perfil"],
    ["", " = ["],
  ],
  [
    ["", "  "],
    ["str", "'rol'"],
    ["", " => "],
    ["str", "'Full Stack'"],
    ["", ","],
  ],
  [
    ["", "  "],
    ["str", "'stack'"],
    ["", " => ["],
    ["str", "'PHP'"],
    ["", ", "],
    ["str", "'MySQL'"],
    ["", "],"],
  ],
  [
    ["", "  "],
    ["str", "'enfoque'"],
    ["", " => "],
    ["str", "'datos → decisiones'"],
  ],
  [["", "];"]],
  [
    ["kw", "echo"],
    ["", " "],
    ["fn", "json_encode"],
    ["", "("],
    ["var", "$perfil"],
    ["", ");"],
  ],
];
const longitud = lineas.reduce(
  (n, linea) => n + linea.reduce((m, token) => m + token[1].length, 0) + 1,
  0,
);
export default function CodigoAnimado() {
  const [letras, setLetras] = useState(0);
  useEffect(() => {
    let intervalo;
    const timer = setTimeout(() => {
      intervalo = setInterval(
        () =>
          setLetras((n) => {
            if (n >= longitud) clearInterval(intervalo);
            return Math.min(longitud, n + 1);
          }),
        28,
      );
    }, 2650);
    return () => {
      clearTimeout(timer);
      clearInterval(intervalo);
    };
  }, []);
  let restante = letras;
  return (
    <div className="code-body" id="typewriter">
      {lineas.map((linea, i) => {
        if (restante <= 0) return null;
        const tokens = linea.map(([clase, texto], j) => {
          const visible = texto.slice(0, Math.max(0, restante));
          restante -= texto.length;
          return (
            <span key={j} className={clase}>
              {visible}
            </span>
          );
        });
        const salto = restante > 0;
        restante--;
        return (
          <span key={i}>
            <span className="ln">{i + 1}</span>
            {tokens}
            {i === 7 && letras >= longitud && <span className="cursor-blink" />}
            {salto && i < 7 ? "\n" : ""}
          </span>
        );
      })}
    </div>
  );
}
