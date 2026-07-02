# Vehículos

Los vehículos en _Mythras Imperative_ se tratan de una manera semi-abstracta. Esencialmente, son herramientas de fondo, utilizadas para llevar a los personajes de A a B, con poca necesidad de descripciones o estadísticas detalladas. Sin embargo, en ocasiones, los Games Masters requerirán detalles de los vehículos cuando sea necesario representarlos en persecuciones o situaciones de combate.

Las reglas de esta sección permiten la representación de la mayoría de los tipos de vehículos, pero de una manera abstracta que pretende permitir flexibilidad y mejorar la narración. Las naves estelares y las naves espaciales son un poco diferentes, aunque se basan en principios similares.

---
## Estadísticas

Todos los vehículos se describen en términos de su Estructura, Casco, Velocidad, Sistemas, Rasgos y Escudos (si están presentes en el entorno).

-   **[Tamaño](0006_Vehicles.md?id=vehicle-size-table):** Todos los vehículos tienen una de las seis calificaciones de Tamaño que determina el valor o rango del resto de las características. Debido a su mayor tamaño intrínseco y los entornos hostiles del espacio, las naves estelares tienen su propio rango de valores.
-   **[Casco](0006_Vehicles.md?id=terrestrial-hulls):** Representa los Puntos de Armadura
-   **[Estructura](0006_Vehicles.md?id=terrestrial-hulls):** Representa los Puntos de Impacto de un vehículo
-   **[Escudos](0006_Vehicles.md?id=shields):** En entornos con tecnología avanzada de manipulación de energía, pueden estar presentes escudos que protegen el vehículo, pero que pueden desgastarse bajo fuego sostenido.
-   **[Sistemas](0006_Vehicles.md?id=systems):** Representa los componentes vitales del vehículo, incluyendo la planta de energía, la sección de la tripulación, etc.
-   **[Velocidad](0006_Vehicles.md?id=speed):** Cada vehículo tiene una calificación de Velocidad básica
-   **[Rasgos](0006_Vehicles.md?id=traits):** Un vehículo también puede tener uno o más Rasgos. Los Rasgos, al igual que las Habilidades asignadas a las Criaturas en las reglas de _Mythras Imperative_, o los Rasgos de Estilo de Combate, ofrecen una descripción de juego y una ventaja adicionales, reflejando la naturaleza del vehículo.
-   **[Armas](0006_Vehicles.md?id=weapons):** Al igual que los Rasgos, un vehículo puede estar equipado con armas según lo permita el entorno. A continuación se detallan algunos ejemplos y valores sugeridos.

---
### Tamaño, Tipo y Estructura del Casco

El tamaño y el propósito de un vehículo afectan el grosor de su casco y la resistencia de su estructura interna. Una motocicleta, por ejemplo, tiene un casco mínimo, construida para la velocidad y la agilidad. Un Acorazado Terrestre (un mastodonte blindado masivo, sobre orugas o ruedas, propulsado por motores de vapor o diésel), siendo un vehículo mucho más grande diseñado para el campo de batalla, tiene un casco mucho mayor. Los tamaños comparativos de los cascos (y cuántos impactos de armas pueden soportar típicamente) se resumen en las tablas de Tamaño y Casco de Vehículos a continuación.

Siempre que un vehículo sufre daño, el daño entrante se reduce por el valor de su Casco. Cualquier daño restante se resta de los puntos de Estructura del vehículo y tiene una probabilidad porcentual, igual al daño penetrante, de afectar un Sistema. Si el vehículo alguna vez se reduce a cero Estructura, es completamente destruido o tan gravemente destrozado que debe ser desguazado.

##### Cascos Terrestres

| Tamaño | Estructura | Valor de Casco Civil | Valor de Casco Militar | Ejemplo |
| :-- | :-: | :-: | :-: | :-- |
| Pequeño | 1-20 | 1-3 | 4-6 | Motocicleta, motocicleta con sidecar, coche compacto o subcompacto, canoa, kayak, bote de remos |
| Mediano | 21-40 | 1-6 | 7-9 | Sedán, furgoneta de reparto, pickup, coche de lujo, deportivo de lujo, muscle car, limusina, bote salvavidas, lancha rápida, ala delta, autogiro |
| Grande | 41-60 | 4-9 | 10-12 | Camión, limusina estirada, SUV, autobús, monovolumen, aeronave personal, planeador, crucero de recreo, tanque, helicóptero, submarino |
| Enorme | 61-80 | 7-12 | 13-15 | Semirremolque, avión de pasajeros, jet, buque guardacostas, yate |
| Colosal | 81-100 | 10-15 | 16-18 | Tren, crucero, buque naval |

##### Cascos de Naves Estelares

| Tamaño | Estructura | Valor de Casco Civil | Valor de Casco Militar | Ejemplo |
| :-- | :-: | :-: | :-: | :-- |
| Pequeño | 10-50 | 4-9 | 10-12 | Caza monoplaza |
| Mediano | 51-150 | 7-12 | 13-15 | Carguero ligero, Nave de transbordo |
| Grande | 151-450 | 10-15 | 16-18 | Carguero pesado, Crucero |
| Enorme | 451-1350 | 13-18 | 19-21 | Fragata de escolta, Crucero de batalla ligero |
| Colosal | 1351-4050 | 16-21 | 21-24 | Nave de generación, Estación de batalla destructora de planetas |

---
### Escudos

