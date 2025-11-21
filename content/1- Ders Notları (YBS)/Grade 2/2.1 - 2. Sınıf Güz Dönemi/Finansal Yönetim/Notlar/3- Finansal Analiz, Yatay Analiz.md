---
title: 3- Finansal Analiz, Yatay Analiz
type: learning
ders: "[[Finansal Yönetim]]"
date: "[[2025-10-15]]"
cssclasses:
  - ders-notu
created: 15.10.2025
---
- **Not**: Finans dersinden nispeten bıktığım için bazı notlar akademik düzeyden sapıyor. İdare ediverin.
	- Notlar henüz yarımdır. Haftaya göre değil konuya göre alınmaktadır notlar.

---



# **1.** Mâlî Tablolar

## Hatırlayalım


>[!quote] Alıntı
>"Hafıza-ı beşer nisyan ile mâlûldür."...


- Bkz. [[Muhasebenin Beş İşlevi]]
- Muhasebe bir bilgi sistemi. Bu sistem ne yapar? E bilgi sistemi olduğundan firmada olup biten para hareketlerini (mâlî olaylar) alıp anlamlı bir şeye dönüştürür. Bu süreç de şöyle işler:
	1. **[[Saptamak]]**: "Mal aldım", "para ödedim" demek yeterli değil. **Elde belge olmalı**; faturadır, makbuzdur, dekonttur vs. Olayı **somut** olarak tespit edebilmek gerekli. Belgesi olmayan şeyin muhasebe yeri yoktur.
	2. **[[Kaydetmek]]**: Saptanılan belgeler alınıp sırayla, günü gününe bir deftere ([[Kaydetmek (Yevmiye Defteri)|Yevmiye Defteri]]) yazılır.
	3. **[[Sınıflandırmak]]**: Yazılan binlerce kayıt ayıklanır, "kasayla ilgili olanlar buraya", "borçlar şuraya", "satışlar buraya" şeklinde hesaplara dağıtılır. Buna da **[[Sınıflandırmak (Defter-i Kebir)|defter-i kebir]]** derler.
	4. **[[Özetlemek]]**: Kimse o karman çorman defterlere bakmaz. Patrona "ne durumdayız?" diye özet lazım. Bu özetleme işinin iki adımı var:
		- ***a)* [[Mizan çıkarmak]]**: Bu bir sağlamadır, bir kontrol listesidir. Belirli aralıklarla (aylık falan) tüm hesapların borç ve alacak toplamlarına bakar. Tek amacı "matematiksel hata yaptık mı?" diye kontrol etmek. Mizanın borç tarafı ile alacak tarafı her zaman eşit çıkmak zorunda, terazi bu. Eşit değilse kaydı yanlış yaptık demektir. Son tabloların ön hazırlığıdır.
		- ***b)* Finansal Tabloları Hazırlamak**: Mizandan emin olduktan sonra sınıflandırdıkları rakamları alıp iki temel tabloya dökerler: **[[Bilanço Tablosu|Bilanço (Röntgen)]]** ve **[[Gelir Tablosu|Gelir Tablosu (Film)]]**.
	5. **[[Analiz Etmek ve Yorumlamak]]**: Son aşamadır. Bu artık muhasebecinin işi değil, **bizim (finansçıların), patronların, bankacıların, yatırımcıların** işi. O özetlenmiş tablolara bakıp "şirket batıyor mu, çıkıyor mu, ne halt ediyoruz?", "kâr iyi mi, borç yok mu, niye böyle oldu?" diye diye anlamlandırmaya çalışırız. 

## Tek Düzen Hesap Planı

