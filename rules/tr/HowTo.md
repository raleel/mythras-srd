# Ön Koşullar

1. [Markdown dili](https://www.markdownguide.org/basic-syntax/) hakkında temel bir anlayış.

2. Eğer yoksa ücretsiz bir [github](https://github.com/) hesabı oluşturmanız gerekecektir. RPG'nizin adını kullanmanızı öneririz, çünkü bu, insanların SRD'nize erişmek için kullanacağı URL'nin bir parçası olacaktır.

3. Git bilmeden bu süreci tarayıcı üzerinden tamamen yapabilirsiniz. Ancak github masaüstünü öğrenmek, herhangi bir değişikliği dünyaya canlı olarak dağıtmadan önce yerel olarak test etmenizi sağlayacaktır.

> Kayıtlı bir alan adınız varsa, bu süreçle benim gibi bir SRD oluşturmak için kullanabilirsiniz: https://srd.7thextinctionrpg.com

# Süreç

## Github'da Depo Oluşturma

1. Github'a giriş yapın

2. Genel şablon olan https://github.com/7thExtinctionrpg/RPG_SRD_Template adresine gidin

3. "Use this template" (Bu şablonu kullan) düğmesine tıklayın

![Adım3](/_media/Step3.png)

4. "Create a new repository" (Yeni bir depo oluştur) seçeneğini seçin

5. Bir depo adı girin

![Adım5](/_media/Step5.png)

6. 'Private' (Özel) seçeneğini belirleyin

7. 'Create repository' (Depo oluştur) seçeneğini seçin

Şablonu kopyalamak 5-30 saniye sürecek, ardından kendi kopyanıza sahip olacaksınız.

8. ".nojekyll" dosyasının mevcut olduğundan emin olun; bu, Github'da bir web sitesi barındırılırken ihtiyaç duyulan boş bir dosyadır, aksi takdirde SRD düzgün görüntülenmez. *(Yayınlanan dosyaların Jekyll üzerinden çalıştırılmamasını GitHub Pages'e söyler).*

## İçeriğinizi Ekleme

### *.md Dosyaları

.md dosyaları markdown dosyalarıdır. Markdown, düz metin belgelerine biçimlendirme öğeleri eklemek için kullanabileceğiniz hafif bir işaretleme dilidir. İçeriğinizin boyutuna bağlı olarak, oyununuzun tüm bilgilerini tek bir *.md dosyasına yerleştirebilir veya [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) adresindeki gibi her bölüm için ayrı dosyalar oluşturabilirsiniz. "sample.md" bazı biçimlendirme örnekleri sunar.

Markdown dilini öğrenmek çok kolaydır; yukarıdaki Ön Koşullar bölümündeki 2. maddedeki bağlantıyı tüm sözdizimi listesi için kullanın.

### _Sidebar.md

Bu, web sitesinin sol tarafındaki menünüz, navigasyon panelinizdir. Deponuza bir markdown dosyası ekledikten sonra, içeriğinin dahil edilmesi için dosyayı buraya eklemeniz gerekir. Mevcut biçimlendirmeyi takip edin.

## Depoyu Web Sitesine Dönüştürmek için Github Pages'i Etkinleştirme

1. Deponuzda 'Settings' (Ayarlar) seçeneğine tıklayın

![WebSitesi-Adım1](/_media/Website-Step1.png)

2. Sol taraftaki menüden 'Pages' (Sayfalar) seçeneğini seçin

![WebSitesi-Adım2](/_media/Website-Step2.png)

3. Depoyu 'public' (genel) yapmadıysanız, iki seçeneğiniz vardır:
    a. Depoyu genel yaparak Github Pages'i SRD Web Sitenizi ücretsiz barındırmak için kullanabilirsiniz.
    b. Github hesabınızı yükseltin (bu yazının yazıldığı tarihte aylık 4$ veya yıllık 48$ ücrete tabidir).

4. 'Branch' (Dal) altında 'main' (ana) seçeneğini belirleyin ve kaydet'e tıklayın

5. 10-20 saniye bekleyin, ardından sayfayı yenileyin

6. Artık https://coweater.github.io/mysrd/ gibi URL'nizi göreceksiniz.

![WebSitesi-Adım6](/_media/Website-Step6.png)

## Yazı Tiplerini Değiştirme

1. /_assets/style.css dosyasını düzenleyin

2. 'body section' (gövde bölümü) altında siteFont ve headingFont öğelerini bulacaksınız

3. Bunları kullanmak istediğiniz yazı tipleriyle değiştirin

## SRD'nizde ücretsiz simgeleri görüntülemek için Fontawesome ve/veya Material Icons eklentisini kullanma

### Fontawesome

Ücretsiz simgeler ve animasyonlu simgeler almak için Fontawesome'u kullanın. Abone kullanıcılar Pro Simgeleri kullanabilir.

1. [Fontawesome](https://fontawesome.com/icons) üzerinde simgeyi bulun
2. Simgeyi seçin
3. Açılır pencerede, HTML sekmesi altında " " arasındaki her şeyi kopyalayın

```
```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```
```

4. Kopyalanan metni ``:`` arasına boşluk bırakmadan yerleştirin

```
```EXAMPLE
fa-solid fa-dice-d20
```
```

### Material Icons

Daha fazla ücretsiz simge için Material Icons'u kullanın

1. [Material Icons](https://fonts.google.com/icons) üzerinde simgeleri bulun
2. Web span bağlantısını kopyalayın ve doğrudan markdown dosyalarınıza ekleyin

```
```markup
<span class="material-icons">face</span>
```
```