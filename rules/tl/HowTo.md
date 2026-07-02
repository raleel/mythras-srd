# Mga Kinakailangan

1. Isang pangunahing pag-unawa sa [markdown language](https://www.markdownguide.org/basic-syntax/).

2. Kakailanganin mong gumawa ng libreng [github](https://github.com/) account kung wala ka pa. Inirerekomenda na gamitin mo ang pangalan ng iyong RPG dahil ito ang magiging bahagi ng URL na gagamitin ng mga tao upang ma-access ang iyong SRD.

3. Maaari mong gawin ang buong prosesong ito sa pamamagitan ng browser nang hindi alam ang git. Bagama't ang pag-aaral ng github desktop ay magbibigay-daan sa iyo na subukan ang anumang pagbabago nang lokal bago ilunsad ang mga ito nang live para makita ng mundo.

> Kung mayroon kang rehistradong domain name, maaari mo itong gamitin sa prosesong ito upang lumikha ng isang SRD tulad ng mayroon ako https://srd.7thextinctionrpg.com

# Ang Proseso

## Paglikha ng Repository sa Github

1. Mag-login sa Github

2. Mag-navigate sa pampublikong template https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. I-click ang "Use this template"

![Step3](/_media/Step3.png)

4. Piliin ang "Create a new repository"

5. Ilagay ang pangalan ng repository

![Step5](/_media/Step5.png)

6. Piliin ang 'Private'

7. Piliin ang 'Create repository'

Aabutin ng 5-30 segundo upang kopyahin ang template, pagkatapos ay magkakaroon ka ng sarili mong kopya.

8. Siguraduhin na mayroon kang file na ".nojekyll", ito ay isang walang laman na file na kinakailangan kapag nagho-host ng website sa Github kung hindi man ay hindi maipapakita nang maayos ang SRD. *(Sinasabi sa GitHub Pages na huwag patakbuhin ang mga na-publish na file sa pamamagitan ng Jekyll).*

## Pagdaragdag ng Iyong Nilalaman

### *.md na mga File

.md files ay mga markdown file, ang Markdown ay isang magaan na markup language na magagamit mo upang magdagdag ng mga elemento ng pag-format sa mga plaintext na text document. Depende sa laki ng iyong nilalaman, maaari mong ilagay ang lahat ng impormasyon ng iyong laro sa isang *.md file, o tulad ng ginawa ko sa [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) gumawa ng magkakahiwalay na file para sa bawat kabanata. Ang "sample.md" ay nagbibigay ng ilang halimbawa ng pag-format.

Ang markdown language ay napakadaling matutunan, gamitin ang link na ibinigay sa punto 2 sa ilalim ng Prerequisites sa itaas para sa isang kumpletong listahan ng syntax.

### _Sidebar.md

Ito ang iyong menu, ang navigation pane sa kaliwang bahagi ng website. Kapag nakapagdagdag ka na ng markdown file sa iyong repository, kailangan mong idagdag ang file dito upang maisama ang nilalaman nito. Sundin ang kasalukuyang format.

## Paganahin ang Github Pages upang gawing Website ang Repository

1. Sa iyong repository, i-click ang 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Piliin ang 'Pages' sa kaliwang bahagi ng menu

![Website-Step2](/_media/Website-Step2.png)

3. Kung hindi mo pa nagawang 'public' ang repository, mayroon kang dalawang pagpipilian
    a. Gawing public ang repository na magbibigay-daan sa iyo na gamitin ang Github pages para i-host ang iyong SRD Website nang libre
    b. I-upgrade ang iyong Github account (sa oras ng pagsusulat nito, ito ay nagkakahalaga ng $4 bawat buwan o $48 taunang bayad)

4. Sa ilalim ng 'Branch' piliin ang 'main' at i-click ang save

5. Hintayin ng 10-20 segundo pagkatapos ay i-refresh ang pahina

6. Makikita mo na ngayon ang iyong URL tulad ng https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Pagpapalit ng mga Font

1. I-edit ang file na /_assets/style.css

2. Sa ilalim ng 'body section' makikita mo ang siteFont at headingFont

3. Palitan ang mga ito sa mga font na gusto mong gamitin

## Paggamit ng Fontawesome at/o Material Icons plugin upang magpakita ng mga libreng icon sa iyong SRD

### Fontawesome

Gamitin ang Fontawesome upang makakuha ng mga libreng icon at animated na icon. Ang mga naka-subscribe na user ay maaaring gumamit ng Pro Icons.

1. Hanapin ang icon sa [Fontawesome](https://fontawesome.com/icons)
2. Piliin ang icon
3. Sa popup window, sa ilalim ng HTML tab kopyahin ang lahat sa pagitan ng " "

```html
<i class="fas fa-dizzy"></i>
```

4. Ilagay ang kinopyang text sa pagitan ng `<i>` nang walang espasyo

```
:fa-dizzy:
```

### Material Icons

Gamitin ang Material Icons para sa mas maraming libreng icon

1. Hanapin ang mga icon sa [Material Icons](https://fonts.google.com/icons)
2. Kopyahin at ipasok ang web span link nang direkta sa iyong mga markdown file

```html
<span class="material-icons">
  face
</span>
```