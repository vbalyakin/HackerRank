// The first line contains an integer, t , denoting the number of test cases.
// The next t lines each contain 3 space-separated integers:
// - n: the number of prisoners
// - m: the number of sweets
// - s: the chair number to start passing out treats at

let n = 7,
    m = 19,
    s = 2,
    n1 = 3,
    m1 = 7,
    s1 = 3,
    n2 = 5,
    m2 = 2,
    s2 = 2;

function saveThePrisoner(n, m, s) {
    const array = [];
    let result = 0;

    if (m > n) {
        for (let i = 1, j = s; i <= m; i++, j++){
            j = j > n ? 1 : j;
            array.push(j);
        }
        result = array[array.length-1];
    }
    if (m < n) {
        result = s - 1 + m;
    }
    return result;
}

// console.log(Math.abs(m - Math.floor((m - s + 1) / n) * n));
// console.log(Math.abs(m1 - Math.floor((m1 - s1 + 1) / n1) * n1));
console.log(saveThePrisoner(n2,m2,s2));
