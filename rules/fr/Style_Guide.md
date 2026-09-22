# Titre du Guide de Style (h1)

Utilisez les titres h1 (`# Heading Title`) pour le titre principal du chapitre. Tous les titres hx apparaîtront dans la barre latérale en tant que signets.

Si le titre n'est pas un titre h1, la barre latérale présentera une erreur de duplication affichant la page, puis le titre h2.

---
## Titres de section (h2)

Utilisez les titres h2 (`## Section Heading`) précédés d'un séparateur (`---`) pour chaque nouvelle section principale.

### Titres de sous-section augmentant le niveau h de 1

Utilisez les titres h3 (`### Subsection Heading`) pour chaque nouvelle sous-section, et les titres h4 (`#### Sub-Subsection Heading`) pour chaque nouvelle sous-sous-section. 


### Progression du niveau h des sous-sections : 2 > 3 > 4

Les sous-titres sont mélangés dans la barre latérale si la progression h n'est pas gérée correctement.

Le marqueur de titre doit augmenter de un ou ne pas changer. 

h2 suivi de h2 ou h3 est correct. h3 suivi de h3 ou h4 est également correct. 

### Erreurs de sous-section
h2 suivi de h4 pose problème. La barre latérale place le sous-titre quelque part au-dessus du titre dans la table des matières.

### Réduction des niveaux h

Cela ne semble pas poser de problème. Par exemple, passer de h4 à h3 ou h2 est correct. 

---
## Conventions de formatage

Les styles suivants sont la norme pour ces SRD _Impératifs_ au format Markdown.

### Gras, italiques et séparateurs

- Utilisez des astérisques doubles (`**Bold**`) pour le texte en **Gras**.
- Utilisez des traits de soulignement (`_Italic_`) pour le texte en _Italique_. 
   - _Note : Évitez d'utiliser des astérisques simples pour les italiques !_
- Utilisez des barres obliques inverses (`\_`) pour « échapper » un caractère : \_Pas en italique\_.
- Utilisez des guillemets angulaires (``` `code` ```) pour créer `code blocks`.
- Utilisez trois traits d'union (`---`) pour insérer une ligne de séparation horizontale.

### Conventions pour le gras et l'italique

Efforcez-vous de respecter les modèles suivants... 

#### Titres en gras

Utilisez des titres en gras pour décrire les sorts, les effets, etc.
- **Titre Magique :** Description.

#### Titres en italique

Utilisez des titres en italique pour les « sous-listes » de variantes de sorts, etc.
- **Magie :** Description.
  - **_Variante Magique-A :_** Description.
  - **_Variante Magique-B :_** Description.

#### Références de titres en italique

Utilisez des titres en italique lors de la référence à un ouvrage tel que _Mythras Imperative_ ou le livre de règles de base _Mythras_.

---
## Formatage des listes

### Listes non ordonnées / Puces

- Les listes non ordonnées sont créées avec des traits d'union.
- Les listes non ordonnées sont créées avec des traits d'union.
  - Augmentez le niveau de retrait avec 2 espaces ou une tabulation.

### Listes ordonnées / Points numérotés

1. Les listes numérotées sont créées avec le chiffre suivi d'un point.
2. Les listes numérotées sont créées avec le chiffre suivi d'un point.
- Mélangez avec des puces
	- Et une indentation
3. Remélangez les chiffres
   - Et les puces

### Listes avec titres

Pour les listes de sous-titres associés, mettez le titre et les deux-points en gras.
- **Exemple 1 :** Bla, bla, bla...
- **Exemple 2 :** Bla, bla, bla...

### Listes avec titres en italique

Pour les listes de sous-titres associés, mettez le titre et les deux-points en gras et en italique.
- **_Exemple 1 :_** Bla, bla, bla...
- **_Exemple 2 :_** Bla, bla, bla...

---
## Tableaux

Donnez aux tableaux un sous-titre afin qu'ils apparaissent en signet dans la barre latérale, avec un retrait d'un niveau par rapport à leur section parente. 

