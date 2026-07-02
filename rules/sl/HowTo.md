# Predpogoji

1.  Osnovno razumevanje [jezika Markdown](https://www.markdownguide.org/basic-syntax/).

2.  Ustvariti boste morali brezplačen [github](https://github.com/) račun, če ga še nimate. Priporočamo, da uporabite ime svoje RPG, saj bo to postalo del URL-ja, ki ga bodo ljudje uporabljali za dostop do vašega SRD.

3.  Celoten postopek lahko opravite prek brskalnika, ne da bi poznali git. Vendar pa vam bo učenje Github Desktopa omogočilo, da lokalno preizkusite morebitne spremembe, preden jih objavite v živo za ves svet.

> Če imate registrirano domeno, jo lahko uporabite v tem postopku za ustvarjanje SRD, kot sem ga jaz https://srd.7thextinctionrpg.com

# Postopek

## Ustvarjanje repozitorija na Githubu

1.  Prijavite se v Github

2.  Pojdite na javno predlogo https://github.com/7thExtinctionrpg/RPG_SRD_Template

3.  Kliknite "Use this template" (Uporabi to predlogo)

![Step3](/_media/Step3.png)

4.  Izberite "Create a new repository" (Ustvari nov repozitorij)

5.  Vnesite ime repozitorija

![Step5](/_media/Step5.png)

6.  Izberite 'Private' (Zasebno)

7.  Izberite 'Create repository' (Ustvari repozitorij)

Kopiranje predloge bo trajalo 5-30 sekund, nato boste imeli svojo kopijo.

8.  Preverite, ali imate datoteko ".nojekyll", to je prazna datoteka, ki je potrebna pri gostovanju spletne strani na Githubu, sicer se SRD ne bo pravilno prikazal. *(Pove GitHub Pages, naj objavljenih datotek ne poganja skozi Jekyll).*

## Dodajanje vaše vsebine

### Datoteke *.md

Datoteke .md so datoteke Markdown. Markdown je lahek označevalni jezik, ki ga lahko uporabite za dodajanje oblikovnih elementov besedilnim dokumentom v navadnem besedilu. Glede na velikost vaše vsebine lahko vse informacije vaše igre postavite v eno samo datoteko *.md, ali pa, kot sem jaz na [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), ustvarite ločene datoteke za vsako poglavje. Datoteka "sample.md" ponuja nekaj primerov oblikovanja.

Jezik Markdown je zelo enostaven za učenje, za celoten seznam sintakse uporabite povezavo, navedeno v točki 2 pod Predpogoji zgoraj.

### _Sidebar.md

To je vaš meni, navigacijsko okno na levi strani spletnega mesta. Ko dodate datoteko markdown v svoj repozitorij, jo morate dodati sem, da bo njena vsebina vključena. Sledite obstoječemu oblikovanju.

## Omogočite Github Pages, da repozitorij spremenite v spletno stran

1.  V svojem repozitoriju kliknite na 'Settings' (Nastavitve)

![Website-Step1](/_media/Website-Step1.png)

2.  Na levi strani menija izberite 'Pages' (Strani)

![Website-Step2](/_media/Website-Step2.png)

3.  Če repozitorija niste naredili 'public' (javnega), imate dve možnosti:
    a. Naredite repozitorij javen, kar vam bo nato omogočilo brezplačno gostovanje vaše spletne strani SRD z uporabo Github Pages
    b. Nadgradite svoj Github račun (v času pisanja tega to stane 4 $ na mesec ali 48 $ letno)

4.  Pod 'Branch' (Veja) izberite 'main' in kliknite shrani

5.  Počakajte 10-20 sekund, nato osvežite stran

6.  Zdaj boste videli svoj URL, kot je https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Spreminjanje pisav

1.  Uredite datoteko /_assets/style.css

2.  Pod razdelkom 'body' boste našli siteFont in headingFont

3.  Spremenite ju na pisave, ki jih želite uporabiti

## Uporaba vtičnika Fontawesome in/ali Material Icons za prikaz brezplačnih ikon v vašem SRD

### Fontawesome

Uporabite Fontawesome za brezplačne ikone in animirane ikone. Naročeni uporabniki lahko uporabljajo Pro ikone.

1.  Poiščite ikono na [Fontawesome](https://fontawesome.com/icons)
2.  Izberite ikono
3.  V pojavnem oknu, pod zavihkom HTML, kopirajte vse med " "

```html
<i class="fa-solid fa-dice-d20"></i>
```

4.  Kopirano besedilo vstavite med `:` brez presledkov

```
<i class="fa-solid fa-dice-d20"></i>
```

### Material Icons

Uporabite Material Icons za več brezplačnih ikon.

1.  Poiščite ikone na [Material Icons](https://fonts.google.com/icons)
2.  Kopirajte in vstavite spletno povezavo span neposredno v vaše markdown datoteke

```html
<span class="material-symbols-outlined">casino</span>
```