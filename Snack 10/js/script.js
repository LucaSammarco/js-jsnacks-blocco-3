// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const userArray = []

let sum = 0


let userNumber = Number.parseInt( prompt("Insert number"), 10);

while (sum > 50) {

    userArray.push(userNumber);
    userNumber += sum;
    
}