# Esivaatimukset

1. [Markdown-kielen](https://www.markdownguide.org/basic-syntax/) perusteiden ymmärtäminen.

2. Sinun on luotava ilmainen [github](https://github.com/)-tili, jos sinulla ei vielä ole sellaista. Suosittelen käyttämään roolipelisi nimeä, sillä siitä tulee osa URL-osoitetta, jota ihmiset käyttävät SRD-sivustosi avaamiseen.

3. Voit tehdä koko prosessin selaimen kautta ilman git-osaamista. GitHub Desktopin opettelu kuitenkin mahdollistaa muutosten testaamisen paikallisesti ennen niiden julkaisemista koko maailman nähtäville.

> Jos olet rekisteröinyt verkkotunnuksen, voit käyttää tätä prosessia luodaksesi SRD-sivuston kuten minä tein: https://srd.7thextinctionrpg.com

# Prosessi

## Repositorion luominen Githubiin

1. Kirjaudu sisään Githubiin.

2. Siirry julkiseen mallipohjaan: https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Napsauta "Use this template" (Käytä tätä mallia).

![Step3](/_media/Step3.png)

4. Valitse "Create a new repository" (Luo uusi repositorio).

5. Anna repositoriolle nimi.

![Step5](/_media/Step5.png)

6. Valitse 'Private' (Yksityinen).

7. Valitse 'Create repository' (Luo repositorio).

Mallipohjan kopioiminen kestää 5–30 sekuntia, minkä jälkeen sinulla on oma kopiosi.

8. Varmista, että sinulla on tiedosto ".nojekyll". Tämä on tyhjä tiedosto, jota tarvitaan sivustoa Githubissa ylläpidettäessä, jotta SRD näkyy oikein. *(Kertoo GitHub Pagesille, ettei julkaistuja tiedostoja tule ajaa Jekyllin läpi).*


## Sisällön lisääminen

### *.md-tiedostot

.md-tiedostot ovat Markdown-tiedostoja. Markdown on kevyt merkintäkieli, jolla voit lisätä muotoiluelementtejä selkokielisiin tekstitiedostoihin. Sisällön koosta riippuen voit joko sijoittaa koko pelisi tiedot yhteen *.md-tiedostoon tai luoda erilliset tiedostot kullekin luvulle, kuten minä tein osoitteessa [7thextinctionrpg.com](https://srd.7thextinctionrpg.com). "sample.md"-tiedosto sisältää esimerkkejä muotoilusta.

Markdown-kieli on erittäin helppo oppia. Käytä kohdassa 2 (Esivaatimukset) annettua linkkiä saadaksesi täydellisen luettelon syntaksista.

### _Sidebar.md

Tämä on valikkosi, eli verkkosivuston vasemmassa reunassa oleva navigointipaneeli. Kun olet lisännyt Markdown-tiedoston repositorioosi, sinun on lisättävä tiedosto tähän, jotta sen sisältö sisällytetään valikkoon. Noudata olemassa olevaa muotoilua.


## Github Pagesin käyttöönotto verkkosivuston luomiseksi

1. Napsauta repositoriossasi 'Settings' (Asetukset).

![Website-Step1](/_media/Website-Step1.png)

2. Valitse vasemmanpuoleisesta valikosta 'Pages'.

![Website-Step2](/_media/Website-Step2.png)

3. Jos et ole tehnyt repositoriosta 'julkista' (public), sinulla on kaksi vaihtoehtoa:
    a. Tee repositoriosta julkinen, mikä sallii Github Pagesin käytön SRD-verkkosivustosi ilmaiseen ylläpitoon.
    b. Päivitä Github-tilisi (kirjoitushetkellä se maksaa 4 dollaria kuukaudessa tai 48 dollaria vuodessa).

4. Valitse 'Branch'-kohdasta 'main' ja napsauta Tallenna.

5. Odota 10–20 sekuntia ja päivitä sivu.

6. Näet nyt URL-osoitteesi, esimerkiksi https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Fonttien muuttaminen

1. Muokkaa tiedostoa /_assets/style.css.

2. 'body'-osion alta löydät kohdat siteFont ja headingFont.

3. Muuta nämä haluamiksesi fonteiksi.


## Fontawesome- ja/tai Material Icons -liitännäisten käyttö ilmaisten kuvakkeiden näyttämiseen SRD:ssä

### Fontawesome

Käytä Fontawesomea saadaksesi ilmaisia kuvakkeita ja animoituja kuvakkeita. Tilatut käyttäjät voivat käyttää Pro-kuvakkeita.

1. Etsi kuvake osoitteesta [Fontawesome](https://fontawesome.com/icons).
2. Valitse kuvake.
3. Kopioi ponnahdusikkunassa HTML-välilehden alta kaikki " "-merkkien välistä.

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Sijoita kopioitu teksti `:` väliin ilman välilyöntejä.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Käytä Material Iconsia saadaksesi lisää ilmaisia kuvakkeita.

1. Etsi kuvakkeet osoitteesta [Material Icons](https://fonts.google.com/icons).
2. Kopioi ja lisää web span -linkki suoraan Markdown-tiedostoihisi.

```markup
<span class="material-icons">face</span>
```