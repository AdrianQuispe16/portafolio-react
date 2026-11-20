import CodigoAnimado from "../components/CodigoAnimado";
export default function Inicio() {
  return (
    <header className="hero" id="inicio">
      <div className="contenedor">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              Disponible para nuevas oportunidades
            </div>
            <h1>
              Transformo datos en decisiones y{" "}
              <span className="accent">desarrollo soluciones inteligentes.</span>
            </h1>
            <p className="lead">
              Analista de Datos y Desarrollador Full Stack con más de 2 años de experiencia creando dashboards de Business Intelligence, automatizando procesos y desarrollando sistemas web que generan valor para los negocios.
            </p>
            <div className="hero-actions">
              <a href="#proyectos" className="btn btn-primary">
                Ver proyectos →
              </a>
              <a
                href="mailto:adrianquispe515@gmail.com"
                className="btn btn-ghost"
              >
                Contactarme
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <b>+2 años</b>
                <span>Experiencia profesional</span>
              </div>
              <div className="stat">
                <b>SENATI</b>
                <span>Formación profesional técnica.</span>
              </div>
              <div className="stat">
                <b>Perfiles</b>
                <span>Data + Full Stack</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">

            <div className="chart-window">
              <div className="chart-head">
                <div className="chart-title">
                  <span className="live-dot"></span>KPIs · 2025 vs 2026
                </div>
                <div className="chart-legend">
                  <span className="l2025">2025</span>
                  <span className="l2026">2026</span>
                </div>
              </div>
              <div className="chart-body">
                <div className="chart-bars" id="heroBars">
                  <div className="chart-group">
                    <div className="chart-bar" data-h="45"></div>
                    <div className="chart-bar b26" data-h="62"></div>
                  </div>
                  <div className="chart-group">
                    <div className="chart-bar" data-h="52"></div>
                    <div className="chart-bar b26" data-h="70"></div>
                  </div>
                  <div className="chart-group">
                    <div className="chart-bar" data-h="48"></div>
                    <div className="chart-bar b26" data-h="58"></div>
                  </div>
                  <div className="chart-group">
                    <div className="chart-bar" data-h="60"></div>
                    <div className="chart-bar b26" data-h="78"></div>
                  </div>
                  <div className="chart-group">
                    <div className="chart-bar" data-h="55"></div>
                    <div className="chart-bar b26" data-h="82"></div>
                  </div>
                  <div className="chart-group">
                    <div className="chart-bar" data-h="58"></div>
                    <div className="chart-bar b26" data-h="90"></div>
                  </div>
                </div>
                <div className="chart-labels">
                  <span>Ene</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Abr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
                <div className="chart-kpis">
                  <div className="chart-kpi">
                    <div className="label">Ingresos</div>
                    <div className="value">+38%</div>
                    <div className="delta">▲ vs 2025</div>
                  </div>
                  <div className="chart-kpi">
                    <div className="label">Servicios O.A.</div>
                    <div className="value">1.2K</div>
                    <div className="delta">▲ 2026</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="code-window">
              <div className="code-head">
                <div className="code-dots">
                  <div className="code-dot r"></div>
                  <div className="code-dot y"></div>
                  <div className="code-dot g"></div>
                </div>
                <div className="code-title">perfil.php</div>
              </div>

              <CodigoAnimado />
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
