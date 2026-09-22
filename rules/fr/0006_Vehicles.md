# Véhicules

Les véhicules dans _Mythras Imperative_ sont traités de manière semi-abstraite. Essentiellement, ce sont des outils d'arrière-plan, utilisés pour transporter les personnages d'un point A à un point B, sans grand besoin de descriptions détaillées ou de statistiques. Cependant, il arrive que les Maîtres de Jeu aient besoin de détails sur les véhicules lorsqu'il est nécessaire de les représenter lors de poursuites ou de situations de combat.

Les règles de cette section permettent de représenter la plupart des types de véhicules, mais de manière abstraite, dans le but de favoriser la flexibilité et d'enrichir la narration. Les vaisseaux spatiaux et les engins spatiaux sont un peu différents, bien qu'ils soient basés sur des principes similaires.

---
## Statistiques

Tous les véhicules sont décrits en fonction de leur Structure, Coque, Vitesse, Systèmes, Traits et Boucliers (s'ils sont présents dans l'univers de jeu).

- **[Taille](0006_Vehicles.md?id=vehicle-size-table) :** Tous les véhicules ont l'un des six niveaux de Taille qui détermine la valeur ou la plage du reste des caractéristiques. En raison de leur taille intrinsèque plus importante et des environnements hostiles de l'espace, les vaisseaux spatiaux ont leur propre plage de valeurs.
- **[Coque](0006_Vehicles.md?id=terrestrial-hulls) :** Représente les Points d'Armure.
- **[Structure](0006_Vehicles.md?id=terrestrial-hulls) :** Représente les Points de Vie d'un véhicule.
- **[Boucliers](0006_Vehicles.md?id=shields) :** Dans les univers disposant d'une technologie avancée de manipulation de l'énergie, des boucliers peuvent être présents pour protéger le véhicule, mais ils peuvent s'éroder sous un feu soutenu.
- **[Systèmes](0006_Vehicles.md?id=systems) :** Représentent les composants vitaux du véhicule, incluant la centrale énergétique, la section d'équipage, etc.
- **[Vitesse](0006_Vehicles.md?id=speed) :** Chaque véhicule possède un niveau de Vitesse de base.
- **[Traits](0006_Vehicles.md?id=traits) :** Un véhicule peut également posséder un ou plusieurs Traits. Les Traits, tout comme les Capacités attribuées aux Créatures dans les règles de _Mythras Imperative_, ou les Traits de Style de Combat, offrent une description de jeu et un avantage supplémentaires, reflétant la nature du véhicule.
- **[Armes](0006_Vehicles.md?id=weapons) :** Tout comme les Traits, un véhicule peut être équipé d'armes si l'univers le permet. Quelques exemples suggérés et leurs valeurs sont détaillés ci-dessous.


---
### Taille de la coque, type et structure

La taille et l'objectif d'un véhicule affectent l'épaisseur de sa coque et la résilience de sa structure interne. Une moto, par exemple, a une coque minimale, construite qu'elle est pour la vitesse et l'agilité. Un cuirassé terrestre (un mastodonte massif, à chenilles ou à roues, propulsé par des moteurs à vapeur ou diesel), étant un véhicule beaucoup plus grand conçu pour le champ de bataille, possède une coque bien plus importante. Les tailles comparatives des coques (et le nombre de coups d'armes qu'elles peuvent généralement encaisser) sont résumées dans les tableaux Taille de Véhicule et Coque ci-dessous.

Chaque fois qu'un véhicule subit des dégâts, les dégâts entrants sont réduits par sa valeur de Coque. Tout dégât restant est soustrait des points de Structure du véhicule et a un pourcentage de chance, égal aux dégâts pénétrants, d'affecter un Système. Si la Structure d'un véhicule tombe à zéro, il est soit totalement détruit, soit si gravement endommagé qu'il doit être envoyé à la casse.

##### Coques terrestres 

| Taille | Structure | Valeur de Coque Civile | Valeur de Coque Militaire | Exemple |
| :-- | :-: | :-: | :-: | :-- |
| Petit | 1-20 | 1-3 | 4-6 | Moto, moto avec side-car, voiture compacte ou sous-compacte, canoë, kayak, barque |
| Moyen | 21-40 | 1-6 | 7-9 | Berline, fourgonnette, pickup, voiture de luxe, voiture de sport de luxe, muscle car, limousine, canot de sauvetage, hors-bord, deltaplane, autogire |
| Grand | 41-60 | 4-9 | 10-12 | Camion, limousine rallongée, SUV, bus, monospace, avion personnel, planeur, yacht de plaisance, char, hélicoptère, sous-marin |
| Immense | 61-80 | 7-12 | 13-15 | Semi-remorque, avion de ligne, jet, navire des garde-côtes, yacht |
| Énorme | 81-100 | 10-15 | 16-18 | Train, paquebot, navire de guerre |

##### Coques de vaisseaux spatiaux 

| Taille | Structure | Valeur de Coque Civile | Valeur de Coque Militaire | Exemple |
| :-- | :-: | :-: | :-: | :-- |
| Petit | 10-50 | 4-9 | 10-12 | Chasseur monoplace |
| Moyen | 51-150 | 7-12 | 13-15 | Cargo léger, navette |
| Grand | 151-450 | 10-15 | 16-18 | Cargo lourd, croiseur |
| Immense | 451-1350 | 13-18 | 19-21 | Frégate d'escorte, croiseur de bataille léger |
| Énorme | 1351-4050 | 16-21 | 21-24 | Vaisseau-monde, croiseur de bataille lourd |
| Colossal | 4050-12110 | 19-24 | 24-30 | Habitat orbital, station de combat capable de détruire une planète |


