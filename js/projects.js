const projects = [
    {
        title: "TeutonicTerror's Portfolio Site",
        description: "The very website you're viewing now! Built with cutting-edge web technologies featuring:",
        features: ["Dynamic Gradient Effects", "Responsive Design", "Interactive Animations", "Performance Optimized"],
        techStack: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fas fa-paint-brush"],
        link: "https://teutonicterror.pages.dev/",
        buttonText: "Visit Here!"
    },
    {
        title: "Purpura",
        description: "A Roblox Chromium extension enhancing Roblox.com with premium features including:",
        features: ["Roblox Themer", "Premiums", "Account Managers", "Game Launchers"],
        techStack: ["fab fa-js-square", "fab fa-chrome", "fas fa-cube", "fab fa-html5"],
        link: "https://discord.gg/TT4sgtEkNV",
        buttonText: "See Progress (Unreleased)!"
    },
    {
        title: "Simple Portfolio",
        description: "A simple portfolio website template featuring:",
        features: ["Dynamic Crosshair Effects", "Eye-soothing UI", "Fully Static Design", "Easy Hosting"],
        techStack: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fas fa-paint-brush"],
        link: "https://github.com/TeutonicTerrror/SimplePortfolio",
        buttonText: "Get Template"
    },
    {
        title: "Nexus App Store Site",
        description: "An advanced personal use app store for bypassing global blocks; featuring:",
        features: ["Unlimited Access in Schools", "Loads of Apps", "Advanced Authentication System", "$10 Paywall"],
        techStack: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fas fa-paint-brush"],
        link: "https://nexsapp.web.app/",
        buttonText: "Visit Store"
    },
    {
        title: "Study Sphere",
        description: "An advanced school website with multiple tools and games to help students learning, featuring:",
        features: ["MLA Citation Generator", "Advanced Calculator", "AI Engine", "and an Advanced Planner"],
        techStack: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fas fa-paint-brush"],
        link: "https://stdysphere.web.app/",
        buttonText: "Visit Website"
    },
    {
        title: "School Multi-Tool",
        description: "Minnesota school system toolkit for students to make school way easier. Featuring:",
        features: ["Automated Schedule Builder", "Lunch Viewing Tool", "Assignment Planner", "AI Tools"],
        techStack: ["fab fa-apple", "fas fa-braces"],
        link: "https://routinehub.co/shortcut/16835/",
        buttonText: "Download Now"
    },
    {
        title: "School Multi-Tool Web Edition",
        description: "School Multi-Tool's Website Featuring:",
        features: ["Simplistic UI", "Fun Games", "Documentation", "Citrine AI"],
        techStack: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fas fa-paint-brush"],
        link: "https://schoolmt.netlify.app/",
        buttonText: "Visit Now"
    },
    {
        title: "Terror-Executor",
        description: "ZSH terminal enhancement suite for macOS developers including:",
        features: ["Custom Commands", "Satisfying Styles", "Sleeker Design", "Advanced Developing Capabilities"],
        techStack: ["fas fa-terminal", "fas fa-code", "fab fa-apple"],
        link: "https://routinehub.co/shortcut/19708/",
        buttonText: "Download Now"
    },
    {
        title: "Buzzworthy Website",
        description: "An advanced website including:",
        features: ["Lots of bee facts", "Modern sources page", "Cool GUI", "Accurate information"],
        techStack: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fas fa-paint-brush"],
        link: "https://buzzinfo.pages.dev/pages/main",
        buttonText: "Visit Website"
    },
    {
        title: "Friscco Plaza Website",
        description: "A troll website that I used for a school project including:",
        features: ["Like 2 html elements", "Funny stuff", "#BusinessIntroduction", "and uh Idk."],
        techStack: ["fab fa-html5", "fab fa-css3-alt"],
        link: "https://github.com/TeutonicTerrror/Friscco",
        buttonText: "Visit Repository"
    }
];

const projectGrid = document.getElementById("project-grid");
const searchInput = document.getElementById("search-input");

function renderProjects(filter = "") {
    projectGrid.innerHTML = "";
    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(filter.toLowerCase())
    );

    filteredProjects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <ul class="project-features">
                ${project.features.map(feature => `<li>${feature}</li>`).join("")}
            </ul>
            <div class="tech-stack">
                ${project.techStack.map(icon => `<i class="${icon}"></i>`).join("")}
            </div>
            <a href="${project.link}" class="project-button" target="_blank">${project.buttonText}</a>
        `;

        projectGrid.appendChild(projectCard);
    });
}

searchInput.addEventListener("input", (e) => {
    renderProjects(e.target.value);
});

renderProjects();
