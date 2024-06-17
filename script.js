document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
    });

    // Dropdown for project subsections
    const projectTitles = document.querySelectorAll('.sub-section-toggle');
    projectTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            content.classList.toggle('expanded');
            const arrow = title.querySelector('.toggle-arrow');
            arrow.textContent = content.classList.contains('expanded') ? '▲' : '▼';
        });
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
