# Kendaraan

Kendaraan di dalam _Mythras Imperative_ diperlakukan secara semi-abstrak. Pada dasarnya, mereka adalah alat latar belakang, digunakan untuk membawa Karakter dari titik A ke titik B, dengan sedikit kebutuhan akan deskripsi detail atau statistik. Namun, terkadang, Games Master akan membutuhkan detail untuk kendaraan saat diperlukan untuk merepresentasikannya dalam situasi pengejaran atau pertempuran.

Aturan dalam bagian ini memungkinkan representasi sebagian besar jenis kendaraan tetapi dengan cara abstrak yang ditujukan untuk memungkinkan fleksibilitas dan meningkatkan penceritaan. Kapal luar angkasa sedikit berbeda, meskipun didasarkan pada prinsip yang serupa.

---
## Statistik

Semua kendaraan dijelaskan berdasarkan Struktur, Armor, Tingkat Gerak, Sistem, Sifat, dan Perisai (jika ada dalam latar).

- **[Ukuran](0006_Vehicles.md?id=vehicle-Ukuran-table):** Semua kendaraan memiliki satu dari enam peringkat Ukuran yang menentukan nilai atau rentang karakteristik lainnya. Karena ukuran intrinsiknya yang lebih besar dan lingkungan luar angkasa yang memusuhi, kapal luar angkasa memiliki rentang nilainya sendiri.
- **[Armor](0006_Vehicles.md?id=terrestrial-hulls):**  Merepresentasikan Poin Armor
- **[Struktur](0006_Vehicles.md?id=terrestrial-hulls):**  Merepresentasikan Poin Daya Rusak (Hit Points) kendaraan
- **[Perisai](0006_Vehicles.md?id=shields):**  Dalam latar dengan teknologi manipulasi energi canggih, mungkin terdapat perisai yang melindungi kendaraan, tetapi dapat terkikis di bawah tembakan terus-menerus.
- **[Sistem](0006_Vehicles.md?id=systems):**  Merepresentasikan komponen vital kendaraan, termasuk pembangkit tenaga, bagian kru, dan sebagainya.
- **[Tingkat Gerak](0006_Vehicles.md?id=speed):**  Setiap kendaraan memiliki peringkat Tingkat Gerak dasar.
- **[Sifat](0006_Vehicles.md?id=traits):**  Kendaraan mungkin juga memiliki satu atau lebih Sifat. Sifat, seperti Kemampuan yang diberikan kepada Makhluk dalam aturan _Mythras Imperative_, atau Sifat Gaya Tarung, menawarkan deskripsi dan keuntungan permainan tambahan, yang mencerminkan sifat kendaraan tersebut.
- **[Senjata](0006_Vehicles.md?id=Senjata):** Sama seperti Sifat, kendaraan dapat dilengkapi dengan senjata sesuai dengan latar yang diizinkan. Beberapa contoh dan nilai yang disarankan dirinci di bawah ini.


---
### Ukuran, Tipe, dan Struktur Armor

Ukuran dan tujuan kendaraan memengaruhi ketebalan Armor dan ketahanan struktur internalnya. Sebuah sepeda motor, misalnya, memiliki Armor minimal karena dibangun untuk kecepatan dan kelincahan. Land Ironclad (monster lapis baja beroda atau bertrek yang sangat besar, ditenagai oleh mesin uap atau diesel), karena merupakan kendaraan yang jauh lebih besar yang dirancang untuk medan perang, memiliki Armor yang jauh lebih besar. Perbandingan ukuran Armor (dan berapa banyak hantaman dari senjata yang biasanya dapat ditahan), dirangkum pada tabel Ukuran Kendaraan dan Armor di bawah.

Setiap kali kendaraan menderita bahaya, daya rusak yang masuk dikurangi oleh nilai Armor-nya. Daya rusak yang tersisa dikurangi dari poin Struktur kendaraan dan memiliki peluang persentase, setara dengan daya rusak yang menembus, untuk memengaruhi sebuah Sistem. Jika kendaraan pernah berkurang menjadi nol Struktur, kendaraan tersebut hancur total atau rusak parah sehingga harus dibuang.

##### Armor Terestrial

| Ukuran | Struktur | Nilai Armor Sipil | Nilai Armor Militer | Contoh |
| :-- | :-: | :-: | :-: | :-- |
| Kecil | 1-20 | 1-3 | 4-6 | Sepeda motor, sepeda motor dengan sespan, mobil kompak atau subkompak, kano, kayak, perahu dayung |
| Sedang | 21-40 | 1-6 | 7-9 | Sedan, van panel, pikap, mobil mewah, mobil sport mewah, mobil otot, limusin, sekoci, speedboat, gantole, autogyro |
| Besar | 41-60 | 4-9 | 10-12 | Truk/lori, limusin panjang, SUV, bus, pengangkut orang, pesawat pribadi, glider, kapal pesiar, tank, helikopter, kapal selam |
| Raksasa | 61-80 | 7-12 | 13-15 | Semi, pesawat penumpang, jet, kapal penjaga pantai, kapal pesiar |
| Sangat Besar | 81-100 | 10-15 | 16-18 | Kereta api, kapal pesiar besar, kapal angkatan laut |

##### Armor Kapal Luar Angkasa

| Ukuran | Struktur | Nilai Armor Sipil | Nilai Armor Militer | Contoh |
| :-- | :-: | :-: | :-: | :-- |
| Kecil | 10-50 | 4-9 | 10-12 | Pesawat tempur kursi tunggal |
| Sedang | 51-150 | 7-12 | 13-15 | Kapal pengangkut ringan, pesawat ulang-alik |
| Besar | 151-450 | 10-15 | 16-18 | Kapal pengangkut berat, kapal penjelajah |
| Raksasa | 451-1350 | 13-18 | 19-21 | Fregat pengawal, kapal penjelajah tempur ringan |
| Sangat Besar | 1351-4050 | 16-21 | 21-24 | Kapal generasi, kapal penjelajah tempur berat |
| Kolosal | 4050-12110 | 19-24 | 24-30 | Habitat orbital, stasiun tempur penghancur planet |