Los escudos deflectores proporcionan una capa adicional de protección para aquellos vehículos que pueden montarlos. Los escudos funcionan de manera ligeramente diferente al Casco, debido a su naturaleza ablativa. Si el daño entrante es igual o menor que el valor de los escudos, entonces todo se bloquea. Si el daño excede el valor del escudo, entonces cualquier exceso reduce la fuerza del escudo en esa cantidad.

_Por ejemplo, un transporte de tropas tiene una fuerza de escudo de energía de 12 puntos. Si el transporte fuera impactado por un láser que inflige 11 de daño, simplemente no penetra y no tiene ningún efecto adicional. Por otro lado, si el transporte fuera impactado por una explosión que inflige 15 de daño, los tres puntos de exceso reducirían la fuerza del escudo a 9._

Una vez que la fuerza de un escudo deflector ha caído a cero, colapsa. Cualquier daño restante se transfiere al casco.

---
### Sistemas

Cada vez que un vehículo sufre daño que penetra su casco, existe una probabilidad, igual al daño penetrante, de que un Sistema vital haya sido afectado.

_Por ejemplo, se aplican 10 de daño a una Lancha Rápida, un vehículo con 3 de Casco y 24 de Estructura. El Casco cuenta como armadura, reduciendo el daño a 7. Esto se resta de los 24 puntos de Estructura y hay un 7% de probabilidad de dañar uno de los Sistemas del vehículo._

El daño que un Sistema puede soportar se basa puramente en el tamaño del vehículo. Esto se modela por el número de impactos que un Sistema puede recibir, en lugar de la cantidad real de daño. Un solo Impacto de Sistema en un vehículo Pequeño destruirá instantáneamente ese Sistema. Se necesitan dos impactos para demoler los Sistemas de un vehículo de tamaño Mediano, tres para un vehículo Grande, y así sucesivamente. Consulte la [Tabla de Daño de Sistemas](0006_Vehicles.md?id=system-damage-table) a continuación.

Los Sistemas que están dañados, pero aún no destruidos, sufren una pérdida de función proporcional al número de Impactos recibidos, ya sea una reducción porcentual o una penalización de Grado en las tareas del Sistema. El efecto específico se basa en lo que controla el subsistema, como se detalla en la [Tabla de Daño de Componentes del Sistema](0006_Vehicles.md?id=system-component-damage-table) a continuación. Dependiendo de qué Sistema sea impactado, los efectos pueden ser catastróficos.

_Por ejemplo, un Acorazado Terrestre – un vehículo Enorme con 5 Impactos de Sistema – que recibe dos impactos en el Tren de Rodaje perdería el 40% de su potencia y reduciría su Velocidad Lenta en dos Grados a Pesado. De manera similar, un carguero Grande – con 3 Impactos de Sistema – que recibe dos impactos en el Sistema de Motor/Combustible tendría una penalización de dos Grados en la Velocidad, así como en el uso de sistemas Electrónicos. Un tercer impacto destruiría el Sistema de Motor/Combustible y la nave con él._

<details>

<summary>* Errata de la Comunidad</summary>

---

#### Daño

_El texto original estaba originalmente más alejado. Colocado directamente después de la sección de Sistemas, repite innecesariamente el párrafo anterior._

-   _“El daño que excede el Casco penetra el vehículo, dañando la Estructura y posiblemente afectando uno o más sistemas. Dependiendo del tamaño del vehículo, el daño puede ser menor o catastrófico._
-   _Por ejemplo, un vehículo Grande puede recibir hasta dos impactos en un Sistema como su Tren de Rodaje. El tercer impacto destruye funcionalmente el Tren de Rodaje. Cada vez que el sistema recibe un impacto, pierde un porcentaje de su función, como se describe en la columna de Pérdida por Impacto de la Tabla de Daño de Sistemas a continuación, o una función central (como Tren de Rodaje, Piloto, Comunicaciones, etc.) se vuelve un Grado de Dificultad más difícil por cada impacto sufrido.”_

_Los párrafos anteriores se eliminan y se reemplazan por una edición abreviada que presenta otro ejemplo de efecto de Sistema._

---

</details>

##### Tabla de Daño de Sistemas

| Tamaño | Impactos en Sistema | Pérdida por Impacto |
| :-- | :-: | :-- |
| Pequeño | 1 | 100% - Destruido |
| Mediano | 2 | 1 Grado o 50% |
| Grande | 3 | 1 Grado o 33% |
| Enorme | 4 | 1 Grado o 25% |
| Colosal | 5 | 1 Grado o 20% |
| Colosal | 6 | 1 Grado o 16% |

<details>

<summary>* Errata de la Comunidad</summary>

---

##### Tabla de Daño de Sistemas (Original)

| Tamaño | Impactos en Sistema | Pérdida por Impacto |
| :-- | :-: | :-- |
| Pequeño | 1 | 1 Grado o 50% |
| Mediano | 2 | 1 Grado o 33% |
| Grande | 3 | 1 Grado o 25% |
| Enorme | 4 | 1 Grado o 20% |
| Colosal | 5 | 1 Grado o 16% |
| Colosal | 6 | 1 Grado o 10% |

##### Tabla de Tamaño de Vehículo (de [Tamaño, Tipo y Estructura del Casco](0006_Vehicles.md?id=hull-size-type-and-structure))

| Tamaño | Impactos en Sistema |
| :-- | :-: |
| Pequeño | 1 |
| Mediano | 2 |
| Grande | 3 |
| Enorme | 4 |
| Colosal | 5 |
| Colosal | 6 |

