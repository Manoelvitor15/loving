// Referência ao elemento de classificação
const starRating = document.getElementById('starRating');

// Adicionando um ouvinte de evento de clique ao elemento de classificação
starRating.addEventListener('click', (event) => {
    const clickedStar = event.target;
    if (clickedStar.classList.contains('star')) {
        const rating = parseInt(clickedStar.getAttribute('data-value'));
        // Definir a classificação selecionada no campo de entrada oculto (se necessário)
        // ratingInput.value = rating;
        // Exemplo de feedback visual para indicar a classificação selecionada
        const stars = starRating.querySelectorAll('.star');
        stars.forEach(star => {
            const value = parseInt(star.getAttribute('data-value'));
            if (value <= rating) {
                star.classList.add('rated');
            } else {
                star.classList.remove('rated');
            }
        });
    }
});