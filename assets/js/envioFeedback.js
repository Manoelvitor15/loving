// Função para lidar com o envio do formulário
feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    const newFeedback = document.createElement('div');
    newFeedback.classList.add('feedback');

    const ratingStars = starRating.querySelectorAll('.star.rated').length;
    const ratingStarsHTML = '★'.repeat(ratingStars);
    newFeedback.innerHTML = `<p>${nameInput.value} - Classificação: <span class="rating">${ratingStarsHTML}</span></p>
                              <p>${feedbackTextArea.value}</p>`;

    carousel.appendChild(newFeedback);
    currentIndex = carousel.children.length - 1;
    updateCarousel();

    // Limpar os campos após o envio
    feedbackTextArea.value = '';
    nameInput.value = '';

    // Aqui você pode adicionar a lógica para enviar os dados do formulário, como via AJAX ou outra técnica
    alert('Feedback enviado!'); // Exemplo de mensagem de feedback
});