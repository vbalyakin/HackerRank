const array = [1, -2, 3, 0, -4, 5, 6];

function plusMinus(arr) {
    let positive = 0,
        negative = 0,
        zero = 0;
    for (let elem of arr) {
        positive = elem > 0 ? ++positive : positive;
        negative = elem < 0 ? ++negative : negative;
        zero = elem === 0 ? ++zero : zero;
    }
    console.log((positive/arr.length).toFixed(6));
    console.log((negative/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
}

plusMinus(array);