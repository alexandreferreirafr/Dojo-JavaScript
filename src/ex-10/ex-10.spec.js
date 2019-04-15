import { objectToQueryString } from './ex-10';

test("Transformer object dans une query string", () => {
    const input = {
        marqueSelect: "BMW",
        modeleSelect: "318",
        possession_vehicule: "Oui"
    }
    const output = "?marqueSelect=BMW&modeleSelect=318&possession_vehicule=Oui"

    const expected = objectToQueryString(input)

    expect(expected).toEqual(output)
})

test("Ignore les valeurs nulls", () => {
    const input = {
        marqueSelect: "BMW",
        modeleSelect: "318",
        possession_vehicule: "Oui",
        imat: null
    }
    const output = "?marqueSelect=BMW&modeleSelect=318&possession_vehicule=Oui"

    const expected = objectToQueryString(input)

    expect(expected).toEqual(output)
})

test("Ignore les valeurs strings vides", () => {
    const input = {
        marqueSelect: "BMW",
        modeleSelect: "318",
        possession_vehicule: "Oui",
        newCar: ""
    }
    const output = "?marqueSelect=BMW&modeleSelect=318&possession_vehicule=Oui"

    const expected = objectToQueryString(input)

    expect(expected).toEqual(output)
})