const end = document.getElementById('final-result')

const myname = prompt('Inserisci il tuo nome');
console.log(myname);

const surname = prompt('Inserisci il tuo cognome');
console.log(surname);

const color = prompt('Colore preferito');
console.log(color);

const age = prompt('Inserisci la tua età')
console.log(age);

const FinalRow = myname + surname + color + age;
console.log(FinalRow);

end.innerText = FinalRow;