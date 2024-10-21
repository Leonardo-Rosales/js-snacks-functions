/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function getInitials(names) {
    let initialNames = [];

    for (let i = 0; i < names.length; i++) {
        let name = names[i]; 
        let firstName = name.split(' ')[0]; 
        let initial = firstName[0]; 
        initialNames.push(initial);
    }

    return initialNames;
    
}

// Invoca la funzione qui e stampa il risultato in console

let initials = getInitials(names);
console.log(initials);




//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


