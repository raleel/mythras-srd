# Judul Panduan Gaya

Gunakan header h1 (`# Heading Title`) untuk judul bab utama. Semua header hx akan muncul di sidebar sebagai bookmark.

Jika judul bukan berupa header h1, sidebar akan mengalami kesalahan duplikasi yang menampilkan halaman lalu header h2 'judul'.

---
## Header bagian (h2)

Gunakan header h2 (`## Section Heading`) yang didahului oleh pemisah (`---`) untuk setiap bagian utama baru.

### Header subbagian yang meningkatkan level h sebesar 1

Gunakan header h3 (`### Subsection Heading`) untuk setiap Subbagian baru, dan header h4 (`#### Sub-Subsection Heading`) untuk setiap sub-subbagian baru.

### Progresi h subbagian: 2 > 3 > 4

Sub-header akan tercampur di sidebar jika progresi h tidak ditangani dengan benar.

Penanda header harus meningkat satu atau tidak sama sekali.

h2 yang diikuti oleh h2 atau h3 tidak masalah. h3 yang diikuti oleh h3 atau h4 juga tidak masalah.

### Kesalahan Subbagian
h2 yang diikuti oleh h4 akan menyebabkan masalah. Sidebar menempatkan sub-header di suatu tempat di atas header dalam daftar isi.

### Mengurangi level h

Ini sepertinya tidak menjadi masalah. contoh: h4 ke h3 atau h2 tidak masalah.

---
## Konvensi pemformatan

Gaya berikut adalah norma untuk SRD _Imperative_ ini dalam format Markdown.

### Tebal, Miring, dan Pemisah

- Gunakan tanda bintang ganda (`**Bold**`) untuk teks **Tebal**.
- Gunakan garis bawah (`_Italic_`) untuk teks _Miring_.
   - _nb: Hindari menggunakan tanda bintang tunggal untuk huruf Miring!_
- Gunakan garis miring terbalik (`\_`) untuk 'mengabaikan' karakter: \_Bukan Miring\_.
- Gunakan tanda kutip sudut (``` `code` ```) untuk membuat `code blocks`.
- Gunakan tiga tanda hubung (`---`) untuk menyisipkan garis pembagi horizontal.

### Konvensi untuk Tebal & Miring

Usahakan untuk tetap pada pola berikut...

#### Judul Tebal

Gunakan judul tebal saat mendeskripsikan mantra, efek, dll.
- **Judul Sihir:** Deskripsi.

#### Judul Miring

Gunakan judul miring untuk 'daftar sub' dari varian mantra dll.
- **Sihir:** Deskripsi.
  - **_Varian Sihir-A:_** Deskripsi.
  - **_Varian Sihir-B:_** Deskripsi.

#### Referensi Judul Miring

Gunakan judul miring saat merujuk pada buku seperti _Mythras Imperative_ atau peraturan inti _Mythras_.

---
## Pemformatan daftar

### Daftar tidak berurut / Poin poin

- Daftar tidak berurut dibuat dengan tanda hubung.
- Daftar tidak berurut dibuat dengan tanda hubung.
  - Tingkatkan level indentasi dengan 2 spasi atau tab.

### Daftar berurut / Poin bernomor

1. Daftar bernomor dibuat dengan digit dan titik.
2. Daftar bernomor dibuat dengan digit dan titik.
- Campur dengan poin-poin
	- Dan indentasi
3. Campur angka kembali
   - Dan poin

### Daftar berkepala

Untuk daftar sub-header terkait, tebalkan judul dan titik dua.
- **Contoh 1:** Bla, bla, bla...
- **Contoh 2:** Bla, bla, bla...

### Daftar berkepala miring

Untuk daftar sub-header terkait, tebalkan & miringkan judul dan titik dua.
- **_Contoh 1:_** Bla, bla, bla...
- **_Contoh 2:_** Bla, bla, bla...

---
## Tabel

Beri tabel sub-header agar muncul sebagai bookmark di sidebar, menjorok satu level dari bagian induknya.

~Buat baris judul teks tebal.~
Membuat baris header tebal sebenarnya merendernya dalam teks normal. CSS default memiliki baris tersebut yang ditebalkan.

### Perataan teks tabel

Gunakan baris 2 untuk perataan konten: `:--`, `:-:`, atau `--:`.
Ini akan memengaruhi seluruh kolom.

