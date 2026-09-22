# Kendaraan

Kendaraan dalam _Mythras Imperative_ diperlakukan dengan cara yang semi-abstrak. Pada dasarnya, kendaraan hanyalah alat pendukung, digunakan untuk mengantar Karakter dari titik A ke titik B, dengan sedikit kebutuhan akan deskripsi detail atau statistik. Namun, terkadang, Games Master akan memerlukan detail kendaraan saat diperlukan untuk merepresentasikannya dalam situasi pengejaran atau pertempuran.

Aturan di bagian ini memungkinkan representasi sebagian besar jenis kendaraan tetapi dengan cara abstrak yang ditujukan untuk memberikan fleksibilitas dan meningkatkan penceritaan. Pesawat luar angkasa dan wahana antariksa sedikit berbeda, meskipun didasarkan pada prinsip yang serupa.

---
## Statistik

Semua kendaraan dijelaskan dalam hal Struktur, Armor, Kecepatan, Sistem, Sifat, dan Perisai (jika ada dalam latar).

- **[Ukuran](0006_Vehicles.md?id=vehicle-Ukuran-table):** Semua kendaraan memiliki satu dari enam peringkat Ukuran yang menentukan nilai atau rentang dari karakteristik lainnya. Karena ukurannya yang lebih besar dan lingkungan ruang angkasa yang keras, pesawat luar angkasa memiliki rentang nilai tersendiri.
- **[Armor](0006_Vehicles.md?id=terrestrial-hulls):** Mewakili Poin Armor.
- **[Struktur](0006_Vehicles.md?id=terrestrial-hulls):** Mewakili Poin Hit kendaraan.
- **[Perisai](0006_Vehicles.md?id=shields):** Dalam latar dengan teknologi manipulasi energi canggih, mungkin terdapat perisai yang melindungi kendaraan, tetapi bisa terkikis akibat tembakan terus-menerus.
- **[Sistem](0006_Vehicles.md?id=systems):** Mewakili komponen vital kendaraan, termasuk pembangkit listrik, bagian kru, dan sebagainya.
- **[Kecepatan](0006_Vehicles.md?id=speed):** Setiap kendaraan memiliki peringkat Kecepatan dasar.
- **[Sifat](0006_Vehicles.md?id=traits):** Kendaraan mungkin juga memiliki satu atau lebih Sifat. Sifat, seperti Kemampuan yang ditetapkan untuk Makhluk dalam aturan _Mythras Imperative_, atau Sifat Gaya Tarung, menawarkan deskripsi permainan dan keuntungan tambahan, yang mencerminkan sifat kendaraan tersebut.
- **[Senjata](0006_Vehicles.md?id=Senjata):** Sama seperti Sifat, kendaraan dapat dilengkapi dengan senjata sesuai dengan latar. Beberapa contoh dan nilai yang disarankan dirinci di bawah ini.


---
### Ukuran Armor, Tipe, dan Struktur

Ukuran dan tujuan kendaraan memengaruhi ketebalan armornya dan ketahanan struktur internalnya. Sebuah sepeda motor, misalnya, memiliki Armor minimal, karena dibangun untuk kecepatan dan kelincahan. Land Ironclad (monster lapis baja besar dengan roda atau rantai, bertenaga uap atau mesin diesel), karena merupakan kendaraan jauh lebih besar yang dirancang untuk medan perang, memiliki Armor yang jauh lebih besar. Perbandingan ukuran Armor (dan berapa banyak hantaman senjata yang biasanya dapat ditahan) diringkas pada tabel Ukuran Kendaraan dan Armor di bawah ini.

Setiap kali kendaraan menderita kerusakan, daya rusak yang masuk dikurangi oleh nilai Armor-nya. Sisa daya rusak apa pun dikurangi dari poin Struktur kendaraan dan memiliki peluang persentase, yang setara dengan daya rusak yang menembus, untuk memengaruhi suatu Sistem. Jika Struktur kendaraan mencapai nol, kendaraan tersebut akan hancur total atau rusak parah sehingga harus dijadikan barang rongsokan.

##### Armor Terestrial

| Ukuran | Struktur | Nilai Armor Sipil | Nilai Armor Militer | Contoh |
| :-- | :-: | :-: | :-: | :-- |
| Kecil | 1-20 | 1-3 | 4-6 | Sepeda motor, sepeda motor sespan, mobil kompak atau subkompak, kano, kayak, perahu dayung |
| Sedang | 21-40 | 1-6 | 7-9 | Sedan, van panel, pikap, mobil mewah, mobil sport mewah, mobil otot, limosin, sekoci, perahu motor, gantole, autogyro |
| Besar | 41-60 | 4-9 | 10-12 | Truk/lori, limosin panjang, SUV, bus, kendaraan pengangkut, pesawat pribadi, glider, kapal pesiar, tank, helikopter, kapal selam |
| Raksasa | 61-80 | 7-12 | 13-15 | Semi, pesawat penumpang, jet, kapal penjaga pantai, yacht |
| Sangat Besar | 81-100 | 10-15 | 16-18 | Kereta api, kapal pesiar, kapal laut |

##### Armor Pesawat Luar Angkasa

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

Perisai deflektor memberikan lapisan perlindungan tambahan bagi kendaraan yang dapat memasangnya. Perisai bekerja sedikit berbeda dengan Armor, karena sifatnya yang dapat terkikis. Jika daya rusak yang masuk sama dengan atau kurang dari nilai perisai, maka semuanya diblokir. Jika daya rusak melebihi nilai perisai, maka kelebihannya akan mengurangi kekuatan perisai sebesar jumlah tersebut.

_Sebagai contoh, sebuah pengangkut pasukan memiliki kekuatan perisai energi sebesar 12 poin. Jika pengangkut itu terkena laser dengan daya rusak 11, maka tembakan itu tidak menembus dan tidak memiliki efek tambahan. Di sisi lain, jika pengangkut itu terkena ledakan yang menimbulkan daya rusak 15, tiga poin kelebihannya akan menurunkan kekuatan perisai menjadi 9._

