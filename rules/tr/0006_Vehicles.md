# Taşıtlar

_Mythras Imperative_'deki taşıtlar yarı soyut bir şekilde ele alınır. Özünde bunlar, karakterleri A noktasından B noktasına götürmek için kullanılan, detaylı açıklamalara veya istatistiklere çok az ihtiyaç duyulan arka plan araçlarıdır. Ancak Oyun Yöneticilerinin, kovalamaca veya çatışma durumlarında taşıtları temsil etmeleri gerektiğinde, zaman zaman detaylara ihtiyaçları olacaktır.

Bu bölümdeki kurallar, çoğu taşıt türünün temsil edilmesine olanak tanır, ancak esnekliğe izin vermek ve hikaye anlatımını geliştirmek amacıyla soyutlanmış bir biçimde sunulmuştur. Yıldız gemileri ve uzay araçları, benzer ilkelere dayanmalarına rağmen biraz farklıdır.

---
## İstatistikler

Tüm taşıtlar Yapı, Gövde, Hız, Sistemler, Özellikler ve (ayara bağlı olarak mevcutsa) Kalkanlar açısından tanımlanır.

- **[Boyut](0006_Vehicles.md?id=vehicle-size-table):** Tüm taşıtlar, diğer karakteristik özelliklerin değerini veya aralığını belirleyen altı Boyut derecesinden birine sahiptir. Doğal olarak daha büyük boyutları ve uzayın zorlu ortamları nedeniyle, yıldız gemilerinin kendi değer aralıkları vardır.
- **[Gövde](0006_Vehicles.md?id=terrestrial-hulls):** Zırh Puanlarını temsil eder.
- **[Yapı](0006_Vehicles.md?id=terrestrial-hulls):** Taşıtın Can Puanlarını temsil eder.
- **[Kalkanlar](0006_Vehicles.md?id=shields):** Gelişmiş enerji manipülasyon teknolojisine sahip ayarlarda, taşıtı koruyan ancak sürekli ateş altında aşınabilen kalkanlar bulunabilir.
- **[Sistemler](0006_Vehicles.md?id=systems):** Güç santrali, mürettebat bölümü vb. dahil olmak üzere taşıtın hayati bileşenlerini temsil eder.
- **[Hız](0006_Vehicles.md?id=speed):** Her taşıtın temel bir Hız derecesi vardır.
- **[Özellikler](0006_Vehicles.md?id=traits):** Bir taşıtın bir veya daha fazla Özelliği de olabilir. _Mythras Imperative_ kurallarındaki Yaratıklara atanan Yetenekler veya Savaş Tarzı Özellikleri gibi, Özellikler de taşıtın doğasını yansıtan ek bir oyun tanımı ve avantajı sunar.
- **[Silahlar](0006_Vehicles.md?id=weapons):** Özelliklere benzer şekilde, bir taşıt ayarın izin verdiği ölçüde silahlarla donatılabilir. Bazı önerilen örnekler ve değerler aşağıda detaylandırılmıştır.


---
### Gövde Boyutu, Türü ve Yapısı

Taşıtın boyutu ve amacı, gövdesinin kalınlığını ve iç yapısının dayanıklılığını etkiler. Örneğin bir motosiklet, hız ve çeviklik için üretildiğinden minimum bir gövdeye sahiptir. Bir Land Ironclad (buhar veya dizel motorlarla çalışan, paletli veya tekerlekli, devasa bir zırhlı canavar) ise savaş alanı için tasarlanmış çok daha büyük bir taşıt olduğundan, çok daha büyük bir gövdeye sahiptir. Gövdelerin karşılaştırmalı boyutları (ve genellikle silahlardan gelen kaç vuruşa dayanabilecekleri), aşağıdaki Taşıt Boyutu ve Gövde tablolarında özetlenmiştir.

Bir taşıt hasar gördüğünde, gelen hasar Gövde değeri kadar azaltılır. Kalan hasar, taşıtın Yapı puanlarından çıkarılır ve nüfuz eden hasara eşit bir yüzde şansı ile bir Sistemi etkileme ihtimali vardır. Taşıtın Yapısı sıfıra düşerse ya tamamen yok olur ya da hurdaya çıkacak kadar ağır hasar alır.

##### Karasal Gövdeler 

| Boyut | Yapı | Sivil Gövde Değeri | Askeri Gövde Değeri | Örnek |
| :-- | :-: | :-: | :-: | :-- |
| Küçük | 1-20 | 1-3 | 4-6 | Motosiklet, sepetli motosiklet, kompakt veya alt kompakt araba, kano, kayak, kayık |
| Orta | 21-40 | 1-6 | 7-9 | Sedan, panelvan, kamyonet, lüks araba, lüks spor araba, güçlü araba, limuzin, cankurtaran filikası, sürat teknesi, yelken kanat, otopiro |
| Büyük | 41-60 | 4-9 | 10-12 | Kamyon/Tır, streç limuzin, SUV, otobüs, binek aracı, kişisel uçak, planör, gezi teknesi, tank, helikopter, denizaltı |
| Devasa | 61-80 | 7-12 | 13-15 | Yarı römorklu kamyon, yolcu uçağı, jet, sahil güvenlik gemisi, yat |
| Muazzam | 81-100 | 10-15 | 16-18 | Tren, yolcu gemisi, savaş gemisi |

##### Yıldız Gemisi Gövdeleri 

| Boyut | Yapı | Sivil Gövde Değeri | Askeri Gövde Değeri | Örnek |
| :-- | :-: | :-: | :-: | :-- |
| Küçük | 10-50 | 4-9 | 10-12 | Tek kişilik avcı uçağı |
| Orta | 51-150 | 7-12 | 13-15 | Hafif Yük Gemisi, Servis aracı |
| Büyük | 151-450 | 10-15 | 16-18 | Ağır Yük Gemisi, Kruvazör |
| Devasa | 451-1350 | 13-18 | 19-21 | Eskort Fırkateyni, Hafif Savaş Kruvazörü |
| Muazzam | 1351-4050 | 16-21 | 21-24 | Nesil Gemisi, Ağır Savaş Kruvazörü |
| Devasa (Kolosal) | 4050-12110 | 19-24 | 24-30 | Yörünge Habitatı, Gezegen Yıkan Savaş İstasyonu |


---
### Kalkanlar

