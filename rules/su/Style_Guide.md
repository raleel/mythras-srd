# Gid sytel (h1)

Używaj nagłówków h1 (`# Heading Title`) dla głównego tytułu rozdziału. Wszystkie nagłówki hx pojawią się w pasku bocznym jako zakładki.

Jeśli tytuł nie jest nagłówkiem h1, pasek boczny wyświetli błąd duplikacji, pokazując stronę, a następnie nagłówek h2 „tytuł”.

---
## Nagłówki sekcji (h2)

Używaj nagłówków h2 (`## Section Heading`) poprzedzonych separatorem (`---`) dla każdej nowej głównej sekcji.

### Nagłówki podsekcji zwiększające poziom h o 1

Używaj nagłówków h3 (`### Subsection Heading`) dla każdej nowej podsekcji oraz nagłówków h4 (`#### Sub-Subsection Heading`) dla każdej nowej pod-podsekcji.


### Progresja h w podsekcjach: 2 > 3 > 4

Nagłówki mogą być wyświetlane błędnie w pasku bocznym, jeśli progresja h nie jest poprawna.

Znacznik nagłówka powinien zwiększać się o jeden lub pozostać bez zmian. 

h2 po którym następuje h2 lub h3 jest w porządku. h3 po którym następuje h3 lub h4 jest również w porządku. 

### Błędy podsekcji
h2 po którym następuje h4 powoduje problemy. Pasek boczny umieszcza pod-nagłówek gdzieś nad nagłówkiem w spisie treści.

### Zmniejszanie poziomów h

To nie wydaje się stanowić problemu. np. h4 do h3 lub h2 jest w porządku. 

---
## Konwencje formatowania

Następujące style są normą dla tych SRD typu _Imperative_ w formacie Markdown.

### Pogrubienie, kursywa i separatory

- Używaj podwójnych gwiazdek (`**Bold**`) dla tekstu **pogrubionego**.
- Używaj podkreślników (`_Italic_`) dla tekstu _kursywą_. 
   - _uwaga: Unikaj używania pojedynczych gwiazdek dla kursywy!_
- Używaj odwrotnych ukośników (`\_`), aby „anulować” znak: \_Brak kursywy\_.
- Używaj cudzysłowów kątowych (``` `code` ```), aby stworzyć `code blocks`.
- Używaj trzech myślników (`---`), aby wstawić poziomą linię podziału.

### Konwencje dla pogrubień i kursywy

Staraj się trzymać następujących wzorców... 

#### Pogrubione tytuły

Używaj pogrubionych tytułów przy opisywaniu czarów, efektów itp.
- **Tytuł magii:** Opis.

#### Tytuły kursywą

Używaj tytułów kursywą dla „podlist” wariantów czarów itp.
- **Magia:** Opis.
  - **_Wariant magii A:_** Opis.
  - **_Wariant magii B:_** Opis.

#### Odniesienia do tytułów kursywą

Używaj tytułów kursywą, gdy odwołujesz się do książki, takiej jak _Mythras Imperative_ lub podstawowego zestawu reguł _Mythras_.

---
## Formatowanie list

### Listy nieuporządkowane / Punkty

- Listy nieuporządkowane tworzy się za pomocą myślników.
- Listy nieuporządkowane tworzy się za pomocą myślników.
  - Zwiększ poziom wcięcia za pomocą 2 spacji lub tabulatora.

### Listy uporządkowane / Punkty numerowane

1. Listy numerowane tworzy się za pomocą cyfry i kropki.
2. Listy numerowane tworzy się za pomocą cyfry i kropki.
- Wymieszaj z punktami
	- I wcięciem
3. Wróć do liczb
   - I punktów

### Listy z nagłówkami

Dla list powiązanych pod-nagłówków pogrub tytuł i dodaj dwukropek.
- **Przykład 1:** Bla, bla, bla...
- **Przykład 2:** Bla, bla, bla...

### Listy z nagłówkami kursywą

Dla list powiązanych pod-nagłówków pogrub i dodaj kursywę do tytułu oraz dwukropek.
- **_Przykład 1:_** Bla, bla, bla...
- **_Przykład 2:_** Bla, bla, bla...

---
## Tabele

Nadaj tabelom pod-nagłówek, aby pojawiły się w pasku bocznym jako zakładki, wcięte o jeden poziom względem sekcji nadrzędnej. 

~Niech wiersz nagłówka będzie tekstem pogrubionym.~ 
Pogrubienie wiersza nagłówka w rzeczywistości renderuje go jako zwykły tekst. Domyślny CSS pogrubia ten wiersz.