---
### Perisai

Perisai deflektor memberikan lapisan perlindungan tambahan bagi kendaraan yang dapat memasangnya. Perisai bekerja sedikit berbeda dengan Armor, karena sifatnya yang terkikis. Jika daya rusak yang masuk sama dengan atau kurang dari nilai perisai, maka semuanya diblokir. Jika daya rusak melebihi nilai perisai, maka kelebihannya mengurangi kekuatan perisai sebesar jumlah tersebut.

_Contohnya, pengangkut pasukan memiliki kekuatan perisai energi sebesar 12 poin. Jika pengangkut tersebut terkena laser dengan 11 daya rusak, laser itu tidak menembus dan tidak memiliki efek tambahan. Di sisi lain, jika pengangkut tersebut terkena ledakan yang menimbulkan 15 daya rusak, kelebihan tiga poin akan menurunkan kekuatan perisai menjadi 9._

Setelah kekuatan perisai deflektor turun menjadi nol, perisai itu runtuh. Sisa daya rusak apa pun akan mengenai Armor.

---
### Sistem

Setiap kali kendaraan menderita daya rusak yang menembus Armor-nya, ada peluang, setara dengan daya rusak yang menembus tersebut, bahwa Sistem vital telah terpengaruh.

_Contohnya, 10 daya rusak diterapkan pada Speedboat - kendaraan dengan 3 Armor dan 24 Struktur. Armor dihitung sebagai pelindung yang mengurangi daya rusak menjadi 7. Ini dikurangi dari 24 poin Struktur dan ada peluang 7% untuk merusak salah satu Sistem kendaraan._

Daya rusak yang dapat ditahan oleh sebuah Sistem didasarkan sepenuhnya pada ukuran kendaraan. Ini dimodelkan oleh jumlah hantaman yang dapat diterima oleh sebuah Sistem, alih-alih jumlah daya rusak yang sebenarnya. Satu Hantaman Sistem pada kendaraan Kecil akan langsung menghancurkan Sistem tersebut. Dibutuhkan dua hantaman untuk menghancurkan Sistem kendaraan berukuran Sedang, tiga untuk kendaraan Besar, dan seterusnya. Lihat [Tabel Daya Rusak Sistem](0006_Vehicles.md?id=system-Daya Rusak-table) di bawah.

Sistem yang rusak, tetapi belum hancur, akan kehilangan fungsi sebanding dengan jumlah Hantaman yang diterima - baik pengurangan persentase atau penalti Tanjakan pada tugas Sistem. Efek spesifik didasarkan pada apa yang dikendalikan oleh subsistem, sebagaimana dirinci dalam [Tabel Daya Rusak Komponen Sistem](0006_Vehicles.md?id=system-component-Daya Rusak-table) di bawah. Tergantung pada Sistem mana yang terkena, efeknya bisa sangat merusak.

_Contohnya, sebuah Land Ironclad - kendaraan Sangat Besar dengan 5 Hantaman Sistem - terkena dua kali pada Mesin akan kehilangan 40% kekuatannya dan akan mengurangi Tingkat Gerak Lambatnya sebanyak dua Tanjakan menjadi Tertatih-tatih. Demikian pula, kapal pengangkut Besar - dengan 3 Hantaman Sistem - yang terkena dua kali pada Sistem Mesin/Bahan Bakar akan mendapat penalti dua Tanjakan pada Tingkat Gerak serta penggunaan sistem Elektronik. Hantaman ketiga akan menghancurkan Sistem Mesin/Bahan Bakar dan kapalnya sekalian._


<details>

<summary>* Errata Komunitas</summary>

---

#### Daya Rusak


_Teks asli di sini tadinya lebih jauh. Ditempatkan tepat setelah bagian Sistem karena pengulangan yang tidak perlu dari paragraf sebelumnya._

- _"Daya rusak yang melebihi Armor menembus kendaraan, merusak Struktur dan mungkin berdampak pada satu atau lebih sistem. Tergantung pada ukuran kendaraan, daya rusak bisa bersifat kecil atau sangat merusak._
- _Contohnya, kendaraan Besar mungkin menerima hingga dua hantaman pada Sistem seperti Mesinnya. Hantaman ketiga secara fungsional menghancurkan Mesin tersebut. Setiap kali sistem menerima hantaman, sistem tersebut kehilangan persentase fungsinya seperti yang dijelaskan dalam kolom Kehilangan per Hantaman dari Tabel Daya Rusak Sistem di bawah atau fungsi inti (seperti Mesin, Pilot, Komunikasi, dan sebagainya) menjadi satu Tanjakan lebih sulit per hantaman yang diterima."_

_Paragraf di atas dihapus dan suntingan singkat menggantikannya dengan menyebutkan contoh efek Sistem lainnya._

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

##### Tabel Ukuran Kendaraan (dari [Ukuran, Tipe, dan Struktur Armor](0006_Vehicles.md?id=hull-Ukuran-type-and-structure))

| Ukuran | Hantaman Sistem |
| :-- | :-: |
| Kecil | 1 |
| Sedang | 2 |
| Besar | 3 |
| Raksasa | 4 |
| Sangat Besar | 5 |
| Kolosal | 6 |

