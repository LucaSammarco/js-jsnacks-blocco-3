// 1. TuttiFrutti
// Cartella array-lista
// Descrizione:
// Abbiamo un frigorifero pieno di frutta: 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
// Fasi
// 1. creare l'array con la frutta del frigorifero
// 2. aggiungere la pesca all'array della frutta
// 3. verificare se nell'array di frutta c'è il cocomero:
//    - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//    - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"

//     HC
//         *Creare array frutta
//         *Aggiungere pesca
//         *Ciclo per verificare se c'è il cocomero. --> Cercare metodo alternativo ad include
// Suggerimenti/Indicazioni:
// Sì, lo sappiamo che esistono le funzioni includes() e indexOf() ma noi non le vogliamo utilizzare per cercare nel frigorifero.


const frutta = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
frutta.push("pesca");
let trovato = false

    for (let index = 0; index < frutta.length; index++) 
        if (frutta[index] === "cocomero") {
           trovato = true;

       
        
    }

    if(trovato) {
     console.log("Trovato! Devo solo preparare il concktail!")
    } else {
        console.log("Oh no, devo uscire a comprare il cocomero!")
    }