Setelah kekuatan perisai deflektor turun menjadi nol, perisai itu akan runtuh. Daya rusak yang tersisa kemudian mengenai Armor.

---
### Sistem

Setiap kali kendaraan menderita kerusakan yang menembus Armor-nya, ada peluang, yang setara dengan daya rusak yang menembus, bahwa suatu Sistem vital telah terpengaruh.

_Sebagai contoh, 10 daya rusak diterapkan pada Perahu Motor - kendaraan dengan 3 Armor dan 24 Struktur. Armor dihitung sebagai pelindung yang mengurangi daya rusak menjadi 7. Ini dikurangi dari 24 poin Struktur dan terdapat 7% peluang untuk merusak salah satu Sistem kendaraan._

Kerusakan yang dapat ditahan suatu Sistem didasarkan murni pada ukuran kendaraan. Ini dimodelkan dengan jumlah hantaman yang dapat diterima suatu Sistem, bukan jumlah kerusakan sebenarnya. Satu Hantaman Sistem pada kendaraan Kecil akan langsung menghancurkan Sistem tersebut. Dibutuhkan dua hantaman untuk menghancurkan Sistem kendaraan berukuran Sedang, tiga untuk kendaraan Besar, dan seterusnya. Lihat [Tabel Kerusakan Sistem](0006_Vehicles.md?id=system-Daya Rusak-table) di bawah ini.

Sistem yang rusak, tetapi belum hancur, menderita kehilangan fungsi yang sebanding dengan jumlah Hantaman yang diterima - baik pengurangan persentase atau penalti Tanjakan pada tugas Sistem. Efek spesifik didasarkan pada apa yang dikendalikan subsistem tersebut, sebagaimana dirinci dalam [Tabel Kerusakan Komponen Sistem](0006_Vehicles.md?id=system-component-Daya Rusak-table) di bawah ini. Tergantung pada Sistem mana yang terkena, efeknya bisa sangat fatal.

_Sebagai contoh, Land Ironclad - kendaraan Sangat Besar dengan 5 Hantaman Sistem - terkena dua kali pada bagian Penggerak akan kehilangan 40% kekuatannya dan akan mengurangi Kecepatan Lambatnya dua Tanjakan menjadi Ponderous. Demikian pula, kapal pengangkut Besar - dengan 3 Hantaman Sistem - yang menerima dua hantaman pada Sistem Mesin/Bahan Bakar akan memiliki penalti dua Tanjakan pada Kecepatan serta penggunaan sistem Elektronik. Hantaman ketiga akan menghancurkan Sistem Mesin/Bahan Bakar dan sekaligus menghancurkan kapal tersebut._


<details>

<summary>* Errata Komunitas</summary>

---

#### Daya Rusak


_Teks asli di sini tadinya lebih jauh. Ditempatkan tepat setelah bagian Sistem karena pengulangan yang tidak perlu dari paragraf sebelumnya._

- _"Daya rusak yang melebihi Armor akan menembus kendaraan, merusak Struktur dan kemungkinan berdampak pada satu atau lebih sistem. Tergantung pada ukuran kendaraan, kerusakan bisa bersifat ringan atau fatal._
- _Sebagai contoh, kendaraan Besar dapat menerima hingga dua hantaman pada suatu Sistem seperti Penggerak. Hantaman ketiga secara fungsional akan menghancurkan Penggerak. Setiap kali sistem menerima hantaman, sistem tersebut kehilangan persentase fungsinya seperti yang dijelaskan dalam kolom Rugi per Hantaman pada Tabel Kerusakan Sistem di bawah ini atau fungsi inti (seperti Penggerak, Pilot, Komunikasi, dan seterusnya) menjadi satu Tanjakan lebih sulit per hantaman yang diterima."_

_Paragraf di atas dihapus dan diganti dengan suntingan singkat yang menyebutkan contoh efek Sistem lainnya._

---

</details>

##### Tabel Kerusakan Sistem

| Ukuran | Hantaman Sistem | Rugi per Hantaman |
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

##### Tabel Kerusakan Sistem (Asli)

| Ukuran | Hantaman Sistem | Rugi per Hantaman |
| :-- | :-: | :-- |
| Kecil | 1 | 1 Tanjakan atau 50% |
| Sedang | 2 | 1 Tanjakan atau 33% |
| Besar | 3 | 1 Tanjakan atau 25% |
| Raksasa | 4 | 1 Tanjakan atau 20% |
| Sangat Besar | 5 | 1 Tanjakan atau 16% |
| Kolosal | 6 | 1 Tanjakan atau 10% |

##### Tabel Ukuran Kendaraan (dari [Ukuran Armor, Tipe, dan Struktur](0006_Vehicles.md?id=hull-Ukuran-type-and-structure))

| Ukuran | Hantaman Sistem |
| :-- | :-: |
| Kecil | 1 |
| Sedang | 2 |
| Besar | 3 |
| Raksasa | 4 |
| Sangat Besar | 5 |
| Kolosal | 6 |

_Aturan dan contoh asli tidak konsisten:_
- _"Sistem yang rusak, tetapi belum hancur, menderita kehilangan fungsi. Ini sama dengan proporsi hantaman saat ini terhadap kemampuan totalnya. Jadi, kendaraan Sangat Besar yang terkena dua kali pada Penggerak akan kehilangan 40% kekuatannya (2 hantaman dari maksimum 5)"._ 
   - _Ini menunjukkan kendaraan Sangat Besar yang ditunjukkan dengan 5 Hantaman Sistem seharusnya kehilangan 20% dengan setiap hantaman - tetapi tabel mengatakan 16%._