_Aturan dan contoh asli tidak konsisten:_
- _"Sistem yang rusak, tetapi belum hancur, menderita kehilangan fungsi. Ini setara dengan proporsi hantaman saat ini terhadap kemampuan totalnya. Jadi, kendaraan Sangat Besar yang terkena dua kali pada Mesin akan kehilangan 40% kekuatannya (2 hantaman dari maksimum 5)"._ 
   - _Ini menunjukkan kendaraan Sangat Besar yang ditampilkan dengan 5 Hantaman Sistem seharusnya kehilangan 20% dengan setiap hantaman - tetapi tabel mengatakan 16%._
- _"Contohnya, kendaraan Besar mungkin menerima hingga tiga hantaman pada sistem seperti Mesinnya. Hantaman keempat secara fungsional menghancurkan Mesin tersebut."_ 
  - _"Ini menunjukkan - seperti halnya tabel - 25% daya rusak per Hantaman Sistem tetapi kendaraan Besar hanya dapat menerima 3 Hantaman Sistem menurut tabel yang sama._
- _Meskipun tidak tidak konsisten, Tabel Ukuran Kendaraan berlebihan; muncul lagi dalam bentuk lengkap (menambahkan kolom Kehilangan per Hantaman) hanya beberapa baris kemudian._

_Hal ini membuat sulit untuk memiliki aturan yang konsisten. Untuk mengatasi masalah ini, nilai dan contoh diubah agar sesuai dan Tabel Ukuran Kendaraan dihapus._

---

</details>


##### Tabel Daya Rusak Komponen Sistem

| 1d10 | Sistem | Hasil Rusak | Hasil Hancur |
| :-: | :-- | :-- | :-- |
| 1 | Kargo | Sejumlah harta benda atau peralatan yang disimpan di palka, sebanding dengan daya rusak, hancur. | Semua kargo hancur. |
| 2 | Komunikasi | Lemparan Komunikasi menderita satu Tanjakan tambahan kesulitan setiap kali rusak. | Kendaraan tidak dapat lagi berkomunikasi atau mengacaukan sensor musuh. |
| 3 | Kendali | Lemparan Berperahu, Mengemudi, atau Pilot menderita satu Tanjakan tambahan kesulitan setiap kali rusak; lemparan Kendali segera diperlukan. | Kendaraan tidak dapat lagi dikemudikan atau mengubah arah. |
| 4 | Mesin | Tingkat Gerak berkurang sebesar jumlah sebanding dengan daya rusak. | Kendaraan berhenti mati; pesawat jatuh. |
| 5 | Kru | Sejumlah penumpang sebanding dengan daya rusak menjadi korban. Mereka yang terkena menderita Luka Utama dan harus berhasil melakukan lemparan Ketahanan atau tewas seketika. | Penumpang kendaraan tewas. |
| 6 | Mesin / Bahan Bakar | Tingkat Gerak berkurang sebesar jumlah sebanding dengan daya rusak. Sistem elektronik satu Tanjakan lebih sulit digunakan. | Kendaraan hancur dalam ledakan dahsyat. |
| 7 | Sensor | Lemparan Sensor, Navigasi, dan Serangan Senjata menderita satu Tanjakan tambahan kesulitan setiap kali rusak. | Kendaraan menjadi buta. |
| 8 | Senjata | Sejumlah sistem senjata sebanding dengan daya rusak menjadi tidak berfungsi. | Kendaraan tidak dapat lagi menembakkan senjata. |
| 9-0 | Tidak ada | Tidak ada sistem yang terkena; hanya kerusakan Struktur. | T/A |

<details>

<summary>* Errata Komunitas</summary>

---

##### Tabel Daya Rusak Komponen Sistem (Mesin / Bahan Bakar)

_Hasil asli adalah sebagai berikut: "Tingkat Gerak Maksimum dibelah dua..." Ini bertentangan dengan aturan umum penalti daya rusak sebanding dengan kerusakan Sistem: 25% kerusakan = 25% penalti. Selain itu, aturan lengkap dalam Mythras Companion tidak menyebutkan pembelahan Tingkat Gerak ini._

_Hasilnya teks diganti dengan entri yang sama dari Sistem Mesin: "Tingkat Gerak berkurang sebesar jumlah sebanding dengan daya rusak."_

---

</details>


---
### Tingkat Gerak

Karena fisika kecepatan, akselerasi, hambatan, dan inersia (untuk menyebutkan beberapa saja) adalah masalah yang kompleks, diperlukan penyederhanaan sehingga kendaraan diberi peringkat tingkat gerak abstrak. Karakteristik Tingkat Gerak hanya boleh digunakan untuk menilai secara kasar apakah satu kendaraan dapat menyalip atau mengejar kendaraan lain.

Peringkat tingkat gerak mewakili tingkat operasional nominal kendaraan. Dalam situasi darurat, performa ini dapat ditingkatkan satu langkah, dengan risiko keausan atau kerusakan pada mesin. Meskipun tabel yang sama digunakan untuk semua jenis kendaraan, akal sehat harus diterapkan agar hanya kendaraan dari kelas yang sama yang dibandingkan. Contohnya, jika Kapal Luar Angkasa dan mobil sport keduanya memiliki tingkat akselerasi Cepat yang sama, maka sudah jelas kapal luar angkasa tersebut secara komparatif lebih cepat.

Meningkatkan Tingkat Gerak kendaraan di luar nilai standarnya dimungkinkan dengan lemparan Mengemudi yang berhasil. Biasanya, kecepatan ekstra ini hanya dapat dipertahankan untuk waktu yang singkat – tidak lebih dari 1d6 Menit sebelum kendaraan harus turun ke tingkat gerak standarnya atau berisiko merusak pembangkit tenaganya. Lemparan Mengemudi yang berhasil Mutlak memungkinkan periode kecepatan lebih tinggi ditingkatkan menjadi 1d12 Menit.

