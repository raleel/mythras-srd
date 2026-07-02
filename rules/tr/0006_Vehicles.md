# Araçlar

_Mythras Imperative_'deki araçlar yarı soyut bir şekilde ele alınır. Esasen, karakterleri A noktasından B noktasına götürmek için kullanılan, ayrıntılı açıklama veya istatistiklere çok az ihtiyaç duyan arka plan araçlarıdır. Ancak zaman zaman, Takip veya çatışma durumlarında araçları temsil etmek gerektiğinde Oyun Yöneticileri araçlar için ayrıntılar isteyecektir.

Bu bölümdeki kurallar, çoğu araç türünü soyut bir şekilde temsil etmeye olanak tanır ve bu, esneklik sağlamayı ve hikaye anlatımını geliştirmeyi amaçlar. Yıldız gemileri ve uzay araçları biraz farklıdır, ancak benzer ilkelere dayanır.

---
## İstatistikler

Tüm araçlar Yapı, Gövde, Hız, Sistemler, Özellikler ve Kalkanlar (ayarın içinde mevcutsa) açısından açıklanır.

- **[Boyut](0006_Vehicles.md?id=vehicle-size-table):** Tüm araçlar, diğer özelliklerin değerini veya aralığını belirleyen altı Boyut derecesinden birine sahiptir. Daha büyük içsel boyutları ve uzayın düşmanca ortamları nedeniyle, yıldız gemilerinin kendi değer aralıkları vardır.
- **[Gövde](0006_Vehicles.md?id=terrestrial-hulls):** Zırh Puanlarını temsil eder.
- **[Yapı](0006_Vehicles.md?id=terrestrial-hulls):** Bir aracın Can Puanlarını temsil eder.
- **[Kalkanlar](0006_Vehicles.md?id=shields):** Gelişmiş enerji manipülasyon teknolojisine sahip ayarlarda, aracı koruyan, ancak sürekli ateş altında aşınabilen kalkanlar bulunabilir.
- **[Sistemler](0006_Vehicles.md?id=systems):** Araçtaki güç ünitesi, mürettebat bölümü ve benzerleri dahil olmak üzere hayati bileşenleri temsil eder.
- **[Hız](0006_Vehicles.md?id=speed):** Her aracın temel bir Hız derecesi vardır.
- **[Özellikler](0006_Vehicles.md?id=traits):** Bir aracın ayrıca bir veya daha fazla Özelliği olabilir. Özellikler, _Mythras Imperative_ kurallarındaki Yaratıklara atanan Yetenekler veya Savaş Tarzı Özellikleri gibi, aracın doğasını yansıtan ek bir oyun açıklaması ve avantajı sunar.
- **[Silahlar](0006_Vehicles.md?id=weapons):** Özelliklere çok benzer şekilde, ayar izin verdiği ölçüde bir araç silahlarla donatılabilir. Bazı önerilen örnekler ve değerler aşağıda ayrıntılı olarak verilmiştir.

---
### Gövde Boyutu, Tipi ve Yapısı

Bir aracın boyutu ve amacı, gövdesinin kalınlığını ve iç yapısının esnekliğini etkiler. Örneğin, bir motosiklet, hızı ve çevikliği için inşa edildiği için minimal bir gövdeye sahiptir. Bir Kara Zırhlısı (buhar veya dizel motorlarla çalışan devasa, paletli veya tekerlekli zırhlı bir canavar), savaş alanı için tasarlanmış çok daha büyük bir araç olduğu için çok daha büyük bir gövdeye sahiptir. Gövdelerin karşılaştırmalı boyutları (ve tipik olarak silahlardan kaç darbe dayanabilecekleri), aşağıdaki Araç Boyutu ve Gövde tablolarında özetlenmiştir.

Bir araç zarar gördüğünde, gelen hasar Gövde değeri tarafından azaltılır. Kalan hasar, aracın Yapı puanlarından çıkarılır ve nüfuz eden hasara eşit bir yüzde şansıyla bir Sistemi etkileme olasılığı vardır. Araç sıfır Yapı'ya düşerse, ya tamamen yok olur ya da o kadar kötü hurdaya ayrılır ki hurdaya çıkarılması gerekir.

##### Kara Gövdeleri

| Boyut | Yapı | Sivil Gövde Değeri | Askeri Gövde Değeri | Örnek |
| :-- | :-: | :-: | :-: | :-- |
| Küçük | 1-20 | 1-3 | 4-6 | Motosiklet, sepetli motosiklet, kompakt veya küçük araba, kano, kayık, sandal |
| Orta | 21-40 | 1-6 | 7-9 | Sedan, panelvan, pikap, lüks araba, lüks spor araba, kaslı araba, limuzin, cankurtaran botu, sürat teknesi, yelken kanat, otogyro |
| Büyük | 41-60 | 4-9 | 10-12 | Kamyon/kamyonet, uzun limuzin, SUV, otobüs, minibüs, kişisel uçak, planör, gezi teknesi, tank, helikopter, denizaltı |
| Çok Büyük | 61-80 | 7-12 | 13-15 | Tır, yolcu uçağı, jet, sahil güvenlik gemisi, yat |
| Devasa | 81-100 | 10-15 | 16-18 | Tren, yolcu gemisi, savaş gemisi |

##### Yıldız Gemisi Gövdeleri

| Boyut | Yapı | Sivil Gövde Değeri | Askeri Gövde Değeri | Örnek |
| :-- | :-: | :-: | :-: | :-- |
| Küçük | 10-50 | 4-9 | 10-12 | Tek kişilik avcı uçağı |
| Orta | 51-150 | 7-12 | 13-15 | Hafif Kargo Gemisi, Uzay Mekiği |
| Büyük | 151-450 | 10-15 | 16-18 | Ağır Kargo Gemisi, Kruvazör |
| Çok Büyük | 451-1350 | 13-18 | 19-21 | Eskort Firkateyni, Hafif Savaş Kruvazörü |
| Devasa | 1351-4050 | 16-21 | 21-24 | Nesil Gemisi, Ağır Savaş Kruvazörü |
| Muazzam | 4050-12110 | 19-24 | 24-30 | Yörünge Habitatı, Gezegen Yok Eden Savaş İstasyonu |

