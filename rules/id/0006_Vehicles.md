# Kendaraan

Kendaraan dalam _Mythras Imperative_ diperlakukan secara semi-abstrak. Pada dasarnya, kendaraan hanyalah alat pendukung, yang digunakan untuk membawa karakter dari poin A ke poin B, tanpa perlu deskripsi atau statistik yang mendetail. Namun, terkadang, Games Master (GM) akan memerlukan detail untuk kendaraan jika perlu untuk merepresentasikannya dalam situasi kejar-kejaran atau pertempuran.

Aturan di bagian ini memungkinkan representasi sebagian besar jenis kendaraan tetapi dengan cara abstrak yang ditujukan untuk memberikan fleksibilitas dan meningkatkan penceritaan. Kapal luar angkasa sedikit berbeda, meskipun didasarkan pada prinsip yang serupa.

---
## Statistik

Semua kendaraan dideskripsikan berdasarkan Struktur, Lambung (Hull), Kecepatan (Speed), Sistem, Sifat (Traits), dan Perisai (Shields) (jika ada dalam pengaturan).

- **[Ukuran](0006_Vehicles.md?id=vehicle-size-table):** Semua kendaraan memiliki satu dari enam peringkat Ukuran yang menentukan nilai atau rentang dari karakteristik lainnya. Karena ukuran intrinsiknya yang lebih besar dan lingkungan ruang angkasa yang berbahaya, kapal luar angkasa memiliki rentang nilainya sendiri.
- **[Lambung](0006_Vehicles.md?id=terrestrial-hulls):** Mewakili Poin Armor.
- **[Struktur](0006_Vehicles.md?id=terrestrial-hulls):** Mewakili Poin Hit kendaraan.
- **[Perisai](0006_Vehicles.md?id=shields):** Dalam pengaturan dengan teknologi manipulasi energi canggih, perisai mungkin ada untuk melindungi kendaraan, tetapi dapat terkikis di bawah tembakan terus-menerus.
- **[Sistem](0006_Vehicles.md?id=systems):** Mewakili komponen vital kendaraan, termasuk pembangkit listrik, bagian kru, dan sebagainya.
- **[Kecepatan](0006_Vehicles.md?id=speed):** Setiap kendaraan memiliki peringkat Kecepatan dasar.
- **[Sifat](0006_Vehicles.md?id=traits):** Kendaraan juga mungkin memiliki satu atau lebih Sifat. Sifat, seperti Kemampuan yang diberikan kepada Makhluk dalam aturan _Mythras Imperative_, atau Sifat Gaya Bertarung, menawarkan deskripsi permainan dan keuntungan tambahan yang mencerminkan sifat kendaraan tersebut.
- **[Senjata](0006_Vehicles.md?id=weapons):** Sama seperti Sifat, kendaraan dapat dilengkapi dengan senjata sesuai dengan pengaturan yang berlaku. Beberapa contoh dan nilai yang disarankan dirinci di bawah ini.


---
### Ukuran, Tipe, dan Struktur Lambung

Ukuran dan tujuan kendaraan memengaruhi ketebalan lambungnya dan ketahanan struktur internalnya. Misalnya, sepeda motor memiliki lambung minimal karena dibuat untuk kecepatan dan kelincahan. Land Ironclad (behemoth lapis baja beroda atau berantai yang masif, digerakkan oleh mesin uap atau diesel), sebagai kendaraan yang jauh lebih besar yang dirancang untuk medan perang, memiliki lambung yang jauh lebih besar. Perbandingan ukuran lambung (dan berapa banyak serangan dari senjata yang biasanya dapat mereka tahan) diringkas dalam tabel Ukuran Kendaraan dan Lambung di bawah ini.

Setiap kali kendaraan menderita kerusakan, kerusakan yang masuk dikurangi oleh nilai Lambungnya. Kerusakan yang tersisa dikurangi dari poin Struktur kendaraan dan memiliki peluang persentase, setara dengan kerusakan yang menembus, untuk memengaruhi Sistem. Jika kendaraan mencapai nol Struktur, kendaraan tersebut hancur total atau rusak parah sehingga harus dibesituakan.

##### Lambung Terestrial 

| Ukuran | Struktur | Nilai Lambung Sipil | Nilai Lambung Militer | Contoh |
| :-- | :-: | :-: | :-: | :-- |
| Kecil | 1-20 | 1-3 | 4-6 | Sepeda motor, sepeda motor dengan sespan, mobil kompak, kano, kayak, perahu dayung |
| Sedang | 21-40 | 1-6 | 7-9 | Sedan, van panel, pikap, mobil mewah, mobil sport mewah, mobil otot, limusin, sekoci, speedboat, gantole, autogyro |
| Besar | 41-60 | 4-9 | 10-12 | Truk, limusin panjang, SUV, bus, mobil keluarga, pesawat pribadi, glider, kapal pesiar, tank, helikopter, kapal selam |
| Sangat Besar | 61-80 | 7-12 | 13-15 | Truk semi, pesawat penumpang, jet, kapal penjaga pantai, yacht |
| Raksasa | 81-100 | 10-15 | 16-18 | Kereta api, kapal pesiar besar, kapal angkatan laut |

##### Lambung Kapal Luar Angkasa 

| Ukuran | Struktur | Nilai Lambung Sipil | Nilai Lambung Militer | Contoh |
| :-- | :-: | :-: | :-: | :-- |
| Kecil | 10-50 | 4-9 | 10-12 | Pesawat tempur kursi tunggal |
| Sedang | 51-150 | 7-12 | 13-15 | Kapal pengangkut ringan, kapal jemputan |
| Besar | 151-450 | 10-15 | 16-18 | Kapal pengangkut berat, kapal penjelajah |
| Sangat Besar | 451-1350 | 13-18 | 19-21 | Fregat pengawal, kapal tempur penjelajah ringan |
| Raksasa | 1351-4050 | 16-21 | 21-24 | Kapal generasi, kapal tempur penjelajah berat |
| Kolosal | 4050-12110 | 19-24 | 24-30 | Habitat orbital, stasiun tempur penghancur planet |


