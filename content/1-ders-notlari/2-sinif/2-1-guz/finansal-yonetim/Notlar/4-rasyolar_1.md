---
title: 4- Rasyolar I
type: ogrenis
ders: "[[Finansal Yönetim]]"
date: 2025-11-12
cssclasses:
  - ders-notu
created: 2025-11-12
---
## Kısa Anımsatma

- **Dönen varlıklar (cari aktif)** genel olarak **kısa vadeli borçlarla (cari pasif)** finanse edilir. 
	- **[[Cari Aktif]]** = [[Dönen Varlıklar]] = [[Çalışma Sermayesi (İşletme Sermayesi)]]
	- **Cari Pasif** = **Kısa Vadeli Borçlar** 
- *Duran varlıklar* ise genel olarak "*devamlı sermaye*" ile finanse edilir.
	- *[[Devamlı Sermaye|Devamlı (Sürekli) Sermaye]]*: `Uzun Vadeli Yabancı Kaynaklar` $+$ `Öz Sermaye`

> [!tip] Kısa Anımsatma (**Dönen Varlıklar**)
> - **Hazır Değerler**: Kasadaki ve bankadaki nakit para.
> - **Menkul Kıymetler**: Atıl parayı geçici olarak değerlendirmek için alınan hisse senedi, fon gibi kolayca paraya çevrilebilen varlıklardır.
> - **Ticarî Alacaklar**: Mal ve hizmet satışından doğan, vadesi gelmememiş **[[Senetli Alacaklar|senetli]]** veya **senetsiz** alacaklar.
> - **Stoklar**: Satılmak üzere bekleyen ticarî mallar. **Satışa** ve **süreye** bağlı olarak paraya dönüşürler.


# Rasyolar (Oranlar | Ratios)


> 	`Batı'nın secde ettiği kavramdır âmiyâne tabiriyle.`

- *Latince '**ratio**'.*"
- **İlişkili hesapları birbirleriyle oranlayarak yaptığımız analiz türü**. 


## 1. **Likidite Rasyoları** (Akışkanlık Oranları | Liquidity Ratios)
- İşletmenin kısa vadeli borçlarını ödeyebilme gücünü *ölçer*. "Günü kurtarabiliyor muyum?" sorusunun cevabıdır.
- **Kârlılığı ölçmez**; kârlılık (profitability) analizi değil, **nakit sağlığı (liquidity health)** analizidir.

> [!important] Ne değil ve olmasa ne olur?
> - Kârlı olup olmadığımızı göstermez. Kârlılık analizi değil, nakit sağlığı analizidir.
> - Oranlar düşükse likidite krizi başlar. Borç borcu doğurur, bankalar musluğu keser, tedarikçiler mal vermez. Teknik olarak iflas ederiz.

### 1.1. **Cari Oran** (Genel Likidite Oranı | Current Ratio)
- En kaba ve en genel likidite ölçümüdür.
	- "1 yıl içinde paraya dönecek neyim var (**Dönen Varlıklar**)", 
	- "1 yıl içinde ödeyecek ne kadar borcum var (**Kısa Vadeli Borçlar**)" 
	  Bu ikisi birbirini karşılıyor mu?
- **İşletmenin dönen varlıklarının, kısa vadeli yabancı kaynaklarının kaç katı olduğunu gösteren oran**.

> [!important] Düşükse ne olur?
> - Oran düşükse, yani 1.5'in altındaysa (özellikle 1'in altındaysa), bu **net çalışma sermayesi <u>noksanlığımızın</u>** olduğunu gösterir. Yani kısa vadeli borçlarımızla uzun vadeli yatırım yapmışız demektir (duran varlık almışız). Bu en büyük finansal hatadır.


$$
\large
\begin{array}{} \\
& \text{Cari Oran} = \boxed{ \space \frac{\text{Dönen Varlıklar (Cari Aktif)}}
{\text{Kısa Vadeli Borçlar (Cari Pasif)}}  
\ge 1.5 \space \space}  \\ \\
& \text{Dönen Varlıklar} 
\ge \left(1.5 \times \text{Kısa Vadeli Borçlar}\right)
\end{array}{}
$$

- **Eğer $\ge 1.5$ ise**: İyiyiz. 1 liralık kısa vadeli borca karşılık $1.5$ liralık dönen varlığımız var. Borçları ödeyebilme gücümüzün olduğunu gösterir bu.
- **Eğer $< 1.5$ ise**: Tehlikedeyiz. Kısa vadeli borçlarımız kısa sürede paraya dönebilecek varlıklardan daha fazla. *Net Çalışma Sermayesi*'nin noksan olduğunu gösterir bu.

##### 1.1.0. **Net Çalışma/İşletme Sermayesi (NİS)**  (Net Working Capital)

