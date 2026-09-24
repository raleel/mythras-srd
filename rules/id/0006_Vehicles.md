# Kendaraan

Kendaraan dalam _Mythras Imperative_ diperlakukan secara semi-abstrak. Pada dasarnya, mereka adalah alat latar belakang, yang digunakan untuk membawa Karakter dari titik A ke titik B, dengan sedikit kebutuhan untuk deskripsi detail atau statistik. Namun terkadang, Games Master akan membutuhkan detail untuk kendaraan saat diperlukan untuk merepresentasikannya dalam situasi pengejaran atau pertarungan.

Aturan dalam bagian ini memungkinkan representasi sebagian besar jenis kendaraan tetapi dengan cara yang diabstraksi yang ditujukan untuk memberikan fleksibilitas dan meningkatkan penceritaan. Kapal luar angkasa dan pesawat ruang angkasa sedikit berbeda, meskipun didasarkan pada prinsip yang serupa.

---
## Statistik

Semua kendaraan dijelaskan dalam hal Struktur, Hull, Kecepatan, Sistem, Trait, dan Perisai (jika ada dalam latar).

- **[Ukuran](0006_Vehicles.md?id=vehicle-size-table):** Semua kendaraan memiliki satu dari enam peringkat Ukuran yang menentukan nilai atau rentang dari karakteristik lainnya. Karena ukuran intrinsik mereka yang lebih besar dan lingkungan ruang angkasa yang berbahaya, kapal luar angkasa memiliki rentang nilai mereka sendiri.
- **[Hull](0006_Vehicles.md?id=terrestrial-hulls):** Mewakili Poin Armor.
- **[Struktur](0006_Vehicles.md?id=terrestrial-hulls):** Mewakili Poin Daya Tahan kendaraan.
- **[Perisai](0006_Vehicles.md?id=shields):** Dalam latar dengan teknologi manipulasi energi canggih, perisai mungkin ada untuk melindungi kendaraan, tetapi dapat terkikis di bawah serangan terus-menerus.
- **[Sistem](0006_Vehicles.md?id=systems):** Mewakili komponen vital kendaraan, termasuk pembangkit listrik, bagian kru, dan sebagainya.
- **[Kecepatan](0006_Vehicles.md?id=speed):** Setiap kendaraan memiliki peringkat Kecepatan dasar.
- **[Trait](0006_Vehicles.md?id=traits):** Sebuah kendaraan mungkin juga memiliki satu atau lebih Trait. Trait, seperti Kemampuan yang diberikan kepada Makhluk dalam aturan _Mythras Imperative_, atau Trait Gaya Tarung, menawarkan deskripsi permainan dan keuntungan tambahan, mencerminkan sifat kendaraan tersebut.
- **[Senjata](0006_Vehicles.md?id=weapons):** Mirip dengan Trait, kendaraan dapat dilengkapi dengan senjata sesuai dengan latar. Beberapa contoh dan nilai yang disarankan dirinci di bawah ini.


---
### Ukuran Hull, Tipe dan Struktur

Ukuran dan tujuan kendaraan memengaruhi ketebalan hull dan ketahanan struktur internalnya. Sepeda motor, misalnya, memiliki hull minimal, yang dibuat untuk kecepatan dan kelincahan. Land Ironclad (monster lapis baja besar beroda atau rantai, yang ditenagai oleh mesin uap atau diesel), karena merupakan kendaraan yang jauh lebih besar yang dirancang untuk medan perang, memiliki hull yang jauh lebih besar. Perbandingan ukuran hull (dan berapa banyak hantaman dari senjata yang biasanya dapat mereka tahan), dirangkum dalam tabel Ukuran Kendaraan dan Hull di bawah ini.

Setiap kali kendaraan menderita bahaya, Daya Rusak yang masuk dikurangi dengan nilai Hull-nya. Daya Rusak yang tersisa dikurangi dari poin Struktur kendaraan dan memiliki peluang persentase, setara dengan Daya Rusak yang menembus, untuk memengaruhi Sistem. Jika kendaraan mencapai poin Struktur nol, kendaraan tersebut hancur total, atau rusak parah sehingga harus dibesituakan.

##### Hull Terestrial

| Ukuran | Struktur | Nilai Hull Sipil | Nilai Hull Militer | Contoh |
| :-- | :-: | :-: | :-: | :-- |
| Kecil | 1-20 | 1-3 | 4-6 | Sepeda motor, sepeda motor dengan sespan, mobil kompak atau subkompak, kano, kayak, perahu dayung |
| Sedang | 21-40 | 1-6 | 7-9 | Sedan, van panel, pikap, mobil mewah, mobil sport mewah, mobil otot, limusin, sekoci, perahu cepat, gantole, autogiro |
| Besar | 41-60 | 4-9 | 10-12 | Truk, limusin panjang, SUV, bus, mobil keluarga, pesawat pribadi, glider, kapal pesiar santai, tank, helikopter, kapal selam |
| Raksasa | 61-80 | 7-12 | 13-15 | Truk semi-trailer, pesawat penumpang, jet, kapal penjaga pantai, yacht |
| Sangat Besar | 81-100 | 10-15 | 16-18 | Kereta api, kapal pesiar, kapal angkatan laut |

##### Hull Kapal Luar Angkasa

| Ukuran | Struktur | Nilai Hull Sipil | Nilai Hull Militer | Contoh |
| :-- | :-: | :-: | :-: | :-- |
| Kecil | 10-50 | 4-9 | 10-12 | Pesawat tempur kursi tunggal |
| Sedang | 51-150 | 7-12 | 13-15 | Kapal pengangkut ringan, pesawat ulang-alik |
| Besar | 151-450 | 10-15 | 16-18 | Kapal pengangkut berat, kapal penjelajah |
| Raksasa | 451-1350 | 13-18 | 19-21 | Fregat pengawal, kapal penjelajah tempur ringan |
| Sangat Besar | 1351-4050 | 16-21 | 21-24 | Kapal generasi, kapal penjelajah tempur berat |
| Kolosal | 4050-12110 | 19-24 | 24-30 | Habitat orbital, stasiun tempur penghancur planet |


