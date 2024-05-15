// Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.


const userArray = [];


while (userArray.length < 6) {
   
    let userNumber = Number.parseInt( prompt("Insert number"), 10);
    
    if (userNumber % 2 === 1) {
        userArray.push(userNumber)
    }
    
}