---
### Perisai

Perisai deflektor memberikan lapisan perlindungan tambahan bagi kendaraan yang dapat memasangnya. Perisai bekerja sedikit berbeda dari Lambung karena sifatnya yang dapat terkikis. Jika kerusakan yang masuk sama dengan atau kurang dari nilai perisai, maka semuanya terblokir. Jika kerusakan melebihi nilai perisai, maka kelebihannya akan mengurangi kekuatan perisai sejumlah nilai tersebut.

_Contoh: Sebuah pengangkut pasukan memiliki kekuatan perisai energi sebesar 12 poin. Jika pengangkut terkena laser sebesar 11 poin kerusakan, serangan itu tidak menembus dan tidak memiliki efek tambahan. Sebaliknya, jika pengangkut terkena ledakan sebesar 15 poin kerusakan, kelebihan tiga poin akan menurunkan kekuatan perisai menjadi 9._

Setelah kekuatan perisai deflektor turun menjadi nol, perisai tersebut runtuh. Kerusakan yang tersisa akan berlanjut ke lambung.

---
### Sistem

Setiap kali kendaraan menderita kerusakan yang menembus lambungnya, ada peluang, setara dengan kerusakan yang menembus, bahwa Sistem vital telah terpengaruh.

_Contoh: 10 kerusakan diterapkan pada Speedboat - kendaraan dengan 3 Lambung dan 24 Struktur. Lambung bertindak sebagai armor yang mengurangi kerusakan menjadi 7. Ini dikurangi dari 24 poin Struktur dan ada peluang 7% untuk merusak salah satu Sistem kendaraan._

Kerusakan yang dapat ditahan oleh sebuah Sistem didasarkan sepenuhnya pada ukuran kendaraan. Ini dimodelkan oleh jumlah hit yang dapat diterima sebuah Sistem, bukan jumlah kerusakan aktual. Satu Hit Sistem pada kendaraan Kecil akan langsung menghancurkan Sistem tersebut. Dibutuhkan dua hit untuk menghancurkan Sistem kendaraan berukuran Sedang, tiga untuk kendaraan Besar, dan seterusnya. Lihat [Tabel Kerusakan Sistem](0006_Vehicles.md?id=system-damage-table) di bawah.

Sistem yang rusak, tetapi belum hancur, mengalami kehilangan fungsi yang proporsional dengan jumlah Hit yang diterima - baik pengurangan persentase atau penalti Tingkat (Grade) pada tugas Sistem. Efek spesifik didasarkan pada apa yang dikendalikan oleh subsistem tersebut, seperti yang dirinci dalam [Tabel Kerusakan Komponen Sistem](0006_Vehicles.md?id=system-component-damage-table) di bawah. Bergantung pada Sistem mana yang terkena, efeknya bisa sangat fatal.

_Contoh: Sebuah Land Ironclad - kendaraan Raksasa dengan 5 Hit Sistem - terkena dua kali pada bagian Penggerak (Drive) akan kehilangan 40% kekuatannya dan akan menurunkan Kecepatan Lambatnya dua Tingkat menjadi Berat (Ponderous). Demikian pula, kapal pengangkut Besar - dengan 3 Hit Sistem - menerima dua hit pada Sistem Mesin/Bahan Bakar akan memiliki penalti dua Tingkat pada Kecepatan serta penggunaan sistem Elektronik. Hit ketiga akan menghancurkan Sistem Mesin/Bahan Bakar dan kapal bersamanya._

<details>

<summary>* Errata Komunitas</summary>

---

#### Kerusakan

_Teks asli di sini awalnya berjauhan. Ditempatkan tepat setelah bagian Sistem karena pengulangan yang tidak perlu dari paragraf sebelumnya._

- _"Kerusakan yang melebihi Lambung menembus kendaraan, merusak Struktur dan mungkin memengaruhi satu atau lebih sistem. Tergantung pada ukuran kendaraan, kerusakan bisa ringan atau fatal._
- _Contoh: Kendaraan Besar dapat menerima hingga dua hit pada Sistem seperti Penggeraknya. Hit ketiga secara fungsional menghancurkan Penggerak. Setiap kali sistem menerima hit, sistem kehilangan persentase fungsinya sebagaimana dijelaskan dalam kolom Kerugian per Hit pada Tabel Kerusakan Sistem di bawah atau fungsi inti (seperti Penggerak, Pilot, Komunikasi, dan sebagainya) menjadi satu Tingkat Kesulitan lebih sulit per hit yang diderita."_

_Paragraf di atas dihapus dan suntingan singkat menggantikannya dengan menyebutkan contoh efek Sistem lainnya._

---

</details>

##### Tabel Kerusakan Sistem 

| Ukuran | Hit Sistem | Kerugian per Hit |
| :-- | :-: | :-- |
| Kecil | 1 | 100% - Hancur |
| Sedang | 2 | 1 Tingkat atau 50% |
| Besar | 3 | 1 Tingkat atau 33% |
| Sangat Besar | 4 | 1 Tingkat atau 25% |
| Raksasa | 5 | 1 Tingkat atau 20% |
| Kolosal | 6 | 1 Tingkat atau 16% |

<details>

<summary>* Errata Komunitas</summary>

---

##### Tabel Kerusakan Sistem (Asli) 

| Ukuran | Hit Sistem | Kerugian per Hit |
| :-- | :-: | :-- |
| Kecil | 1 | 1 Tingkat atau 50% |
| Sedang | 2 | 1 Tingkat atau 33% |
| Besar | 3 | 1 Tingkat atau 25% |
| Sangat Besar | 4 | 1 Tingkat atau 20% |
| Raksasa | 5 | 1 Tingkat atau 16% |
| Kolosal | 6 | 1 Tingkat atau 10% |

