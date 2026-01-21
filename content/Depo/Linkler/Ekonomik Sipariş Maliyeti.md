
- **Tanım:** Sipariş verme ve stokta tutma maliyetlerini dengeleyerek toplam ilgili stok maliyetini en aza indiren ideal sipariş miktarıdır.
- **Açıklama:** "Her seferinde kaç tane sipariş vermeliyim?" sorusuna matematiksel bir cevap verir.

## $$Q^* = \sqrt{ \frac{2AD}{H} }$$
### [[EOQ Varsayımları]]
1. **Talep Sabit ve Biliniyor** (D): Müşteri talebi yıl boyunca hiç değişmez, hep aynı hızdadır ve ne kadar olacağı kesinlikle bilinir.
2. **Sipariş Miktarı ve Sabit** (Q): Her siparişte aynı miktarda ($Q^*$) mal alınır.
3. **Birim Fiyat Sabit** (C): Aldığın malın fiyatı değişmez, toplu alımda indirim falan olmaz.
4. **Temin Süresi Sabit ve Biliniyor** (L): Siparişi verdiğin andan malın sana ulaşmasına kadar geçen süre hep aynıdır ve ne kadar olduğunu bilirsin.
5. **Stokta Bulundurma Maliyeti** (H) **Ortalama Stok Üzerinden Hesaplanır:**  $\frac{Q}{2}$ üzerinden hesaplanılan ortalama stok düzeyi kullanılır.
6. **Sipariş Verme Maliyeti** (A) **Sabit ve Sipariş Miktarından Bağımsızdır:** Her siparişin masrafı aynıdır, kaç tane aldığından etkilenmez.
7. **Tüm Talep Karşılanır (Stoksuz Kalma Yok)**: Model, depoda malın hiç bitmeyeceğini varsayar.
8. **Tüm Sipariş Aynı Anda Teslim Edilir:** Verilen siparişin tamamı tek seferde "pıt" diye depoya girer. Kısım kısım gelmez.

##### **[[Yıllık Sipariş Sayısı]]** (Number of Orders -*N* )
### $N=\frac{D}{Q^*}$

##### **[[Çevrim Süresi|Siparişler Arası Geçen Süre / Çevrim Süresi]]** (Time Between Orders / Order Cycle Time -*T* )
### $T = \frac{Q^*}{D}$

##### **[[Yeniden Sipariş Noktası]]** (Reorder Point -*ROP* )
### $\text{ROP} = d \times L \space \space (\text{d = temin süresindeki talep,} \space \text{  L = temin süresi})$

##### **[[Yıllık Toplam Stok Maliyeti]]** (Total Annual Cost -or- Total Relevant Cost -*TM* )
#### $$TM = \left( \frac{D}{Q^*}A \right) + \left({\frac{Q^*}{2}H}\right) + \left (D \times C) \text{ (eğer malın maliyeti de istenirse}\right)$$
