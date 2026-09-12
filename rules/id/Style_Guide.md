# Judul Panduan Gaya (h1)

Gunakan heading h1 (`# Heading Title`) untuk judul bab utama. Semua heading hx akan muncul di bilah sisi sebagai penanda buku.

Jika judul bukan heading h1, bilah sisi akan mengalami kesalahan duplikasi yang menunjukkan halaman dan kemudian heading h2 'judul'.

---
## Heading bagian (h2)

Gunakan heading h2 (`## Section Heading`) yang didahului oleh pemisah (`---`) untuk setiap bagian utama yang baru.

### Heading sub-bagian dengan meningkatkan level-h sebanyak 1

Gunakan heading h3 (`### Subsection Heading`) untuk setiap Sub-bagian baru, dan heading h4 (`#### Sub-Subsection Heading`) untuk setiap sub-sub-bagian baru.


### Progresi-h sub-bagian: 2 > 3 > 4

Sub-heading menjadi tercampur di bilah sisi jika progresi-h tidak ditangani dengan benar.

Penanda heading harus meningkat satu tingkat atau tidak sama sekali.

h2 yang diikuti oleh h2 atau h3 tidak masalah. h3 yang diikuti oleh h3 atau h4 juga tidak masalah.

### Kesalahan Sub-bagian
h2 yang diikuti oleh h4 menyebabkan masalah. Bilah sisi menempatkan sub-heading di suatu tempat di atas heading dalam daftar isi.

### Mengurangi level-h

Ini tampaknya tidak menjadi masalah. cth. h4 ke h3 atau h2 tidak masalah.

---
## Konvensi pemformatan

Gaya berikut adalah norma untuk SRD _Imperative_ ini dalam format Markdown.

### Tebal, Miring, dan Pemisah

- Gunakan tanda bintang ganda (`**Bold**`) untuk teks **Tebal**.
- Gunakan garis bawah (`_Italic_`) untuk teks _Miring_.
   - _catatan: Hindari penggunaan tanda bintang tunggal untuk teks Miring!_
- Gunakan garis miring terbalik (`\_`) untuk 'mengabaikan' karakter: \_Bukan Miring\_.
- Gunakan tanda kutip sudut (``` `code` ```) untuk membuat `code blocks`.
- Gunakan tiga tanda hubung (`---`) untuk menyisipkan garis pemisah horizontal.

### Konvensi untuk Tebal & Miring

Usahakan untuk mengikuti pola berikut...

#### Judul tebal

Gunakan judul tebal saat mendeskripsikan mantra, efek, dll.
- **Judul Sihir:** Deskripsi.

#### Judul miring

Gunakan judul miring untuk 'sub-daftar' dari mantra varian, dll.
- **Sihir:** Deskripsi.
  - **_Varian Sihir-A:_** Deskripsi.
  - **_Varian Sihir-B:_** Deskripsi.

#### Referensi Judul Miring

Gunakan judul miring saat mereferensikan buku seperti _Mythras Imperative_ atau perangkat aturan inti _Mythras_.

---
## Pemformatan daftar

### Daftar tidak berurutan / Poin-poin

- Daftar tidak berurutan dibuat dengan tanda hubung.
- Daftar tidak berurutan dibuat dengan tanda hubung.
  - Tingkatkan level indentasi dengan 2 spasi atau tab.

### Daftar berurutan / Poin bernomor

1. Daftar bernomor dibuat dengan angka dan titik.
2. Daftar bernomor dibuat dengan angka dan titik.
- Campur dengan poin-poin
	- Dan indentasi
3. Campur kembali dengan angka
   - Dan poin-poin

### Daftar dengan judul

Untuk daftar sub-heading terkait, tebalkan judul dan titik dua.
- **Contoh 1:** Bla, bla, bla...
- **Contoh 2:** Bla, bla, bla...

### Daftar dengan judul miring

Untuk daftar sub-heading terkait, tebalkan & miringkan judul dan titik dua.
- **_Contoh 1:_** Bla, bla, bla...
- **_Contoh 2:_** Bla, bla, bla...

---
## Tabel

