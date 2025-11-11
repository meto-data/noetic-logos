---
created: '2025-11-03'
---
- **Eğer** başarısız olmayan her **[[düğüm]]**, aldığı her isteğe sonunda (sınırlı ama sonlu bir sürede) yanıt veriyorsa, **bir sistem <u>erişilebilirdir</u>**.
	- Kritik nokta şudur ki, bu tanımda **maksimum gecikme sınırı <u>yoktur</u>**. İstek bir hafta sonra bile yanıtlansa, sistem hâlâ *erişilebilir* sayılır. 
	- Gilbert ve Lynch'in formel tanımıdır bu tanım.
- Pratikte erişilebilirlik bir servisin başarılı yanıt verme oranıdır (%99.9 uptime gibi). Ancak CAP'in formel ifadesinde *erişilebilirlik* bir **canlılık özelliğidir ([[liveness property]])**: Sistem belirli bir süre yanıt vermese bile, gelecekte yanıt verme umudu vardır. Bu tanımın uygulayıcıların sezgileriyle uyuşmadığı da aşikârdır pekâlâ.
	- Sistem şu an yanıt vermiyorsa, "erişilemez" diyemeyiz, bu yüzden sezgilerimizle uyuşmaz. Ancak pratikte kullanışsızdır, çünkü 1 dakika bekleyen kullanıcı zaten gider.


> [!info] **Düğüm (Node)**
> Ağa bağlı tek bir sunucu/bilgisayar demektir. İspattaki $n_A$ ve $n_B$ birer düğümdür. "A Sunucusu" ve "B Sunucusu" gibi.


> [!info] Liveness Property (Canlılık Özelliği) ve Safety Property (Güvenlik Özelliği)
> "Önünde sonunda iyi bir şey olacak" diyebilmenin garantisidir. "Sistem şu an cevap vermese bile, sonsuza kadar donup kalmayacak, bir noktada mutlaka cevap verecek" diyebilmektir.  <br>
> Zıttı Safety Property'dir (Güvenlik Özelliği), o da "asla kötü bir şey olmayacak" (örn: "sistem asla eski veriyi döndürmeyecek, veri asla kaybolmaz, sistem asla çökmez") garantisidir.  <br>
> Tutarlılık (**C**) bir *safety* özelliğidir, Erişilebilirlik (**A**) ise *liveness* özelliğidir.
