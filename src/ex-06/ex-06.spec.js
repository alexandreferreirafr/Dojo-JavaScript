import { sortBy } from './ex-06';

test("Tri du tableau par name", () => {
    const inputArray = [{name: 'Marine', age:29 }, {name: 'Pauline', age:39 }, {name: 'Cecile', age:21 }, {name: 'Angèle', age:49 }]
    const inputProp = 'name'
    const output = [{name: 'Angèle', age:49 }, {name: 'Cecile', age:21 }, {name: 'Marine', age:29 }, {name: 'Pauline', age:39 }]

    const expected = sortBy(inputArray, inputProp)

    expect(expected).toEqual(output)
})

test("Tri du tableau par age", () => {
    const inputArray = [{name: 'Marine', age:29 }, {name: 'Pauline', age:39 }, {name: 'Cecile', age:21 }, {name: 'Angèle', age:49 }]
    const inputProp = 'age'
    const output = [{name: 'Cecile', age:21 }, {name: 'Marine', age:29 }, {name: 'Pauline', age:39 }, {name: 'Angèle', age:49 }]

    const expected = sortBy(inputArray, inputProp)

    expect(expected).toEqual(output)
})

test("Le tableau d'origine n'est pas modifié", () => {
    const inputArray = [{name: 'Marine', age:29 }, {name: 'Pauline', age:39 }, {name: 'Cecile', age:21 }, {name: 'Angèle', age:49 }]
    const inputProp = 'age'

    const expected = [...inputArray]
    sortBy(inputArray, inputProp)

    expect(expected).toEqual(inputArray)
})
