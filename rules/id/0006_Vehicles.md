# Kendaraan

Kendaraan dalam _Mythras Imperative_ diperlakukan dengan cara yang semi-abstrak. Pada dasarnya, kendaraan hanyalah alat latar belakang, yang digunakan untuk membawa Karakter dari titik A ke B, dengan sedikit kebutuhan akan deskripsi detail atau statistik. Namun sesekali, Games Master akan memerlukan detail kendaraan saat diperlukan untuk merepresentasikannya dalam kejar-kejaran atau situasi tempur.

Aturan di bagian ini memungkinkan representasi sebagian besar jenis kendaraan, namun dengan cara abstrak yang ditujukan untuk memberikan fleksibilitas dan meningkatkan penceritaan. Pesawat luar angkasa sedikit berbeda, meskipun didasarkan pada prinsip yang serupa.

---
## Statistik

Semua kendaraan dideskripsikan berdasarkan Struktur, Hull, Speed, Sistem, Trait, dan Perisai (jika ada dalam latar).

- **[Ukuran](0006_Vehicles.md?id=vehicle-size-table):** Semua kendaraan memiliki satu dari enam peringkat Ukuran yang menentukan nilai atau rentang karakteristik lainnya. Karena ukuran intrinsiknya yang lebih besar dan lingkungan ruang angkasa yang berbahaya, pesawat luar angkasa memiliki rentang nilainya sendiri.
- **[Hull](0006_Vehicles.md?id=terrestrial-hulls):** Merepresentasikan Poin Armor.
- **[Struktur](0006_Vehicles.md?id=terrestrial-hulls):** Merepresentasikan Poin Hit kendaraan.
- **[Perisai](0006_Vehicles.md?id=shields):** Dalam latar dengan teknologi manipulasi energi canggih, perisai mungkin ada untuk melindungi kendaraan, namun bisa terkikis di bawah serangan terus-menerus.
- **[Sistem](0006_Vehicles.md?id=systems):** Merepresentasikan komponen vital kendaraan, termasuk pembangkit tenaga, bagian kru, dan seterusnya.
- **[Speed](0006_Vehicles.md?id=speed):** Setiap kendaraan memiliki peringkat Speed dasar.
- **[Trait](0006_Vehicles.md?id=traits):** Sebuah kendaraan mungkin juga memiliki satu atau beberapa Trait. Trait, seperti Kemampuan yang ditetapkan pada Makhluk dalam aturan _Mythras Imperative_, atau Trait Gaya Tarung, menawarkan deskripsi permainan dan keuntungan tambahan, yang mencerminkan sifat kendaraan tersebut.
- **[Senjata](0006_Vehicles.md?id=weapons):** Sama seperti Trait, kendaraan dapat dilengkapi dengan senjata sesuai dengan yang diizinkan latar. Beberapa contoh dan nilai yang disarankan dirinci di bawah.


---
### Ukuran Hull, Tipe, dan Struktur

Ukuran dan tujuan kendaraan memengaruhi ketebalan hull dan ketahanan struktur internalnya. Misalnya, sepeda motor memiliki hull minimal, karena dibuat untuk kecepatan dan kelincahan. Land Ironclad (behemoth lapis baja raksasa beroda atau bertenaga trek, bertenaga uap atau mesin diesel), karena merupakan kendaraan jauh lebih besar yang dirancang untuk medan perang, memiliki hull yang jauh lebih besar. Perbandingan ukuran hull (dan berapa banyak serangan dari senjata yang biasanya dapat ditahan), dirangkum dalam tabel Ukuran Kendaraan dan Hull di bawah.

Setiap kali kendaraan menderita bahaya, daya rusak yang masuk dikurangi oleh nilai Hull-nya. Daya rusak yang tersisa dikurangi dari poin Struktur kendaraan dan memiliki peluang persentase, setara dengan daya rusak yang menembus, untuk memengaruhi Sistem. Jika kendaraan mencapai poin Struktur nol, kendaraan tersebut hancur total atau rusak parah sehingga harus dibuang.

##### Hull Terestrial

| Ukuran | Struktur | Nilai Hull Sipil | Nilai Hull Militer | Contoh |
| :-- | :-: | :-: | :-: | :-- |
| Kecil | 1-20 | 1-3 | 4-6 | Sepeda motor, sepeda motor dengan sespan, mobil kompak atau subkompak, kano, kayak, perahu dayung |
| Sedang | 21-40 | 1-6 | 7-9 | Sedan, van, pikap, mobil mewah, mobil sport mewah, mobil otot, limusin, sekoci, perahu cepat, gantole, autogyro |
| Besar | 41-60 | 4-9 | 10-12 | Truk, limusin panjang, SUV, bus, pengangkut penumpang, pesawat pribadi, glider, kapal pesiar, tank, helikopter, kapal selam |
| Raksasa | 61-80 | 7-12 | 13-15 | Truk semi, pesawat komersial, jet, kapal penjaga pantai, yacht |
| Sangat Besar | 81-100 | 10-15 | 16-18 | Kereta api, kapal pesiar, kapal angkatan laut |

##### Hull Pesawat Luar Angkasa

| Ukuran | Struktur | Nilai Hull Sipil | Nilai Hull Militer | Contoh |
| :-- | :-: | :-: | :-: | :-- |
| Kecil | 10-50 | 4-9 | 10-12 | Pesawat tempur kursi tunggal |
| Sedang | 51-150 | 7-12 | 13-15 | Pengangkut ringan, pesawat ulang-alik |
| Besar | 151-450 | 10-15 | 16-18 | Pengangkut berat, kapal penjelajah |
| Raksasa | 451-1350 | 13-18 | 19-21 | Fregat pengawal, kapal penjelajah tempur ringan |
| Sangat Besar | 1351-4050 | 16-21 | 21-24 | Kapal generasi, kapal penjelajah tempur berat |
| Kolosal | 4050-12110 | 19-24 | 24-30 | Habitat orbital, stasiun tempur penghancur planet |


