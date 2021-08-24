function sum(a, b) {
    return a + b;
}

function hello() {
    return 'hello world';
}

function reverceNumber(number) {
    let result = Math.abs(number).toString().split('').reverse().join('');
    if (number > 0) {
        return Number(result);
    }
    return Number(result) * (-1);
}


function reapeatSymbolWithLimit(symbol, limit, spreat = ' ') {
    let result = '';

    for (let i = 0; i < limit; i++) {
        result += (limit != i + 1) ? symbol + spreat : symbol
    }

    return result;
}

const symbols = new Map([
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1]
]);

const rimNumberToArr = number => number.split('');

function RimNumberConvertor(number) {
    let numbers = rimNumberToArr(number);
    result = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (symbols.get(numbers[i]) < symbols.get(numbers[i + 1])) {
            result += Number(symbols.get(numbers[i + 1]) - symbols.get(numbers[i]))
            i++
        } else {
            result += symbols.get(numbers[i])
        }
    }

    return result

}


module.exports.sum = sum;
module.exports.hello = hello;
module.exports.reverceNumber = reverceNumber;
module.exports.repeatSymbol = reapeatSymbolWithLimit
module.exports.rimNumberToArr = rimNumberToArr
module.exports.getKeyFromMapWithValue = RimNumberConvertor