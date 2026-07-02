# Pamagat ng Gabay sa Estilo (h1)

Gamitin ang h1 heading (`# Heading Title`) para sa pangunahing pamagat ng kabanata. Lahat ng hx heading ay lalabas sa sidebar bilang mga bookmark.

Kung ang pamagat ay hindi isang h1 heading, magkakaroon ng error sa pagdoble ang sidebar na nagpapakita ng pahina at pagkatapos ay ang h2 na 'pamagat' na heading.

---
## Mga Pamagat ng Seksyon (h2)

Gamitin ang h2 heading (`## Section Heading`) na sinundan ng divider (`---`) para sa bawat bagong pangunahing seksyon.

### Mga Pamagat ng Subsection na may Dagdag na h-level ng 1

Gamitin ang h3 heading (`### Subsection Heading`) para sa bawat bagong Subsection, at h4 heading (`#### Sub-Subsection Heading`) para sa bawat bagong sub-subsection.

### Pag-usad ng h-level ng Subsection: 2 > 3 > 4

Nagkakagulo ang mga sub-heading sa sidebar kung hindi tama ang pagharap sa h-progression.

Ang heading marker ay dapat tumaas ng isa o walang pagbabago.

Ang h2 na sinusundan ng h2 o h3 ay ayos lang. Ang h3 na sinusundan ng h3 o h4 ay ayos din.

### Mga Error sa Subsection
Ang h2 na sinusundan ng h4 ay nagdudulot ng problema. Inilalagay ng sidebar ang sub-heading sa isang lugar sa itaas ng heading sa table of contents.

### Pagbabawas ng h-levels

Mukhang hindi ito isyu. Hal. Ang h4 patungo sa h3 o h2 ay ayos lang.

---
## Mga Kombensyon sa Pag-format

Ang mga sumusunod na estilo ang pamantayan para sa mga _Imperative_ SRD na ito sa Markdown format.

### Bold, Italics at mga Divider

- Gumamit ng double asterisk (`**Bold**`) para sa **Bold** na teksto.
- Gumamit ng underscore (`_Italic_`) para sa _Italic_ na teksto.
  - _nb: Iwasan ang paggamit ng single asterisk para sa Italics!_
- Gumamit ng backslash (`\_`) upang 'i-escape' ang isang character: \_Hindi Italic\_.
- Gamitin ang angled quotes (``` `code` ```) para makagawa ng `code blocks`.
- Gumamit ng tatlong hyphen (`---`) upang maglagay ng pahalang na linyang naghahati.

### Mga Kombensyon para sa Bold at Italic

Subukang sundin ang mga sumusunod na pattern...

#### Mga Pamagat na Bold

Gamitin ang mga pamagat na bold para sa paglalarawan ng mga spell, epekto atbp.
- **Pamagat ng Salamangka:** Deskripsyon.

#### Mga Pamagat na Italic

Gamitin ang mga pamagat na italic para sa 'sub-list' ng mga variant spell atbp.
- **Salamangka:** Deskripsyon.
  - **_Variant-A ng Salamangka:_** Deskripsyon.
  - **_Variant-B ng Salamangka:_** Deskripsyon.

#### Mga Sanggunian ng Pamagat na Italic

Gamitin ang mga pamagat na italic kapag sumasangguni sa isang libro tulad ng _Mythras Imperative_ o ang pangunahing _Mythras_ ruleset.

---
## Pag-format ng Listahan

### Mga Di-Nakaayos na Listahan / Mga Bullet Point

- Ang mga di-nakaayos na listahan ay ginagawa gamit ang mga hyphen.
- Ang mga di-nakaayos na listahan ay ginagawa gamit ang mga hyphen.
  - Taasan ang indent level ng 2 espasyo o isang tab.

### Mga Nakaayos na Listahan / Mga Numbered Point

1. Ang mga numbered list ay ginagawa gamit ang digit at isang tuldok/period.
2. Ang mga numbered list ay ginagawa gamit ang digit at isang tuldok/period.
- Paghalo sa mga bullet point
	- At indentation
3. Paghalo muli ng mga numero
   - At mga bullet

### Mga Listahang may Pamagat

Para sa mga listahan ng mga kaugnay na sub-heading, gawing bold ang pamagat at colon.
- **Halimbawa 1:** Bla, bla, bla...
- **Halimbawa 2:** Bla, bla, bla...

### Mga Listahang may Pamagat na Italic

Para sa mga listahan ng mga kaugnay na sub-heading, gawing bold at italic ang pamagat at colon.
- **_Halimbawa 1:_** Bla, bla, bla...
- **_Halimbawa 2:_** Bla, bla, bla...

---
## Mga Talahanayan

Bigyan ang mga talahanayan ng isang sub-header upang lumabas sila na may bookmark sa sidebar, naka-indent ng isang level mula sa kanilang parent section.