---
### Perisai

Perisai deflektor memberikan lapisan perlindungan tambahan bagi kendaraan yang dapat memasangnya. Perisai bekerja sedikit berbeda dari Hull, karena sifatnya yang ablatif. Jika Daya Rusak yang masuk sama dengan atau kurang dari nilai perisai, maka semuanya diblokir. Jika Daya Rusak melebihi nilai perisai, maka kelebihannya akan mengurangi kekuatan perisai sebesar jumlah tersebut.

_Sebagai contoh, pengangkut pasukan memiliki kekuatan perisai energi sebesar 12 poin. Jika pengangkut terkena laser sebesar 11 Daya Rusak, serangan tersebut tidak menembus dan tidak memiliki efek tambahan. Sebaliknya, jika pengangkut terkena ledakan yang menimbulkan 15 Daya Rusak, tiga poin kelebihannya akan menurunkan kekuatan perisai menjadi 9._

Setelah kekuatan perisai deflektor turun menjadi nol, perisai tersebut runtuh. Daya Rusak yang tersisa berlanjut ke hull.

---
### Sistem

Setiap kali kendaraan menderita Daya Rusak yang menembus hull-nya, ada peluang, setara dengan Daya Rusak yang menembus, bahwa Sistem vital telah terpengaruh.

_Sebagai contoh, 10 Daya Rusak diterapkan pada Perahu Cepat - kendaraan dengan 3 Hull dan 24 Struktur. Hull dihitung sebagai Armor yang mengurangi Daya Rusak menjadi 7. Ini dihapus dari 24 poin Struktur dan ada peluang 7% untuk merusak salah satu Sistem kendaraan._

Daya Rusak yang dapat ditahan oleh Sistem didasarkan murni pada ukuran kendaraan. Ini dimodelkan oleh jumlah hantaman yang dapat diterima Sistem, daripada jumlah Daya Rusak sebenarnya. Satu Hantaman Sistem pada kendaraan Kecil akan langsung menghancurkan Sistem tersebut. Dibutuhkan dua hantaman untuk menghancurkan Sistem kendaraan berukuran Sedang, tiga untuk kendaraan Besar, dan seterusnya. Lihat [Tabel Daya Rusak Sistem](0006_Vehicles.md?id=system-damage-table) di bawah ini.

Sistem yang rusak, tetapi belum hancur, mengalami kehilangan fungsi yang proporsional dengan jumlah Hantaman yang diterima - baik pengurangan persentase atau penalti Tanjakan pada tugas Sistem. Efek spesifik didasarkan pada apa yang dikendalikan oleh subsistem tersebut, seperti yang dirinci dalam [Tabel Daya Rusak Komponen Sistem](0006_Vehicles.md?id=system-component-damage-table) di bawah. Tergantung pada Sistem mana yang terkena, efeknya bisa menjadi katastrofik.

_Sebagai contoh, Land Ironclad - kendaraan Sangat Besar dengan 5 Hantaman Sistem - yang terkena dua kali pada bagian Mengemudi (penggerak) akan kehilangan 40% kekuatannya dan akan mengurangi Kecepatan Lambatnya dua Tanjakan menjadi Ponderous (lamban). Demikian pula, kapal pengangkut Besar - dengan 3 Hantaman Sistem - yang menerima dua hantaman pada Sistem Mesin/Bahan Bakar akan memiliki penalti dua Tanjakan pada Kecepatan serta penggunaan sistem Elektronik. Hantaman ketiga akan menghancurkan Sistem Mesin/Bahan Bakar beserta kapalnya._


<details>

<summary>* Errata Komunitas</summary>

---

#### Daya Rusak


_Teks asli di sini awalnya lebih jauh. Ditempatkan langsung setelah bagian Sistem, ini mengulang paragraf sebelumnya secara tidak perlu._

- _"Daya Rusak yang melebihi Hull menembus kendaraan, merusak Struktur dan kemungkinan berdampak pada satu atau lebih sistem. Bergantung pada ukuran kendaraan, Daya Rusak bisa bersifat kecil atau katastrofik._
- _Sebagai contoh, kendaraan Besar mungkin menerima hingga dua hantaman pada Sistem seperti Mengemudi-nya. Hantaman ketiga secara fungsional menghancurkan Mengemudi. Setiap kali sistem menerima hantaman, sistem tersebut kehilangan persentase fungsinya seperti yang dijelaskan dalam kolom Kehilangan per Hantaman pada Tabel Daya Rusak Sistem di bawah atau fungsi inti (seperti Mengemudi, Pilot, Komunikasi, dan sebagainya) menjadi satu Tanjakan lebih sulit per hantaman yang diderita."_

_Paragraf di atas dihapus dan suntingan singkat menggantikannya dengan memanggil contoh efek Sistem lainnya._

---

</details>

##### Tabel Daya Rusak Sistem

| Ukuran | Hantaman Sistem | Kehilangan per Hantaman |
| :-- | :-: | :-- |
| Kecil | 1 | 100% - Hancur |
| Sedang | 2 | 1 Tanjakan atau 50% |
| Besar | 3 | 1 Tanjakan atau 33% |
| Raksasa | 4 | 1 Tanjakan atau 25% |
| Sangat Besar | 5 | 1 Tanjakan atau 20% |
| Kolosal | 6 | 1 Tanjakan atau 16% |


<details>

<summary>* Errata Komunitas</summary>

---

##### Tabel Daya Rusak Sistem (Asli)

