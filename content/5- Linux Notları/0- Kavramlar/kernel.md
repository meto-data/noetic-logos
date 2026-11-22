Kernel teknik olarak donanım ile yazılım arasındaki mutlak izolasyon katmanıdır.
## 1. Çekirdek Mimarisi ve Çalışma Modları

### 1.1. Monolitik Çekirdek

Linux çekirdeği **monolitik** bir mimari izler. Monolotik çekirdekte alt sistemler arasında erişim koruması yoktur; bir bileşen başka bir bileşenin tüm temel fonksiyonlarını doğrudan çağırabilir. Bu yapıda **Dosya Sistemi** (VFS), **Bellek Yönetimi** (MM), **Süreç Zamanlayıcı** (Scheduler), **Ağ Yığını** (Network Stack) ve **Donanım Sürücüleri** (Drivers) tek bir binary/ikili dosya (genellikle  `/boot/vmlinuz`) içinde derlenmiştir ve aynı adres alanında (kernel space) çalışır.

Tüm alt sistemler aynı bellek alanında olduğu için birbirleriyle iletişim kurarken karmaşık mesajlaşma protokollerine (IPC - Inter Process Communication) ihtiyaç duymazlar. Doğrudan fonksiyon çağrısı yaparlar ki bu da Linux'u microkernel mimarilere göre daha performanslı kılar. Ancak tüm alt sistemler **ring 0** yetkisiyle çalıştığı için tek bir sürücü hatası tüm sistemi çökertir (bkz. **[[kernel panic]]**).

### 1.2. Çalışma Halkaları ve Koruma

İşlemciler farklı yetki seviyeleri (ring 0-3) sağlar. Linux'ta çekirdek modu (ring 0), CPU üzerinde **en ayrıcalıklı** seviyedir; bu modda çalışan kod `I/O` portlarına ve tüm fiziksel belleğe erişebilir. **Kullanıcı modu** (ring 3) ise uygulamaların çalıştığı kısıtlı alandır ve donanıma erişim isteği için çekirdeği aracı yapmak zorundadır.


1. **[[Kernel Mode]] (Ring 0)**: İşlemcinin **CPL (Current Privilege Level)** değeri 0'dır. Bu modda çalışan kod, tüm bellek adreslerine (fiziksel ve sanal) ve tüm donanım portlarına (**I/O**) doğrudan komut gönderebilir. `HLT` (işlemciyi durdur) veya `LGDT` (Global Descriptor Table yükle) gibi kritik Assembly komutları sadece burada çalışır. Hata olursa sistem çöker ([[kernel panic]]).
2. **[[User Space]] (Ring 3)**: CPL değeri 3'tür. Bu alanadaki bir kod (chrome, bash, python betiği) donanım adreslerine doğrudan yazmaya çalışırsa CPU donanımsal bir **General Protection Fault** fırlatır ve çekirdek bu süreci anında öldürür (`SIGSEGV`). Bir diğer deyişle, uygulamalarının çalıştığı kısıtlı alandır burası. Donanıma erişemezler, erişmek için çekirdekten rica ederler.

Bu iki alan arasındaki iletişim **system calls** (sistem çağrıları) ile yapılır.

#### 1.3. Modülerlik
- Modern Linux çekirdeği monolitik olsa da modüler bir tasarım benimser. Birçok sürücü çekirdeğe modül olarak eklenebilir veya çıkarılabilir. Önyükleme sırasında `initramfs` yardımıyla gerekli modüller belleğe yüklenir ve gerçek kök dosya sistemi bağlandıktan sonra devreye girer (scheduler).

## 2. Memory Management (MM) ve Virtual Memory
- Sistemde 16 GB RAM olabilir ama 64-bit mimaride her süreç kendisine ait teorik olarak 128 TB büyüklüğünde kesintisiz bir bellek alanı olduğunu sanar. Bu soyutlama donanımdaki **Memory Management Unit** (MMU) ve çekirdek tarafından yönetilen sayfa tabloları (page table) ile sağlanır.
- **MMU (Memory Management Unit)**: İşlemci üzerindeki bu donanım birimi çevirmen görevi görür. Uygulama `0x00400000` (Sanal Adres) adresine veri yazdığında, MMU çekirdeğin **Page Table** (Sayfa Tablosu) haritasına bakar ve veriyi fiziksel RAM'deki `0x8F001000` adresine yönlendirir.

