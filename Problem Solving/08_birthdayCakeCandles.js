const ar = [10, 8, 4, 10, 4, 5];

function birthdayCakeCandles(ar) {
    let maxNumber = Math.max.apply(null, ar),
        countOfCandles = 0;
    for (const elem of ar) {
        countOfCandles = elem === maxNumber ? ++countOfCandles : countOfCandles;        
    }
    // console.log(countOfCandles);
    return countOfCandles;
}

birthdayCakeCandles(ar);
