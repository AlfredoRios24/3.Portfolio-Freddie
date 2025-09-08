
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
import iconmysql from '../assets/IconsProgramation/mysql.png';
import iconwordpress from '../assets/IconsProgramation/wordpress.png';



export const COURSES_INFO = [
    {
        id: 1,
        Title: "HTML",
        Description: {
            es: "Curso HTML5 des de cero: Aplicado a la Web, Curso Web-FrontEnd Web Developer.",
            en: "HTML5 course from scratch: Applied to the Web, Web-FrontEnd Web Developer Course."
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
            es: "Curso de CSS3, Curso Web-FrontEnd Web Developer.",
            en: "CSS3 Course, Web Front-End Course Web Developer."
        },
        Image: iconCSS,
        language: "es",
        isStudying: false
    },
    {
        id: 3,
        Title: "JavaScript",
        Description: {
            es: "Curso Web-FrontEnd Web Developer.",
            en: "Web Front-End Course Web Developer."
        },
        Image: iconJavaScript,
        language: "es",
        isStudying: false
    },
    {
        id: 4,
        Title: "React",
        Description: {
            es: "Curso React.js.",
            en: "React.js Course."
        },
        Image: iconReact,
        language: "es",
        isStudying: false
    },
    {
        id: 5,
        Title: "Tailwind",
        Description: {
            es: "Curso TailwindCSS.",
            en: "Tailwind CSS Course."
        },
        Image: iconTailwind,
        language: "es",
        isStudying: false
    },
    {
        id: 6,
        Title: "Java",
        Description: {
            es: "Curso Java11 con PUE Consorci.",
            en: "Java11 course with PUE Consorci."
        },
        Image: iconJava,
        language: "es",
        isStudying: false
    },
    {
        id: 7,
        Title: "TypeScript",
        Description: {
            es: "Curso TypeScript",
            en: "TypeScript Course"
        },
        Image: iconTypeScript,
        language: "es",
        isStudying: false
    },
    {
        id: 8,
        Title: "SQLite",
        Description: {
            es: "Curso de Base de Datos Sqlite.",
            en: "SQLite Database Course."
        },
        Image: iconSqlite,
        language: "es",
        isStudying: false
    },
    {
        id: 9,
        Title: "MySQL",
        Description: {
            es: "Curso MySQL.",
            en: "MySQL Course."
        },
        Image: iconmysql,
        language: "es",
        isStudying: false
    },
    {
        id: 10,
        Title: "WordPress",
        Description: {
            es: "Curso Página Web con Worpress, Página Web con Elementor PRO 2025.",
            en: "Course: Website with WordPress, Website with Elementor PRO 2025."
        },
        Image: iconwordpress,
        language: "es",
        isStudying: true
    },
    {
        id: 11,
        Title: "CleanCode",
        Description: {
            es: "",
            en: ""
        },
        Image: iconBook,
        language: "es",
        isStudying: false
    },
    {
        id: 12,
        Title: "The art of Unit Testing",
        Description: {
            es: "",
            en: ""
        },
        Image: iconBook,
        language: "es",
        isStudying: true
    },
];
