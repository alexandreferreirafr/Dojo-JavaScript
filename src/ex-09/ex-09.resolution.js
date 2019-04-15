/**
 *
 * Créez une fonction queryStringToObject qui prend une query string en
 * paramètre et retourne un object avec les clés / valeurs présents dans
 * la query string
 *
 * Exemple :
 *
 * Entrée : "?marqueSelect=BMW&modeleSelect=318&possession_vehicule=Oui"
 *
 * Sortie : {
 *     marqueSelect: "BMW",
 *     modeleSelect: "318",
 *     possession_vehicule: "Oui"
 * }
 *
 * @returns {object}
 */

export function queryStringToObject(queryString) {
    // Your code here
    const str = queryString.charAt(0) === '?' ? queryString.slice(1) : queryString

    return str
        .split('&')                     // créer une array de clés=valeurs
        .map(item => item.split('='))   // transformer chaque item clé=valeur en ['clé', 'valeur']
        .reduce((acc, item) => {
            acc[item[0]] = item[1]
            return acc
        }, {})                          // transformer l'array dans un object
}