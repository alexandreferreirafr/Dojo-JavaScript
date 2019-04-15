/**
 *
 * Crée une fonction appelé nextLaborDay elle prend une date en entré et
 * retourne le prochain jour ouvré (pour faciliter la tâchen, on prendra
 * pas en compte les jours fériés, do coup les jours ouvrés sont du lundi
 * au vendredi.
 *
 * Exemple :
 *
 * Entrée                   |   Sortie
 * mercredi 10 avril 2019   |   jeudi 11 avril 2019
 * vendredi 12 avril 2019   |   lundi 15 avril 2019
 *
 * La fonction prend en paramètre un objet type Date
 *
 *
 * @returns {date}
 */

export function nextLaborDay(date) {
    // Your code here
    let newDate = new Date(date)
    const weekDay = newDate.getDay()

    let daysToAdd = 1
    if (weekDay === 6) {
        daysToAdd = 2
    } else if (weekDay === 5) {
        daysToAdd = 3
    }
    newDate.setDate(newDate.getDate() + daysToAdd)

    return newDate
}