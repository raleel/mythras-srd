# Documento de Recursos del Sistema Mythras Imperative

---
## Introducción

_Mythras Imperative_ es una versión de código abierto, con licencia ORC, del conjunto de reglas de _Mythras_. Este documento ofrece un conjunto de reglas completo, aunque no exhaustivo, que incluye la creación de personajes, habilidades, reglas para ciertas situaciones típicas, combate y magia; más que suficiente para que tanto jugadores como Directores de Juego puedan empezar, y que sirva como una base sólida para futuros desarrollos. _Mythras Imperative_ es compatible con las reglas básicas de Mythras y otros sistemas de juego porcentuales con licencia ORC. Su volumen complementario, _Classic Fantasy Imperative_, también es completamente compatible y se publica bajo ORC, lo que significa que los dos Imperatives se pueden combinar fácilmente.

Las traducciones que no sean en inglés se realizan mediante IA. ¡Se agradece la contribución de la comunidad!

---
## Licencia ORC

_Mythras Imperative_ se publica utilizando la Licencia ORC. La Licencia ORC proporciona una forma para que los creadores de juegos compartan abiertamente la mecánica de sus juegos y permite a los usuarios posteriores utilizar, modificar y volver a compartir libremente las adaptaciones de estas mecánicas de juego.

Lo que se comparte abiertamente bajo la ORC se conoce como _**Material Licenciado**_, e incluye los amplios elementos funcionales del juego, como bloques de estadísticas, reglas de juego, atributos de personaje y los métodos y sistemas inherentes a la forma de jugar, así como cualquier otra cosa que el licenciante desee compartir explícitamente. La licencia es amplia y le permite usar los Materiales Licenciados globalmente en relación con libros impresos, videojuegos, podcasts, IA o cualquier otra tecnología que pueda existir o crearse en el futuro. La mayor parte del contenido que se encuentra en _Mythras Imperative_ constituye Material Licenciado.

Lo que _no_ se comparte bajo la ORC se conoce como _**Material Reservado**_ e incluye marcas registradas, lore del mundo, arcos de historia, personajes distintivos y arte visual. Hemos enumerado el Material Reservado en el Aviso ORC, a continuación.

Bajo la Licencia ORC, puede usar, compartir, adaptar y construir sobre el Material Licenciado como mejor le parezca, siempre y cuando dé la atribución adecuada en forma de un aviso en su trabajo publicado. Este aviso acredita a los licenciantes originales y su contribución al trabajo, además de proporcionar una forma fácil para que los usuarios posteriores acrediten al autor del trabajo en el que aparece el aviso. Al utilizar material licenciado bajo la ORC, usted acepta automáticamente licenciar la mecánica de su juego en su trabajo publicado bajo los mismos términos. Si desarrolla su propio Material Reservado, esa es su propiedad exclusiva.

---
#### Aviso ORC

_Mythras Imperative_ tiene licencia bajo la Licencia ORC ubicada en la Biblioteca del Congreso y disponible en línea en varios lugares, incluyendo [Paizo.com](https://paizo.com/community/blog/v5748dyo6sico) y otros.

Se renuncian a todas las garantías según lo establecido en la misma.

---
#### Atribución

Este producto se basa en el siguiente Material Reservado:

_Mythras_, The Design Mechanism Copyright 2016, Escrito por Pete Nash y Lawrence Whitaker

Si utiliza nuestro Material Licenciado en sus propias obras publicadas, por favor, acredítenos de la siguiente manera:

_Basado en Mythras Imperative, Escrito por Pete Nash y Lawrence Whitaker, y publicado por The Design Mechanism, Copyright 2023_

---
#### Material Reservado

Tenga en cuenta que los juegos principales de _Mythras Imperative_, _**Classic Fantasy**_ y _**Mythras**_, publicados por The Design Mechanism, están designados como Material Reservado bajo la licencia ORC.

Si desea utilizar contenido de _**Classic Fantasy**_ o _**Mythras**_, póngase en contacto con The Design Mechanism acerca de la Licencia _Mythras Gateway_ separada, que permite el acceso a Material Reservado, libre de regalías, pero con algunas condiciones con respecto a aprobaciones y atribución.

También se consideran Material Reservado los siguientes:

_**Mythras Imperative**_ – como nombre, salvo cuando se utilice en la atribución, incluyendo su logotipo.

_**Mythras**_ – como nombre, salvo cuando se utilice en la atribución, incluyendo su logotipo.

_**Todo el arte, gráficos y estilo**_ que se encuentran en _Mythras Imperative_

---
## ¿Nuevo en d100?

_Mythras Imperative_ es un sistema d100 o porcentual. Los dados porcentuales, o 1d100, se utilizan para resolver acciones clave: uso de habilidades, combate, lanzamiento de magia, etc. Es un sistema de "tirar por debajo", lo que significa que el número objetivo se expresa como un porcentaje (por ejemplo, Atletismo 65%), y tanto el Director de Juego como el jugador buscan obtener un resultado igual o inferior a este número objetivo, usando 1d100, para lograr un Éxito. Es bastante fácil reemplazar el 1d100 por un d20 si se prefiere, y todos los porcentajes se pueden dividir por 5 (redondeando hacia arriba) para obtener el número objetivo para una tirada de d20. Atletismo 65% se convertiría en Atletismo 13, en nuestro ejemplo.

Sin embargo, 1d100 ofrece una gran flexibilidad y matices que sustentan todo el juego, por lo que nuestra recomendación es probar primero el enfoque 1d100. Si bien puede parecer contraintuitivo tener que tirar _menos_ que algo (¡en muchos juegos, un número más alto suele ser mejor!), tener un número objetivo expresado como un rango porcentual dentro del cual uno necesita tirar hace que sea fácil y sencillo ver sus posibilidades de éxito, y permite bastantes "trucos de dados", como Tiradas Opuestas, Críticos y Pifias, y algunas otras cosas que se explorarán más adelante en estas reglas. El juego de rol porcentual ha existido desde los primeros días de los juegos de rol y es un sistema de juego firmemente establecido con una mecánica central probada que es flexible, intuitiva y tiende a pasar a un segundo plano durante el juego.

---
## Simplificación

Los antiguos propietarios de _**Mythras**_ notarán que en algunos lugares las reglas de _Mythras Imperative_ se han simplificado. Esto se ha hecho para que un Director de Juego pueda introducir el juego a nuevos jugadores más rápidamente y con un mínimo de complicaciones.

---
## Redondeo de números y resultados

En algunas ocasiones se le pedirá que divida números, normalmente la clasificación de una habilidad (como para determinar un Éxito Crítico, que es 1/10 del valor de la habilidad). Siempre que el resultado de una división cree una fracción, redondee siempre al número entero. Así, por ejemplo, 1/10 de 63% es 6.3; esto se redondea a 7.

---
## Dados utilizados

_Mythras Imperative_ utiliza el conjunto de dados poliédricos estándar: d4, d6, d8, d10, d12, d20 y d100. Además, se requieren los siguientes dados:

d2: Tira cualquier dado. Un número impar equivale a 1 y un número par equivale a 2. O lanza una moneda.

d3: Tira un dado de seis caras; 1-2 = 1, 3-4 = 2, 5-6 = 3