---
### Perisai

Perisai deflektor memberikan lapisan perlindungan tambahan bagi kendaraan yang dapat memasangnya. Perisai bekerja sedikit berbeda dengan Hull, karena sifatnya yang ablatif. Jika daya rusak yang masuk sama dengan atau kurang dari nilai perisai, maka semuanya diblokir. Jika daya rusak melebihi nilai perisai, maka kelebihannya akan mengurangi kekuatan perisai sebesar jumlah tersebut.

_Sebagai contoh, pengangkut pasukan memiliki kekuatan perisai energi 12 poin. Jika pengangkut terkena laser dengan 11 daya rusak, laser itu tidak menembus dan tidak memberikan efek tambahan. Sebaliknya, jika terkena ledakan yang mengakibatkan 15 daya rusak, kelebihan tiga poin akan menurunkan kekuatan perisai menjadi 9._

Setelah kekuatan perisai deflektor turun ke nol, perisai itu runtuh. Daya rusak yang tersisa berlanjut ke hull.

---
### Sistem

Setiap kali kendaraan menderita daya rusak yang menembus hull-nya, ada peluang, setara dengan daya rusak yang menembus, bahwa Sistem vital telah terpengaruh.

_Sebagai contoh, 10 daya rusak diterapkan pada Perahu Cepat - kendaraan dengan 3 Hull dan 24 Struktur. Hull dihitung sebagai Armor yang mengurangi daya rusak menjadi 7. Ini dihapus dari 24 poin Struktur dan ada peluang 7% untuk merusak salah satu Sistem kendaraan._

Daya rusak yang dapat ditahan oleh Sistem didasarkan murni pada ukuran kendaraan. Ini dimodelkan oleh jumlah hit yang dapat diterima Sistem, alih-alih jumlah daya rusak yang sebenarnya. Satu Hit Sistem pada kendaraan Kecil akan langsung menghancurkan Sistem tersebut. Dibutuhkan dua hit untuk menghancurkan Sistem kendaraan berukuran Sedang, tiga untuk kendaraan Besar, dan seterusnya. Lihat [Tabel Daya Rusak Sistem](0006_Vehicles.md?id=system-damage-table) di bawah.

Sistem yang rusak, tetapi belum hancur, menderita hilangnya fungsi sebanding dengan jumlah Hit yang diterima - baik pengurangan persentase atau penalti Tanjakan pada tugas Sistem. Efek spesifik didasarkan pada apa yang dikendalikan subsistem, seperti yang dirinci dalam [Tabel Daya Rusak Komponen Sistem](0006_Vehicles.md?id=system-component-damage-table) di bawah. Tergantung pada Sistem mana yang terkena, efeknya bisa sangat fatal.

_Sebagai contoh, Land Ironclad - kendaraan Sangat Besar dengan 5 Hit Sistem - terkena dua kali di Mengemudi akan kehilangan 40% tenaganya dan akan mengurangi Kecepatan Lambatnya dua Tanjakan menjadi Ponderous. Demikian pula, pengangkut Besar - dengan 3 Hit Sistem - menerima dua hit pada Sistem Mesin/Bahan Bakar akan mendapat penalti dua Tanjakan terhadap Kecepatan serta penggunaan sistem Elektronik. Hit ketiga akan menghancurkan Sistem Mesin/Bahan Bakar dan kapal bersamanya._


<details>

<summary>* Erata Komunitas</summary>

---

#### Daya Rusak


_Teks asli di sini tadinya lebih jauh. Ditempatkan tepat setelah bagian Sistem karena tidak perlu mengulangi paragraf sebelumnya._

- _"Daya rusak yang melebihi Hull menembus kendaraan, merusak Struktur dan kemungkinan memengaruhi satu atau lebih sistem. Tergantung pada ukuran kendaraan, daya rusak bisa bersifat minor atau katastrofik._
- _Sebagai contoh, kendaraan Besar dapat menerima hingga dua hit pada Sistem seperti Mengemudi-nya. Hit ketiga secara fungsional menghancurkan Mengemudi. Setiap kali sistem terkena hit, sistem tersebut kehilangan persentase fungsinya seperti yang dijelaskan dalam kolom Rugi per Hit pada Tabel Daya Rusak Sistem di bawah atau fungsi inti (seperti Mengemudi, Pilot, Komunikasi, dan seterusnya) menjadi satu Tanjakan lebih sulit per hit yang diderita."_

_Paragraf di atas dihapus dan suntingan singkat menggantikannya untuk menyebutkan efek Sistem contoh lainnya._

---

</details>

##### Tabel Daya Rusak Sistem

| Ukuran | Hit Sistem | Rugi per Hit |
| :-- | :-: | :-- |
| Kecil | 1 | 100% - Hancur |
| Sedang | 2 | 1 Tanjakan atau 50% |
| Besar | 3 | 1 Tanjakan atau 33% |
| Raksasa | 4 | 1 Tanjakan atau 25% |
| Sangat Besar | 5 | 1 Tanjakan atau 20% |
| Kolosal | 6 | 1 Tanjakan atau 16% |


<details>

<summary>* Erata Komunitas</summary>

---

##### Tabel Daya Rusak Sistem (Asli)

| Ukuran | Hit Sistem | Rugi per Hit |
| :-- | :-: | :-- |
| Kecil | 1 | 1 Tanjakan atau 50% |
| Sedang | 2 | 1 Tanjakan atau 33% |
| Besar | 3 | 1 Tanjakan atau 25% |
| Raksasa | 4 | 1 Tanjakan atau 20% |
| Sangat Besar | 5 | 1 Tanjakan atau 16% |
| Kolosal | 6 | 1 Tanjakan atau 10% |

