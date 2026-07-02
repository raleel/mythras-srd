# Preduslovi

1. Osnovno razumijevanje [markdown jezika](https://www.markdownguide.org/basic-syntax/).

2. Morat ćete kreirati besplatan [github](https://github.com/) nalog ako ga nemate. Preporučujemo da koristite naziv svog RPG-a jer će to postati dio URL-a koji će ljudi koristiti za pristup vašem SRD-u.

3. Cijeli ovaj proces možete obaviti putem preglednika bez poznavanja Gita. Ipak, učenje GitHub Desktopa omogućit će vam da testirate bilo kakve promjene lokalno prije nego što ih objavite uživo za cijeli svijet.

> Ako imate registrovan naziv domene, možete ga koristiti u ovom procesu za kreiranje SRD-a kao što ja imam https://srd.7thextinctionrpg.com

# Proces

## Kreiranje repozitorija na Githubu

1. Prijavite se na Github

2. Idite na javni šablon https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Kliknite na "Use this template" (Koristi ovaj šablon)

![Step3](/_media/Step3.png)

4. Odaberite "Create a new repository" (Kreiraj novi repozitorij)

5. Unesite naziv repozitorija

![Step5](/_media/Step5.png)

6. Odaberite 'Private' (Privatno)

7. Odaberite 'Create repository' (Kreiraj repozitorij)

Trebat će 5-30 sekundi da se šablon kopira, a zatim ćete imati svoju kopiju.

8. Provjerite da imate datoteku ".nojekyll" – ovo je prazna datoteka koja je potrebna prilikom hostovanja web stranice na Githubu, inače se SRD neće pravilno prikazati. *(Govori GitHub Pages da objavljene datoteke ne obrađuju kroz Jekyll).*

## Dodavanje vašeg sadržaja

### *.md Datoteke

.md datoteke su markdown datoteke, Markdown je lagan jezik za označavanje koji možete koristiti za dodavanje elemenata formatiranja tekstualnim dokumentima. Ovisno o veličini vašeg sadržaja, možete smjestiti sve informacije o svojoj igri u jednu *.md datoteku, ili, kao što sam ja uradio na [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), kreirati zasebne datoteke za svako poglavlje. "sample.md" pruža neke primjere formatiranja.

Markdown jezik je vrlo jednostavan za učenje, koristite link dat pod tačkom 2 u Preduslovima iznad za potpunu listu sintakse.

### _Sidebar.md

Ovo je vaš meni, navigacijski panel na lijevoj strani web stranice. Kada dodate markdown datoteku u svoj repozitorij, morate je dodati ovdje kako bi njen sadržaj bio uključen. Pratite postojeće formatiranje.

## Omogućavanje Github Pages za pretvaranje repozitorija u web stranicu

1. U svom repozitoriju kliknite na 'Settings' (Postavke)

![Website-Step1](/_media/Website-Step1.png)

2. Odaberite 'Pages' (Stranice) u lijevom bočnom meniju

![Website-Step2](/_media/Website-Step2.png)

3. Ako niste učinili repozitorij 'javnim', imate dva izbora:
    a. Učinite repozitorij javnim što će vam onda omogućiti da koristite Github Pages za besplatno hostovanje vaše SRD web stranice
    b. Nadogradite svoj Github nalog (u trenutku pisanja, to košta 4$ mjesečno ili 48$ godišnje)

4. Pod 'Branch' (Grana) odaberite 'main' i kliknite na 'save' (sačuvaj)

5. Sačekajte 10-20 sekundi, a zatim osvježite stranicu

6. Sada ćete vidjeti svoj URL kao što je https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Promjena fontova

1. Uredite datoteku /_assets/style.css

2. Pod 'body sekcijom' pronaći ćete siteFont i headingFont

3. Promijenite ih u fontove koje želite koristiti

## Korištenje Fontawesome i/ili Material Icons plugina za prikaz besplatnih ikona u vašem SRD-u

### Fontawesome

Koristite Fontawesome za besplatne ikone i animirane ikone. Pretplatnici mogu koristiti Pro Ikone.

1. Pronađite ikonu na [Fontawesome](https://fontawesome.com/icons)
2. Odaberite ikonu
3. U iskačućem prozoru, pod HTML karticom kopirajte sve između " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Postavite kopirani tekst između `:` bez razmaka

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Ikone

Koristite Material Icons za više besplatnih ikona

1. Pronađite ikone na [Material Icons](https://fonts.google.com/icons)
2. Kopirajte i umetnite web span link direktno u vaše markdown datoteke

```markup
<span class="material-icons">face</span>
```