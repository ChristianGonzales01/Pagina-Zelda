// Selecciona la barra de navegación por su clase
const navbar = document.querySelector(".navbar");

// Función para expandir la barra de navegación
function expandNavbar() {
  navbar.style.transform = "translateY(5px)"; // Mueve la barra hacia abajo 5px
}

// Función para restaurar la barra de navegación a su estado original
function restoreNavbar() {
  navbar.style.transform = "translateY(0)"; // Vuelve a la posición original
}

// Agrega un evento para expandir la barra cuando el mouse pasa por encima
navbar.addEventListener("mouseenter", expandNavbar);

// Agrega un evento para restaurar la barra cuando el mouse sale de la barra
navbar.addEventListener("mouseleave", restoreNavbar);