##### Tabel Ukuran Kendaraan (dari [Ukuran Hull, Tipe, dan Struktur](0006_Vehicles.md?id=hull-size-type-and-structure))

| Ukuran | Hit Sistem |
| :-- | :-: |
| Kecil | 1 |
| Sedang | 2 |
| Besar | 3 |
| Raksasa | 4 |
| Sangat Besar | 5 |
| Kolosal | 6 |

_Aturan dan contoh asli tidak konsisten:_
- _"Sistem yang rusak, tetapi belum hancur, menderita kehilangan fungsi. Ini setara dengan proporsi hit saat ini terhadap kemampuan totalnya. Jadi, kendaraan Sangat Besar yang terkena dua kali di Mengemudi akan kehilangan 40% tenaganya (2 hit dari maksimal 5)"._ 
   - _Ini menyiratkan kendaraan Sangat Besar yang ditunjukkan dengan 5 Hit Sistem harus kehilangan 20% dengan setiap hit - tetapi tabel mengatakan 16%._
- _"Sebagai contoh, kendaraan Besar dapat menerima hingga tiga hit pada sistem seperti Mengemudi-nya. Hit keempat secara fungsional menghancurkan Mengemudi."_ 
  - _"Ini menyiratkan - seperti halnya tabel - 25% daya rusak per Hit Sistem tetapi kendaraan Besar hanya dapat menerima 3 Hit Sistem menurut tabel yang sama._
- _Meskipun tidak konsisten, Tabel Ukuran Kendaraan redundan; muncul lagi dalam bentuk yang lebih lengkap (menambahkan kolom Rugi per Hit) hanya beberapa baris kemudian._

_Ini membuat sulit untuk memiliki aturan yang konsisten. Untuk mengatasi masalah ini, nilai dan contoh diubah agar cocok dan Tabel Ukuran Kendaraan dihapus._

---

</details>


##### Tabel Daya Rusak Komponen Sistem

| 1d10 | Sistem | Hasil Rusak | Hasil Hancur |
| :-: | :-- | :-- | :-- |
| 1 | Kargo | Sejumlah kepemilikan atau peralatan yang disimpan di dalam ruang kargo, sebanding dengan daya rusak, hancur. | Semua kargo hancur. |
| 2 | Komunikasi | Lemparan Komunikasi menderita satu Tanjakan kesulitan tambahan setiap kali rusak. | Kendaraan tidak dapat lagi berkomunikasi atau mengelabui sensor musuh. |
| 3 | Kontrol | Lemparan Berperahu, Mengemudi, atau Pilot menderita satu Tanjakan kesulitan tambahan setiap kali rusak; lemparan Kontrol segera diperlukan. | Kendaraan tidak dapat lagi dikendalikan atau diubah arahnya. |
| 4 | Mengemudi | Kecepatan berkurang sebesar jumlah yang sebanding dengan daya rusak. | Kendaraan berhenti total; pesawat jatuh. |
| 5 | Kru | Sejumlah penumpang yang sebanding dengan daya rusak menjadi korban. Mereka yang terkena menderita Luka Mayor dan harus berhasil dalam lemparan Ketahanan atau langsung tewas. | Penumpang kendaraan tewas. |
| 6 | Mesin / Bahan Bakar | Kecepatan berkurang sebesar jumlah yang sebanding dengan daya rusak. Sistem elektronik satu Tanjakan lebih sulit digunakan. | Kendaraan hancur dalam ledakan dahsyat. |
| 7 | Sensor | Lemparan Sensor, Navigasi, dan serangan Senjata menderita satu Tanjakan kesulitan tambahan setiap kali rusak. | Kendaraan menjadi buta. |
| 8 | Senjata | Sejumlah sistem senjata yang sebanding dengan daya rusak menjadi tidak berfungsi. | Kendaraan tidak dapat lagi menembakkan senjata. |
| 9-0 | Tidak ada | Tidak ada sistem yang terkena; hanya kerusakan Struktur. | T/A |

<details>

<summary>* Erata Komunitas</summary>

---

##### Tabel Daya Rusak Komponen Sistem (Mesin/Bahan Bakar)

_Hasil aslinya adalah sebagai berikut: "Kecepatan Maksimum dibagi dua..." Ini bertentangan dengan aturan umum penalti daya rusak yang sebanding dengan kerusakan Sistem: 25% kerusakan = 25% penalti. Selain itu, aturan lengkap di Mythras Companion tidak menyebutkan pembagian dua Kecepatan ini._

_Akibatnya, teks diganti dengan entri yang sama dari Sistem Mengemudi: "Kecepatan berkurang sebesar jumlah yang sebanding dengan daya rusak."_

---

</details>


---
### Speed

Karena fisika kecepatan, akselerasi, hambatan, dan inersia (sebut saja beberapa) adalah masalah yang kompleks, beberapa penyederhanaan diperlukan sehingga kendaraan diberi peringkat kecepatan abstrak. Karakteristik Speed hanya boleh digunakan untuk menilai secara kasar apakah satu kendaraan dapat menyalip atau mengejar kendaraan lain.

Peringkat kecepatan mewakili tingkat operasional nominal kendaraan. Dalam situasi darurat, performa ini dapat ditingkatkan satu langkah, dengan risiko keausan atau kerusakan pada mesin. Meskipun tabel yang sama digunakan untuk semua jenis kendaraan, akal sehat harus diterapkan agar hanya kendaraan dari kelas yang sama yang dibandingkan. Sebagai contoh, jika sebuah Pesawat Luar Angkasa dan mobil sport keduanya memiliki tingkat akselerasi yang sama yaitu Cepat, maka seharusnya sudah jelas bahwa pesawat luar angkasa secara komparatif lebih cepat.

