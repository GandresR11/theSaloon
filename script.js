AOS.init();

// Menú Móvil toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Cerrar menú al hacer clic en un link (Móvil)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.querySelector('.menu-toggle i').classList.add('fa-bars');
        document.querySelector('.menu-toggle i').classList.remove('fa-times');
    });
});

// Lógica de Tabs
function showTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

    const activeBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick').includes(tabId));
    if(activeBtn) activeBtn.classList.add('active');
    
    const activePane = document.getElementById(tabId);
    activePane.classList.add('active');
    
    gsap.from(activePane, { opacity: 0, y: 15, duration: 0.5 });
}

// Modal
const modal = document.getElementById("calendarModal");
function openCalendar() { modal.style.display = "block"; document.body.style.overflow = "hidden"; }
function closeCalendar() { modal.style.display = "none"; document.body.style.overflow = "auto"; }

function showTab(tabId) {
    // 1. Ocultar todos los contenidos de las pestañas
    const contents = document.querySelectorAll('.tab-pane');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // 2. Quitar el estado activo de todos los botones
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Mostrar el contenido seleccionado
    document.getElementById(tabId).classList.add('active');

    // 4. Marcar el botón actual como activo
    // Buscamos el botón que tiene el onclick con el id correspondiente
    const activeBtn = document.querySelector(`[onclick="showTab('${tabId}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}