---
### Boucliers

Les boucliers déflecteurs fournissent une couche de protection supplémentaire aux véhicules qui peuvent en être équipés. Les boucliers fonctionnent légèrement différemment de la Coque, en raison de leur nature ablative. Si les dégâts entrants sont égaux ou inférieurs à la valeur des boucliers, ils sont totalement bloqués. Si les dégâts excèdent la valeur du bouclier, tout surplus réduit la force du bouclier de ce montant.

_Par exemple, un transport de troupes possède une force de bouclier énergétique de 12 points. Si le transport est touché par un laser infligeant 11 dégâts, le tir ne pénètre tout simplement pas et n'a aucun effet supplémentaire. En revanche, si le transport est touché par une explosion infligeant 15 dégâts, les trois points excédentaires réduiront la force du bouclier à 9._

Une fois que la force d'un bouclier déflecteur tombe à zéro, il s'effondre. Tout dégât restant est alors appliqué à la coque.

---
### Systèmes

Chaque fois qu'un véhicule subit des dégâts qui pénètrent sa coque, il y a une chance, égale aux dégâts pénétrants, qu'un Système vital ait été touché.

_Par exemple, 10 dégâts sont infligés à un hors-bord, un véhicule avec 3 de Coque et 24 de Structure. La Coque agit comme une armure réduisant les dégâts à 7. Ces points sont soustraits des 24 points de Structure et il y a 7 % de chances d'endommager l'un des systèmes du véhicule._

Les dégâts qu'un Système peut supporter sont basés uniquement sur la taille du véhicule. Cela est modélisé par le nombre de coups qu'un Système peut encaisser, plutôt que par le montant réel des dégâts. Un seul Coup de Système sur un véhicule Petit détruira instantanément ce Système. Il faut deux coups pour démolir les systèmes d'un véhicule de taille Moyenne, trois pour un véhicule Grand, et ainsi de suite. Voir le [Tableau des dégâts aux systèmes](0006_Vehicles.md?id=system-damage-table) ci-dessous.

Les systèmes endommagés, mais pas encore détruits, subissent une perte de fonctionnalité proportionnelle au nombre de Coups subis — soit une réduction en pourcentage, soit une pénalité de Degré aux tâches du Système. L'effet spécifique dépend de ce que contrôle le sous-système, comme détaillé dans le [Tableau des dégâts aux composants du système](0006_Vehicles.md?id=system-component-damage-table) ci-dessous. Selon le système touché, les effets peuvent être catastrophiques.

_Par exemple, un cuirassé terrestre — un véhicule Énorme avec 5 Coups de Système — touché deux fois dans la Propulsion perdrait 40 % de sa puissance et verrait sa vitesse lente réduite de deux Degrés pour devenir Pesante. De même, un grand cargo — avec 3 Coups de Système — recevant deux coups sur le système Moteur/Carburant subirait une pénalité de deux Degrés à la Vitesse ainsi qu'à l'utilisation des systèmes électroniques. Un troisième coup détruirait le système Moteur/Carburant et le navire avec lui._


<details>

<summary>* Errata de la communauté</summary>

---

#### Dégâts


_Le texte original ici était initialement plus éloigné. Placé directement après la section Systèmes, il répète inutilement le paragraphe précédent._

- _"Les dégâts qui excèdent la Coque pénètrent dans le véhicule, endommageant la Structure et impactant possiblement un ou plusieurs systèmes. Selon la taille du véhicule, les dégâts peuvent être mineurs ou catastrophiques._
- _Par exemple, un véhicule Grand peut encaisser jusqu'à deux coups sur un système comme sa Propulsion. Le troisième coup détruit fonctionnellement la Propulsion. Chaque fois que le système subit un coup, il perd soit un pourcentage de sa fonction comme décrit dans la colonne Perte par Coup du Tableau des dégâts aux systèmes ci-dessous, soit une fonction principale (telle que Propulsion, Pilotage, Communications, etc.) devient un Degré de Difficulté plus difficile par coup subi."_

_Les paragraphes ci-dessus sont supprimés et une modification abrégée prend leur place en mentionnant un autre exemple d'effet de Système._

---

</details>

##### Tableau des dégâts aux systèmes 

| Taille | Coups de Système | Perte par coup |
| :-- | :-: | :-- |
| Petit | 1 | 100 % - Détruit |
| Moyen | 2 | 1 Degré ou 50 % |
| Grand | 3 | 1 Degré ou 33 % |
| Immense | 4 | 1 Degré ou 25 % |
| Énorme | 5 | 1 Degré ou 20 % |
| Colossal | 6 | 1 Degré ou 16 % |


<details>

<summary>* Errata de la communauté</summary>

---

##### Tableau des dégâts aux systèmes (Original) 

| Taille | Coups de Système | Perte par coup |
| :-- | :-: | :-- |
| Petit | 1 | 1 Degré ou 50 % |
| Moyen | 2 | 1 Degré ou 33 % |
| Grand | 3 | 1 Degré ou 25 % |
| Immense | 4 | 1 Degré ou 20 % |
| Énorme | 5 | 1 Degré ou 16 % |
| Colossal | 6 | 1 Degré ou 10 % |

##### Tableau de taille des véhicules (issu de [Taille de la coque, type et structure](0006_Vehicles.md?id=hull-size-type-and-structure))