##### Tabel Ukuran Kendaraan (dari [Ukuran, Tipe, dan Struktur Lambung](0006_Vehicles.md?id=hull-size-type-and-structure))

| Ukuran | Hit Sistem |
| :-- | :-: |
| Kecil | 1 |
| Sedang | 2 |
| Besar | 3 |
| Sangat Besar | 4 |
| Raksasa | 5 |
| Kolosal | 6 |

_Aturan dan contoh asli tidak konsisten:_
- _"Sistem yang rusak, tetapi belum hancur, mengalami kehilangan fungsi. Ini setara dengan proporsi hit saat ini terhadap kemampuan totalnya. Jadi, kendaraan Raksasa yang terkena dua kali pada Penggerak akan kehilangan 40% kekuatannya (2 hit dari maksimal 5)."_ 
   - _Ini menunjukkan kendaraan Raksasa yang ditampilkan dengan 5 Hit Sistem harus kehilangan 20% dengan setiap hit - tetapi tabel mengatakan 16%._
- _"Contoh: Kendaraan Besar dapat menerima hingga tiga hit pada sistem seperti Penggeraknya. Hit keempat secara fungsional menghancurkan Penggerak."_ 
  - _"Ini menunjukkan - seperti halnya tabel - 25% kerusakan per Hit Sistem tetapi Kendaraan Besar hanya dapat menerima 3 Hit Sistem menurut tabel yang sama._
- _Meskipun tidak bertentangan, Tabel Ukuran Kendaraan dianggap mubazir; muncul lagi dalam bentuk yang lebih lengkap (menambahkan kolom Kerugian per Hit) beberapa baris kemudian._

_Hal ini mempersulit konsistensi aturan. Untuk mengatasi masalah ini, nilai dan contoh diubah agar sesuai dan Tabel Ukuran Kendaraan dihapus._

---

</details>

##### Tabel Kerusakan Komponen Sistem 

| 1d10 | Sistem | Hasil Rusak | Hasil Hancur |
| :-: | :-- | :-- | :-- |
| 1 | Kargo | Sejumlah harta benda atau peralatan yang disimpan di palka, proporsional dengan kerusakan, hancur. | Semua kargo hancur. |
| 2 | Komunikasi | Lemparan Komunikasi menderita satu Tingkat Kesulitan tambahan setiap kali rusak. | Kendaraan tidak dapat lagi berkomunikasi atau mengelabui sensor musuh. |
| 3 | Kontrol | Lemparan Berperahu, Penggerak, atau Pilot menderita satu Tingkat Kesulitan tambahan setiap kali rusak; lemparan Kontrol segera diperlukan. | Kendaraan tidak dapat lagi dikemudikan atau diubah arahnya. |
| 4 | Penggerak | Kecepatan berkurang sebesar jumlah yang proporsional dengan kerusakan. | Kendaraan berhenti total; pesawat jatuh. |
| 5 | Kru | Sejumlah penumpang yang proporsional dengan kerusakan menjadi korban. Mereka yang terkena menderita Luka Mayor dan harus berhasil dalam lemparan Ketahanan atau langsung tewas. | Penumpang kendaraan tewas. |
| 6 | Mesin / Bahan Bakar | Kecepatan berkurang sebesar jumlah yang proporsional dengan kerusakan. Sistem elektronik satu Tingkat Kesulitan lebih sulit digunakan. | Kendaraan hancur dalam ledakan dahsyat. |
| 7 | Sensor | Lemparan Sensor, Navigasi, dan Serangan Senjata menderita satu Tingkat Kesulitan tambahan setiap kali rusak. | Kendaraan menjadi buta. |
| 8 | Senjata | Sejumlah sistem senjata yang proporsional dengan kerusakan menjadi tidak berfungsi. | Kendaraan tidak dapat lagi menembakkan senjata. |
| 9-0 | Tidak Ada | Tidak ada sistem yang terkena; hanya kerusakan Struktur. | N/A |

<details>

<summary>* Errata Komunitas</summary>

---

##### Tabel Kerusakan Komponen Sistem (Mesin/Bahan Bakar)

_Hasil aslinya adalah sebagai berikut: "Kecepatan maksimum dibelah dua..." Ini bertentangan dengan aturan umum penalti kerusakan yang proporsional dengan kerusakan Sistem: 25% kerusakan = 25% penalti. Selain itu, aturan lengkap dalam Mythras Companion tidak menyebutkan pembelahan Kecepatan ini._

_Akibatnya, teks tersebut diganti dengan entri yang sama dari Sistem Penggerak: "Kecepatan berkurang sebesar jumlah yang proporsional dengan kerusakan."_

---

</details>


---
### Kecepatan

Karena fisika kecepatan, akselerasi, hambatan, dan inersia (untuk menyebutkan beberapa saja) adalah masalah yang kompleks, beberapa penyederhanaan diperlukan sehingga kendaraan diberi peringkat kecepatan abstrak. Karakteristik Kecepatan hanya boleh digunakan untuk menilai secara kasar apakah satu kendaraan dapat menyusul atau mengejar kendaraan lain.

Peringkat kecepatan mewakili tingkat operasional nominal kendaraan. Dalam situasi darurat, kinerja ini dapat ditingkatkan satu langkah, dengan risiko keausan atau kerusakan pada mesin. Meskipun tabel yang sama digunakan untuk semua jenis kendaraan, akal sehat harus diterapkan agar hanya kendaraan dari kelas yang sama yang dibandingkan. Misalnya, jika Pesawat Luar Angkasa dan mobil sport sama-sama memiliki tingkat akselerasi Cepat (Rapid), maka sudah jelas pesawat luar angkasa tersebut secara komparatif lebih cepat.