#### Tata Letak Dasar Tabel

| **Kolom 1** | **Kolom 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gama |

### Konvensi perataan teks

- Gunakan perataan tengah untuk angka atau daftar nilai serupa.
- Gunakan perataan kiri untuk kalimat teks.

#### Tabel Contoh Perataan

| **Nomor** | **Deskripsi** |
| :-: | :-- |
| 1 | Teks deskriptif |
| 2 | Teks deskriptif |
| 3 | Teks deskriptif |

#### Contoh: Tabel Intensitas Api

| **Intensitas** | **Contoh** | **Waktu untuk Terbakar** | **Daya Rusak** |
| :-: | :-- | :-: | :-: |
| 1 | Lilin | 1d4 | 1d2 |
| 2 | Obor | 1d3 | 1d4 |
| 3 | Api unggun | 1d2 | 1d6 |
| 4 | Kobaran api memenuhi ruangan | 1d2 | 2d6 |
| 5 | Lava vulkanik | Instan | 3d6 |

---
## Tautan

Ada banyak kegunaan untuk tautan di SRD dan hanya beberapa kasus utama yang dibahas di sini.

### Memformat Tautan

Memformat tautan dilakukan dengan teks dalam kurung. Gunakan kurung siku untuk teks tautan yang terlihat, dan kurung lengkung untuk URL tujuan: `[Link Text](URL)`.