Saptırıcı kalkanlar, onları takabilen taşıtlar için ek bir koruma katmanı sağlar. Kalkanlar, aşındırıcı doğaları nedeniyle Gövdeden biraz farklı çalışırlar. Gelen hasar, kalkanların değerine eşit veya daha düşükse, tamamı engellenir. Hasar kalkan değerini aşarsa, aradaki fark kalkan gücünü o miktar kadar azaltır.

_Örneğin, bir asker taşıyıcısının 12 puanlık enerji kalkanı gücü vardır. Taşıyıcı 11 hasar veren bir lazerle vurulursa, kalkanı geçemez ve ek bir etkisi olmaz. Öte yandan, taşıyıcı 15 hasar veren bir patlamayla vurulursa, artan üç puan kalkan gücünü 9'a düşürür._

Bir saptırıcı kalkanın gücü sıfıra düştüğünde, çöker. Kalan tüm hasar gövdeye iletilir.

---
### Sistemler

Bir taşıt gövdesini delen her hasar aldığında, nüfuz eden hasara eşit bir şansla hayati bir Sistemin etkilenme ihtimali vardır.

_Örneğin, 3 Gövde ve 24 Yapı puanına sahip Sürat Teknesine 10 hasar uygulanır. Gövde, zırh olarak sayılarak hasarı 7'ye düşürür. Bu, 24 Yapı puanından düşülür ve taşıtın Sistemlerinden birine zarar verme şansı %7'dir._

Bir Sistemin dayanabileceği hasar tamamen taşıtın boyutuna bağlıdır. Bu, gerçek hasar miktarı yerine bir Sistemin alabileceği vuruş sayısı ile modellenir. Küçük bir taşıta yapılan tek bir Sistem Vuruşu, o Sistemi anında yok eder. Orta büyüklükteki bir taşıtın Sistemlerini yıkmak için iki vuruş, Büyük bir taşıt için üç vuruş vb. gerekir. Aşağıdaki [Sistem Hasar Tablosuna](0006_Vehicles.md?id=system-damage-table) bakın.

Hasar görmüş ancak henüz yok edilmemiş sistemler, alınan vuruş sayısıyla orantılı olarak bir işlev kaybına uğrar; bu ya bir yüzde azalması ya da Sistem görevlerinde bir Derece cezası şeklindedir. Spesifik etki, alt sistemin neyi kontrol ettiğine bağlıdır ve aşağıda [Sistem Bileşeni Hasar Tablosunda](0006_Vehicles.md?id=system-component-damage-table) detaylandırılmıştır. Hangi Sistemin vurulduğuna bağlı olarak etkiler felaket boyutunda olabilir.

_Örneğin, 5 Sistem Vuruşuna sahip Muazzam bir taşıt olan Land Ironclad, Sürüş sisteminden iki kez vurulduğunda gücünün %40'ını kaybeder ve Yavaş Hızını iki Derece düşürerek Ağır aksak seviyesine iner. Benzer şekilde, 3 Sistem Vuruşuna sahip Büyük bir yük gemisi, Motor/Yakıt Sisteminden iki vuruş alırsa, Hızında ve Elektronik sistem kullanımında iki Derecelik bir ceza alır. Üçüncü bir vuruş Motor/Yakıt Sistemini ve dolayısıyla gemiyi yok eder._


<details>

<summary>* Topluluk Erratası</summary>

---

#### Hasar


_Buradaki orijinal metin başlangıçta daha uzaktaydı. Sistemler bölümünden hemen sonraya yerleştirildiğinde, önceki paragrafı gereksiz yere tekrar etmektedir._

- _"Gövdeyi aşan hasar taşıta nüfuz eder, Yapıya zarar verir ve muhtemelen bir veya daha fazla sistemi etkiler. Taşıtın boyutuna bağlı olarak hasar küçük veya felaket boyutunda olabilir._
- _Örneğin, Büyük bir taşıt Sürüş gibi bir Sistemden en fazla iki vuruş alabilir. Üçüncü vuruş Sürüş sistemini işlevsel olarak yok eder. Sistem her vuruş aldığında, aşağıdaki Sistem Hasar Tablosunun Vuruş Başına Kayıp sütununda tanımlanan işlevinin bir yüzdesini kaybeder ya da temel bir işlev (Sürüş, Pilot, İletişim vb.) alınan her vuruşta bir Zorluk Derecesi daha zor hale gelir."_

_Yukarıdaki paragraflar kaldırılmış ve yerine başka bir örnek Sistem etkisine değinen kısaltılmış bir düzenleme getirilmiştir._

---

</details>

##### Sistem Hasar Tablosu 

| Boyut | Sistem Vuruşları | Vuruş Başına Kayıp |
| :-- | :-: | :-- |
| Küçük | 1 | %100 - Yok Edildi |
| Orta | 2 | 1 Derece veya %50 |
| Büyük | 3 | 1 Derece veya %33 |
| Devasa | 4 | 1 Derece veya %25 |
| Muazzam | 5 | 1 Derece veya %20 |
| Devasa (Kolosal) | 6 | 1 Derece veya %16 |


<details>

<summary>* Topluluk Erratası</summary>

---

##### Sistem Hasar Tablosu (Orijinal) 

| Boyut | Sistem Vuruşları | Vuruş Başına Kayıp |
| :-- | :-: | :-- |
| Küçük | 1 | 1 Derece veya %50 |
| Orta | 2 | 1 Derece veya %33 |
| Büyük | 3 | 1 Derece veya %25 |
| Devasa | 4 | 1 Derece veya %20 |
| Muazzam | 5 | 1 Derece veya %16 |
| Devasa (Kolosal) | 6 | 1 Derece veya %10 |

##### Taşıt Boyutu Tablosu ([Gövde Boyutu, Türü ve Yapısı](0006_Vehicles.md?id=hull-size-type-and-structure) bölümünden)

| Boyut | Sistem Vuruşları |
| :-- | :-: |
| Küçük | 1 |
| Orta | 2 |
| Büyük | 3 |
| Devasa | 4 |
| Muazzam | 5 |
| Devasa (Kolosal) | 6 |

