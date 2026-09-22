# Panduan Gaya Judul

Gunakan heading h1 (`# Heading Title`) untuk judul bab utama. Semua heading hx akan muncul di bilah sisi sebagai penanda.

Jika judul bukan heading h1, bilah sisi akan mengalami kesalahan duplikasi yang menunjukkan halaman dan kemudian heading h2 'judul'.

---
## Heading bagian (h2)

Gunakan heading h2 (`## Section Heading`) yang didahului dengan pemisah (`---`) untuk setiap bagian utama baru.

### Heading sub-bagian meningkatkan level h sebesar 1

Gunakan heading h3 (`### Subsection Heading`) untuk setiap Sub-bagian baru, dan heading h4 (`#### Sub-Subsection Heading`) untuk setiap sub-sub-bagian baru.

### Progresi h sub-bagian: 2 > 3 > 4

Sub-heading menjadi kacau di bilah sisi jika progresi h tidak ditangani dengan benar.

Penanda heading harus meningkat satu atau tidak sama sekali.

h2 yang diikuti h2 atau h3 tidak masalah. h3 yang diikuti h3 atau h4 juga tidak masalah.

### Kesalahan sub-bagian
h2 yang diikuti h4 menyebabkan masalah. Bilah sisi menempatkan sub-heading di suatu tempat di atas heading dalam daftar isi.

### Mengurangi level h

Ini sepertinya bukan masalah. contoh: h4 ke h3 atau h2 tidak masalah.

---
## Konvensi pemformatan

Gaya berikut adalah norma untuk SRD _Imperatif_ ini dalam format Markdown.

### Tebal, Miring, dan Pemisah

- Gunakan tanda bintang ganda (`**Bold**`) untuk teks **Tebal**.
- Gunakan garis bawah (`_Italic_`) untuk teks _Miring_.
   - _catatan: Hindari menggunakan tanda bintang tunggal untuk Huruf Miring!_
- Gunakan garis miring terbalik (`\_`) untuk 'mengabaikan' karakter: \_Bukan Miring\_.
- Gunakan tanda kutip sudut (``` `code` ```) untuk membuat `code blocks`.
- Gunakan tiga tanda hubung (`---`) untuk menyisipkan garis pemisah horizontal.

### Konvensi untuk Tebal & Miring

Usahakan untuk mengikuti pola berikut...

#### Judul Tebal

Gunakan judul tebal untuk mendeskripsikan mantra, efek, dll.
- **Judul Sihir:** Deskripsi.

#### Judul Miring

Gunakan judul miring untuk 'sub-daftar' dari varian mantra, dll.
- **Sihir:** Deskripsi.
  - **_Varian Sihir-A:_** Deskripsi.
  - **_Varian Sihir-B:_** Deskripsi.

#### Referensi Judul Miring

Gunakan judul miring saat merujuk pada buku seperti _Mythras Imperative_ atau aturan inti _Mythras_.

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
3. Campur angka kembali
   - Dan poin

### Daftar dengan judul

Untuk daftar sub-judul terkait, pertebal judul dan titik dua.
- **Contoh 1:** Bla, bla, bla...
- **Contoh 2:** Bla, bla, bla...

### Daftar dengan judul miring

Untuk daftar sub-judul terkait, pertebal & miringkan judul dan titik dua.
- **_Contoh 1:_** Bla, bla, bla...
- **_Contoh 2:_** Bla, bla, bla...

---
## Tabel

Beri tabel sub-header agar muncul sebagai penanda di bilah sisi, diindentasi satu level dari bagian induknya.

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

- Gunakan perataan tengah untuk daftar angka atau nilai serupa.
- Gunakan perataan kiri untuk kalimat teks.

#### Contoh Tabel Perataan

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
| 4 | Kebakaran memenuhi ruangan | 1d2 | 2d6 |
| 5 | Lava vulkanik | Instan | 3d6 |

---
## Tautan

Ada banyak kegunaan untuk tautan di SRD dan hanya beberapa kasus utama yang dibahas di sini.

### Memformat Tautan

Memformat tautan dilakukan dengan teks dalam kurung. Gunakan kurung siku untuk teks tautan yang terlihat, dan kurung kurawal untuk URL tujuan: `[Link Text](URL)`.

