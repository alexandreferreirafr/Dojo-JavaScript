import { countSpaces } from './ex-05';

test("'The String global object is a constructor for strings or a sequence of characters.' a 13 espaces", () => {
    const input = "The String global object is a constructor for strings or a sequence of characters."
    const output = 13

    const expected = countSpaces(input)

    expect(output).toEqual(expected)
})