---
### Kalkanlar

Deflektör kalkanları, bunları takabilen araçlar için ek bir koruma katmanı sağlar. Kalkanlar, aşındırıcı doğaları nedeniyle Gövde'den biraz farklı çalışır. Gelen hasar kalkanların değerine eşit veya daha az ise, hepsi engellenir. Hasar kalkan değerini aşarsa, fazlalık kalkan gücünü o miktar kadar azaltır.

_Örneğin, bir birlik taşıyıcının 12 puanlık bir enerji kalkan gücü vardır. Taşıyıcı 11 hasar veren bir lazerle vurulursa, basitçe nüfuz etmez ve ek bir etkisi olmaz. Öte yandan, taşıyıcı 15 hasar veren bir patlamayla vurulursa, fazla üç puan kalkan gücünü 9'a düşürür._

Bir deflektör kalkanının gücü sıfıra düştüğünde çöker. Kalan hasar gövdeye yansır.

---
### Sistemler

Bir araç gövdesini delen hasar aldığında, nüfuz eden hasara eşit bir şansla hayati bir Sistemin etkilenmiş olma olasılığı vardır.

_Örneğin, Hızı 3 Gövde ve 24 Yapıya sahip bir tekne olan Sürat Teknesi'ne 10 hasar uygulanır. Gövde, hasarı 7'ye düşüren zırh görevi görür. Bu, 24 Yapı puanından düşülür ve aracın Sistemlerinden birine zarar verme olasılığı %7'dir._

Bir Sistemin dayanabileceği hasar tamamen aracın boyutuna bağlıdır. Bu, gerçek hasar miktarı yerine bir Sistemin alabileceği vuruş sayısı ile modellenir. Küçük bir araçtaki tek bir Sistem Vuruşu, o Sistemi anında yok eder. Orta boyutlu bir aracın Sistemlerini yıkmak iki vuruş, Büyük bir araç için üç vuruş vb. gerektirir. Aşağıdaki [Sistem Hasar Tablosu](0006_Vehicles.md?id=system-damage-table)'na bakın.

Hasarlı ancak henüz yok edilmemiş Sistemler, alınan Vuruş sayısıyla orantılı olarak işlev kaybına uğrar - ya yüzde olarak bir azalma ya da Sistem görevlerine bir Derece cezası. Belirli etki, alt sistemin neyi kontrol ettiğine bağlıdır, aşağıda [Sistem Bileşeni Hasar Tablosu](0006_Vehicles.md?id=system-component-damage-table)'nda ayrıntılı olarak açıklanmıştır. Hangi Sistemin vurulduğuna bağlı olarak, etkiler felaketle sonuçlanabilir.

_Örneğin, Beş Sistem Vuruşlu Devasa bir araç olan Kara Zırhlısı, Sürücüde iki kez vurulursa gücünün %40'ını kaybeder ve Yavaş Hızını iki Derece düşürerek Yavaşlatılmış hale getirir. Benzer şekilde, Üç Sistem Vuruşlu Büyük bir kargo gemisi, Motor/Yakıt Sistemine iki vuruş alırsa, Hız ve Elektronik sistem kullanımlarında iki Derece cezası alır. Üçüncü bir vuruş Motor/Yakıt Sistemini ve onunla birlikte gemiyi yok eder._

<details>

<summary>* Topluluk Hata Düzeltmeleri</summary>

---

#### Hasar

_Buradaki orijinal metin başlangıçta daha uzaktaydı. Sistemler bölümünden hemen sonra yerleştirilmesi, önceki paragrafı gereksiz yere tekrar ediyordu._

- _"Gövdeyi aşan hasar araca nüfuz eder, Yapı'ya zarar verir ve muhtemelen bir veya daha fazla sistemi etkiler. Aracın boyutuna bağlı olarak, hasar küçük veya felaketle sonuçlanan olabilir._
- _Örneğin, Büyük bir araç Sürücü gibi bir Sisteme iki vuruş alabilir. Üçüncü vuruş Sürücü'yü işlevsel olarak yok eder. Sistem her darbe aldığında, aşağıdaki Sistem Hasar Tablosundaki Vuruş Başına Kayıp sütununda açıklandığı gibi işlevinin bir yüzdesini kaybeder veya bir çekirdek işlev (Sürücü, Pilot, İletişim vb. gibi) her alınan vuruş için bir Zorluk Derecesi daha zor hale gelir."_

_Yukarıdaki paragraflar kaldırılmış ve başka bir örnek Sistem etkisini belirten kısaltılmış bir düzenleme yerine geçmiştir._

---

</details>

##### Sistem Hasar Tablosu

| Boyut | Sistem Vuruşları | Vuruş Başına Kayıp |
| :-- | :-: | :-- |
| Küçük | 1 | %100 - Yok Edildi |
| Orta | 2 | 1 Derece veya %50 |
| Büyük | 3 | 1 Derece veya %33 |
| Çok Büyük | 4 | 1 Derece veya %25 |
| Devasa | 5 | 1 Derece veya %20 |
| Muazzam | 6 | 1 Derece veya %16 |

<details>

<summary>* Topluluk Hata Düzeltmeleri</summary>

---

##### Sistem Hasar Tablosu (Orijinal)

| Boyut | Sistem Vuruşları | Vuruş Başına Kayıp |
| :-- | :-: | :-- |
| Küçük | 1 | 1 Derece veya %50 |
| Orta | 2 | 1 Derece veya %33 |
| Büyük | 3 | 1 Derece veya %25 |
| Çok Büyük | 4 | 1 Derece veya %20 |
| Devasa | 5 | 1 Derece veya %16 |
| Muazzam | 6 | 1 Derece veya %10 |

##### Araç Boyut Tablosu ([Gövde Boyutu, Tipi ve Yapısı](0006_Vehicles.md?id=hull-size-type-and-structure) bölümünden)

| Boyut | Sistem Vuruşları |
| :-- | :-: |
| Küçük | 1 |
| Orta | 2 |
| Büyük | 3 |
| Çok Büyük | 4 |
| Devasa | 5 |
| Muazzam | 6 |

