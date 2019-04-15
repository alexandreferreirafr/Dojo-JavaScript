import { palindrome } from './ex-07';

test("Esope reste ici et se repose teste true", () => {
    const input = "Esope reste ici et se repose"

    const expected = palindrome(input)

    expect(expected).toBe(true)
})

test("La mariee ira mal teste true", () => {
    const input = "La mariee ira mal"

    const expected = palindrome(input)

    expect(expected).toBe(true)
})

test("Non teste true", () => {
    const input = "Non"

    const expected = palindrome(input)

    expect(expected).toBe(true)
})

test("Oui teste true", () => {
    const input = "Oui"

    const expected = palindrome(input)

    expect(expected).not.toBe(true)
})