_Las reglas y ejemplos originales son inconsistentes:_
-   _“Los sistemas que están dañados, pero aún no destruidos, sufren una pérdida de funcionalidad. Esto es igual a la proporción de impactos actuales respecto a su capacidad total. Así, un vehículo Enorme golpeado dos veces en el Tren de Rodaje perdería el 40% de su potencia (2 impactos de un máximo de 5)”._
    -   _Esto sugiere que el vehículo Enorme con 5 Impactos de Sistema debería perder el 20% con cada impacto, pero la tabla dice 16%._
-   _“Por ejemplo, un vehículo Grande puede recibir hasta tres impactos en un sistema como su Tren de Rodaje. El cuarto impacto destruye funcionalmente el Tren de Rodaje.”_
    -   _“Esto sugiere –como también lo hace la tabla– un 25% de daño por Impacto de Sistema, pero los vehículos Grandes solo pueden recibir 3 Impactos de Sistema según la misma tabla._
-   _Aunque no es inconsistente, la Tabla de Tamaño de Vehículo era redundante; aparece de nuevo de forma más completa (añadiendo la columna de Pérdida por Impacto) solo unas pocas líneas más tarde._

_Esto hace que sea difícil tener una regla consistente. Para abordar estos problemas, los valores y ejemplos se modifican para que coincidan y la Tabla de Tamaño de Vehículo se eliminó._

---

</details>

##### Tabla de Daño de Componentes del Sistema

| 1d10 | Sistema | Resultado Dañado | Resultado Destruido |
| :-: | :-- | :-- | :-- |
| 1 | Carga | Una cantidad de posesiones o equipo almacenado en la bodega, proporcional al daño, es destruida. | Toda la carga es destruida. |
| 2 | Comunicaciones | Las tiradas de Comunicaciones sufren un Grado de Dificultad adicional cada vez que son dañadas. | El vehículo ya no puede comunicarse o engañar a los sensores enemigos. |
| 3 | Controles | Las tiradas de Navegación, Conducción o Pilotaje sufren un Grado de Dificultad adicional cada vez que son dañadas; se requiere una tirada de Control inmediata. | El vehículo ya no puede ser dirigido o cambiar de rumbo. |
| 4 | Tren de Rodaje | Velocidad reducida en una cantidad proporcional al daño. | El vehículo se detiene; las aeronaves se estrellan. |
| 5 | Tripulación | Un número de pasajeros proporcional al daño son víctimas. Los afectados sufren una Herida Mayor y deben superar una tirada de Resistencia o morir instantáneamente. | Los ocupantes del vehículo mueren. |
| 6 | Motor / Combustible | Velocidad reducida en una cantidad proporcional al daño. Los sistemas electrónicos son un Grado de Dificultad más difíciles de usar. | El vehículo es destruido en una explosión desastrosa. |
| 7 | Sensores | Las tiradas de Sensores, Navegación y Ataque de Armas sufren un Grado de Dificultad adicional cada vez que son dañadas. | El vehículo queda cegado. |
| 8 | Armas | Un número de sistemas de armas proporcionales al daño quedan inoperativos. | El vehículo ya no puede disparar armas. |
| 9-0 | Ninguno | Ningún sistema impactado; solo daño a la Estructura. | N/A |

<details>

<summary>* Errata de la Comunidad</summary>

---

##### Tabla de Daño de Componentes del Sistema (Motor/Combustible)

_El resultado original era el siguiente: "La velocidad máxima se reduce a la mitad..." Esto contradice la regla general de penalizaciones de daño en proporción al daño del Sistema: 25% de daño = 25% de penalización. Además, las reglas completas del Mythras Companion no mencionan esta reducción a la mitad de la velocidad._

_Como resultado, el texto se reemplaza con la misma entrada de los Sistemas de Tren de Rodaje: "Velocidad reducida en una cantidad proporcional al daño."_

---

</details>

---
### Velocidad

Dado que la física de la velocidad, la aceleración, la resistencia y la inercia (por nombrar solo algunas) son cuestiones complejas, se necesita cierta simplificación y, por lo tanto, a los vehículos se les asigna una calificación de velocidad abstracta. La característica de Velocidad solo debe usarse para juzgar aproximadamente si un vehículo puede adelantar o alcanzar a otro.

La calificación de velocidad representa la tasa de operación nominal de un vehículo. En situaciones de emergencia, este rendimiento se puede aumentar en un paso, a riesgo de desgaste o daño a los motores. Aunque se usa la misma tabla para todos los tipos de vehículos, se debe aplicar el sentido común para que solo se comparen vehículos de la misma clase. Por ejemplo, si una nave estelar y un coche deportivo tienen la misma tasa de aceleración Rápida, entonces debería ser obvio que la nave espacial es comparativamente más rápida.

Aumentar la Velocidad de un vehículo más allá de su valor estándar es posible con una tirada exitosa de Conducción. Generalmente, esta velocidad extra solo es sostenible por un período corto – no más de 1d6 minutos antes de que el vehículo deba reducir a su velocidad estándar o arriesgarse a dañar su planta de energía. Una tirada crítica de Conducción permite aumentar el período de mayor velocidad a 1d12 minutos.

Un conductor puede intentar aumentar la velocidad de un vehículo en 2 pasos, pero esto requiere una tirada Hercúlea de Conducción y el máximo que el vehículo puede mantener esta velocidad es 1d3 minutos: un Éxito Crítico no extenderá la duración de la velocidad aumentada.

##### Tabla de Calificación de Velocidad

| Calificación de Velocidad | Velocidad Máxima Para |
| :-- | :-: |
| Pesado | Colosal |
| Lento | |
| Despacio | Enorme |
| Mediocre | |
| Suave | Grande |
| Moderado | |
| Rápido | Mediano |
| Veloz | |
| Flota | Pequeño |

