# Véhicules

Les véhicules dans _Mythras Imperative_ sont traités de manière semi-abstraite. Essentiellement, ce sont des outils de second plan, utilisés pour amener les Personnages d'un point A à un point B, sans grand besoin de description détaillée ou de statistiques. Cependant, il arrive que les Maîtres de Jeu aient besoin de détails sur les véhicules lorsqu'il est nécessaire de les représenter lors de courses-poursuites ou de situations de combat.

Les règles de cette section permettent de représenter la plupart des types de véhicules, mais de manière abstraite, dans le but d'offrir de la flexibilité et d'améliorer la narration. Les vaisseaux spatiaux sont un peu différents, bien qu'ils soient basés sur des principes similaires.

---
## Statistiques

Tous les véhicules sont décrits en termes de Structure, Coque, Vitesse, Systèmes, Traits et Boucliers (s'ils sont présents dans l'univers de jeu).

- **[Taille](0006_Vehicles.md?id=vehicle-size-table) :** Tous les véhicules ont l'une des six classifications de Taille qui détermine la valeur ou la plage du reste des caractéristiques. En raison de leur taille intrinsèque plus grande et des environnements hostiles de l'espace, les vaisseaux spatiaux ont leur propre gamme de valeurs.
- **[Coque](0006_Vehicles.md?id=terrestrial-hulls) :** Représente les points d'Armure.
- **[Structure](0006_Vehicles.md?id=terrestrial-hulls) :** Représente les points de vie d'un véhicule.
- **[Boucliers](0006_Vehicles.md?id=shields) :** Dans les univers avec une technologie avancée de manipulation de l'énergie, des boucliers peuvent être présents pour protéger le véhicule, mais ils peuvent s'éroder sous un feu soutenu.
- **[Systèmes](0006_Vehicles.md?id=systems) :** Représentent les composants vitaux du véhicule, notamment la centrale énergétique, la section d'équipage, etc.
- **[Vitesse](0006_Vehicles.md?id=speed) :** Chaque véhicule possède un indice de Vitesse de base.
- **[Traits](0006_Vehicles.md?id=traits) :** Un véhicule peut également posséder un ou plusieurs Traits. Les Traits, tout comme les Capacités attribuées aux Créatures dans les règles de _Mythras Imperative_ ou les Traits de Styles de Combat, offrent une description de jeu et un avantage supplémentaires, reflétant la nature du véhicule.
- **[Armes](0006_Vehicles.md?id=weapons) :** Tout comme les Traits, un véhicule peut être équipé d'armes selon ce que l'univers permet. Quelques exemples et valeurs suggérés sont détaillés ci-dessous.


---
### Taille de la Coque, Type et Structure

La taille et le but d'un véhicule affectent l'épaisseur de sa coque et la résilience de sa structure interne. Une moto, par exemple, a une coque minimale, construite pour la vitesse et l'agilité. Un Cuirassé Terrestre (un énorme mastodonte blindé, à chenilles ou à roues, propulsé par des moteurs à vapeur ou diesel), étant un véhicule beaucoup plus grand conçu pour le champ de bataille, possède une coque beaucoup plus importante. Les tailles comparatives des coques (et combien de coups d'armes elles peuvent généralement supporter) sont résumées dans les tableaux Taille du Véhicule et Coque ci-dessous.

Chaque fois qu'un véhicule subit des dommages, les dégâts entrants sont réduits par sa valeur de Coque. Tout dommage restant est soustrait des points de Structure du véhicule et a un pourcentage de chance, égal aux dégâts pénétrants, d'affecter un Système. Si le véhicule est réduit à zéro point de Structure, il est soit totalement détruit, soit si gravement endommagé qu'il doit être mis à la casse.

##### Coques Terrestres

| Taille | Structure | Valeur de Coque Civile | Valeur de Coque Militaire | Exemple |
| :-- | :-: | :-: | :-: | :-- |
| Petit | 1-20 | 1-3 | 4-6 | Moto, moto avec side-car, voiture compacte ou sous-compacte, canoë, kayak, barque |
| Moyen | 21-40 | 1-6 | 7-9 | Berline, fourgonnette, pickup, voiture de luxe, voiture de sport de luxe, muscle car, limousine, canot de sauvetage, hors-bord, deltaplane, autogire |
| Grand | 41-60 | 4-9 | 10-12 | Camion/poids lourd, limousine allongée, SUV, bus, monospace, avion personnel, planeur, yacht de plaisance, char, hélicoptère, sous-marin |
| Énorme | 61-80 | 7-12 | 13-15 | Semi-remorque, avion de ligne, jet, navire des garde-côtes, yacht |
| Colossal | 81-100 | 10-15 | 16-18 | Train, paquebot, navire de guerre |

##### Coques de Vaisseaux Spatiaux

| Taille | Structure | Valeur de Coque Civile | Valeur de Coque Militaire | Exemple |
| :-- | :-: | :-: | :-: | :-- |
| Petit | 10-50 | 4-9 | 10-12 | Chasseur monoplace |
| Moyen | 51-150 | 7-12 | 13-15 | Cargo léger, navette |
| Grand | 151-450 | 10-15 | 16-18 | Cargo lourd, croiseur |
| Énorme | 451-1350 | 13-18 | 19-21 | Frégate d'escorte, croiseur de bataille léger |
| Colossal | 1351-4050 | 16-21 | 21-24 | Vaisseau générationnel, croiseur de bataille lourd |
| Titan | 4050-12110 | 19-24 | 24-30 | Habitat orbital, station de combat capable de détruire une planète |


