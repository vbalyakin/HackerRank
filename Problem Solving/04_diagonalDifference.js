const arr = [
    [1,2,-3],
    [4,-5,6],
    [5,8,9]
];

console.log(arr[0].length);

function diagonalDifference(arr) {
    let first = 0;
    let second = 0;
    let c = arr[0].length;
    for (let i = 0; i < c; i++) {
        first += arr[i][i];
        second += arr[i][c - (i+1)];
    }
    return Math.abs(first - second);
}

console.log(diagonalDifference(arr));