~Gawing bold na teksto ang heading row.~
Ang paggawa ng header row na bold ay nagre-render nito sa normal na teksto. Ang default na CSS ay may bold na row na iyon.

### Pag-align ng Teksto sa Talahanayan

Gamitin ang row 2 para sa pag-align ng nilalaman: `:--`, `:-:`, o `--:`.
Ito ay makakaapekto sa buong column.

#### Batayang Layout ng mga Talahanayan

| **Column 1** | **Column 2** |
| :-: | :-- |
| 1 | alpha |
| 2 | beta |
| 3 | gamma |

### Mga Kombensyon sa Pag-align ng Teksto

- Gamitin ang center alignment para sa mga numero o katulad na listahan ng halaga.
- Gamitin ang left alignment para sa mga pangungusap ng teksto.

#### Halimbawang Talahanayan ng Pag-align

| **Numero** | **Deskripsyon** |
| :-: | :-- |
| 1 | Deskriptibong teksto |
| 2 | Deskriptibong teksto |
| 3 | Deskriptibong teksto |

#### Halimbawa: Talahanayan ng Tindi ng Apoy

| **Tindi** | **Mga Halimbawa** | **Oras para Magliyab** | **Pinsala** |
| :-: | :-- | :-: | :-: |
| 1 | Kandila | 1d4 | 1d2 |
| 2 | Sulo | 1d3 | 1d4 |
| 3 | Campfire | 1d2 | 1d6 |
| 4 | Pagliayab na pumupuno sa kwarto | 1d2 | 2d6 |
| 5 | Lava ng Bulkan | Agad | 3d6 |

---
## Mga Link

Maraming gamit para sa mga link sa SRD at iilan lamang ang pangunahing kaso na sakop dito.

### Pag-format ng mga Link

Ang pag-format ng isang link ay ginagawa gamit ang bracketed text. Gamitin ang square brackets para sa nakikitang teksto ng link, at curved brackets para sa destination URL: `[Link Text](URL)`.