Berikan tabel sub-header agar muncul sebagai penanda buku di bilah sisi, diindentasi satu level dari bagian induknya.

~Buat baris heading menjadi teks tebal.~
Membuat baris header tebal sebenarnya merendernya dalam teks normal. CSS default memiliki baris tersebut yang ditebalkan.

### Penyelarasan teks tabel

Gunakan baris 2 untuk penyelarasan konten: `:--`, `:-:`, atau `--:`.
Ini akan memengaruhi seluruh kolom.

#### Tata Letak Dasar Tabel

| **Kolom 1** | **Kolom 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gamma |

### Konvensi penyelarasan teks

- Gunakan penyelarasan tengah untuk angka atau daftar nilai serupa.
- Gunakan penyelarasan kiri untuk kalimat teks.

#### Tabel Contoh Penyelarasan

| **Nomor** | **Deskripsi** |
| :-: | :-- |
| 1 | Teks deskriptif |
| 2 | Teks deskriptif |
| 3 | Teks deskriptif |

#### Contoh: Tabel Intensitas Api

| **Intensitas** | **Contoh** | **Waktu Terbakar** | **Kerusakan** |
| :-: | :-- | :-: | :-: |
| 1 | Lilin | 1d4 | 1d2 |
| 2 | Obor | 1d3 | 1d4 |
| 3 | Api unggun | 1d2 | 1d6 |
| 4 | Kebakaran mengisi ruangan | 1d2 | 2d6 |
| 5 | Lava vulkanik | Instan | 3d6 |

---
## Tautan

Ada banyak kegunaan untuk tautan di SRD dan hanya beberapa kasus utama yang dibahas di sini.

### Pemformatan Tautan

Memformat tautan dilakukan dengan teks dalam kurung. Gunakan kurung siku untuk teks tautan yang terlihat, dan kurung kurawal untuk URL tujuan: `[Link Text](URL)`.

