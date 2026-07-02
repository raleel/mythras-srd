# Titre du guide de style (h1)

Utilisez les titres h1 (`# Heading Title`) pour le titre principal du chapitre. Tous les titres hx apparaîtront dans la barre latérale comme des signets.

Si le titre n'est pas un titre h1, la barre latérale affichera une erreur de duplication montrant la page puis le titre h2 « titre ».

---
## Titres de section (h2)

Utilisez les titres h2 (`## Section Heading`) précédés d'un séparateur (`---`) pour chaque nouvelle section principale.

### Titres de sous-section augmentant le niveau de h de 1

Utilisez les titres h3 (`### Subsection Heading`) pour chaque nouvelle sous-section, et les titres h4 (`#### Sub-Subsection Heading`) pour chaque nouvelle sous-sous-section.

### Progression h des sous-sections : 2 > 3 > 4

Les sous-titres se mélangent dans la barre latérale si la progression h n'est pas gérée correctement.

Le marqueur de titre doit augmenter d'un ou de rien.

Un h2 suivi d'un h2 ou d'un h3 est acceptable. Un h3 suivi d'un h3 ou d'un h4 est également acceptable.

### Erreurs de sous-section
Un h2 suivi d'un h4 cause des problèmes. La barre latérale place le sous-titre quelque part au-dessus du titre dans la table des matières.

### Réduire les niveaux de h

Cela ne semble pas être un problème. Par exemple, passer d'un h4 à un h3 ou un h2 est acceptable.

---
## Conventions de formatage

Les styles suivants sont la norme pour ces SRD _Imperative_ au format Markdown.

### Gras, italique et séparateurs

- Utilisez les doubles astérisques (`**Bold**`) pour le texte en **Gras**.
- Utilisez les tirets bas (`_Italic_`) pour le texte en _Italique_.
  - _nb : Évitez d'utiliser des astérisques simples pour l'italique !_
- Utilisez les barres obliques inverses (`\_`) pour « échapper » un caractère : \_Non Italique\_.
- Utilisez les guillemets angulaires (``` `code` ```) pour créer `code blocks`.
- Utilisez trois tirets (`---`) pour insérer une ligne de séparation horizontale.

### Conventions pour le Gras et l'Italique

Essayez de vous en tenir aux modèles suivants...

#### Titres en gras

Utilisez des titres en gras pour décrire les sorts, les effets, etc.
- **Titre Magique :** Description.

#### Titres en italique

Utilisez des titres en italique pour les « sous-listes » de variantes de sorts, etc.
- **Magie :** Description.
  - **_Variante Magique-A :_** Description.
  - **_Variante Magique-B :_** Description.

#### Références de titres en italique

Utilisez des titres en italique lorsque vous référencez un livre tel que _Mythras Imperative_ ou le livre de règles de base _Mythras_.

---
## Formatage des listes

### Listes non ordonnées / Points à puces

- Les listes non ordonnées sont faites avec des tirets.
- Les listes non ordonnées sont faites avec des tirets.
  - Augmentez le niveau d'indentation avec 2 espaces ou une tabulation.

### Listes ordonnées / Points numérotés

1. Les listes numérotées sont faites avec un chiffre et un point.
2. Les listes numérotées sont faites avec un chiffre et un point.
- Mélangez avec des points à puces
	- Et l'indentation
3. Remettez les numéros
   - Et les puces

### Listes avec titres

Pour les listes de sous-titres liés, mettez en gras le titre et les deux points.
- **Exemple 1 :** Bla, bla, bla...
- **Exemple 2 :** Bla, bla, bla...

### Listes avec titres en italique

Pour les listes de sous-titres liés, mettez en gras et en italique le titre et les deux points.
- **_Exemple 1 :_** Bla, bla, bla...
- **_Exemple 2 :_** Bla, bla, bla...

---
## Tableaux

Donnez aux tableaux un sous-en-tête afin qu'ils apparaissent en signet dans la barre latérale, avec un niveau d'indentation par rapport à leur section parente.

~Mettez la ligne d'en-tête en gras.~
Mettre la ligne d'en-tête en gras la rend en fait en texte normal. Le CSS par défaut a cette ligne en gras.

