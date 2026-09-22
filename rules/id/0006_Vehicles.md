# Kendaraan

Kendaraan dalam _Mythras Imperative_ diperlakukan dengan cara semi-abstrak. Pada dasarnya, kendaraan adalah alat latar belakang yang digunakan untuk membawa Karakter dari titik A ke B, dengan sedikit kebutuhan akan deskripsi detail atau statistik. Namun, sesekali, Games Master akan membutuhkan detail kendaraan jika perlu untuk merepresentasikannya dalam situasi pengejaran atau pertempuran.

Aturan dalam bagian ini memungkinkan representasi sebagian besar jenis kendaraan, namun dengan cara abstrak yang ditujukan untuk memungkinkan fleksibilitas dan meningkatkan penceritaan. Kapal luar angkasa dan pesawat ruang angkasa sedikit berbeda, meskipun didasarkan pada prinsip yang serupa.

---
## Statistik

Semua kendaraan dijelaskan dalam hal Struktur, Hull, Kecepatan, Sistem, Sifat, dan Perisai (jika ada dalam latar).

- **[Ukuran](0006_Vehicles.md?id=vehicle-Ukuran-table):** Semua kendaraan memiliki satu dari enam peringkat Ukuran yang menentukan nilai atau rentang dari karakteristik lainnya. Karena ukuran intrinsik yang lebih besar dan lingkungan ruang angkasa yang memusuhi, kapal luar angkasa memiliki rentang nilai sendiri.
- **[Hull](0006_Vehicles.md?id=terrestrial-hulls):** Merepresentasikan Armor Points.
- **[Struktur](0006_Vehicles.md?id=terrestrial-hulls):** Merepresentasikan Hit Points kendaraan.
- **[Perisai](0006_Vehicles.md?id=shields):** Dalam latar dengan teknologi manipulasi energi canggih, perisai mungkin ada yang melindungi kendaraan, tetapi dapat terkikis di bawah serangan terus-menerus.
- **[Sistem](0006_Vehicles.md?id=systems):** Merepresentasikan komponen vital kendaraan, termasuk pembangkit tenaga, bagian kru, dan sebagainya.
- **[Kecepatan](0006_Vehicles.md?id=speed):** Setiap kendaraan memiliki peringkat Kecepatan dasar.
- **[Sifat](0006_Vehicles.md?id=traits):** Kendaraan juga dapat memiliki satu atau lebih Sifat. Sifat, seperti Kemampuan yang ditetapkan untuk Makhluk dalam aturan _Mythras Imperative_, atau Sifat Gaya Tarung, menawarkan deskripsi permainan dan keuntungan tambahan, yang mencerminkan sifat kendaraan tersebut.
- **[Senjata](0006_Vehicles.md?id=Senjata):** Seperti Sifat, kendaraan dapat dilengkapi dengan senjata sesuai dengan latar yang diizinkan. Beberapa contoh dan nilai yang disarankan dirinci di bawah ini.


---
### Ukuran, Tipe, dan Struktur Hull

Ukuran dan tujuan kendaraan memengaruhi ketebalan hull dan ketahanan struktur internalnya. Sebuah sepeda motor, misalnya, memiliki hull minimal, yang dibangun demi kecepatan dan kelincahan. Land Ironclad (monster lapis baja raksasa beroda atau beralas rantai yang ditenagai oleh mesin uap atau diesel), sebagai kendaraan jauh lebih besar yang dirancang untuk medan perang, memiliki hull yang jauh lebih besar. Ukuran perbandingan hull (dan berapa banyak hantaman dari senjata yang biasanya dapat mereka tahan), diringkas pada tabel Ukuran Kendaraan dan Hull di bawah ini.

Setiap kali kendaraan mengalami bahaya, daya rusak yang masuk dikurangi oleh nilai Hull-nya. Daya rusak yang tersisa dikurangi dari poin Struktur kendaraan dan memiliki peluang persentase, setara dengan daya rusak penembus, untuk memengaruhi Sistem. Jika kendaraan pernah berkurang hingga nol Struktur, kendaraan tersebut entah hancur total atau rusak parah sehingga harus dibuang.

##### Hull Terestrial 

| Ukuran | Struktur | Nilai Hull Sipil | Nilai Hull Militer | Contoh |
| :-- | :-: | :-: | :-: | :-- |
| Kecil | 1-20 | 1-3 | 4-6 | Sepeda motor, sepeda motor sespan, mobil kompak atau subkompak, kano, kayak, perahu dayung |
| Sedang | 21-40 | 1-6 | 7-9 | Sedan, van panel, pikap, mobil mewah, mobil sport mewah, mobil otot, limosin, sekoci, perahu cepat, gantole, autogyro |
| Besar | 41-60 | 4-9 | 10-12 | Truk/lori, limosin panjang, SUV, bus, kendaraan pengangkut penumpang, pesawat pribadi, glider, kapal pesiar santai, tank, helikopter, kapal selam |
| Raksasa | 61-80 | 7-12 | 13-15 | Truk semi, pesawat penumpang, jet, kapal penjaga pantai, yacht |
| Masif | 81-100 | 10-15 | 16-18 | Kereta, kapal pesiar, kapal angkatan laut |

##### Hull Kapal Luar Angkasa 

| Ukuran | Struktur | Nilai Hull Sipil | Nilai Hull Militer | Contoh |
| :-- | :-: | :-: | :-: | :-- |
| Kecil | 10-50 | 4-9 | 10-12 | Pesawat tempur kursi tunggal |
| Sedang | 51-150 | 7-12 | 13-15 | Freighter ringan, pesawat ulang-alik |
| Besar | 151-450 | 10-15 | 16-18 | Freighter berat, kapal penjelajah |
| Raksasa | 451-1350 | 13-18 | 19-21 | Frigat pengawal, kapal tempur ringan |
| Masif | 1351-4050 | 16-21 | 21-24 | Kapal generasi, kapal tempur berat |
| Kolosal | 4050-12110 | 19-24 | 24-30 | Habitat orbit, stasiun tempur penghancur planet |