_Orijinal kurallar ve örnekler tutarsızdır:_
- _"Hasar görmüş, ancak henüz yok edilmemiş sistemler, işlevsellik kaybına uğrar. Bu, mevcut vuruşların toplam kapasitesine oranına eşittir. Bu nedenle, Sürücüde iki kez vurulan Devasa bir araç, gücünün %40'ını kaybeder (maksimum 5 vuruştan 2'si)"._
  - _Bu, 5 Sistem Vuruşu ile gösterilen Devasa aracın her vuruşta %20 kaybetmesi gerektiğini düşündürür - ancak tabloda %16 diyor._
- _"Örneğin, Büyük bir araç Sürücü gibi bir sisteme üç vuruş alabilir. Dördüncü vuruş Sürücü'yü işlevsel olarak yok eder."_
  - _Bu, tablonun da belirttiği gibi, Sistem Vuruşu başına %25 hasar anlamına gelir, ancak aynı tabloya göre Büyük Araçlar sadece 3 Sistem Vuruşu alabilir._
- _Tutarsız olmasa da, Araç Boyut Tablosu gereksizdi; birkaç satır sonra daha eksiksiz bir şekilde (Vuruş Başına Kayıp sütunu eklenerek) tekrar görünüyordu._

_Bu, tutarlı bir kurala sahip olmayı zorlaştırır. Bu sorunları çözmek için, değerler ve örnekler eşleşecek şekilde değiştirildi ve Araç Boyut Tablosu kaldırıldı._

---

</details>

##### Sistem Bileşeni Hasar Tablosu

| 1d10 | Sistem | Hasarlı Sonuç | Yok Edilmiş Sonuç |
| :-: | :-- | :-- | :-- |
| 1 | Kargo | Ambarında depolanan, hasara orantılı miktarda eşya veya ekipman yok edilir. | Tüm kargo yok edilir. |
| 2 | İletişim | İletişim zarları her hasar aldıklarında bir ek Zorluk Derecesi zorluk çekerler. | Araç artık iletişim kuramaz veya düşman sensörlerini yanıltamaz. |
| 3 | Kontroller | Teknecilik, Sürüş veya Pilotaj zarları her hasar aldıklarında bir ek Zorluk Derecesi zorluk çekerler; anında Kontrol zarı gereklidir. | Araç artık yönlendirilemez veya rota değiştiremez. |
| 4 | Sürüş | Hız, hasara orantılı olarak azalır. | Araç aniden durur; uçaklar düşer. |
| 5 | Mürettebat | Hasara orantılı sayıda yolcu kayıp verir. Etkilenenler Ağır Yaralanma alır ve bir Dayanıklılık zarı başarısız olursa anında ölür. | Araçtaki yolcular ölür. |
| 6 | Motor / Yakıt | Hız, hasara orantılı olarak azalır. Elektronik sistemlerin kullanımı bir Zorluk Derecesi daha zor hale gelir. | Araç felaketle sonuçlanan bir patlamada yok olur. |
| 7 | Sensörler | Sensör, Navigasyon ve Silah saldırı zarları her hasar aldıklarında bir ek Zorluk Derecesi zorluk çekerler. | Araç kör hale gelir. |
| 8 | Silahlar | Hasara orantılı sayıda silah sistemi devre dışı kalır. | Araç artık silah ateşleyemez. |
| 9-0 | Yok | Hiçbir sistem vurulmadı; sadece Yapı hasarı. | N/A |

<details>

<summary>* Topluluk Hata Düzeltmeleri</summary>

---

##### Sistem Bileşeni Hasar Tablosu (Motor/Yakıt)

_Orijinal sonuç şöyleydi: "Maksimum Hız yarıya iner..." Bu, Sistem hasarına orantılı hasar cezaları genel kuralıyla çelişiyor: %25 hasar = %25 ceza. Ayrıca, Mythras Companion'daki tam kurallar bu Hızın yarıya inmesinden bahsetmiyor._

_Sonuç olarak metin, Sürüş Sistemlerindeki aynı girişle değiştirildi: "Hız, hasara orantılı olarak azalır."_

---

</details>

---
### Hız

Hız, ivme, sürüklenme ve atalet (birkaçı sayılabilir) fiziği karmaşık konular olduğundan, bazı basitleştirmeler gereklidir ve bu nedenle araçlara soyut bir hız derecesi verilir. Hız özelliği, yalnızca bir aracın diğerini geçip geçemeyeceğini veya yakalayıp yakalayamayacağını kabaca değerlendirmek için kullanılmalıdır.

Hız derecesi, bir aracın nominal çalışma oranını temsil eder. Acil durumlarda bu performans bir adım artırılabilir, ancak motorlarda aşınma veya hasar riski vardır. Tüm araç türleri için aynı tablo kullanılsa da, yalnızca aynı sınıftaki araçlar karşılaştırılacak şekilde sağduyu uygulanmalıdır. Örneğin, bir Yıldız Gemisi ve bir spor araba aynı Hızlı ivme oranına sahipse, uzay gemisinin karşılaştırmalı olarak daha hızlı olduğu açık olmalıdır.

Bir aracın Hızını standart değerinin ötesine çıkarmak, başarılı bir Sürüş zarıyla mümkündür. Genellikle, bu ekstra hız sadece kısa bir süre sürdürülebilir – araç standart hızına düşmek veya güç ünitesine zarar verme riskiyle karşı karşıya kalmadan 1d6 dakikadan fazla değil. Kritik bir Sürüş zarı, yüksek hız süresinin 1d12 dakikaya çıkarılmasına izin verir.

Bir sürücü, aracın hızını 2 adım artırmaya çalışabilir, ancak bu, Herkülvarı bir Sürüş zarı gerektirir ve aracın bu hızı sürdürebileceği maksimum süre 1d3 dakikadır: Kritik Başarı, artan hızın süresini uzatmaz.

##### Hız Derecesi Tablosu

| Hız Derecesi | Maksimum Hız İçin |
| :-- | :-: |
| Yavaşlatılmış | Devasa |
| Ağırdan Alan | |
| Yavaş | Çok Büyük |
| Ortalama | |
| Sakin | Büyük |
| Orta | |
| Hızlı | Orta |
| Çabuk | |
| Filo | Küçük |

---
### Özellikler