Meningkatkan Speed kendaraan melampaui nilai standarnya dimungkinkan dengan lemparan Mengemudi yang berhasil. Biasanya, kecepatan ekstra ini hanya dapat bertahan untuk waktu yang singkat – tidak lebih dari 1d6 Menit sebelum kendaraan harus turun ke kecepatan standarnya atau berisiko merusak pembangkit tenaganya. Lemparan Mengemudi kritis memungkinkan durasi kecepatan yang lebih tinggi ditingkatkan menjadi 1d12 Menit.

Pengemudi dapat mencoba mendorong kecepatan kendaraan hingga 2 langkah, tetapi ini memerlukan lemparan Mengemudi Herkules dan durasi maksimal kendaraan dapat mempertahankan kecepatan ini adalah 1d3 Menit: Keberhasilan Kritis tidak akan memperpanjang durasi kecepatan yang meningkat tersebut.

##### Tabel Peringkat Speed

| Peringkat Speed | Kecepatan Maks Untuk |
| :-- | :-: |
| Ponderous | Sangat Besar |
| Sluggish | |
| Slow | Raksasa |
| Mediocre | |
| Gentle | Besar |
| Moderate | |
| Rapid | Sedang |
| Fast | |
| Fleet | Kecil |


---
### Trait

Jumlah maksimum trait yang dapat dimiliki kendaraan bergantung pada ukuran dan tipe hull.

Setiap kendaraan memiliki trait bawaan: mode perjalanan yang menjadi tujuan utama perancangannya. Oleh karena itu, pesawat secara inheren memiliki trait Airborne (Lintas Udara), perahu memiliki trait Seaborne (Lintas Laut), dan seterusnya. Trait bawaan ini tidak dihitung dalam jumlah trait yang tersedia. Namun, jika kendaraan mencakup mode perjalanan kedua — misalnya kapal selam terbang, maka trait Airborne perlu diambil sebagai salah satu dari trait yang tersedia.

Beberapa trait mungkin tidak tersedia, tergantung pada tingkat teknologi latar; Games Master harus membuat keputusan sendiri tentang trait apa yang dapat diterapkan.

##### Tabel Alokasi Trait Kendaraan

| Ukuran | Max Trait |
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

Trait ini harus digunakan dengan kendaraan Darat. Kendaraan dapat melintasi medan yang tidak ramah, sulit, dan curam, menggunakan trek, suspensi canggih dan sistem penggerak, atau diferensial penggerak yang kuat.

#### Burrowing

Kendaraan dirancang untuk menggali dan membuat terowongan melalui tanah. Kendaraan dapat mencapai kedalaman maksimum setara dengan Nilai Hull-nya x5 meter.

#### Camouflaged

Kendaraan memiliki cat kamuflase atau sensor mimetik yang memungkinkannya menyatu dengan lingkungannya. Upaya untuk melihat kendaraan secara visual menjadi satu Tanjakan lebih sulit.

#### Cargo

Kendaraan dirancang khusus untuk mengangkut kargo alih-alih penumpang. Kompartemen penumpang dibuat seminimal mungkin dengan sisa ruang kendaraan yang dapat digunakan dikhususkan untuk penampungan kargo dengan bagian, alat, dan bahkan pengondisian lingkungan yang sesuai (seperti bagian freezer untuk mengangkut barang yang mudah rusak). Saat dimuati kargo, kecepatan kendaraan dua langkah lebih rendah daripada yang biasanya diizinkan oleh ukuran hull-nya.

#### Carrier

Kendaraan dirancang khusus untuk membawa kendaraan yang lebih kecil, diawaki secara ringan, atau mungkin dikendalikan dari jarak jauh, baik yang bersifat sipil maupun militer. Kendaraan apa pun yang memiliki trait ini harus setidaknya Sangat Besar. Jumlah kendaraan kecil yang dibawa mungkin bervariasi menurut jenis dan tujuan misi tetapi bisa sesedikit 10 hingga sebanyak nilai Struktur kendaraan.

#### Construction

Kendaraan dilengkapi untuk pekerjaan konstruksi berat. Semua kendaraan dengan trait ini juga memiliki trait All Terrain, namun kecepatannya dua langkah lebih rendah daripada yang biasanya diizinkan oleh ukuran hull-nya. Kendaraan dilengkapi dengan peralatan yang sesuai tugas seperti boom derek, sekop penggali, gerobak sampah, dan seterusnya.

#### EMP Resistant

Kendaraan terlindung dari serangan pulsa elektromagnetik.

#### Enhanced Performance

Peringkat Speed kendaraan satu langkah lebih tinggi daripada maksimum untuk ukurannya.

#### Ejector Seat

Jika terjadi keadaan darurat, kursi lontar mendorong penumpang beberapa ratus meter ke udara, kemudian mengerahkan parasut untuk memungkinkan pendaratan yang aman. Parasut bersifat opsional. Tidak direkomendasikan untuk helikopter (pengecualian penting adalah Kamov Ka-52 Alligator).

#### FTL

Khusus Pesawat Luar Angkasa. Kapal dilengkapi dengan mesin lebih cepat dari cahaya (baik itu hyperdrive, warp Mengemudi, generator lubang cacing, atau sejenisnya). Mengemudi FTL memiliki peringkat Speed terpisah yang pada dasarnya mengukur kecepatan kapal luar angkasa dalam melintasi satu parsec (3,26 tahun cahaya, atau 31 triliun kilometer atau 19 triliun mil), sebagai berikut:

##### Tabel Peringkat Speed FTL

| Peringkat Speed | Faktor untuk Melintasi 1 Parsec |
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

