# Vehículos

Los vehículos en _Mythras Imperative_ se tratan de una forma semiabstracta. Esencialmente, son herramientas de fondo, utilizadas para llevar a los personajes de un lugar a otro, CON poca necesidad de una descripción o estadísticas detalladas. Sin embargo, en ocasiones, los Directores de Juego necesitarán detalles de los vehículos cuando sea necesario representarlos en persecuciones o situaciones de combate.

Las reglas de esta sección permiten la representación de la mayoría de los tipos de vehículos, pero de una manera abstracta que pretende permitir flexibilidad y mejorar la narración. Las naves estelares y las naves espaciales son un poco diferentes, aunque se basan en principios similares.

---
## Estadísticas

Todos los vehículos se describen en términos de su Estructura, Casco, Velocidad, Sistemas, Rasgos y Escudos (si están presentes en la ambientación).

- **[Tamaño](0006_Vehicles.md?id=vehicle-size-table):** Todos los vehículos tienen uno de los seis niveles de Tamaño, lo que determina el valor o rango del resto de las características. Debido a su mayor tamaño intrínseco y a los entornos hostiles del espacio, las naves estelares tienen su propio rango de valores.
- **[Casco](0006_Vehicles.md?id=terrestrial-hulls):** Representa los Puntos de Armadura.
- **[Estructura](0006_Vehicles.md?id=terrestrial-hulls):** Representa los Puntos de Golpe de un vehículo.
- **[Escudos](0006_Vehicles.md?id=shields):** En ambientaciones CON tecnología avanzada de manipulación de energía, pueden existir escudos que protejan al vehículo, pero que pueden degradarse bajo fuego sostenido.
- **[Sistemas](0006_Vehicles.md?id=systems):** Representan los componentes vitales del vehículo, incluyendo la planta motriz, la sección de la tripulación, etcétera.
- **[Velocidad](0006_Vehicles.md?id=speed):** Cada vehículo tiene un nivel básico de Velocidad.
- **[Rasgos](0006_Vehicles.md?id=traits):** Un vehículo también puede tener uno o más Rasgos. Los Rasgos, al igual que las Habilidades asignadas a las Criaturas en las reglas de _Mythras Imperative_, o los Rasgos de Estilo de Combate, ofrecen una descripción y una ventaja de juego adicionales, reflejando la naturaleza del vehículo.
- **[Armas](0006_Vehicles.md?id=weapons):** Al igual que los Rasgos, un vehículo puede estar equipado CON armas según lo permita la ambientación. Algunos ejemplos y valores sugeridos se detallan a continuación.


---
### Tamaño, Tipo y Estructura del Casco

El tamaño y el propósito de un vehículo afectan al grosor de su casco y a la resiliencia de su estructura interna. Una motocicleta, por ejemplo, tiene un casco mínimo, construido como está para la velocidad y la agilidad. Un Ironclad terrestre (un vehículo enorme, CON orugas o ruedas, un gigante blindado propulsado por motores de vapor o diésel), al ser un vehículo mucho más grande diseñado para el campo de batalla, tiene un casco mucho mayor. Los tamaños comparativos de los cascos (y cuántos impactos de armas pueden soportar típicamente) se resumen en las tablas de Tamaño y Casco de Vehículos a continuación.

Siempre que un vehículo sufre daño, el daño entrante se reduce por su valor de Casco. Cualquier daño restante se resta de los puntos de Estructura del vehículo y tiene una posibilidad porcentual, igual al daño penetrante, de afectar a un Sistema. Si el vehículo se reduce alguna vez a cero puntos de Estructura, queda totalmente destruido o tan gravemente averiado que debe ser desguazado.

##### Cascos terrestres

| Tamaño | Estructura | Valor de Casco Civil | Valor de Casco Militar | Ejemplo |
| :-- | :-: | :-: | :-: | :-- |
| Pequeño | 1-20 | 1-3 | 4-6 | Motocicleta, motocicleta CON sidecar, coche compacto o subcompacto, canoa, kayak, bote de remos |
| Mediano | 21-40 | 1-6 | 7-9 | Sedán, furgoneta, camioneta, coche de lujo, deportivo de lujo, coche musculoso, limusina, bote salvavidas, lancha rápida, ala delta, autogiro |
| Grande | 41-60 | 4-9 | 10-12 | Camión, limusina alargada, todoterreno, autobús, monovolumen, avión personal, planeador, crucero de recreo, tanque, helicóptero, submarino |
| Enorme | 61-80 | 7-12 | 13-15 | Semirremolque, avión comercial, jet, embarcación de guardacostas, yate |
| Colosal | 81-100 | 10-15 | 16-18 | Tren, crucero, buque naval |

##### Cascos de naves estelares

| Tamaño | Estructura | Valor de Casco Civil | Valor de Casco Militar | Ejemplo |
| :-- | :-: | :-: | :-: | :-- |
| Pequeño | 10-50 | 4-9 | 10-12 | Caza monoplaza |
| Mediano | 51-150 | 7-12 | 13-15 | Carguero ligero, lanzadera |
| Grande | 151-450 | 10-15 | 16-18 | Carguero pesado, crucero |
| Enorme | 451-1350 | 13-18 | 19-21 | Fragata de escolta, crucero de batalla ligero |
| Colosal | 1351-4050 | 16-21 | 21-24 | Nave generacional, crucero de batalla pesado |
| Gigantesco | 4050-12110 | 19-24 | 24-30 | Hábitat orbital, estación de batalla destructora de planetas |


---
### Escudos

