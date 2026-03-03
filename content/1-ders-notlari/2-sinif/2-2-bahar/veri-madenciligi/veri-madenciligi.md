---
created: 2026-02-17
cssclasses:
  - dashboard
tag: akademi/dersler/veri-madenciligi
title: Veri Madenciliği Index
draft: true
---

# VERİ MADENCİLİĞİ MERKEZî DİZİN

```dataviewjs
// Tüm altyapı klasörlerindeki (hafta-01, 02...) uygulama kodlarını tarar
const folderPath = "Infrastructure"; 
const pages = dv.pages(`"${folderPath}"`).where(p => p.file.path.includes("Konular"));
let tableRows = [];

for (const page of pages) {
    const content = await dv.io.load(page.file.path);
    if (content && content.includes("```python")) {
        const parts = content.split("```python");
        if (parts.length > 1) {
            const codePart = parts[1].split("```")[0];
            const cleanCode = codePart.trim().substring(0, 150);
            const codeBlock = `\`\`\`python\n${cleanCode}...\n\`\`\``;
            tableRows.push([page.file.link, codeBlock]);
        }
    }
}
dv.table(["Pratik Notu", "Python Snippet"], tableRows);
```

## 1. YARIYIL (VİZE ÖNCESİ)

### Hafta 1: Veri Madenciliğine Giriş
> CRISP-DM, Veri Türleri, ML vs DM

- **Teorik Notlar:** [[Teorik Notlar/veri-madenciligi-1|1. Hafta Teorik Notları]]
- **Ders Slaytı:** [[PDF/hafta_1_giris_110819.pdf|hafta_1_giris_110819.pdf]]
- **Kurulum Rehberi:** [[PDF/VERİ MADENCILIGI ALTYAPI KURULUM REHBERI_092924.pdf|Altyapı Kurulum Rehberi]]

### Hafta 2: Veri Ön İşleme (Data Preprocessing)
> Missing Value, Outlier, Normalizasyon, Pandas

- **Haftalık Pano:** [[Infrastructure/hafta-02/02-Hafta-MOC|02-Hafta-MOC (Detaylı Görünüm)]]
- **Teorik Notlar:** [[veri-madenciligi-2|2. Hafta Teorik Notları]]
- **Pratik Uygulamalar (Konular):**
  - [[Infrastructure/hafta-02/Konular/1_numpy-temelleri|1. Numpy Temelleri]]
  - [[Infrastructure/hafta-02/Konular/2_pandas-veri-manipulasyonu|2. Pandas Veri Manipülasyonu]]
  - [[Infrastructure/hafta-02/Konular/3_veri-temizleme-ve-eksik-veri|3. Veri Temizleme ve Eksik Veri]]
  - [[Infrastructure/hafta-02/Konular/4_veri-birlestirme-merge-concat|4. Veri Birleştirme (Merge/Concat)]]
  - [[Infrastructure/hafta-02/Konular/5_veri-donusumu-normalization|5. Veri Dönüşümü ve Normalizasyon]]
  - [[Infrastructure/hafta-02/Konular/6_matplotlib-gorsellestirme|6. Matplotlib Görselleştirme]]

### Hafta 3: Keşifsel Veri Analizi (EDA)
> Korelasyon, Histogram, Feature Dağılımı, Seaborn

### Hafta 4: Karar Ağaçları
> Entropy, Gini, Overfitting, sklearn DecisionTree

### Hafta 5: Random Forest & KNN
> Ensemble Mantığı, Distance Ölçütleri

### Hafta 6: Kümeleme (Clustering)
> K-Means, Elbow Yöntemi, Müşteri Segmentasyonu

### Hafta 7: Birliktelik Kuralları
> Support, Confidence, Lift, Apriori ile Market Basket Analizi

---

## HAFTA 8: VİZE SINAVI

---

## 2. YARIYIL (FİNAL ÖNCESİ)

### Hafta 9: Boyut İndirgeme
> PCA, Curse of Dimensionality

### Hafta 10: Model Performansı
> Accuracy, Precision, Recall, ROC, Cross Validation

### Hafta 11: Büyük Veri Kavramı
> 5V, Structured vs Unstructured, Büyük Veri Mimarileri

### Hafta 12: Hadoop Ekosistemi
> HDFS, MapReduce, NameNode

### Hafta 13: Apache Spark (Local Mode)
> RDD, DataFrame, In-memory Processing, PySpark

### Hafta 14: GPU Destekli ML
> CPU vs GPU, CUDA Mantığı, XGBoost GPU Karşılaştırması

