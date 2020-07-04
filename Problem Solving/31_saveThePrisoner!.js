// The first line contains an integer, t , denoting the number of test cases.
// The next t lines each contain 3 space-separated integers:
// - n: the number of prisoners
// - m: the number of sweets
// - s: the chair number to start passing out treats at

let n = 7,
    m = 19,
    s = 2, // 6
    n1 = 3,
    m1 = 7,
    s1 = 3, // 3 
    n2 = 5,
    m2 = 2,
    s2 = 2, // 3
    n3 = 144,
    m3 = 797951344,
    s3 = 1, // 112
    n4 = 999999998,
    m4 = 199360437,
    s4 = 1, // 199360437
    n5 = 457,
    m5 = 359999921,
    s5 = 457; // 455     

function saveThePrisoner(n, m, s) { // partly works
    let result = 0,
        candy = m,
        prisoners = n,
        startPoint = s;
    if (candy > prisoners + startPoint - 1) {
        let multiplier = Math.floor(candy / prisoners);
        result = candy - multiplier * prisoners + (startPoint - 1);
    }
    if (candy + startPoint - 1 <= prisoners) {
        result = startPoint - 1 + candy;
    }
    return result;
}

function saveThePrisoner3(n, m, s) { // partly works
    let result = m > n + s - 1 ? m - Math.floor(m / n) * n + (s - 1) : m + s - 1 <= n ? s - 1 + m : -1;
    return result;
}

function saveThePrisoner4(n, m, s) { // DONE all test cases!
    let res = m % n;
    if ((res + s - 1) % n === 0) {
        return n;
    } else {
        return ((res + s - 1) % n);
    }
}

console.log(saveThePrisoner3(n3, m3, s3));
console.log(saveThePrisoner4(n5, m5, s5));