~Mettez la ligne d'en-tête en texte gras.~ 
Rendre la ligne d'en-tête en gras l'affiche en réalité en texte normal. Le CSS par défaut met déjà cette ligne en gras.

### Alignement du texte dans les tableaux

Utilisez la ligne 2 pour l'alignement du contenu : `:--`, `:-:` ou `--:`.
Cela affectera toute la colonne.

#### Mise en page de base des tableaux

| **Colonne 1** | **Colonne 2** |
| :-: | :-- |
| 1 | alpha |
| 2 | bêta |
| 3 | gamma |

### Conventions d'alignement du texte

- Utilisez l'alignement centré pour les nombres ou les listes de valeurs similaires.
- Utilisez l'alignement à gauche pour les phrases de texte.

#### Exemple de tableau d'alignement

| **Nombre** | **Description** |
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

Il existe de nombreuses utilisations pour les liens dans le SRD et seuls quelques cas principaux sont abordés ici.

### Formatage des liens

Le formatage d'un lien se fait avec du texte entre crochets. Utilisez des crochets carrés pour le texte visible du lien, et des parenthèses pour l'URL de destination : `[Link Text](URL)`.

Dans ces documents, le lien externe le plus couramment utilisé sera le [Générateur de rencontres Mythras](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Liens externes vs internes

Les liens externes pointent vers d'autres pages via Internet et nécessitent une URL `http://example.com` ; par défaut, ils s'ouvriront _toujours_ dans un nouvel onglet du navigateur. 

Pour éviter que de multiples onglets ne surchargent le document en cours de lecture, les liens internes et les signets sont formés avec des URL relatives faisant référence aux fichiers Markdown visibles dans le dépôt GitHub. Au lieu d'ouvrir un nouvel onglet, ces liens internes feront défiler rapidement l'écran vers la section liée.

#### Exemples de liens internes

- **Liens de chapitre :** Ils pointent vers le début d'une section principale (h1), par ex. le chapitre [Combat](0005_Combat.md).

  - Format de lien : `[Combat](0005_Combat.md)`

- **Liens de sous-section :** Ils pointent vers un titre au sein d'un chapitre en référençant le document comme ci-dessus, mais en ajoutant `?id=` immédiatement suivi du titre de destination. par ex. [Attaques sautées](0005_Combat.md?id=leaping-attacks) 

  - Format de lien : `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Liens externes vers des sous-sections

Il peut arriver que vous deviez référencer une section connue d'un document externe, par exemple, un tableau spécifique dans un autre SRD. Le formatage est identique à celui des liens de sous-section ci-dessus, en utilisant simplement l'URL HTTP externe.

À titre d'exemple, voici le [Tableau de conversion impérial vers métrique](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) du [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/). 


```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Listes de magie et pouvoirs

Commencez une section « propre » avec un titre h2 pour les listes de sorts, pouvoirs, etc. disponibles ; puis utilisez h3 pour chaque élément de la liste. 

Les sorts et pouvoirs sont généralement présentés dans une seule liste plate par type de magie (Magie populaire, Théisme, etc.), mais si la liste nécessite ses propres sous-sections, comme pour les spécialisations d'école ou de culte, augmentez le niveau de titre de manière appropriée. Par exemple, h2 pour la liste des miracles du Théisme, h3 pour Culte : Mithras, et h4 pour chaque miracle du culte de Mithras. 
 
En particulier pour les sorts, mais dans toute description utilisant des attributs par mots-clés, listez-les en texte italique.

Le texte descriptif et les règles spéciales utilisent du texte normal.

### Formatage de la liste de sorts

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Exemple : liste de sorts formatée (en citation) </summary>

---
> ## Descriptions des sorts
>
> ### Avertir
> _Instantané, À distance_
>
> Avertir est utilisé pour dissiper un autre sort à portée. Avertir peut être lancé de manière réactive pour neutraliser des sorts offensifs, en utilisant l'action réactive Contre-Magie.

</details>

---
## Blocs de statistiques de véhicules
Commencez une section « propre » avec un titre h2 pour les listes, puis augmentez le niveau h comme d'habitude pour les catégories et les éléments de la liste. 

Chaque exemple listé présente les statistiques et les descriptions sous forme de liste à puces avec des titres en gras.

### Formatage du bloc de statistiques de véhicule

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```


<details>

<summary>Exemple : bloc de statistiques de véhicule formaté (en citation) </summary>

---
> ## Exemples de véhicules
> 
> ### Véhicules terrestres
> 
> #### Intercepteur
> 
> - **Coque :** 6 (Militaire moyen), 40 Structure
> 
> - **Vitesse :** Rapide
> 
> - **Systèmes :** 3
> 
> - **Traits :** Siège éjectable, Performances améliorées, Maniabilité supérieure, Suite de surveillance, Robuste, Armé
> 
> - **Armes :** Distributeur de traînée d'huile, distributeur de fumée, mitrailleuses moyennes jumelées
> 
> - **Description :** Une voiture de luxe gonflée à bloc, une voiture de sport ou similaire, cette voiture est conçue pour aller vite et rendre coup pour coup dans une bataille. C'est le genre de véhicule auquel les gens pensent quand quelqu'un dit « voiture d'espion ».

</details>

---
## Blocs de statistiques de créatures
Commencez une section « propre » avec un titre h2 pour les listes. Les blocs de statistiques de créatures utilisent des tableaux et sont plus complexes en termes de formatage et d'espace requis. Pour plus de clarté, évitez les sous-sections et ajoutez des séparateurs entre les éléments de la liste.


Chaque exemple listé doit comporter ce qui suit...

- **Titre de la créature :** Un séparateur suivi d'un en-tête h3 pour le nom de la créature.

- **Entrée MEG :** Un lien externe vers la créature spécifiée sur le [Générateur de rencontres Mythras](https://mythras.skoll.xyz/).

- **Détails de base :** Nom/type de créature, attributs, compétences et toute description spéciale ou note de personnage si nécessaire.

- **Détails des armes :** Descriptions abrégées avec des colonnes pour le nom de l'arme et les attributs suivants : Taille (incluez la Force ici), Allonge (incluez la Portée ici), Dégâts, AP/HP, et toutes règles spéciales.

- **Emplacements de coups et armure :** Les tableaux d'emplacement varieront en fonction de l'anatomie différente de la créature, mais doivent être inclus même pour les humanoïdes traditionnels comme moyen de suivre l'armure et les dégâts. 

### Formatage du bloc de statistiques de créature

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

<summary>Exemple : bloc de statistiques de créature formaté (en citation) </summary>

> ---
> ### Gobelin/Orc
> [Entrée MEG](https://mythras.skoll.xyz/enemy_template/10891/)
> 
> | Nom de la créature | Gobelin/Orc  |
> | :-- | :-- |
> | Attributs clés | FOR 11, CON 14, TAI 11, DEX 11, INT 11, POU 11, CHA 7 |
> | Points d'Action | 2 | 
> | Modificateur de dégâts | - |
> | Initiative | +11 |
> | Mouvement | 6m |
> | Capacités | Vision nocturne |
> | Compétences | Athlétisme 52%, Vigueur 42%, Tromperie 57%, Endurance 48%, Esquive 62%, Perception 61%, Mains nues 52%, Volonté 42% |
> | Style de Combat | Guerrier (Épée courte, Bouclier, Lance, Fronde) 62% |
> 
> #### Détails des armes
> 
> | Arme | Taille | Allonge | Dégâts | AP/HP | Spécial |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Épée courte | M | M | 1d6 | 6/8 | |
> | Lance | M | L | 1d8+1 | 4/5 | |
> | Fronde | L | 10/150/300 | 1d8 | 1/2 |  |
> | Bouclier | L | C | 1d4 | 4/9 | Protège 3 emplacements pour le blocage passif/garde |
> 
> #### Emplacements de coups et armure
> 
> | **1d20** | **Emplacement** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Jambe droite | 1/5 |
> | 4-6 | Jambe gauche | 1/5 |
> | 7-9 | Abdomen | 1/6 |
> | 10-12 | Thorax | 1/7 |
> | 13-15 | Bras droit | 1/4 |
> | 16-18 | Bras gauche | 1/4 |
> | 19-20 | Tête | 1/5 |


</details>


---
## Errata communautaires

### Fautes de frappe et confusion

Les modifications visant à « nettoyer » le texte des auteurs doivent rester minimes, mais les fautes de frappe et autres erreurs doivent être corrigées directement dans le texte sans signalement particulier.


### Panneaux d'information d'Errata

Lorsqu'une règle donnée est trop ambiguë, incomplète ou simplement fausse, ajoutez une note d'Errata communautaire rétractable.

Expliquez le problème en italique en utilisant uniquement le gras italique pour le titre du problème - _pas de titres h(x) !_ - afin de ne pas créer d'entrées confuses dans la barre latérale.

Si un texte de remplacement est ajouté, placez-le entre guillemets doubles en gras italique, précédé de « _Errata communautaire :_ » en italique normal.

Les règles supplémentaires, si nécessaire, doivent être présentées en texte normal.

#### Modèle de formatage des Errata

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

<summary>* Errata communautaire</summary>

_**Escalade**_

_Errata communautaire :_
_**« L'armure portée entrave les grimpeurs d'un montant égal à la moyenne des points d'armure portés. Trouvez ce chiffre en totalisant les points d'armure portés sur chaque emplacement et divisez ce chiffre par le nombre d'emplacements. »**_

_La règle telle qu'elle est écrite cause rapidement des problèmes. Porter une seule pièce d'armure de 6 PA réduirait un humain à un mouvement de 0, ce qui signifie qu'un humain portant un casque en acier et rien d'autre serait trop encombré pour grimper. Cela semble inutilement restrictif, d'où la version modifiée suggérée ci-dessus. Ceci sera mis à jour si les auteurs originaux révisent la règle telle qu'elle est écrite._

</details>

<details>

<summary>* Errata communautaire</summary>

_**Allures : Marche, Course, Sprint**_

_La version publiée de _Mythras Imperative_ ne contient aucune règle explicite pour se déplacer à différentes allures, bien qu'elles soient couvertes dans le livre de règles de base de Mythras. Les multiplicateurs d'allure ci-dessus ont été ajoutés dans le cadre de l'Errata communautaire._ 

_Si nécessaire, il devrait suffire de traiter les allures comme suit :_

- _Les allures plus rapides que la marche appliquent un multiplicateur à la valeur de Mouvement : 3x pour la course, 5x pour le sprint._

- _En allure de Course ou de Sprint, les personnages ne peuvent pas tenter la plupart des actions proactives comme attaquer ou lancer des sorts. Certaines exceptions incluent..._
  - _Les attaques lors de l'utilisation des règles de Charge._
  - _Le tir d'armes à distance avec le trait Escarmouche._ 
- _En règle générale, toutes les actions autorisées doivent être traitées comme étant un degré plus difficiles à réaliser en Course, et deux degrés plus difficiles en Sprint._


</details>

---
## Avertissements divers

### Lignes vides / Retours chariot

Laissez une ligne vide entre les différents types d'entrées. Titres, séparateurs, tableaux, etc. Celles-ci ne seront pas visibles dans la vue de lecture, mais leur absence peut causer des problèmes de formatage.

### Texte en gras ou en italique sur plusieurs paragraphes

Chaque paragraphe doit être marqué comme texte en gras ou en italique. La nouvelle ligne entre les paragraphes brisera le formatage, laissant des marques de formatage orphelines.

### Orthographe internationale

Les puissances régressives et déplorables ont jugé bon de supprimer toutes les orthographes britanniques au profit des versions américaines, objectivement plus faibles. Soyez à l'affût des mots britanniques en -OUR : _armour_, _favour_, etc.