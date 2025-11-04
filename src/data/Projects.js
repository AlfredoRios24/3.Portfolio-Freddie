import fondoPortafolio from '../assets/fondo-portafolio.jpg';

import fondonotes from '../assets/fondo-notas.jpg';
import fondowbfanals from '../assets/fondo-wbfanals3.jpg';
import iconSwagger from '../assets/IconsProgramation/iconswagger.png';
import iconJava from '../assets/IconsProgramation/Java.webp';
import iconmysql from '../assets/IconsProgramation/mysql.png';
import iconReact from '../assets/IconsProgramation/React JS 2.png';
import iconTailwind from '../assets/IconsProgramation/Tailwindcss.png';
import iconTypeScript from '../assets/IconsProgramation/typescript.png';
import wordpress from '../assets/IconsProgramation/wordpress.png';
import springboot from '../assets/IconsProgramation/springboot.png';
import vercel from '../assets/clouds/vercel.svg';
import render from '../assets/clouds/render.png';
import javaScript from '../assets/IconsProgramation/JavaScript.png';
import maven from '../assets/clouds/maven.png';
import elementor from '../assets/IconsProgramation/elementor.png';
import aws from '../assets/IconsProgramation/aws.png';
import codekata from '../assets/codekata.jpg';

export const PROJECT_INFO = [
    {
        id: 1,
        Title: {
            es: "Registro de Notas",
            en: "Register Note",
            ca: "Registre de Notes"
        },
        Description: {
            es: "Proyecto Fullstack: Desarrollo de una herramienta de trabajo para crear, editar y guardar notas. Se han usado diferentes tecnologías, des del lado del Fronted: ReactJS y TypeScript y del Backend: Spring y Mysql. Esta experiencia me permitió profundizar en funcionalidades como hacer las llamadas al servidor, comprender parte de un funcionamiento API CRUD y crear mis primeras pruebas unitarias e integrales.",
            en: "Fullstack Project: Development of a working tool to create, edit and save notes. Different technologies have been used, on the frontend side: ReactJS and TypeScript and on the backend side: Spring and MySQL. This experience allowed me to deepen functionalities such as making server calls, understanding part of a CRUD API operation, and creating my first unit and integration tests.",
            ca: "Projecte Fullstack: Desenvolupament d’una eina de treball per crear, editar i guardar notes. S'han utilitzat diferents tecnologies, al frontend: ReactJS i TypeScript, i al backend: Spring i MySQL. Aquesta experiència em va permetre aprofundir en funcionalitats com realitzar crides al servidor, entendre part del funcionament d’una API CRUD i crear les meves primeres proves unitàries i integrals."
        },
        Image: fondonotes,

        Tools1: vercel,
        Tools2: iconReact,
        Tools3: iconTypeScript,
        Tools4: iconTailwind,

        Tools5: render,
        Tools6: springboot,
        Tools7: iconJava,
        Tools8: iconSwagger,

        Tools9: render,
        Tools10: iconmysql,

        language: "es",
        codeWeb: "https://github.com/AlfredoRios24/3.Registro_notas_Client",
        codeServer: "https://github.com/AlfredoRios24/3.Registro_notas_Server",
        view: "https://3-registro-notas-client.vercel.app/",
    },
    {
        id: 2,
        Title: {
            es: "Katas de Desarrollo Guiado por Pruebas",
            en: "Katas of Test-Driven Development",
            ca: "Katas de Desenvolupament Guiat per Proves"
        },
        Description: {
            es: "Este proyecto contiene una colección de Katas de programación implementadas en Java utilizando TDD (Test-Driven Development) como práctica principal. El objetivo es reforzar los conceptos de desarrollo guiado por pruebas, adquirir bases sólidas en TESTING y mejorar como desarrollador mediante ejercicios iterativos y enfocados en la calidad del código.",
            en: "This project contains a collection of programming Katas implemented in Java using TDD (Test-Driven Development) as the main practice. The aim is to reinforce the concepts of test-driven development, acquire a solid foundation in testing, and improve as a developer through iterative exercises focused on code quality.",
            ca: "Aquest projecte conté una col·lecció de Katas de programació implementades en Java utilitzant TDD (Test-Driven Development) com a pràctica principal. L'objectiu és reforçar els conceptes de desenvolupament guiats per proves, adquirir una base sòlida en TESTING i millorar com a desenvolupador mitjançant exercicis iteratius centrats en la qualitat del codi."
        },
        Image: codekata,

        Tools1: maven,
        Tools2: iconJava,
        Tools3: javaScript,

        language: "es",
        codeRepository: "https://github.com/AlfredoRios24/1.Katas-TDD-Java",
    },
    {
        id: 3,
        Title: {
            es: "Web Serralleria Fanals",
            en: "Web Serralleria Fanals",
            ca: "Web Serralleria Fanals"
        },
        Description: {
            es: "Desarrollo de una página web con el diseño inspirado en Elementor de Wordpress, la construcción de la web se ha desarrollado con ReactTS y TailwindCSS, el despliegue se ha realizado con Vercel y código en GitHub. Se estima que pueda ser pública en un futuro cercano. Esta experiencia me permitió adquirir conocimientos básicos de diseño de webs.",
            en: "Development of a website with a design inspired by Wordpress' Elementor. The website was built using ReactTS and TailwindCSS, deployed with Vercel, and coded in GitHub. It is expected to be made public soon. This experience allowed me to acquire basic knowledge of web design.",
            ca: "Desenvolupament d'una pàgina web amb un disseny inspirat en Elementor de Wordpress. La web ha estat construïda amb ReactTS i TailwindCSS, desplegada amb Vercel i versionada en GitHub. S'espera que sigui pública pròximament. Aquesta experiència em va permetre adquirir coneixements bàsics de disseny web."
        },
        Image: fondowbfanals,

        Tools1: vercel,
        Tools2: iconReact,
        Tools3: iconTypeScript,
        Tools4: iconTailwind,

        Tools5: aws,
        Tools6: wordpress,
        Tools7: elementor,

        language: "es",

        codeRepository: "https://github.com/AlfredoRios24/3.-Web-Fanals",
        view: "https://3-web-fanals.vercel.app/",
    },
    {
        id: 4,
        Title: {
            es: "Portafolio Personal",
            en: "Personal Portfolio",
            ca: "Portafoli Personal"
        },
        Description: {
            es: "Diseño y desarrollo de mi portafolio personal para mostrar mis proyectos, habilidades y experiencia profesional. Dominio propio y construido con React y TailwindCSS. El despliegue se ha realizado con AWS.",
            en: "Design and development of my personal portfolio to showcase my projects, skills, and professional experience. Built with React and TailwindCSS. Deployment was carried out with AWS.",
            ca: "Disseny i desenvolupament del meu portafoli personal per mostrar els meus projectes, habilitats i experiència professional. Construït amb React i TailwindCSS. El desplegament s'ha realitzat amb AWS."
        },
        Image: fondoPortafolio,

        Tools1: aws,
        Tools2: iconReact,
        Tools3: javaScript,
        Tools4: iconTailwind,

        language: "es",

        codeRepository: "https://github.com/AlfredoRios24/3.Portfolio-Freddie",
        view: "https://portafolio-alfredorios.es/",
    },
];