> [!important] Tek Düzen Hesap Planı (TDHP)
> Türkiye'deki tüm şirketlerin aynı dili konuşması için Maliye Bakanlığı'nın getirdiği standart bir hesap listesidir. Her hesabın bir kodu vardır.
> - 1. Basamak (Sınıf): Hesabın ana grubunu belirtir. (Örn: 1 Dönen Varlıklar, 5 Öz Kaynaklar, 6 Gelir Tablosu)
> - 2. Basamak (Grup): Ana grup içindeki alt grubu belirtir. (Örn: 10 Hazır Değerler, 50 Sermaye, 60 Brüt Satışlar)
> - 3. Basamak (Hesap): Detay hesabı belirtir. (Örn: 100 Kasa, 500 Sermaye, 600 Yurt İçi Satışlar)

<br>
### Hesap Sınıfları

#### `1-5` Bilanço Hesapları


##### `1: Dönen Varlıklar`

- Firmanın 1 yıl içinde paraya dökecek neyi varsa buradadır. Kasa, banka, alacaklar, stoklar vesaire.
	- `100 Kasa`, `102 Bankalar`,  `121 Alacak Senetleri`, `153 Ticarî Mallar`, `...`

##### `2: Duran Varlıklar`

- Faydası 1 yıldan uzun süren, hemen paraya çevrilmesi düşünülmeyen ve işletmenin ana faaliyetlerini sürdürmek veya gelir elde etmek için kullandığı zımbırtılar.
###### [[Maddî Duran Varlıklar]] (İşletme İçi Yatırım) 

- İşletmenin kendi faaliyetleri için aldığı, elle tutulur gözle görülür varlıklar (bina, makine, taşıt vb.).
- `252 Binalar`,  `254 Taşıtlar`,  `255 Demirbaşlar`, `...`
###### [[Mâlî Duran Varlıklar]] (İşletme Dışı Yatırım)
- İşletmenin atıl parasını başka şirketlere yatırarak gelir elde etme (temettü, faiz) veya o şirketleri kontrol etme amacıyla edindiği finansal varlıklar. İşletmenin başka bir işletmenin sermayesini ya da hisse senedini alarak değerlendirmesi de denilebilir. 
- `24- Mâlî Duran Varlıklar` grubunda izlenir.
	- `242 İştirakler`, `245 Bağlı Ortaklıklar`, `...`
###### [[Maddî Olmayan Duran Varlıklar ve Diğerleri]] 
- Fiziksel olmayan ancak şirkete uzun süre fayda sağlayan değerler.
	- `260 Haklar (Patent, Lisans, telif hakkı vb.)`

- **Aktifleştirilmiş Giderler**: Yapılan büyük bir harcamanın (örn: 5 yıllık büyük bir reklam kampanyası veya yeni bir fabrika kurarken yapılan Ar-Ge masrafları) faydası birden fazla yıla yayılıyorsa, onu tek seferde gider yazıp o yılın kârını eritmek yerine bilançonun aktif tarafına bir varlık gibi yazarız. Sonra her yıl faydalandığımız kadarını amortisman gibi giderleştirebiliriz.
	- **Neden Duran Varlık?**: Çünkü o büyük harcamanın faydasını 5 yıl boyunca göreceğiz. Bu yüzden maliyeti de 5 yıla yaymak mantıklı. Muhasebenin "dönemsellik" ilkesinin bir gereği işte bu.

> [!important] Not
> Dönen Varlıklar ve Duran Varlıklar bilançonun **aktif** tarafındadır. [[Cari Aktif]], ve [[Çalışma Sermayesi (İşletme Sermayesi)]] olarak da adlandırılır.  "Şirketin nesi var?" sorusuna yanıt verir.

####  `3: Kısa Vadeli Yabancı Kaynaklar`
- 1 yıl içerisinde ödenmesi gereken borçlar. Banka kredisi, satıcıya borç vesair.
	- **Cari Pasif** olarak da adlandırılır. 
	- `300 Banka Kredileri`, `320 Ticarî Borçlar` , `360 Ödenecek Vergi ve Fonlar`,  `...`
	- Vergiyi kenara ayırmak da burada gerçekleşir. `370 Dönem Kârı Veri Karşılığı` veya `372 Kıdem Tazminatı Karşılığı`. Parayı daha ödemedik ama ödeyeceğimizi kesin biliyoruz, o yüzden *şimdiden* borç olarak kaydediyoruz. Bir yükümlülüktür bu.
