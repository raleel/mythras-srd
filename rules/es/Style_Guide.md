# Título de la Guía de Estilo (h1)

Usa encabezados h1 (`# Heading Title`) para el título principal del capítulo. Todos los encabezados hx aparecerán en la barra lateral como marcadores.

Si el título no es un encabezado h1, la barra lateral mostrará un error de duplicación, mostrando la página y luego el encabezado h2 'título'.

---
## Encabezados de sección (h2)

Usa encabezados h2 (`## Section Heading`) precedidos por un divisor (`---`) para cada nueva sección principal.

### Encabezados de subsección que aumentan el nivel h en 1

Usa encabezados h3 (`### Subsection Heading`) para cada nueva subsección, y encabezados h4 (`#### Sub-Subsection Heading`) para cada nueva sub-subsección.

### Progresión h de subsecciones: 2 > 3 > 4

Los subencabezados se mezclan en la barra lateral si la progresión h no se maneja correctamente.

El marcador de encabezado debe aumentar en uno o nada.

Un h2 seguido de un h2 o h3 está bien. Un h3 seguido de un h3 o h4 también está bien.

### Errores de subsección
Un h2 seguido de un h4 causa problemas. La barra lateral coloca el subencabezado en algún lugar por encima del encabezado en la tabla de contenidos.

### Reducción de niveles h

Esto no parece ser un problema. Por ejemplo, de h4 a h3 o h2 está bien.

---
## Convenciones de formato

Los siguientes estilos son la norma para estas SRD _Imperative_ en formato Markdown.

### Negrita, Cursiva y Divisores

- Usa asteriscos dobles (`**Bold**`) para texto en **Negrita**.
- Usa guiones bajos (`_Italic_`) para texto en _Cursiva_.
  - _nota: ¡Evita usar asteriscos simples para Cursiva!_
- Usa barras invertidas (`\_`) para 'escapar' un carácter: \_No Cursiva\_.
- Usa comillas angulares (``` `code` ```) para hacer `code blocks`.
- Usa tres guiones (`---`) para insertar una línea divisoria horizontal.

### Convenciones para Negrita y Cursiva

Intenta seguir los siguientes patrones...

#### Títulos en negrita

Usa títulos en negrita para describir hechizos, efectos, etc.
- **Título Mágico:** Descripción.

#### Títulos en cursiva

Usa títulos en cursiva para 'sublistas' de variantes de hechizos, etc.
- **Magia:** Descripción.
  - **_Variante Mágica-A:_** Descripción.
  - **_Variante Mágica-B:_** Descripción.

#### Referencias de títulos en cursiva

Usa títulos en cursiva al referenciar un libro como _Mythras Imperative_ o el conjunto de reglas central de _Mythras_.

---
## Formato de listas

### Listas desordenadas / Viñetas

- Las listas desordenadas se hacen con guiones.
- Las listas desordenadas se hacen con guiones.
  - Aumenta el nivel de sangría con 2 espacios o una tabulación.

### Listas ordenadas / Puntos numerados

1. Las listas numeradas se hacen con el dígito y un punto.
2. Las listas numeradas se hacen con el dígito y un punto.
- Se mezclan con viñetas
  - Y sangría
3. Se vuelven a mezclar números
   - Y viñetas

### Listas con encabezado

Para listas de subencabezados relacionados, pon en negrita el título y los dos puntos.
- **Ejemplo 1:** Bla, bla, bla...
- **Ejemplo 2:** Bla, bla, bla...

### Listas con encabezado en cursiva

Para listas de subencabezados relacionados, pon en negrita y cursiva el título y los dos puntos.
- **_Ejemplo 1:_** Bla, bla, bla...
- **_Ejemplo 2:_** Bla, bla, bla...

---
## Tablas

Dale a las tablas un subencabezado para que aparezcan marcadas en la barra lateral, con un nivel de sangría respecto a su sección principal.

~Haz que la fila del encabezado sea texto en negrita.~
Hacer que la fila del encabezado esté en negrita la renderiza en texto normal. El CSS predeterminado tiene esa fila en negrita.

### Alineación del texto de la tabla

