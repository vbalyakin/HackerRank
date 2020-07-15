let n = 24,
    n1 = 1012;

function findDigits(n) {
    let array = n.toString().split(''),
        counter = 0;
    for (const num of array) {
        if (num !== 0 && n % +num === 0) {
            counter++;
        }
    }
    return counter;
}

console.log(findDigits(n));