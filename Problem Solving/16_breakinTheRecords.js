// дан массив чисел - это очки, которые игрок получет за каждую игру. Необходимо подсчитать, сколько
// раз обновлялся минимум и максимум зарабатываемых за игру очков и вывести это как массив двух чисел (первое - сколько
// раз обновлялся максимум, второе - сколько раз обновлялся минимум)

let array = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
    let max = scores[0],
        maxCounter = 0,
        min = scores[0],
        minCounter = 0,
        result = [];
    for (const value of scores) {
        if (value > max) {
            ++maxCounter;
            max = value;
        } else if (value < min) {
            ++minCounter;
            min = value;
        }
        // maxCounter = value > max ? ++maxCounter && (max = value) : maxCounter;
        // minCounter = value < min ? ++minCounter && (min = value) : minCounter;
    }
    result.push(maxCounter);
    result.push(minCounter);
    return result;
}

console.log(breakingRecords(array));