Usa la fila 2 para la alineación del contenido: `:--`, `:-:`, o `--:`.
Esto afectará a toda la columna.

#### Diseño básico de tablas

| **Columna 1** | **Columna 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gamma |

### Convenciones de alineación de texto

- Usa alineación central para números o listas de valores similares.
- Usa alineación a la izquierda para oraciones de texto.

#### Tabla de ejemplo de alineación

| **Número** | **Descripción** |
| :-: | :-- |
| 1 | Texto descriptivo |
| 2 | Texto descriptivo |
| 3 | Texto descriptivo |

#### Ejemplo: Tabla de Intensidad de Fuego

| **Intensidad** | **Ejemplos** | **Tiempo de Ignición** | **Daño** |
| :-: | :-- | :-: | :-: |
| 1 | Vela | 1d4 | 1d2 |
| 2 | Antorcha | 1d3 | 1d4 |
| 3 | Hoguera | 1d2 | 1d6 |
| 4 | Conflagración que llena la habitación | 1d2 | 2d6 |
| 5 | Lava volcánica | Instantáneo | 3d6 |

---
## Enlaces

Hay muchos usos para los enlaces en el SRD y solo algunos casos principales se cubren aquí.

### Formato de enlaces

El formato de un enlace se realiza con texto entre corchetes. Usa corchetes cuadrados para el texto visible del enlace y paréntesis curvos para la URL de destino: `[Link Text](URL)`.

