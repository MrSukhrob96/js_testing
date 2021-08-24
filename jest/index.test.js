const {
    sum,
    hello,
    reverceNumber,
    repeatSymbol,
    rimNumberToArr,
    getKeyFromMapWithValue
} = require("./index.js");


describe('Testng homeworks 4 && 5 execize in js', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('hello world', () => {
        expect(hello()).toBe('hello world');
    });

    test("reverce number -1996", () => {
        expect(reverceNumber(1996)).toEqual(6991)
    })

    test("repeat symbol with limit", () => {
        expect(repeatSymbol('M', 4, '-')).toBe('M-M-M-M');
    })

    test("rim number to array", () => {
        expect(rimNumberToArr("XVI")).toEqual(["X", "V", "I"])
    })

    test("get map key by value", ()=>{
        expect(getKeyFromMapWithValue("XVI")).toEqual(16)
    })

    test("get map key by value", ()=>{
        expect(getKeyFromMapWithValue("XIV")).toEqual(14)
    })

    test("get map key by value", ()=>{
        expect(getKeyFromMapWithValue("IXX")).toEqual(19)
    })

    test("get map key by value 9", ()=>{
        expect(getKeyFromMapWithValue("IX")).toEqual(9)
    })

    test("get map key by value 1996", ()=>{
        expect(getKeyFromMapWithValue("MCMXCVI")).toEqual(1996)
    })
})