- _"Sebagai contoh, kendaraan Besar dapat menerima hingga tiga hantaman pada sistem seperti Penggerak. Hantaman keempat secara fungsional menghancurkan Penggerak."_ 
  - _"Ini menunjukkan - seperti tabel - kerusakan 25% per Hantaman Sistem tetapi kendaraan Besar hanya bisa menerima 3 Hantaman Sistem menurut tabel yang sama._
- _Meskipun tidak konsisten, Tabel Ukuran Kendaraan mubazir; muncul kembali dalam bentuk yang lebih lengkap (menambahkan kolom Rugi per Hantaman) hanya beberapa baris kemudian._

_Hal ini mempersulit pembuatan aturan yang konsisten. Untuk mengatasi masalah ini, nilai dan contoh diubah agar sesuai dan Tabel Ukuran Kendaraan dihapus._

---

</details>


##### Tabel Kerusakan Komponen Sistem

| 1d10 | Sistem | Hasil Rusak | Hasil Hancur |
| :-: | :-- | :-- | :-- |
| 1 | Kargo | Sejumlah harta benda atau peralatan yang disimpan di ruang kargo, sebanding dengan kerusakan, hancur. | Semua kargo hancur. |
| 2 | Komunikasi | Lemparan Komunikasi menderita satu tambahan Tanjakan kesulitan setiap kali rusak. | Kendaraan tidak dapat lagi berkomunikasi atau mengelabui sensor musuh. |
| 3 | Kendali | Lemparan Berperahu, Mengemudi, atau Pilot menderita satu tambahan Tanjakan setiap kali rusak; segera diperlukan lemparan Kendali. | Kendaraan tidak dapat lagi dikemudikan atau diubah arahnya. |
| 4 | Penggerak | Kecepatan berkurang sebesar jumlah yang sebanding dengan kerusakan. | Kendaraan berhenti mendadak; pesawat jatuh. |
| 5 | Kru | Sejumlah penumpang sebanding dengan kerusakan menjadi korban. Mereka yang terkena menderita Luka Mayor dan harus berhasil dalam lemparan Ketahanan atau tewas seketika. | Penumpang kendaraan tewas. |
| 6 | Mesin / Bahan Bakar | Kecepatan berkurang sebesar jumlah yang sebanding dengan kerusakan. Sistem elektronik satu Tanjakan lebih sulit digunakan. | Kendaraan hancur dalam ledakan dahsyat. |
| 7 | Sensor | Lemparan Sensor, Navigasi, dan Serangan Senjata menderita satu tambahan Tanjakan setiap kali rusak. | Kendaraan menjadi buta. |
| 8 | Senjata | Sejumlah sistem senjata sebanding dengan kerusakan menjadi tidak berfungsi. | Kendaraan tidak dapat lagi menembakkan senjata. |
| 9-0 | Tidak ada | Tidak ada sistem yang terkena; hanya kerusakan Struktur. | T/A |

<details>

<summary>* Errata Komunitas</summary>

---

##### Tabel Kerusakan Komponen Sistem (Mesin/Bahan Bakar)

_Hasil asli adalah sebagai berikut: "Kecepatan Maksimum dibelah dua..." Ini bertentangan dengan aturan umum penalti kerusakan yang sebanding dengan kerusakan Sistem: kerusakan 25% = penalti 25%. Selain itu, aturan lengkap dalam Mythras Companion tidak menyebutkan pembagian Kecepatan ini._

_Hasilnya, teks diganti dengan entri yang sama dari Sistem Penggerak: "Kecepatan berkurang sebesar jumlah yang sebanding dengan kerusakan."_

---

</details>


---
### Kecepatan

Karena fisika kecepatan, akselerasi, hambatan, dan inersia (untuk menyebutkan beberapa) adalah masalah yang kompleks, beberapa penyederhanaan diperlukan sehingga kendaraan diberi peringkat kecepatan abstrak. Karakteristik Kecepatan hanya boleh digunakan untuk menilai secara kasar apakah satu kendaraan dapat menyusul atau mengejar kendaraan lain.

Peringkat kecepatan mewakili tingkat operasional nominal kendaraan. Dalam situasi darurat, kinerja ini dapat ditingkatkan satu langkah, dengan risiko keausan atau kerusakan pada mesin. Meskipun tabel yang sama digunakan untuk semua jenis kendaraan, akal sehat harus diterapkan agar hanya kendaraan dari kelas yang sama yang dibandingkan. Sebagai contoh, jika pesawat luar angkasa dan mobil sport keduanya memiliki tingkat akselerasi Cepat yang sama, sudah jelas bahwa pesawat luar angkasa secara komparatif lebih cepat.

Meningkatkan Kecepatan kendaraan di atas nilai standarnya dimungkinkan dengan lemparan Mengemudi yang berhasil. Biasanya, kecepatan ekstra ini hanya dapat dipertahankan untuk waktu yang singkat – tidak lebih dari 1d6 Menit sebelum kendaraan harus turun ke kecepatan standarnya atau berisiko merusak pembangkit listriknya. Lemparan Mengemudi yang kritis memungkinkan periode kecepatan yang lebih tinggi ditingkatkan menjadi 1d12 Menit.

Seorang pengemudi dapat mencoba meningkatkan kecepatan kendaraan sebanyak 2 langkah, tetapi ini memerlukan lemparan Mengemudi Herkules dan kecepatan maksimum yang dapat dipertahankan kendaraan adalah 1d3 Menit: Keberhasilan Kritis tidak akan memperpanjang durasi kecepatan yang ditingkatkan.

##### Tabel Peringkat Kecepatan

| Peringkat Kecepatan | Max Kecepatan Untuk |
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
### Sifat

Jumlah maksimum sifat yang dimiliki kendaraan bergantung pada ukuran Armor dan jenisnya.

