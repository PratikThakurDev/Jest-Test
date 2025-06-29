import { cipher } from "./cipher";

test("xyz => abc", ()=>{
    expect(cipher('xyz',3)).toBe('abc')
})

test("HeLLo => KhOOr", ()=>{
    expect(cipher('HeLLo',3)).toBe('KhOOr')
})

test("Hello, World! => Khoor, Zruog!", ()=>{
    expect(cipher('Hello, World!',3)).toBe('Khoor, Zruog!')
})