Bu izolasyon sayesinde A süreci, B sürecinin verisine asla erişemez ve `glibc` gibi kütüphaneler fiziksel RAM'de tek kopyayken tüm süreçlere sanal olarak dağıtılır.

### 2.1. Sayfalama (Paging) ve Page Fault

Fiziksel bellek tek parça değil, page (genellikle 4kb) adı verilen bloklar hâlindedir. Bir süreç bellek alanı içinde olmayan bir adrese
erişmeye çalıştığında sayfa hatası (**page fault**) oluşur. **Page Fault** bir hatadan ziyade verinin RAM'de bulunamaması durumunda işlemcinin kernel'i yardıma çağırmasıdır (interrupt).

2. **Minor (Soft) Page Fault**: Gerekli sayfa (veri) RAM'de olmasına rağmen sürecin haritasına işlenmemiştir. Disk okuması yapılmaz, kernel sadece bir gösterge (pointer) atar ve disk erişimi gerekmediği için çok hızlıdır.
3. **Major (Hard) Page Fault**: Gerekli veri RAM'de değil, swap alanında veya diskte bir dosyadadır.
	- İşlemci diskten veri okumak zorunda kalır. Bu sırada süreç **D State** (Uninterruptible Sleep) moduna girer. Sistem yavaşlığının (lag) ana sebebi genellikle budur.
	- **`sar -B 1 5`** komutu ile saniye başına major page fault (majflt/s) sayısı izlenebilir.

### 2.2. OOM Killer (Out of Memory Killer)

RAM ve ilgili bellek kaynakları (swap, cgroup/mempolicy limitleri vb.) tükendiğinde, çekirdek sistemin tamamen kilitlenmesini (deadlock) önlemek için OOM-killer mekanizmasını devreye sokar. 

Çekirdek ilkin gerçekten gerçekten bir **out-of-memory** durumu oluştuğunu teyit eder, ardından her süreç için bir **badness heuristic** hesaplanır. Bu hesap sürecin kullandığı RAM+swap miktarını o bağlamda sahip olduğu izin verilen bellek ile oranlar ve her sürece **0–1000 arası** bir `oom_score `üretir. Kabaca: tüm hakkını yediyse 1000, yarısını kullandıysa ~500. Root süreçlere de yaklaşık %3 tolerans tanınır. Son aşamada çekirdek en yüksek badness skoruna sahip süreci seçer ve `SIGKILL` sinyali göndererek süreci derhal sonlandırır. Amaç belleği en hızlı şekilde geri kazanmaktır.

Kullanıcı alanı bu karara `/proc/<PID>/oom_score_adj` üzerinden müdahale edebilir. Bu değer hesaplanan skora eklenir ve aralığı **–1000 ile +1000’dir**. **-1000** pratikte “*bu süreci OOM’dan muaf tut*” demektir; **+1000** ise “*ilk bunu öldür*” anlamına gelir. **0** ise varsayılandır, çekirdeğin doğal heuristiği aynen uygulanır.

Kritik servislerin (DB, init, altyapı) yanlışlıkla uçmaması için şöyle yapılır:

```bash
echo -1000 > /proc/<PID>/oom_score_adj
```


## 3. Sanal Dosya Sistemi (VFS - Virtual File System)
- Linux'ta **her şey bir dosyadır**. Uygulamalar diskin formatını bilmeden `open()`, `read()`, `write()` gibi çağrılar yapar. Çekirdek, bu çağrıları ilgili dosya sistemi sürücülerine çeviren **virtual file system** katmanını sağlar. VFS'nin omurgası üç temel C yapısında oluşur:

