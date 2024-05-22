// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.


const palla = {
  nome: "Palla",
  peso: 10
}
console.log(palla)
let nuovoPeso = parseInt(prompt("inserisci peso"));

palla.peso = nuovoPeso;

console.log(palla)