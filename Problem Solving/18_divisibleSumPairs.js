// n: the integer length of array 
// ar: an array of integers
// k: the integer to divide the pair sum by

let nn = 6,
    kk = 3,
    arar = [1, 3, 2, 6, 1, 2];

function divisibleSumPairs(n, k, ar) {
    let counter = 0;
    for (let startPoint = 0; startPoint < n - 1; startPoint++) {
        for (let i = startPoint + 1; i < n; i++) {
            counter = (ar[startPoint] + ar[i]) % k === 0 ? ++counter : counter;
        }
    }
    return counter;
}

console.log(divisibleSumPairs(nn, kk, arar));