Meningkatkan Kecepatan kendaraan di luar nilai standarnya dimungkinkan dengan lemparan Penggerak (Drive) yang berhasil. Biasanya, kecepatan ekstra ini hanya dapat dipertahankan untuk waktu yang singkat – tidak lebih dari 1d6 menit sebelum kendaraan harus turun ke kecepatan standarnya atau berisiko merusak pembangkit listriknya. Lemparan kritis Penggerak memungkinkan durasi kecepatan yang lebih tinggi ditingkatkan menjadi 1d12 menit.

Pengemudi dapat mencoba mendorong kecepatan kendaraan sebanyak 2 langkah, tetapi ini memerlukan lemparan Penggerak Herculean dan waktu maksimum kendaraan dapat mempertahankan kecepatan ini adalah 1d3 menit: Keberhasilan Kritis tidak akan memperpanjang durasi kecepatan yang meningkat.

##### Tabel Peringkat Kecepatan 

| Peringkat Kecepatan | Kecepatan Maks Untuk |
| :-- | :-: |
| Berat (Ponderous) | Raksasa |
| Lamban (Sluggish) | |
| Pelan (Slow) | Sangat Besar |
| Sedang (Mediocre) | |
| Santai (Gentle) | Besar |
| Menengah (Moderate) | |
| Cepat (Rapid) | Sedang |
| Kencang (Fast) | |
| Kilat (Fleet) | Kecil |


---
### Sifat (Traits)

Jumlah maksimum sifat yang dapat dimiliki kendaraan bergantung pada ukuran dan tipe lambung.

Setiap kendaraan memiliki sifat bawaan: mode perjalanan utama yang menjadi tujuan perancangannya. Oleh karena itu, pesawat secara inheren memegang sifat Airborne (Lintas Udara), kapal memegang sifat Seaborne (Lintas Air), dan seterusnya. Sifat bawaan ini tidak dihitung terhadap jumlah sifat yang tersedia. Namun, jika kendaraan menyertakan mode perjalanan kedua — misalnya kapal selam terbang, maka sifat Airborne perlu diambil sebagai salah satu sifat yang tersedia.

Beberapa sifat mungkin tidak tersedia, tergantung pada tingkat teknologi pengaturan; Games Master harus membuat keputusan sendiri tentang sifat mana yang dapat diterapkan.

##### Tabel Alokasi Sifat Kendaraan 

| Ukuran | Sifat Maks |
| :-- | :-: |
| Kecil | 1 |
| Sedang | 2 |
| Besar | 3 |
| Sangat Besar | 4 |
| Raksasa | 5 |
| Kolosal | 6 |

#### Airborne
Kendaraan mampu melakukan penerbangan atmosfer.

#### All Terrain
Sifat ini harus digunakan dengan kendaraan Darat. Kendaraan dapat melintasi medan yang tidak ramah, sulit, dan curam, menggunakan jalur, suspensi dan sistem penggerak canggih, atau diferensial penggerak yang kuat.

#### Burrowing
Kendaraan dirancang untuk menggali dan membuat terowongan melalui tanah. Ia dapat mencapai kedalaman maksimum yang setara dengan Peringkat Lambungnya x 5 meter.

#### Camouflaged
Kendaraan memiliki cat kamuflase atau sensor mimetik yang memungkinkannya menyatu dengan lingkungannya. Upaya untuk melihat kendaraan secara visual menjadi satu tingkat lebih sulit.

#### Cargo
Kendaraan dirancang khusus untuk mengangkut kargo daripada penumpang. Kompartemen penumpang dibuat seminimal mungkin dengan sisa ruang kendaraan yang dapat digunakan dikhususkan untuk penyimpanan kargo dengan bagian, alat, dan bahkan pengondisian lingkungan (seperti bagian freezer untuk mengangkut barang yang mudah rusak) yang sesuai. Saat bermuatan kargo, kecepatan kendaraan dua langkah lebih rendah dari yang biasanya diperbolehkan oleh ukuran lambungnya.

#### Carrier
Kendaraan dirancang khusus untuk membawa kendaraan yang lebih kecil, berawak ringan, atau mungkin dikendalikan dari jarak jauh yang bersifat sipil atau militer. Kendaraan apa pun yang memiliki sifat ini harus setidaknya berukuran Raksasa. Jumlah kapal kecil yang dibawa dapat bervariasi menurut jenis dan tujuan misi tetapi bisa sesedikit 10 hingga sebanyak poin Struktur kendaraan.

#### Construction
Kendaraan dilengkapi untuk pekerjaan konstruksi berat. Semua kendaraan dengan sifat ini juga memiliki sifat All Terrain, tetapi kecepatannya dua langkah lebih rendah dari yang biasanya diperbolehkan oleh ukuran lambungnya. Kendaraan dilengkapi dengan alat yang sesuai dengan tugas seperti jib derek, sekop penggali, gerobak sampah, dan sebagainya.

#### EMP Resistant
Kendaraan terlindung dari serangan pulsa elektromagnetik.

#### Enhanced Performance
Peringkat Kecepatan kendaraan satu langkah lebih tinggi dari maksimum untuk ukurannya.

#### Ejector Seat
Jika terjadi keadaan darurat, kursi pelontar melontarkan penumpang beberapa ratus meter ke udara, lalu menyebarkan parasut untuk memungkinkan pendaratan yang aman. Parasut bersifat opsional. Tidak disarankan untuk helikopter (Kamov Ka-52 Alligator adalah pengecualian yang terkenal).

