// даны два массива чисел. Найти количество чисел, которые делятся без остатка на все числа первого массива
// и при этом все числа второго массива могут делится на эти числа

// Sample Input:
// 2 3 - quantity of numbers in arrays
// 2 4 - first array
// 16 32 96 - second array

// Sample Output:
// 3 

// Explanation
// 2 and 4 divide evenly into 4, 8, 12 and 16.
// 4, 8 and 16 divide evenly into 16, 32, 96.
// 4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.

const a = [3, 4],
    b = [24, 48];
const maxNumber = Math.max.apply(null, b), // максимальное число из массива
    minNumber = Math.min.apply(null, b); // минимальное число из массива

function getTotalX(a, b) {
    const minOfB = Math.min.apply(null, b),
        upperBound = 100,
        factors = [],
        resultFactors = [];
    for (let i = 1; i <= upperBound; i++) { // проходимся по первому массиву
        let factor = 0;
        for (const item of a) {
            factor = i % item === 0 ? ++factor : factor;
        }
        factor = factor === a.length ? factors.push(i) : factor;
    }
    for (let i = 0; i < factors.length; i++) { // проходимся по второму массиву
        let value = 0;
        for (const item of b) {
            value = (item % factors[i] === 0) && (factors[i] <= minOfB) ? ++value : value;
        }
        value = value === b.length ? resultFactors.push(factors[i]) : value;
    }
    return Array.from(new Set(resultFactors)).length; // убираем повторения, создаём массив и узнаём его длину (количество подходящих нам чисел)
}

console.log(getTotalX(a, b));