---
### Rasgos

El número máximo de rasgos que puede tener un vehículo depende del tamaño y tipo de casco.

Todo vehículo tiene un rasgo inherente: el modo de viaje para el que fue diseñado principalmente. Por lo tanto, las aeronaves poseen inherentemente el rasgo Aéreo, las embarcaciones el rasgo Marítimo, y así sucesivamente. Este rasgo inherente no cuenta para el número disponible de rasgos. Sin embargo, si un vehículo incluye un segundo modo de viaje (un submarino volador, por ejemplo), entonces el rasgo Aéreo debería tomarse como uno de sus rasgos disponibles.

Algunos rasgos pueden no estar disponibles, dependiendo del nivel tecnológico del entorno; los Games Masters deben juzgar qué rasgos pueden aplicarse.

##### Tabla de Asignación de Rasgos de Vehículo

| Tamaño | Máx. Rasgos |
| :-- | :-: |
| Pequeño | 1 |
| Mediano | 2 |
| Grande | 3 |
| Enorme | 4 |
| Colosal | 5 |
| Colosal | 6 |

#### Aéreo

El vehículo es capaz de volar en la atmósfera.

#### Todoterreno

Este Rasgo debe usarse con vehículos Terrestres. El vehículo puede atravesar terrenos inhóspitos, difíciles y empinados, utilizando orugas, sistemas avanzados de suspensión y tracción, o potentes diferenciales de tracción.

#### Tunelador

El vehículo está diseñado para excavar y tunelar a través del suelo. Puede alcanzar una profundidad máxima igual a su Calificación de Casco x5 metros.

#### Camuflado

El vehículo posee pintura de camuflaje o sensores miméticos que le permiten mezclarse con su entorno. Los intentos de detectar el vehículo visualmente son un grado más difíciles.

#### Carga

El vehículo está diseñado específicamente para transportar carga en lugar de pasajeros. Los compartimentos de pasajeros se reducen al mínimo, y el resto del espacio utilizable del vehículo se dedica al almacenamiento de carga con secciones, herramientas e incluso acondicionamiento ambiental apropiados (como secciones de congelación para transportar perecederos). Cuando está cargado, la velocidad del vehículo es dos pasos menor de lo que su tamaño de casco permitiría normalmente.

#### Portaaviones

El vehículo está diseñado específicamente para transportar vehículos más pequeños, con poca tripulación o posiblemente controlados a distancia, de naturaleza civil o militar. Cualquier vehículo que posea este rasgo debe ser al menos Enorme. El número de naves pequeñas transportadas puede variar según el tipo y propósito de la misión, pero puede ser tan poco como 10 o tantos como la calificación de Estructura del vehículo.

#### Construcción

El vehículo está equipado para trabajos de construcción pesada. Todos los vehículos con este rasgo también tienen el rasgo Todoterreno, pero la velocidad es dos pasos menor de lo que su tamaño de casco permitiría normalmente. El vehículo está equipado con herramientas adecuadas para la tarea, como plumas de grúa, palas excavadoras, volquetes, etc.

#### Resistente a EMP

El vehículo está blindado contra ataques de pulso electromagnético.

#### Rendimiento Mejorado

La calificación de Velocidad del vehículo es un paso más alta que el máximo para su tamaño.

#### Asiento Ejector

En caso de emergencia, un asiento eyectable impulsa a los ocupantes varios cientos de metros en el aire, luego despliega un paracaídas para permitir un aterrizaje seguro. El paracaídas es opcional. No se recomienda para helicópteros (el Kamov Ka-52 Alligator es una excepción notable).

#### FTL

Solo Naves Espaciales. La nave está equipada con un motor más rápido que la luz (ya sea un hiperpropulsor, motor de curvatura, generador de agujeros de gusano o similar). El motor FTL tiene una clasificación de Velocidad separada que esencialmente mide la velocidad a la que una nave estelar puede cruzar un solo pársec (3,26 años luz, o 31 billones de kilómetros o 19 billones de millas), como sigue:

##### Tabla de Calificación de Velocidad FTL

| Calificación de Velocidad | Factor para Atravesar 1 Pársec |
| :-- | :-: |
| Pesado | 10 |
| Lento | 8 |
| Despacio | 7 |
| Mediocre | 6 |
| Suave | 5 |
| Moderado | 4 |
| Rápido | 3 |
| Veloz | 2 |
| Flota | 1 |

El tiempo del factor lo decide el Games Master, dependiendo de cuán avanzado esté el desarrollo FTL del entorno. Por ejemplo, el factor base podría ser 1 Día, lo que significa que una nave con un motor FTL Pesado tarda 10 días en completar el viaje, mientras que una nave con un motor FTL Flota completa el viaje en 1 día. En otros lugares, donde la tecnología FTL es significativamente menos eficiente, el tiempo del factor podría medirse en meses, en lugar de días.

Se asume que la nave tiene reservas de combustible para hacer un viaje de regreso, o un medio para repostar en el punto de destino.

Asuma que cualquier tamaño de nave estelar puede ser equipado con un motor FTL, aunque, de nuevo, esto depende del entorno.

Los motores FTL no pueden activarse dentro de 1.5 Unidades Astronómicas de una estrella (alrededor de 225 millones de kilómetros, o 270 millones de millas). Esto significa que las naves deben usar un motor subluz para moverse hasta la distancia de Marte antes de activar el sistema FTL.

#### Vehículo Terrestre

El vehículo es capaz de viajar por tierra.

#### Flotante