| Ukuran | Hantaman Sistem | Kehilangan per Hantaman |
| :-- | :-: | :-- |
| Kecil | 1 | 1 Tanjakan atau 50% |
| Sedang | 2 | 1 Tanjakan atau 33% |
| Besar | 3 | 1 Tanjakan atau 25% |
| Raksasa | 4 | 1 Tanjakan atau 20% |
| Sangat Besar | 5 | 1 Tanjakan atau 16% |
| Kolosal | 6 | 1 Tanjakan atau 10% |

##### Tabel Ukuran Kendaraan (dari [Ukuran Hull, Tipe dan Struktur](0006_Vehicles.md?id=hull-size-type-and-structure))

| Ukuran | Hantaman Sistem |
| :-- | :-: |
| Kecil | 1 |
| Sedang | 2 |
| Besar | 3 |
| Raksasa | 4 |
| Sangat Besar | 5 |
| Kolosal | 6 |

_Aturan dan contoh asli tidak konsisten:_
- _"Sistem yang rusak, tetapi belum hancur, mengalami kehilangan fungsionalitas. Ini sama dengan proporsi hantaman saat ini terhadap kemampuan totalnya. Jadi, kendaraan Sangat Besar yang terkena dua kali pada Mengemudi akan kehilangan 40% kekuatannya (2 hantaman dari maksimum 5)"._ 
   - _Ini menyiratkan kendaraan Sangat Besar yang ditampilkan dengan 5 Hantaman Sistem harus kehilangan 20% dengan setiap hantaman - tetapi tabel mengatakan 16%._
- _"Sebagai contoh, kendaraan Besar mungkin menerima hingga tiga hantaman pada sistem seperti Mengemudi-nya. Hantaman keempat secara fungsional menghancurkan Mengemudi."_ 
  - _"Ini menyiratkan - seperti halnya tabel - 25% Daya Rusak per Hantaman Sistem tetapi kendaraan Besar hanya dapat menerima 3 Hantaman Sistem menurut tabel yang sama._
- _Meskipun tidak konsisten, Tabel Ukuran Kendaraan dianggap mubazir; muncul lagi dalam bentuk yang lebih lengkap (menambahkan kolom Kehilangan per Hantaman) hanya beberapa baris kemudian._

_Hal ini membuat sulit untuk memiliki aturan yang konsisten. Untuk mengatasi masalah ini, nilai dan contoh diubah agar sesuai dan Tabel Ukuran Kendaraan dihapus._

---

</details>


##### Tabel Daya Rusak Komponen Sistem

| 1d10 | Sistem | Hasil Rusak | Hasil Hancur |
| :-: | :-- | :-- | :-- |
| 1 | Kargo | Sejumlah harta benda atau peralatan yang disimpan di ruang kargo, proporsional dengan Daya Rusak, hancur. | Semua kargo hancur. |
| 2 | Komunikasi | Lemparan Komunikasi menderita satu Tanjakan tambahan setiap kali rusak. | Kendaraan tidak dapat lagi berkomunikasi atau mengelabui sensor musuh. |
| 3 | Kontrol | Lemparan Berperahu, Mengemudi, atau Pilot menderita satu Tanjakan tambahan setiap kali rusak; lemparan Kontrol segera diperlukan. | Kendaraan tidak dapat lagi dikemudikan atau diubah arahnya. |
| 4 | Mengemudi | Kecepatan berkurang sebesar jumlah yang proporsional dengan Daya Rusak. | Kendaraan berhenti total; pesawat jatuh. |
| 5 | Kru | Sejumlah penumpang yang proporsional dengan Daya Rusak menjadi korban. Mereka yang terkena menderita Luka Besar dan harus berhasil dalam lemparan Ketahanan atau langsung tewas. | Penumpang kendaraan tewas. |
| 6 | Mesin / Bahan Bakar | Kecepatan berkurang sebesar jumlah yang proporsional dengan Daya Rusak. Sistem elektronik satu Tanjakan lebih sulit digunakan. | Kendaraan hancur dalam ledakan dahsyat. |
| 7 | Sensor | Lemparan Sensor, Navigasi, dan serangan Senjata menderita satu Tanjakan tambahan setiap kali rusak. | Kendaraan menjadi buta. |
| 8 | Senjata | Sejumlah sistem senjata yang proporsional dengan Daya Rusak menjadi tidak berfungsi. | Kendaraan tidak dapat lagi menembakkan senjata. |
| 9-0 | Tidak Ada | Tidak ada sistem yang terkena; hanya Daya Rusak Struktur. | N/A |

<details>

<summary>* Errata Komunitas</summary>

---

##### Tabel Daya Rusak Komponen Sistem (Mesin/Bahan Bakar)

_Hasil aslinya adalah sebagai berikut: "Kecepatan Maksimum dibelah dua..." Ini bertentangan dengan aturan umum penalti Daya Rusak yang proporsional dengan Daya Rusak Sistem: Daya Rusak 25% = penalti 25%. Terlebih lagi, aturan lengkap dalam Mythras Companion tidak menyebutkan pembelahan Kecepatan ini._

_Akibatnya, teks tersebut diganti dengan entri yang sama dari Sistem Mengemudi: "Kecepatan berkurang sebesar jumlah yang proporsional dengan Daya Rusak."_

---

</details>


---
### Kecepatan

Karena fisika kecepatan, akselerasi, hambatan, dan inersia (hanya menyebutkan beberapa) adalah masalah yang kompleks, diperlukan penyederhanaan sehingga kendaraan diberi peringkat kecepatan abstrak. Karakteristik Kecepatan hanya boleh digunakan untuk menilai secara kasar apakah satu kendaraan dapat menyusul atau mengejar kendaraan lain.

Peringkat kecepatan mewakili tingkat operasional nominal kendaraan. Dalam situasi darurat, kinerja ini dapat ditingkatkan satu langkah, dengan risiko keausan atau kerusakan pada mesin. Meskipun tabel yang sama digunakan untuk semua jenis kendaraan, akal sehat harus diterapkan agar hanya kendaraan dari kelas yang sama yang dibandingkan. Sebagai contoh, jika Kapal Luar Angkasa dan mobil sport keduanya memiliki tingkat akselerasi yang sama yaitu Cepat, maka sudah jelas kapal luar angkasa tersebut relatif lebih cepat.

