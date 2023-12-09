// Capturamos el elemento del footer
const footer = document.querySelector('footer');

// Función para controlar la visibilidad del footer
function toggleFooterVisibility() {
    // Obtenemos la posición actual de desplazamiento
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Ajusta el umbral según sea necesario
    const threshold = 100;

    // Si el usuario ha desplazado más allá del umbral, muestra el footer, de lo contrario, ocúltalo
    if (scrollPosition > threshold) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
}

// Agregamos un evento de desplazamiento para llamar a la función cuando el usuario se desplace
window.addEventListener('scroll', toggleFooterVisibility);
