import { factorial } from './ex-03';

test("La factorielle de 1 est égal à 1", () => {
    const input = 1
    const output = 1

    const expected = factorial(input)

    expect(expected).toEqual(output)
})

test("La factorielle de 2 est égal à 2", () => {
    const input = 2
    const output = 2

    const expected = factorial(input)

    expect(expected).toEqual(output)
})

test("La factorielle de 3 est égal à 6", () => {
    const input = 3
    const output = 6

    const expected = factorial(input)

    expect(expected).toEqual(output)
})

test("La factorielle de 4 est égal à 24", () => {
    const input = 4
    const output = 24

    const expected = factorial(input)

    expect(expected).toEqual(output)
})

test("La factorielle de 5 est égal à 120", () => {
    const input = 5
    const output = 120

    const expected = factorial(input)

    expect(expected).toEqual(output)
})

test("La factorielle de 6 est égal à 720", () => {
    const input = 6
    const output = 720

    const expected = factorial(input)

    expect(expected).toEqual(output)
})

test("La factorielle de 7 est égal à 5040", () => {
    const input = 7
    const output = 5040


    const expected = factorial(input)

    expect(expected).toEqual(output)
})

test("La factorielle de 8 est égal à 40320", () => {
    const input = 8
    const output = 40320


    const expected = factorial(input)

    expect(expected).toEqual(output)
})

test("La factorielle de 9 est égal à 362880", () => {
    const input = 9
    const output = 362880


    const expected = factorial(input)

    expect(expected).toEqual(output)
})

test("La factorielle de 10 est égal à 3628800", () => {
    const input = 10
    const output = 3628800


    const expected = factorial(input)

    expect(expected).toEqual(output)
})