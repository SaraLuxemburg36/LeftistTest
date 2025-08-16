const questions = [
    {
        text: "L'unico modo in cui è possibile cambiare la società è attraverso riforme e compromessi.",
        answers: [
            { text: "Completamente d'accordo", value: 3 },
            { text: "D'accordo", value: 2 },
            { text: "Parzialmente d'accordo", value: 1 },
            { text: "Dipende/Neutrale", value: 0 },
            { text: "Parzialmente in disaccordo", value: -1 },
            { text: "In disaccordo", value: -2 },
            { text: "Completamente in disaccordo", value: -3 }
        ]
    },
    // Aggiungi le altre domande qui
];

let currentQuestionIndex = 0;
let answers = [];

function loadQuestion(index) {
    const question = questions[index];
    document.getElementById('question-text').textContent = question.text;
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.dataset.value = answer.value;
        button.onclick = () => handleAnswer(answer.value);
        answersContainer.appendChild(button);
    });
}

function handleAnswer(value) {
    answers.push(value);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

function showResults() {
    const score = answers.reduce((acc, val) => acc + val, 0);
    alert(`Il tuo punteggio totale è: ${score}`);
}

document.getElementById('start-button').onclick = () => {
    document.getElementById('start-button').style.display = 'none';
    loadQuestion(currentQuestionIndex);
};