---
### Boucliers

Les boucliers déflecteurs fournissent une couche de protection supplémentaire pour les véhicules qui peuvent en être équipés. Les boucliers fonctionnent légèrement différemment de la Coque, en raison de leur nature ablative. Si les dégâts entrants sont égaux ou inférieurs à la valeur des boucliers, ils sont totalement bloqués. Si les dégâts dépassent la valeur du bouclier, l'excédent réduit la force du bouclier de ce montant.

_Par exemple, un transport de troupes a une force de bouclier énergétique de 12 points. Si le transport est touché par un laser infligeant 11 points de dégâts, ceux-ci ne pénètrent pas et n'ont aucun effet supplémentaire. En revanche, si le transport est touché par une explosion infligeant 15 points de dégâts, les trois points excédentaires réduiraient la force du bouclier à 9._

Une fois que la force d'un bouclier déflecteur tombe à zéro, il s'effondre. Tout dommage restant est appliqué à la coque.

---
### Systèmes

Chaque fois qu'un véhicule subit des dégâts qui pénètrent sa coque, il y a une chance, égale aux dégâts pénétrants, qu'un Système vital ait été touché.

_Par exemple, 10 points de dégâts sont appliqués à un hors-bord - un véhicule avec 3 de Coque et 24 de Structure. La Coque compte comme une armure réduisant les dégâts à 7. Ces points sont retirés des 24 points de Structure et il y a 7 % de chances d'endommager l'un des Systèmes du véhicule._

Les dégâts qu'un Système peut subir sont basés uniquement sur la taille du véhicule. Cela est modélisé par le nombre de coups qu'un Système peut encaisser, plutôt que par le montant réel des dégâts. Un seul coup sur un système de véhicule Petit détruira instantanément ce Système. Il faut deux coups pour démolir les systèmes d'un véhicule de taille Moyenne, trois pour un véhicule Grand, et ainsi de suite. Voir le [Tableau des Dégâts aux Systèmes](0006_Vehicles.md?id=system-damage-table) ci-dessous.

Les systèmes endommagés, mais pas encore détruits, subissent une perte de fonction proportionnelle au nombre de coups reçus - soit une réduction en pourcentage, soit une pénalité de Degré aux tâches du Système. L'effet spécifique dépend de ce que le sous-système contrôle, comme détaillé dans le [Tableau des Dégâts aux Composants du Système](0006_Vehicles.md?id=system-component-damage-table) ci-dessous. Selon le Système touché, les effets peuvent être catastrophiques.

_Par exemple, un Cuirassé Terrestre - un véhicule Énorme avec 5 Coups de Système - touché deux fois à la Propulsion perdrait 40 % de sa puissance et réduirait sa Vitesse Lente de deux Degrés pour devenir Pesante. De même, un cargo Grand - avec 3 Coups de Système - recevant deux coups sur le Système Moteur/Carburant aurait une pénalité de deux Degrés à la Vitesse ainsi qu'à l'utilisation des systèmes électroniques. Un troisième coup détruirait le Système Moteur/Carburant et le navire avec._


<details>

<summary>* Errata de la Communauté</summary>

---

#### Dégâts


_Le texte original ici était initialement plus éloigné. Placé directement après la section Systèmes, il répète inutilement le paragraphe précédent._

- _"Les dégâts qui dépassent la Coque pénètrent le véhicule, endommageant la Structure et impactant possiblement un ou plusieurs systèmes. Selon la taille du véhicule, les dégâts peuvent être mineurs ou catastrophiques._
- _Par exemple, un véhicule Grand peut subir jusqu'à deux coups sur un système comme sa Propulsion. Le troisième coup détruit fonctionnellement la Propulsion. Chaque fois que le système subit un coup, il perd soit un pourcentage de sa fonction comme décrit dans la colonne "Perte par Coup" du Tableau des Dégâts aux Systèmes ci-dessous, soit une fonction principale (comme la Propulsion, le Pilotage, les Communications, etc.) devient plus difficile d'un Degré de Difficulté par coup subi."_

_Les paragraphes ci-dessus sont supprimés et une modification résumée est ajoutée, mentionnant un autre exemple d'effet de Système._

---

</details>

##### Tableau des Dégâts aux Systèmes

| Taille | Coups de Système | Perte par Coup |
| :-- | :-: | :-- |
| Petit | 1 | 100 % - Détruit |
| Moyen | 2 | 1 Degré ou 50 % |
| Grand | 3 | 1 Degré ou 33 % |
| Énorme | 4 | 1 Degré ou 25 % |
| Colossal | 5 | 1 Degré ou 20 % |
| Titan | 6 | 1 Degré ou 16 % |


<details>

<summary>* Errata de la Communauté</summary>

---

##### Tableau des Dégâts aux Systèmes (Original) 

| Taille | Coups de Système | Perte par Coup |
| :-- | :-: | :-- |
| Petit | 1 | 1 Degré ou 50 % |
| Moyen | 2 | 1 Degré ou 33 % |
| Grand | 3 | 1 Degré ou 25 % |
| Énorme | 4 | 1 Degré ou 20 % |
| Colossal | 5 | 1 Degré ou 16 % |
| Titan | 6 | 1 Degré ou 10 % |

