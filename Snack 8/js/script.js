// Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.


userArray = [];

let index = userArray.lenght;

while (index > 6) {
   
    let userNumber = Number.parseInt( prompt("Insert number"), 10);
    
    if (userNumber % 2 === 1) {
        userArray.push(userNumber)
    }
    
}