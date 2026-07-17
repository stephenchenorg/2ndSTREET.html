// ========================================
// 1. 行動版選單控制
// ========================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle')
    const navMenu = document.querySelector('.nav-menu')

    if (!menuToggle || !navMenu) return

    menuToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active')
        menuToggle.classList.toggle('active')

        // 更新 ARIA 屬性
        menuToggle.setAttribute('aria-expanded', isActive)
    })

    // 點擊選單外部關閉
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header')) {
            navMenu.classList.remove('active')
            menuToggle.classList.remove('active')
            menuToggle.setAttribute('aria-expanded', 'false')
        }
    })

    // 點擊選單連結後關閉選單
    const navLinks = navMenu.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active')
            menuToggle.classList.remove('active')
            menuToggle.setAttribute('aria-expanded', 'false')
        })
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
// 5. 超寬螢幕等比縮放（>1920px 以 1920 版面放大）
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
    initDesktopZoom()
})
