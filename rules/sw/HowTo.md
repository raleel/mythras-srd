# Masharti ya Awali

1. Uelewa wa msingi wa [lugha ya Markdown](https://www.markdownguide.org/basic-syntax/).

2. Utahitaji kuunda akaunti ya bure ya [Github](https://github.com/) ikiwa huna. Inashauriwa utumie jina la RPG yako kwani hii itakuwa sehemu ya URL ambayo watu watatumia kufikia SRD yako.

3. Unaweza kufanya mchakato huu wote kupitia kivinjari bila kujua git. Ingawa kujifunza github desktop kutakuwezesha kujaribu mabadiliko yoyote ndani kabla ya kuyachapisha moja kwa moja kwa ulimwengu kuona.

> Ikiwa una jina la kikoa kilichosajiliwa, unaweza kutumia hii na mchakato huu kuunda SRD kama niliyonayo https://srd.7thextinctionrpg.com

# Mchakato

## Kuunda Hifadhidata (Repository) kwenye Github

1. Ingia kwenye Github

2. Nenda kwenye template ya umma https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Bofya "Tumia template hii"

![Step3](/_media/Step3.png)

4. Chagua "Unda hifadhidata mpya"

5. Ingiza jina la hifadhidata

![Step5](/_media/Step5.png)

6. Chagua 'Binafsi'

7. Chagua 'Unda hifadhidata'

Itachukua sekunde 5-30 kunakili template, kisha utakuwa na nakala yako mwenyewe.

8. Hakikisha kuwa una faili ".nojekyll" hii ni faili tupu inayohitajika wakati wa kukaribisha tovuti kwenye Github vinginevyo SRD haitaonyeshwa ipasavyo. *(Inaambia GitHub Pages isitumie faili zilizochapishwa kupitia Jekyll).*

## Kuongeza Yaliyomo Yako

### Faili za *.md

Faili za .md ni faili za markdown, Markdown ni lugha nyepesi ya alama unayoweza kutumia kuongeza vipengele vya uumbizaji kwenye nyaraka za maandishi wazi. Kulingana na ukubwa wa maudhui yako unaweza kuweka taarifa zote za mchezo wako katika faili moja ya *.md, au kama nilivyo kwenye [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) kuunda faili tofauti kwa kila sura. Faili ya "sample.md" inatoa mifano kadhaa ya uumbizaji.

Lugha ya Markdown ni rahisi sana kujifunza, tumia kiungo kilichotolewa kwenye kipengele cha 2 chini ya Masharti ya Awali hapo juu kwa orodha kamili ya sintaksia.

### _Sidebar.md

Hii ni menyu yako, paneli ya urambazaji upande wa kushoto wa tovuti. Mara tu unapoongeza faili ya markdown kwenye hifadhidata yako, unahitaji kuongeza faili hapa ili yaliyomo yake yajumuishwe. Fuata uumbizaji uliopo.

## Washa Ukurasa wa Github (Github Pages) ili Kugeuza Hifadhidata kuwa Tovuti

1. Kwenye hifadhidata yako bofya 'Mipangilio'

![Website-Step1](/_media/Website-Step1.png)

2. Chagua 'Kurasa' kwenye menyu ya upande wa kushoto

![Website-Step2](/_media/Website-Step2.png)

3. Ikiwa bado hujaifanya hifadhidata kuwa 'ya umma', una chaguo mbili
    a. Fanya hifadhidata kuwa ya umma ambayo itakuwezesha kutumia kurasa za Github kukaribisha Tovuti yako ya SRD bure
    b. Boresha akaunti yako ya Github (wakati wa kuandika hii inagharimu $4 kwa mwezi au $48 ada ya kila mwaka)

4. Chini ya 'Tawi'chagua 'main' na bofya hifadhi

5. Ipe sekunde 10-20 kisha uonyeshe upya ukurasa

6. Sasa utaona URL yako kama https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Kubadilisha Fonti

1. Hariri faili ya /_assets/style.css

2. Chini ya 'sehemu ya mwili' utapata siteFont & headingFont

3. Badilisha hizi kuwa fonti unazotaka kutumia

## Kutumia Fontawesome na/au Material Icons plugin kuonyesha ikoni za bure kwenye SRD yako

### Fontawesome

Tumia Fontawesome kupata ikoni za bure na ikoni za uhuishaji. Watumiaji waliosajiliwa wanaweza kutumia Pro Icons

1. Tafuta ikoni kwenye [Fontawesome](https://fontawesome.com/icons)
2. Chagua ikoni
3. Katika dirisha ibukizi, chini ya kichupo cha HTML nakili kila kitu kati ya " "

```html
<i class="fas fa-hat-wizard"></i>
```

4. Weka maandishi yaliyonakiliwa kati ya `<i class="fas fa-hat-wizard"></i>` bila nafasi

```html
`<i>` `</i>`
```

### Material Icons

Tumia Material Icons kwa ikoni zaidi za bure

1. Tafuta ikoni kwenye [Material Icons](https://fonts.google.com/icons)
2. Nakili & ingiza kiungo cha web span moja kwa moja kwenye faili zako za markdown

```html
<span class="material-icons">
  face
</span>
```