##### Tableau de Taille des Véhicules (issu de [Taille de la Coque, Type et Structure](0006_Vehicles.md?id=hull-size-type-and-structure))

| Taille | Coups de Système |
| :-- | :-: |
| Petit | 1 |
| Moyen | 2 |
| Grand | 3 |
| Énorme | 4 |
| Colossal | 5 |
| Titan | 6 |

_Les règles et exemples originaux sont incohérents :_
- _"Les systèmes qui sont endommagés, mais pas encore détruits, subissent une perte de fonctionnalité. Cela est égal à la proportion des coups actuels sur sa capacité totale. Ainsi, un véhicule Énorme touché deux fois à la Propulsion perdrait 40 % de sa puissance (2 coups sur un maximum de 5)."_
   - _Cela suggère que le véhicule Énorme présenté avec 5 Coups de Système devrait perdre 20 % à chaque coup - mais le tableau indique 16 %._
- _"Par exemple, un véhicule Grand peut subir jusqu'à trois coups sur un système tel que sa Propulsion. Le quatrième coup détruit fonctionnellement la Propulsion."_
  - _"Cela suggère - tout comme le tableau - 25 % de dégâts par Coup de Système, mais les véhicules Grands ne peuvent subir que 3 Coups de Système selon le même tableau._
- _Bien que ce ne soit pas incohérent, le Tableau de Taille des Véhicules était redondant ; il apparaît à nouveau sous une forme plus complète (ajoutant la colonne Perte par Coup) quelques lignes plus loin._

_Cela rend difficile l'application d'une règle cohérente. Pour résoudre ces problèmes, les valeurs et les exemples ont été modifiés pour correspondre et le Tableau de Taille des Véhicules a été supprimé._

---

</details>


##### Tableau des Dégâts aux Composants du Système

| 1d10 | Système | Résultat Endommagé | Résultat Détruit |
| :-: | :-- | :-- | :-- |
| 1 | Cargaison | Une quantité de possessions ou d'équipement stockée dans la soute, proportionnelle aux dégâts, est détruite. | Toute la cargaison est détruite. |
| 2 | Comms | Les jets de Comms subissent un Degré de Difficulté supplémentaire à chaque fois qu'ils sont endommagés. | Le véhicule ne peut plus communiquer ni leurrer les capteurs ennemis. |
| 3 | Commandes | Les jets de Navigation, Conduite ou Pilotage subissent un Degré de Difficulté supplémentaire à chaque fois qu'ils sont endommagés ; jet de Conduite immédiat requis. | Le véhicule ne peut plus être dirigé ni changer de cap. |
| 4 | Propulsion | Vitesse réduite d'un montant proportionnel aux dégâts. | Le véhicule s'arrête net ; les avions s'écrasent. |
| 5 | Équipage | Un nombre de passagers proportionnel aux dégâts devient des victimes. Ceux affectés subissent une Blessure Majeure et doivent réussir un jet de Constitution ou être tués instantanément. | Les occupants du véhicule meurent. |
| 6 | Moteur / Carburant | Vitesse réduite d'un montant proportionnel aux dégâts. Systèmes électroniques plus difficiles à utiliser d'un Degré de Difficulté. | Le véhicule est détruit dans une explosion désastreuse. |
| 7 | Capteurs | Les jets de Capteurs, Navigation et Attaque d'Armes subissent un Degré de Difficulté supplémentaire à chaque fois qu'ils sont endommagés. | Le véhicule devient aveugle. |
| 8 | Armes | Un nombre de systèmes d'armes proportionnel aux dégâts devient inopérant. | Le véhicule ne peut plus tirer avec ses armes. |
| 9-0 | Aucun | Aucun système touché ; seulement des dégâts de Structure. | N/A |

<details>

<summary>* Errata de la Communauté</summary>

---

##### Tableau des Dégâts aux Composants du Système (Moteur/Carburant)

_Le résultat original était le suivant : "La Vitesse Maximale est réduite de moitié..." Cela contredit la règle générale des pénalités de dégâts proportionnelles aux dégâts du Système : 25 % de dégâts = 25 % de pénalité. De plus, les règles complètes dans le Mythras Companion ne mentionnent pas cette réduction de moitié de la Vitesse._

_Par conséquent, le texte est remplacé par la même entrée que pour les Systèmes de Propulsion : "Vitesse réduite d'un montant proportionnel aux dégâts."_

---

</details>


---
### Vitesse