### Alignement du texte des tableaux

Utilisez la ligne 2 pour l'alignement du contenu : `:--`, `:-:`, ou `--:`.
Cela affectera toute la colonne.

#### Disposition de base des tableaux

| **Colonne 1** | **Colonne 2** |
| :-: | :-- |
| 1 | alpha |
| 2 | beta |
| 3 | gamma |

### Conventions d'alignement du texte

- Utilisez l'alignement centré pour les nombres ou les listes de valeurs similaires.
- Utilisez l'alignement gauche pour les phrases de texte.

#### Exemple de tableau d'alignement

| **Numéro** | **Description** |
| :-: | :-- |
| 1 | Texte descriptif |
| 2 | Texte descriptif |
| 3 | Texte descriptif |

#### Exemple : Tableau d'intensité du feu

| **Intensité** | **Exemples** | **Temps pour s'enflammer** | **Dégâts** |
| :-: | :-- | :-: | :-: |
| 1 | Bougie | 1d4 | 1d2 |
| 2 | Torche | 1d3 | 1d4 |
| 3 | Feu de camp | 1d2 | 1d6 |
| 4 | Conflagration remplissant la pièce | 1d2 | 2d6 |
| 5 | Lave volcanique | Instantané | 3d6 |

---
## Liens

Il existe de nombreuses utilisations des liens dans le SRD et seuls quelques cas principaux sont abordés ici.

### Formatage des liens

Le formatage d'un lien se fait avec du texte entre parenthèses. Utilisez des crochets pour le texte visible du lien et des parenthèses courbes pour l'URL de destination : `[Link Text](URL)`.