El vehículo flota sobre el suelo, ya sea utilizando un colchón de aire o un repulsor antigravedad.

#### Lujoso

El vehículo está diseñado específicamente para transportar pasajeros con un cierto nivel de lujo. El exceso de espacio de carga se destina a lujosas acomodaciones para pasajeros, piscinas, jacuzzis, tripulación adicional para satisfacer los caprichos de los pasajeros, y así sucesivamente.

#### Rieles

El vehículo depende de un sistema de rieles. Los vehículos con este rasgo pueden alcanzar naturalmente una calificación de Velocidad tres pasos más alta de lo que su tamaño de casco permitiría normalmente, pero obviamente están restringidos a moverse solo en el sistema de rieles.

#### Resistente

Todos los sistemas pueden soportar un impacto adicional más de lo normalmente determinado por el Tamaño. Este Rasgo se puede apilar, por lo que Resistente 2 indica que los sistemas pueden soportar 2 impactos más de lo normal a un costo de dos puntos de Rasgo.

#### Marítimo

El vehículo flota en el agua.

#### Nave Espacial

El vehículo está sellado contra el vacío y protegido contra la radiación cósmica y, dependiendo del diseño, puede ser capaz de salir y volver a entrar en la atmósfera, y mantener el vuelo dentro de una atmósfera.

#### Sigilo

Solo Aeronaves. El vehículo está diseñado para evitar la detección por radar y otros sistemas de sensores de largo alcance. Los intentos de detectar el vehículo utilizando sensores electrónicos son un grado más difíciles.

#### Sumergible

El vehículo es capaz de sumergirse bajo la superficie de un océano hasta una profundidad operativa de su Calificación de Casco x10 metros. La profundidad de colapso, el máximo absoluto que el sumergible puede alcanzar sin ser aplastado, es 1.5 veces su profundidad operativa.

#### Manejo Superior

El manejo del vehículo se califica como Fácil.

#### Suite de Vigilancia

El vehículo tiene una computadora a bordo, una estación base de comunicaciones, un receptor para señales de dispositivos de escucha y un aparato para interceptar señales de teléfonos inteligentes cercanos en un radio de 100 metros.

#### Robusto

Un vehículo civil con este rasgo obtiene su Casco de la columna Militar y automáticamente tiene la Estructura máxima. Un vehículo militar con este Rasgo obtiene su Casco y Estructura de la siguiente fila hacia abajo.

#### Rayo Tractor

Solo Naves Espaciales. La nave está equipada con un rayo tractor que puede atrapar y atraer vehículos con una calificación de casco de hasta dos pasos menos que la suya. Así, una nave estelar Enorme podría atraer y retener un casco de hasta tamaño Mediano.

#### VTOL

Despegue/aterrizaje vertical. Este rasgo es inherente a los helicópteros y vehículos similares que utilizan una combinación de rotores para producir sustentación. Cuando se aplica a aviones de ala fija, indica el uso de propulsores fijos o alineables para controlar la actitud en el aire, el ascenso y el descenso.

#### Acuático

El vehículo se propulsa utilizando patas articuladas. Los vehículos caminantes están limitados a una velocidad Suave, sea cual sea su Tamaño. Sin embargo, los caminantes pueden construirse a alturas que serían simplemente inestables para vehículos equipados con otros medios de locomoción.

Este vehículo es capaz de movimiento subacuático.

#### Armado

El vehículo ha sido adaptado para alojar armamento. Los sistemas de armas se discuten a continuación en la sección de [Armas](0006_Vehicles.md?id=weapons).

---
## Armas

Generalmente, solo los cascos militares están diseñados para albergar armamento (puntos duros, almacenamiento de municiones, sistemas de control). El Rasgo 'Armado' puede tomarse para vehículos civiles que puedan tener requisitos de armamento.

El número máximo de sistemas de armas que un vehículo puede soportar es igual a 1/10 de sus Puntos de Estructura (así, un vehículo con 40 de Estructura podría soportar 4 sistemas de armas, si es un vehículo militar o un vehículo civil Armado).

Los sistemas de armas dependen del Tamaño del vehículo. El tipo máximo de sistema de armas para diferentes Tamaños se muestra en las tablas a continuación.

##### Tabla de Armas por Tamaño

| Tamaño | Terrestre | Nave Espacial |
| :-- | :-- | :-- |
| Pequeño | Arma Ligera (ej. Rifle de Asalto) | Arma Mediana (ej. Ametralladora, Lanzacohetes) |
| Mediano | Arma Mediana (ej. Ametralladora, Lanzacohetes) | Arma Pesada/Torreta (ej. Ametralladoras Pesadas Enlazadas, Mini-armas) |
| Grande | Arma Pesada/Torreta (ej. Ametralladoras Pesadas Enlazadas, Mini-armas) | Batería de Armas (ej. Artillería de Campo de Batalla) |
| Enorme | Batería de Armas (ej. Artillería de Campo de Batalla) | Armas Avanzadas (ej. Sistemas de Misiles) |
| Colosal | N/A | Armas Montadas en Espina (una sola) |
| Colosal | N/A | Armas Montadas en Espina (hasta 3) |

##### Estadísticas de Armas de Muestra

| Arma | Daño | Alcance | Cadencia de Fuego | Munición/Carga |
| :-- | :-: | :-: | :-: | :-: |
| Cañón de 50 pulgadas | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-arma/Ametralladora Gatling | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Cohete | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Misil/Torpedo Mediano | 6d10 | Alcance máx. de 200km | 1 | 1/5 |
| Misil Grande/Crucero | 6d10+10 | Alcance máx. de 1000km | 1 | 1/10 |
| Cañón Láser/Plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Cañón Láser/Plasma Pesado | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Batería de Artillería | 5d6+6 | Alcance máx. de 50km | 1 | 1/5 |
| Batería de Montaje Espinal | 10d6+6 | Alcance máx. de 20000km | 1 | 1/10 |

