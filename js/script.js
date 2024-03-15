// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// creo l'evento in ascolto del click per rimuovere d-none da grid:
const playBtn = document.querySelector('#playBtn');
playBtn.addEventListener('click', function() {
    const displayGrid  = document.querySelector('#grid');
    displayGrid.classList.remove('d-none');
});

// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// per 100 volte creare un quadratino e ogni quadratino
// lo aggiungo a grid
    const mainGrid = document.querySelector('#grid');
    for(let i = 1; i <= 100; i++) {
        const newSquare = generateSquare(i);    // chiamo la funzione
        mainGrid.append(newSquare);
    }

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
    // number -> numero che rappresenta un numero
    // return: elemento del dom che rappresenta un quadrato

    function generateSquare(number) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.innerHTML = `<span>${number}</span>`;
      
        // Gestione del click su ogni quadrato
        newSquare.addEventListener('click', function() {
            // Cambia il bg dell'elemento cliccato
            this.style.backgroundColor = 'lightskyblue';
        
            // Mostra l'alert togliendo il delay, senza questo prima verrebbe l'alert e poi il cambio del bg
            setTimeout(function() {
                alert(`Hai cliccato:  ${number}`);
            }, 0);
        });
      
        return newSquare;
    }

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno:  :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