---
### Perisai

Perisai deflektor memberikan lapisan perlindungan tambahan bagi kendaraan yang dapat memasangnya. Perisai bekerja sedikit berbeda dari Hull, karena sifatnya yang terkikis. Jika daya rusak yang masuk sama dengan atau kurang dari nilai perisai, maka semuanya diblokir. Jika daya rusak melebihi nilai perisai, maka kelebihannya mengurangi kekuatan perisai sebesar jumlah tersebut.

_Contohnya, sebuah pengangkut pasukan memiliki kekuatan perisai energi sebesar 12 poin. Jika pengangkut tersebut terkena laser dengan 11 daya rusak, laser itu tidak menembus dan tidak memiliki efek tambahan. Di sisi lain, jika pengangkut tersebut terkena ledakan yang memberikan 15 daya rusak, kelebihan tiga poin akan menurunkan kekuatan perisai menjadi 9._

Setelah kekuatan perisai deflektor turun menjadi nol, perisai itu runtuh. Daya rusak yang tersisa berlanjut ke hull.

---
### Sistem

Setiap kali kendaraan mengalami daya rusak yang menembus hull-nya, ada peluang, setara dengan daya rusak penembus, bahwa Sistem vital telah terpengaruh.

_Contohnya, 10 daya rusak diterapkan pada Perahu Cepat - kendaraan dengan 3 Hull dan 24 Struktur. Hull dihitung sebagai Armor yang mengurangi daya rusak menjadi 7. Ini dihapus dari 24 poin Struktur dan ada 7% peluang untuk merusak salah satu Sistem kendaraan._

Daya rusak yang dapat ditahan oleh Sistem didasarkan murni pada ukuran kendaraan. Ini dimodelkan dengan jumlah hantaman yang dapat diterima Sistem, alih-alih jumlah daya rusak sebenarnya. Satu Hantaman Sistem pada kendaraan Kecil akan langsung menghancurkan Sistem tersebut. Dibutuhkan dua hantaman untuk menghancurkan Sistem kendaraan berukuran Sedang, tiga untuk kendaraan Besar, dan seterusnya. Lihat [Tabel Daya Rusak Sistem](0006_Vehicles.md?id=system-Daya Rusak-table) di bawah.

Sistem yang rusak, tetapi belum hancur, mengalami kehilangan fungsi yang proporsional dengan jumlah Hantaman yang diterima - entah pengurangan persentase atau penalti Tanjakan pada tugas Sistem. Efek spesifik didasarkan pada apa yang dikendalikan oleh subsistem, sebagaimana dirinci dalam [Tabel Daya Rusak Komponen Sistem](0006_Vehicles.md?id=system-component-Daya Rusak-table) di bawah. Tergantung pada Sistem mana yang terkena hantaman, efeknya bisa sangat fatal.

_Contohnya, Land Ironclad - kendaraan Masif dengan 5 Hantaman Sistem - terkena dua kali di bagian Penggerak akan kehilangan 40% kekuatannya dan akan mengurangi Kecepatan Lambatnya dua Tanjakan menjadi Terbata-bata. Demikian pula, freighter Besar - dengan 3 Hantaman Sistem - yang menerima dua hantaman pada Sistem Mesin/Bahan Bakar akan mendapat penalti dua Tanjakan pada Kecepatan serta pada penggunaan sistem Elektronik. Hantaman ketiga akan menghancurkan Sistem Mesin/Bahan Bakar dan kapal itu sendiri._


<details>

<summary>* Erata Komunitas</summary>

---

#### Daya Rusak


_Teks asli di sini awalnya berjauhan. Ditempatkan tepat setelah bagian Sistem, ini mengulangi paragraf sebelumnya secara tidak perlu._

- _"Daya rusak yang melebihi Hull menembus kendaraan, merusak Struktur dan mungkin berdampak pada satu atau lebih sistem. Tergantung pada ukuran kendaraan, daya rusak bisa bersifat minor atau katastropik._
- _Contohnya, kendaraan Besar dapat menerima hingga dua hantaman pada Sistem seperti Penggeraknya. Hantaman ketiga secara fungsional menghancurkan Penggerak. Setiap kali sistem menerima hantaman, sistem entah kehilangan persentase fungsinya seperti yang dijelaskan dalam kolom Kehilangan per Hantaman pada Tabel Daya Rusak Sistem di bawah atau fungsi inti (seperti Penggerak, Pilot, Komunikasi, dan sebagainya) menjadi satu Tanjakan kesulitan lebih keras per hantaman yang dialami."_

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
| Masif | 5 | 1 Tanjakan atau 20% |
| Kolosal | 6 | 1 Tanjakan atau 16% |


<details>

<summary>* Erata Komunitas</summary>

---

##### Tabel Daya Rusak Sistem (Asli) 

| Ukuran | Hantaman Sistem | Kehilangan per Hantaman |
| :-- | :-: | :-- |
| Kecil | 1 | 1 Tanjakan atau 50% |
| Sedang | 2 | 1 Tanjakan atau 33% |
| Besar | 3 | 1 Tanjakan atau 25% |
| Raksasa | 4 | 1 Tanjakan atau 20% |
| Masif | 5 | 1 Tanjakan atau 16% |
| Kolosal | 6 | 1 Tanjakan atau 10% |

##### Tabel Ukuran Kendaraan (dari [Ukuran, Tipe, dan Struktur Hull](0006_Vehicles.md?id=hull-Ukuran-type-and-structure))