Meningkatkan Kecepatan kendaraan di luar nilai standarnya dimungkinkan dengan lemparan Mengemudi yang berhasil. Biasanya, kecepatan ekstra ini hanya dapat dipertahankan untuk periode singkat – tidak lebih dari 1d6 Menit sebelum kendaraan harus turun ke kecepatan standarnya atau berisiko merusak pembangkit listriknya. Lemparan Mengemudi yang sukses secara kritis memungkinkan periode kecepatan yang lebih tinggi ditingkatkan menjadi 1d12 Menit.

Seorang pengemudi dapat mencoba mendorong kecepatan kendaraan sebesar 2 langkah, tetapi ini memerlukan lemparan Mengemudi Herkules dan maksimum kendaraan dapat mempertahankan kecepatan ini adalah 1d3 Menit: Keberhasilan Kritis tidak akan memperpanjang durasi kecepatan yang ditingkatkan.

##### Tabel Peringkat Kecepatan

| Peringkat Kecepatan | Kecepatan Maks. Untuk |
| :-- | :-: |
| Ponderous (Lamban) | Sangat Besar |
| Sluggish (Lesu) | |
| Slow (Pelan) | Raksasa |
| Mediocre (Sedang) | |
| Gentle (Lembut) | Besar |
| Moderate (Moderat) | |
| Rapid (Cepat) | Sedang |
| Fast (Laju) | |
| Fleet (Kilat) | Kecil |


---
### Trait

Jumlah maksimum trait yang dapat dimiliki kendaraan bergantung pada ukuran dan tipe hull.

Setiap kendaraan memiliki trait bawaan: mode perjalanan yang menjadi tujuan utama perancangannya. Oleh karena itu, pesawat secara inheren memegang trait Lintas Udara, perahu memegang trait Lintas Laut, dan seterusnya. Trait bawaan ini tidak dihitung terhadap jumlah trait yang tersedia. Namun, jika kendaraan harus menyertakan mode perjalanan kedua — misalnya kapal selam terbang, maka trait Lintas Udara harus diambil sebagai salah satu trait yang tersedia.

Beberapa trait mungkin tidak tersedia, tergantung pada tingkat teknologi latar; Games Master harus membuat keputusan sendiri mengenai trait apa yang dapat diterapkan.

##### Tabel Alokasi Trait Kendaraan

| Ukuran | Max Trait |
| :-- | :-: |
| Kecil | 1 |
| Sedang | 2 |
| Besar | 3 |
| Raksasa | 4 |
| Sangat Besar | 5 |
| Kolosal | 6 |

#### Lintas Udara

Kendaraan mampu melakukan penerbangan atmosfer.

#### Segala Medan

Trait ini harus digunakan dengan kendaraan Darat. Kendaraan dapat melintasi medan yang tidak ramah, sulit, dan curam, menggunakan rantai, suspensi canggih dan sistem penggerak, atau diferensial penggerak yang kuat.

#### Menggali

Kendaraan dirancang untuk menggali dan membuat terowongan melalui tanah. Ia dapat mencapai kedalaman maksimum yang setara dengan Peringkat Hull-nya x5 meter.

#### Menyamar

Kendaraan memiliki cat kamuflase atau sensor mimetik yang memungkinkannya berbaur dengan lingkungannya. Upaya untuk melihat kendaraan secara visual menjadi satu Tanjakan lebih sulit.

#### Kargo

Kendaraan dirancang khusus untuk mengangkut kargo daripada penumpang. Kompartemen penumpang dijaga seminimal mungkin dengan sisa ruang kendaraan yang dapat digunakan dikhususkan untuk penampungan kargo dengan bagian, alat, dan bahkan pengondisian lingkungan yang sesuai (seperti bagian pendingin untuk mengangkut barang yang mudah rusak). Saat dimuati kargo, kecepatan kendaraan dua langkah lebih rendah dari ukuran hull-nya yang biasa.

#### Pengangkut

Kendaraan dirancang khusus untuk membawa kendaraan yang lebih kecil, diawaki dengan ringan, atau mungkin dikendalikan dari jarak jauh, baik yang bersifat sipil maupun militer. Setiap kendaraan yang memiliki trait ini harus berukuran minimal Sangat Besar. Jumlah kapal kecil yang dibawa dapat bervariasi menurut jenis dan tujuan misi, tetapi bisa sedikitnya 10 hingga sebanyak peringkat Struktur kendaraan tersebut.

#### Konstruksi

Kendaraan dilengkapi untuk pekerjaan konstruksi berat. Semua kendaraan dengan trait ini juga memiliki trait Segala Medan, tetapi kecepatan dua langkah lebih rendah dari ukuran hull-nya yang biasa. Kendaraan dilengkapi dengan peralatan yang sesuai tugas seperti jib derek, sekop penggali, gerobak sampah, dan sebagainya.

#### Tahan EMP

Kendaraan dilindungi terhadap serangan pulsa elektromagnetik.

#### Peningkatan Performa

Peringkat Kecepatan kendaraan satu langkah lebih tinggi dari maksimum untuk ukurannya.

#### Kursi Lontar

Jika terjadi keadaan darurat, kursi lontar mendorong penumpang beberapa ratus meter ke udara, lalu menggunakan parasut untuk memungkinkan pendaratan yang aman. Parasut bersifat opsional. Tidak disarankan untuk helikopter (Kamov Ka-52 Alligator adalah pengecualian yang terkenal).

#### FTL

