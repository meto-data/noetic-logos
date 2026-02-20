---
tags:
  - akademi/dersler/muhasebe
---

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