| Ukuran | Hantaman Sistem |
| :-- | :-: |
| Kecil | 1 |
| Sedang | 2 |
| Besar | 3 |
| Raksasa | 4 |
| Masif | 5 |
| Kolosal | 6 |

_Aturan dan contoh asli tidak konsisten:_
- _"Sistem yang rusak, tetapi belum hancur, mengalami penurunan fungsionalitas. Ini setara dengan proporsi hantaman saat ini terhadap kemampuan totalnya. Jadi, kendaraan Masif yang terkena dua kali di Penggerak akan kehilangan 40% kekuatannya (2 hantaman dari maksimum 5)"._ 
   - _Ini menyarankan kendaraan Masif yang ditampilkan dengan 5 Hantaman Sistem seharusnya kehilangan 20% dengan setiap hantaman - tetapi tabel mengatakan 16%._
- _"Contohnya, kendaraan Besar dapat menerima hingga tiga hantaman pada sistem seperti Penggeraknya. Hantaman keempat secara fungsional menghancurkan Penggerak."_ 
  - _"Ini menyarankan - seperti halnya tabel - 25% daya rusak per Hantaman Sistem tetapi Kendaraan Besar hanya dapat menerima 3 Hantaman Sistem menurut tabel yang sama._
- _Meskipun tidak tidak konsisten, Tabel Ukuran Kendaraan berlebihan; muncul lagi dalam bentuk yang lebih lengkap (menambahkan kolom Kehilangan per Hantaman) hanya beberapa baris kemudian._

_Hal ini mempersulit untuk memiliki aturan yang konsisten. Untuk mengatasi masalah ini, nilai dan contoh diubah agar sesuai dan Tabel Ukuran Kendaraan dihapus._

---

</details>


##### Tabel Daya Rusak Komponen Sistem 

| 1d10 | Sistem | Hasil Rusak | Hasil Hancur |
| :-: | :-- | :-- | :-- |
| 1 | Kargo | Sejumlah harta benda atau peralatan yang tersimpan di ruang kargo, proporsional dengan daya rusak, hancur. | Semua kargo hancur. |
| 2 | Komunikasi | Lemparan Komunikasi menderita satu Tanjakan kesulitan tambahan setiap kali rusak. | Kendaraan tidak dapat lagi berkomunikasi atau mengelabui sensor musuh. |
| 3 | Kontrol | Lemparan Berperahu, Mengemudi, atau Pilot menderita satu Tanjakan kesulitan tambahan setiap kali rusak; lemparan Kontrol segera diperlukan. | Kendaraan tidak dapat lagi disetir atau mengubah arah. |
| 4 | Penggerak | Kecepatan berkurang sebesar jumlah yang proporsional dengan daya rusak. | Kendaraan berhenti total; pesawat jatuh. |
| 5 | Kru | Sejumlah penumpang yang proporsional dengan daya rusak menjadi korban. Mereka yang terkena menderita Luka Berat dan harus berhasil dalam lemparan Ketahanan atau tewas seketika. | Penumpang kendaraan tewas. |
| 6 | Mesin / Bahan Bakar | Kecepatan berkurang sebesar jumlah yang proporsional dengan daya rusak. Sistem elektronik satu Tanjakan kesulitan lebih sulit digunakan. | Kendaraan hancur dalam ledakan dahsyat. |
| 7 | Sensor | Lemparan Sensor, Navigasi, dan serangan Senjata menderita satu Tanjakan kesulitan tambahan setiap kali rusak. | Kendaraan menjadi buta. |
| 8 | Senjata | Sejumlah sistem senjata yang proporsional dengan daya rusak menjadi tidak beroperasi. | Kendaraan tidak dapat lagi menembakkan senjata. |
| 9-0 | Tidak ada | Tidak ada sistem yang terkena; hanya kerusakan Struktur. | T/A |

<details>

<summary>* Erata Komunitas</summary>

---

##### Tabel Daya Rusak Komponen Sistem (Mesin/Bahan Bakar)

_Hasil aslinya adalah sebagai berikut: "Kecepatan Maksimum dibelah dua..." Ini bertentangan dengan aturan umum penalti daya rusak yang proporsional dengan kerusakan Sistem: 25% kerusakan = 25% penalti. Selain itu, aturan lengkap dalam Mythras Companion tidak menyebutkan pembelahan Kecepatan ini._

_Akibatnya, teks diganti dengan entri yang sama dari Sistem Penggerak: "Kecepatan berkurang sebesar jumlah yang proporsional dengan daya rusak."_

---

</details>


---
### Kecepatan

Karena fisika kecepatan, akselerasi, hambatan, dan inersia (untuk menyebutkan beberapa saja) adalah masalah yang kompleks, beberapa penyederhanaan diperlukan sehingga kendaraan diberikan peringkat kecepatan abstrak. Karakteristik Kecepatan hanya boleh digunakan untuk menilai secara kasar apakah satu kendaraan dapat menyusul atau mengejar kendaraan lain.

Peringkat kecepatan mewakili tingkat operasional nominal kendaraan. Dalam situasi darurat, performa ini dapat ditingkatkan satu langkah, dengan risiko keausan atau kerusakan pada mesin. Meskipun tabel yang sama digunakan untuk semua tipe kendaraan, akal sehat harus diterapkan agar hanya kendaraan dari kelas yang sama yang dibandingkan. Contohnya, jika Kapal Luar Angkasa dan mobil sport sama-sama memiliki tingkat akselerasi Cepat, maka sudah jelas kapal luar angkasa tersebut secara komparatif lebih cepat.

Meningkatkan Kecepatan kendaraan di luar nilai standarnya dimungkinkan dengan lemparan Mengemudi yang berhasil. Biasanya, kecepatan ekstra ini hanya dapat bertahan untuk waktu yang singkat – tidak lebih dari 1d6 Menit sebelum kendaraan harus turun ke kecepatan standarnya atau berisiko merusak pembangkit tenaganya. Lemparan Mengemudi Kegagalan Mutlak memungkinkan periode kecepatan yang lebih tinggi ditingkatkan menjadi 1d12 Menit.

