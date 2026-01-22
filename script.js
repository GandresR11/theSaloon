// 1. Inicializar AOS (Animaciones al Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// 2. Control del Header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 3. Lógica de TABS (Navegación de Servicios)
function showTab(tabId) {
    // Quitar clase active de todos los botones
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Quitar clase active de todos los paneles
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });

    // Añadir clase active al botón clicado (si se llama desde el menú de tabs)
    const activeBtn = Array.from(document.querySelectorAll('.tab-btn')).find(btn => 
        btn.getAttribute('onclick').includes(tabId)
    );
    if(activeBtn) activeBtn.classList.add('active');

    // Mostrar el panel correspondiente
    const activePane = document.getElementById(tabId);
    activePane.classList.add('active');

    // Animación suave de entrada con GSAP
    gsap.from(activePane, {
        duration: 0.6,
        opacity: 0,
        y: 20,
        ease: "power2.out"
    });
}

// 4. Funciones del Modal (Google Calendar)
const modal = document.getElementById("calendarModal");

function openCalendar() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeCalendar() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeCalendar();
    }
}
