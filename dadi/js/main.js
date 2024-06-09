// Gioco dei dadi :dado_da_gioco:
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// creiamo i 2 dadi

let dicePlayer = [1, 2, 3, 4, 5, 6]
let dicePc = [1, 2, 3, 4, 5, 6]

// creo il generatore dei lanci

let randomPlayer = Math.floor(Math.random()*6);

console.log(randomPlayer);

let randomPc = Math.floor(Math.random()*6);

console.log(randomPc);

// Chi vince

if(randomPlayer > randomPc){
    randomPlayer = "Vince Player"

    console.log(randomPlayer);
} else if(randomPlayer < randomPc){
    randomPc = "Vince Pc"

    console.log(randomPc);
} else {
    Pari = "Pari"

    console.log(Pari);
}
   