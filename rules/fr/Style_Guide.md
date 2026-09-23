# Titre du Guide de Style

Utilisez des titres h1 (`# Heading Title`) pour le titre principal du chapitre. Tous les titres hx apparaîtront dans la barre latérale sous forme de signets.

Si le titre n'est pas un titre h1, la barre latérale affichera une erreur de duplication montrant la page puis le titre h2.

---
## Titres de section (h2)

Utilisez des titres h2 (`## Section Heading`) précédés d'un séparateur (`---`) pour chaque nouvelle section principale.

### Titres de sous-section augmentant le niveau h de 1

Utilisez des titres h3 (`### Subsection Heading`) pour chaque nouvelle sous-section, et des titres h4 (`#### Sub-Subsection Heading`) pour chaque nouvelle sous-sous-section. 


### Progression des niveaux h : 2 > 3 > 4

Les sous-titres sont mélangés dans la barre latérale si la progression h n'est pas gérée correctement.

Le marqueur de titre doit augmenter de un ou ne pas augmenter du tout. 

Un h2 suivi d'un h2 ou d'un h3 est correct. Un h3 suivi d'un h3 ou d'un h4 est également correct. 

### Erreurs de sous-section
Un h2 suivi d'un h4 pose problème. La barre latérale place le sous-titre quelque part au-dessus du titre dans la table des matières.

### Réduction des niveaux h

Cela ne semble pas poser de problème. Par exemple, h4 vers h3 ou h2 est correct. 

---
## Conventions de formatage

Les styles suivants sont la norme pour ces SRD _Imperative_ au format Markdown.

### Gras, Italique et Séparateurs

- Utilisez des doubles astérisques (`**Bold**`) pour le texte en **Gras**.
- Utilisez des tirets bas (`_Italic_`) pour le texte en _Italique_. 
   - _nb : Évitez d'utiliser des astérisques simples pour l'italique !_
- Utilisez des barres obliques inverses (`\_`) pour « échapper » un caractère : \_Pas en Italique\_.
- Utilisez des guillemets angulaires (``` `code` ```) pour créer `code blocks`.
- Utilisez trois tirets (`---`) pour insérer une ligne de séparation horizontale.

### Conventions pour le Gras et l'Italique

Essayez de vous en tenir aux modèles suivants... 

#### Titres en gras

Utilisez des titres en gras pour décrire des sorts, des effets, etc.
- **Titre Magique :** Description.

#### Titres en italique

Utilisez des titres en italique pour les « sous-listes » de sorts variantes, etc.
- **Magie :** Description.
  - **_Variante Magique A :_** Description.
  - **_Variante Magique B :_** Description.

#### Références de Titres en Italique

Utilisez des titres en italique lorsque vous faites référence à un livre tel que _Mythras Imperative_ ou aux règles de base de _Mythras_.

---
## Formatage des listes

### Listes non ordonnées / Puces

- Les listes non ordonnées sont créées avec des tirets.
- Les listes non ordonnées sont créées avec des tirets.
  - Augmentez le niveau d'indentation avec 2 espaces ou une tabulation.

### Listes ordonnées / Points numérotés

1. Les listes numérotées sont créées avec le chiffre et un point.
2. Les listes numérotées sont créées avec le chiffre et un point.
- Mélangez avec des puces
	- Et l'indentation
3. Remettez les chiffres
   - Et les puces

### Listes avec en-têtes

Pour les listes de sous-rubriques liées, mettez le titre et les deux-points en gras.
- **Exemple 1 :** Bla, bla, bla...
- **Exemple 2 :** Bla, bla, bla...

### Listes avec en-têtes en italique

Pour les listes de sous-rubriques liées, mettez le titre et les deux-points en gras et en italique.
- **_Exemple 1 :_** Bla, bla, bla...
- **_Exemple 2 :_** Bla, bla, bla...

---
## Tableaux

Donnez aux tableaux un sous-en-tête afin qu'ils apparaissent marqués dans la barre latérale, en retrait d'un niveau par rapport à leur section parente. 

~Faites en sorte que la ligne d'en-tête soit en texte gras.~ 
Le fait de mettre la ligne d'en-tête en gras l'affiche en fait en texte normal. Le CSS par défaut met cette ligne en gras.

### Alignement du texte dans les tableaux

