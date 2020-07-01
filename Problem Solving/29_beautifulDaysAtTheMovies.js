const i = 20,
    j = 23,
    k = 6;

function beautifulDays(i, j, k) {
    const array = [];
    let diff = 0,
        beautifulNumbers = [];
    for (let n = i; n <= j; n++) {
        array.push(n);
    }
    for (const elem of array) {
        diff = Math.abs(elem - +elem.toString().split('').reverse().join(''));
        beautifulNumbers = diff % k === 0 ? beautifulNumbers.concat(elem) :beautifulNumbers;
    }
    return beautifulNumbers.length;
}

console.log(beautifulDays(i, j, k));
