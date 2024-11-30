# PORTFOLIO ALFREDO

Página web de presentación al mundo laboral

Caracteristicas del proyecto:
 - REACTJS [OK]
 - TAILWINDCSS [OK]

Objetivos:
    Externos
        + Tener los siguientes Links:
            - GitHub + Vercel [OK]
            - Linkedin [OK]
        + Descargar documentos: CV [OK]

    Internos
        + Se adapte a todos los tamaños.
        + Opción de seleccion de Idiomas (ES + ING)
        + Modo Oscuro/Claro
        + Todos los componentes que sean interactuables, cambien de tamaño o de estado al pasar el raton (clicks) [OK]

Passos a seguir:
1. FASE DE CONSTRUCCION
    + Crear los componentes básicos que definiran la estructura de la web:
        HEADER [OK]
            Componente Padre
            Barra de navegación
        
        SECTION [OK]
            Una section para cada componente hijo (sobre mi, contacto, formaciones, etc.)

        FOOTER [OK]
            Zona de contacto: telefono, email, etc.

2. FASE DE PINTAR
    + Sin funcionalidad, solo añadir la parte decorativa a través de tailwindcss [OK]


    Negro Principal (Black)
    Azul (Blue-950)
    Celeste (Cyan-500)
    Violeta (indigo-500)

    
3. FASE DE PROGRAMAR
    EN EL HEADER
        + Funcion Cambio de idioma ES / EN [OK]
        + Funcion Cambio de  modo OSCURO/CLARO [OK]
        + Funcion enlace para que al darle click a las etiquetas estas se dirigan directamente a la seccion [OK]
    EN EL SECTION 1
        + Funcion para que al darle al boton se descarge el CV [OK] PONER ABAJO DEL TODO EN EL FOOTER??
        + Funcion para apretar un boton y que muestre más información (experiencia y más acerca de mi....)
    EN EL SECTION 2
        + Funcion para que al pulsar los iconos estos muestren una zona donde salga + info (1 para cada elemnto li) [OK]
    EN EL SECTION 3
        + Mostrar los 3 proyectos principales y luego secundarios
            Que tengan: titulo, paragrafo [
                + que aprendiste?
                + Que tecnologias usaste?
                + Que retos hubo?
            ]
            imagen del proyecto, link en git + vercel. (NO SE PONE EL PORTFOLIO)
    EN EL FOOTER
        + Funcion flecha para que se diriga directamente arriba de la pagina web [OK]

5. FASE DE IMPLEMENTACIÓN

    Rellenar con toda la información los data.

    Colocar la traduccion en Ingles.



4. FASE DE REFACTORIZACIÓN
    + Si un componente usa 1 o más componentes, ponerlo todo en una única carpeta con el nombre del componente principal
    + Todos los HOOKs en una carpeta
    + Terminar de ajustar los estilos (valorar si se añaden en una carpeta css las etiquetas mas grandes y asi limpiar codigo tailwind)
    + Terminar de ajustar el codigo JS (valorar la creación de carpetas, por si se anidan muchos componentes.)