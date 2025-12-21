# PRD: Noetic Logos - "Deep Sea: Reality" ve "Void: Reality" Entegrasyonu

Bu döküman, mevcut Noetic Logos web arayüzüne (Quartz v4.5.1 tabanlı 3 kolonlu yapı) iki adet "Premium" tema eklemek için hazırlanmıştır. Hedef, statik bir web sitesini interaktif bir deneyime dönüştürmektir.

## 1. Proje Genel Bakış
Kullanıcının mevcut sitesi (ekran görüntüsü referanslı), sol sidebar, orta içerik alanı ve sağ TOC/Grafik panelinden oluşan modern bir dokümantasyon sitesidir. Bu yapı korunarak, arka plana **HTML5 Canvas** tabanlı, fizik motorlu ve etkileşimli iki yeni tema eklenecektir.

## 2. Mevcut Yapı Analizi (Görsel Referans)
- **Sol Panel (Sidebar):** Logo, Arama, Gezgin (Navigation) ve Tema Seçici.
- **Orta Panel (Main):** İçerik, makaleler, breadcrumb.
- **Sağ Panel (Aside):** Grafik görünümü, İçindekiler (TOC).
- **Teknoloji:** Tailwind CSS, Vanilla JS, Google Fonts (Inter/Merriweather).

---

## 3. Tema 1: "Deep Sea: Reality"
Bu tema, kullanıcıyı okyanusun derinliklerinde hissettirmelidir. İçerik panelleri şeffaflaşarak arka plandaki canlı yaşamı görünür kılmalıdır.

### 3.1. Renk Paleti (CSS Variables)
```css
[data-theme='deep-sea'] {
    --bg-main: #010c15;       /* Derin okyanus mavisi */
    --bg-side: #000810;       /* Daha koyu yan paneller */
    --bg-surface: #051a2c;    /* Kartlar ve yüzeyler */
    --text-main: #8ab4d6;     /* Soluk mavi metin */
    --text-muted: #4e6e8e;    /* Muted metin */
    --primary: #00d2ff;       /* Parlak siyan vurgu */
    --primary-hover: #0099cc;
    --border: #051a2c;
    --scrollbar: #0a2d46;
}
```

### 3.2. Görsel Efektler ve Animasyonlar
- **Balinalar (Whales):** Arka planda süzülen, kuyruk animasyonlu dev kambur balinalar.
- **Denizanaları (Jellyfish):** Nabız gibi atan (pulsating) ve dokunaçları dalgalanan denizanaları.
- **Balık Sürüleri (Fish Schools):** Akıntıya karşı yüzen küçük balık grupları.
- **Baloncuklar (Bubbles):** Aşağıdan yukarıya süzülen hava kabarcıkları (Miktar: 100+).
- **Caustic Light:** Mouse imlecini takip eden, zemine vuran ışık kırılması efekti.

### 3.3. Teknik Kurallar (Layering)
- **Canvas Z-Index:** `1` (En arkada).
- **Main Alanı:** `background: transparent !important;` (İçerik okurken arkadaki canlılar görünmeli).
- **Sidebar/Aside:** `background: var(--bg-side);` (Opak kalmalı, menüler karışmamalı).

---

## 4. Tema 2: "Void: Reality"
Bu tema, uzayın derinliklerinde bir hiçlik ve karadelik simülasyonudur. Kullanıcı boş bir alana basılı tutarak (Long Press) bir karadelik oluşturabilmelidir.

### 4.1. Renk Paleti (CSS Variables)
```css
[data-theme='void'] {
    --bg-main: #000000;       /* Saf Siyah */
    --bg-side: #000000;       /* Saf Siyah */
    --bg-surface: #080808;    /* Çok koyu gri */
    --text-main: #e5e5e7;     /* Zinc-200 (Mat Beyaz) */
    --text-muted: #71717a;    /* Zinc-500 */
    --primary: #ffffff;       /* Saf Beyaz Vurgu */
    --primary-hover: #cccccc;
    --border: #1a1a1a;
    --scrollbar: #111111;
}
```

### 4.2. Karadelik Mekaniği (The Black Hole)
- **Tetikleyici:** SADECE boş alana (`body`) sol tık basılı tutma (5 saniye).
- **Koruma:** Yazı, buton, link, sidebar veya interaktif öğelere tıklanınca tetiklenmemeli.
- **Fazlar:**
  1.  **Charging (Şarj):** Dönen akresyon diski (turuncu/mor), foton halkası, titreme efekti.
  2.  **Exploded (Yutma):** 5 saniye dolunca otomatik patlama. Ekran kararır, karadelik her şeyi yutar.
  3.  **Regurgitating (Kusma):** 5.5 saniye sonra elementler "regurgitate" animasyonu ile geri gelir.

