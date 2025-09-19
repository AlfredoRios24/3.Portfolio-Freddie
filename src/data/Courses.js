import iconHTML from '../assets/IconsProgramation/HTML5.png';
import iconCSS from '../assets/IconsProgramation/CSS.png';
import iconJavaScript from '../assets/IconsProgramation/JavaScript.png';
import iconReact from '../assets/IconsProgramation/React JS 2.png';
import iconTailwind from '../assets/IconsProgramation/Tailwindcss.png';
import iconJava from '../assets/IconsProgramation/Java.webp';
import iconTypeScript from '../assets/IconsProgramation/typescript.png';
import iconSqlite from '../assets/IconsProgramation/Sqlite.png';
import iconMysql from '../assets/IconsProgramation/mysql.png';
import iconWordpress from '../assets/IconsProgramation/wordpress.png';
import iconGitHub from '../assets/IconsProgramation/GitHub.png'
import iconSpringboot from '../assets/IconsProgramation/springboot.png'
import iconAws from '../assets/IconsProgramation/aws.png'


export const COURSES_INFO = [
    // Lenguajes
    {
        id: 1,
        Title: "HTML",
        Description: { es: "Curso HTML5 desde cero", en: "HTML5 course from scratch" },
        Image: iconHTML,
        category: "Lenguajes",
        isStudying: false
    },
    {
        id: 2,
        Title: "CSS",
        Description: { es: "Curso CSS3", en: "CSS3 course" },
        Image: iconCSS,
        category: "Lenguajes",
        isStudying: false
    },
    {
        id: 3,
        Title: "JavaScript",
        Description: { es: "Curso JavaScript", en: "JavaScript course" },
        Image: iconJavaScript,
        category: "Lenguajes",
        isStudying: false
    },
    {
        id: 4,
        Title: "TypeScript",
        Description: { es: "Curso TypeScript", en: "TypeScript course" },
        Image: iconTypeScript,
        category: "Lenguajes",
        isStudying: false
    },
    {
        id: 5,
        Title: "Java",
        Description: { es: "Curso Java11", en: "Java11 course" },
        Image: iconJava,
        category: "Lenguajes",
        isStudying: false
    },

    // Frameworks y Librerías
    {
        id: 6,
        Title: "React",
        Description: { es: "Curso React.js", en: "React.js course" },
        Image: iconReact,
        category: "Frameworks y Librerías",
        isStudying: false
    },
    {
        id: 7,
        Title: "TailwindCSS",
        Description: { es: "Curso TailwindCSS", en: "TailwindCSS course" },
        Image: iconTailwind,
        category: "Frameworks y Librerías",
        isStudying: false
    },
    {
        id: 12,
        Title: "Spring Boot",
        Description: {
            es: "Framework para desarrollar APIs y aplicaciones Java backend",
            en: "Framework for building Java backend APIs and applications"
        },
        Image: iconSpringboot,
        category: "Frameworks y Librerías",
        isStudying: false
    },

    // Bases de Datos
    {
        id: 8,
        Title: "SQLite",
        Description: { es: "Curso SQLite", en: "SQLite course" },
        Image: iconSqlite,
        category: "Bases de Datos",
        isStudying: false
    },
    {
        id: 9,
        Title: "MySQL",
        Description: { es: "Curso MySQL", en: "MySQL course" },
        Image: iconMysql,
        category: "Bases de Datos",
        isStudying: false
    },

    // Cloud & DevOps (puedes añadir AWS, Render, Vercel aquí si quieres)
    // Por ejemplo, un skill autodidacta:
    {
        id: 10,
        Title: "Git/GitHub",
        Description: { es: "Control de versiones con Git y GitHub", en: "Version control with Git and GitHub" },
        Image: iconGitHub,
        category: "Cloud & DevOps",
        isStudying: false
    },
    {
        id: 13,
        Title: "AWS (EC2, S3, Route 53)",
        Description: {
            es: "Despliegue y gestión de aplicaciones en la nube con AWS",
            en: "Deployment and management of applications in the cloud with AWS"
        },
        Image: iconAws,
        category: "Cloud & DevOps",
        isStudying: false
    },

    // Otros
    {
        id: 11,
        Title: "WordPress",
        Description: { es: "Curso WordPress con Elementor PRO 2025", en: "WordPress with Elementor PRO 2025" },
        Image: iconWordpress,
        category: "Otros",
        isStudying: true
    }
];
