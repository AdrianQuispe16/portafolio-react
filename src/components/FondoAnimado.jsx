import { useEfectosVisuales } from "../hooks/useEfectosVisuales";
export default function FondoAnimado() {
  useEfectosVisuales();
  return (
    <div className="bg-mesh" aria-hidden="true">
      <div className="glow g1"></div>
      <div className="glow g2"></div>
      <div className="glow g3"></div>
      <div className="glow g4"></div>
      <div className="bg-grid"></div>
      <canvas id="bgParticles"></canvas>
      <div className="cursor-glow" id="cursorGlow"></div>
    </div>
  );
}
