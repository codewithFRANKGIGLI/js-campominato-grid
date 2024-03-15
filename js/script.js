// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno:  :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

// Creare in JavaScript una griglia 10x10.
// Ogni volta che clicco su un quadrato questo 
// si colora di verde se il numero contenuto 
// è pari e in rosso se dispari

// per 64 volte creare un quadratino e ogni quadratino
// lo aggiungo a grid
    // al click su ogni quadrato ne leggere il numero contenuto
    // se è pari lo coloro di rosso altrimenti di verde
    const mainGrid = document.querySelector('#grid');
    console.log(mainGrid);
    for(let i = 1; i <= 100; i++) {
        const newSquare = generateSquare(i);
        mainGrid.append(newSquare);
    }
    
    // Funzione che genera un quadrato
    // number -> numero che rappresenta un numero
    // return: elemento del dom che rappresenta un quadrato
    function generateSquare(number) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.innerHTML = `<span>${number}</span>`;
    
        // Gestione del click su ogni qudrato
        newSquare.addEventListener('click', function() {
            if(number % 2 === 0) {
                this.classList.add('even');
            } else {
                this.classList.add('odd');
            }
        });
    
        return newSquare;
    }