

**Not**: Bu konudaki bazı formüller Finansal Yönetim dersinde de karşımıza çıkmakta. Dolayısıyla ilave bir önem verilmesi faydanıza olur. 

---

## Ekonomik Üretim Miktarı (Economic Production Quantity -EPQ)

- **Tanım**: İşletmenin kendi ürettiği ürünler için *stokların depoya anında değil, üretim süreci boyunca kademeli olarak girdiği*  durumlarda kullanılan bir stok modelidir. Temel amacı, bir üretim partisinde ne kadar ürün üretilmesi gerektiğini belirleyerek, toplam envanter maliyetlerini (üretim, hazırlık maliyeti ve stokta bulundurma maliyeti) en aza indirmektir. EPQ modeli, özellikle **üretim devam ederken aynı zamanda tüketimin de olduğu** senaryolar için tasarlanmıştır.

> [!important] EPQ Modelinin Temel Sorusu:
> Toplam maliyeti (üretime hazırlık + elde bulundurma) minimize edecek **optimal üretim büyüklüğü ($Q^*$)** nedir?

> [!NOTE] EPQ vs. EOQ 
> EOQ modelinde sipariş edilen tüm ürünlerin depoya **anında ve tek seferde** girdiği varsayılır. EPQ modelinde ise ürünler **üretildikçe, zaman içinde kademeli olarak** stoğa eklenir. Bu, *EPQ'nin temel ayırt edici özelliğidir.*

### Nasıl Çalışır (Temel Mantık)
1. İşletme, belirli bir ürünü üretmeye başlar. Üretim hızı (**P**) genellikle talep hızından (**D**) daha yüksektir (**$P>D$**)
2. Üretim devam ederken, ürünler bir yandan stoğa eklenir, bir yandan da talebi karşılamak için stoktan tüketilir. $P>D$ olduğu için üretim periyodu boyunca net stok birikimi olur.
3. Stok belirli bir maksimum seviyeye ulaştığında (veya planlanan parti üretimi tamamlandığında) üretime ara verilir.
4. Üretim durduktan sonra, mevcut stoklar sadece talep hızıyla (D) tüketilmeye devam eder.
5. Stok seviyesi sıfıra (veya emniyet stoğuna) düştüğünde, yeni bir üretim partisine başlanır ve döngü tekrarlanır. EPQ modeli, bu döngüdeki "**ideal üretim miktarı Q**" değerini bulmaya odaklanır.

### Amacı ve Önemi
- **Maliyet Minimizasyonu:** Üretim hazırlık (setup) maliyetleri ile stokta bulundurma (elde tutma) maliyetleri arasında bir denge kurarak toplam maliyeti en aza indirmeyi hedefler.
- **Üretim Planlama:** İşletmelere ne zaman ve ne kadar üretecekleri konusunda bir rehber sunar.
- **Kaynak Verimliliği:** Gereksiz stok birikimi önleyerek depolama alanı ve sermaye gibi kaynakların daha verimli kullanılmasını sağlar.
- **Kesintisiz Üretim ve Müşteri Memnuniyeti:** Üretim ve tüketim hızlarını dikkate alarak stoksuz kalma riskini azaltır, dolayısıyla müşteri taleplerinin zamanında karşılanmasına yardımcı olur.

---

## EPQ Modelinde Kullanılan Değişkenler

### Yıllık talep hızı (birim/yıl)
$$\large D \space \text{(Demand)}$$
### Yıllık üretim hızı (birim/yıl)
$$\large P \space \text{(Production Rate)}$$
### Birim başına ürün maliyeti (TL/birim)
$$\large C \space \text{(Cost Per Unit)}$$
### Parti başına üretim hazırlık maliyeti (TL/parti)
$$\large A \space \text{(Setup Cost)}$$
### Yıllık faiz oranı (%)
$$\large i$$
### Birim başına yıllık stokta bulundurma maliyeti (TL/birim-yıl)
$$\large H \space \text{(Holding Cost)}$$
### Üretim sipariş miktarı (birim)

$$\large Q{*}$$
---

## EPQ Hesaplamaları

### Çevrim Süresi (T)
Bir üretim partisinin ($Q$) tamamının tüketilmesine kadar geçen toplam süre.

$$\large T = \frac{Q}{D}$$
### Üretim Süresi (Birikme Devresi - $T_P$)
Bir üretim partisinin (Q) tamamının üretilmesi için geçen süre.

$$\large T_{P} = \frac{Q}{P}$$

### Tüketim Süresi (Tüketim Devresi - $T_D$)

$$\large T_{D} = \frac{I_{enb}}{D}$$

### En Büyük Stok Düzeyi ($I_{enb}$)