Los escudos deflectores proporcionan una capa adicional de protección para aquellos vehículos que pueden montarlos. Los escudos funcionan de manera ligeramente diferente al Casco, debido a su naturaleza ablativa. Si el daño entrante es igual o menor que el valor de los escudos, entonces se bloquea por completo. Si el daño supera el valor del escudo, el exceso reduce la fuerza del escudo en esa cantidad.

_Por ejemplo, un transporte de tropas tiene una fuerza de escudo de energía de 12 puntos. Si el transporte fuera golpeado por un láser por 11 puntos de daño, simplemente no penetra y no tiene ningún efecto adicional. Por otro lado, si el transporte fuera golpeado por una explosión que infligiera 15 puntos de daño, los tres puntos sobrantes reducirían la fuerza del escudo a 9._

Una vez que la fuerza de un escudo deflector cae a cero, se colapsa. Cualquier daño restante continúa hacia el casco.

---
### Sistemas

Cada vez que un vehículo sufre daño que penetra su casco, existe una posibilidad, igual al daño penetrante, de que un Sistema vital se haya visto afectado.

_Por ejemplo, se aplican 10 puntos de daño a una lancha rápida: un vehículo CON 3 de Casco y 24 de Estructura. El Casco cuenta como armadura, reduciendo el daño a 7. Esto se elimina de los 24 puntos de Estructura y existe una probabilidad del 7% de dañar uno de los Sistemas del vehículo._

El daño que puede soportar un Sistema se basa puramente en el tamaño del vehículo. Esto se modela mediante el número de impactos que puede recibir un Sistema, en lugar de la cantidad real de daño. Un único Impacto de Sistema en un vehículo Pequeño destruirá instantáneamente ese Sistema. Se necesitan dos impactos para demoler los Sistemas de un vehículo de tamaño Mediano, tres para un vehículo Grande, y así sucesivamente. Véase la [Tabla de Daño de Sistemas](0006_Vehicles.md?id=system-damage-table) a continuación.

Los Sistemas que están dañados, pero no destruidos, sufren una pérdida de función proporcional al número de Impactos recibidos: ya sea una reducción porcentual o una penalización de Grado a las tareas del Sistema. El efecto específico se basa en lo que controla el subsistema, como se detalla en la [Tabla de Daño a Componentes del Sistema](0006_Vehicles.md?id=system-component-damage-table) a continuación. Dependiendo de qué Sistema sea golpeado, los efectos pueden ser catastróficos.

_Por ejemplo, un Ironclad terrestre (un vehículo Enorme CON 5 Impactos de Sistema) al recibir dos impactos en el sistema de Propulsión perdería el 40% de su potencia y reduciría su Velocidad Lenta dos Grados, pasando a Pesada. De manera similar, un carguero Grande (CON 3 Impactos de Sistema) que reciba dos impactos en el sistema de Motor/Combustible tendría una penalización de dos Grados a la Velocidad, así como al uso de los sistemas electrónicos. Un tercer impacto destruiría el sistema de Motor/Combustible y CON él, la nave._


<details>

<summary>* Erratas de la comunidad</summary>

---

#### Daño

_El texto original aquí estaba repetido. Situado directamente después de la sección de Sistemas, repetía innecesariamente el párrafo precedente._

- _"El daño que excede el Casco penetra el vehículo, dañando la Estructura y posiblemente impactando en uno o más sistemas. Dependiendo del tamaño del vehículo, el daño puede ser menor o catastrófico._
- _Por ejemplo, un vehículo Grande puede recibir hasta dos impactos en un Sistema como su Propulsión. El tercer impacto destruye funcionalmente la Propulsión. Cada vez que el sistema recibe un impacto, pierde un porcentaje de su función como se describe en la columna de Pérdida por Impacto de la Tabla de Daño de Sistemas a continuación, o una función central (como Propulsión, Pilotaje, Comunicaciones, etcétera) se vuelve un Grado de Dificultad más difícil por cada impacto sostenido."_

_Los párrafos anteriores se eliminan y se sustituyen por una edición abreviada que señala otro efecto de Sistema de ejemplo._

---

</details>

##### Tabla de Daño de Sistemas

| Tamaño | Impactos de Sistema | Pérdida por Impacto |
| :-- | :-: | :-- |
| Pequeño | 1 | 100% - Destruido |
| Mediano | 2 | 1 Grado o 50% |
| Grande | 3 | 1 Grado o 33% |
| Enorme | 4 | 1 Grado o 25% |
| Colosal | 5 | 1 Grado o 20% |
| Gigantesco | 6 | 1 Grado o 16% |


<details>

<summary>* Erratas de la comunidad</summary>

---

##### Tabla de Daño de Sistemas (Original)

| Tamaño | Impactos de Sistema | Pérdida por Impacto |
| :-- | :-: | :-- |
| Pequeño | 1 | 1 Grado o 50% |
| Mediano | 2 | 1 Grado o 33% |
| Grande | 3 | 1 Grado o 25% |
| Huge | 4 | 1 Grado o 20% |
| Enorme | 5 | 1 Grado o 16% |
| Colossal | 6 | 1 Grado o 10% |

##### Tabla de Tamaño de Vehículos (de [Tamaño, Tipo y Estructura del Casco](0006_Vehicles.md?id=hull-size-type-and-structure))

| Tamaño | Impactos de Sistema |
| :-- | :-: |
| Pequeño | 1 |
| Mediano | 2 |
| Grande | 3 |
| Enorme | 4 |
| Colosal | 5 |
| Gigantesco | 6 |