Seorang pengemudi dapat mencoba mendorong kecepatan kendaraan sebanyak 2 langkah, tetapi ini memerlukan lemparan Mengemudi Herkules dan kecepatan maksimum yang dapat dipertahankan kendaraan adalah 1d3 Menit: Keberhasilan Mutlak tidak akan memperpanjang durasi kecepatan yang meningkat.

##### Tabel Peringkat Kecepatan 

| Peringkat Kecepatan | Kecepatan Maks Untuk |
| :-- | :-: |
| Terbata-bata | Masif |
| Lamban | |
| Lambat | Raksasa |
| Biasa | |
| Lembut | Besar |
| Sedang | |
| Cepat | Sedang |
| Kencang | |
| Gesit | Kecil |


---
### Sifat

Jumlah maksimum sifat yang dapat dimiliki kendaraan bergantung pada ukuran dan tipe hull.

Setiap kendaraan memiliki sifat bawaan: mode perjalanan yang menjadi tujuan utama perancangannya. Oleh karena itu, pesawat secara inheren memegang sifat Lintas Udara, perahu sifat Lintas Laut, dan seterusnya. Sifat bawaan ini tidak dihitung terhadap jumlah sifat yang tersedia. Namun, jika kendaraan mencakup mode perjalanan kedua — kapal selam terbang misalnya, maka sifat Lintas Udara perlu diambil sebagai salah satu sifat yang tersedia.

Beberapa sifat mungkin tidak tersedia, tergantung pada tingkat teknologi latar; Games Master harus membuat keputusan sendiri mengenai sifat apa yang dapat diterapkan.

##### Tabel Alokasi Sifat Kendaraan 

| Ukuran | Sifat Maks |
| :-- | :-: |
| Kecil | 1 |
| Sedang | 2 |
| Besar | 3 |
| Raksasa | 4 |
| Masif | 5 |
| Kolosal | 6 |

#### Lintas Udara

Kendaraan mampu melakukan penerbangan atmosfer.

#### Segala Medan

Sifat ini harus digunakan dengan kendaraan Darat. Kendaraan dapat melintasi medan yang tidak ramah, sulit, dan curam, menggunakan jalur, sistem suspensi dan penggerak canggih, atau diferensial penggerak yang kuat.

#### Menggali

Kendaraan dirancang untuk menggali dan membuat terowongan melalui tanah. Kendaraan dapat mencapai kedalaman maksimum yang setara dengan Peringkat Hull-nya x5 meter.

#### Tersamar

Kendaraan memiliki cat kamuflase atau sensor mimetik yang memungkinkannya untuk berbaur dengan lingkungannya. Upaya untuk melihat kendaraan secara visual menjadi satu Tanjakan lebih sulit.

#### Kargo

Kendaraan dirancang khusus untuk mengangkut kargo alih-alih penumpang. Kompartemen penumpang dibuat seminimal mungkin dengan sisa ruang kendaraan yang dapat digunakan dikhususkan untuk penahanan kargo dengan bagian, alat, dan bahkan pengkondisian lingkungan yang sesuai (seperti bagian freezer untuk mengangkut barang yang mudah rusak). Saat sarat dengan kargo, kecepatan kendaraan dua langkah lebih rendah daripada yang biasanya diizinkan oleh ukuran hull-nya.

#### Pengangkut

Kendaraan dirancang khusus untuk membawa kendaraan yang lebih kecil, yang diawaki ringan, atau mungkin dikendalikan dari jarak jauh, baik yang bersifat sipil maupun militer. Kendaraan apa pun yang memiliki sifat ini harus setidaknya berukuran Masif. Jumlah pesawat kecil yang dibawa dapat bervariasi menurut jenis misi dan tujuan, tetapi bisa sesedikit 10 hingga sebanyak peringkat Struktur kendaraan.

#### Konstruksi

Kendaraan dilengkapi untuk pekerjaan konstruksi berat. Semua kendaraan dengan sifat ini memiliki sifat Segala Medan juga, tetapi kecepatan dua langkah lebih rendah daripada yang biasanya diizinkan oleh ukuran hull-nya. Kendaraan dilengkapi dengan alat-alat yang sesuai dengan tugas seperti jib derek, sekop penggali, gerobak pembuangan, dan sebagainya.

#### Tahan EMP

Kendaraan terlindung dari serangan pulsa elektromagnetik.

#### Performa Ditingkatkan

Peringkat Kecepatan kendaraan satu langkah lebih tinggi dari maksimum untuk ukurannya.

#### Kursi Lontar

Jika terjadi keadaan darurat, kursi lontar melontarkan penumpang beberapa ratus meter ke udara, kemudian memasang parasut untuk memungkinkan pendaratan yang aman. Parasut bersifat opsional. Tidak disarankan untuk helikopter (dengan pengecualian mencolok Kamov Ka-52 Alligator).

#### FTL

Khusus Kapal Luar Angkasa. Pesawat dilengkapi dengan mesin lebih cepat dari cahaya (baik ini hyperdrive, warp Mengemudi, generator lubang cacing, atau sejenisnya). Mengemudi FTL memiliki peringkat Kecepatan terpisah yang pada dasarnya mengukur laju di mana kapal luar angkasa dapat melintasi satu parsec (3,26 tahun cahaya, atau 31 triliun kilometer atau 19 triliun mil), sebagai berikut:

##### Tabel Peringkat Kecepatan FTL 

| Peringkat Kecepatan | Faktor untuk Melintasi 1 Parsec |
| :-- | :-: |
| Terbata-bata | 10 |
| Lamban | 8 |
| Lambat | 7 |
| Biasa | 6 |
| Lembut | 5 |
| Sedang | 4 |
| Cepat | 3 |
| Kencang | 2 |
| Gesit | 1 |

