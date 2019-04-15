/**
 *
 * La méthode Array.prototype.sort ne gère pas correctement les charactères spéciaux.
 * Pour pouvoir effectuer le tri correctement, il faut passer en paramètre une fonction
 * de callback qui gère correctement les charactères spéciaux.
 *
 * Créez une fonction comparator qui compare corretement deux strings envoyés en paramètre.
 *
 *  Exemple :
 *
 *  Entrée                  |   Sortie
 *
 *  a       |   b           |
 *
 *  'école' |   'extérieur' |   -1
 *  'école' |   'eau'       |   1
 *  'école' |   'école'     |   0
 *
 * @returns {number}
 */

export function comparator(a, b) {
    // Your code here
    return a.localeCompare(b);
}