Setiap kendaraan memiliki sifat bawaan: mode perjalanan yang dirancang untuknya. Oleh karena itu, pesawat memiliki sifat Lintas Udara bawaan, perahu memiliki sifat Lintas Air bawaan, dan seterusnya. Sifat bawaan ini tidak dihitung dalam jumlah sifat yang tersedia. Namun, jika kendaraan memiliki mode perjalanan kedua — misalnya kapal selam terbang, maka sifat Lintas Udara harus diambil sebagai salah satu sifat yang tersedia.

Beberapa sifat mungkin tidak tersedia, tergantung pada tingkat teknologi latar; Games Master harus membuat penilaian sendiri mengenai sifat mana yang dapat diterapkan.

##### Tabel Alokasi Sifat Kendaraan

| Ukuran | Max Sifat |
| :-- | :-: |
| Kecil | 1 |
| Sedang | 2 |
| Besar | 3 |
| Raksasa | 4 |
| Sangat Besar | 5 |
| Kolosal | 6 |

#### Lintas Udara

Kendaraan mampu terbang di atmosfer.

#### Segala Medan

Sifat ini harus digunakan dengan kendaraan Darat. Kendaraan dapat melintasi medan yang tidak ramah, sulit, dan curam, menggunakan roda rantai, suspensi canggih dan sistem penggerak, atau diferensial penggerak yang kuat.

#### Menggali

Kendaraan dirancang untuk menggali dan membuat terowongan melalui tanah. Kendaraan dapat mencapai kedalaman maksimum yang setara dengan Nilai Armor-nya x5 meter.

#### Menyamar

Kendaraan memiliki cat kamuflase atau sensor mimetik yang memungkinkannya menyatu dengan lingkungan. Upaya untuk melihat kendaraan secara visual menjadi satu Tanjakan lebih sulit.

#### Kargo

Kendaraan dirancang khusus untuk mengangkut kargo daripada penumpang. Kompartemen penumpang dibuat seminimal mungkin dengan sisa ruang kendaraan yang dapat digunakan dikhususkan untuk penyimpanan kargo dengan bagian, peralatan, dan bahkan pengaturan lingkungan (seperti bagian pendingin untuk mengangkut barang yang mudah rusak) yang sesuai. Saat bermuatan kargo, kecepatan kendaraan menjadi dua langkah lebih rendah daripada ukuran Armor yang biasanya diizinkan.

#### Kapal Induk

Kendaraan dirancang khusus untuk membawa kendaraan yang lebih kecil, diawaki sedikit, atau mungkin dikendalikan dari jarak jauh yang bersifat sipil maupun militer. Kendaraan apa pun yang memiliki sifat ini harus setidaknya Sangat Besar. Jumlah kendaraan kecil yang dibawa mungkin bervariasi tergantung pada jenis dan tujuan misi tetapi bisa berjumlah 10 hingga sebanyak nilai Struktur kendaraan tersebut.

#### Konstruksi

Kendaraan dilengkapi untuk pekerjaan konstruksi berat. Semua kendaraan dengan sifat ini juga memiliki sifat Segala Medan, tetapi kecepatannya dua langkah lebih rendah daripada ukuran Armor yang biasanya diizinkan. Kendaraan dilengkapi dengan alat yang sesuai tugasnya seperti lengan derek, sekop penggali, gerobak sampah, dan seterusnya.

#### Tahan EMP

Kendaraan terlindungi terhadap serangan pulsa elektromagnetik.

#### Kinerja Tinggi

Peringkat Kecepatan kendaraan satu langkah lebih tinggi dari maksimum untuk ukurannya.

#### Kursi Lontar

Jika terjadi keadaan darurat, kursi lontar mendorong penumpang beberapa ratus meter ke udara, lalu memasang parasut untuk memungkinkan pendaratan yang aman. Parasut bersifat opsional. Tidak disarankan untuk helikopter (Kamov Ka-52 Alligator adalah pengecualian yang terkenal).

#### FTL

Khusus Pesawat Luar Angkasa. Pesawat dilengkapi dengan mesin lebih cepat dari cahaya (baik itu hyperdrive, warp Mengemudi, generator lubang cacing, atau sejenisnya). Penggerak FTL memiliki peringkat Kecepatan terpisah yang pada dasarnya mengukur kecepatan di mana pesawat luar angkasa dapat melintasi satu parsek (3,26 tahun cahaya, atau 31 triliun kilometer atau 19 triliun mil), sebagai berikut:

##### Tabel Peringkat Kecepatan FTL

| Peringkat Kecepatan | Faktor untuk Melintasi 1 Parsek |
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

Waktu faktor ditentukan oleh Games Master, tergantung pada seberapa maju perkembangan FTL dalam latar tersebut. Sebagai contoh, faktor dasar mungkin 1 Hari, artinya kapal dengan penggerak FTL Ponderous membutuhkan 10 hari untuk menyelesaikan perjalanan, sedangkan kapal dengan penggerak FTL Fleet menyelesaikan perjalanan dalam 1 hari. Di tempat lain, di mana teknologi FTL secara signifikan kurang efisien, waktu faktor mungkin diukur dalam bulan, bukan hari.

Diasumsikan bahwa kapal memiliki cadangan bahan bakar untuk melakukan perjalanan kembali, atau cara untuk mengisi bahan bakar di titik tujuan.

Diasumsikan bahwa pesawat luar angkasa ukuran apa pun dapat dipasangi penggerak FTL, meskipun, sekali lagi, ini tergantung pada latar.

Penggerak FTL tidak dapat diaktifkan dalam jarak 1,5 Satuan Astronomi dari bintang (sekitar 225 juta kilometer, atau 270 juta mil). Ini berarti kapal harus menggunakan penggerak subcahaya untuk bergerak ke sekitar jarak Mars sebelum mengaktifkan sistem FTL.

#### Kendaraan Darat

Kendaraan mampu melakukan perjalanan darat.

#### Melayang

Kendaraan melayang di atas tanah menggunakan bantalan udara atau repulsor anti-gravitasi.

