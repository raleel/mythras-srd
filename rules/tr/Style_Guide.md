# Stil Rehberi Başlığı (h1)

Ana bölüm başlığı için h1 başlıkları (`# Heading Title`) kullanın. Tüm hx başlıkları kenar çubuğunda yer imleri olarak görünecektir.

Başlık bir h1 başlık değilse, kenar çubuğunda sayfa ve ardından h2 'başlık' başlığı şeklinde bir kopyalama hatası görünecektir.

---
## Bölüm başlıkları (h2)

Her yeni ana bölüm için bir ayırıcı (`---`) ile başlayan h2 başlıkları (`## Section Heading`) kullanın.

### Alt bölüm başlıkları h-seviyesini 1 artırır

Her yeni alt bölüm için h3 başlıkları (`### Subsection Heading`) ve her yeni alt-alt bölüm için h4 başlıkları (`#### Sub-Subsection Heading`) kullanın.

### Alt bölüm h-ilerlemesi: 2 > 3 > 4

H-ilerlemesi doğru şekilde ele alınmazsa alt başlıklar kenar çubuğunda karışır.

Başlık işaretçisi bir artmalı veya hiç değişmemelidir.

h2'den sonra h2 veya h3 gelmesi sorun değildir. h3'ten sonra h3 veya h4 gelmesi de sorun değildir.

### Alt bölüm Hataları
h2'den sonra h4 gelmesi sorunlara neden olur. Kenar çubuğu alt başlığı içerik tablosunda başlığın bir yere yukarısına yerleştirir.

### H-seviyelerini düşürme

Bu bir sorun gibi görünmüyor. Örneğin, h4'ten h3'e veya h2'ye düşmek sorun değildir.

---
## Biçimlendirme kuralları

Aşağıdaki stiller, Markdown formatındaki bu _Imperative_ SRD'leri için normdur.

### Kalın, İtalik ve Ayırıcılar

- **Kalın** metin için çift yıldız (`**Bold**`) kullanın.
- _İtalik_ metin için alt çizgi (`_Italic_`) kullanın.
   - _nb: İtalik için tek yıldız kullanmaktan kaçının!_
- Bir karakteri 'kaçış yapmak' için ters eğik çizgi (`\_`) kullanın: \_İtalik Değil\_.
- `code blocks` yapmak için köşeli tırnaklar (``` `code` ```) kullanın.
- Yatay bir ayırma çizgisi eklemek için üç kısa çizgi (`---`) kullanın.

### Kalın ve İtalik Kullanım Kuralları

Aşağıdaki kalıplara bağlı kalmaya çalışın...

#### Kalın başlıklar

Büyüleri, etkileri vb. tanımlarken kalın başlıklar kullanın.
- **Büyü Başlığı:** Açıklama.

#### İtalik başlıklar

Varyant büyüleri vb. 'alt listeleri' için italik başlıklar kullanın.
- **Büyü:** Açıklama.
  - **_Büyü Varyant-A:_** Açıklama.
  - **_Büyü Varyant-B:_** Açıklama.

#### İtalik Başlık Referansları

_Mythras Imperative_ veya ana _Mythras_ kural kitabı gibi bir kitaba atıfta bulunurken italik başlıklar kullanın.

---
## Liste biçimlendirmesi

### Sırasız listeler / Madde işaretleri

- Sırasız listeler kısa çizgilerle yapılır.
- Sırasız listeler kısa çizgilerle yapılır.
  - Girinti seviyesini 2 boşluk veya bir tab ile artırın.

### Sıralı listeler / Numaralı maddeler

1. Numaralı listeler rakam ve nokta/virgül ile yapılır.
2. Numaralı listeler rakam ve nokta/virgül ile yapılır.
- Madde işaretleriyle karıştırın
	- Ve girinti
3. Numaraları tekrar karıştırın
   - Ve maddeler

### Başlıklı listeler

İlgili alt başlık listeleri için başlığı ve iki noktayı kalın yapın.
- **Örnek 1:** Bla, bla, bla...
- **Örnek 2:** Bla, bla, bla...