Bir aracın sahip olabileceği maksimum özellik sayısı gövde boyutuna ve türüne bağlıdır.

Her aracın doğasında bir özellik vardır: öncelikli olarak tasarlandığı seyahat modu. Bu nedenle, uçaklar doğal olarak Havada özelliğine, tekneler Denizde özelliğine vb. sahiptir. Bu doğal özellik, mevcut özellik sayısına dahil edilmez. Ancak, bir araç ikinci bir seyahat modunu içeriyorsa — örneğin uçan bir denizaltı — o zaman Havada özelliğinin mevcut özelliklerinden biri olarak alınması gerekir.

Bazı özellikler, ayarın teknoloji seviyesine bağlı olarak mevcut olmayabilir; Oyun Yöneticileri, hangi özelliklerin uygulanabileceği konusunda kendi kararlarını vermelidir.

##### Araç Özellik Tahsis Tablosu

| Boyut | Maksimum Özellik |
| :-- | :-: |
| Küçük | 1 |
| Orta | 2 |
| Büyük | 3 |
| Çok Büyük | 4 |
| Devasa | 5 |
| Muazzam | 6 |

#### Havada

Araç atmosferik uçuş yapabilir.

#### Tüm Arazi

Bu Özellik, Kara araçlarıyla birlikte kullanılmalıdır. Araç, paletler, gelişmiş süspansiyon ve tahrik sistemleri veya güçlü tahrik diferansiyelleri kullanarak elverişsiz, zorlu ve dik arazileri geçebilir.

#### Tünel Kazan

Araç, yer altında tünel kazmak ve ilerlemek için tasarlanmıştır. Gövde Derecesi x5 metreye eşit maksimum derinliğe ulaşabilir.

#### Kamufle Edilmiş

Araç, ortamıyla bütünleşmesini sağlayan kamuflaj boyasına veya mimik sensörlere sahiptir. Aracı görsel olarak tespit etme girişimleri bir derece daha zordur.

#### Kargo

Araç, yolcu yerine kargo taşımak için özel olarak tasarlanmıştır. Yolcu bölmeleri minimumda tutulurken, aracın kullanılabilir alanının geri kalanı uygun bölümler, araçlar ve hatta çevresel koşullandırma (bozulabilir maddeleri taşımak için dondurucu bölümler gibi) ile kargo depolamaya ayrılmıştır. Kargo yüklüyken aracın hızı, gövde boyutunun normalde izin vereceğinden iki adım daha düşüktür.

#### Taşıyıcı

Araç, sivil veya askeri nitelikte daha küçük, az mürettebatlı veya muhtemelen uzaktan kumandalı araçları taşımak için özel olarak tasarlanmıştır. Bu özelliğe sahip herhangi bir aracın en az Devasa olması gerekir. Taşınan küçük araçların sayısı görev tipine ve amacına göre değişebilir, ancak 10'dan aracın Yapı derecesi kadar olabilir.

#### İnşaat

Araç, ağır inşaat işleri için donatılmıştır. Bu özelliğe sahip tüm araçlar, Tüm Arazi özelliğine de sahiptir, ancak hızları gövde boyutlarının normalde izin vereceğinden iki adım daha düşüktür. Araç, vinç bomları, kazıcı kürekler, damperli kamyonlar vb. gibi göreve uygun araçlarla donatılmıştır.

#### EMP Dirençli

Araç, elektromanyetik darbe saldırılarına karşı korunmuştur.

#### Geliştirilmiş Performans

Aracın Hız derecesi, boyutu için maksimumdan bir adım daha yüksektir.

#### Fırlatma Koltuğu

Acil bir durumda, bir fırlatma koltuğu yolcuları birkaç yüz metre havaya fırlatır, ardından güvenli bir iniş için bir paraşüt açar. Paraşüt isteğe bağlıdır. Helikopterler için önerilmez (Kamov Ka-52 Alligator dikkat çekici bir istisnadır).

#### Işık Hızından Hızlı (FTL)

Sadece Uzay Aracı. Gemi, ışık hızından hızlı bir motorla donatılmıştır (bu bir hiper sürücü, warp sürücü, solucan deliği jeneratörü veya benzeri olabilir). FTL sürücüsünün, bir yıldız gemisinin tek bir parseği (3.26 ışık yılı veya 31 trilyon kilometre veya 19 trilyon mil) geçme oranını esasen ölçen ayrı bir Hız derecesi vardır:

##### FTL Hız Derecesi Tablosu

| Hız Derecesi | 1 Parseki Geçme Faktörü |
| :-- | :-: |
| Yavaşlatılmış | 10 |
| Ağırdan Alan | 8 |
| Yavaş | 7 |
| Ortalama | 6 |
| Sakin | 5 |
| Orta | 4 |
| Hızlı | 3 |
| Çabuk | 2 |
| Filo | 1 |

Faktör süresi, ayarın FTL gelişiminin ne kadar gelişmiş olduğuna bağlı olarak Oyun Yöneticisi tarafından belirlenir. Örneğin, temel faktör 1 Gün olabilir, bu da Yavaşlatılmış bir FTL sürücüsüne sahip bir geminin yolculuğu tamamlaması 10 gün sürerken, Filo FTL sürücüsüne sahip bir geminin yolculuğu 1 günde tamamladığı anlamına gelir. Başka yerlerde, FTL teknolojisinin önemli ölçüde daha az verimli olduğu durumlarda, faktör süresi günler yerine aylarla ölçülebilir.

Geminin ya dönüş yolculuğu yapacak yakıt rezervlerine sahip olduğu ya da hedef noktada yakıt ikmali yapacak bir araca sahip olduğu varsayılır.

Yıldız gemisinin herhangi bir boyutunun bir FTL sürücüsü ile donatılabilir olduğu varsayılır, ancak bu yine ayara bağlıdır.

FTL sürücüleri, bir yıldızdan 1.5 Astronomik Birim (yaklaşık 225 milyon kilometre veya 270 milyon mil) içinde etkinleştirilemez. Bu, gemilerin FTL sistemini etkinleştirmeden önce yaklaşık Mars mesafesine kadar hareket etmek için alt ışık sürücüsünü kullanması gerektiği anlamına gelir.

