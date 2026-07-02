# Véhicules

Les véhicules dans _Mythras Imperative_ sont traités de manière semi-abstraite. Essentiellement, ce sont des outils de fond, utilisés pour transporter les personnages d'un point A à un point B, avec peu de besoin de description détaillée ou de statistiques. Cependant, il arrive que les Maîtres de Jeu exigent des détails sur les véhicules lorsqu'il est nécessaire de les représenter dans des poursuites ou des situations de combat.

Les règles de cette section permettent de représenter la plupart des types de véhicules, mais d'une manière abstraite destinée à permettre la flexibilité et à améliorer la narration. Les vaisseaux spatiaux et les engins spatiaux sont légèrement différents, bien qu'ils soient basés sur des principes similaires.

---
## Statistiques

Tous les véhicules sont décrits en termes de leur Structure, Coque, Vitesse, Systèmes, Traits et Boucliers (si présents dans le cadre de jeu).

- **[Taille](0006_Vehicles.md?id=vehicle-size-table) :** Tous les véhicules ont l'une des six cotes de Taille qui détermine la valeur ou la plage du reste des caractéristiques. En raison de leur taille intrinsèque plus grande et des environnements hostiles de l'espace, les vaisseaux spatiaux ont leur propre plage de valeurs.
- **[Coque](0006_Vehicles.md?id=terrestrial-hulls) :** Représente les Points d'Armure
- **[Structure](0006_Vehicles.md?id=terrestrial-hulls) :** Représente les Points de Vie d'un véhicule
- **[Boucliers](0006_Vehicles.md?id=shields) :** Dans les univers dotés d'une technologie avancée de manipulation de l'énergie, des boucliers peuvent être présents pour protéger le véhicule, mais ils peuvent s'ablatir sous un tir soutenu.
- **[Systèmes](0006_Vehicles.md?id=systems) :** Représentent les composants vitaux du véhicule, y compris le groupe motopropulseur, la section de l'équipage, etc.
- **[Vitesse](0006_Vehicles.md?id=speed) :** Chaque véhicule a une cote de Vitesse de base
- **[Traits](0006_Vehicles.md?id=traits) :** Un véhicule peut également avoir un ou plusieurs Traits. Les Traits, comme les Capacités attribuées aux Créatures dans les règles de _Mythras Imperative_, ou les Traits de Style de Combat, offrent une description de jeu et un avantage supplémentaires, reflétant la nature du véhicule.
- **[Armes](0006_Vehicles.md?id=weapons) :** Tout comme les Traits, un véhicule peut être équipé d'armes selon ce que l'univers permet. Quelques exemples et valeurs suggérés sont détaillés ci-dessous.

---
### Taille, Type et Structure de la Coque

La taille et l'objectif d'un véhicule affectent l'épaisseur de sa coque et la résilience de sa structure interne. Une moto, par exemple, a une coque minimale, étant construite pour la vitesse et l'agilité. Un Cuirassé Terrestre (un monstre blindé massif, chenillé ou à roues, propulsé par des moteurs à vapeur ou diesel), étant un véhicule beaucoup plus grand conçu pour le champ de bataille, a une coque beaucoup plus grande. Les tailles comparatives des coques (et le nombre de coups d'armes qu'elles peuvent généralement supporter) sont résumées dans les tableaux Taille de Véhicule et Coque ci-dessous.

Chaque fois qu'un véhicule subit des dégâts, les dégâts entrants sont réduits par la valeur de sa Coque. Tout dégât restant est soustrait des points de Structure du véhicule et a une chance en pourcentage, égale aux dégâts pénétrants, d'affecter un Système. Si le véhicule est réduit à zéro Structure, il est soit complètement détruit, soit si gravement endommagé qu'il doit être mis à la ferraille.

##### Coques Terrestres 

| Taille | Structure | Valeur de Coque Civile | Valeur de Coque Militaire | Exemple |
| :-- | :-: | :-: | :-: | :-- |
| Petite | 1-20 | 1-3 | 4-6 | Moto, moto avec side-car, voiture compacte ou sous-compacte, canoë, kayak, barque |
| Moyenne | 21-40 | 1-6 | 7-9 | Berline, fourgonnette, pick-up, voiture de luxe, voiture de sport de luxe, muscle car, limousine, canot de sauvetage, hors-bord, deltaplane, autogire |
| Grande | 41-60 | 4-9 | 10-12 | Camion, limousine étirée, SUV, bus, monospace, avion personnel, planeur, bateau de plaisance, char d'assaut, hélicoptère, sous-marin |
| Énorme | 61-80 | 7-12 | 13-15 | Semi-remorque, avion de ligne, jet, navire de garde-côtes, yacht |
| Colossale | 81-100 | 10-15 | 16-18 | Train, paquebot de croisière, navire de guerre |

##### Coques de Vaisseaux Spatiaux 

| Taille | Structure | Valeur de Coque Civile | Valeur de Coque Militaire | Exemple |
| :-- | :-: | :-: | :-: | :-- |
| Petite | 10-50 | 4-9 | 10-12 | Chasseur monoplace |
| Moyenne | 51-150 | 7-12 | 13-15 | Cargo léger, Navette spatiale |
| Grande | 151-450 | 10-15 | 16-18 | Cargo lourd, Croiseur |
| Énorme | 451-1350 | 13-18 | 19-21 | Frégate d'escorte, Croiseur de combat léger |
| Colossale | 1351-4050 | 16-21 | 21-24 | Vaisseau de génération, Croiseur de combat lourd |
| Gigantesque | 4050-12110 | 19-24 | 24-30 | Habitat orbital, Station de combat destructrice de planètes |