#### `4: Uzun Vadeli Yabancı Kaynaklar`
- 1 yıldan uzun sürede ödenmesi gereken uzun borçlar.
	- `400 Banka Kredileri`, `421 Ticarî Borçlar`, `...`
#### `5: Özkaynaklar`
- Sermaye, patronun parası, birikmiş kârlar, hissedarların, şirketlerin *asıl* sahiplerinin parası. En son ödenen paradır.
	- `500 Sermaye (Patronun ilk koyduğu para)`, `570 Geçmiş Yıllar Kârları`, `590 Dönem Net Kârı`, `54 Kâr Yedekleri`, `580 Geçmiş Yıl Zararları (-)`, `52 Sermaye Yedekleri`
	-  [[Bedelli Sermaye Artırımı|bedelli]]/[[Bedelsiz Sermaye Artırımı|bedelsiz]] sermaye artırımı olayı burada gerçekleşir.
		- Bedelsiz sermaye artırımında şirkete *dışarıdan yeni para girmez*. Şirketin zaten kendi içinde birikmiş olan `54- Kâr Yedekleri`veya `52- Sermaye Yedekleri` gibi fonların alınıp, `500- Sermaye` hesabına eklenmesidir. Ortakların elindeki hisse sayısı artar ama şirketin toplam özkaynak değeri değişmez. Sadece rakamlar yer değiştirir.
		- Bedelli sermaye artırımı ise patronların (ortakların) ceplerinden yeni ve nakit para koyarak `500 Sermaye` hesabını şişirmesidir. Şirkete taze kan, yani sıcak para girer.


> [!important] Not
> Kısa Vadeli Y.K., Uzun Vadeli Y.K. ve Özkaynaklar bilançonun **pasif** tarafında yer alırlar. "O varlıkları kim fonlamış? Kimin parasıyla dönüyor bu iş?" sorularına yanıt verir.



#### `6: Gelir Tablosu Hesapları`

- O seneki faaliyetlerin sonucu. Ne kazandın (gelir) ne kadar harcadın (gider).
- `60- Brüt Satışlar` grubuyla başlar (`600 Yurt İçi, 601 Yurt Dışı` vs.)

- İskonto dediğimiz `61`'li grup (Satıştan İadeler `610`, Satış İskontoları `611` -yani kampanyalar, indirimler vs.-) bundan düşülür.
- Elimizde kalan şeye `Net Satışlar` denir. Bu bizim **[[hâsılât]]** dediğimiz şeydir. **Dikey analizi hep buna göre yaparız** (%100 burasıdır).
	- "Hâsılat" (Revenue) denilen şey tam olarak bu Net Satışlar rakamıdır.

- Yatırımdan temettü geliri elde edersek, o gelir esas faaliyet kârı'ndan sonra gelir tablosuna girer. `64- Diğer Faaliyetlerden Olağan Gelir ve Kârlar (640 İştiraklerden Temettü Geirleri` gibi) grubunda yer alır.
	- Ana işimizin dışında (faaliyet kârı) bir gelirdir bu, finansal gelirdir. Aynı şekilde bankaya ödenilen faiz (`66- Finansman Gideri`) de faaliyet kârından sonra düşülür.
	- Bkz. [[Yatırım ve Gelir]]
- Yıl sonunda `690 Dönem Kârı veya Zararı` hesabına atılıp kapatıldıkları için **sonuç hesabı** denilir.
	-  `600 Yurt İçi Satışlar`, `621 Satılan Ticarî Mallar Maliyeti (-)`, `632 Genel Yönetim Giderleri (-)`, `690 Dönem Net Kârı veya Zararı`, `...`