1. **Superblock**: Bir dosya sisteminin kimlik kartıdır ve boyut, blok sayısı gibi bilgileri tutar.
2. **Inode**: Dosya izinleri, sahiplik ve diskteki blok adresleri gibi üst verileri (metadata) barındıran yapıdır; **dosya adı inode içinde tutulmaz**.
3. **Dentry (Directory Entry)**: Dosya adlarını inode numaralarıyla eşleştirir ve bellek içinde önbelleğe alır; bu sayede dizin gezintisi hızlanır.

VFS, farklı dosya sistemlerini tek bir arayüzle sunar; örneğin sabit disk `/dev/sda` dosyasıdır. `ls -i` komutu inode numarasını, `stat` komutu ise tüm metadata bilgilerini gösterir.


## 4. Network Stack ve Netfilter
Linux'ta güvenlik duvarı (firewall) harici bir yazılım değil, Kernel'in ağ yığınına gömülmüş kancalardan (hooks) oluşan **Netfilter** çatısıdır. Netfilter ağ paketlerinin geçtiği beş "kanca" noktası tanımlar. Bu paketler kancalardan sırasıyla geçer. Bir paket ağ kartından (NIC) girdiğinde sırasıyla şu duraklardan geçer:

1. **PREROUTING**: Paket makineye ilk ulaştığında, hedef adresi belirlenmeden önce.
2. **INPUT**: Paket makineye geliyorsa, uygulamaya (örn: Nginx) teslimden hemen önce ve son kontrol noktası.
3. **FORWARD**: Paket makineye ait değilse ve başka bir ağa yönlendirilecekse (router modu).
4. **OUTPUT**: Makine kendi paketi oluşturduğunda, çıkmadan hemen önce.
5. **POSTROUTING**: Paket fiziksel ağa verilmeden hemen önce, NAT işlemleri burada yapılır.

`iptables` ve `nftables` komutları kullanıcı alanından bu kanca noktalarına kural yazan araçlardır; trafiği durduransa bizzat çekirdektir.



## 5. Sistem Çağrıları

**Kullanıcı uygulamaları ile çekirdek arasındaki tek iletişim yolu** sistem çağrılarıdır. Bir fonksiyon çağrısı gibi görünseler de gerçekte özel assembly talimatlarıdır. Uygulama, sistem çağrısının numarasını ve parametrelerini CPU yazmaçlarına yazar (x86 için `EAX`, `EBX` vb.) ve ardından bir **trap** talimatı ile kernel moduna geçişi tetikler. Bu geçiş sırasında şu adımlar gerçekleşir:

1. **Hazırlık**: Uygulama, sistem çağrısı numarasını ve parametreleri yazmaçlara yerleştirir.
2. **Tetikleme**: `syscall` (x86_64) veya `int 0x80` (32-bit) komutu ile tuzak oluşturulur; CPU, user stack'ten kernel stack'e geçer ve kullanıcı yığını ile geri dönüş adresini kernel stack'te saklar.
3. **Dispatcher**: Çekirdek, sistem çağrı tablosundan ilgili fonksiyonu bulur ve çalıştırır. Bu sırada yazmaçlar kernel stack'e kaydedilir.
4. **Dönüş**: İŞlem tamamlandığında kullanıcı yazmaçları geri yüklenir ve `sysret` veya `iret` talimatı ile tekrar kullanıcı moduna dönülür; uygulamaya çalışmaya devam eder.


### 5.1. Sistem Çağrısı Tablosu ve Parametre Doğrulaması
Her sistem çağrısı numarası, çekirdekteki bir fonksiyona haritalanır. Linux *x86_32* için `ia32_sys_call_table` dizisi kullaınlır ve `sys_read`, `sys_write` gibi fonksiyonlara bağlanır. Kullanıcıdan gelen parametreler yazmaçlarda taşındığından, çekirdek bu işaretçilerin kernel adres alanına ya da geçersiz bir alana işaret etmediğini kontrol eder. Aksi takdirde sayfa hatası ve uygun hata kodu döndürülür.


