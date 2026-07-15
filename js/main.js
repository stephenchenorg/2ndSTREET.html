/**
 * 2ndSTREET.html - Main JavaScript
 * 純 HTML/CSS/JS 專案的主要互動邏輯
 */

// ========================================
// DOM Content Loaded
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('2ndSTREET.html 已載入')

    // 初始化所有功能
    initMobileMenu()
    initSmoothScroll()
    initFormValidation()
    initScrollAnimations()
})

// ========================================
// Mobile Menu Toggle
// ========================================

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger')
    const navMenu = document.querySelector('.nav-menu')

    if (!hamburger || !navMenu) return

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active')

        // 漢堡選單動畫
        this.classList.toggle('active')
    })

    // 點擊選單項目後關閉選單
    const navLinks = document.querySelectorAll('.nav-menu a')
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active')
            hamburger.classList.remove('active')
        })
    })

    // 點擊外部關閉選單
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target)
        const isClickOnHamburger = hamburger.contains(event.target)

        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active')
            hamburger.classList.remove('active')
        }
    })
}

// ========================================
// Smooth Scroll
// ========================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]')

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href')

            // 忽略空的錨點
            if (href === '#' || href === '#!') return

            e.preventDefault()

            const target = document.querySelector(href)
            if (target) {
                const headerOffset = 80
                const elementPosition = target.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            }
        })
    })
}

// ========================================
// Form Validation & Submission
// ========================================

function initFormValidation() {
    const form = document.getElementById('contact-form')

    if (!form) return

    form.addEventListener('submit', function(e) {
        e.preventDefault()

        // 取得表單資料
        const name = document.getElementById('name').value.trim()
        const email = document.getElementById('email').value.trim()
        const message = document.getElementById('message').value.trim()

        // 驗證
        if (!name || !email || !message) {
            showNotification('請填寫所有欄位', 'error')
            return
        }

        if (!validateEmail(email)) {
            showNotification('請輸入有效的 Email 地址', 'error')
            return
        }

        // 模擬表單送出
        console.log('表單資料:', { name, email, message })

        showNotification('訊息已送出！', 'success')
        form.reset()

        // 實際使用時，這裡應該串接後端 API
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, email, message })
        // })
    })
}

// ========================================
// Email Validation
// ========================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

// ========================================
// Notification System
// ========================================

function showNotification(message, type = 'info') {
    // 檢查是否已有通知
    const existingNotification = document.querySelector('.notification')
    if (existingNotification) {
        existingNotification.remove()
    }

    // 建立通知元素
    const notification = document.createElement('div')
    notification.className = `notification notification-${type}`
    notification.textContent = message

    // 樣式
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    `

    // 根據類型設定顏色
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    }
    notification.style.backgroundColor = colors[type] || colors.info

    // 加入到頁面
    document.body.appendChild(notification)

    // 3 秒後移除
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease'
        setTimeout(() => notification.remove(), 300)
    }, 3000)
}

// ========================================
// Scroll Animations
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in')
                observer.unobserve(entry.target)
            }
        })
    }, observerOptions)

    // 觀察所有區塊
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
        observer.observe(section)
    })

    // 觀察服務卡片
    const serviceCards = document.querySelectorAll('.service-card')
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`
        observer.observe(card)
    })
}

// ========================================
// Utility Functions
// ========================================

// 節流函數（Throttle）
function throttle(func, delay) {
    let lastCall = 0
    return function(...args) {
        const now = new Date().getTime()
        if (now - lastCall < delay) return
        lastCall = now
        return func(...args)
    }
}

// 防抖函數（Debounce）
function debounce(func, delay) {
    let timeoutId
    return function(...args) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => func.apply(this, args), delay)
    }
}

// 取得查詢參數
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(param)
}

// ========================================
// Export for potential module use
// ========================================

// 如果需要在其他檔案使用這些函數，可以 export
// export { showNotification, validateEmail, throttle, debounce }
