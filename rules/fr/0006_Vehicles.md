# Véhicules

Les véhicules dans *Mythras Imperative* sont traités de manière semi-abstraite. Essentiellement, ce sont des outils d'arrière-plan utilisés pour transporter les personnages d'un point A à un point B, sans nécessiter de descriptions ou de statistiques détaillées. Cependant, à l'occasion, les Maîtres de Jeu auront besoin de détails sur les véhicules lorsqu'il sera nécessaire de les représenter dans des poursuites ou des situations de combat.

Les règles de cette section permettent de représenter la plupart des types de véhicules, mais de manière abstraite, dans le but d'offrir de la flexibilité et d'améliorer la narration. Les vaisseaux spatiaux et les engins spatiaux sont un peu différents, bien qu'ils soient basés sur des principes similaires.

---
## Statistiques

Tous les véhicules sont décrits en fonction de leur Structure, leur Coque, leur Vitesse, leurs Systèmes, leurs Traits et leurs Boucliers (s'ils sont présents dans l'univers de jeu).

- **[Taille](0006_Vehicles.md?id=vehicle-size-table) :** Tous les véhicules ont l'une des six catégories de Taille qui détermine la valeur ou la plage du reste des caractéristiques. En raison de leur taille intrinsèque plus grande et des environnements hostiles de l'espace, les vaisseaux spatiaux ont leur propre gamme de valeurs.
- **[Coque](0006_Vehicles.md?id=terrestrial-hulls) :** Représente les Points d'Armure.
- **[Structure](0006_Vehicles.md?id=terrestrial-hulls) :** Représente les Points de Vie d'un véhicule.
- **[Boucliers](0006_Vehicles.md?id=shields) :** Dans les univers disposant d'une technologie avancée de manipulation de l'énergie, des boucliers peuvent être présents pour protéger le véhicule, mais ils peuvent s'éroder sous un feu soutenu.
- **[Systèmes](0006_Vehicles.md?id=systems) :** Représentent les composants vitaux du véhicule, incluant la centrale énergétique, la section de l'équipage, etc.
- **[Vitesse](0006_Vehicles.md?id=speed) :** Chaque véhicule possède un indice de Vitesse de base.
- **[Traits](0006_Vehicles.md?id=traits) :** Un véhicule peut également posséder un ou plusieurs Traits. Les Traits, tout comme les Capacités attribuées aux Créatures dans les règles de *Mythras Imperative*, ou les Traits de Style de Combat, offrent une description de jeu et un avantage supplémentaires, reflétant la nature du véhicule.
- **[Armes](0006_Vehicles.md?id=weapons) :** Tout comme les Traits, un véhicule peut être équipé d'armes si l'univers le permet. Quelques exemples suggérés et leurs valeurs sont détaillés ci-dessous.


---
### Taille de la Coque, Type et Structure

La taille et l'objectif d'un véhicule affectent l'épaisseur de sa coque et la résilience de sa structure interne. Une moto, par exemple, a une coque minimale, conçue pour la vitesse et l'agilité. Un Cuirassé Terrestre (un mastodonte massif à chenilles ou à roues, blindé et propulsé par des moteurs à vapeur ou diesel), étant un véhicule beaucoup plus grand conçu pour le champ de bataille, possède une coque beaucoup plus importante. Les tailles comparatives des coques (et le nombre de coups d'armes qu'elles peuvent généralement supporter) sont résumées dans les tableaux Taille du Véhicule et Coque ci-dessous.

Chaque fois qu'un véhicule subit des dommages, les dégâts entrants sont réduits par sa valeur de Coque. Tout dommage restant est soustrait des points de Structure du véhicule et a une chance en pourcentage, égale aux dégâts pénétrants, d'affecter un Système. Si le véhicule est réduit à zéro en Structure, il est soit totalement détruit, soit si gravement endommagé qu'il doit être envoyé à la casse.

##### Coques Terrestres 

| Taille | Structure | Valeur de Coque Civile | Valeur de Coque Militaire | Exemple |
| :-- | :-: | :-: | :-: | :-- |
| Petite | 1-20 | 1-3 | 4-6 | Moto, moto avec side-car, voiture compacte ou sous-compacte, canoë, kayak, barque |
| Moyenne | 21-40 | 1-6 | 7-9 | Berline, fourgonnette, pick-up, voiture de luxe, voiture de sport de luxe, voiture puissante (muscle car), limousine, canot de sauvetage, hors-bord, deltaplane, autogire |
| Grande | 41-60 | 4-9 | 10-12 | Camion, limousine rallongée, SUV, bus, monospace, avion personnel, planeur, yacht de plaisance, tank, hélicoptère, sous-marin |
| Énorme | 61-80 | 7-12 | 13-15 | Semi-remorque, avion de ligne, jet, navire des garde-côtes, yacht |
| Immense | 81-100 | 10-15 | 16-18 | Train, paquebot, navire de guerre |

##### Coques de Vaisseaux Spatiaux 

| Taille | Structure | Valeur de Coque Civile | Valeur de Coque Militaire | Exemple |
| :-- | :-: | :-: | :-: | :-- |
| Petite | 10-50 | 4-9 | 10-12 | Chasseur monoplace |
| Moyenne | 51-150 | 7-12 | 13-15 | Cargo léger, navette |
| Grande | 151-450 | 10-15 | 16-18 | Cargo lourd, croiseur |
| Énorme | 451-1350 | 13-18 | 19-21 | Frégate d'escorte, croiseur de bataille léger |
| Immense | 1351-4050 | 16-21 | 21-24 | Vaisseau générationnel, croiseur de bataille lourd |
| Colossale | 4050-12110 | 19-24 | 24-30 | Habitat orbital, station de combat capable de détruire une planète |