_Orijinal kurallar ve örnekler tutarsızdır:_
- _"Hasar gören ancak henüz yok edilmeyen sistemler, işlevsellik kaybına uğrar. Bu, mevcut vuruşların toplam kapasiteye oranına eşittir. Bu nedenle, Sürüş sisteminden iki kez vurulan Muazzam bir taşıt gücünün %40'ını kaybeder (5 üzerinden 2 vuruş)."_ 
   - _Bu, 5 Sistem Vuruşu gösterilen Muazzam taşıtın her vuruşta %20 kaybetmesi gerektiğini önerir - ancak tablo %16 diyor._
- _"Örneğin, Büyük bir taşıt Sürüş gibi bir sistemden üç vuruş alabilir. Dördüncü vuruş Sürüş sistemini işlevsel olarak yok eder."_ 
  - _"Bu, tablo gibi Sistem Vuruşu başına %25 hasarı önerir ancak Büyük Taşıtlar aynı tabloya göre sadece 3 Sistem Vuruşu alabilir._
- _Tutarsız olmasa da, Taşıt Boyutu Tablosu gereksizdi; sadece birkaç satır sonra daha tam haliyle (Vuruş Başına Kayıp sütunu eklenerek) tekrar ortaya çıkıyor._

_Bu, tutarlı bir kurala sahip olmayı zorlaştırıyor. Bu sorunları gidermek için değerler ve örnekler eşleştirildi ve Taşıt Boyutu Tablosu kaldırıldı._

---

</details>


##### Sistem Bileşeni Hasar Tablosu 

| 1d10 | Sistem | Hasarlı Sonuç | Yok Edilmiş Sonuç |
| :-: | :-- | :-- | :-- |
| 1 | Kargo | Ambarında depolanan hasarla orantılı miktarda eşya veya ekipman yok olur. | Tüm kargo yok olur. |
| 2 | İletişim | İletişim zarları, her hasar gördüklerinde bir ilave Zorluk Derecesi kadar zorlaşır. | Taşıt artık iletişim kuramaz veya düşman sensörlerini yanıltamaz. |
| 3 | Kontroller | Tekne, Sürüş veya Pilot zarları her hasar gördüklerinde bir ilave Zorluk Derecesi zorluk çeker; derhal Kontrol zarı gereklidir. | Taşıt artık yönlendirilemez veya rota değiştiremez. |
| 4 | Sürüş | Hız, hasarla orantılı miktarda azalır. | Taşıt aniden durur; uçaklar düşer. |
| 5 | Mürettebat | Hasarla orantılı sayıda yolcu zayiat verir. Etkilenenler bir Büyük Yara alır ve Dayanıklılık (DAY) zarı atmalıdır, aksi takdirde anında ölürler. | Taşıt içindekiler ölür. |
| 6 | Motor / Yakıt | Hız, hasarla orantılı miktarda azalır. Elektronik sistemleri kullanmak bir Zorluk Derecesi daha zorlaşır. | Taşıt feci bir patlamayla yok olur. |
| 7 | Sensörler | Sensör, Navigasyon ve Silah saldırı zarları her hasar gördüklerinde bir ilave Zorluk Derecesi zorluk çeker. | Taşıt kör olur. |
| 8 | Silahlar | Hasarla orantılı sayıda silah sistemi devre dışı kalır. | Taşıt artık ateş edemez. |
| 9-0 | Yok | Hiçbir sistem vurulmadı; sadece Yapı hasarı. | N/A |

<details>

<summary>* Topluluk Erratası</summary>

---

##### Sistem Bileşeni Hasar Tablosu (Motor/Yakıt)

_Orijinal sonuç şu şekildeydi: "Maksimum Hız yarıya iner..." Bu, Sistem hasarıyla orantılı hasar cezalarının genel kuralı ile çelişmektedir: %25 hasar = %25 ceza. Ayrıca, Mythras Companion'daki tam kurallar hızın bu yarıya indirilmesinden bahsetmez._

_Sonuç olarak, metin Sürüş Sistemleri'ndeki aynı girdi ile değiştirilmiştir: "Hız, hasarla orantılı miktarda azalır."_

---

</details>


---
### Hız

Hız, ivme, sürtünme ve eylemsizlik fiziği karmaşık konular olduğundan, bazı basitleştirmelere ihtiyaç duyulur ve bu nedenle taşıtlara soyut bir hız derecesi verilir. Hız karakteristik özelliği, yalnızca bir taşıtın diğerini geçip geçemeyeceğini kabaca değerlendirmek için kullanılmalıdır.

Hız derecesi, taşıtın nominal operasyonel oranını temsil eder. Acil durumlarda bu performans, motorlarda aşınma veya hasar riski göze alınarak bir kademe artırılabilir. Tüm taşıt türleri için aynı tablo kullanılsa da, sadece aynı sınıftaki taşıtların karşılaştırılması için sağduyu kullanılmalıdır. Örneğin, bir Yıldız Gemisi ve bir spor araba aynı Hızlı hızlanma oranına sahipse, uzay gemisinin karşılaştırmalı olarak daha hızlı olduğu barizdir.

Bir taşıtın Hızını standart değerinin üzerine çıkarmak, başarılı bir Sürüş zarı ile mümkündür. Genellikle bu ekstra hız, yalnızca kısa bir süreliğine sürdürülebilirdir; taşıt standart hızına düşmeli veya motoruna zarar verme riskiyle karşılaşmalıdır (en fazla 1d6 dakika). Kritik bir Sürüş zarı, daha yüksek hız süresinin 1d12 dakikaya çıkarılmasına olanak tanır.

Bir sürücü, taşıtın hızını 2 kademe artırmayı deneyebilir, ancak bu Herkül vari bir Sürüş zarı gerektirir ve taşıtın bu hızı sürdürebileceği maksimum süre 1d3 dakikadır: Kritik Başarı, artırılmış hız süresini uzatmayacaktır.

##### Hız Derecesi Tablosu 

| Hız Derecesi | İçin Maksimum Hız |
| :-- | :-: |
| Ağır aksak | Muazzam |
| Hantal | |
| Yavaş | Devasa |
| Orta | |
| Hafif | Büyük |
| İdare eder | |
| Hızlı | Orta |
| Çabuk | |
| Çok hızlı | Küçük |


---
### Özellikler

Bir taşıtın sahip olabileceği maksimum özellik sayısı, gövde boyutuna ve türüne bağlıdır.

