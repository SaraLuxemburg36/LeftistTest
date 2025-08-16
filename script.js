// Array delle prime 10 domande
const domande = [
  "L'unico modo in cui è possibile cambiare la società è attraverso riforme e compromessi.",
  "Generalmente le rivoluzioni portano più danni che benefici.",
  "Neanche contro governi autoritari è ammissibile l'uso della violenza.",
  "Il cambiamento sociale dev'essere graduale.",
  "Quando ogni altra possibilità è esaurita, dovrebbe essere presa in considerazione la rivolta violenta.",
  "Il nostro partito deve sfruttare le elezioni democratiche per salire al potere.",
  "In tempo di pace, è necessario partecipare alla democrazia liberale. In tempo di guerra, bisogna fare la rivoluzione.",
  "La rivoluzione è la strada migliore per realizzare un cambiamento radicale della società.",
  "La completa socializzazione dell'economia è meglio di una riforma graduale del capitalismo.",
  "Il nostro movimento non dovrebbe partecipare alla politica liberale."
];

// Risposte possibili
const risposte = [
  "Completamente d'accordo",
  "D'accordo",
  "Parzialmente d'accordo",
  "Dipende/Neutrale",
  "Parzialmente in disaccordo",
  "In disaccordo",
  "Completamente in disaccordo"
];

let indiceDomanda = 0;

// Funzione per mostrare la domanda corrente e i pulsanti
function mostraDomanda() {
  const body = document.body;

  // Puliamo il contenuto precedente (tranne il titolo)
  body.querySelectorAll('.domanda-container').forEach(el => el.remove());

  const container = document.createElement('div');
  container.className = 'domanda-container';

  // Mostriamo la domanda
  const domandaEl = document.createElement('p');
  domandaEl.textContent = domande[indiceDomanda];
  container.appendChild(domandaEl);

  // Creiamo i pulsanti delle risposte
  risposte.forEach((testo, i) => {
    const btn = document.createElement('button');
    btn.textContent = testo;
    btn.onclick = () => prossimaDomanda();
    container.appendChild(btn);
  });

  body.appendChild(container);
}

// Funzione per passare alla prossima domanda
function prossimaDomanda() {
  indiceDomanda++;
  if (indiceDomanda < domande.length) {
    mostraDomanda();
  } else {
    alert("Hai completato questa sezione del test!");
    // Qui in seguito potremo passare alla sezione successiva o mostrare i risultati
  }
}

// Funzione collegata al pulsante "Inizia"
function iniziaTest() {
  mostraDomanda();
}
