---
created: '2025-09-30'
---
## Önermeler Matematiği

### Temel Kavramlar

#### Doğruluk Değeri (Truth Value)
- Bir önerme ele aldığımızda, bu önerme ya doğrudur **(D/True) - 1** ya da yanlıştır **(Y/False) - 0**.
- Önerme sayısına *n* dersek, $2^n$ tane doğruluk değeri ortaya çıkar.

#### Bir Önermenin Olumsuzu (Negation of a Proposition)
- $p:$ Türkiye'nin başkenti İstanbul'dur. (Yanlış) önerme $\to$ 0
- **Olumsuzu**:
    - $\neg p:$ Türkiye'nin başkenti İstanbul değildir. (Doğru) önerme $\to$ 1
- Bir önermenin doğruluk değerini değiştirir. $\overline p, \space \space \neg p, \space \space  ~p,\space \space  p' \space$ şekillerinde gösterilebilir.

#### Açık Önerme (Open Proposition)
- Önermenin fonksiyon hâline getirilmiş biçimidir.
$$p, q, r,\space \dots \space\space\space \to \space\space\space p(x), q(x), r(x),\space \dots$$
$p(x): \space x+1<5$
- $p(1): 2<5 \implies p(1) \equiv 1$
- $p(5): 6<5 \implies p(5) \equiv 0$

##### Soru: $p(x): x+3<7$ önermesinin olumsuzu nedir?
$\neg p(x): x+3\ge7$

---

### Bileşik Önermeler ve Bağlaçlar

**Bileşik Önerme (Compound Proposition)**: İki veya daha fazla önermenin bağlaçlar yardımıyla birleştirilmesiyle ortaya çıkan yeni önerme.

#### "VE" Bağlacı $(\land)$ (AND)
- $\land$ ile gösterilir.
- $p \land q \equiv \text{ p ve q şeklinde okunur.}$
- **Özellikleri:**
    1. $p\land q \equiv q \land p$
    2. $p\land p \equiv p$
    3. $p \land \neg p \equiv 0$
    4. $p \land 1 \equiv p$
    5. $p\land 0 \equiv 0$

#### "VEYA" Bağlacı $(\lor)$ (OR)
- $\lor$ ile gösterilir.
- $p \lor q \equiv \text{ p veya q şeklinde okunur.}$
- **Özellikleri:**
    1. $p \lor q \equiv q \lor p$
    2. $p \lor p \equiv p$
    3. $p \lor \neg p \equiv 1$
    4. $p \lor 1 \equiv 1$
    5. $p \lor 0 \equiv p$

### Ortak Özellikler

##### Dağılma Özellikleri
- $p\land (q\lor r) \equiv (p\land q) \lor (p \land r)$
- $p \lor (q \land r) \equiv (p\lor q) \land (p \lor r)$

##### Birleşme Özelliği (Parantezi Kaldırma)
- $p \land (q \land r) \equiv p \land q \land r$
- $p \lor (q\lor r) \equiv p \lor q \lor r$

##### De Morgan Kuralları
- $\neg (\land) \equiv \lor \space\space\space\space\space\space \neg (\lor) \equiv \land$
- $\neg (p \lor q) \equiv \neg p \land \neg q$
- $\neg(p \land q) \equiv \neg p \lor \neg q$

##### Örnekler
- **Örnek 1:** $(p \lor q) \land (p \lor \neg q) \text{  ifadesinin en sade hâlini yazın.}$
    - $p \lor (q \land \neg q)$
    - $p \lor 0 \equiv p$
- **Örnek 2:** $p \lor (q \lor \neg p) \text{  ifadesinin en sade hâlini yazın.}$
    - $p \lor q \lor \neg p$
    - $(p \lor \neg p) \lor q$
    - $1 \lor q \equiv 1$
- **Örnek 3:** $p \lor (\neg q \land r) \text{  ifadesini olumsuzlayın.}$
    - $\neg p \land (q \lor \neg r)$

