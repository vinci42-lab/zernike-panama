const hero = document.getElementById('hero');
const cards = document.querySelectorAll('.hero-scroll-area .card');

window.addEventListener('scroll', () => {
    // Calculamos el progreso dentro de la sección de animación
    const scrollArea = document.querySelector('.hero-scroll-area');
    const rect = scrollArea.getBoundingClientRect();
    const scrollStart = 0;
    const scrollEnd = scrollArea.offsetHeight - window.innerHeight;
    let progress = Math.min(Math.max(-rect.top / scrollEnd, 0), 1);

    // Dimensiones finales (para ocupar 2 columnas y 1 fila del grid)
    const targetW = 460; 
    const targetH = 150; 

    const currentW = window.innerWidth - (window.innerWidth - targetW) * progress;
    const currentH = window.innerHeight - (window.innerHeight - targetH) * progress;
    
    hero.style.width = `${currentW}px`;
    hero.style.height = `${currentH}px`;
    hero.style.fontSize = `${5 - (progress * 3.2)}rem`;
    hero.style.borderRadius = `${progress * 20}px`;

    cards.forEach(card => {
        card.style.opacity = progress;
        card.style.transform = `translateY(${(1 - progress) * 40}px)`;
    });
});
