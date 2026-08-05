# Būtinosios sąlygos

1. Pagrindinis [markdown kalbos](https://www.markdownguide.org/basic-syntax/) supratimas.

2. Turėsite susikurti nemokamą [github](https://github.com/) paskyrą, jei tokios neturite. Rekomenduojame naudoti savo RPG žaidimo pavadinimą, nes jis taps URL adreso dalimi, kurią žmonės naudos pasiekdami jūsų SRD.

3. Visą šį procesą galite atlikti naršyklėje, nemokėdami naudotis „git“. Visgi „GitHub Desktop“ išmokimas leis jums išbandyti visus pakeitimus lokaliai prieš juos paviešinant visam pasauliui.

> Jei turite registruotą domeną, galite jį naudoti šiame procese, kad sukurtumėte SRD, kaip aš padariau šiuo adresu: https://srd.7thextinctionrpg.com

# Procesas

## Saugyklos (repository) kūrimas „Github“ platformoje

1. Prisijunkite prie „Github“.

2. Eikite į viešą šabloną https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Spustelėkite „Use this template“ (Naudoti šį šabloną).

![Step3](/_media/Step3.png)

4. Pasirinkite „Create a new repository“ (Sukurti naują saugyklą).

5. Įveskite saugyklos pavadinimą.

![Step5](/_media/Step5.png)

6. Pasirinkite „Private“ (Privati).

7. Pasirinkite „Create repository“ (Sukurti saugyklą).

Šablono kopijavimas užtruks 5–30 sekundžių, po to turėsite savo kopiją.

8. Įsitikinkite, kad turite failą „.nojekyll“ – tai tuščias failas, reikalingas talpinant svetainę „Github“, kitaip SRD nebus rodomas tinkamai. *(Nurodo „GitHub Pages“, kad neapdorotų publikuojamų failų per „Jekyll“).*


## Turinys įkėlimas

### *.md failai

.md failai yra „markdown“ failai. „Markdown“ yra lengva žymėjimo kalba, kurią galite naudoti norėdami pridėti formatavimo elementus prie paprasto teksto dokumentų. Priklausomai nuo turinio dydžio, galite visą žaidimo informaciją patalpinti į vieną *.md failą arba, kaip aš padariau svetainėje [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), sukurti atskirus failus kiekvienam skyriui. „sample.md“ pateikia keletą formatavimo pavyzdžių.

„Markdown“ kalbą labai lengva išmokti, visą sintaksės sąrašą rasite nuorodoje, pateiktoje 2-ame „Būtinųjų sąlygų“ punkte.

### _Sidebar.md

Tai yra jūsų meniu, naršymo juosta kairėje svetainės pusėje. Kai į saugyklą įkeliate „markdown“ failą, turite čia pridėti nuorodą į failą, kad jo turinys būtų įtrauktas. Laikykitės esamo formatavimo.


## „Github Pages“ įgalinimas svetainės kūrimui iš saugyklos

1. Savo saugykloje spustelėkite „Settings“ (Nustatymai).

![Website-Step1](/_media/Website-Step1.png)

2. Kairiojoje meniu juostoje pasirinkite „Pages“.

![Website-Step2](/_media/Website-Step2.png)

3. Jei saugyklos nepadarėte vieša, turite du pasirinkimus:
    a. Padaryti saugyklą vieša (public), kas leis nemokamai naudoti „Github Pages“ jūsų SRD svetainės talpinimui.
    b. Atnaujinti savo „Github“ paskyrą (šio teksto rašymo metu tai kainuoja 4 USD per mėnesį arba 48 USD per metus).

4. Skiltyje „Branch“ pasirinkite „main“ ir spustelėkite „Save“.

5. Palaukite 10–20 sekundžių ir atnaujinkite puslapį.

6. Dabar pamatysite savo URL, pvz., https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Šriftų keitimas

1. Redaguokite failą /_assets/style.css.

2. „body“ skiltyje rasite „siteFont“ ir „headingFont“.

3. Pakeiskite juos į šriftus, kuriuos norite naudoti.


## „Fontawesome“ ir/ar „Material Icons“ papildinių naudojimas nemokamų piktogramų rodymui SRD

### „Fontawesome“

Naudokite „Fontawesome“ nemokamoms ir animuotoms piktogramoms gauti. Prenumeratoriai gali naudoti „Pro“ piktogramas.

1. Raskite piktogramą svetainėje [Fontawesome](https://fontawesome.com/icons).
2. Pasirinkite piktogramą.
3. Iššokančiame lange, „HTML“ kortelėje, nukopijuokite viską, kas yra tarp „ “.

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Įklijuokite nukopijuotą tekstą tarp `:` be tarpų.

```EXAMPLE
fa-solid fa-dice-d20
```

### „Material Icons“

Naudokite „Material Icons“, kad gautumėte daugiau nemokamų piktogramų.

1. Raskite piktogramas svetainėje [Material Icons](https://fonts.google.com/icons).
2. Nukopijuokite ir įterpkite žiniatinklio „span“ nuorodą tiesiai į savo „markdown“ failus.

```markup
<span class="material-icons">face</span>
```