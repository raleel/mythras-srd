# Forsendur

1. Grunnskilningur á [markdown tungumálinu](https://www.markdownguide.org/basic-syntax/).

2. Þú þarft að búa til ókeypis [github](https://github.com/) aðgang ef þú átt ekki einn slíkan. Ég mæli með að þú notir nafn spilsins þíns þar sem það verður hluti af vefslóðinni sem fólk notar til að nálgast SRD-ið þitt.

3. Þú getur framkvæmt allt þetta ferli í gegnum vafrann án þess að kunna á git. Samt sem áður mun það að læra á github desktop leyfa þér að prófa breytingar staðbundið áður en þú birtir þær fyrir umheiminum.

> Ef þú ert með skráð lén, geturðu notað það með þessu ferli til að búa til SRD eins og ég gerði https://srd.7thextinctionrpg.com

# Ferlið

## Að búa til gagnageymslu (Repository) á Github

1. Skráðu þig inn á Github

2. Farðu á opinbera sniðmátið https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Smelltu á "Use this template"

![Step3](/_media/Step3.png)

4. Veldu "Create a new repository"

5. Sláðu inn nafn á gagnageymsluna

![Step5](/_media/Step5.png)

6. Veldu 'Private'

7. Veldu 'Create repository'

Það tekur 5-30 sekúndur að afrita sniðmátið, eftir það munt þú eiga þitt eigið eintak.

8. Gakktu úr skugga um að þú sért með skrána ".nojekyll", þetta er tóm skrá sem þarf þegar vefsíða er hýst á Github, annars mun SRD-ið ekki birtast rétt. *(Segir GitHub Pages að keyra ekki birtar skrár í gegnum Jekyll).*


## Að bæta við efni

### *.md skrár

.md skrár eru markdown-skrár. Markdown er létt uppsetningarmál sem þú getur notað til að bæta formattingu við venjulegan texta. Eftir stærð efnisins geturðu annað hvort sett allar upplýsingar um spilið þitt í eina *.md skrá, eða eins og ég hef gert á [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), búið til sérstakar skrár fyrir hvern kafla. "sample.md" skráin sýnir nokkur dæmi um formattingu.

Markdown er mjög auðvelt að læra, notaðu hlekkinn sem gefinn er í lið 2 undir Forsendur hér að ofan fyrir heildarlista yfir skipanir.

### _Sidebar.md

Þetta er valmyndin þín, leiðsögustika vinstra megin á vefsíðunni. Þegar þú hefur bætt markdown-skrá við gagnageymsluna þína þarftu að bæta skránni við hér svo innihald hennar verði tekið með. Fylgdu núverandi formattingu.


## Virkja Github Pages til að breyta gagnageymslunni í vefsíðu

1. Inni í gagnageymslunni þinni skaltu smella á 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Veldu 'Pages' í valmyndinni vinstra megin

![Website-Step2](/_media/Website-Step2.png)

3. Ef þú hefur ekki gert gagnageymsluna 'public' (opinbera), hefurðu tvo valkosti:
    a. Gera gagnageymsluna opinbera, sem leyfir þér að nota Github pages til að hýsa SRD-vefsíðuna þína ókeypis.
    b. Uppfæra Github-aðganginn þinn (þegar þetta er skrifað kostar það $4 á mánuði eða $48 á ári).

4. Undir 'Branch' skaltu velja 'main' og smella á save.

5. Bíddu í 10-20 sekúndur og endurhlaðið síðuna.

6. Þú sérð nú vefslóðina þína, til dæmis https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Að breyta leturgerðum

1. Breyttu skránni /_assets/style.css

2. Undir 'body section' finnurðu siteFont & headingFont

3. Breyttu þessum í þær leturgerðir sem þú vilt nota


## Að nota Fontawesome og/eða Material Icons viðbót til að sýna ókeypis táknmyndir í SRD-inu þínu

### Fontawesome

Notaðu Fontawesome til að fá ókeypis táknmyndir og hreyfimyndir. Áskrifendur geta notað Pro táknmyndir.

1. Finndu táknmyndina á [Fontawesome](https://fontawesome.com/icons)
2. Veldu táknmyndina
3. Í sprettiglugganum, undir HTML flipanum, afritaðu allt á milli " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Settu afritaða textann á milli `:` án bila

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Notaðu Material Icons fyrir fleiri ókeypis táknmyndir.

1. Finndu táknmyndirnar á [Material Icons](https://fonts.google.com/icons)
2. Afritaðu & settu vef-span hlekkinn beint inn í markdown-skrárnar þínar

```markup
<span class="material-icons">face</span>
```