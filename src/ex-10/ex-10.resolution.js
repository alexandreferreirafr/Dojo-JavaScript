/**
 *
 *  Créez une fonction objectToQueryString qui va prendre un object en paramètre et
 *  va retourner une query string. La query string ne doit pas avoir les propriétés
 *  qui ont null ou srting vide comme valeur
 *
 * Exemple :
 *
 * Entrée : {
 *     marqueSelect: "BMW",
 *     modeleSelect: "318",
 *     newCar: '',
 *     possession_vehicule: "Oui",
 *     imat: null
 * }
 *
 * Sortie : "?marqueSelect=BMW&modeleSelect=318&possession_vehicule=Oui"
 *
 * @returns {string}
 */

export function objectToQueryString(obj) {
    // Your code here
    return Object.entries(obj)
        .filter(item => item[1] !== null && item[1] !== '')         // filter valeurs vides ou nulls
        .reduce((acc, item, idx, arr)=> {
            const joinner = idx === arr.length -1 ? '' : '&'        // créer le joinner '&' ou '' à la fin
            return acc += `${item[0]}=${item[1]}${joinner}`         // contacter la string
        }, '?')
}