En estos documentos, el enlace externo más comúnmente utilizado será el [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Enlaces externos vs. internos

Los enlaces externos van a otras páginas a través de internet y necesitarán una URL `http://example.com` y, por defecto, _siempre_ se abrirán en una nueva pestaña del navegador.

Para evitar que múltiples pestañas desordenen el documento que se está leyendo, los enlaces internos y los marcadores se forman con URLs relativas que hacen referencia a los archivos markdown visibles en el repositorio de GitHub. En lugar de una nueva pestaña, estos enlaces internos se desplazarán rápidamente a la sección enlazada.

#### Ejemplos de enlaces internos

- **Enlaces de capítulo:** Estos apuntan al inicio de una sección principal (h1). Por ejemplo, el capítulo de [Combate](0005_Combat.md).

  - Formato del enlace: `[Combat](0005_Combat.md)`

- **Enlaces de subsección:** Estos apuntan a un encabezado dentro de un capítulo, referenciando el documento como se indicó anteriormente, pero añadiendo `?id=` seguido inmediatamente del encabezado de destino. Por ejemplo, [Ataques de Salto](0005_Combat.md?id=leaping-attacks)

  - Formato del enlace: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Enlaces externos a subsecciones

Puede haber ocasiones para referenciar una sección conocida de un documento externo, por ejemplo, una tabla específica en otro SRD. El formato es el mismo que con los enlaces de subsección, arriba, solo que usando la URL HTTP externa.

Como ejemplo, aquí está la [tabla de conversiones Imperial a Métrica](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) del [SRD de Classic Fantasy Imperative](https://cfi-srd.mythras.net/).

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Listas de Magia y Poderes

Comienza una sección 'limpia' con un encabezado h2 para listas de hechizos, poderes, etc. disponibles; luego h3 para cada elemento de la lista.

Los hechizos y poderes suelen presentarse en una única lista plana por tipo de magia (Magia Popular, Teísmo, etc.), pero si la lista requiere sus propias subsecciones, como especialidades de escuela o culto, aumenta el nivel del encabezado apropiadamente. Por ejemplo, h2 para Lista de Milagros de Teísmo, h3 para Culto: Mitra, y h4 para cada milagro del culto de Mitra.

Particularmente en el caso de los hechizos, pero en cualquier descripción que use atributos de palabras clave, enuméralos en texto cursiva.

El texto descriptivo y las reglas especiales usan texto normal.

### Formato de lista de hechizos

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Ejemplo: lista de hechizos formateada (citado en bloque) </summary>

---
> ## Descripciones de hechizos
>
> ### Desviar
> _Instantáneo, A distancia_
>
> Desviar se usa para anular otro hechizo dentro del alcance. Desviar se puede lanzar de forma reactiva para neutralizar hechizos ofensivos, usando la Acción Reactiva de Contramagia.

</details>

---
## Bloques de estadísticas de vehículos
Comienza una sección 'limpia' con un encabezado h2 para las listas, luego aumenta el nivel h como de costumbre para categorías y elementos de la lista.

Cada ejemplo listado tiene las estadísticas y descripciones presentadas como una lista de puntos con títulos de puntos en negrita.

### Formato de bloque de estadísticas de vehículos

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Ejemplo: bloque de estadísticas de vehículos formateado (citado en bloque) </summary>

---
> ## Vehículos de Muestra
>
> ### Vehículos Terrestres
>
> #### Interceptor
>
> - **Casco:** 6 (Militar Medio), 40 Estructura
>
> - **Velocidad:** Rápida
>
> - **Sistemas:** 3
>
> - **Rasgos:** Asiento eyectable, Rendimiento mejorado, Manejo superior, Suite de vigilancia, Resistente, Armado
>
> - **Armas:** Dispensador de manchas de aceite, dispensador de humo, ametralladoras medianas gemelas
>
> - **Descripción:** Un coche de lujo modificado, deportivo o similar, este coche está construido para ir rápido y responder tan bien como recibe en una batalla. Este es el tipo de vehículo en el que la gente piensa cuando alguien dice "coche espía".

</details>

---
## Bloques de estadísticas de criaturas
Comienza una sección 'limpia' con un encabezado h2 para las listas. Los bloques de estadísticas de criaturas usan tablas y son más complejos en términos de formato y requisitos de espacio. Para mayor claridad, evita las subsecciones y añade divisores entre los elementos de la lista.

Cada ejemplo listado debe tener lo siguiente...

- **Título de la criatura:** Un divisor seguido de un encabezado h3 para el nombre de la criatura.

- **Entrada MEG:** Un enlace externo a la criatura especificada en el [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Detalles esenciales:** Nombre/tipo de criatura, atributos, habilidades y cualquier descripción especial o notas de personaje según sea necesario.

- **Detalles de armas:** Descripciones abreviadas con columnas para el nombre del arma y los siguientes atributos: Tamaño (incluye Fuerza aquí), Alcance (incluye Rango aquí), Daño, PA/PV, y cualquier regla especial.

- **Ubicaciones de impacto y armadura:** Las tablas de ubicación variarán según la anatomía de la criatura, pero deben incluirse incluso para humanoides tradicionales como un medio para rastrear la armadura y el daño.

### Formato de bloque de estadísticas de criaturas

```
## Bestiary/List Name

Descriptive text. 

---
### Example Creature
[MEG Entry](https://mythras.skoll.xyz/enemy_template/8626/)

| Creature Name | Example Creature  |
| :-- | :-- |
| Key Attributes | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
| Other notes | Values and details | 
```

<details>

<summary>Ejemplo: tablas de bloque de estadísticas de criaturas formateadas (citado en bloque) </summary>

> ---
> ### Goblin/Orco
> [Entrada MEG](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Nombre de la Criatura | Goblin/Orco |
> | :-- | :-- |
> | Atributos Clave | FUE 11, CON 14, TAM 11, DES 11, INT 11, POD 11, CAR 7 |
> | Puntos de Acción | 2 |
> | Modificador de Daño | - |
> | Iniciativa | +11 |
> | Movimiento | 6m |
> | Habilidades | Visión Nocturna |
> | Destrezas | Atletismo 52%, Bruto 42%, Engaño 57%, Resistencia 48%, Evadir 62%, Percepción 61%, Desarmado 52%, Voluntad 42% |
> | Estilo de Combate | Guerrero (Espada Corta, Escudo, Lanza, Honda) 62% |
>
> #### Detalles de Armas
>
> | Arma | Tamaño | Alcance | Daño | PA/PV | Especial |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Espada Corta | M | M | 1d6 | 6/8 | |
> | Lanza | M | L | 1d8+1 | 4/5 | |
> | Honda | L | 10/150/300 | 1d8 | 1/2 | |
> | Escudo | G | C | 1d4 | 4/9 | Protege 3 ubicaciones para Bloqueo/Protección Pasiva |
>
> #### Ubicaciones de Impacto y Armadura
>
> | **1d20** | **Ubicación** | **PA/PV** |
> | :-: | :-- | :-: |
> | 1-3 | Pierna Derecha | 1/5 |
> | 4-6 | Pierna Izquierda | 1/5 |
> | 7-9 | Abdomen | 1/6 |
> | 10-12 | Pecho | 1/7 |
> | 13-15 | Brazo Derecho | 1/4 |
> | 16-18 | Brazo Izquierdo | 1/4 |
> | 19-20 | Cabeza | 1/5 |

</details>

---
## Erratas de la Comunidad

### Errores tipográficos y confusión

Las ediciones para 'limpiar' el texto de los autores deben ser mínimas, pero los errores tipográficos y otras equivocaciones deben cambiarse directamente sin ninguna señalización.

### Paneles de información de Erratas

Cuando una regla dada es demasiado ambigua, incompleta o simplemente incorrecta, añade una nota de Errata de la Comunidad colapsable.

Explica el problema en cursiva, usando solo negrita y cursiva para el título del problema - _¡sin encabezados h(x)!_ - para no crear entradas confusas en la barra lateral.

Si se añade texto de reemplazo, colócalo entre comillas dobles en negrita y cursiva, precedido por "_Errata de la Comunidad:_" en cursiva de peso normal.

Las reglas adicionales, si son necesarias, deben presentarse en texto de peso normal.

#### Plantilla de formato de Erratas

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Ejemplos de Erratas

<details>

<summary>* Errata de la Comunidad</summary>

_**Escalar**_

_Errata de la Comunidad:_
_**"La armadura que se lleva puesta dificulta a los escaladores en una cantidad igual al promedio de los Puntos de Armadura usados. Encuentra esto sumando los puntos de armadura usados de cada ubicación y dividiendo esa cifra por el número de ubicaciones."**_

_La regla tal como está escrita causa problemas rápidamente. Llevar una sola pieza de armadura de 6 PA reduciría a un humano a Movimiento 0, lo que significa que un humano que usara un casco de acero y nada más estaría demasiado sobrecargado para escalar. Esto parece irrazonablemente restrictivo, de ahí la versión editada sugerida anteriormente. Esto se actualizará si los autores originales revisan la regla tal como está escrita._

</details>

<details>

<summary>* Errata de la Comunidad</summary>

_**Marchas: Caminar, Correr, Esprintar**_

_La versión publicada de _Mythras Imperative_ no tiene reglas explícitas para moverse a diferentes marchas, aunque sí están cubiertas en el libro de reglas central de Mythras. Los multiplicadores de marcha anteriores se han añadido como parte de la Errata de la Comunidad._

_Cuando sea necesario, debería bastar con tratar las marchas de la siguiente manera:_

- _Las marchas más rápidas que Caminar aplican un multiplicador a la calificación de Movimiento: 3x para Correr, 5x para Esprintar._

- _Mientras se está en marcha Correr o Esprintar, los personajes no pueden intentar la mayoría de las acciones proactivas como atacar o lanzar hechizos. Algunas excepciones incluyen..._
  - _Ataques cuando se usan las reglas de Carga._
  - _Disparar armas a distancia con el rasgo de Escaramuza._
- _Como regla general, cualquier acción permitida debe tratarse como un Grado más difícil de realizar al Correr, y dos Grados más difícil al Esprintar._

</details>

---
## Advertencias Varias

### Líneas en blanco / Saltos de carro

Deja una línea en blanco entre diferentes tipos de entrada. Encabezados, divisores, tablas, etc. Estos no se verán en la vista de lectura, pero su ausencia puede causar problemas de formato.

### Texto en negrita o cursiva de varios párrafos

Cada párrafo debe marcarse como texto en negrita o cursiva. La nueva línea entre párrafos romperá el formato, dejando marcas de formato huérfanas.

### Ortografía internacional

Los poderes regresivos y deplorables han decidido eliminar toda la ortografía británica en favor de las versiones estadounidenses, objetivamente más débiles. Presta atención a las palabras británicas con -OUR: _armour_, _favour_, etc.