// Array delle domande con il loro grado
const domande = [
  { testo: "L'unico modo in cui è possibile cambiare la società è attraverso riforme e compromessi.", grado: "alto" },
  { testo: "Generalmente le rivoluzioni portano più danni che benefici.", grado: "medio" },
  { testo: "Neanche contro governi autoritari è ammissibile l'uso della violenza.", grado: "medio" },
  { testo: "Il cambiamento sociale dev'essere graduale.", grado: "medio" },
  { testo: "Quando ogni altra possibilità è esaurita, dovrebbe essere presa in considerazione la rivolta violenta.", grado: "basso" },
  { testo: "Il nostro partito deve sfruttare le elezioni democratiche per salire al potere.", grado: "basso" },
  { testo: "In tempo di pace, è necessario partecipare alla democrazia liberale. In tempo di guerra, bisogna fare la rivoluzione.", grado: "medio" },
  { testo: "La rivoluzione è la strada migliore per realizzare un cambiamento radicale della società.", grado: "medio" },
  { testo: "La completa socializzazione dell'economia è meglio di una riforma graduale del capitalismo.", grado: "medio" },
  { testo: "Il nostro movimento non dovrebbe partecipare alla politica liberale.", grado: "alto" }
];

// Array delle risposte
const risposte = [
  "Completamente d'accordo",
  "D'accordo",
  "Parzialmente d'accordo",
  "Dipende/Neutrale",
  "Parzialmente in disaccordo",
  "In disaccordo",
  "Completamente in disaccordo"
];

// Valori delle risposte in base al grado della domanda
const valori = {
  alto: [3, 2, 1, 0, -1, -2, -3],
  medio: [1.5, 1, 0.5, 0, -0.5, -1, -1.5],
  basso: [1, 0.5, 0.25, 0, -0.25, -0.5, -1]
};

let indiceDomanda = 0;
let punteggi = [];

// Funzione per mostrare la domanda corrente e i pulsanti
function mostraDomanda() {
  const body = document.body;

  // Puliamo il contenuto precedente (tranne il titolo)
  body.querySelectorAll('.domanda-container').forEach(el => el.remove());

  const container = document.createElement('div');
  container.className = 'domanda-container';

  // Mostriamo la domanda
  const domandaEl = document.createElement('p');
  domandaEl.textContent = domande[indiceDomanda].testo;
  container.appendChild(domandaEl);

  // Creiamo i pulsanti delle risposte
  risposte.forEach((testo, i) => {
    const btn = document.createElement('button');
    btn.textContent = testo;
    btn.onclick = () => {
      salvaRisposta(i);
      prossimaDomanda();
    };
    container.appendChild(btn);
  });

  body.appendChild(container);
}

// Funzione per salvare il punteggio della risposta
function salvaRisposta(indiceRisposta) {
  const grado = domande[indiceDomanda].grado;
  const valore = valori[grado][indiceRisposta];
  punteggi.push(valore);
  console.log(`Domanda ${indiceDomanda + 1}: punteggio = ${valore}`);
}

// Funzione per passare alla prossima domanda
function prossimaDomanda() {
  indiceDomanda++;
  if (indiceDomanda < domande.length) {
    mostraDomanda();
  } else {
    mostraRisultato();
  }
}

// Funzione per mostrare il punteggio totale (per ora semplice alert)
function mostraRisultato() {
  const totale = punteggi.reduce((a, b) => a + b, 0);
  alert(`Hai completato questa sezione. Punteggio totale: ${totale}`);
}

// Funzione collegata al pulsante "Inizia"
function iniziaTest() {
  mostraDomanda();
}
