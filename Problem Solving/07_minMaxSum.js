const arr = [4, 2, 8, 10, 6];

function miniMaxSum(arr) {
    const minArray = arr,
        maxArray = arr;
    let min = minArray.slice().sort((a,b) => a - b).shift(),
        max = maxArray.slice().sort((a,b) => a - b).pop(),
        totalSum = arr.reduce((a,b) => a + b);
    let minSum = totalSum - min,
        maxSum = totalSum - max;
    console.log(`${maxSum} ${minSum}`);
}

miniMaxSum(arr);