---
### Boucliers

Les boucliers déflecteurs fournissent une couche de protection supplémentaire pour les véhicules capables de les installer. Les boucliers fonctionnent légèrement différemment de la Coque en raison de leur nature ablative. Si les dégâts entrants sont égaux ou inférieurs à la valeur des boucliers, alors tout est bloqué. Si les dégâts dépassent la valeur du bouclier, l'excédent réduit la force du bouclier de ce montant.

_Par exemple, un transporteur de troupes a une force de bouclier énergétique de 12 points. S'il est touché par un laser infligeant 11 dégâts, cela ne pénètre tout simplement pas et n'a aucun effet supplémentaire. En revanche, s'il est touché par une explosion infligeant 15 dégâts, les trois points excédentaires réduiraient la force du bouclier à 9._

Une fois que la force d'un bouclier déflecteur tombe à zéro, il s'effondre. Tout dommage restant se reporte sur la coque.

---
### Systèmes

Chaque fois qu'un véhicule subit des dommages qui pénètrent sa coque, il y a une chance, égale aux dégâts pénétrants, qu'un Système vital ait été touché. 

_Par exemple, 10 dégâts sont appliqués à un hors-bord - un véhicule avec 3 de Coque et 24 de Structure. La Coque compte comme une armure réduisant les dégâts à 7. Ceux-ci sont soustraits des 24 points de Structure et il y a 7 % de chance d'endommager l'un des Systèmes du véhicule._

Les dommages qu'un Système peut subir sont basés uniquement sur la taille du véhicule. Cela est modélisé par le nombre de coups qu'un Système peut encaisser, plutôt que par le montant réel des dégâts. Un seul Coup sur Système sur un véhicule Petit détruira instantanément ce Système. Il faut deux coups pour démolir les systèmes d'un véhicule de taille Moyenne, trois pour un véhicule Grand, et ainsi de suite. Voir le [Tableau des Dégâts Systèmes](0006_Vehicles.md?id=system-damage-table) ci-dessous. 

Les systèmes endommagés, mais pas encore détruits, subissent une perte de fonction proportionnelle au nombre de Coups encaissés - soit une réduction en pourcentage, soit une pénalité de Degré aux tâches du Système. L'effet spécifique dépend de ce que contrôle le sous-système, comme détaillé dans le [Tableau des Dégâts des Composants Système](0006_Vehicles.md?id=system-component-damage-table) ci-dessous. Selon le Système touché, les effets peuvent être catastrophiques.

_Par exemple, un Cuirassé Terrestre - un véhicule Immense avec 5 Coups sur Système - touché deux fois au niveau de la Transmission perdrait 40 % de sa puissance et verrait sa Vitesse lente réduite de deux Degrés, passant à Pesante. De même, un cargo Grand - avec 3 Coups sur Système - subissant deux coups sur le système Moteur/Carburant verrait sa Vitesse réduite de deux Degrés, tout comme l'utilisation de ses systèmes électroniques. Un troisième coup détruirait le système Moteur/Carburant, et le navire avec._


<details>

<summary>* Errata Communautaire</summary>

---

#### Dégâts


_Le texte original ici était initialement plus éloigné. Placé directement après la section Systèmes, il répète inutilement le paragraphe précédent._

- _"Les dégâts qui dépassent la Coque pénètrent le véhicule, endommageant la Structure et impactant potentiellement un ou plusieurs systèmes. Selon la taille du véhicule, les dégâts peuvent être mineurs ou catastrophiques._
- _Par exemple, un véhicule Grand peut subir jusqu'à deux coups sur un Système comme sa Transmission. Le troisième coup détruit fonctionnellement la Transmission. Chaque fois que le système subit un coup, il perd soit un pourcentage de sa fonction comme décrit dans la colonne Perte par Coup du Tableau des Dégâts Systèmes ci-dessous, soit une fonction de base (telle que Transmission, Pilotage, Communications, etc.) devient plus difficile d'un Degré de Difficulté par coup subi."_

_Les paragraphes ci-dessus sont supprimés et une édition abrégée prend leur place, soulignant un autre effet de Système en exemple._

---

</details>

##### Tableau des Dégâts Systèmes 

| Taille | Coups sur Système | Perte par Coup |
| :-- | :-: | :-- |
| Petite | 1 | 100 % - Détruit |
| Moyenne | 2 | 1 Degré ou 50 % |
| Grande | 3 | 1 Degré ou 33 % |
| Énorme | 4 | 1 Degré ou 25 % |
| Immense | 5 | 1 Degré ou 20 % |
| Colossale | 6 | 1 Degré ou 16 % |


<details>

<summary>* Errata Communautaire</summary>

---

##### Tableau des Dégâts Systèmes (Original) 

| Taille | Coups sur Système | Perte par Coup |
| :-- | :-: | :-- |
| Petite | 1 | 1 Degré ou 50 % |
| Moyenne | 2 | 1 Degré ou 33 % |
| Grande | 3 | 1 Degré ou 25 % |
| Énorme | 4 | 1 Degré ou 20 % |
| Immense | 5 | 1 Degré ou 16 % |
| Colossale | 6 | 1 Degré ou 10 % |

##### Tableau de Taille du Véhicule (issu de [Taille de la Coque, Type et Structure](0006_Vehicles.md?id=hull-size-type-and-structure))