Seorang pengemudi dapat mencoba mendorong kecepatan kendaraan hingga 2 langkah, tetapi ini memerlukan lemparan Mengemudi Herkules dan maksimum kendaraan dapat mempertahankan kecepatan ini adalah 1d3 Menit: Keberhasilan Mutlak tidak akan memperpanjang durasi peningkatan kecepatan.

##### Tabel Peringkat Tingkat Gerak

| Peringkat Tingkat Gerak | Tingkat Gerak Maks |
| :-- | :-: |
| Tertatih-tatih | Sangat Besar |
| Lamban | |
| Lambat | Raksasa |
| Sedang | |
| Lembut | Besar |
| Menengah | |
| Cepat | Sedang |
| Kencang | |
| Gesit | Kecil |


---
### Sifat

Jumlah maksimum sifat yang dapat dimiliki kendaraan bergantung pada ukuran dan tipe Armor.

Setiap kendaraan memiliki sifat bawaan: mode perjalanan yang menjadi tujuan utamanya. Oleh karena itu, pesawat secara inheren memegang sifat Airborne, perahu sifat Seaborne, dan seterusnya. Sifat bawaan ini tidak dihitung terhadap jumlah sifat yang tersedia. Namun, jika kendaraan mencakup mode perjalanan kedua — kapal selam terbang misalnya, maka sifat Airborne harus diambil sebagai salah satu sifat yang tersedia.

Beberapa sifat mungkin tidak tersedia, tergantung pada tingkat teknologi latar; Games Master harus membuat keputusan sendiri mengenai sifat mana yang dapat diterapkan.

##### Tabel Alokasi Sifat Kendaraan

| Ukuran | Sifat Maks |
| :-- | :-: |
| Kecil | 1 |
| Sedang | 2 |
| Besar | 3 |
| Raksasa | 4 |
| Sangat Besar | 5 |
| Kolosal | 6 |

#### Airborne

Kendaraan mampu melakukan penerbangan atmosfer.

#### All Terrain

Sifat ini harus digunakan dengan kendaraan Darat. Kendaraan dapat melintasi medan yang tidak ramah, sulit, dan curam, menggunakan trek, suspensi canggih dan sistem penggerak, atau diferensial penggerak yang kuat.

#### Burrowing

Kendaraan dirancang untuk menggali dan membuat terowongan melalui tanah. Kendaraan dapat mencapai kedalaman maksimum setara dengan Peringkat Armor-nya x5 meter.

#### Camouflaged

Kendaraan memiliki cat kamuflase atau sensor mimetik yang memungkinkannya berbaur dengan lingkungannya. Upaya untuk melihat kendaraan secara visual lebih sulit satu Tanjakan.

#### Cargo

Kendaraan dirancang khusus untuk mengangkut kargo alih-alih penumpang. Kompartemen penumpang dibuat seminimal mungkin dengan sisa ruang kendaraan yang dapat digunakan dikhususkan untuk penampungan kargo dengan bagian, alat, dan bahkan pengkondisian lingkungan (seperti bagian freezer untuk mengangkut barang yang mudah rusak) yang sesuai. Saat bermuatan kargo, Tingkat Gerak kendaraan dua langkah lebih rendah daripada yang biasanya diizinkan oleh ukuran Armor-nya.

#### Carrier

Kendaraan dirancang khusus untuk membawa kendaraan yang lebih kecil, diawaki ringan, atau mungkin dikendalikan jarak jauh yang bersifat sipil atau militer. Setiap kendaraan yang memiliki sifat ini harus setidaknya berukuran Sangat Besar. Jumlah pesawat kecil yang dibawa dapat bervariasi berdasarkan tipe misi dan tujuan tetapi bisa sesedikit 10 hingga sebanyak Peringkat Struktur kendaraan.

#### Construction

Kendaraan dilengkapi untuk pekerjaan konstruksi berat. Semua kendaraan dengan sifat ini juga memiliki sifat All Terrain, tetapi tingkat gerak dua langkah lebih rendah daripada yang biasanya diizinkan oleh ukuran Armor-nya. Kendaraan dilengkapi dengan alat yang sesuai dengan tugas seperti jib derek, sekop penggali, gerobak sampah, dan sebagainya.

#### EMP Resistant

Kendaraan terlindung dari serangan pulsa elektromagnetik.

#### Enhanced Performance

Peringkat Tingkat Gerak kendaraan satu langkah lebih tinggi daripada maksimum untuk ukurannya.

#### Ejector Seat

Jika terjadi keadaan darurat, kursi pelontar melontarkan penumpang beberapa ratus meter ke udara, kemudian melepaskan parasut untuk memungkinkan pendaratan yang aman. Parasut bersifat opsional. Tidak disarankan untuk helikopter (Kamov Ka-52 Alligator adalah pengecualian yang patut dicatat).

#### FTL

Khusus Kapal Luar Angkasa. Kapal dilengkapi dengan mesin lebih cepat dari cahaya (baik itu hyperdrive, warp Mengemudi, generator lubang cacing, atau sejenisnya). Mesin FTL memiliki peringkat Tingkat Gerak terpisah yang pada dasarnya mengukur kecepatan kapal luar angkasa dapat melintasi satu parsek (3,26 tahun cahaya, atau 31 triliun kilometer atau 19 triliun mil), sebagai berikut:

##### Tabel Tingkat Gerak FTL

| Peringkat Tingkat Gerak | Faktor untuk Melintasi 1 Parsek |
| :-- | :-: |
| Tertatih-tatih | 10 |
| Lamban | 8 |
| Lambat | 7 |
| Sedang | 6 |
| Lembut | 5 |
| Menengah | 4 |
| Cepat | 3 |
| Kencang | 2 |
| Gesit | 1 |