#### FTL
Khusus Pesawat Luar Angkasa. Kapal dilengkapi dengan mesin lebih cepat dari cahaya (baik ini hyperdrive, warp drive, generator lubang cacing, atau sejenisnya). Drive FTL memiliki peringkat Kecepatan terpisah yang pada dasarnya mengukur kecepatan kapal luar angkasa dapat melintasi satu parsek (3,26 tahun cahaya, atau 31 triliun kilometer atau 19 triliun mil), sebagai berikut:

##### Tabel Kecepatan FTL 

| Peringkat Kecepatan | Faktor Melintasi 1 Parsek |
| :-- | :-: |
| Berat (Ponderous) | 10 |
| Lamban (Sluggish) | 8 |
| Pelan (Slow) | 7 |
| Sedang (Mediocre) | 6 |
| Santai (Gentle) | 5 |
| Menengah (Moderate) | 4 |
| Cepat (Rapid) | 3 |
| Kencang (Fast) | 2 |
| Kilat (Fleet) | 1 |

Waktu faktor terserah keputusan Games Master, tergantung seberapa maju perkembangan FTL dalam pengaturan tersebut. Misalnya, faktor dasar mungkin 1 Hari, yang berarti kapal dengan drive FTL Ponderous membutuhkan 10 hari untuk menyelesaikan perjalanan, sedangkan kapal dengan drive FTL Kilat menyelesaikan perjalanan dalam 1 hari. Di tempat lain, di mana teknologi FTL kurang efisien, waktu faktor mungkin diukur dalam hitungan bulan, bukan hari.

Diasumsikan bahwa kapal memiliki cadangan bahan bakar untuk melakukan perjalanan kembali, atau sarana untuk mengisi bahan bakar di titik tujuan.

Diasumsikan bahwa kapal luar angkasa ukuran apa pun dapat dipasangi drive FTL, meskipun, sekali lagi, ini tergantung pada pengaturannya.

Drive FTL tidak dapat diaktifkan dalam jarak 1,5 Satuan Astronomi dari sebuah bintang (sekitar 225 juta kilometer, atau 270 juta mil). Ini berarti kapal harus menggunakan drive subcahaya untuk bergerak ke jarak sekitar Mars sebelum mengaktifkan sistem FTL.

#### Ground Vehicle
Kendaraan mampu melakukan perjalanan darat.

#### Hover
Kendaraan melayang di atas tanah menggunakan bantalan udara atau repulsor anti-gravitasi.

#### Luxurious
Kendaraan dirancang khusus untuk membawa penumpang dengan tingkat kemewahan tertentu. Ruang kargo berlebih diberikan untuk akomodasi penumpang mewah, kolam renang, bak air panas, kru tambahan untuk memenuhi keinginan penumpang, dan sebagainya.

#### Rails
Kendaraan mengandalkan sistem rel. Kendaraan dengan sifat ini secara alami dapat mencapai peringkat Kecepatan tiga langkah lebih tinggi daripada yang biasanya diperbolehkan oleh ukuran lambungnya, tetapi jelas terbatas pada pergerakan di sistem rel saja.

#### Resilient
Semua sistem dapat menahan satu hit tambahan lebih banyak daripada yang biasanya ditentukan oleh Ukuran. Sifat ini dapat ditumpuk — jadi Resilient 2 menunjukkan bahwa sistem dapat menahan 2 hit lebih banyak dari biasanya dengan biaya dua poin Sifat.

#### Seaborne
Kendaraan dapat mengapung di atas air.

#### Spacecraft
Kendaraan disegel dari ruang hampa dan terlindung dari radiasi kosmik dan mungkin, tergantung pada desain, mampu meninggalkan dan masuk kembali ke atmosfer, serta mempertahankan penerbangan di dalam atmosfer.

#### Stealth
Khusus Pesawat. Kendaraan dirancang untuk menghindari deteksi oleh radar dan sistem sensor jarak jauh lainnya. Upaya untuk melihat kendaraan menggunakan sensor elektronik menjadi satu tingkat lebih sulit.

#### Submersible
Kendaraan mampu menyelam di bawah permukaan laut hingga kedalaman operasional sebesar Peringkat Lambungnya x 10 meter. Kedalaman keruntuhan — kedalaman maksimum absolut yang dapat dicapai kapal selam tanpa hancur — adalah 1,5 kali kedalaman operasionalnya.

#### Superior Handling
Penanganan kendaraan dinilai Mudah (Easy).

#### Surveillance Suite
Kendaraan memiliki komputer terpasang, stasiun pangkalan komunikasi, penerima untuk sinyal alat penyadap, dan aparatus untuk mencegat sinyal ponsel pintar di dekatnya dalam jarak 100 meter.

#### Tough
Kendaraan sipil dengan sifat ini mengambil Lambungnya dari kolom Militer dan secara otomatis memiliki Struktur maksimum. Kendaraan militer dengan Sifat ini mengambil Lambung dan Struktur dari baris di bawahnya.

#### Tractor Beam
Khusus Pesawat Luar Angkasa. Kapal dilengkapi dengan sinar traktor yang dapat menjerat dan menarik kendaraan dengan peringkat lambung hingga dua langkah lebih rendah dari miliknya. Jadi, kapal luar angkasa berukuran Sangat Besar dapat menarik dan menahan lambung hingga ukuran Sedang.

#### VTOL
Lepas landas/pendaratan vertikal. Sifat ini melekat pada helikopter dan kendaraan serupa yang menggunakan kombinasi rotor untuk menghasilkan daya angkat. Jika diterapkan pada pesawat sayap tetap, ini menunjukkan penggunaan pendorong tetap atau yang dapat diselaraskan untuk mengontrol sikap udara, pendakian, dan penurunan.

#### Waterborne
Kendaraan menggerakkan dirinya sendiri menggunakan kaki berengsel. Kendaraan Walker dibatasi pada Kecepatan Santai, berapapun Ukurannya. Namun, Walker dapat dibangun hingga ketinggian yang tidak stabil bagi kendaraan yang dilengkapi dengan alat penggerak lainnya.

