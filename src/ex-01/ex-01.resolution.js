/**
 * Exercice 01
 *
 * Créer une function sortNumbers qui récupère un tableau de strings de nombres entiers en paramètre et
 * retourne un autre tableau de strings en trié en ordre croissante
 *
 * Exemple :
 *
 * Entrée : ["35", "79", "66", "22", "59", "13", "97", "5", "99"]
 *
 * Retour : ["5", "13", "22", "35", "59", "66", "79", "97", "99"]
 *
 * Le tableau d'entrée ne doit pas être modifié
 *
 * @returns {array of strings}
 */

export function sortNumbers(arr) {
    // Your code here
    return arr
        .map(str => Number.parseInt(str)) //convert string to integer
        .sort((a, b) => a - b) //sort
        .map(nb => nb.toString()) //convert integer to string
}