Her taşıtın doğuştan gelen bir özelliği vardır: esas olarak tasarlandığı seyahat modu. Bu nedenle, uçaklar doğuştan Havadan özelliğine, tekneler Denizden özelliğine sahiptir vb. Bu doğal özellik, mevcut özellik sayısına dahil edilmez. Ancak, bir taşıt ikinci bir seyahat modu içeriyorsa (örneğin uçan bir denizaltı), Havadan özelliği mevcut özelliklerinden biri olarak alınmalıdır.

Bazı özellikler, ayarın teknoloji seviyesine bağlı olarak mevcut olmayabilir; Oyun Yöneticileri hangi özelliklerin uygulanabileceğine dair kendi değerlendirmelerini yapmalıdır.

##### Taşıt Özellik Tahsis Tablosu 

| Boyut | Maksimum Özellik |
| :-- | :-: |
| Küçük | 1 |
| Orta | 2 |
| Büyük | 3 |
| Devasa | 4 |
| Muazzam | 5 |
| Devasa (Kolosal) | 6 |

#### Havadan

Taşıt atmosferik uçuş yapabilir.

#### Tüm Arazi

Bu Özellik Kara taşıtları ile kullanılmalıdır. Taşıt; paletler, gelişmiş süspansiyon ve sürüş sistemleri veya güçlü diferansiyeller kullanarak misafirperver olmayan, zorlu ve dik arazileri geçebilir.

#### Kazıcı

Taşıt, zeminde kazı yapmak ve tünel açmak için tasarlanmıştır. Gövde Derecesi x 5 metreye eşit maksimum derinliğe ulaşabilir.

#### Kamufle

Taşıt, çevresiyle uyum sağlamasına olanak tanıyan kamuflaj boyasına veya taklitçi sensörlere sahiptir. Taşıtı görsel olarak fark etme girişimleri bir derece daha zordur.

#### Kargo

Taşıt, yolculardan ziyade özellikle kargo taşımak için tasarlanmıştır. Yolcu bölmeleri minimumda tutulur ve taşıtın geri kalan kullanılabilir alanı; uygun bölümler, araçlar ve hatta çevresel iklimlendirme (bozulabilir ürünleri taşımak için dondurucu bölümler gibi) ile kargo muhafazasına ayrılır. Kargo yüklüyken taşıtın hızı, gövde boyutunun normalde izin vereceğinden iki kademe daha düşüktür.

#### Taşıyıcı

Taşıt, sivil veya askeri nitelikte daha küçük, hafif mürettebatlı veya muhtemelen uzaktan kumandalı taşıtları taşımak için özel olarak tasarlanmıştır. Bu özelliğe sahip herhangi bir taşıt en az Muazzam boyutunda olmalıdır. Taşınan küçük araçların sayısı görev türüne ve amacına göre değişebilir, ancak 10'dan taşıtın Yapı puanı kadar bir sayıya kadar çıkabilir.

#### İnşaat

Taşıt, ağır inşaat işleri için donatılmıştır. Bu özelliğe sahip tüm taşıtlar aynı zamanda Tüm Arazi özelliğine de sahiptir, ancak hızları gövde boyutlarının normalde izin vereceğinden iki kademe daha düşüktür. Taşıt; vinç bomları, kepçe kürekler, damperli arabalar vb. gibi göreve uygun araçlarla donatılmıştır.

#### EMP Dirençli

Taşıt, elektromanyetik darbe saldırılarına karşı korunmalıdır.

#### Geliştirilmiş Performans

Taşıtın Hız derecesi, boyutu için maksimum değerden bir kademe yüksektir.

#### Fırlatma Koltuğu

Acil bir durumda, fırlatma koltuğu yolcuları havada birkaç yüz metre ileri fırlatır, ardından güvenli bir iniş için bir paraşüt açılır. Paraşüt isteğe bağlıdır. Helikopterler için önerilmez (Kamov Ka-52 Alligator kayda değer bir istisnadır).

#### IHY (Işık Hızı Üstü)

Sadece Uzay Aracı. Araç, ışıktan hızlı bir motora (hiper sürücü, warp sürücüsü, solucan deliği jeneratörü veya benzeri) sahiptir. IHY sürücüsü, bir yıldız gemisinin tek bir parseki (3,26 ışık yılı veya 31 trilyon kilometre veya 19 trilyon mil) geçme hızını ölçen ayrı bir Hız derecesine sahiptir:

##### IHY Hız Derecesi Tablosu 

| Hız Derecesi | 1 Parseki Geçme Faktörü |
| :-- | :-: |
| Ağır aksak | 10 |
| Hantal | 8 |
| Yavaş | 7 |
| Orta | 6 |
| Hafif | 5 |
| İdare eder | 4 |
| Hızlı | 3 |
| Çabuk | 2 |
| Çok hızlı | 1 |

Faktör süresi, ayarın IHY gelişiminin ne kadar ileri olduğuna bağlı olarak Oyun Yöneticisinin karar vereceği bir konudur. Örneğin, temel faktör 1 Gün olabilir; bu, Ağır aksak IHY sürücüsüne sahip bir geminin yolculuğu tamamlamasının 10 gün sürdüğü, Çok hızlı IHY sürücüsüne sahip bir geminin ise yolculuğu 1 günde tamamladığı anlamına gelir. IHY teknolojisinin önemli ölçüde daha az verimli olduğu başka yerlerde, faktör süresi günler yerine aylar olarak ölçülebilir.

Geminin ya bir dönüş yolculuğu yapacak yakıt rezervine ya da varış noktasında yakıt ikmali yapacak bir araca sahip olduğu varsayılır.

Ayara bağlı olmakla birlikte, herhangi bir boyuttaki yıldız gemisine IHY sürücüsü takılabileceği varsayılır.

IHY sürücüleri bir yıldızın 1,5 Astronomik Birim (yaklaşık 225 milyon kilometre veya 270 milyon mil) yakınında etkinleştirilemez. Bu, gemilerin IHY sistemini etkinleştirmeden önce Mars mesafesine kadar hareket etmek için ışık hızı altı bir sürücü kullanmaları gerektiği anlamına gelir.

#### Kara Taşıtı

Taşıt kara yolculuğuna uygundur.

#### Havada Asılı Kalma

Taşıt, hava yastığı veya yerçekimi karşıtı bir itici kullanarak yerden havada asılı kalır.

#### Lüks

