// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

let userSeconds = parseInt(prompt("Enter a Value", "0"), 10);

const timer = setInterval(function() {
  userSeconds--;
  console.log(userSeconds);
  if (userSeconds <= 0) {
    clearInterval(timer);
    alert("buonanno");
  }
}, 1000);