Comme les lois physiques de la vélocité, de l'accélération, de la traînée et de l'inertie (pour ne citer qu'elles) sont des questions complexes, une certaine simplification est nécessaire ; les véhicules reçoivent donc un indice de Vitesse abstrait. La caractéristique de Vitesse ne devrait être utilisée que pour juger approximativement si un véhicule peut en rattraper ou en dépasser un autre.

L'indice de vitesse représente le taux opérationnel nominal d'un véhicule. Dans les situations d'urgence, cette performance peut être augmentée d'un cran, au risque d'usure ou de dommages aux moteurs. Bien que le même tableau soit utilisé pour tous les types de véhicules, le bon sens doit prévaloir pour ne comparer que des véhicules de la même classe. Par exemple, si un vaisseau spatial et une voiture de sport ont tous deux le même taux d'accélération de Rapide, il est évident que le vaisseau spatial est comparativement plus rapide.

Augmenter la Vitesse d'un véhicule au-delà de sa valeur Standard est possible avec un jet de Conduite réussi. Habituellement, cette vitesse supplémentaire n'est durable que pour une courte période – pas plus de 1d6 minutes avant que le véhicule ne doive redescendre à sa vitesse Standard sous peine d'endommager sa centrale énergétique. Un jet de Conduite critique permet de prolonger la période de haute vitesse jusqu'à 1d12 minutes.

Un conducteur peut tenter de pousser la vitesse d'un véhicule de 2 crans, mais cela nécessite un jet de Conduite Herculéen et le maximum que le véhicule peut maintenir à cette vitesse est de 1d3 minutes : un Succès Critique ne prolongera pas la durée de cette vitesse augmentée.

##### Tableau des Indices de Vitesse

| Indice de Vitesse | Vitesse Max Pour |
| :-- | :-: |
| Pesant | Énorme |
| Lourd | |
| Lent | Grand |
| Médiocre | |
| Modéré | Moyen |
| Rapide | |
| Vif | Petit |
| Très Rapide | |
| Fulgurant | |


---
### Traits

Le nombre maximum de traits qu'un véhicule peut posséder dépend de la taille et du type de coque.

Chaque véhicule possède un trait inhérent : le mode de déplacement pour lequel il a été principalement conçu. Par conséquent, les avions détiennent intrinsèquement le trait Aérien, les bateaux le trait Maritime, et ainsi de suite. Ce trait inhérent ne compte pas dans le nombre de traits disponibles. Cependant, si un véhicule devait inclure un second mode de déplacement — un sous-marin volant par exemple —, alors le trait Aérien devrait être choisi comme l'un de ses traits disponibles.

Certains traits peuvent ne pas être disponibles selon le niveau technologique de l'univers ; les Maîtres de Jeu doivent juger eux-mêmes quels traits peuvent être appliqués.

##### Tableau d'Allocation des Traits de Véhicule

| Taille | Traits Max |
| :-- | :-: |
| Petit | 1 |
| Moyen | 2 |
| Grand | 3 |
| Énorme | 4 |
| Colossal | 5 |
| Titan | 6 |

#### Aérien

Le véhicule est capable de vol atmosphérique.

#### Tout Terrain

Ce Trait doit être utilisé avec les véhicules Terrestres. Le véhicule peut traverser des terrains inhospitaliers, difficiles et escarpés, en utilisant soit des chenilles, soit des systèmes de suspension et de transmission avancés, ou des différentiels de puissance puissants.

#### Fouisseur

Le véhicule est conçu pour creuser et créer des tunnels dans le sol. Il peut atteindre une profondeur maximale égale à sa valeur de Coque x5 mètres.

#### Camouflé

Le véhicule possède soit une peinture de camouflage, soit des capteurs mimétiques qui lui permettent de se fondre dans son environnement. Les tentatives pour repérer visuellement le véhicule sont plus difficiles d'un Degré.

#### Cargaison

Le véhicule est conçu spécifiquement pour transporter du fret plutôt que des passagers. Les compartiments passagers sont réduits au minimum, le reste de l'espace utilisable du véhicule étant consacré au stockage de marchandises avec des sections appropriées, des outils, et même un conditionnement environnemental (comme des sections de congélation pour transporter des denrées périssables). Lorsqu'il est chargé de fret, la vitesse du véhicule est inférieure de deux crans à ce que sa taille de coque permettrait normalement.

#### Porte-aéronef

Le véhicule est conçu spécifiquement pour transporter des véhicules plus petits, avec un équipage léger, ou éventuellement télécommandés, de nature civile ou militaire. Tout véhicule possédant ce trait doit être au moins Énorme. Le nombre de petits engins transportés peut varier selon le type de mission et le but, mais peut aller de 10 jusqu'au nombre de la valeur de Structure du véhicule.

#### Construction

Le véhicule est équipé pour les travaux de construction lourds. Tous les véhicules avec ce trait possèdent également le trait Tout Terrain, mais leur vitesse est inférieure de deux crans à ce que leur taille de coque permettrait normalement. Le véhicule est équipé d'outils adaptés à la tâche tels que des flèches de grue, des pelles mécaniques, des bennes basculantes, etc.

#### Résistant aux IEM

Le véhicule est protégé contre les attaques par impulsion électromagnétique.

#### Performance Améliorée

L'indice de Vitesse du véhicule est d'un cran supérieur au maximum pour sa taille.

#### Siège Éjectable

En cas d'urgence, un siège éjectable propulse les occupants à plusieurs centaines de mètres dans les airs, puis déploie un parachute pour permettre un atterrissage en toute sécurité. Le parachute est optionnel. Non recommandé pour les hélicoptères (le Kamov Ka-52 Alligator étant une exception notable).

#### FTL (Voyage supraluminique)

Vaisseaux Spatiaux uniquement. Le vaisseau est équipé d'un moteur supraluminique (qu'il s'agisse d'un hyperdrive, d'un moteur de distorsion, d'un générateur de trou de ver ou similaire). Le moteur FTL possède un indice de Vitesse distinct qui mesure essentiellement le taux auquel un vaisseau peut traverser un parsec (3,26 années-lumière, ou 31 000 milliards de kilomètres), comme suit :

