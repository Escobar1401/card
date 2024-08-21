// Espera a que el contenido del DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el primer elemento con la clase 'card'
    const card = document.querySelector('.card');

    // Añade un evento de mouseover al elemento 'card'
    card.addEventListener('mouseover', function() {
        // Aumenta el tamaño del elemento 'card' en un 10% cuando el ratón pasa sobre él
        card.style.transform = 'scale(1.1)';
    });

    // Añade un evento de mouseout al elemento 'card'
    card.addEventListener('mouseout', function() {
        // Restaura el tamaño del elemento 'card' al valor original cuando el ratón sale de él
        card.style.transform = 'scale(1)'; 
    });
});
