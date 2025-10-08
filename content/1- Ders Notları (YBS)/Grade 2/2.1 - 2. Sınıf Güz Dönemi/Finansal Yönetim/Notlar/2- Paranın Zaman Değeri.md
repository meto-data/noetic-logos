---
title: 2- Paranın Zaman Değeri
type: learning
ders: "[[Finansal Yönetim]]"
created: "[[2025-10-08]]"
cssclasses:
  - ders-notu
---

# 1. İşletme ve Finansal Yönetimin Rolü
## 1.1. Muhasebe ve Finans Depertmanı Arasındaki İlişki
- Finans yönetimi, muhasebenin sağladığı verilerle başlar. Muhasebe departmanı, işletmenin finansal işlemlerini kaydeder, sınıflandırır ve özetleyerek finansal tabloları (bilanço, gelir tablosu vb.) oluşturur. 
- Finans departmanı ise bu tabloları alarak analiz eder, yorumlar ve geleceğe yönelik stratejik kararlar alır. Kısacası **"muhasebenin bittiği yerde başlar finans"** (kafiyeli oldu).

## 1.2. Finans Yöneticisi
- Bir firmanın yatırım ve finans kararlarından sorumlu olan kişidir. 
- Bilanço ve gelir tablolarındaki hesapları anlayabilmesi, mali analiz tekniklerini uygulayabilmesi,  işletme amaçlarını bilmesi ve politikaları anlayabilmesi yeterlidir.
- İki temel sorunları karşı karşıyadır:
	1. **Yatırım Kararı (Sermaye Bütçelemesi)**: Firma hangi tür varlıklara ne miktarda yatırım yapacaktır? (*Aktif Yönetimi*)
	2. **Finanslama Kararı**: Yatırım için gerekli fonlar nasıl elde edilecektir? (*Pasif Yönetim*)

# 2. İşletmenin Amaçları
- Finansal yönetimin temel amacı firma değerini maksimize etmek olsa da işletmelerin daha geniş kapsamlı amaçları vardır.
	1. **Ortakların Refahının Maksimizasyonu**: Sadece anlık kârı değil, aynı zamanda hisse senedi değerini, itibarı ve uzun vadeli *sürdürülebilirliği* de içerir.
	2. **Pay Başına Kazancın Maksimizasyonu**: Hisse senedi başına düşen kârı artırarak yatırımcılar için çekiciliği artırmak.
	3. **Kâr Maksimizasyonu**: En geleneksel amaçtır ancak tek başına yeterli değildir, çünkü risk ve zaman değerini gözardı edebilir.

## 2.1. İşletmelerde Belirlenmiş Amaçların Bazıları
1. Mal ve hizmet üretimiyle toplum refahını artırmak.
2. İşletmenin huzurunu artırmak.
3. İstihdam yaratmak.
4. İşletmenin sürekliliğini sağlamak.
5. İşletmenin üretimini veya satışlarını artırmak.
6. İşletmenin piyasa payını artırmak.
7. İşletmenin kârını maksimize etmek.
8. İşletmenin değerini maksimize etmek.


# Enflasyonun İşletme Finansına Etkileri
- **[[Enflasyon]]**: Fiyatların genel olarak ve sürekli bir biçimde artmasıdır. Başka bir deyişle, paranın zaman içinde satın alma gücünün azalmasıdır (bkz. **[[Talebin Çektiği Enflasyon - Talep Enflasyonu]], [[Maliyetin İttiği Enflasyon - Maliyet Enflasyonu]], [[Yapısal Enflasyon - Structural Inflation]]**)
### Etkileri
1. **Faiz oranlarının yüksekliği:** Her maliyetin artması, borçlanması ve daha yüksek faize katlanmak demek...
2. Planlama zorlukları
3. Kaynak talebinin artışı: Daha çok fon sağlama derdi?
4. Sermaye Piyasası araçlarının fiyat düşüşü ([[türev]])
5. Yatırımların planlanmasında ihtiyatlı davranılması
6. Muhasebe sorunları


# Paranın Zaman Değeri
- **[[Faiz]]**: Paranın kira bedeli -ya da- paranın fiyatı. Bir başka tanıma göre, tasarruf sahibinin, tasarrufunu kullanmak yerine bir başkasına ödünç vermesi karşılığında aldığı bir vazgeçme ya da kullanımı erteleme bedelidir. (*Ayrıntılı bilgi için bkz.* [[Faiz Çeşitleri]]). *"Fon arz ve fon talebini eşitleyen bir fiyat"* olarak da tanımlanabilir.
	- Parayı veren açısından getiridir, alan açısından maliyettir.
	- Bankalar faizi 365 üzerinden hesaplarlar.
	- İşletmeler ise 360 üzerinden de hesaplayabilirler.
	- Biz 360 kullanacağız.
		- Rasyo'yu hesaplarken de bunu kullanacağız.

