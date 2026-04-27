
const elements = document.querySelectorAll('.hidden');

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.7;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;

        if (elementTop < triggerBottom && elementBottom > 0) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);

// uruchom przy załadowaniu
showOnScroll();