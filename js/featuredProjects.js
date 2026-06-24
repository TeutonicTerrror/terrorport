var featuredGrid = document.getElementById("featured-grid");
function renderFeaturedProjects(projects) {
    featuredGrid.innerHTML = "";
    projects.forEach(function(project, index) {
        var card = document.createElement("div");
        card.className = "card cursor-follow reveal";
        var hasScreenshots = project.screenshots && project.screenshots.length;
        var screenshotHTML = hasScreenshots ?
            '<div class="project-screenshot">' +
                renderCarousel(project.screenshots, project.title) +
            '</div>' : '';
        card.innerHTML = '' +
            screenshotHTML +
            '<h3 class="text-xl font-bold text-accent-red mb-3 flex items-center font-orbitron">' +
                project.title +
                (project.icon ? '<i class="' + project.icon + ' ml-2 text-white/40 text-sm"></i>' : '') +
            '</h3>' +
        '<p class="text-white/50 font-space text-sm leading-relaxed mb-5">' + project.description + '</p>' +
        '<div class="flex gap-3 mb-5 text-lg">' +
            project.techStack.map(function(tech) {
                return '<i class="' + tech.icon + ' text-white/40 hover:text-accent-warm transition-colors" title="' + tech.label + '"></i>';
            }).join("") +
        '</div>' +
        '<div class="flex flex-wrap gap-2">' +
            (project.buttons || []).map(function(btn) {
                return '<a href="' + btn.link + '" class="btn-primary text-sm" target="_blank">' + btn.text + '</a>';
            }).join("") +
        '</div>';
        featuredGrid.appendChild(card);
    });
    setupCarousels();
    var cards = featuredGrid.querySelectorAll(".card");
    cards.forEach(function(card, i) {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(function() {
            card.style.transition = "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, i * 60);
    });
}
fetch('data/projects.json')
    .then(function(res) { return res.json(); })
    .then(function(data) {
        var featured = data.filter(function(p) { return p.featured; });
        renderFeaturedProjects(featured);
    })
    .catch(function() {
        featuredGrid.innerHTML = '<div class="col-span-full text-center py-12"><p class="text-white/40 font-space text-sm">Failed to load projects.</p></div>';
    });
