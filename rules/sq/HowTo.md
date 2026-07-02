# Parakushtet

1. Një kuptim bazë i [gjuhës markdown](https://www.markdownguide.org/basic-syntax/).

2. Do t'ju duhet të krijoni një llogari falas [github](https://github.com/) nëse nuk keni. Rekomandohet të përdorni emrin e RPG-së suaj pasi kjo do të bëhet pjesë e URL-së që njerëzit do të përdorin për të hyrë në SRD-në tuaj.

3. Mund ta bëni të gjithë këtë proces përmes shfletuesit pa njohur git. Megjithatë, mësimi i github desktop do t'ju lejojë të testoni çdo ndryshim lokalisht përpara se t'i shpërndani ato drejtpërdrejt për të gjithë botën.

> Nëse keni të regjistruar një emër domeni, mund ta përdorni këtë me këtë proces për të krijuar një SRD siç kam unë https://srd.7thextinctionrpg.com

# Procesi

## Krijimi i Depozitës në Github

1. Hyni në Github

2. Navigoni te shablloni publik https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klikoni "Përdor këtë shabllon"

![Step3](/_media/Step3.png)

4. Zgjidhni "Krijo një depozitë të re"

5. Futni një emër depozite

![Step5](/_media/Step5.png)

6. Zgjidhni 'Private'

7. Zgjidhni 'Krijo depozitë'

Do të duhen 5-30 sekonda për të kopjuar shabllonin, më pas do të keni kopjen tuaj.

8. Sigurohuni që të keni skedarin ".nojekyll" ky është një skedar bosh që nevojitet kur hostoni një faqe interneti në Github, përndryshe SRD nuk do të shfaqet siç duhet. *(I tregon GitHub Pages të mos ekzekutojë skedarët e publikuar përmes Jekyll).*

## Shtimi i Përmbajtjes Suaj

### Skedarët *.md

Skedarët .md janë skedarë markdown, Markdown është një gjuhë shënuese e lehtë që mund ta përdorni për të shtuar elemente formatimi në dokumente teksti të thjeshtë. Në varësi të madhësisë së përmbajtjes suaj, mund t'i vendosni të gjitha informacionet e lojës suaj në një skedar të vetëm *.md, ose siç kam bërë unë në [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) të krijoni skedarë të ndarë për çdo kapitull. "sample.md" ofron disa shembuj formatimi.

Gjuha Markdown është shumë e lehtë për t'u mësuar, përdorni lidhjen e dhënë në pikën 2 nën Parakushtet më sipër për një listë të plotë sintakse.

### _Sidebar.md

Ky është menuja juaj, dritarja e navigimit në anën e majtë të faqes së internetit. Pasi të keni shtuar një skedar markdown në depozitën tuaj, duhet ta shtoni skedarin këtu në mënyrë që përmbajtja e tij të përfshihet. Ndiqni formatimin ekzistues.

## Aktivizoni Github Pages për të kthyer Depozitën në një Faqe Interneti

1. Në depozitën tuaj klikoni te 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Zgjidhni 'Pages' në menynë e anës së majtë

![Website-Step2](/_media/Website-Step2.png)

3. Nëse nuk e keni bërë depozitën 'publike', keni dy zgjedhje
    a. Bëjeni depozitën publike e cila më pas do t'ju lejojë të përdorni Github Pages për të hostuar Faqen tuaj të SRD-së falas
    b. Përmirësoni llogarinë tuaj në Github (në kohën e shkrimit ky kushton 4 dollarë në muaj ose një tarifë vjetore prej 48 dollarësh)

4. Nën 'Branch' zgjidhni 'main' dhe klikoni ruaj

5. Jepi 10-20 sekonda pastaj rifresko faqen

6. Tani do të shihni URL-në tuaj si p.sh. https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Ndryshimi i Shkronjave

1. Redaktoni skedarin /_assets/style.css

2. Nën seksionin 'body' do të gjeni siteFont & headingFont

3. Ndryshoni këto në shkronjat që dëshironi të përdorni

## Përdorimi i shtojcës Fontawesome dhe/ose Material Icons për të shfaqur ikona falas në SRD-në tuaj

### Fontawesome

Përdorni Fontawesome për të marrë ikona falas dhe ikona të animuara. Përdoruesit e abonuar mund të përdorin Ikona Pro

1. Gjeni ikonën në [Fontawesome](https://fontawesome.com/icons)
2. Zgjidhni ikonën
3. Në dritaren pop-up, nën skedën HTML kopjoni gjithçka ndërmjet " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Vendoseni tekstin e kopjuar midis `:` pa hapësira

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Përdorni Material Icons për më shumë ikona falas

1. Gjeni ikonat në [Material Icons](https://fonts.google.com/icons)
2. Kopjoni dhe futni lidhjen web span direkt në skedarët tuaj markdown

```markup
<span class="material-icons">face</span>
```