---
### Boucliers

Les boucliers déflecteurs offrent une couche de protection supplémentaire pour les véhicules qui peuvent les équiper. Les boucliers fonctionnent légèrement différemment de la Coque, en raison de leur nature ablative. Si les dégâts entrants sont égaux ou inférieurs à la valeur des boucliers, tout est bloqué. Si les dégâts dépassent la valeur du bouclier, tout excès réduit la force du bouclier de ce montant.

_Par exemple, un transport de troupes a une force de bouclier énergétique de 12 points. Si le transporteur est touché par un laser infligeant 11 points de dégâts, cela ne pénètre tout simplement pas et n'a aucun effet supplémentaire. D'autre part, si le transporteur est touché par une explosion infligeant 15 points de dégâts, les trois points excédentaires réduiraient la force du bouclier à 9._

Une fois que la force d'un bouclier déflecteur est tombée à zéro, il s'effondre. Tout dégât restant est reporté sur la coque.

---
### Systèmes

Chaque fois qu'un véhicule subit des dégâts qui pénètrent sa coque, il y a une chance, égale aux dégâts pénétrants, qu'un Système vital ait été affecté.

_Par exemple, 10 points de dégâts sont appliqués à un Hors-bord - un véhicule avec 3 de Coque et 24 de Structure. La Coque agit comme une armure, réduisant les dégâts à 7. Ceci est soustrait des 24 points de Structure et il y a 7 % de chances d'endommager l'un des Systèmes du véhicule._

Les dégâts qu'un Système peut subir sont basés uniquement sur la taille du véhicule. Ceci est modélisé par le nombre de coups qu'un Système peut encaisser, plutôt que par le montant réel des dégâts. Un seul Coup de Système sur un véhicule Petit détruira instantanément ce Système. Il faut deux coups pour démolir les Systèmes d'un véhicule de taille Moyenne, trois pour un véhicule de taille Grande, et ainsi de suite. Voir le [Tableau des Dégâts aux Systèmes](0006_Vehicles.md?id=system-damage-table) ci-dessous.

Les Systèmes endommagés, mais pas encore détruits, subissent une perte de fonction proportionnelle au nombre de Coups reçus – soit une réduction en pourcentage, soit une pénalité de Grade aux tâches du Système. L'effet spécifique est basé sur ce que le sous-système contrôle, comme détaillé dans le [Tableau des Dégâts aux Composants du Système](0006_Vehicles.md?id=system-component-damage-table) ci-dessous. Selon le Système touché, les effets peuvent être catastrophiques.

_Par exemple, un Cuirassé Terrestre – un véhicule Colossal avec 5 Coups de Système – touché deux fois au niveau de la Propulsion perdrait 40 % de sa puissance et réduirait sa Vitesse Lente de deux Grades à Ponderosa. De même, un Cargo Lourd – avec 3 Coups de Système – recevant deux coups sur le Système Moteur/Carburant aurait une pénalité de deux Grades à la Vitesse ainsi qu'à l'utilisation des systèmes électroniques. Un troisième coup détruirait le Système Moteur/Carburant et le vaisseau avec lui._

<details>

<summary>* Errata de la Communauté</summary>

---

#### Dégâts


_Le texte original ici était initialement plus éloigné. Placé directement après la section Systèmes, il répète inutilement le paragraphe précédent._

- _"Les dégâts qui dépassent la Coque pénètrent le véhicule, endommageant la Structure et pouvant impacter un ou plusieurs systèmes. Selon la taille du véhicule, les dégâts peuvent être mineurs ou catastrophiques._
- _Par exemple, un véhicule Large peut subir jusqu'à deux coups sur un Système tel que sa Propulsion. Le troisième coup détruit fonctionnellement la Propulsion. Chaque fois que le système subit un coup, il perd soit un pourcentage de sa fonction comme décrit dans la colonne Perte par Coup du Tableau des Dégâts aux Systèmes ci-dessous, soit une fonction essentielle (telle que la Propulsion, le Pilotage, les Communications, etc.) devient un Grade de Difficulté plus difficile par coup subi."_

_Les paragraphes ci-dessus sont supprimés et une édition abrégée les remplace en citant un autre exemple d'effet de Système._

---

</details>

##### Tableau des Dégâts aux Systèmes 

| Taille | Coups de Système | Perte par Coup |
| :-- | :-: | :-- |
| Petite | 1 | 100% - Détruit |
| Moyenne | 2 | 1 Grade ou 50% |
| Grande | 3 | 1 Grade ou 33% |
| Énorme | 4 | 1 Grade ou 25% |
| Colossale | 5 | 1 Grade ou 20% |
| Gigantesque | 6 | 1 Grade ou 16% |

<details>

<summary>* Errata de la Communauté</summary>

---

##### Tableau des Dégâts aux Systèmes (Original) 

| Taille | Coups de Système | Perte par Coup |
| :-- | :-: | :-- |
| Small | 1 | 1 Grade or 50% |
| Medium | 2 | 1 Grade or 33% |
| Large | 3 | 1 Grade or 25% |
| Huge | 4 | 1 Grade or 20% |
| Enormous | 5 | 1 Grade or 16% |
| Colossal | 6 | 1 Grade or 10% |

