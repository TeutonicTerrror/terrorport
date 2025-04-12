document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card').forEach(el => {
    el.classList.add('pre-animate');
    observer.observe(el);
});

const cursor = document.querySelector('.cursor');
let cursorVisible = true;

setInterval(() => {
    cursorVisible = !cursorVisible;
    cursor.style.opacity = cursorVisible ? 1 : 0;
}, 500);

const header = document.querySelector('header');
let hoverTimeout, lastUpdate = 0;

document.addEventListener('mousemove', e => {
    const now = Date.now();
    if (now - lastUpdate < 32) return;
    lastUpdate = now;

    const rect = header.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    header.style.setProperty('--mouse-x', `${x}px`);
    header.style.setProperty('--mouse-y', `${y}px`);
    
    clearTimeout(hoverTimeout);
    header.classList.add('active');
    hoverTimeout = setTimeout(() => {
        header.classList.remove('active');
    }, 1000);
});