> `Varsayılan olarak -belirtilmese bile- yıllık faiz olacak kabul edeceğiz soruları. Belirtilenler müstesna.`
## [[Basit Faiz]] (Simple Interest)
- Genellikle organize (standart) olmayan, **[[tezgâh üstü]] (*OTC / over-the-counter*)** olarak adlandırılan, tarafların doğrudan anlaştığı piyasalarda kullanılır.

- Faize faizin yürütülmediği, yani faizin her zaman sadece başlangıçtaki [[ana para]] üzerinden hesaplandığı faiz türüdür.
$$\text{Faiz Tutarı (F) =} \text{Anapara (BD)}\times \text{Faiz Oranı (i)} \times \text{ Vade (n)}$$

$$= \boxed{\frac{BD \times i \times n}{100}}$$
- $F$: Faiz Tutarı (*Interest Amount*)
- $BD$: Ana para -veya **Bugünkü Değer** (*Present Value*)
- $i$: Faiz Oranı (*Interest Rate*)
- $n$ Vade (Süre) (*Term/Time*)


---
#### Örnek: 
> 	**1.000₺, %10 faiz oranından bir mevduat hesabına yatırılırsa bir yılın sonunda elde edilen faiz tutarı ne kadar olur?** 


$$F = \frac{\left( 1000 \times 10 \times 1 \right)}{100} = \boxed{100}$$ <br>
> 	**Peki, bir yılın sonunda hesapta toplam ne kadar para olur? Buna *Gelecek Değer* denilir**. 

$$\text{Gelecek Değer} = \text{Ana Para } + \text{ Faiz Tutarı}$$ <br>

-  $\text{Gelecek Değer} = 1000 + 100 = 1100\text{₺}$
- **Gelecek Değer (*FV*)** (*Future Value*)

---

#### Örnek

> Yıllık %25 faiz oranı üzerinden 1.000 TL'yi sırasıyla **12 yıllığına**, **12 aylığına** ve **12 günlüğüne** basit faizle ödünç verdiğiniz zaman bu paranın faiz tutarı ve gelecek değeri ne olacaktır?

##### 1. Durum: 12 Yıllığına
- **Faiz Tutarı**: $\frac{\left(1000 \times 25 \times 12 \right)}{100}  = 3.000 \text{₺}$
- **Gelecek Değer**: $1000 + 3000 = 4.000 \text{₺}$
##### 2. Durum: 12 Aylığına
- **Faiz Tutarı:** $\frac{\left(1000 \times 25 \times 12 \right)}{100 \times 12} = 250 \text{₺}$
- **Gelecek Değer**: $1000 + 250 = 1.250 \text{₺}$
##### 3. Durum: 12 Günlüğüne
- **Faiz Tutarı**: $\frac{\left(1000 \times 25 \times 12 \right)}{100 \times 12 \times 30} \approx 8,33\text{₺}$
- **Gelecek Değer:** $1000 + 8,33 \approx 1008,33 \text{₺}$

---

## [[Bileşik (Nominal) Faiz]] (Compound Interest)
- Basit faizden tek ve en önemli farklı **kazanılan faizin de faiz kazanmasıdır**.
- Her dönemin sonunda kazanılan faiz ana paraya eklenir ve bir sonraki dönemde faiz, bu yeni ve daha büyük ana para üzerinden hesaplanır. Para bu şekilde zamanla doğrusal olarak değil, **üslü (exponential)** olarak artar. 

---

#### Örnek
> 1.000 TL'nin yıllık %10 **bileşik faizle** nasıl büyüdüğüne bakalım

- **Başlangıç**: 1.000₺
- **1. Yılın Sonu**: 1.000₺'ye 100₺ faiz eklenir. $1.000 \times (1 + 0,10) = 1.100$₺
- **2. Yılın Sonu**: Faiz artık 1.100₺ üzerinden hesaplanır. $1.100 \times (1 + 0,10) = 1.210$₺
- **3. Yılın Sonu**: Faiz artık 1.210₺ üzerinden hesaplanır. $1.210 \times (1 + 0,10) = 1.331$₺

---

### Bileşik Faiz Formülü

#### $$GD_n = BD_0 \times (1+i)^n$$
- $GD_n$:  $n$ dönem sonundaki **Gelecek Değer**
- $BD_0$:  Başlangıçtaki ana para (*Bugünkü Değer*)
- $i$: Dönemlik faiz oranı
- $n$: Dönem sayısı


---

#### Örnek
> Yıllık %20 faiz oranı üzerinden bugün yatırdığımız 1.000 TL'nin bileşik faiz esasına göre 10 yıl sonra ulaşacağı değer nedir?

- $BD_0$: $1.000₺$
- $i$: $0,20$
- $n$: $10$ yıl
- $GD_n$:  $1.000 \times (1+0,20)^{10} = 1.000 \times 6,1917 = 6.192,7$₺

---