_Los alcances se dan en metros y kilómetros._

_Las cadencias de fuego son para disparo único, semi-automático y automático completo._

_La munición es la capacidad de disparo antes de necesitar recarga. La carga es el tiempo de recarga en Asaltos de Combate, asumiendo una tripulación completa disponible._

---
## Manejo y Maniobras

Las maniobras evasivas o repentinas requieren una tirada exitosa de Conducción/Pilotaje para asegurar que el conductor o piloto mantenga el control del vehículo. La mayoría de los vehículos están diseñados y construidos para soportar tensiones y esfuerzos ocasionales, pero el Games Master puede dictaminar que una maniobra particular requiere una tirada con un grado de dificultad mayor, dependiendo de cuán ambiciosa sea. Un fallo significa que se pierde el control del vehículo: tira en la tabla de Pérdida de Control.

Tenga en cuenta que la Tabla de Pérdida de Control solo se aplica a vehículos terrestres. Se pueden aplicar efectos similares a vehículos aéreos y espaciales, pero los Games Masters deberán ajustar el razonamiento del efecto específico. Por ejemplo, una aeronave, en lugar de derrapar, podría entrar en barrena.

Además, el manejo inherente de un vehículo puede tener un impacto adicional en la tirada de Conducción. El manejo es Fácil, Estándar, Difícil, Formidable o Hercúleo y determina el punto de partida para la tirada de Conducción al ejecutar una maniobra. El grado de dificultad de la maniobra se aplica luego al manejo para determinar la dificultad final.

Por ejemplo, una motocicleta de alto rendimiento tiene giroestabilizadores incorporados que le otorgan un Manejo Fácil. El conductor quiere realizar un giro de 180 grados para evadir a un perseguidor, una maniobra que el Games Master califica como un grado adicional de dificultad. Por lo tanto, el piloto debe hacer su tirada de Conducción en Estándar en lugar de Fácil. Si hubiera estado intentando la misma maniobra en una motocicleta no estabilizada, la tirada de Conducción sería en Difícil.

El Manejo Superior es un Rasgo. Si un vehículo no tiene el rasgo como parte de su descripción, entonces el valor predeterminado es manejo Estándar para cualquier vehículo de tamaño Grande e inferior. Los vehículos Enormes y Colosales tienen inherentemente el rasgo de Manejo de Formidable y Hercúleo, respectivamente, y el Games Master tiene la libertad de dictaminar que ciertas maniobras son simplemente imposibles de lograr debido al tamaño del vehículo.

##### Tabla de Pérdida de Control

| 1d100 | Resultado |
| :-: | :-- |
| 01-25 | Desvío. La pérdida de control es temporal. El vehículo reduce su velocidad en 1 paso durante 5 segundos. |
| 26-40 | Derrape. El conductor debe luchar para mantener el vehículo bajo control. El vehículo reduce su velocidad en 2 pasos durante 10 segundos. |
| 41-50 | Derrape Severo. El vehículo termina mirando en la dirección equivocada y detenido durante 15 segundos. |
| 51-60 | Vuelco. El vehículo derrapa y vuelca, sufriendo 3d10 de daño a su Estructura. Los ocupantes deben hacer tiradas de Resistencia exitosas o sufrir 1d10 de daño en 1d3 Ubicaciones de Impacto. |
| 61-70 | Vuelco Severo. Como el anterior, pero el vehículo sufre 3d10+10 de daño y los ocupantes reciben 1d10 de daño incluso si la tirada de Resistencia tiene éxito, y 2d10 si falla. |
| 71-80 | Pérdida Total. Como el anterior, pero el vehículo queda reducido a 0 de Estructura. Los ocupantes sufren el mismo daño que en Vuelco Severo. |
| 81-90 | Explosión. Como el anterior, pero el sistema de combustible del vehículo se incendia y explota en 1d20+10 segundos. Si no pueden salir, los ocupantes sufren 1d6 de daño por quemadura adicional en 1d6 Ubicaciones. |
| 91-98 | Explosión Inmediata. Como el anterior, pero la explosión es inmediata. |
| 99-00 | Colisión Catastrófica. Los ocupantes deben hacer una tirada de Resistencia exitosa o morir instantáneamente. Se sufre el daño de Pérdida Total sin importar el resultado. |

---
## Vehículos de Muestra

---

### Vehículos Terrestres

#### Interceptor

Un coche de lujo tuneado, coche deportivo o similar, este coche está construido para ir rápido y aguantar lo que le echen en una batalla. Este es el tipo de vehículo en el que la gente piensa cuando alguien dice "coche espía".

| Interceptor | |
| :- | :- |
| **Tamaño / Tipo** | Mediano Militar |
| **Casco** | 6 |
| **Estructura** | 40 |
| **Sistemas** | 2 |
| **Velocidad** | Veloz |
| **Manejo** | Fácil |
| **Rasgos** | [Asiento Ejector](0006_Vehicles.md?id=ejector-seat), [Rendimiento Mejorado](0006_Vehicles.md?id=enhanced-performance), [Manejo Superior](0006_Vehicles.md?id=superior-handling), [Suite de Vigilancia](0006_Vehicles.md?id=surveillance-suite), [Armado](0006_Vehicles.md?id=weaponized) |
| **Armas** | Dispensador de Aceite, Dispensador de Humo, Ametralladoras Medianas de Doble Enlace (2d6+3) |