### Wyrównanie tekstu w tabeli

Użyj drugiego wiersza dla wyrównania treści: `:--`, `:-:` lub `--:`.
Wpłynie to na całą kolumnę.

#### Podstawowy układ tabel

| **Kolumna 1** | **Kolumna 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gamma |

### Konwencje wyrównywania tekstu

- Używaj wyrównania do środka dla liczb lub podobnych list wartości.
- Używaj wyrównania do lewej dla zdań tekstu.

#### Tabela z przykładem wyrównania

| **Numer** | **Opis** |
| :-: | :-- |
| 1 | Tekst opisowy |
| 2 | Tekst opisowy |
| 3 | Tekst opisowy |

#### Przykład: Tabela intensywności ognia

| **Intensywność** | **Przykłady** | **Czas do zapłonu** | **Obrażenia** |
| :-: | :-- | :-: | :-: |
| 1 | Świeca | 1d4 | 1d2 |
| 2 | Pochodnia | 1d3 | 1d4 |
| 3 | Ognisko | 1d2 | 1d6 |
| 4 | Pożar wypełniający pomieszczenie | 1d2 | 2d6 |
| 5 | Lawa wulkaniczna | Natychmiast | 3d6 |

---
## Linki

W SRD istnieje wiele zastosowań linków, a tutaj opisano tylko kilka głównych przypadków.

### Formatowanie linków

Formatowanie linku odbywa się za pomocą tekstu w nawiasach. Użyj nawiasów kwadratowych dla widocznego tekstu linku, a okrągłych dla adresu URL docelowego: `[Link Text](URL)`.

