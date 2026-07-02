# Preduvjeti

1. Osnovno razumijevanje [Markdown jezika](https://www.markdownguide.org/basic-syntax/).

2. Trebat ćete izraditi besplatan [Github](https://github.com/) račun ako ga nemate. Preporučujemo da koristite naziv svog RPG-a jer će to postati dio URL-a koji će ljudi koristiti za pristup vašem SRD-u.

3. Cijeli ovaj proces možete obaviti putem preglednika bez poznavanja Gita. Ipak, učenje Github desktopa omogućit će vam testiranje bilo kakvih promjena lokalno prije nego što ih objavite uživo.

> Ako imate registriranu domenu, možete je koristiti u ovom procesu za stvaranje SRD-a kao što sam ja učinio https://srd.7thextinctionrpg.com

# Proces

## Stvaranje repozitorija na Githubu

1. Prijavite se na Github

2. Idite na javni predložak https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Kliknite "Use this template" (Koristi ovaj predložak)

![Step3](/_media/Step3.png)

4. Odaberite "Create a new repository" (Izradi novi repozitorij)

5. Unesite naziv repozitorija

![Step5](/_media/Step5.png)

6. Odaberite 'Private' (Privatno)

7. Odaberite 'Create repository' (Izradi repozitorij)

Trebat će 5-30 sekundi da se predložak kopira, a zatim ćete imati vlastitu kopiju.

8. Provjerite imate li datoteku ".nojekyll". To je prazna datoteka koja je potrebna prilikom hostanja web stranice na Githubu, inače se SRD neće ispravno prikazati. *(Govori GitHub Pages da ne pokreće objavljene datoteke kroz Jekyll).*

## Dodavanje vašeg sadržaja

### *.md datoteke

.md datoteke su Markdown datoteke, Markdown je lagani označni jezik koji možete koristiti za dodavanje elemenata oblikovanja u dokumente s običnim tekstom. Ovisno o veličini vašeg sadržaja, možete sve informacije o svojoj igri staviti u jednu *.md datoteku, ili kao što sam ja učinio na [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), izraditi zasebne datoteke za svako poglavlje. Datoteka "sample.md" pruža neke primjere oblikovanja.

Markdown jezik je vrlo jednostavan za učenje, koristite poveznicu navedenu pod točkom 2 u odjeljku Preduvjeti iznad za potpuni popis sintakse.

### _Sidebar.md

Ovo je vaš izbornik, navigacijska ploča na lijevoj strani web stranice. Nakon što ste dodali Markdown datoteku u svoj repozitorij, trebate dodati datoteku ovdje kako bi njen sadržaj bio uključen. Slijedite postojeće oblikovanje.

## Omogućavanje Github Pages za pretvaranje repozitorija u web stranicu

1. U svom repozitoriju kliknite na 'Settings' (Postavke)

![Website-Step1](/_media/Website-Step1.png)

2. Odaberite 'Pages' (Stranice) u lijevom izborniku

![Website-Step2](/_media/Website-Step2.png)

3. Ako niste učinili repozitorij 'public' (javnim), imate dva izbora
    a. Učinite repozitorij javnim što će vam omogućiti korištenje Github Pages za besplatno hostanje vaše SRD web stranice
    b. Nadogradite svoj Github račun (u trenutku pisanja ovog teksta košta 4 USD mjesečno ili 48 USD godišnje)

4. Pod 'Branch' (Grana) odaberite 'main' i kliknite 'save' (spremi)

5. Pričekajte 10-20 sekundi, a zatim osvježite stranicu

6. Sada ćete vidjeti svoj URL kao što je https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Promjena fontova

1. Uredite datoteku /_assets/style.css

2. Pod odjeljkom 'body' pronaći ćete siteFont i headingFont

3. Promijenite ih na fontove koje želite koristiti

## Korištenje Fontawesome i/ili Material Icons dodatka za prikaz besplatnih ikona u vašem SRD-u

### Fontawesome

Koristite Fontawesome za besplatne ikone i animirane ikone. Pretplaćeni korisnici mogu koristiti Pro ikone.

1. Pronađite ikonu na [Fontawesome](https://fontawesome.com/icons)
2. Odaberite ikonu
3. U skočnom prozoru, pod karticom HTML, kopirajte sve između " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Postavite kopirani tekst između `:` bez razmaka

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Koristite Material Icons za više besplatnih ikona

1. Pronađite ikone na [Material Icons](https://fonts.google.com/icons)
2. Kopirajte i umetnite web span poveznicu izravno u svoje Markdown datoteke

```markup
<span class="material-icons">face</span>
```