### İtalik başlıklı listeler

İlgili alt başlık listeleri için başlığı ve iki noktayı kalın ve italik yapın.
- **_Örnek 1:_** Bla, bla, bla...
- **_Örnek 2:_** Bla, bla, bla...

---
## Tablolar

Tablolara bir alt başlık verin ki kenar çubuğunda, üst bölümünden bir seviye girintili olarak yer imi olarak görünsünler.

~Başlık satırını kalın metin yapın.~
Başlık satırını kalın yapmak aslında normal metin olarak gösterir. Varsayılan CSS bu satırı kalın olarak belirler.

### Tablo metin hizalaması

İçerik hizalaması için 2. satırı kullanın: `:--`, `:-:` veya `--:`.
Bu, tüm sütunu etkileyecektir.

#### Tabloların Temel Düzeni

| **Sütun 1** | **Sütun 2** |
| :-: | :-- |
| 1 | alfa |
| 2 | beta |
| 3 | gama |

### Metin hizalama kuralları

- Sayılar veya benzer değer listeleri için ortalama hizalama kullanın.
- Metin cümleleri için sola hizalama kullanın.

#### Hizalama Örnek Tablosu

| **Sayı** | **Açıklama** |
| :-: | :-- |
| 1 | Açıklayıcı metin |
| 2 | Açıklayıcı metin |
| 3 | Açıklayıcı metin |

#### Örnek: Yangın Yoğunluğu Tablosu

| **Yoğunluk** | **Örnekler** | **Tutuşma Süresi** | **Hasar** |
| :-: | :-- | :-: | :-: |
| 1 | Mum | 1d4 | 1d2 |
| 2 | Meşale | 1d3 | 1d4 |
| 3 | Kamp ateşi | 1d2 | 1d6 |
| 4 | Odayı dolduran yangın | 1d2 | 2d6 |
| 5 | Volkanik lav | Anında | 3d6 |

---
## Bağlantılar

SRD'de bağlantılar için birçok kullanım alanı vardır ve burada sadece birkaç ana durum ele alınmıştır.

### Bağlantıları Biçimlendirme

Bir bağlantıyı biçimlendirme, köşeli parantez içinde metinle yapılır. Görünen bağlantı metni için köşeli parantez, hedef URL için ise kavisli parantezler kullanın: `[Link Text](URL)`.

