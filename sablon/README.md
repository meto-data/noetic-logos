# 🎯 Noetic Papers — İnteraktif Quiz ve Bulmaca Şablon Rehberi

Bu dizin, notlarınıza çoktan seçmeli interaktif testler ve dokunmatik/fare destekli kelime avı bulmacaları eklemeniz için standart şablonları içerir.

Notlarınıza bu özellikleri eklemek için tek yapmanız gereken, markdown dosyanızın içine ilgili özel kod bloğunu yerleştirmektir.

---

## 1. 📝 Çoktan Seçmeli Test Şablonu (`quiz`)

Notunuzun herhangi bir yerine ````quiz kod bloğu açın ve içine JSON formatında sorularınızı girin:

````markdown
```quiz
{
  "title": "Hafta 1 - Sınav Simülatörü",
  "description": "Vize ve final sınavı soru formatında test.",
  "questions": [
    {
      "id": 1,
      "question": "Soru kökünü buraya yazın...",
      "options": [
        {
          "key": "A",
          "text": "Seçenek A",
          "isCorrect": false,
          "explanation": "Yanlış! Bu şıkkın neden yanlış/çeldirici olduğunu buraya yazın."
        },
        {
          "key": "B",
          "text": "Seçenek B",
          "isCorrect": true,
          "explanation": "Doğru! Tetikleyici Kelimeler: Neden doğru olduğunu ve sınav ipucunu buraya yazın."
        },
        {
          "key": "C",
          "text": "Seçenek C",
          "isCorrect": false,
          "explanation": "Yanlış! Seçenek C neden hatalı..."
        },
        {
          "key": "D",
          "text": "Seçenek D",
          "isCorrect": false,
          "explanation": "Yanlış! Seçenek D neden hatalı..."
        },
        {
          "key": "E",
          "text": "Seçenek E",
          "isCorrect": false,
          "explanation": "Yanlış! Seçenek E neden hatalı..."
        }
      ]
    }
  ]
}
```
````

### 💡 Quiz Özellikleri:
- **Anlık Geri Bildirim:** Şık tıklandığında doğruysa yeşil, yanlışsa kırmızı yanar ve doğru olan şık gösterilir.
- **Detaylı Açıklama (Explanation):** İşaretlenen şıkkın *neden yanlış* olduğu veya *neden doğru* olduğu anında akordeon şeklinde sorunun altında belirir.
- **Skor Tablosu:** Test sonunda doğru/yanlış oranı gösterilir ve "Yeniden Çöz" butonuyla sıfırlanabilir.

---

## 2. 🧩 Kelime Avı / Bulmaca Şablonu (`puzzle`)

Notunuzun sonuna ````puzzle kod bloğu ekleyin:

````markdown
```puzzle
{
  "title": "Computer Words Bulmacası",
  "dimensions": {
    "rows": 5,
    "cols": 5
  },
  "grid": [
    ["M", "O", "U", "S", "E"],
    ["C", "P", "U", "X", "D"],
    ["D", "A", "T", "A", "A"],
    ["B", "U", "G", "S", "T"],
    ["N", "E", "T", "W", "A"]
  ],
  "words": [
    {
      "word": "MOUSE",
      "direction": "HORIZONTAL_LTR",
      "start": [0, 0],
      "end": [0, 4],
      "path": [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
      "clue": "Fare / İşaretçi Aygıtı"
    }
  ]
}
```
````

### 💡 Bulmaca Özellikleri:
- **PC Kontrolü:** Fareyle ilk harfe basılı tutup sürükleyin (`mousedown` + `drag`).
- **Mobil & Tablet Kontrolü:** Dokunmatik ekranda parmağınızla sürükleyin (sayfa kayması kilitlenir).
- **Açı Kilitleme (Snap):** Yatay, dikey ve 45° çapraz açılara hassas kilitlenir; çizginiz kaymaz.
- **Eşleşme Durumu:** Kelime bulunduğunda temanın vurgu rengine boyanır ve listede tamamlandı işaretlenir.
- **Hatalı Seçim:** Yanlış kelime seçildiğinde seçim 1-2 saniye kırmızı yanıp söner ve otomatik sıfırlanır.