Waktu faktor adalah untuk diputuskan oleh Games Master, tergantung pada seberapa maju perkembangan FTL dalam latar tersebut. Misalnya, faktor dasar mungkin 1 Hari, yang berarti kapal dengan Mengemudi FTL Ponderous membutuhkan 10 hari untuk menyelesaikan perjalanan, sedangkan kapal dengan Mengemudi FTL Fleet menyelesaikan perjalanan dalam 1 hari. Di tempat lain, di mana teknologi FTL jauh kurang efisien, waktu faktor mungkin diukur dalam hitungan bulan, alih-alih hari.

Diasumsikan bahwa kapal memiliki cadangan bahan bakar untuk melakukan perjalanan kembali, atau sarana untuk mengisi bahan bakar di titik tujuan.

Diasumsikan bahwa semua ukuran kapal luar angkasa dapat dilengkapi dengan Mengemudi FTL, meskipun sekali lagi, ini tergantung pada latar.

Mengemudi FTL tidak dapat diaktifkan dalam jarak 1,5 Unit Astronomi dari sebuah bintang (sekitar 225 juta kilometer, atau 270 juta mil). Ini berarti kapal harus menggunakan Mengemudi subcahaya untuk bergerak hingga jarak sekitar Mars sebelum mengaktifkan sistem FTL.

#### Ground Vehicle

Kendaraan mampu melakukan perjalanan darat.

#### Hover

Kendaraan melayang di atas tanah baik menggunakan bantalan udara atau repulsor anti-gravitasi.

#### Luxurious

Kendaraan dirancang khusus untuk membawa penumpang dengan tingkat kemewahan tertentu. Ruang kargo berlebih diberikan untuk akomodasi penumpang yang mewah, kolam renang, bak mandi air panas, kru tambahan untuk melayani keinginan penumpang, dan seterusnya.

#### Rails

Kendaraan mengandalkan sistem rel. Kendaraan dengan trait ini secara alami dapat mencapai peringkat Speed tiga langkah lebih tinggi daripada yang biasanya diizinkan oleh ukuran hull-nya, tetapi jelas terbatas pada pergerakan di sistem rel saja.

#### Resilient

Semua sistem dapat menahan satu hit tambahan lebih dari yang biasanya ditentukan oleh Ukuran. Trait ini dapat ditumpuk — jadi Resilient 2 menunjukkan bahwa sistem dapat menahan 2 hit lebih dari biasanya dengan biaya dua poin Trait.

#### Seaborne

Kendaraan dapat mengapung di atas air.

#### Spacecraft

Kendaraan disegel terhadap ruang hampa dan terlindung dari radiasi kosmik dan mungkin, tergantung pada desainnya, mampu meninggalkan dan masuk kembali ke atmosfer, serta mempertahankan penerbangan di dalam atmosfer.

#### Senyap

Khusus Pesawat. Kendaraan dirancang untuk menghindari deteksi oleh radar dan sistem sensor jarak jauh lainnya. Upaya untuk melihat kendaraan menggunakan sensor elektronik menjadi satu Tanjakan lebih sulit.

#### Submersible

Kendaraan mampu menyelam di bawah permukaan laut hingga kedalaman operasional sebesar Nilai Hull-nya x10 meter. Kedalaman keruntuhan — kedalaman maksimum absolut yang dapat dicapai kapal selam tanpa hancur — adalah 1,5 kali kedalaman operasionalnya.

#### Superior Handling

Penanganan kendaraan dinilai Mudah.

#### Surveillance Suite

Kendaraan memiliki komputer bawaan, stasiun pangkalan komunikasi, penerima sinyal alat penyadap, dan peralatan untuk mencegat sinyal ponsel pintar terdekat dalam radius 100 meter.#### Tough

Kendaraan sipil dengan ciri ini mengambil Hull dari kolom Militer dan secara otomatis memiliki Struktur maksimum. Kendaraan militer dengan ciri ini mengambil Hull dan Struktur dari baris di bawahnya.

#### Tractor Beam

Hanya Pesawat Luar Angkasa. Kapal dilengkapi dengan tractor beam yang dapat menjerat dan menarik kendaraan dengan peringkat hull hingga dua tingkat di bawah peringkatnya sendiri. Jadi, kapal luar angkasa berukuran Huge dapat menarik dan menahan hull hingga ukuran Medium.

#### VTOL

Lepas landas/pendaratan vertikal. Ciri ini inheren bagi helikopter dan kendaraan serupa yang menggunakan kombinasi rotor untuk menghasilkan gaya angkat. Saat diterapkan pada pesawat sayap tetap, ini menunjukkan penggunaan pendorong tetap atau yang dapat diselaraskan untuk mengontrol sikap terbang, pendakian, dan penurunan.

#### Waterborne

Kendaraan menggerakkan dirinya sendiri menggunakan kaki yang terartikulasi. Kendaraan Walker dibatasi pada Kecepatan Gentle, berapa pun Ukurannya. Namun, Walker dapat dibangun hingga ketinggian yang tidak stabil bagi kendaraan yang dilengkapi dengan alat penggerak lainnya.

Kendaraan ini mampu melakukan pergerakan di bawah air.

#### Weaponized

Kendaraan telah diadaptasi untuk menampung persenjataan. Sistem senjata dibahas di bawah di bagian [Senjata](0006_Vehicles.md?id=weapons).


---
## Senjata

Biasanya, hanya hull militer yang dirancang untuk menampung persenjataan (titik keras, penyimpanan amunisi, sistem kontrol). Ciri 'Weaponized' dapat diambil untuk kendaraan sipil yang mungkin memiliki kebutuhan senjata.

Jumlah maksimum sistem senjata yang dapat didukung oleh kendaraan adalah sama dengan 1/10 dari Poin Struktur-nya (jadi kendaraan dengan 40 Struktur dapat mendukung 4 sistem senjata, jika itu adalah kendaraan militer, atau kendaraan sipil yang telah di-Weaponized).

