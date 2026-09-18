document.addEventListener('DOMContentLoaded', function () {

    const thumbs = document.querySelectorAll('.thumb');
    const pageNums = document.querySelectorAll('.page-num');
    const heroSlides = document.getElementById('heroSlides');
    const progressFill = document.getElementById('progressFill');
    const totalSlides = 3;

    function setActiveSlide(index) {
        thumbs.forEach(t => t.classList.remove('active'));
        pageNums.forEach(p => p.classList.remove('active'));
        if (thumbs[index]) thumbs[index].classList.add('active');
        if (pageNums[index]) pageNums[index].classList.add('active');

        if (heroSlides) {
            heroSlides.style.transform = `translateX(-${index * 100}%)`;
        }

        if (progressFill) {
            const percentage = ((index + 1) / totalSlides) * 100;
            progressFill.style.width = percentage + '%';
        }
    }

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            setActiveSlide(parseInt(thumb.dataset.index));
        });
    });

    pageNums.forEach(num => {
        num.addEventListener('click', () => {
            setActiveSlide(parseInt(num.dataset.index));
        });
    });

    const propertyTabs = document.querySelectorAll('.property-tabs button');
    propertyTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            propertyTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    const testimonialBtns = document.querySelectorAll('.testimonial-nav .nav-btn');
    testimonialBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            testimonialBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelectorAll('nav a');

    if (header && menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isOpen = header.classList.toggle('menu-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
            menuToggle.innerHTML = `<i class="fas fa-${isOpen ? 'times' : 'bars'}"></i>`;
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                header.classList.remove('menu-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Open menu');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

});

const todayThumbs = document.querySelectorAll('.t-thumb');
const todayPageNums = document.querySelectorAll('.today-page-num');
const todaySlides = document.getElementById('todaySlides');
const todayProgressFill = document.getElementById('todayProgressFill');
const todayTotalSlides = 3;

function setActiveTodaySlide(index) {

    todayThumbs.forEach(t => t.classList.remove('active'));
    todayPageNums.forEach(p => p.classList.remove('active'));
    if (todayThumbs[index]) todayThumbs[index].classList.add('active');
    if (todayPageNums[index]) todayPageNums[index].classList.add('active');

    if (todaySlides) {
        todaySlides.style.transform = `translateX(-${index * 100}%)`;
    }

    if (todayProgressFill) {
        const percentage = ((index + 1) / todayTotalSlides) * 100;
        todayProgressFill.style.width = percentage + '%';
    }
}

todayThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        setActiveTodaySlide(parseInt(thumb.dataset.index));
    });
});

todayPageNums.forEach(num => {
    num.addEventListener('click', () => {
        setActiveTodaySlide(parseInt(num.dataset.index));
    });
});