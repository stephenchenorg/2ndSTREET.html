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
// 初始化所有功能
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu()
    initSmoothScroll()
    initActiveNav()
})
