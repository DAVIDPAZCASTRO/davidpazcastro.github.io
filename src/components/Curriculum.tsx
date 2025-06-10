import React from "react";

export default function Curriculum() {
  return (
    <section className="w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 flex flex-col gap-6 border border-zinc-200 dark:border-zinc-800">
      <header className="flex flex-col gap-1 items-center text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">DAVID PAZ CASTRO</h1>
        <h2 className="text-lg sm:text-xl font-semibold tracking-widest text-blue-600 dark:text-blue-400 mt-1">SENIOR FRONT-END DEVELOPER</h2>
      </header>
      <section>
        <h3 className="font-bold text-zinc-800 dark:text-zinc-100 mb-1">SOBRE MÍ</h3>
        <p className="text-zinc-700 dark:text-zinc-300 text-sm">
          Desarrollador de software especializado en Front-End trabajando en Accenture Song. Graduado en Ingeniería de Redes y Servicios de Telecomunicación (ETSIT UPM). Experto en ECMAScript6, TypeScript y React y con sólida experiencia en Angular. Muy familiarizado con el trabajo en equipo.
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-zinc-800 dark:text-zinc-100 mb-1">EDUCACIÓN</h3>
          <div className="mb-2">
            <p className="font-semibold text-zinc-700 dark:text-zinc-200">INGENIERÍA DE REDES Y SERVICIOS DE TELECOMUNICACIÓN</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">ETSIT UPM, Madrid · 2018</p>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-zinc-800 dark:text-zinc-100 mb-1">CONOCIMIENTOS</h3>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 text-sm space-y-1">
            <li>Experto en EcmaScript6 y TypeScript</li>
            <li>6 años de experiencia en React</li>
            <li>Sólida experiencia en Angular</li>
            <li>Desarrollo arquitecturas web con Context, Redux...</li>
            <li>Testing unitario con RTL y Enzyme</li>
            <li>Experiencia en metodologías Agile</li>
            <li>Análisis de arquitectura de datos web</li>
          </ul>
        </div>
      </section>
      <section>
        <h3 className="font-bold text-zinc-800 dark:text-zinc-100 mb-1">EXPERIENCIA LABORAL</h3>
        <div className="mb-3">
          <p className="font-semibold text-zinc-700 dark:text-zinc-200">ANÁLISIS Y DESARROLLO FRONTEND | Accenture | Cliente: Tabacalera</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">1 dic. 2023 - Actualidad</p>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 text-sm ml-4">
            <li>Aplicación con un CRM en Adobe aplicando Experience Fragments con React. Análisis de performance para dar soluciones efectivas a los distintos equipos y ejecutar el desarrollo.</li>
            <li>Desarrollo de una nueva solución para el catálogo de productos con una nueva fundación de componentes en react.</li>
          </ul>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-zinc-700 dark:text-zinc-200">DESARROLLO FRONTEND | Accenture | Cliente: Banca</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">abr. 2023 - nov. 2023</p>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 text-sm ml-4">
            <li>Desarrollo e integración de flujos de financiación en el sector bancario utilizando Angular y TypeScript.</li>
            <li>Responsable del análisis arquitectónico y técnico de la aplicación.</li>
          </ul>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-zinc-700 dark:text-zinc-200">DESARROLLO FRONTEND | Accenture | Cliente: TIC</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">ene. 2023 - mar. 2023</p>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 text-sm ml-4">
            <li>Desarrollo e integración de aplicaciones orientadas al tratamiento de datos, simulación y optimización de procesos en una empresa proveedora de servicios de telecomunicaciones, utilizando Angular 12.</li>
            <li>Encargado de analizar y ofrecer soluciones técnicas a nivel frontend.</li>
          </ul>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-zinc-700 dark:text-zinc-200">DESARROLLO FRONTEND | Accenture | Cliente: Banca</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">ene. 2019 - ene. 2022</p>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 text-sm ml-4">
            <li>Desarrollo e integración de aplicaciones SPA para los flujos de onboarding y perfil de usuario en el sector Banca, utilizando React.</li>
            <li>Responsabilidad en el análisis técnico y la ejecución de tareas.</li>
            <li>Integración continua mediante la metodología Scrum.</li>
          </ul>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-zinc-700 dark:text-zinc-200">PRÁCTICAS | Accenture</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">oct. 2018 - jun. 2019</p>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 text-sm ml-4">
            <li>Participación en proyectos end to end de integración continua utilizando metodología Scrum.</li>
            <li>Desarrollo de dashboards de población y tratamiento de datos para la Administración Pública.</li>
            <li>Gestor de contenido dinámico según configuraciones XML para el sector bancario.</li>
            <li>Desarrollo de realidad aumentada con React Native.</li>
          </ul>
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-zinc-800 dark:text-zinc-100 mb-1">IDIOMAS</h3>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 text-sm">
            <li>Español - Nativo</li>
            <li>Inglés - Avanzado</li>
          </ul>
        </div>
      </section>
    </section>
  );
}
