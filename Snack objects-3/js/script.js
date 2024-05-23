// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.



const persone = [
  { nome: 'Luca', cognome: 'Rossi', eta: 10 },
  { nome: 'Maria', cognome: 'Bianchi', eta: 25 },
  { nome: 'Giovanni', cognome: 'Verdi', eta: 40 },
  { nome: 'Anna', cognome: 'Neri', eta: 12 },
  { nome: 'Paolo', cognome: 'Gialli', eta: 35 },
  { nome: 'Francesca', cognome: 'Marrone', eta: 28 },
  { nome: 'Stefano', cognome: 'Blu', eta: 45 },
  { nome: 'Elena', cognome: 'Azzurri', eta: 32 },
  { nome: 'Marco', cognome: 'Viola', eta: 15 },
  { nome: 'Chiara', cognome: 'Rosa', eta: 27 }
];

let maggiorenni = persone.filter(persona => persona.eta > 18);

console.log(maggiorenni);

maggiorenni.forEach(element => {
  console.log(element.nome + " " + element.cognome + " " + "puo' guidare")
});