##### Tableau des Tailles de Véhicules (depuis [Taille, Type et Structure de la Coque](0006_Vehicles.md?id=hull-size-type-and-structure))

| Taille | Coups de Système |
| :-- | :-: |
| Small | 1 |
| Medium | 2 |
| Large | 3 |
| Huge | 4 |
| Enormous | 5 |
| Colossal | 6 |

_Les règles et exemples originaux sont incohérents :_
- _"Les Systèmes endommagés, mais pas encore détruits, subissent une perte de fonctionnalité. Celle-ci est égale à la proportion des coups actuels par rapport à sa capacité totale. Ainsi, un véhicule Colossal touché deux fois au niveau de la Propulsion perdrait 40 % de sa puissance (2 coups sur un maximum de 5)"._ 
   - _Ceci suggère que le véhicule Colossal affiché avec 5 Coups de Système devrait perdre 20% à chaque coup - mais le tableau indique 16%._
- _"Par exemple, un véhicule Grand peut subir jusqu'à trois coups sur un Système tel que sa Propulsion. Le quatrième coup détruit fonctionnellement la Propulsion."_ 
  - _"Ceci suggère - tout comme le tableau - 25% de dégâts par Coup de Système, mais les Véhicules Grands ne peuvent subir que 3 Coups de Système selon le même tableau._
- _Bien que non incohérent, le Tableau des Tailles de Véhicules était redondant ; il apparaissait de nouveau sous une forme plus complète (ajoutant la colonne Perte par Coup) quelques lignes plus tard._

_Cela rend difficile d'avoir une règle cohérente. Pour résoudre ces problèmes, les valeurs et les exemples sont modifiés pour correspondre et le Tableau des Tailles de Véhicules a été supprimé._

---

</details>

##### Tableau des Dégâts aux Composants du Système 

| 1d10 | Système | Résultat Endommagé | Résultat Détruit |
| :-: | :-- | :-- | :-- |
| 1 | Cargo | Une quantité de possessions ou d'équipement stockée dans la soute, proportionnelle aux dégâts, est détruite. | Tout le cargo est détruit. |
| 2 | Communications | Les jets de Communications subissent un Grade de Difficulté supplémentaire chaque fois qu'elles sont endommagées. | Le véhicule ne peut plus communiquer ni leurrer les capteurs ennemis. |
| 3 | Commandes | Les jets de Navigation, de Conduite ou de Pilotage subissent un Grade de Difficulté supplémentaire chaque fois qu'ils sont endommagés ; un jet de Contrôle immédiat est requis. | Le véhicule ne peut plus être dirigé ni changer de cap. |
| 4 | Propulsion | Vitesse réduite d'un montant proportionnel aux dégâts. | Le véhicule s'arrête net ; les aéronefs s'écrasent. |
| 5 | Équipage | Un nombre de passagers proportionnel aux dégâts est rendu victime. Les personnes affectées subissent une Blessure Majeure et doivent réussir un jet d'Endurance ou être tuées instantanément. | Les occupants du véhicule meurent. |
| 6 | Moteur / Carburant | Vitesse réduite d'un montant proportionnel aux dégâts. Les systèmes électroniques deviennent un Grade de Difficulté plus difficile à utiliser. | Le véhicule est détruit dans une explosion désastreuse. |
| 7 | Capteurs | Les jets de Capteurs, de Navigation et d'attaque d'Armes subissent un Grade de Difficulté supplémentaire chaque fois qu'ils sont endommagés. | Le véhicule est rendu aveugle. |
| 8 | Armes | Un nombre de systèmes d'armes proportionnel aux dégâts devient inopérant. | Le véhicule ne peut plus tirer d'armes. |
| 9-0 | Aucun | Aucun système n'est touché ; seulement des dégâts à la Structure. | S/O |

<details>

<summary>* Errata de la Communauté</summary>

---

##### Tableau des Dégâts aux Composants du Système (Moteur/Carburant)

_Le résultat original était le suivant : "La vitesse maximale est réduite de moitié..." Ceci contredit la règle générale des pénalités de dégâts proportionnelles aux dégâts du Système : 25% de dégâts = 25% de pénalité. De plus, les règles complètes du Mythras Companion ne mentionnent pas cette réduction de moitié de la Vitesse._

_En conséquence, le texte est remplacé par la même entrée que celle des Systèmes de Propulsion : "Vitesse réduite d'un montant proportionnel aux dégâts."_

---

</details>

---
### Vitesse

