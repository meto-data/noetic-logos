---
draft: true
created: 2026-03-16
---
### 🎯 Sınavda Ne Çıkar? (Kritik Çıkarımlar)
Önceki haftanın Markdown notları ve bu haftaki vurgular birleştirildiğinde sınav için şunlar banko görünüyor:

1.  **Kod Okuryazarlığı:** Hoca "Ezberlemeyin, kodun ne yaptığını bilin" diyor. Sınavda `dt_model.fit(X_train, Y_train)` kodunu verip "Bu satır ne işe yarar?" diye soracaktır. Cevap: *Modelin eğitim verileri kullanılarak eğitilmesini (örüntüleri öğrenmesini) sağlar.*
2.  **Overfitting (Aşırı Öğrenme):** Karar ağaçlarının en zayıf noktasıdır. Sınavda "Modelin eğitim verisini çok iyi öğrenip test verisinde çuvallamasına ne denir?" veya "Aşırı öğrenmeyi çözmek için hangi algoritma kullanılır?" (Cevap: Random Forest) şeklinde gelebilir.
3.  **Denetimli vs Denetimsiz Öğrenme Farkı:** Bir senaryo verilir ve "Müşterilerin geçmiş alışverişlerine bakarak kredi kartı dolandırıcılığını tespit etmek" -> Hedef belli olduğu için *Denetimli Öğrenme*. "Müşterileri alışveriş alışkanlıklarına göre 3 gruba ayırmak" -> Hedef (etiket) yok, sadece gruplama var, *Denetimsiz Öğrenme*, gibi sorular gelebilir
4.  **Bölme Kriterleri (Entropy ve Gini):** Entropinin 0'a yaklaştıkça saflığın arttığını bilinmeli. Scikit-learn'in default değerinin Gini olduğu da.
5.  **Train/Test Split Mantığı:** Veriyi neden %80'e %20 böleriz? *Modelin ezberleyip ezberlemediğini (gerçek dünya performansını) test etmek için modelin daha önce hiç görmediği bir veri setine (test setine) ihtiyacımız vardır.*


>[!check] Sınavda çıkması muhtemeller:
> 1. **Kod Okuryazarlığı**: `fit()` ve `predict()` gibi komutların ne işe yaradığı gelecek muhtemeen.
> 	- `fit()`: Modeli eğitir (Train).
> 	- `predict()`: Eğitilmiş modelle tahmin yapar (Test).
> 2. **Karar Ağaçları Terimleri**: Kök (Root), Yaprak (Leaf), Overfitting (Aşırı öğrenme) kavramlarının tanımları bilinmeli. "Overfitting problemini çözmek için hangi algoritma kullanılır?" diye sorulabilir, **Random Forest**'tir cevabı.
> 3. **X ve Y Kavramları**: X'in (Features) girdiler, Y'nin (Target/Label) tahmin edilmek istenen çıktı (hedef) olduğu sorulabilir.
> 4. **Denetimli vs. Denetimsiz Öğrenme Farkı**: Eğer işin içinde bir **Etiket (Label)** veya **Tahmin (Prediction)** varsa o denetimli (supervised) öğrenmedir. Sınıflandırma ve Regresyon buna girer. Kümeleme ve Sepet Analizi ise denetimsizdir.
> 5. **Gini vs. Entropy**: Karar ağacında dalın nereden bölüneceğine karar veren iki matematiksel "saflık" ölçütüdür. Scikit-learn varsayılanı (default) Gini'dir.