#### Mewah

Kendaraan dirancang khusus untuk mengangkut penumpang pada tingkat kemewahan tertentu. Ruang kargo berlebih diberikan untuk akomodasi penumpang yang mewah, kolam renang, bak mandi air panas, kru tambahan untuk melayani keinginan penumpang, dan sebagainya.

#### Rel

Kendaraan mengandalkan sistem rel. Kendaraan dengan sifat ini secara alami dapat mencapai peringkat Kecepatan tiga langkah lebih tinggi dari ukuran Armor yang biasanya diizinkan, tetapi jelas dibatasi untuk bergerak hanya pada sistem rel.

#### Tangguh

Semua sistem dapat menahan satu hantaman tambahan lebih dari yang ditentukan oleh Ukuran. Sifat ini dapat ditumpuk — jadi Tangguh 2 menunjukkan bahwa sistem dapat menahan 2 hantaman lebih dari biasanya dengan biaya dua poin Sifat.

#### Lintas Air

Kendaraan dapat mengapung di air.

#### Pesawat Luar Angkasa

Kendaraan disegel terhadap ruang hampa dan terlindung dari radiasi kosmik dan mungkin, tergantung pada desainnya, mampu meninggalkan dan masuk kembali ke atmosfer, serta mempertahankan penerbangan di dalam atmosfer.

#### Senyap

Khusus Pesawat Terbang. Kendaraan dirancang untuk menghindari deteksi oleh radar dan sistem sensor jarak jauh lainnya. Upaya untuk melihat kendaraan menggunakan sensor elektronik menjadi satu Tanjakan lebih sulit.

#### Kapal Selam

Kendaraan mampu menyelam di bawah permukaan laut hingga kedalaman operasional sebesar Nilai Armor-nya x10 meter. Kedalaman keruntuhan — kedalaman maksimum absolut yang dapat dicapai kapal selam tanpa hancur — adalah 1,5 kali kedalaman operasionalnya.

#### Penanganan Unggul

Penanganan kendaraan dinilai Mudah.

#### Rangkaian Pengawasan

Kendaraan memiliki komputer bawaan, stasiun pangkalan komunikasi, penerima untuk sinyal alat penyadap, dan peralatan untuk menyadap sinyal ponsel cerdas di sekitar dalam jarak 100 meter.

#### Kuat

Kendaraan sipil dengan sifat ini mengambil Armor-nya dari kolom Militer dan secara otomatis memiliki Struktur maksimum. Kendaraan militer dengan Sifat ini mengambil Armor dan Struktur dari baris berikutnya di bawahnya.

#### Balok Traktor

Khusus Pesawat Luar Angkasa. Kapal dipasangi balok traktor yang dapat menjerat dan menarik kendaraan dengan nilai Armor hingga dua langkah lebih kecil dari miliknya sendiri. Jadi, pesawat luar angkasa Raksasa dapat menarik dan menahan Armor berukuran hingga Sedang.

#### VTOL

Lepas landas/mendarat vertikal. Sifat ini bawaan untuk helikopter dan kendaraan serupa yang menggunakan kombinasi rotor untuk menghasilkan daya angkat. Jika diterapkan pada pesawat sayap tetap, ini menunjukkan penggunaan pendorong tetap atau yang dapat diselaraskan untuk mengendalikan sikap, pendakian, dan penurunan di udara.

#### Berjalan

Kendaraan menggerakkan dirinya sendiri menggunakan kaki yang diartikulasikan. Kendaraan Berjalan dibatasi pada Kecepatan Gentle, berapa pun Ukurannya. Namun, kendaraan Berjalan dapat dibangun hingga ketinggian yang tidak stabil bagi kendaraan yang dilengkapi dengan cara penggerak lain.

Kendaraan ini mampu melakukan gerakan di bawah air.

#### Bersenjata

Kendaraan telah diadaptasi untuk menampung persenjataan. Sistem senjata dibahas di bawah ini di bagian [Senjata](0006_Vehicles.md?id=Senjata).


---
## Senjata

Biasanya, hanya Armor militer yang dirancang untuk menampung persenjataan (titik keras, penyimpanan amunisi, sistem kendali). Sifat 'Bersenjata' dapat diambil untuk kendaraan sipil yang mungkin memiliki kebutuhan senjata.

Jumlah maksimum sistem senjata yang dapat didukung kendaraan setara dengan 1/10 dari Poin Strukturnya (jadi kendaraan dengan 40 Struktur dapat mendukung 4 sistem senjata, jika kendaraan militer, atau kendaraan sipil Bersenjata).

Sistem senjata bergantung pada Ukuran kendaraan. Tipe sistem senjata maksimum untuk Ukuran yang berbeda ditampilkan dalam tabel di bawah ini.


##### Tabel Senjata berdasarkan Ukuran

| Ukuran | Terestrial | Pesawat Luar Angkasa |
| :-- | :-- | :-- |
| Kecil | Senjata Ringan (misal: Senapan Serbu) | Senjata Sedang (misal: Senapan Mesin, Peluncur Roket) |
| Sedang | Senjata Sedang (misal: Senapan Mesin, Peluncur Roket) | Senjata Ber-turet/Berat (misal: Senapan Mesin Terkait Berat, Mini-Gun) |
| Besar | Senjata Ber-turet/Berat (misal: Senapan Mesin Terkait Berat, Mini-Gun) | Baterai Senjata (misal: Artileri Medan) |
| Raksasa | Baterai Senjata (misal: Artileri Medan) | Senjata Canggih (misal: Sistem Rudal) |
| Sangat Besar | Senjata Canggih (misal: Sistem Rudal) | Senjata Terpasang Spinal (hanya satu) |
| Kolosal | T/A | Senjata Terpasang Spinal (hingga 3) |

##### Statistik Senjata Contoh
 