| Taille | Coups sur Système |
| :-- | :-: |
| Petite | 1 |
| Moyenne | 2 |
| Grande | 3 |
| Énorme | 4 |
| Immense | 5 |
| Colossale | 6 |

_Les règles et exemples originaux sont incohérents :_
- _"Les systèmes endommagés, mais pas encore détruits, subissent une perte de fonctionnalité. Celle-ci est égale à la proportion des coups actuels sur sa capacité totale. Ainsi, un véhicule Immense touché deux fois à la Transmission perdrait 40 % de sa puissance (2 coups sur un maximum de 5)"._ 
   - _Cela suggère que le véhicule Immense affiché avec 5 Coups sur Système devrait perdre 20 % à chaque coup - mais le tableau indique 16 %._
- _"Par exemple, un véhicule Grand peut subir jusqu'à trois coups sur un système comme sa Transmission. Le quatrième coup détruit fonctionnellement la Transmission."_ 
  - _"Cela suggère - tout comme le tableau - 25 % de dégâts par Coup sur Système, mais les véhicules Grands ne peuvent subir que 3 Coups sur Système selon le même tableau._
- _Bien que non incohérent, le Tableau de Taille du Véhicule était redondant ; il réapparaissait sous une forme plus complète (ajoutant la colonne Perte par Coup) quelques lignes plus bas._

_Cela rend difficile l'application d'une règle cohérente. Pour résoudre ces problèmes, les valeurs et les exemples ont été modifiés pour correspondre et le Tableau de Taille du Véhicule a été supprimé._

---

</details>


##### Tableau des Dégâts des Composants Système 

| 1d10 | Système | Résultat Endommagé | Résultat Détruit |
| :-: | :-- | :-- | :-- |
| 1 | Cargaison | Une quantité de possessions ou d'équipement stockés dans la soute, proportionnelle aux dégâts, est détruite. | Toute la cargaison est détruite. |
| 2 | Comms | Les tests de Communications subissent un Degré de Difficulté supplémentaire à chaque fois qu'ils sont endommagés. | Le véhicule ne peut plus communiquer ou leurrer les capteurs ennemis. |
| 3 | Contrôles | Les tests de Navigation, Conduite ou Pilotage subissent un Degré de Difficulté supplémentaire à chaque fois qu'ils sont endommagés ; un test de Contrôle immédiat est requis. | Le véhicule ne peut plus être dirigé ou changer de cap. |
| 4 | Transmission | Vitesse réduite d'un montant proportionnel aux dégâts. | Le véhicule s'arrête net ; les aéronefs s'écrasent. |
| 5 | Équipage | Un nombre de passagers proportionnel aux dégâts devient des victimes. Ceux affectés subissent une Blessure Majeure et doivent réussir un test d'Endurance ou être tués instantanément. | Les occupants du véhicule meurent. |
| 6 | Moteur / Carburant | Vitesse réduite d'un montant proportionnel aux dégâts. Systèmes électroniques plus difficiles d'un Degré de Difficulté. | Le véhicule est détruit dans une explosion désastreuse. |
| 7 | Capteurs | Les tests de Capteurs, Navigation et Attaque d'Arme subissent un Degré de Difficulté supplémentaire à chaque fois qu'ils sont endommagés. | Le véhicule est rendu aveugle. |
| 8 | Armes | Un nombre de systèmes d'armes proportionnel aux dégâts devient inopérant. | Le véhicule ne peut plus tirer d'armes. |
| 9-0 | Aucun | Aucun système touché ; seulement des dégâts à la Structure. | S/O |

<details>

<summary>* Errata Communautaire</summary>

---

##### Tableau des Dégâts des Composants Système (Moteur/Carburant)

_Le résultat original était le suivant : "La Vitesse maximale est réduite de moitié..." Cela contredit la règle générale des pénalités de dégâts proportionnelles aux dommages du Système : 25 % de dégâts = 25 % de pénalité. De plus, les règles complètes dans le Compagnon Mythras ne mentionnent pas cette réduction de moitié de la Vitesse._

_En conséquence, le texte est remplacé par la même entrée que celle des Systèmes de Transmission : "Vitesse réduite d'un montant proportionnel aux dégâts."_

---

</details>


---
### Vitesse