Dalam dokumen-dokumen ini, tautan eksternal yang paling umum digunakan adalah [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Tautan Eksternal vs Internal

Tautan eksternal menuju ke halaman lain melalui internet dan akan memerlukan URL `http://example.com` dan, secara default, mereka akan _selalu_ terbuka di tab peramban baru.

Agar tidak ada banyak tab yang mengacaukan dokumen yang sedang dibaca, tautan internal dan penanda buku dibentuk dengan URL relatif yang mereferensikan file markdown yang terlihat di repositori GitHub. Alih-alih tab baru, tautan internal ini akan dengan cepat menggulir ke bagian yang ditautkan.

#### Contoh tautan internal

- **Tautan bab:** Ini menunjuk ke awal bagian utama (h1). cth. bab [Pertempuran](0005_Combat.md).

  - Format tautan: `[Combat](0005_Combat.md)`

- **Tautan sub-bagian:** Ini menunjuk ke heading di dalam bab yang mereferensikan dokumen seperti di atas tetapi menambahkan `?id=` segera diikuti oleh heading tujuan. cth. [Serangan Lompat](0005_Combat.md?id=leaping-attacks)

  - Format tautan: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Tautan eksternal ke sub-bagian

Mungkin ada kesempatan untuk mereferensikan bagian yang diketahui dari dokumen eksternal, misalnya, tabel tertentu di SRD lain. Pemformatannya sama dengan tautan sub-bagian, di atas, hanya menggunakan URL HTTP eksternal.

Sebagai contoh, berikut adalah [tabel konversi Imperial ke Metrik](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) dari [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/).


```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Daftar Sihir dan Kekuatan

Mulai bagian 'bersih' dengan heading h2 untuk daftar mantra, kekuatan, dll. yang tersedia; kemudian h3 untuk setiap item daftar.

Mantra dan kekuatan biasanya disajikan dalam daftar datar tunggal berdasarkan jenis sihir (Sihir Rakyat, Teisme, dll.) tetapi jika daftar tersebut memerlukan sub-bagian sendiri, seperti spesialisasi aliran atau kultus, tingkatkan level heading dengan tepat. Misalnya, h2 untuk Daftar Keajaiban Teisme, h3 untuk Kultus: Mithras, dan h4 untuk setiap keajaiban kultus Mithras.

Terutama dalam kasus mantra, tetapi dalam deskripsi apa pun yang menggunakan atribut kata kunci, cantumkan dalam teks miring.

Teks deskriptif dan aturan khusus menggunakan teks normal.

### Pemformatan Daftar Mantra

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Contoh: daftar mantra terformat (blok dikutip) </summary>

---
> ## Deskripsi mantra
>
> ### Avert
> _Instan, Berjarak_
>
> Avert digunakan untuk membatalkan mantra lain dalam jangkauan. Avert dapat dirapalkan secara reaktif untuk menetralkan mantra ofensif, dengan menggunakan Aksi Reaktif Sihir Kontra.

</details>

---
## Blok statistik kendaraan
Mulai bagian 'bersih' dengan heading h2 untuk daftar, kemudian tingkatkan level-h seperti biasa untuk kategori dan item daftar.

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

<summary>Contoh: blok statistik kendaraan terformat (blok dikutip) </summary>

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
> - **Sifat:** Kursi Lontar, Performa Ditingkatkan, Penanganan Unggul, Suite Pengawasan, Tangguh, Bersenjata
>
> - **Senjata:** Dispenser tumpahan oli, dispenser asap, senapan mesin menengah ganda
>
> - **Deskripsi:** Mobil mewah yang dimodifikasi, mobil sport atau sejenisnya, mobil ini dibangun untuk melaju cepat dan memberikan perlawanan yang sepadan dalam pertempuran. Ini adalah jenis kendaraan yang dipikirkan orang ketika seseorang berkata, "mobil mata-mata."

</details>

---
## Blok statistik makhluk
Mulai bagian 'bersih' dengan heading h2 untuk daftar. Blok statistik makhluk menggunakan tabel dan lebih kompleks dalam hal pemformatan dan kebutuhan ruang. Untuk kejelasan, hindari sub-bagian dan tambahkan pemisah di antara item daftar.

Setiap contoh yang terdaftar harus memiliki hal-hal berikut...

- **Judul makhluk:** Pemisah diikuti oleh header h3 untuk nama makhluk.

- **Entri MEG:** Tautan eksternal ke makhluk yang ditentukan di [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Detail Inti:** Nama/jenis makhluk, atribut, keterampilan, dan catatan deskripsi atau karakter khusus jika diperlukan.

- **Detail Senjata:** Deskripsi singkat dengan kolom untuk nama senjata dan atribut berikut: Ukuran (sertakan Force di sini), Jangkauan (sertakan Range di sini), Kerusakan, AP/HP, dan aturan khusus apa pun.

- **Lokasi Luka & Armor:** Tabel lokasi akan bervariasi berdasarkan anatomi makhluk yang berbeda tetapi harus disertakan bahkan untuk humanoid tradisional sebagai cara untuk melacak armor dan kerusakan.

### Pemformatan Blok Statistik Makhluk

```
## Bestiary/List Name

Descriptive text. 

---
### Example Creature
[MEG Entry](https://mythras.skoll.xyz/enemy_template/8626/)

| Creature Name | Example Creature  |
| :-- | :-- |
| Key Attributes | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
| Other notes | Values and details | 
```

<details>

<summary>Contoh: tabel blok statistik makhluk terformat (blok dikutip) </summary>

> ---
> ### Goblin/Orc
> [Entri MEG](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Nama Makhluk | Goblin/Orc |
> | :-- | :-- |
> | Atribut Kunci | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
> | Poin Aksi | 2 |
> | Modifikator Kerusakan | - |
> | Inisiatif | +11 |
> | Gerak | 6m |
> | Kemampuan | Penglihatan Malam |
> | Keterampilan | Atletik 52%, Kekuatan 42%, Tipu Daya 57%, Ketahanan 48%, Menghindar 62%, Persepsi 61%, Tanpa Senjata 52%, Tekad 42% |
> | Gaya Tempur | Prajurit (Pedang Pendek, Perisai, Tombak, Katapel) 62% |
>
> #### Detail Senjata
>
> | Senjata | Ukuran | Jangkauan | Kerusakan | AP/HP | Spesial |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Pedang Pendek | M | M | 1d6 | 6/8 | |
> | Tombak | M | L | 1d8+1 | 4/5 | |
> | Katapel | L | 10/150/300 | 1d8 | 1/2 | |
> | Perisai | L | S | 1d4 | 4/9 | Melindungi 3 lokasi untuk Blokir Pasif/Menangkal |
>
> #### Lokasi Luka & Armor
>
> | **1d20** | **Lokasi** | **AP/HP** |
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

Pengeditan untuk 'membersihkan' teks penulis harus dijaga seminimal mungkin, tetapi kesalahan ketik dan kesalahan lainnya harus diubah secara inline tanpa tanda apa pun.

### Panel Info Errata

Di mana aturan tertentu terlalu ambigu, tidak lengkap, atau salah, tambahkan catatan Errata Komunitas yang dapat diciutkan.

Jelaskan masalahnya dalam huruf miring hanya menggunakan huruf tebal miring untuk judul masalah - _tanpa header h(x)!_ - agar tidak membuat entri bilah sisi yang membingungkan.

Jika teks pengganti ditambahkan, tempatkan dalam tanda kutip tebal miring, didahului oleh "_Errata Komunitas:_" dalam huruf miring dengan berat normal.

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

_**Memanjat (Climb)**_

_Errata Komunitas:_
_**"Armor yang dikenakan menghambat pemanjat sebesar jumlah yang sama dengan rata-rata Poin Armor yang dikenakan. Temukan ini dengan menjumlahkan poin armor setiap lokasi yang dikenakan dan bagi angka tersebut dengan jumlah lokasi."**_

_Aturan seperti yang tertulis dengan cepat menyebabkan masalah. Mengenakan satu potong armor 6AP akan mengurangi manusia menjadi Gerak 0, yang berarti manusia yang mengenakan helm baja dan tidak ada lagi yang lain akan terlalu terbebani untuk memanjat sama sekali. Ini tampak sangat membatasi, oleh karena itu versi edit yang disarankan di atas. Ini akan diperbarui jika penulis asli merevisi aturan seperti yang tertulis._

</details>

<details>

<summary>* Errata Komunitas</summary>

_**Gait: Jalan, Lari, Sprint**_

_Versi _Mythras Imperative_ yang diterbitkan tidak memiliki aturan eksplisit untuk bergerak dengan Gait yang berbeda meskipun tercakup dalam buku aturan inti Mythras. Pengali Gait di atas telah ditambahkan sebagai bagian dari Errata Komunitas._

_Jika diperlukan, seharusnya cukup untuk memperlakukan Gait sebagai berikut:_

- _Gait yang lebih cepat dari Jalan menerapkan pengali pada peringkat Gerak: 3x untuk Lari, 5x untuk Sprint._

- _Saat dalam Gait Lari atau Sprint, karakter tidak dapat mencoba sebagian besar tindakan proaktif seperti menyerang atau merapalkan mantra. Beberapa pengecualian termasuk..._
  - _Serangan saat menggunakan aturan Menyerang (Charging)._
  - _Menembakkan senjata jarak jauh dengan sifat Skirmishing._
- _Sebagai aturan umum, tindakan apa pun yang diizinkan harus dianggap satu Tingkat lebih sulit untuk dilakukan saat Lari, dan dua Tingkat lebih sulit saat Sprint._

</details>

---
## Peringatan Lain-lain

### Baris kosong / Carriage Return

Sisakan baris kosong di antara berbagai jenis entri. Header, pemisah, tabel, dll. Ini tidak akan terlihat dalam tampilan membaca, tetapi ketidakhadirannya dapat menyebabkan masalah pemformatan.

### Teks tebal atau miring multi-paragraf

Setiap paragraf harus ditandai sebagai teks tebal atau miring. Baris baru di antara paragraf akan merusak pemformatan dan meninggalkan tanda pemformatan yang tidak memiliki pasangan.

### Ejaan internasional

Kekuatan regresif dan tercela telah melihat patut untuk menghapus semua ejaan Inggris demi versi AS yang secara objektif lebih lemah. Waspadai kata-kata -OUR Inggris: _armour_, _favour_, dll.