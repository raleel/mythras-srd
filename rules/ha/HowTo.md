# Abubuwan Bukata

1. Fahimtar asali game da [harshen markdown](https://www.markdownguide.org/basic-syntax/).

2. Za ku buƙaci ƙirƙirar asusun [github](https://github.com/) kyauta idan ba ku da shi. An ba da shawarar ku yi amfani da sunan RPG ɗinku saboda wannan zai zama wani ɓangare na URL da mutane za su yi amfani da su don samun damar SRD ɗinku.

3. Kuna iya yin duk wannan tsarin ta hanyar bincike ba tare da sanin git ba. Ko da yake koyon github desktop zai ba ku damar gwada duk wani canji a cikin gida kafin tura su kai tsaye don duniya ta gani.

> Idan kuna da sunan yanki da aka yi rajista, kuna iya amfani da shi tare da wannan tsarin don ƙirƙirar SRD kamar yadda nake da shi https://srd.7thextinctionrpg.com

# Tsarin Aiki

## Ƙirƙirar Ma'ajiyar bayanai a Github

1. Shiga Github

2. Ku tafi zuwa samfurin jama'a https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Danna "Amfani da wannan samfurin"

![Mataki3](/_media/Step3.png)

4. Zaɓi "Ƙirƙirar sabon ma'ajiyar bayanai"

5. Saka sunan ma'ajiyar bayanai

![Mataki5](/_media/Step5.png)

6. Zaɓi 'Private'

7. Zaɓi 'Create repository'

Zai ɗauki sakan 5-30 don kwafin samfurin, sannan za ku sami kwafin ku.

8. Tabbatar cewa kuna da fayil ɗin ".nojekyll" wannan fayil ne mara komai wanda ake buƙata lokacin karɓar shafin yanar gizo a Github in ba haka ba SRD ba zai nuna daidai ba. *(Yana gaya wa Shafukan GitHub kar su gudanar da fayilolin da aka buga ta hanyar Jekyll).*

## Ƙara Abun Cikin ku

### *.md Files

.md fayiloli fayilolin markdown ne, Markdown harshe ne mai sauƙi wanda zaka iya amfani da shi don ƙara abubuwan tsara rubutu zuwa takardun rubutu marasa tsari. Dangane da girman abun ciki naka, zaka iya sanya duk bayanan wasan ka a cikin fayil guda ɗaya na *.md, ko kamar yadda na yi a [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) ƙirƙirar fayiloli daban-daban ga kowane babi. "sample.md" yana samar da wasu misalan tsari.

Harshen Markdown yana da sauƙin koyo, yi amfani da hanyar haɗin da aka bayar a batu na 2 a ƙarƙashin Abubuwan Bukata a sama don cikakken jerin ƙa'idodi.

### _Sidebar.md

Wannan shine menu ɗinku, sashin kewayawa a gefen hagu na shafin yanar gizon. Da zarar kun ƙara fayil ɗin markdown zuwa ma'ajiyar bayananku, kuna buƙatar ƙara fayil ɗin anan don a haɗa abun cikinsa. Bi tsarin da ake da shi.

## Kunna Shafukan Github don Maida Ma'ajiyar bayanai zuwa Shafin Yanar Gizo

1. A cikin ma'ajiyar bayananku danna kan 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Zaɓi 'Pages' a menu na gefen hagu

![Website-Step2](/_media/Website-Step2.png)

3. Idan baku sanya ma'ajiyar bayanai 'public' ba, kuna da zaɓi biyu
    a. Sanya ma'ajiyar bayanai ta jama'a wanda zai ba ku damar amfani da shafukan Github don karɓar gidan yanar gizonku na SRD kyauta
    b. Inganta asusunku na Github (a lokacin rubuta wannan yana kashe $4 a wata ko $48 kuɗin shekara)

4. Karkashin 'Branch' zaɓi 'main' sannan danna save

5. Ba shi sakan 10-20 sannan ku sabunta shafin

6. Yanzu zaku ga URL ɗinku kamar https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Canza Fonts

1. Shirya fayil ɗin /_assets/style.css

2. A ƙarƙashin 'body section' zaku sami siteFont & headingFont

3. Canza waɗannan zuwa font ɗin da kuke son amfani da su

## Amfani da Fontawesome da/ko Material Icons plugin don nuna gumaka kyauta a cikin SRD ɗinku

### Fontawesome

Yi amfani da Fontawesome don samun gumaka kyauta da gumaka masu motsi. Masu biyan kuɗi za su iya amfani da Pro Icons

1. Nemo gunkin a kan [Fontawesome](https://fontawesome.com/icons)
2. Zaɓi gunkin
3. A cikin taga mai tasowa, a ƙarƙashin shafin HTML kwafa duk abin da ke tsakanin " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Sanya rubutun da aka kwafa tsakanin `:` babu tazara

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Yi amfani da Material Icons don ƙarin gumaka kyauta

1. Nemo gumaka a kan [Material Icons](https://fonts.google.com/icons)
2. Kwafa & saka hanyar haɗin yanar gizo kai tsaye cikin fayilolin markdown ɗinku

```markup
<span class="material-icons">face</span>
```