Kendaraan ini mampu melakukan pergerakan di bawah air.

#### Weaponized
Kendaraan telah diadaptasi untuk menampung persenjataan. Sistem senjata dibahas di bawah di bagian [Senjata](0006_Vehicles.md?id=weapons).

---
## Senjata

Biasanya, hanya lambung militer yang dirancang untuk menampung persenjataan (titik keras, penyimpanan amunisi, sistem kontrol). Sifat 'Weaponized' dapat diambil untuk kendaraan sipil yang mungkin memiliki persyaratan senjata.

Jumlah maksimum sistem senjata yang dapat didukung kendaraan adalah setara dengan 1/10 dari Poin Strukturnya (jadi kendaraan dengan 40 Struktur dapat mendukung 4 sistem senjata, jika kendaraan militer, atau kendaraan sipil yang Weaponized).

Sistem senjata bergantung pada Ukuran kendaraan. Tipe sistem senjata maksimum untuk Ukuran yang berbeda ditunjukkan dalam tabel di bawah ini.

##### Tabel Senjata berdasarkan Ukuran 

| Ukuran | Terestrial | Pesawat Luar Angkasa |
| :-- | :-- | :-- |
| Kecil | Senjata Ringan (mis. Senapan Serbu) | Senjata Sedang (mis. Senapan Mesin, Peluncur Roket) |
| Sedang | Senjata Sedang (mis. Senapan Mesin, Peluncur Roket) | Senjata Menara/Berat (mis. Senapan Mesin Tautan Berat, Mini-Gun) |
| Besar | Senjata Menara/Berat (mis. Senapan Mesin Tautan Berat, Mini-Gun) | Baterai Senjata (mis. Artileri Medan) |
| Sangat Besar | Baterai Senjata (mis. Artileri Medan) | Senjata Canggih (mis. Sistem Rudal) |
| Raksasa | Senjata Canggih (mis. Sistem Rudal) | Senjata Terpasang Spinal (hanya satu) |
| Kolosal | NA | Senjata Terpasang Spinal (hingga 3) |

##### Statistik Contoh Senjata 
 
| Senjata | Kerusakan | Jarak | Laju Tembak | Amunisi/Muatan |
| :-- | :-: | :-: | :-: | :-: |
| Meriam 50 inci | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling Gun | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Roket | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Rudal Sedang/Torpedo | 6d10 | Jarak maks 200km | 1 | 1/5 |
| Rudal Besar/Jarak Jauh | 6d10+10 | Jarak maks 1000km | 1 | 1/10 |
| Laser/Plasma Cannon | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Laser/Plasma Cannon Berat | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Baterai Artileri | 5d6+6 | Jarak maks 50km | 1 | 1/5 |
| Baterai Spinal | 10d6+6 | Jarak maks 20000km | 1 | 1/10 |

_Jarak diberikan dalam meter dan kilometer._

_Laju tembak untuk tembakan tunggal, semi-otomatis, dan otomatis penuh._

_Amunisi adalah kemampuan menembak sebelum perlu diisi ulang. Muatan adalah waktu isi ulang dalam Putaran Tempur, dengan asumsi kru penuh tersedia._

---
## Penanganan dan Manuver

Manuver mengelak atau mendadak memerlukan lemparan Penggerak/Pilot yang berhasil untuk memastikan pengemudi atau pilot tetap mengendalikan kendaraan. Sebagian besar kendaraan dirancang dan dibangun untuk menahan tekanan dan beban sesekali, tetapi Games Master dapat memutuskan bahwa manuver tertentu memerlukan lemparan pada tingkat kesulitan yang lebih tinggi, tergantung pada seberapa ambisiusnya manuver tersebut. Kegagalan berarti kendali atas kendaraan hilang: lempar pada tabel Kehilangan Kendali.

Perhatikan bahwa Tabel Kehilangan Kendali hanya berlaku untuk kendaraan terestrial. Efek serupa dapat diterapkan pada kendaraan udara dan luar angkasa, tetapi Games Master harus menyesuaikan alasan untuk efek spesifik tersebut. Misalnya, pesawat, bukannya tergelincir, mungkin mengalami putaran (spin).

Selain itu, penanganan bawaan kendaraan mungkin memiliki dampak tambahan pada lemparan Penggerak. Penanganan bisa Mudah, Standar, Sulit, Luar Biasa (Formidable), atau Herculean dan menentukan titik awal untuk lemparan Penggerak saat melakukan manuver. Tingkat kesulitan untuk manuver kemudian diterapkan pada penanganan untuk menentukan kesulitan akhir.

Contoh: sepeda motor berperforma tinggi memiliki girostabilizer internal yang memberinya Penanganan Mudah. Pengemudi ingin melakukan putaran skid 180 derajat untuk menghindari pengejar, manuver yang dinilai Games Master memiliki satu tingkat kesulitan tambahan. Pengendara harus melakukan lemparan Penggerak pada Standar alih-alih Mudah. Jika dia mencoba manuver yang sama pada sepeda motor tanpa stabilizer, lemparan Penggerak akan menjadi Sulit.

Penanganan Superior adalah Sifat. Jika kendaraan tidak memiliki sifat tersebut sebagai bagian dari deskripsinya, maka defaultnya adalah penanganan Standar untuk kendaraan berukuran Besar dan di bawahnya. Kendaraan Sangat Besar dan Raksasa secara inheren memiliki sifat Penanganan Luar Biasa dan Herculean, dan Games Master bebas untuk memutuskan bahwa manuver tertentu tidak mungkin dicapai karena ukuran kendaraan.

##### Tabel Kehilangan Kendali 

