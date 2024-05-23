// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.


const automobili = [
  { marca: 'Toyota', modello: 'berlina', alimentazione: 'benzina' },
  { marca: 'Honda', modello: 'berlina', alimentazione: 'diesel' },
  { marca: 'Ford', modello: 'cabriolet', alimentazione: 'benzina' },
  { marca: 'Chevrolet', modello: 'cabriolet', alimentazione: 'benzina' },
  { marca: 'BMW', modello: 'roadster', alimentazione: 'benzina' },
  { marca: 'Audi', modello: 'berlina', alimentazione: 'diesel' },
  { marca: 'Mercedes-Benz', modello: 'berlina', alimentazione: 'elettrico' },
  { marca: 'Volkswagen', modello: 'station wagon', alimentazione: 'diesel' },
  { marca: 'Hyundai', modello: 'SUV', alimentazione: 'gpl' },
  { marca: 'Nissan', modello: 'SUV', alimentazione: 'metano' },
  { marca: 'Kia', modello: 'crossover', alimentazione: 'elettrico' },
  { marca: 'Subaru', modello: 'berlina', alimentazione: 'benzina' },
  { marca: 'Mazda', modello: 'berlina', alimentazione: 'diesel' },
  { marca: 'Tesla', modello: 'berlina', alimentazione: 'elettrico' },
  { marca: 'Volvo', modello: 'station wagon', alimentazione: 'metano' }
];

automobili.forEach(automobile => {
   element = automobile 
  
  console.log(automobile)
});

const 