Waktu faktor adalah untuk diputuskan oleh Games Master, tergantung pada seberapa maju pengembangan FTL di latar tersebut. Contohnya, faktor dasar mungkin 1 Hari, artinya kapal dengan mesin FTL Tertatih-tatih membutuhkan 10 hari untuk menyelesaikan perjalanan, sedangkan kapal dengan mesin FTL Gesit menyelesaikan perjalanan dalam 1 hari. Di tempat lain, di mana teknologi FTL jauh kurang efisien, maka waktu faktor mungkin diukur dalam bulan, alih-alih hari.

Diasumsikan bahwa kapal memiliki cadangan bahan bakar untuk melakukan perjalanan pulang, atau cara untuk mengisi bahan bakar di titik tujuan.

Asumsikan bahwa ukuran kapal luar angkasa apa pun dapat dipasangi mesin FTL, meskipun, sekali lagi, ini tergantung pada latar.

Mesin FTL tidak dapat diaktifkan dalam jarak 1,5 Satuan Astronomi dari sebuah bintang (sekitar 225 juta kilometer, atau 270 juta mil). Ini berarti kapal harus menggunakan mesin subcahaya untuk bergerak hingga jarak sekitar Mars sebelum mengaktifkan sistem FTL.

#### Ground Vehicle

Kendaraan mampu melakukan perjalanan darat.

#### Hover

Kendaraan melayang di atas tanah baik menggunakan bantalan udara atau repulsor anti-gravitasi.

#### Luxurious

Kendaraan dirancang khusus untuk membawa penumpang pada tingkat kemewahan tertentu. Ruang kargo berlebih diberikan untuk akomodasi penumpang yang mewah, kolam renang, bak mandi air panas, kru tambahan untuk memenuhi keinginan penumpang, dan sebagainya.

#### Rails

Kendaraan mengandalkan sistem rel. Kendaraan dengan sifat ini secara alami dapat mencapai peringkat Tingkat Gerak tiga langkah lebih tinggi daripada yang biasanya diizinkan oleh ukuran Armor-nya, tetapi jelas terbatas pada pergerakan di sistem rel saja.

#### Resilient

Semua sistem dapat menahan satu hantaman tambahan lebih banyak daripada yang biasanya ditentukan oleh Ukuran. Sifat ini dapat ditumpuk — jadi Resilient 2 menunjukkan bahwa sistem dapat menahan 2 hantaman lebih banyak dari biasanya dengan biaya dua poin Sifat.

#### Seaborne

Kendaraan dapat mengapung di air.

#### Spacecraft

Kendaraan disegel terhadap ruang hampa dan terlindung dari radiasi kosmik dan mungkin, tergantung pada desainnya, mampu meninggalkan dan memasuki kembali atmosfer, serta mempertahankan penerbangan di dalam atmosfer.

#### Senyap

Khusus Pesawat. Kendaraan dirancang untuk menghindari deteksi oleh radar dan sistem sensor jarak jauh lainnya. Upaya untuk melihat kendaraan menggunakan sensor elektronik lebih sulit satu Tanjakan.

#### Submersible

Kendaraan mampu menyelam di bawah permukaan laut hingga kedalaman operasional sebesar Peringkat Armor-nya x10 meter. Kedalaman runtuh — maksimum mutlak yang dapat dicapai kapal selam tanpa hancur — adalah 1,5 kali kedalaman operasionalnya.

#### Superior Handling

Kendalian kendaraan dinilai sebagai Mudah.

#### Surveillance Suite

Kendaraan memiliki komputer internal, stasiun pangkalan komunikasi, penerima untuk sinyal perangkat penyadap, dan peralatan untuk menyadap sinyal ponsel cerdas terdekat dalam jarak 100 meter.

#### Tough

Kendaraan sipil dengan sifat ini mengambil Armor-nya dari kolom Militer dan secara otomatis memiliki Struktur maksimum. Kendaraan Militer dengan Sifat ini mengambil Armor dan Struktur-nya dari baris di bawahnya.

#### Tractor Beam

Khusus Kapal Luar Angkasa. Kapal dipasangi sinar traktor yang dapat menjerat dan menarik kendaraan dengan peringkat Armor hingga dua langkah lebih rendah dari miliknya. Jadi, kapal luar angkasa Raksasa dapat menarik dan menahan Armor hingga ukuran Sedang.

#### VTOL

Lepas landas/pendaratan vertikal. Sifat ini melekat pada helikopter dan kendaraan serupa yang menggunakan kombinasi rotor untuk menghasilkan daya angkat. Saat diterapkan pada pesawat sayap tetap, ini menunjukkan penggunaan pendorong tetap atau yang dapat disejajarkan untuk mengendalikan sikap udara, pendakian, dan penurunan.

#### Waterborne

Kendaraan mendorong dirinya sendiri menggunakan kaki berengsel. Kendaraan berjalan dibatasi pada Tingkat Gerak Lembut, berapapun Ukurannya. Namun, Walker dapat dibangun hingga ketinggian yang mungkin tidak stabil bagi kendaraan yang dilengkapi dengan cara penggerak lainnya.

Kendaraan ini mampu melakukan pergerakan bawah air.

#### Weaponized

Kendaraan telah diadaptasi untuk menampung persenjataan. Sistem senjata dibahas di bawah di bagian [Senjata](0006_Vehicles.md?id=Senjata).


---
## Senjata

Biasanya, hanya Armor militer yang dirancang untuk menampung persenjataan (titik keras, penyimpanan amunisi, sistem kendali). Sifat 'Weaponized' dapat diambil untuk kendaraan sipil yang mungkin memiliki kebutuhan senjata.

Jumlah maksimum sistem senjata yang dapat didukung kendaraan setara dengan 1/10 dari Poin Strukturnya (jadi kendaraan dengan 40 Struktur dapat mendukung 4 sistem senjata, jika kendaraan militer, atau kendaraan sipil yang di-Weaponized).