Sistem senjata bergantung pada Ukuran kendaraan. Tipe sistem senjata maksimum untuk Ukuran yang berbeda ditunjukkan dalam tabel di bawah ini.


##### Tabel Senjata berdasarkan Ukuran 

| Ukuran | Terrestrial | Pesawat Luar Angkasa |
| :-- | :-- | :-- |
| Small | Senjata Ringan (misal: Assault Rifle) | Senjata Menengah (misal: Senapan Mesin, Peluncur Roket) |
| Medium | Senjata Menengah (misal: Senapan Mesin, Peluncur Roket) | Senjata Turret/Berat (misal: Senapan Mesin Berat Terkait, Mini-Gun) |
| Large | Senjata Turret/Berat (misal: Senapan Mesin Berat Terkait, Mini-Gun) | Baterai Senjata (misal: Artileri Medan) |
| Huge | Baterai Senjata (misal: Artileri Medan) | Senjata Canggih (misal: Sistem Rudal) |
| Enormous | Senjata Canggih (misal: Sistem Rudal) | Senjata Terpasang di Tulang Punggung (hanya satu) |
| Colossal | NA | Senjata Terpasang di Tulang Punggung (hingga 3) |

##### Contoh Statistik Senjata 
 
| Senjata | Daya Rusak | Jarak | Kecepatan Tembak | Amunisi/Relod |
| :-- | :-: | :-: | :-: | :-: |
| Meriam 50 inci | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling Gun | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Roket | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Rudal/Torpedo Menengah | 6d10 | Jarak maks 200km | 1 | 1/5 |
| Rudal Besar/Jelajah | 6d10+10 | Jarak maks 1000km | 1 | 1/10 |
| Meriam Laser/Plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Meriam Laser/Plasma Berat | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Baterai Artileri | 5d6+6 | Jarak maks 50km | 1 | 1/5 |
| Baterai Spinal Mount | 10d6+6 | Jarak maks 20000km | 1 | 1/10 |

_Jarak diberikan dalam meter dan kilometer._

_Kecepatan tembak adalah untuk tembakan tunggal, semi-otomatis, dan otomatis penuh._

_Amunisi adalah kemampuan menembak sebelum perlu diisi ulang. Relod adalah waktu pengisian ulang dalam Combat Rounds, dengan asumsi kru lengkap tersedia._

---
## Handling dan Manuver

Manuver mengelak atau mendadak memerlukan lemparan Skill Mengemudi/Pilot yang berhasil untuk memastikan pengemudi atau pilot tetap mengendalikan kendaraan. Kebanyakan kendaraan dirancang dan dibangun untuk menahan tekanan dan tarikan sesekali, tetapi Game Master dapat memutuskan bahwa manuver tertentu memerlukan lemparan pada Tanjakan kesulitan yang lebih tinggi, tergantung pada seberapa ambisius manuver tersebut. Kegagalan berarti kontrol atas kendaraan hilang: lempar pada tabel Kehilangan Kontrol.

Perhatikan bahwa Tabel Kehilangan Kontrol hanya berlaku untuk kendaraan terrestrial. Efek serupa dapat diterapkan pada kendaraan udara dan luar angkasa, tetapi Game Master perlu menyesuaikan penalaran untuk efek spesifik tersebut. Misalnya, pesawat terbang, alih-alih selip, mungkin masuk ke putaran tak terkendali (spin).

Selain itu, handling bawaan kendaraan mungkin memiliki dampak tambahan pada lemparan Mengemudi. Handling bisa berupa Mudah, Standar, Sulit, Tangguh, atau Herkules dan menentukan titik awal untuk lemparan Mengemudi saat melakukan manuver. Tanjakan kesulitan untuk manuver tersebut kemudian diterapkan pada handling untuk menentukan kesulitan akhir.

Misalnya, sepeda motor performa tinggi memiliki girostabilizer bawaan yang memberikannya Handling Mudah. Pengemudi ingin melakukan putaran selip 180 derajat untuk menghindari pengejar, manuver yang dinilai oleh Game Master sebagai satu Tanjakan kesulitan tambahan. Oleh karena itu, pengendara harus melakukan lemparan Mengemudi di tingkat Standar, bukan Mudah. Jika dia mencoba manuver yang sama pada sepeda motor tanpa stabilisasi, lemparan Mengemudi akan menjadi Sulit.

Handling Superior adalah sebuah Ciri. Jika kendaraan tidak memiliki ciri tersebut sebagai bagian dari deskripsinya, maka default-nya adalah handling Standar untuk kendaraan apa pun dengan ukuran Large ke bawah. Kendaraan Huge dan Enormous secara inheren memiliki ciri Handling Tangguh dan Herkules, dan Game Master bebas memutuskan bahwa manuver tertentu tidak mungkin dilakukan karena ukuran kendaraan tersebut.

##### Tabel Kehilangan Kontrol 

