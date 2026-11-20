# Portafolio de Adrian Quispe

Migración del HTML original a React, Vite y Tailwind CSS 4. Se mantienen el contenido, colores, tipografías, distribución, puntos de quiebre, SVG y efectos del diseño original.

## Ejecutar

Requisito: Node.js 22.12 o superior.

```bash
npm ci
npm run dev
```

Abre la dirección que indique Vite. Para generar la versión de producción:

```bash
npm run build
npm run preview
```

Publica el contenido de `dist/` en tu hosting. La aplicación no necesita PHP ni base de datos.

## Organización

- `src/App.jsx`: composición de la página.
- `src/sections/`: inicio, sobre mí, proyectos, experiencia, formación, habilidades y contacto.
- `src/components/`: navegación, tarjetas reutilizables, carrusel, insignias, precarga, código animado, fondo y logotipo.
- `src/data/proyectos.jsx`: contenido de los seis proyectos; incluye fragmentos JSX para conservar los textos con énfasis.
- `src/data/tecnologias.jsx`: nombres e iconos SVG del carrusel.
- `src/data/habilidades.js`: colores y abreviaturas de las insignias.
- `src/hooks/`: tema, sección activa, animaciones de entrada y efectos visuales. Sus eventos, observadores, temporizadores y animaciones se limpian al desmontarse.
- `src/styles/temas.css`: variables de los temas claro y oscuro.
- `src/styles/base.css`, `navegacion.css`, `inicio.css`, `secciones.css`, `contacto.css`, `detalles.css`, `responsive.css`: estilos separados por responsabilidad y cargados en el orden del diseño original.
- `public/`: archivos públicos, incluido tu futuro PDF del CV.

## Tailwind y CSS

Tailwind se integra mediante el plugin oficial de Vite. Las reglas de distribución, alineación, espaciado y tipografía usan utilidades de Tailwind con `@apply`, agrupadas en clases de componentes para mantener el JSX legible. Los gradientes, variables de tema, máscaras, pseudoelementos y animaciones conservan CSS específico.

No se importa Preflight: se conserva el reset original para evitar cambios en botones, encabezados, SVG y medidas. Los puntos de quiebre originales de 900 y 600 px también se conservan.

Para agregar estilos puedes usar clases de Tailwind directamente en el JSX, o ampliar las clases de componentes de los archivos CSS.

## Contenido pendiente del original

El HTML proporcionado contiene espacios de imagen vacíos y enlaces genéricos. Se conservan tal como estaban. No se adjuntó el currículum: coloca `cv-adrian-quispe.pdf` en `public/` para habilitar su descarga. Las fuentes de Google necesitan conexión a Internet; sin conexión se usan las fuentes alternativas del diseño.

## Validación

- Compilación de producción con Vite.
- Montaje de React en StrictMode y comprobación de filtros, contadores, menú, cambio y persistencia de tema, precarga y escritura animada en un DOM de prueba.
- Sin errores de React durante esas comprobaciones.

No se pudo completar la comparación visual en Chromium por restricciones del entorno. Conviene revisar ambas versiones en tu navegador antes de publicar.
