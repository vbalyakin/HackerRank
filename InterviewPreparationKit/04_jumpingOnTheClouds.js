const arr = [0, 0, 1, 0, 0, 1, 0],
    arr2 = [0, 0, 0, 0, 1, 0],
    arr3 = [0, 0, 0, 1, 0, 0],
    num2 = 7;
let str = '0010010',
    str2 = '0,0,1,0,0,1,0';

// console.log(arr.join('')); // 0010010
// console.log(str.split('')); // [0, 0, 1, 0, 0, 1, 0]

// дан массив чисел - "прыгаем" с нулевого элемента и только по "0" (по "1" нельзя)
// Прыгать можем на 1 элемент вперёд или через 1 элемент вперёд
// Рассчитать минимальное необходимое количество прыжков, чтобы допрыгать до конца

// c: an array of binary integers
function jumpingOnClouds(c) {
    let counter = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i + 1] !== 1 && (c[i + 2] !== 1 && i + 2 <= c.length)) {
            counter++;
            i++;
        } else if (c[i + 1] !== 1 && c[i + 2] === 1) {
            counter++;
        } else if (c[i + 1] === 1) {
            counter++;
            i++;
        }
    }
    return counter;
}

console.log(jumpingOnClouds(arr3));
