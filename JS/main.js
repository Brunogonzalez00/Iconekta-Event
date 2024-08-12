document.addEventListener("DOMContentLoaded", function () {
    let lastY = window.scrollY;
    let observer = new IntersectionObserver(onChange, {
        rootMargin: "-60px",
        threshold: 0.3
    });

    document.querySelectorAll('article').forEach(el => observer.observe(el));

    function onChange(changes, observer) {
        changes.forEach(change => {
            if (change.intersectionRatio >= 0.3) {
                change.target.classList.add('in-view');
            } else {
                // Solo quitar la clase 'in-view' si el usuario está subiendo
                if (window.scrollY < lastY) {
                    change.target.classList.remove('in-view');
                }
            }
        });

        // Actualizar la última posición de scroll
        lastY = window.scrollY;
    }

    // Ajustar el código según el tamaño de la pantalla
    if (window.innerWidth <= 600) {
        // Código para pantallas pequeñas (móviles)
    } else if (window.innerWidth <= 1024) {
        // Código para pantallas medianas (tabletas)
    } else {
        // Código para pantallas grandes (desktop)
    }
});