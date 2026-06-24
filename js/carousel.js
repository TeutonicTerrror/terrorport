function renderCarousel(screenshots, title) {
    if (!screenshots || screenshots.length === 0) return '';
    var slides = screenshots.map(function(src, i) {
        return '<img src="' + src + '" alt="' + title + ' screenshot ' + (i+1) + '" class="gallery-slide' + (i === 0 ? ' active' : '') + '" loading="' + (i === 0 ? 'eager' : 'lazy') + '">';
    }).join('');
    var dots = screenshots.length > 1 ?
        '<div class="gallery-dots">' +
            screenshots.map(function(_, i) {
                return '<button class="gallery-dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '" aria-label="View screenshot ' + (i+1) + '"></button>';
            }).join('') +
        '</div>' : '';
    var arrows = screenshots.length > 1 ?
        '<button class="gallery-arrow gallery-prev" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>' +
        '<button class="gallery-arrow gallery-next" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>' : '';
    return '' +
        '<div class="project-gallery" data-carousel data-length="' + screenshots.length + '">' +
            '<div class="gallery-track">' + slides + '</div>' +
            arrows +
            dots +
        '</div>';
}
function setupCarousels() {
    document.querySelectorAll('[data-carousel]').forEach(function(carousel) {
        if (carousel._initialized) return;
        carousel._initialized = true;
        var slides = carousel.querySelectorAll('.gallery-slide');
        var dots = carousel.querySelectorAll('.gallery-dot');
        var prev = carousel.querySelector('.gallery-prev');
        var next = carousel.querySelector('.gallery-next');
        var total = slides.length;
        var current = 0;
        var interval = null;
        function goTo(index) {
            slides[current].classList.remove('active');
            if (dots.length) dots[current].classList.remove('active');
            current = ((index % total) + total) % total;
            slides[current].classList.add('active');
            if (dots.length) dots[current].classList.add('active');
        }
        if (prev) prev.addEventListener('click', function() { goTo(current - 1); });
        if (next) next.addEventListener('click', function() { goTo(current + 1); });
        dots.forEach(function(dot) {
            dot.addEventListener('click', function() { goTo(parseInt(dot.dataset.index)); });
        });
        if (total > 1) {
            interval = setInterval(function() { goTo(current + 1); }, 5000);
            carousel.addEventListener('mouseenter', function() { clearInterval(interval); });
            carousel.addEventListener('mouseleave', function() {
                clearInterval(interval);
                interval = setInterval(function() { goTo(current + 1); }, 5000);
            });
        }
        carousel._cleanup = function() { clearInterval(interval); };
    });
}
function cleanupCarousels() {
    document.querySelectorAll('[data-carousel]').forEach(function(c) {
        if (c._cleanup) c._cleanup();
        c._initialized = false;
    });
}