_Las reglas y ejemplos originales son inconsistentes:_
- _"Los sistemas que están dañados, pero no destruidos, sufren una pérdida en su funcionalidad. Esto es igual a la proporción de impactos actuales respecto a su capacidad total. Así, un vehículo Enorme golpeado dos veces en la Propulsión perdería el 40% de su potencia (2 impactos de un máximo de 5)"._ 
   - _Esto sugiere que el vehículo Enorme mostrado CON 5 Impactos de Sistema debería perder un 20% CON cada impacto, pero la tabla dice un 16%._
- _"Por ejemplo, un vehículo Grande puede recibir hasta tres impactos en un sistema como su Propulsión. El cuarto impacto destruye funcionalmente la Propulsión."_ 
  - _Esto sugiere (al igual que la tabla) un 25% de daño por Impacto de Sistema, pero los vehículos Grandes solo pueden recibir 3 Impactos de Sistema según la misma tabla._
- _Aunque no es inconsistente, la Tabla de Tamaño de Vehículos era redundante; apareciendo de nuevo en forma completa (añadiendo la columna de Pérdida por Impacto) solo unas líneas después._

_Esto dificulta tener una regla consistente. Para solucionar estos problemas, los valores y ejemplos se han cambiado para que coincidan y se ha eliminado la Tabla de Tamaño de Vehículos._

---

</details>


##### Tabla de Daño a Componentes del Sistema

| 1d10 | Sistema | Resultado Dañado | Resultado Destruido |
| :-: | :-- | :-- | :-- |
| 1 | Carga | Una cantidad de posesiones o equipos almacenados en la bodega, proporcional al daño, queda destruida. | Toda la carga queda destruida. |
| 2 | Comunicaciones | Las tiradas de Comunicaciones sufren un Grado de Dificultad adicional cada vez que son dañadas. | El vehículo ya no puede comunicarse ni falsear sensores enemigos. |
| 3 | Controles | Las tiradas de Navegación, Conducción o Pilotaje sufren un Grado de Dificultad adicional cada vez que son dañadas; se requiere una tirada de Control inmediata. | El vehículo ya no puede ser dirigido ni cambiar el rumbo. |
| 4 | Propulsión | Velocidad reducida en una cantidad proporcional al daño. | El vehículo se detiene en seco; las aeronaves se estrellan. |
| 5 | Tripulación | Un número de pasajeros proporcional al daño se convierte en baja. Los afectados sufren una Herida Grave y deben superar una tirada de Resistencia o morir al instante. | Los ocupantes del vehículo mueren. |
| 6 | Motor/Combustible | Velocidad reducida en una cantidad proporcional al daño. Los sistemas electrónicos son un Grado de Dificultad más difíciles de usar. | El vehículo es destruido en una explosión desastrosa. |
| 7 | Sensores | Las tiradas de Sensor, Navegación y Ataque CON armas sufren un Grado de Dificultad adicional cada vez que son dañadas. | El vehículo queda ciego. |
| 8 | Armas | Un número de sistemas de armas proporcional al daño queda inoperativo. | El vehículo ya no puede disparar armas. |
| 9-0 | Ninguno | No se golpean sistemas; solo daño a la Estructura. | N/A |

<details>

<summary>* Erratas de la comunidad</summary>

---

##### Tabla de Daño a Componentes del Sistema (Motor/Combustible)

_El resultado original era: "La velocidad máxima se reduce a la mitad..." Esto contradice la regla general de las penalizaciones por daño en proporción al daño del Sistema: 25% de daño = 25% de penalización. Además, las reglas completas en el Mythras Companion no mencionan esta reducción a la mitad de la Velocidad._

_Como resultado, el texto se reemplaza CON la misma entrada que en los Sistemas de Propulsión: "Velocidad reducida en una cantidad proporcional al daño"._

---

</details>


---
### Velocidad

Dado que la física de la velocidad, la aceleración, la resistencia y la inercia (por nombrar solo algunas) son cuestiones complejas, es necesaria una simplificación y, por lo tanto, se da a los vehículos un nivel de velocidad abstracto. La característica de Velocidad solo debe usarse para juzgar aproximadamente si un vehículo puede adelantar o alcanzar a otro.

El nivel de velocidad representa la tasa operativa nominal de un vehículo. En situaciones de emergencia, este rendimiento puede aumentarse un paso, a riesgo de desgaste o daño a los motores. Aunque se utiliza la misma tabla para todos los tipos de vehículos, debe aplicarse el sentido común para que solo se comparen vehículos de la misma clase. Por ejemplo, si una nave estelar y un coche deportivo tienen la misma tasa de aceleración de Rápida, debería ser obvio que la nave estelar es comparativamente más rápida.

Aumentar la Velocidad de un vehículo más allá de su valor estándar es posible CON una tirada exitosa de Conducción. Por lo general, este exceso de velocidad solo es sostenible durante un corto periodo (no más de 1d6 minutos) antes de que el vehículo deba reducir a su velocidad estándar o arriesgarse a dañar su planta motriz. Una tirada crítica de Conducción permite que el periodo de velocidad aumentada se incremente a 1d12 minutos.

Un conductor puede intentar forzar la velocidad de un vehículo 2 pasos, pero esto requiere una tirada de Conducción Hercúlea y el máximo que el vehículo puede sostener esta velocidad es 1d3 minutos: un Éxito Crítico no extenderá la duración de la velocidad aumentada.

##### Tabla de Niveles de Velocidad

