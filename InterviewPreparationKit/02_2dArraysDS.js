const array = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
],
    array2 = [
    [0, -4, -6, 0, -7, -6],
    [-1, -2, -6, -8, -3, -1],
    [-8, -4, -2, -8, -8, -6],
    [-3, -1, -2, -5, -7, -4],
    [-3, -5, -3, -6, -6, -6],
    [-3, -6, 0, -8, -6, -7]
];

function hourglassSum(arr) {
    let sum = 0,
        totalSum = -100;
    for (let j = 0; j <= 3; j++) {
        for (let i = 0; i <= 3; i++) {
            let first = arr[j][i] + arr[j][i + 1] + arr[j][i + 2],
                second = arr[j + 1][i + 1],
                third = arr[j + 2][i] + arr[j + 2][i + 1] + arr[j + 2][i + 2];
            sum = first + second + third;
            totalSum = sum > totalSum ? sum : totalSum;
        }
    }
    return totalSum;
}

console.log(hourglassSum(array2));