Waktu faktor adalah untuk diputuskan oleh Games Master, tergantung pada seberapa canggih pengembangan FTL latar tersebut. Contohnya, faktor dasar bisa jadi 1 Hari, artinya kapal dengan Mengemudi FTL Terbata-bata membutuhkan 10 hari untuk menyelesaikan perjalanan, sedangkan kapal dengan Mengemudi FTL Gesit menyelesaikan perjalanan dalam 1 hari. Di tempat lain, di mana teknologi FTL jauh kurang efisien, waktu faktor bisa diukur dalam hitungan bulan, alih-alih hari.

Diasumsikan bahwa kapal memiliki cadangan bahan bakar untuk melakukan perjalanan pulang, atau sarana untuk mengisi bahan bakar di titik tujuan.

Diasumsikan bahwa kapal luar angkasa ukuran apa pun dapat dipasangi Mengemudi FTL, meskipun, sekali lagi, ini tergantung pada latar.

Mengemudi FTL tidak dapat diaktifkan dalam jarak 1,5 Satuan Astronomi dari sebuah bintang (sekitar 225 juta kilometer, atau 270 juta mil). Ini berarti kapal harus menggunakan Mengemudi subcahaya untuk bergerak hingga sekitar jarak Mars sebelum mengaktifkan sistem FTL.

#### Kendaraan Darat

Kendaraan mampu melakukan perjalanan darat.

#### Melayang

Kendaraan melayang di atas tanah menggunakan bantalan udara atau repulsor anti-gravitasi.

#### Mewah

Kendaraan dirancang khusus untuk membawa penumpang pada tingkat kemewahan tertentu. Ruang kargo berlebih diberikan untuk akomodasi penumpang yang mewah, kolam renang, bak mandi air panas, kru tambahan untuk memenuhi keinginan penumpang, dan sebagainya.

#### Rel

Kendaraan mengandalkan sistem rel. Kendaraan dengan sifat ini secara alami dapat mencapai peringkat Kecepatan tiga langkah lebih tinggi daripada yang biasanya diizinkan oleh ukuran hull-nya, tetapi jelas dibatasi pada pergerakan di sistem rel saja.

#### Tangguh

Semua sistem dapat menahan satu hantaman tambahan lebih dari yang ditentukan secara normal berdasarkan Ukuran. Sifat ini dapat ditumpuk — jadi Tangguh 2 menunjukkan bahwa sistem dapat menahan 2 hantaman lebih banyak dari biasanya dengan biaya dua poin Sifat.

#### Lintas Laut

Kendaraan bersifat apung di atas air.

#### Pesawat Ruang Angkasa

Kendaraan tertutup rapat terhadap ruang hampa dan terlindung dari radiasi kosmik dan mungkin, tergantung pada desain, mampu meninggalkan dan masuk kembali ke atmosfer, dan mempertahankan penerbangan di dalam atmosfer.

#### Senyap

Khusus Pesawat. Kendaraan dirancang untuk menghindari deteksi oleh radar dan sistem sensor jarak jauh lainnya. Upaya untuk melihat kendaraan menggunakan sensor elektronik menjadi satu Tanjakan lebih sulit.

#### Kapal Selam

Kendaraan mampu menyelam di bawah permukaan laut hingga kedalaman operasional sebesar Peringkat Hull-nya x10 meter. Kedalaman keruntuhan — maksimum mutlak yang dapat dicapai kapal selam tanpa hancur — adalah 1,5 kali kedalaman operasionalnya.

#### Penanganan Unggul

Penanganan kendaraan dinilai Mudah.

#### Suite Pengawasan

Kendaraan memiliki komputer terpasang, stasiun pangkalan komunikasi, penerima untuk sinyal alat penyadap, dan peralatan untuk mencegat sinyal ponsel cerdas di dekatnya dalam jarak 100 meter.#### Tough

Kendaraan sipil dengan trait ini mengambil lambung dari kolom Militer dan secara Otomatis memiliki Struktur maksimum. Kendaraan Militer dengan Trait ini mengambil lambung dan Struktur dari baris di bawahnya.

#### Tractor Beam

Hanya Pesawat Luar Angkasa. Kapal ini dilengkapi dengan tractor beam yang dapat menjerat dan menarik kendaraan dengan rating lambung hingga dua tingkat di bawah miliknya. Jadi, kapal luar angkasa berukuran Huge bisa menarik dan menahan lambung hingga ukuran Medium.

#### VTOL

Lepas landas/pendaratan vertikal. Trait ini melekat pada helikopter dan kendaraan serupa yang menggunakan kombinasi rotor untuk menghasilkan gaya angkat. Ketika diterapkan pada pesawat bersayap tetap, ini menunjukkan penggunaan pendorong tetap atau yang dapat diselaraskan untuk mengontrol sikap, pendakian, dan penurunan saat di udara.

#### Waterborne

Kendaraan ini menggerakkan dirinya sendiri menggunakan kaki berengsel. Kendaraan Walker dibatasi pada Kecepatan Gentle, berapa pun Ukurannya. Namun, Walker dapat dibangun hingga ketinggian yang akan menjadi tidak stabil bagi kendaraan yang dilengkapi dengan cara penggerak lainnya.

Kendaraan ini mampu melakukan pergerakan bawah air.

#### Weaponized

Kendaraan telah diadaptasi untuk menampung persenjataan. Sistem senjata dibahas di bawah di bagian [Senjata](0006_Vehicles.md?id=Senjata).


---
## Senjata

Biasanya, hanya lambung militer yang dirancang untuk menampung persenjataan (titik keras, penyimpanan amunisi, sistem kontrol). Trait 'Weaponized' dapat diambil untuk kendaraan sipil yang mungkin memiliki kebutuhan senjata.

