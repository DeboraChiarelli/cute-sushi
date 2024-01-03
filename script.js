// Inizia la definizione della funzione nextPage, che viene chiamata quando l'utente clicca sul pulsante "Yes". Questa funzione ha il compito di reindirizzare l'utente alla pagina "yes.html".
function nextPage() {
    window.location.href = "yes.html"; // Proprietà che rappresenta l'URL della pagina corrente. L'assegnazione di "yes.html" a window.location.href provoca il reindirizzamento del browser alla pagina "yes.html".
}
// Inizia la definizione della funzione moveButton, che viene chiamata quando l'utente passa il mouse sopra o clicca sul pulsante "No". Questa funzione ha il compito di spostare il pulsante "No" in posizioni casuali sulla pagina.
function moveButton() {
    const x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85; // Math.random()restituisce un numero casuale compreso tra 0 (incluso) e 1 (escluso). Window.innerWidth restituisce la larghezza della finestra del browser. Document.getElementById('noButton').offsetWidth restituisce la larghezza del pulsante "No". Similarmente, window.innerHeight restituisce l'altezza della finestra del browser e document.getElementById('noButton').offsetHeight restituisce l'altezza del pulsante "No". Queste variabili (x e y) vengono utilizzate per calcolare le nuove coordinate della posizione del pulsante "No".
    const y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
    document.getElementById('noButton').style.left = `${x}px`; // Queste linee di codice impostano la posizione del pulsante "No" spostandolo alle coordinate calcolate.
    document.getElementById('noButton').style.top = `${y}px`;
}

// In sintesi, la prima funzione gestisce il reindirizzamento alla pagina "yes.html" quando l'utente clicca sul pulsante "Yes", mentre la seconda funzione muove il pulsante "No" in posizioni casuali sulla pagina quando l'utente passa il mouse sopra o clicca su di esso.
