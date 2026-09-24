# Véhicules

Les véhicules dans _Mythras Imperative_ sont traités de manière semi-abstraite. Essentiellement, ce sont des outils d'arrière-plan, utilisés pour transporter les Personnages d'un point A à un point B, sans grand besoin de description ou de statistiques détaillées. Cependant, à l'occasion, les Maîtres de Jeu auront besoin de détails sur les véhicules lorsqu'il sera nécessaire de les représenter dans des poursuites ou des situations de combat.

Les règles de cette section permettent de représenter la plupart des types de véhicules, mais de manière abstraite destinée à permettre une certaine flexibilité et à améliorer la narration. Les vaisseaux spatiaux et les engins spatiaux sont un peu différents, bien qu'ils soient basés sur des principes similaires.

---
## Statistiques

Tous les véhicules sont décrits en termes de Structure, Coque, Vitesse, Systèmes, Traits et Boucliers (s'ils sont présents dans le cadre de campagne).

- **[Taille](0006_Vehicles.md?id=vehicle-size-table) :** Tous les véhicules ont l'un des six indices de Taille qui détermine la valeur ou la plage du reste des caractéristiques. En raison de leur taille intrinsèque plus grande et des environnements hostiles de l'espace, les vaisseaux spatiaux ont leur propre gamme de valeurs.
- **[Coque](0006_Vehicles.md?id=terrestrial-hulls) :** Représente les points d'Armure.
- **[Structure](0006_Vehicles.md?id=terrestrial-hulls) :** Représente les points de vie d'un véhicule.
- **[Boucliers](0006_Vehicles.md?id=shields) :** Dans les cadres avec une technologie avancée de manipulation d'énergie, des boucliers peuvent être présents pour protéger le véhicule, mais ils peuvent s'éroder sous un feu soutenu.
- **[Systèmes](0006_Vehicles.md?id=systems) :** Représentent les composants vitaux du véhicule, y compris la centrale électrique, la section d'équipage, etc.
- **[Vitesse](0006_Vehicles.md?id=speed) :** Chaque véhicule possède un indice de Vitesse de base.
- **[Traits](0006_Vehicles.md?id=traits) :** Un véhicule peut également posséder un ou plusieurs Traits. Les Traits, tout comme les Capacités attribuées aux Créatures dans les règles de _Mythras Imperative_, ou les Traits de Styles de Combat, offrent une description de jeu supplémentaire et un avantage, reflétant la nature du véhicule.
- **[Armes](0006_Vehicles.md?id=weapons) :** Tout comme les Traits, un véhicule peut être équipé d'armes si le cadre le permet. Quelques exemples et valeurs suggérés sont détaillés ci-dessous.


---
### Taille de la Coque, Type et Structure

La taille et l'objectif d'un véhicule affectent l'épaisseur de sa coque et la résilience de sa structure interne. Une moto, par exemple, a une coque minimale, construite pour la vitesse et l'agilité. Un cuirassé terrestre (un mastodonte massif à chenilles ou à roues, blindé, propulsé par des moteurs à vapeur ou diesel), étant un véhicule beaucoup plus grand conçu pour le champ de bataille, a une coque beaucoup plus importante. Les tailles comparatives des coques (et combien de coups d'armes elles peuvent typiquement supporter) sont résumées dans les tableaux Taille de Véhicule et Coque ci-dessous.

Chaque fois qu'un véhicule subit des dommages, les dégâts entrants sont réduits par sa valeur de Coque. Tout dégât restant est soustrait des points de Structure du véhicule et a un pourcentage de chance, égal aux dégâts pénétrants, d'affecter un Système. Si le véhicule est réduit à zéro Structure, il est soit totalement détruit, soit si gravement endommagé qu'il doit être envoyé à la ferraille.

##### Coques Terrestres

| Taille | Structure | Valeur de Coque Civile | Valeur de Coque Militaire | Exemple |
| :-- | :-: | :-: | :-: | :-- |
| Petit | 1-20 | 1-3 | 4-6 | Moto, moto avec side-car, voiture compacte ou sous-compacte, canoë, kayak, barque |
| Moyen | 21-40 | 1-6 | 7-9 | Berline, fourgonnette, pickup, voiture de luxe, voiture de sport de luxe, muscle car, limousine, canot de sauvetage, hors-bord, deltaplane, autogire |
| Grand | 41-60 | 4-9 | 10-12 | Camion, limousine rallongée, SUV, bus, monospace, avion personnel, planeur, bateau de plaisance, char, hélicoptère, sous-marin |
| Énorme | 61-80 | 7-12 | 13-15 | Semi-remorque, avion de ligne, jet, navire des garde-côtes, yacht |
| Immense | 81-100 | 10-15 | 16-18 | Train, paquebot, navire de guerre |

##### Coques de Vaisseaux Spatiaux

| Taille | Structure | Valeur de Coque Civile | Valeur de Coque Militaire | Exemple |
| :-- | :-: | :-: | :-: | :-- |
| Petit | 10-50 | 4-9 | 10-12 | Chasseur monoplace |
| Moyen | 51-150 | 7-12 | 13-15 | Cargo léger, navette |
| Grand | 151-450 | 10-15 | 16-18 | Cargo lourd, croiseur |
| Énorme | 451-1350 | 13-18 | 19-21 | Frégate d'escorte, croiseur de bataille léger |
| Immense | 1351-4050 | 16-21 | 21-24 | Vaisseau générationnel, croiseur de bataille lourd |
| Colossal | 4050-12110 | 19-24 | 24-30 | Habitat orbital, station de bataille destructrice de planètes |


---
### Boucliers

Les boucliers déflecteurs fournissent une couche de protection supplémentaire pour les véhicules qui peuvent en être équipés. Les boucliers fonctionnent légèrement différemment de la Coque, en raison de leur nature ablative. Si les dégâts entrants sont égaux ou inférieurs à la valeur des boucliers, alors tout est bloqué. Si les dégâts dépassent la valeur du bouclier, tout excédent réduit la force du bouclier de ce montant.

_Par exemple, un transport de troupes a une force de bouclier énergétique de 12 points. Si le transport est touché par un laser infligeant 11 dégâts, cela ne pénètre tout simplement pas et n'a aucun effet supplémentaire. En revanche, si le transport est touché par une explosion infligeant 15 dégâts, les trois points excédentaires feraient tomber la force du bouclier à 9._

Une fois que la force d'un bouclier déflecteur est tombée à zéro, il s'effondre. Tout dégât restant est transmis à la coque.

---
### Systèmes

Chaque fois qu'un véhicule subit des dégâts qui pénètrent sa coque, il y a une chance, égale aux dégâts pénétrants, qu'un Système vital ait été touché.

_Par exemple, 10 dégâts sont appliqués à un Hors-bord - un véhicule avec 3 de Coque et 24 de Structure. La Coque compte comme une armure réduisant les dégâts à 7. Ceci est retiré des 24 points de Structure et il y a 7 % de chance d'endommager l'un des Systèmes du véhicule._

Les dégâts qu'un Système peut supporter sont basés purement sur la taille du véhicule. Ceci est modélisé par le nombre de coups qu'un Système peut prendre, plutôt que par le montant réel des dégâts. Un seul Coup sur un Système d'un véhicule Petit détruira instantanément ce Système. Il faut deux coups pour démolir les Systèmes d'un véhicule de taille Moyenne, trois pour un véhicule Grand, et ainsi de suite. Voir le [Tableau de Dégâts des Systèmes](0006_Vehicles.md?id=system-damage-table) ci-dessous.

Les systèmes qui sont endommagés, mais pas encore détruits, subissent une perte de fonction proportionnelle au nombre de Coups encaissés - soit une réduction en pourcentage, soit une pénalité de Degré aux tâches du Système. L'effet spécifique est basé sur ce que le sous-système contrôle, comme détaillé dans le [Tableau de Dégâts des Composants Système](0006_Vehicles.md?id=system-component-damage-table) ci-dessous. Selon le Système touché, les effets peuvent être catastrophiques.

_Par exemple, un Cuirassé Terrestre - un véhicule Immense avec 5 Coups Système - touché deux fois dans la Propulsion perdrait 40 % de sa puissance et réduirait sa Vitesse Lente de deux Degrés pour devenir Pesante. De même, un cargo Grand - avec 3 Coups Système - encaissant deux coups sur le Système Moteur/Carburant aurait une pénalité de deux Degrés à la Vitesse ainsi qu'à l'utilisation des systèmes électroniques. Un troisième coup détruirait le Système Moteur/Carburant et le navire avec._


<details>

<summary>* Errata de la Communauté</summary>

---

#### Dégâts


_Le texte original ici était initialement plus éloigné. Placé directement après la section Systèmes, il répète inutilement le paragraphe précédent._

- _"Les dégâts qui dépassent la Coque pénètrent dans le véhicule, endommageant la Structure et impactant potentiellement un ou plusieurs systèmes. Selon la taille du véhicule, les dégâts peuvent être mineurs ou catastrophiques._
- _Par exemple, un véhicule Grand peut encaisser jusqu'à deux coups sur un Système comme sa Propulsion. Le troisième coup détruit fonctionnellement la Propulsion. Chaque fois que le système subit un coup, il perd soit un pourcentage de sa fonction comme décrit dans la colonne Perte par Coup du Tableau de Dégâts des Systèmes ci-dessous, soit une fonction principale (telle que Propulsion, Pilotage, Comms, etc.) devient un Degré de Difficulté plus difficile par coup subi."_

_Les paragraphes ci-dessus sont supprimés et une modification abrégée prend leur place en citant un autre effet de Système en exemple._

---

</details>

##### Tableau de Dégâts des Systèmes 

| Taille | Coups Système | Perte par Coup |
| :-- | :-: | :-- |
| Petit | 1 | 100 % - Détruit |
| Moyen | 2 | 1 Degré ou 50 % |
| Grand | 3 | 1 Degré ou 33 % |
| Énorme | 4 | 1 Degré ou 25 % |
| Immense | 5 | 1 Degré ou 20 % |
| Colossal | 6 | 1 Degré ou 16 % |


<details>

<summary>* Errata de la Communauté</summary>

---

##### Tableau de Dégâts des Systèmes (Original) 

| Taille | Coups Système | Perte par Coup |
| :-- | :-: | :-- |
| Petit | 1 | 1 Degré ou 50 % |
| Moyen | 2 | 1 Degré ou 33 % |
| Grand | 3 | 1 Degré ou 25 % |
| Énorme | 4 | 1 Degré ou 20 % |
| Immense | 5 | 1 Degré ou 16 % |
| Colossal | 6 | 1 Degré ou 10 % |

##### Tableau de Taille de Véhicule (issu de [Taille de la Coque, Type et Structure](0006_Vehicles.md?id=hull-size-type-and-structure))

| Taille | Coups Système |
| :-- | :-: |
| Petit | 1 |
| Moyen | 2 |
| Grand | 3 |
| Énorme | 4 |
| Immense | 5 |
| Colossal | 6 |

_Les règles et exemples originaux sont incohérents :_
- _"Les systèmes qui sont endommagés, mais pas encore détruits, subissent une perte de fonctionnalité. Celle-ci est égale à la proportion des coups actuels par rapport à sa capacité totale. Ainsi, un véhicule Immense touché deux fois dans la Propulsion perdrait 40 % de sa puissance (2 coups sur un maximum de 5)."_ 
   - _Cela suggère que le véhicule Immense montré avec 5 Coups Système devrait perdre 20 % à chaque coup - mais le tableau indique 16 %._
- _"Par exemple, un véhicule Grand peut encaisser jusqu'à trois coups sur un système comme sa Propulsion. Le quatrième coup détruit fonctionnellement la Propulsion."_ 
  - _"Cela suggère - tout comme le tableau - 25 % de dégâts par Coup Système, mais les véhicules Grands ne peuvent encaisser que 3 Coups Système selon le même tableau._
- _Bien que non incohérent, le Tableau de Taille de Véhicule était redondant ; apparaissant à nouveau sous une forme plus complète (ajoutant la colonne Perte par Coup) juste quelques lignes plus loin._

_Cela rend difficile l'application d'une règle cohérente. Pour résoudre ces problèmes, les valeurs et les exemples ont été modifiés pour correspondre et le Tableau de Taille de Véhicule a été supprimé._

---

</details>


##### Tableau de Dégâts des Composants Système 

| 1d10 | Système | Résultat Endommagé | Résultat Détruit |
| :-: | :-- | :-- | :-- |
| 1 | Cargaison | Une quantité de possessions ou d'équipement stockée dans la soute, proportionnelle aux dégâts, est détruite. | Toute la cargaison est détruite. |
| 2 | Comms | Les jets de Comms subissent un Degré de Difficulté supplémentaire à chaque fois qu'ils sont endommagés. | Le véhicule ne peut plus communiquer ni leurrer les capteurs ennemis. |
| 3 | Contrôles | Les jets de Navigation, Conduite ou Pilotage subissent un Degré de Difficulté supplémentaire à chaque fois qu'ils sont endommagés ; jet de Contrôle immédiat requis. | Le véhicule ne peut plus être dirigé ni changer de cap. |
| 4 | Propulsion | Vitesse réduite d'un montant proportionnel aux dégâts. | Le véhicule s'arrête net ; les aéronefs s'écrasent. |
| 5 | Équipage | Un nombre de passagers proportionnel aux dégâts devient des pertes. Ceux touchés subissent une Blessure Grave et doivent réussir un jet de Constitution ou être tués instantanément. | Les occupants du véhicule meurent. |
| 6 | Moteur / Carburant | Vitesse réduite d'un montant proportionnel aux dégâts. Systèmes électroniques un Degré de Difficulté plus difficile à utiliser. | Le véhicule est détruit dans une explosion désastreuse. |
| 7 | Capteurs | Les jets de capteurs, de Navigation et d'attaque d'Arme subissent un Degré de Difficulté supplémentaire à chaque fois qu'ils sont endommagés. | Le véhicule est rendu aveugle. |
| 8 | Armes | Un nombre de systèmes d'armes proportionnel aux dégâts devient inopérant. | Le véhicule ne peut plus tirer avec ses armes. |
| 9-0 | Aucun | Aucun système touché ; juste des dégâts à la Structure. | N/A |

<details>

<summary>* Errata de la Communauté</summary>

---

##### Tableau de Dégâts des Composants Système (Moteur/Carburant)

_Le résultat original était le suivant : "La Vitesse maximale est réduite de moitié..." Cela contredit la règle générale des pénalités de dégâts proportionnelles aux dégâts du Système : 25 % de dégâts = 25 % de pénalité. De plus, les règles complètes dans le Compagnon Mythras ne mentionnent pas cette réduction de moitié de la Vitesse._

_Par conséquent, le texte est remplacé par la même entrée que pour les Systèmes de Propulsion : "Vitesse réduite d'un montant proportionnel aux dégâts."_

---

</details>


---
### Vitesse

Comme la physique de la vélocité, de l'accélération, de la traînée et de l'inertie (pour ne citer qu'eux) sont des problèmes complexes, une simplification est nécessaire et les véhicules se voient donc attribuer un indice de vitesse abstrait. La caractéristique Vitesse ne doit être utilisée que pour juger approximativement si un véhicule peut dépasser ou rattraper un autre.

L'indice de vitesse représente la vitesse opérationnelle nominale d'un véhicule. Dans les situations d'urgence, cette performance peut être augmentée d'un cran, au risque d'usure ou de dommages aux moteurs. Bien que le même tableau soit utilisé pour tous les types de véhicules, le bon sens doit prévaloir pour ne comparer que les véhicules de la même classe. Par exemple, si un Vaisseau spatial et une voiture de sport ont tous deux le même taux d'accélération Rapide, il devrait être évident que le vaisseau spatial est comparativement plus rapide.

Augmenter la Vitesse d'un véhicule au-delà de sa valeur Standard est possible sur un jet de Conduite réussi. Habituellement, cette vitesse supplémentaire n'est soutenable que pendant une courte période - pas plus de 1d6 minutes avant que le véhicule ne doive redescendre à sa vitesse Standard ou risquer d'endommager sa centrale électrique. Un jet de Conduite critique permet à la période de vitesse élevée d'être portée à 1d12 minutes.

Un conducteur peut tenter de pousser la vitesse d'un véhicule de 2 crans, mais cela nécessite un jet de Conduite Herculéen et le maximum que le véhicule peut supporter à cette vitesse est de 1d3 minutes : un Succès Critique ne prolongera pas la durée de la vitesse accrue.

##### Tableau d'Indices de Vitesse 

| Indice de Vitesse | Vitesse Max Pour |
| :-- | :-: |
| Pesant | Immense |
| Lent | |
| Ralenti | Énorme |
| Médiocre | |
| Doux | Grand |
| Modéré | |
| Rapide | Moyen |
| Vite | |
| Filant | Petit |


---
### Traits

Le nombre maximum de traits qu'un véhicule peut posséder dépend de la taille et du type de coque.

Chaque véhicule possède un trait inhérent : le mode de déplacement pour lequel il a été principalement conçu. Par conséquent, les aéronefs possèdent intrinsèquement le trait Aérien, les bateaux le trait Maritime, et ainsi de suite. Ce trait inhérent ne compte pas dans le nombre de traits disponibles. Cependant, si un véhicule devait inclure un second mode de déplacement — un sous-marin volant par exemple —, alors le trait Aérien devrait être pris comme l'un de ses traits disponibles.

Certains traits peuvent ne pas être disponibles, selon le niveau technologique du cadre ; les Maîtres de Jeu doivent prendre leurs propres décisions quant aux traits qui peuvent être appliqués.

##### Tableau d'Allocation des Traits de Véhicule 

| Taille | Traits Max |
| :-- | :-: |
| Petit | 1 |
| Moyen | 2 |
| Grand | 3 |
| Énorme | 4 |
| Immense | 5 |
| Colossal | 6 |

#### Aérien

Le véhicule est capable de vol atmosphérique.

#### Tout-terrain

Ce Trait doit être utilisé avec les véhicules Terrestres. Le véhicule peut traverser des terrains inhospitaliers, difficiles et escarpés, en utilisant soit des chenilles, soit des systèmes de suspension et de transmission avancés, soit des différentiels de transmission puissants.

#### Fouisseur

Le véhicule est conçu pour creuser et tunneler à travers le sol. Il peut atteindre une profondeur maximale égale à sa Valeur de Coque x 5 mètres.

#### Camouflé

Le véhicule possède soit une peinture de camouflage, soit des capteurs mimétiques qui lui permettent de se fondre dans son environnement. Les tentatives pour repérer visuellement le véhicule sont un degré plus difficiles.

#### Cargaison

Le véhicule est conçu spécifiquement pour transporter du fret plutôt que des passagers. Les compartiments passagers sont réduits au minimum, le reste de l'espace utilisable du véhicule étant consacré au confinement de la cargaison avec des sections appropriées, des outils et même un conditionnement environnemental (comme des sections de congélation pour le transport de denrées périssables). Lorsqu'il est chargé de fret, la vitesse du véhicule est deux crans plus basse que ce que sa taille de coque permettrait normalement.

#### Transporteur

Le véhicule est conçu spécifiquement pour transporter des véhicules plus petits, légèrement équipés ou éventuellement contrôlés à distance, de nature civile ou militaire. Tout véhicule possédant ce trait doit être au moins Immense. Le nombre de petites embarcations transportées peut varier selon le type de mission et l'objectif, mais peut aller de 10 à autant que la valeur de Structure du véhicule.

#### Construction

Le véhicule est équipé pour les travaux de construction lourds. Tous les véhicules avec ce trait ont également le trait Tout-terrain, mais la vitesse est deux crans plus basse que ce que leur taille de coque permettrait normalement. Le véhicule est équipé d'outils adaptés à la tâche tels que des flèches de grue, des pelles de creusement, des camions-bennes, etc.

#### Résistant aux IEM

Le véhicule est blindé contre les attaques par impulsion électromagnétique.

#### Performance Améliorée

L'indice de Vitesse du véhicule est un cran plus élevé que le maximum pour sa taille.

#### Siège Éjectable

En cas d'urgence, un siège éjectable propulse les occupants à plusieurs centaines de mètres dans les airs, puis déploie un parachute pour permettre un atterrissage en toute sécurité. Le parachute est optionnel. Non recommandé pour les hélicoptères (le Kamov Ka-52 Alligator étant une exception notable).

#### VLS (Voyage Plus Rapide que la Lumière)

Vaisseaux Spatiaux uniquement. L'engin est équipé d'un moteur plus rapide que la lumière (qu'il s'agisse d'un hyperdrive, d'un moteur de distorsion, d'un générateur de trou de ver ou similaire). Le moteur VLS a un indice de Vitesse distinct qui mesure essentiellement le taux auquel un vaisseau spatial peut traverser un parsec (3,26 années-lumière, ou 31 billions de kilomètres), comme suit :

##### Tableau d'Indices de Vitesse VLS 

| Indice de Vitesse | Facteur pour Traverser 1 Parsec |
| :-- | :-: |
| Pesant | 10 |
| Lent | 8 |
| Ralenti | 7 |
| Médiocre | 6 |
| Doux | 5 |
| Modéré | 4 |
| Rapide | 3 |
| Vite | 2 |
| Filant | 1 |

Le temps du facteur est à la discrétion du Maître de Jeu, selon le niveau de développement du VLS dans le cadre. Par exemple, le facteur de base pourrait être de 1 jour, ce qui signifie qu'un navire avec un moteur VLS Pesant prend 10 jours pour effectuer le voyage, alors qu'un vaisseau avec un moteur VLS Filant effectue le trajet en 1 jour. Ailleurs, là où la technologie VLS est nettement moins efficace, le temps du facteur pourrait être mesuré en mois, plutôt qu'en jours.

Il est supposé que le navire dispose de réserves de carburant pour effectuer un voyage de retour, ou un moyen de faire le plein au point de destination.

On suppose que n'importe quelle taille de vaisseau spatial peut être équipée d'un moteur VLS, bien que, là encore, cela dépende du cadre.

Les moteurs VLS ne peuvent pas être activés à moins de 1,5 Unité Astronomique d'une étoile (environ 225 millions de kilomètres). Cela signifie que les navires doivent utiliser un moteur subluminique pour s'éloigner jusqu'à environ la distance de Mars avant d'activer le système VLS.

#### Véhicule Terrestre

Le véhicule est capable de se déplacer sur le sol.

#### Survol

Le véhicule survole le sol en utilisant soit un coussin d'air, soit un répulseur anti-gravité.

#### Luxueux

Le véhicule est conçu spécifiquement pour transporter des passagers avec un certain niveau de luxe. L'espace de chargement excédentaire est consacré à des hébergements de luxe pour les passagers, des piscines, des jacuzzis, un équipage supplémentaire pour satisfaire les caprices des passagers, et ainsi de suite.

#### Rails

Le véhicule dépend d'un système de rails. Les véhicules avec ce trait peuvent naturellement atteindre un indice de Vitesse trois crans plus élevé que ce que leur taille de coque permettrait normalement, mais sont évidemment limités aux mouvements sur le système ferroviaire uniquement.

#### Résilient

Tous les systèmes peuvent supporter un coup de plus que ce qui est normalement déterminé par la Taille. Ce Trait peut être cumulé — ainsi Résilient 2 indique que les systèmes peuvent supporter 2 coups de plus que d'habitude au coût de deux points de Trait.

#### Maritime

Le véhicule est flottable sur l'eau.

#### Vaisseau Spatial

Le véhicule est scellé contre le vide et blindé contre les radiations cosmiques et peut, selon sa conception, être capable de quitter et de rentrer dans l'atmosphère, et de maintenir un vol au sein d'une atmosphère.

#### Discrétion (Discrétion)

Aéronefs uniquement. Le véhicule est conçu pour éviter la détection par radar et autres systèmes de capteurs longue portée. Les tentatives pour repérer le véhicule en utilisant des capteurs électroniques sont un degré plus difficiles.

#### Submersible

Le véhicule est capable d'être immergé sous la surface d'un océan jusqu'à une profondeur opérationnelle de sa Valeur de Coque x 10 mètres. La profondeur d'effondrement — le maximum absolu que le submersible peut atteindre sans être écrasé — est de 1,5 fois sa profondeur opérationnelle.

#### Manœuvrabilité Supérieure

La maniabilité du véhicule est classée comme Facile.

#### Suite de Surveillance

Le véhicule dispose d'un ordinateur de bord, d'une station de base de communication, d'un récepteur pour les signaux de dispositifs d'écoute, et d'un appareil pour intercepter les signaux de smartphones à proximité dans un rayon de 100 mètres.#### Tough

Un véhicule civil doté de ce trait puise sa Coque dans la colonne Militaire et possède automatiquement la Structure maximale. Un véhicule Militaire doté de ce Trait puise sa Coque et sa Structure dans la ligne située juste en dessous.

#### Rayon Tracteur

Vaisseau Spatial uniquement. Le navire est équipé d'un rayon tracteur capable de capturer et d'attirer à lui des véhicules ayant un indice de coque inférieur de jusqu'à deux rangs au sien. Ainsi, un vaisseau spatial Immense pourrait attirer et maintenir une coque de taille Moyenne au maximum.

#### ADAV

Atterrissage/Décollage à la Verticale. Ce trait est inhérent aux hélicoptères et aux véhicules similaires qui utilisent une combinaison de rotors pour produire la portance. Lorsqu'il est appliqué à des aéronefs à voilure fixe, il indique l'utilisation de propulseurs fixes ou orientables pour contrôler l'assiette, l'ascension et la descente en vol.

#### Amphibie

Le véhicule se propulse lui-même en utilisant des jambes articulées. Les véhicules Marcheurs sont limités à la Vitesse de Lent, quelle que soit leur Taille. Cependant, les Marcheurs peuvent être construits à des hauteurs qui seraient simplement instables pour des véhicules équipés d'autres moyens de locomotion.

Ce véhicule est capable de mouvement subaquatique.

#### Armé

Le véhicule a été adapté pour accueillir de l'armement. Les systèmes d'armes sont abordés ci-dessous dans la section [Armes](0006_Vehicles.md?id=weapons).


---
## Armes

Habituellement, seules les coques militaires sont conçues pour accueillir de l'armement (points d'ancrage, stockage de munitions, systèmes de contrôle). Le Trait « Armé » peut être pris pour des véhicules civils qui pourraient avoir des besoins en matière d'armement.

Le nombre maximum de systèmes d'armes qu'un véhicule peut supporter est égal à 1/10ème de ses Points de Structure (ainsi, un véhicule avec 40 de Structure pourrait supporter 4 systèmes d'armes, s'il s'agit d'un véhicule militaire, ou d'un véhicule civil Armé).

Les systèmes d'armes dépendent de la Taille du véhicule. Le type maximum de système d'arme pour les différentes Tailles est indiqué dans les tableaux ci-dessous.


##### Tableau des Armes par Taille

| Taille | Terrestre | Vaisseau Spatial |
| :-- | :-- | :-- |
| Petit | Arme Légère (ex: Fusil d'Assaut) | Arme Moyenne (ex: Mitrailleuse, Lance-Roquettes) |
| Moyen | Arme Moyenne (ex: Mitrailleuse, Lance-Roquettes) | Arme en Tourelle/Lourde (ex: Mitrailleuses Jumelées Lourdes, Mini-Guns) |
| Grand | Arme en Tourelle/Lourde (ex: Mitrailleuses Jumelées Lourdes, Mini-Guns) | Batterie d'Armes (ex: Artillerie de Champ de Bataille) |
| Immense | Batterie d'Armes (ex: Artillerie de Champ de Bataille) | Armes Avancées (ex: Systèmes de Missiles) |
| Énorme | Armes Avancées (ex: Systèmes de Missiles) | Armes Montées sur l'Épine Dorsale (une seule) |
| Colossal | SA | Armes Montées sur l'Épine Dorsale (jusqu'à 3) |

##### Exemple de Statistiques d'Armes
 
| Arme | Dégâts | Portée | Cadence de Tir | Mun/Chrg |
| :-- | :-: | :-: | :-: | :-: |
| Canon de 50 pouces | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Roquette | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Missile Moyen/Torpille | 6d10 | Portée max de 200km | 1 | 1/5 |
| Missile Large/Croisière | 6d10+10 | Portée max de 1000km | 1 | 1/10 |
| Canon Laser/Plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Canon Laser/Plasma Lourd | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Batterie d'Artillerie | 5d6+6 | Portée max de 50km | 1 | 1/5 |
| Batterie sur Épine Dorsale | 10d6+6 | Portée max de 20000km | 1 | 1/10 |

_Les portées sont données en mètres et en kilomètres._

_Les cadences de tir correspondent au tir unique, semi-auto et automatique._

_Les Munitions représentent la capacité de tir avant d'avoir besoin de recharger. Le Chargement est le temps de rechargement en Rounds de Combat, en supposant qu'un équipage complet soit disponible._

---
## Maniabilité et Manœuvres

Les manœuvres évasives ou soudaines nécessitent un jet de Conduite/Pilotage réussi pour garantir que le chauffeur ou le pilote garde le contrôle du véhicule. La plupart des véhicules sont conçus et construits pour résister aux contraintes et aux tensions occasionnelles, mais le Maître de Jeu peut décider qu'une manœuvre particulière nécessite un jet à un degré de difficulté plus élevé, en fonction de son ambition. L'échec signifie que le contrôle sur le véhicule est perdu : lancez les dés sur le tableau de Perte de Contrôle.

Notez que le tableau de Perte de Contrôle ne s'applique qu'aux véhicules terrestres. Des effets similaires peuvent être appliqués aux véhicules aériens et spatiaux, mais les Maîtres de Jeu devront ajuster le raisonnement pour l'effet spécifique. Par exemple, un aéronef, plutôt que de déraper, pourrait partir en vrille.

De plus, la maniabilité inhérente d'un véhicule peut avoir un impact supplémentaire sur le jet de Conduite. La Maniabilité est soit Facile, Standard, Difficile, Redoutable ou Herculéenne et détermine le point de départ pour le jet de Conduite lors de l'exécution d'une manœuvre. Le degré de difficulté de la manœuvre est ensuite appliqué à la maniabilité pour déterminer la difficulté finale.

Par exemple, une moto haute performance est équipée de gyrostabiliseurs intégrés lui conférant une Maniabilité Facile. Le conducteur souhaite effectuer un virage en tête-à-queue à 180 degrés pour échapper à un poursuivant, une manœuvre que le Maître de Jeu évalue comme ayant un degré de difficulté supplémentaire. Le pilote doit donc effectuer son jet de Conduite en Standard plutôt qu'en Facile. S'il avait tenté la même manœuvre sur une moto non stabilisée, le jet de Conduite aurait été en Difficile.

Maniabilité Supérieure est un Trait. Si un véhicule n'a pas ce trait dans sa description, la valeur par défaut est une maniabilité Standard pour tout véhicule de taille Grande et inférieure. Les véhicules Immenses et Énormes possèdent intrinsèquement le trait de Maniabilité Redoutable et Herculéen, respectivement, et le Maître de Jeu est libre de décider que certaines manœuvres sont tout simplement impossibles à réaliser en raison de la taille du véhicule.

##### Tableau de Perte de Contrôle

| 1d100 | Résultat |
| :-: | :-- |
| 01-25 | Embardée. La perte de contrôle est temporaire. Le véhicule diminue sa vitesse de 1 rang pendant 5 secondes. |
| 26-40 | Dérapage. Le conducteur doit lutter pour garder le contrôle du véhicule. Le véhicule diminue sa vitesse de 2 rangs pendant 10 secondes. |
| 41-50 | Dérapage Sévère. Le véhicule finit orienté dans la mauvaise direction et à l'arrêt pendant 15 secondes. |
| 51-60 | Tonneau. Le véhicule dérape et fait des tonneaux, subissant 3d10 de Dégâts à sa Structure. Les occupants doivent réussir des jets d'Endurance sous peine de subir 1d10 de Dégâts à 1d3 Localisations des Coups. |
| 61-70 | Tonneau Sévère. Comme ci-dessus, mais le véhicule subit 3d10+10 de Dégâts et les occupants reçoivent 1d10 de Dégâts même si le jet d'Endurance réussit, et 2d10 s'il échoue. |
| 71-80 | Épave. Comme ci-dessus, mais le véhicule est réduit à 0 de Structure. Les occupants subissent les mêmes Dégâts que pour un Tonneau Sévère. |
| 81-90 | Explosion. Comme ci-dessus, mais le système de carburant du véhicule s'enflamme et explose dans les 1d20+10 secondes. S'ils ne parviennent pas à s'éloigner, les occupants subissent 1d6 Dégâts de brûlure supplémentaires sur 1d6 localisations. |
| 91-98 | Explosion Immédiate. Comme ci-dessus, mais l'explosion est immédiate. |
| 99-00 | Accident Catastrophique. Les occupants doivent réussir un jet d'Endurance ou être tués instantanément. Les Dégâts subis sont les mêmes que pour une Épave. |


---
## Exemples de Véhicules

---

### Véhicules Terrestres

#### Intercepteur

Une voiture de luxe gonflée à bloc, une voiture de sport ou similaire, cette voiture est construite pour aller vite et rendre coup pour coup lors d'une bataille. C'est le genre de véhicule auquel les gens pensent quand quelqu'un dit « voiture d'espion ».

| Intercepteur | |
| :- | :- |
| **Taille / Type** | Moyen Militaire |
| **Coque** | 6 |
| **Structure** | 40 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniabilité** | Facile |
| **Traits** | [Siège Éjectable](0006_Vehicles.md?id=ejector-seat), [Performance Améliorée](0006_Vehicles.md?id=enhanced-performance), [Maniabilité Supérieure](0006_Vehicles.md?id=superior-handling), [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Distributeur de Tache d'Huile, Distributeur de Fumée, Mitrailleuses Moyennes Jumelées (2d6+3) |

<br>

---

#### Moto de Poursuite

Une moto légère et rapide pour les poursuites à grande vitesse, la Moto de Poursuite transporte une surprise – soit une paire de mitrailleuses jumelées, soit deux roquettes.

| Moto de Poursuite | |
| :- | :- |
| **Taille / Type** | Petit Civil |
| **Coque** | 2 |
| **Structure** | 12 |
| **Systèmes** | 1 |
| **Vitesse** | Rapide |
| **Maniabilité** | Facile |
| **Traits** | [Maniabilité Supérieure](0006_Vehicles.md?id=superior-handling), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Deux Roquettes (4d6) ou Mitrailleuses Légères Jumelées (2d6) |

<br>

---

#### Berline

Une berline 4 portes Standard offrant assez d'espace pour asseoir confortablement un conducteur et trois passagers. Sacrifie l'espace de chargement pour intégrer une suite de surveillance.

| Berline | |
| :- | :- |
| **Taille / Type** | Moyen Civil |
| **Coque** | 4 |
| **Structure** | 25 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniabilité** | Standard |
| **Traits** | [Discret](0006_Vehicles.md?id=unobtrusive), [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite) |
| **Armes** | Aucune |

<br>

---

#### Voiture Submersible

Une voiture pour deux personnes pouvant passer en mode amphibie ou submersible pour voyager sur ou sous l'eau. Livrée avec une torpille montée à l'avant et un missile sol-air monté sur le toit.

| Voiture Submersible | |
| :- | :- |
| **Taille / Type** | Moyen Civil |
| **Coque** | 6 |
| **Structure** | 25 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniabilité** | Standard |
| **Traits** | [Performance Améliorée](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Amphibie](0006_Vehicles.md?id=waterborne), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Roquette (5d6), Torpille (4d10) |

<br>

---

#### Fourgon de Surveillance

Un fourgon ordinaire, sans marquage, hébergeant une équipe d'agents et une suite d'équipement d'enregistrement audiovisuel.

| Fourgon de Surveillance | |
| :- | :- |
| **Taille / Type** | Grand Civil |
| **Coque** | 9 |
| **Structure** | 60 |
| **Systèmes** | 3 |
| **Vitesse** | Lent |
| **Maniabilité** | Standard |
| **Traits** | [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite), [Robuste](0006_Vehicles.md?id=tough) |
| **Armes** | Aucune |

<br>

---

#### Véhicule de Soutien Tactique

Un pick-up ou une jeep avec de la place pour un équipage de deux personnes dans la cabine et un tireur debout dans la partie arrière manipulant une Mitrailleuse Moyenne montée sur pivot.

| Véhicule de Soutien Tactique | |
| :- | :- |
| **Taille / Type** | Moyen Civil |
| **Coque** | 6 |
| **Structure** | 30 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniabilité** | Standard |
| **Traits** | [Tout Terrain](0006_Vehicles.md?id=all-terrain), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Mitrailleuse Moyenne Montée (2d6) |


<br>

---

### Embarcations

#### Bateau à Moteur

Un bateau à moteur typique, armé d'un distributeur de mines monté à l'arrière.

| Bateau à Moteur | |
| :- | :- |
| **Taille / Type** | Moyen Civil |
| **Coque** | 3 |
| **Structure** | 24 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniabilité** | Standard |
| **Traits** | [Performance Améliorée](0006_Vehicles.md?id=enhanced-performance), [Amphibie](0006_Vehicles.md?id=waterborne), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Distributeur de Mines (5d6) |

<br>

---

#### Yacht

Le genre de yacht de luxe qu'un oligarque pourrait posséder. Probablement équipé d'une suite de surveillance pour se protéger contre les ennemis tentant de manigancer quelque chose.

| Yacht | |
| :- | :- |
| **Taille / Type** | Immense Civil |
| **Coque** | 10 |
| **Structure** | 75 |
| **Systèmes** | 4 |
| **Vitesse** | Lent |
| **Maniabilité** | Redoutable |
| **Traits** | [Luxueux](0006_Vehicles.md?id=luxurious), [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite), [Amphibie](0006_Vehicles.md?id=waterborne) |
| **Armes** | Aucune |


<br>

---

### Aéronefs/Vaisseaux Spatiaux

#### Dirigeable (Paquebot Aérien Civil)

Semblable au Hindenburg, cette classe de dirigeable transcontinental (et d'autres de sa classe) mesure 245 mètres de long et nécessite un équipage de 40 à 61 personnes. Il peut généralement transporter un complément de 50 à 72 passagers dans des hébergements de luxe.

| Dirigeable | |
| :- | :- |
| **Taille / Type** | Énorme Civil |
| **Coque** | 10 |
| **Structure** | 85 |
| **Systèmes** | 5 |
| **Vitesse** | Pénible |
| **Maniabilité** | Herculéen |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Luxueux](0006_Vehicles.md?id=luxurious), [ADAV](0006_Vehicles.md?id=vtol) |
| **Boucliers** | Aucun |
| **Armes** | Aucune |

<br>

---

#### Hélicoptère d'Assaut

L'Hélicoptère d'Assaut traditionnel utilise sa technologie de surveillance avancée pour intercepter les signaux téléphoniques et internet sans fil, et suivre des individus et des véhicules même dans l'obscurité, grâce au FLIR (imagerie thermique). Les tentatives pour échapper au traqueur via la Discrétion sont Redoutables.

| Hélicoptère d'Assaut | |
| :- | :- |
| **Taille / Type** | Grand Militaire |
| **Coque** | 11 |
| **Structure** | 50 |
| **Systèmes** | 3 |
| **Vitesse** | Modérée |
| **Maniabilité** | Facile |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Performance Améliorée](0006_Vehicles.md?id=enhanced-performance), [Discrétion](0006_Vehicles.md?id=stealth), [Maniabilité Supérieure](0006_Vehicles.md?id=superior-handling), [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite), [ADAV](0006_Vehicles.md?id=vtol) |
| **Boucliers** | Aucun |
| **Armes** | 1 Gatling (3d6), 4 Roquettes (5d6) |

<br>

---

#### Chasseur Multi-Rôle

Ce chasseur biplace basé à terre (de type similaire au De Havilland Mosquito) est bien connu pour ses performances et sa polyvalence. Sa soute à bombes est capable de transporter soit deux bombes de 250 livres (à traiter comme des missiles moyens avec une portée de 0), soit une torpille unique.

| Chasseur Multi-Rôle | |
| :- | :- |
| **Taille / Type** | Grand Militaire |
| **Coque** | 10 |
| **Structure** | 45 |
| **Systèmes** | 3 |
| **Vitesse** | Modérée |
| **Maniabilité** | Standard |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Performance Améliorée](0006_Vehicles.md?id=enhanced-performance) |
| **Boucliers** | Aucun |
| **Armes** | 4 Gatlings montées sur le nez (4d6+3), 1 soute à bombes (6d10 - voir description) |

<br>

---

#### Cargo Interstellaire (Transport Léger Haute Technologie)

Ce transport léger nécessite un équipage minimum de seulement deux personnes, avec de la place pour jusqu'à quatre passagers supplémentaires. La version Standard de série est notée ici, cependant de nombreux propriétaires appliqueront leurs propres « modifications spéciales » telles que de l'espace de chargement dissimulé, Performance Améliorée, Maniabilité Supérieure, Résistance EMP, Discrétion, et ainsi de suite.

| Cargo Interstellaire | |
| :- | :- |
| **Taille / Type** | Moyen Vaisseau Spatial Civil |
| **Coque** | 10 |
| **Structure** | 80 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide (Facteur de Parsec de 3) |
| **Maniabilité** | Standard |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Vaisseau Spatial](0006_Vehicles.md?id=spacecraft), [ADAV](0006_Vehicles.md?id=vtol) |
| **Boucliers** | 8 |
| **Armes** | 2x Tourelles de Canons Laser Quadruples (5d6) |


<br>

---

#### Unité de Contact Générale (Vaisseau Spatial Ultra Haute Technologie)

Ce vaisseau spatial extrêmement haute technologie est la représentation physique d'un Esprit artificiel hautement avancé, qui prend la forme d'une série de modules connectés par champ de deux kilomètres de long. Les modules ont des objectifs individuels et incluent des habitats, des installations de construction, des zones de fret, le traitement des aliments, des complexes de loisirs, des baies de hangar, et même certaines unités secrètes dont l'intelligence du vaisseau discute rarement, voire jamais. Il n'a besoin d'aucun équipage humain, mais peut supporter une population de passagers allant jusqu'à 100 000 personnes avec facilité. De nombreux passagers naissent et meurent à bord de l'Unité de Contact : beaucoup sont transitoires, allant et venant comme ils le souhaitent.

| Unité de Contact Générale | |
| :- | :- |
| **Taille / Type** | Colossal Vaisseau Spatial Civil |
| **Coque** | 20 |
| **Structure** | 10 000 |
| **Systèmes** | 6 |
| **Vitesse** | Modérée (Facteur de Parsec de 4. À ce niveau technologique, un Facteur équivaut à 1 heure) |
| **Maniabilité** | Redoutable |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Porte-Aéronefs](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxueux](0006_Vehicles.md?id=luxurious), [Vaisseau Spatial](0006_Vehicles.md?id=spacecraft), [Maniabilité Supérieure](0006_Vehicles.md?id=superior-handling), [Rayon Tracteur](0006_Vehicles.md?id=tractor-beam) |
| **Boucliers** | 30 |
| **Armes** | Aucune dont il se soucie de discuter |

<br>