/**
 *
 * Palindrome est une figure de style désignant un texte ou un mot dont l'ordre
 * des lettres reste le même qu'on le lise de gauche à droite ou de
 * droite à gauche. comme dans la phrase « Esope reste ici et se repose »
 * ou encore « La mariee ira mal » à un accent près.
 *
 * Créer une fonction palindrome qui teste si un string est un Palindrome.
 *
 * Exemples :
 *
 * Entrée                       |   Sortie
 *
 * Esope reste ici et se repose |   true
 * La mariee ira mal            |   true
 * Non                          |   true
 * Oui                          |   false
 *
 *
 * @returns {boolean}
 */

export function palindrome(str) {
    // Your code here
    const clear = str.replace(/\s/g, '').toLowerCase()
    return (clear === clear.split('').reverse().join(''))
}