Taşıt, yolcuları belirli bir lüks seviyesinde taşımak için özel olarak tasarlanmıştır. Fazla kargo alanı; lüks yolcu konaklama birimlerine, yüzme havuzlarına, jakuzilere, yolcuların kaprislerini karşılayacak ekstra mürettebata vb. ayrılır.

#### Raylı

Taşıt bir ray sistemine dayanır. Bu özelliğe sahip taşıtlar, gövde boyutlarının normalde izin vereceğinden doğal olarak üç kademe daha yüksek bir Hız derecesine ulaşabilirler, ancak bariz bir şekilde sadece ray sistemindeki hareketle sınırlıdırlar.

#### Dayanıklı

Tüm sistemler Boyut tarafından belirlenenden bir vuruş daha fazla dayanabilir. Bu Özellik istiflenebilir; bu nedenle Dayanıklı 2, sistemlerin iki Özellik puanı karşılığında normalden 2 vuruş daha fazlasına dayanabileceğini gösterir.

#### Denizden

Taşıt su üzerinde yüzebilir.

#### Uzay Aracı

Taşıt vakuma karşı sızdırmazdır ve kozmik radyasyona karşı korunmuştur; tasarıma bağlı olarak atmosferi terk edip tekrar girebilir ve atmosfer içinde uçuşu sürdürebilir.

#### Gizlilik (Stealth)

Sadece Uçak. Taşıt radar ve diğer uzun menzilli sensör sistemleri tarafından tespit edilmekten kaçınacak şekilde tasarlanmıştır. Taşıtı elektronik sensörler kullanarak fark etme girişimleri bir derece daha zordur.

#### Dalgıç

Taşıt, Gövde Derecesi x 10 metre çalışma derinliğine kadar okyanus yüzeyinin altına dalabilir. Çökme derinliği (dalgıcın ezilmeden ulaşabileceği mutlak maksimum) çalışma derinliğinin 1,5 katıdır.

#### Üstün Kullanım

Taşıtın kullanımı Kolay olarak derecelendirilir.

#### Gözetim Paketi

Taşıt; yerleşik bir bilgisayara, iletişim baz istasyonuna, dinleme cihazı sinyalleri için bir alıcıya ve 100 metre içindeki yakındaki akıllı telefon sinyallerini yakalayacak bir düzeneğe sahiptir.#### Dayanıklı (Tough)

Bu özelliğe sahip bir sivil araç, Gövde puanını Askeri sütundan alır ve otomatik olarak maksimum Yapıya sahip olur. Bu özelliğe sahip bir Askeri araç ise, Gövde ve Yapı puanlarını bir alt satırdan alır.

#### Çekici Işın (Tractor Beam)

Sadece Uzay Araçları için. Gemi, kendi gövde derecesinden en fazla iki basamak daha düşük olan araçları yakalayıp kendine çekebilen bir çekici ışınla donatılmıştır. Dolayısıyla, Devasa (Huge) bir yıldız gemisi, Orta (Medium) boyuta kadar bir gövdeyi çekebilir ve tutabilir.

#### Dikey İniş/Kalkış (VTOL)

Dikey iniş/kalkış. Bu özellik, kaldırma kuvveti üretmek için rotorların bir kombinasyonunu kullanan helikopterler ve benzeri araçlar için doğaldır. Sabit kanatlı uçaklara uygulandığında, uçuş sırasındaki tavır, tırmanış ve alçalışı kontrol etmek için sabit veya hizalanabilir iticilerin kullanımını belirtir.

#### Yürüyücü (Walker)

Araç, mafsallı bacaklar kullanarak kendini hareket ettirir. Yürüyücü araçların Hızı, Boyutları ne olursa olsun Hafif (Gentle) hızla sınırlıdır. Ancak Yürüyücüler, diğer hareket araçlarıyla donatılmış taşıtlar için dengesiz olacak yüksekliklerde inşa edilebilirler.

#### Sualtı (Waterborne)

Bu araç sualtı hareketine kabiliyetlidir.

#### Silahlandırılmış (Weaponized)

Araç, silah donanımına uyum sağlayacak şekilde uyarlanmıştır. Silah sistemleri aşağıda [Silahlar](0006_Vehicles.md?id=weapons) bölümünde ele alınmıştır.


---
## Silahlar

Genellikle sadece askeri gövdeler silah donanımına (sert noktalar, mühimmat depolama, kontrol sistemleri) uyum sağlayacak şekilde tasarlanır. 'Silahlandırılmış' Özelliği, silah gereksinimleri olabilecek sivil araçlar için alınabilir.

Bir aracın destekleyebileceği maksimum silah sistemi sayısı, Yapı Puanlarının 1/10'una eşittir (yani 40 Yapıya sahip bir araç, eğer askeri bir araçsa veya Silahlandırılmış bir sivil araçsa, 4 silah sistemini destekleyebilir).

Silah sistemleri aracın Boyutuna bağlıdır. Farklı Boyutlar için maksimum silah sistemi türleri aşağıdaki tablolarda gösterilmiştir.


##### Boyuta Göre Silahlar Tablosu 

| Boyut | Karasal | Uzay Aracı |
| :-- | :-- | :-- |
| Küçük | Hafif Silah (ör. Piyade Tüfeği) | Orta Silah (ör. Makineli Tüfek, Roketatar) |
| Orta | Orta Silah (ör. Makineli Tüfek, Roketatar) | Taretli/Ağır Silah (ör. Ağır Bağlantılı Makineli Tüfekler, Mini-Gun) |
| Büyük | Taretli/Ağır Silah (ör. Ağır Bağlantılı Makineli Tüfekler, Mini-Gun) | Silah Bataryası (ör. Saha Topçusu) |
| Devasa | Silah Bataryası (ör. Saha Topçusu) | Gelişmiş Silahlar (ör. Füze Sistemleri) |
| Kocaman | Gelişmiş Silahlar (ör. Füze Sistemleri) | Omurga Montajlı Silahlar (yalnızca bir adet) |
| Muazzam | NA | Omurga Montajlı Silahlar (en fazla 3 adet) |

##### Örnek Silah İstatistikleri 
 
