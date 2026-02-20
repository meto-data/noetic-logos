---
draft: true
tags:
  - akademi/dersler/bilisim-hukuku
---


- **Soru**: "TCK 244 hükmü uyarınca, **bir bilişim sisteminin işleyişini engellemek veya bozmak**$_1$, verileri yok etmek$_2$, değiştirmek veya erişilmez kılmak$_3$, sisteme veri yerleştirmek$_5$, var olan verileri başka bir yere göndermek$_5$ eylemlerini suçun maddî unsurunu da belirterek izah ediniz."

---


- **Cevap**: İlgili maddenin 1. ve 2. fıkralarının maddî unsuru, ilgili hükümde belirtilen ve yasaya aykırı olan fiillerin icrâsıdır.
	- 1. Fıkra Yönünden (Sisteme Müdahale): İşbu fıkra doğrudan bilişim sisteminin "fiziksel" veya "işlevsel" bütünlüğünü korumaktadır. Maddî unsurları şu fiillerin icrâsı ile oluşur:
		- **Engellemek**: Sistemin çalışmasını tamamen durdurmaktır ki, sunucuyu çökertmek yahut erişimi kesmek buna örnek olarak verilebilir.
		- **Bozmak**: Sistemin normal çalışmasını sekteye uğratmak, yavaşlatmak, performansını düşürmektir. DoS (Denial of Service) ve DDoS (Distributed-Denial of Service) saldırıları buna örnek olarak verilebilir.
	- 2. Fıkra Yönünden (Veriye Müdahale): İşbu fıkra sistemdeki verinin bütünlüğünü, gizliliğini ve erişilebilirliğini korur. Maddî unsur şu fiillerin icrâsı ile oluşur:
		- **Verileri yok etmek, değiştirmek**: Verinin içeriğini manipüle etmek, silmek veya aslını tahrif etmektir.
		- **Erişilmez kılmak**: Veriye malikin veya zilyedin erişimini engellemektir (örn: fidye yazılımı vasıtasıyla).
		- **Sisteme veri yerleştirmek**: Sisteme ait olmayan verileri yetkisizce eklemektir.
		- **Var olan verileri başka bir yere göndermek**: Verileri sistem dışına göndermek (mesela kopyalamak), veri hırsızlığı yapmak.