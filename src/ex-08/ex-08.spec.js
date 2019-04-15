import { comparator } from './ex-08';

test("comare école et extérieur", () => {
    const a = 'école';
    const b = 'extérieur'
    const output = -1

    const expected = comparator(a,b)

    expect(expected).toEqual(output)
})

test("comare école et eau", () => {
    const a = 'école';
    const b = 'eau'
    const output = 1

    const expected = comparator(a,b)

    expect(expected).toEqual(output)
})

test("comare école et école", () => {
    const a = 'école';
    const b = 'école'
    const output = 0

    const expected = comparator(a,b)

    expect(expected).toEqual(output)
})