Khusus Kapal Luar Angkasa. Kapal dilengkapi dengan mesin yang lebih cepat dari cahaya (baik ini hyperdrive, warp Mengemudi, generator lubang cacing, atau sejenisnya). Mengemudi FTL memiliki peringkat Kecepatan terpisah yang pada dasarnya mengukur laju kapal luar angkasa dapat melintasi satu parsec (3,26 tahun cahaya, atau 31 triliun kilometer atau 19 triliun mil), sebagai berikut:

##### Tabel Kecepatan FTL

| Peringkat Kecepatan | Faktor untuk Melintasi 1 Parsec |
| :-- | :-: |
| Ponderous | 10 |
| Sluggish | 8 |
| Slow | 7 |
| Mediocre | 6 |
| Gentle | 5 |
| Moderate | 4 |
| Rapid | 3 |
| Fast | 2 |
| Fleet | 1 |

Waktu faktor adalah untuk diputuskan oleh Games Master, tergantung pada seberapa canggih pengembangan FTL latar tersebut. Sebagai contoh, faktor dasar mungkin 1 Hari, yang berarti kapal dengan Mengemudi FTL Ponderous membutuhkan 10 hari untuk menyelesaikan perjalanan, sedangkan kapal dengan Mengemudi FTL Fleet menyelesaikan perjalanan dalam 1 hari. Di tempat lain, di mana teknologi FTL jauh kurang efisien, maka waktu faktor mungkin diukur dalam hitungan bulan, bukan hari.

Diasumsikan bahwa kapal memiliki cadangan bahan bakar untuk melakukan perjalanan pulang, atau cara untuk mengisi bahan bakar di titik tujuan.

Asumsikan bahwa ukuran kapal luar angkasa apa pun dapat dilengkapi dengan Mengemudi FTL, meskipun, sekali lagi, ini tergantung pada latar.

Mengemudi FTL tidak dapat diaktifkan dalam jarak 1,5 Satuan Astronomi dari bintang (sekitar 225 juta kilometer, atau 270 juta mil). Ini berarti kapal harus menggunakan Mengemudi subcahaya untuk bergerak hingga jarak sekitar Mars sebelum mengaktifkan sistem FTL.

#### Kendaraan Darat

Kendaraan mampu melakukan perjalanan darat.

#### Melayang

Kendaraan melayang di atas tanah baik menggunakan bantalan udara atau repulsor anti-gravitasi.

#### Mewah

Kendaraan dirancang khusus untuk membawa penumpang dengan tingkat kemewahan tertentu. Ruang kargo berlebih dialokasikan untuk akomodasi penumpang yang mewah, kolam renang, bak mandi air panas, kru tambahan untuk memenuhi keinginan penumpang, dan sebagainya.

#### Rel

Kendaraan mengandalkan sistem rel. Kendaraan dengan trait ini secara alami dapat mencapai peringkat Kecepatan tiga langkah lebih tinggi daripada yang biasanya diperbolehkan oleh ukuran hull-nya, tetapi jelas terbatas pada pergerakan di sistem rel saja.

#### Tangguh

Semua sistem dapat menahan satu hantaman tambahan lebih dari yang ditentukan secara normal oleh Ukuran. Trait ini dapat ditumpuk — jadi Tangguh 2 menunjukkan bahwa sistem dapat menahan 2 hantaman lebih dari biasanya dengan biaya dua poin Trait.

#### Lintas Laut

Kendaraan dapat mengapung di air.

#### Pesawat Luar Angkasa

Kendaraan disegel terhadap ruang hampa dan dilindungi terhadap radiasi kosmik dan mungkin, tergantung pada desainnya, mampu meninggalkan dan masuk kembali ke atmosfer, dan mempertahankan penerbangan di dalam atmosfer.

#### Senyap

Khusus Pesawat. Kendaraan dirancang untuk menghindari deteksi oleh radar dan sistem sensor jarak jauh lainnya. Upaya untuk melihat kendaraan menggunakan sensor elektronik menjadi satu Tanjakan lebih sulit.

#### Kapal Selam

Kendaraan mampu menyelam di bawah permukaan laut hingga kedalaman operasional sebesar Peringkat Hull-nya x10 meter. Kedalaman keruntuhan — maksimum mutlak yang dapat dicapai kapal selam tanpa hancur — adalah 1,5 kali kedalaman operasionalnya.

#### Penanganan Unggul

Penanganan kendaraan dinilai Mudah.

#### Paket Pengawasan

Kendaraan memiliki komputer terpasang, stasiun pangkalan komunikasi, penerima untuk sinyal perangkat penyadap, dan peralatan untuk mencegat sinyal ponsel pintar terdekat dalam jarak 100 meter.#### Tough

Kendaraan sipil dengan ciri ini mengambil Hull dari kolom Militer dan secara otomatis memiliki Structure maksimum. Kendaraan militer dengan ciri ini mengambil Hull dan Structure dari baris di bawahnya.

#### Tractor Beam

Hanya untuk Pesawat Ruang Angkasa. Kapal dilengkapi dengan tractor beam yang dapat menjerat dan menarik kendaraan dengan peringkat hull hingga dua tingkat di bawah peringkatnya sendiri. Jadi, kapal bintang berukuran Huge dapat menarik dan menahan hull hingga ukuran Medium.

#### VTOL

Lepas landas/pendaratan vertikal. Ciri ini melekat pada helikopter dan kendaraan serupa yang menggunakan kombinasi rotor untuk menghasilkan gaya angkat. Jika diterapkan pada pesawat sayap tetap, ini menunjukkan penggunaan pendorong tetap atau yang dapat diselaraskan untuk mengendalikan sikap udara, pendakian, dan penurunan.

#### Waterborne

Kendaraan mendorong dirinya sendiri menggunakan kaki berengsel. Kendaraan Walker dibatasi pada Kecepatan Gentle, berapa pun Ukurannya. Namun, Walker dapat dibangun hingga ketinggian yang tidak stabil bagi kendaraan yang dilengkapi dengan alat penggerak lainnya.

