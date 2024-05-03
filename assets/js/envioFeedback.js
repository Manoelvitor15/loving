const feedbackForm = document.getElementById('feedbackForm');
const feedbackList = document.getElementById('feedbackList');
let feedbackCount = 0;

// Carregar feedbacks salvos no armazenamento local ao carregar a página
window.addEventListener('load', function() {
    const savedFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    savedFeedbacks.forEach(function(feedback) {
        addFeedbackToDOM(feedback);
    });
});

feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedbackText').value;

    feedbackCount++;
    const feedbackData = { id: feedbackCount, name: name, feedback: feedback };

    addFeedbackToDOM(feedbackData);
    saveFeedbackToLocalStorage(feedbackData);

    document.getElementById('name').value = '';
    document.getElementById('feedbackText').value = '';
});

function addFeedbackToDOM(feedbackData) {
    const li = document.createElement('li');
    li.textContent = `${feedbackData.id}. ${feedbackData.name}: ${feedbackData.feedback}`;
    feedbackList.appendChild(li);
}

function saveFeedbackToLocalStorage(feedbackData) {
    const savedFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    savedFeedbacks.push(feedbackData);
    localStorage.setItem('feedbacks', JSON.stringify(savedFeedbacks));
}

