// -----------------------------------
console.log("1/ Implémentez une fonction qui transforme un texte en camelCase.");
function strCamelCase(a) {
    var b = a.normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(/[^A-Za-z0-9]/g);
    b.forEach(function (c, d) {
        b[d] = c.charAt(0).toUpperCase() + c.substr(1).toLowerCase();
    });
    return b.join('');
}
console.log(strCamelCase("Ceci est un texte"));

// -----------------------------------
console.log("2/ Implémentez une fonction qui retroune le plus grand mot d'un texte.");

function returnMostWordOfText(text) {
    const words = text.split(" ");
    let mostWord = "";
    for (let word of words) {
        if (word.length > mostWord.length) {
            mostWord = word;
        }
    }
    return mostWord;
}
console.log(returnMostWordOfText("ceci est un super texte tres grand, ceci est anticonstitutionnel"));

// -----------------------------------
console.log("3/ Implémentez une fonction qui converti un nombre de seconde en un tableau exprimant cette durée en secondes, minutes, heures, jours, semaines et années.");

console.log();

// -----------------------------------
console.log("4/ Implémentez une fonction qui prend en paramètre un tableau retourné par la fonction précédente et retourne la chaîne de caractère correspondante.");

function formatPlayersName(sortedPlayers){
    return sortedPlayers.join(", ");
}
const sortedPlayers = [
    "José", "René", "Josette", "Monique", "Ginette"
];

const formattedNames = formatPlayersName(sortedPlayers);
console.log(formattedNames);//?????????????

// -----------------------------------
console.log("5/ Implémentez une fonction qui compte dans le texte en premier paramètre, le nombre d'occurence de la lettre en second paramètre.");

console.log();

// -----------------------------------
console.log("6/ Implémentez une fonction qui retourne les X plus grandes valeurs d'un tableau.");

console.log();

// -----------------------------------
console.log("7/ Retournez la liste des prenoms des joueurs ci-dessous par ordre de score décroissant.");

const players  = {
    Camille: 88,
    Lola: 125,
    Isaac: 174,
    Aldrick: 426,
    Ismaël: 248,
    Lilian: 478,
    Charley: 225,
    Thierry: 255,
    Cameron: 205,
    Tanguy: 155,
    Jenny: 125
};

console.log();

// -----------------------------------
console.log("8/ Dans la liste des scores ci-dessus sélectionnez une partie des meilleurs joueurs jusqu'à obtenir un total de score des joueurs sélectionnés de 1000.");

console.log();