<br>

---

#### Motocicleta de Persecución

Una motocicleta ligera y rápida para persecuciones rápidas, la Motocicleta de Persecución lleva una sorpresa: un par de ametralladoras enlazadas o dos cohetes.

| Motocicleta de Persecución | |
| :- | :- |
| **Tamaño / Tipo** | Pequeño Civil |
| **Casco** | 2 |
| **Estructura** | 12 |
| **Sistemas** | 1 |
| **Velocidad** | Veloz |
| **Manejo** | Fácil |
| **Rasgos** | [Manejo Superior](0006_Vehicles.md?id=superior-handling), [Armado](0006_Vehicles.md?id=weaponized) |
| **Armas** | Dos Cohetes (4d6) o Ametralladoras Ligeras de Doble Enlace (2d6) |

<br>

---

#### Coche Sedán

Un sedán estándar de 4 puertas con suficiente espacio para acomodar cómodamente a un conductor y tres pasajeros. Sacrifica espacio de carga para incorporar una suite de vigilancia.

| Coche Sedán | |
| :- | :- |
| **Tamaño / Tipo** | Mediano Civil |
| **Casco** | 4 |
| **Estructura** | 25 |
| **Sistemas** | 2 |
| **Velocidad** | Rápido |
| **Manejo** | Estándar |
| **Rasgos** | [Discreto](0006_Vehicles.md?id=unobtrusive), [Suite de Vigilancia](0006_Vehicles.md?id=surveillance-suite) |
| **Armas** | Ninguna |

<br>

---

#### Coche Sumergible

Un coche para dos personas que puede cambiar a modo acuático o sumergible para viajar sobre o bajo el agua. Viene con un torpedo montado en la parte delantera y un misil superficie-aire montado en la parte superior.

| Coche Sumergible | |
| :- | :- |
| **Tamaño / Tipo** | Mediano Civil |
| **Casco** | 6 |
| **Estructura** | 25 |
| **Sistemas** | 2 |
| **Velocidad** | Veloz |
| **Manejo** | Estándar |
| **Rasgos** | [Rendimiento Mejorado](0006_Vehicles.md?id=enhanced-performance), [Sumergible](0006_Vehicles.md?id=submersible), [Acuático](0006_Vehicles.md?id=waterborne), [Armado](0006_Vehicles.md?id=weaponized) |
| **Armas** | Cohete (5d6), Torpedo (4d10) |

<br>

---

#### Furgoneta de Vigilancia

Una furgoneta sencilla, sin distintivos, que alberga un equipo de agentes y una suite de equipos de grabación de audio y video.

| Furgoneta de Vigilancia | |
| :- | :- |
| **Tamaño / Tipo** | Grande Civil |
| **Casco** | 9 |
| **Estructura** | 60 |
| **Sistemas** | 3 |
| **Velocidad** | Suave |
| **Manejo** | Estándar |
| **Rasgos** | [Suite de Vigilancia](0006_Vehicles.md?id=surveillance-suite), [Robusto](0006_Vehicles.md?id=tough) |
| **Armas** | Ninguna |

<br>

---

#### Vehículo de Apoyo Táctico

Una camioneta o jeep con espacio para una tripulación de dos personas en la cabina y un artillero de pie en la parte trasera plana que opera una ametralladora mediana montada sobre un pivote.

| Vehículo de Apoyo Táctico | |
| :- | :- |
| **Tamaño / Tipo** | Mediano Civil |
| **Casco** | 6 |
| **Estructura** | 30 |
| **Sistemas** | 2 |
| **Velocidad** | Rápido |
| **Manejo** | Estándar |
| **Rasgos** | [Todoterreno](0006_Vehicles.md?id=all-terrain), [Armado](0006_Vehicles.md?id=weaponized) |
| **Armas** | Ametralladora Mediana Montada (2d6) |

<br>

---

### Embarcaciones

#### Lancha Rápida

Una lancha rápida típica, armada con un dispensador de minas montado en la parte trasera.

| Lancha Rápida | |
| :- | :- |
| **Tamaño / Tipo** | Mediano Civil |
| **Casco** | 3 |
| **Estructura** | 24 |
| **Sistemas** | 2 |
| **Velocidad** | Veloz |
| **Manejo** | Estándar |
| **Rasgos** | [Rendimiento Mejorado](0006_Vehicles.md?id=enhanced-performance), [Acuático](0006_Vehicles.md?id=waterborne), [Armado](0006_Vehicles.md?id=weaponized) |
| **Armas** | Dispensador de Minas (5d6) |

<br>

---

#### Yate

El tipo de yate de lujo que podría poseer un oligarca. Probablemente equipado con una suite de vigilancia para protegerse de los enemigos que intentan hacer algo indebido.

| Yate | |
| :- | :- |
| **Tamaño / Tipo** | Enorme Civil |
| **Casco** | 10 |
| **Estructura** | 75 |
| **Sistemas** | 4 |
| **Velocidad** | Despacio |
| **Manejo** | Formidable |
| **Rasgos** | [Lujoso](0006_Vehicles.md?id=luxurious), [Suite de Vigilancia](0006_Vehicles.md?id=surveillance-suite), [Acuático](0006_Vehicles.md?id=waterborne) |
| **Armas** | Ninguna |

<br>

---

### Aeronaves/Naves Espaciales

#### Dirigible (Transatlántico Aéreo Civil)