| Silah | Hasar | Menzil | Atış Hızı | Mühimmat/Yük |
| :-- | :-: | :-: | :-: | :-: |
| 50 inç Top | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling Silahı | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Roket | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Orta Füze/Torpido | 6d10 | 200km maksimum menzil | 1 | 1/5 |
| Büyük/Seyir Füzesi | 6d10+10 | 1000km maksimum menzil | 1 | 1/10 |
| Lazer/Plazma Topu | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Ağır Lazer/Plazma Topu | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Topçu Bataryası | 5d6+6 | 50km maksimum menzil | 1 | 1/5 |
| Omurga Montaj Bataryası | 10d6+6 | 20000km maksimum menzil | 1 | 1/10 |

_Menziller metre ve kilometre cinsinden verilmiştir._

_Atış hızları tek atış, yarı otomatik ve tam otomatik içindir._

_Mühimmat, yeniden doldurulması gerekmeden önceki ateşleme kapasitesidir. Yük, tam bir mürettebatın mevcut olduğu varsayılarak Çatışma Turu cinsinden yeniden doldurma süresidir._

---
## Kontrol ve Manevralar

Kaçınma veya ani manevralar, sürücü veya pilotun aracın kontrolünü elinde tutmasını sağlamak için başarılı bir Sürüş/Pilotaj zarı gerektirir. Çoğu araç ara sıra oluşan gerilmelere ve zorlanmalara dayanacak şekilde tasarlanıp inşa edilmiştir, ancak Oyun Yöneticisi, ne kadar iddialı olduğuna bağlı olarak belirli bir manevranın daha yüksek zorluk derecesinde bir zar gerektirdiğine karar verebilir. Başarısızlık, aracın kontrolünün kaybedilmesi anlamına gelir: Kontrol Kaybı tablosunda zar atın.

Kontrol Kaybı Tablosunun sadece karasal araçlar için geçerli olduğunu unutmayın. Benzer etkiler hava ve uzay araçlarına da uygulanabilir, ancak Oyun Yöneticilerinin belirli bir etki için mantığı ayarlaması gerekecektir. Örneğin, bir hava aracı kaymak yerine spin (burgu) hareketine girebilir.

Ayrıca, bir aracın doğal kontrol kabiliyeti, Sürüş zarı üzerinde ek bir etkiye sahip olabilir. Kontrol kabiliyeti Kolay, Standart, Zor, Müthiş veya Herkülvari şeklindedir ve bir manevra gerçekleştirilirken Sürüş zarı için başlangıç noktasını belirler. Manevranın zorluk derecesi daha sonra nihai zorluğu belirlemek için kontrol kabiliyetine uygulanır.

Örneğin, yüksek performanslı bir motosiklet, ona Kolay bir Kontrol Kabiliyeti veren yerleşik jiroskopik dengeleyicilere sahiptir. Sürücü, bir takipçiden kaçmak için 180 derecelik bir yan kayma dönüşü yapmak ister; bu, Oyun Yöneticisinin bir zorluk derecesi daha yüksek olarak derecelendirdiği bir manevradır. Bu nedenle sürücü, Sürüş zarını Kolay yerine Standart seviyede yapmalıdır. Eğer aynı manevrayı dengelenmemiş bir motosiklette deneseydi, Sürüş zarı Zor seviyede olurdu.

Üstün Kontrol Kabiliyeti bir Özelliktir. Bir araç, açıklamasının bir parçası olarak bu özelliğe sahip değilse, Büyük ve altındaki boyuttaki tüm araçlar için varsayılan, Standart kontrol kabiliyetidir. Devasa ve Kocaman araçlar doğal olarak sırasıyla Müthiş ve Herkülvari Kontrol Kabiliyeti özelliğine sahiptir ve Oyun Yöneticisi, aracın boyutu nedeniyle bazı manevraların gerçekleştirilmesinin imkansız olduğuna karar vermekte özgürdür.

##### Kontrol Kaybı Tablosu 

| 1d100 | Sonuç |
| :-: | :-- |
| 01-25 | Savrulma. Kontrol kaybı geçicidir. Araç hızını 5 saniyeliğine 1 kademe düşürür. |
| 26-40 | Kayma. Sürücü aracı kontrol altında tutmak için çabalamalıdır. Araç hızını 10 saniyeliğine 2 kademe düşürür. |
| 41-50 | Şiddetli Kayma. Araç yanlış yöne bakacak şekilde 15 saniyeliğine durur. |
| 51-60 | Takla. Araç kayar ve takla atar, Yapısına 3d10 hasar verir. İçindekiler başarılı bir Dayanıklılık (DAY) zarı atmalıdır, aksi takdirde 1d3 İsabet Bölgesine 1d10 hasar alırlar. |
| 61-70 | Şiddetli Takla. Yukarıdaki gibi, ancak araç 3d10+10 hasar alır ve içindekiler Dayanıklılık zarı başarılı olsa bile 1d10, başarısız olursa 2d10 hasar alır. |
| 71-80 | Pert. Yukarıdaki gibi ancak araç 0 Yapıya düşer. İçindekiler Şiddetli Takla ile aynı hasarı alır. |
| 81-90 | Patlama. Yukarıdaki gibi ancak aracın yakıt sistemi tutuşur ve 1d20+10 saniye içinde patlar. Eğer araçtan uzaklaşamazlarsa, içindekiler 1d6 bölgeye fazladan 1d6 yanma hasarı alır. |
| 91-98 | Ani Patlama. Yukarıdaki gibi ancak patlama anidir. |
| 99-00 | Felaketle Sonuçlanan Kaza. İçindekiler başarılı bir Dayanıklılık zarı atmalıdır, aksi takdirde anında ölürler. Pert durumundaki hasar ne olursa olsun alınır. |


---
## Örnek Araçlar

---

### Kara Araçları

#### Önleyici (Interceptor)

Modifiye edilmiş bir lüks araba, spor araba veya benzeri olan bu araç, hızlı gitmek ve bir çatışmada aldığı kadarını geri vermek için üretilmiştir. Bu, birisi "casus arabası" dediğinde insanların aklına gelen araç türüdür.