Sistem senjata bergantung pada Ukuran kendaraan. Tipe sistem senjata maksimum untuk Ukuran yang berbeda ditunjukkan dalam tabel di bawah.


##### Tabel Senjata berdasarkan Ukuran

| Ukuran | Terestrial | Kapal Luar Angkasa |
| :-- | :-- | :-- |
| Kecil | Senjata Ringan (contoh: Senapan Serbu) | Senjata Sedang (contoh: Senapan Mesin, Peluncur Roket) |
| Sedang | Senjata Sedang (contoh: Senapan Mesin, Peluncur Roket) | Senjata Menara/Berat (contoh: Senapan Mesin Berat Tertaut, Mini-Gun) |
| Besar | Senjata Menara/Berat (contoh: Senapan Mesin Berat Tertaut, Mini-Gun) | Baterai Senjata (contoh: Artileri Medan) |
| Raksasa | Baterai Senjata (contoh: Artileri Medan) | Senjata Canggih (contoh: Sistem Rudal) |
| Sangat Besar | Senjata Canggih (contoh: Sistem Rudal) | Senjata Terpasang Spinal (satu saja) |
| Kolosal | T/A | Senjata Terpasang Spinal (hingga 3) |

##### Statistik Senjata Contoh
 
| Senjata | Daya Rusak | Jarak | Laju Tembak | Amunisi/Muatan |
| :-- | :-: | :-: | :-: | :-: |
| Meriam 50 inci | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling Gun | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Roket | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Rudal/Torpedo Sedang | 6d10 | Jarak maks 200km | 1 | 1/5 |
| Rudal Besar/Jelajah | 6d10+10 | Jarak maks 1000km | 1 | 1/10 |
| Meriam Laser/Plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Meriam Laser/Plasma Berat | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Baterai Artileri | 5d6+6 | Jarak maks 50km | 1 | 1/5 |
| Baterai Dudukan Spinal | 10d6+6 | Jarak maks 20000km | 1 | 1/10 |

_Jarak diberikan dalam meter dan kilometer._

_Laju tembak adalah untuk tembakan tunggal, semi-otomatis, dan otomatis penuh._

_Amunisi adalah kemampuan menembak sebelum perlu diisi ulang. Muatan adalah waktu isi ulang dalam Putaran Tarung, dengan asumsi kru penuh tersedia._

---
## Kendalian dan Manuver

Manuver menghindar atau mendadak memerlukan lemparan Mengemudi/Pilot yang berhasil untuk memastikan pengemudi atau pilot tetap memegang kendali kendaraan. Sebagian besar kendaraan dirancang dan dibangun untuk menahan tekanan dan ketegangan sesekali, tetapi Games Master dapat memutuskan bahwa manuver tertentu memerlukan lemparan pada tingkat kesulitan yang lebih tinggi, tergantung seberapa ambisius manuver tersebut. Kegagalan berarti kendali atas kendaraan hilang: lempar pada tabel Kehilangan Kendali.

Perhatikan bahwa Tabel Kehilangan Kendali hanya berlaku untuk kendaraan terestrial. Efek serupa dapat diterapkan pada kendaraan udara dan luar angkasa, tetapi Games Master perlu menyesuaikan alasan untuk efek spesifik tersebut. Contohnya, sebuah pesawat, alih-alih tergelincir, mungkin mengalami putaran.

Selain itu, kendalian bawaan kendaraan mungkin memiliki dampak tambahan pada lemparan Mengemudi. Kendalian bisa Mudah, Standar, Sulit, Tangguh, atau Herkules dan menentukan titik awal untuk lemparan Mengemudi saat melakukan manuver. Tingkat kesulitan untuk manuver tersebut kemudian diterapkan pada kendalian untuk menentukan kesulitan akhir.

Contohnya, sepeda motor performa tinggi memiliki penstabil giro internal yang memberikannya Kendalian Mudah. Pengemudi ingin melakukan putaran skid 180 derajat untuk menghindari pengejar, manuver yang dinilai Games Master sebagai satu tingkat kesulitan tambahan. Oleh karena itu, pengendara harus melakukan lemparan Mengemudi pada Standar, bukan Mudah. Jika dia mencoba manuver yang sama pada sepeda motor yang tidak distabilkan, lemparan Mengemudi akan menjadi Sulit.

Superior Handling adalah sebuah Sifat. Jika kendaraan tidak memiliki sifat tersebut sebagai bagian dari deskripsinya, maka standarnya adalah kendalian Standar untuk kendaraan berukuran Besar dan di bawahnya. Kendaraan Raksasa dan Sangat Besar secara inheren memiliki sifat Kendalian Tangguh dan Herkules, dan Games Master bebas untuk memutuskan bahwa manuver tertentu tidak mungkin dicapai karena ukuran kendaraan tersebut.

##### Tabel Kehilangan Kendali

| 1d100 | Hasil |
| :-: | :-- |
| 01-25 | Berbelok. Kehilangan kendali bersifat sementara. Kendaraan menurunkan tingkat geraknya 1 langkah selama 5 detik. |
| 26-40 | Tergelincir. Pengemudi harus berjuang untuk menjaga kendaraan tetap terkendali. Kendaraan menurunkan tingkat geraknya 2 langkah selama 10 detik. |
| 41-50 | Tergelincir Parah. Kendaraan berakhir menghadap ke arah yang salah dan berhenti selama 15 detik. |
| 51-60 | Terguling. Kendaraan tergelincir dan terguling, menderita 3d10 kerusakan pada Strukturnya. Penumpang harus berhasil melakukan lemparan Ketahanan atau menderita 1d10 kerusakan pada 1d3 Lokasi Bentur. |
| 61-70 | Terguling Parah. Seperti di atas, tetapi kendaraan menderita 3d10+10 kerusakan dan Penumpang menerima 1d10 kerusakan bahkan jika lemparan Ketahanan berhasil, dan 2d10 jika gagal. |
| 71-80 | Hancur Total. Seperti di atas tetapi kendaraan berkurang menjadi 0 Struktur. Penumpang menderita kerusakan yang sama seperti Terguling Parah. |
| 81-90 | Ledakan. Seperti di atas tetapi sistem bahan bakar kendaraan menyala dan meledak dalam 1d20+10 detik. Jika tidak dapat menjauh, penumpang menderita 1d6 kerusakan bakar tambahan pada 1d6 lokasi. |
| 91-98 | Ledakan Segera. Seperti di atas tetapi ledakan terjadi segera. |
| 99-00 | Tabrakan Katastropik. Penumpang harus berhasil melempar Ketahanan atau tewas seketika. Kerusakan seperti Hancur Total tetap diderita. |