Bu belgelerde en yaygın kullanılan harici bağlantı [Mythras Encounter Generator](https://mythras.skoll.xyz) olacaktır.
```
[Mythras Encounter Generator](https://mythras.skoll.xyz)
```

### Harici ve Dahili Bağlantılar

Harici bağlantılar internet üzerinden diğer sayfalara gider ve bir `http://example.com` URL'sine ihtiyaç duyar ve varsayılan olarak her zaman yeni bir tarayıcı sekmesinde açılır.

Okunan belgeyi birden çok sekmenin karıştırmasını önlemek için, dahili bağlantılar ve yer imleri, GitHub deposunda görünür olan markdown dosyalarına referans veren göreceli URL'ler ile oluşturulur. Yeni bir sekme yerine, bu dahili bağlantılar bağlantılı bölüme hızla kaydırır.

#### Dahili bağlantı örnekleri

- **Bölüm bağlantıları:** Bunlar ana (h1) bir bölümün başlangıcına işaret eder. Örn. [Savaş](0005_Combat.md) bölümü.

  - Bağlantı formatı: `[Combat](0005_Combat.md)`

- **Alt bölüm bağlantıları:** Bunlar, yukarıdaki gibi belgeye referans veren ancak hemen ardından `?id=` ve hedef başlığı ekleyen bir bölüm içindeki bir başlığa işaret eder. Örn. [Atak Zıplamalar](0005_Combat.md?id=leaping-attacks)

  - Bağlantı formatı: `[Leaping Attacks](0005_Combat.md?id=leaping-attacks)`

#### Alt bölümlere harici bağlantılar

Harici bir belgenin bilinen bir bölümüne, örneğin başka bir SRD'deki belirli bir tabloya atıfta bulunma ihtiyacı olabilir. Biçimlendirme, yukarıdaki alt bölüm bağlantıları ile aynıdır, sadece harici HTTP URL'si kullanılır.

Örnek olarak, [Classic Fantasy Imperative SRD](https://cfi-srd.mythras.net/)'den [İmparatorluktan Metrik dönüşüm tablosu](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion) buradadır.

```
[Imperial to Metric conversions table](https://cfi-srd.mythras.net/#/Appendix_B_Conversion_Tables?id=imperial-weights-and-measures-to-metric-conversion)
```

---
## Büyü ve Güç listeleri

Mevcut büyüler, güçler vb. listeleri için h2 başlığıyla 'temiz' bir bölüm başlatın; ardından her liste öğesi için h3 kullanın.

Büyüler ve güçler genellikle büyü türüne göre (Halk Büyüsü, Teizm vb.) tek bir düz listede sunulur, ancak listenin okul veya kült uzmanlıkları gibi kendi alt bölümlerine ihtiyacı varsa, başlık seviyesini uygun şekilde artırın. Örneğin, Teizm Mucizeleri Listesi için h2, Mithras Kültü için h3 ve her Mithras kült mucizesi için h4.

Özellikle büyülerde, ancak anahtar kelime nitelikleri kullanan her türlü açıklamada, bunları italik metinle listeleyin.

Açıklayıcı metin ve özel kurallar normal metin kullanır.

### Büyü Listesi biçimlendirmesi

```
## h2 List name

### List item

_Attributes_

Description text.
```

<details>

<summary>Örnek: biçimlendirilmiş büyü listesi (blok alıntı) </summary>

---
> ## Büyü açıklamaları
>
> ### Önleme
> _Anında, Menzilli_
>
> Önleme, menzil içindeki başka bir büyüyü ortadan kaldırmak için kullanılır. Önleme, Karşı Büyü Reaktif Eylemi kullanılarak saldırı büyülerini etkisiz hale getirmek için reaktif olarak yapılabilir.

</details>

---
## Araç istatistik blokları
Listeler için h2 başlığıyla 'temiz' bir bölüm başlatın, ardından kategoriler ve liste öğeleri için h-seviyesini normal şekilde artırın.

Listelenen her örnek, statları ve açıklamaları kalın başlıklı madde işaretli liste olarak sunar.

### Araç İstatistik Bloğu biçimlendirmesi

```
## h2 List name

### Category

#### List Item

- **Stat 1:**  [Value]

- **Stat 2:**  [Value]

- **Description:** Descriptive text.
```

<details>

<summary>Örnek: biçimlendirilmiş araç istatistik bloğu (blok alıntı) </summary>

---
> ## Örnek Araçlar
>
> ### Kara Araçları
>
> #### Önleyici
>
> - **Gövde:** 6 (Orta Askeri), 40 Yapı
>
> - **Hız:** Hızlı
>
> - **Sistemler:** 3
>
> - **Nitelikler:** Fırlatma Koltuğu, Gelişmiş Performans, Üstün Yol Tutuşu, Gözetim Paketi, Sağlam, Silahlı
>
> - **Silahlar:** Yağ sıçratıcı, duman bombası atıcı, çift bağlı orta makineli tüfekler
>
> - **Açıklama:** Güçlendirilmiş bir lüks araba, spor araba veya benzeri, bu araba hızlı gitmek ve bir savaşta aldığı kadar iyi karşılık vermek için yapılmıştır. Bu, birisi "casus arabası" dediğinde insanların düşündüğü türden bir araçtır.

</details>

---
## Yaratık istatistik blokları
Listeler için h2 başlığıyla 'temiz' bir bölüm başlatın. Yaratık istatistik blokları tablolar kullanır ve biçimlendirme ve alan gereksinimleri açısından daha karmaşıktır. Netlik için, alt bölümlerden kaçının ve liste öğeleri arasına ayırıcılar ekleyin.

Listelenen her örnek aşağıdakileri içermelidir...

- **Yaratık başlığı:** Yaratık adı için bir ayırıcı ve ardından bir h3 başlığı.

- **MEG girişi:** [Mythras Encounter Generator](https://mythras.skoll.xyz/)'daki belirtilen yaratığa harici bir bağlantı.

- **Temel Detaylar:** Yaratık adı/türü, nitelikler, beceriler ve gerektiğinde özel açıklamalar veya karakter notları.

- **Silah Detayları:** Silah adı ve aşağıdaki nitelikler için sütunlar içeren kısaltılmış açıklamalar: Boyut (Burada Kuvveti dahil edin), Menzil (Burada Mesafeyi dahil edin), Hasar, ZP/YP ve özel kurallar.

- **Vuruş Yerleri ve Zırh:** Yerleşim tabloları farklı yaratık anatomilerine göre değişecektir, ancak zırhı ve hasarı izlemek için geleneksel insansılar için bile dahil edilmelidir.

### Yaratık İstatistik Bloğu biçimlendirmesi

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

<summary>Örnek: biçimlendirilmiş yaratık istatistik bloğu tabloları (blok alıntı) </summary>

> ---
> ### Goblin/Ork
> [MEG girişi](https://mythras.skoll.xyz/enemy_template/10891/)
>
> | Yaratık Adı | Goblin/Ork |
> | :-- | :-- |
> | Temel Nitelikler | GÜÇ 11, DAY 14, BOY 11, ÇEV 11, ZEK 11, GÜÇ 11, KAR 7 |
> | Eylem Puanları | 2 |
> | Hasar Değiştirici | - |
> | İnisiyatif | +11 |
> | Hareket | 6m |
> | Yetenekler | Gece Görüşü |
> | Beceriler | Atletizm 52%, Güç 42%, Kandırma 57%, Dayanıklılık 48%, Kaçınma 62%, Algı 61%, Silahsız 52%, İrade 42% |
> | Savaş Tarzı | Savaşçı (Kısa Kılıç, Kalkan, Mızrak, Sapan) 62% |
>
> #### Silah Detayları
>
> | Silah | Boyut | Menzil | Hasar | ZP/YP | Özel |
> | :-- | :-: | :--: | :--: | :--: | :-- |
> | Kısa Kılıç | O | O | 1d6 | 6/8 | |
> | Mızrak | O | U | 1d8+1 | 4/5 | |
> | Sapan | K | 10/150/300 | 1d8 | 1/2 | |
> | Kalkan | B | K | 1d4 | 4/9 | Pasif Bloklama/Korumalı Kalkan için 3 yerleşimi korur |
>
> #### Vuruş Yerleri ve Zırh
>
> | **1d20** | **Yerleşim** | **ZP/YP** |
> | :-: | :-- | :-: |
> | 1-3 | Sağ Bacak | 1/5 |
> | 4-6 | Sol Bacak | 1/5 |
> | 7-9 | Karın | 1/6 |
> | 10-12 | Göğüs | 1/7 |
> | 13-15 | Sağ Kol | 1/4 |
> | 16-18 | Sol Kol | 1/4 |
> | 19-20 | Kafa | 1/5 |

</details>

---
## Topluluk Hata Düzeltmeleri

### Yazım hataları ve karışıklık

Yazarların metnini 'temizlemek' için yapılan düzenlemeler minimumda tutulmalıdır ancak yazım hataları ve diğer hatalar herhangi bir işaretleme olmadan satır içi olarak değiştirilmelidir.

### Hata Düzeltme Bilgi Panelleri

Belirli bir kuralın çok belirsiz, eksik veya basitçe yanlış olduğu durumlarda, katlanabilir bir Topluluk Hata Düzeltme notu ekleyin.

Sorunu italik olarak, sadece sorunun başlığı için kalın italik kullanarak açıklayın - _h(x) başlıkları kullanmayın!_ - böylece kenar çubuğunda kafa karıştırıcı girişler oluşmaz.

Yerine geçen metin eklenirse, _"Topluluk Hata Düzeltmesi:"_ normal ağırlıkta italik olarak önceden belirtilerek, çift tırnak içinde kalın italik olarak yerleştirin.

Gerekirse ek kurallar normal ağırlıkta metinle sunulmalıdır.

#### Hata Düzeltme Biçimlendirme Şablonu

```
<details>

<summary>* Community Errata</summary>

_**Issue Title**_

_Community Errata:_
_**"Replacement text if required."**_

_Explanation text stating how the rule as written causes problems._

</details>
```

#### Hata Düzeltme Örnekleri

<details>

<summary>* Topluluk Hata Düzeltmesi</summary>

_**Tırmanma**_

_Topluluk Hata Düzeltmesi:_
_**"Giyilen zırh, giyilen Zırh Puanlarının ortalamasına eşit miktarda tırmanıcıları engeller. Bunu, her bir yerleşimin giyilen zırh puanlarını toplayıp bu rakamı yerleşim sayısına bölerek bulun."**_

_Yazıldığı şekliyle kural hızla sorunlara yol açar. Tek bir 6 ZP zırh parçası giymek bir insanın Hareketini 0'a düşürür, bu da sadece çelik miğfer giyen bir insanın hiç tırmanamayacak kadar ağır olacağı anlamına gelir. Bu, makul olmayan derecede kısıtlayıcı görünüyor, bu nedenle yukarıda önerilen düzenlenmiş versiyon eklendi. Orijinal yazarlar kuralı yazıldığı şekliyle revize ederse bu güncellenecektir._

</details>

<details>

<summary>* Topluluk Hata Düzeltmesi</summary>

_**Yürüyüş Şekilleri: Yürüme, Koşma, Depar**_

_Yayınlanan _Mythras Imperative_ versiyonunda farklı yürüyüş şekillerinde hareket etmek için açık kurallar yoktur, ancak bunlar Mythras ana kural kitabında yer almaktadır. Yukarıdaki Yürüyüş Şekli çarpanları Topluluk Hata Düzeltmesi'nin bir parçası olarak eklenmiştir._

_Gerektiğinde Yürüyüş Şekillerini aşağıdaki gibi ele almak yeterli olmalıdır:_

- _Yürüme'den daha hızlı Yürüyüş Şekilleri, Hareket değerine bir çarpan uygular: Koşma için 3x, Depar için 5x._

- _Koşma veya Depar Yürüyüş Şeklindeyken, karakterler saldırmak veya büyü yapmak gibi çoğu proaktif eylemi deneyemezler. Bazı istisnalar şunları içerir..._
  - _Şarj Etme kuralları kullanılırken saldırılar._
  - _Menzilli silahları Skirmishing niteliğiyle ateşlemek._
- _Genel bir kural olarak, izin verilen tüm eylemler Koşma'da bir Seviye daha zor, Depar'da ise iki Seviye daha zor olarak ele alınmalıdır._

</details>

---
## Çeşitli Uyarılar

### Boş satırlar / Satır Başı

Farklı giriş türleri arasında boş bir satır bırakın. Başlıklar, ayırıcılar, tablolar vb. Bunlar okuma görünümünde görünmez ancak yoklukları biçimlendirme sorunlarına neden olabilir.

### Kalın veya italik çok paragraflı metin

Her paragraf kalın veya italik metin olarak işaretlenmelidir. Paragraflar arasındaki yeni satır, biçimlendirmeyi bozar ve sahipsiz biçimlendirme işaretleri bırakır.

### Uluslararası yazımlar

Gerici ve içler acısı güçler, tüm İngiliz yazımlarını nesnel olarak daha zayıf olan ABD versiyonları lehine kaldırmayı uygun görmüştür. İngiliz -OUR kelimelerine dikkat edin: _armour_, _favour_, vb.