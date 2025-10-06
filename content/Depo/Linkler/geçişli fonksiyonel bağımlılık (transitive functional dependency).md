- Bir sütun başka bir sütuna bağlıysa, o da başka bir sütuna bağlıysa **geçişli fonksiyonel bağımlılık (transitive dependency)** olur. 
	- 3NF bunu yasaklar, çünkü:
		- Aynı bilgi birden fazla yerde tutulur ([[Veri Fazlalığı (Data Redundancy)|veri tekrarı]]).
		- Güncelleme/silme sırasında hatalar çıkar (**update/delete anomaly**).
		- Yani **anahtar olmayan sütunlar yanlış tabloda duruyor** demektir.
- **Mantık**:
	- **A $\to$ B** ve **B $\to$ C** varsa, <br> **A** $\to$ **C** dolaylı (geçişli) bağımlılıktır.

- **Kötü Tasarım (3NF ihlali):**:

```scss
Student(id PK, department_id, department_name)
```


- `id → department_id` (öğrenci hangi bölümde)
- `department_id → department_name` (bölümün adı)
- Dolayısıyla `id → department_name` (geçişli bağımlılık oluştu)

- **Doğru Tasarım (3NF’ye uygun):**:

```scss
Student(id PK, department_id FK)
Department(department_id PK, department_name)
```

- **Bu yapıda:**
	- Her bilgi **ait olduğu tabloda** tutulur.
	- `department_name` artık STUDENT tablosunda değil, kendi **Department** tablosunda.
	- Böylece veri **tekrarsız**, **tutarlı** ve **güncellenebilir** olur.