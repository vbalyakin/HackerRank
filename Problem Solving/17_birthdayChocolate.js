// девочка делит шоколадку, состоящую из сегментов, которые представляют числа массива S. Надо подсчитать, сколько есть
// комбинаций, при которых последовательное количество M сегментов даст в сумме число D
// s - array with numbers
// d - sum of numbers
// m - how many segments should be involved

const ss = [1, 2, 1, 3, 2],
    dd = 3,
    mm = 2;

function birthday(s, d, m) {
    let combination = 0;
    for (let startPoint = 0; startPoint <= s.length - m; startPoint++) {
        let sum = 0,
            endPoint = startPoint + m;
        for (let i = startPoint; i < endPoint; i++) {
            sum += s[i];
        }
        combination = sum === d ? ++combination : combination;
    }
    return combination;
}

console.log(birthday(ss, dd, mm));