### 5.2. Süreç Yönetimi (`task_struct`)
- Linux'ta her süreç, işlem veya iş parçacığı çekirdek içinde `task_struct` isimli devasa bir C yapısı ile temsil edilir. Bu yapı yaklaşık 8 KB boyutundadır ve 155 alan içerir. `task_struct` adres alanı, açık dosyalar, sinyal işleyiciler, zamanlayıcı bilgileri gibi tüm kaynakları içerir. İş parçacıkları ve süreçler, bu yapının içindeki kaynak göstergelerini paylaştıkları veya kopyaladıkları için tanımlanır. Linux'ta threads ayrı veri yapılarıyla değil, `task_struct` üzerinden temsil edilir, böylece çekirdek scheduler yalnızca görevleri (`task`) planlar.
	- Çekirdek için Firefox bir pencere değil sadece bir `task_struct`, yani veri yığınıdır. **Her şey süreçten ibarettir**

## 6. Zamanlayıcı (Completely Fair Scheduler - CFS)
- Linux'un varsayılan scheduler'i **CFS** (Completely Fair Scheduler)'dir. 
	- CFS, hayali bir "ideal çoklu görevlendirme CPU" modelini temel alır ve her süreç için bir **sanal çalışma zamanı (`vruntime`)** değerini izler; bu değer sürecin adil olarak ne kadar CPU zamanı kullanması gerektiğini gösterir.
	- CFS her zaman **en küçük `vruntime`** değerine sahip görevi seçer zira bu görev diğerlerine göre daha az CPU zamanı kullanmıştır.
	- Tüm çalışan görevler, vruntime değerine göre sıralanan **kırmızı-siyah-ağaç** (red-black-tree) içinde tutulur. Çizelge, en soldaki (en düşük `vruntime`) düğümü seçer ve bu görevi çalıştırır. Görev çalıştırıldıktan sonra `vruntime` değeri arttıkça ağaçta sağa doğru kayar ve diğer görevlerin en sol düğüm hâline gelmesine olanak tanır.
	- Scheduler nanosaniye hassasiyetinde hesaplama yapar ve belirli bir `base_slice_ns` ayarı ile masaüstü (düşük gecikme) veya sunucu (yüksek işleme) amaçlı ayarlanabilir.


## 7. Önyükleme (Boot) Süreci
Güç düğmesine basıldığında Kernel şu aşamalardan geçer:
### 7.1. **BIOS/UEFI ve POST (Donanım Katmanı)**
- Anakart üzerindeki firmware çalışır ve POST (Power-On Self-Test) işlemini başlatır. CPU, RAM ve depolama birimlerinin elektriksel bütünlüğü test edilir.
- **UEFI Sistemler**: Firmware, anakartın **NVRAM** çipindeki önyükleme kayıtlarını okur ve **ESP** (EFI System Partition) bölümündeki `.efi` uzantılı bootloader dosyasını çalıştırır.
- **Legacy BIOS**: Firmware, diskin ilk 512 baytlık sektörünü (**MBR** - Master Boot Record) okur ve oradaki çalıştırılabilir kodu işlemciye yükler.
### 7.2. **Bootloader (GRUB Aşaması)**
- **GRUB** (Grand Unified Bootloader), dosya sistemini (EXT4/XFS) tanıyan minimal sürücülere sahiptir.
- `/boot/` dizinini okur, konfigürasyon dosyasını (`grub.cfg`) işler ve kullanıcıya menüyü sunar. 
- Seçilen kernel (`/boot/vmlinuz`) ve `initramfs` imajını diskten okuyup fiziksel belleğe (RAM) yükler.
- Kontrolü mutlak olarak çekirdeğe devrediyor.

### 7.3. **Çekirdek Başlatma (Kernel Initialization**)
- Belleğe yüklenen kernel (`vmlinuz`), sıkıştırılmış hâldedir (*bzip2/gzip*). Önce kendini açar (decompression) ve belleğe yerleşir.
- Donanım taraması yapar ve yerleşik (built-in) sürücüleri yükler.
- **Kritik Sorun**: Kernel çalışmaktadır ancak asıl diski (root filesystem) bağlamak (mount) için gereken disk sürücüleri (örn: NVMe veya RAID modülü) henüz yüklenmemiştir. Sürücü diskte, disk ise erişilemez durumdadır.