Jumlah maksimum sistem senjata yang dapat didukung oleh kendaraan adalah 1/10 dari Poin Struktur-nya (jadi kendaraan dengan 40 Struktur dapat mendukung 4 sistem senjata, jika kendaraan militer, atau kendaraan sipil yang sudah Weaponized).

Sistem senjata bergantung pada Ukuran kendaraan. Tipe sistem senjata maksimum untuk Ukuran yang berbeda ditunjukkan dalam tabel di bawah ini.


##### Tabel Senjata berdasarkan Ukuran 

| Ukuran | Terestrial | Pesawat Luar Angkasa |
| :-- | :-- | :-- |
| Small | Senjata Ringan (contoh: Senapan Serbu) | Senjata Menengah (contoh: Senapan Mesin, Peluncur Roket) |
| Medium | Senjata Menengah (contoh: Senapan Mesin, Peluncur Roket) | Senjata Berat/Turret (contoh: Senapan Mesin Berat Terhubung, Mini-Gun) |
| Large | Senjata Berat/Turret (contoh: Senapan Mesin Berat Terhubung, Mini-Gun) | Baterai Senjata (contoh: Artileri Medan) |
| Huge | Baterai Senjata (contoh: Artileri Medan) | Senjata Canggih (contoh: Sistem Rudal) |
| Enormous | Senjata Canggih (contoh: Sistem Rudal) | Senjata Terpasang di Tulang Punggung (hanya satu) |
| Colossal | NA | Senjata Terpasang di Tulang Punggung (hingga 3) |

##### Contoh Statistik Senjata 
 
| Senjata | Daya Rusak | Jarak | Laju Tembak | Amun/Muat |
| :-- | :-: | :-: | :-: | :-: |
| Meriam 50 inci | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling Gun | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Roket | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Rudal/Torpedo Menengah | 6d10 | Jarak maks 200km | 1 | 1/5 |
| Rudal Besar/Jelajah | 6d10+10 | Jarak maks 1000km | 1 | 1/10 |
| Meriam Laser/Plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Meriam Laser/Plasma Berat | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Baterai Artileri | 5d6+6 | Jarak maks 50km | 1 | 1/5 |
| Baterai Tulang Punggung | 10d6+6 | Jarak maks 20000km | 1 | 1/10 |

_Jarak diberikan dalam meter dan kilometer._

_Laju tembak adalah untuk tembakan tunggal, semi-otomatis, dan otomatis penuh._

_Amun adalah kemampuan menembak sebelum perlu diisi ulang (Relod). Muat adalah waktu isi ulang dalam Ronde Tempur, dengan asumsi kru penuh tersedia._

---
## Penanganan dan Manuver

Manuver menghindar atau mendadak memerlukan lemparan Skill Mengemudi/Pilot yang sukses untuk memastikan pengemudi atau pilot tetap mengendalikan kendaraan. Sebagian besar kendaraan dirancang dan dibuat untuk menahan tekanan dan tarikan sesekali, tetapi Games Master dapat memutuskan bahwa manuver tertentu memerlukan lemparan pada Tanjakan kesulitan yang lebih tinggi, tergantung pada seberapa ambisiusnya manuver tersebut. Kegagalan berarti kontrol atas kendaraan hilang: lempar pada tabel Kehilangan Kendali.

Perhatikan bahwa Tabel Kehilangan Kendali hanya berlaku untuk kendaraan terestrial. Efek serupa dapat diterapkan pada kendaraan udara dan luar angkasa, tetapi Games Master perlu menyesuaikan alasan untuk efek spesifik tersebut. Misalnya, sebuah pesawat, alih-alih tergelincir, mungkin masuk ke dalam putaran (spin).

Selain itu, penanganan inheren kendaraan mungkin memiliki dampak tambahan pada lemparan Mengemudi. Penanganan bisa berupa Mudah, Standar, Sulit, Tangguh, atau Herkules dan menentukan titik awal untuk lemparan Mengemudi saat melakukan manuver. Tanjakan kesulitan untuk manuver tersebut kemudian diterapkan pada penanganan untuk menentukan kesulitan akhir.

Misalnya, sepeda motor performa tinggi memiliki girostabilizer bawaan yang memberikan Penanganan Mudah. Pengemudi ingin melakukan putaran-tergelincir 180 derajat untuk menghindari pengejar, manuver yang dinilai Games Master sebagai satu tingkat kesulitan tambahan. Oleh karena itu, pengendara harus melakukan lemparan Mengemudi pada tingkat Standar, bukan Mudah. Jika dia mencoba manuver yang sama pada sepeda motor tanpa stabilizer, lemparan Mengemudi akan menjadi Sulit.

Superior Handling adalah sebuah Trait. Jika kendaraan tidak memiliki trait tersebut sebagai bagian dari deskripsinya, maka standarnya adalah penanganan Standar untuk kendaraan ukuran Large ke bawah. Kendaraan Huge dan Enormous secara inheren memiliki trait Penanganan Tangguh dan Herkules, masing-masing, dan Games Master bebas untuk memutuskan bahwa manuver tertentu tidak mungkin dilakukan karena ukuran kendaraan.

##### Tabel Kehilangan Kendali 

