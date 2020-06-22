const array = [
        [5, 3, 4],
        [1, 5, 8],
        [6, 4, 2]
    ],
    array2 = [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 5]
    ],
    array3 = [
        [4, 8, 2],
        [4, 5, 7],
        [6, 1, 6]
    ],
    array4 = [
        [2, 2, 7],
        [8, 6, 4],
        [1, 2, 9]
    ];

function formingMagicSquare(s) {
    let res = 120,
        sum = 0;
    let sum1 = s[0][0] + s[1][1] + s[2][2],
        sum2 = s[2][0] + s[1][1] + s[0][2],
        sum3 = s[0][0] + s[0][1] + s[0][2],
        sum4 = s[1][0] + s[1][1] + s[1][2],
        sum5 = s[2][0] + s[2][1] + s[2][2],
        sum6 = s[0][0] + s[1][0] + s[2][0],
        sum7 = s[0][1] + s[1][1] + s[2][1],
        sum8 = s[0][2] + s[1][2] + s[2][2];
    console.log(sum1, sum2, sum3, sum4, sum5, sum6, sum7, sum8);
    console.log((sum1+sum2+sum3+sum4+sum5+sum6+sum7+sum8)/8);
    // sum += 2 * (s[0][1] + s[1][0] + s[1][2] + s[2][1]) + 3 * (s[0][0] + s[0][2] + s[2][0] + s[2][2]) + 4 * s[1][1];
    // return sum;
}

//console.log(formingMagicSquare(array2));
formingMagicSquare(array4);