Utilisez la ligne 2 pour l'alignement du contenu : `:--`, `:-:` ou `--:`.
Cela affectera toute la colonne.

#### Mise en page de base des tableaux

| **Colonne 1** | **Colonne 2** |
| :-: | :-- |
| 1 | alpha |
| 2 | beta |
| 3 | gamma |

### Conventions d'alignement du texte

- Utilisez l'alignement centré pour les nombres ou les listes de valeurs similaires.
- Utilisez l'alignement à gauche pour les phrases de texte.

#### Tableau d'exemple d'alignement

| **Nombre** | **Description** |
| :-: | :-- |
| 1 | Texte descriptif |
| 2 | Texte descriptif |
| 3 | Texte descriptif |

#### Exemple : Tableau d'Intensité du Feu

| **Intensité** | **Exemples** | **Temps pour S'enflammer** | **Dégâts** |
| :-: | :-- | :-: | :-: |
| 1 | Bougie | 1d4 | 1d2 |
| 2 | Torche | 1d3 | 1d4 |
| 3 | Feu de camp | 1d2 | 1d6 |
| 4 | Conflagration remplissant une pièce | 1d2 | 2d6 |
| 5 | Lave volcanique | Instantané | 3d6 |

---
## Liens

Il existe de nombreuses utilisations pour les liens dans le SRD et seuls quelques cas principaux sont couverts ici.

### Formatage des Liens

Le formatage d'un lien se fait avec du texte entre crochets. Utilisez des crochets carrés pour le texte visible du lien, et des crochets courbes pour l'URL de destination : `[Link Text](URL)`.

