document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Animation for name
const nameElement = document.getElementById('name');
nameElement.style.opacity = 0;
setTimeout(() => {
    nameElement.style.transition = 'opacity 1s';
    nameElement.style.opacity = 1;
}, 100);