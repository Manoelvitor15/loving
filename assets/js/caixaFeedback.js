const carousel = document.querySelector('.carousel');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        const feedbackForm = document.getElementById('feedbackForm');
        const feedbackTextArea = document.getElementById('feedbackText');
        const nameInput = document.getElementById('name');

        let currentIndex = 0;

        nextButton.addEventListener('click', () => {
            if (currentIndex < carousel.children.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        function updateCarousel() {
            const itemWidth = carousel.children[0].offsetWidth;
            const offset = -currentIndex * itemWidth;
            carousel.style.transform = `translateX(${offset}px)`;
        }