Étant donné que la physique de la vélocité, de l'accélération, de la traînée et de l'inertie (pour n'en nommer que quelques-unes) sont des problèmes complexes, une certaine simplification est nécessaire et les véhicules reçoivent donc une cote de vitesse abstraite. La caractéristique de Vitesse ne devrait être utilisée que pour juger approximativement si un véhicule peut en dépasser un autre ou le rattraper.

La cote de vitesse représente le taux opérationnel nominal d'un véhicule. Dans des situations d'urgence, cette performance peut être augmentée d'un cran, au risque d'usure ou de dommages aux moteurs. Bien que le même tableau soit utilisé pour tous les types de véhicules, le bon sens doit être appliqué de manière à ne comparer que des véhicules de la même classe. Par exemple, si un Vaisseau Spatial et une voiture de sport ont tous deux le même taux d'accélération Rapide, il devrait être évident que le vaisseau spatial est comparativement plus rapide.

Augmenter la Vitesse d'un véhicule au-delà de sa valeur standard est possible sur un jet de Conduite réussi. Habituellement, cette vitesse supplémentaire n'est maintenable que pour une courte période – pas plus de 1d6 minutes avant que le véhicule ne doive revenir à sa vitesse standard ou risquer des dommages à son groupe motopropulseur. Un jet de Conduite critique permet d'augmenter la période de vitesse supérieure à 1d12 minutes.

Un conducteur peut tenter de pousser la vitesse d'un véhicule de 2 crans, mais cela nécessite un jet de Conduite Hercule et le maximum que le véhicule peut maintenir cette vitesse est de 1d3 minutes : un Succès Critique ne prolongera pas la durée de la vitesse accrue.

##### Tableau des Cotes de Vitesse 

| Cote de Vitesse | Vitesse Max Pour |
| :-- | :-: |
| Ponderosa | Gigantesque |
| Lent | |
| Lente | Colossale |
| Médiocre | |
| Douce | Grande |
| Modérée | |
| Rapide | Moyenne |
| Rapide | |
| Fulgurante | Petite |

---
### Traits

Le nombre maximum de traits qu'un véhicule peut avoir dépend de la taille et du type de sa coque.

Chaque véhicule possède un trait inhérent : le mode de déplacement pour lequel il a été principalement conçu. Par conséquent, les aéronefs possèdent intrinsèquement le trait Aérien, les bateaux le trait Maritime, et ainsi de suite. Ce trait inhérent ne compte pas dans le nombre de traits disponibles. Cependant, si un véhicule devait inclure un second mode de déplacement — un sous-marin volant par exemple —, alors le trait Aérien devrait être pris comme l'un de ses traits disponibles.

Certains traits peuvent ne pas être disponibles, selon le niveau technologique du cadre de jeu ; les Maîtres de Jeu doivent prendre leurs propres décisions quant aux traits qui peuvent être appliqués.

##### Tableau d'Attribution des Traits de Véhicule 

| Taille | Max Traits |
| :-- | :-: |
| Petite | 1 |
| Moyenne | 2 |
| Grande | 3 |
| Énorme | 4 |
| Colossale | 5 |
| Gigantesque | 6 |

#### Aérien

Le véhicule est capable de vol atmosphérique.

#### Tout-Terrain

Ce Trait doit être utilisé avec les véhicules Terrestres. Le véhicule peut traverser des terrains inhospitaliers, difficiles et escarpés, en utilisant soit des chenilles, des systèmes de suspension et de transmission avancés, soit des différentiels puissants.

#### Enfouissement

Le véhicule est conçu pour s'enfouir et creuser des tunnels dans le sol. Il peut atteindre une profondeur maximale égale à sa Cote de Coque x5 mètres.

#### Camouflé

Le véhicule possède soit une peinture de camouflage, soit des capteurs mimétiques qui lui permettent de se fondre dans son environnement. Les tentatives de repérer le véhicule visuellement sont d'un grade de difficulté plus élevé.

#### Cargo

Le véhicule est conçu spécifiquement pour transporter du fret plutôt que des passagers. Les compartiments passagers sont réduits au minimum, le reste de l'espace utilisable du véhicule étant consacré au confinement du fret avec des sections, des outils et même une climatisation appropriés (tels que des sections réfrigérées pour le transport de denrées périssables). Lorsqu'il est chargé de fret, la vitesse du véhicule est inférieure de deux crans à ce que sa taille de coque permettrait normalement.

#### Transporteur

Le véhicule est conçu spécifiquement pour transporter des véhicules plus petits, avec un équipage réduit, ou potentiellement télécommandés, de nature civile ou militaire. Tout véhicule possédant ce trait doit être au moins de taille Colossale. Le nombre de petits engins transportés peut varier selon le type et le but de la mission, mais peut aller de 10 à autant que la cote de Structure du véhicule.

#### Construction

Le véhicule est équipé pour les travaux de construction lourds. Tous les véhicules dotés de ce trait possèdent également le trait Tout-Terrain, mais leur vitesse est inférieure de deux crans à ce que leur taille de coque permettrait normalement. Le véhicule est équipé d'outils adaptés à la tâche, tels que des flèches de grue, des godets de pelleteuse, des bennes basculantes, etc.

#### Résistant aux IEM

Le véhicule est protégé contre les attaques par impulsion électromagnétique.

#### Performances Améliorées

La cote de Vitesse du véhicule est d'un cran supérieure au maximum pour sa taille.

#### Siège Éjectable

En cas d'urgence, un siège éjectable propulse les occupants à plusieurs centaines de mètres en l'air, puis déploie un parachute pour permettre un atterrissage en toute sécurité. Le parachute est optionnel. Non recommandé pour les hélicoptères (le Kamov Ka-52 Alligator étant une exception notable).

#### FTL

Vaisseaux Spatiaux Uniquement. L'engin est équipé d'un moteur plus rapide que la lumière (qu'il s'agisse d'un hyperpropulseur, d'un moteur à distorsion, d'un générateur de trou de ver ou similaire). Le moteur FTL a une cote de Vitesse séparée qui mesure essentiellement la vitesse à laquelle un vaisseau spatial peut traverser un seul parsec (3,26 années-lumière, ou 31 trillions de kilomètres ou 19 trillions de miles), comme suit :

##### Tableau des Cotes de Vitesse FTL 

| Cote de Vitesse | Facteur pour Traverser 1 Parsec |
| :-- | :-: |
| Ponderosa | 10 |
| Lent | 8 |
| Lente | 7 |
| Médiocre | 6 |
| Douce | 5 |
| Modérée | 4 |
| Rapide | 3 |
| Rapide | 2 |
| Fulgurante | 1 |

Le temps du facteur est à la discrétion du Maître de Jeu, selon le degré d'avancement du développement FTL dans le cadre de jeu. Par exemple, le facteur de base pourrait être 1 Jour, ce qui signifie qu'un vaisseau doté d'une propulsion FTL Ponderosa met 10 jours pour effectuer le voyage, tandis qu'un vaisseau doté d'une propulsion FTL Fulgurante accomplit le trajet en 1 jour. Ailleurs, où la technologie FTL est nettement moins efficace, le temps du facteur pourrait être mesuré en mois plutôt qu'en jours.

Il est supposé que le vaisseau dispose de réserves de carburant pour effectuer un voyage de retour, ou d'un moyen de se ravitailler au point de destination.

Supposons que n'importe quelle taille de vaisseau spatial puisse être équipée d'un moteur FTL, bien que, encore une fois, cela dépende du cadre de jeu.

Les propulseurs FTL ne peuvent pas être activés à moins de 1,5 Unité Astronomique d'une étoile (environ 225 millions de kilomètres, ou 270 millions de miles). Cela signifie que les vaisseaux doivent utiliser un propulseur subluminique pour se déplacer à peu près à la distance de Mars avant d'activer le système FTL.

#### Véhicule Terrestre

Le véhicule est capable de se déplacer au sol.

#### Vol Stationnaire

Le véhicule plane au-dessus du sol, soit en utilisant un coussin d'air, soit un répulseur anti-gravité.

#### Luxueux

Le véhicule est conçu spécifiquement pour transporter des passagers à un certain niveau de luxe. L'espace de chargement excédentaire est consacré à des aménagements passagers luxueux, des piscines, des jacuzzis, un équipage supplémentaire pour répondre aux caprices des passagers, et ainsi de suite.

#### Rails

Le véhicule dépend d'un système ferroviaire. Les véhicules dotés de ce trait peuvent naturellement atteindre une cote de Vitesse trois crans supérieure à ce que leur taille de coque permettrait normalement, mais sont évidemment limités au déplacement sur le système ferroviaire uniquement.

#### Résilient

Tous les systèmes peuvent supporter un coup supplémentaire de plus que ce qui est normalement déterminé par la Taille. Ce Trait peut être cumulé — ainsi Résilient 2 indique que les systèmes peuvent supporter 2 coups de plus que d'habitude pour un coût de deux points de Trait.

#### Maritime

Le véhicule est flottant sur l'eau.

#### Vaisseau Spatial

Le véhicule est scellé contre le vide et protégé contre les radiations cosmiques et peut, selon sa conception, être capable de quitter et de rentrer dans l'atmosphère, et de maintenir un vol au sein d'une atmosphère.

#### Furtivité

Aéronefs Uniquement. Le véhicule est conçu pour éviter la détection par radar et autres systèmes de capteurs à longue portée. Les tentatives de repérer le véhicule à l'aide de capteurs électroniques sont d'un grade de difficulté plus élevé.

#### Submersible

Le véhicule est capable de s'immerger sous la surface d'un océan jusqu'à une profondeur opérationnelle de sa Cote de Coque x10 mètres. La profondeur d'implosion — le maximum absolu que le submersible peut atteindre sans être écrasé — est de 1,5 fois sa profondeur opérationnelle.

#### Maniabilité Supérieure

La maniabilité du véhicule est classée Facile.

#### Suite de Surveillance

Le véhicule dispose d'un ordinateur de bord, d'une station de base de communications, d'un récepteur pour les signaux de dispositifs d'écoute, et d'un appareil pour intercepter les signaux de smartphones à proximité dans un rayon de 100 mètres.

#### Robuste

Un véhicule civil avec ce trait tire sa Coque de la colonne Militaire et a automatiquement la Structure maximale. Un véhicule militaire avec ce Trait tire sa Coque et sa Structure de la rangée suivante.

#### Rayon Tracteur

Vaisseaux Spatiaux Uniquement. Le vaisseau est équipé d'un rayon tracteur qui peut piéger et attirer à lui des véhicules ayant une cote de coque jusqu'à deux crans inférieure à la sienne. Ainsi, un vaisseau spatial Énorme pourrait attirer et retenir une coque de taille Moyenne au maximum.

#### ADAV

Décollage/atterrissage vertical. Ce trait est inhérent aux hélicoptères et véhicules similaires qui utilisent une combinaison de rotors pour produire de la portance. Lorsqu'il est appliqué aux aéronefs à voilure fixe, il indique l'utilisation de propulseurs fixes ou orientables pour contrôler l'attitude en vol, l'ascension et la descente.

#### Amphibie

Le véhicule se propulse à l'aide de pattes articulées. Les véhicules marcheurs sont plafonnés à la Vitesse Douce, quelle que soit leur Taille. Cependant, les marcheurs peuvent être construits à des hauteurs qui seraient simplement instables pour des véhicules équipés d'autres moyens de locomotion.

Ce véhicule est capable de mouvement subaquatique.

#### Armé

Le véhicule a été adapté pour accueillir de l'armement. Les systèmes d'armes sont discutés ci-dessous dans la section [Armes](0006_Vehicles.md?id=weapons).

---
## Armes

Généralement, seules les coques militaires sont conçues pour accueillir de l'armement (points d'emport, stockage de munitions, systèmes de contrôle). Le Trait 'Armé' peut être pris pour les véhicules civils qui pourraient avoir des besoins en armement.

Le nombre maximum de systèmes d'armes qu'un véhicule peut supporter est égal à 1/10 de ses Points de Structure (ainsi, un véhicule avec 40 de Structure pourrait supporter 4 systèmes d'armes, s'il s'agit d'un véhicule militaire, ou d'un véhicule civil Armé).

Les systèmes d'armes dépendent de la Taille du véhicule. Le type maximum de système d'arme pour différentes Tailles est indiqué dans les tableaux ci-dessous.

##### Tableau des Armes par Taille 

| Taille | Terrestre | Vaisseau Spatial |
| :-- | :-- | :-- |
| Petite | Arme Légère (ex. Fusil d'Assaut) | Arme Moyenne (ex. Mitrailleuse, Lance-roquettes) |
| Moyenne | Arme Moyenne (ex. Mitrailleuse, Lance-roquettes) | Arme Tourellée/Lourde (ex. Mitrailleuses Lourde Jumelées, Mini-Guns) |
| Grande | Arme Tourellée/Lourde (ex. Mitrailleuses Lourde Jumelées, Mini-Guns) | Batterie d'Armes (ex. Artillerie de Champ de Bataille) |
| Énorme | Batterie d'Armes (ex. Artillerie de Champ de Bataille) | Armes Avancées (ex. Systèmes de Missiles) |
| Colossale | Armes Avancées (ex. Systèmes de Missiles) | Armes à Monture Spinale (une seule) |
| Gigantesque | N/A | Armes à Monture Spinale (jusqu'à 3) |

##### Exemples de Statistiques d'Armes 
 
| Arme | Dégâts | Portée | Cadence de Tir | Munitions/Rechargement |
| :-- | :-: | :-: | :-: | :-: |
| Canon de 50 pouces | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Mitrailleuse Gatling | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Roquette | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Missile Moyen/Torpille | 6d10 | Portée max de 200km | 1 | 1/5 |
| Missile Large/De Croisière | 6d10+10 | Portée max de 1000km | 1 | 1/10 |
| Canon Laser/Plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Canon Laser/Plasma Lourd | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Batterie d'Artillerie | 5d6+6 | Portée max de 50km | 1 | 1/5 |
| Batterie à Monture Spinale | 10d6+6 | Portée max de 20000km | 1 | 1/10 |

_Les portées sont données en mètres et kilomètres._

_Les cadences de tir sont pour le tir unique, semi-automatique et automatique._

_Munitions est la capacité de tir avant de devoir être rechargé. Rechargement est le temps de rechargement en Rounds de Combat, en supposant qu'un équipage complet est disponible._

---
## Maniabilité et Manœuvres

Les manœuvres évasives ou soudaines nécessitent un jet de Conduite/Pilotage réussi pour que le conducteur ou le pilote conserve le contrôle du véhicule. La plupart des véhicules sont conçus et construits pour résister aux contraintes occasionnelles, mais le Maître de Jeu peut décider qu'une manœuvre particulière nécessite un jet à un grade de difficulté plus élevé, selon son ambition. Un échec signifie que le contrôle du véhicule est perdu : lancez sur le tableau Perte de Contrôle.

Notez que le Tableau Perte de Contrôle ne s'applique qu'aux véhicules terrestres. Des effets similaires peuvent être appliqués aux véhicules aériens et spatiaux, mais les Maîtres de Jeu devront ajuster le raisonnement pour l'effet spécifique. Par exemple, un aéronef, plutôt que de déraper, pourrait partir en vrille.

De plus, la maniabilité inhérente d'un véhicule peut avoir un impact supplémentaire sur le jet de Conduite. La maniabilité est soit Facile, Standard, Difficile, Formidable ou Hercule et détermine le point de départ du jet de Conduite lors de l'exécution d'une manœuvre. Le grade de difficulté de la manœuvre est ensuite appliqué à la maniabilité pour déterminer la difficulté finale.

Par exemple, une moto haute performance dispose de gyrostabiliseurs intégrés lui conférant une maniabilité Facile. Le conducteur souhaite effectuer un dérapage à 180 degrés pour échapper à un poursuivant, une manœuvre que le Maître de Jeu juge d'un grade de difficulté supplémentaire. Le pilote doit donc effectuer son jet de Conduite à Standard plutôt qu'à Facile. S'il avait tenté la même manœuvre sur une moto non stabilisée, le jet de Conduite aurait été à Difficile.

La Maniabilité Supérieure est un Trait. Si un véhicule n'a pas ce trait dans sa description, la maniabilité par défaut est Standard pour tout véhicule de taille Grande et inférieure. Les véhicules Énormes et Colossaux ont intrinsèquement le trait de Maniabilité Formidable et Hercule, respectivement, et le Maître de Jeu est libre de décider que certaines manœuvres sont simplement impossibles à réaliser en raison de la taille du véhicule.

##### Tableau des Pertes de Contrôle 

| 1d100 | Résultat |
| :-: | :-- |
| 01-25 | Embardée. La perte de contrôle est temporaire. Le véhicule diminue sa vitesse d'un cran pendant 5 secondes. |
| 26-40 | Dérapage. Le conducteur doit lutter pour garder le contrôle du véhicule. Le véhicule diminue sa vitesse de 2 crans pendant 10 secondes. |
| 41-50 | Dérapage Sévère. Le véhicule finit dans la mauvaise direction et à l'arrêt pendant 15 secondes. |
| 51-60 | Tonneau. Le véhicule dérape et fait un tonneau, subissant 3d10 dégâts à sa Structure. Les occupants doivent réussir des jets d'Endurance ou subir 1d10 dégâts à 1d3 Localisations de Coup. |
| 61-70 | Tonneau Sévère. Comme ci-dessus, mais le véhicule subit 3d10+10 dégâts et les Occupants reçoivent 1d10 dégâts même si le jet d'Endurance réussit, et 2d10 s'il échoue. |
| 71-80 | Épave. Comme ci-dessus, mais le véhicule est réduit à 0 Structure. Les Occupants subissent les mêmes dégâts que pour un Tonneau Sévère. |
| 81-90 | Explosion. Comme ci-dessus, mais le système de carburant du véhicule s'enflamme et explose dans 1d20+10 secondes. S'ils ne peuvent pas s'échapper, les occupants subissent 1d6 dégâts de brûlure supplémentaires à 1d6 localisations. |
| 91-98 | Explosion Immédiate. Comme ci-dessus, mais l'explosion est immédiate. |
| 99-00 | Accident Catastrophique. Les occupants doivent réussir un jet d'Endurance ou être tués instantanément. Les dégâts sont ceux d'une Épave, quel que soit le résultat. |

---
## Exemples de Véhicules

---

### Véhicules Terrestres

#### Intercepteur

Une voiture de luxe, de sport ou similaire, modifiée, construite pour aller vite et rendre coup pour coup au combat. C'est le genre de véhicule auquel on pense quand on dit "voiture d'espion".

| Intercepteur | |
| :- | :- |
| **Taille / Type** | Moyenne Militaire |
| **Coque** | 6 |
| **Structure** | 40 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniabilité** | Facile |
| **Traits** | [Siège Éjectable](0006_Vehicles.md?id=ejector-seat), [Performances Améliorées](0006_Vehicles.md?id=enhanced-performance), [Maniabilité Supérieure](0006_Vehicles.md?id=superior-handling), [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Distributeur de Nappe d'Huile, Distributeur de Fumée, Mitrailleuses Moyennes Jumelées (2d6+3) |

<br>

---

#### Moto de Poursuite

Une moto légère et rapide pour les poursuites à grande vitesse, la Moto de Poursuite cache une surprise – soit une paire de mitrailleuses jumelées, soit deux roquettes.

| Moto de Poursuite | |
| :- | :- |
| **Taille / Type** | Petite Civile |
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

Une berline 4 portes standard offrant suffisamment d'espace pour accueillir confortablement un conducteur et trois passagers. Sacrifie l'espace de chargement pour intégrer une suite de surveillance.

| Berline | |
| :- | :- |
| **Taille / Type** | Moyenne Civile |
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

Une voiture biplace capable de passer en mode amphibie ou submersible pour se déplacer sur ou sous l'eau. Livrée avec une torpille montée à l'avant et un missile sol-air monté sur le toit.

| Voiture Submersible | |
| :- | :- |
| **Taille / Type** | Moyenne Civile |
| **Coque** | 6 |
| **Structure** | 25 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniabilité** | Standard |
| **Traits** | [Performances Améliorées](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Amphibie](0006_Vehicles.md?id=waterborne), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Roquette (5d6), Torpille (4d10) |

<br>

---

#### Fourgon de Surveillance

Une fourgonnette banale et non marquée abritant une équipe d'agents et une suite d'équipements d'enregistrement audiovisuel.

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

Un pick-up ou une jeep avec de la place pour un équipage de deux personnes dans la cabine et un artilleur debout dans la benne, opérant une mitrailleuse moyenne montée sur pivot.

| Véhicule de Soutien Tactique | |
| :- | :- |
| **Taille / Type** | Moyenne Civile |
| **Coque** | 6 |
| **Structure** | 30 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide |
| **Maniabilité** | Standard |
| **Traits** | [Tout-Terrain](0006_Vehicles.md?id=all-terrain), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Mitrailleuse Moyenne Montée (2d6) |

<br>

---

### Engins Nautiques

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
| **Traits** | [Performances Améliorées](0006_Vehicles.md?id=enhanced-performance), [Amphibie](0006_Vehicles.md?id=waterborne), [Armé](0006_Vehicles.md?id=weaponized) |
| **Armes** | Distributeur de Mines (5d6) |

<br>

---

#### Yacht

Le genre de yacht de luxe qu'un oligarque pourrait posséder. Probablement équipé d'une suite de surveillance pour se protéger contre les ennemis tentant de nuire.

| Yacht | |
| :- | :- |
| **Taille / Type** | Énorme Civil |
| **Coque** | 10 |
| **Structure** | 75 |
| **Systèmes** | 4 |
| **Vitesse** | Lente |
| **Maniabilité** | Formidable |
| **Traits** | [Luxueux](0006_Vehicles.md?id=luxurious), [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite), [Amphibie](0006_Vehicles.md?id=waterborne) |
| **Armes** | Aucune |

<br>

---

### Aéronefs/Vaisseaux Spatiaux

#### Dirigeable (Paquebot Aérien Civil)

Similaire au Hindenburg, cette classe de dirigeable transcontinental (et d'autres de sa classe) mesure 245 mètres de long et nécessite un équipage de 40 à 61 personnes. Il peut généralement transporter un complément de 50 à 72 passagers dans des hébergements de luxe.

| Dirigeable | |
| :- | :- |
| **Taille / Type** | Colossale Civile |
| **Coque** | 10 |
| **Structure** | 85 |
| **Systèmes** | 5 |
| **Vitesse** | Ponderosa |
| **Maniabilité** | Hercule |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Luxueux](0006_Vehicles.md?id=luxurious), [ADAV](0006_Vehicles.md?id=vtol) |
| **Boucliers** | Aucun |
| **Armes** | Aucune |

<br>

---

#### Hélicoptère d'Assaut

L'hélicoptère d'assaut traditionnel utilise sa technologie de surveillance avancée pour intercepter les signaux téléphoniques et internet sans fil, et pour suivre les individus et les véhicules même dans l'obscurité, grâce au FLIR. Les tentatives d'échapper au traqueur par la Furtivité sont Formidables.

| Hélicoptère d'Assaut | |
| :- | :- |
| **Taille / Type** | Grande Militaire |
| **Coque** | 11 |
| **Structure** | 50 |
| **Systèmes** | 3 |
| **Vitesse** | Modérée |
| **Maniabilité** | Facile |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Performances Améliorées](0006_Vehicles.md?id=enhanced-performance), [Furtivité](0006_Vehicles.md?id=stealth), [Maniabilité Supérieure](0006_Vehicles.md?id=superior-handling), [Suite de Surveillance](0006_Vehicles.md?id=surveillance-suite), [ADAV](0006_Vehicles.md?id=vtol) |
| **Boucliers** | Aucun |
| **Armes** | 1 Mitrailleuse Gatling (3d6), 4 Roquettes (5d6) |

<br>

---

#### Chasseur Multirôle

Ce chasseur terrestre biplace (similaire au De Havilland Mosquito) est réputé pour ses performances et sa polyvalence. Sa soute à bombes peut transporter soit deux bombes de 250 lb (à traiter comme des missiles moyens avec une portée de 0), soit une seule torpille.

| Chasseur Multirôle | |
| :- | :- |
| **Taille / Type** | Grande Militaire |
| **Coque** | 10 |
| **Structure** | 45 |
| **Systèmes** | 3 |
| **Vitesse** | Modérée |
| **Maniabilité** | Standard |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Performances Améliorées](0006_Vehicles.md?id=enhanced-performance) |
| **Boucliers** | Aucun |
| **Armes** | 4 Mitrailleuses Gatling Montées sur le Nez (4d6+3), 1 soute à bombes (6d10 - voir description) |

<br>

---

#### Cargo Interstellaire (Transport Léger Haute Technologie)

Ce transport léger ne nécessite qu'un équipage minimum de deux personnes, avec de la place pour jusqu'à quatre passagers supplémentaires. La version de série standard est notée ici, cependant de nombreux propriétaires appliqueront leurs propres "modifications spéciales" telles que des espaces de chargement dissimulés, des performances améliorées, une maniabilité supérieure, une résistance aux IEM, la furtivité, etc.

| Cargo Interstellaire | |
| :- | :- |
| **Taille / Type** | Vaisseau Spatial Civil Moyen |
| **Coque** | 10 |
| **Structure** | 80 |
| **Systèmes** | 2 |
| **Vitesse** | Rapide (Facteur Parsec de 3) |
| **Maniabilité** | Standard |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Vaisseau Spatial](0006_Vehicles.md?id=space-craft), [ADAV](0006_Vehicles.md?id=vtol) |
| **Boucliers** | 8 |
| **Armes** | 2 tourelles de Canons Laser quadruple monture (5d6) |

<br>

---

#### Unité de Contact Générale (Vaisseau Spatial Ultra Haute Technologie)

Ce vaisseau spatial extrêmement sophistiqué est la représentation physique d'un Esprit artificiel très avancé, qui prend la forme d'une série de modules connectés sur le terrain, longue de deux kilomètres. Les modules sont conçus individuellement et comprennent des habitats, des installations de construction, des zones de fret, de traitement des aliments, des complexes de loisirs, des baies de hangar, et même quelques unités secrètes dont l'intelligence du vaisseau ne discute que rarement, voire jamais. Il n'a pas besoin d'équipage humain, mais peut facilement accueillir une population de passagers allant jusqu'à 100 000 personnes. De nombreux passagers naissent et meurent à bord de l'Unité de Contact : beaucoup sont transitoires, allant et venant à leur guise.

| Unité de Contact Générale | |
| :- | :- |
| **Taille / Type** | Vaisseau Spatial Civil Gigantesque |
| **Coque** | 20 |
| **Structure** | 10 000 |
| **Systèmes** | 6 |
| **Vitesse** | Modérée (Facteur Parsec de 4. À ce niveau technologique, un Facteur équivaut à 1 heure) |
| **Maniabilité** | Formidable |
| **Traits** | [Aérien](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Transporteur](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxueux](0006_Vehicles.md?id=luxurious), [Vaisseau Spatial](0006_Vehicles.md?id=space-craft),[Maniabilité Supérieure](0006_Vehicles.md?id=superior-handling), [Rayon Tracteur](0006_Vehicles.md?id=tractor-beam) |
| **Boucliers** | 30 |
| **Armes** | Aucune qu'il ne veule discuter |

<br>