#### Kara Aracı

Araç karada seyahat edebilir.

#### Havada Asılı

Araç, ya bir hava yastığı ya da bir yerçekimi önleyici itici kullanarak yerden havada asılı durur.

#### Lüks

Araç, yolcuları belirli bir lüks seviyesinde taşımak için özel olarak tasarlanmıştır. Fazla kargo alanı, lüks yolcu konaklama yerlerine, yüzme havuzlarına, jakuzilere, yolcuların isteklerini yerine getirmek için ekstra mürettebata vb. ayrılmıştır.

#### Raylı

Araç, bir ray sistemine dayanır. Bu özelliğe sahip araçlar, doğal olarak gövde boyutlarının normalde izin vereceğinden üç adım daha yüksek bir Hız derecesine ulaşabilir, ancak açıkça yalnızca ray sistemi üzerinde hareketle kısıtlıdır.

#### Dirençli

Tüm sistemler, Boyut tarafından normalde belirlenenin bir vuruş fazlasına dayanabilir. Bu Özellik üst üste eklenebilir — yani Dirençli 2, sistemlerin normalden 2 vuruş daha fazlasına dayanabileceğini, iki Özellik puanı maliyetiyle gösterir.

#### Denizde

Araç su üzerinde yüzer.

#### Uzay Aracı

Araç, vakuma karşı yalıtılmış ve kozmik radyasyona karşı korunmuştur ve tasarıma bağlı olarak atmosferden ayrılıp tekrar girebilir ve atmosfer içinde uçuşu sürdürebilir.

#### Gizlilik

Sadece Uçak. Araç, radar ve diğer uzun menzilli sensör sistemleri tarafından tespit edilmekten kaçınmak için tasarlanmıştır. Elektronik sensörler kullanarak aracı tespit etme girişimleri bir derece daha zordur.

#### Denizaltı

Araç, bir okyanusun yüzeyinin altına, Gövde Derecesi x10 metre çalışma derinliğine kadar dalabilir. Çökme derinliği — denizaltının ezilmeden ulaşabileceği mutlak maksimum — çalışma derinliğinin 1.5 katıdır.

#### Üstün Kullanım

Aracın kullanımı Kolay olarak derecelendirilir.

#### Gözetleme Süiti

Araçta yerleşik bir bilgisayar, iletişim ana istasyonu, dinleme cihazı sinyalleri için bir alıcı ve 100 metre içindeki yakındaki akıllı telefon sinyallerini yakalama aparatı bulunur.

#### Dayanıklı

Bu özelliğe sahip bir sivil araç, Gövdesini Askeri sütundan alır ve otomatik olarak maksimum Yapı'ya sahiptir. Bu özelliğe sahip bir Askeri araç, Gövdesini ve Yapısını bir sonraki sıradan alır.

#### Traktör Işını

Sadece Uzay Aracı. Gemi, kendi gövde derecesinden iki adıma kadar daha küçük gövde derecesine sahip araçları yakalayabilen ve kendine çekebilen bir traktör ışını ile donatılmıştır. Böylece, Çok Büyük bir yıldız gemisi Orta boyuta kadar bir gövdeyi çekip tutabilir.

#### VTOL

Dikey kalkış/iniş. Bu özellik, kaldırma kuvveti üretmek için rotor kombinasyonunu kullanan helikopterler ve benzeri araçlar için doğaldır. Sabit kanatlı uçaklara uygulandığında, havada tutum, yükselme ve alçalmayı kontrol etmek için sabit veya hizalanabilir iticilerin kullanımını gösterir.

#### Su Aracı

Araç, mafsallı bacaklar kullanarak kendini hareket ettirir. Yürüteç araçlar, boyutlarına bakılmaksızın Sakin Hızında sınırlıdır. Ancak, Yürüteçler, diğer hareket araçlarıyla donatılmış araçlar için basitçe dengesiz olacak yüksekliklerde inşa edilebilir.

Bu araç, su altı hareketi yapabilir.

#### Silahlı

Araç, silahları barındıracak şekilde uyarlanmıştır. Silah sistemleri aşağıda [Silahlar](0006_Vehicles.md?id=weapons) bölümünde tartışılmaktadır.

---
## Silahlar

Genellikle, sadece askeri gövdeler silahları barındıracak şekilde tasarlanmıştır (bağlantı noktaları, mühimmat depolama, kontrol sistemleri). "Silahlı" Özelliği, silah gereksinimleri olabilecek sivil araçlar için alınabilir.

Bir aracın destekleyebileceği maksimum silah sistemi sayısı, Yapı Puanlarının 1/10'una eşittir (yani 40 Yapıya sahip bir araç, askeri bir araçsa veya Silahlı bir sivil araçsa 4 silah sistemi destekleyebilir).

Silah sistemleri aracın Boyutuna bağlıdır. Farklı Boyutlar için maksimum silah sistemi türleri aşağıdaki tablolarda gösterilmiştir.

##### Boyuta Göre Silahlar Tablosu

| Boyut | Kara | Uzay Aracı |
| :-- | :-- | :-- |
| Küçük | Hafif Silah (örn. Saldırı Tüfeği) | Orta Silah (örn. Makineli Tüfek, Roket Atar) |
| Orta | Orta Silah (örn. Makineli Tüfek, Roket Atar) | Kuleli/Ağır Silah (örn. Ağır Bağlı Makineli Tüfekler, Minigunlar) |
| Büyük | Kuleli/Ağır Silah (örn. Ağır Bağlı Makineli Tüfekler, Minigunlar) | Silah Bataryası (örn. Savaş Alanı Topçusu) |
| Çok Büyük | Silah Bataryası (örn. Savaş Alanı Topçusu) | Gelişmiş Silahlar (örn. Füze Sistemleri) |
| Devasa | Gelişmiş Silahlar (örn. Füze Sistemleri) | Omurga Monteli Silahlar (sadece bir tane) |
| Muazzam | N/A | Omurga Monteli Silahlar (en fazla 3) |

##### Örnek Silah İstatistikleri

