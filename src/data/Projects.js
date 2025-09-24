
import fondo from '../assets/fond.png';
import fondonotes from '../assets/fondo-notas.jpg';
import fondowbfanals from '../assets/fondo-wbfanals3.jpg';
import iconSwagger from '../assets/IconsProgramation/iconswagger.png';
import iconJava from '../assets/IconsProgramation/Java.webp';
import iconmysql from '../assets/IconsProgramation/mysql.png';
import iconReact from '../assets/IconsProgramation/React JS 2.png';
import iconTailwind from '../assets/IconsProgramation/Tailwindcss.png';
import iconTypeScript from '../assets/IconsProgramation/typescript.png';
import wordpress from '../assets/IconsProgramation/wordpress.png';



export const PROJECT_INFO = [
    {
        id: 1,
        Title: {
            es: "Registro de Notas",
            en: "Register Note"
        },
        Description: {
            es: "Desarrollo de una herramienta de trabajo para crear, editar y guardar notas. Se han usado diferentes técnologias, des del lado del Fronted: ReactJS y TypeScript y del Backend: Spring y Mysql. Esta experiéncia me permitio profundizar en funcionalidades como hacer las llamadas al servidor, comprender parte de un funcionamiento api curl y crear mis primeras pruebas unitarias e integrales.",
            en: "Development of a working tool to create, edit and save notes. Different technologies have been used, from the frontend side: ReactJS and TypeScript and from the backend side: Spring and Mysql. This experience allowed me to deepen in functionalities such as making calls to the server, understanding part of a curl api operation, unit and integral priebas."
        },
        Image: fondonotes,
        Tools1: iconReact,
        Tools2: iconTypeScript,
        Tools3:iconTailwind,
        Tools4: iconJava,
        Tools5: iconmysql,
        Tools6: iconSwagger,
        language: "es",

        codeWeb: "https://github.com/AlfredoRios24/3.Registro_notas_Client",
        codeServer: "https://github.com/AlfredoRios24/3.Registro_notas_Server",
        view: "https://3-registro-notas-client.vercel.app/",
    },
    {
        id: 2,
        Title: {
            es: "Katas de Desarrollo Guiado por Pruebas",
            en: "Katas of Test-Driven Development."
        },
        Description: {
            es: "Este proyecto contiene una colección de Katas de programación implementadas en Java utilizando TDD (Test-Driven Development) como práctica principal. El objetivo es reforzar los conceptos de desarrollo guiado por pruebas, adquirir bases sólidas en testing y mejorar como desarrollador mediante ejercicios iterativos y enfocados en la calidad del código.",
            en: "This project contains a collection of programming Katas implemented in Java using TDD (Test-Driven Development) as the main practice. The aim is to reinforce the concepts of test-driven development, acquire a solid foundation in testing, and improve as a developer through iterative exercises focused on code quality."
        },
        Image: fondo,
        Tools1: iconJava,
        language: "es",

        codeWeb: "https://github.com/AlfredoRios24/1.Katas-TDD-Java",
    },
    {
        id: 3,
        Title: {
            es: "Web Serralleria Fanals",
            en: "Web Serralleria Fanals"
        },
        Description: {
            es: "Desarrollo de una pagina web a través de la herramienta de Wordpress, se estima que pueda ser pública en un futuro cercano. La construccion y diseño estan inspirado en plantillas de Elementor de WP. Esta experiencia me permitio adquirir conocimientos básicos de diseño de webs.",
            en: "Development of a website through the Wordpress tool, the company is real and is expected to be public in the near future. The construction and design are inspired by WP Elementor templates."
        },
        Image: fondowbfanals,
        Tools1: wordpress,
        Tools2: iconmysql,
        language: "es",

        view: "https://13.61.79.130/",
        
    },

];