| Önleyici | |
| :- | :- |
| **Boyut / Tip** | Orta Askeri |
| **Gövde** | 6 |
| **Yapı** | 40 |
| **Sistemler** | 2 |
| **Hız** | Hızlı |
| **Kontrol** | Kolay |
| **Özellikler** | [Fırlatma Koltuğu](0006_Vehicles.md?id=ejector-seat), [Gelişmiş Performans](0006_Vehicles.md?id=enhanced-performance), [Üstün Kontrol](0006_Vehicles.md?id=superior-handling), [Gözetleme Paketi](0006_Vehicles.md?id=surveillance-suite), [Silahlandırılmış](0006_Vehicles.md?id=weaponized) |
| **Silahlar** | Yağ İzi Püskürtücü, Sis Püskürtücü, İkiz Bağlantılı Orta Makineli Tüfekler (2d6+3) |

<br>

---

#### Takip Motosikleti

Hızlı takipler için hafif, hızlı bir motosiklet olan Takip Motosikleti bir sürpriz taşır; ya bir çift bağlantılı makineli tüfek ya da iki roket.

| Takip Motosikleti | |
| :- | :- |
| **Boyut / Tip** | Küçük Sivil |
| **Gövde** | 2 |
| **Yapı** | 12 |
| **Sistemler** | 1 |
| **Hız** | Hızlı |
| **Kontrol** | Kolay |
| **Özellikler** | [Üstün Kontrol](0006_Vehicles.md?id=superior-handling), [Silahlandırılmış](0006_Vehicles.md?id=weaponized) |
| **Silahlar** | İki Roket (4d6) veya İkiz bağlantılı Hafif Makineli Tüfekler (2d6) |

<br>

---

#### Sedan Araba

Bir sürücü ve üç yolcuyu rahatça oturtacak alana sahip standart 4 kapılı bir sedan. Gözetleme paketini dahil etmek için kargo alanından fedakarlık eder.

| Sedan Araba | |
| :- | :- |
| **Boyut / Tip** | Orta Sivil |
| **Gövde** | 4 |
| **Yapı** | 25 |
| **Sistemler** | 2 |
| **Hız** | Seri |
| **Kontrol** | Standart |
| **Özellikler** | [Göze Çarpmayan](0006_Vehicles.md?id=unobtrusive), [Gözetleme Paketi](0006_Vehicles.md?id=surveillance-suite) |
| **Silahlar** | Yok |

<br>

---

#### Dalgıç Araba

Su üzerinde veya su altında seyahat etmek için sualtı veya dalgıç moduna geçebilen iki kişilik bir araba. Öne monte edilmiş bir torpido ve üste monte edilmiş bir karadan havaya füzeyle gelir.

| Dalgıç Araba | |
| :- | :- |
| **Boyut / Tip** | Orta Sivil |
| **Gövde** | 6 |
| **Yapı** | 25 |
| **Sistemler** | 2 |
| **Hız** | Hızlı |
| **Kontrol** | Standart |
| **Özellikler** | [Gelişmiş Performans](0006_Vehicles.md?id=enhanced-performance), [Dalgıç](0006_Vehicles.md?id=submersible), [Sualtı](0006_Vehicles.md?id=waterborne), [Silahlandırılmış](0006_Vehicles.md?id=weaponized) |
| **Silahlar** | Roket (5d6), Torpido (4d10) |

<br>

---

#### Gözetleme Minibüsü

Bir grup ajana ve sesli-görüntülü kayıt ekipmanına ev sahipliği yapan sade, işaretsiz bir minibüs.

| Gözetleme Minibüsü | |
| :- | :- |
| **Boyut / Tip** | Büyük Sivil |
| **Gövde** | 9 |
| **Yapı** | 60 |
| **Sistemler** | 3 |
| **Hız** | Hafif |
| **Kontrol** | Standart |
| **Özellikler** | [Gözetleme Paketi](0006_Vehicles.md?id=surveillance-suite), [Dayanıklı](0006_Vehicles.md?id=tough) |
| **Silahlar** | Yok |

<br>

---

#### Taktik Destek Aracı

Kabininde iki kişilik mürettebat için yeri olan ve kasa kısmında duran bir nişancının döner montajlı Orta Makineli Tüfeği kullandığı bir kamyonet veya cip.

| Taktik Destek Aracı | |
| :- | :- |
| **Boyut / Tip** | Orta Sivil |
| **Gövde** | 6 |
| **Yapı** | 30 |
| **Sistemler** | 2 |
| **Hız** | Seri |
| **Kontrol** | Standart |
| **Özellikler** | [Her Arazi](0006_Vehicles.md?id=all-terrain), [Silahlandırılmış](0006_Vehicles.md?id=weaponized) |
| **Silahlar** | Monteli Orta Makineli Tüfek (2d6) |


<br>

---

### Deniz Taşıtları

#### Sürat Teknesi

Arkaya monte edilmiş bir mayın dağıtıcısı ile donatılmış tipik bir sürat teknesi.

| Sürat Teknesi | |
| :- | :- |
| **Boyut / Tip** | Orta Sivil |
| **Gövde** | 3 |
| **Yapı** | 24 |
| **Sistemler** | 2 |
| **Hız** | Hızlı |
| **Kontrol** | Standart |
| **Özellikler** | [Gelişmiş Performans](0006_Vehicles.md?id=enhanced-performance), [Sualtı](0006_Vehicles.md?id=waterborne), [Silahlandırılmış](0006_Vehicles.md?id=weaponized) |
| **Silahlar** | Mayın Dağıtıcı (5d6) |

<br>

---

#### Yat

Bir oligarkın sahip olabileceği türden lüks bir yat. Kötü niyetli düşmanlara karşı korunmak için bir gözetleme paketiyle donatılmış olması muhtemeldir.

| Yat | |
| :- | :- |
| **Boyut / Tip** | Devasa Sivil |
| **Gövde** | 10 |
| **Yapı** | 75 |
| **Sistemler** | 4 |
| **Hız** | Yavaş |
| **Kontrol** | Müthiş |
| **Özellikler** | [Lüks](0006_Vehicles.md?id=luxurious), [Gözetleme Paketi](0006_Vehicles.md?id=surveillance-suite), [Sualtı](0006_Vehicles.md?id=waterborne) |
| **Silahlar** | Yok |


<br>

---

### Hava/Uzay Araçları

#### Zeplin (Sivil Hava Gemisi)

Hindenburg'a benzer şekilde, bu kıtalararası zeplin sınıfı (ve diğerleri) 245 metre uzunluğundadır ve 40 ila 61 kişilik bir mürettebat gerektirir. Tipik olarak lüks konaklama birimlerinde 50 ila 72 yolcu taşıyabilir.

