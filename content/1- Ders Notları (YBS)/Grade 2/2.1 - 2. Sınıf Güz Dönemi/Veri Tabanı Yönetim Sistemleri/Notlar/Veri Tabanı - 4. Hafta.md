---
title: Veri Tabanı Yönetim Sistemleri - 4. Ders
created: '2025-10-23'
---

## SQL Komutları


- 3 temel DDL (Data Definition Language) komutu vardır.

### 1. `CREATE`
```SQL
CREATE DATABASE <db_name> --Veri Tabanı oluşturur
CREATE TABLE <table_name> --Tablo oluşturur
```

```SQL
CREATE TABLE
(
	kolon1 veri_tipi1 <PRIMARY KEY -gerekliyse->,
	kolon2 veri_tipi2,
	kolon3 veri_tipi3 
)
```

### 2. `ALTER`
- Mevcut bir tablo üzerinde değişiklik yapmak için kullanılır. Tabloya kolon ekleyebilir, var olan bir kolonu değiştirilebilir veya silebiliriz.

```SQL
USE Okul
ALTER TABLE Ogrenciler
ADD Bolum varchar(50)
```

#### Kolon İsim Değiştirme
```SQL
EXEC sp_rename '<tableName>.<columnName>', '<newName>'
```

#### Tablo İsmi Değiştirme

```SQL
EXEC sp_rename '<tableName>', '<newName>'
```

### 3. `DROP`

- Silme işlemi ya. Açıklarız daha sonra.

```SQL
ALTER TABLE tablo_adi
DROP COLUMN <kolon_ad>
```
