# Handbók um stíl (h1)

Notaðu h1-fyrirsagnir (`# Heading Title`) fyrir aðalheiti kafla. Allar hx-fyrirsagnir birtast í hliðarstikunni sem bókamerki.

Ef titillinn er ekki h1-fyrirsögn mun hliðarstikan sýna villu þar sem hún tvítekur síðuna og síðan h2-„titilinn“.

---
## Fyrirsagnir hluta (h2)

Notaðu h2-fyrirsagnir (`## Section Heading`) á undan skilju (`---`) fyrir hvern nýjan aðalhluta.

### Undirfyrirsagnir hækka h-stigið um 1

Notaðu h3-fyrirsagnir (`### Subsection Heading`) fyrir hvern nýjan undirhluta, og h4-fyrirsagnir (`#### Sub-Subsection Heading`) fyrir hvern nýjan undir-undirhluta. 


### H-stigaþróun undirhluta: 2 > 3 > 4

Undirfyrirsagnirnar ruglast í hliðarstikunni ef h-þróun er ekki meðhöndluð rétt.

Fyrirsagnarmerkið ætti að hækka um eitt eða ekki neitt. 

h2 á eftir h2 eða h3 er í lagi. h3 á eftir h3 eða h4 er líka í lagi. 

### Villur í undirhlutum
h2 á eftir h4 veldur vandræðum. Hliðarstikan setur undirfyrirsögnina einhvers staðar fyrir ofan aðalfyrirsögnina í efnisyfirlitinu.

### Lækkun h-stiga

Þetta virðist ekki vera vandamál. t.d. h4 yfir í h3 eða h2 er í lagi. 

---
## Sniðvenjur

Eftirfarandi stílar eru viðmið fyrir þessi _Imperative_ SRD-skjöl á Markdown-sniði.

### Feitletrun, skáletrun og skiljur

- Notaðu tvöföld stjörnumerki (`**Bold**`) fyrir **feitletraðan** texta.
- Notaðu undirstrikanir (`_Italic_`) fyrir _skáletraðan_ texta. 
   - _ath: Forðastu að nota stök stjörnumerki fyrir skáletrun!_
- Notaðu bakskástrik (`\_`) til að „sleppa“ tákni: \_Ekki skáletrað\_.
- Notaðu hornklofa (``` `code` ```) til að búa til `code blocks`.
- Notaðu þrjú bandstrik (`---`) til að setja inn lárétta skiljulínu.

### Venjur fyrir feitletrun og skáletrun

Reyndu að halda þig við eftirfarandi mynstur... 

#### Feitletraðir titlar

Notaðu feitletraða titla þegar lýst er göldrum, áhrifum o.s.frv.
- **Galdratitill:** Lýsing.

#### Skáletraðir titlar

Notaðu skáletraða titla fyrir „undirlista“ af afbrigðagöldrum o.s.frv.
- **Galdur:** Lýsing.
  - **_Galdraafbrigði-A:_** Lýsing.
  - **_Galdraafbrigði-B:_** Lýsing.

#### Skáletraðar titlavísanir

Notaðu skáletraða titla þegar vísað er í bók eins og _Mythras Imperative_ eða grunnreglur _Mythras_.

---
## Snið lista

### Óraðaðir listar / Punktalistar

- Óraðaðir listar eru gerðir með bandstrikum.
- Óraðaðir listar eru gerðir með bandstrikum.
  - Auka inndrátt með 2 bilum eða dálki (tab).

### Raðaðir listar / Númeraðir punktar

1. Númeraðir listar eru gerðir með tölustaf og punkti.
2. Númeraðir listar eru gerðir með tölustaf og punkti.
- Blanda saman við punktalista
	- Og inndrátt
3. Blanda tölum aftur inn
   - Og punktum

### Titlaðir listar

Fyrir lista yfir tengdar undirfyrirsagnir skal feitletra titilinn og tvípunktinn.
- **Dæmi 1:** Bla, bla, bla...
- **Dæmi 2:** Bla, bla, bla...

### Skáletraðir titlaðir listar

Fyrir lista yfir tengdar undirfyrirsagnir skal feitletra og skáletra titilinn og tvípunktinn.
- **_Dæmi 1:_** Bla, bla, bla...
- **_Dæmi 2:_** Bla, bla, bla...

---
## Töflur

Gefðu töflum undirfyrirsögn svo þær birtist sem bókamerki í hliðarstikunni, inndregnar um eitt stig frá foreldrahlutanum. 

