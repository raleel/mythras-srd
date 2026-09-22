# Prasyarat

1. Pemahaman dasar tentang [bahasa markdown](https://www.markdownguide.org/basic-syntax/).

2. Kamu perlu membuat akun [github](https://github.com/) gratis jika belum memilikinya. Disarankan untuk menggunakan nama RPG kamu karena ini akan menjadi bagian dari URL yang digunakan orang untuk mengakses SRD kamu. 

3. Kamu bisa melakukan seluruh proses ini melalui browser tanpa perlu tahu git. Meskipun mempelajari github desktop akan memungkinkanmu untuk menguji setiap perubahan secara lokal sebelum menyebarkannya langsung agar dunia bisa melihatnya.

> Jika kamu memiliki nama domain yang terdaftar, kamu dapat menggunakannya dengan proses ini untuk membuat SRD seperti yang saya miliki https://srd.7thextinctionrpg.com

# Prosesnya

## Membuat Repositori di Github

1. Masuk ke Github

2. Navigasikan ke template publik https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klik "Use this template"

![Step3](/_media/Step3.png)

4. Pilih "Create a new repository"

5. Masukkan nama repositori

![Step5](/_media/Step5.png)

6. Pilih 'Private' 

7. Pilih 'Create repository'

Dibutuhkan 5-30 detik untuk menyalin template, setelah itu kamu akan memiliki salinan milikmu sendiri.

8. Pastikan kamu memiliki file ".nojekyll", ini adalah file kosong yang diperlukan saat meng-hosting situs web di Github, jika tidak, SRD tidak akan ditampilkan dengan benar. *(Memberitahu GitHub Pages untuk tidak menjalankan file yang diterbitkan melalui Jekyll).*


## Menambahkan Kontenmu

### File *.md

File .md adalah file markdown, Markdown adalah bahasa markup ringan yang bisa kamu gunakan untuk menambahkan elemen pemformatan ke dokumen teks biasa. Tergantung pada ukuran kontenmu, kamu bisa menempatkan semua informasi game-mu dalam satu file *.md, atau seperti yang saya lakukan di [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) membuat file terpisah untuk setiap bab. "sample.md" menyediakan beberapa contoh pemformatan. 

Bahasa Markdown sangat mudah dipelajari, gunakan tautan yang disediakan pada poin 2 di bawah Prasyarat di atas untuk daftar lengkap sintaksisnya. 

### _Sidebar.md

Ini adalah menu atau panel navigasi di sisi kiri situs web. Setelah kamu menambahkan file markdown ke repositorimu, kamu perlu menambahkan filenya di sini agar isinya disertakan. Ikuti pemformatan yang sudah ada.


## Mengaktifkan Github Pages untuk Mengubah Repositori menjadi Situs Web

1. Di dalam repositorimu klik 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Pilih 'Pages' di menu sebelah kiri

![Website-Step2](/_media/Website-Step2.png)

3. Jika kamu belum membuat repositorinya 'public', kamu memiliki dua pilihan
    a. Jadikan repositori publik yang kemudian akan memungkinkanmu menggunakan Github pages untuk meng-hosting situs web SRD-mu secara gratis
    b. Tingkatkan akun Github-mu (pada saat penulisan ini biayanya $4 per bulan atau biaya tahunan $48)

4. Di bawah 'Branch' pilih 'main' dan klik simpan

5. Beri waktu 10-20 detik lalu segarkan halaman

6. Kamu sekarang akan melihat URL-mu seperti https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Mengubah Font

1. Edit file /_assets/Gaya.css 

2. Di bawah 'bagian body' kamu akan menemukan siteFont & headingFont

3. Ubah ini ke font yang ingin kamu gunakan


## Menggunakan plugin Fontawesome dan/atau Material Icons untuk menampilkan ikon gratis di SRD-mu

### Fontawesome

Gunakan Fontawesome untuk mendapatkan ikon gratis dan ikon animasi. Pengguna berlangganan dapat menggunakan Pro Icons

1. Cari ikon di [Fontawesome](https://fontawesome.com/icons)
2. Pilih ikonnya
3. Di jendela popup, di bawah tab HTML salin semua yang ada di antara " "

```EXAMPLE
<i Kelas="fa-solid fa-dice-d20"></i>
```

4. Tempatkan teks yang disalin di antara `:` tanpa spasi

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Gunakan Material Icons untuk mendapatkan lebih banyak ikon gratis

1. Cari ikon di [Material Icons](https://fonts.google.com/icons)
2. Salin & masukkan tautan span web secara langsung ke dalam file markdown-mu

```markup
<span Kelas="material-icons">face</span>
```