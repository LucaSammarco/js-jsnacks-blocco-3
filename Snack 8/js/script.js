// Snack8 
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.


const snack8 = document.getElementById('snack8');
const divPari = document.createElement('div');
snack8.appendChild(divPari);
divPari.classList.add("verdi");



const divDispari = document.createElement('div');
snack8.appendChild(divDispari);
divDispari.classList.add("rossi");

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 111, 2457];

for (let index = 0; index < numeri.length; index++) {
    if (numeri[index]  % 2 === 0) {
        divPari.innerHTML += numeri[index];
    }

    else {
        divDispari.innerHTML += numeri[index];
    }
    
}