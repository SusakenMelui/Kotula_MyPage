
const elements = document.querySelectorAll('.hidden');

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.7;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);


showOnScroll();


const indicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        indicator.style.opacity = '0';
    } else {
        indicator.style.opacity = '1';
    }
});