| 1d100 | Hasil |
| :-: | :-- |
| 01-25 | Berbelok tajam (Swerve). Hilangnya kontrol bersifat sementara. Kendaraan menurunkan kecepatannya sebesar 1 langkah selama 5 detik. |
| 26-40 | Selip (Skid). Pengemudi harus berjuang untuk menjaga kendaraan tetap terkendali. Kendaraan menurunkan kecepatannya sebesar 2 langkah selama 10 detik. |
| 41-50 | Selip Parah (Severe Skid). Kendaraan berakhir menghadap ke arah yang salah dan berhenti selama 15 detik. |
| 51-60 | Terguling (Roll). Kendaraan selip dan terguling, menerima 3d10 Daya Rusak pada Strukturnya. Penumpang harus melakukan lemparan Ketahanan yang berhasil atau menerima 1d10 Daya Rusak pada 1d3 Lokasi Bentur. |
| 61-70 | Terguling Parah (Severe Roll). Seperti di atas, tetapi kendaraan menerima 3d10+10 Daya Rusak dan Penumpang menerima 1d10 Daya Rusak meskipun lemparan Ketahanan berhasil, dan 2d10 jika gagal. |
| 71-80 | Hancur Total (Write-Off). Seperti di atas tetapi kendaraan dikurangi menjadi 0 Struktur. Penumpang menerima Daya Rusak yang sama seperti pada Terguling Parah. |
| 81-90 | Ledakan (Explosion). Seperti di atas tetapi sistem bahan bakar kendaraan menyala dan meledak dalam 1d20+10 detik. Jika tidak dapat menyingkir, penumpang menderita tambahan 1d6 Daya Rusak bakar pada 1d6 lokasi. |
| 91-98 | Ledakan Segera (Immediate Explosion). Seperti di atas tetapi ledakan terjadi seketika. |
| 99-00 | Tabrakan Katastrofik (Catastrophic Crash). Penumpang harus berhasil melakukan lemparan Ketahanan atau tewas seketika. Daya Rusak seperti pada Hancur Total tetap diterima. |


---
## Contoh Kendaraan

---

### Kendaraan Darat

#### Interceptor

Mobil mewah yang dimodifikasi, mobil sport, atau sejenisnya, mobil ini dibuat untuk melaju cepat dan memberikan perlawanan yang setimpal dalam pertempuran. Ini adalah jenis kendaraan yang terpikirkan oleh orang-orang ketika seseorang berkata, "mobil mata-mata."

| Interceptor | |
| :- | :- |
| **Ukuran / Tipe** | Medium Militer |
| **Hull** | 6 |
| **Struktur** | 40 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Handling** | Mudah |
| **Ciri** | [Ejector Seat](0006_Vehicles.md?id=ejector-seat), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dispenser Minyak, Dispenser Asap, Senapan Mesin Menengah Terkait Ganda (2d6+3) |

<br>

---

#### Sepeda Motor Pengejar (Pursuit Motorcycle)

Sepeda motor ringan dan kencang untuk pengejaran cepat, Sepeda Motor Pengejar membawa kejutan – baik sepasang senapan mesin terkait atau dua roket.

| Pursuit Motorcycle | |
| :- | :- |
| **Ukuran / Tipe** | Small Sipil |
| **Hull** | 2 |
| **Struktur** | 12 |
| **Sistem** | 1 |
| **Kecepatan** | Cepat |
| **Handling** | Mudah |
| **Ciri** | [Superior Handling](0006_Vehicles.md?id=superior-handling), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dua Roket (4d6) atau Senapan Mesin Ringan Terkait Ganda (2d6) |

<br>

---

#### Mobil Sedan

Sedan 4 pintu standar yang memiliki ruang cukup untuk menampung pengemudi dan tiga penumpang dengan nyaman. Mengorbankan ruang kargo untuk menyertakan paket pengawasan.

| Mobil Sedan | |
| :- | :- |
| **Ukuran / Tipe** | Medium Sipil |
| **Hull** | 4 |
| **Struktur** | 25 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Handling** | Standar |
| **Ciri** | [Unobtrusive](0006_Vehicles.md?id=unobtrusive), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite) |
| **Senjata** | Tidak ada |

<br>

---

#### Mobil Selam (Submersible Car)

Mobil dua orang yang dapat beralih ke mode air atau selam untuk bepergian di atas atau di bawah air. Dilengkapi dengan torpedo yang dipasang di depan dan rudal darat-ke-udara yang dipasang di atas.

| Mobil Selam | |
| :- | :- |
| **Ukuran / Tipe** | Medium Sipil |
| **Hull** | 6 |
| **Struktur** | 25 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Handling** | Standar |
| **Ciri** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Roket (5d6), Torpedo (4d10) |

<br>

---

#### Van Pengawasan (Surveillance Van)

Van polos tanpa tanda yang menampung tim agen dan serangkaian peralatan perekam audio-visual.

| Van Pengawasan | |
| :- | :- |
| **Ukuran / Tipe** | Large Sipil |
| **Hull** | 9 |
| **Struktur** | 60 |
| **Sistem** | 3 |
| **Kecepatan** | Lembut |
| **Handling** | Standar |
| **Ciri** | [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Tough](0006_Vehicles.md?id=tough) |
| **Senjata** | Tidak ada |

<br>

---

#### Kendaraan Pendukung Taktis

Pickup atau jeep dengan ruang untuk kru dua orang di kabin dan seorang penembak yang berdiri di bagian bak terbuka mengoperasikan Senapan Mesin Menengah yang dipasang pada penyangga putar.

| Kendaraan Pendukung Taktis | |
| :- | :- |
| **Ukuran / Tipe** | Medium Sipil |
| **Hull** | 6 |
| **Struktur** | 30 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Handling** | Standar |
| **Ciri** | [All Terrain](0006_Vehicles.md?id=all-terrain), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Senapan Mesin Menengah Terpasang (2d6) |


<br>

---

### Kendaraan Air

#### Speedboat

Speedboat biasa, dipersenjatai dengan dispenser ranjau yang dipasang di belakang.

| Speedboat | |
| :- | :- |
| **Ukuran / Tipe** | Medium Sipil |
| **Hull** | 3 |
| **Struktur** | 24 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat |
| **Handling** | Standar |
| **Ciri** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dispenser Ranjau (5d6) |

<br>

---

#### Yacht

Jenis yacht mewah yang mungkin dimiliki oleh seorang oligarki. Kemungkinan dilengkapi dengan paket pengawasan untuk melindungi dari musuh yang mencoba melakukan kejahatan.