| Nivel de Velocidad | Velocidad Máx. para |
| :-- | :-: |
| Pesada | Enorme |
| Lenta | |
| Lento | Grande |
| Mediocre | |
| Moderado | Mediano |
| Rápido | |
| Veloz | Pequeño |


---
### Rasgos

El número máximo de rasgos que puede tener un vehículo depende del tamaño y tipo de casco.

Cada vehículo tiene un rasgo inherente: el modo de viaje para el que fue diseñado principalmente. Por lo tanto, las aeronaves poseen inherentemente el rasgo Aéreo, los barcos el rasgo Marino, y así sucesivamente. Este rasgo inherente no cuenta para el número disponible de rasgos. Sin embargo, si un vehículo incluyera un segundo modo de viaje (un submarino volador, por ejemplo), el rasgo Aéreo tendría que tomarse como uno de sus rasgos disponibles.

Algunos rasgos pueden no estar disponibles, dependiendo del nivel tecnológico de la ambientación; los Directores de Juego deben hacer sus propios juicios sobre qué rasgos pueden aplicarse.

##### Tabla de Asignación de Rasgos de Vehículos

| Tamaño | Rasgos Máx. |
| :-- | :-: |
| Pequeño | 1 |
| Mediano | 2 |
| Grande | 3 |
| Enorme | 4 |
| Colosal | 5 |
| Gigantesco | 6 |

#### Aéreo

El vehículo es capaz de realizar vuelos atmosféricos.

#### Todo Terreno

Este Rasgo debe usarse CON vehículos terrestres. El vehículo puede atravesar terrenos inhóspitos, difíciles y empinados, utilizando orugas, sistemas avanzados de suspensión y transmisión, o potentes diferenciales de tracción.

#### Excavador

El vehículo está diseñado para excavar y realizar túneles a través del suelo. Puede alcanzar una profundidad máxima igual a su Nivel de Casco x 5 metros.

#### Camuflado

El vehículo posee pintura de camuflaje o sensores miméticos que le permiten mezclarse CON su entorno. Los intentos de detectar visualmente al vehículo son un grado más difíciles.

#### Carga

El vehículo está diseñado específicamente para transportar carga en lugar de pasajeros. Los compartimentos para pasajeros se mantienen al mínimo y el resto del espacio útil del vehículo se dedica a la contención de carga CON secciones, herramientas e incluso acondicionamiento ambiental (como secciones de congelador para transportar productos perecederos). Cuando está cargado, la velocidad del vehículo es dos pasos más baja de lo que permitiría normalmente su tamaño de casco.

#### Portaaviones

El vehículo está diseñado específicamente para transportar vehículos más pequeños, CON poca tripulación o posiblemente controlados remotamente, de naturaleza civil o militar. Cualquier vehículo que posea este rasgo debe ser al menos Enorme. El número de pequeñas naves transportadas puede variar según el tipo de misión y el propósito, pero puede ser desde 10 hasta tantas como indique el valor de Estructura del vehículo.

#### Construcción

El vehículo está equipado para trabajos de construcción pesada. Todos los vehículos CON este rasgo tienen también el rasgo Todo Terreno, pero su velocidad es dos pasos más baja de lo que permitiría normalmente su tamaño de casco. El vehículo está equipado CON herramientas adecuadas a la tarea, como plumas de grúa, palas excavadoras, camiones de volteo, etcétera.

#### Resistente a EMP

El vehículo está blindado contra ataques de pulso electromagnético.

#### Rendimiento Mejorado

El nivel de Velocidad del vehículo es un paso más alto que el máximo para su tamaño.

#### Asiento Eyector

En caso de emergencia, un asiento eyector propulsa a los ocupantes varios cientos de metros en el aire, y luego despliega un paracaídas para permitir un aterrizaje seguro. El paracaídas es opcional. No recomendado para helicópteros (el Kamov Ka-52 Alligator es una notable excepción).

#### FTL

Solo Naves Espaciales. La nave está equipada CON un motor más rápido que la luz (ya sea hiperimpulsor, motor de curvatura, generador de agujeros de gusano o similar). El motor FTL tiene un nivel de Velocidad independiente que esencialmente mide la tasa a la que una nave estelar puede cruzar un pársec (3,26 años luz, o 31 billones de kilómetros, o 19 billones de millas), como sigue:

##### Tabla de Velocidad FTL

| Nivel de Velocidad | Factor para recorrer 1 Pársec |
| :-- | :-: |
| Pesada | 10 |
| Lenta | 8 |
| Lento | 7 |
| Mediocre | 6 |
| Moderado | 5 |
| Rápido | 4 |
| Veloz | 3 |
| Muy Veloz | 2 |
| Ultrarrápido | 1 |

El tiempo del factor queda a criterio del Director de Juego, dependiendo de cuán avanzado sea el desarrollo FTL de la ambientación. Por ejemplo, el factor base podría ser 1 día, lo que significa que una nave CON un motor FTL Pesado tarda 10 días en completar el viaje, mientras que una nave CON un motor FTL Ultrarrápido completa el viaje en 1 día. En otros lugares, donde la tecnología FTL es significativamente menos eficiente, el tiempo del factor podría medirse en meses, en lugar de días.

Se asume que la nave tiene reservas de combustible para realizar un viaje de regreso, o un medio para repostar en el punto de destino.

Se asume que cualquier tamaño de nave estelar puede ser equipada CON un motor FTL, aunque, de nuevo, esto depende de la ambientación.

Los motores FTL no pueden activarse a menos de 1,5 Unidades Astronómicas de una estrella (alrededor de 225 millones de kilómetros, o 270 millones de millas). Esto significa que las naves deben usar un motor sublumínico para alejarse hasta aproximadamente la distancia de Marte antes de activar el sistema FTL.