| 1d100 | Hasil |
| :-: | :-- |
| 01-25 | Berbelok tajam. Kehilangan kendali bersifat sementara. Kendaraan menurunkan kecepatannya sebanyak 1 tingkat selama 5 detik. |
| 26-40 | Tergelincir. Pengemudi harus berjuang untuk menjaga kendaraan tetap terkendali. Kendaraan menurunkan kecepatannya sebanyak 2 tingkat selama 10 detik. |
| 41-50 | Tergelincir Parah. Kendaraan berakhir menghadap ke arah yang salah dan berhenti total selama 15 detik. |
| 51-60 | Terguling. Kendaraan tergelincir dan terguling, menerima 3d10 Daya Rusak pada Strukturnya. Penumpang harus melakukan lemparan Ketahanan yang sukses atau menerima 1d10 Daya Rusak pada 1d3 Lokasi Bentur. |
| 61-70 | Terguling Parah. Seperti di atas, tetapi kendaraan menerima 3d10+10 Daya Rusak dan Penumpang menerima 1d10 Daya Rusak meskipun lemparan Ketahanan berhasil, dan 2d10 jika gagal. |
| 71-80 | Hancur Total. Seperti di atas tetapi kendaraan berkurang menjadi 0 Struktur. Penumpang menerima Daya Rusak yang sama seperti Terguling Parah. |
| 81-90 | Ledakan. Seperti di atas tetapi sistem bahan bakar kendaraan menyala dan meledak dalam 1d20+10 detik. Jika tidak sempat menjauh, penumpang menderita tambahan 1d6 Daya Rusak bakar pada 1d6 lokasi. |
| 91-98 | Ledakan Segera. Seperti di atas tetapi ledakan terjadi segera. |
| 99-00 | Tabrakan Katastrofik. Penumpang harus berhasil melempar Ketahanan atau tewas seketika. Daya Rusak seperti untuk Hancur Total tetap diterima tanpa mempedulikan lemparan. |


---
## Contoh Kendaraan

---

### Kendaraan Darat

#### Interceptor

Mobil mewah yang dimodifikasi, mobil sport, atau sejenisnya, mobil ini dibuat untuk melaju cepat dan memberikan perlawanan yang sepadan dalam pertempuran. Ini adalah jenis kendaraan yang dipikirkan orang ketika seseorang menyebut "mobil mata-mata."

| Interceptor | |
| :- | :- |
| **Ukuran / Tipe** | Medium Militer |
| **Lambung** | 6 |
| **Struktur** | 40 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Penanganan** | Mudah |
| **Trait** | [Ejector Seat](0006_Vehicles.md?id=ejector-seat), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dispenser Tumpahan Oli, Dispenser Asap, Senapan Mesin Menengah Terhubung Ganda (2d6+3) |

<br>

---

#### Sepeda Motor Pengejar

Sepeda motor ringan dan cepat untuk pengejaran kilat, Sepeda Motor Pengejar membawa kejutan – baik sepasang senapan mesin terhubung atau dua roket.

| Sepeda Motor Pengejar | |
| :- | :- |
| **Ukuran / Tipe** | Small Sipil |
| **Lambung** | 2 |
| **Struktur** | 12 |
| **Sistem** | 1 |
| **Kecepatan** | Cepat |
| **Penanganan** | Mudah |
| **Trait** | [Superior Handling](0006_Vehicles.md?id=superior-handling), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dua Roket (4d6) atau Senapan Mesin Ringan Terhubung Ganda (2d6) |

<br>

---

#### Mobil Sedan

Sedan 4 pintu standar yang menampilkan ruang yang cukup untuk menampung pengemudi dan tiga penumpang dengan nyaman. Mengorbankan ruang kargo untuk menyertakan paket pengawasan.

| Mobil Sedan | |
| :- | :- |
| **Ukuran / Tipe** | Medium Sipil |
| **Lambung** | 4 |
| **Struktur** | 25 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Penanganan** | Standar |
| **Trait** | [Unobtrusive](0006_Vehicles.md?id=unobtrusive), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite) |
| **Senjata** | Tidak ada |

<br>

---

#### Mobil Kapal Selam

Mobil dua orang yang dapat beralih ke mode waterborne atau kapal selam untuk bepergian di atas atau di bawah air. Dilengkapi dengan torpedo yang dipasang di depan dan rudal darat-ke-udara yang dipasang di atas.

| Mobil Kapal Selam | |
| :- | :- |
| **Ukuran / Tipe** | Medium Sipil |
| **Lambung** | 6 |
| **Struktur** | 25 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Penanganan** | Standar |
| **Trait** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Roket (5d6), Torpedo (4d10) |

<br>

---

#### Van Pengawasan

Van polos tanpa tanda yang menampung tim agen dan serangkaian peralatan perekaman audio-visual.

| Van Pengawasan | |
| :- | :- |
| **Ukuran / Tipe** | Large Sipil |
| **Lambung** | 9 |
| **Struktur** | 60 |
| **Sistem** | 3 |
| **Kecepatan** | Lembut |
| **Penanganan** | Standar |
| **Trait** | [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Tough](0006_Vehicles.md?id=tough) |
| **Senjata** | Tidak ada |

<br>

---

#### Kendaraan Dukungan Taktis

Sebuah pikap atau jip dengan ruang untuk dua orang kru di kabin dan seorang penembak yang berdiri di bagian bak belakang mengoperasikan Senapan Mesin Menengah yang dipasang secara putar.

| Kendaraan Dukungan Taktis | |
| :- | :- |
| **Ukuran / Tipe** | Medium Sipil |
| **Lambung** | 6 |
| **Struktur** | 30 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Penanganan** | Standar |
| **Trait** | [All Terrain](0006_Vehicles.md?id=all-terrain), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Senapan Mesin Menengah Terpasang (2d6) |


<br>

---

### Kendaraan Air

#### Speedboat

Speedboat biasa, dipersenjatai dengan dispenser ranjau yang dipasang di bagian belakang.

| Speedboat | |
| :- | :- |
| **Ukuran / Tipe** | Medium Sipil |
| **Lambung** | 3 |
| **Struktur** | 24 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Penanganan** | Standar |
| **Trait** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dispenser Ranjau (5d6) |

<br>

#### Yacht

Jenis yacht mewah yang mungkin dimiliki oleh seorang oligarki. Kemungkinan dilengkapi dengan paket pengawasan untuk melindungi dari musuh yang mencoba melakukan hal buruk.