| Senjata | Daya Rusak | Jarak | Kecepatan Tembak | Amunisi/Muatan |
| :-- | :-: | :-: | :-: | :-: |
| Meriam 50 inci | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Senapan Gatling | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Roket | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Rudal Sedang/Torpedo | 6d10 | Jarak maks 200km | 1 | 1/5 |
| Rudal Besar/Jelajah | 6d10+10 | Jarak maks 1000km | 1 | 1/10 |
| Meriam Laser/Plasma | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Meriam Laser/Plasma Berat | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Baterai Artileri | 5d6+6 | Jarak maks 50km | 1 | 1/5 |
| Baterai Terpasang Spinal | 10d6+6 | Jarak maks 20000km | 1 | 1/10 |

_Jarak diberikan dalam meter dan kilometer._

_Kecepatan tembak adalah untuk tembakan tunggal, semi-otomatis, dan otomatis penuh._

_Amunisi adalah kemampuan menembak sebelum perlu diisi ulang. Muatan adalah waktu isi ulang dalam Ronde Pertempuran, dengan asumsi kru lengkap tersedia._

---
## Penanganan dan Manuver

Manuver menghindar atau mendadak memerlukan lemparan Mengemudi/Pilot yang berhasil untuk memastikan pengemudi atau pilot tetap mengendalikan kendaraan. Sebagian besar kendaraan dirancang dan dibangun untuk menahan tekanan dan tarikan sesekali, tetapi Games Master dapat memutuskan bahwa manuver tertentu memerlukan lemparan pada tingkat kesulitan yang lebih tinggi, tergantung seberapa ambisiusnya manuver tersebut. Kegagalan berarti kendali atas kendaraan hilang: lempar pada tabel Kehilangan Kendali.

Perhatikan bahwa Tabel Kehilangan Kendali hanya berlaku untuk kendaraan terestrial. Efek serupa dapat diterapkan pada kendaraan udara dan luar angkasa, tetapi Games Master perlu menyesuaikan alasan untuk efek spesifik tersebut. Sebagai contoh, sebuah pesawat terbang, alih-alih tergelincir, mungkin berputar di luar kendali.

Selain itu, penanganan bawaan kendaraan mungkin memiliki dampak tambahan pada lemparan Mengemudi. Penanganan bisa berupa Mudah, Standar, Sulit, Tangguh, atau Herkules dan menentukan titik awal untuk lemparan Mengemudi saat melakukan manuver. Tanjakan kesulitan untuk manuver tersebut kemudian diterapkan pada penanganan untuk menentukan kesulitan akhir.

Sebagai contoh, sepeda motor berperforma tinggi memiliki girostabilizer bawaan yang memberikannya Penanganan Mudah. Pengemudi ingin melakukan putaran skid 180 derajat untuk menghindari pengejar, manuver yang dinilai Games Master sebagai satu tambahan Tanjakan kesulitan. Oleh karena itu, pengemudi harus melakukan lemparan Mengemudi pada Standar, bukan Mudah. Jika dia mencoba manuver yang sama pada sepeda motor tanpa penstabil, lemparan Mengemudi akan menjadi Sulit.

Penanganan Unggul adalah Sifat. Jika kendaraan tidak memiliki sifat tersebut sebagai bagian dari deskripsinya, maka standarnya adalah penanganan Standar untuk kendaraan ukuran Besar ke bawah. Kendaraan Raksasa dan Sangat Besar secara bawaan memiliki sifat Penanganan Tangguh dan Herkules, dan Games Master bebas memutuskan bahwa manuver tertentu tidak mungkin dilakukan karena ukuran kendaraan tersebut.

##### Tabel Kehilangan Kendali

| 1d100 | Hasil |
| :-: | :-- |
| 01-25 | Membelok. Kehilangan kendali bersifat sementara. Kendaraan menurunkan kecepatannya sebanyak 1 langkah selama 5 detik. |
| 26-40 | Tergelincir. Pengemudi harus berjuang untuk menjaga kendaraan tetap terkendali. Kendaraan menurunkan kecepatannya sebanyak 2 langkah selama 10 detik. |
| 41-50 | Tergelincir Parah. Kendaraan berakhir dengan menghadap ke arah yang salah dan berhenti selama 15 detik. |
| 51-60 | Terguling. Kendaraan tergelincir dan terguling, menderita 3d10 kerusakan pada Strukturnya. Penumpang harus melakukan lemparan Ketahanan yang berhasil atau menderita 1d10 kerusakan pada 1d3 Lokasi Bentur. |
| 61-70 | Terguling Parah. Seperti di atas, tetapi kendaraan menderita 3d10+10 kerusakan dan Penumpang menerima 1d10 kerusakan meskipun lemparan Ketahanan berhasil, dan 2d10 jika gagal. |
| 71-80 | Hancur Total. Seperti di atas tetapi kendaraan dikurangi menjadi 0 Struktur. Penumpang menderita kerusakan yang sama seperti Terguling Parah. |
| 81-90 | Ledakan. Seperti di atas tetapi sistem bahan bakar kendaraan menyala dan meledak dalam 1d20+10 detik. Jika tidak bisa keluar, penumpang menderita tambahan 1d6 kerusakan bakar pada 1d6 lokasi. |
| 91-98 | Ledakan Segera. Seperti di atas tetapi ledakan terjadi segera. |
| 99-00 | Kecelakaan Fatal. Penumpang harus berhasil melakukan lemparan Ketahanan atau tewas seketika. Kerusakan seperti Hancur Total tetap diderita. |


---
## Kendaraan Contoh

---

### Kendaraan Darat

#### Interceptor

Mobil mewah, mobil sport, atau sejenisnya yang dimodifikasi, mobil ini dibangun untuk melaju cepat dan memberikan perlawanan yang setimpal dalam pertempuran. Inilah jenis kendaraan yang dipikirkan orang ketika seseorang menyebut "mobil mata-mata."