$$
\large
\boxed{\text{NİS} = \text{Dönen Varlıklar - Kısa Vadeli Borçlar}}
$$

- **İlişki**: Cari oran $>1$ ise, net işletme sermayemiz pozitiftir. Cari oran $< 1$ ise, net işletme sermayesi noksanımız (negatif) vardır.


### 1.2. **Asit-Test Oranı** (Çabuk Likidite Oranı | Quick Ratio/Acid-Test Ratio)
- Cari oran stoklara güvendiği için *yanıltıcı* olabilir. 
- Asit-Test, *asit* gibi stokları eritir, hesaptan çıkarır, "*Diyelim ki stokları satamadım. Elimdeki nakit, bankadaki para ve alacklarımla borçları ödeyebilir miyim?*" diye sorar.
- **Stoklar hâriç tutularak dönen varlıkların (yani hazır değerler, menkul kıymetler ve alacakların toplamının) kısa vadeli yabancı kaynaklara oranını ölçer.**


> [!important] Düşükse ne olur?
> - Oran 1'in altındaysa, borçlarımızı ödeyebilmek için stoklara bağımlıyız demektir. Stok satışı durduğu an batarız.



$$
\Large
\boxed{\space \frac{\text{Dönen Varlıklar - Stoklar}}{\text{Kısa Vadeli Borçlar}} 
\ge 1 \space
}
$$



- **Eğer $\ge 1$ ise**: İyiyiz. Stoklara bel bağlamadan elimizdeki nakit ve alacaklarla kısa vadeli borçlarımızı ödeyebiliriz.
- **Eğer $<1$ ise**: Borçları ödeyebilmek için stoklara bağımlıyız. Stok satışı durduğu an ödemelerimiz de durur. Bu durumda *hemen* aşağıdaki *Stok Bağımlılık Oranı*'nı hesaplamalıyız:

##### 1.2.0. **[[Stok Bağımlılık Oranı]]**
- "Borçları ödemek için eldeki stokların ne kadarına muhtacız?" sorusuna yanıt verir.

$$
\large
\frac{\text{Kısa Vadeli Borçlar - (Hazır Değerler + Menkul Kıymetler)}}{\text{{Stoklar}}}
$$



### 1.3. **Nakit Oranı** (Hazır Nakit Oranı | Cash Ratio -Disponibilite-)
- En cimri olandır denilebilir akılda kalması bakımından :D  Stres testi de derler buna. <br> 
- "Stoklar satılmazsa ve alacaklar tahsil edilemezse ne olur?" diye sorar. Sadece **kasadaki, bankadaki paraya (hazır değerler)** ve hemen bozdurulabilen **menkul kıymetlere (hisse senedi, fon vb.)** bakar.
- "**İşletmenin hazır değerleri (kasa, banka) ve menkul kıymetleri toplamının kısa vadeli borçları karşılama oranını gösterir.**" 


$$
\large
\boxed{ \space \frac{\text{Hazır Değerler + Menkul Kıymetler}}{\text{Kısa Vadeli Borçlar}} \ge 0.20 \space}
$$


- **Eğer $\ge 0.20$ ise**: Nakit durumumuz iyi demektir, stres testini geçtik.
- **Eğer $< 0.20$ ise**:
	1. **Eğer $< 0.20$ ise, AMA $\text{cari oran} \ge 1.5$  ve  $\text{asit-test oran} \ge 1$ ise**: Bunun anlamı şudur: "Kasamız zayıf, ama alacaklarımız sağlam. Kısa vadeli borçlar **alacaklara bağımlıdır**. O alacaklar *tahsil edilmezse* ödeme <u>yapamayız.</u>"
	2. **Eğer $< 0.20$ ise, AMA $\text{asit-test oran }<1$ ise**: Durumumumuz epey kötü. Hem nakdimiz yok hem de alacaklarımız yetersiz (veya yok), üstüne bir de stoklara bağımlıyız. Ödeyemeyiz. Her işletmenin kabusudur bu.

---

## 2. **Faaliyet Oranları** (İşlerlik/Verim Oranları | Activity/Efficieny Ratios)
- Hızımızı, verimliliğimizi ölçer. Elimizdeki **varlıklara (aktif) ne kadar para bağladığımızla** ve bu bağladığımız parayla **ne kadar hızlı satış (ciro) yarattığımızla** ilgilenir. Finansta hız önemlidir, **elimizdeki malı (stok)** veya **parayı (aktif)** ne kadar hızlı çevirirsek o kadar iyi.
- Faaliyet oranı düşükse hantalız demektir, "[[Atıl (Boş) Kapasite|atıl kapasite]]" vardır.


