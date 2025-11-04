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
import iconGitHub from '../assets/IconsProgramation/GitHub.png';
import iconSpringboot from '../assets/IconsProgramation/springboot.png';
import iconAws from '../assets/IconsProgramation/aws.png';
import iconDocker from '../assets/IconsProgramation/docker.png';
import iconSecurity from '../assets/iconSecurity.png';
import iconAngular from '../assets/IconsProgramation/angular.png';
export const COURSES_INFO = [
    {
        id: 1,
        Title: "HTML",
        Description: { es: "Curso HTML5 desde cero", en: "HTML5 course from scratch", ca: "Curs HTML5 des de zero" },
        Image: iconHTML,
        category: "Lenguajes",
        isStudying: false
    },
    {
        id: 2,
        Title: "CSS",
        Description: { es: "Curso CSS3", en: "CSS3 course", ca: "Curs CSS3" },
        Image: iconCSS,
        category: "Lenguajes",
        isStudying: false
    },
    {
        id: 3,
        Title: "JavaScript",
        Description: { es: "Curso JavaScript", en: "JavaScript course", ca: "Curs JavaScript" },
        Image: iconJavaScript,
        category: "Lenguajes",
        isStudying: false
    },
    {
        id: 4,
        Title: "TypeScript",
        Description: { es: "Curso TypeScript", en: "TypeScript course", ca: "Curs TypeScript" },
        Image: iconTypeScript,
        category: "Lenguajes",
        isStudying: false
    },
    {
        id: 5,
        Title: "Java",
        Description: { es: "Curso Java11", en: "Java11 course", ca: "Curs Java11" },
        Image: iconJava,
        category: "Lenguajes",
        isStudying: false
    },
    {
        id: 6,
        Title: "React",
        Description: { es: "Curso React.js", en: "React.js course", ca: "Curs React.js" },
        Image: iconReact,
        category: "Frameworks y Librerías",
        isStudying: false
    },
    {
        id: 7,
        Title: "TailwindCSS",
        Description: { es: "Curso TailwindCSS", en: "TailwindCSS course", ca: "Curs TailwindCSS" },
        Image: iconTailwind,
        category: "Frameworks y Librerías",
        isStudying: false
    },
    {
        id: 8,
        Title: "Spring Boot",
        Description: {
            es: "Framework para desarrollar APIs y aplicaciones Java backend",
            en: "Framework for building Java backend APIs and applications",
            ca: "Framework per desenvolupar APIs i aplicacions backend en Java"
        },
        Image: iconSpringboot,
        category: "Frameworks y Librerías",
        isStudying: false
    },
    {
        id: 9,
        Title: "Angular",
        Description: { es: "Curso Angular", en: "Course Angular", ca: "Curs Angular" },
        Image: iconAngular,
        category: "Frameworks y Librerías",
        isStudying: true
    },
    {
        id: 10,
        Title: "SQLite",
        Description: { es: "Curso SQLite", en: "SQLite course", ca: "Curs SQLite" },
        Image: iconSqlite,
        category: "Bases de Datos",
        isStudying: false
    },
    {
        id: 11,
        Title: "MySQL",
        Description: { es: "Curso MySQL", en: "MySQL course", ca: "Curs MySQL" },
        Image: iconMysql,
        category: "Bases de Datos",
        isStudying: false
    },
    {
        id: 12,
        Title: "Git/GitHub",
        Description: { es: "Control de versiones con Git y GitHub", en: "Version control with Git and GitHub", ca: "Control de versions amb Git i GitHub" },
        Image: iconGitHub,
        category: "Cloud & DevOps",
        isStudying: false
    },
    {
        id: 13,
        Title: "AWS (EC2, S3, Route 53)",
        Description: {
            es: "Despliegue y gestión de aplicaciones en la nube con AWS",
            en: "Deployment and management of applications in the cloud with AWS",
            ca: "Desplegament i gestió d'aplicacions al núvol amb AWS"
        },
        Image: iconAws,
        category: "Cloud & DevOps",
        isStudying: false
    },
    {
        id: 14,
        Title: "Docker",
        Description: {
            es: "Contenedorización de aplicaciones para despliegue y desarrollo eficiente",
            en: "Containerization of applications for efficient deployment and development",
            ca: "Contenidorització d'aplicacions per a un desplegament i desenvolupament eficient"
        },
        Image: iconDocker,
        category: "Cloud & DevOps",
        isStudying: false
    },
    {
        id: 15,
        Title: "WordPress",
        Description: { es: "Curso WordPress con Elementor PRO 2025", en: "WordPress with Elementor PRO 2025", ca: "Curs WordPress amb Elementor PRO 2025" },
        Image: iconWordpress,
        category: "Otros",
        isStudying: false
    },
    {
        id: 16,
        Title: "Ciberseguridad",
        Description: { es: "Curso Seguridad Informática", en: "Computer Security Course", ca: "Curs de Seguretat Informàtica" },
        Image: iconSecurity,
        category: "Otros",
        isStudying: true
    }
];
