# Eeldused

1. [Markdown-keele](https://www.markdownguide.org/basic-syntax/) põhiteadmised.

2. Peate looma tasuta [githubi](https://github.com/) konto, kui teil seda veel pole. Soovitatav on kasutada oma RPG nime, kuna sellest saab osa URL-ist, mida inimesed teie SRD-le ligipääsemiseks kasutavad.

3. Kogu seda protsessi saab teha brauseri kaudu ilma giti tundmata. Kuigi Github Desktopi õppimine võimaldab teil muudatusi kohapeal testida, enne kui need avalikult nähtavaks teete.

> Kui teil on registreeritud domeeninimi, saate seda selle protsessiga kasutada, et luua SRD, nagu mina tegin: https://srd.7thextinctionrpg.com

# Protsess

## Repositooriumi loomine Githubis

1. Logige sisse Githubi.

2. Navigeerige avaliku malli juurde: https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klõpsake "Use this template" (Kasuta seda malli).

![Step3](/_media/Step3.png)

4. Valige "Create a new repository" (Loo uus repositoorium).

5. Sisestage repositooriumi nimi.

![Step5](/_media/Step5.png)

6. Valige 'Private' (Privaatne).

7. Valige 'Create repository' (Loo repositoorium).

Malli kopeerimiseks kulub 5–30 sekundit, pärast mida on teil oma koopia olemas.

8. Veenduge, et teil on olemas fail ".nojekyll" – see on tühi fail, mis on vajalik veebisaidi majutamiseks Githubis, vastasel juhul ei kuvata SRD-d õigesti. *(See ütleb GitHub Pagesile, et avaldatud faile ei tohi Jekylliga töödelda).*


## Sisu lisamine

### *.md failid

.md failid on markdown-failid. Markdown on kerge märgenduskeel, mida saate kasutada lihtteksti dokumentidele vorminduselementide lisamiseks. Sõltuvalt sisu mahust saate kogu oma mängu teabe paigutada ühte *.md faili või, nagu mina tegin saidil [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), luua iga peatüki jaoks eraldi failid. "sample.md" pakub mõningaid vormindamise näiteid.

Markdown-keelt on väga lihtne õppida, kasutage kõigi süntaksite loendi jaoks eespool jaotises "Eeldused" punkti 2 all antud linki.

### _Sidebar.md

See on teie menüü, navigeerimispaneel veebisaidi vasakus servas. Kui olete oma repositooriumi markdown-faili lisanud, peate faili siia lisama, et selle sisu kaasataks. Järgige olemasolevat vormindust.


## Github Pagesi lubamine repositooriumi veebisaidiks muutmisel

1. Klõpsake oma repositooriumis 'Settings' (Seaded).

![Website-Step1](/_media/Website-Step1.png)

2. Valige vasakpoolses menüüs 'Pages'.

![Website-Step2](/_media/Website-Step2.png)

3. Kui te pole repositooriumi avalikuks ('public') teinud, on teil kaks valikut:
    a. Tehke repositoorium avalikuks, mis võimaldab teil kasutada Github Pagesit oma SRD-veebisaidi tasuta majutamiseks.
    b. Uuendage oma Githubi kontot (selle kirjutamise ajal maksab see 4 dollarit kuus või 48 dollarit aastas).

4. Valige jaotises 'Branch' (Haru) 'main' ja klõpsake 'Save' (Salvesta).

5. Oodake 10-20 sekundit ja värskendage lehte.

6. Nüüd näete oma URL-i, näiteks https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Fontide muutmine

1. Muutke faili /_assets/style.css.

2. 'body' sektsiooni alt leiate väärtused siteFont ja headingFont.

3. Muutke need fontideks, mida soovite kasutada.


## Fontawesome'i ja/või Material Icons plugina kasutamine tasuta ikoonide kuvamiseks teie SRD-s

### Fontawesome

Kasutage Fontawesome'i tasuta ikoonide ja animeeritud ikoonide saamiseks. Tellijad saavad kasutada Pro-ikoone.

1. Leidke ikoon [Fontawesome'ist](https://fontawesome.com/icons).
2. Valige ikoon.
3. Hüpikaknas kopeerige HTML-vahekaardi all kõik jutumärkide " " vahel olev.

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Asetage kopeeritud tekst `:` vahele ilma tühikuteta.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Kasutage Material Iconsi rohkemate tasuta ikoonide jaoks.

1. Leidke ikoonid [Material Iconsist](https://fonts.google.com/icons).
2. Kopeerige ja sisestage veebi span-link otse oma markdown-failidesse.

```markup
<span class="material-icons">face</span>
```