---
## Contoh Kendaraan

---

### Kendaraan Darat

#### Interceptor

Mobil mewah yang sudah dimodifikasi, mobil sport, atau sejenisnya, mobil ini dibangun untuk melaju kencang dan memberikan perlawanan yang sepadan dalam pertempuran. Ini adalah jenis kendaraan yang dipikirkan orang ketika seseorang berkata, "mobil mata-mata."

| Interceptor | |
| :- | :- |
| **Ukuran / Tipe** | Sedang Militer |
| **Armor** | 6 |
| **Struktur** | 40 |
| **Sistem** | 2 |
| **Tingkat Gerak** | Cepat |
| **Kendalian** | Mudah |
| **Sifat** | [Ejector Seat](0006_Vehicles.md?id=ejector-seat), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dispenser Tumpahan Minyak, Dispenser Asap, Senapan Mesin Sedang Tertaut Ganda (2d6+3) |

<br>

---

#### Pursuit Motorcycle

Sepeda motor yang ringan dan cepat untuk pengejaran cepat, Pursuit Motorcycle membawa kejutan – baik sepasang senapan mesin tertaut atau dua roket.

| Pursuit Motorcycle | |
| :- | :- |
| **Ukuran / Tipe** | Kecil Sipil |
| **Armor** | 2 |
| **Struktur** | 12 |
| **Sistem** | 1 |
| **Tingkat Gerak** | Cepat |
| **Kendalian** | Mudah |
| **Sifat** | [Superior Handling](0006_Vehicles.md?id=superior-handling), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dua Roket (4d6) atau Senapan Mesin Ringan Tertaut Ganda (2d6) |

<br>

---

#### Sedan Car

Sedan 4 pintu standar yang menampilkan ruang yang cukup untuk menampung pengemudi dan tiga penumpang dengan nyaman. Mengorbankan ruang kargo untuk menggabungkan surveilans.

| Sedan Car | |
| :- | :- |
| **Ukuran / Tipe** | Sedang Sipil |
| **Armor** | 4 |
| **Struktur** | 25 |
| **Sistem** | 2 |
| **Tingkat Gerak** | Menengah |
| **Kendalian** | Standar |
| **Sifat** | [Unobtrusive](0006_Vehicles.md?id=unobtrusive), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite) |
| **Senjata** | Tidak ada |

<br>

---

#### Submersible Car

Mobil dua orang yang dapat beralih ke mode air atau kapal selam untuk bepergian di atas atau di bawah air. Dilengkapi dengan torpedo yang dipasang di depan dan rudal permukaan-ke-udara yang dipasang di atas.

| Submersible Car | |
| :- | :- |
| **Ukuran / Tipe** | Sedang Sipil |
| **Armor** | 6 |
| **Struktur** | 25 |
| **Sistem** | 2 |
| **Tingkat Gerak** | Cepat |
| **Kendalian** | Standar |
| **Sifat** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Roket (5d6), Torpedo (4d10) |

<br>

---

#### Surveillance Van

Van biasa tanpa tanda yang menampung tim agen dan serangkaian peralatan perekaman audio-visual.

| Surveillance Van | |
| :- | :- |
| **Ukuran / Tipe** | Besar Sipil |
| **Armor** | 9 |
| **Struktur** | 60 |
| **Sistem** | 3 |
| **Tingkat Gerak** | Lembut |
| **Kendalian** | Standar |
| **Sifat** | [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Tough](0006_Vehicles.md?id=tough) |
| **Senjata** | Tidak ada |

<br>

---

#### Tactical Support Vehicle

Pikap atau jip dengan ruang untuk kru dua orang di kabin dan penembak berdiri di bagian bak datar yang mengoperasikan Senapan Mesin Sedang yang dipasang berputar.

| Tactical Support Vehicle | |
| :- | :- |
| **Ukuran / Tipe** | Sedang Sipil |
| **Armor** | 6 |
| **Struktur** | 30 |
| **Sistem** | 2 |
| **Tingkat Gerak** | Menengah |
| **Kendalian** | Standar |
| **Sifat** | [All Terrain](0006_Vehicles.md?id=all-terrain), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Senapan Mesin Sedang Terpasang (2d6) |


<br>

---

### Kapal Air

#### Speedboat

Speedboat biasa, dipersenjatai dengan dispenser ranjau yang dipasang di belakang.

| Speedboat | |
| :- | :- |
| **Ukuran / Tipe** | Sedang Sipil |
| **Armor** | 3 |
| **Struktur** | 24 |
| **Sistem** | 2 |
| **Tingkat Gerak** | Cepat |
| **Kendalian** | Standar |
| **Sifat** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dispenser Ranjau (5d6) |

<br>

#### Yacht

Jenis kapal pesiar mewah yang mungkin dimiliki seorang oligarki. Kemungkinan dilengkapi dengan perangkat surveilans untuk melindungi dari musuh yang mencoba melakukan hal buruk.