Kendaraan ini mampu melakukan pergerakan di bawah air.

#### Weaponized

Kendaraan telah diadaptasi untuk mengakomodasi persenjataan. Sistem senjata dibahas di bawah ini di bagian [Senjata](0006_Vehicles.md?id=weapons).


---
## Senjata

Biasanya, hanya hull militer yang dirancang untuk mengakomodasi persenjataan (Sulit point, penyimpanan amunisi, sistem kendali). Ciri 'Weaponized' dapat diambil untuk kendaraan sipil yang mungkin memiliki kebutuhan senjata.

Jumlah maksimum sistem senjata yang dapat didukung oleh kendaraan adalah sama dengan 1/10 dari Poin Structure-nya (jadi kendaraan dengan 40 Structure dapat mendukung 4 sistem senjata, jika berupa kendaraan militer atau kendaraan sipil yang di-Weaponized).

Sistem senjata bergantung pada Ukuran kendaraan. Tipe sistem senjata maksimum untuk berbagai Ukuran ditampilkan dalam tabel di bawah ini.


##### Tabel Senjata berdasarkan Ukuran

| Ukuran | Terestrial | Pesawat Ruang Angkasa |
| :-- | :-- | :-- |
| Small | Senjata Ringan (contoh: Assault Rifle) | Senjata Menengah (contoh: Senapan Mesin, Peluncur Roket) |
| Medium | Senjata Menengah (contoh: Senapan Mesin, Peluncur Roket) | Senjata Turret/Berat (contoh: Senapan Mesin Berat Terkait, Mini-Gun) |
| Large | Senjata Turret/Berat (contoh: Senapan Mesin Berat Terkait, Mini-Gun) | Baterai Senjata (contoh: Artileri Medan) |
| Huge | Baterai Senjata (contoh: Artileri Medan) | Senjata Canggih (contoh: Sistem Rudal) |
| Enormous | Senjata Canggih (contoh: Sistem Rudal) | Senjata Terpasang di Tulang Punggung (hanya satu) |
| Colossal | NA | Senjata Terpasang di Tulang Punggung (hingga 3) |

##### Statistik Contoh Senjata
 
| Senjata | Daya Rusak | Jarak | Tingkat Tembak | Amunisi/Muatan |
| :-- | :-: | :-: | :-: | :-: |
| Meriam 50 inci | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling Gun | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Roket | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Rudal/Torpedo Menengah | 6d10 | Jarak maks 200km | 1 | 1/5 |
| Rudal Besar/Jarak Jauh | 6d10+10 | Jarak maks 1000km | 1 | 1/10 |
| Meriam Laser/Plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Meriam Laser/Plasma Berat | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Baterai Artileri | 5d6+6 | Jarak maks 50km | 1 | 1/5 |
| Baterai Tulang Punggung | 10d6+6 | Jarak maks 20000km | 1 | 1/10 |

_Jarak diberikan dalam meter dan kilometer._

_Tingkat tembak adalah untuk tembakan tunggal, semi-otomatis, dan otomatis penuh._

_Amunisi adalah kemampuan menembak sebelum perlu diisi ulang. Muatan adalah waktu isi ulang dalam Ronde Pertarungan, dengan asumsi kru lengkap tersedia._

---
## Penanganan dan Manuver

Manuver menghindar atau mendadak memerlukan lemparan Skill Mengemudi/Pilot yang berhasil untuk memastikan pengemudi atau pilot tetap memegang kendali kendaraan. Sebagian besar kendaraan dirancang dan dibuat untuk menahan tekanan dan beban sesekali, tetapi Games Master dapat memutuskan bahwa manuver tertentu memerlukan lemparan pada tingkat kesulitan yang lebih tinggi, tergantung seberapa ambisius manuver tersebut. Kegagalan berarti kendali atas kendaraan hilang: lempar pada tabel Kehilangan Kendali.

Perhatikan bahwa Tabel Kehilangan Kendali hanya berlaku untuk kendaraan darat. Efek serupa dapat diterapkan pada kendaraan udara dan ruang angkasa, tetapi Games Master harus menyesuaikan alasan untuk efek spesifik tersebut. Misalnya, pesawat, alih-alih tergelincir, mungkin berputar di luar kendali.

Selain itu, penanganan bawaan kendaraan mungkin memiliki dampak tambahan pada lemparan Mengemudi. Penanganan bisa berupa Mudah, Standar, Sulit, Tangguh, atau Herkules dan menentukan titik awal untuk lemparan Mengemudi saat melakukan manuver. Tingkat kesulitan untuk manuver kemudian diterapkan pada penanganan untuk menentukan kesulitan akhir.

Misalnya, sepeda motor berkinerja tinggi memiliki girostabilizer bawaan yang memberikannya Penanganan Mudah. Pengemudi ingin melakukan putaran skid 180 derajat untuk menghindari pengejar, manuver yang dinilai Games Master sebagai satu tingkat kesulitan tambahan. Oleh karena itu, pengendara harus melakukan lemparan Mengemudi pada tingkat Standar, bukan Mudah. Jika dia mencoba manuver yang sama pada sepeda motor tanpa stabilizer, lemparan Mengemudi akan menjadi Sulit.

Penanganan Superior adalah suatu Ciri. Jika kendaraan tidak memiliki ciri tersebut sebagai bagian dari deskripsinya, maka default-nya adalah penanganan Standar untuk kendaraan ukuran Large ke bawah. Kendaraan Huge dan Enormous secara inheren memiliki ciri Penanganan Tangguh dan Herkules, dan Games Master bebas memutuskan bahwa manuver tertentu tidak mungkin dilakukan karena ukuran kendaraan.

##### Tabel Kehilangan Kendali

