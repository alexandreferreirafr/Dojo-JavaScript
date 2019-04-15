/**
 *
 * Créer une function characterFrom qui récupère un objet "clé" : "valeur" et retourne un
 * tableau de strings "valeur est un personnage de clé" correspondant à chaque clé valeur du objet
 *
 * Exemple :
 *
 * Entrée : {
 *     "The Walking Dead" : "Rick Grimes",
 *     "Breaking Bad" : "Walter White",
 *     "Game of Thrones" : "Jon Snow",
 *     "Vikings" : "Ragnar Lothbrok",
 *     "Dark" : "Ulrich Nielsen"
*      }
 *
 * Retour : [
 *      "Rick Grimes est un personnage de The Walking Dead",
 *      "Walter White est un personnage de Breaking Bad",
 *      "Jon Snow est un personnage de Game of Thrones",
 *      "Ragnar Lothbrok est un personnage de Vikings",
 *      "Ulrich Nielsen est un personnage de Dark"
 *      ]
 *
 *
 * @returns {array of strings}
 */

export function characterFrom(obj) {
    // Your code here
    return Object.entries(obj) //Create an array of arrays with properties and values from the object
        .map(item => `${item[1]} est un personnage de ${item[0]}`) //Convert each array to a string
}