| Yacht | |
| :- | :- |
| **Ukuran / Tipe** | Huge Sipil |
| **Hull** | 10 |
| **Struktur** | 75 |
| **Sistem** | 4 |
| **Kecepatan** | Lambat |
| **Handling** | Tangguh |
| **Ciri** | [Luxurious](0006_Vehicles.md?id=luxurious), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Waterborne](0006_Vehicles.md?id=waterborne) |
| **Senjata** | Tidak ada |


<br>

---

### Pesawat/Pesawat Luar Angkasa

#### Dirgantara (Kapal Udara Sipil)

Mirip dengan Hindenburg, kelas dirigible transkontinental ini (dan yang lainnya di kelasnya) memiliki panjang 245 meter dan memerlukan kru sebanyak 40 hingga 61 orang. Biasanya dapat membawa sekitar 50 hingga 72 penumpang dalam akomodasi mewah.

| Dirigible | |
| :- | :- |
| **Ukuran / Tipe** | Enormous Sipil |
| **Hull** | 10 |
| **Struktur** | 85 |
| **Sistem** | 5 |
| **Kecepatan** | Berat |
| **Handling** | Herkules |
| **Ciri** | [Airborne](0006_Vehicles.md?id=airborne), [Luxurious](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Perisai** | Tidak ada |
| **Senjata** | Tidak ada |

<br>

---

#### Helikopter Serbu

Helikopter Serbu tradisional menggunakan teknologi pengawasan canggih mereka untuk mencegat sinyal telepon dan internet nirkabel, serta melacak individu dan kendaraan bahkan dalam kegelapan, melalui FLIR. Upaya untuk menghindari pelacak melalui Senyap adalah Tangguh.

| Helikopter Serbu | |
| :- | :- |
| **Ukuran / Tipe** | Large Militer |
| **Hull** | 11 |
| **Struktur** | 50 |
| **Sistem** | 3 |
| **Kecepatan** | Sedang |
| **Handling** | Mudah |
| **Ciri** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Senyap](0006_Vehicles.md?id=stealth), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Perisai** | Tidak ada |
| **Senjata** | 1 Gatling Gun (3d6), 4 Roket (5d6) |

<br>

---

#### Pejuang Multi-Peran (Multi-Role Fighter)

Pesawat tempur berbasis darat dengan dua kursi (mirip tipenya dengan De Havilland Mosquito) ini dikenal karena performa dan fleksibilitasnya. Ruang bomnya mampu membawa dua bom 250 pon (perlakukan sebagai rudal menengah dengan jarak 0) atau satu torpedo.

| Pejuang Multi-Peran | |
| :- | :- |
| **Ukuran / Tipe** | Large Militer |
| **Hull** | 10 |
| **Struktur** | 45 |
| **Sistem** | 3 |
| **Kecepatan** | Sedang |
| **Handling** | Standar |
| **Ciri** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance) |
| **Perisai** | Tidak ada |
| **Senjata** | 4 Gatling Gun yang dipasang di hidung (4d6+3), 1 ruang bom (6d10 - lihat deskripsi) |

<br>

---

#### Kapal Pengangkut Antarbintang (Transportasi Berteknologi Tinggi Ringan)

Transportasi ringan ini memerlukan kru minimum hanya dua orang, dengan ruang untuk maksimal empat penumpang tambahan. Versi stok standar dicatat di sini, namun banyak pemilik akan menerapkan "modifikasi khusus" mereka sendiri seperti ruang kargo tersembunyi, Performa Ditingkatkan, Handling Superior, Ketahanan EMP, Senyap, dan sebagainya.

| Kapal Pengangkut Antarbintang | |
| :- | :- |
| **Ukuran / Tipe** | Medium Pesawat Luar Angkasa Sipil |
| **Hull** | 10 |
| **Struktur** | 80 |
| **Sistem** | 2 |
| **Kecepatan** | Cepat (Faktor Parsec 3) |
| **Handling** | Standar |
| **Ciri** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Space Craft](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Perisai** | 8 |
| **Senjata** | 2x Turret Meriam Laser Quad-mount (5d6) |


<br>

---

#### Unit Kontak Umum (Pesawat Luar Angkasa Ultra Berteknologi Tinggi)

Starship berteknologi sangat tinggi ini adalah representasi fisik dari Pikiran buatan yang sangat canggih, yang berbentuk rangkaian modul yang terhubung di lapangan sepanjang dua kilometer. Modul-modul tersebut memiliki tujuan masing-masing dan mencakup habitat, fasilitas konstruksi, area kargo, pengolahan makanan, kompleks rekreasi, teluk hanggar, dan bahkan beberapa unit rahasia yang jarang, jika pernah, dibahas oleh kecerdasan kapal tersebut. Kapal ini tidak memerlukan kru manusia, tetapi dapat mendukung populasi penumpang hingga 100.000 dengan mudah. Banyak penumpang lahir dan mati di atas Unit Kontak: banyak yang sementara, datang dan pergi sesuka mereka.

| Unit Kontak Umum | |
| :- | :- |
| **Ukuran / Tipe** | Colossal Pesawat Luar Angkasa Sipil |
| **Hull** | 20 |
| **Struktur** | 10.000 |
| **Sistem** | 6 |
| **Kecepatan** | Sedang (Faktor Parsec 4. Pada level teknologi ini, satu Faktor sama dengan 1 jam) |
| **Handling** | Tangguh |
| **Ciri** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Carrier](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxurious](0006_Vehicles.md?id=luxurious), [Space Craft](0006_Vehicles.md?id=space-craft),[Superior Handling](0006_Vehicles.md?id=superior-handling), [Tractor Beam](0006_Vehicles.md?id=tractor-beam) |
| **Perisai** | 30 |
| **Senjata** | Tidak ada yang ingin dibahasnya |

<br>