#### "İSE" Bağlacı $(\implies)$ (if)
- $\implies \text{   veya   } \rightarrow \text{     şeklinde gösterilir.}$
- $p \implies q \equiv \text{   p ise q şeklinde okunur.}$
- $p \implies q \space \text{ifadesindeki p hipotez, q ise sonuçtur.}$
- **Özellikleri:**
    1. $p\implies q \space \not \equiv \space q \implies p$
    2. $p \implies q \equiv \neg p \lor q$
        - *Not: İSE bağlacının olumsuzu veya sadeleştirilmesi gereken durumlarda bu denklik kullanılır.*
    3.  $p \implies p \equiv 1$
    4. $p \implies \neg p \equiv \neg p$
    5. $p \implies 1 \equiv 1$
    6. $p \implies 0 \equiv \neg p$

##### Karşıtı (Converse), Tersi (Inverse) ve Karşıt Tersi (Contrapositive)
- **Önerme:** $p \implies q$
- **Karşıtı:** $q \implies p$ (Önermeler yer değiştirir.)
- **Tersi:** $\neg p \implies \neg q$ (İki önermenin de olumsuzu alınır.)
- **Karşıt Tersi:** $\neg q \implies \neg p$ (İki önerme hem yer değiştirir hem de olumsuzu alınır.)
- *Not: Bir önermenin doğruluk değeri ile karşıt tersinin doğruluk değeri daima aynıdır.*

#### "ANCAK VE ANCAK" Bağlacı $(\iff)$ (if and only if)
- $\iff \space \text{ veya} \leftrightarrow  \text{sembolü ile gösterilir.}$
- Çift yönlü koşullu önerme (Biconditional) olarak da bilinir.
- **Özellikleri:**
    1. $p \iff 1 \equiv p$
    2. $p \iff p \equiv 1$
    3. $p \iff 0 \equiv \neg p$
    4. $p \iff \neg p \equiv 0$
    5. $p \iff q \equiv q \iff p$
    6. $\boxed{p \iff q \equiv (p \implies q) \land (q \implies p) \equiv (\neg p \lor q) \land (\neg q \lor p)}$

#### "YA DA" Bağlacı $(\oplus \space \text{   ya da }\space\space \veebar)$ (exclusive or)
- $\oplus \text{  veya } \veebar \text{ sembolleriyle gösterilir.}$
- $p \oplus q \equiv \text{p ya da q şeklinde okunur.}$
- **Özellikleri:**
    1. $p \oplus q \equiv q \oplus p$
    2. $p \oplus p \equiv 0$
    3. $p \oplus \neg p \equiv 1$
    4. $p \oplus 1 \equiv \neg p$
    5. $p \oplus 0 \equiv p$

---

### Temel Tanımlar ve Niceleyiciler

#### Totoloji ve Çelişki
- **Totoloji (Tautology)**: Sonucu her zaman $1$ çıkan bileşik önermelere denir.
- **Çelişki (Contradiction)**: Sonucu her zaman 0 çıkan bileşik önermelere denir.

#### Mantıksal Olarak Eşdeğer (Logically Equivalent)
- İki bileşik önermenin doğruluk değerleri *her koşul altında* aynı sonucu veriyorsa, bu iki bileşik önerme birbirine **mantıksal olarak eşdeğerdir**.
- **Tespit Yöntemleri:**
    1. Doğruluk tablosu kullanımı (Truth Table)
    2. Sadeleştirme yolu (Simplification)

#### Niceleyiciler (Quantifiers)
- $\forall \text{: Her (Evrensel niceleyici)}$
- $\exists \text{: Bazı (Varlıksal niceleyici)}$
- **Olumsuzları:**
    - $\neg (\forall) \equiv \exists$
    - $\neg (\exists) \equiv \forall$

##### Örnekler:
- **Önerme 1:** $\forall x \in \mathbb{N}, x<5$ (Her doğal sayı 5'ten küçüktür.)
    - Bu önermenin doğruluk değeri $\equiv 0$ (Yanlış).
- **Önerme 2:** $\exists x \in \mathbb{R}, 2x-3=7$ (Bazı reel sayılar için 2x-3=7'dir.)
    - Bu önermenin doğruluk değeri $\equiv 1$ (Doğru, $x=5$ için sağlar).