| Yacht | |
| :- | :- |
| **Ukuran / Tipe** | Huge Sipil |
| **Lambung** | 10 |
| **Struktur** | 75 |
| **Sistem** | 4 |
| **Kecepatan** | Lambat |
| **Penanganan** | Tangguh |
| **Trait** | [Luxurious](0006_Vehicles.md?id=luxurious), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Waterborne](0006_Vehicles.md?id=waterborne) |
| **Senjata** | Tidak ada |


<br>

---

### Pesawat Udara/Pesawat Luar Angkasa

#### Dirgantara (Kapal Udara Sipil)

Mirip dengan Hindenburg, jenis dirigible transkontinental (dan kelas lainnya) ini memiliki panjang 245 meter dan membutuhkan kru sebanyak 40 hingga 61 orang. Biasanya dapat membawa sekitar 50 hingga 72 penumpang dengan akomodasi mewah.

| Dirgantara | |
| :- | :- |
| **Ukuran / Tipe** | Enormous Sipil |
| **Lambung** | 10 |
| **Struktur** | 85 |
| **Sistem** | 5 |
| **Kecepatan** | Berat |
| **Penanganan** | Herkules |
| **Trait** | [Airborne](0006_Vehicles.md?id=airborne), [Luxurious](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Perisai** | Tidak ada |
| **Senjata** | Tidak ada |

<br>

---

#### Helikopter Serbu

Helikopter Serbu tradisional menggunakan teknologi pengawasan canggih mereka untuk mencegat sinyal telepon dan internet nirkabel, serta melacak individu dan kendaraan bahkan dalam gelap, melalui FLIR. Upaya untuk menghindari pelacak melalui Senyap bersifat Tangguh.

| Helikopter Serbu | |
| :- | :- |
| **Ukuran / Tipe** | Large Militer |
| **Lambung** | 11 |
| **Struktur** | 50 |
| **Sistem** | 3 |
| **Kecepatan** | Sedang |
| **Penanganan** | Mudah |
| **Trait** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Senyap](0006_Vehicles.md?id=Senyap), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Perisai** | Tidak ada |
| **Senjata** | 1 Gatling Gun (3d6), 4 Roket (5d6) |

<br>

---

#### Pesawat Tempur Multi-Peran

Pesawat tempur berbasis darat dua kursi ini (serupa dengan jenis De Havilland Mosquito) terkenal karena kinerja dan keserbagunaannya. Ruang bomnya mampu membawa dua bom 250 lb. (dianggap sebagai rudal menengah dengan jangkauan 0) atau satu torpedo.

| Pesawat Tempur Multi-Peran | |
| :- | :- |
| **Ukuran / Tipe** | Large Militer |
| **Lambung** | 10 |
| **Struktur** | 45 |
| **Sistem** | 3 |
| **Kecepatan** | Sedang |
| **Penanganan** | Standar |
| **Trait** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance) |
| **Perisai** | Tidak ada |
| **Senjata** | 4 Gatling Gun terpasang di hidung (4d6+3), 1 ruang bom (6d10 - lihat deskripsi) |

<br>

---

#### Pengangkut Antarbintang (Transportasi Berteknologi Tinggi Ringan)

Transportasi ringan ini membutuhkan kru minimal hanya dua orang, dengan ruang untuk maksimal empat penumpang tambahan. Versi stok standar dicatat di sini, namun banyak pemilik akan menerapkan "modifikasi khusus" mereka sendiri seperti ruang kargo tersembunyi, Performa Ditingkatkan, Penanganan Superior, Ketahanan EMP, Senyap, dan sebagainya.

| Pengangkut Antarbintang | |
| :- | :- |
| **Ukuran / Tipe** | Medium Sipil Pesawat Luar Angkasa |
| **Lambung** | 10 |
| **Struktur** | 80 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat (Faktor Parsec 3) |
| **Penanganan** | Standar |
| **Trait** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Space Craft](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Perisai** | 8 |
| **Senjata** | 2x Turret Meriam Laser terpasang Quad (5d6) |


<br>

---

#### Unit Kontak Umum (Pesawat Luar Angkasa Berteknologi Ultra Tinggi)

Kapal luar angkasa berteknologi sangat tinggi ini adalah representasi fisik dari Pikiran buatan yang sangat canggih, yang berbentuk rangkaian modul yang terhubung oleh medan sepanjang dua kilometer. Modul-modul tersebut memiliki tujuan masing-masing dan mencakup habitat, fasilitas konstruksi, area kargo, pemrosesan makanan, kompleks rekreasi, ruang hangar, dan bahkan beberapa unit rahasia yang jarang, jika pernah, didiskusikan oleh kecerdasan kapal tersebut. Kapal ini tidak memerlukan kru manusia, tetapi dapat mendukung populasi penumpang hingga 100.000 dengan mudah. Banyak penumpang lahir dan meninggal di atas Unit Kontak: banyak yang sementara, datang dan pergi sesuka mereka.

| Unit Kontak Umum | |
| :- | :- |
| **Ukuran / Tipe** | Colossal Sipil Pesawat Luar Angkasa |
| **Lambung** | 20 |
| **Struktur** | 10.000 |
| **Sistem** | 6 |
| **Kecepatan** | Sedang (Faktor Parsec 4. Pada tingkat teknologi ini, satu Faktor setara dengan 1 jam) |
| **Penanganan** | Tangguh |
| **Trait** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Carrier](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxurious](0006_Vehicles.md?id=luxurious), [Space Craft](0006_Vehicles.md?id=space-craft), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Tractor Beam](0006_Vehicles.md?id=tractor-beam) |
| **Perisai** | 30 |
| **Senjata** | Tidak ada yang ingin didiskusikan |

<br>