// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.


const arrayOne = [1, 2, 3, 4, 5, 5, 3, 85, 4553, 1, 45, 453];
const arrayTwo = [1, 2, 3, 4, 5, 6, 7];

if (arrayOne.length < arrayTwo.length) {
    while (arrayOne.length < arrayTwo.length) {
        arrayOne.push(arrayOne.length + 1);
    }
} 


if (arrayTwo.length < arrayOne.length) {
    while (arrayTwo.length < arrayOne.length) {
        arrayTwo.push(arrayTwo.length + 1);
    }
} 




console.log(arrayOne.length, arrayTwo)