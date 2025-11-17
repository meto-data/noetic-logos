// SQL Soruları Veri Yapısı
const SQL_DATA = {
    categories: [
        {
            id: "ddl",
            name: "Veri Tanımlama Dili (DDL)",
            description: "Veritabanı ve tablo yapılarının oluşturulması, değiştirilmesi ve silinmesi",
            subcategories: [
                {
                    id: "ddl-table",
                    name: "Tablo İşlemleri (CREATE, DROP)",
                    exercises: [
                        {
                            id: "ddl-table-1",
                            reference: null,
                            setup: null,
                            task: "\"ogrenciler\" adında bir tablo oluşturun. Bu tabloda şu alanlar bulunsun:\n- ogrenci_id (Tamsayı, Birincil Anahtar)\n- isim (Metin, 50 karakter, Boş Bırakılamaz)\n- soyisim (Metin, 50 karakter, Boş Bırakılamaz)\n- dogum_tarihi (Tarih)\n- telefon (Metin, 15 karakter)\n- email (Metin, 100 karakter)\n- adres (Uzun Metin)",
                            solution: "CREATE TABLE ogrenciler (\n    ogrenci_id INT PRIMARY KEY,\n    isim VARCHAR(50) NOT NULL,\n    soyisim VARCHAR(50) NOT NULL,\n    dogum_tarihi DATE,\n    telefon VARCHAR(15),\n    email VARCHAR(100),\n    adres TEXT\n);",
                            hint: "CREATE TABLE komutunu kullanın. Her sütun için uygun veri tipini ve kısıtlamaları belirtin.",
                            variables: {}
                        },
                        {
                            id: "ddl-table-2",
                            reference: "TABLE: ogrenciler (ogrenci_id, isim, soyisim, dogum_tarihi, telefon, email, adres)",
                            setup: "CREATE TABLE ogrenciler (ogrenci_id INT PRIMARY KEY, isim VARCHAR(50) NOT NULL, soyisim VARCHAR(50) NOT NULL, dogum_tarihi DATE, telefon VARCHAR(15), email VARCHAR(100), adres TEXT);",
                            task: "\"ogrenciler\" tablosunu silin.",
                            solution: "DROP TABLE ogrenciler;",
                            hint: "DROP TABLE komutunu kullanın.",
                            variables: {}
                        }
                    ]
                },
                {
                    id: "ddl-alter",
                    name: "Tablo Yapısını Değiştirme (ALTER)",
                    exercises: [
                        {
                            id: "ddl-alter-1",
                            reference: "TABLE: ogrenciler (Mevcut kolonlar: ogrenci_id, isim, soyisim, dogum_tarihi, telefon, email, adres)",
                            setup: "CREATE TABLE ogrenciler (ogrenci_id INT PRIMARY KEY, isim VARCHAR(50) NOT NULL, soyisim VARCHAR(50) NOT NULL, dogum_tarihi DATE, telefon VARCHAR(15), email VARCHAR(100), adres TEXT);",
                            task: "\"ogrenciler\" tablosuna \"bolum\" adında, 50 karakterlik metin tutabilen yeni bir kolon ekleyin.",
                            solution: "ALTER TABLE ogrenciler\nADD bolum VARCHAR(50);",
                            hint: "ALTER TABLE ... ADD komutunu kullanın.",
                            variables: {}
                        },
                        {
                            id: "ddl-alter-2",
                            reference: "TABLE: ogrenciler (Mevcut kolonlar: ogrenci_id, isim, soyisim, dogum_tarihi, telefon, email, adres, bolum)",
                            setup: "CREATE TABLE ogrenciler (ogrenci_id INT PRIMARY KEY, isim VARCHAR(50) NOT NULL, soyisim VARCHAR(50) NOT NULL, dogum_tarihi DATE, telefon VARCHAR(15), email VARCHAR(100), adres TEXT, bolum VARCHAR(50));",
                            task: "\"ogrenciler\" tablosundan \"telefon\" kolonunu silin.",
                            solution: "ALTER TABLE ogrenciler\nDROP COLUMN telefon;",
                            hint: "ALTER TABLE ... DROP COLUMN komutunu kullanın.",
                            variables: {}
                        },
                        {
                            id: "ddl-alter-3",
                            reference: "TABLE: ogrenciler (Mevcut kolon: dogum_tarihi)",
                            setup: "CREATE TABLE ogrenciler (ogrenci_id INT PRIMARY KEY, isim VARCHAR(50), dogum_tarihi DATE);",
                            task: "\"ogrenciler\" tablosundaki \"dogum_tarihi\" kolonunun adını \"dogum_gunu\" olarak değiştirin.",
                            solution: "EXEC sp_rename 'ogrenciler.dogum_tarihi', 'dogum_gunu';",
                            hint: "SQL Server için EXEC sp_rename 'tableName.columnName', 'newName' formatını kullanın.",
                            variables: {}
                        },
                        {
                            id: "ddl-alter-4",
                            reference: "TABLE: tbl_ogrenciler",
                            setup: "CREATE TABLE tbl_ogrenciler (id INT PRIMARY KEY, ad VARCHAR(50));",
                            task: "\"tbl_ogrenciler\" adındaki tablonun adını \"ogrenciler\" olarak değiştirin.",
                            solution: "EXEC sp_rename 'tbl_ogrenciler', 'ogrenciler';",
                            hint: "SQL Server için EXEC sp_rename 'tableName', 'newName' formatını kullanın.",
                            variables: {}
                        }
                    ]
                }
            ]
        },
        {
            id: "dml",
            name: "Veri Düzenleme Dili (DML)",
            description: "Tablolara veri ekleme, güncelleme ve silme işlemleri",
            subcategories: [
                {
                    id: "dml-insert",
                    name: "Veri Ekleme (INSERT)",
                    exercises: [
                        {
                            id: "dml-insert-1",
                            reference: null,
                            setup: null,
                            task: "\"Personeller\" adında bir tablo oluşturun. Tabloda şu alanlar bulunsun:\n- Pers_id (INT, PRIMARY KEY)\n- pers_ad (VARCHAR(50), NOT NULL)\n- Pers_soyad (VARCHAR(50), NOT NULL)\n- Pers_dogumtarihi (DATE, NOT NULL)\n- Pers_telefon (VARCHAR(15), NOT NULL)\n- Pers_email (VARCHAR(50), NOT NULL)",
                            solution: "CREATE TABLE Personeller (\n    Pers_id INT PRIMARY KEY,\n    pers_ad VARCHAR(50) NOT NULL,\n    Pers_soyad VARCHAR(50) NOT NULL,\n    Pers_dogumtarihi DATE NOT NULL,\n    Pers_telefon VARCHAR(15) NOT NULL,\n    Pers_email VARCHAR(50) NOT NULL\n);",
                            hint: "CREATE TABLE komutunu kullanın ve her alan için uygun veri tipi ve NOT NULL kısıtlamasını ekleyin.",
                            variables: {}
                        },
                        {
                            id: "dml-insert-2",
                            reference: "TABLE: Personeller (Pers_id, pers_ad, Pers_soyad, Pers_dogumtarihi, Pers_telefon, Pers_email)",
                            setup: "CREATE TABLE Personeller (Pers_id INT PRIMARY KEY, pers_ad VARCHAR(50) NOT NULL, Pers_soyad VARCHAR(50) NOT NULL, Pers_dogumtarihi DATE NOT NULL, Pers_telefon VARCHAR(15) NOT NULL, Pers_email VARCHAR(50) NOT NULL);",
                            task: "\"Personeller\" tablosuna ID'si 1, adı 'asli', soyadı 'aslan' olan, doğum tarihi '2000-03-25', telefonu '05555553' ve email'i 'asliaslan@gmail.com' olan bir personel ekleyin.",
                            solution: "INSERT INTO Personeller\n(Pers_id, pers_ad, Pers_soyad, Pers_dogumtarihi, Pers_telefon, Pers_email)\nVALUES\n(1, 'asli', 'aslan', '2000-03-25', '05555553', 'asliaslan@gmail.com');",
                            hint: "INSERT INTO ... VALUES komutunu kullanın. Metin değerlerini tek tırnak içine alın.",
                            variables: {}
                        },
                        {
                            id: "dml-insert-3",
                            reference: "TABLE: Personeller (Pers_id, pers_ad, Pers_soyad, Pers_dogumtarihi, Pers_telefon, Pers_email)\nMevcut Kayıtlar: 1 adet",
                            setup: "CREATE TABLE Personeller (Pers_id INT PRIMARY KEY, pers_ad VARCHAR(50) NOT NULL, Pers_soyad VARCHAR(50) NOT NULL, Pers_dogumtarihi DATE NOT NULL, Pers_telefon VARCHAR(15) NOT NULL, Pers_email VARCHAR(50) NOT NULL); INSERT INTO Personeller VALUES (1, 'asli', 'aslan', '2000-03-25', '05555553', 'asliaslan@gmail.com');",
                            task: "\"Personeller\" tablosuna aşağıdaki personeli ekleyin:\nID: 2, Ad: 'ali', Soyad: 'akkan', Doğum: '2000-03-24', Tel: '05555553', Email: 'aliakkan@gmail.com'",
                            solution: "INSERT INTO Personeller (Pers_id, pers_ad, Pers_soyad, Pers_dogumtarihi, Pers_telefon, Pers_email) VALUES (2, 'ali', 'akkan', '2000-03-24', '05555553', 'aliakkan@gmail.com');",
                            hint: "INSERT INTO ... VALUES komutunu kullanın.",
                            variables: {}
                        }
                    ]
                },
                {
                    id: "dml-delete",
                    name: "Veri Silme (DELETE)",
                    exercises: [
                        {
                            id: "dml-delete-1",
                            reference: "TABLE: Personeller\nMevcut Kayıtlar: pers_ad = 'asli' olan bir kayıt mevcut",
                            setup: "CREATE TABLE Personeller (Pers_id INT PRIMARY KEY, pers_ad VARCHAR(50), Pers_soyad VARCHAR(50), Pers_dogumtarihi DATE, Pers_telefon VARCHAR(15), Pers_email VARCHAR(50)); INSERT INTO Personeller VALUES (1, 'asli', 'aslan', '2000-03-25', '05555553', 'asli@mail.com');",
                            task: "Adı 'asli' olan personeli tablodan silin.",
                            solution: "DELETE FROM Personeller WHERE pers_ad = 'asli';",
                            hint: "DELETE FROM ... WHERE komutunu kullanın.",
                            variables: {}
                        },
                        {
                            id: "dml-delete-2",
                            reference: "TABLE: Personeller\nMevcut Kayıtlar: Pers_id = 6 olan bir kayıt mevcut",
                            setup: "CREATE TABLE Personeller (Pers_id INT PRIMARY KEY, pers_ad VARCHAR(50), Pers_soyad VARCHAR(50)); INSERT INTO Personeller VALUES (6, 'mehmet', 'yilmaz');",
                            task: "ID'si 6 olan personeli silin.",
                            solution: "DELETE FROM Personeller WHERE Pers_id = 6;",
                            hint: "DELETE FROM ... WHERE komutunu kullanın. Primary key üzerinden silme yapabilirsiniz.",
                            variables: {}
                        },
                        {
                            id: "dml-delete-3",
                            reference: "TABLE: Personeller\nMevcut Kayıtlar: Pers_dogumtarihi = '2000-03-24' olan bir kayıt mevcut",
                            setup: "CREATE TABLE Personeller (Pers_id INT PRIMARY KEY, pers_ad VARCHAR(50), Pers_dogumtarihi DATE); INSERT INTO Personeller VALUES (1, 'ali', '2000-03-24');",
                            task: "Doğum tarihi '2000-03-24' olan personeli silin.",
                            solution: "DELETE FROM Personeller WHERE Pers_dogumtarihi = '2000-03-24';",
                            hint: "DELETE FROM ... WHERE komutunu kullanın. Tarih değerini uygun formatta yazın.",
                            variables: {}
                        }
                    ]
                },
                {
                    id: "dml-update",
                    name: "Veri Güncelleme (UPDATE)",
                    exercises: [
                        {
                            id: "dml-update-1",
                            reference: "TABLE: Personeller\nMevcut Kayıtlar: pers_ad = 'veli' olan bir kayıt mevcut",
                            setup: "CREATE TABLE Personeller (Pers_id INT PRIMARY KEY, pers_ad VARCHAR(50), Pers_soyad VARCHAR(50)); INSERT INTO Personeller VALUES (1, 'veli', 'bulut');",
                            task: "Adı 'veli' olan personelin adını 'cancan' olarak güncelleyin.",
                            solution: "UPDATE Personeller\nSET pers_ad = 'cancan'\nWHERE pers_ad = 'veli';",
                            hint: "UPDATE ... SET ... WHERE komutunu kullanın.",
                            variables: {}
                        },
                        {
                            id: "dml-update-2",
                            reference: "TABLE: Personeller\nMevcut Kayıtlar: Pers_id = 7 olan bir kayıt mevcut",
                            setup: "CREATE TABLE Personeller (Pers_id INT PRIMARY KEY, pers_ad VARCHAR(50), Pers_email VARCHAR(50)); INSERT INTO Personeller VALUES (7, 'murat', 'eski@mail.com');",
                            task: "ID'si 7 olan personelin email adresini 'yeni@email.com' olarak güncelleyin.",
                            solution: "UPDATE Personeller\nSET Pers_email = 'yeni@email.com'\nWHERE Pers_id = 7;",
                            hint: "UPDATE ... SET ... WHERE komutunu kullanın. ID üzerinden güncelleme yapın.",
                            variables: {}
                        },
                        {
                            id: "dml-update-3",
                            reference: "TABLE: tbl_urunler (urun_id, urun_adi, urun_fiyat, urun_stok_miktari)\nMevcut Kayıtlar: urun_fiyat < 1000 olan ürünler mevcut",
                            setup: "CREATE TABLE tbl_urunler (urun_id INT PRIMARY KEY, urun_adi VARCHAR(50), urun_fiyat INT, urun_stok_miktari INT); INSERT INTO tbl_urunler VALUES (1, 'Telefon', 800, 10), (2, 'Tablet', 950, 5), (3, 'Laptop', 2000, 3);",
                            task: "Ürün fiyatı 1000 TL'nin altında olan ürünlerin fiyatını 1500 TL yapın.",
                            solution: "UPDATE tbl_urunler\nSET urun_fiyat = 1500\nWHERE urun_fiyat < 1000;",
                            hint: "UPDATE ... SET ... WHERE komutunu kullanın. Karşılaştırma operatörü (<) kullanın.",
                            variables: {}
                        },
                        {
                            id: "dml-update-4",
                            reference: "TABLE: tbl_urunler\nMevcut Kayıtlar: urun_fiyat <= 1000 olan ürünler mevcut",
                            setup: "CREATE TABLE tbl_urunler (urun_id INT PRIMARY KEY, urun_adi VARCHAR(50), urun_fiyat INT, urun_stok_miktari INT); INSERT INTO tbl_urunler VALUES (1, 'Telefon', 1000, 10), (2, 'Tablet', 950, 5);",
                            task: "Ürün fiyatı 1000 TL ve altı olanların fiyatını 1500 TL yapın.",
                            solution: "UPDATE tbl_urunler\nSET urun_fiyat = 1500\nWHERE urun_fiyat <= 1000;",
                            hint: "UPDATE ... SET ... WHERE komutunu kullanın. <= operatörünü kullanın.",
                            variables: {}
                        },
                        {
                            id: "dml-update-5",
                            reference: "TABLE: tbl_urunler\nMevcut Kayıtlar: urun_fiyat = 5000 olan ürünler mevcut",
                            setup: "CREATE TABLE tbl_urunler (urun_id INT PRIMARY KEY, urun_adi VARCHAR(50), urun_fiyat INT, urun_stok_miktari INT); INSERT INTO tbl_urunler VALUES (1, 'TV', 5000, 10), (2, 'Buzdolabi', 5000, 5);",
                            task: "Ürün fiyatı 5000 olan ürünlerin fiyatına 500 TL ekleyin.",
                            solution: "UPDATE tbl_urunler\nSET urun_fiyat = urun_fiyat + 500\nWHERE urun_fiyat = 5000;",
                            hint: "SET ifadesinde mevcut değeri kullanarak aritmetik işlem yapabilirsiniz.",
                            variables: {}
                        },
                        {
                            id: "dml-update-6",
                            reference: "TABLE: tbl_urunler\nMevcut Kayıtlar: urun_fiyat = 1500 olan ürünler mevcut",
                            setup: "CREATE TABLE tbl_urunler (urun_id INT PRIMARY KEY, urun_adi VARCHAR(50), urun_fiyat INT, urun_stok_miktari INT); INSERT INTO tbl_urunler VALUES (1, 'Monitor', 1500, 10), (2, 'Klavye', 1500, 20);",
                            task: "Ürün fiyatı 1500 olan ürünlere %20 zam yapın.",
                            solution: "UPDATE tbl_urunler\nSET urun_fiyat = urun_fiyat + (urun_fiyat * 20 / 100)\nWHERE urun_fiyat = 1500;",
                            hint: "Yüzde hesaplaması için: değer * yüzde / 100 formülünü kullanın.",
                            variables: {}
                        },
                        {
                            id: "dml-update-7",
                            reference: "TABLE: tbl_urunler\nMevcut Kayıtlar: urun_adi = 'Buzdolabi' olan ürünler mevcut",
                            setup: "CREATE TABLE tbl_urunler (urun_id INT PRIMARY KEY, urun_adi VARCHAR(50), urun_fiyat INT, urun_stok_miktari INT); INSERT INTO tbl_urunler VALUES (1, 'Buzdolabi', 5000, 10), (2, 'Camasir Makinesi', 3000, 15);",
                            task: "Ürün adı 'Buzdolabi' olanların stok miktarını 40 yapın.",
                            solution: "UPDATE tbl_urunler\nSET urun_stok_miktari = 40\nWHERE urun_adi = 'Buzdolabi';",
                            hint: "Metin karşılaştırması için tek tırnak kullanın.",
                            variables: {}
                        },
                        {
                            id: "dml-update-8",
                            reference: "TABLE: tbl_urunler\nMevcut Kayıtlar: urun_stok_miktari değerleri çeşitli",
                            setup: "CREATE TABLE tbl_urunler (urun_id INT PRIMARY KEY, urun_adi VARCHAR(50), urun_fiyat INT, urun_stok_miktari INT); INSERT INTO tbl_urunler VALUES (1, 'Urun1', 1000, 15), (2, 'Urun2', 2000, 25), (3, 'Urun3', 1500, 8);",
                            task: "Stok miktarı 10 ile 30 arasında olan (10 ve 30 hariç) ürünlerin fiyatına 100 TL ekleyin.",
                            solution: "UPDATE tbl_urunler\nSET urun_fiyat = urun_fiyat + 100\nWHERE urun_stok_miktari > 10 AND urun_stok_miktari < 30;",
                            hint: "Aralık sorgusu için AND operatörünü kullanın.",
                            variables: {}
                        },
                        {
                            id: "dml-update-9",
                            reference: "TABLE: tbl_urunler\nMevcut Kayıtlar: urun_adi içinde 'Makine' geçen ürünler mevcut",
                            setup: "CREATE TABLE tbl_urunler (urun_id INT PRIMARY KEY, urun_adi VARCHAR(50), urun_fiyat INT, urun_stok_miktari INT); INSERT INTO tbl_urunler VALUES (1, 'Camasir Makinesi', 3000, 10), (2, 'Bulasik Makinesi', 4000, 5), (3, 'Buzdolabi', 5000, 8);",
                            task: "Ürün adında 'Makine' kelimesi geçen tüm ürünlerin adını 'MKN' olarak değiştirin.",
                            solution: "UPDATE tbl_urunler\nSET urun_adi = 'MKN'\nWHERE urun_adi LIKE '%Makine%';",
                            hint: "LIKE operatörü ve % joker karakterini kullanın.",
                            variables: {}
                        }
                    ]
                }
            ]
        },
        {
            id: "scenarios",
            name: "Veritabanı Tasarım Senaryoları",
            description: "Patron isteklerine dayalı veritabanı normalizasyonu ve ilişkisel tasarım",
            subcategories: [
                {
                    id: "scenario-customer",
                    name: "Müşteri ve Ülke Bilgileri",
                    exercises: [
                        {
                            id: "scenario-customer-1",
                            reference: null,
                            task: "Şirketimizden alışveriş yapan müşterilerin ad, soyad, e-posta, doğum tarihi, kullanıcı adı ve şifre bilgilerini saklayacak bir 'musteri' tablosu oluşturun.\n\nAyrıca her müşterinin yaşadığı ülkenin bizim dilimizdeki adını ve o ülkenin orijinal adını görmek için 'ulke' tablosu oluşturun.\n\nGerekli alanlar:\n- musteri: id (INT, PK), ad, soyad, email, dogum (DATE), kullaniciadi, sifre\n- ulke: id (VARCHAR(10), PK), ad, orijinalad",
                            solution: "CREATE TABLE musteri (\n    id INT PRIMARY KEY,\n    ad VARCHAR(100),\n    soyad VARCHAR(100),\n    email VARCHAR(100),\n    dogum DATE,\n    kullaniciadi VARCHAR(50),\n    sifre VARCHAR(100)\n);\n\nCREATE TABLE ulke (\n    id VARCHAR(10) PRIMARY KEY,\n    ad VARCHAR(100),\n    orijinalad VARCHAR(100)\n);",
                            hint: "İki ayrı CREATE TABLE komutu yazmanız gerekiyor. Ülke tablosunun id'si VARCHAR tipinde olmalı.",
                            variables: {}
                        },
                        {
                            id: "scenario-customer-2",
                            reference: "TABLE: musteri (id, ad, soyad, email, dogum, kullaniciadi, sifre)\nTABLE: ulke (id, ad, orijinalad)",
                            task: "Müşteri ve ülke tablolarını birbirine bağlayın ki her müşterinin hangi ülkede yaşadığını bilebilelim. Müşteri tablosuna ulke_id sütunu ekleyin ve bunu ülke tablosuna yabancı anahtar olarak tanımlayın.",
                            solution: "ALTER TABLE musteri\nADD ulke_id VARCHAR(10) REFERENCES ulke(id);",
                            hint: "ALTER TABLE ... ADD komutunu kullanın ve REFERENCES ile yabancı anahtar tanımlayın.",
                            variables: {}
                        },
                        {
                            id: "scenario-customer-3",
                            reference: "TABLE: musteri (id, ad, soyad, email, dogum, kullaniciadi, sifre, ulke_id)\nTABLE: ulke (id, ad, orijinalad)\n\nÖrnek Veriler:\nmusteri: (15, 'Melissa', 'Crawford', ..., 'UK')\nulke: ('UK', 'Ingiltere', 'England')",
                            task: "15 numaralı müşterinin adını, soyadını ve yaşadığı ülkenin orijinal adını sorgulayarak getirin.",
                            solution: "SELECT\n    m.ad,\n    m.soyad,\n    u.orijinalad\nFROM\n    musteri m\nJOIN\n    ulke u ON m.ulke_id = u.id\nWHERE\n    m.id = 15;",
                            hint: "JOIN kullanarak iki tabloyu birleştirin ve WHERE ile filtreleme yapın.",
                            variables: {}
                        }
                    ]
                },
                {
                    id: "scenario-company",
                    name: "Kurumsal Adres Defteri",
                    exercises: [
                        {
                            id: "scenario-company-1",
                            reference: "TABLE: musteri (id, ad, soyad, email, dogum, kullaniciadi, sifre, ulke_id)\nTABLE: ulke (id, ad, orijinalad)",
                            task: "Her bir müşterimizin çalıştığı firmanın adını, adresini, telefonunu ve faks numarasını saklamak için 'firma' tablosu oluşturun ve müşteri tablosunu bu firmayla ilişkilendirin.\n\nGerekli Alanlar:\n- firma: id (INT, PK), ad, adres, telefon, faks\n- musteri tablosuna firma_id eklenmeli",
                            solution: "CREATE TABLE firma (\n    id INT PRIMARY KEY,\n    ad VARCHAR(100),\n    adres VARCHAR(255),\n    telefon VARCHAR(20),\n    faks VARCHAR(20)\n);\n\nALTER TABLE musteri\nADD firma_id INT REFERENCES firma(id);",
                            hint: "Önce firma tablosunu oluşturun, sonra ALTER TABLE ile müşteri tablosuna yabancı anahtar ekleyin.",
                            variables: {}
                        },
                        {
                            id: "scenario-company-2",
                            reference: "TABLE: musteri (id, ad, soyad, ..., firma_id)\nTABLE: firma (id, ad, adres, telefon, faks)\n\nÖrnek Veriler:\nmusteri: (6, 'Cemal', 'Cinkilic', ..., 1)\nfirma: (1, 'Cozumevi', 'Kartal Istanbul', '02164671458', ...)",
                            task: "6 numaralı müşterinin adını, soyadını ve çalıştığı firmanın adı ile telefon numarasını sorgulayarak getirin.",
                            solution: "SELECT\n    m.ad,\n    m.soyad,\n    f.ad AS firma_adi,\n    f.telefon\nFROM\n    musteri m\nJOIN\n    firma f ON m.firma_id = f.id\nWHERE\n    m.id = 6;",
                            hint: "JOIN kullanarak müşteri ve firma tablolarını birleştirin.",
                            variables: {}
                        }
                    ]
                },
                {
                    id: "scenario-survey",
                    name: "Anket Sistemi",
                    exercises: [
                        {
                            id: "scenario-survey-1",
                            reference: "TABLE: musteri (id, ad, soyad, ...)",
                            task: "Siteye anket sistemi eklemek istiyoruz. Anket sorularını, her sorunun çeşitli cevap seçeneklerini ve hangi müşterinin hangi cevabı verdiğini saklayacak üç tablo oluşturun:\n\n1. anket_soru: id (INT, PK), soru (TEXT)\n2. anket_cevap: id (INT, PK), soru_id (FK), cevap (VARCHAR(255))\n3. anket_mcevap: id (INT, PK), musteri_id (FK), cevap_id (FK)",
                            solution: "CREATE TABLE anket_soru (\n    id INT PRIMARY KEY,\n    soru TEXT\n);\n\nCREATE TABLE anket_cevap (\n    id INT PRIMARY KEY,\n    soru_id INT REFERENCES anket_soru(id),\n    cevap VARCHAR(255)\n);\n\nCREATE TABLE anket_mcevap (\n    id INT PRIMARY KEY,\n    musteri_id INT REFERENCES musteri(id),\n    cevap_id INT REFERENCES anket_cevap(id)\n);",
                            hint: "Üç ayrı CREATE TABLE komutu yazın ve REFERENCES ile ilişkileri tanımlayın.",
                            variables: {}
                        },
                        {
                            id: "scenario-survey-2",
                            reference: "TABLE: anket_soru (id, soru)\nTABLE: anket_cevap (id, soru_id, cevap)\nTABLE: anket_mcevap (id, musteri_id, cevap_id)\n\nÖrnek Veriler:\nanket_soru: (2, 'Sitemizin hizindan memnun musunuz?')\nanket_cevap: (7, 2, 'Hayir')\nanket_mcevap: (4, 4, 7)",
                            task: "4 numaralı müşteri hangi soruya hangi cevabı vermiş? Sorgu yazın.",
                            solution: "SELECT\n    s.soru,\n    c.cevap\nFROM\n    anket_mcevap mc\nJOIN\n    anket_cevap c ON mc.cevap_id = c.id\nJOIN\n    anket_soru s ON c.soru_id = s.id\nWHERE\n    mc.musteri_id = 4;",
                            hint: "Üç tabloyu JOIN ile birleştirin: anket_mcevap -> anket_cevap -> anket_soru",
                            variables: {}
                        }
                    ]
                },
                {
                    id: "scenario-order",
                    name: "Sipariş Sistemi",
                    exercises: [
                        {
                            id: "scenario-order-1",
                            reference: "TABLE: musteri (id, ad, soyad, ...)\nTABLE: urun (id, ad, gorsel, grup_id)",
                            task: "Müşterilerden gelen siparişleri saklamak için iki tablo oluşturun:\n\n1. siparis_baslik: id (INT, PK), tarih (DATE), musteri_id (FK)\n2. siparis_kalem: id (INT, PK), siparis_id (FK), urun_id (FK), adet (INT)\n\nBir siparişte birden fazla ürün olabilir.",
                            solution: "CREATE TABLE siparis_baslik (\n    id INT PRIMARY KEY,\n    tarih DATE,\n    musteri_id INT REFERENCES musteri(id)\n);\n\nCREATE TABLE siparis_kalem (\n    id INT PRIMARY KEY,\n    siparis_id INT REFERENCES siparis_baslik(id),\n    urun_id INT REFERENCES urun(id),\n    adet INT\n);",
                            hint: "İki CREATE TABLE komutu yazın. siparis_kalem tablosu siparis_baslik tablosuna bağlanmalı.",
                            variables: {}
                        },
                        {
                            id: "scenario-order-2",
                            reference: "TABLE: siparis_baslik (id, tarih, musteri_id)\n\nÖrnek Veriler:\nsiparis_baslik: (2, '2005-01-01', 2), (3, '2005-01-03', 2), (8, '2005-01-15', 2)",
                            task: "2 numaralı müşteri kaç sipariş vermiş? COUNT fonksiyonu ile sayısını bulun.",
                            solution: "SELECT\n    COUNT(id) AS siparis_sayisi\nFROM\n    siparis_baslik\nWHERE\n    musteri_id = 2;",
                            hint: "COUNT aggregate fonksiyonunu kullanın ve WHERE ile filtreleme yapın.",
                            variables: {}
                        }
                    ]
                }
            ]
        }
    ]
};
