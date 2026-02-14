Windowsta'ki Mavi Ekran'ın (BSOD) atasıdır ancak teknik işleyişi farklıdır.

Kernelin artık güvenli bir şekilde çalışmaya devam edemeyeceğini anladığı anda veri bozulmasını önlemek için **kasıtlı olarak** sistemi durdurması

- **Tetikleyici**: Ring 0 seviyesinde (kernel mode) giderilemeyen bir hata oluşması.
	- Çekirdek kodu, olmayan bir bellek adresine erişmeye çalışırsa...
	- `init` süreci (PID 1) ölürse.
	- Donanım hatası (RAM bozukluğu) çekirdek verisini bozarsa.
- **Süreç**: Çekirdek `panic()` fonksiyonunu çağırır.
	1. Tüm işlemcileri durdurur.
	2. Ekrana hata raporunu (**ooops**, stack trace, register dump vs.) basar.
	3. Yanıp sönen klavye ışıklarıyla sistemi kilitler veya `kernel.panic` parametresine göre otomatik reboot eder.

Bu bir hata değil **savunma mekanizmasıdır**. Eğer panik yapmayıp çalışmaya devam etseydi diske bozuk veriler yazarak kalıcı hasar verebilirdi.