| Silah | Hasar | Menzil | Atış Hızı | Mühimmat/Yükleme |
| :-- | :-: | :-: | :-: | :-: |
| 50 inç Top | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling Gun | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Roket | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Orta Füze/Torpid | 6d10 | Maks menzil 200km | 1 | 1/5 |
| Büyük/Seyir Füzesi | 6d10+10 | Maks menzil 1000km | 1 | 1/10 |
| Lazer/Plazma Topu | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Ağır Lazer/Plazma Topu | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Topçu Bataryası | 5d6+6 | Maks menzil 50km | 1 | 1/5 |
| Omurga Monteli Batarya | 10d6+6 | Maks menzil 20000km | 1 | 1/10 |

_Menziller metre ve kilometre olarak verilmiştir._

_Atış hızları tek atış, yarı otomatik ve tam otomatik içindir._

_Mühimmat, yeniden yüklenmesi gerekmeden önceki atış kapasitesidir. Yükleme, tam mürettebatın mevcut olduğu varsayıldığında Savaş Turları cinsinden yeniden yükleme süresidir._

---
## Kullanım ve Manevralar

Kaçış veya ani manevralar, sürücü veya pilotun aracın kontrolünü sağlamasını temin etmek için başarılı bir Sürüş/Pilotaj zarı gerektirir. Çoğu araç, ara sıra stres ve gerilime dayanacak şekilde tasarlanmış ve üretilmiştir, ancak Oyun Yöneticisi, manevranın ne kadar iddialı olduğuna bağlı olarak belirli bir manevranın daha yüksek bir zorluk derecesinde bir zar gerektirdiğine karar verebilir. Başarısızlık, aracın kontrolünün kaybedilmesi anlamına gelir: Kontrol Kaybı tablosuna bakın.

Kontrol Kaybı Tablosunun sadece kara araçları için geçerli olduğunu unutmayın. Benzer etkiler hava ve uzay araçları için de uygulanabilir, ancak Oyun Yöneticilerinin belirli etki için gerekçeyi ayarlamaları gerekecektir. Örneğin, bir uçak, kaymak yerine spin atabilir.

Ayrıca, bir aracın doğal kullanımının Sürüş zarı üzerinde ek bir etkisi olabilir. Kullanım ya Kolay, Standart, Zor, Müthiş veya Herkülvarı'dır ve bir manevra gerçekleştirirken Sürüş zarı için başlangıç noktasını belirler. Manevra için zorluk derecesi daha sonra nihai zorluğu belirlemek için kullanıma uygulanır.

Örneğin, yüksek performanslı bir motosiklet, Kolay kullanım sağlayan yerleşik jiroskop dengeleyicilere sahiptir. Sürücü, bir takipçiden kaçmak için 180 derecelik bir kayma dönüşü yapmak istiyor, Oyun Yöneticisi bu manevrayı bir ek zorluk derecesinde derecelendiriyor. Bu nedenle sürücünün Sürüş zarını Kolay yerine Standart olarak yapması gerekir. Aynı manevrayı stabilize edilmemiş bir motosiklette yapmaya çalışsaydı, Sürüş zarı Zor olurdu.

Üstün Kullanım bir Özelliktir. Bir araç, açıklamasının bir parçası olarak bu özelliğe sahip değilse, Büyük ve altındaki herhangi bir araç için varsayılan Standart kullanımdır. Çok Büyük ve Devasa araçlar doğal olarak Müthiş ve Herkülvarı Kullanım özelliğine sahiptir ve Oyun Yöneticisi, aracın boyutu nedeniyle belirli manevraların basitçe imkansız olduğuna karar verme özgürlüğüne sahiptir.

##### Kontrol Kaybı Tablosu

| 1d100 | Sonuç |
| :-: | :-- |
| 01-25 | Savrulma. Kontrol kaybı geçicidir. Araç hızı 5 saniye boyunca 1 adım düşer. |
| 26-40 | Kayma. Sürücü aracı kontrol altında tutmak için savaşmalıdır. Araç hızı 10 saniye boyunca 2 adım düşer. |
| 41-50 | Şiddetli Kayma. Araç yanlış yöne döner ve 15 saniye boyunca durur. |
| 51-60 | Yuvarlanma. Araç kayar ve yuvarlanır, Yapı'sına 3d10 hasar verir. Yolcular başarılı Dayanıklılık zarları yapmalı veya 1d3 Vurulan Yerlerine 1d10 hasar almalıdır. |
| 61-70 | Şiddetli Yuvarlanma. Yukarıdaki gibi, ancak araç 3d10+10 hasar alır ve Yolcular Dayanıklılık zarı başarılı olsa bile 1d10 hasar, başarısız olursa 2d10 hasar alır. |
| 71-80 | Hurdaya Çıkma. Yukarıdaki gibi, ancak araç 0 Yapı'ya düşer. Yolcular Şiddetli Yuvarlanma ile aynı hasarı alır. |
| 81-90 | Patlama. Yukarıdaki gibi, ancak aracın yakıt sistemi 1d20+10 saniye içinde alev alır ve patlar. Uzaklaşamazlarsa, yolcular 1d6 yerlerine ek 1d6 yanık hasarı alır. |
| 91-98 | Anında Patlama. Yukarıdaki gibi, ancak patlama anında gerçekleşir. |
| 99-00 | Felaketle Sonuçlanan Kaza. Yolcular başarılı Dayanıklılık zarı yapmalı veya anında ölmelidir. Hurdaya Çıkma ile aynı hasar alınır. |

---
## Örnek Araçlar

---

### Kara Araçları

#### Önleyici

Hızlandırılmış bir lüks otomobil, spor otomobil veya benzeri bir araç olan bu otomobil, hızlı gitmek ve bir savaşta karşılık vermek için yapılmıştır. İnsanların "casus arabası" dediğinde düşündükleri türden bir araçtır.

| Önleyici | |
| :- | :- |
| **Boyut / Tip** | Orta Askeri |
| **Gövde** | 6 |
| **Yapı** | 40 |
| **Sistemler** | 2 |
| **Hız** | Hızlı |
| **Kullanım** | Kolay |
| **Özellikler** | [Fırlatma Koltuğu](0006_Vehicles.md?id=ejector-seat), [Geliştirilmiş Performans](0006_Vehicles.md?id=enhanced-performance), [Üstün Kullanım](0006_Vehicles.md?id=superior-handling), [Gözetleme Süiti](0006_Vehicles.md?id=surveillance-suite), [Silahlı](0006_Vehicles.md?id=weaponized) |
| **Silahlar** | Yağ Sıyırıcı Dağıtıcı, Duman Dağıtıcı, Çift Bağlı Orta Makineli Tüfekler (2d6+3) |