Dans ces documents, le lien externe le plus couramment utilisé sera le [Générateur de Rencontres Mythras](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Liens externes vs internes

Les liens externes mènent à d'autres pages via Internet et auront besoin d'une URL `http://example.com` et, par défaut, ils s'ouvriront _toujours_ dans un nouvel onglet du navigateur. 

Pour éviter d'avoir plusieurs onglets encombrant le document en cours de lecture, les liens internes et les signets sont formés avec des URL relatives faisant référence aux fichiers markdown visibles dans le référentiel GitHub. Au lieu d'un nouvel onglet, ces liens internes feront défiler rapidement vers la section liée.

#### Exemples de liens internes

- **Liens de chapitre :** Ils pointent vers le début d'une section principale (h1). par ex. le chapitre [Combat](0005_Combat.md).

  - Format de lien : `[Combat](0005_Combat.md)`

- **Liens de sous-section :** Ils pointent vers un titre au sein d'un chapitre en faisant référence au document comme ci-dessus mais en ajoutant `?id=` immédiatement suivi du titre de destination. par ex. [Attaques Sautées](0005_Combat.md?id=leaping-attacks) 

  - Format de lien : `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Liens externes vers des sous-sections

Il peut arriver que l'on doive faire référence à une section connue d'un document externe, par exemple, un tableau spécifique dans un autre SRD. Le formatage est le même que pour les liens de sous-section, ci-dessus, en utilisant uniquement l'URL HTTP externe.

À titre d'exemple, voici le [tableau de conversions impérial en métrique](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) du [SRD Classic Fantasy Imperative](https://cfi-srd.mythras.net/). 


```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Listes de Magie et de Pouvoirs

Commencez une section « propre » avec un titre h2 pour les listes de sorts, pouvoirs, etc. disponibles ; puis h3 pour chaque élément de la liste. 

Les sorts et pouvoirs sont généralement présentés dans une seule liste plate par type de magie (Magie Populaire, Théisme, etc.), mais si la liste nécessite ses propres sous-sections, comme pour les écoles ou les spécialismes de culte, augmentez le niveau de titre de manière appropriée. Par exemple, h2 pour la Liste des Miracles du Théisme, h3 pour le Culte : Mithras, et h4 pour chaque miracle du culte de Mithras. 
 
Particulièrement dans le cas des sorts, mais dans toute description utilisant des attributs de mot-clé, listez-les en texte italique.

Le texte descriptif et les règles spéciales utilisent du texte normal.

### Formatage de la Liste de Sorts

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Exemple : liste de sorts formatée (entre guillemets) </summary>

---
> ## Descriptions des sorts
>
> ### Détourner
> _Instantané, Portée_
>
> Détourner est utilisé pour dissiper un autre sort à portée. Détourner peut être lancé de manière réactive pour neutraliser des sorts offensifs, en utilisant l'Action Réactive de Contre-Magie.

</details>

---
## Blocs de statistiques de véhicules
Commencez une section « propre » avec un titre h2 pour les listes, puis augmentez le niveau h comme d'habitude pour les catégories et les éléments de liste. 

Chaque exemple listé présente les statistiques et les descriptions sous forme de liste à puces avec des titres de points en gras.

### Formatage du Bloc de Statistiques de Véhicule

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```


<details>

<summary>Exemple : bloc de statistiques de véhicule formaté (entre guillemets) </summary>

---
> ## Exemples de Véhicules
> 
> ### Véhicules Terrestres
> 
> #### Intercepteur
> 
> - **Coque :** 6 (Militaire Moyen), 40 Structure
> 
> - **Vitesse :** Rapide
> 
> - **Systèmes :** 3
> 
> - **Traits :** Siège Éjectable, Performances Améliorées, Maniabilité Supérieure, Suite de Surveillance, Robuste, Armé
> 
> - **Armes :** Distributeur de taches d'huile, distributeur de fumée, mitrailleuses moyennes jumelées
> 
> - **Description :** Une voiture de luxe, voiture de sport ou similaire gonflée à bloc, cette voiture est construite pour aller vite et rendre les coups dans une bataille. C'est le type de véhicule auquel les gens pensent quand quelqu'un dit « voiture d'espion ».

</details>

---
## Blocs de statistiques de créatures
Commencez une section « propre » avec un titre h2 pour les listes. Les blocs de statistiques de créatures utilisent des tableaux et sont plus complexes en termes de formatage et d'exigences d'espace. Pour plus de clarté, évitez les sous-sections et ajoutez des séparateurs entre les éléments de liste.


Chaque exemple listé doit comporter ce qui suit...

- **Titre de la créature :** Un séparateur suivi d'un en-tête h3 pour le nom de la créature.

- **Entrée MEG :** Un lien externe vers la créature spécifiée sur le [Générateur de Rencontres Mythras](https://mythras.skoll.xyz/).

- **Détails principaux :** Nom/type de la créature, attributs, compétences et toute description spéciale ou note de personnage requise.

- **Détails des armes :** Descriptions abrégées avec des colonnes pour le nom de l'arme et les attributs suivants : Taille (inclure Force ici), Allonge (inclure Portée ici), Dégâts, PA/PV, et toute règle spéciale.

- **Localisations des Coups & Armure :** Les tableaux de localisation varieront en fonction de l'anatomie différente de la créature, mais doivent être inclus même pour les humanoïdes traditionnels comme moyen de suivre l'armure et les dégâts. 

### Formatage du Bloc de Statistiques de Créature

```
## Bestiary/List Name

Descriptive text. 

---
### Example Creature
[MEG Entry](https://mythras.skoll.xyz/enemy_template/8626/)

| Creature Name | Example Creature  |
| :-- | :-- |
| Key Attributs | FOR 11, CON 14, TAI 11, DEX 11, INT 11, POU 11, CHA 7 |
| Other Notes | Values and details | 
```


<details>

<summary>Exemple : tableaux de blocs de statistiques de créatures formatés (entre guillemets) </summary>

> ---
> ### Gobelin/Orque
> [Entrée MEG](https://mythras.skoll.xyz/enemy_template/10891/)
> 
> | Nom de la créature | Gobelin/Orque |
> | :-- | :-- |
> | Attributs Clés | FOR 11, CON 14, TAI 11, DEX 11, INT 11, POU 11, CHA 7 |
> | Points d'Action | 2 | 
> | Mod. Dégâts | - |
> | Initiative | +11 |
> | Déplacement | 6m |
> | Capacités | Vision Nocturne |
> | Compétences | Athlétisme 52%, Musculature 42%, Tromperie 57%, Endurance 48%, Esquiver 62%, Perception 61%, Mains Nues 52%, Volonté 42% |
> | Style de Combat | Guerrier (Épée courte, Bouclier, Lance, Fronde) 62% |
> 
> #### Détails des Armes
> 
> | Arme | Taille | Allonge | Dégâts | PA/PV | Spécial |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Épée courte | M | M | 1d6 | 6/8 | |
> | Lance | M | L | 1d8+1 | 4/5 | |
> | Fronde | L | 10/150/300 | 1d8 | 1/2 | |
> | Bouclier | L | S | 1d4 | 4/9 | Protège 3 emplacements pour le Blocage Passif/Gardien |
> 
> #### Localisations des Coups & Armure
> 
> | **1d20** | **Emplacement** | **PA/PV** |
> | :-: | :-- | :-: |
> | 1-3 | Jambe Droite | 1/5 |
> | 4-6 | Jambe Gauche | 1/5 |
> | 7-9 | Abdomen | 1/6 |
> | 10-12 | Poitrine | 1/7 |
> | 13-15 | Bras Droit | 1/4 |
> | 16-18 | Bras Gauche | 1/4 |
> | 19-20 | Tête | 1/5 |


</details>


---
## Errata Communautaire

### Coquilles et confusion

Les modifications visant à « nettoyer » le texte des auteurs doivent rester minimales, mais les coquilles et autres erreurs doivent simplement être modifiées en ligne sans aucune signalisation.


### Panneaux d'information sur les errata

Lorsqu'une règle donnée est trop ambiguë, incomplète ou tout simplement fausse, ajoutez une note d'Errata Communautaire repliable.

Expliquez le problème en italique en utilisant uniquement du gras italique pour le titre du problème - _pas de titres h(x) !_ - afin de ne pas créer d'entrées confuses dans la barre latérale.

Si un texte de remplacement est ajouté, placez-le entre guillemets en gras italique, précédé de « _Errata Communautaire :_ » en italique de poids normal.

Les règles supplémentaires, si nécessaire, doivent être présentées en texte de poids normal.

#### Modèle de Formatage d'Errata

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Exemples d'Errata

<details>

<summary>* Errata Communautaire</summary>

_**Escalade**_

_Errata Communautaire :_
_**"L'armure portée gêne les grimpeurs d'un montant égal à la moyenne des Points d'Armure portés. Trouvez cela en additionnant les points d'armure portés sur chaque emplacement et divisez ce chiffre par le nombre d'emplacements."**_

_La règle telle qu'écrite cause rapidement des problèmes. Porter une seule pièce d'armure de 6 PA réduirait un humain à un Déplacement de 0, ce qui signifie qu'un humain portant un casque en acier et rien d'autre serait trop surchargé pour grimper. Cela semble inutilement restrictif, d'où la version éditée suggérée ci-dessus. Cela sera mis à jour si les auteurs originaux révisent la règle telle qu'écrite._

</details>

<details>

<summary>* Errata Communautaire</summary>

_**Allures : Marche, Course, Sprint**_

_La version publiée de _Mythras Imperative_ n'a pas de règles explicites pour se déplacer à différentes Allures, bien qu'elles soient couvertes dans le livre de règles de base de Mythras. Les multiplicateurs d'Allure ci-dessus ont été ajoutés dans le cadre de l'Errata Communautaire._ 

_Lorsque nécessaire, il devrait suffire de traiter les Allures comme suit :_

- _Les allures plus rapides que la Marche appliquent un multiplicateur au taux de Déplacement : 3x pour la Course, 5x pour le Sprint._

- _En mode Course ou Sprint, les personnages ne peuvent tenter la plupart des actions proactives comme attaquer ou lancer des sorts. Certaines exceptions incluent..._
  - _Les attaques lors de l'utilisation des règles de Charge._
  - _Le tir d'armes à distance avec le trait Escarmouche._ 
- _En règle générale, toute action autorisée doit être traitée comme un Degré plus difficile à réussir lors d'une Course, et deux Degrés plus difficile lors d'un Sprint._


</details>

---
## Avertissements Divers

### Lignes vides / Retours chariot

Laissez une ligne vide entre différents types d'entrées. Titres, séparateurs, tableaux, etc. Ils ne seront pas rendus visibles en mode lecture, mais leur absence peut causer des problèmes de formatage.

### Texte en gras ou en italique sur plusieurs paragraphes

Chaque paragraphe doit être marqué comme texte en gras ou en italique. Le retour à la ligne entre les paragraphes brisera le formatage, laissant des marques de formatage orphelines.

### Orthographe internationale

Les puissances régressives et déplorables ont jugé bon de supprimer toutes les orthographes britanniques au profit des versions américaines objectivement plus faibles. Soyez à l'affût des mots britanniques en -OUR : _armour_, _favour_, etc.