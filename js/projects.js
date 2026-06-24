var projects = [];
var projectGrid = document.getElementById("project-grid");
var searchInput = document.getElementById("search-input");
function renderProjects(filter) {
    filter = filter || "";
    cleanupCarousels();
    projectGrid.innerHTML = "";
    var filteredProjects = projects.filter(function(project) {
        return project.title.toLowerCase().includes(filter.toLowerCase());
    });
    filteredProjects.forEach(function(project, index) {
        var projectCard = document.createElement("div");
        projectCard.className = 'project-row card cursor-follow';
        var hasScreenshots = project.screenshots && project.screenshots.length;
        var screenshotHTML = hasScreenshots ?
            '<div class="project-gallery-container">' +
                renderCarousel(project.screenshots, project.title) +
            '</div>' : '';
        projectCard.innerHTML = '' +
            screenshotHTML +
            '<div class="project-details">' +
            '<h3 class="text-xl font-bold text-accent-red mb-3 font-orbitron">' + project.title + '</h3>' +
            '<p class="text-white/40 font-space text-sm leading-relaxed mb-5">' + project.description + '</p>' +
            '<div class="flex gap-3 mb-5 text-lg">' +
                project.techStack.map(function(tech) {
                    return '<i class="' + tech.icon + ' text-white/20 hover:text-accent-warm transition-colors" title="' + tech.label + '"></i>';
                }).join("") +
            '</div>' +
                '<div class="flex flex-wrap gap-2">' +
                (project.buttons || []).map(function(btn) {
                    return '<a href="' + btn.link + '" class="btn-primary text-sm" target="_blank">' + btn.text + '</a>';
                }).join("") +
            '</div>' +
            '</div>';
        projectGrid.appendChild(projectCard);
    });
    setupCarousels();
    var cards = projectGrid.querySelectorAll('.project-row');
    cards.forEach(function(card, index) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(function() {
            card.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 80);
    });
}
searchInput.addEventListener("input", function(e) {
    renderProjects(e.target.value);
});
function loadProjects() {
    projectGrid.innerHTML = '<div class="text-center py-12 w-full"><i class="fas fa-spinner animate-spin text-white/20 text-2xl mb-4"></i><p class="text-white/40 font-space text-sm">Loading projects...</p></div>';
    fetch('data/projects.json')
        .then(function(res) { return res.json(); })
        .then(function(data) {
            projects = data;
            renderProjects(searchInput ? searchInput.value : "");
        })
        .catch(function() {
            projectGrid.innerHTML = '<div class="col-span-full text-center py-12"><p class="text-white/40 font-space text-sm">Failed to load projects.</p></div>';
        });
}
loadProjects();