> [!important] Ne değildir?
> - Kârlı olup olmadığımızı göstermez, zira malımızı aşırı hızlı satsak bile (stok devir hızı yüksek olsa bile) her satıştan zarar edebiliriz. Faaliyet oranları sadece **operasyonel verimliliğimizi**, yani ne kadar *[[etkinlik|etkin]]* çalıştığımızı gösterir.



#### 2.0. **Ortalama Aktif (Hesap)** (Average Balance)
- Bu oranların çoğunda ortalama hesap (ortalama aktif) kullanılır zira **"Net Satışlar"** 1 yıllık bir *akım* kalemidir **(Gelir Tablosu)**, 1 yıl boyunca akar. **Stoklar** ise anlık bir kalemdir **(Bilanço)**. Elmayla armudu karıştıramayız buradan da anlaşılacağı üzere. 1 yıllık satış hacmini 1 günlük stok fotoğrafına bölemeyiz. Bu yüzden bilanço kaleminin *ortalamasını* alırız.
<br>

$$
\large
\boxed{ \space \frac{\text{Dönem Başı (Aktif) Hesap + Dönem Sonu (Aktif) Hesap}}{2} \space}
$$

<br>

$$
\large
\space \boxed{
\begin{array}{} 
&\text{Dönem Başı} = \text{Geçen Yılın Bilançosu} 
\\ \\
 &\text{Dönem Sonu = Bu Yılın Bilançosu}
\quad \end{array}{}
\space }
$$


### 2.1. **Aktif Devir Hızı** (Varlık Devir Hızı | Total Asset Turnover)
- İşletmeye yatırdığımız toplam parayla (tüm varlıklarımızla) ne kadar satış hacmi yarattığımızı, varlıklarımızı bir bütün olarak ne kadar *etkin* kullandığımızı gösterir. **Tüm varlıkların verimliliğidir.**
- **İşletmenin sahip olduğu varlıklara (aktiflere) karşılık, bu varlıkların kaç katı net satış yaptığımızı gösterir.**

<br>

$$
\Large
\text{Aktif Devir Hızı } = \frac{\text{Net Satışlar}}{\text{Ortalama Aktif (Aktif Toplamı)}}
$$


### 2.2. **Stok Devir Hızı** (Inventory Turnover)
- Depodaki malı (stokları) ne kadar hızlı sattığımızdır. Stokların 1 yılda kaç yez yenilendiğini veya devir ettiğini gösterir.
- **Kârlılığı göstermez! Sadece hızı ölçer!**
- Üretim dersinde görmüştük aslında. Bkz. [[Stok Yönetiminde Temel Performans Göstergeleri]]




#### 2.2.0. **Stok Devir Hızı (SDH) Formülü** 

$$
\frac{\text{\Large Net Satışlar}} {\text{\Large Ortalama Stok}}
$$


##### 2.2.0.1 **Ortalama Stok** (Average Inventory)

$$
\large
\boxed{
\frac{\text{Dönem Başı Stoklar + Dönem Sonu Stoklar}}{2}}
$$

#### 2.2.0.2. **Ortalama Stokta Kalma Süresi** (Days in Inventory)
- Stok Devir Hızı (SDH) ile ilişkili olarak, 
- "*Bir mal depoya girdiği andan satılana kadar ortalama kaç gün geçiyor?*" sorusunu yanıtlar.

$$
\large
	\frac{\text{360}}{\text{Stok Devir Hızı (SDH)}}  \text{ (gün)}
$$


### 2.3. **Alacak Devir Hızı** (Receivables Turnover)
- Satılan malın parasını (veresiyeler) ne kadar hızlı tahsil ettiğimiz ölçer. Alacaklarımızın 1 yılda kaç kez nakde dönüştüğünü gösterir.
- Çok satış yapıp yapmadığımızı değil, **veresiye (kredili) satışları iyi yönetip yönetmediğimizi gösterir.**


#### 2.3.0. **Alacak Devir Hızı Formülü**

$$
\Large
\frac{\text{Net Satışlar}}{\text{Ortalama Ticarî alacaklar}}
$$


#### 2.3.0.1. **Ortalama Tahsil Süresi** (Days Sales Outstanding -DSO)

- Alacak Devir Hızı ile ilişkili olarak, 
- "Faturayı kestikten sonra paranın kasaya girmesi ortalama kaç gün sürüyor?" sorusuna yanıt verir.

$$
\large
\boxed{\text{Ortalama Tahsil Süresi} = \frac{\text{360}}{\text{Alacak Devir Hızı}} \text{ (gün) }}
$$


- **Yorum**: Alacak devir hızı arttıkça tahsil süresi kısalır, iyidir bu iyi.


---

![[Diyagram - Likidite Rasyoları]]


<br>






![[Diyagram - Faaliyet Rasyoları]]