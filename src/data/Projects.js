
import iconHTML from '../assets/IconsProgramation/HTML5.png';
import iconCSS from '../assets/IconsProgramation/CSS.png';
import iconJavaScript from '../assets/IconsProgramation/JavaScript.png';
import iconReact from '../assets/IconsProgramation/React JS 2.png';
import iconTailwind from '../assets/IconsProgramation/Tailwindcss.png';
import iconJava from '../assets/IconsProgramation/Java.webp';
import iconTypeScript from '../assets/IconsProgramation/typescript.png'
import iconSqlite from '../assets/IconsProgramation/Sqlite.png'
import iconUdemy from '../assets/LogoUdemy.jpg';
import iconBook from '../assets/iconBook2.png';
import fondo from '../assets/fond.png'
import fondowbfanals from '../assets/fondo-wbfanals3.jpg'
import wordpress from '../assets/IconsProgramation/wordpress.png'



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
        Image: fondo,
        Tools1: iconReact,
        Tools2: iconTypeScript,
        Tools3:iconTailwind,
        language: "es",

    },
    {
        id: 2,
        Title: {
            es: "Web Serralleria Fanals",
            en: "Web Serralleria Fanals"
        },
        Description: {
            es: "Desarrollo de una pagina web a través de la herramienta de Wordpress, la empresa es real y se estima que pueda ser pública en un futuro cercano. La construccion y deseño estan inspirado en plantillas de Elementor de WP",
            en: "Development of a website through the Wordpress tool, the company is real and is expected to be public in the near future. The construction and design are inspired by WP Elementor templates."
        },
        Image: fondowbfanals,
        Tools1: wordpress,
        Tools2: iconJavaScript,
        Tools3:iconTailwind,
        language: "es",
        
    },
    {
        id: 3,
        Title: {
            es: "Projecto 3",
            en: "Proyect 3."
        },
        Description: {
            es: "Curso Aprende CSS3 sin dolor, con Fransisco Javier Arce.",
            en: "CSS is a style sheet language used for describing the presentation of a document written in HTML."
        },
        Image: fondo,
        Tools1: iconHTML,
        Tools2: iconCSS,
        Tools3:iconCSS,
        language: "es",
    },

];
