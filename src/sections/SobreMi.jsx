export default function SobreMi() {
  return (
    <section id="sobre">
      <div className="contenedor">
        <div className="section-head reveal">
          <div className="section-eyebrow">Sobre mí</div>
          <h2>Perfil : datos + código</h2>
          <p>
            Combino el análisis de datos y el desarrollo de software para
            transformar información en soluciones tecnológicas que optimizan
            procesos y respaldan la toma de decisiones.
          </p>
        </div>
        <div className="about-grid2">
          <div className="about-main reveal">
            <p className="about-lead">
              Desarrollador Full Stack y Analista de Datos con{" "}
              <strong>más de dos años de experiencia</strong>, profesional
              técnico titulado en Ingeniería de Software con Inteligencia
              Artificial, con experiencia en análisis de información,
              desarrollo de sistemas y soluciones tecnológicas.
            </p>
            <p className="about-body">
              Tengo experiencia en <strong>análisis de datos, SQL, Excel y Power BI</strong>,
              desarrollando dashboards, indicadores KPI y reportes que permiten
              interpretar información y evaluar resultados del negocio. Asimismo,
              participo en el ciclo completo del desarrollo de software, desde el
              levantamiento de requisitos hasta la implementación, creando sistemas
              web y soluciones que automatizan procesos y mejoran la gestión de
              la información.
            </p>
          </div>
          <aside className="about-card reveal">
            <div className="ac-block">
              <div className="meta-title">Especialidad</div>
              <div className="cv-badges">
                <span>+2 años de experiencia</span>
                <span className="a">Data Analyst</span>
                <span className="a">Power BI</span>
                <span className="a">SQL</span>
                <span className="a">ETL</span>
                <span className="d">Full Stack</span>
                <span className="d">MySQL</span>
                <span className="d">JavaScript</span>
                <span className="d">Python</span>
              </div>
            </div>
            <div className="ac-block">
              <div className="meta-title">Mi Educación </div>
              <ul className="meta-list">
                <li>
                  <span className="m-main">Ing. de Software con IA</span>
                  <span className="m-sub">SENATI · Técnico</span>
                </li>
                <li>
                  <span className="m-main">Data Analyst</span>
                  <span className="m-sub">DataCamp · Sep 2026</span>
                </li>
                <li>
                  <span className="m-main">Programador Full Stack</span>
                  <span className="m-sub">Oracle ONE · Ene 2024</span>
                </li>
              </ul>
            </div>
            <div className="ac-block">
              <div className="meta-title">Mi currículum</div>
              <div className="cv-head">
                <div className="cv-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
                    <path d="M14 3v5h5M9 13h6M9 17h4" />
                  </svg>
                </div>
                <div className="cv-title">
                  <b>CV Adrian Quispe</b>
                  <span>PDF</span>
                </div>
                <a
                  href="documents/CV Adrian Quispe.pdf"
                  download
                  className="btn btn-primary cv-btn"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 4v11M7.5 10.5L12 15l4.5-4.5M5 20h14" />
                  </svg>{" "}
                  Descargar
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
