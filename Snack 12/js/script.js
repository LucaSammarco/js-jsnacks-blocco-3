
// TODO Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.



// let firstWord = prompt("First word");

// let secondWord = prompt("Second word");


function twoWords(firstWord, secondWord) {

    if (firstWord.length === secondWord.length) {
        let sameLenght = firstWord + secondWord
        return sameLenght
    } else {
        if (firstWord.length > secondWord.length) {
            return firstWord
            
        }else {
            return secondWord
        }
    }
    
}