>[!faq] Gelir Tablosu Nasıl Başlar ve Hâsılât Nedir?
> Gelir Tablosu *Brüt Satışlar* ile başlar (`600 Yurt İçi Satışlar` ve `601 Yurt Dışı Satışlar` gibi hesapların toplamıyla).
> - Yapılan kampanyalar, iadeler, müşteriye geçilen kıyaklar (iskonto) bu brüt satıştan düşülür.
> - Elde kalan son paraya `Net Satışlar` denir. Hâsılât da bu net satışlardır.


#### `7: Maliyet Hesapları`
- Üretim ile ilintili, daha ziyade teknik. Eğer bir şey üretiyorsak (al-sat değil de imalat yapıyorsak), o üretim sırasında harcanılan şeyler buradan takip edilir.
	- `710 Direkt İlk Madde ve Malzeme`, `720 Direkt İşçilik`,  `730 Genel Üretim Giderleri`, `...`
		- Sonra bu `7`'ler `620`'ye falan gider.
#### `8: Boş (Serbest) Hesaplar`
- Boş işte :D 
- Devlet burayı boş bırakmış, 'isteyen olursa yönetim muhasebesi için uluslararası raporlama farklılıkları için falan kullansın' demiş. Kimse kullanmaz genelde.
##### `9: Nazım Hesaplar`
- Firmanın mülkiyetinde olmayan ama takip edilmesi gereken değerler.
	- `900 Alınan Teminat Mektupları`, `901 Verilen Teminat Mektupları`
- **[[Nazım Hesap|Daha iyi anlaşılması için tıkla]]**



>[!important] Kontra Hesap (Düzenleyici Hesap)
>Bilançoda, ait olduğu ana hesabın zıttı (karşıtı) karakterde çalışan hesaplardır. Amacı ana hesabın brüt değerini düzenleyerek o hesabın net değerini göstermektir. Bu yüzden "eksi karakterli" olarak adlandırılırlar ve bilançoda parantez "()" içinde veya eksi "-" işaretiyle gösterilirler.


