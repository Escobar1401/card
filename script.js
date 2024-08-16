document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');

    // Agregar un evento para cuando se pase el ratón sobre la tarjeta
    card.addEventListener('mouseover', function() {
        card.style.transform = 'scale(1.1)'; // Ampliar la tarjeta
    });

    // Agregar un evento para cuando se retire el ratón de la tarjeta
    card.addEventListener('mouseout', function() {
        card.style.transform = 'scale(1)'; // Volver al tamaño original
    });
});