#### Vehículo Terrestre

El vehículo es capaz de viajar por tierra.

#### Deslizador

El vehículo se desliza sobre el suelo usando un colchón de aire o un repulsor antigravedad.

#### Lujoso

El vehículo está diseñado específicamente para transportar pasajeros CON un cierto nivel de lujo. El exceso de espacio de carga se destina a alojamientos de pasajeros de lujo, piscinas, jacuzzis, tripulación adicional para atender los caprichos de los pasajeros, etcétera.

#### Raíles

El vehículo depende de un sistema de raíles. Los vehículos CON este rasgo pueden alcanzar naturalmente un nivel de Velocidad tres pasos más alto de lo que permitiría normalmente su tamaño de casco, pero obviamente están restringidos al movimiento solo en el sistema de raíles.

#### Resiliente

Todos los sistemas pueden soportar un impacto adicional más de lo determinado normalmente por el Tamaño. Este Rasgo se puede acumular, por lo que Resiliente 2 indica que los sistemas pueden soportar 2 impactos más de lo habitual a un coste de dos puntos de Rasgo.

#### Marino

El vehículo es flotante sobre el agua.

#### Nave Espacial

El vehículo está sellado contra el vacío y blindado contra la radiación cósmica y puede, dependiendo del diseño, ser capaz de abandonar y volver a entrar en la atmósfera, y mantener el vuelo dentro de ella.

#### Sigilo

Solo Aeronaves. El vehículo está diseñado para evitar la detección por radar y otros sistemas de sensores de largo alcance. Los intentos de detectar el vehículo usando sensores electrónicos son un grado más difíciles.

#### Sumergible

El vehículo es capaz de sumergirse bajo la superficie de un océano hasta una profundidad operativa de su Nivel de Casco x 10 metros. La profundidad de colapso (el máximo absoluto que el sumergible puede alcanzar sin ser aplastado) es 1,5 veces su profundidad operativa.

#### Manejabilidad Superior

La maniobrabilidad del vehículo se califica como Fácil.

#### Suite de Vigilancia

El vehículo tiene una computadora a bordo, una estación base de comunicaciones, un receptor para señales de dispositivos de escucha y un aparato para interceptar señales de teléfonos inteligentes cercanos dentro de un radio de 100 metros.#### Resistente

Un vehículo civil CON este rasgo obtiene su Casco de la columna Militar y tiene automáticamente la Estructura máxima. Un vehículo Militar CON este Rasgo obtiene su Casco y Estructura de la siguiente fila hacia abajo.

#### Rayo tractor

Solo naves espaciales. La nave está equipada CON un rayo tractor que puede atrapar y atraer hacia sí vehículos CON un índice de casco de hasta dos pasos inferior al suyo. Por lo tanto, una nave estelar Enorme podría atraer y sujetar un casco de hasta tamaño Medio.

#### VTOL

Despegue/aterrizaje vertical. Este rasgo es inherente a los helicópteros y vehículos similares que utilizan una combinación de rotores para generar sustentación. Cuando se aplica a aeronaves de ala fija, indica el uso de propulsores fijos o alineables para controlar la actitud, el ascenso y el descenso en vuelo.

#### Anfibio

El vehículo se propulsa utilizando patas articuladas. Los vehículos caminantes están limitados a una Velocidad de Suave, independientemente de su Tamaño. Sin embargo, los caminantes pueden construirse a alturas que serían simplemente inestables para vehículos equipados CON otros medios de locomoción.

Este vehículo es capaz de moverse bajo el agua.

#### Armado

El vehículo ha sido adaptado para acomodar armamento. Los sistemas de armas se tratan a continuación en la sección de [Armas](0006_Vehicles.md?id=weapons).


---
## Armas

Por lo general, solo los cascos militares están diseñados para acomodar armamento (puntos de anclaje, almacenamiento de munición, sistemas de control). El rasgo "Armado" puede elegirse para vehículos civiles que puedan tener requisitos de armas.

El número máximo de sistemas de armas que un vehículo puede soportar es igual a 1/10 de sus Puntos de Estructura (por lo que un vehículo CON 40 de Estructura podría soportar 4 sistemas de armas si es un vehículo militar, o un vehículo civil Armado).

Los sistemas de armas dependen del Tamaño del vehículo. El tipo máximo de sistema de armas para diferentes Tamaños se muestra en las tablas a continuación.


##### Tabla de armas por tamaño

| Tamaño | Terrestre | Nave espacial |
| :-- | :-- | :-- |
| Pequeño | Arma ligera (ej. rifle de asalto) | Arma media (ej. ametralladora, lanzacohetes) |
| Medio | Arma media (ej. ametralladora, lanzacohetes) | Arma de torreta/pesada (ej. ametralladoras pesadas vinculadas, ametralladoras Gatling) |
| Grande | Arma de torreta/pesada (ej. ametralladoras pesadas vinculadas, ametralladoras Gatling) | Batería de armas (ej. artillería de campo) |
| Enorme | Batería de armas (ej. artillería de campo) | Armas avanzadas (ej. sistemas de misiles) |
| Enormemente grande | Armas avanzadas (ej. sistemas de misiles) | Armas de montaje axial (solo una) |
| Colosal | ND | Armas de montaje axial (hasta 3) |

##### Tabla de estadísticas de armas de muestra
 
