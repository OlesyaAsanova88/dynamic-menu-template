const getId = (link) => link.getAttribute('href').replace('#', '');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-item-link').forEach((link) => {
                link.classList.toggle(
                    'nav-item-link-active',
                    getId(link) === entry.target.id)
            });
        }
    });
}, {
    threshold: 0.7
});

document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
});

document.querySelector('.nav-list').addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-item-link')) {
        event.preventDefault();

        const id = getId(event.target);

        window.scrollTo({
            top: document.getElementById(getId(event.target)).offsetTop,
            behavior: 'smooth'
        });
    }
});