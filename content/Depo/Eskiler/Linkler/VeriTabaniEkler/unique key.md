---
tags:
  - akademi/dersler/veri-tabani
---
- Adından da anlaşıldığı gibi, bir sütundaki veya sütun grubundaki tüm değerlerin birbirinden farklı (benzersiz) olmasını zorunlu kılan bir kısıtlamadır (constraint).
- Bir tablodaki her sütuna "buradaki her değer farklı olacak olum!! tekrar edemezsin!!" demektir.

1. **TC Kimlik No'su** (Asla boş olamaz ve tektir) $\to$ Bu **[[primary key]]** olmaya en uygun adaydır.
2. **Okul Numarası** (Herkesin farklıdır ama belki yeni gelen öğrenciye henüz atanmamıştır, yani boş olabilir) $\to$ **unique key** adayı.
3. **E-posta adresi** (Herkesin farklıdır ama belki e-postası olmayan bir öğrenci vardır) $\to$  Başka bir **unique key** adayı.