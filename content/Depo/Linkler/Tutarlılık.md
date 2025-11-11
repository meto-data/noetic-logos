---
created: '2025-11-03'
---
- **Atomik tutarlılık** ya da **doğrusallaştırılabilirlik** (linearizability) mânâsına gelir. En güçlü tutarlılık modelidir, garanti ettiği ise tam olarak şudur: 
	1. Tüm işlemler tek bir kopya üzerinde **[[Atomicity|atomik]]** olarak gerçekleşiyormuş gibi davranır.
	2. Bir girdi/yazma işlemi tamamlandıktan sonra, bunu takip eden bütün okuma işlemleri **yeni değeri <u>döndürmelidir</u>**.
	3. İşlemler arasında **kesin ve toplam** bir sıralama vardır (Yani hangi işlemin önce, hangisinin sonra olduğu kesindir, belirsizlik yoktur).
	4. Sonuçlar **tüm süreçlere <u>anında</u> yayılır**. Başka bir ifadeyle, 2. ve 3. maddedeki kurallar, **işlemlerin (okuma/yazma) gerçek zaman sırasına göre uygulanmasını garanti eder.**
- Formel olarak şöyle yorumlayabiliriz: Bir okuma işlemi `read()` (yani "oku" komutu), en son tamamlanmış `write(p,v)` (yani "git şu v değerini yaz" komutu) işleminin değerini `v`'ye döndürmelidir. Eğer bir yazma işlemi gerçek zaman sırasında bir okuma işleminden önce tamamlanmışsa, okuma işlemi bu yazmanın sonucunu yansıtmalıdır.
