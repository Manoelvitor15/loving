// Configure o Firebase com as credenciais do seu projeto
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_DOMÍNIO.firebaseapp.com",
    databaseURL: "https://SEU_PROJETO.firebaseio.com",
    projectId: "SEU_PROJETO",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Referência ao banco de dados do Firebase
const database = firebase.database();

window.addEventListener('load', function() {
    // Recupere os feedbacks do Firebase e exiba-os
    database.ref('feedbacks').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            const feedbackData = childSnapshot.val();
            addFeedbackToDOM(feedbackData);
        });
    });
});

const feedbackForm = document.getElementById('feedbackForm');
const feedbackList = document.getElementById('feedbackList');
let feedbackCount = 0;

feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedbackText').value;

    feedbackCount++;
    const feedbackData = { id: feedbackCount, name: name, feedback: feedback };

    addFeedbackToDOM(feedbackData);
    saveFeedbackToFirebase(feedbackData);

    document.getElementById('name').value = '';
    document.getElementById('feedbackText').value = '';
});

function addFeedbackToDOM(feedbackData) {
    const li = document.createElement('li');
    li.textContent = `${feedbackData.id}. ${feedbackData.name}: ${feedbackData.feedback}`;
    feedbackList.appendChild(li);
}

function saveFeedbackToFirebase(feedbackData) {
    database.ref('feedbacks').push(feedbackData);
}
