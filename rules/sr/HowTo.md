# Preduslovi

1. Osnovno razumevanje [markdown jezika](https://www.markdownguide.org/basic-syntax/).

2. Morate kreirati besplatan [github](https://github.com/) nalog ako ga nemate. Preporučujemo da koristite naziv vašeg RPG-a, jer će ovo postati deo URL-a koji će ljudi koristiti za pristup vašem SRD-u.

3. Ceo ovaj proces možete obaviti putem pretraživača bez poznavanja Gita. Međutim, učenje GitHub Desktop-a će vam omogućiti da testirate sve promene lokalno pre nego što ih postavite uživo da ih svet vidi.

> Ako imate registrovan naziv domena, možete ga koristiti u ovom procesu za kreiranje SRD-a kao što sam ja uradio https://srd.7thextinctionrpg.com

# Proces

## Kreiranje repozitorijuma na Githubu

1. Prijavite se na Github

2. Idite na javni šablon https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Kliknite na "Use this template"

![Step3](/_media/Step3.png)

4. Odaberite "Create a new repository"

5. Unesite naziv repozitorijuma

![Step5](/_media/Step5.png)

6. Odaberite 'Private'

7. Odaberite 'Create repository'

Biće potrebno 5-30 sekundi da se kopira šablon, nakon čega ćete imati svoju kopiju.

8. Uverite se da imate datoteku ".nojekyll" – ovo je prazna datoteka koja je potrebna kada hostujete veb sajt na Githubu, inače se SRD neće pravilno prikazati. *(Govori GitHub Pages da ne obrađuje objavljene datoteke kroz Jekyll).*

## Dodavanje vašeg sadržaja

### *.md Datoteke

.md datoteke su Markdown datoteke. Markdown je lagani jezik za obeležavanje koji možete koristiti za dodavanje elemenata formatiranja u tekstualne dokumente bez formatiranja. U zavisnosti od veličine vašeg sadržaja, možete sve informacije o vašoj igri smestiti u jednu *.md datoteku, ili, kao što sam ja uradio na [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), kreirati zasebne datoteke za svako poglavlje. Datoteka "sample.md" pruža neke primere formatiranja.

Markdown jezik je vrlo lako naučiti, koristite link naveden pod tačkom 2 u Preduslovima iznad za potpunu listu sintakse.

### _Sidebar.md

Ovo je vaš meni, navigacioni panel sa leve strane veb sajta. Kada dodate Markdown datoteku u svoj repozitorijum, morate je dodati ovde kako bi njen sadržaj bio uključen. Pratite postojeće formatiranje.

## Omogućite Github stranice da pretvorite repozitorijum u veb sajt

1. U vašem repozitorijumu kliknite na 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Odaberite 'Pages' u levom bočnom meniju

![Website-Step2](/_media/Website-Step2.png)

3. Ako niste učinili repozitorijum 'public', imate dva izbora:
    a. Učinite repozitorijum javnim što će vam omogućiti da koristite Github stranice za besplatno hostovanje vašeg SRD veb sajta
    b. Nadogradite svoj Github nalog (u trenutku pisanja ovog teksta košta 4 dolara mesečno ili 48 dolara godišnje)

4. Pod 'Branch' odaberite 'main' i kliknite na 'save'

5. Sačekajte 10-20 sekundi, a zatim osvežite stranicu

6. Sada ćete videti svoj URL kao što je https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Promena fontova

1. Uredite datoteku /_assets/style.css

2. U odeljku 'body' pronaći ćete siteFont i headingFont

3. Promenite ih u fontove koje želite da koristite

## Korišćenje Fontawesome i/ili Material Icons dodatka za prikaz besplatnih ikona u vašem SRD-u

### Fontawesome

Koristite Fontawesome za besplatne ikone i animirane ikone. Pretplaćeni korisnici mogu koristiti Pro ikone.

1. Pronađite ikonu na [Fontawesome](https://fontawesome.com/icons)
2. Odaberite ikonu
3. U iskačućem prozoru, pod karticom HTML, kopirajte sve između " "

```html
<i class="fa-solid fa-dice-d20"></i>
```

4. Postavite kopirani tekst između ``:`` bez razmaka

```
`:`
```

### Material Icons

Koristite Material Icons za više besplatnih ikona

1. Pronađite ikone na [Material Icons](https://fonts.google.com/icons)
2. Kopirajte i umetnite web span link direktno u vaše Markdown datoteke

```html
<span class="material-icons">
  casino
</span>
```