| Arma | Daño | Alcance | Cadencia de fuego | Munición/Carga |
| :-- | :-: | :-: | :-: | :-: |
| Cañón de 50 pulgadas | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Ametralladora Gatling | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Cohete | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Misil/torpedo medio | 6d10 | Alcance máximo de 200km | 1 | 1/5 |
| Misil grande/de crucero | 6d10+10 | Alcance máximo de 1000km | 1 | 1/10 |
| Cañón láser/de plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Cañón láser/de plasma pesado | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Batería de artillería | 5d6+6 | Alcance máximo de 50km | 1 | 1/5 |
| Batería de montaje axial | 10d6+6 | Alcance máximo de 20000km | 1 | 1/10 |

_Los alcances se indican en metros y kilómetros._

_Las cadencias de fuego corresponden a disparo único, semiautomático y automático._

_La munición es la capacidad de disparo antes de necesitar recargar. La carga es el tiempo de recarga en Rondas de Combate, asumiendo que hay una tripulación completa disponible._

---
## Manejo y maniobras

Las maniobras evasivas o repentinas requieren una tirada exitosa de Conducir/Pilotar para asegurar que el conductor o piloto mantenga el control del vehículo. La mayoría de los vehículos están diseñados y construidos para soportar tensiones y esfuerzos ocasionales, pero el Director de Juego puede dictaminar que una maniobra particular requiere una tirada CON un grado de dificultad mayor, dependiendo de lo ambiciosa que sea. El fracaso significa que se pierde el control del vehículo: tira en la tabla de Pérdida de control.

Ten en cuenta que la tabla de Pérdida de control solo se aplica a vehículos terrestres. Se pueden aplicar efectos similares a vehículos aéreos y espaciales, pero los Directores de Juego deberán ajustar el razonamiento del efecto específico. Por ejemplo, una aeronave, en lugar de derrapar, podría entrar en barrena.

Además, el manejo inherente de un vehículo puede tener un impacto adicional en la tirada de Conducir. El manejo es Fácil, Estándar, Difícil, Formidable o Hercúleo y determina el punto de partida de la tirada de Conducir al ejecutar una maniobra. El grado de dificultad de la maniobra se aplica entonces al manejo para determinar la dificultad final.

Por ejemplo, una motocicleta de alto rendimiento tiene giroestabilizadores integrados que le otorgan un manejo Fácil. El conductor quiere realizar un giro de 180 grados CON derrape para evadir a un perseguidor, una maniobra que el Director de Juego califica como un grado de dificultad adicional. Por lo tanto, el conductor debe realizar su tirada de Conducir como Estándar en lugar de Fácil. Si hubiera intentado la misma maniobra en una motocicleta sin estabilizadores, la tirada de Conducir habría sido Difícil.

Manejo superior es un Rasgo. Si un vehículo no tiene el rasgo como parte de su descripción, el valor predeterminado es manejo Estándar para cualquier vehículo de tamaño Grande e inferior. Los vehículos Enormes y Enormemente grandes tienen intrínsecamente el rasgo de manejo Formidable y Hercúleo, respectivamente, y el Director de Juego tiene libertad para dictaminar que ciertas maniobras son simplemente imposibles de realizar debido al tamaño del vehículo.

##### Tabla de pérdida de control

| 1d100 | Resultado |
| :-: | :-- |
| 01-25 | Desvío. La pérdida de control es temporal. El vehículo reduce su velocidad en 1 paso durante 5 segundos. |
| 26-40 | Derrape. El conductor debe luchar para mantener el vehículo bajo control. El vehículo reduce su velocidad en 2 pasos durante 10 segundos. |
| 41-50 | Derrape severo. El vehículo termina mirando en la dirección equivocada y se detiene durante 15 segundos. |
| 51-60 | Vuelco. El vehículo derrapa y vuelca, sufriendo 3d10 de daño en su Estructura. Los ocupantes deben realizar tiradas exitosas de Resistencia o sufrir 1d10 de daño en 1d3 Ubicaciones de golpe. |
| 61-70 | Vuelco severo. Como el anterior, pero el vehículo sufre 3d10+10 de daño y los ocupantes reciben 1d10 de daño incluso si la tirada de Resistencia tiene éxito, y 2d10 si falla. |
| 71-80 | Destrucción total. Como el anterior pero el vehículo queda reducido a 0 de Estructura. Los ocupantes sufren el mismo daño que en un Vuelco severo. |
| 81-90 | Explosión. Como el anterior pero el sistema de combustible del vehículo se incendia y explota en 1d20+10 segundos. Si no pueden alejarse, los ocupantes sufren 1d6 de daño por quemaduras adicional en 1d6 ubicaciones. |
| 91-98 | Explosión inmediata. Como el anterior pero la explosión es inmediata. |
| 99-00 | Accidente catastrófico. Los ocupantes deben superar una tirada de Resistencia o morir al instante. Se sufre el daño de Destrucción total independientemente. |


---
## Vehículos de muestra

---

### Vehículos terrestres

#### Interceptor

Un coche de lujo, deportivo o similar trucado, este coche está hecho para ir rápido y aguantar tanto como reparte en una batalla. Este es el tipo de vehículo en el que piensa la gente cuando alguien dice "coche de espía".

| Interceptor | |
| :- | :- |
| **Tamaño / Tipo** | Medio Militar |
| **Casco** | 6 |
| **Estructura** | 40 |
| **Sistemas** | 2 |
| **Velocidad** | Rápida |
| **Manejo** | Fácil |
| **Rasgos** | [Asiento eyectable](0006_Vehicles.md?id=ejector-seat), [Rendimiento mejorado](0006_Vehicles.md?id=enhanced-performance), [Manejo superior](0006_Vehicles.md?id=superior-handling), [Conjunto de vigilancia](0006_Vehicles.md?id=surveillance-suite), [Armado](0006_Vehicles.md?id=weaponized) |
| **Armas** | Dispensador de aceite, dispensador de humo, ametralladoras medias vinculadas (2d6+3) |

