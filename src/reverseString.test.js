import {reverseString} from "./reverseString";

test("hello => olleh", () => {
    expect(reverseString("hello")).toBe("olleh")
})

test(" ' ' => ' ' ", () => {
    expect(reverseString(" ")).toBe(" ")
})

test(" 'a' => 'a' ", () => {
    expect(reverseString("a")).toBe("a")
})

test(" palindrome ", () => {
    expect(reverseString("madam")).toBe("madam")
})

test("string with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh")
})

test("error with data Type other than string", () => {
    expect(reverseString(1234)).toBe("wrong data type")
})