Puisque la physique de la vélocité, de l'accélération, de la traînée et de l'inertie (pour n'en nommer que quelques-unes) sont des questions complexes, une simplification est nécessaire et les véhicules se voient donc attribuer un indice de vitesse abstrait. La caractéristique Vitesse ne doit être utilisée que pour juger approximativement si un véhicule peut en dépasser ou en rattraper un autre.

L'indice de vitesse représente le taux opérationnel nominal d'un véhicule. Dans les situations d'urgence, cette performance peut être augmentée d'un cran, au risque d'usure ou de dommages aux moteurs. Bien que le même tableau soit utilisé pour tous les types de véhicules, le bon sens doit prévaloir pour ne comparer que des véhicules de la même classe. Par exemple, si un vaisseau spatial et une voiture de sport ont tous deux le même taux d'accélération Rapide, il devrait être évident que le vaisseau spatial est comparativement plus rapide.

Augmenter la Vitesse d'un véhicule au-delà de sa valeur standard est possible avec un test de Conduite réussi. Habituellement, cette vitesse supplémentaire n'est durable que pour une courte période – pas plus de 1d6 minutes avant que le véhicule ne doive redescendre à sa vitesse standard sous peine d'endommager sa centrale énergétique. Un test critique de Conduite permet d'augmenter la durée de la vitesse supérieure à 1d12 minutes.

Un conducteur peut tenter de pousser la vitesse d'un véhicule de 2 crans, mais cela nécessite un test Herculeen de Conduite et la durée maximale pendant laquelle le véhicule peut soutenir cette vitesse est de 1d3 minutes : un Succès Critique ne prolongera pas la durée de cette vitesse accrue.

##### Tableau des Indices de Vitesse 

| Indice de Vitesse | Vitesse Max Pour |
| :-- | :-: |
| Pesante | Immense |
| Paresseuse | |
| Lente | Énorme |
| Médiocre | |
| Douce | Grande |
| Modérée | |
| Rapide | Moyenne |
| Vive | |
| Éclair | Petite |


---
### Traits

Le nombre maximal de traits qu'un véhicule peut posséder dépend de la taille et du type de coque.

Chaque véhicule possède un trait inhérent : le mode de déplacement pour lequel il a été principalement conçu. Par conséquent, les aéronefs possèdent intrinsèquement le trait Aérien, les bateaux le trait Maritime, et ainsi de suite. Ce trait inhérent ne compte pas dans le nombre de traits disponibles. Cependant, si un véhicule devait inclure un second mode de déplacement - un sous-marin volant par exemple -, alors le trait Aérien devrait être pris comme l'un des traits disponibles.

Certains traits peuvent ne pas être disponibles selon le niveau technologique de l'univers ; les Maîtres de Jeu doivent juger par eux-mêmes quels traits peuvent être appliqués.

##### Tableau d'Allocation des Traits de Véhicule 

| Taille | Max de Traits |
| :-- | :-: |
| Petite | 1 |
| Moyenne | 2 |
| Grande | 3 |
| Énorme | 4 |
| Immense | 5 |
| Colossale | 6 |

#### Aérien

Le véhicule est capable de vol atmosphérique.

#### Tout Terrain

Ce Trait doit être utilisé avec les véhicules Terrestres. Le véhicule peut traverser des terrains inhospitaliers, difficiles et abrupts, en utilisant soit des chenilles, une suspension et des systèmes de transmission avancés, ou des différentiels de puissance puissants.

#### Fouisseur

Le véhicule est conçu pour creuser et tunneliser à travers le sol. Il peut atteindre une profondeur maximale égale à sa Valeur de Coque x 5 mètres.

#### Camouflé

Le véhicule possède soit une peinture de camouflage, soit des capteurs mimétiques qui lui permettent de se fondre dans son environnement. Les tentatives pour repérer visuellement le véhicule sont plus difficiles d'un degré.

#### Cargaison

Le véhicule est spécifiquement conçu pour transporter du fret plutôt que des passagers. Les compartiments passagers sont réduits au minimum, le reste de l'espace utilisable du véhicule étant consacré au stockage du fret avec des sections appropriées, des outils, et même un conditionnement environnemental (comme des sections de congélation pour transporter des denrées périssables). Lorsqu'il est chargé de fret, la vitesse du véhicule est inférieure de deux crans à ce que sa taille de coque permettrait normalement.

#### Transporteur

Le véhicule est conçu spécifiquement pour transporter des véhicules plus petits, légèrement équipés ou éventuellement télécommandés, de nature civile ou militaire. Tout véhicule possédant ce trait doit être au moins Immense. Le nombre de petites embarcations transportées peut varier selon le type de mission et l'objectif, mais peut aller de 10 à autant que la valeur de Structure du véhicule.

#### Construction

Le véhicule est équipé pour des travaux de construction lourds. Tous les véhicules avec ce trait possèdent également le trait Tout Terrain, mais leur vitesse est inférieure de deux crans à ce que leur taille de coque permettrait normalement. Le véhicule est équipé d'outils adaptés à la tâche tels que des flèches de grue, des pelles mécaniques, des bennes basculantes, etc.

#### Résistant aux IEM

Le véhicule est blindé contre les attaques par impulsion électromagnétique.

#### Performance Améliorée

L'indice de Vitesse du véhicule est supérieur d'un cran au maximum pour sa taille.

#### Siège Éjectable

En cas d'urgence, un siège éjectable propulse les occupants à plusieurs centaines de mètres dans les airs, puis déploie un parachute pour permettre un atterrissage en toute sécurité. Le parachute est optionnel. Non recommandé pour les hélicoptères (le Kamov Ka-52 Alligator étant une exception notable).

#### FTL (Vitesse Supra-luminique)

Vaisseaux spatiaux uniquement. L'engin est équipé d'un moteur supraluminique (qu'il s'agisse d'un hyperdrive, d'un moteur de distorsion, d'un générateur de trous de ver ou similaire). Le moteur FTL possède un indice de Vitesse distinct qui mesure essentiellement le taux auquel un vaisseau spatial peut traverser un parsec (3,26 années-lumière, soit 31 billions de kilomètres ou 19 billions de miles), comme suit :

##### Tableau de Vitesse FTL 

| Indice de Vitesse | Facteur pour Traverser 1 Parsec |
| :-- | :-: |
| Pesante | 10 |
| Paresseuse | 8 |
| Lente | 7 |
| Médiocre | 6 |
| Douce | 5 |
| Modérée | 4 |
| Rapide | 3 |
| Vive | 2 |
| Éclair | 1 |

Le temps du facteur est à la discrétion du Maître de Jeu, selon le degré d'avancement technologique FTL de l'univers. Par exemple, le facteur de base pourrait être 1 jour, ce qui signifie qu'un vaisseau doté d'un moteur FTL Pesant prend 10 jours pour terminer le voyage, tandis qu'un vaisseau avec un moteur FTL Éclair termine le trajet en 1 jour. Ailleurs, où la technologie FTL est significativement moins efficace, le temps du facteur pourrait se mesurer en mois plutôt qu'en jours.

Il est supposé que le vaisseau dispose de réserves de carburant pour effectuer un voyage retour, ou d'un moyen de se ravitailler au point de destination.

On suppose que toute taille de vaisseau spatial peut être équipée d'un moteur FTL, bien que, encore une fois, cela dépende de l'univers.

Les moteurs FTL ne peuvent pas être activés à moins de 1,5 Unité Astronomique d'une étoile (environ 225 millions de kilomètres). Cela signifie que les vaisseaux doivent utiliser un moteur subluminique pour s'éloigner jusqu'à environ la distance de Mars avant d'activer le système FTL.

#### Véhicule Terrestre

Le véhicule est capable de déplacement terrestre.

#### Survol

Le véhicule survole le sol en utilisant un coussin d'air ou un répulseur anti-gravité.

#### Luxueux

Le véhicule est conçu spécifiquement pour transporter des passagers avec un certain niveau de luxe. L'espace de chargement excédentaire est converti en logements passagers luxueux, piscines, bains à remous, équipage supplémentaire pour répondre aux caprices des passagers, etc.

#### Rails

Le véhicule dépend d'un système ferroviaire. Les véhicules dotés de ce trait peuvent naturellement atteindre un indice de Vitesse trois crans plus élevé que ce que leur taille de coque permettrait normalement, mais sont évidemment limités à un déplacement sur le système ferroviaire uniquement.

#### Résilient

Tous les systèmes peuvent supporter un coup supplémentaire de plus que ce qui est normalement déterminé par la Taille. Ce Trait peut être cumulé - ainsi, Résilient 2 indique que les systèmes peuvent supporter 2 coups de plus que d'habitude au coût de deux points de Trait.

#### Maritime

Le véhicule est flottant sur l'eau.

#### Vaisseau Spatial

Le véhicule est étanche au vide et blindé contre les radiations cosmiques et peut, selon sa conception, être capable de quitter l'atmosphère et d'y revenir, et de maintenir le vol à l'intérieur d'une atmosphère.

#### Furtif

Aéronefs uniquement. Le véhicule est conçu pour éviter la détection par radar et autres systèmes de capteurs longue portée. Les tentatives pour repérer le véhicule en utilisant des capteurs électroniques sont plus difficiles d'un degré.

#### Submersible

Le véhicule est capable de plonger sous la surface d'un océan jusqu'à une profondeur opérationnelle de sa Valeur de Coque x 10 mètres. La profondeur d'écrasement - le maximum absolu que le submersible peut atteindre sans être broyé - est de 1,5 fois sa profondeur opérationnelle.

#### Maniabilité Supérieure

La maniabilité du véhicule est classée comme Facile.

#### Suite de Surveillance

Le véhicule dispose d'un ordinateur embarqué, d'une station de base de communication, d'un récepteur pour les signaux de dispositifs d'écoute, et d'un appareil pour intercepter les signaux de smartphones à proximité dans un rayon de 100 mètres.

#### Robuste

Un véhicule civil avec ce trait tire sa Coque de la colonne Militaire et possède automatiquement le maximum de Structure. Un véhicule Militaire avec ce Trait tire sa Coque et sa Structure de la ligne suivante vers le bas.

#### Rayon Tracteur

Vaisseau spatial uniquement. Le vaisseau est équipé d'un rayon tracteur capable d'enserrer et d'attirer à lui des véhicules ayant une valeur de coque inférieure de jusqu'à deux crans à la sienne. Ainsi, un vaisseau spatial Immense pourrait attirer et maintenir une coque allant jusqu'à la taille Moyenne.

#### ADAV (VTOL)

Décollage/atterrissage vertical. Ce trait est inhérent aux hélicoptères et aux véhicules similaires qui utilisent une combinaison de rotors pour produire de la portance. Lorsqu'il est appliqué à des aéronefs à voilure fixe, il indique l'utilisation de propulseurs fixes ou orientables pour contrôler l'attitude en vol, l'ascension et la descente.

#### Marcheur

Le véhicule se propulse lui-même à l'aide de jambes articulées. Les véhicules Marcheurs sont plafonnés à une Vitesse de Douce, quelle que soit leur Taille. Cependant, les Marcheurs peuvent être construits à des hauteurs qui seraient simplement instables pour des véhicules équipés d'autres moyens de locomotion.

Ce véhicule est capable de déplacement subaquatique.

#### Armé

Le véhicule a été adapté pour accueillir de l'armement. Les systèmes d'armes sont discutés ci-dessous dans la section [Armes](0006_Vehicles.md?id=weapons).


---
## Armes

Habituellement, seules les coques militaires sont conçues pour accueillir de l'armement (points d'ancrage, stockage de munitions, systèmes de contrôle). Le trait 'Armé' peut être pris pour des véhicules civils qui pourraient avoir des besoins en armes.

Le nombre maximal de systèmes d'armes qu'un véhicule peut supporter est égal à 1/10ème de ses Points de Structure (ainsi, un véhicule avec 40 de Structure pourrait supporter 4 systèmes d'armes, s'il s'agit d'un véhicule militaire, ou d'un véhicule civil Armé).

Les systèmes d'armes dépendent de la Taille du véhicule. Le type maximal de système d'arme pour différentes Tailles est indiqué dans les tableaux ci-dessous.


##### Tableau des Armes par Taille 

| Taille | Terrestre | Vaisseau Spatial |
| :-- | :-- | :-- |
| Petite | Arme Légère (ex: Fusil d'assaut) | Arme Moyenne (ex: Mitrailleuse, Lance-roquettes) |
| Moyenne | Arme Moyenne (ex: Mitrailleuse, Lance-roquettes) | Arme en Tourelle/Lourde (ex: Mitrailleuses lourdes jumelées, Mini-Guns) |
| Grande | Arme en Tourelle/Lourde (ex: Mitrailleuses lourdes jumelées, Mini-Guns) | Batterie d'Armes (ex: Artillerie de champ de bataille) |
| Énorme | Batterie d'Armes (ex: Artillerie de champ de bataille) | Armes Avancées (ex: Systèmes de missiles) |
| Immense | Armes Avancées (ex: Systèmes de missiles) | Armes Montées sur la Colonne Vertébrale (une seule) |
| Colossale | S/O | Armes Montées sur la Colonne Vertébrale (jusqu'à 3) |

##### Statistiques d'Armes Échantillons 
 
| Arme | Dégâts | Portée | Cadence de Tir | Mun/Charge |
| :-- | :-: | :-: | :-: | :-: |
| Canon de 50 pouces | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Mitrailleuse Gatling | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Roquette | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Missile Moyen/Torpille | 6d10 | Portée max de 200km | 1 | 1/5 |
| Grand Missile/Missile de Croisière | 6d10+10 | Portée max de 1000km | 1 | 1/10 |
| Canon Laser/Plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Canon Laser/Plasma Lourd | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Batterie d'Artillerie | 5d6+6 | Portée max de 50km | 1 | 1/5 |
| Batterie Montée sur la Colonne Vertébrale | 10d6+6 | Portée max de 20000km | 1 | 1/10 |

_Les portées sont données en mètres et en kilomètres._

_Les cadences de tir sont pour le coup unique, semi-automatique et automatique._

_Les munitions correspondent à la capacité de tir avant d'avoir besoin de recharger. La charge est le temps de rechargement en Rounds de Combat, en supposant qu'un équipage complet soit disponible._

---
## Maniabilité et Manœuvres

Les manœuvres évasives ou soudaines nécessitent un test de Conduite/Pilotage réussi pour garantir que le conducteur ou le pilote conserve le contrôle du véhicule. La plupart des véhicules sont conçus et construits pour résister aux contraintes occasionnelles, mais le Maître de Jeu peut décider qu'une manœuvre particulière nécessite un test à un degré de difficulté supérieur, selon son ambition. Un échec signifie que le contrôle du véhicule est perdu : lancez les dés sur le tableau de Perte de Contrôle.

Notez que le Tableau de Perte de Contrôle ne s'applique qu'aux véhicules terrestres. Des effets similaires peuvent être appliqués aux véhicules aériens et spatiaux, mais les Maîtres de Jeu devront ajuster le raisonnement pour l'effet spécifique. Par exemple, un aéronef, plutôt que de déraper, pourrait partir en vrille.

De plus, la maniabilité inhérente d'un véhicule peut avoir un impact supplémentaire sur le test de Conduite. La maniabilité est soit Facile, Standard, Difficile, Formidable ou Herculeenne et détermine le point de départ du test de Conduite lors de l'exécution d'une manœuvre. Le degré de difficulté pour la manœuvre est ensuite appliqué à la maniabilité pour déterminer la difficulté finale.

Par exemple, une moto haute performance possède des gyrostabiliseurs intégrés lui donnant une Maniabilité Facile. Le conducteur souhaite effectuer un dérapage à 180 degrés pour échapper à un poursuivant, une manœuvre que le Maître de Jeu évalue comme étant plus difficile d'un degré. Le pilote doit donc effectuer son test de Conduite en Standard plutôt qu'en Facile. S'il avait tenté la même manœuvre sur une moto non stabilisée, le test de Conduite aurait été Difficile.

La Maniabilité Supérieure est un Trait. Si un véhicule n'a pas ce trait dans sa description, la valeur par défaut est une maniabilité Standard pour tout véhicule de taille Grande ou inférieure. Les véhicules Énormes et Immenses ont intrinsèquement le trait de Maniabilité Formidable et Herculeenne, respectivement, et le Maître de Jeu est libre de décider que certaines manœuvres sont tout simplement impossibles à réaliser en raison de la taille du véhicule.

##### Tableau de Perte de Contrôle 

| 1d100 | Résultat |
| :-: | :-- |
| 01-25 | Écart. La perte de contrôle est temporaire. Le véhicule réduit sa vitesse de 1 cran pendant 5 secondes. |
| 26-40 | Dérapage. Le conducteur doit lutter pour garder le véhicule sous contrôle. Le véhicule réduit sa vitesse de 2 crans pendant 10 secondes. |
| 41-50 | Dérapage Sévère. Le véhicule finit dans la mauvaise direction et à l'arrêt pendant 15 secondes. |
| 51-60 | Tonneau. Le véhicule dérape et fait des tonneaux, subissant 3d10 dégâts à sa Structure. Les occupants doivent réussir un test d'Endurance ou subir 1d10 dégâts sur 1d3 Emplacements de Corps. |
| 61-70 | Tonneau Sévère. Comme ci-dessus, mais le véhicule subit 3d10+10 dégâts et les Occupants reçoivent 1d10 dégâts même si le test d'Endurance réussit, et 2d10 s'il échoue. |
| 71-80 | Épave. Comme ci-dessus mais le véhicule est réduit à 0 Structure. Les occupants subissent les mêmes dégâts que pour un Tonneau Sévère. |
| 81-90 | Explosion. Comme ci-dessus mais le système de carburant du véhicule s'enflamme et explose en 1d20+10 secondes. Si les occupants ne parviennent pas à s'éloigner, ils subissent 1d6 dégâts de brûlure supplémentaires sur 1d6 emplacements. |
| 91-98 | Explosion Immédiate. Comme ci-dessus mais l'explosion est immédiate. |
| 99-00 | Crash Catastrophique. Les occupants doivent réussir un test d'Endurance ou être tués instantanément. Les dégâts identiques à ceux pour une Épave sont subis quoi qu'il arrive. |


---
## Exemples de Véhicules

---

### Véhicules Terrestres

#### Intercepteur

Une voiture de luxe ou de sport gonflée à bloc, cette voiture est construite pour aller vite et rendre aussi bien les coups qu'elle en reçoit au combat. C'est le genre de véhicule auquel les gens pensent quand quelqu'un dit "voiture d'espion".

| Intercepteur | |
| :- | :- |
| **Taille / Type** | Moyenne Militaire |
| **Coque** | 6 |
| **Structure** | 40 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniabilité** | Facile |
| **Traits** | [Siège Éjectable](0006_Vehicles.md?id=ejector-seat), [Performance Améliorée](0006_Vehicles.md?id=enhanced-performance), [Maniabilité Supérieure](0006_Vehicles.md?id=superior-handling), [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Distributeur de taches d'huile, Distributeur de fumée, Mitrailleuses moyennes jumelées (2d6+3) |

<br>

---

#### Moto de Poursuite

Légère et rapide pour les poursuites effrénées, la Moto de Poursuite cache une surprise – soit une paire de mitrailleuses jumelées, soit deux roquettes.

| Moto de Poursuite | |
| :- | :- |
| **Taille / Type** | Petite Civile |
| **Coque** | 2 |
| **Structure** | 12 |
| **Systèmes** | 1 |
| **Vitesse** | Rapide |
| **Maniabilité** | Facile |
| **Traits** | [Maniabilité Supérieure](0006_Vehicles.md?id=superior-handling), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Deux Roquettes (4d6) ou Mitrailleuses légères jumelées (2d6) |

<br>

---

#### Berline

Une berline 4 portes standard offrant assez d'espace pour asseoir confortablement un conducteur et trois passagers. Sacrifie l'espace de chargement pour intégrer une suite de surveillance.

| Berline | |
| :- | :- |
| **Taille / Type** | Moyenne Civile |
| **Coque** | 4 |
| **Structure** | 25 |
| **Systèmes** | 2 |
| **Vitesse** | Vive |
| **Maniabilité** | Standard |
| **Traits** | [Discrète](0006_Vehicles.md?id=unobtrusive), [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite) |
| **Armes** | Aucune |

<br>

---

#### Voiture Submersible

Une voiture pour deux personnes pouvant passer en mode maritime ou submersible pour voyager sur ou sous l'eau. Livrée avec une torpille montée à l'avant et un missile sol-air monté sur le toit.

| Voiture Submersible | |
| :- | :- |
| **Taille / Type** | Moyenne Civile |
| **Coque** | 6 |
| **Structure** | 25 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniabilité** | Standard |
| **Traits** | [Performance Améliorée](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Maritime](0006_Vehicles.md?id=waterborne), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Roquette (5d6), Torpille (4d10) |

<br>

---

#### Fourgon de Surveillance

Un fourgon ordinaire, sans marquage, abritant une équipe d'agents et une suite d'équipements d'enregistrement audio-visuel.

| Fourgon de Surveillance | |
| :- | :- |
| **Taille / Type** | Grande Civile |
| **Coque** | 9 |
| **Structure** | 60 |
| **Systèmes** | 3 |
| **Vitesse** | Douce |
| **Maniabilité** | Standard |
| **Traits** | [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite), [Robuste](0006_Vehicles.md?id=tough) |
| **Armes** | Aucune |

<br>

---

#### Véhicule de Soutien Tactique

Un pick-up ou une jeep avec de la place pour un équipage de deux personnes dans la cabine et un tireur debout dans la section benne opérant une Mitrailleuse Moyenne montée sur pivot.

| Véhicule de Soutien Tactique | |
| :- | :- |
| **Taille / Type** | Moyenne Civile |
| **Coque** | 6 |
| **Structure** | 30 |
| **Systèmes** | 2 |
| **Vitesse** | Vive |
| **Maniabilité** | Standard |
| **Traits** | [Tout Terrain](0006_Vehicles.md?id=all-terrain), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Mitrailleuse Moyenne montée (2d6) |


<br>

---

### Embarcations

#### Hors-bord

Un hors-bord typique, armé d'un distributeur de mines monté à l'arrière.

| Hors-bord | |
| :- | :- |
| **Taille / Type** | Moyenne Civile |
| **Coque** | 3 |
| **Structure** | 24 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniabilité** | Standard |
| **Traits** | [Performance Améliorée](0006_Vehicles.md?id=enhanced-performance), [Maritime](0006_Vehicles.md?id=waterborne), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Distributeur de mines (5d6) |

<br>

---

#### Yacht

Le genre de yacht de luxe qu'un oligarque pourrait posséder. Probablement équipé d'une suite de surveillance pour se protéger contre les ennemis tentant de manigancer quelque chose.

| Yacht | |
| :- | :- |
| **Taille / Type** | Énorme Civile |
| **Coque** | 10 |
| **Structure** | 75 |
| **Systèmes** | 4 |
| **Vitesse** | Lente |
| **Maniabilité** | Formidable |
| **Traits** | [Luxueux](0006_Vehicles.md?id=luxurious), [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite), [Maritime](0006_Vehicles.md?id=waterborne) |
| **Armes** | Aucune |


<br>

---

### Aéronefs/Vaisseaux Spatiaux

#### Dirigeable (Paquebot Aérien Civil)

Similaire au Hindenburg, cette classe de dirigeable transcontinental (et d'autres de sa classe) mesure 245 mètres de long et nécessite un équipage de 40 à 61 personnes. Il peut généralement transporter un complément de 50 à 72 passagers dans des logements de luxe.

| Dirigeable | |
| :- | :- |
| **Taille / Type** | Immense Civile |
| **Coque** | 10 |
| **Structure** | 85 |
| **Systèmes** | 5 |
| **Vitesse** | Pesante |
| **Maniabilité** | Herculeenne |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Luxueux](0006_Vehicles.md?id=luxurious), [ADAV](0006_Vehicles.md?id=vtol) |
| **Boucliers** | Aucun |
| **Armes** | Aucune |

<br>

---

#### Hélicoptère d'Assaut

L'Hélicoptère d'Assaut traditionnel utilise sa technologie de surveillance avancée pour intercepter les signaux téléphoniques et internet sans fil, et suivre les individus et les véhicules même dans l'obscurité, grâce au FLIR. Les tentatives pour échapper au traqueur via la Furtivité sont Formidables.

| Hélicoptère d'Assaut | |
| :- | :- |
| **Taille / Type** | Grande Militaire |
| **Coque** | 11 |
| **Structure** | 50 |
| **Systèmes** | 3 |
| **Vitesse** | Modérée |
| **Maniabilité** | Facile |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Performance Améliorée](0006_Vehicles.md?id=enhanced-performance), [Furtivité](0006_Vehicles.md?id=stealth), [Maniabilité Supérieure](0006_Vehicles.md?id=superior-handling), [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite), [ADAV](0006_Vehicles.md?id=vtol) |
| **Boucliers** | Aucun |
| **Armes** | 1 Mitrailleuse Gatling (3d6), 4 Roquettes (5d6) |

<br>

---

#### Chasseur Multi-Rôle

Ce chasseur biplace basé au sol (de type similaire au De Havilland Mosquito) est bien connu pour ses performances et sa polyvalence. Sa soute à bombes est capable de transporter soit deux bombes de 250 livres (à traiter comme des missiles moyens avec une portée de 0), soit une seule torpille.

| Chasseur Multi-Rôle | |
| :- | :- |
| **Taille / Type** | Grande Militaire |
| **Coque** | 10 |
| **Structure** | 45 |
| **Systèmes** | 3 |
| **Vitesse** | Modérée |
| **Maniabilité** | Standard |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Performance Améliorée](0006_Vehicles.md?id=enhanced-performance) |
| **Boucliers** | Aucun |
| **Armes** | 4 Mitrailleuses Gatling montées sur le nez (4d6+3), 1 soute à bombes (6d10 - voir description) |

<br>

---

#### Cargo Interstellaire (Transport Léger Haute Technologie)

Ce transport léger ne nécessite qu'un équipage minimum de deux personnes, avec de la place pour jusqu'à quatre passagers supplémentaires. La version standard est notée ici, cependant de nombreux propriétaires appliqueront leurs propres "modifications spéciales" telles qu'un espace de chargement dissimulé, une Performance Améliorée, une Maniabilité Supérieure, une Résistance aux IEM, la Furtivité, etc.

| Cargo Interstellaire | |
| :- | :- |
| **Taille / Type** | Moyenne Vaisseau Spatial Civil |
| **Coque** | 10 |
| **Structure** | 80 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide (Facteur Parsec de 3) |
| **Maniabilité** | Standard |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Cargaison](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Vaisseau Spatial](0006_Vehicles.md?id=space-craft), [ADAV](0006_Vehicles.md?id=vtol) |
| **Boucliers** | 8 |
| **Armes** | 2x Tourelles de Canon Laser quadruples (5d6) |


<br>

---

#### Unité de Contact Générale (Vaisseau Spatial Ultra Haute Technologie)

Ce vaisseau spatial extrêmement high-tech est la représentation physique d'un Esprit artificiel très avancé, qui prend la forme d'une série de modules connectés par champ de deux kilomètres de long. Les modules sont destinés à des objectifs individuels et comprennent des habitats, des installations de construction, des zones de chargement, la transformation alimentaire, des complexes de loisirs, des baies de hangar, et même quelques unités secrètes dont l'intelligence du vaisseau discute rarement, voire jamais. Il n'a pas besoin d'équipage humain, mais peut facilement supporter une population de passagers allant jusqu'à 100 000 personnes. De nombreux passagers naissent et meurent à bord de l'Unité de Contact : beaucoup sont de passage, allant et venant à leur guise.

| Unité de Contact Générale | |
| :- | :- |
| **Taille / Type** | Colossale Vaisseau Spatial Civil |
| **Coque** | 20 |
| **Structure** | 10 000 |
| **Systèmes** | 6 |
| **Vitesse** | Modérée (Facteur Parsec de 4. À ce niveau technologique, un Facteur égale 1 heure) |
| **Maniabilité** | Formidable |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Cargaison](0006_Vehicles.md?id=cargo), [Transporteur](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxueux](0006_Vehicles.md?id=luxurious), [Vaisseau Spatial](0006_Vehicles.md?id=space-craft), [Maniabilité Supérieure](0006_Vehicles.md?id=superior-handling), [Rayon Tracteur](0006_Vehicles.md?id=tractor-beam) |
| **Boucliers** | 30 |
| **Armes** | Aucune dont il souhaite discuter |

<br>