| Interceptor | |
| :- | :- |
| **Ukuran / Tipe** | Militer Sedang |
| **Armor** | 6 |
| **Struktur** | 40 |
| **Sistem** | 2 |
| **Kecepatan** | Fast |
| **Penanganan** | Mudah |
| **Sifat** | [Kursi Lontar](0006_Vehicles.md?id=ejector-seat), [Kinerja Tinggi](0006_Vehicles.md?id=enhanced-performance), [Penanganan Unggul](0006_Vehicles.md?id=superior-handling), [Rangkaian Pengawasan](0006_Vehicles.md?id=surveillance-suite), [Bersenjata](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dispenser Tumpahan Oli, Dispenser Asap, Senapan Mesin Sedang Terkait Kembar (2d6+3) |

<br>

---

#### Sepeda Motor Pengejar

Sepeda motor ringan yang cepat untuk pengejaran cepat, Sepeda Motor Pengejar membawa kejutan – baik sepasang senapan mesin terkait atau dua roket.

| Sepeda Motor Pengejar | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Kecil |
| **Armor** | 2 |
| **Struktur** | 12 |
| **Sistem** | 1 |
| **Kecepatan** | Fast |
| **Penanganan** | Mudah |
| **Sifat** | [Penanganan Unggul](0006_Vehicles.md?id=superior-handling), [Bersenjata](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dua Roket (4d6) atau Senapan Mesin Ringan Terkait Kembar (2d6) |

<br>

---

#### Mobil Sedan

Sedan 4 pintu standar dengan ruang yang cukup untuk menampung pengemudi dan tiga penumpang dengan nyaman. Mengorbankan ruang kargo untuk menyertakan rangkaian pengawasan.

| Mobil Sedan | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Sedang |
| **Armor** | 4 |
| **Struktur** | 25 |
| **Sistem** | 2 |
| **Kecepatan** | Rapid |
| **Penanganan** | Standar |
| **Sifat** | [Tidak Mencolok](0006_Vehicles.md?id=unobtrusive), [Rangkaian Pengawasan](0006_Vehicles.md?id=surveillance-suite) |
| **Senjata** | Tidak ada |

<br>

---

#### Mobil Kapal Selam

Mobil dua orang yang dapat beralih ke mode lintas air atau kapal selam untuk melakukan perjalanan di atas atau di bawah air. Dilengkapi dengan torpedo yang terpasang di depan dan rudal permukaan-ke-udara yang terpasang di atas.

| Mobil Kapal Selam | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Sedang |
| **Armor** | 6 |
| **Struktur** | 25 |
| **Sistem** | 2 |
| **Kecepatan** | Fast |
| **Penanganan** | Standar |
| **Sifat** | [Kinerja Tinggi](0006_Vehicles.md?id=enhanced-performance), [Kapal Selam](0006_Vehicles.md?id=submersible), [Lintas Air](0006_Vehicles.md?id=waterborne), [Bersenjata](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Roket (5d6), Torpedo (4d10) |

<br>

---

#### Van Pengawasan

Van polos tanpa tanda yang menampung tim agen dan rangkaian peralatan rekaman audio-visual.

| Van Pengawasan | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Besar |
| **Armor** | 9 |
| **Struktur** | 60 |
| **Sistem** | 3 |
| **Kecepatan** | Gentle |
| **Penanganan** | Standar |
| **Sifat** | [Rangkaian Pengawasan](0006_Vehicles.md?id=surveillance-suite), [Kuat](0006_Vehicles.md?id=tough) |
| **Senjata** | Tidak ada |

<br>

---

#### Kendaraan Pendukung Taktis

Pikap atau jip dengan ruang bagi kru dua orang di kabin dan penembak yang berdiri di bagian bak belakang mengoperasikan Senapan Mesin Sedang yang terpasang pada dudukan putar.

| Kendaraan Pendukung Taktis | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Sedang |
| **Armor** | 6 |
| **Struktur** | 30 |
| **Sistem** | 2 |
| **Kecepatan** | Rapid |
| **Penanganan** | Standar |
| **Sifat** | [Segala Medan](0006_Vehicles.md?id=all-terrain), [Bersenjata](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Senapan Mesin Sedang Terpasang (2d6) |


<br>

---

### Kapal Air

#### Perahu Motor

Perahu motor khas, dipersenjatai dengan dispenser ranjau yang terpasang di belakang.

| Perahu Motor | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Sedang |
| **Armor** | 3 |
| **Struktur** | 24 |
| **Sistem** | 2 |
| **Kecepatan** | Fast |
| **Penanganan** | Standar |
| **Sifat** | [Kinerja Tinggi](0006_Vehicles.md?id=enhanced-performance), [Lintas Air](0006_Vehicles.md?id=waterborne), [Bersenjata](0006_Vehicles.md?id=weaponized) |
| **Senjata** | Dispenser Ranjau (5d6) |

<br>

---

#### Yacht

Jenis kapal pesiar mewah yang mungkin dimiliki seorang oligarki. Kemungkinan dilengkapi dengan rangkaian pengawasan untuk melindungi dari musuh yang mencoba melakukan tindakan tidak baik.

| Yacht | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Raksasa |
| **Armor** | 10 |
| **Struktur** | 75 |
| **Sistem** | 4 |
| **Kecepatan** | Slow |
| **Penanganan** | Tangguh |
| **Sifat** | [Mewah](0006_Vehicles.md?id=luxurious), [Rangkaian Pengawasan](0006_Vehicles.md?id=surveillance-suite), [Lintas Air](0006_Vehicles.md?id=waterborne) |
| **Senjata** | Tidak ada |


<br>

---

### Pesawat/Pesawat Luar Angkasa

#### Dirgantara (Kapal Udara Sipil)

Mirip dengan Hindenburg, kapal udara transkontinental kelas ini (dan yang lainnya di kelasnya) memiliki panjang 245 meter dan memerlukan kru sebanyak 40 hingga 61 orang. Kapal ini biasanya dapat membawa 50 hingga 72 penumpang dalam akomodasi mewah.

| Dirgantara | |
| :- | :- |
| **Ukuran / Tipe** | Sipil Sangat Besar |
| **Armor** | 10 |
| **Struktur** | 85 |
| **Sistem** | 5 |
| **Kecepatan** | Ponderous |
| **Penanganan** | Herkules |
| **Sifat** | [Lintas Udara](0006_Vehicles.md?id=airborne), [Mewah](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Perisai** | Tidak ada |
| **Senjata** | Tidak ada |

<br>

---

#### Helikopter Serbu

Helikopter Serbu tradisional menggunakan teknologi pengawasan canggih untuk menyadap sinyal telepon dan internet nirkabel, serta melacak individu dan kendaraan bahkan dalam kegelapan, melalui FLIR. Upaya untuk menghindari pelacak melalui Senyap adalah Tangguh.

| Helikopter Serbu | |
| :- | :- |
| **Ukuran / Tipe** | Militer Besar |
| **Armor** | 11 |
| **Struktur** | 50 |
| **Sistem** | 3 |
| **Kecepatan** | Moderate |
| **Penanganan** | Mudah |
| **Sifat** | [Lintas Udara](0006_Vehicles.md?id=airborne), [Kinerja Tinggi](0006_Vehicles.md?id=enhanced-performance), [Senyap](0006_Vehicles.md?id=Senyap), [Penanganan Unggul](0006_Vehicles.md?id=superior-handling), [Rangkaian Pengawasan](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Perisai** | Tidak ada |
| **Senjata** | 1 Senapan Gatling (3d6), 4 Roket (5d6) |

<br>

---

#### Pesawat Tempur Multi-Peran

Pesawat tempur berbasis darat dua kursi ini (serupa jenisnya dengan De Havilland Mosquito) terkenal karena kinerja dan keserbagunaannya. Ruang bomnya mampu membawa dua bom seberat 250 lb (dianggap sebagai rudal sedang dengan jangkauan 0) atau satu torpedo tunggal.

| Pesawat Tempur Multi-Peran | |
| :- | :- |
| **Ukuran / Tipe** | Militer Besar |
| **Armor** | 10 |
| **Struktur** | 45 |
| **Sistem** | 3 |
| **Kecepatan** | Moderate |
| **Penanganan** | Standar |
| **Sifat** | [Lintas Udara](0006_Vehicles.md?id=airborne), [Kinerja Tinggi](0006_Vehicles.md?id=enhanced-performance) |
| **Perisai** | Tidak ada |
| **Senjata** | 4 Senapan Gatling Terpasang di Hidung (4d6+3), 1 ruang bom (6d10 - lihat deskripsi) |

<br>

---

#### Pengangkut Antarbintang (Transportasi Berteknologi Tinggi Ringan)

Transportasi ringan ini memerlukan kru minimum hanya dua orang, dengan ruang untuk maksimal empat penumpang tambahan. Versi stok standar dicatat di sini, namun banyak pemilik akan menerapkan "modifikasi khusus" mereka sendiri seperti ruang kargo tersembunyi, Kinerja Tinggi, Penanganan Unggul, Tahan EMP, Senyap, dan sebagainya.

| Pengangkut Antarbintang | |
| :- | :- |
| **Ukuran / Tipe** | Pesawat Luar Angkasa Sipil Sedang |
| **Armor** | 10 |
| **Struktur** | 80 |
| **Sistem** | 2 |
| **Kecepatan** | Rapid (Faktor Parsek 3) |
| **Penanganan** | Standar |
| **Sifat** | [Lintas Udara](0006_Vehicles.md?id=airborne), [Kargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Pesawat Luar Angkasa](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Perisai** | 8 |
| **Senjata** | 2x Turet Meriam Laser Terkait Empat (5d6) |


<br>

---

#### Unit Kontak Umum (Pesawat Luar Angkasa Berteknologi Ultra Tinggi)

Pesawat luar angkasa berteknologi sangat tinggi ini adalah representasi fisik dari Pikiran buatan yang sangat canggih, yang berbentuk rangkaian modul terhubung medan sepanjang dua kilometer. Modul-modul tersebut memiliki tujuan individu dan mencakup habitat, fasilitas konstruksi, area kargo, pengolahan makanan, kompleks rekreasi, ruang hangar, dan bahkan beberapa unit rahasia yang jarang, jika pernah, dibahas oleh intelijen kapal tersebut. Kapal ini tidak memerlukan kru manusia, tetapi dapat dengan mudah mendukung populasi penumpang hingga 100.000 jiwa. Banyak penumpang lahir dan mati di dalam Unit Kontak tersebut: banyak yang transiter, datang dan pergi sesuka mereka.

| Unit Kontak Umum | |
| :- | :- |
| **Ukuran / Tipe** | Pesawat Luar Angkasa Sipil Kolosal |
| **Armor** | 20 |
| **Struktur** | 10.000 |
| **Sistem** | 6 |
| **Kecepatan** | Moderate (Faktor Parsek 4. Pada tingkat teknologi ini, satu Faktor setara dengan 1 jam) |
| **Penanganan** | Tangguh |
| **Sifat** | [Lintas Udara](0006_Vehicles.md?id=airborne), [Kargo](0006_Vehicles.md?id=cargo), [Kapal Induk](0006_Vehicles.md?id=carrier), [Konstruksi](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Mewah](0006_Vehicles.md?id=luxurious), [Pesawat Luar Angkasa](0006_Vehicles.md?id=space-craft), [Penanganan Unggul](0006_Vehicles.md?id=superior-handling), [Balok Traktor](0006_Vehicles.md?id=tractor-beam) |
| **Perisai** | 30 |
| **Senjata** | Tidak ada yang perlu dibahas |

<br>