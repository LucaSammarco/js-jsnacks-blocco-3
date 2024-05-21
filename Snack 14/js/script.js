// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

// let userSeconds = parseInt(prompt("Enter a Value", "0"), 10);

function askSeconds() {
  userSeconds = parseInt(prompt("Enter a Value", "0"), 10);
  return userSeconds;
}

setTimeout((askSeconds) => {
  
}, 0);