##### Tableau de Vitesse FTL

| Indice de Vitesse | Facteur pour Traverser 1 Parsec |
| :-- | :-: |
| Pesant | 10 |
| Lourd | 8 |
| Lent | 7 |
| Médiocre | 6 |
| Modéré | 5 |
| Rapide | 4 |
| Vif | 3 |
| Très Rapide | 2 |
| Fulgurant | 1 |

Le facteur temporel est à la discrétion du Maître de Jeu, en fonction du niveau de développement de la technologie FTL dans l'univers. Par exemple, le facteur de base pourrait être de 1 jour, ce qui signifie qu'un vaisseau avec un moteur FTL Pesant met 10 jours pour terminer le voyage, tandis qu'un vaisseau avec un moteur FTL Fulgurant termine le trajet en 1 jour. Ailleurs, là où la technologie FTL est nettement moins efficace, le facteur temporel pourrait se mesurer en mois plutôt qu'en jours.

Il est supposé que le vaisseau dispose de réserves de carburant pour effectuer un voyage de retour ou d'un moyen de se ravitailler au point de destination.

On suppose que toute taille de vaisseau spatial peut être équipée d'un moteur FTL, bien que, encore une fois, cela dépende de l'univers.

Les moteurs FTL ne peuvent pas être activés à moins de 1,5 Unité Astronomique d'une étoile (environ 225 millions de kilomètres). Cela signifie que les vaisseaux doivent utiliser un moteur subluminique pour s'éloigner d'une distance comparable à celle de Mars avant d'activer le système FTL.

#### Véhicule Terrestre

Le véhicule est capable de voyager sur terre.

#### Sustentation (Hover)

Le véhicule survole le sol en utilisant soit un coussin d'air, soit un répulseur antigravité.

#### Luxueux

Le véhicule est conçu spécifiquement pour transporter des passagers avec un certain niveau de luxe. L'espace excédentaire est consacré à des aménagements passagers luxueux, piscines, jacuzzis, personnel de bord supplémentaire pour répondre aux caprices des passagers, etc.

#### Rails

Le véhicule dépend d'un système de rails. Les véhicules avec ce trait peuvent naturellement atteindre un indice de Vitesse trois crans plus élevé que ce que leur taille de coque permettrait normalement, mais sont évidemment limités aux déplacements sur le système ferroviaire.

#### Résilient

Tous les systèmes peuvent supporter un coup de plus que ce qui est normalement déterminé par la Taille. Ce trait peut être cumulé — ainsi Résilient 2 indique que les systèmes peuvent supporter 2 coups de plus que d'habitude au coût de deux points de Trait.

#### Maritime

Le véhicule est capable de flotter sur l'eau.

#### Vaisseau Spatial

Le véhicule est scellé contre le vide et protégé contre les radiations cosmiques ; il peut, selon sa conception, être capable de quitter et de rentrer dans une atmosphère, et de maintenir un vol au sein de celle-ci.

#### Furtif

Avions uniquement. Le véhicule est conçu pour éviter d'être détecté par radar et autres systèmes de capteurs longue portée. Les tentatives pour repérer le véhicule à l'aide de capteurs électroniques sont plus difficiles d'un Degré.

#### Submersible

Le véhicule est capable de plonger sous la surface d'un océan jusqu'à une profondeur opérationnelle égale à sa valeur de Coque x10 mètres. La profondeur de rupture — le maximum absolu que le submersible peut atteindre sans être écrasé — est de 1,5 fois sa profondeur opérationnelle.

#### Manœuvrabilité Supérieure

La manœuvrabilité du véhicule est classée comme Facile.

#### Suite de Surveillance

Le véhicule est équipé d'un ordinateur de bord, d'une station de base radio, d'un récepteur pour les signaux d'appareils d'écoute et d'un appareil pour intercepter les signaux de smartphones à proximité dans un rayon de 100 mètres.#### Tough

Un véhicule civil doté de ce trait tire sa Coque de la colonne Militaire et possède automatiquement la Structure maximale. Un véhicule Militaire doté de ce Trait tire sa Coque et sa Structure de la ligne suivante vers le bas.

#### Rayon Tracteur

Vaisseau spatial uniquement. Le vaisseau est équipé d'un rayon tracteur capable d'enchaîner et d'attirer à lui des véhicules ayant un indice de coque inférieur de jusqu'à deux rangs au sien. Ainsi, un vaisseau spatial Immense pourrait attirer et retenir une coque jusqu'à la taille Moyenne.

#### VTOL

Décollage/atterrissage vertical. Ce trait est inhérent aux hélicoptères et aux véhicules similaires qui utilisent une combinaison de rotors pour produire de la portance. Lorsqu'il est appliqué à des aéronefs à voilure fixe, il indique l'utilisation de propulseurs fixes ou orientables pour contrôler l'attitude en vol, l'ascension et la descente.

#### Nautique

Le véhicule se propulse lui-même en utilisant des jambes articulées. La vitesse des véhicules Marcheurs est plafonnée à celle du mode Lent, quelle que soit leur Taille. Cependant, les Marcheurs peuvent être construits à des hauteurs qui seraient simplement instables pour des véhicules équipés d'autres moyens de locomotion.

