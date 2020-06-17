// дан массив с потворяющимися числами от 1 до 5, подсчитать, какие из них встречаются чаще и вывести его
// если два числа имеют одинаковое количество повторений, то вывести то из них, которое меньше

const array = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

function migratoryBirds(arr) {
    const valuesArray = [[], [], [], [], []],
        resultArray = [];
    for (const item of arr) {
        switch (item) {
            case 1:
                valuesArray[0].push(item);
                break;
            case 2:
                valuesArray[1].push(item);
                break;
            case 3:
                valuesArray[2].push(item);
                break;
            case 4:
                valuesArray[3].push(item);
                break;
            case 5:
                valuesArray[4].push(item);
                break;
            default:
                break;
        }      
    }
    for (const array of valuesArray) {
        resultArray.push(array.length);
    }
    // console.log(valuesArray);
    // console.log(resultArray);
    // console.log(resultArray.indexOf(Math.max.apply(null, resultArray)) + 1);
    return resultArray.indexOf(Math.max.apply(null, resultArray)) + 1;
}

migratoryBirds(array);
