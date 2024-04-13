// -----------------------------------
console.log("1/ Implémentez une fonction qui transforme un texte en camelCase.");

/**
 * Split text in words and return an array
 * @param {string} text - The text to split 
 * @returns {array} array of words
 */
function splitTextInWords(text) {
    return text.match(/\w+/g);
}

/**
 * Turn a string with an upper case
 * @param {string} - the word to capitalized
 * @return {string} - capitalized word
 */
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

/**
 * Get a text in CamelCase.
 * @param {string} text - a text.
 * @returns {string} - Get a text in CamelCase.
 */
function transformCamelCase(text) {
    let words = splitTextInWords(text.toLowerCase());
    for (let index = 1; index < words.length; index++) {
        words[index] = words[index][0].toUpperCase() + words[index].slice(1);
    }
    return words.join("");
}

/**
 * Remove accents from the given text
 * @param {string} text - Original text
 * @returns {string} The original text without accent
 */
function removeAccent(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function transformCamelCase2(text) {
    return splitTextInWords(removeAccent(text).toLowerCase())
        .map((w, i) => i === 0 ? w : capitalize(w))
        .join("");
}

console.log(transformCamelCase("TEST pour voir le camelcase"));
console.log(transformCamelCase2("TEST pour voir le camelcase"));
console.log(transformCamelCase2("à QUOI bon-étreindre/ cEs draps ébouri%ffés"));

// -----------------------------------
console.log("2/ Implémentez une fonction qui retroune le plus grand mot d'un texte.");

/**
 * Gets the longest word of a text
 * @param {string} text - text to analyse
 * @returns {string} the longest word from the text
 */
function getLongestWord(text) {
    let longestWord;
    for (const word of splitTextInWords(text)) {
        if (longestWord === undefined || word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

function getLongestWord2(text) {
    return splitTextInWords(text)
        .reduce((a, b) => a.length > b.length ? a : b);
}

console.log(getLongestWord("Implémentez une fonction qui retroune le plus grand mot d'un texte"));
console.log(getLongestWord2("une fonction qui converti un nombre de seconde en un tableau exprimant cette durée en secondes, minutes, heures, jours, semaines et années."));

// -----------------------------------
console.log("3/ Implémentez une fonction qui converti un nombre de seconde en un tableau exprimant cette durée en secondes, minutes, heures, jours, semaines et années.");
function transformTime(timeInS) {
    const years = Math.floor(timeInS / (60 * 60 * 24 * 365));
    const restofYear = timeInS % (60 * 60 * 24 * 365);

    const weeks = Math.floor(restofYear / (60 * 60 * 24 * 7));
    const restOfWeek = restofYear % (60 * 60 * 24 * 7);

    const days = Math.floor(restOfWeek / (60 * 60 * 24));
    const restOfDay = restOfWeek % (60 * 60 * 24);
    return [
        years,
        weeks,
        days
    ];
}

function transformTime2(seconds) {
    const dividers = [60, 60, 24, 7, 52];
    const duration = [seconds];
    dividers.forEach(function(divider, i) {
        duration.push(Math.floor(duration[i] / divider));
        duration[i] %= divider;
    });

    console.log(dividers);
    return duration;

}
console.log(transformTime2(315362222));

// -----------------------------------
console.log("4/ Implémentez une fonction qui prend en paramètre un tableau retourné par la fonction précédente et retourne la chaîne de caractère correspondante.");
console.log();

// -----------------------------------
// console.log("5/ Implémentez une fonction qui compte dans le texte en premier paramètre, le nombre d'occurence de la lettre en second paramètre.");

// console.log();

// -----------------------------------
// console.log("6/ Implémentez une fonction qui retourne les X plus grandes valeurs d'un tableau.");

// console.log();

// -----------------------------------
// console.log("7/ Retournez la liste des prenoms des joueurs ci-dessous par ordre de score décroissant.");

// const players  = {
//     Camille: 88,
//     Lola: 125,
//     Isaac: 174,
//     Aldrick: 426,
//     Ismaël: 248,
//     Lilian: 478,
//     Charley: 225,
//     Thierry: 255,
//     Cameron: 205,
//     Tanguy: 155,
//     Jenny: 125
// };

// console.log();

// -----------------------------------
// console.log("8/ Dans la liste des scores ci-dessus sélectionnez une partie des meilleurs joueurs jusqu'à obtenir un total de score des joueurs sélectionnés de 1000.");

// console.log();