<br>

---

#### Motocicleta de persecución

Una motocicleta ligera y rápida para persecuciones, la Motocicleta de persecución lleva una sorpresa: un par de ametralladoras vinculadas o dos cohetes.

| Motocicleta de persecución | |
| :- | :- |
| **Tamaño / Tipo** | Pequeño Civil |
| **Casco** | 2 |
| **Estructura** | 12 |
| **Sistemas** | 1 |
| **Velocidad** | Rápida |
| **Manejo** | Fácil |
| **Rasgos** | [Manejo superior](0006_Vehicles.md?id=superior-handling), [Armado](0006_Vehicles.md?id=weaponized) |
| **Armas** | Dos cohetes (4d6) o ametralladoras ligeras vinculadas (2d6) |

<br>

---

#### Sedán

Un sedán de 4 puertas estándar CON suficiente espacio para acomodar cómodamente a un conductor y tres pasajeros. Sacrifica espacio de carga para incorporar un conjunto de vigilancia.

| Sedán | |
| :- | :- |
| **Tamaño / Tipo** | Medio Civil |
| **Casco** | 4 |
| **Estructura** | 25 |
| **Sistemas** | 2 |
| **Velocidad** | Veloz |
| **Manejo** | Estándar |
| **Rasgos** | [Discreto](0006_Vehicles.md?id=unobtrusive), [Conjunto de vigilancia](0006_Vehicles.md?id=surveillance-suite) |
| **Armas** | Ninguna |

<br>

---

#### Coche sumergible

Un coche para dos personas que puede cambiar al modo anfibio o sumergible para viajar sobre o bajo el agua. Viene CON un torpedo montado en la parte delantera y un misil superficie-aire montado en el techo.

| Coche sumergible | |
| :- | :- |
| **Tamaño / Tipo** | Medio Civil |
| **Casco** | 6 |
| **Estructura** | 25 |
| **Sistemas** | 2 |
| **Velocidad** | Rápida |
| **Manejo** | Estándar |
| **Rasgos** | [Rendimiento mejorado](0006_Vehicles.md?id=enhanced-performance), [Sumergible](0006_Vehicles.md?id=submersible), [Anfibio](0006_Vehicles.md?id=waterborne), [Armado](0006_Vehicles.md?id=weaponized) |
| **Armas** | Cohete (5d6), torpedo (4d10) |

<br>

---

#### Furgoneta de vigilancia

Una furgoneta simple y sin marcas que alberga a un equipo de agentes y un conjunto de equipos de grabación audiovisual.

| Furgoneta de vigilancia | |
| :- | :- |
| **Tamaño / Tipo** | Grande Civil |
| **Casco** | 9 |
| **Estructura** | 60 |
| **Sistemas** | 3 |
| **Velocidad** | Suave |
| **Manejo** | Estándar |
| **Rasgos** | [Conjunto de vigilancia](0006_Vehicles.md?id=surveillance-suite), [Resistente](0006_Vehicles.md?id=tough) |
| **Armas** | Ninguna |

<br>

---

#### Vehículo de apoyo táctico

Una camioneta o jeep CON espacio para una tripulación de dos personas en la cabina y un artillero de pie en la parte trasera operando una ametralladora media montada en un soporte giratorio.

| Vehículo de apoyo táctico | |
| :- | :- |
| **Tamaño / Tipo** | Medio Civil |
| **Casco** | 6 |
| **Estructura** | 30 |
| **Sistemas** | 2 |
| **Velocidad** | Veloz |
| **Manejo** | Estándar |
| **Rasgos** | [Todo terreno](0006_Vehicles.md?id=all-terrain), [Armado](0006_Vehicles.md?id=weaponized) |
| **Armas** | Ametralladora media montada (2d6) |


<br>

---

### Embarcaciones

#### Lancha rápida

Una lancha rápida típica, armada CON un dispensador de minas montado en la parte trasera.

| Lancha rápida | |
| :- | :- |
| **Tamaño / Tipo** | Medio Civil |
| **Casco** | 3 |
| **Estructura** | 24 |
| **Sistemas** | 2 |
| **Velocidad** | Rápida |
| **Manejo** | Estándar |
| **Rasgos** | [Rendimiento mejorado](0006_Vehicles.md?id=enhanced-performance), [Anfibio](0006_Vehicles.md?id=waterborne), [Armado](0006_Vehicles.md?id=weaponized) |
| **Armas** | Dispensador de minas (5d6) |

<br>

---

#### Yate

El tipo de yate de lujo que un oligarca podría poseer. Probablemente equipado CON un conjunto de vigilancia para protegerse contra enemigos que intenten hacer algo malo.

| Yate | |
| :- | :- |
| **Tamaño / Tipo** | Enorme Civil |
| **Casco** | 10 |
| **Estructura** | 75 |
| **Sistemas** | 4 |
| **Velocidad** | Lenta |
| **Manejo** | Formidable |
| **Rasgos** | [Lujoso](0006_Vehicles.md?id=luxurious), [Conjunto de vigilancia](0006_Vehicles.md?id=surveillance-suite), [Anfibio](0006_Vehicles.md?id=waterborne) |
| **Armas** | Ninguna |


<br>

---