Similar al Hindenburg, esta clase de dirigible transcontinental (y otros de su clase) tiene 245 metros de longitud y requiere una tripulación de 40 a 61 personas. Típicamente puede transportar una dotación de 50 a 72 pasajeros en alojamientos de lujo.

| Dirigible | |
| :- | :- |
| **Tamaño / Tipo** | Enorme Civil |
| **Casco** | 10 |
| **Estructura** | 85 |
| **Sistemas** | 5 |
| **Velocidad** | Pesado |
| **Manejo** | Hercúleo |
| **Rasgos** | [Aéreo](0006_Vehicles.md?id=airborne), [Lujoso](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Escudos** | Ninguno |
| **Armas** | Ninguna |

<br>

---

#### Helicóptero de Asalto

El tradicional Helicóptero de Asalto utiliza su avanzada tecnología de vigilancia para interceptar señales de teléfono y de internet inalámbrico, y rastrear individuos y vehículos incluso en la oscuridad, a través de FLIR. Los intentos de evadir el rastreador mediante Sigilo son Formidables.

| Helicóptero de Asalto | |
| :- | :- |
| **Tamaño / Tipo** | Grande Militar |
| **Casco** | 11 |
| **Estructura** | 50 |
| **Sistemas** | 3 |
| **Velocidad** | Moderado |
| **Manejo** | Fácil |
| **Rasgos** | [Aéreo](0006_Vehicles.md?id=airborne), [Rendimiento Mejorado](0006_Vehicles.md?id=enhanced-performance), [Sigilo](0006_Vehicles.md?id=stealth), [Manejo Superior](0006_Vehicles.md?id=superior-handling), [Suite de Vigilancia](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Escudos** | Ninguno |
| **Armas** | 1 Ametralladora Gatling (3d6), 4 Cohetes (5d6) |

<br>

---

#### Caza Multiusos

Este caza terrestre biplaza (similar en tipo al De Havilland Mosquito) es bien conocido por su rendimiento y versatilidad. Su bodega de bombas puede transportar dos bombas de 250 lb. (tratar como misiles medianos con alcance 0) o un único torpedo.

| Caza Multiusos | |
| :- | :- |
| **Tamaño / Tipo** | Grande Militar |
| **Casco** | 10 |
| **Estructura** | 45 |
| **Sistemas** | 3 |
| **Velocidad** | Moderado |
| **Manejo** | Estándar |
| **Rasgos** | [Aéreo](0006_Vehicles.md?id=airborne), [Rendimiento Mejorado](0006_Vehicles.md?id=enhanced-performance) |
| **Escudos** | Ninguno |
| **Armas** | 4 Ametralladoras Gatling montadas en el morro (4d6+3), 1 bodega de bombas (6d10 - ver descripción) |

<br>

---

#### Carguero Interestelar (Transporte Ligero de Alta Tecnología)

Este transporte ligero requiere una tripulación mínima de solo dos personas, con espacio para hasta cuatro pasajeros adicionales. Aquí se muestra la versión estándar de serie; sin embargo, muchos propietarios aplicarán sus propias "modificaciones especiales" como espacio de carga oculto, Rendimiento Mejorado, Manejo Superior, Resistencia a EMP, Sigilo, etc.

| Carguero Interestelar | |
| :- | :- |
| **Tamaño / Tipo** | Nave Espacial Civil Mediana |
| **Casco** | 10 |
| **Estructura** | 80 |
| **Sistemas** | 2 |
| **Velocidad** | Rápido (Factor Pársec de 3) |
| **Manejo** | Estándar |
| **Rasgos** | [Aéreo](0006_Vehicles.md?id=airborne), [Carga](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Nave Espacial](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Escudos** | 8 |
| **Armas** | 2x Torretas de Cañón Láser Cuádruple (5d6) |

<br>

---

#### Unidad de Contacto General (Nave Espacial de Ultra Alta Tecnología)

Esta nave estelar de tecnología extremadamente avanzada es la representación física de una Mente artificial altamente desarrollada, que toma la forma de una serie de módulos conectados por campo de dos kilómetros de largo. Los módulos tienen propósitos individuales e incluyen hábitats, instalaciones de construcción, áreas de carga, procesamiento de alimentos, complejos de ocio, bahías de hangar e incluso algunas unidades secretas de las que la inteligencia de la nave rara vez, o nunca, habla. No necesita tripulación humana, pero puede soportar una población de pasajeros de hasta 100.000 con facilidad. Muchos pasajeros nacen y mueren a bordo de la Unidad de Contacto; muchos son transitorios, yendo y viniendo a su antojo.

| Unidad de Contacto General | |
| :- | :- |
| **Tamaño / Tipo** | Nave Espacial Civil Colosal |
| **Casco** | 20 |
| **Estructura** | 10.000 |
| **Sistemas** | 6 |
| **Velocidad** | Moderado (Factor Pársec de 4. En este nivel tecnológico, un Factor equivale a 1 hora) |
| **Manejo** | Formidable |
| **Rasgos** | [Aéreo](0006_Vehicles.md?id=airborne), [Carga](0006_Vehicles.md?id=cargo), [Portaaviones](0006_Vehicles.md?id=carrier), [Construcción](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Lujoso](0006_Vehicles.md?id=luxurious), [Nave Espacial](0006_Vehicles.md?id=space-craft), [Manejo Superior](0006_Vehicles.md?id=superior-handling), [Rayo Tractor](0006_Vehicles.md?id=tractor-beam) |
| **Escudos** | 30 |
| **Armas** | Ninguna de la que se digne a hablar |

<br>