<br>

---

#### Takip Motosikleti

Hızlı takipler için hafif, hızlı bir motosiklet olan Takip Motosikleti bir sürpriz taşır – ya bir çift bağlı makineli tüfek ya da iki roket.

| Takip Motosikleti | |
| :- | :- |
| **Boyut / Tip** | Küçük Sivil |
| **Gövde** | 2 |
| **Yapı** | 12 |
| **Sistemler** | 1 |
| **Hız** | Hızlı |
| **Kullanım** | Kolay |
| **Özellikler** | [Üstün Kullanım](0006_Vehicles.md?id=superior-handling), [Silahlı](0006_Vehicles.md?id=weaponized) |
| **Silahlar** | İki Roket (4d6) veya Çift Bağlı Hafif Makineli Tüfekler (2d6) |

<br>

---

#### Sedan Araba

Rahatça bir sürücü ve üç yolcu oturtacak kadar alana sahip standart 4 kapılı bir sedan. Gözetleme süiti içermek için kargo alanından fedakarlık eder.

| Sedan Araba | |
| :- | :- |
| **Boyut / Tip** | Orta Sivil |
| **Gövde** | 4 |
| **Yapı** | 25 |
| **Sistemler** | 2 |
| **Hız** | Hızlı |
| **Kullanım** | Standart |
| **Özellikler** | [Göze Batmayan](0006_Vehicles.md?id=unobtrusive), [Gözetleme Süiti](0006_Vehicles.md?id=surveillance-suite) |
| **Silahlar** | Yok |

<br>

---

#### Denizaltı Araba

Su üzerinde veya altında seyahat etmek için su aracı veya denizaltı moduna geçebilen iki kişilik bir araba. Öne monte edilmiş bir torpidosu ve üste monte edilmiş bir karadan havaya füzesi vardır.

| Denizaltı Araba | |
| :- | :- |
| **Boyut / Tip** | Orta Sivil |
| **Gövde** | 6 |
| **Yapı** | 25 |
| **Sistemler** | 2 |
| **Hız** | Hızlı |
| **Kullanım** | Standart |
| **Özellikler** | [Geliştirilmiş Performans](0006_Vehicles.md?id=enhanced-performance), [Denizaltı](0006_Vehicles.md?id=submersible), [Su Aracı](0006_Vehicles.md?id=waterborne), [Silahlı](0006_Vehicles.md?id=weaponized) |
| **Silahlar** | Roket (5d6), Torpido (4d10) |

<br>

---

#### Gözetleme Vanı

Bir ekip ajan ve bir dizi görsel-işitsel kayıt ekipmanı barındıran düz, işaretsiz bir van.

| Gözetleme Vanı | |
| :- | :- |
| **Boyut / Tip** | Büyük Sivil |
| **Gövde** | 9 |
| **Yapı** | 60 |
| **Sistemler** | 3 |
| **Hız** | Sakin |
| **Kullanım** | Standart |
| **Özellikler** | [Gözetleme Süiti](0006_Vehicles.md?id=surveillance-suite), [Dayanıklı](0006_Vehicles.md?id=tough) |
| **Silahlar** | Yok |

<br>

---

#### Taktik Destek Aracı

Kabinde iki kişilik mürettebat için yer ve döner monteli bir Orta Makineli Tüfek kullanan düz yataklı bölümde ayakta duran bir nişancı için yer bulunan bir pikap veya cip.

| Taktik Destek Aracı | |
| :- | :- |
| **Boyut / Tip** | Orta Sivil |
| **Gövde** | 6 |
| **Yapı** | 30 |
| **Sistemler** | 2 |
| **Hız** | Hızlı |
| **Kullanım** | Standart |
| **Özellikler** | [Tüm Arazi](0006_Vehicles.md?id=all-terrain), [Silahlı](0006_Vehicles.md?id=weaponized) |
| **Silahlar** | Monte Edilmiş Orta Makineli Tüfek (2d6) |

<br>

---

### Su Araçları

#### Sürat Teknesi

Arka tarafına monte edilmiş mayın dağıtıcısı olan tipik bir sürat teknesi.

| Sürat Teknesi | |
| :- | :- |
| **Boyut / Tip** | Orta Sivil |
| **Gövde** | 3 |
| **Yapı** | 24 |
| **Sistemler** | 2 |
| **Hız** | Hızlı |
| **Kullanım** | Standart |
| **Özellikler** | [Geliştirilmiş Performans](0006_Vehicles.md?id=enhanced-performance), [Su Aracı](0006_Vehicles.md?id=waterborne), [Silahlı](0006_Vehicles.md?id=weaponized) |
| **Silahlar** | Mayın Dağıtıcısı (5d6) |

<br>

---

#### Yat

Bir oligarkın sahip olabileceği türden lüks bir yat. Düşmanların kötü niyetli girişimlerine karşı korunmak için muhtemelen bir gözetleme süiti ile donatılmıştır.

| Yat | |
| :- | :- |
| **Boyut / Tip** | Çok Büyük Sivil |
| **Gövde** | 10 |
| **Yapı** | 75 |
| **Sistemler** | 4 |
| **Hız** | Yavaş |
| **Kullanım** | Müthiş |
| **Özellikler** | [Lüks](0006_Vehicles.md?id=luxurious), [Gözetleme Süiti](0006_Vehicles.md?id=surveillance-suite), [Su Aracı](0006_Vehicles.md?id=waterborne) |
| **Silahlar** | Yok |

<br>

---

### Hava Aracı/Uzay Aracı

#### Zeplin (Sivil Hava Gemisi Hattı)

Hindenburg'a benzer şekilde, bu kıtalararası zeplin sınıfı (ve kendi sınıfındaki diğerleri) 245 metre uzunluğunda olup 40 ila 61 kişilik bir mürettebat gerektirir. Tipik olarak lüks konaklama yerlerinde 50 ila 72 yolcu taşıyabilir.

