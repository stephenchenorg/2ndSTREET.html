// ========================================
// 1. 行動版選單控制
// ========================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle')
    const navMenu = document.querySelector('.nav-menu')
    const overlay = document.querySelector('.menu-overlay')

    if (!menuToggle || !navMenu || !overlay) return

    const closeMenu = () => {
        navMenu.classList.remove('active')
        menuToggle.classList.remove('active')
        overlay.classList.remove('active')
        menuToggle.setAttribute('aria-expanded', 'false')
        document.body.style.overflow = ''
    }

    menuToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active')
        menuToggle.classList.toggle('active')
        overlay.classList.toggle('active')

        // 更新 ARIA 屬性
        menuToggle.setAttribute('aria-expanded', isActive)

        // 選單開啟時鎖住背景捲動
        document.body.style.overflow = isActive ? 'hidden' : ''
    })

    // 點擊遮罩關閉選單
    overlay.addEventListener('click', closeMenu)

    // 點擊選單外部關閉
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header') && !e.target.closest('.nav-menu')) {
            closeMenu()
        }
    })

    // 點擊選單連結後關閉選單
    const navLinks = navMenu.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu)
    })
}

// ========================================
// 2. 平滑捲動
// ========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]')

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const targetId = link.getAttribute('href')

            if (targetId === '#') return

            const target = document.querySelector(targetId)

            if (target) {
                const header = document.querySelector('.header')
                const headerHeight = header ? header.offsetHeight : 0
                const targetPosition = target.offsetTop - headerHeight

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                })
            }
        })
    })
}

// ========================================
// 3. 當前頁面導航高亮
// ========================================
function initActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html'
    const navLinks = document.querySelectorAll('.nav-link')

    navLinks.forEach(link => {
        const href = link.getAttribute('href')
        if (href === currentPage) {
            link.classList.add('active')
        }
    })
}

// ========================================
// 4. 職缺介紹 - 正職／兼職頁籤切換
// ========================================
function initJobIntroTabs() {
    const tablist = document.querySelector('.job-tabs')
    if (!tablist) return

    const tabs = tablist.querySelectorAll('.job-tabs__tab')
    if (!tabs.length) return

    const activateTab = (tab) => {
        tabs.forEach((t) => {
            const selected = t === tab
            t.setAttribute('aria-selected', selected)
            t.tabIndex = selected ? 0 : -1

            const panel = document.getElementById(t.getAttribute('aria-controls'))
            if (panel) panel.hidden = !selected
        })
    }

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => activateTab(tab))
    })
}

// ========================================
// 5. Hero 輪播
// ========================================
function initHeroSlider() {
    const slider = document.querySelector('.hero-slider')
    if (!slider) return

    const slidesContainer = slider.querySelector('.hero-slides')
    const slides = slider.querySelectorAll('.hero-slide')
    const dots = slider.querySelectorAll('.hero-dot')
    const prevBtn = slider.querySelector('.hero-arrow--prev')
    const nextBtn = slider.querySelector('.hero-arrow--next')

    if (!slides.length || !slidesContainer) return

    let currentIndex = 0
    let autoPlayInterval = null

    // 切換到指定幻燈片
    const goToSlide = (index) => {
        // 移除所有 active
        slides.forEach(slide => slide.classList.remove('active'))
        dots.forEach(dot => dot.classList.remove('active'))

        // 添加新的 active
        slides[index].classList.add('active')
        dots[index].classList.add('active')

        // 使用 transform 滑動效果
        slidesContainer.style.transform = `translateX(-${index * 100}%)`

        currentIndex = index
    }

    // 下一張
    const nextSlide = () => {
        const next = (currentIndex + 1) % slides.length
        goToSlide(next)
    }

    // 上一張
    const prevSlide = () => {
        const prev = (currentIndex - 1 + slides.length) % slides.length
        goToSlide(prev)
    }

    // 自動播放
    const startAutoPlay = () => {
        autoPlayInterval = setInterval(nextSlide, 5000) // 5秒切換一次
    }

    const stopAutoPlay = () => {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval)
            autoPlayInterval = null
        }
    }

    // 按鈕事件
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide()
            stopAutoPlay()
            startAutoPlay() // 重新開始自動播放
        })
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide()
            stopAutoPlay()
            startAutoPlay()
        })
    }

    // 指示點事件
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index)
            stopAutoPlay()
            startAutoPlay()
        })
    })

    // 鍵盤控制
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide()
            stopAutoPlay()
            startAutoPlay()
        } else if (e.key === 'ArrowRight') {
            nextSlide()
            stopAutoPlay()
            startAutoPlay()
        }
    })

    // 啟動自動播放
    startAutoPlay()

    // 頁面不可見時停止自動播放
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoPlay()
        } else {
            startAutoPlay()
        }
    })
}

// ========================================
// 6. 滾動淡入動畫
// ========================================
function initScrollFadeIn() {
    const animatedElements = document.querySelectorAll('.fade-in-down, .fade-in-up, .fade-in, .fade-in-down-scale, .char-animation, .expand-down, .title-rise, .ms-fade, .ms-img, .story-qa__answer mark')

    if (!animatedElements.length) return

    const observerOptions = {
        threshold: 0.15, // 當元素 15% 進入視窗時觸發
        rootMargin: '0px 0px -50px 0px' // 提早 50px 觸發
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
                // 一旦出現就不再監聽（避免重複動畫）
                observer.unobserve(entry.target)
            }
        })
    }, observerOptions)

    animatedElements.forEach(element => {
        // 輪播卡片由 initStaffCarousel 專責（需可重複觸發），略過一次性觀察器
        if (element.closest('.staff-carousel')) return
        observer.observe(element)
    })
}

