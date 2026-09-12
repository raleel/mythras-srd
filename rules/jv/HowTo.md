# Prasyarat

1. Pemahaman dhasar babagan [basa markdown](https://www.markdownguide.org/basic-syntax/).

2. Sampeyan kudu nggawe akun [github](https://github.com/) gratis yen durung duwe. Disaranake sampeyan nggunakake jeneng RPG sampeyan amarga iki bakal dadi bagean saka URL sing bakal digunakake wong kanggo ngakses SRD sampeyan.

3. Sampeyan bisa nindakake proses iki kabeh liwat browser tanpa ngerti git. Sanajan sinau github desktop bakal ngidini sampeyan nyoba pangowahan apa wae kanthi lokal sadurunge nampilake langsung kanggo dideleng jagad.

> Yen sampeyan wis ndhaptar jeneng domain, sampeyan bisa nggunakake iki kanthi proses iki kanggo nggawe SRD kaya sing dakgawe https://srd.7thextinctionrpg.com

# Proses

## Nggawe Repositori ing Github

1. Login menyang Github

2. Navigasi menyang template umum https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klik "Use this template"

![Step3](/_media/Step3.png)

4. Pilih "Create a new repository"

5. Ketik jeneng repositori

![Step5](/_media/Step5.png)

6. Pilih 'Private'

7. Pilih 'Create repository'

Bakal mbutuhake 5-30 detik kanggo nyalin template, banjur sampeyan bakal duwe salinan dhewe.

8. Priksa manawa sampeyan duwe file ".nojekyll", iki file kosong sing dibutuhake nalika hosting situs web ing Github, yen ora, SRD ora bakal ditampilake kanthi bener. *(Ngandhani GitHub Pages supaya ora mbukak file sing diterbitake liwat Jekyll).*


## Nambah Konten Sampeyan

### File *.md

File .md yaiku file markdown, Markdown minangka basa markup sing entheng sing bisa digunakake kanggo nambah elemen format menyang dokumen teks biasa. Gumantung ing ukuran konten sampeyan, sampeyan bisa nyelehake kabeh informasi game ing siji file *.md, utawa kaya sing daklakoni ing [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) nggawe file sing kapisah kanggo saben bab. "sample.md" nyedhiyakake sawetara conto format.

Basa markdown gampang banget disinaoni, gunakake link sing disedhiyakake ing poin 2 ing Prasyarat ing ndhuwur kanggo dhaptar sintaks lengkap.

### _Sidebar.md

Iki minangka menu sampeyan, panel navigasi ing sisih kiwa situs web. Sawise sampeyan nambah file markdown menyang repositori, sampeyan kudu nambah file kasebut ing kene supaya isine kalebu. Tindakake format sing wis ana.


## Aktifake Github Pages kanggo ngowahi Repositori dadi Situs Web

1. Ing repositori sampeyan, klik 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Pilih 'Pages' ing menu sisih kiwa

![Website-Step2](/_media/Website-Step2.png)

3. Yen sampeyan durung nggawe repositori 'public', sampeyan duwe rong pilihan
    a. Gawe repositori dadi umum sing bakal ngidini sampeyan nggunakake Github pages kanggo hosting Situs Web SRD sampeyan kanthi gratis
    b. Upgrade akun Github sampeyan (nalika nulis iki, regane $4 saben wulan utawa ragad taunan $48)

4. Ing 'Branch' pilih 'main' banjur klik simpen

5. Enteni 10-20 detik banjur refresh kaca kasebut

6. Sampeyan saiki bakal weruh URL sampeyan kayata https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Ngganti Font

1. Edit file /_assets/style.css

2. Ing 'body section' sampeyan bakal nemokake siteFont & headingFont

3. Ganti iki dadi font sing pengin digunakake


## Nggunakake plugin Fontawesome lan/utawa Material Icons kanggo nampilake ikon gratis ing SRD sampeyan

### Fontawesome

Gunakake Fontawesome kanggo entuk ikon gratis lan ikon animasi. Pangguna sing langganan bisa nggunakake Pro Icons

1. Temokake ikon ing [Fontawesome](https://fontawesome.com/icons)
2. Pilih ikon kasebut
3. Ing jendhela popup, ing tab HTML salin kabeh ing antarane " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Selehake teks sing disalin ing antarane `:` tanpa spasi

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Gunakake Material Icons kanggo luwih akeh ikon gratis

1. Temokake ikon ing [Material Icons](https://fonts.google.com/icons)
2. Salin & lebokake link web span langsung menyang file markdown sampeyan

```markup
<span class="material-icons">face</span>
```