| 1d100 | Hasil |
| :-: | :-- |
| 01-25 | Oleng. Kehilangan kendali bersifat sementara. Kendaraan menurunkan kecepatannya sebanyak 1 tingkat selama 5 detik. |
| 26-40 | Tergelincir. Pengemudi harus berjuang untuk tetap mengendalikan kendaraan. Kendaraan menurunkan kecepatannya sebanyak 2 tingkat selama 10 detik. |
| 41-50 | Tergelincir Parah. Kendaraan berakhir dalam posisi menghadap ke arah yang salah dan berhenti selama 15 detik. |
| 51-60 | Terguling. Kendaraan tergelincir dan terguling, menerima 3d10 Daya Rusak pada Structure-nya. Penumpang harus berhasil melakukan lemparan Ketahanan atau menerima 1d10 Daya Rusak pada 1d3 Lokasi Bentur. |
| 61-70 | Terguling Parah. Seperti di atas, tetapi kendaraan menerima 3d10+10 Daya Rusak dan Penumpang menerima 1d10 Daya Rusak meskipun lemparan Ketahanan berhasil, dan 2d10 jika gagal. |
| 71-80 | Hancur Total. Seperti di atas tetapi kendaraan berkurang menjadi 0 Structure. Penumpang menerima Daya Rusak yang sama seperti Terguling Parah. |
| 81-90 | Ledakan. Seperti di atas tetapi sistem bahan bakar kendaraan menyala dan meledak dalam 1d20+10 detik. Jika tidak dapat mengevakuasi diri, penumpang menderita 1d6 Daya Rusak bakar tambahan pada 1d6 lokasi. |
| 91-98 | Ledakan Segera. Seperti di atas tetapi ledakan terjadi seketika. |
| 99-00 | Tabrakan Katastropik. Penumpang harus berhasil melempar Ketahanan atau langsung tewas. Daya Rusak seperti untuk Hancur Total tetap terjadi. |


---
## Contoh Kendaraan

---

### Kendaraan Darat

#### Interceptor

Mobil mewah yang dimodifikasi, mobil sport, atau sejenisnya, mobil ini dibangun untuk melaju cepat dan memberikan perlawanan sepadan dalam pertempuran. Ini adalah jenis kendaraan yang terlintas di benak orang ketika seseorang berkata, "mobil mata-mata."

| Interceptor | |
| :- | :- |
| **Ukuran / Tipe** | Medium Militer |
| **Hull** | 6 |
| **Structure** | 40 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Penanganan** | Mudah |
| **Ciri** | [Ejector Seat](0006_Vehicles.md?id=ejector-seat), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dispenser Tumpahan Oli, Dispenser Asap, Senapan Mesin Menengah Terkait Ganda (2d6+3) |

<br>

---

#### Pursuit Motorcycle

Sepeda motor ringan dan cepat untuk pengejaran, Pursuit Motorcycle membawa kejutan – baik sepasang senapan mesin terkait atau dua roket.

| Pursuit Motorcycle | |
| :- | :- |
| **Ukuran / Tipe** | Small Sipil |
| **Hull** | 2 |
| **Structure** | 12 |
| **Sistem** | 1 |
| **Kecepatan** | Cepat |
| **Penanganan** | Mudah |
| **Ciri** | [Superior Handling](0006_Vehicles.md?id=superior-handling), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dua Roket (4d6) atau Senapan Mesin Ringan Terkait Ganda (2d6) |

<br>

---

#### Sedan Car

Sedan 4 pintu standar yang memiliki cukup ruang untuk menampung pengemudi dan tiga penumpang dengan nyaman. Mengorbankan ruang kargo untuk menyertakan paket pengawasan.

| Sedan Car | |
| :- | :- |
| **Ukuran / Tipe** | Medium Sipil |
| **Hull** | 4 |
| **Structure** | 25 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Penanganan** | Standar |
| **Ciri** | [Unobtrusive](0006_Vehicles.md?id=unobtrusive), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite) |
| **Senjata** | Tidak ada |

<br>

---

#### Submersible Car

Mobil dua orang yang dapat beralih ke mode air atau selam untuk bepergian di atas atau di bawah air. Dilengkapi dengan torpedo yang dipasang di depan dan rudal permukaan-ke-udara yang dipasang di atas.

| Submersible Car | |
| :- | :- |
| **Ukuran / Tipe** | Medium Sipil |
| **Hull** | 6 |
| **Structure** | 25 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Penanganan** | Standar |
| **Ciri** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Roket (5d6), Torpedo (4d10) |

<br>

---

#### Surveillance Van

Van polos tanpa tanda yang menampung tim agen dan serangkaian peralatan perekam audio-visual.

| Surveillance Van | |
| :- | :- |
| **Ukuran / Tipe** | Large Sipil |
| **Hull** | 9 |
| **Structure** | 60 |
| **Sistem** | 3 |
| **Kecepatan** | Lembut |
| **Penanganan** | Standar |
| **Ciri** | [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Tough](0006_Vehicles.md?id=tough) |
| **Senjata** | Tidak ada |

<br>

---

#### Tactical Support Vehicle

Truk pickup atau jeep dengan ruang untuk kru dua orang di kabin dan penembak berdiri di bagian belakang yang mengoperasikan Senapan Mesin Menengah yang dipasang pada penyangga putar.

| Tactical Support Vehicle | |
| :- | :- |
| **Ukuran / Tipe** | Medium Sipil |
| **Hull** | 6 |
| **Structure** | 30 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Penanganan** | Standar |
| **Ciri** | [All Terrain](0006_Vehicles.md?id=all-terrain), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Senapan Mesin Menengah Terpasang (2d6) |


<br>

---

### Kendaraan Air

#### Speedboat

Speedboat khas, dipersenjatai dengan dispenser ranjau yang dipasang di belakang.

| Speedboat | |
| :- | :- |
| **Ukuran / Tipe** | Medium Sipil |
| **Hull** | 3 |
| **Structure** | 24 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Penanganan** | Standar |
| **Ciri** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dispenser Ranjau (5d6) |

