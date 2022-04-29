import { StringCalculator } from "../js/StringCalculator"

describe("StringCalculator class tests", () => {
    let calculator;
    beforeAll( () => {
        calculator = new StringCalculator()
    })

    test('add("") -> 0', () => {
        expect(calculator.add("") ).toBe(0);
    })

    test('add("1") -> 1', () => {
        expect(calculator.add("1") ).toBe(1);
    })

    test('add("1,2") -> 3', () => {
        expect(calculator.add("1,2") ).toBe(3);
    })

    test('add("1,2,3,4,5") -> 15', () => {
        expect(calculator.add("1,2,3,4,5") ).toBe(15);
    })

    test('add("10\n12,11\n23") ->56', () => {
        expect(calculator.add("10\n12,11\n23") ).toBe(56);
    })
       

    test ('add("//;\n1;2") -> 3', () =>{
        expect(calculator.add("//;\n1;2")).toBe(3)
    })

    test ('add("//;\n-1;-2") -> 3', () =>{
        expect(() => calculator.add("//;\n-1;-2")).toThrow(`Negatives not allowed. [-1]`)
    })

    test ('add("-1,-2") -> 3', () =>{
        expect(() => calculator.add("-1,-2")).toThrow(`Negatives not allowed. [-1]`)
    })

    test("add('1\n2,1002') -> 3", () => {
        expect(calculator.add('1\n2,1002')).toBe(3)
    })

    test("add('//,\n1,2,1002') -> 3", () => {
        expect(calculator.add('1\n2,1002')).toBe(3)
    })

    test('add("//[***]\n1***2***3") -> 6', () => {
        expect(calculator.add("//[***]\n1***2***3")).toBe(6)
    })

    test('add("//[*][%]\n1*2%3") -> 6', () => {
        expect(calculator.add("//[*][%]\n1*2%3")).toBe(6)
    })

    test('add("//[**][%%]\n1**2%%3") -> 6', () => {
        expect(calculator.add("//[**][%%]\n1**2%%3")).toBe(6)
    })

    test('add("//[**][%%]\n1*2%3") -> 123', () => {
        expect(calculator.add("//[**][%%]\n1*2%3")).toBe(0)
    })

})

