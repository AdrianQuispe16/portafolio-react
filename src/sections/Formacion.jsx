export default function Formacion() {
  return (
    <section id="formacion">
      <div className="contenedor">
        <div className="section-head reveal">
          <div className="section-eyebrow">Formación</div>
          <h2>Educación y certificaciones</h2>
          <p>
            Formación técnica y programas de especialización en desarrollo y
            datos.
          </p>
        </div>
        <div className="edu-grid reveal">
          <div className="edu-card">
            <div className="edu-top">
              <div className="edu-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <span className="edu-year">SENATI</span>
            </div>
            <div className="edu-content">
              <b>
                Profesional Técnico en Ingeniería de Software con Inteligencia
                Artificial
              </b>
              <span>
                Servicio Nacional de Adiestramiento en Trabajo Industrial
              </span>
            </div>
            <div className="edu-tag">Título Técnico</div>
          </div>
          <div className="edu-card">
            <div className="edu-top">
              <div className="edu-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <span className="edu-year">Ene 2024</span>
            </div>
            <div className="edu-content">
              <b>Programador Full Stack</b>
              <span>Programa ONE — Oracle Next Education</span>
            </div>
            <div className="edu-tag">Certificación</div>
          </div>
          <div className="edu-card">
            <div className="edu-top">
              <div className="edu-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <span className="edu-year">Dic 2023</span>
            </div>
            <div className="edu-content">
              <b>Programming Essentials in Python</b>
              <span>CISCO</span>
            </div>
            <div className="edu-tag">Certificación</div>
          </div>
          <div className="edu-card">
            <div className="edu-top">
              <div className="edu-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <span className="edu-year">Beca</span>
            </div>
            <div className="edu-content">
              <b>Beca Empleabilidad</b>
              <span>Ministerio de Trabajo del Perú</span>
            </div>
            <div className="edu-tag">Reconocimiento</div>
          </div>
        </div>
      </div>
    </section>
  );
}
