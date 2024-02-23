// Efeito de rolar suave para as âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de animação ao rolar para os elementos da seção
document.addEventListener('scroll', function () {
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');
    const windowHeight = window.innerHeight;

    if (isInViewport(aboutSection, windowHeight)) {
        aboutSection.classList.add('animate');
    }

    if (isInViewport(projectsSection, windowHeight)) {
        projectsSection.classList.add('animate');
    }

    if (isInViewport(contactSection, windowHeight)) {
        contactSection.classList.add('animate');
    }
});

// Função auxiliar para verificar se um elemento está no viewport
function isInViewport(element, windowHeight) {
    const bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (windowHeight || document.documentElement.clientHeight)
    );
}
