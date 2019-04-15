import { characterFrom } from './ex-02';

const input = {"The Walking Dead" : "Rick Grimes","Breaking Bad" : "Walter White","Game of Thrones" : "Jon Snow","Vikings" : "Ragnar Lothbrok","Dark" : "Ulrich Nielsen"}
const output = ["Rick Grimes est un personnage de The Walking Dead", "Walter White est un personnage de Breaking Bad", "Jon Snow est un personnage de Game of Thrones", "Ragnar Lothbrok est un personnage de Vikings", "Ulrich Nielsen est un personnage de Dark"]

test('La fonction renvoie un tableau avec des strings Valeur est un personnage de clé', () => {
    const expected = characterFrom(input)

    expect(expected).toEqual(output)
})