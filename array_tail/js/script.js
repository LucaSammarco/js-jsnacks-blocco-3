// 2. La coda dell'Array
// Cartella: array_tail
// Creiamo  un array chiedendo all'utente quanti elementi dovrà contenere e
// generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array

// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare

// Suggerimenti:
// Probabilmente  conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array


let userNum = Number.parseInt( prompt("Insert number"), 10);
let userArray = []

    if (userNum < 5) {
        userNum = (Math.floor(Math.random() * 100 + 1));        
    }


    for (let index = 0; index < userNum; index++) {
        userArray.push(Math.floor(Math.random() * 100 + 1));
  
    }

lastFive = userArray.slice(-5);


    console.log(lastFive)