### 4.3. Görsel Efektler
- **Yıldızlar:** Arka planda parallax efektli kayan yıldızlar.
- **Partiküller:** Karadelik aktifken merkeze doğru spiral çizerek çekilen mor parçacıklar.
- **Yutma Animasyonu:** `transform: scale(0) rotate(720deg)` ile elemanların merkeze çekilmesi.
- **Kusma Animasyonu:** Bulanık, parlak ve dönerek geri gelme (`cubic-bezier` ile).

### 4.4. Teknik Kurallar (Layering)
- **Canvas Z-Index:** `50` (İçeriğin ÜSTÜNDE olmalı, efektler yazıları kapatabilmeli).
- **Pointer Events:** `pointer-events: none` (Tıklamalar alttaki içeriğe geçmeli).
- **User Select:** Karadelik şarj olurken `user-select: none` (Yazı seçimi engellenmeli).

---

## 5. Uygulama Kodları (TAM VE EKSİKSİZ)

Aşağıdaki kodlar, projenin `index.html` dosyasına entegre edilmesi gereken kodların **tamamıdır**.

### 5.1. CSS (Style Bloğu)
Bu CSS kodları `<head>` içindeki `<style>` etiketine eklenmelidir.

```css
:root {
    --bg-main: #010c15; --bg-side: #000810; --bg-surface: #051a2c; --text-main: #8ab4d6; --text-muted: #4e6e8e; --primary: #00d2ff; --primary-hover: #0099cc; --border: #051a2c; --scrollbar: #0a2d46;
}

[data-theme='deep-sea'] {
    --bg-main: #010c15; --bg-side: #000810; --bg-surface: #051a2c; --text-main: #8ab4d6; --text-muted: #4e6e8e; --primary: #00d2ff; --primary-hover: #0099cc; --border: #051a2c; --scrollbar: #0a2d46;
}

[data-theme='void'] {
    --bg-main: #000000; --bg-side: #000000; --bg-surface: #080808; --text-main: #e5e5e7; --text-muted: #71717a; --primary: #ffffff; --primary-hover: #cccccc; --border: #1a1a1a; --scrollbar: #111111;
}

/* Essential Overlays */
#theme-canvas {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 1; /* Default - arka planda */
}

/* Void tema için canvas ÖNDE (efektler görünsün) */
[data-theme='void'] #theme-canvas {
    z-index: 50;
}

/* Deep Sea için canvas ARKADA (panellerin arkasında) */
[data-theme='deep-sea'] #theme-canvas {
    z-index: 1;
}

/* Void aktifken yazı seçimini engelle */
body.void-active {
    user-select: none;
    -webkit-user-select: none;
    cursor: crosshair;
}

.theme-overlay-top {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 100;
}

/* Deep Sea: Background only, UI stays clean */
[data-theme='deep-sea'] main, [data-theme='deep-sea'] aside {
    filter: none;
}

/* Deep Sea: Main alanının arka planını şeffaf yap, efektler görünsün */
[data-theme='deep-sea'] main {
    background: transparent !important;
}

/* Deep Sea: Sidebar'lar opak kalsın (efektler görünmesin) */
[data-theme='deep-sea'] aside {
    background: var(--bg-side) !important;
}

/* Void Distortion - Devoured by black hole - merkeze doğru çekilme */
.void-devoured {
    transform: scale(0) rotate(720deg) translate(var(--void-x, 0), var(--void-y, 0)) !important;
    opacity: 0 !important;
    filter: blur(15px) brightness(2) !important;
    transition: all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
    pointer-events: none !important;
}

/* Void Singularity UI - No shadow, just singularity glow */
[data-theme='void'] .theme-overlay-top {
    display: none;
}

/* Void Regurgitated - Karadelik geri kusuyor - merkezden fırlatma */
.void-regurgitated {
    animation: regurgitate 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important;
}

@keyframes regurgitate {
    0% {
        transform: scale(0) rotate(-720deg);
        opacity: 0;
        filter: blur(20px) brightness(3) hue-rotate(180deg);
    }
    30% {
        transform: scale(1.5) rotate(-180deg);
        opacity: 0.5;
        filter: blur(8px) brightness(2) hue-rotate(120deg);
    }
    60% {
        transform: scale(0.8) rotate(-30deg);
        opacity: 0.9;
        filter: blur(2px) brightness(1.2) hue-rotate(30deg);
    }
    100% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
        filter: blur(0) brightness(1) hue-rotate(0deg);
    }
}

/* Void Devoured State - Final */
[data-theme='void'] .void-devoured {
    transform: scale(0) rotate(720deg) !important;
    transform-origin: center center;
    opacity: 0 !important;
    transition: all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
    pointer-events: none !important;
}

/* Shared Styles */
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background-color: var(--scrollbar); border-radius: 20px; }
.tree-line { position: absolute; left: 6px; top: 0; bottom: 0; width: 1px; background-color: var(--border); }
.theme-dot { width: 100%; aspect-ratio: 1; border-radius: 9999px; border: 2px solid transparent; transition: all 0.2s; cursor: pointer; position: relative; }
.theme-dot.active { border-color: var(--primary); box-shadow: 0 0 0 2px var(--bg-side), 0 0 0 4px var(--primary); }
.theme-group-title { font-size: 0.65rem; font-weight: 800; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.5rem; margin-top: 1rem; text-transform: uppercase; }
```

