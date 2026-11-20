import InsigniaHabilidad from "../components/InsigniaHabilidad";
export default function Habilidades() {
  return (
    <section id="skills">
      <div className="contenedor">
        <div className="section-head reveal">
          <div className="section-eyebrow">Habilidades</div>
          <h2>Stack técnico y habilidades blandas</h2>
          <p>Herramientas que uso en mi día a día para analizar y construir.</p>
        </div>
        <div className="skills-grid reveal">
          <div className="skill-box">
            <h4>
              <span className="dot data"></span> Análisis &amp; BI
            </h4>
            <div className="skill-list">
              <InsigniaHabilidad nombre="Power BI" />
              <InsigniaHabilidad nombre="Power Apps" />
              <InsigniaHabilidad nombre="Power Automate" />
              <InsigniaHabilidad nombre="Excel" />
              <InsigniaHabilidad nombre="ETL" />
            </div>
          </div>
          <div className="skill-box">
            <h4>
              <span className="dot data"></span> Bases de datos
            </h4>
            <div className="skill-list">
              <InsigniaHabilidad nombre="SQL complejo" />
              <InsigniaHabilidad nombre="MySQL" />
              <InsigniaHabilidad nombre="SQL Server" />
              <InsigniaHabilidad nombre="Oracle" />
              <InsigniaHabilidad nombre="MongoDB" />
            </div>
          </div>
          <div className="skill-box">
            <h4>
              <span className="dot dev"></span> Lenguajes
            </h4>
            <div className="skill-list">
              <InsigniaHabilidad nombre="JavaScript" />
              <InsigniaHabilidad nombre="PHP" />
              <InsigniaHabilidad nombre="Python" />
              <InsigniaHabilidad nombre="Java" />
              <InsigniaHabilidad nombre="C#" />
              <InsigniaHabilidad nombre="Go" />
            </div>
          </div>
          <div className="skill-box">
            <h4>
              <span className="dot dev"></span> Web &amp; frameworks
            </h4>
            <div className="skill-list">
              <InsigniaHabilidad nombre="Laravel" />
              <InsigniaHabilidad nombre="Angular" />
              <InsigniaHabilidad nombre="Astro" />
              <InsigniaHabilidad nombre="Bootstrap" />
              <InsigniaHabilidad nombre="Tailwind CSS" />
            </div>
          </div>
          <div className="skill-box">
            <h4>
              <span className="dot tools"></span> Herramientas
            </h4>
            <div className="skill-list">
              <InsigniaHabilidad nombre="Git" />
              <InsigniaHabilidad nombre="GitHub" />
              <InsigniaHabilidad nombre="Postman" />
              <InsigniaHabilidad nombre="Scrum" />
              <InsigniaHabilidad nombre="Metodologías ágiles" />
            </div>
          </div>
          <div className="skill-box">
            <h4>
              <span className="dot tools"></span> Conocimientos básicos
            </h4>
            <div className="skill-list">
              <InsigniaHabilidad nombre="R" />
              <InsigniaHabilidad nombre="Databricks" />
              <InsigniaHabilidad nombre="Spring Boot" />
              <InsigniaHabilidad nombre="Tableau" />
            </div>
          </div>
        </div>
        <div className="soft-grid reveal">
          <div className="soft-item">
            <b>Resolución de problemas</b>
            <span>Identifico la causa y propongo soluciones prácticas.</span>
          </div>
          <div className="soft-item">
            <b>Aprendizaje rápido</b>
            <span>Me adapto a nuevas herramientas y equipos.</span>
          </div>
          <div className="soft-item">
            <b>Trabajo en equipo</b>
            <span>Colaboro para cumplir objetivos a tiempo.</span>
          </div>
          <div className="soft-item">
            <b>Organización</b>
            <span>Gestiono tareas con orden y cumplo plazos.</span>
          </div>
          <div className="soft-item">
            <b>Comunicación asertiva</b>
            <span>Expreso ideas con claridad y respeto.</span>
          </div>
          <div className="soft-item">
            <b>Adaptabilidad</b>
            <span>Me ajusto a nuevos requisitos sin perder calidad.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
