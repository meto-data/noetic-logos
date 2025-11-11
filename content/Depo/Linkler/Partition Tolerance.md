---
created: '2025-11-03'
---
- Dağıtık bir sistemdeki düğümler arasındaki iletişimin kesilmesi durumuna **[[ağ bölünmesi]]** denir. Birbirleriyle iletişim kuramayan alt kümelere ayrılır ağ; bölünme toleransı da **sistemin bu tür arızalar karşısında çalışmaya devam edebilme yetisidir**.
-  $P(t, n_A, n_B)$ fonksiyonunu düşleyelim (*Buradaki $n_A$ (Node A) ve $n_B$ (Node B) ispatta kullanacağımız iki düğümün sembolik adlarıdır.)*. Eğer `t` zamanında düğüm $n_A$, düğüm $n_B$ ile iletişim kurabiliyorsa, $P(t, n_A, n_B) = 1$, aksi hâlde $0$'dır. **Herhangi bir düğümün başka bir düğümle iletişim <u>kuramadığı</u> maksimum süreye** `TP (Partition Time)` denir.
	- TP, "Ağ kesintisi ne kadar sürdü?" sorusunun cevabıdır. TP = 30 saniye veya TP = 2 saat gibi.
- Kritik nokta şudur ki, **bölünme toleransı**, <u>tutarlılık</u> ve <u>erişilebilirlik</u> gibi bir *algoritma özelliği* değil, **sistem modelinin bir varsayımıdır.**
	- "Bir algoritma bölünme toleransı sağlar" demek yanıltıcıdır; doğrusu "algoritma, bölünmelerin olabileceğini varsayar" olmalıdır.
	- **Algoritma Özelliği**: Yazılan kodun (algoritmanın) ne yaptığıdır. "Benim algoritmam veriyi tutarlı kılar (**C**)" veya "Benim algoritmam hep cevap verir (**A**)" diyebiiriz. Bunlar kodumuzun kontrolündedir.
	- **Sistem Modeli Varsayımı**: Kodun dışında kalan, ağın nasıl çalıştığıyla ilgili kuraldır. "Ağlar bazen kesilir (**P**)" demek bizim kontrolümüzde olmayan *fiziksel bir gerçektir*.  Bu yüzden "Bir algoritma bölünme toleransı sağlar" demek yanıltıcıdır, *benim algoritmam yer çekimini sağlar* demek ile aynı saçmalıktır bu :D 
		- Yer çekimini (P) sağlayamayız, yer çekimine rağmen ayakta duran bir bina tasarlarız. Bu yüzden böyle bir ek bilgi verelim dedik.

> [!info] Ağ Bölünmesi (Partition)
>  İspatta $\text{veri v1 } \not \leftrightarrow \text{ veri v1}$ dediğim şeyin teknik adı. İki düğüm (sunucu) arasındaki internet kablosunun çekilmesi veya router'ın bozulması, fiber optik kablonun kesilmesi gibi bir ağ arızası. Sunucular 'ayaktadır' ama birbirleriyle konuşamazlar.