### 5.2. JavaScript (Tam Kod)
Bu kod `</body>` etiketinden hemen önce `<script>` etiketi içinde yer almalıdır.

```javascript
function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
    
    // Handle tailwind dark mode class
    const isDark = true; // Both Deep Sea and Void are dark
    
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Update active dot
    document.querySelectorAll('.theme-dot').forEach(dot => {
        dot.classList.toggle('active', dot.getAttribute('onclick').includes(`'${themeName}'`));
    });

    // Re-init canvas if needed
    if (window.initThemeCanvas) window.initThemeCanvas(themeName);
}

// Initialize theme - Default to Deep Sea for visibility
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme') || 'deep-sea';
    setTheme(savedTheme);
    initThemeCanvas();
});

function initThemeCanvas() {
    const canvas = document.getElementById('theme-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [], whales = [], bubbles = [], jellyfish = [], fish = [];
    let mouse = { x: 0, y: 0 };
    
    // VOID BLACK HOLE SYSTEM
    window.voidHole = {
        active: false,
        x: 0,
        y: 0,
        startTime: 0,
        size: 0,
        maxSize: 150, // Daha küçük
        maxTime: 5000, // 5 saniye max
        phase: 'idle', // idle, charging, exploded, regurgitating
        devouredElements: [],
        regurgitateTime: 0,
        particlesConsumed: false
    };

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Mouse tracking
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        if (window.voidHole.phase === 'charging') {
            window.voidHole.x = e.clientX;
            window.voidHole.y = e.clientY;
        }
    });

    // VOID: Mouse HOLD to create black hole - SADECE BOŞ YERE TIKLANINCA
    document.addEventListener('mousedown', (e) => {
        if (document.documentElement.getAttribute('data-theme') !== 'void') return;
        if (e.button !== 0) return;
        if (window.voidHole.phase !== 'idle') return; 
        
        // Yazı, buton, link vb. tıklanırsa karadelik açma
        const clickedElement = e.target;
        const tagName = clickedElement.tagName.toLowerCase();
        const interactiveTags = ['a', 'button', 'input', 'textarea', 'select', 'label', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'span', 'img', 'svg', 'path'];
        
        // Eğer tıklanan element interaktif bir tag ise veya içinde metin varsa, karadelik açma
        if (interactiveTags.includes(tagName)) return;
        if (clickedElement.closest('.theme-dot, .sidebar button, aside button')) return;
        if (clickedElement.textContent && clickedElement.textContent.trim().length > 0 && clickedElement.children.length === 0) return;
        
        document.body.classList.add('void-active'); // Yazı seçimini engelle
        
        window.voidHole.active = true;
        window.voidHole.x = e.clientX;
        window.voidHole.y = e.clientY;
        window.voidHole.startTime = Date.now();
        window.voidHole.size = 0;
        window.voidHole.phase = 'charging';
        window.voidHole.devouredElements = [];
        window.voidHole.particlesConsumed = false;
        
        // Partiküllerin orijinal pozisyonlarını kaydet
        particles.forEach(p => {
            p.originalX = p.x;
            p.originalY = p.y;
            p.consumed = false;
        });
    });

    document.addEventListener('mouseup', (e) => {
        document.body.classList.remove('void-active');
        if (window.voidHole.phase !== 'charging') return;
        
        // 5 saniyeden az basıldıysa İPTAL - hiçbir şey yapma
        const elapsed = Date.now() - window.voidHole.startTime;
        if (elapsed < window.voidHole.maxTime) {
            // İptal - karadelik kaybolsun
            window.voidHole.phase = 'idle';
            window.voidHole.active = false;
            window.voidHole.size = 0;
            return;
        }
        // 5 saniye dolduysa zaten auto-explode tetiklendi
    });

    function triggerVoidExplosion() {
        window.voidHole.phase = 'exploded';
        window.voidHole.particlesConsumed = true;
        
        const holeX = window.voidHole.x;
        const holeY = window.voidHole.y;
        const radius = window.voidHole.size;
        
        // Find all elements within radius and DEVOUR them
        const allElements = document.querySelectorAll('p, h1, h2, h3, a, li, span:not(.no-void), div.group');
        allElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const elX = rect.left + rect.width / 2;
            const elY = rect.top + rect.height / 2;
            const dist = Math.sqrt((elX - holeX)**2 + (elY - holeY)**2);
            
            if (dist < radius && !el.classList.contains('void-devoured')) {
                el.classList.add('void-devoured');
                el.style.setProperty('--void-x', `${holeX}px`);
                el.style.setProperty('--void-y', `${holeY}px`);
                window.voidHole.devouredElements.push({el, origX: elX, origY: elY});
            }
        });
        
        // 5-6 saniye sonra geri kus
        window.voidHole.regurgitateTime = Date.now() + 5500;
    }

    // Regurgitate - karadelik geri kusuyor
    function checkRegurgitate() {
        const vh = window.voidHole;
        if (vh.phase === 'exploded' && Date.now() > vh.regurgitateTime && vh.regurgitateTime > 0) {
            vh.phase = 'regurgitating';
            vh.regurgitateTime = 0;
            
            // Elemanları geri getir - karadelik kusuyor efekti
            vh.devouredElements.forEach((item, i) => {
                setTimeout(() => {
                    item.el.classList.remove('void-devoured');
                    item.el.classList.add('void-regurgitated');
                    setTimeout(() => item.el.classList.remove('void-regurgitated'), 1500);
                }, i * 150);
            });
            
            // Partikülleri geri gönder
            particles.forEach(p => {
                p.returning = true;
            });
            
            // 2 saniye sonra idle'a dön
            setTimeout(() => {
                vh.phase = 'idle';
                vh.active = false;
                vh.size = 0;
                vh.devouredElements = [];
                particles.forEach(p => {
                    p.returning = false;
                    p.consumed = false;
                });
            }, 2500);
        }
    }

    class Particle {
        constructor() { 
            this.reset(); 
            this.originalX = this.x;
            this.originalY = this.y;
            this.consumed = false;
            this.returning = false;
        }
        reset() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.size = Math.random() * 2.5 + 0.5;
            this.alpha = Math.random() * 0.5 + 0.2;
            this.originalX = this.x;
            this.originalY = this.y;
        }
        update() {
            const theme = document.documentElement.getAttribute('data-theme');
            if (theme !== 'void') return;
            
            const vh = window.voidHole;
            
            if (vh.phase === 'charging') {
                // Partiküller karadeliğe çekiliyor - TOPLANIYORLAR
                const dx = vh.x - this.x;
                const dy = vh.y - this.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                const elapsed = Date.now() - vh.startTime;
                const power = Math.min(elapsed / vh.maxTime, 1);
                const pullRadius = 150 + power * 350;
                
                if (dist < pullRadius && dist > 3) {
                    // Güçlü çekim - spiral hareket
                    const gravity = (power * 1.5) / Math.max(dist * 0.008, 0.1);
                    this.vx += (dx / dist) * gravity;
                    this.vy += (dy / dist) * gravity;
                    
                    // Spiral
                    this.vx += (dy / dist) * power * 0.3;
                    this.vy -= (dx / dist) * power * 0.3;
                    
                    // Parlaklık artışı
                    if (dist < 80) {
                        this.alpha = Math.min(1, this.alpha + 0.03);
                        this.size = Math.min(5, this.size + 0.02);
                    }
                } else if (dist <= 3) {
                    // Yutuldu - merkeze yapış
                    this.x = vh.x + (Math.random() - 0.5) * 5;
                    this.y = vh.y + (Math.random() - 0.5) * 5;
                    this.vx = 0;
                    this.vy = 0;
                    this.consumed = true;
                }
                
                // Hız limiti
                const speed = Math.sqrt(this.vx*this.vx + this.vy*this.vy);
                if (speed > 12) {
                    this.vx = (this.vx / speed) * 12;
                    this.vy = (this.vy / speed) * 12;
                }
            } else if (vh.phase === 'exploded' && !this.returning) {
                // Yutulmuş partiküller merkezde kalıyor
                if (this.consumed) {
                    this.x = vh.x + (Math.random() - 0.5) * 10;
                    this.y = vh.y + (Math.random() - 0.5) * 10;
                    this.alpha = 0.1;
                }
            } else if (this.returning) {
                // Partiküller orijinal yerlerine dönüyor - KUSMA
                const dx = this.originalX - this.x;
                const dy = this.originalY - this.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if (dist > 5) {
                    this.vx += dx * 0.02;
                    this.vy += dy * 0.02;
                    this.vx *= 0.95;
                    this.vy *= 0.95;
                    this.alpha = Math.min(0.7, this.alpha + 0.02);
                    this.size = this.size * 0.98 + 1.5 * 0.02;
                } else {
                    this.x = this.originalX;
                    this.y = this.originalY;
                    this.vx = (Math.random() - 0.5) * 0.3;
                    this.vy = (Math.random() - 0.5) * 0.3;
                }
            } else {
                // IDLE - hafif yüzme
                this.vx += (Math.random() - 0.5) * 0.01;
                this.vy += (Math.random() - 0.5) * 0.01;
                this.vx *= 0.99;
                this.vy *= 0.99;
                this.alpha = this.alpha * 0.98 + 0.35 * 0.02;
                this.size = this.size * 0.98 + 1.5 * 0.02;
            }
            
            this.x += this.vx;
            this.y += this.vy;
            
            // Ekran sınırları
            if (this.x < -30) this.x = w + 30;
            if (this.x > w + 30) this.x = -30;
            if (this.y < -30) this.y = h + 30;
            if (this.y > h + 30) this.y = -30;
        }
        draw() {
            const theme = document.documentElement.getAttribute('data-theme');
            if (theme !== 'void') return;
            
            ctx.shadowBlur = 12;
            ctx.shadowColor = 'rgba(150, 100, 255, 0.7)';
            ctx.fillStyle = `rgba(180, 140, 255, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    class Bubble {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * w;
            this.y = h + 10;
            this.vy = -(Math.random() * 1 + 0.5);
            this.size = Math.random() * 4 + 1;
            this.alpha = Math.random() * 0.3;
            this.ox = this.x;
        }
        update() {
            this.y += this.vy;
            this.x = this.ox + Math.sin(this.y / 20) * 10;
            if (this.y < -10) this.reset();
        }
        draw() {
            ctx.strokeStyle = `rgba(0, 210, 255, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.stroke();
        }
    }

    class Whale {
        constructor() { this.reset(); }
        reset() {
            this.dir = Math.random() > 0.5 ? 1 : -1;
            this.x = this.dir === 1 ? -600 : w + 600;
            this.y = Math.random() * h * 0.4 + h * 0.3;
            this.v = Math.random() * 0.2 + 0.1;
            this.phase = 0;
            this.scale = Math.random() * 0.3 + 0.7;
        }
        update() {
            this.x += this.v * this.dir;
            this.phase += 0.015;
            if ((this.dir === 1 && this.x > w + 600) || (this.dir === -1 && this.x < -600)) this.reset();
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.scale(this.dir * this.scale, this.scale);
            
            const tailWave = Math.sin(this.phase) * 15;
            
            // Glow around whale
            ctx.shadowBlur = 30;
            ctx.shadowColor = 'rgba(0, 180, 255, 0.3)';
            
            // Main body - humpback whale shape
            ctx.fillStyle = 'rgba(40, 80, 120, 0.15)';
            ctx.beginPath();
            ctx.moveTo(200, 0); // Nose
            ctx.bezierCurveTo(220, -30, 200, -50, 150, -55); // Forehead
            ctx.bezierCurveTo(80, -65, 0, -60, -80, -50); // Back
            ctx.bezierCurveTo(-150, -40, -200, -25, -230, 0 + tailWave); // Tail base
            ctx.bezierCurveTo(-250, -10 + tailWave, -290, -50 + tailWave, -320, -40 + tailWave); // Upper tail
            ctx.lineTo(-280, 0 + tailWave); // Tail notch
            ctx.lineTo(-320, 40 + tailWave); // Lower tail
            ctx.bezierCurveTo(-290, 50 + tailWave, -250, 10 + tailWave, -230, 0 + tailWave);
            ctx.bezierCurveTo(-200, 25, -150, 45, -80, 50); // Belly
            ctx.bezierCurveTo(0, 55, 80, 50, 150, 40);
            ctx.bezierCurveTo(190, 30, 210, 15, 200, 0);
            ctx.closePath();
            ctx.fill();
            
            // Belly grooves
            ctx.strokeStyle = 'rgba(60, 100, 140, 0.1)';
            ctx.lineWidth = 1;
            for (let i = 0; i < 12; i++) {
                ctx.beginPath();
                ctx.moveTo(180 - i * 20, 10 + i * 2);
                ctx.quadraticCurveTo(100 - i * 15, 40 + i, 20 - i * 10, 35);
                ctx.stroke();
            }
            
            // Dorsal fin
            ctx.fillStyle = 'rgba(30, 70, 110, 0.12)';
            ctx.beginPath();
            ctx.moveTo(-60, -50);
            ctx.quadraticCurveTo(-40, -90, -10, -80);
            ctx.quadraticCurveTo(10, -65, 20, -55);
            ctx.closePath();
            ctx.fill();
            
            // Pectoral fin (long, like humpback)
            ctx.fillStyle = 'rgba(35, 75, 115, 0.1)';
            ctx.beginPath();
            ctx.moveTo(60, 30);
            ctx.bezierCurveTo(40, 80, -20, 120, -60, 100);
            ctx.bezierCurveTo(-20, 90, 30, 60, 60, 40);
            ctx.closePath();
            ctx.fill();
            
            // Eye
            ctx.fillStyle = 'rgba(100, 180, 220, 0.3)';
            ctx.beginPath();
            ctx.ellipse(160, -20, 6, 4, 0, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.shadowBlur = 0;
            ctx.restore();
        }
    }

    class Jellyfish {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * w;
            this.y = h + 50;
            this.vy = -(Math.random() * 0.3 + 0.1);
            this.phase = Math.random() * Math.PI * 2;
            this.size = Math.random() * 20 + 15;
            this.alpha = Math.random() * 0.3 + 0.1;
        }
        update() {
            this.y += this.vy;
            this.x += Math.sin(this.phase + this.y / 50) * 0.5;
            this.phase += 0.02;
            if (this.y < -100) this.reset();
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            
            const pulse = Math.sin(this.phase * 2) * 0.2 + 0.8;
            
            // Bell (dome)
            ctx.fillStyle = `rgba(200, 100, 255, ${this.alpha})`;
            ctx.shadowBlur = 20;
            ctx.shadowColor = 'rgba(200, 100, 255, 0.5)';
            ctx.beginPath();
            ctx.ellipse(0, 0, this.size * pulse, this.size * 0.6 * pulse, 0, Math.PI, 0);
            ctx.fill();
            
            // Tentacles
            ctx.strokeStyle = `rgba(180, 80, 220, ${this.alpha * 0.7})`;
            ctx.lineWidth = 1;
            for (let i = 0; i < 8; i++) {
                const tx = (i - 3.5) * (this.size / 4);
                ctx.beginPath();
                ctx.moveTo(tx, 0);
                const wave = Math.sin(this.phase + i) * 10;
                ctx.bezierCurveTo(tx + wave, 30, tx - wave, 60, tx + wave * 0.5, 90);
                ctx.stroke();
            }
            
            ctx.shadowBlur = 0;
            ctx.restore();
        }
    }

    class Fish {
        constructor() { this.reset(); }
        reset() {
            this.dir = Math.random() > 0.5 ? 1 : -1;
            this.x = this.dir === 1 ? -30 : w + 30;
            this.y = Math.random() * h;
            this.vx = (Math.random() * 1 + 0.5) * this.dir;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 8 + 4;
            this.phase = Math.random() * Math.PI * 2;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy + Math.sin(this.phase) * 0.3;
            this.phase += 0.1;
            if (this.x < -50 || this.x > w + 50) this.reset();
            if (this.y < 0 || this.y > h) this.vy *= -1;
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.scale(this.dir, 1);
            
            // Body
            ctx.fillStyle = 'rgba(100, 200, 255, 0.2)';
            ctx.beginPath();
            ctx.moveTo(this.size, 0);
            ctx.quadraticCurveTo(0, -this.size/2, -this.size, 0);
            ctx.quadraticCurveTo(0, this.size/2, this.size, 0);
            ctx.fill();
            
            // Tail
            const tailWave = Math.sin(this.phase * 3) * 2;
            ctx.beginPath();
            ctx.moveTo(-this.size, 0);
            ctx.lineTo(-this.size * 1.5, -this.size/3 + tailWave);
            ctx.lineTo(-this.size * 1.5, this.size/3 + tailWave);
            ctx.closePath();
            ctx.fill();
            
            ctx.restore();
        }
    }

    for(let i=0; i<300; i++) particles.push(new Particle());
    for(let i=0; i<100; i++) bubbles.push(new Bubble());
    for(let i=0; i<5; i++) jellyfish.push(new Jellyfish());
    for(let i=0; i<40; i++) fish.push(new Fish());
    whales.push(new Whale());
    whales.push(new Whale());

    function animate() {
        ctx.clearRect(0, 0, w, h);
        const theme = document.documentElement.getAttribute('data-theme');

        if (theme === 'deep-sea') {
            whales.forEach(wh => { wh.update(); wh.draw(); });
            jellyfish.forEach(jf => { jf.update(); jf.draw(); });
            fish.forEach(f => { f.update(); f.draw(); });
            bubbles.forEach(b => { b.update(); b.draw(); });
            
            const causticGrad = ctx.createRadialGradient(mouse.x || w/2, h, 0, mouse.x || w/2, h, 400);
            causticGrad.addColorStop(0, 'rgba(0, 210, 255, 0.05)');
            causticGrad.addColorStop(1, 'transparent');
            ctx.fillStyle = causticGrad;
            ctx.fillRect(0, h - 200, w, 200);
        }

        if (theme === 'void') {
            checkRegurgitate();
            
            if (!window._voidStars) {
                window._voidStars = [];
                for (let i = 0; i < 150; i++) {
                    window._voidStars.push({
                        x: Math.random() * w,
                        y: Math.random() * h,
                        s: Math.random() * 1.5,
                        a: Math.random() * 0.4 + 0.1
                    });
                }
            }
            window._voidStars.forEach(star => {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.a + Math.sin(Date.now() / 1000 + star.x) * 0.15})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.s, 0, Math.PI * 2);
                ctx.fill();
            });
            
            const vh = window.voidHole;
            
            // BLACK HOLE - CHARGING
            if (vh.phase === 'charging') {
                const elapsed = Date.now() - vh.startTime;
                const power = Math.min(elapsed / vh.maxTime, 1);
                vh.size = 15 + power * vh.maxSize;
                
                const shake = power > 0.8 ? (Math.random() - 0.5) * 5 : 0;
                const hx = vh.x + shake;
                const hy = vh.y + shake;
                const holeSize = vh.size;
                
                if (elapsed >= vh.maxTime) {
                    triggerVoidExplosion();
                }
                
                // 1. SINGULARITY CORE
                const coreGrad = ctx.createRadialGradient(hx, hy, 0, hx, hy, holeSize * 0.6);
                coreGrad.addColorStop(0, 'rgba(0, 0, 0, 1)');
                coreGrad.addColorStop(0.5, 'rgba(20, 0, 40, 1)');
                coreGrad.addColorStop(1, 'rgba(50, 0, 80, 0.8)');
                ctx.fillStyle = coreGrad;
                ctx.beginPath();
                ctx.arc(hx, hy, holeSize * 0.6, 0, Math.PI * 2);
                ctx.fill();

                // 2. PHOTON RING
                ctx.shadowBlur = 20 + power * 50;
                ctx.shadowColor = `rgba(200, 150, 255, ${0.5 + power * 0.5})`;
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.8 + Math.random() * 0.2})`;
                ctx.lineWidth = 2 + power * 3;
                ctx.beginPath();
                ctx.arc(hx, hy, holeSize * 0.65, 0, Math.PI * 2);
                ctx.stroke();
                ctx.shadowBlur = 0;

                // 3. ACCRETION DISK
                for (let i = 0; i < 3; i++) {
                    const diskSize = holeSize + 10 + i * 20;
                    const rotation = Date.now() / (400 - i * 50) * (i % 2 === 0 ? 1 : -1);
                    
                    ctx.save();
                    ctx.translate(hx, hy);
                    ctx.rotate(rotation);
                    ctx.scale(1, 0.4);
                    
                    const diskGrad = ctx.createRadialGradient(0, 0, diskSize * 0.8, 0, 0, diskSize);
                    diskGrad.addColorStop(0, 'transparent');
                    diskGrad.addColorStop(0.5, `rgba(140, 60, 220, ${0.3 - i * 0.05 + power * 0.2})`);
                    diskGrad.addColorStop(1, 'transparent');
                    
                    ctx.fillStyle = diskGrad;
                    ctx.beginPath();
                    ctx.arc(0, 0, diskSize, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                }

                // 4. EVENT HORIZON SHADOW
                const holeGrad = ctx.createRadialGradient(hx, hy, 0, hx, hy, holeSize);
                holeGrad.addColorStop(0, 'rgba(0,0,0,1)');
                holeGrad.addColorStop(0.8, 'rgba(0,0,0,0.9)');
                holeGrad.addColorStop(1, 'transparent');
                ctx.fillStyle = holeGrad;
                ctx.beginPath();
                ctx.arc(hx, hy, holeSize, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // EXPLODED - YUTMA EFEKTİ
            if (vh.phase === 'exploded') {
                const hx = vh.x;
                const hy = vh.y;
                const timeSinceExplode = Date.now() - vh.regurgitateTime + 5500;
                
                const shrinkProgress = Math.min(timeSinceExplode / 3000, 1);
                const currentSize = vh.size * (1 - shrinkProgress * 0.9);
                
                if (currentSize > 5) {
                    const shake = Math.sin(Date.now() / 30) * (2 * (1 - shrinkProgress));
                    const sx = hx + shake;
                    const sy = hy + shake;
                    
                    ctx.shadowBlur = 40 * (1 - shrinkProgress);
                    ctx.shadowColor = 'rgba(150, 50, 255, 0.8)';
                    
                    // 1. Core
                    const holeGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, currentSize);
                    holeGrad.addColorStop(0, 'rgba(0, 0, 0, 1)');
                    holeGrad.addColorStop(0.7, 'rgba(10, 0, 30, 1)');
                    holeGrad.addColorStop(0.95, 'rgba(80, 20, 150, 0.6)');
                    holeGrad.addColorStop(1, 'transparent');
                    ctx.fillStyle = holeGrad;
                    ctx.beginPath();
                    ctx.arc(sx, sy, currentSize, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // 2. Photon Ring
                    ctx.strokeStyle = `rgba(255, 200, 255, ${0.8 - shrinkProgress * 0.5})`;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(sx, sy, currentSize * 0.7, 0, Math.PI * 2);
                    ctx.stroke();
                    
                    // 3. Extra Rings
                    const ringCount = 5 + Math.floor(shrinkProgress * 5);
                    for(let i=0; i<ringCount; i++) {
                        const ringSize = currentSize + 5 + i * 8 * (1 - shrinkProgress * 0.5);
                        const rotation = Date.now() / (200 + i * 50) * (i%2===0 ? 1 : -1);
                        
                        ctx.save();
                        ctx.translate(sx, sy);
                        ctx.rotate(rotation);
                        ctx.scale(1, 0.4 + shrinkProgress * 0.3);
                        
                        ctx.strokeStyle = `rgba(180, 100, 255, ${0.4 * (1 - shrinkProgress)})`;
                        ctx.lineWidth = 1.5;
                        ctx.beginPath();
                        ctx.arc(0, 0, ringSize, 0, Math.PI * 2);
                        ctx.stroke();
                        ctx.restore();
                    }
                    
                    ctx.shadowBlur = 0;
                }
            }
            
            // REGURGITATING
            if (vh.phase === 'regurgitating') {
                const hx = vh.x;
                const hy = vh.y;
                const regurgTime = Date.now() - (vh.regurgitateTime || Date.now());
                const waveSize = regurgTime * 0.3;
                
                if (waveSize < 500) {
                    ctx.strokeStyle = `rgba(200, 100, 255, ${0.5 * (1 - waveSize / 500)})`;
                    ctx.lineWidth = 3;
                    ctx.beginPath();
                    ctx.arc(hx, hy, waveSize, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }
            
            particles.forEach(p => { p.update(); p.draw(); });
        }

        requestAnimationFrame(animate);
    }
    animate();
}
```

Bu PRD, `index.html` dosyasındaki tüm görsel efektleri ve mantığı eksiksiz olarak içerir. Diğer AI bu dökümanı kullanarak projeyi birebir kopyalayabilir.