| Taille | Coups de Système |
| :-- | :-: |
| Petit | 1 |
| Moyen | 2 |
| Grand | 3 |
| Immense | 4 |
| Énorme | 5 |
| Colossal | 6 |

_Les règles et exemples originaux sont incohérents :_
- _"Les systèmes endommagés, mais pas encore détruits, subissent une perte de fonctionnalité. Cela est égal à la proportion des coups actuels par rapport à sa capacité totale. Ainsi, un véhicule Énorme touché deux fois dans la Propulsion perdrait 40 % de sa puissance (2 coups sur un maximum de 5)."_
   - _Cela suggère que le véhicule Énorme présenté avec 5 Coups de Système devrait perdre 20 % à chaque coup - mais le tableau indique 16 %._
- _"Par exemple, un véhicule Grand peut encaisser jusqu'à trois coups sur un système comme sa Propulsion. Le quatrième coup détruit fonctionnellement la Propulsion."_
  - _"Cela suggère - tout comme le tableau - 25 % de dégâts par Coup de Système, mais les véhicules Grands ne peuvent encaisser que 3 Coups de Système selon ce même tableau._
- _Bien que non incohérent, le Tableau de taille des véhicules était redondant ; apparaissant à nouveau sous une forme plus complète (ajoutant la colonne Perte par coup) quelques lignes plus loin._

_Cela rend difficile l'application d'une règle cohérente. Pour résoudre ces problèmes, les valeurs et les exemples ont été modifiés pour correspondre et le Tableau de taille des véhicules a été supprimé._

---

</details>


##### Tableau des dégâts aux composants du système 

| 1d10 | Système | Résultat Endommagé | Résultat Détruit |
| :-: | :-- | :-- | :-- |
| 1 | Cargaison | Une quantité de possessions ou d'équipements stockés dans la soute, proportionnelle aux dégâts, est détruite. | Toute la cargaison est détruite. |
| 2 | Comms | Les jets de Communication subissent un Degré de Difficulté supplémentaire chaque fois qu'ils sont endommagés. | Le véhicule ne peut plus communiquer ou leurrer les capteurs ennemis. |
| 3 | Contrôles | Les jets de Navigation, Pilotage ou Conduite subissent un Degré de Difficulté supplémentaire chaque fois qu'ils sont endommagés ; jet de Contrôle immédiat requis. | Le véhicule ne peut plus être dirigé ou changer de cap. |
| 4 | Propulsion | Vitesse réduite d'un montant proportionnel aux dégâts. | Le véhicule s'arrête net ; les aéronefs s'écrasent. |
| 5 | Équipage | Un nombre de passagers proportionnel aux dégâts devient des pertes. Les personnes touchées subissent une Blessure Majeure et doivent réussir un jet d'Endurance ou être tuées instantanément. | Les occupants du véhicule meurent. |
| 6 | Moteur / Carburant | Vitesse réduite d'un montant proportionnel aux dégâts. Systèmes électroniques un Degré de Difficulté plus difficile à utiliser. | Le véhicule est détruit dans une explosion désastreuse. |
| 7 | Capteurs | Les jets de Capteurs, Navigation et Attaque d'arme subissent un Degré de Difficulté supplémentaire chaque fois qu'ils sont endommagés. | Le véhicule est rendu aveugle. |
| 8 | Armes | Un nombre de systèmes d'armes proportionnel aux dégâts devient inopérant. | Le véhicule ne peut plus tirer avec ses armes. |
| 9-0 | Aucun | Aucun système touché ; seulement des dégâts de Structure. | N/A |

<details>

<summary>* Errata de la communauté</summary>

---

##### Tableau des dégâts aux composants du système (Moteur/Carburant)

_Le résultat original était le suivant : "La Vitesse maximale est réduite de moitié..." Cela contredit la règle générale des pénalités de dégâts proportionnelles aux dégâts de Système : 25 % de dégâts = 25 % de pénalité. De plus, les règles complètes du Mythras Companion ne mentionnent pas cette réduction de vitesse de moitié._

_En conséquence, le texte est remplacé par la même entrée que pour les systèmes de Propulsion : "Vitesse réduite d'un montant proportionnel aux dégâts."_

---

</details>


---
### Vitesse