### Aeronaves/Naves espaciales

#### Dirigible (Aeronave de pasajeros civil)

Similar al Hindenburg, esta clase de dirigible transcontinental (y otros de su clase) tiene 245 metros de longitud y requiere una tripulación de 40 a 61 personas. Normalmente puede transportar una dotación de 50 a 72 pasajeros en alojamientos de lujo.

| Dirigible | |
| :- | :- |
| **Tamaño / Tipo** | Enormemente grande Civil |
| **Casco** | 10 |
| **Estructura** | 85 |
| **Sistemas** | 5 |
| **Velocidad** | Pesada |
| **Manejo** | Hercúleo |
| **Rasgos** | [Aéreo](0006_Vehicles.md?id=airborne), [Lujoso](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Escudos** | Ninguno |
| **Armas** | Ninguna |

<br>

---

#### Helicóptero de asalto

El helicóptero de asalto tradicional utiliza su avanzada tecnología de vigilancia para interceptar señales de teléfono e internet inalámbrico, y rastrear individuos y vehículos incluso en la oscuridad, a través de FLIR. Los intentos de evadir al rastreador mediante sigilo son Formidables.

| Helicóptero de asalto | |
| :- | :- |
| **Tamaño / Tipo** | Grande Militar |
| **Casco** | 11 |
| **Estructura** | 50 |
| **Sistemas** | 3 |
| **Velocidad** | Moderada |
| **Manejo** | Fácil |
| **Rasgos** | [Aéreo](0006_Vehicles.md?id=airborne), [Rendimiento mejorado](0006_Vehicles.md?id=enhanced-performance), [Sigilo](0006_Vehicles.md?id=stealth), [Manejo superior](0006_Vehicles.md?id=superior-handling), [Conjunto de vigilancia](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Escudos** | Ninguno |
| **Armas** | 1 ametralladora Gatling (3d6), 4 cohetes (5d6) |

<br>

---

#### Caza polivalente

Este caza terrestre biplaza (similar en tipo al De Havilland Mosquito) es bien conocido por su rendimiento y versatilidad. Su bahía de bombas puede transportar dos bombas de 250 libras (se tratan como misiles medianos CON alcance 0) o un solo torpedo.

| Caza polivalente | |
| :- | :- |
| **Tamaño / Tipo** | Grande Militar |
| **Casco** | 10 |
| **Estructura** | 45 |
| **Sistemas** | 3 |
| **Velocidad** | Moderada |
| **Manejo** | Estándar |
| **Rasgos** | [Aéreo](0006_Vehicles.md?id=airborne), [Rendimiento mejorado](0006_Vehicles.md?id=enhanced-performance) |
| **Escudos** | Ninguno |
| **Armas** | 4 ametralladoras Gatling montadas en el morro (4d6+3), 1 bahía de bombas (6d10 - ver descripción) |

<br>

---

#### Carguero interestelar (Transporte ligero de alta tecnología)

Este transporte ligero requiere una tripulación mínima de solo dos personas, CON espacio para hasta cuatro pasajeros adicionales. Aquí se indica la versión estándar, sin embargo, muchos propietarios aplicarán sus propias "modificaciones especiales" como espacio de carga oculto, rendimiento mejorado, manejo superior, resistencia a EMP, sigilo, etcétera.

| Carguero interestelar | |
| :- | :- |
| **Tamaño / Tipo** | Medio Nave espacial civil |
| **Casco** | 10 |
| **Estructura** | 80 |
| **Sistemas** | 2 |
| **Velocidad** | Rápida (Factor de Pársec de 3) |
| **Manejo** | Estándar |
| **Rasgos** | [Aéreo](0006_Vehicles.md?id=airborne), [Carga](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Nave espacial](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Escudos** | 8 |
| **Armas** | 2 torretas de cañón láser cuádruples (5d6) |


<br>

---

#### Unidad de contacto general (Nave espacial de ultra alta tecnología)

Esta nave estelar de tecnología extremadamente alta es la representación física de una Mente artificial altamente avanzada, que toma la forma de una serie de módulos conectados por campo de dos kilómetros de largo. Los módulos tienen propósitos individuales e incluyen hábitats, instalaciones de construcción, áreas de carga, procesamiento de alimentos, complejos de ocio, bahías de hangar e incluso algunas unidades secretas de las que la inteligencia de la nave rara vez, o nunca, habla. No necesita tripulación humana, pero puede mantener una población de pasajeros de hasta 100,000 CON facilidad. Muchos pasajeros nacen y mueren a bordo de la Unidad de contacto: muchos son transitorios, yendo y viniendo a su antojo.

| Unidad de contacto general | |
| :- | :- |
| **Tamaño / Tipo** | Colosal Nave espacial civil |
| **Casco** | 20 |
| **Estructura** | 10,000 |
| **Sistemas** | 6 |
| **Velocidad** | Moderada (Factor de Pársec de 4. A este nivel tecnológico, un Factor equivale a 1 hora) |
| **Manejo** | Formidable |
| **Rasgos** | [Aéreo](0006_Vehicles.md?id=airborne), [Carga](0006_Vehicles.md?id=cargo), [Transporte](0006_Vehicles.md?id=carrier), [Construcción](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Lujoso](0006_Vehicles.md?id=luxurious), [Nave espacial](0006_Vehicles.md?id=spacecraft), [Manejo superior](0006_Vehicles.md?id=superior-handling), [Rayo tractor](0006_Vehicles.md?id=tractor-beam) |
| **Escudos** | 30 |
| **Armas** | Ninguna de la que desee hablar |

<br>