Sa mga dokumentong ito ang pinakakaraniwang ginagamit na panlabas na link ay ang [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Panlabas kumpara sa Panloob na mga Link

Ang mga panlabas na link ay napupunta sa ibang mga pahina sa pamamagitan ng internet at kakailanganin ang isang `http://example.com` URL at, bilang default, ay _palaging_ magbubukas sa isang bagong browser tab.

Upang hindi magkumpol-kumpol ang maraming tab sa dokumentong binabasa, ang mga panloob na link at bookmark ay binubuo gamit ang mga relative URL na tumutukoy sa mga markdown file na nakikita sa GitHub repository. Sa halip na isang bagong tab, ang mga panloob na link na ito ay mabilis na mag-i-scroll sa naka-link na seksyon.

#### Mga Halimbawa ng Panloob na Link

- **Mga Link sa Kabanata:** Tumuturo ang mga ito sa simula ng isang pangunahing (h1) seksyon. Hal. ang kabanata ng [Combat](0005_Combat.md).

  - Format ng Link: `[Combat](0005_Combat.md)`

- **Mga Link sa Subsection:** Tumuturo ang mga ito sa isang heading sa loob ng isang kabanata na tumutukoy sa dokumento tulad ng nasa itaas ngunit dinaragdagan ng `?id=` na kaagad na sinusundan ng heading ng destinasyon. Hal. [Leaping Attacks](0005_Combat.md?id=leaping-attacks)

  - Format ng Link: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Mga Panlabas na Link sa mga Subsection

Maaaring may pagkakataon na sumangguni sa isang kilalang seksyon ng isang panlabas na dokumento, halimbawa, isang tiyak na talahanayan sa isa pang SRD. Ang pag-format ay pareho sa mga link ng subsection, sa itaas, gamit lamang ang panlabas na HTTP URL.

Bilang halimbawa, narito ang [Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) mula sa [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/).

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Mga Listahan ng Salamangka at Kapangyarihan

Magsimula ng 'malinis' na seksyon na may h2 heading para sa mga listahan ng magagamit na spell, kapangyarihan atbp; pagkatapos ay h3 para sa bawat item ng listahan.

Ang mga spell at kapangyarihan ay karaniwang inilalahad sa isang solong flat list ayon sa uri ng magic (Folk Magic, Theism, atbp) ngunit kung ang listahan ay nangangailangan ng sarili nitong mga subsection, tulad ng mga school o kultong espesyalismo, taasan ang heading level nang naaangkop. Halimbawa, h2 para sa Theism Miracles List, h3 para sa Cult: Mithras, at h4 para sa bawat Mithras cult miracle.

Lalo na sa kaso ng mga spell, ngunit sa anumang deskripsyon na gumagamit ng keyword attributes, ilista ang mga ito sa italic text.

Ang deskriptibong teksto at mga espesyal na tuntunin ay gumagamit ng normal na teksto.

### Pag-format ng Listahan ng Spell

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Halimbawa: naka-format na listahan ng spell (block quoted) </summary>

---
> ## Mga deskripsyon ng Spell
>
> ### Avert
> _Instant, Ranged_
>
> Ang Avert ay ginagamit upang paalisin ang isa pang spell sa loob ng range. Maaaring i-cast ang Avert nang reactive upang i-neutralize ang mga offensive spell, sa pamamagitan ng paggamit ng Counter Magic Reactive Action.

</details>

---
## Mga Stat Block ng Sasakyan
Magsimula ng 'malinis' na seksyon na may h2 heading para sa mga listahan, pagkatapos ay taasan ang h-level gaya ng dati para sa mga kategorya at item ng listahan.

Ang bawat nakalistang halimbawa ay may mga stats at deskripsyon na inilalahad bilang isang listahan ng bullet point na may mga bolded point title.

### Pag-format ng Stat Block ng Sasakyan

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Halimbawa: naka-format na stat block ng sasakyan (block quoted) </summary>

---
> ## Mga Halimbawang Sasakyan
>
> ### Mga Sasakyan sa Lupa
>
> #### Interceptor
>
> - **Hull:** 6 (Medium Military), 40 Structure
>
> - **Bilis:** Mabilis
>
> - **Sistema:** 3
>
> - **Mga Katangian:** Ejector Seat, Pinahusay na Pagganap, Superior Handling, Surveillance Suite, Matibay, Weaponized
>
> - **Mga Armas:** Oil slick dispenser, smoke dispenser, twin linked medium machine guns
>
> - **Deskripsyon:** Isang pinagandang luxury car, sports car o katulad nito, ang sasakyang ito ay binuo upang bumilis at maging kasinghusay sa labanan. Ito ang uri ng sasakyan na iniisip ng mga tao kapag sinabi ng isang tao na, "spy car."

</details>

---
## Mga Stat Block ng Nilalang
Magsimula ng 'malinis' na seksyon na may h2 heading para sa mga listahan. Ang mga stat block ng nilalang ay gumagamit ng mga talahanayan at mas kumplikado sa mga tuntunin ng pag-format at kinakailangan sa espasyo. Para sa kalinawan, iwasan ang mga subsection at magdagdag ng mga divider sa pagitan ng mga item ng listahan.

Ang bawat nakalistang halimbawa ay dapat may sumusunod...

- **Pamagat ng Nilalang:** Isang divider na sinusundan ng h3 header para sa pangalan ng nilalang.

- **MEG entry:** Isang panlabas na link sa tinukoy na nilalang sa [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Mga Pangunahing Detalye:** Pangalan/uri ng nilalang, mga katangian, mga kasanayan at anumang espesyal na deskripsyon o mga tala ng karakter kung kinakailangan.

- **Mga Detalye ng Armas:** Mga pinaikling deskripsyon na may mga column para sa pangalan ng armas at ang mga sumusunod na katangian: Laki (isama ang Force dito), Abot (isama ang Range dito), Pinsala, AP/HP, at anumang espesyal na tuntunin.

- **Mga Hit Location at Armor:** Ang mga talahanayan ng lokasyon ay magkakaiba batay sa iba't ibang anatomy ng nilalang ngunit dapat isama kahit para sa mga tradisyonal na humanoid bilang isang paraan upang subaybayan ang armor at pinsala.

### Pag-format ng Stat Block ng Nilalang

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

<summary>Halimbawa: naka-format na talahanayan ng stat block ng nilalang (block quoted) </summary>

> ---
> ### Goblin/Orc
> [MEG entry](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Pangalan ng Nilalang | Goblin/Orc |
> | :-- | :-- |
> | Pangunahing Katangian | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Action Points | 2 |
> | Damage Modifier | - |
> | Initiative | +11 |
> | Galaw | 6m |
> | Kakayahan | Night Sight |
> | Kasanayan | Athletics 52%, Brawn 42%, Deceit 57%, Endurance 48%, Evade 62%, Perception 61%, Unarmed 52%, Willpower 42% |
> | Estilo ng Labanan | Warrior (Shortsword, Shield, Spear, Sling) 62% |
>
> #### Mga Detalye ng Armas
>
> | Armas | Laki | Abot | Pinsala | AP/HP | Espesyal |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Shortsword | M | M | 1d6 | 6/8 | |
> | Spear | M | L | 1d8+1 | 4/5 | |
> | Sling | L | 10/150/300 | 1d8 | 1/2 | |
> | Shield | L | S | 1d4 | 4/9 | Nagpoprotekta ng 3 lokasyon para sa Passive Blocking/Warding |
>
> #### Mga Hit Location at Armor
>
> | **1d20** | **Lokasyon** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Kanang Paa | 1/5 |
> | 4-6 | Kaliwang Paa | 1/5 |
> | 7-9 | Tiyan | 1/6 |
> | 10-12 | Dibdib | 1/7 |
> | 13-15 | Kanang Braso | 1/4 |
> | 16-18 | Kaliwang Braso | 1/4 |
> | 19-20 | Ulo | 1/5 |

</details>

---
## Errata ng Komunidad

### Mga Typo at Pagkalito

Ang mga pag-edit upang 'linisin' ang teksto ng mga may-akda ay dapat panatilihing minimal ngunit ang mga typo at iba pang pagkakamali ay dapat lamang palitan nang inline nang walang anumang senyas.

### Mga Panel ng Impormasyon ng Errata

Kung ang isang partikular na tuntunin ay masyadong malabo, hindi kumpleto, o simpleng mali, magdagdag ng isang collapsible na tala ng Community Errata.

Ipaliwanag ang isyu sa italics gamit lamang ang bold italics para sa pamagat ng isyu - _walang h(x) headers!_ - upang hindi makalikha ng nakalilitong mga entry sa sidebar.

Kung ang kapalit na teksto ay idinagdag, ilagay ito sa double-quotes sa bold italic, na sinundan ng "_Community Errata:_" sa normal na bigat ng italics.

Ang mga karagdagang tuntunin, kung kinakailangan, ay dapat ilahad sa normal na bigat ng teksto.

#### Template ng Pag-format ng Errata

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Mga Halimbawa ng Errata

<details>

<summary>* Errata ng Komunidad</summary>

_**Umakyat**_

_Errata ng Komunidad:_
_**"Ang suot na armor ay humahadlang sa mga umaakyat sa dami na katumbas ng average ng suot na Armor Points. Hanapin ito sa pamamagitan ng pagtotal ng worn armor points ng bawat lokasyon at hatiin ang figure na iyon sa bilang ng mga lokasyon."**_

_Mabilis na nagdudulot ng problema ang nakasulat na tuntunin. Ang pagsusuot ng isang piraso ng 6AP armor ay magpapababa sa isang tao sa Move 0 na nangangahulugang ang isang tao na nakasuot ng steel helmet at wala nang iba pa ay masyadong labis ang karga para makasampa. Mukhang hindi makatwirang mahigpit ito kaya ang inirekumendang binagong bersyon sa itaas. Ito ay ia-update kung babaguhin ng mga orihinal na may-akda ang nakasulat na tuntunin._

</details>

<details>

<summary>* Errata ng Komunidad</summary>

_**Mga Gait: Lakad, Takbo, Sprint**_

_Ang inilathalang bersyon ng _Mythras Imperative_ ay walang tahasang tuntunin para sa paggalaw sa iba't ibang Gait bagama't sakop ang mga ito sa Mythras core rulebook. Ang mga Gait multiplier sa itaas ay idinagdag bilang bahagi ng Community Errata._

_Kung kinakailangan, dapat sapat na ituring ang mga Gait tulad ng sumusunod:_

- _Ang mga Gait na mas mabilis kaysa Lakad ay naglalapat ng multiplier sa rating ng Galaw: 3x para sa Takbo, 5x para sa Sprint._

- _Habang nasa Gait ng Takbo o Sprint, hindi maaaring subukan ng mga karakter ang karamihan sa mga proaktibong aksyon tulad ng pag-atake o pag-spell. Ang ilang eksepsyon ay kinabibilangan ng..._
  - _Mga pag-atake kapag ginagamit ang mga tuntunin ng Charging._
  - _Pagpapaputok ng mga ranged weapon na may katangian ng Skirmishing._
- _Bilang pangkalahatang tuntunin, anumang pinahintulutang aksyon ay dapat ituring na isang Grade na mas mahirap gawin sa Takbo, at dalawang Grades na mas mahirap sa Sprint._

</details>

---
## Iba't Ibang Babala

### Mga Blankong Linya / Carriage Return

Mag-iwan ng isang blankong linya sa pagitan ng iba't ibang uri ng entry. Mga Header, divider, talahanayan atbp. Hindi ito magpapakita sa reading view ngunit ang kanilang kawalan ay maaaring magdulot ng mga isyu sa pag-format.

### Bold o Italic na Multi-paragraph na Teksto

Ang bawat talata ay kailangang markahan bilang bold o italic na teksto. Ang bagong linya sa pagitan ng mga talata ay sisira sa pag-format na nag-iiwan ng mga naulila na marka ng pag-format.

### Mga Internasyonal na Pagbaybay

Nakita ng mga reaksyonaryo at kalunos-lunos na kapangyarihan na alisin ang lahat ng British spellings pabor sa obhetibong mas mahinang bersyon ng US. Hanapin ang mga salitang British na nagtatapos sa -OUR: _armour_, _favour_, atbp.