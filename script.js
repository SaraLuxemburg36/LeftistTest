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
    {
        text: "Generalmente le rivoluzioni portano più danni che benefici.",
        answers: [
            { text: "Completamente d'accordo", value: 1.5 },
            { text: "D'accordo", value: 1 },
            { text: "Parzialmente d'accordo", value: 0.5 },
            { text: "Dipende/Neutrale", value: 0 },
            { text: "Parzialmente in disaccordo", value: -0.5 },
            { text: "In disaccordo", value: -1 },
            { text: "Completamente in disaccordo", value: -1.5 }
        ]
    },
    {
        text: "Neanche contro governi autoritari è ammissibile l'uso della violenza.",
        answers: [
            { text: "Completamente d'accordo", value: 1.5 },
            { text: "D'accordo", value: 1 },
            { text: "Parzialmente d'accordo", value: 0.5 },
            { text: "Dipende/Neutrale", value: 0 },
            { text: "Parzialmente in disaccordo", value: -0.5 },
            { text: "In disaccordo", value: -1 },
            { text: "Completamente in disaccordo", value: -1.5 }
        ]
    },
    {
        text: "Il cambiamento sociale dev'essere graduale.",
        answers: [
            { text: "Completamente d'accordo", value: 1.5 },
            { text: "D'accordo", value: 1 },
            { text: "Parzialmente d'accordo", value: 0.5 },
            { text: "Dipende/Neutrale", value: 0 },
            { text: "Parzialmente in disaccordo", value: -0.5 },
            { text: "In disaccordo", value: -1 },
            { text: "Completamente in disaccordo", value: -1.5 }
        ]
    },
    {
        text: "Quando ogni altra possibilità è esaurita, dovrebbe essere presa in considerazione la rivolta violenta.",
        answers: [
            { text: "Completamente d'accordo", value: 1 },
            { text: "D'accordo", value: 0.5 },
            { text: "Parzialmente d'accordo", value: 0.25 },
            { text: "Dipende/Neutrale", value: 0 },
            { text: "Parzialmente in disaccordo", value: -0.25 },
            { text: "In disaccordo", value: -0.5 },
            { text: "Completamente in disaccordo", value: -1 }
        ]
    },
    {
        text: "Il nostro partito deve sfruttare le elezioni democratiche per salire al potere.",
        answers: [
            { text: "Completamente d'accordo", value: 1 },
            { text: "D'accordo", value: 0.5 },
            { text: "Parzialmente d'accordo", value: 0.25 },
            { text: "Dipende/Neutrale", value: 0 },
            { text: "Parzialmente in disaccordo", value: -0.25 },
            { text: "In disaccordo", value: -0.5 },
            { text: "Completamente in disaccordo", value: -1 }
        ]
    },
    {
        text: "In tempo di pace, è necessario partecipare alla democrazia liberale. In tempo di guerra, bisogna fare la rivoluzione.",
        answers: [
            { text: "Completamente d'accordo", value: 1.5 },
            { text: "D'accordo", value: 1 },
            { text: "Parzialmente d'accordo", value: 0.5 },
            { text: "Dipende/Neutrale", value: 0 },
            { text: "Parzialmente in disaccordo", value: -0.5 },
            { text: "In disaccordo", value: -1 },
            { text: "Completamente in disaccordo", value: -1.5 }
        ]
    },
    {
        text: "La rivoluzione è la strada migliore per realizzare un cambiamento radicale della società.",
        answers: [
            { text: "Completamente d'accordo", value: 1.5 },
            { text: "D'accordo", value: 1 },
            { text: "Parzialmente d'accordo", value: 0.5 },
            { text: "Dipende/Neutrale", value: 0 },
            { text: "Parzialmente in disaccordo", value: -0.5 },
            { text: "In disaccordo", value: -1 },
            { text: "Completamente in disaccordo", value: -1.5 }
        ]
    },
    {
        text: "La completa socializzazione dell'economia è meglio di una riforma graduale del capitalismo.",
        answers: [
            { text: "Completamente d'accordo", value: 1.5 },
            { text: "D'accordo", value: 1 },
            { text: "Parzialmente d'accordo", value: 0.5 },
            { text: "Dipende/Neutrale", value: 0 },
            { text: "Parzialmente in disaccordo", value: -0.5 },
            { text: "In disaccordo", value: -1 },
            { text: "Completamente in disaccordo", value: -1.5 }
        ]
    },
    {
        text: "Il nostro movimento non dovrebbe partecipare alla politica liberale.",
        answers: [
            { text: "Completamente d'accordo", value: 3 },
            { text: "D'accordo", value: 2 },
            { text: "Parzialmente d'accordo", value: 1 },
            { text: "Dipende/Neutrale", value: 0 },
            { text: "Parzialmente in disaccordo", value: -1 },
            { text: "In disaccordo", value: -2 },
            { text: "Completamente in disaccordo", value: -3 }
        ]
    }
];

let currentQuestionIndex = 0;
let answers = [];

const startButton = document.getElementById('start-button');
const subtitle = document.getElementById('subtitle');
const questionContainer = document.getElementById('question-container');
const title = document.getElementById('title');

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    subtitle.style.display = 'none'; // elimina il sottotitolo durante le domande
    questionContainer.style.display = 'block';
    title.style.marginBottom = "10px"; // sposta più vicino in alto
    loadQuestion(currentQuestionIndex);
});

function loadQuestion(index) {
    const question = questions[index];
    document.getElementById('question-number').textContent = `Domanda ${index + 1} di ${questions.length}`;
    document.getElementById('question-text').textContent = question.text;

    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.addEventListener('click', () => {
            answers.push(answer.value);
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion(currentQuestionIndex);
            } else {
                showResults();
            }
        });
        answersContainer.appendChild(button);
    });
}

function showResults() {
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers');

    questionNumber.textContent = "";
    questionText.textContent = "Risultato del test";
    answersContainer.innerHTML = `<p>Punteggio totale: ${answers.reduce((a, b) => a + b, 0)}</p>`;
}