~Gera skal hausraðir feitletraðar.~ 
Að gera hausröð feitletraða birtir hana reyndar sem venjulegan texta. Sjálfgefin CSS-stilling hefur þá röð feitletraða.

### Jöfnun töflutexta

Notaðu röð 2 fyrir jöfnun efnis: `:--`, `:-:`, eða `--:`.
Þetta mun hafa áhrif á allan dálkinn.

#### Grunnskipulag taflna

| **Dálkur 1** | **Dálkur 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gamma |

### Venjur fyrir jöfnun texta

- Notaðu miðju fyrir tölur eða svipaða lista yfir gildi.
- Notaðu vinstrijöfnun fyrir heilar setningar.

#### Dæmi um jöfnunartöflu

| **Númer** | **Lýsing** |
| :-: | :-- |
| 1 | Lýsandi texti |
| 2 | Lýsandi texti |
| 3 | Lýsandi texti |

#### Dæmi: Tafla yfir styrk elds

| **Styrkur** | **Dæmi** | **Tími til íkveikju** | **Tjón** |
| :-: | :-- | :-: | :-: |
| 1 | Kerti | 1d4 | 1d2 |
| 2 | Kyndill | 1d3 | 1d4 |
| 3 | Varðeldur | 1d2 | 1d6 |
| 4 | Eldsvoði í herbergi | 1d2 | 2d6 |
| 5 | Eldfjallalava | Augnablik | 3d6 |

---
## Tenglar

Það eru margar leiðir til að nota tengla í SRD og aðeins örfá tilfelli eru tekin fyrir hér.

### Snið tengla

Að sniða tengil er gert með texta í svigum. Notaðu ferkantaða sviga fyrir sýnilegan texta tengilsins, og hringsviga fyrir slóðina: `[Link Text](URL)`.