// ========================================
// 7. 行動版等比縮放（<1024px 以 700 版面縮放）
// ========================================
function initDesktopZoom() {
    const MOBILE_BASE = 700

    const apply = () => {
        const w = window.innerWidth
        // 桌機 1024–1920 以 min(vw, 設計px) 等比縮小；>1920 不放大，
        // 內容鎖 1920 置中、僅 header 延伸（見 style.css 末尾規則）
        // 行動版（<1024）以 700 設計 px 固定值撰寫，zoom = 寬/700 等比縮放
        if (w < 1024) {
            document.body.style.zoom = String(w / MOBILE_BASE)
        } else {
            document.body.style.zoom = ''
        }
    }

    apply()

    let ticking = false
    window.addEventListener('resize', () => {
        if (ticking) return
        ticking = true
        requestAnimationFrame(() => {
            apply()
            ticking = false
        })
    })
}

// ========================================
// 9. 首頁社員故事輪播箭頭（行動版 scroll-snap 的左右切換）
// ========================================
function initStaffCarousel() {
    const carousel = document.querySelector('.staff-carousel')
    if (!carousel) return

    const grid = carousel.querySelector('.staff-grid')
    const originals = [...grid.children]
    if (!originals.length) return

    // 前後各補一組 clone，達成無限循環；clone 保留 fade-in-up，
    // 讓它跟原卡一樣能在從邊緣滑入時重播進入動畫（僅不可聚焦）
    const clone = (node) => {
        const c = node.cloneNode(true)
        c.setAttribute('aria-hidden', 'true')
        c.setAttribute('tabindex', '-1')
        return c
    }
    originals.forEach(node => grid.append(clone(node)))
    originals.slice().reverse().forEach(node => grid.prepend(clone(node)))

    const cards = [...grid.children]

    const gap = () => parseFloat(getComputedStyle(grid).gap) || 0
    const step = () => originals[0].offsetWidth + gap()
    const setWidth = () => originals.length * step() // 一組寬度

    // 初始定位到中間（原始）組
    grid.scrollLeft = setWidth()

    // 卡片有 35% 進入 grid 可視範圍（且區塊在視窗內）→ 播進入動畫；
    // 完全離開即重置 → 下次再從邊緣出現時重播（不論之前有沒有顯示過）
    let sectionInView = false
    const REVEAL = 0.35
    const syncVisibility = () => {
        const box = grid.getBoundingClientRect()
        cards.forEach(card => {
            const r = card.getBoundingClientRect()
            const shown = Math.min(r.right, box.right) - Math.max(r.left, box.left)
            const ratio = r.width ? shown / r.width : 0
            if (sectionInView && ratio >= REVEAL) card.classList.add('is-visible')
            else if (!sectionInView || shown <= 0) card.classList.remove('is-visible')
        })
    }

    // 垂直進出視窗用 IntersectionObserver 判定；水平捲動另由 scroll 事件驅動
    new IntersectionObserver((entries) => {
        sectionInView = entries[0].isIntersecting
        syncVisibility()
    }, { threshold: 0 }).observe(carousel)

    let ticking = false
    const onScroll = () => {
        if (ticking) return
        ticking = true
        requestAnimationFrame(() => { syncVisibility(); ticking = false })
    }

    // 捲動落定後若停在 clone 區，無縫平移一組寬度（±sw 內容完全相同）
    let timer
    grid.addEventListener('scroll', () => {
        onScroll()
        clearTimeout(timer)
        timer = setTimeout(() => {
            const sw = setWidth()
            if (grid.scrollLeft < sw) grid.scrollLeft += sw
            else if (grid.scrollLeft >= 2 * sw) grid.scrollLeft -= sw
            // ponytail: 平移後位置視覺不變，但接手的 clone 尚未 is-visible。
            // 暫關過渡、瞬時同步類別，避免接縫處閃現一次重播
            grid.classList.add('is-jumping')
            syncVisibility()
            void grid.offsetWidth // 強制 reflow 讓瞬時狀態生效
            grid.classList.remove('is-jumping')
        }, 150)
    })

    carousel.querySelector('.staff-nav--prev').addEventListener('click', () => {
        grid.scrollBy({ left: -step(), behavior: 'smooth' })
    })
    carousel.querySelector('.staff-nav--next').addEventListener('click', () => {
        grid.scrollBy({ left: step(), behavior: 'smooth' })
    })
}

// ========================================
// 10. 桌機 header 捲動收縮（下滑後縮至應徵鈕高度）
// ========================================
function initHeaderShrink() {
    const header = document.querySelector('.header')
    if (!header) return
    // 遲滯雙門檻：向下過 SHRINK 才收縮、向上回到 EXPAND 以下才展開，
    // 中間死區吸收收縮造成的版面位移，避免門檻附近來回抖動
    const SHRINK = 120
    const EXPAND = 40
    const onScroll = () => {
        const y = window.scrollY
        if (y > SHRINK) header.classList.add('is-scrolled')
        else if (y < EXPAND) header.classList.remove('is-scrolled')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
}

// ========================================
// 初始化所有功能
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu()
    initSmoothScroll()
    initActiveNav()
    initJobIntroTabs()
    initHeroSlider()
    initScrollFadeIn()
    initDesktopZoom()
    initStaffCarousel()
    initHeaderShrink()
})