W tych dokumentach najczęściej używanym linkiem zewnętrznym będzie [Generator spotkań Mythras](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Linki zewnętrzne a wewnętrzne

Linki zewnętrzne prowadzą do innych stron w Internecie i wymagają adresu URL `http://example.com`, a domyślnie _zawsze_ otwierają się w nowej karcie przeglądarki. 

Aby uniknąć zaśmiecania czytanego dokumentu wieloma kartami, linki wewnętrzne i zakładki są tworzone za pomocą względnych adresów URL odwołujących się do plików Markdown widocznych w repozytorium GitHub. Zamiast otwierać nową kartę, te linki wewnętrzne szybko przewiną stronę do powiązanej sekcji.

#### Przykłady linków wewnętrznych

- **Linki do rozdziałów:** Wskazują na początek głównej sekcji (h1). np. rozdział [Walka](0005_Combat.md).

  - Format linku: `[Combat](0005_Combat.md)`

- **Linki do podsekcji:** Wskazują na nagłówek wewnątrz rozdziału, odwołując się do dokumentu jak powyżej, ale dodając `?id=`, a bezpośrednio po nim nazwę nagłówka docelowego. np. [Ataki z wyskoku](0005_Combat.md?id=leaping-attacks) 

  - Format linku: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Linki zewnętrzne do podsekcji

Mogą wystąpić sytuacje, w których konieczne będzie odwołanie się do znanej sekcji zewnętrznego dokumentu, na przykład konkretnej tabeli w innym SRD. Formatowanie jest takie samo jak w przypadku linków do podsekcji powyżej, z tą różnicą, że używa się zewnętrznego adresu HTTP.

Dla przykładu, oto [tabela konwersji jednostek imperialnych na metryczne](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) z [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/). 


```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Listy magii i mocy

Rozpocznij „czystą” sekcję nagłówkiem h2 dla list dostępnych czarów, mocy itp.; następnie h3 dla każdego elementu listy. 

Czary i moce są zazwyczaj prezentowane w jednej płaskiej liście według typu magii (Magia Ludowa, Teizm itp.), ale jeśli lista wymaga własnych podsekcji, takich jak szkoła czy specjalizacje kultu, odpowiednio zwiększ poziom nagłówka. Na przykład h2 dla listy cudów Teizmu, h3 dla Kult: Mitras, i h4 dla każdego cudu kultu Mitras. 
 
Szczególnie w przypadku czarów, ale także w każdym opisie używającym atrybutów słów kluczowych, wypisuj je tekstem pochylonym.

Tekst opisowy i specjalne zasady używają zwykłego tekstu.

### Formatowanie listy czarów

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Przykład: sformatowana lista czarów (w cytacie blokowym) </summary>

---
> ## Opisy czarów
>
> ### Odparcie (Avert)
> _Natychmiastowy, Zasięgowy_
>
> Odparcie służy do usuwania innego czaru w zasięgu. Odparcie może być rzucone reaktywnie, aby zneutralizować czary ofensywne, poprzez użycie Reaktywnej Akcji Kontr-magii.

</details>

---
## Bloki statystyk pojazdów
Rozpocznij „czystą” sekcję nagłówkiem h2 dla wykazów, a następnie zwiększ poziom h jak zwykle dla kategorii i elementów listy. 

Każdy wymieniony przykład posiada statystyki i opisy prezentowane jako lista punktowana z pogrubionymi tytułami punktów.

### Formatowanie bloku statystyk pojazdu

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```


<details>

<summary>Przykład: sformatowany blok statystyk pojazdu (w cytacie blokowym) </summary>

---
> ## Przykładowe pojazdy
> 
> ### Pojazdy naziemne
> 
> #### Interceptor
> 
> - **Kadłub:** 6 (Średni wojskowy), 40 Struktury
> 
> - **Prędkość:** Szybka
> 
> - **Systemy:** 3
> 
> - **Cechy:** Fotel wyrzutowy, Zwiększone osiągi, Lepsze prowadzenie, Pakiet obserwacyjny, Wytrzymały, Uzbrojony
> 
> - **Broń:** Dozownik plam oleju, dozownik dymu, podwójnie sprzężone karabiny maszynowe średniego kalibru
> 
> - **Opis:** Podkręcony samochód luksusowy, sportowy lub podobny; ten samochód został zbudowany, aby szybko się poruszać i oddawać w walce z taką samą siłą, z jaką przyjmuje uderzenia. To właśnie ten typ pojazdu przychodzi ludziom na myśl, gdy ktoś mówi „szpiegowski samochód”.

</details>

---
## Bloki statystyk stworzeń
Rozpocznij „czystą” sekcję nagłówkiem h2 dla wykazów. Bloki statystyk stworzeń wykorzystują tabele i są bardziej złożone pod względem formatowania i wymagań przestrzennych. Dla jasności unikaj podsekcji i dodawaj separatory między elementami listy.


Każdy wymieniony przykład powinien zawierać...

- **Tytuł stworzenia:** Separator, po którym następuje nagłówek h3 z nazwą stworzenia.

- **Wpis MEG:** Link zewnętrzny do określonego stworzenia w [Generatorze spotkań Mythras](https://mythras.skoll.xyz/).

- **Podstawowe szczegóły:** Nazwa/typ stworzenia, atrybuty, umiejętności i wszelkie specjalne opisy lub notatki dotyczące postaci, jeśli są wymagane.

- **Szczegóły broni:** Skrócone opisy z kolumnami dla nazwy broni i następującymi atrybutami: Rozmiar (uwzględnij tu Siłę), Zasięg (uwzględnij tu Dystans), Obrażenia, AP/HP oraz wszelkie zasady specjalne.

- **Miejsca trafień i Pancerz:** Tabele lokalizacji będą się różnić w zależności od anatomii stworzenia, ale powinny być uwzględnione nawet dla tradycyjnych humanoidów jako sposób na śledzenie pancerza i obrażeń. 

### Formatowanie bloku statystyk stworzenia

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

<summary>Przykład: sformatowane tabele bloku statystyk stworzenia (w cytacie blokowym) </summary>

> ---
> ### Goblin/Ork
> [Wpis MEG](https://mythras.skoll.xyz/enemy_template/10891/)
> 
> | Nazwa stworzenia | Goblin/Ork |
> | :-- | :-- |
> | Kluczowe atrybuty | STR 11, KON 14, SIZ 11, ZRC 11, INT 11, MOC 11, CHA 7 |
> | Punkty Akcji | 2 | 
> | Modyfikator Obrażeń | - |
> | Inicjatywa | +11 |
> | Ruch | 6m |
> | Zdolności | Nocne widzenie |
> | Umiejętności | Atletyka 52%, Brawn 42%, Oszustwo 57%, Wytrzymałość 48%, Uniki 62%, Percepcja 61%, Walka wręcz 52%, Siła woli 42% |
> | Styl walki | Wojownik (Miecz krótki, Tarcza, Włócznia, Proca) 62% |
> 
> #### Szczegóły broni
> 
> | Broń | Rozmiar | Zasięg | Obrażenia | AP/HP | Specjalne |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Miecz krótki | M | M | 1d6 | 6/8 | |
> | Włócznia | M | D | 1d8+1 | 4/5 | |
> | Proca | D | 10/150/300 | 1d8 | 1/2 | |
> | Tarcza | D | K | 1d4 | 4/9 | Chroni 3 lokalizacje podczas Pasywnego Blokowania/Ochrony |
> 
> #### Miejsca trafień i Pancerz
> 
> | **1d20** | **Lokalizacja** | **AP/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Prawa noga | 1/5 |
> | 4-6 | Lewa noga | 1/5 |
> | 7-9 | Brzuch | 1/6 |
> | 10-12 | Klatka piersiowa | 1/7 |
> | 13-15 | Prawa ręka | 1/4 |
> | 16-18 | Lewa ręka | 1/4 |
> | 19-20 | Głowa | 1/5 |


</details>


---
## Errata społeczności

### Literówki i niejasności

Edycje mające na celu „uporządkowanie” tekstu autorów powinny być minimalne, ale literówki i inne błędy powinny być po prostu poprawiane bezpośrednio w tekście, bez żadnego oznaczania.


### Panele informacji o erracie

Jeśli dana zasada jest zbyt niejednoznaczna, niekompletna lub po prostu błędna, dodaj rozwijaną notatkę Erraty społeczności.

Wyjaśnij problem kursywą, używając tylko pogrubionej kursywy dla tytułu problemu - _żadnych nagłówków h(x)!_ - aby nie tworzyć mylących wpisów w pasku bocznym.

Jeśli dodano tekst zastępczy, umieść go w cudzysłowie w pogrubionej kursywie, poprzedzając go "_Errata społeczności:_" w normalnej kursywie.

Dodatkowe zasady, jeśli są wymagane, powinny być prezentowane zwykłym tekstem.

#### Szablon formatowania erraty

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Przykłady erraty

<details>

<summary>* Errata społeczności</summary>

_**Wspinaczka**_

_Errata społeczności:_
_**"Noszony pancerz utrudnia wspinaczkę o wartość równą średniej punktów Pancerza (AP) w noszonym rynsztunku. Znajdź tę wartość, sumując punkty pancerza z każdej lokalizacji i dzieląc tę liczbę przez liczbę lokalizacji."**_

_Zasada w oryginalnym brzmieniu szybko powoduje problemy. Noszenie pojedynczego elementu pancerza 6AP zredukowałoby Ruch człowieka do 0, co oznaczałoby, że człowiek noszący stalowy hełm i nic więcej byłby zbyt przeciążony, by w ogóle się wspinać. Wydaje się to nieuzasadnienie restrykcyjne, stąd powyższa sugerowana edytowana wersja. Zostanie to zaktualizowane, jeśli oryginalni autorzy zrewidują zasadę._

</details>

<details>

<summary>* Errata społeczności</summary>

_**Chody: Chód, Bieg, Sprint**_

_Opublikowana wersja _Mythras Imperative_ nie zawiera wyraźnych zasad dotyczących poruszania się różnymi chodami, choć są one opisane w podstawowej księdze zasad Mythras. Powyższe mnożniki chodu zostały dodane w ramach Erraty społeczności._ 

_W razie potrzeby wystarczy traktować chody w następujący sposób:_

- _Chody szybsze niż Chód stosują mnożnik do wskaźnika Ruchu: 3x dla Biegu, 5x dla Sprintu._

- _Podczas Biegu lub Sprintu postacie nie mogą podejmować większości aktywnych działań, takich jak atakowanie czy rzucanie czarów. Niektóre wyjątki obejmują..._
  - _Ataki podczas korzystania z zasad Szarży._
  - _Strzelanie z broni dystansowej z cechą Potyczkowania (Skirmishing)._ 
- _Zasada ogólna mówi, że wszelkie dozwolone działania powinny być traktowane jako trudniejsze o jeden stopień przy Biegu i o dwa stopnie przy Sprincie._


</details>

---
## Różne ostrzeżenia

### Puste linie / Znaki powrotu karetki

Pozostaw pustą linię między różnymi typami wpisów. Nagłówki, separatory, tabele itp. Nie będą one widoczne w widoku czytania, ale ich brak może powodować problemy z formatowaniem.

### Pogrubiony lub pochylony tekst wieloakapitowy

Każdy akapit musi być oznaczony jako tekst pogrubiony lub pochylony. Nowa linia między akapitami zerwie formatowanie, pozostawiając osierocone znaczniki formatowania.

### Pisownia międzynarodowa

Regresywne i godne pożałowania siły uznały za stosowne usunięcie wszystkich brytyjskich wariantów pisowni na rzecz obiektywnie słabszych wersji amerykańskich. Zwracaj uwagę na brytyjskie słowa z końcówką -OUR: _armour_, _favour_ itp.