| Yacht | |
| :- | :- |
| **Ukuran / Tipe** | Raksasa Sipil |
| **Armor** | 10 |
| **Struktur** | 75 |
| **Sistem** | 4 |
| **Tingkat Gerak** | Lambat |
| **Kendalian** | Tangguh |
| **Sifat** | [Luxurious](0006_Vehicles.md?id=luxurious), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Waterborne](0006_Vehicles.md?id=waterborne) |
| **Senjata** | Tidak ada |


<br>

---

### Pesawat/Kapal Luar Angkasa

#### Dirigible (Kapal Udara Sipil)

Mirip dengan Hindenburg, kapal udara transkontinental kelas ini (dan lainnya di kelasnya) memiliki panjang 245 meter dan membutuhkan kru 40 hingga 61 orang. Biasanya dapat membawa 50 hingga 72 penumpang dalam akomodasi mewah.

| Dirigible | |
| :- | :- |
| **Ukuran / Tipe** | Sangat Besar Sipil |
| **Armor** | 10 |
| **Struktur** | 85 |
| **Sistem** | 5 |
| **Tingkat Gerak** | Tertatih-tatih |
| **Kendalian** | Herkules |
| **Sifat** | [Airborne](0006_Vehicles.md?id=airborne), [Luxurious](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Perisai** | Tidak ada |
| **Senjata** | Tidak ada |

<br>

---

#### Assault Helicopter

Helikopter Serbu tradisional menggunakan teknologi surveilans canggih untuk mencegat sinyal telepon dan internet nirkabel, serta melacak individu dan kendaraan bahkan dalam kegelapan, melalui FLIR. Upaya untuk menghindari pelacak melalui Senyap adalah Tangguh.

| Assault Helicopter | |
| :- | :- |
| **Ukuran / Tipe** | Besar Militer |
| **Armor** | 11 |
| **Struktur** | 50 |
| **Sistem** | 3 |
| **Tingkat Gerak** | Menengah |
| **Kendalian** | Mudah |
| **Sifat** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Senyap](0006_Vehicles.md?id=Senyap), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Perisai** | Tidak ada |
| **Senjata** | 1 Gatling Gun (3d6), 4 Roket (5d6) |

<br>

---

#### Multi-Role Fighter

Pesawat tempur berbasis darat dua kursi ini (serupa tipenya dengan De Havilland Mosquito) dikenal dengan performa dan keserbagunaannya. Ruang bomnya mampu membawa dua bom seberat 250 lb. (perlakukan sebagai rudal sedang dengan jarak 0) atau satu torpedo.

| Multi-Role Fighter | |
| :- | :- |
| **Ukuran / Tipe** | Besar Militer |
| **Armor** | 10 |
| **Struktur** | 45 |
| **Sistem** | 3 |
| **Tingkat Gerak** | Menengah |
| **Kendalian** | Standar |
| **Sifat** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance) |
| **Perisai** | Tidak ada |
| **Senjata** | 4 Gatling Gun terpasang di hidung (4d6+3), 1 ruang bom (6d10 - lihat deskripsi) |

<br>

---

#### Interstellar Freighter (Transportasi Ringan Berteknologi Tinggi)

Transportasi ringan ini membutuhkan kru minimal hanya dua orang, dengan ruang untuk hingga empat penumpang tambahan. Versi stok standar dicatat di sini, namun banyak pemilik akan menerapkan "modifikasi khusus" mereka sendiri seperti ruang kargo tersembunyi, Enhanced Performance, Superior Handling, EMP Resistance, Senyap, dan sebagainya.

| Interstellar Freighter | |
| :- | :- |
| **Ukuran / Tipe** | Sedang Sipil Kapal Luar Angkasa |
| **Armor** | 10 |
| **Struktur** | 80 |
| **Sistem** | 2 |
| **Tingkat Gerak** | Menengah (Faktor Parsek 3) |
| **Kendalian** | Standar |
| **Sifat** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Space Craft](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Perisai** | 8 |
| **Senjata** | 2x Menara Meriam Laser Quad-terpasang (5d6) |


<br>

---

#### General Contact Unit (Kapal Luar Angkasa Berteknologi Ultra Tinggi)

Kapal luar angkasa berteknologi sangat tinggi ini adalah representasi fisik dari Pikiran buatan yang sangat canggih, yang berbentuk rangkaian modul terhubung medan sepanjang dua kilometer. Modul-modul tersebut memiliki tujuan individu dan mencakup habitat, fasilitas konstruksi, area kargo, pengolahan makanan, kompleks rekreasi, ruang hanggar, dan bahkan beberapa unit rahasia yang jarang, atau bahkan tidak pernah, dibahas oleh kecerdasan kapal. Kapal ini tidak membutuhkan kru manusia, tetapi dapat mendukung populasi penumpang hingga 100.000 dengan mudah. Banyak penumpang lahir dan meninggal di dalam General Contact Unit: banyak yang bersifat transisi, datang dan pergi sesuka mereka.

| General Contact Unit | |
| :- | :- |
| **Ukuran / Tipe** | Kolosal Sipil Kapal Luar Angkasa |
| **Armor** | 20 |
| **Struktur** | 10.000 |
| **Sistem** | 6 |
| **Tingkat Gerak** | Menengah (Faktor Parsek 4. Pada tingkat teknologi ini, satu Faktor setara 1 jam) |
| **Kendalian** | Tangguh |
| **Sifat** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Carrier](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxurious](0006_Vehicles.md?id=luxurious), [Space Craft](0006_Vehicles.md?id=space-craft), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Tractor Beam](0006_Vehicles.md?id=tractor-beam) |
| **Perisai** | 30 |
| **Senjata** | Tidak ada yang ingin dibahasnya |

<br>