Ce véhicule est capable de mouvement subaquatique.

#### Armé

Le véhicule a été adapté pour accueillir de l'armement. Les systèmes d'armes sont discutés ci-dessous dans la section [Armes](0006_Vehicles.md?id=weapons).


---
## Armes

Habituellement, seules les coques militaires sont conçues pour accueillir de l'armement (points d'ancrage, stockage de munitions, systèmes de contrôle). Le Trait « Armé » peut être pris pour des véhicules civils qui pourraient avoir des besoins en armement.

Le nombre maximum de systèmes d'armes qu'un véhicule peut supporter est égal à 1/10ème de ses Points de Structure (ainsi, un véhicule avec 40 de Structure pourrait supporter 4 systèmes d'armes, s'il s'agit d'un véhicule militaire, ou d'un véhicule civil Armé).

Les systèmes d'armes dépendent de la Taille du véhicule. Le type de système d'arme maximum pour différentes Tailles est indiqué dans les tableaux ci-dessous.


##### Tableau des Armes par Taille

| Taille | Terrestre | Vaisseau Spatial |
| :-- | :-- | :-- |
| Petit | Arme Légère (ex. Fusil d'assaut) | Arme Moyenne (ex. Mitrailleuse, Lance-roquettes) |
| Moyen | Arme Moyenne (ex. Mitrailleuse, Lance-roquettes) | Arme en Tourelle/Lourde (ex. Mitrailleuses jumelées lourdes, Mini-guns) |
| Grand | Arme en Tourelle/Lourde (ex. Mitrailleuses jumelées lourdes, Mini-guns) | Batterie d'Armes (ex. Artillerie de champ de bataille) |
| Immense | Batterie d'Armes (ex. Artillerie de champ de bataille) | Armes Avancées (ex. Systèmes de missiles) |
| Énorme | Armes Avancées (ex. Systèmes de missiles) | Armes à Montage Spinal (une seule) |
| Colossal | NA | Armes à Montage Spinal (jusqu'à 3) |

##### Exemple de Statistiques d'Armes
 
| Arme | Dégâts | Portée | Cadence de Tir | Munitions/Chargement |
| :-- | :-: | :-: | :-: | :-: |
| Canon 50 pouces | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Roquette | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Missile Moyen/Torpille | 6d10 | Portée max de 200km | 1 | 1/5 |
| Missile Large/Croisière | 6d10+10 | Portée max de 1000km | 1 | 1/10 |
| Canon Laser/Plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Canon Laser/Plasma Lourd | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Batterie d'Artillerie | 5d6+6 | Portée max de 50km | 1 | 1/5 |
| Batterie à Montage Spinal | 10d6+6 | Portée max de 20000km | 1 | 1/10 |

_Les portées sont données en mètres et en kilomètres._

_Les cadences de tir correspondent au coup par coup, au semi-automatique et au tir automatique._

_Les munitions correspondent à la capacité de tir avant d'avoir besoin d'être rechargé. Le chargement est le temps de rechargement en Rounds de Combat, en supposant qu'une équipe complète est disponible._

---
## Maniabilité et Manœuvres

Les manœuvres évasives ou soudaines nécessitent un jet de Conduite/Pilotage réussi pour garantir que le conducteur ou le pilote conserve le contrôle du véhicule. La plupart des véhicules sont conçus et construits pour résister aux contraintes et tensions occasionnelles, mais le Maître de Jeu peut décider qu'une manœuvre particulière nécessite un jet à un degré de difficulté plus élevé, selon son ambition. Un échec signifie que le contrôle du véhicule est perdu : lancez les dés sur le tableau de Perte de Contrôle.

Notez que le Tableau de Perte de Contrôle ne s'applique qu'aux véhicules terrestres. Des effets similaires peuvent être appliqués aux véhicules aériens et spatiaux, mais les Maîtres de Jeu devront ajuster le raisonnement pour l'effet spécifique. Par exemple, un aéronef, plutôt que de déraper, pourrait entrer en vrille.

De plus, la maniabilité inhérente d'un véhicule peut avoir un impact supplémentaire sur le jet de Conduite. La maniabilité est soit Facile, Standard, Difficile, Redoutable ou Herculéenne et détermine le point de départ du jet de Conduite lors de l'exécution d'une manœuvre. Le degré de difficulté de la manœuvre est ensuite appliqué à la maniabilité pour déterminer la difficulté finale.

Par exemple, une moto haute performance dispose de gyrostabiliseurs intégrés lui conférant une maniabilité Facile. Le conducteur souhaite effectuer un dérapage-virage à 180 degrés pour échapper à un poursuivant, une manœuvre que le Maître de Jeu évalue comme ayant un degré de difficulté supplémentaire. Le conducteur doit donc effectuer son jet de Conduite en Standard plutôt qu'en Facile. S'il avait tenté la même manœuvre sur une moto non stabilisée, le jet de Conduite aurait été en Difficile.

La Maniabilité Supérieure est un Trait. Si un véhicule n'a pas ce trait dans sa description, la valeur par défaut est une maniabilité Standard pour tout véhicule de taille Grande et inférieure. Les véhicules Immenses et Énormes possèdent intrinsèquement le trait de maniabilité Redoutable et Herculéen, respectivement, et le Maître de Jeu est libre de décider que certaines manœuvres sont tout simplement impossibles à réaliser en raison de la taille du véhicule.

##### Tableau de Perte de Contrôle 

| 1d100 | Résultat |
| :-: | :-- |
| 01-25 | Embardée. La perte de contrôle est temporaire. Le véhicule diminue sa vitesse de 1 cran pendant 5 secondes. |
| 26-40 | Dérapage. Le conducteur doit lutter pour garder le véhicule sous contrôle. Le véhicule diminue sa vitesse de 2 crans pendant 10 secondes. |
| 41-50 | Dérapage Sévère. Le véhicule se retrouve orienté dans la mauvaise direction et à l'arrêt pendant 15 secondes. |
| 51-60 | Tonneau. Le véhicule dérape et fait des tonneaux, subissant 3d10 points de dégâts à sa Structure. Les occupants doivent réussir des jets de Constitution ou subir 1d10 points de dégâts sur 1d3 Localisations des Coups. |
| 61-70 | Tonneau Sévère. Comme ci-dessus, mais le véhicule subit 3d10+10 dégâts et les Occupants reçoivent 1d10 dégâts même si le jet de Constitution réussit, et 2d10 s'il échoue. |
| 71-80 | Épave. Comme ci-dessus mais le véhicule est réduit à 0 Structure. Les occupants subissent les mêmes dégâts que pour un Tonneau Sévère. |
| 81-90 | Explosion. Comme ci-dessus mais le système de carburant du véhicule s'enflamme et explose en 1d20+10 secondes. S'ils ne parviennent pas à s'extraire, les occupants subissent 1d6 dégâts de brûlure supplémentaires sur 1d6 localisations. |
| 91-98 | Explosion Immédiate. Comme ci-dessus mais l'explosion est immédiate. |
| 99-00 | Crash Catastrophique. Les occupants doivent réussir un jet de Constitution ou être tués instantanément. Les dégâts sont ceux de l'Épave, quoi qu'il arrive. |


---
## Exemples de Véhicules

---

### Véhicules Terrestres

#### Intercepteur

Une voiture de luxe gonflée à bloc, une voiture de sport ou similaire, cette voiture est construite pour aller vite et rendre coup pour coup dans une bataille. C'est le genre de véhicule auquel les gens pensent quand quelqu'un dit « voiture d'espion ».

| Intercepteur | |
| :- | :- |
| **Taille / Type** | Moyen Militaire |
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

Une moto légère et rapide pour les poursuites rapides, la Moto de Poursuite transporte une surprise – soit une paire de mitrailleuses jumelées, soit deux roquettes.

| Moto de Poursuite | |
| :- | :- |
| **Taille / Type** | Petit Civil |
| **Coque** | 2 |
| **Structure** | 12 |
| **Systèmes** | 1 |
| **Vitesse** | Rapide |
| **Maniabilité** | Facile |
| **Traits** | [Maniabilité Supérieure](0006_Vehicles.md?id=superior-handling), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Deux roquettes (4d6) ou mitrailleuses légères jumelées (2d6) |

<br>

---

#### Berline

Une berline 4 portes Standard offrant assez d'espace pour asseoir confortablement un conducteur et trois passagers. Sacrifie de l'espace de chargement pour intégrer une suite de surveillance.

| Berline | |
| :- | :- |
| **Taille / Type** | Moyen Civil |
| **Coque** | 4 |
| **Structure** | 25 |
| **Systèmes** | 2 |
| **Vitesse** | Très Rapide |
| **Maniabilité** | Standard |
| **Traits** | [Discret](0006_Vehicles.md?id=unobtrusive), [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite) |
| **Armes** | Aucune |

<br>

---

#### Voiture Submersible

Une voiture pour deux personnes qui peut passer en mode nautique ou submersible pour voyager sur ou sous l'eau. Livrée avec une torpille montée à l'avant et un missile sol-air monté sur le toit.

| Voiture Submersible | |
| :- | :- |
| **Taille / Type** | Moyen Civil |
| **Coque** | 6 |
| **Structure** | 25 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniabilité** | Standard |
| **Traits** | [Performance Améliorée](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Nautique](0006_Vehicles.md?id=waterborne), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Roquette (5d6), Torpille (4d10) |

<br>

---

#### Fourgon de Surveillance

Un fourgon ordinaire, sans marquage, abritant une équipe d'agents et une suite d'équipements d'enregistrement audiovisuel.

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

Un pick-up ou une jeep avec de la place pour un équipage de deux personnes dans la cabine et un tireur debout dans la zone de chargement, opérant une mitrailleuse moyenne montée sur pivot.

| Véhicule de Soutien Tactique | |
| :- | :- |
| **Taille / Type** | Moyen Civil |
| **Coque** | 6 |
| **Structure** | 30 |
| **Systèmes** | 2 |
| **Vitesse** | Très Rapide |
| **Maniabilité** | Standard |
| **Traits** | [Tout Terrain](0006_Vehicles.md?id=all-terrain), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Mitrailleuse moyenne montée (2d6) |


<br>

---

### Embarcations

#### Vedette Rapide

Une vedette rapide typique, armée d'un distributeur de mines monté à l'arrière.

| Vedette Rapide | |
| :- | :- |
| **Taille / Type** | Moyen Civil |
| **Coque** | 3 |
| **Structure** | 24 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniabilité** | Standard |
| **Traits** | [Performance Améliorée](0006_Vehicles.md?id=enhanced-performance), [Nautique](0006_Vehicles.md?id=waterborne), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Distributeur de mines (5d6) |

<br>

---

#### Yacht

Le genre de yacht de luxe qu'un oligarque pourrait posséder. Probablement équipé d'une suite de surveillance pour se protéger contre les ennemis essayant de faire de mauvaises choses.

| Yacht | |
| :- | :- |
| **Taille / Type** | Immense Civil |
| **Coque** | 10 |
| **Structure** | 75 |
| **Systèmes** | 4 |
| **Vitesse** | Lent |
| **Maniabilité** | Redoutable |
| **Traits** | [Luxueux](0006_Vehicles.md?id=luxurious), [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite), [Nautique](0006_Vehicles.md?id=waterborne) |
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
| **Vitesse** | Pesant |
| **Maniabilité** | Herculéenne |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Luxueux](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Boucliers** | Aucun |
| **Armes** | Aucune |

<br>

---

#### Hélicoptère d'Assaut

L'hélicoptère d'Assaut traditionnel utilise sa technologie de surveillance avancée pour intercepter les signaux téléphoniques et internet sans fil, et suivre les individus et les véhicules même dans l'obscurité, grâce à l'imagerie thermique (FLIR). Les tentatives d'échapper au traqueur via la Discrétion sont Redoutables.

| Hélicoptère d'Assaut | |
| :- | :- |
| **Taille / Type** | Grand Militaire |
| **Coque** | 11 |
| **Structure** | 50 |
| **Systèmes** | 3 |
| **Vitesse** | Modérée |
| **Maniabilité** | Facile |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Performance Améliorée](0006_Vehicles.md?id=enhanced-performance), [Discrétion](0006_Vehicles.md?id=stealth), [Maniabilité Supérieure](0006_Vehicles.md?id=superior-handling), [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Boucliers** | Aucun |
| **Armes** | 1 Gatling (3d6), 4 roquettes (5d6) |

<br>

---

#### Chasseur Multi-Rôle

Ce chasseur biplace basé à terre (de type similaire au De Havilland Mosquito) est bien connu pour ses performances et sa polyvalence. Sa soute à bombes est capable de transporter soit deux bombes de 250 livres (traitez comme des missiles moyens avec une portée de 0), soit une seule torpille.

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
| **Armes** | 4 Gatlings montées dans le nez (4d6+3), 1 soute à bombes (6d10 - voir description) |

<br>

---

#### Cargo Interstellaire (Transport Léger Haute Technologie)

Ce transport léger nécessite un équipage minimum de seulement deux personnes, avec de la place pour jusqu'à quatre passagers supplémentaires. La version Standard de stock est notée ici, cependant de nombreux propriétaires appliqueront leurs propres « modifications spéciales » telles qu'un espace de chargement dissimulé, une Performance Améliorée, une Maniabilité Supérieure, une résistance aux EMP, la Discrétion, et ainsi de suite.

| Cargo Interstellaire | |
| :- | :- |
| **Taille / Type** | Moyen Vaisseau Spatial Civil |
| **Coque** | 10 |
| **Structure** | 80 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide (Facteur Parsec de 3) |
| **Maniabilité** | Standard |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Vaisseau Spatial](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Boucliers** | 8 |
| **Armes** | 2x Tourelles de canon laser quadruples (5d6) |


<br>

---

#### Unité de Contact Générale (Vaisseau Spatial Ultra Haute Technologie)

Ce vaisseau spatial extrêmement haute technologie est la représentation physique d'un Esprit artificiel hautement avancé, qui prend la forme d'une série de modules connectés par champ sur deux kilomètres de long. Les modules ont des objectifs individuels et comprennent des habitats, des installations de construction, des zones de chargement, de la transformation alimentaire, des complexes de loisirs, des baies de hangar, et même certaines unités secrètes dont l'intelligence du vaisseau discute rarement, voire jamais. Il n'a besoin d'aucun équipage humain, mais peut supporter une population de passagers allant jusqu'à 100 000 personnes avec facilité. De nombreux passagers naissent et meurent à bord de l'Unité de Contact : beaucoup sont transitoires, allant et venant comme ils le souhaitent.

| Unité de Contact Générale | |
| :- | :- |
| **Taille / Type** | Colossal Vaisseau Spatial Civil |
| **Coque** | 20 |
| **Structure** | 10 000 |
| **Systèmes** | 6 |
| **Vitesse** | Modérée (Facteur Parsec de 4. À ce niveau technologique, un Facteur équivaut à 1 heure) |
| **Maniabilité** | Redoutable |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Transporteur](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxueux](0006_Vehicles.md?id=luxurious), [Vaisseau Spatial](0006_Vehicles.md?id=space-craft), [Maniabilité Supérieure](0006_Vehicles.md?id=superior-handling), [Rayon Tracteur](0006_Vehicles.md?id=tractor-beam) |
| **Boucliers** | 30 |
| **Armes** | Aucune dont il daigne discuter |

<br>