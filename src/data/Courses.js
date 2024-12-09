
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



export const COURSES_INFO = [
    {
        id: 1,
        Title: "HTML",
        Description: {
            es: "Curso HTML5 des de cero: APlicado a la Web, con Guillermo Visintini",
            en: "HTML is the standard markup language for creating web pages."
        },
        Image: iconHTML,
        ImageCU: iconUdemy,
        language: "es",
        isStudying: false
    },
    {
        id: 2,
        Title: "CSS",
        Description: {
            es: "Curso Aprende CSS3 sin dolor, con Fransisco Javier Arce.",
            en: "CSS is a style sheet language used for describing the presentation of a document written in HTML."
        },
        Image: iconCSS,
        language: "es",
        isStudying: false
    },
    {
        id: 3,
        Title: "JavaScript",
        Description: {
            es: "Curso Universidad Desarrollo Web-FrontEnd Web Developer! con Global Mentoring Ing. Ubaldo Acosta",
            en: "JavaScript is a programming language that allows you to create dynamic content on web pages."
        },
        Image: iconJavaScript,
        language: "es",
        isStudying: false
    },
    {
        id: 4,
        Title: "React",
        Description: {
            es: "Curso: Master React.js whith AI: From nasics to Advanced con Skool of AI",
            en: "React is a JavaScript library for building user interfaces."
        },
        Image: iconReact,
        language: "es",
        isStudying: false
    },
    {
        id: 5,
        Title: "Tailwind",
        Description: {
            es: "Curso TailwindCSS from A to Z: Master TailwindCSS Quickly, por Meta Brains.",
            en: "Tailwind CSS is a highly customizable utility-first CSS framework."
        },
        Image: iconTailwind,
        language: "es",
        isStudying: false
    },
    {
        id: 6,
        Title: "Java",
        Description: {
            es: "Curso Java11 con PUE Consorgi.",
            en: "Java is a general-purpose, object-oriented programming language."
        },
        Image: iconJava,
        language: "es",
        isStudying: false
    },
    {
        id: 7,
        Title: "TypeScript",
        Description: {
            es: "Curso TypeScript con Udemy.",
            en: "Java is a general-purpose, object-oriented programming language."
        },
        Image: iconTypeScript,
        language: "es",
        isStudying: false
    },
    {
        id: 8,
        Title: "SQLite",
        Description: {
            es: "Curso Base de Datos Sqlite con Udemy.",
            en: "Java is a general-purpose, object-oriented programming language."
        },
        Image: iconSqlite,
        language: "es",
        isStudying: true
    },
    {
        id: 9,
        Title: "CleanCode",
        Description: {
            es: "Lectura del libro: Clean Code by: Robert C.Martin.",
            en: "Reading the book: Clean Code by: Robert C.Martin.."
        },
        Image: iconBook,
        language: "es",
        isStudying: false
    },
];
