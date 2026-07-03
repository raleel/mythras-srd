# Prasyarat

1. Pemahaman asas tentang [bahasa markdown](https://www.markdownguide.org/basic-syntax/).

2. Anda perlu mencipta akaun [github](https://github.com/) percuma jika anda tiada. Disarankan anda menggunakan nama RPG anda kerana ini akan menjadi sebahagian daripada URL yang akan digunakan oleh orang ramai untuk mengakses SRD anda.

3. Anda boleh melakukan keseluruhan proses ini melalui pelayar web tanpa mengetahui git. Walaupun begitu, mempelajari GitHub Desktop akan membolehkan anda menguji sebarang perubahan secara tempatan sebelum menggunakannya secara langsung untuk tatapan dunia.

> Jika anda mempunyai nama domain yang didaftarkan, anda boleh menggunakannya dengan proses ini untuk mencipta SRD seperti yang saya miliki https://srd.7thextinctionrpg.com

# Proses

## Mencipta Repositori di Github

1. Log masuk ke Github

2. Navigasi ke templat awam https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klik "Gunakan templat ini"

![Step3](/_media/Step3.png)

4. Pilih "Cipta repositori baharu"

5. Masukkan nama repositori

![Step5](/_media/Step5.png)

6. Pilih 'Peribadi'

7. Pilih 'Cipta repositori'

Ia akan mengambil masa 5-30 saat untuk menyalin templat, kemudian anda akan mempunyai salinan anda sendiri.

8. Pastikan anda mempunyai fail ".nojekyll". Ini adalah fail kosong yang diperlukan apabila mengehos laman web di Github; jika tidak, SRD tidak akan dipaparkan dengan betul. *(Memberitahu GitHub Pages untuk tidak menjalankan fail yang diterbitkan melalui Jekyll).*

## Menambah Kandungan Anda

### Fail *.md

Fail .md ialah fail markdown. Markdown adalah bahasa penanda ringan yang boleh anda gunakan untuk menambah elemen pemformatan pada dokumen teks biasa. Bergantung pada saiz kandungan anda, anda boleh meletakkan semua maklumat permainan anda dalam satu fail *.md, atau seperti yang saya lakukan di [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), mencipta fail berasingan untuk setiap bab. "sample.md" menyediakan beberapa contoh pemformatan.

Bahasa markdown sangat mudah dipelajari, gunakan pautan yang disediakan di bawah perkara 2 dalam Prasyarat di atas untuk senarai sintaks yang lengkap.

### _Sidebar.md

Ini adalah menu anda, panel navigasi di sebelah kiri laman web. Setelah anda menambah fail markdown ke repositori anda, anda perlu menambah fail tersebut di sini supaya kandungannya disertakan. Ikut pemformatan sedia ada.

## Dayakan Github Pages untuk Menukar Repositori menjadi Laman Web

1. Dalam repositori anda, klik pada 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Pilih 'Pages' di menu sebelah kiri

![Website-Step2](/_media/Website-Step2.png)

3. Jika anda belum menjadikan repositori 'public', anda mempunyai dua pilihan
    a. Jadikan repositori awam yang kemudiannya akan membolehkan anda menggunakan Github Pages untuk mengehos Laman Web SRD anda secara percuma
    b. Naik taraf akaun Github anda (pada masa penulisan ini, ia berharga $4 sebulan atau yuran tahunan $48)

4. Di bawah 'Branch', pilih 'main' dan klik simpan

5. Berikan masa 10-20 saat kemudian muat semula halaman

6. Anda kini akan melihat URL anda seperti https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Menukar Fon

1. Edit fail /_assets/style.css

2. Di bawah bahagian 'body', anda akan menemui siteFont & headingFont

3. Tukar ini kepada fon yang anda ingin gunakan

## Menggunakan plugin Fontawesome dan/atau Material Icons untuk memaparkan ikon percuma dalam SRD anda

### Fontawesome

Gunakan Fontawesome untuk mendapatkan ikon percuma dan ikon animasi. Pengguna yang melanggan boleh menggunakan Ikon Pro

1. Cari ikon di [Fontawesome](https://fontawesome.com/icons)
2. Pilih ikon tersebut
3. Dalam tetingkap pop timbul, di bawah tab HTML, salin semua yang berada di antara " "

```html
<i class="fa-solid fa-star"></i>
```

4. Letakkan teks yang disalin di antara `<i></i>` tanpa ruang

```html
<i><p>Text</p></i>
```

### Material Icons

Gunakan Material Icons untuk ikon percuma yang lebih banyak

1. Cari ikon di [Material Icons](https://fonts.google.com/icons)
2. Salin & masukkan pautan rentang web terus ke dalam fail markdown anda

```html
<span class="material-icons">
face
</span>
```