Üretim periyodunun sonunda ulaşılan en yüksek stok miktarı.

$$\large I_{enb} = Q \left( 1-\frac{D}{P} \right)$$

### Ortalama Stok Düzeyi ($I_{ort}$)

Bir çevrim boyunca ortalama olarak elde tutulan stok miktarı.

$$\large I_{ort} = \left( \frac{Q}{2} \right)\left( 1-\frac{D}{P} \right) = \frac{I_{enb}}{2}$$

### Yıllık Üretim Sayısı
Yılda yapılması gereken üretim parti sayısı.

$$\large \frac{D}{Q^*}$$

### Stokta Bulundurma Maliyeti (SBM)

$$\large \text{SBM} = H \frac{Q}{2} \left( 1-\frac{D}{P} \right) = H \times I_{ort}$$

### Sipariş Verme Maliyeti (Yıllık Hazırlık Maliyeti - SVM)

$$\large SVM = \frac{D}{Q}A$$

### Toplam Maliyet (TM)

$$\large TM = DC + \frac{D}{Q}A + H \frac{Q}{2}\left( 1-\frac{D}{P} \right)$$

### Optimal Üretim Miktarı (Q*)


$$\large Q^{*} = \sqrt{\frac{2 \cdot D \cdot A}{H \cdot (1 - \frac{D}{P})}} = \sqrt{\frac{2 \cdot D \cdot A \cdot P}{H \cdot (P - D)}}$$

---

# Stok Yönetiminde Temel Performans Göstergeleri

#### Temel Performans Göstergeleri
- Stok yönetiminni verimliliğini ölçmek amacıyla işletmelerin işlediği bazı göstergelerdir. Bu göstergeler performans konusunda görünürlük ve başarı düzeyini takip etmek için ölçüm değerleri sağlarlar.

### Stok Devir Hızı: Mal Ne Kadar Hızlı Kaçıyor?
- Depodaki malların ne kadar hızla satılıp yerine yenisi geldiğini ölçer. Bir bakkalız diyelim, ekmeklerimiz bayatlamadan satılıyorsa, devir hızımız iyi demektir. Ama rafta iki haftalık küflü peynirlerimiz varsa, işte o zaman sıkıntımız büyük.

$$\large \boxed{\text{Stok Devir Hızı = }\frac{\text{Satılan ürünlerin toplam maliyeti}}{\frac{(\text{Dönem başı stok + Dönem sonu stok})}{2}}}$$

<br>

Bkz.  [[4-rasyolar_1#2.2. Stok Devir Hızı (Inventory Turnover)|Rasyolar: Stok Devir Hızı]]

### Ortalama Stokta Kalma Süresi
- Aldığımız bir malın satılana kadar depoda ortalama kaç gün tembellik ettiğinin göstergesidir.
	- Kısa süre iyidir. Mal gelir, iki çayını içer, hooop satılır. Uzun süre ise, o mal depoda istenmeyen misafir misali kök salmış demektir...
- Stokların girişi ile çıkışı arasındaki süreyi ifade eder diyebiliriz daha resmî tabirle.

> [!cite] Alıntı
> **Ortalama stokta kalma süresi,** bir öğenin stokta tutulduğu ortalama gün sayısını ölçen bir orandır.
$$\large \boxed{\text{Ortalama Stokta Kalma Süresi = } \frac{360}{\text{Stok Devir Hızı}}}$$
Bkz. [[4-rasyolar_1#2.2.0.2. Ortalama Stokta Kalma Süresi (Days in Inventory)|Rasyolar: Ortalama Stokta Kalma Süresi]]

### Stok Daralma Oranı
- Kayıtlarda "100 tane var" yazan malı sayıyorsun, bir bakmışsın 90 tane. Aradaki 10 tane nereye gitti? İşte bu kayıp "**stok daralması**"dır.
- Çalınma, hatalı kayıt, buharlaşma (bkz. parfüm, domates), yanlış yönetim (mal buradaydı şimdi şurada olmalı... -bermuda şeytan üçgeni-) gibi sebeplerle gerçekleşir. 

<br>

$$\large \boxed{\text{Stok Daralma Oranı = }\frac{\text{Kayıtlı Stok}}{\text{Kayıtlı Stok - Sayılan Stok}}}$$


<br>

Yani, **ne kadar olması lazımdı?** / **ne kadar araklamışlar?**

---

**Özetle:**
- **EPQ:** "Bir seferde ne kadar üretmeliyim?" sorusuna yanıt verir.
- **Devir Hızı:** "Mallar depoda ne kadar hızlı sirküle oluyor?" sorusuna yanıt verir.
- **Daralma Oranı:** "Sistemdeki kaçak/kayıp ne kadar?" sorusuna yanıt verir.