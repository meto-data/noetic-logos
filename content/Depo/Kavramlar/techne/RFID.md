---
tags:
  - bilgi/techne
created: 2026-10-05
---
**RFID (Radio Frequency Identification - Radyo Frekansı ile Tanımlama)**; nesnelerin, hayvanların veya insanların radyo dalgaları kullanılarak kablosuz ve temassız bir şekilde kimliğinin tanımlanmasını ve takip edilmesini sağlayan teknolojidir.

Barkod teknolojisinin gelişmiş hâli gibi düşünülebilir. Ancak barkodun aksine optik bir görüş hizasına ihtiyaç duymaz, cüzdanın veya kutunun içinden de okunabilir.

---

## Sistemin 3 Temel Bileşeni

### 1. **RFID Etiketi / Kartı (Tag):**
   * İçerisinde mikro ölçekte bir **çip** (bilgiyi saklar) ve bir **anten** (sinyal alıp verir) bulunur.
   * **Pasif Etiketler:** Kendi pili yoktur. Okuyucunun yaydığı radyo dalgalarından indüklenen enerjiyle anlık olarak uyanır ve kimlik bilgisini okuyucuya fısıldar *(Öğrenci kimlikleri, ESHOT/İstanbulkart, İzmirimkart, temassız banka kartları, mağazalardaki hırsızlık önleme alarmları...)*.
   * **Aktif Etiketler:** Kendi dâhili pili vardır. Daha güçlü sinyal yayar ve onlarca metre öteden okunabilir *(Otoyol HGS/OGS sistemleri, konteyner ve kargo takibi)*.
### 2. **RFID Okuyucu (Reader):**
   * Sürekli belirli bir frekansta radyo sinyali yayarak etrafındaki etiketleri "*uyandırır*", etiketteki veriyi çözer ve bağlı olduğu sisteme aktarır.
### 3. **Arka Plan Sistemi (Yazılım / Kontrolcü):**
   * Okuyucudan gelen kimlik numarasını (UID) veri tabanıyla eşleştirir ve karar verir *(Örnek: "Bu kart geçerli, turnike kilidini aç" veya "Bu ürünün parası ödendi, alarmı çalma")*.

---


```mermaid
flowchart TB
    %% ==========================================
    %% 1. MERKEZİ SİSTEM KATMANI
    %% ==========================================
    subgraph HostSystem["1. Karar ve Yönetim Katmanı (Host System)"]
        DB[("Merkezi Veritabanı\n- Kart UID Listesi\n- Geçiş Yetkileri\n- Bakiye Bilgisi")]
        Middleware["Uygulama Yazılımı / Middleware\n(Turnike Yazılımı, Geçiş Kontrol, ERP)"]
        Actuator["Fiziksel Eyleyici - Aktüatör\n(Turnike Rölesi, Manyetik Kilit, Buzzer)"]
        
        DB <--> Middleware
        Middleware -->|"Tetikleme / İzin Komutu"| Actuator
    end

    %% ==========================================
    %% 2. OKUYUCU KATMANI
    %% ==========================================
    subgraph Reader["2. RFID Okuyucu Donanımı (Interrogator)"]
        HostComm["Haberleşme Modülü\n(Wiegand / RS-485 / TCP-IP / USB)"]
        DSP["Mikrodenetleyici ve DSP\n- Protokol Çözücü: ISO 14443 / EPC Gen2\n- Çakışma Önleme: Anti-Collision"]
        Oscillator["RF Osilatör ve Güç Güçlendirici\n(Sürekli Taşıyıcı Sinyal Üretici)"]
        Demodulator["Demodülatör ve Filtre\n(Zayıf Kart Yanıtını Ayıklar)"]
        ReaderAntenna["Okuyucu Anteni\n(RF Alanı Yayıcı)"]

        HostComm <--> DSP
        DSP -->|"Modüle Edilmiş Komut"| Oscillator
        Oscillator --> ReaderAntenna
        ReaderAntenna --> Demodulator
        Demodulator -->|"Çözülmüş Ham Bitler"| DSP
    end

    %% ==========================================
    %% 3. HAVA ARAYÜZÜ (KABLOSUZ ALAN)
    %% ==========================================
    subgraph AirInterface["3. RF Hava Arayüzü"]
        Downlink["Taşıyıcı Dalga ve Enerji İletimi\n(Manyetik İndüksiyon / RF Işıma)"]
        Uplink["Geri Saçılma Modülasyonu - Backscatter\n(Kartın Yansıttığı Modüle Sinyal)"]
    end

    %% ==========================================
    %% 4. RFID KARTI / ETİKET
    %% ==========================================
    subgraph Tag["4. RFID Etiketi veya Kartı (Transponder)"]
        TagAntenna["Etiket Anteni\n(Bobin veya Baskı Devre Tel)"]
        PowerHarvesting["Güç Hasatlama Ünitesi\n(Diyot Doğrultucu ve Regülatör)"]
        ModulatorUnit["RF Modülatör\n(Empedans Değiştirici Transistör)"]
        LogicController["Mantık Kontrolcüsü\n(Durum Makinesi / FSM)"]
        MemoryBanks[("Kalıcı Bellek - EEPROM\n- TID: Donanımsal Fabrika Kimliği\n- EPC/UID: Kart Kimlik Numarası\n- User Memory: Kullanıcı Verisi")]

        TagAntenna -->|"İndüklenen AC Akım"| PowerHarvesting
        PowerHarvesting -->|"DC Çalışma Gerilimi"| LogicController
        TagAntenna <--> ModulatorUnit
        LogicController <--> MemoryBanks
        LogicController -->|"Yanıt Verisi Bitleri"| ModulatorUnit
    end

    %% ==========================================
    %% SİSTEMLER ARASI İLETİŞİM HATLARI
    %% ==========================================
    HostComm <===>|"Veri Paketi İletimi"| Middleware
    ReaderAntenna -.-> Downlink -.-> TagAntenna
    TagAntenna -.-> Uplink -.-> ReaderAntenna

    %% Stil Tanımlamaları
    classDef readerStyle fill:#e3f2fd,stroke:#1565c0,stroke-width:2px;
    classDef tagStyle fill:#fff3e0,stroke:#e65100,stroke-width:2px;
    classDef hostStyle fill:#f3e5f5,stroke:#6a1b9a,stroke-width:2px;
    classDef airStyle fill:#f1f8e9,stroke:#33691e,stroke-width:1px,stroke-dasharray: 4 4;

    class HostSystem,DB,Middleware,Actuator hostStyle;
    class Reader,HostComm,DSP,Oscillator,Demodulator,ReaderAntenna readerStyle;
    class Tag,TagAntenna,PowerHarvesting,ModulatorUnit,LogicController,MemoryBanks tagStyle;
    class AirInterface,Downlink,Uplink airStyle;
```
