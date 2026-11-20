export default function Experiencia() {
  return (
    <section id="experiencia">
      <div className="contenedor">
        <div className="section-head reveal">
          <div className="section-eyebrow">Experiencia</div>
          <h2>Trayectoria laboral</h2>
          <p>Roles donde combiné desarrollo de software y análisis de datos.</p>
        </div>
        <div className="timeline">
          <div className="job reveal">
            <div className="job-meta">
              <div className="job-date">Feb 2024 — Presente</div>
              <div className="job-duration">Actualidad</div>
            </div>
            <div className="job-content">
              <h3>J.R.Z. Ajustadores y Peritos de Seguros SAC</h3>
              <div className="job-role">Analista - Programador</div>
              <div className="divider">Análisis de datos y BI</div>
              <ul>
                <li>
                  Diseñé reportes interactivos en Power BI: KPIs de ingresos,
                  servicios (O.A.) y rendimiento por cliente, comparando 2025
                  vs. 2026.
                </li>
                <li>
                  Extraje y consolidé datos con SQL y ETL desde la base
                  corporativa (2025-2026), con limpieza de información.
                </li>
                <li>
                  Agilicé la generación de reportes ejecutivos automatizando
                  extracciones SQL, eliminando el trabajo manual en Excel.
                </li>
                <li>
                  Desarrollé consultas SQL complejas con JOIN, subconsultas,
                  agregaciones (GROUP BY) y filtros para generar indicadores de
                  negocio.
                </li>
              </ul>
              <div className="divider">Desarrollo de software</div>
              <ul>
                <li>
                  Diseñé y desarrollé un sistema interno completo, desde el
                  levantamiento de requisitos hasta la implementación, con PHP,
                  MySQL, JavaScript y Bootstrap.
                </li>
                <li>
                  Diseñé y estructuré desde cero la base de datos relacional,
                  alineada a los requerimientos del negocio, centralizando la
                  información corporativa.
                </li>
                <li>
                  Automaticé procesos operativos manuales, reduciendo errores de
                  registro y tiempos de gestión.
                </li>
                <li>
                  Preparé y configuré el entorno de producción para el
                  despliegue del sistema.
                </li>
              </ul>
            </div>
          </div>
          <div className="job reveal">
            <div className="job-meta">
              <div className="job-date">Ene 2023 — Ene 2024</div>
              <div className="job-duration">1 año</div>
            </div>
            <div className="job-content">
              <h3>Neon Hause Led</h3>
              <div className="job-role">Programador Full Stack</div>
              <ul>
                <li>
                  Desarrollé, junto al equipo de programación, un sistema de
                  escritorio para el control de asistencia.
                </li>
                <li>
                  Mantuve y optimicé sitios web corporativos, mejorando su
                  rendimiento, diseño y experiencia de usuario.
                </li>
                <li>
                  Colaboré en la mejora continua y refactorización de sistemas
                  internos, implementando nuevas funcionalidades.
                </li>
                <li>
                  Trabajé bajo la metodología ágil Scrum en la coordinación de
                  tareas y el seguimiento de proyectos.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