## **1.1.** Finansal Tablolar
- Muhasebecilerin tuttuğu kayıtların özeti. Bu sayede patronlar, bankacılar, yatırımcılar şirketin ne yaptığını anlar. Biz analizi **bilanço** ve **gelir tablosu** üzerinden yapacağız, gerisi ayrıntı.
## **1.2.** Temel Mâlî Tablolar
### 1.2.1. [[Bilanço Tablosu|Bilanço]]
- Firmanın belli bir andaki röntgeni. O gün neyi var, ne kadar borcu var vesair onu gösterir. Anlık bir fotoğraf gibi işte.
- **Aktif (Varlıklar)**: **Firmanın ekonomik gücüdür**, ekonomik değeridir, ekonomik tarafı gösterir. En hızlı paraya **dönen**den (kasa) en yavaşına/**duran**ına (bina) doğru sıralanır. Buna **[[likidite]]** derler.
- **Pasif (Kaynaklar)**: **Firmanın finansal yapısıdır**. Şirketin kimin parasıyla döndüğünü gösterir. Borçlar vadesine göre sıralanır. En önce ödenmesi gereken en üsttedir.  "Firma bugün batsa, kim parasını hangi sırayla alır?" sorusuna da yanıt verir. 
	1. **Kısa Vadeli Borçlar**:  1 yıl içinde ödenecekler.
		- **300 Mâlî Borçlar**: Banka, [[Faktoring Şirketleri|faktoring]] gibi [[Finansal Kuruluşlar|finansal kuruluşlar]]a olan borçlar, krediler falan. Ana faaliyet konusu para olan kurumlara olan borçlardır da denilebilir.
		- **320 Ticarî Borçlar**: Mal veya hizmet aldığın tedarikçilere (satıcılara) olan veresiye borç.
	2. **Uzun Vadeli Borçlar**: 1 yıldan sonra ödenecekler.
	3. **Öz Kaynaklar**: En sonda patronların parası gelir. Şirket batarsa, herkes parasını aldıktan sonra onlara bir şey kalırsa ne âlâ, alırlar paralarını borçları ödenebilirse. En riskli para budur. Zaten bu yüzden risk sermayesi demiştik ilk ders notunda.

### 1.2.2. [[Gelir Tablosu|Gelir Tablosu]]
- Şirketin belli bir dönemdeki filmi. **Bir yıl** boyunca ne kadar satmış, ne kadar harcamış, sonuçta kâr mı zarar mı etmiş onu anlatır.

## **1.3.** Ek Finansal Tablolar
- Nakit Akım Tablosu, Fon Akım Tablosu, Kâr Dağıtım Tablosu gibi tablolar. Temel tabloları detaylandırır. Bizim için teferruat, boş vereceğiz bunları.
## 2. [[Finansal Analiz]]
- Firmalarda tutarlı kararların alınabilmesi açısından ilk basamağı oluşturur. Finansal analiz yapılarak işletmelerin mevcut durumları saptanır ve geçmişe yönelik durumu tespit edilip değerlendirilerek geleceğe ilişkin kararlar alınır. Öngörü yapılır ve hedef sayısallaştırılabiliyorsa mutlaka sayısal hâle getirilir.
	- Bkz. **[[Muhasebenin Beş İşlevi]]**
	- Konunun daha iyi anlaşılması için muhasebeyi tekrar etmek gerekiyor.  ([[Varlıklar]]), ([[2- Hesap Kavramı ve Hesapların İşleyişi]]), ([[3- Hesapların İşleyiş Kuralları]])
- Tablolardaki rakamları alıp birbirine bölmek, çarpmak, oranlamak, sonuçtan bir anlam çıkarmaya çalışmak vesair.  Bilanço ve gelir tablosundan çekiyoruz verileri.
	- Amaç geçmişe bakıp bugünü anlamak, bugüne bakıp geleceği tahmin etmek.
### 2.1. [[Finansal Analizi Kimler Yapar]]? (Kategori sorusu gelebilir)
1. **Yöneticiler (*İşletme İçi Uzmanlar*)**:  "Nerede hata yapıyoruz kardeşim?" diye bakmak için. Daha düzgün ifadeyle karar almak, verimliliği ölçmek, zayıf yönleri tespit etmek için (**Yönetim Analizi**).
	- Nispeten büyük ölçekli işletmelerde artık departmanlar fazlalaştıkça ve sayı arttıkça finans departmanına bağlı finansal analistler vesaire yapar bunu, ancak nihayetinde yine bu işi koordine eden yöneticiler vardır.
2. **[[Finansal Kuruluşlar]], Satıcılar/Tedarikçiler , [[sermaye piyasaları|Sermaye Piyasaları]] (*İşletmeye Kredi Veren 3. Kişi ya da Kurumlar*)**: "Bu elemanlara kredi versek geri ödeyebilirler mi?" diye ölçmek için (**Kredi Analizi**).
3. **Yatırımcılar (*Mevcut ve Potansiyel Ortaklar*)**: "Bu şirkete para yatırsak kâr elde eder miyiz?" diye ölçmek için (**Yatırım Analizi**).
#### Finansal Analizin Amacı
1. İşletmenin likidite durumu (nakdi inceler).
2. İşletmenin kârlılık durumu.
3. İşletmenin sermaye yapısı.
4. İşletmenin aktifliğinin kullanım durumu.
5. İşletme ile ilgili önemli trendlerin elde edilmesi.

### Başa-Baş Noktası
- **Başa-Baş Noktası (Break-Even Point)**: "Kafa kafaya" gelinen noktadır. Ne kârdayız ne zararda. Kârımız tam olarak sıfır (0). Bu noktada firmanın elde ettiği toplam gelir (hâsılat), o geliri elde etmek için katlandığı toplam maliyete (sabit maliyetler + değişken maliyetler) tam olarak eşittir.

![[output(1).png]]


# 3. Finansal Analiz Teknikleri
### 3.1. **Amacına Göre Analiz Türleri**
#### 3.1.1. Yönetim Analizi
#### 3.1.2. Kredi Analizi
#### 3.1.3. Yatırım Analizi

### 3.2. **Kapsamına (Yapılışına) Göre Analiz Türleri**
#### 3.2.1. Statik Analiz
#### 3.2.2. Dinamik Analiz

### 3.3. **Analistçinin Statüsüne Göre**
#### 3.3.1. İç Analiz
#### 3.3.2. Dış Analiz




## 3.3.2.1. **Karşılaştırmalı Tablolar Analizi** (Yatay Analiz)


> [!faq] Aktif ve Pasif Ne Anlama Gelir?
 >   - **Aktif Taraf**: İşletmenin ekonomik yapısını/gücünü gösterir. (Şirketin neleri var?)
 >   - **Pasif Taraf**: İşletmenin finansal yapısını/gücünü gösterir. (Bu varlıkları kimin parasıyla almış?)


- İşletmenin iki veya daha fazla dönemine ait mâlî tabloları alıyoruz (bilanço, gelir tablosu gibi temel tabloları yani). Bunları yan yana koyuyoruz ve kalem kalem karşılaştırıyoruz. Ne artmış ne azalmış ona bakıyoruz.
- **Dinamik bir analiz tekniğidir, birden fazla dönem vardır**. **Tek bir analiz varsa statiktir.
- Bunlar için en az iki dönem lazım. **Daha çok döneme bakacaksak** ya *ilk yılı baz alacağız* ya da *her yılı bir öncekiyle kıyaslayacağız*

- **Hesabı şöyle yapılıyor**: 
	- Önce farkı buluyoruz. $\boxed{\text{Değişim Değeri } = \text{ Cari Dönemdeki Değer } - \text{ Baz (önceki) Dönemdeki Değer}}$
	-  Sonra bu farkın yüzdesini hesaplıyoruz. $\boxed{\text{ Değişim Yüzdesi } = \text{ (Değişim Değeri / Baz Dönemdeki Değer)} \times 100}$


> [!important] Baz Dönem Olma Koşulları (**Yatay Analiz İçin Geçerli Değil!**)
> - Kuruluş, tasfiye/iflas/konkordato dönemi olmayacak.
> - Yatırım yapılan bir yıl olmayacak.
> - Maliyet yılı olmayacak.

> [!important] Cari Dönem?
> - **Cari dönem**, finansal analizde *incelediğimiz yıl*dır, içerisinde bulunan dönemin aksine. Normalde finansta da muhasebede de içerisinde bulunan dönemdir, ancak finansal analizde incelediğimiz yıl varsayılır.


- **Tıkla**: [[2- İşletme Finansı (Finansal Analiz, Yatay Analiz).pdf#page=21|2- İşletme Finansı (Finansal Analiz, Yatay Analiz), s.20-23]]

- **Yatay analiz hem gelir tablosu hem de bilanço için aynı şekilde hesaplanır**.
- **Şöyle yorum yapacağız**: " $\dots$  Hesabı önceki/baz yıla kadar  $\dots$  tutarında $\dots$  yüzdesinde artış/azalış göstermiştir."

###### **Ne işe yarıyor bu yatay analiz?** 
- İşletmenin geçmişini görmeye yarıyor. Bugünkü durumunu anlıyoruz, geleceğe dair de fikir veriyor işte. Değişimleri yorumluyoruz sonrasında, iyi mi kötü mü, neden olmuş falan.

<br>

## 3.2. Yüzde Yöntemiyle Analiz (Dikey Analiz)
- Bilançoyu ya da gelir tablosunu alıyoruz (tek bir dönemin tablosu da olur, birden fazla dönemin tablosunu alıp karşılaştırmak da mümkün), sonra **[[kalem|tablodaki her bir kalemin]]** *ait olduğu grup toplamı* veya *genel toplam içindeki yüzdesini* hesaplıyoruz.
	- `Grup Toplamına Göre: (İlgili Hesap Tutarı / Grup Toplam Tutarı) x 100`
	- `Genel Toplama Göre: (İlgili Hesap Tutarı / Genel Toplam Tutarı) x 100`
	- `Gelir Tablosunda: (İlgili Hesap Tutarı / Net Satışlar Tutarı) x 100`
- Yani hangi kalem ne kadar ağırlıkta, onu görüyoruz. Toplamı %100 kabul edip oranlıyoruz.
	- **Bilançoda**: Genelde aktif veya pasif toplamı %100 alınır. Her varlık veya kaynak kaleminin bu toplama oranı bulunur. İstenilirse grup toplamını da %100 alabiliriz, mesela dönen varlıklar toplamını 100 kabul edip kasayı ona oranlamak gibi.
	- **Gelir Tablosunda**: *Net satışlar %100 kabul edilir*, çünkü şirketin ana olayı satış yapmak ya hani. **Bu yüzden diğer tüm gelir tablosu kalemleri** (satışların maliyeti, faaliyet giderleri, kâr vs.) **net satışlara oranlanır.**
- **Statik bir analizdir.**
- **Tıkla**: [[3- İşletme Finansı Dikey Analiz, Trend Analizi.pdf#page=4|3- İşletme Finansı Dikey Analiz, Trend Analizi, s.4-8]]
###### **Ne işe yarıyor bu dikey analiz?**
- Kalemlerin **[[nispi önemi]]**'ni gösteriyor. Hangi hesap daha baskın hangisi tırt anlıyoruz.
- Farklı firmaları veya aynı firmanın farklı dönemlerini **karşılaştırmamıza** olanak sağlıyor
## 3.3. Eğilim Yüzdeleriyle Analiz(Trend Analizi)
- Birden fazla dönemin finansal tablolarına bakıyoruz. Ama bu sefer bir yılı **[[baz yıl]]** olarak seçiyoruz.
- Baz yılın tüm kalem tutarlarını 100 kabul ediyoruz. Sonraki yıllardaki aynı kalemlerin tutarlarını baz yıla göre yüzde olarak ifade ediyoruz. Yani zaman içinde o kalemde nasıl bir **eğilim** var, artış mı azalış mı onu görüyoruz.
	- Yorumlar baz yıla göre yapılır (100'den çıkarılarak yapılır) ve trend grafiği çizilir.
- Düzgün bir trendin çizilebilmesi için **5 yıla ihtiyaç var.**

<br>
$$
\boxed{\text{Trend Yüzdesi} = \frac{\text{İlgili Kalemin Cari Yıl Tutarı}}{\text{İlgili Kalemin Baz Yıl Tutarı}} \times 100 }
$$

<br>
- **Tıkla**: [[3- İşletme Finansı Dikey Analiz, Trend Analizi.pdf#page=11|3- İşletme Finansı Dikey Analiz, Trend Analizi, s.11-13]]

- Baz yılı seçerken dikkatli olmak lazım. Firmanın yeni kurulduğu, acayip enflasyonun olduğu, büyük yatırım yaptığı veya sel felaketi, firma birleşmesi gibi olağandışı bir durum yaşadığı yılı baz almayacağız. Normal, stabil bir faaliyet dönemi olmalı.
###### **Ne işe yarıyor bu trend analizi?**
- Tablolardaki kalemlerin zaman içindeki **artış veya azalışlarını** net bir şekilde gösteriyor.
- Bu değişimlerin **önemini** ve **yönünü** anlamamızı sağlıyor. Hangi kalem sürekli artıyor hangi kalem sürekli düşüşte gibi.

## 3.4. Oran Yöntemiyle Analiz (Rasyolar)
