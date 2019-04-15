import { nextLaborDay } from './ex-04';

test("Je passe le 10 avril 2019 en entrée la fonction retourne le 11 avril 2019", () => {
    const input = new Date('04/10/2019')
    const output = new Date('04/11/2019')

    const expected = nextLaborDay(input)

    expect(expected).toEqual(output)
})

test("Je passe le 12 avril 2019 en entrée la fonction retourne le 15 avril 2019", () => {
    const input = new Date('04/12/2019')
    const output = new Date('04/15/2019')

    const expected = nextLaborDay(input)

    expect(expected).toEqual(output)
})

test("Je passe le 13 avril 2019 en entrée la fonction retourne le 15 avril 2019", () => {
    const input = new Date('04/13/2019')
    const output = new Date('04/15/2019')

    const expected = nextLaborDay(input)

    expect(expected).toEqual(output)
})

test("La date d'entrée n'a pas été mutée", () => {
    const input = new Date('04/10/2019')
    nextLaborDay(input)

    const expected = new Date('04/10/2019')
    expect(expected).toEqual(input)

})


