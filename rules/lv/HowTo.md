# Priekšnosacījumi

1. Pamatzināšanas par [markdown valodu](https://www.markdownguide.org/basic-syntax/).

2. Jums būs nepieciešams izveidot bezmaksas [github](https://github.com/) kontu, ja jums tāda vēl nav. Ieteicams izmantot savas RPG spēles nosaukumu, jo tas kļūs par daļu no URL, ko cilvēki izmantos, lai piekļūtu jūsu SRD.

3. Visu šo procesu varat veikt caur pārlūkprogrammu, nezinot git. Lai gan "Github Desktop" apgūšana ļaus jums pārbaudīt visas izmaiņas lokāli, pirms to publicēšanas visai pasaulei.

> Ja esat reģistrējis domēna vārdu, varat to izmantot šajā procesā, lai izveidotu SRD, līdzīgi kā es to izdarīju šeit: https://srd.7thextinctionrpg.com

# Process

## Repozitorija izveide Github

1. Ielogojieties Github

2. Dodieties uz publisko veidni https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Noklikšķiniet uz "Use this template" (Izmantot šo veidni)

![Step3](/_media/Step3.png)

4. Atlasiet "Create a new repository" (Izveidot jaunu repozitoriju)

5. Ievadiet repozitorija nosaukumu

![Step5](/_media/Step5.png)

6. Atlasiet "Private" (Privāts)

7. Atlasiet "Create repository" (Izveidot repozitoriju)

Veidnes kopēšana aizņems 5-30 sekundes, pēc tam jums būs pašam sava kopija.

8. Pārliecinieties, ka jums ir fails ".nojekyll" — tas ir tukšs fails, kas nepieciešams, mitinot vietni Github, pretējā gadījumā SRD netiks attēlots pareizi. *(Norāda GitHub Pages neapstrādāt publicētos failus caur Jekyll).*


## Satura pievienošana

### *.md faili

.md faili ir markdown faili; Markdown ir viegla iezīmēšanas valoda, ko varat izmantot, lai pievienotu formatēšanas elementus vienkārša teksta dokumentiem. Atkarībā no satura apjoma, varat ievietot visu spēles informāciju vienā *.md failā vai, kā es to darīju [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), izveidot atsevišķus failus katrai nodaļai. "sample.md" sniedz dažus formatēšanas piemērus.

Markdown valodu ir ļoti viegli apgūt; izmantojiet saiti, kas sniegta 2. punktā sadaļā "Priekšnosacījumi", lai skatītu pilnu sintakses sarakstu.

### _Sidebar.md

Šī ir jūsu izvēlne, navigācijas panelis vietnes kreisajā pusē. Kad esat pievienojis markdown failu savam repozitorijam, jums tas šeit jāpievieno, lai tā saturs tiktu iekļauts. Ievērojiet esošo formatējumu.


## Github Pages iespējošana, lai pārvērstu repozitoriju par vietni

1. Savā repozitorijā noklikšķiniet uz 'Settings' (Iestatījumi)

![Website-Step1](/_media/Website-Step1.png)

2. Kreisās puses izvēlnē atlasiet 'Pages'

![Website-Step2](/_media/Website-Step2.png)

3. Ja neesat padarījis repozitoriju 'public' (publisku), jums ir divas iespējas:
    a. Padariet repozitoriju publisku, kas ļaus izmantot Github pages, lai bez maksas mitinātu savu SRD vietni
    b. Jauniniet savu Github kontu (rakstīšanas brīdī tas maksā 4 $ mēnesī vai 48 $ gadā)

4. Sadaļā 'Branch' atlasiet 'main' un noklikšķiniet uz saglabāt

5. Uzgaidiet 10-20 sekundes, tad atsvaidziniet lapu

6. Tagad jūs redzēsiet savu URL, piemēram, https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Fontu maiņa

1. Rediģējiet /_assets/style.css failu

2. Sadaļā 'body' atradīsiet siteFont un headingFont

3. Nomainiet tos uz fontiem, kurus vēlaties izmantot


## Fontawesome un/vai Material Icons spraudņa izmantošana, lai SRD attēlotu bezmaksas ikonas

### Fontawesome

Izmantojiet Fontawesome, lai iegūtu bezmaksas ikonas un animētas ikonas. Abonētie lietotāji var izmantot Pro ikonas.

1. Atrodiet ikonu vietnē [Fontawesome](https://fontawesome.com/icons)
2. Atlasiet ikonu
3. Uznirstošajā logā, cilnē HTML, nokopējiet visu, kas atrodas starp " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Ievietojiet nokopēto tekstu starp `:` bez atstarpēm

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Izmantojiet Material Icons, lai iegūtu vairāk bezmaksas ikonu.

1. Atrodiet ikonas vietnē [Material Icons](https://fonts.google.com/icons)
2. Nokopējiet un ievietojiet web span saiti tieši savos markdown failos

```markup
<span class="material-icons">face</span>
```