Dans ces documents, le lien externe le plus couramment utilisé sera le [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Liens externes vs internes

Les liens externes mènent à d'autres pages via internet et nécessiteront une URL `http://example.com` et, par défaut, ils s'ouvriront _toujours_ dans un nouvel onglet de navigateur.

Pour éviter que de multiples onglets n'encombrent le document en lecture, les liens internes et les signets sont formés avec des URL relatives référençant les fichiers markdown visibles dans le dépôt GitHub. Au lieu d'un nouvel onglet, ces liens internes feront défiler rapidement la page vers la section liée.

#### Exemples de liens internes

- **Liens de chapitre :** Ils pointent vers le début d'une section principale (h1). Par exemple, le chapitre [Combat](0005_Combat.md).

  - Format du lien : `[Combat](0005_Combat.md)`

- **Liens de sous-section :** Ils pointent vers un titre à l'intérieur d'un chapitre, référençant le document comme ci-dessus mais en ajoutant `?id=` suivi immédiatement du titre de destination. Par exemple, [Attaques en sautant](0005_Combat.md?id=leaping-attacks)

  - Format du lien : `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Liens externes vers des sous-sections

Il peut être nécessaire de référencer une section connue d'un document externe, par exemple, un tableau spécifique dans un autre SRD. Le formatage est le même que pour les liens de sous-section ci-dessus, en utilisant simplement l'URL HTTP externe.

À titre d'exemple, voici le [tableau de conversions impériales en métriques](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) du [SRD Classic Fantasy Imperative](https://cfi-srd.mythras.net/).

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Listes de Magie et de Pouvoirs

Commencez une section « propre » avec un titre h2 pour les listes de sorts disponibles, pouvoirs, etc. ; puis h3 pour chaque élément de liste.

Les sorts et pouvoirs sont généralement présentés dans une seule liste plate par type de magie (Magie Populaire, Théisme, etc.) mais si la liste nécessite ses propres sous-sections, comme les spécialisations d'école ou de culte, augmentez le niveau de titre de manière appropriée. Par exemple, h2 pour la Liste des Miracles du Théisme, h3 pour Culte : Mithras, et h4 pour chaque miracle du culte de Mithras.

Particulièrement dans le cas des sorts, mais dans toute description utilisant des attributs de mots-clés, listez-les en texte italique.

Le texte descriptif et les règles spéciales utilisent un texte normal.

### Formatage de la liste de sorts

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Exemple : liste de sorts formatée (en bloc de citation)</summary>

---
> ## Descriptions des sorts
>
> ### Détourner
> _Instant, À distance_
>
> Détourner est utilisé pour dissiper un autre sort à portée. Détourner peut être lancé réactivement pour neutraliser les sorts offensifs, en utilisant l'Action Réactive de Contre-Magie.

</details>

---
## Blocs de statistiques de véhicules
Commencez une section « propre » avec un titre h2 pour les listes, puis augmentez le niveau de h comme d'habitude pour les catégories et les éléments de liste.

Chaque exemple listé présente les statistiques et descriptions sous forme de liste à puces avec des titres de points en gras.

### Formatage des blocs de statistiques de véhicules

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Exemple : bloc de statistiques de véhicule formaté (en bloc de citation)</summary>

---
> ## Exemples de véhicules
>
> ### Véhicules terrestres
>
> #### Intercepteur
>
> - **Coque :** 6 (Militaire Moyen), 40 Structure
>
> - **Vitesse :** Rapide
>
> - **Systèmes :** 3
>
> - **Traits :** Siège éjectable, Performance améliorée, Maniabilité supérieure, Suite de surveillance, Robuste, Armé
>
> - **Armes :** Distributeur de nappe d'huile, distributeur de fumée, mitrailleuses moyennes jumelées
>
> - **Description :** Une voiture de luxe, une voiture de sport ou similaire, modifiée, cette voiture est construite pour aller vite et donner autant qu'elle prend dans une bataille. C'est le genre de véhicule auquel les gens pensent quand on dit « voiture d'espion ».

</details>

---
## Blocs de statistiques de créatures
Commencez une section « propre » avec un titre h2 pour les listes. Les blocs de statistiques de créatures utilisent des tableaux et sont plus complexes en termes de formatage et d'exigences d'espace. Pour plus de clarté, évitez les sous-sections et ajoutez des séparateurs entre les éléments de la liste.

Chaque exemple listé doit inclure les éléments suivants...

- **Titre de la créature :** Un séparateur suivi d'un en-tête h3 pour le nom de la créature.

- **Entrée MEG :** Un lien externe vers la créature spécifiée sur le [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Détails essentiels :** Nom/type de la créature, attributs, compétences et toute description spéciale ou note de personnage selon les besoins.

- **Détails des armes :** Descriptions abrégées avec des colonnes pour le nom de l'arme et les attributs suivants : Taille (inclure Force ici), Portée (inclure Distance ici), Dégâts, PA/PV, et toutes règles spéciales.

- **Localisations des coups et armure :** Les tableaux de localisations varieront en fonction de l'anatomie des créatures, mais devraient être inclus même pour les humanoïdes traditionnels afin de suivre l'armure et les dégâts.

### Formatage des blocs de statistiques de créatures

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

<summary>Exemple : tableaux de blocs de statistiques de créatures formatés (en bloc de citation)</summary>

> ---
> ### Gobelin/Orc
> [Entrée MEG](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Nom de la créature | Gobelin/Orc |
> | :-- | :-- |
> | Attributs Clés | FOR 11, CON 14, TAILLE 11, DEX 11, INT 11, POU 11, CHA 7 |
> | Points d'Action | 2 |
> | Modificateur de dégâts | - |
> | Initiative | +11 |
> | Mouvement | 6m |
> | Capacités | Vision nocturne |
> | Compétences | Athlétisme 52%, Force brute 42%, Tromperie 57%, Endurance 48%, Évasion 62%, Perception 61%, Combat à mains nues 52%, Volonté 42% |
> | Style de Combat | Guerrier (Épée courte, Bouclier, Lance, Fronde) 62% |
>
> #### Détails des armes
>
> | Arme | Taille | Portée | Dégâts | PA/PV | Spécial |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Épée courte | M | M | 1d6 | 6/8 | |
> | Lance | M | L | 1d8+1 | 4/5 | |
> | Fronde | L | 10/150/300 | 1d8 | 1/2 | |
> | Bouclier | L | C | 1d4 | 4/9 | Protège 3 localisations pour Blocage Passif/Parade |
>
> #### Localisations des coups et armure
>
> | **1d20** | **Localisation** | **PA/PV** |
> | :-: | :-- | :-: |
> | 1-3 | Jambe droite | 1/5 |
> | 4-6 | Jambe gauche | 1/5 |
> | 7-9 | Abdomen | 1/6 |
> | 10-12 | Poitrine | 1/7 |
> | 13-15 | Bras droit | 1/4 |
> | 16-18 | Bras gauche | 1/4 |
> | 19-20 | Tête | 1/5 |

</details>

---
## Errata de la Communauté

### Fautes de frappe et confusion

Les modifications visant à « nettoyer » le texte des auteurs doivent être minimales, mais les fautes de frappe et autres erreurs doivent simplement être corrigées en ligne sans aucune signalisation.

### Panneaux d'information d'errata

Lorsqu'une règle donnée est trop ambiguë, incomplète ou simplement fausse, ajoutez une note d'Errata de la Communauté dépliable.

Expliquez le problème en italique en utilisant uniquement des caractères gras et italiques pour le titre du problème - _pas d'en-têtes h(x) !_ - afin de ne pas créer d'entrées confuses dans la barre latérale.

Si du texte de remplacement est ajouté, placez-le entre guillemets doubles en gras italique, précédé de "_Errata de la Communauté :_" en italique de poids normal.

Les règles supplémentaires, si nécessaire, doivent être présentées en texte de poids normal.

#### Modèle de formatage des errata

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Exemples d'errata

<details>

<summary>* Errata de la Communauté</summary>

_**Escalade**_

_Errata de la Communauté :_
_**"L'armure portée gêne les grimpeurs d'une quantité égale à la moyenne des Points d'Armure portés. Calculez ceci en additionnant les points d'armure portés de chaque localisation et divisez ce chiffre par le nombre de localisations."**_

_La règle telle qu'écrite cause rapidement des problèmes. Porter une seule pièce d'armure de 6PA réduirait un humain à un Mouvement de 0, ce qui signifie qu'un humain portant un casque d'acier et rien d'autre serait trop lourd pour grimper. Cela semble déraisonnablement restrictif, d'où la version modifiée suggérée ci-dessus. Cela sera mis à jour si les auteurs originaux révisent la règle telle qu'écrite._

</details>

<details>

<summary>* Errata de la Communauté</summary>

_**Allures : Marcher, Courir, Sprinter**_

_La version publiée de _Mythras Imperative_ n'a pas de règles explicites pour se déplacer à différentes allures, bien qu'elles soient couvertes dans le livre de règles de base de Mythras. Les multiplicateurs d'allure ci-dessus ont été ajoutés dans le cadre de l'Errata de la Communauté._

_Au besoin, il devrait suffire de traiter les allures comme suit :_

- _Les allures plus rapides que la marche appliquent un multiplicateur à la valeur de Mouvement : 3x pour Courir, 5x pour Sprinter._

- _En allure de Course ou de Sprint, les personnages ne peuvent pas tenter la plupart des actions proactives comme attaquer ou lancer des sorts. Certaines exceptions incluent..._
  - _Attaques lors de l'utilisation des règles de Charge._
  - _Tir d'armes à distance avec le trait Escarmouche._
- _En règle générale, toute action autorisée doit être considérée comme un Grade plus difficile à réaliser en Course, et deux Grades plus difficile en Sprint._

</details>

---
## Avertissements divers

### Lignes vides / Retours chariot

Laissez une ligne vide entre les différents types d'entrée. En-têtes, séparateurs, tableaux, etc. Celles-ci ne seront pas rendues visibles en mode lecture, mais leur absence peut causer des problèmes de formatage.

### Texte multi-paragraphes en gras ou italique

Chaque paragraphe doit être marqué comme texte en gras ou en italique. La nouvelle ligne entre les paragraphes rompra le formatage, laissant des marques de formatage orphelines.

### Orthographes internationales

Les pouvoirs régressifs et déplorables ont jugé bon de supprimer toutes les orthographes britanniques au profit des versions américaines objectivement plus faibles. Soyez attentifs aux mots britanniques en -OUR : _armour_, _favour_, etc.