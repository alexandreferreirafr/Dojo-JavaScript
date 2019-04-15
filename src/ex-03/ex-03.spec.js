import { factorial } from './ex-03';

test("La fonction renvoie le bonne factorielle de 1 à 10", () => {
    const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const outputs = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800]

    inputs.forEach(async (item, index) => {
        const expected = await factorial(item)

        expect(expected).toEqual(outputs[index])
    })
})