Puisque la physique de la vitesse, de l'accélération, de la traînée et de l'inertie (pour n'en citer que quelques-unes) sont des problèmes complexes, une simplification est nécessaire et les véhicules se voient attribuer une valeur de vitesse abstraite. La caractéristique Vitesse ne devrait être utilisée que pour juger approximativement si un véhicule peut en rattraper ou en doubler un autre.

Le niveau de vitesse représente la vitesse opérationnelle nominale d'un véhicule. Dans les situations d'urgence, cette performance peut être augmentée d'un cran, au risque d'usure ou de dommages aux moteurs. Bien que le même tableau soit utilisé pour tous les types de véhicules, le bon sens doit être appliqué afin que seuls les véhicules de la même classe soient comparés. Par exemple, si un vaisseau spatial et une voiture de sport ont tous deux le même taux d'accélération "Rapide", il est évident que le vaisseau spatial est comparativement plus rapide.

Augmenter la Vitesse d'un véhicule au-delà de sa valeur standard est possible sur un jet de Conduite réussi. Habituellement, cette vitesse supplémentaire n'est soutenable que pour une courte période – pas plus de 1d6 minutes avant que le véhicule ne doive redescendre à sa vitesse standard ou risquer d'endommager sa centrale énergétique. Un jet de Conduite critique permet de prolonger la période de haute vitesse à 1d12 minutes.

Un conducteur peut tenter de pousser la vitesse d'un véhicule de 2 niveaux, mais cela nécessite un jet de Conduite Herculéen et la durée maximale que le véhicule peut maintenir cette vitesse est de 1d3 minutes : un Succès Critique ne prolongera pas la durée de cette vitesse augmentée.

##### Tableau des niveaux de vitesse 

| Niveau de Vitesse | Vitesse Max pour |
| :-- | :-: |
| Pesant | Énorme |
| Lent | |
| Faible | Immense |
| Médiocre | |
| Modéré | Grand |
| Moyen | |
| Rapide | Moyen |
| Vite | |
| Fulgurant | Petit |


---
### Traits

Le nombre maximal de traits qu'un véhicule peut posséder dépend de la taille et du type de sa coque.

Chaque véhicule possède un trait inhérent : le mode de déplacement pour lequel il a été principalement conçu. Par conséquent, les aéronefs possèdent intrinsèquement le trait Aérien, les bateaux le trait Maritime, et ainsi de suite. Ce trait inhérent ne compte pas dans le nombre de traits disponibles. Cependant, si un véhicule devait inclure un second mode de déplacement — un sous-marin volant par exemple, alors le trait Aérien devrait être pris comme l'un de ses traits disponibles.

Certains traits peuvent ne pas être disponibles selon le niveau technologique de l'univers ; les Maîtres de Jeu doivent prendre leurs propres décisions quant aux traits qui peuvent être appliqués.

##### Tableau d'allocation des traits de véhicule 

| Taille | Max de Traits |
| :-- | :-: |
| Petit | 1 |
| Moyen | 2 |
| Grand | 3 |
| Immense | 4 |
| Énorme | 5 |
| Colossal | 6 |

#### Aérien

Le véhicule est capable de vol atmosphérique.

#### Tout-terrain

Ce Trait doit être utilisé avec les véhicules terrestres. Le véhicule peut traverser des terrains inhospitaliers, difficiles et escarpés, en utilisant soit des chenilles, une suspension et des systèmes de transmission avancés, ou de puissants différentiels de transmission.

#### Fouisseur

Le véhicule est conçu pour creuser et creuser des tunnels à travers le sol. Il peut atteindre une profondeur maximale égale à sa Valeur de Coque x5 mètres.

#### Camouflé

Le véhicule possède soit une peinture de camouflage, soit des capteurs mimétiques qui lui permettent de se fondre dans son environnement. Les tentatives pour repérer le véhicule visuellement sont un degré plus difficiles.

#### Cargaison

Le véhicule est conçu spécifiquement pour transporter du fret plutôt que des passagers. Les compartiments passagers sont réduits au minimum, le reste de l'espace utilisable du véhicule étant consacré au confinement du fret avec des sections appropriées, des outils, et même une climatisation environnementale (comme des sections de congélation pour le transport de denrées périssables). Lorsqu'il est chargé de fret, la vitesse du véhicule est inférieure de deux niveaux à ce que sa taille de coque permettrait normalement.

#### Transporteur

Le véhicule est conçu spécifiquement pour transporter des véhicules plus petits, légèrement équipés ou éventuellement contrôlés à distance, de nature civile ou militaire. Tout véhicule possédant ce trait doit être au moins Énorme. Le nombre de petits engins transportés peut varier selon le type de mission et l'objectif, mais peut aller de 10 jusqu'au score de Structure du véhicule.

#### Construction

Le véhicule est équipé pour les travaux de construction lourds. Tous les véhicules dotés de ce trait possèdent également le trait Tout-terrain, mais leur vitesse est inférieure de deux niveaux à ce que leur taille de coque permettrait normalement. Le véhicule est équipé d'outils adaptés à la tâche tels que des flèches de grue, des pelles mécaniques, des bennes basculantes, etc.

#### Résistant aux IEM

Le véhicule est blindé contre les attaques par impulsion électromagnétique.

#### Performance Améliorée

Le niveau de Vitesse du véhicule est un cran plus élevé que le maximum pour sa taille.

#### Siège éjectable

En cas d'urgence, un siège éjectable propulse les occupants à plusieurs centaines de mètres dans les airs, puis déploie un parachute pour permettre un atterrissage en toute sécurité. Le parachute est optionnel. Non recommandé pour les hélicoptères (le Kamov Ka-52 Alligator étant une exception notable).

#### FTL (Voyage supraluminique)

Vaisseaux spatiaux uniquement. L'engin est équipé d'un moteur supraluminique (qu'il s'agisse d'un hyperdrive, d'un moteur de distorsion, d'un générateur de trou de ver ou similaire). Le moteur FTL possède un niveau de Vitesse distinct qui mesure essentiellement le taux auquel un vaisseau peut traverser un parsec (3,26 années-lumière, soit 31 000 milliards de kilomètres), comme suit :

##### Tableau de vitesse FTL 

| Niveau de Vitesse | Facteur pour traverser 1 Parsec |
| :-- | :-: |
| Pesant | 10 |
| Lent | 8 |
| Faible | 7 |
| Médiocre | 6 |
| Modéré | 5 |
| Moyen | 4 |
| Rapide | 3 |
| Vite | 2 |
| Fulgurant | 1 |

Le temps du facteur est à la discrétion du Maître de Jeu, en fonction du niveau de développement technologique FTL de l'univers. Par exemple, le facteur de base pourrait être de 1 jour, ce qui signifie qu'un vaisseau avec un moteur FTL Pesant prend 10 jours pour terminer le voyage, tandis qu'un vaisseau avec un moteur FTL Fulgurant complète le trajet en 1 jour. Ailleurs, là où la technologie FTL est nettement moins efficace, le temps du facteur pourrait être mesuré en mois plutôt qu'en jours.

Il est supposé que le navire dispose de réserves de carburant pour effectuer un voyage de retour, ou d'un moyen de se ravitailler au point de destination.

On suppose que n'importe quelle taille de vaisseau spatial peut être équipée d'un moteur FTL, bien que, encore une fois, cela dépende de l'univers.

Les moteurs FTL ne peuvent pas être activés à moins de 1,5 Unités Astronomiques d'une étoile (environ 225 millions de kilomètres). Cela signifie que les vaisseaux doivent utiliser un moteur subluminique pour s'éloigner jusqu'à environ la distance de Mars avant d'activer le système FTL.

#### Véhicule terrestre

Le véhicule est capable de déplacement terrestre.

#### Sustentation (Hover)

Le véhicule survole le sol en utilisant soit un coussin d'air, soit un répulseur anti-gravité.

#### Luxueux

Le véhicule est conçu spécifiquement pour transporter des passagers avec un certain niveau de luxe. L'espace de chargement excédentaire est consacré à des aménagements de passagers luxueux, des piscines, des jacuzzis, du personnel supplémentaire pour répondre aux caprices des passagers, etc.

#### Rails

Le véhicule dépend d'un système de rails. Les véhicules possédant ce trait peuvent naturellement atteindre un niveau de Vitesse trois crans plus élevé que ce que leur taille de coque permettrait normalement, mais sont évidemment restreints au mouvement sur le système ferroviaire uniquement.

#### Résilient

Tous les systèmes peuvent supporter un coup supplémentaire de plus que ce qui est normalement déterminé par la Taille. Ce trait peut être cumulé — ainsi Résilient 2 indique que les systèmes peuvent supporter 2 coups de plus que d'habitude au coût de deux points de Trait.

#### Maritime

Le véhicule est capable de flotter sur l'eau.

#### Vaisseau spatial

Le véhicule est scellé contre le vide et blindé contre les radiations cosmiques et peut, selon sa conception, être capable de quitter et de rentrer dans l'atmosphère, et de maintenir le vol au sein d'une atmosphère.

#### Furtif

Aéronefs uniquement. Le véhicule est conçu pour éviter la détection par radar et autres systèmes de capteurs longue portée. Les tentatives pour repérer le véhicule à l'aide de capteurs électroniques sont un degré plus difficiles.

#### Submersible

Le véhicule est capable d'être immergé sous la surface d'un océan jusqu'à une profondeur opérationnelle égale à sa Valeur de Coque x10 mètres. La profondeur d'effondrement — le maximum absolu que le submersible peut atteindre sans être écrasé — est de 1,5 fois sa profondeur opérationnelle.

#### Maniabilité supérieure

La maniabilité du véhicule est classée comme Facile.

#### Suite de surveillance

Le véhicule dispose d'un ordinateur de bord, d'une station de base de communication, d'un récepteur pour les signaux de dispositifs d'écoute et d'un appareil pour intercepter les signaux de smartphones à proximité dans un rayon de 100 mètres.#### Résistant
Un véhicule civil doté de ce trait tire sa Coque de la colonne Militaire et possède automatiquement le maximum de Structure. Un véhicule militaire doté de ce trait tire sa Coque et sa Structure de la ligne suivante dans le tableau.

#### Rayon tracteur
Vaisseaux spatiaux uniquement. Le vaisseau est équipé d'un rayon tracteur capable d'agripper et d'attirer à lui des véhicules ayant un indice de coque inférieur de deux crans au maximum au sien. Ainsi, un vaisseau spatial de taille Gigantesque pourrait attirer et maintenir une coque allant jusqu'à la taille Moyenne.

#### ADAV
Aéronef à décollage et atterrissage verticaux. Ce trait est inhérent aux hélicoptères et véhicules similaires qui utilisent une combinaison de rotors pour produire de la portance. Lorsqu'il est appliqué à des aéronefs à voilure fixe, il indique l'utilisation de propulseurs fixes ou orientables pour contrôler l'attitude en vol, l'ascension et la descente.

#### Amphibie / Nautique
Le véhicule se déplace à l'aide de jambes articulées. Les véhicules marcheurs sont limités à une Vitesse Douce, quelle que soit leur Taille. Cependant, les Marcheurs peuvent être construits à des hauteurs qui seraient simplement instables pour des véhicules équipés d'autres moyens de locomotion.

Ce véhicule est capable de se déplacer sous l'eau.

#### Armé
Le véhicule a été adapté pour accueillir de l'armement. Les systèmes d'armes sont décrits ci-dessous dans la section [Armes](0006_Vehicles.md?id=weapons).


---
## Armes

Habituellement, seules les coques militaires sont conçues pour accueillir des armes (points d'ancrage, stockage de munitions, systèmes de contrôle). Le trait « Armé » peut être pris pour des véhicules civils susceptibles d'avoir des besoins en armement.

Le nombre maximum de systèmes d'armes qu'un véhicule peut supporter est égal à 1/10e de ses Points de Structure (ainsi, un véhicule avec 40 de Structure pourrait supporter 4 systèmes d'armes, s'il s'agit d'un véhicule militaire ou d'un véhicule civil Armé).

Les systèmes d'armes dépendent de la Taille du véhicule. Le type maximum de système d'arme pour les différentes Tailles est indiqué dans les tableaux ci-dessous.


##### Tableau des armes par taille

| Taille | Terrestre | Vaisseau spatial |
| :-- | :-- | :-- |
| Petit | Arme légère (ex. : fusil d'assaut) | Arme moyenne (ex. : mitrailleuse, lance-roquettes) |
| Moyen | Arme moyenne (ex. : mitrailleuse, lance-roquettes) | Arme lourde/sur tourelle (ex. : mitrailleuses jumelées lourdes, mini-guns) |
| Grand | Arme lourde/sur tourelle (ex. : mitrailleuses jumelées lourdes, mini-guns) | Batterie d'armes (ex. : artillerie de champ de bataille) |
| Gigantesque | Batterie d'armes (ex. : artillerie de champ de bataille) | Armes avancées (ex. : systèmes de missiles) |
| Énorme | Armes avancées (ex. : systèmes de missiles) | Armes montées sur épine dorsale (une seule) |
| Colossal | NA | Armes montées sur épine dorsale (jusqu'à 3) |

##### Exemples de statistiques d'armes
 
| Arme | Dégâts | Portée | Cadence de tir | Munitions/Chargement |
| :-- | :-: | :-: | :-: | :-: |
| Canon 50 pouces | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Roquette | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Missile moyen/Torpille | 6d10 | Portée max de 200km | 1 | 1/5 |
| Missile de croisière/grand | 6d10+10 | Portée max de 1000km | 1 | 1/10 |
| Canon laser/plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Canon laser/plasma lourd | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Batterie d'artillerie | 5d6+6 | Portée max de 50km | 1 | 1/5 |
| Batterie sur épine dorsale | 10d6+6 | Portée max de 20000km | 1 | 1/10 |

_Les portées sont données en mètres et en kilomètres._

_Les cadences de tir correspondent au coup par coup, semi-automatique et automatique._

_Les munitions correspondent à la capacité de tir avant d'avoir besoin de recharger. Le chargement est le temps de rechargement en Rounds de combat, en supposant qu'une équipe complète est disponible._

---
## Maniement et manœuvres

Les manœuvres évasives ou soudaines nécessitent un jet de Conduire/Piloter réussi pour garantir que le conducteur ou le pilote conserve le contrôle du véhicule. La plupart des véhicules sont conçus et construits pour résister aux contraintes occasionnelles, mais le Maître de Jeu peut décider qu'une manœuvre particulière nécessite un jet avec un degré de difficulté plus élevé, selon son ambition. Un échec signifie que le contrôle du véhicule est perdu : lancez les dés sur le tableau de Perte de contrôle.

Notez que le tableau de Perte de contrôle ne s'applique qu'aux véhicules terrestres. Des effets similaires peuvent être appliqués aux véhicules aériens et spatiaux, mais les Maîtres de Jeu devront ajuster le raisonnement pour l'effet spécifique. Par exemple, un aéronef, au lieu de déraper, pourrait entrer en vrille.

De plus, le maniement inhérent à un véhicule peut avoir un impact supplémentaire sur le jet de Conduire. Le maniement est soit Facile, Standard, Difficile, Formidable ou Herculéen et détermine le point de départ du jet de Conduire lors de l'exécution d'une manœuvre. Le degré de difficulté de la manœuvre est ensuite appliqué au maniement pour déterminer la difficulté finale.

Par exemple, une moto haute performance possède des gyrostabiliseurs intégrés lui donnant un maniement Facile. Le conducteur veut effectuer un tête-à-queue de 180 degrés pour échapper à un poursuivant, une manœuvre que le Maître de Jeu évalue comme ayant un degré de difficulté supplémentaire. Le conducteur doit donc effectuer son jet de Conduire en difficulté Standard au lieu de Facile. S'il avait tenté la même manœuvre sur une moto non stabilisée, le jet de Conduire aurait été en difficulté Difficile.

Le Maniement supérieur est un trait. Si un véhicule ne possède pas ce trait dans sa description, le maniement par défaut est Standard pour tout véhicule de taille Grande ou inférieure. Les véhicules Gigantesques et Énormes possèdent intrinsèquement le trait de maniement Formidable et Herculéen, respectivement, et le Maître de Jeu est libre de décider que certaines manœuvres sont tout simplement impossibles à réaliser en raison de la taille du véhicule.

##### Tableau de perte de contrôle

| 1d100 | Résultat |
| :-: | :-- |
| 01-25 | Embardée. La perte de contrôle est temporaire. Le véhicule diminue sa vitesse d'un cran pendant 5 secondes. |
| 26-40 | Dérapage. Le conducteur doit lutter pour garder le contrôle du véhicule. Le véhicule diminue sa vitesse de 2 crans pendant 10 secondes. |
| 41-50 | Dérapage sévère. Le véhicule finit dans la mauvaise direction et à l'arrêt pendant 15 secondes. |
| 51-60 | Tonneau. Le véhicule dérape et fait des tonneaux, subissant 3d10 de dégâts à sa Structure. Les occupants doivent réussir des jets d'Endurance ou subir 1d10 de dégâts sur 1d3 localisations. |
| 61-70 | Tonneau sévère. Comme ci-dessus, mais le véhicule subit 3d10+10 dégâts et les occupants reçoivent 1d10 de dégâts même si le jet d'Endurance réussit, et 2d10 s'il échoue. |
| 71-80 | Épave. Comme ci-dessus mais le véhicule est réduit à 0 Structure. Les occupants subissent les mêmes dégâts que pour un Tonneau sévère. |
| 81-90 | Explosion. Comme ci-dessus mais le système de carburant du véhicule s'enflamme et explose dans les 1d20+10 secondes. S'ils ne peuvent pas s'en extraire, les occupants subissent 1d6 points de dégâts de brûlure supplémentaires sur 1d6 localisations. |
| 91-98 | Explosion immédiate. Comme ci-dessus mais l'explosion est immédiate. |
| 99-00 | Accident catastrophique. Les occupants doivent réussir un jet d'Endurance ou être tués instantanément. Les dégâts sont ceux d'une Épave, quel que soit le résultat. |


---
## Exemples de véhicules

---

### Véhicules terrestres

#### Intercepteur

Une voiture de luxe, une voiture de sport ou un véhicule similaire boosté, cette voiture est construite pour aller vite et rendre coup pour coup dans une bataille. C'est le genre de véhicule auquel les gens pensent quand quelqu'un dit « voiture d'espion ».

| Intercepteur | |
| :- | :- |
| **Taille / Type** | Moyen Militaire |
| **Coque** | 6 |
| **Structure** | 40 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniement** | Facile |
| **Traits** | [Siège éjectable](0006_Vehicles.md?id=ejector-seat), [Performance améliorée](0006_Vehicles.md?id=enhanced-performance), [Maniement supérieur](0006_Vehicles.md?id=superior-handling), [Suite de surveillance](0006_Vehicles.md?id=surveillance-suite), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Distributeur de taches d'huile, distributeur de fumigènes, mitrailleuses moyennes jumelées (2d6+3) |

<br>

---

#### Moto de poursuite

Moto légère et rapide pour les poursuites rapides, la moto de poursuite réserve une surprise : soit une paire de mitrailleuses jumelées, soit deux roquettes.

| Moto de poursuite | |
| :- | :- |
| **Taille / Type** | Petit Civil |
| **Coque** | 2 |
| **Structure** | 12 |
| **Systèmes** | 1 |
| **Vitesse** | Rapide |
| **Maniement** | Facile |
| **Traits** | [Maniement supérieur](0006_Vehicles.md?id=superior-handling), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Deux roquettes (4d6) ou mitrailleuses légères jumelées (2d6) |

<br>

---

#### Berline

Une berline 4 portes standard offrant suffisamment d'espace pour asseoir confortablement un conducteur et trois passagers. Sacrifie l'espace de chargement pour intégrer une suite de surveillance.

| Berline | |
| :- | :- |
| **Taille / Type** | Moyen Civil |
| **Coque** | 4 |
| **Structure** | 25 |
| **Systèmes** | 2 |
| **Vitesse** | Vive |
| **Maniement** | Standard |
| **Traits** | [Discret](0006_Vehicles.md?id=unobtrusive), [Suite de surveillance](0006_Vehicles.md?id=surveillance-suite) |
| **Armes** | Aucune |

<br>

---

#### Voiture submersible

Une voiture pour deux personnes pouvant passer en mode nautique ou submersible pour voyager sur ou sous l'eau. Livrée avec une torpille montée à l'avant et un missile sol-air monté sur le toit.

| Voiture submersible | |
| :- | :- |
| **Taille / Type** | Moyen Civil |
| **Coque** | 6 |
| **Structure** | 25 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniement** | Standard |
| **Traits** | [Performance améliorée](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Amphibie](0006_Vehicles.md?id=waterborne), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Roquette (5d6), Torpille (4d10) |

<br>

---

#### Van de surveillance

Un van banal, sans signes distinctifs, abritant une équipe d'agents et une suite d'équipements d'enregistrement audio-visuel.

| Van de surveillance | |
| :- | :- |
| **Taille / Type** | Grand Civil |
| **Coque** | 9 |
| **Structure** | 60 |
| **Systèmes** | 3 |
| **Vitesse** | Douce |
| **Maniement** | Standard |
| **Traits** | [Suite de surveillance](0006_Vehicles.md?id=surveillance-suite), [Résistant](0006_Vehicles.md?id=tough) |
| **Armes** | Aucune |

<br>

---

#### Véhicule de soutien tactique

Un pick-up ou une jeep avec de la place pour une équipe de deux personnes dans la cabine et un tireur debout à l'arrière, maniant une mitrailleuse moyenne montée sur pivot.

| Véhicule de soutien tactique | |
| :- | :- |
| **Taille / Type** | Moyen Civil |
| **Coque** | 6 |
| **Structure** | 30 |
| **Systèmes** | 2 |
| **Vitesse** | Vive |
| **Maniement** | Standard |
| **Traits** | [Tout-terrain](0006_Vehicles.md?id=all-terrain), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Mitrailleuse moyenne montée (2d6) |


<br>

---

### Embarcations

#### Vedette rapide

Une vedette rapide typique, armée d'un distributeur de mines monté à l'arrière.

| Vedette rapide | |
| :- | :- |
| **Taille / Type** | Moyen Civil |
| **Coque** | 3 |
| **Structure** | 24 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniement** | Standard |
| **Traits** | [Performance améliorée](0006_Vehicles.md?id=enhanced-performance), [Amphibie](0006_Vehicles.md?id=waterborne), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Distributeur de mines (5d6) |

<br>

---

#### Yacht

Le genre de yacht de luxe qu'un oligarque pourrait posséder. Probablement équipé d'une suite de surveillance pour se protéger contre des ennemis tentant de manigancer quelque chose.

| Yacht | |
| :- | :- |
| **Taille / Type** | Gigantesque Civil |
| **Coque** | 10 |
| **Structure** | 75 |
| **Systèmes** | 4 |
| **Vitesse** | Lente |
| **Maniement** | Formidable |
| **Traits** | [Luxueux](0006_Vehicles.md?id=luxurious), [Suite de surveillance](0006_Vehicles.md?id=surveillance-suite), [Amphibie](0006_Vehicles.md?id=waterborne) |
| **Armes** | Aucune |


<br>

---

### Aéronefs/Vaisseaux spatiaux

#### Dirigeable (Paquebot aérien civil)

Similaire au Hindenburg, cette classe de dirigeable transcontinental (et d'autres de sa classe) mesure 245 mètres de long et nécessite un équipage de 40 à 61 personnes. Il peut généralement transporter un complément de 50 à 72 passagers dans des hébergements de luxe.

| Dirigeable | |
| :- | :- |
| **Taille / Type** | Énorme Civil |
| **Coque** | 10 |
| **Structure** | 85 |
| **Systèmes** | 5 |
| **Vitesse** | Pesante |
| **Maniement** | Herculéen |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Luxueux](0006_Vehicles.md?id=luxurious), [ADAV](0006_Vehicles.md?id=vtol) |
| **Boucliers** | Aucun |
| **Armes** | Aucune |

<br>

---

#### Hélicoptère d'assaut

L'hélicoptère d'assaut traditionnel utilise sa technologie de surveillance avancée pour intercepter les signaux téléphoniques et Internet sans fil, et traquer les individus et les véhicules même dans l'obscurité, grâce au FLIR. Les tentatives pour échapper au traqueur via la Furtivité sont de difficulté Formidable.

| Hélicoptère d'assaut | |
| :- | :- |
| **Taille / Type** | Grand Militaire |
| **Coque** | 11 |
| **Structure** | 50 |
| **Systèmes** | 3 |
| **Vitesse** | Modérée |
| **Maniement** | Facile |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Performance améliorée](0006_Vehicles.md?id=enhanced-performance), [Furtivité](0006_Vehicles.md?id=stealth), [Maniement supérieur](0006_Vehicles.md?id=superior-handling), [Suite de surveillance](0006_Vehicles.md?id=surveillance-suite), [ADAV](0006_Vehicles.md?id=vtol) |
| **Boucliers** | Aucun |
| **Armes** | 1 Gatling (3d6), 4 roquettes (5d6) |

<br>

---

#### Chasseur multi-rôle

Ce chasseur biplace basé au sol (similaire au De Havilland Mosquito) est bien connu pour ses performances et sa polyvalence. Sa soute à bombes est capable de transporter soit deux bombes de 250 livres (considérées comme des missiles moyens avec une portée de 0), soit une seule torpille.

| Chasseur multi-rôle | |
| :- | :- |
| **Taille / Type** | Grand Militaire |
| **Coque** | 10 |
| **Structure** | 45 |
| **Systèmes** | 3 |
| **Vitesse** | Modérée |
| **Maniement** | Standard |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Performance améliorée](0006_Vehicles.md?id=enhanced-performance) |
| **Boucliers** | Aucun |
| **Armes** | 4 Gatlings montées sur le nez (4d6+3), 1 soute à bombes (6d10 - voir description) |

<br>

---

#### Cargo interstellaire (Transport léger haute technologie)

Ce transport léger nécessite un équipage minimum de seulement deux personnes, avec de la place pour jusqu'à quatre passagers supplémentaires. La version standard est notée ici, cependant de nombreux propriétaires appliqueront leurs propres « modifications spéciales » telles qu'un espace de chargement dissimulé, des performances améliorées, un maniement supérieur, une résistance aux IEM, la furtivité, etc.

| Cargo interstellaire | |
| :- | :- |
| **Taille / Type** | Moyen Vaisseau spatial civil |
| **Coque** | 10 |
| **Structure** | 80 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide (Facteur parsec de 3) |
| **Maniement** | Standard |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Vaisseau spatial](0006_Vehicles.md?id=space-craft), [ADAV](0006_Vehicles.md?id=vtol) |
| **Boucliers** | 8 |
| **Armes** | 2x Tourelles de canons laser quadruples (5d6) |


<br>

---

#### Unité de contact général (Vaisseau spatial ultra haute technologie)

Ce vaisseau spatial extrêmement haute technologie est la représentation physique d'une Intelligence artificielle très avancée, qui prend la forme d'une série de modules connectés par champ de deux kilomètres de long. Les modules ont des objectifs individuels et comprennent des habitats, des installations de construction, des zones de chargement, la transformation alimentaire, des complexes de loisirs, des hangars, et même certaines unités secrètes dont l'intelligence du vaisseau parle rarement, voire jamais. Il n'a besoin d'aucun équipage humain, mais peut supporter une population de passagers allant jusqu'à 100 000 personnes sans difficulté. De nombreux passagers naissent et meurent à bord de l'Unité de contact : beaucoup sont transitoires, allant et venant comme ils le souhaitent.

| Unité de contact général | |
| :- | :- |
| **Taille / Type** | Colossal Vaisseau spatial civil |
| **Coque** | 20 |
| **Structure** | 10 000 |
| **Systèmes** | 6 |
| **Vitesse** | Modérée (Facteur parsec de 4. À ce niveau technologique, un Facteur équivaut à 1 heure) |
| **Maniement** | Formidable |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Porteur](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxueux](0006_Vehicles.md?id=luxurious), [Vaisseau spatial](0006_Vehicles.md?id=space-craft), [Maniement supérieur](0006_Vehicles.md?id=superior-handling), [Rayon tracteur](0006_Vehicles.md?id=tractor-beam) |
| **Boucliers** | 30 |
| **Armes** | Aucune dont il souhaite discuter |

<br>