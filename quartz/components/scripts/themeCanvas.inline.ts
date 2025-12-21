// Theme Canvas Effects - Sadece Balina
document.addEventListener("nav", () => {
    // Canvas var mı kontrol et
    let canvas = document.getElementById("theme-canvas") as HTMLCanvasElement
    if (!canvas) {
        canvas = document.createElement("canvas")
        canvas.id = "theme-canvas"
        // Style custom.scss'den gelecek ama default olarak da ekleyelim
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `
        document.body.insertBefore(canvas, document.body.firstChild)
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = 0, h = 0
    let animationId: number | null = null
    let whales: Whale[] = []

    function resize() {
        w = canvas.width = window.innerWidth
        h = canvas.height = window.innerHeight
    }

    // Sadece Balina Sınıfı
    class Whale {
        x: number = 0
        y: number = 0
        dir: number = 1
        v: number = 0
        phase: number = 0
        scale: number = 1

        constructor() { this.reset() }

        reset() {
            this.dir = Math.random() > 0.5 ? 1 : -1
            this.x = this.dir === 1 ? -600 : w + 600
            this.y = Math.random() * h * 0.4 + h * 0.3
            this.v = Math.random() * 0.2 + 0.1
            this.phase = 0
            this.scale = Math.random() * 0.3 + 0.7
        }

        update() {
            this.x += this.v * this.dir
            this.phase += 0.015
            if ((this.dir === 1 && this.x > w + 600) || (this.dir === -1 && this.x < -600)) this.reset()
        }

        draw() {
            ctx!.save()
            ctx!.translate(this.x, this.y)
            ctx!.scale(this.dir * this.scale, this.scale)

            const tailWave = Math.sin(this.phase) * 15

            ctx!.shadowBlur = 30
            ctx!.shadowColor = "rgba(0, 180, 255, 0.3)"
            ctx!.fillStyle = "rgba(40, 80, 120, 0.15)"
            ctx!.beginPath()
            ctx!.moveTo(200, 0)
            ctx!.bezierCurveTo(220, -30, 200, -50, 150, -55)
            ctx!.bezierCurveTo(80, -65, 0, -60, -80, -50)
            ctx!.bezierCurveTo(-150, -40, -200, -25, -230, tailWave)
            ctx!.bezierCurveTo(-250, -10 + tailWave, -290, -50 + tailWave, -320, -40 + tailWave)
            ctx!.lineTo(-280, tailWave)
            ctx!.lineTo(-320, 40 + tailWave)
            ctx!.bezierCurveTo(-290, 50 + tailWave, -250, 10 + tailWave, -230, tailWave)
            ctx!.bezierCurveTo(-200, 25, -150, 45, -80, 50)
            ctx!.bezierCurveTo(0, 55, 80, 50, 150, 40)
            ctx!.bezierCurveTo(190, 30, 210, 15, 200, 0)
            ctx!.closePath()
            ctx!.fill()

            // Göz
            ctx!.fillStyle = "rgba(100, 180, 220, 0.3)"
            ctx!.beginPath()
            ctx!.ellipse(160, -20, 6, 4, 0, 0, Math.PI * 2)
            ctx!.fill()

            ctx!.shadowBlur = 0
            ctx!.restore()
        }
    }


    // Mor Partikül Sınıfı (Uzay Efekti)
    class Particle {
        x: number
        y: number
        vx: number
        vy: number
        size: number
        alpha: number

        constructor() {
            this.x = Math.random() * w
            this.y = Math.random() * h
            this.vx = (Math.random() - 0.5) * 0.2 // Yavaş hareket
            this.vy = (Math.random() - 0.5) * 0.2
            this.size = Math.random() * 2 + 0.5
            this.alpha = Math.random() * 0.5 + 0.2
        }

        update() {
            this.x += this.vx
            this.y += this.vy

            // Ekran dışına çıkarsa diğer taraftan girsin
            if (this.x < -10) this.x = w + 10
            if (this.x > w + 10) this.x = -10
            if (this.y < -10) this.y = h + 10
            if (this.y > h + 10) this.y = -10
        }

        draw() {
            ctx!.save()
            ctx!.shadowBlur = 8
            ctx!.shadowColor = "rgba(150, 100, 255, 0.5)"
            ctx!.fillStyle = `rgba(180, 140, 255, ${this.alpha})` // Mor renk
            ctx!.beginPath()
            ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            ctx!.fill()
            ctx!.restore()
        }
    }

    let particles: Particle[] = []

    function init() {
        resize()
        whales = []
        particles = []
        for (let i = 0; i < 2; i++) whales.push(new Whale())
        // Deep Void için 150 partikül
        for (let i = 0; i < 150; i++) particles.push(new Particle())
    }

    function animate() {
        const theme = document.documentElement.getAttribute("saved-theme")
        ctx!.clearRect(0, 0, w, h)

        canvas.style.top = "0" // Pozisyonu garantiye al

        if (theme === "deep-sea") {
            canvas.style.zIndex = "1"
            whales.forEach(wh => { wh.update(); wh.draw() })
        } else if (theme === "deep-void") {
            // Deep Void: Arkada mor partiküller
            canvas.style.zIndex = "1"
            particles.forEach(p => { p.update(); p.draw() })
        } else {
            canvas.style.zIndex = "-1"
        }

        animationId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resize)

    init()
    animate()

    window.addCleanup(() => {
        if (animationId) cancelAnimationFrame(animationId)
        canvas.remove()
    })
})