| Zeplin | |
| :- | :- |
| **Boyut / Tip** | Devasa Sivil |
| **Gövde** | 10 |
| **Yapı** | 85 |
| **Sistemler** | 5 |
| **Hız** | Yavaşlatılmış |
| **Kullanım** | Herkülvarı |
| **Özellikler** | [Havada](0006_Vehicles.md?id=airborne), [Lüks](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Kalkanlar** | Yok |
| **Silahlar** | Yok |

<br>

---

#### Taarruz Helikopteri

Geleneksel Taarruz Helikopteri, gelişmiş gözetleme teknolojilerini kullanarak telefon ve kablosuz internet sinyallerini yakalar ve FLIR aracılığıyla karanlıkta bile bireyleri ve araçları takip eder. Gizlilik yoluyla takipçiden kaçma girişimleri Müthiş'tir.

| Taarruz Helikopteri | |
| :- | :- |
| **Boyut / Tip** | Büyük Askeri |
| **Gövde** | 11 |
| **Yapı** | 50 |
| **Sistemler** | 3 |
| **Hız** | Orta |
| **Kullanım** | Kolay |
| **Özellikler** | [Havada](0006_Vehicles.md?id=airborne), [Geliştirilmiş Performans](0006_Vehicles.md?id=enhanced-performance), [Gizlilik](0006_Vehicles.md?id=stealth), [Üstün Kullanım](0006_Vehicles.md?id=superior-handling), [Gözetleme Süiti](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Kalkanlar** | Yok |
| **Silahlar** | 1 Gatling Topu (3d6), 4 Roket (5d6) |

<br>

---

#### Çok Amaçlı Savaş Uçağı

Bu çift koltuklu kara tabanlı savaş uçağı (De Havilland Mosquito tipine benzer), performansı ve çok yönlülüğü ile iyi bilinir. Bomba bölmesi ya iki adet 250 lb'lik bomba (menzili 0 olan orta menzilli füzeler olarak değerlendirilir) ya da tek bir torpido taşıyabilir.

| Çok Amaçlı Savaş Uçağı | |
| :- | :- |
| **Boyut / Tip** | Büyük Askeri |
| **Gövde** | 10 |
| **Yapı** | 45 |
| **Sistemler** | 3 |
| **Hız** | Orta |
| **Kullanım** | Standart |
| **Özellikler** | [Havada](0006_Vehicles.md?id=airborne), [Geliştirilmiş Performans](0006_Vehicles.md?id=enhanced-performance) |
| **Kalkanlar** | Yok |
| **Silahlar** | 4 Burun Monteli Gatling Topu (4d6+3), 1 bomba bölmesi (6d10 - açıklamaya bakın) |

<br>

---

#### Yıldızlararası Kargo Gemisi (Hafif Yüksek Teknolojili Nakliye)

Bu hafif nakliye aracı minimum iki kişilik mürettebat gerektirir, ayrıca dört ek yolcu için yer vardır. Standart seri üretim versiyonu burada belirtilmiştir, ancak birçok sahip gizli kargo alanı, Geliştirilmiş Performans, Üstün Kullanım, EMP Direnci, Gizlilik vb. gibi kendi "özel modifikasyonlarını" uygulayacaktır.

| Yıldızlararası Kargo Gemisi | |
| :- | :- |
| **Boyut / Tip** | Orta Sivil Uzay Gemisi |
| **Gövde** | 10 |
| **Yapı** | 80 |
| **Sistemler** | 2 |
| **Hız** | Hızlı (Parsek Faktörü 3) |
| **Kullanım** | Standart |
| **Özellikler** | [Havada](0006_Vehicles.md?id=airborne), [Kargo](0006_Vehicles.md?id=cargo), [Işık Hızından Hızlı](0006_Vehicles.md?id=ftl), [Uzay Aracı](0006_Vehicles.md?id=space-craft), [VTOL](0006_Vehicles.md?id=vtol) |
| **Kalkanlar** | 8 |
| **Silahlar** | 2x Dörtlü Monte Lazer Topu Taretleri (5d6) |

<br>

---

#### Genel Temas Birimi (Ultra Yüksek Teknolojili Uzay Aracı)

Bu aşırı yüksek teknolojili yıldız gemisi, iki kilometre uzunluğunda, alanla bağlantılı bir modül serisi şeklinde bir araya gelen oldukça gelişmiş bir yapay Zihin'in fiziksel temsilidir. Modüller ayrı ayrı amaçlanmıştır ve yaşam alanları, inşaat tesisleri, kargo alanları, gıda işleme, eğlence kompleksleri, hangar bölmeleri ve hatta geminin zekasının nadiren, hatta hiç tartışmadığı bazı gizli birimleri içerir. İnsan mürettebata ihtiyaç duymaz, ancak 100.000'e kadar yolcu nüfusunu kolayca destekleyebilir. Birçok yolcu Temas Birimi'nde doğar ve ölür: çoğu geçicidir, istedikleri gibi gelip giderler.

| Genel Temas Birimi | |
| :- | :- |
| **Boyut / Tip** | Muazzam Sivil Uzay Gemisi |
| **Gövde** | 20 |
| **Yapı** | 10.000 |
| **Sistemler** | 6 |
| **Hız** | Orta (Parsek Faktörü 4. Bu teknoloji seviyesinde, bir Faktör 1 saate eşittir) |
| **Kullanım** | Müthiş |
| **Özellikler** | [Havada](0006_Vehicles.md?id=airborne), [Kargo](0006_Vehicles.md?id=cargo), [Taşıyıcı](0006_Vehicles.md?id=carrier), [İnşaat](0006_Vehicles.md?id=construction), [Işık Hızından Hızlı](0006_Vehicles.md?id=ftl), [Lüks](0006_Vehicles.md?id=luxurious), [Uzay Aracı](0006_Vehicles.md?id=space-craft), [Üstün Kullanım](0006_Vehicles.md?id=superior-handling), [Traktör Işını](0006_Vehicles.md?id=tractor-beam) |
| **Kalkanlar** | 30 |
| **Silahlar** | Tartışmayı umursadıkları yok |

<br>