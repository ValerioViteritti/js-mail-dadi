// Mail :email:
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.



// 1- Chiedi all'utente la sua mail

// const emailUser = document.querySelector(".eMail");

// const buttonSend = document.querySelector(".send");

const emailUser = prompt('inserisci email')



    // 1.1 - emailUser.del database

    let dataBase = ["goku@gmail.com", "vegeta@gmail.com", "majinbu@gmail.com"];






// 2 - Confronta la sua mail con quelle del database

// let control =

// function myFunction() {
//     document.getElementById("button").click();
 

let vincitore = false;

for (let i = 0; i < dataBase.length; i++){

    

    if (dataBase[i] === emailUser){
        vincitore = true;
        

    }

    console.log(vincitore);
    // } else {
    //     dataBase[i] !== emailUser
    //     perdente = false;
    //     console.log(perdente);

    // }

}


// }

    // 2.1 - Se la mail è presente passa oltre
    // if (vincitore) {
    //     console.log("Hai vinto!!!");
    // } else {
    //     console.log("Non hai vinto!");
    // }


    // 2.2 - Se la mail NON è presente




// 3 -  Comunica il risultato all'utente


// // Creo dei div
// let square = document.createElement('div');
// square.className = ('d-flex flex-wrap justify-content-center align-items-center gap-4')

// let varianti = '';

// // Ciclo
// for (let i = 1; i <= 100; i++){
    
//     // creiamo dei box con i numeri progressivi all'interno
//     // const element = `<div class="box">${i}</div>`;

//         if(i % 3 === 0 && i % 5 === 0){
//             varianti += `<div class="xxx fizzbuzz">${'FIZZBUZZ'}</div>`;
//             console.log("FIZZBUZZ");
  
//         } else if(i % 3 === 0){
//             varianti += `<div class="xxx fizz">${'FIZZ'}</div>`;
//             console.log("FIZZ");

//         } else if(i % 5 === 0){
//             varianti += `<div class="xxx buzz">${'BUZZ'}</div>`;
//             console.log("BUZZ");

//         } else{
//             varianti += `<div class="xxx">${i + 0}</div>`;
//             console.log(i);
//         }   
// }

// square.innerHTML = varianti;
// // Collegamento all'html
// const container = document.querySelector('.container')
// container.append(square)