---
title: Bilişim Hukuku - 5. Ders (Detaylı)
date: 2025-12-04
tags:
  - akademi/dersler/bilisim-hukuku
---
#### Sorular
1. Ceza muhakemesi kanunda yer alan 'teknik araçla inceleme' hangi usul ve esaslara tâbidir? KIsaca anlatınız. Bu bağlamda "soruşturma" ve "kavuşturma" evresinde faydalanılan SEGBİS'in kullanım alanları nelerdir, yazınız.
2. Adli bilişim nedir? Adli bilişimin aşamaları nelerdir? Adli bilişim yöntemleri ile elde edilen kanıtların geçerliliği ile ilgili detaylı bilgi veriniz.


---





### 1. Teknik Araçlarla İzleme (CMK140) ve SEGBİS

- CMK, Türk Ceza Kanunu'nda (TCK) yer alan hükümlerin nasıl uygulanacağını ve yargılama usulünü belirler. Bilhassa hukuka aykırı fiillerin yargılanması hususunda belirleyici bir niteliğe sahiptir.

#### Teknik Araçlarla İzleme (Surveillance)
- Şüphelilerin kamuya açık alanlardaki faaliyetlerinin veya iş yerinin teknik cihazlarla kayda alınması.

##### Hukukî Nitelik ve Şartlar
- **Katalog Suç Şartı**: Her suç için bu yola başvurulamaz. Kanunda sayılan (uyuşturucu, örgüt, kasten öldürme vb.) ağır suçlar, yani *katalog suçlar* olmalıdır.
- **Kuvvetli Şüphe (*Fumus Boni Iuris*)**: Suçun işlendiğine dair somut delillere dayanan kuvvetli şüphe sebepleri bulunmalıdır. Öyle "bana suçlu gibi geldi" diyerek izleme yapılamaz.
- **İkincilik İlkesi (*Ultima Ratio*)**: Başka sûretle delil elde etme imkânının bulunmaması gerekir. Devletin elinde başka koz kalmadıysa bu kartı oynar.

##### İletişimin Denetlenmesi ve Teknik Araçlarla İncelenmesi Usulleri
- Yukarıdaki şartları özetlersek;
	- Suça ilişkin yürütülen soruşturma ve kovuşturmalarda; **kuvvetli şüphe sebepleri** var ise ve **başka sûretle delil elde imkânı yoksa**, **hâkim kararı (veya gecikmesinde sakınca bulunan hâllerde savcı kararı)** ile şüpheli veya sanığın telekomünikasyon yoluyla iletişimi şu **üç şekilde denetlenebilir**:
		1. Dinlenebilir.
		2. Kaydı alanabilir.
		3. Sinyal bilgileri değerlendirilebilir.

##### Teknik Araçlarla İzleme Süre ve Şartları 
- Kanunda belirtilen teknik izleme tedbiri şu esaslara tâbidir:
	1. En çok 3 hafta için izin verilebilir.
	2. Gerektiğinde hâkim tarafından, her defasında bir hafta olmak üzere, toplamda en fazla 4 haftaya kadar ek süre tanınabilir.
	3. Elde edilen kanıtlar, soruşturulan suç ile ilgili değil ise derhâl **yok edilir.**
	4. Teknik araçlarla izleme, kişinin **konutunda** (evinde) asla uygulanamaz.

#### SEGBİS (Ses ve Görüntü Bilişim Sistemi)
- Soruşturma ve kovuşturma evresinde savcı, hâkim veya mahkeme tarafından dinlenmesi gereken kişilerin (sanık, tanık vs.) fiziksel olarak orada bulunmadan teknoloji yoluyla ifade vermesidir. Bu sistem şu dört unsuru kapsar:
	1. **Dinlenilmesi**.
	2. **Kayda alınması**.
	3. **Saklanması**.
	4. Bunlar için gerekli teknik altyapının kurulmasına ilişkin esas ve usullerin düzenlenmesi.

##### SEGBİS'in Kullanım Alanları
- Soruşturma veya kovuşturma işlemlerinin (ifade, sorgu) kayda alınması.
- Kimliği saklı tutulan tanıkların (gizli tanık) uzaktan dinlenmesi.
- Uluslararası karşılıklı adli yardımlaşma işlemlerinde (istinabe).
- Yargıtay ve bölge adliye mahkemeleri dâhil, kanun yolu makamlarınca CMK'nin uygulandığı duruşmalarda.


### 2. Adli Bilişim (Digital Forensics)
- Forensic, Latince *forensis* (meydana, foruma ait) kelimesinden gelir; yani kamusal alanda, mahkemede tartışılabilir delil demektir. Dijital bir veriyi, mahkemede hükme esas alınabilecek bir delil (evidence) niteliğine kavuşturmaktır.
- **Adli Bilişim**:  Enformasyon teknolojilerine değgin veya aşkın (siber alan) alanlardaki verilerin hukuka uygun şekilde toplanması, bütünlüğünün bozulmadan saklanması, analiz edilmesi ve mahkemeye sunulabilir bir rapor hâline getirilmesi sürecidir. Adli bilişim işbu süreçte şüphelinin sanığa dönüşüp dönüşmemesi hususunda da önemli yer tutar.

#### Adli Bilişimin Aşamaları
###### 1. **Tanımlama (Identification)**:
- "Biz ne arıyoruz ve nerede arıyoruz?" aşamasıdır. Suça değgin potansiyel dijital materyallerin (USB, Hardisk vesaire) tespiti yapılır.
###### 2. **Kanıtların Toplanması ve Korunması (Toplama ve Koruma)**: 
- **İmaj Alma**: Delilin orijinali üzerinde **ASLA** çalışılmaz. Orijinal verinin birebir kopyası (imajı) alınır.
- **Bütünlük (Hash Değeri)**: Alınan imajın orijinale denk olduğunu kanıtlamak için "hash" algoritması (MD5, SHA-256 gibi dijital parmak izleri) kullanılır. Orijinalin hash değeri ile kopyanın hash değeri tutmazsa, delil çöp olur.
- **Delil Zinciri**: Delilin kimden kime, ne zaman geçtiğinin kaydı tutulur.
###### 3. **Bilgi Teknolojileri ile Elde Edilen Kanıtların Analiz Edilmesi (İnceleme ve Analiz)**
- Silinen verilerin kurtarılması (File carving).
- Şifreli dosyaların kırılması.
- Zaman çizelgelerinin (timeline) oluşturulması.
- Suç unsuru taşıyan verilerin (log kayıtları, sohbet geçmişleri) ayıklanması.

###### 4. **Dijital Kanıtların Rapor Formunda Yargı Sürecine Teslimi (Raporlama)**
- Teknik jargonun hukukçuların anlayabileceği bir dille, görsellerle desteklenerek neden-sonuç ilişkisi içinde sunulmasıdır. Rapor "tekrarlanabilir" olmalı, başka bir uzman aynı veriye bakınca aynı sonucu bulmalıdır.