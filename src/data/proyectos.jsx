export const proyectos = [
  
  {
    ...{
      id: 1,
      categoria: "dev",
      titulo: "Portafolio Web 01 ",
      empresa: "Proyecto Personal (Dic 2023)",
      etiqueta: "Diseño y Desarrollo Web",
      imagen: "/Proyectos/Web-01.webp",
      stack: ["CSS", "HTML", "JavaScript"],
      enlaces: [
        { nombre: "Ver proyecto", url: "https://adrianquispe16.github.io/CVAdrian-Quispe/" },
        { nombre: "Enlace al código", url: "https://github.com/AdrianQuispe16/CVAdrian-Quispe" },
      ],
    },
    resultado: (
      <p className="project-result">
        Desarrollé mi primer portafolio web personal para presentar mi
        <strong> perfil profesional y habilidades</strong>.
        Diseñé una página web como currículum digital, enfocada en
        mostrar mis conocimientos y facilitar mi postulación a
        oportunidades de prácticas profesionales en tecnología.
      </p>
    ),
    extra: <></>,
  },
  {
    ...{
      id: 2,
      categoria: "dev",
      titulo: "Portafolio Web 02",
      empresa: "Proyecto Personal (Ene 2024)",
      etiqueta: "Frontend | Astro",
      imagen: "/Proyectos/Web-02.webp",
      stack: ["Astro 5", "TypeScript", "Tailwind CSS"],
      enlaces: [
        { nombre: "Enlace al proyecto", url: "https://adrianquispe16.github.io/portafolio-web/" },
        { nombre: "Enlace al código", url: "https://github.com/AdrianQuispe16/portafolio-web" },
      ],
    },
    resultado: (
      <p className="project-result">
        Desarrollé este portafolio como iniciativa de
        <strong> aprendizaje autodidacta</strong>, explorando nuevas
        tecnologías y aplicando buenas prácticas de desarrollo web.
        Experimenté con herramientas modernas para mejorar el diseño 
        y redimiento de mi portafolio.
      </p>
    ),
    extra: <></>,
  },
  {
    ...{
      id: 3,
      categoria: "data",
      titulo: "Dashboard de Análisis de Ventas",
      empresa: "Proyecto Personal",
      etiqueta: "Data Analyst | Excel",
      imagen: "/Proyectos/Excel-01.webp",
      stack: ["Excel", "Tablas Dinámicas", "Gráficos Dinámicos"],
      enlaces: [{ nombre: "Enlace al proyecto", url: "https://github.com/AdrianQuispe16/excel-analisis-datos/tree/main/ventas" }],
    },
    resultado: (
      <p className="project-result">
        Desarrollé un dashboard interactivo en Excel para analizar
        <strong> ventas, costos y ganancias por categorías de productos</strong>.
        Implementé gráficos dinámicos y filtros por meses y años,
        facilitando la exploración de datos, identificación de
        tendencias y seguimiento del rendimiento comercial.
      </p>
    ),
    extra: <></>,
  },
  {
    ...{
      id: 4,
      categoria: "data",
      titulo: "Dashboard de Análisis de Ventas",
      empresa: "Proyecto Personal",
      etiqueta: "Business Intelligence",
      imagen: "/Proyectos/Power-bi-01.webp",
      stack: ["Power BI", "DAX", "Power Query"],
      enlaces: [{ nombre: "Enlace al proyecto", url: "https://github.com/AdrianQuispe16/business-intelligence/tree/main/Ventas" }],
    },
    resultado: (
      <p className="project-result">
        Desarrollé un <strong>dashboard interactivo en Power BI</strong>.
        Analicé las ventas realizadas por vendedor.
        Identifiqué los productos más vendidos.
        Visualicé el comportamiento de ventas por mes.
        Implementé KPI y filtros dinámicos para facilitar el análisis comercial.
      </p>
    ),
    extra: <></>,
  },
  {
    ...{
      id: 4,
      categoria: "dev",
      titulo: "Sistema Web de Ventas e Inventario",
      empresa: "Proyecto Personal",
      etiqueta: "Full Stack | Laravel",
      imagen: "/Proyectos/Laravel-01.webp",
      stack: ["PHP", "Laravel", "MySQL", "Blade", "Tailwind CSS", "JavaScript"],
      enlaces: [
        {
          nombre: "Ver código fuente",
          url: "https://github.com/AdrianQuispe16/sistema_ventas"
        }
      ],
    },
    resultado: (
      <p className="project-result">
        Desarrollé un sistema web para la
        <strong> gestión de ventas y control de inventario</strong>,
        utilizando Laravel 12 y PHP. Implementé una arquitectura
        basada en MVC, gestión de datos y generación de reportes PDF,
        fortaleciendo mis habilidades en desarrollo Full Stack y
        construcción de aplicaciones web.
      </p>
    ),
    extra: <></>,
  },
  {
    ...{
      id: 6,
      categoria: "dev",
      titulo: "Automatización de Reportes",
      empresa: "J.R.Z. Ajustadores y Peritos de Seguros SAC",
      etiqueta: "ETL",
      stack: ["SQL", "ETL"],
      enlaces: [
        { nombre: "Enlace al proyecto", url: "" },
        { nombre: "Enlace al código", url: "" },
      ],
    },
    resultado: (
      <p className="project-result">
        Automaticé la generación de reportes ejecutivos con{" "}
        <strong>extracciones SQL programadas y procesos ETL</strong>, eliminando
        el trabajo manual en Excel. Consultas complejas con JOIN, subconsultas y
        GROUP BY.
      </p>
    ),
    extra: <></>,
  },
];
