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
    }

    menuToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active')
        menuToggle.classList.toggle('active')
        overlay.classList.toggle('active')

        // 更新 ARIA 屬性
        menuToggle.setAttribute('aria-expanded', isActive)
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
// 6. 超寬螢幕等比縮放（>1920px 以 1920 版面放大）
// ========================================
function initDesktopZoom() {
    const BASE = 1920

    const apply = () => {
        const w = window.innerWidth
        // CSS 已用 min(vw, 設計px) 把版面鎖在 1920 基準，這裡整頁等比放大
        document.body.style.zoom = w > BASE ? String(w / BASE) : ''
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
// 初始化所有功能
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu()
    initSmoothScroll()
    initActiveNav()
    initJobIntroTabs()
    initHeroSlider()
    initDesktopZoom()
})