| 1d100 | Hasil |
| :-: | :-- |
| 01-25 | Berbelok (Swerve). Kehilangan kendali bersifat sementara. Kendaraan menurunkan kecepatannya sebanyak 1 langkah selama 5 detik. |
| 26-40 | Tergelincir (Skid). Pengemudi harus berjuang untuk tetap mengendalikan kendaraan. Kendaraan menurunkan kecepatannya sebanyak 2 langkah selama 10 detik. |
| 41-50 | Tergelincir Parah. Kendaraan berakhir menghadap ke arah yang salah dan berhenti selama 15 detik. |
| 51-60 | Terguling (Roll). Kendaraan tergelincir dan terguling, menderita 3d10 kerusakan pada Strukturnya. Penumpang harus melakukan lemparan Ketahanan yang berhasil atau menderita 1d10 kerusakan pada 1d3 Lokasi Hit. |
| 61-70 | Terguling Parah. Seperti di atas, tetapi kendaraan menderita 3d10+10 kerusakan dan Penumpang menerima 1d10 kerusakan meskipun lemparan Ketahanan berhasil, dan 2d10 jika gagal. |
| 71-80 | Hancur Total (Write-Off). Seperti di atas tetapi kendaraan berkurang menjadi 0 Struktur. Penumpang menderita kerusakan yang sama seperti untuk Terguling Parah. |
| 81-90 | Ledakan. Seperti di atas tetapi sistem bahan bakar kendaraan menyala dan meledak dalam 1d20+10 detik. Jika tidak dapat menyingkir, penumpang menderita tambahan 1d6 kerusakan bakar pada 1d6 lokasi. |
| 91-98 | Ledakan Segera. Seperti di atas tetapi ledakan terjadi seketika. |
| 99-00 | Tabrakan Dahsyat. Penumpang harus berhasil melakukan lemparan Ketahanan atau langsung tewas. Kerusakan seperti untuk Hancur Total tetap diderita tanpa mempedulikan hasil lemparan. |

---
## Contoh Kendaraan

---

### Kendaraan Darat

#### Interceptor

Mobil mewah yang dimodifikasi, mobil sport, atau sejenisnya, mobil ini dibuat untuk melaju cepat dan memberikan perlawanan yang setimpal dalam pertempuran. Ini adalah jenis kendaraan yang dipikirkan orang ketika seseorang mengatakan, "mobil mata-mata."

| Interceptor | |
| :- | :- |
| **Ukuran / Tipe** | Militer Sedang |
| **Lambung** | 6 |
| **Struktur** | 40 |
| **Sistem** | 2 |
| **Kecepatan** | Kencang |
| **Penanganan** | Mudah |
| **Sifat** | [Ejector Seat](0006_Vehicles.md?id=ejector-seat), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dispenser Minyak, Dispenser Asap, Senapan Mesin Sedang Tautan Kembar (2d6+3) |

<br>

---

#### Pursuit Motorcycle

Sepeda motor yang ringan dan cepat untuk pengejaran cepat, Pursuit Motorcycle membawa kejutan – baik sepasang senapan mesin tertaut atau dua roket.

| Pursuit Motorcycle | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Kecil |
| **Lambung** | 2 |
| **Struktur** | 12 |
| **Sistem** | 1 |
| **Kecepatan** | Kencang |
| **Penanganan** | Mudah |
| **Sifat** | [Superior Handling](0006_Vehicles.md?id=superior-handling), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dua Roket (4d6) atau Senapan Mesin Ringan Tautan Kembar (2d6) |

<br>

---

#### Sedan Car

Sedan standar 4 pintu yang menampilkan ruang yang cukup untuk menampung pengemudi dan tiga penumpang dengan nyaman. Mengorbankan ruang kargo untuk menggabungkan suite pengawasan.

| Sedan Car | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Sedang |
| **Lambung** | 4 |
| **Struktur** | 25 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Penanganan** | Standar |
| **Sifat** | [Unobtrusive](0006_Vehicles.md?id=unobtrusive), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite) |
| **Senjata** | Tidak Ada |

<br>

---

#### Submersible Car

Mobil dua orang yang dapat beralih ke mode air atau kapal selam untuk bepergian di atas atau di bawah air. Dilengkapi dengan torpedo yang dipasang di depan dan rudal permukaan-ke-udara yang dipasang di atas.

| Submersible Car | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Sedang |
| **Lambung** | 6 |
| **Struktur** | 25 |
| **Sistem** | 2 |
| **Kecepatan** | Kencang |
| **Penanganan** | Standar |
| **Sifat** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Roket (5d6), Torpedo (4d10) |

<br>

---

#### Surveillance Van

Van polos tanpa tanda yang menampung tim agen dan serangkaian peralatan perekaman audio-visual.

| Surveillance Van | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Besar |
| **Lambung** | 9 |
| **Struktur** | 60 |
| **Sistem** | 3 |
| **Kecepatan** | Santai |
| **Penanganan** | Standar |
| **Sifat** | [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Tough](0006_Vehicles.md?id=tough) |
| **Senjata** | Tidak Ada |

<br>

---

#### Tactical Support Vehicle

Pikap atau jip dengan ruang untuk kru dua orang di kabin dan seorang penembak berdiri di bagian bak belakang yang mengoperasikan Senapan Mesin Sedang yang dipasang berputar.

| Tactical Support Vehicle | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Sedang |
| **Lambung** | 6 |
| **Struktur** | 30 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Penanganan** | Standar |
| **Sifat** | [All Terrain](0006_Vehicles.md?id=all-terrain), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Senapan Mesin Sedang Terpasang (2d6) |

<br>

---

### Kapal Air

#### Speedboat

Speedboat biasa, dipersenjatai dengan dispenser ranjau yang dipasang di belakang.

| Speedboat | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Sedang |
| **Lambung** | 3 |
| **Struktur** | 24 |
| **Sistem** | 2 |
| **Kecepatan** | Kencang |
| **Penanganan** | Standar |
| **Sifat** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dispenser Ranjau (5d6) |

