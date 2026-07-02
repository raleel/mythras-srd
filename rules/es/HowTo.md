# Requisitos Previos

1. Una comprensión básica del [lenguaje markdown](https://www.markdownguide.org/basic-syntax/).

2. Necesitarás crear una cuenta gratuita en [github](https://github.com/) si no tienes una. Se recomienda usar el nombre de tu JDR, ya que esto formará parte de la URL que la gente usará para acceder a tu SRD.

3. Puedes realizar todo este proceso a través del navegador sin saber git. Sin embargo, aprender GitHub Desktop te permitirá probar cualquier cambio localmente antes de desplegarlos en vivo para que el mundo los vea.

> Si tienes un nombre de dominio registrado, puedes usarlo con este proceso para crear un SRD como yo lo tengo en https://srd.7thextinctionrpg.com

# El Proceso

## Creando el Repositorio en Github

1. Inicia sesión en Github

2. Navega a la plantilla pública https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Haz clic en "Use this template" (Usar esta plantilla)

![Step3](/_media/Step3.png)

4. Selecciona "Create a new repository" (Crear un nuevo repositorio)

5. Introduce un nombre para el repositorio

![Step5](/_media/Step5.png)

6. Selecciona 'Private' (Privado)

7. Selecciona 'Create repository' (Crear repositorio)

Tardará entre 5 y 30 segundos en copiar la plantilla, luego tendrás tu propia copia.

8. Asegúrate de tener el archivo ".nojekyll"; este es un archivo vacío que es necesario al alojar un sitio web en Github, de lo contrario, el SRD no se mostrará correctamente. *(Le indica a GitHub Pages que no ejecute los archivos publicados a través de Jekyll).*

## Añadiendo Tu Contenido

### Archivos *.md

Los archivos .md son archivos markdown. Markdown es un lenguaje de marcado ligero que puedes usar para añadir elementos de formato a documentos de texto plano. Dependiendo del tamaño de tu contenido, puedes colocar toda la información de tu juego en un solo archivo *.md, o como yo lo he hecho en [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), crear archivos separados para cada capítulo. El "sample.md" proporciona algunos ejemplos de formato.

El lenguaje Markdown es muy fácil de aprender; usa el enlace proporcionado en el punto 2 bajo Requisitos Previos, arriba, para una lista completa de la sintaxis.

### _Sidebar.md

Este es tu menú, el panel de navegación en el lado izquierdo del sitio web. Una vez que hayas añadido un archivo markdown a tu repositorio, necesitas añadir el archivo aquí para que su contenido sea incluido. Sigue el formato existente.

## Habilitar Github Pages para convertir el Repositorio en un Sitio Web

1. En tu repositorio, haz clic en 'Settings' (Configuración)

![Website-Step1](/_media/Website-Step1.png)

2. Selecciona 'Pages' (Páginas) en el menú del lado izquierdo

![Website-Step2](/_media/Website-Step2.png)

3. Si no has hecho público el repositorio, tienes dos opciones
    a. Hacer público el repositorio, lo que te permitirá usar Github Pages para alojar tu sitio web SRD de forma gratuita.
    b. Actualizar tu cuenta de Github (en el momento de escribir esto, cuesta $4 al mes o una tarifa anual de $48).

4. Bajo 'Branch' (Rama) selecciona 'main' y haz clic en guardar.

5. Espera 10-20 segundos y luego actualiza la página.

6. Ahora verás tu URL, como https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Cambiando Fuentes

1. Edita el archivo /_assets/style.css

2. Bajo la sección 'body' encontrarás siteFont y headingFont

3. Cámbialas a las fuentes que quieras usar

## Usando el plugin Fontawesome y/o Material Icons para mostrar iconos gratuitos en tu SRD

### Fontawesome

Usa Fontawesome para obtener iconos gratuitos e iconos animados. Los usuarios suscritos pueden usar Pro Icons.

1. Encuentra el icono en [Fontawesome](https://fontawesome.com/icons)
2. Selecciona el icono
3. En la ventana emergente, bajo la pestaña HTML, copia todo entre " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Coloca el texto copiado entre `:` sin espacios

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Usa Material Icons para más iconos gratuitos

1. Encuentra los iconos en [Material Icons](https://fonts.google.com/icons)
2. Copia e inserta el enlace del span web directamente en tus archivos markdown

```markup
<span class="material-icons">face</span>
```