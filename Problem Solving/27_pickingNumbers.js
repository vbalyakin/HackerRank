// The first line contains a single integer n, the size of the array a.
// The second line contains n space-separated integers a[i].

// 10 from 10 cases DONE!

const a = [4, 6, 5, 3, 3, 1],
    a2 = [9, 6, 13, 16, 5, 18, 4, 10, 3, 19, 4, 5, 8, 1, 13, 10, 20, 17, 15, 10, 6, 10, 13, 20, 18, 17, 7, 10, 6, 5, 16, 18, 13, 20, 19, 7, 16, 13, 20, 17, 4, 17, 8, 19, 12, 7, 17, 1, 18, 3, 16, 4, 5, 3, 15, 17, 6, 17, 14, 11, 11, 7, 11, 6, 15, 15, 12, 6, 17, 19, 8, 6, 13, 9, 10, 19, 14, 18, 7, 9, 11, 16, 11, 20, 4, 20, 10, 7, 8, 4, 2, 12, 11, 8, 12, 13, 19, 8, 8, 5], // 13
    str = '14 18 17 10 9 20 4 13 19 19 8 15 15 17 6 5 15 12 18 2 18 7 20 8 2 8 11 2 16 2 12 9 3 6 9 9 13 7 4 6 19 7 2 4 3 4 14 3 4 9 17 9 4 20 10 16 12 1 16 4 15 15 9 13 6 3 8 4 7 14 16 18 20 11 20 14 20 12 15 4 5 10 10 20 11 18 5 20 13 4 18 1 14 3 20 19 14 2 5 13', // 15
    a3 = str.replace(/\s+/g, ',').split(',').map(elem => +elem); // convert string to array with numbers

function pickingNumbers(a) {
    let arrayValues = [],
        c = [],
        c2 = [];
    const arr = a.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        c = [];
        c2 = [];
        for (const item of arr) {
            c = (item === elem || item - elem === 1) ? c.concat(item) : c;
            c2 = (item === elem || item - elem === -1) ? c2.concat(item) : c2;
        }
        arrayValues.push(c.length);
        arrayValues.push(c2.length);
    }
    arrayValues.sort((a, b) => a - b);
    return arrayValues[arrayValues.length - 1];
}

console.log(pickingNumbers(a));