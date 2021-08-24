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

const getKeyFromMapWithValue = (value) => {
    let data = [...symbols].forEach(([key, val]) => val === value);
    return data
}


function RimNumberConvertor(number) {
    let numbers = rimNumberToArr(number);
    result = 0;

    for (let i = 0; i < length(numbers); i++) {

    }

}


module.exports.sum = sum;
module.exports.hello = hello;
module.exports.reverceNumber = reverceNumber;
module.exports.repeatSymbol = reapeatSymbolWithLimit
module.exports.rimNumberToArr = rimNumberToArr
module.exports.getKeyFromMapWithValue = getKeyFromMapWithValue