Í þessum skjölum verður algengasti ytri tengillinn [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Ytri vs. innri tenglar

Ytri tenglar vísa á aðrar síður á netinu og þurfa `http://example.com` slóð og, sjálfgefið, opnast þeir _alltaf_ í nýjum vafraglugga. 

Til að forðast marga glugga sem ringla skjalið sem verið er að lesa, eru innri tenglar og bókamerki mynduð með hlutfallslegum slóðum sem vísa í Markdown-skrárnar sem sjást í GitHub-geymslunni. Í stað nýs glugga munu þessir innri tenglar skruna hratt að tengda hlutanum.

#### Dæmi um innri tengla

- **Kaflatenglar:** Þessir benda á upphaf aðalhluta (h1). t.d. [Bardaga](0005_Combat.md) kaflann.

  - Tenglasnið: `[Combat](0005_Combat.md)`

- **Undirhlutatenglar:** Þessir benda á fyrirsögn innan kafla sem vísar í skjalið eins og að ofan en bætir við `?id=` og síðan viðkomandi fyrirsögn. t.d. [Stökksárásir](0005_Combat.md?id=leaping-attacks) 

  - Tenglasnið: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Ytri tenglar á undirhluta

Það getur komið fyrir að vísa þurfi í þekktan hluta ytra skjals, til dæmis sérstaka töflu í öðru SRD. Sniðið er það sama og með undirhlutatengla, hér að ofan, nema notað er ytra HTTP-slóð.

Sem dæmi, hér er [Tafla fyrir umreikning úr breskum mælieiningum yfir í metrakerfið](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) frá [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/). 


```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Listar yfir galdra og krafta

Byrjaðu „hreinan“ hluta með h2-fyrirsögn fyrir lista yfir tiltæka galdra, krafta o.s.frv.; síðan h3 fyrir hvern lið í listanum. 

Galdrar og kraftar eru venjulega kynntir í einum flötum lista eftir tegund galdra (Folk Magic, Theism, o.s.frv.) en ef listinn krefst eigin undirhluta, svo sem skóla eða sérhæfinga trúflokka, skal hækka fyrirsagnarstigið eftir þörfum. Til dæmis h2 fyrir lista yfir Theism-kraftaverk, h3 fyrir Cult: Mithras, og h4 fyrir hvert kraftaverk Mithras-trúflokksins. 
 
Sérstaklega þegar kemur að göldrum, en einnig í öllum lýsingum þar sem notaðir eru eiginleikalyklar, skal skrá þá í skáletruðum texta.

Lýsandi texti og sérreglur nota venjulegan texta.

### Snið galdralista

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Dæmi: sniðinn galdralisti (í tilvitnunarblokk) </summary>

---
> ## Lýsingar galdra
>
> ### Avert
> _Augnablik, Fjarstætt_
>
> Avert er notað til að stöðva annan galdur innan drægni. Avert má kasta sem viðbragð til að gera óvirka sóknargaldra, með því að nota Counter Magic Reactive Action.

</details>

---
## Stat-blokkir ökutækja
Byrjaðu „hreinan“ hluta með h2-fyrirsögn fyrir listana, hækkaðu síðan h-stigið eins og venjulega fyrir flokka og liði. 

Hvert dæmi sem skráð er hefur tölfræði og lýsingar kynntar sem punktalista með feitletruðum titlum.

### Snið stat-blokkar ökutækis

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```


<details>

<summary>Dæmi: sniðin stat-blokk fyrir ökutæki (í tilvitnunarblokk) </summary>

---
> ## Dæmi um ökutæki
> 
> ### Ökutæki á landi
> 
> #### Interceptor
> 
> - **Skrokkur:** 6 (Meðal hernaðarlegur), 40 Burðarvirki
> 
> - **Hraði:** Hraður
> 
> - **Kerfi:** 3
> 
> - **Eiginleikar:** Ejector Seat, Enhanced Performance, Superior Handling, Surveillance Suite, Tough, Weaponized
> 
> - **Vopn:** Olíuleki, reykkastari, tvöföld vélbyssa
> 
> - **Lýsing:** Sérútbúinn lúxusbíll, sportbíll eða álíka; þessi bíll er smíðaður til að fara hratt og standa sig vel í bardaga. Þetta er sú tegund ökutækis sem fólk hugsar um þegar einhver segir „njósnabíll“.

</details>

---
## Stat-blokkir fyrir verur
Byrjaðu „hreinan“ hluta með h2-fyrirsögn fyrir listana. Stat-blokkir fyrir verur nota töflur og eru flóknari varðandi snið og plássþörf. Til skýrleika, forðastu undirhluta og bættu við skiljum á milli listaatriða.


Hvert dæmi sem skráð er ætti að innihalda eftirfarandi...

- **Titill veru:** Skilja á eftir h3-fyrirsögn fyrir nafn verunnar.

- **MEG-færsla:** Ytri tengill á tiltekna veru á [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Grunnupplýsingar:** Nafn veru/tegund, eiginleikar, færni og allar sérstakar lýsingar eða athugasemdir eins og þörf er á.

- **Vopnaupplýsingar:** Stuttar lýsingar með dálkum fyrir nafn vopns og eftirfarandi eiginleika: Stærð (innihaldi Kraft hér), Drægni (innihaldi svið hér), Tjón, AP/HP, og allar sérreglur.

- **Hit Locations & Armor (Höggstaðir og brynja):** Staðsetningartöflur verða mismunandi eftir líffærafræði verunnar en ættu að vera með jafnvel fyrir hefðbundnar manneskjur sem leið til að rekja brynju og tjón. 

### Snið stat-blokkar fyrir verur

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

<summary>Dæmi: sniðin stat-blokk fyrir veru (í tilvitnunarblokk) </summary>

> ---
> ### Tröll/Orki
> [MEG-færsla](https://mythras.skoll.xyz/enemy_template/10891/)
> 
> | Nafn veru | Tröll/Orki  |
> | :-- | :-- |
> | Lykileiginleikar | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Action Points | 2 | 
> | Tjónabreyting | - |
> | Frumkvæði | +11 |
> | Hreyfing | 6m |
> | Hæfileikar | Nætursjón |
> | Færni | Athletics 52%, Brawn 42%, Deceit 57%, Endurance 48%, Evade 62%, Perception 61%, Unarmed 52%, Willpower 42% |
> | Bardagastíll | Warrior (Shortsword, Shield, Spear, Sling) 62% |
> 
> #### Vopnaupplýsingar
> 
> | Vopn | Stærð | Drægni | Tjón | AP/HP | Sérstakt |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Shortsword | M | M | 1d6 | 6/8 | |
> | Spear | M | L | 1d8+1 | 4/5 | |
> | Sling | L | 10/150/300 | 1d8 | 1/2 |  |
> | Shield | L | S | 1d4 | 4/9 | Verndar 3 staði við Passive Blocking/Warding |
> 
> #### Höggstaðir og brynja
> 
> | **1d20** | **Staðsetning** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Hægri fótur | 1/5 |
> | 4-6 | Vinstri fótur | 1/5 |
> | 7-9 | Kviður | 1/6 |
> | 10-12 | Brjóst | 1/7 |
> | 13-15 | Hægri handleggur | 1/4 |
> | 16-18 | Vinstri handleggur | 1/4 |
> | 19-20 | Höfuð | 1/5 |


</details>


---
## Samfélagslegur Leiðréttingarlisti (Errata)

### Villur og ruglingur

Breytingar til að „hreinsa upp“ texta höfunda ættu að vera í lágmarki en villur og önnur mistök ætti bara að breyta beint án þess að merkja það sérstaklega.


### Errata Upplýsingaspjöld

Þar sem tiltekin regla er of tvíræð, ófullkomin eða einfaldlega röng, skal bæta við samanbrjótanlegri athugasemd um samfélagslega leiðréttingu (Community Errata).

Útskýrðu vandamálið með skáletruðum texta og notaðu einungis feitletraðan skáletraðan texta fyrir titil málsins - _engar h(x) fyrirsagnir!_ - svo það búi ekki til ruglingslegar færslur í hliðarstikunni.

Ef skiptitexta er bætt við skal setja hann innan gæsalappa með feitletruðu skáletri, á undan honum skal standa „_Community Errata:_“ með venjulegri skáletrun.

Viðbótarreglur, ef þeirra er þörf, ættu að vera kynntar með venjulegum texta.

#### Sniðmátsgerð fyrir Errata

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Errata Dæmi

<details>

<summary>* Community Errata</summary>

_**Climb (Klifra)**_

_Community Errata:_
_**"Brynja hamlar klifrurum um upphæð sem jafngildir meðaltali brynjuverðstiganna (AP) sem borin eru. Finndu þetta með því að leggja saman allar brynjuverðstig allra staða og deila þeirri tölu með fjölda staða."**_

_Reglan eins og hún er skrifuð veldur fljótt vandræðum. Að bera eitt stykki af 6AP brynju myndi minnka hreyfingu manneskju niður í 0, sem þýðir að manneskja í stálhjálmi og engu öðru væri of ofhlaðin til að klifra yfirhöfuð. Þetta virðist óeðlilega hamlandi, þess vegna er breytta útgáfan hér að ofan lögð til. Þetta verður uppfært ef upprunalegu höfundarnir endurskoða regluna eins og hún er skrifuð._

</details>

<details>

<summary>* Community Errata</summary>

_**Gaits: Walk (Gangur), Run (Hlaup), Sprint (Sprettur)**_

_Útgefna útgáfan af _Mythras Imperative_ hefur engar sérstakar reglur fyrir hreyfingu á mismunandi göngulagi (Gaits), þó að þær séu fjallaðar um í Mythras grunnreglubókinni. Margfeldisstuðlarnir hér að ofan hafa verið bætt við sem hluti af Community Errata._ 

_Þar sem þess er þörf ætti að vera nóg að meðhöndla göngulag sem hér segir:_

- _Göngulag sem er hraðara en Walk (Gangur) beitir margfeldisstuðli á hreyfinguna (Move rating): 3x fyrir Run (Hlaup), 5x fyrir Sprint (Sprettur)._

- _Á meðan karakter er á göngulagi Run eða Sprint geta þeir ekki reynt flestar fyrirbyggjandi aðgerðir eins og að ráðast á eða kasta göldrum. Sumar undantekningar fela í sér..._
  - _Árásir þegar notaðar eru Charging (Hlaupárásar) reglur._
  - _Að skjóta langdrægum vopnum með Skirmishing eiginleikanum._ 
- _Sem almenn regla ætti að meðhöndla allar leyfðar aðgerðir sem eitt stig erfiðari við Run, og tvö stig erfiðari við Sprint._


</details>

---
## Ýmis viðvörun

### Auðar línur / Vagnskil

Skildu eftir auða línu á milli mismunandi gerða færslna. Fyrirsagnir, skiljur, töflur o.s.frv. Þetta verður ekki sýnilegt í lestrarham en skortur á þeim getur valdið vandræðum með snið.

### Feitletraður eða skáletraður fjölmáls-texti

Hver málsgrein verður að vera merkt sem feitletruð eða skáletruð. Nýja línan á milli málsgreina mun rjúfa sniðið og skilja eftir munaðarlaus sniðmerki.

### Alþjóðleg stafsetning

Reglusamir og aumkunarverðir kraftar hafa séð ástæðu til að fjarlægja alla breska stafsetningu í þágu þeirra veikari bandarísku útgáfa. Vertu á varðbergi gagnvart breskum -OUR orðum: _armour_, _favour_, o.s.frv.