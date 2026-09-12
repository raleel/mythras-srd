# Prasyarat

1. Pemahaman dasar tentang [bahasa markdown](https://www.markdownguide.org/basic-syntax/).

2. Anda perlu membuat akun [github](https://github.com/) gratis jika belum memilikinya. Disarankan untuk menggunakan nama RPG Anda karena ini akan menjadi bagian dari URL yang akan digunakan orang untuk mengakses SRD Anda. 

3. Anda dapat melakukan seluruh proses ini melalui peramban tanpa perlu mengetahui git. Meskipun mempelajari github desktop akan memungkinkan Anda menguji perubahan apa pun secara lokal sebelum menerapkannya secara langsung agar dapat dilihat dunia.

> Jika Anda memiliki nama domain yang terdaftar, Anda dapat menggunakannya dalam proses ini untuk membuat SRD seperti yang saya miliki di https://srd.7thextinctionrpg.com

# Prosesnya

## Membuat Repositori di Github

1. Masuk ke Github

2. Navigasikan ke templat publik https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klik "Use this template" (Gunakan templat ini)

![Step3](/_media/Step3.png)

4. Pilih "Create a new repository" (Buat repositori baru)

5. Masukkan nama repositori

![Step5](/_media/Step5.png)

6. Pilih 'Private' (Privat) 

7. Pilih 'Create repository' (Buat repositori)

Dibutuhkan waktu 5-30 detik untuk menyalin templat, setelah itu Anda akan memiliki salinan Anda sendiri.

8. Pastikan Anda memiliki berkas ".nojekyll", ini adalah berkas kosong yang diperlukan saat meng-hosting situs web di Github, jika tidak, SRD tidak akan ditampilkan dengan benar. *(Memberitahu GitHub Pages untuk tidak menjalankan berkas yang diterbitkan melalui Jekyll).*


## Menambahkan Konten Anda

### Berkas *.md

Berkas .md adalah berkas markdown. Markdown adalah bahasa markup ringan yang dapat Anda gunakan untuk menambahkan elemen pemformatan ke dokumen teks biasa. Bergantung pada ukuran konten Anda, Anda dapat menempatkan semua informasi gim Anda dalam satu berkas *.md, atau seperti yang saya lakukan di [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), buat berkas terpisah untuk setiap bab. "sample.md" menyediakan beberapa contoh pemformatan. 

Bahasa markdown sangat mudah dipelajari, gunakan tautan yang disediakan pada poin 2 di bawah Prasyarat di atas untuk daftar sintaks lengkap. 

### _Sidebar.md

Ini adalah menu atau panel navigasi di sisi kiri situs web. Setelah Anda menambahkan berkas markdown ke repositori Anda, Anda perlu menambahkan berkas tersebut di sini agar isinya disertakan. Ikuti pemformatan yang sudah ada.


## Mengaktifkan Github Pages untuk Mengubah Repositori menjadi Situs Web

1. Di repositori Anda, klik 'Settings' (Pengaturan)

![Website-Step1](/_media/Website-Step1.png)

2. Pilih 'Pages' di menu sisi kiri

![Website-Step2](/_media/Website-Step2.png)

3. Jika Anda belum membuat repositori menjadi 'public' (publik), Anda memiliki dua pilihan:
    a. Jadikan repositori publik yang kemudian akan memungkinkan Anda menggunakan Github pages untuk meng-hosting Situs Web SRD Anda secara gratis.
    b. Tingkatkan akun Github Anda (pada saat penulisan ini, biayanya $4 per bulan atau biaya tahunan $48).

4. Di bawah 'Branch' (Cabang), pilih 'main' dan klik simpan.

5. Tunggu 10-20 detik lalu segarkan (refresh) halaman tersebut.

6. Anda sekarang akan melihat URL Anda seperti https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Mengubah Fon

1. Edit berkas /_assets/style.css 

2. Di bawah 'body section' (bagian body), Anda akan menemukan siteFont & headingFont

3. Ubah ini ke fon yang ingin Anda gunakan


## Menggunakan Plugin Fontawesome dan/atau Material Icons untuk menampilkan ikon gratis di SRD Anda

### Fontawesome

Gunakan Fontawesome untuk mendapatkan ikon gratis dan ikon animasi. Pengguna berlangganan dapat menggunakan Pro Icons.

1. Temukan ikon di [Fontawesome](https://fontawesome.com/icons)
2. Pilih ikon tersebut
3. Di jendela sembul, di bawah tab HTML, salin semua yang ada di antara " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Tempatkan teks yang disalin di antara `:` tanpa spasi

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Gunakan Material Icons untuk mendapatkan lebih banyak ikon gratis

1. Temukan ikon di [Material Icons](https://fonts.google.com/icons)
2. Salin & masukkan tautan span web langsung ke dalam berkas markdown Anda

```markup
<span class="material-icons">face</span>
```