| Zeplin | |
| :- | :- |
| **Boyut / Tip** | Kocaman Sivil |
| **Gövde** | 10 |
| **Yapı** | 85 |
| **Sistemler** | 5 |
| **Hız** | Hantal |
| **Kontrol** | Herkülvari |
| **Özellikler** | [Havada](0006_Vehicles.md?id=airborne), [Lüks](0006_Vehicles.md?id=luxurious), [Dikey İniş/Kalkış](0006_Vehicles.md?id=vtol) |
| **Kalkanlar** | Yok |
| **Silahlar** | Yok |

<br>

---

#### Saldırı Helikopteri

Geleneksel Saldırı Helikopteri, telefon ve kablosuz internet sinyallerini kesmek ve FLIR aracılığıyla karanlıkta bile bireyleri ve araçları takip etmek için gelişmiş gözetleme teknolojisini kullanır. Takipçiden Gizlilik yoluyla kaçınma girişimleri Müthiş zorluktadır.

| Saldırı Helikopteri | |
| :- | :- |
| **Boyut / Tip** | Büyük Askeri |
| **Gövde** | 11 |
| **Yapı** | 50 |
| **Sistemler** | 3 |
| **Hız** | Orta |
| **Kontrol** | Kolay |
| **Özellikler** | [Havada](0006_Vehicles.md?id=airborne), [Gelişmiş Performans](0006_Vehicles.md?id=enhanced-performance), [Gizlilik](0006_Vehicles.md?id=stealth), [Üstün Kontrol](0006_Vehicles.md?id=superior-handling), [Gözetleme Paketi](0006_Vehicles.md?id=surveillance-suite), [Dikey İniş/Kalkış](0006_Vehicles.md?id=vtol) |
| **Kalkanlar** | Yok |
| **Silahlar** | 1 Gatling Silahı (3d6), 4 Roket (5d6) |

<br>

---

#### Çok Amaçlı Avcı Uçağı

Bu çift koltuklu kara tabanlı avcı uçağı (tip olarak De Havilland Mosquito'ya benzer), performansı ve çok yönlülüğü ile iyi bilinir. Bomba bölmesi, iki adet 250 lb.'lik bomba (0 menzilli orta füzeler olarak değerlendirin) veya tek bir torpido taşıyabilir.

| Çok Amaçlı Avcı Uçağı | |
| :- | :- |
| **Boyut / Tip** | Büyük Askeri |
| **Gövde** | 10 |
| **Yapı** | 45 |
| **Sistemler** | 3 |
| **Hız** | Orta |
| **Kontrol** | Standart |
| **Özellikler** | [Havada](0006_Vehicles.md?id=airborne), [Gelişmiş Performans](0006_Vehicles.md?id=enhanced-performance) |
| **Kalkanlar** | Yok |
| **Silahlar** | 4 Buruna monte Gatling Silahı (4d6+3), 1 bomba bölmesi (6d10 - açıklamaya bakın) |

<br>

---

#### Yıldızlararası Yük Gemisi (Hafif Yüksek Teknoloji Taşıyıcı)

Bu hafif taşıyıcı, en az iki kişilik bir mürettebat gerektirir ve dört ek yolcuya kadar yer vardır. Standart stok versiyonu burada belirtilmiştir, ancak birçok sahip, gizli kargo alanı, Gelişmiş Performans, Üstün Kontrol, EMP Direnci, Gizlilik vb. gibi kendi "özel modifikasyonlarını" uygulayacaktır.

| Yıldızlararası Yük Gemisi | |
| :- | :- |
| **Boyut / Tip** | Orta Sivil Uzay Aracı |
| **Gövde** | 10 |
| **Yapı** | 80 |
| **Sistemler** | 2 |
| **Hız** | Seri (3 Parsek Faktörü) |
| **Kontrol** | Standart |
| **Özellikler** | [Havada](0006_Vehicles.md?id=airborne), [Kargo](0006_Vehicles.md?id=cargo), [Işık Hızı](0006_Vehicles.md?id=ftl), [Uzay Aracı](0006_Vehicles.md?id=spacecraft), [Dikey İniş/Kalkış](0006_Vehicles.md?id=vtol) |
| **Kalkanlar** | 8 |
| **Silahlar** | 2x Dörtlü monte Lazer Topu Tareti (5d6) |


<br>

---

#### Genel İletişim Birimi (Ultra Yüksek Teknoloji Uzay Aracı)

Bu son derece yüksek teknolojili yıldız gemisi, iki kilometre uzunluğunda bir dizi alan bağlantılı modül şeklinde olan, oldukça gelişmiş bir yapay Zihnin fiziksel temsilidir. Modüller ayrı ayrı amaçlara hizmet eder ve yaşam alanları, inşaat tesisleri, kargo alanları, gıda işleme, eğlence kompleksleri, hangar bölmeleri ve hatta gemi zekasının nadiren veya hiç tartışmadığı bazı gizli birimleri içerir. İnsan mürettebata ihtiyacı yoktur, ancak 100.000'e kadar yolcu nüfusunu kolaylıkla destekleyebilir. Birçok yolcu İletişim Biriminde doğar ve ölür: birçoğu geçicidir, diledikleri gibi gelir ve giderler.

| Genel İletişim Birimi | |
| :- | :- |
| **Boyut / Tip** | Muazzam Sivil Uzay Aracı |
| **Gövde** | 20 |
| **Yapı** | 10,000 |
| **Sistemler** | 6 |
| **Hız** | Orta (4 Parsek Faktörü. Bu teknoloji seviyesinde, bir Faktör 1 saate eşittir) |
| **Kontrol** | Müthiş |
| **Özellikler** | [Havada](0006_Vehicles.md?id=airborne), [Kargo](0006_Vehicles.md?id=cargo), [Taşıyıcı](0006_Vehicles.md?id=carrier), [İnşaat](0006_Vehicles.md?id=construction), [Işık Hızı](0006_Vehicles.md?id=ftl), [Lüks](0006_Vehicles.md?id=luxurious), [Uzay Aracı](0006_Vehicles.md?id=spacecraft), [Üstün Kontrol](0006_Vehicles.md?id=superior-handling), [Çekici Işın](0006_Vehicles.md?id=tractor-beam) |
| **Kalkanlar** | 30 |
| **Silahlar** | Tartışmak istediği bir silahı yok |

<br>