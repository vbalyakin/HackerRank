// s: a string to repeat
// n: the number of characters to consider

let str = 'aba',
    n = 10,
    str2 = 'a',
    n2 = 1000000000000;

function repeatedStringFirst(s, n) { // решение не работает на больших массивах (длиной более 4 млрд)
    let counter = 0,
        newStr = [],
        repeater = Math.floor(n / s.length),
        part = n - s.length * repeater;
    for (let i = 1; i <= repeater; i++) {
        newStr.push(s);
    }
    newStr = newStr.join('').concat(s.substring(0, part));
    counter = newStr.match(/a/g).length;
    return counter;
}

function repeatedStringSecond(s, n) { // решение не работает на больших массивах (длиной более 4 млрд)
    let counter = 0,
        max = 400000000,
        newStr = [],
        array = [],
        repeater = Math.floor(n / s.length),
        part = n - s.length * repeater;
    for (let i = 1; i <= repeater; i++) {
        newStr.push(s);
        if (newStr.length > max) {
            array.push(newStr);
            newStr = [];
        }
    }
    newStr = newStr.join('').concat(s.substring(0, part)).split('');
    array.push(newStr);
    for (const elem of array) {
        counter += elem.join('').match(/a/g).length;
    }
    return counter;
}

console.log(repeatedString(str2, n2));