### 7.4. **`initramfs` (Initial RAM Filesystem)**
- Kernel, GRUB'un belleğe yüklediği `initramfs` dosyasını geçici bir kök dosya sistemi olarak bağlar.
	- Bu, bellekte çalışan sanal bir disktir. İçinde sadece diski (real boot) bağlamak için gerekli olan kritik modüller (block device drivers, filesystem drivers, lvm/luks tools) bulunur.
- Gerekli modüller yüklenir (`insmod`), asıl disk görünür hâle gelir.

### 7.5. **Real Boot Mount ve PID 1 (Systemd)**
- Kernel, geçici dosya sistemini (`initramfs`) bırakır ve asıl diski `/` (root) olarak salt okunur (read-only) modda bağlar.
- Dosya sistemi kontrol edilir (`fsck`).
- Kernel, kullanıcı alanına (user space) geçer ve `/sbin/init` (yani `systemd`) dosyasını çalıştırır. 
- **PID 1** hayata geçer, `fstab` dosyasını okuyup disklerş `rw` (read-write) moduna çeker ve servisleri (Network, UI, Login) başlatır.


Sürecin initramfs kısmını analiz etmek için şu komutla imajın içeriğine bakılabilir:

```bash
lsinitramfs /boot/initrd.img-$(uname -r) | less
```

İstediğin teknik derinlik ve format kurallarına uygun olarak, çekirdek seviyesindeki analiz araçlarının detaylandırılmış hali aşağıdadır.

---

## 8. Çekirdek Seviyesindeki Analiz Araçları
### 8.1. `strace`

Programların neden çöktüğünü veya takıldığını anlamak için kullanılan en güçlü **debugging** (hata ayıklama) aracıdır. Kaynak koduna ihtiyaç duymaz.

* **Köken:** **S**ystem **Trace** (and Signals).
* **Anlam:** Sistem Çağrısı İzleyicisi.
* **İşlev:** Bir sürecin çekirdek ile yaptığı tüm **System Call** (Sistem Çağrısı) trafiğini ve aldığı sinyalleri yakalar. Teknik olarak `ptrace` sistem çağrısını kullanarak hedef süreci manipüle eder.

Bir programın hangi dosyayı açamadığını (`openat`), ağa bağlanırken nerede zaman kaybettiğini (`connect`) veya bellek sızıntısı yapıp yapmadığını (`brk/mmap`) doğrudan sistem çağrıları üzerinden gösterir.

**Kritik Parametreler:**

* `-p [PID]`: Çalışan bir sürece (Process) çalışma zamanında kanca atar (attach).
* `-f`: Sürecin oluşturduğu alt süreçleri (child processes/threads) de izler.
* `-e trace=[call]`: Sadece belirli çağrıları izler (örn: `open`, `write`, `network`).
* `-c`: Çağrıların istatistiksel özetini (süre, adet, hata sayısı) raporlar.

**Örnek Kullanım:**

```bash
# Bir web sunucusunun (örn: Nginx master process) sadece ağ ile ilgili çağrılarını izle
sudo strace -p 1234 -e trace=network

# 'ls' komutunun çalışırken hangi yapılandırma dosyalarını okuduğunu gör
strace -e openat ls

```

### 8.2. `sysctl`

Linux çekirdeği, çalışma zamanında parametrelerinin değiştirilmesine izin verir. Bu parametreler diskte fiziksel bir dosya değil bellekteki çekirdek nesneleridir.

* **Köken:** **Sys**tem **C**on**t**ro**l**.
* **Anlam:** Sistem Kontrolü.
* **İşlev:** `/proc/sys/` dizini altında sanal dosya olarak sunulan çekirdek parametrelerini okur veya yazar.