Dalam dokumen ini, tautan eksternal yang paling umum digunakan adalah [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Tautan Eksternal vs Internal

Tautan eksternal menuju ke halaman lain melalui internet dan akan memerlukan URL `http://example.com` dan, secara default, akan _selalu_ terbuka di tab browser baru.

Untuk menghindari banyak tab yang mengacaukan dokumen yang sedang dibaca, tautan internal dan bookmark dibentuk dengan URL relatif yang merujuk pada file markdown yang terlihat di repositori GitHub. Alih-alih tab baru, tautan internal ini akan menggulir dengan cepat ke bagian yang ditautkan.

#### Contoh tautan internal

- **Tautan bab:** Ini menunjuk ke awal bagian (h1) utama. misal bab [Combat](0005_Combat.md).

  - Format tautan: `[Combat](0005_Combat.md)`

- **Tautan subbagian:** Ini menunjuk ke header di dalam bab yang merujuk pada dokumen seperti di atas tetapi menambahkan `?id=` segera diikuti oleh header tujuan. misal [Leaping Attacks](0005_Combat.md?id=leaping-attacks)

  - Format tautan: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Tautan eksternal ke subbagian

Mungkin ada kesempatan untuk merujuk ke bagian tertentu dari dokumen eksternal, misalnya, tabel tertentu di SRD lain. Formatnya sama dengan tautan subbagian, di atas, hanya menggunakan URL HTTP eksternal.

Sebagai contoh, berikut adalah [tabel konversi Imperial ke Metrik](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) dari [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/).


```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Daftar Sihir dan Kekuatan

Mulai bagian 'bersih' dengan header h2 untuk daftar mantra, kekuatan, dll yang tersedia; lalu h3 untuk setiap item daftar.

Mantra dan kekuatan biasanya disajikan dalam satu daftar datar berdasarkan jenis sihir (Folk Magic, Theism, dll) tetapi jika daftar tersebut memerlukan subbagiannya sendiri, seperti spesialisasi sekolah atau kultus, tingkatkan level header dengan tepat. Misalnya, h2 untuk Daftar Keajaiban Theism, h3 untuk Kultus: Mithras, dan h4 untuk setiap keajaiban kultus Mithras.

Khususnya dalam kasus mantra, tetapi dalam deskripsi apa pun yang menggunakan atribut kata kunci, cantumkan dalam teks miring.

Teks deskriptif dan aturan khusus menggunakan teks normal.

### Pemformatan Daftar Mantra

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Contoh: daftar mantra yang diformat (dikutip blok) </summary>

---
> ## Deskripsi mantra
>
> ### Avert
> _Instan, Berjarak_
>
> Avert digunakan untuk membubarkan mantra lain dalam jarak tertentu. Avert dapat dirapalkan secara reaktif untuk menetralkan mantra ofensif, dengan menggunakan Aksi Reaktif Counter Magic.

</details>

---
## Blok statistik kendaraan
Mulai bagian 'bersih' dengan header h2 untuk daftar, lalu tingkatkan level h seperti biasa untuk kategori dan item daftar.

Setiap contoh yang terdaftar memiliki statistik dan deskripsi yang disajikan sebagai daftar poin dengan judul poin yang ditebalkan.

### Pemformatan Blok Statistik Kendaraan

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```


<details>

<summary>Contoh: blok statistik kendaraan yang diformat (dikutip blok) </summary>

---
> ## Contoh Kendaraan
>
> ### Kendaraan Darat
>
> #### Interceptor
>
> - **Lambung:** 6 (Militer Menengah), 40 Struktur
>
> - **Kecepatan:** Cepat
>
> - **Sistem:** 3
>
> - **Trah:** Kursi Pelontar, Kinerja Ditingkatkan, Penanganan Superior, Paket Pengawasan, Tangguh, Bersenjata
>
> - **Senjata:** Dispenser tumpahan oli, dispenser asap, senapan mesin menengah terkait kembar
>
> - **Deskripsi:** Mobil mewah yang ditingkatkan, mobil sport atau sejenisnya, mobil ini dibangun untuk melaju kencang dan memberikan perlawanan yang setimpal dalam pertempuran. Ini adalah jenis kendaraan yang dipikirkan orang ketika seseorang berkata, "mobil mata-mata."

</details>

---
## Blok statistik makhluk
Mulai bagian 'bersih' dengan header h2 untuk daftar. Blok statistik makhluk menggunakan tabel dan lebih kompleks dalam hal pemformatan dan kebutuhan ruang. Untuk kejelasan, hindari subbagian dan tambahkan pemisah di antara item daftar.

Setiap contoh yang terdaftar harus memiliki yang berikut...

- **Judul makhluk:** Pemisah diikuti oleh header h3 untuk nama makhluk.

- **Entri MEG:** Tautan eksternal ke makhluk yang ditentukan di [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Detail Inti:** Nama/tipe makhluk, atribut, Skill, dan deskripsi khusus atau catatan karakter sesuai kebutuhan.

- **Detail Senjata:** Deskripsi singkat dengan kolom untuk nama senjata dan atribut berikut: Ukuran (sertakan Force di sini), Jangkau (sertakan Jarak di sini), Daya Rusak, Armor/HP, dan aturan khusus apa pun.

- **Lokasi Bentur & Armor:** Tabel lokasi akan bervariasi berdasarkan anatomi makhluk yang berbeda tetapi harus disertakan bahkan untuk humanoid tradisional sebagai sarana untuk melacak Armor dan daya rusak.

### Pemformatan Blok Statistik Makhluk

```
## Bestiary/List Name

Descriptive text. 

---
### Example Creature
[MEG Entry](https://mythras.skoll.xyz/enemy_template/8626/)

| Creature Name | Example Creature  |
| :-- | :-- |
| Key Atribut | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
| Other Catatan | Values and details | 
```


<details>

<summary>Contoh: tabel blok statistik makhluk yang diformat (dikutip blok) </summary>

> ---
> ### Goblin/Orc
> [Entri MEG](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Nama Makhluk | Goblin/Orc |
> | :-- | :-- |
> | Atribut Kunci | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Poin Aksi | 2 |
> | Daya Rusak Mod | - |
> | Inisiatif | +11 |
> | Gerak | 6m |
> | Kemampuan | Penglihatan Malam |
> | Skill | Atletik 52%, Berotot 42%, Menipu 57%, Ketahanan 48%, Menghindar 62%, Persepsi 61%, Bela Diri 52%, Tekad 42% |
> | Gaya Tarung | Prajurit (Pedang Pendek, Perisai, Tombak, Ketapel) 62% |
>
> #### Detail Senjata
>
> | Senjata | Ukuran | Jangkau | Daya Rusak | Armor/HP | Spesial |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Pedang Pendek | M | M | 1d6 | 6/8 | |
> | Tombak | M | L | 1d8+1 | 4/5 | |
> | Ketapel | L | 10/150/300 | 1d8 | 1/2 | |
> | Perisai | L | S | 1d4 | 4/9 | Melindungi 3 lokasi untuk Pemblokiran Pasif/Perisai |
>
> #### Lokasi Bentur & Armor
>
> | **1d20** | **Lokasi** | **Armor/HP** |
> | :-: | :-- | :-: |
> | 1-3 | Kaki Kanan | 1/5 |
> | 4-6 | Kaki Kiri | 1/5 |
> | 7-9 | Perut | 1/6 |
> | 10-12 | Dada | 1/7 |
> | 13-15 | Lengan Kanan | 1/4 |
> | 16-18 | Lengan Kiri | 1/4 |
> | 19-20 | Kepala | 1/5 |

</details>


---
## Errata Komunitas

### Tipografi dan kebingungan

Pengeditan untuk 'membersihkan' teks penulis harus dijaga seminimal mungkin, tetapi kesalahan ketik dan kesalahan lainnya harus diubah secara inline tanpa penanda apa pun.

### Panel Info Errata

Jika aturan tertentu terlalu ambigu, tidak lengkap, atau salah, tambahkan catatan Errata Komunitas yang dapat diciutkan.

Jelaskan masalahnya dalam huruf miring menggunakan hanya huruf tebal miring untuk judul masalah - _tidak ada header h(x)!_ - agar tidak membuat entri sidebar yang membingungkan.

Jika teks pengganti ditambahkan, letakkan dalam tanda kutip tebal miring, didahului oleh "_Errata Komunitas:_" dalam huruf miring dengan berat normal.

Aturan tambahan, jika diperlukan, harus disajikan dalam teks berat normal.

#### Templat Pemformatan Errata

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Contoh Errata

<details>

<summary>* Errata Komunitas</summary>

_**Memanjat**_

_Errata Komunitas:_
_**"Armor yang dikenakan menghambat pemanjat sebesar jumlah rata-rata Poin Armor yang dikenakan. Temukan ini dengan menjumlahkan setiap poin Armor lokasi yang dikenakan dan bagi angka tersebut dengan jumlah lokasi."**_

_Aturan seperti yang tertulis dengan cepat menyebabkan masalah. Mengenakan satu potong Armor 6AP akan mengurangi manusia menjadi Gerak 0 yang berarti manusia yang mengenakan helm baja dan tidak ada yang lain akan terlalu terbebani untuk memanjat sama sekali. Ini tampak sangat membatasi, oleh karena itu versi yang diedit disarankan di atas. Ini akan diperbarui jika penulis asli merevisi aturan seperti yang tertulis._

</details>

<details>

<summary>* Errata Komunitas</summary>

_**Gait: Jalan, Lari, Sprint**_

_Versi _Mythras Imperative_ yang diterbitkan tidak memiliki aturan eksplisit untuk bergerak dengan Gait yang berbeda meskipun tercakup dalam buku peraturan inti Mythras. Pengganda Gait di atas telah ditambahkan sebagai bagian dari Errata Komunitas._

_Jika diperlukan, cukup perlakukan Gait sebagai berikut:_

- _Gait yang lebih cepat dari Jalan menerapkan pengganda pada peringkat Gerak: 3x untuk Lari, 5x untuk Sprint._

- _Saat dalam Gait Lari atau Sprint, Karakter tidak dapat mencoba sebagian besar aksi proaktif seperti menyerang atau merapalkan mantra. Beberapa pengecualian termasuk..._
  - _Serangan saat menggunakan aturan Mengisi (Charging)._
  - _Menembakkan senjata jarak jauh dengan trah Skirmishing._
- _Sebagai aturan umum, setiap aksi yang diizinkan harus diperlakukan satu Tanjakan lebih sulit untuk dilakukan saat Lari, dan dua Tanjakan lebih sulit saat Sprint._

</details>

---
## Peringatan Lain-lain

### Baris kosong / Carriage Return

Tinggalkan baris kosong di antara jenis entri yang berbeda. Header, pemisah, tabel, dll. Ini tidak akan terlihat di tampilan membaca tetapi ketidakhadirannya dapat menyebabkan masalah pemformatan.

### Teks tebal atau miring beberapa paragraf

Setiap paragraf harus ditandai sebagai teks tebal atau miring. Baris baru di antara paragraf akan merusak pemformatan yang meninggalkan tanda pemformatan yatim piatu.

### Ejaan internasional

Kekuatan regresif dan menyedihkan telah memutuskan untuk menghapus semua ejaan Inggris demi versi AS yang secara objektif lebih lemah. Waspadai kata-kata -OUR Inggris: _armour_, _favour_, dll.