<br>

---

#### Yacht

Jenis yacht mewah yang mungkin dimiliki oleh seorang oligarki. Kemungkinan dilengkapi dengan suite pengawasan untuk melindungi dari musuh yang mencoba berbuat jahat.

| Yacht | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Sangat Besar |
| **Lambung** | 10 |
| **Struktur** | 75 |
| **Sistem** | 4 |
| **Kecepatan** | Pelan |
| **Penanganan** | Luar Biasa |
| **Sifat** | [Luxurious](0006_Vehicles.md?id=luxurious), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Waterborne](0006_Vehicles.md?id=waterborne) |
| **Senjata** | Tidak Ada |

<br>

---

### Pesawat/Pesawat Luar Angkasa

#### Dirigible (Kapal Udara Sipil)

Mirip dengan Hindenburg, kelas dirigible transkontinental ini (dan yang lainnya sekelas) memiliki panjang 245 meter dan membutuhkan kru sebanyak 40 hingga 61 orang. Biasanya dapat membawa komplemen 50 hingga 72 penumpang dalam akomodasi mewah.

| Dirigible | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Raksasa |
| **Lambung** | 10 |
| **Struktur** | 85 |
| **Sistem** | 5 |
| **Kecepatan** | Berat |
| **Penanganan** | Herculean |
| **Sifat** | [Airborne](0006_Vehicles.md?id=airborne), [Luxurious](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Perisai** | Tidak Ada |
| **Senjata** | Tidak Ada |

<br>

---

#### Assault Helicopter

Helikopter Serbu tradisional menggunakan teknologi pengawasan canggih mereka untuk mencegat sinyal telepon dan internet nirkabel, serta melacak individu dan kendaraan bahkan dalam gelap, melalui FLIR. Upaya untuk menghindari pelacak melalui Stealth adalah Luar Biasa (Formidable).

| Assault Helicopter | |
| :- | :- |
| **Ukuran / Tipe** | Militer Besar |
| **Lambung** | 11 |
| **Struktur** | 50 |
| **Sistem** | 3 |
| **Kecepatan** | Menengah |
| **Penanganan** | Mudah |
| **Sifat** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Stealth](0006_Vehicles.md?id=stealth), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Perisai** | Tidak Ada |
| **Senjata** | 1 Gatling Gun (3d6), 4 Roket (5d6) |

<br>

---

#### Multi-Role Fighter

Pesawat tempur berbasis darat kursi ganda ini (mirip jenisnya dengan De Havilland Mosquito) terkenal dengan kinerja dan keserbagunaannya. Ruang bomnya mampu membawa dua bom 250 lb. (perlakukan sebagai rudal sedang dengan jarak 0) atau satu torpedo.

| Multi-Role Fighter | |
| :- | :- |
| **Ukuran / Tipe** | Militer Besar |
| **Lambung** | 10 |
| **Struktur** | 45 |
| **Sistem** | 3 |
| **Kecepatan** | Menengah |
| **Penanganan** | Standar |
| **Sifat** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance) |
| **Perisai** | Tidak Ada |
| **Senjata** | 4 Gatling Gun Terpasang di Hidung (4d6+3), 1 ruang bom (6d10 - lihat deskripsi) |

<br>

---

#### Interstellar Freighter (Transportasi Ringan Berteknologi Tinggi)

Transportasi ringan ini membutuhkan kru minimum hanya dua orang, dengan ruang hingga empat penumpang tambahan. Versi standar yang tersedia dicatat di sini, namun banyak pemilik akan menerapkan "modifikasi khusus" mereka sendiri seperti ruang kargo tersembunyi, Enhanced Performance, Superior Handling, EMP Resistance, Stealth, dan sebagainya.

| Interstellar Freighter | |
| :- | :- |
| **Ukuran / Tipe** | Pesawat Luar Angkasa Sipil Sedang |
| **Lambung** | 10 |
| **Struktur** | 80 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat (Faktor Parsek 3) |
| **Penanganan** | Standar |
| **Sifat** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Space Craft](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Perisai** | 8 |
| **Senjata** | 2x Menara Laser Cannon Quad-mounted (5d6) |

<br>

---

#### General Contact Unit (Pesawat Luar Angkasa Berteknologi Ultra Tinggi)

Kapal luar angkasa yang sangat berteknologi tinggi ini adalah representasi fisik dari Pikiran buatan yang sangat canggih, yang berbentuk rangkaian modul sepanjang dua kilometer yang terhubung. Modul-modul tersebut memiliki tujuan masing-masing dan mencakup habitat, fasilitas konstruksi, area kargo, pemrosesan makanan, kompleks rekreasi, hanggar, dan bahkan beberapa unit rahasia yang jarang, jika pernah, dibicarakan oleh kecerdasan kapal. Ia tidak membutuhkan kru manusia, tetapi dapat mendukung populasi penumpang hingga 100.000 dengan mudah. Banyak penumpang lahir dan mati di dalam Contact Unit: banyak yang bersifat sementara, datang dan pergi sesuka mereka.

| General Contact Unit | |
| :- | :- |
| **Ukuran / Tipe** | Pesawat Luar Angkasa Sipil Kolosal |
| **Lambung** | 20 |
| **Struktur** | 10.000 |
| **Sistem** | 6 |
| **Kecepatan** | Menengah (Faktor Parsek 4. Pada tingkat teknologi ini, satu Faktor setara dengan 1 jam) |
| **Penanganan** | Luar Biasa |
| **Sifat** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Carrier](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxurious](0006_Vehicles.md?id=luxurious), [Space Craft](0006_Vehicles.md?id=space-craft), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Tractor Beam](0006_Vehicles.md?id=tractor-beam) |
| **Perisai** | 30 |
| **Senjata** | Tidak ada yang perlu dibicarakan |

<br>