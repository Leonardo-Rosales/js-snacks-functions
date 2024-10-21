/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function filterWordsByLetter(words, letter) {
    let filteredWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.charAt(0) === letter) {
            filteredWords.push(word);
        }
    }

    return filteredWords;
}


// Invoca la funzione qui e stampa il risultato in console

let startingLetter = "A"; 
let result = filterWordsByLetter(names, startingLetter); 


console.log(result); 

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

