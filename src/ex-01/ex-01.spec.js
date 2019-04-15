import { sortNumbers } from './ex-01';

const input = ["35", "79", "66", "22", "59", "13", "97", "5", "99"];
const output = ["5", "13", "22", "35", "59", "66", "79", "97", "99"];

test("Le tableau d'entrée n'est pas modifié", () => {
    const inputClone = [...input];

    sortNumbers(input)

    expect(inputClone).toEqual(input)
})

test("Les numéros sont triés en ordre crescente", () => {
    const expected = sortNumbers(input)

    expect(expected).toEqual(output)
})