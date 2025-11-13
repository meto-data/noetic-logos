---
title: 4- Rasyolar
type: learning
ders: "[[Finansal Yönetim]]"
date: 2025-11-12
cssclasses:
  - ders-notu
created: 12.11.2025
---

# Ön hazırlık ve hatırlatma falan
- **Dönen varlıklar (cari aktif)** genel olarak **kısa vadeli borçlarla (cari pasif)** finanse edilir. 
	- **[[Cari Aktif]]** = [[Dönen Varlıklar]] = [[Çalışma Sermayesi (İşletme Sermayesi)]]
	- **Cari Pasif** = **Kısa Vadeli Borçlar** 
- *Duran varlıklar* ise genel olarak "*devamlı sermaye*" ile finanse edilir.
	- *[[Devamlı Sermaye|Devamlı (Sürekli) Sermaye]]*: `Uzun Vadeli Yabancı Kaynaklar` $+$ `Öz Sermaye`





# Rasyolar
> `Batı'nın secde ettiği kavramdır amiyane tabiriyle.`
- *Latince 'ratio'.
- İlişkili hesapları birbirleriyle oranlayarak yaptığımız analiz türüdür. 


## Rasyo Çeşitleri

## 1. **Likidite Rasyoları**
- İşletmenin kısa vadeli borçlarını ödeyebilme gücünü *ölçer*. "Günü kurtarabiliyor muyum?" sorusunun cevabıdır.

> [!important] Ne değil ve olmasa ne olur?
> - Kârlı olup olmadığımızı göstermez. Kârlılık analizi değil, nakit sağlığı analizidir.
> - Oranlar düşükse likidite krizi başlar. Borç borcu doğurur, bankalar musluğu keser, tedarikçiler mal vermez. Teknik olarak iflas ederiz.

### 1.1. **Cari Oran** (Current Ratio)
- En kaba ve en genel likidite ölçümüdür.
	- "1 yıl içinde paraya dönecek neyim var (**dönen varlıklar**)?", "1 yıl içinde ödeyecek ne kadar borcum var (**Kısa Vadeli Borçlar**)?" Bu ikisi birbirini karşılıyor mu?
- **İşletmenin dönen varlıklarının, kısa vadeli yabancı kaynaklarının kaç katı olduğunu gösteren oran**.

> [!important] Düşükse ne olur?
> - Oran düşükse, yani 1.5'in altındaysa (özellikle 1'in altındaysa), bu **net çalışma sermayesi <u>noksanlığımızın</u>** olduğunu gösterir. Yani kısa vadeli borçlarımızla uzun vadeli yatırım yapmışız demektir (duran varlık almışız). Bu en büyük finansal hatadır.


$$
\large
\begin{array} \\
&  \text{Cari Oran} = \boxed{ \space \frac{\text{Dönen Varlıklar (Cari Aktif)}}{\text{Kısa Vadeli Borçlar (Cari Pasif)}}  \ge 1.5 \space \space} 
\\ \\
&  \text{Dönen Varlıklar} \ge \left(1.5 \times \text{Kısa Vadeli Borçlar}\right)
\end{array}
$$

- **Eğer $\ge 1.5$ ise**: İyiyiz. 1 liralık kısa vadeli borca karşılık $1.5$ liralık dönen varlığımız var. Borçları ödeyebilme gücümüzün olduğunu gösterir bu.
- **Eğer $< 1.5$ ise**: Tehlikedeyiz. Kısa vadeli borçlarımız kısa sürede paraya dönebilecek varlıklardan daha fazla. *Net Çalışma Sermayesi*'nin noksan olduğunu gösterir bu.

#### Net Çalışma/İşletme Sermayesi

$$
\
\boxed{\text{Net İşletme Sermayesi} = \text{Dönen Varlıklar - Kısa Vadeli Borçlar}}
$$

- **İlişki**: Cari oran $> 1$ ise, net işletme sermayemiz pozitiftir. Cari oran $< 1$ ise, net işletme sermayesi noksanımız (negatif) vardır.


### 1.2. **Asit-Test Oranı** (Likidite Oranı)
- Cari oran stoklara güvendiği için *yanıltıcı* olabilir. Asit-Test, *asit* gibi stokları eritir, hesaptan çıkarır, "*Diyelim ki stokları satamadım. Elimdeki nakit, bankadaki para ve alacklarımla borçları ödeyebilir miyim?*" diye sorar.
- **Stoklar hâriç tutularak dönen varlıkların (yani hazır değerler, menkul kıymetler ve alacakların toplamının) kısa vadeli yabancı kaynaklara oranıdır**.


> [!important] Düşükse ne olur?
> - Oran 1'in altındaysa, borçlarımızı ödeyebilmek için stoklara bağımlıyız demektir. Stok satışı durduğu an batarız.



$$
\Large
\boxed{
\space \frac{\text{Dönen Varlıklar - Stoklar}}{\text{Kısa Vadeli Borçlar}} \ge 1 \space
}
$$

- **Eğer $\ge 1$ ise**: İyiyiz. Stoklara bel bağlamadan elimizdeki nakit ve alacaklarla kısa vadeli borçlarımızı ödeyebiliriz.
- **Eğer $<1$ ise**: Borçları ödeyebilmek için stoklara bağımlıyız. Stok satışı durduğu an ödemelerimiz de durur. Bu durumda *hemen* aşağıdaki *Stok Bağımlılık Oranı*'nı hesaplamalıyız:

###### **[[Stok Bağımlılık Oranı]]**
- "Borçları ödemek için eldeki stokların ne kadarına muhtacız?" sorusuna yanıt verir.

$$
\large
\frac{\text{Kısa Vadeli Borçlar - (Hazır Değerler + Menkul Kıymetler)}}{\text{{Stoklar}}}
$$



### 1.3. **Nakit Oranı** (Disponibilite)
- En cimri olandır denilebilir akılda kalması bakımından :D  Stres testi de derler buna. <br> 
- "Stoklar satılmazsa ve alacaklar tahsil edilemezse ne olur?" diye sorar. Sadece **kasadaki, bankadaki paraya (hazır değerler)** ve hemen bozdurulabilen **menkul kıymetlere (hisse senedi, fon vb.)** bakar.
- "**İşletmenin hazır değerleri (kasa, banka) ve menkul kıymetleri toplamının kısa vadeli borçları karşılama oranını gösterir.**" 

$$
\large
\boxed{ \space \frac{\text{Hazır Değerler + Menkul Kıymetler}}{\text{Kısa Vadeli Borçlar}} \ge 0.20 \space}
$$


- **Eğer $\ge 0.20$ ise**: Nakit durumumuz iyi demektir, stres testini geçtik.
- "**Eğer $< 0.20$ ise**":
	1. **Eğer $< 0.20$ ise, AMA $\text{cari oran} \ge 1.5$  ve  $\text{asit-test oran} \ge 1$ ise**: Bunun anlamı şudur: "Kasamız zayıf, ama alacaklarımız sağlam. Kısa vadeli borçlar **alacaklara bağımlıdır**. O alacaklar *tahsil edilmezse* ödeme <u>yapamayız.</u>"
	2. **Eğer $< 0.20$ ise, AMA $\text{asit-test oran }<1$ ise**: Durumumumuz epey kötü. Hem nakdimiz yok hem de alacaklarımız yetersiz (veya yok), üstüne bir de stoklara bağımlıyız. Ödeyemeyiz. Her işletmenin kabusudur bu.
