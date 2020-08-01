// Karl has an array of integers.He wants to reduce the array until all 
// remaining elements are equal.Determine the minimum number of elements 
// to delete to reach his goal.

// For example,
// if his array is arr = [1,2,2,3], we see that he can delete the 2 elements 1 and 3 leaving arr = [2,2].
// He could also delete both twos and either 1 the or the 3, but that would 
// take 3 deletions.The minimum number of deletions is 2.

// Output Format
// Print a single integer that denotes the minimum number of elements Karl must delete for all elements 
// in the array to be equal.

const arr = [3, 3, 2, 1, 3, 4, 4],
    arr2 = [1],
    arr3 = [2, 2, 2, 2, 2];

function equalizeArray(arr) {
    let collector = [],
        arrays = [],
        length = arr.length,
        lengthOfSet = Array.from(new Set(arr)).length;
    arr.sort((a, b) => a - b);
    if (length === 1 || lengthOfSet === 1) {
        return 0;
    } else if (length && lengthOfSet !== 1) {
        collector.push(arr[0]);
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === collector[collector.length - 1]) {
                collector.push(arr[i]);
                if (i === arr.length - 1) {
                    arrays.push(collector);
                }
            } else {
                arrays.push(collector);
                collector = [arr[i]];
            }
        }
        arrays.sort((a, b) => a.length - b.length);
        return arr.length - arrays[arrays.length - 1].length;
    }
}

console.log(equalizeArray(arr));
