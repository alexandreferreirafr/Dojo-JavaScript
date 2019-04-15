import { queryStringToObject } from './ex-09';

test("Test query string avec ?", () => {
    const input = "?marqueSelect=BMW&modeleSelect=318&possession_vehicule=Oui"
    const output = {
        marqueSelect: "BMW",
        modeleSelect: "318",
        possession_vehicule: "Oui"
    }

    const expected = queryStringToObject(input)

    expect(expected).toEqual(output)
})

test("Test query string sans ?", () => {
    const input = "marqueSelect=BMW&modeleSelect=318&possession_vehicule=Oui"
    const output = {
        marqueSelect: "BMW",
        modeleSelect: "318",
        possession_vehicule: "Oui"
    }

    const expected = queryStringToObject(input)

    expect(expected).toEqual(output)
})