Dalam dokumen ini, tautan eksternal yang paling umum digunakan adalah [Mythras Encounter Generator](https://mythras.skoll.xyz).
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Tautan Eksternal vs Internal

Tautan eksternal menuju ke halaman lain melalui internet dan akan memerlukan URL `http://example.com` dan, secara default, _selalu_ terbuka di tab peramban baru.

Agar tidak memiliki banyak tab yang mengacaukan dokumen yang dibaca, tautan dan penanda internal dibentuk dengan URL relatif yang merujuk pada file markdown yang terlihat di repositori GitHub. Alih-alih tab baru, tautan internal ini akan dengan cepat menggulir ke bagian yang ditautkan.

#### Contoh tautan internal

- **Tautan bab:** Ini menunjuk ke awal bagian utama (h1). mis. bab [Pertarungan](0005_Combat.md).

  - Format tautan: `[Combat](0005_Combat.md)`

- **Tautan sub-bagian:** Ini menunjuk ke heading di dalam bab yang merujuk dokumen seperti di atas tetapi menambahkan `?id=` segera diikuti oleh heading tujuan. mis. [Serangan Melompat](0005_Combat.md?id=leaping-attacks)

  - Format tautan: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Tautan eksternal ke sub-bagian

Mungkin ada kesempatan untuk merujuk bagian yang diketahui dari dokumen eksternal, misalnya, tabel tertentu di SRD lain. Formatnya sama seperti tautan sub-bagian, di atas, hanya menggunakan URL HTTP eksternal.

Sebagai contoh, berikut adalah [tabel konversi Imperial ke Metrik](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) dari [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/).


```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Daftar Sihir dan Kekuatan

Mulai bagian 'bersih' dengan heading h2 untuk daftar mantra, kekuatan, dll yang tersedia; lalu h3 untuk setiap item daftar.

Mantra dan kekuatan biasanya disajikan dalam daftar datar tunggal berdasarkan jenis sihir (Sihir Rakyat, Teisme, dll) tetapi jika daftar tersebut memerlukan sub-bagiannya sendiri, seperti spesialisasi sekolah atau kultus, tingkatkan level heading dengan tepat. Misalnya, h2 untuk Daftar Mukjizat Teisme, h3 untuk Kultus: Mithras, dan h4 untuk setiap mukjizat kultus Mithras.

Khususnya dalam hal mantra, tetapi dalam deskripsi apa pun yang menggunakan atribut kata kunci, cantumkan dalam teks miring.

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
> ### Cegah
> _Instan, Jarak_
>
> Cegah digunakan untuk menghilangkan mantra lain dalam Jarak. Cegah dapat dirapal secara reaktif untuk menetralisir mantra ofensif, dengan menggunakan Aksi Reaktif Counter Magic.

</details>

---
## Blok statistik kendaraan
Mulai bagian 'bersih' dengan heading h2 untuk daftar, lalu tingkatkan level h seperti biasa untuk kategori dan item daftar.

Setiap contoh yang tercantum memiliki statistik dan deskripsi yang disajikan sebagai daftar poin dengan judul poin yang ditebalkan.

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
> - **Sifat:** Kursi Lontar, Performa Ditingkatkan, Penanganan Unggul, Rangkaian Pengawasan, Tangguh, Bersenjata
>
> - **Senjata:** Dispenser tumpahan oli, dispenser asap, senapan mesin menengah yang terhubung ganda
>
> - **Deskripsi:** Mobil mewah yang ditingkatkan, mobil sport atau sejenisnya, mobil ini dibuat untuk melaju cepat dan memberikan perlawanan yang sepadan dalam pertempuran. Ini adalah jenis kendaraan yang dipikirkan orang ketika seseorang berkata, "mobil mata-mata."

</details>

---
## Blok statistik makhluk
Mulai bagian 'bersih' dengan heading h2 untuk daftar. Blok statistik makhluk menggunakan tabel dan lebih kompleks dalam hal pemformatan serta kebutuhan ruang. Demi kejelasan, hindari sub-bagian dan tambahkan pemisah di antara item daftar.

Setiap contoh yang tercantum harus memiliki hal berikut...

- **Judul makhluk:** Pemisah diikuti oleh heading h3 untuk nama makhluk.

- **Entri MEG:** Tautan eksternal ke makhluk yang ditentukan di [Mythras Encounter Generator](https://mythras.skoll.xyz/).

- **Detail Inti:** Nama/tipe makhluk, atribut, Skill, dan deskripsi khusus atau catatan karakter apa pun yang diperlukan.

- **Detail Senjata:** Deskripsi singkat dengan kolom untuk nama senjata dan atribut berikut: Ukuran (sertakan Ukuran (Force) di sini), Jangkau (sertakan Jarak di sini), Daya Rusak, AP/HP, dan aturan khusus apa pun.

- **Lokasi Bentur & Armor:** Tabel lokasi akan bervariasi berdasarkan anatomi makhluk yang berbeda tetapi harus disertakan bahkan untuk humanoid tradisional sebagai cara untuk melacak Armor dan Daya Rusak.

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
> | Atribut Utama | STR 11, CON 14, SIZ 11, DEX 11, INT 11, POW 11, CHA 7 |
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
> | Senjata | Ukuran | Jangkau | Daya Rusak | AP/HP | Spesial |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Pedang Pendek | M | M | 1d6 | 6/8 | |
> | Tombak | M | L | 1d8+1 | 4/5 | |
> | Ketapel | L | 10/150/300 | 1d8 | 1/2 | |
> | Perisai | L | S | 1d4 | 4/9 | Melindungi 3 lokasi untuk Pemblokiran Pasif/Warding |
>
> #### Lokasi Bentur & Armor
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

### Kesalahan ketik dan kebingungan

Pengeditan untuk 'membersihkan' teks penulis harus tetap minimal, tetapi kesalahan ketik dan kesalahan lainnya harus diubah secara langsung tanpa penanda apa pun.

### Panel Info Errata

Di mana aturan yang diberikan terlalu ambigu, tidak lengkap, atau salah, tambahkan catatan Errata Komunitas yang dapat diciutkan.

Jelaskan masalahnya dalam huruf miring menggunakan hanya huruf miring tebal untuk judul masalah - _bukan heading h(x)!_ - agar tidak membuat entri bilah sisi yang membingungkan.

Jika teks pengganti ditambahkan, letakkan dalam tanda kutip dengan huruf tebal miring, didahului dengan "_Community Errata:_" dalam huruf miring dengan ketebalan normal.

Aturan tambahan, jika diperlukan, harus disajikan dalam teks dengan ketebalan normal.

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
_**"Armor yang dikenakan menghambat pemanjat sebesar jumlah rata-rata Armor Points yang dikenakan. Temukan ini dengan menjumlahkan setiap poin Armor lokasi yang dikenakan dan bagi angka tersebut dengan jumlah lokasi."**_

_Aturan seperti yang tertulis dengan cepat menyebabkan masalah. Mengenakan satu potong Armor 6AP akan mengurangi manusia menjadi Gerak 0 yang berarti manusia yang mengenakan helm baja dan tidak ada yang lain akan terlalu terbebani untuk memanjat sama sekali. Ini tampak sangat membatasi, itulah sebabnya versi yang diedit disarankan di atas. Ini akan diperbarui jika penulis asli merevisi aturan seperti yang tertulis._

</details>

<details>

<summary>* Errata Komunitas</summary>

_**Gait: Jalan, Lari, Sprint**_

_Versi _Mythras Imperative_ yang diterbitkan tidak memiliki aturan eksplisit untuk bergerak dengan Gait yang berbeda meskipun tercakup dalam buku aturan inti Mythras. Pengali Gait di atas telah ditambahkan sebagai bagian dari Errata Komunitas._

_Jika diperlukan, sudah cukup untuk memperlakukan Gait sebagai berikut:_

- _Gait yang lebih cepat dari Jalan menerapkan pengali pada peringkat Gerak: 3x untuk Lari, 5x untuk Sprint._

- _Saat dalam Gait Lari atau Sprint, Karakter tidak dapat mencoba sebagian besar aksi proaktif seperti menyerang atau merapal mantra. Beberapa pengecualian termasuk..._
  - _Serangan saat menggunakan aturan Mengisi (Charging)._
  - _Menembakkan senjata jarak jauh dengan sifat Berkelahi (Skirmishing)._
- _Sebagai aturan umum, tindakan apa pun yang diizinkan harus diperlakukan satu Tanjakan lebih sulit untuk dilakukan saat Lari, dan dua Tanjakan lebih sulit saat Sprint._

</details>

---
## Peringatan Lain-lain

### Baris kosong / Carriage Return

Sisakan baris kosong di antara berbagai jenis entri. Header, pemisah, tabel, dll. Ini tidak akan terlihat dalam tampilan membaca tetapi ketiadaannya dapat menyebabkan masalah pemformatan.

### Teks tebal atau miring multi-paragraf

Setiap paragraf harus ditandai sebagai teks tebal atau miring. Baris baru di antara paragraf akan merusak pemformatan dan meninggalkan tanda pemformatan yang menggantung.

### Ejaan internasional

Kekuatan regresif dan menyedihkan telah menghapus semua ejaan Inggris demi versi AS yang secara objektif lebih lemah. Waspadai kata-kata -OUR Inggris: _armour_, _favour_, dll.