<br>

#### Yacht

Jenis kapal pesiar mewah yang mungkin dimiliki seorang oligarki. Kemungkinan dilengkapi dengan paket pengawasan untuk melindungi dari musuh yang mencoba melakukan tindakan tidak baik.

| Yacht | |
| :- | :- |
| **Ukuran / Tipe** | Huge Sipil |
| **Hull** | 10 |
| **Structure** | 75 |
| **Sistem** | 4 |
| **Kecepatan** | Lambat |
| **Penanganan** | Tangguh |
| **Ciri** | [Luxurious](0006_Vehicles.md?id=luxurious), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Waterborne](0006_Vehicles.md?id=waterborne) |
| **Senjata** | Tidak ada |


<br>

---

### Pesawat/Pesawat Ruang Angkasa

#### Dirigible (Kapal Udara Sipil)

Mirip dengan Hindenburg, kelas dirigible transbenua ini (dan lainnya di kelasnya) memiliki panjang 245 meter dan memerlukan kru sebanyak 40 hingga 61 orang. Biasanya dapat membawa pelengkap 50 hingga 72 penumpang dalam akomodasi mewah.

| Dirigible | |
| :- | :- |
| **Ukuran / Tipe** | Enormous Sipil |
| **Hull** | 10 |
| **Structure** | 85 |
| **Sistem** | 5 |
| **Kecepatan** | Lambat |
| **Penanganan** | Herkules |
| **Ciri** | [Airborne](0006_Vehicles.md?id=airborne), [Luxurious](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Shields** | Tidak ada |
| **Senjata** | Tidak ada |

<br>

---

#### Assault Helicopter

Helikopter Penyerang tradisional menggunakan teknologi pengawasan canggih mereka untuk mencegat sinyal telepon dan internet nirkabel, serta melacak individu dan kendaraan bahkan dalam gelap, melalui FLIR. Upaya untuk menghindari pelacak melalui Senyap adalah Tangguh.

| Assault Helicopter | |
| :- | :- |
| **Ukuran / Tipe** | Large Militer |
| **Hull** | 11 |
| **Structure** | 50 |
| **Sistem** | 3 |
| **Kecepatan** | Sedang |
| **Penanganan** | Mudah |
| **Ciri** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Senyap](0006_Vehicles.md?id=stealth), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Shields** | Tidak ada |
| **Senjata** | 1 Gatling Gun (3d6), 4 Roket (5d6) |

<br>

---

#### Multi-Role Fighter

Pesawat tempur berbasis darat dua kursi ini (serupa tipenya dengan De Havilland Mosquito) terkenal karena kinerja dan fleksibilitasnya. Teluk bomnya mampu membawa dua bom seberat 250 lb. (dianggap sebagai rudal menengah dengan jarak 0) atau satu torpedo.

| Multi-Role Fighter | |
| :- | :- |
| **Ukuran / Tipe** | Large Militer |
| **Hull** | 10 |
| **Structure** | 45 |
| **Sistem** | 3 |
| **Kecepatan** | Sedang |
| **Penanganan** | Standar |
| **Ciri** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance) |
| **Shields** | Tidak ada |
| **Senjata** | 4 Gatling Gun yang dipasang di hidung (4d6+3), 1 teluk bom (6d10 - lihat deskripsi) |

<br>

---

#### Interstellar Freighter (Transportasi Ringan Berteknologi Tinggi)

Transportasi ringan ini memerlukan kru minimum hanya dua orang, dengan ruang untuk hingga empat penumpang tambahan. Versi stok standar dicatat di sini, namun banyak pemilik akan menerapkan "modifikasi khusus" mereka sendiri seperti ruang kargo tersembunyi, Performa Ditingkatkan, Penanganan Superior, Resistensi EMP, Senyap, dan sebagainya.

| Interstellar Freighter | |
| :- | :- |
| **Ukuran / Tipe** | Medium Kapal Ruang Angkasa Sipil |
| **Hull** | 10 |
| **Structure** | 80 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat (Faktor Parse 3) |
| **Penanganan** | Standar |
| **Ciri** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Spacecraft](0006_Vehicles.md?id=spacecraft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Shields** | 8 |
| **Senjata** | 2x Turret Meriam Laser Quad (5d6) |


<br>

---

#### General Contact Unit (Pesawat Ruang Angkasa Teknologi Sangat Tinggi)

Kapal bintang berteknologi sangat tinggi ini adalah representasi fisik dari Pikiran buatan yang sangat canggih, yang berbentuk rangkaian modul terhubung medan sepanjang dua kilometer. Modul-modul tersebut memiliki tujuan individu dan mencakup habitat, fasilitas konstruksi, area kargo, pengolahan makanan, kompleks rekreasi, hanggar, dan bahkan beberapa unit rahasia yang jarang, jika pernah, dibahas oleh kecerdasan kapal tersebut. Tidak memerlukan kru manusia, tetapi dapat mendukung populasi penumpang hingga 100.000 dengan mudah. Banyak penumpang lahir dan mati di atas Contact Unit: banyak yang bersifat sementara, datang dan pergi sesuka mereka.

| General Contact Unit | |
| :- | :- |
| **Ukuran / Tipe** | Colossal Kapal Ruang Angkasa Sipil |
| **Hull** | 20 |
| **Structure** | 10.000 |
| **Sistem** | 6 |
| **Kecepatan** | Sedang (Faktor Parse 4. Pada tingkat teknologi ini, satu Faktor sama dengan 1 jam) |
| **Penanganan** | Tangguh |
| **Ciri** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Carrier](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxurious](0006_Vehicles.md?id=luxurious), [Spacecraft](0006_Vehicles.md?id=spacecraft), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Tractor Beam](0006_Vehicles.md?id=tractor-beam) |
| **Shields** | 30 |
| **Senjata** | Tidak ada yang perlu dibahas |

<br>