Sistemi yeniden başlatmadan TCP/IP yığın ayarlarını değiştirmek, sanal bellek (Swap) davranışını yönetmek (`vm.swappiness`) veya güvenlik sıkılaştırmaları yapmak için kullanılır.

**Kritik Parametreler:**

* `-a`: Mevcut tüm çekirdek parametrelerini ve değerlerini listeler.
* `-w`: Bir parametreye anlık değer atar (**Write**).
* `-p`: `/etc/sysctl.conf` dosyasındaki ayarları yeniden yükler.

**Örnek Kullanım:**

```bash
# Kernel Panic durumunda sistemin 10 saniye sonra otomatik restart etmesini sağla
# (Sunucuların fiziksel müdahale olmadan ayağa kalkması için kritiktir)

# 1. Mevcut değeri oku
sysctl kernel.panic

# 2. Değeri 10 saniye olarak ayarla (Geçici - Reboot sonrası silinir)
sudo sysctl -w kernel.panic=10

# 3. Kalıcı hale getirmek için konfigürasyona yaz
echo "kernel.panic = 10" | sudo tee -a /etc/sysctl.conf

```

### 8.3. `lsblk`

Disk yönetimi ve dosya sistemi hiyerarşisini anlamak için `df` veya `fdisk` komutlarından daha modern ve okunaklı bir araçtır.

* **Köken:** **L**i**s**t **Bl**ock Devices.
* **Anlam:** Blok Cihazlarını Listele.
* **İşlev:** `sysfs` dosya sistemini okuyarak depolama aygıtları (Disk, Partition, LVM, RAID) arasındaki ilişkiyi ağaç yapısında görüntüler.

Bağlanmamış (unmounted) diskleri de gösterdiği için, sisteme yeni takılan bir diskin veya USB belleğin yolunu (`/dev/sdb` gibi) tespit etmekte kullanılır.

**Kritik Parametreler:**

* `-f`: Dosya sistemi türünü (EXT4, XFS, SWAP) ve **UUID** bilgisini gösterir.
* `-m`: Cihazın sahibi, grubu ve izin modlarını gösterir.
* `-t`: Topoloji bilgisini (blok boyutu, hizalama, I/O scheduler) gösterir.

**Örnek Kullanım:**

```bash
# Diskleri, dosya sistemi türleri ve UUID'leri ile birlikte ağaç yapısında gör
lsblk -f

```

### 8.4. `dmesg`

Sistem açılışında veya donanım takıldığında "neler olduğunu" anlamanın tek yolu çekirdeğin günlüğüne bakmaktır.

* **Köken:** **D**isplay **Mes**sa**g**e.
* **Anlam:** Çekirdek Mesajlarını Görüntüle.
* **İşlev:** **Kernel Ring Buffer** (Dairesel Bellek Tamponu) içeriğini ekrana basar. Bu tampon belleğin boyutu sabittir; yeni mesajlar geldikçe en eski mesajlar silinir.

Donanım arızaları (I/O errors), sürücü yükleme hataları, USB cihaz algılama durumları ve OOM Killer (Out of Memory) aktiviteleri buradan takip edilir.

**Kritik Parametreler:**

* `-w`: (**Follow/Wait**) `tail -f` mantığıyla çalışır. Yeni düşen çekirdek mesajlarını anlık olarak ekrana basar. (Örn: USB takıp çıkarırken izlemek için).
* `-H`: (**Human**) Çıktıyı renklendirir ve sayfalandırır (`less` gibi davranır).
* `-T`: (**Time**) Mesajların yanına sistem açılış süresini (uptime) değil, gerçek tarih ve saati basar.
* `-l [level]`: Sadece belirli seviyedeki mesajları filtreler (örn: `err`, `warn`, `crit`).

**Örnek Kullanım:**

```bash
# Sadece hata (error) ve üzeri kritiklikteki mesajları, okunabilir tarih formatında listele
dmesg -T -l err,crit,alert,emerg

# SATA veya SCSI disk ile ilgili mesajları filtrele
dmesg | grep -i sata

```